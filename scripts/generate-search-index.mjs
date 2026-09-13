/**
 * Generates public/search-index.json from the site's own registries and routes.
 *
 * Wired into `npm run build` (via the `prebuild` script) so the index is
 * regenerated from the current source on every build. The committed copy exists
 * so `next dev` and preview deployments work without a manual step, and so the
 * index is reviewable in a diff like any other artifact.
 *
 *   node scripts/generate-search-index.mjs          # write the index
 *   node scripts/generate-search-index.mjs --check  # fail if it is stale
 *
 * Both modes run full validation. A validation failure exits non-zero: shipping
 * an index with a duplicate URL, an unpublished slug, or a route that does not
 * exist is worse than failing the build.
 */
import fs from "node:fs";
import path from "node:path";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

// Must be registered before the builder imports any app module: it is what
// makes the "@/" alias and extensionless relative imports resolve under Node.
register("./lib/ts-resolve-hooks.mjs", import.meta.url);

const {
  buildSearchIndex,
  validateSearchIndex,
  assertNoBacklogLeakage,
  assertRouteSourcesCoverTemplates,
  REPO_ROOT,
} = await import("./lib/build-search-index.mjs");

const OUTPUT = path.join(REPO_ROOT, "public/search-index.json");
const checkOnly = process.argv.includes("--check");

/**
 * The generation date is the build's date, with no clock time.
 *
 * Deliberately day-granular: a timestamp would make every regeneration produce
 * a different file, which would turn the staleness check into noise.
 */
const generatedAt = (process.env.SOURCE_DATE ?? new Date().toISOString()).slice(0, 10);

const { payload, concreteRoutes, rejected } = await buildSearchIndex({ generatedAt });

const issues = [
  ...assertRouteSourcesCoverTemplates(),
  ...validateSearchIndex(payload, concreteRoutes, rejected),
  ...(await assertNoBacklogLeakage(payload)),
];

if (issues.length > 0) {
  console.error(`\nsearch index: ${issues.length} validation issue(s)\n`);
  for (const issue of issues.slice(0, 50)) {
    console.error(`  ${issue.id}: ${issue.issue}`);
  }
  if (issues.length > 50) console.error(`  … and ${issues.length - 50} more`);
  process.exit(1);
}

// `id` is deterministic (`${type}:${url}`) and is validated above, so it is
// stripped from the wire format and rebuilt at hydration. Beyond the ~8 KB it
// saves compressed, deriving it makes a document whose id disagrees with its
// url structurally impossible rather than merely detected.
/*
 * FIELD NAMES ARE 21% OF THIS FILE.
 *
 * Eleven key names repeat once per document, and at 2,330 documents that is
 * 194 KB of the 908 KB payload spent re-stating the same eleven words. The
 * index crossed its 900 KB raw budget when the comparison corpus grew, and the
 * budget's own note says the fix is to shrink the payload rather than raise the
 * number — so this shrinks the part that carries no information.
 *
 * The map is written INTO the file rather than hardcoded in the loader. A
 * hardcoded mapping is two lists that must agree forever; a self-describing one
 * cannot drift, and an older loader meeting a newer file fails loudly on a
 * missing key instead of silently reading the wrong field.
 */
const FIELD_KEYS = {
  type: "t",
  title: "n",
  url: "u",
  priority: "p",
  description: "d",
  keywords: "k",
  category: "c",
  group: "g",
  aliases: "a",
  animalSlugs: "s",
  scientificName: "x",
};

const unmapped = new Set();
for (const document of payload.documents) {
  for (const key of Object.keys(document)) {
    if (key !== "id" && !(key in FIELD_KEYS)) unmapped.add(key);
  }
}
if (unmapped.size > 0) {
  // A new field silently passing through un-compacted would be invisible until
  // the budget failed again, so it stops the generator instead.
  console.error(
    `search index: ${[...unmapped].join(", ")} missing from FIELD_KEYS in ${import.meta.url}`,
  );
  process.exit(1);
}

const compactDocument = (document) => {
  const out = {};
  for (const [key, value] of Object.entries(document)) out[FIELD_KEYS[key]] = value;
  return out;
};

const wire = {
  ...payload,
  fields: FIELD_KEYS,
  documents: payload.documents.map(({ id, ...rest }) => compactDocument(rest)),
};

const serialized = `${JSON.stringify(wire, null, 0)}\n`;

if (checkOnly) {
  const existing = fs.existsSync(OUTPUT) ? fs.readFileSync(OUTPUT, "utf8") : "";
  // Compare everything except generatedAt: the date legitimately differs
  // between the day the index was committed and the day the check runs.
  if (stripGeneratedAt(existing) !== stripGeneratedAt(serialized)) {
    console.error(
      "search index: public/search-index.json is stale.\n" +
        "Run `npm run search:index` and commit the result.",
    );
    process.exit(1);
  }
  console.log(`search index: up to date (${payload.documents.length} documents)`);
} else {
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, serialized);
  const bytes = Buffer.byteLength(serialized);
  const byType = new Map();
  for (const document of payload.documents) {
    byType.set(document.type, (byType.get(document.type) ?? 0) + 1);
  }
  const breakdown = [...byType.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([type, count]) => `${type}=${count}`)
    .join(" ");
  console.log(
    `search index: ${payload.documents.length} documents, ` +
      `${Object.keys(payload.pairs).length} comparison pairs, ` +
      `${Object.keys(payload.animalNames).length} animal names, ` +
      `${(bytes / 1024).toFixed(1)} KB raw`,
  );
  console.log(`  ${breakdown}`);
}

function stripGeneratedAt(text) {
  return text.replace(/"generatedAt":"[^"]*"/, '"generatedAt":""');
}
