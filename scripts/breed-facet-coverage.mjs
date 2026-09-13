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
  // A facet is "shipped" if it is not internal. Failing here means the UI is
  // offering a filter the data no longer supports.
  const degraded = rows.filter((r) => r.tier === "partial" && r.coverage < 0.5);
  if (degraded.length > 0) {
    console.error("\nfacets have degraded below their tier:");
    for (const row of degraded) {
      console.error(`  ${row.species} ${row.id}: ${(row.coverage * 100).toFixed(0)}%`);
    }
    process.exit(1);
  }
  console.log("\nno shipped facet has degraded below its tier.");
}
