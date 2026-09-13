/**
 * Prints the Breed Finder facet coverage table.
 *
 *   node scripts/breed-facet-coverage.mjs
 *   node scripts/breed-facet-coverage.mjs --check   # fail if a shipped facet degrades
 *
 * The table is the evidence behind which filters the Finder offers. `--check`
 * is the part worth wiring into review: it fails when a facet that the UI
 * currently exposes has dropped below its tier, which is what happens when a
 * batch of breeds is added without the data the existing filters assume.
 *
 * Reads the registry only — no network.
 */
import fs from "node:fs";
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

register("./lib/ts-resolve-hooks.mjs", import.meta.url);

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const lib = (p) => pathToFileURL(path.join(REPO_ROOT, "src/lib", p)).href;

const { allFacetCoverage } = await import(lib("pet-intelligence/facets.ts"));
const { BREEDS } = await import(lib("pet-intelligence/index.ts"));

const rows = allFacetCoverage();
const checkOnly = process.argv.includes("--check");

const dogs = BREEDS.filter((b) => b.species === "dog").length;
const cats = BREEDS.filter((b) => b.species === "cat").length;
console.log(`\nbreed registry: ${BREEDS.length} breeds (${dogs} dog, ${cats} cat)\n`);

const header = ["species", "facet", "coverage", "n", "values", "tier"];
const widths = [7, 16, 9, 8, 6, 9];
console.log(header.map((h, i) => h.padEnd(widths[i])).join(""));
console.log("-".repeat(widths.reduce((a, b) => a + b, 0) + 30));

for (const row of rows) {
  const cells = [
    row.species,
    row.id,
    `${(row.coverage * 100).toFixed(0)}%`,
    `${row.covered}/${row.total}`,
    String(row.distinctValues),
    row.tier,
  ];
  const values = row.values.map((v) => `${v.value}:${v.count}`).join(" ");
  console.log(cells.map((c, i) => c.padEnd(widths[i])).join("") + values);
}

console.log("\nWithheld facets and why:\n");
for (const row of rows.filter((r) => r.tier === "internal")) {
  console.log(`  ${row.species} ${row.id}`);
  console.log(`      ${row.note}`);
}

if (checkOnly) {
  /*
   * Compares the live table against a COMMITTED BASELINE.
   *
   * The first version of this asked for facets where `tier === "partial" &&
   * coverage < 0.5` — which `tierFor` makes unsatisfiable, since a facet is
   * only ever "partial" AT OR ABOVE 0.5. An adversarial review enumerated all
   * 110,011 input pairs and found zero that satisfy it, then proved the
   * consequence: raising the thresholds until three dog filters vanished from
   * the UI entirely still printed "no shipped facet has degraded" and exited 0.
   *
   * A tier change cannot be detected without knowing the previous tier, so the
   * baseline is a committed file. `--update` rewrites it deliberately.
   */
  const baselinePath = path.join(REPO_ROOT, "docs/pet-intelligence/facet-baseline.json");
  const current = Object.fromEntries(rows.map((r) => [`${r.species}:${r.id}`, r.tier]));

  if (process.argv.includes("--update")) {
    fs.writeFileSync(baselinePath, `${JSON.stringify(current, null, 2)}\n`);
    console.log(`\nbaseline written: ${path.relative(REPO_ROOT, baselinePath)}`);
    process.exit(0);
  }

  if (!fs.existsSync(baselinePath)) {
    console.error(`\nno facet baseline at ${path.relative(REPO_ROOT, baselinePath)}`);
    console.error("run `npm run breeds:facets:check -- --update` to record one.");
    process.exit(1);
  }

  const baseline = JSON.parse(fs.readFileSync(baselinePath, "utf8"));
  const RANK = { internal: 0, partial: 1, primary: 2 };
  const regressions = [];
  const additions = [];
  for (const [key, tier] of Object.entries(current)) {
    const was = baseline[key];
    if (was === undefined) {
      additions.push(`${key} (new facet, now ${tier})`);
    } else if (RANK[tier] < RANK[was]) {
      regressions.push(`${key}: ${was} -> ${tier}`);
    }
  }
  for (const key of Object.keys(baseline)) {
    if (!(key in current)) regressions.push(`${key}: ${baseline[key]} -> gone`);
  }

  if (regressions.length > 0) {
    console.error("\nfacets have DEGRADED since the recorded baseline:");
    for (const r of regressions) console.error(`  ${r}`);
    console.error(
      "\nA filter the UI offers is a promise about the data behind it. Either restore\n" +
        "the coverage, or accept the change with `npm run breeds:facets:check -- --update`\n" +
        "and say in the commit why the filter is being withdrawn.",
    );
    process.exit(1);
  }
  if (additions.length > 0) {
    console.log("\nnew facets since the baseline (not a failure):");
    for (const a of additions) console.log(`  ${a}`);
  }
  console.log("\nno facet has degraded below its recorded tier.");
}
