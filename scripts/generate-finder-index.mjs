/**
 * Generates public/animal-finder-index.json from the site's own registries and
 * from the /animals route directories.
 *
 * Wired into `npm run build` (via `prebuild`), so the index can never be older
 * than the profiles it describes. The committed copy exists so `next dev` and
 * preview deployments work without a manual step, and so the index — including
 * every facet count and every coverage measurement — is reviewable in a diff
 * like any other artifact.
 *
 *   node scripts/generate-finder-index.mjs           # write the index
 *   node scripts/generate-finder-index.mjs --check   # fail if it is stale
 *   node scripts/generate-finder-index.mjs --audit   # print the coverage table
 *
 * All modes run full validation and exit non-zero on any issue.
 */
import fs from "node:fs";
import path from "node:path";
import { register } from "node:module";

// Must be registered before the builder imports any app module: it is what
// makes the "@/" alias and extensionless relative imports resolve under Node.
register("./lib/ts-resolve-hooks.mjs", import.meta.url);

const {
  buildFinderIndex,
  validateFinderIndex,
  assertNoFinderBacklogLeakage,
  assertConservationJoin,
  REPO_ROOT,
} = await import("./lib/build-finder-index.mjs");

const OUTPUT = path.join(REPO_ROOT, "public/animal-finder-index.json");
const checkOnly = process.argv.includes("--check");
const audit = process.argv.includes("--audit");

/** Day-granular, for the same reason the search index is: a timestamp would
 * make every regeneration produce a different file and turn the staleness
 * check into noise. */
const generatedAt = (process.env.SOURCE_DATE ?? new Date().toISOString()).slice(0, 10);

const { payload, axes, conservationRecords } = await buildFinderIndex({ generatedAt });

const issues = [
  ...validateFinderIndex(payload),
  ...assertConservationJoin(conservationRecords, payload),
  ...(await assertNoFinderBacklogLeakage(payload)),
];

if (issues.length > 0) {
  console.error(`\nanimal finder index: ${issues.length} validation issue(s)\n`);
  for (const issue of issues.slice(0, 50)) console.error(`  ${issue.id}: ${issue.issue}`);
  if (issues.length > 50) console.error(`  … and ${issues.length - 50} more`);
  process.exit(1);
}

if (audit) {
  const exposed = new Set(payload.facets.map((facet) => facet.id));
  const pad = (text, width) => String(text).padEnd(width);
  console.log(`\nAnimal Finder — facet coverage over ${payload.documents.length} animal profiles\n`);
  console.log(
    `  ${pad("axis", 22)}${pad("coverage", 18)}${pad("distinct", 10)}verdict`,
  );
  console.log(`  ${"-".repeat(62)}`);
  for (const axis of axes) {
    const share = ((axis.covered / axis.total) * 100).toFixed(1);
    console.log(
      `  ${pad(axis.id, 22)}${pad(`${axis.covered}/${axis.total} (${share}%)`, 18)}` +
        `${pad(axis.distinctValues, 10)}${exposed.has(axis.id) ? "EXPOSED" : "excluded"}`,
    );
  }
  console.log("");
}

const serialized = `${JSON.stringify(payload, null, 0)}\n`;

if (checkOnly) {
  const existing = fs.existsSync(OUTPUT) ? fs.readFileSync(OUTPUT, "utf8") : "";
  // Compare everything except generatedAt: the date legitimately differs
  // between the day the index was committed and the day the check runs.
  if (stripGeneratedAt(existing) !== stripGeneratedAt(serialized)) {
    console.error(
      "animal finder index: public/animal-finder-index.json is stale.\n" +
        "Run `npm run finder:index` and commit the result.",
    );
    process.exit(1);
  }
  console.log(`animal finder index: up to date (${payload.documents.length} animals)`);
} else {
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, serialized);
  const bytes = Buffer.byteLength(serialized);
  console.log(
    `animal finder index: ${payload.documents.length} animals, ` +
      `${payload.facets.length} facets (${payload.facets.map((f) => f.id).join(", ")}), ` +
      `${payload.excludedFacets.length} axes measured and excluded, ` +
      `${(bytes / 1024).toFixed(1)} KB raw`,
  );
}

function stripGeneratedAt(text) {
  return text.replace(/"generatedAt":"[^"]*"/, '"generatedAt":""');
}
