/**
 * Generates the breed registry index modules from the per-breed data files.
 *
 *   node scripts/generate-breed-index.mjs          # write the indexes
 *   node scripts/generate-breed-index.mjs --check  # fail if they are stale
 *
 * WHY A GENERATED INDEX. Breed records live one-per-file under
 * `src/lib/pet-intelligence/breeds/{dogs,cats}/`, because a single module does
 * not survive this corpus: at ~97 lines per breed the old `dogs.ts` would have
 * reached roughly 29,000 lines by 300 breeds, making every data edit a
 * merge-conflict candidate and every diff unreviewable.
 *
 * Bundlers cannot enumerate a directory at build time, so the index has to be
 * written out. That creates exactly the hazard this repo has been bitten by
 * before — a hand-maintained list that silently drifts from the thing it
 * describes, which is how 62 animal profiles once vanished from the sitemap
 * while building and rendering perfectly.
 *
 * So the index is GENERATED, checked in, regenerated before every build, and
 * guarded three ways:
 *
 *   - `--check` fails the build when the committed index is stale
 *   - it refuses to write when the data itself is inconsistent (duplicate id or
 *     slug, filename not matching the record's slug, wrong species directory)
 *   - `tests/pet-intelligence-shards.test.ts` asserts the index and the
 *     directory describe the same set, so a data file that is never imported is
 *     a test failure rather than an invisible orphan
 *
 * The generator reads the files as TEXT rather than importing them, so a record
 * with a syntax error is reported here by name instead of exploding somewhere
 * downstream with no indication of which of 300 files is at fault.
 */
import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const BREEDS_DIR = path.join(REPO_ROOT, "src/lib/pet-intelligence/breeds");

const SPECIES = [
  { dir: "dogs", species: "dog", constName: "DOG_BREEDS" },
  { dir: "cats", species: "cat", constName: "CAT_BREEDS" },
];

const checkOnly = process.argv.includes("--check");
const problems = [];

/** Identifier-safe name for a slug: `labrador-retriever` -> `labradorRetriever`. */
function camel(slug) {
  return slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function readShards({ dir, species }) {
  const full = path.join(BREEDS_DIR, dir);
  if (!fs.existsSync(full)) {
    problems.push(`${dir}: data directory is missing`);
    return [];
  }
  const files = fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .sort();

  const records = [];
  for (const file of files) {
    const source = fs.readFileSync(path.join(full, file), "utf8");
    const slugMatch = source.match(/^\s*slug: "([^"]+)",$/m);
    const idMatch = source.match(/^\s*id: "([^"]+)",$/m);
    const speciesMatch = source.match(/^\s*species: "([^"]+)",$/m);
    const expectedSlug = file.replace(/\.ts$/, "");

    if (!slugMatch || !idMatch || !speciesMatch) {
      problems.push(`${dir}/${file}: could not read id/slug/species — is it a breed record?`);
      continue;
    }
    if (!/export const breed: Breed =/.test(source)) {
      problems.push(`${dir}/${file}: must export \`const breed: Breed\``);
      continue;
    }
    if (slugMatch[1] !== expectedSlug) {
      problems.push(
        `${dir}/${file}: filename says "${expectedSlug}" but the record's slug is "${slugMatch[1]}"`,
      );
    }
    if (speciesMatch[1] !== species) {
      problems.push(`${dir}/${file}: species "${speciesMatch[1]}" in the ${dir} directory`);
    }
    if (idMatch[1] !== `${species}-${slugMatch[1]}`) {
      problems.push(
        `${dir}/${file}: id "${idMatch[1]}" should be "${species}-${slugMatch[1]}"`,
      );
    }
    records.push({ file, slug: slugMatch[1], id: idMatch[1] });
  }

  for (const key of ["slug", "id"]) {
    const seen = new Map();
    for (const r of records) {
      if (seen.has(r[key])) problems.push(`${dir}: duplicate ${key} "${r[key]}" (${seen.get(r[key])} and ${r.file})`);
      seen.set(r[key], r.file);
    }
  }
  return records;
}

function render({ dir, species, constName }, records) {
  const imports = records
    .map((r) => `import { breed as ${camel(r.slug)} } from "./${r.slug}.ts";`)
    .join("\n");
  const list = records.map((r) => `  ${camel(r.slug)},`).join("\n");
  return `/**
 * GENERATED FILE — do not edit by hand.
 *
 * Written by \`scripts/generate-breed-index.mjs\` from the ${records.length} record${
   records.length === 1 ? "" : "s"
 } in
 * this directory, and regenerated before every build. Edit the per-breed file,
 * then run \`npm run breeds:index\`.
 *
 * \`npm run breeds:index:check\` fails when this file disagrees with the
 * directory, and tests/pet-intelligence-shards.test.ts asserts the same thing —
 * so a data file that is never imported is a failure, not a silent orphan.
 */
import type { Breed } from "../../types.ts";
${imports}

export const ${constName}: readonly Breed[] = [
${list}
];
`;
}

/*
 * Validate EVERYTHING first, write only if the whole corpus is clean.
 *
 * The first version wrote each species' index inside the validation loop and
 * reported problems afterwards. Negative-testing it with a duplicate slug
 * showed the consequence: the run failed loudly with exit 1 and still left a
 * corrupt index on disk naming a file that was about to be deleted. A generator
 * that half-applies a rejected change is worse than one that refuses.
 */
const planned = [];
for (const spec of SPECIES) {
  const records = readShards(spec);
  if (records.length === 0) problems.push(`${spec.dir}: no breed records found`);
  const target = path.join(BREEDS_DIR, spec.dir, "index.ts");
  const next = render(spec, records);
  const current = fs.existsSync(target) ? fs.readFileSync(target, "utf8") : "";
  if (current !== next) planned.push({ spec, target, next, records });
}

if (problems.length === 0 && checkOnly) {
  for (const { spec, records } of planned) {
    problems.push(
      `${spec.dir}/index.ts is stale (${records.length} record${records.length === 1 ? "" : "s"} on disk) — run \`npm run breeds:index\``,
    );
  }
}

let changed = 0;
if (problems.length === 0 && !checkOnly) {
  for (const { spec, target, next } of planned) {
    fs.writeFileSync(target, next);
    // Verify the write actually landed rather than trusting the call.
    if (fs.readFileSync(target, "utf8") !== next) {
      problems.push(`${spec.dir}/index.ts: write did not take effect`);
    }
    changed += 1;
  }
}

if (problems.length > 0) {
  console.error(`\nbreed index: ${problems.length} problem(s)\n`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}

const counts = SPECIES.map((s) => {
  const n = fs
    .readdirSync(path.join(BREEDS_DIR, s.dir))
    .filter((f) => f.endsWith(".ts") && f !== "index.ts").length;
  return `${n} ${s.dir}`;
}).join(", ");

console.log(
  checkOnly
    ? `breed index: up to date (${counts})`
    : `breed index: ${changed === 0 ? "unchanged" : `${changed} file(s) written`} (${counts})`,
);
