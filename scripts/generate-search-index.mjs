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
const wire = {
  ...payload,
  documents: payload.documents.map(({ id, ...rest }) => rest),
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
