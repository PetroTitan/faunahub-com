import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import sitemap from "../src/app/sitemap.ts";

/**
 * The /animals namespace: emitted sitemap output against real routes.
 *
 * THIS GUARDS THE OUTPUT, NOT THE INPUT LIST, and that distinction is the whole
 * reason the file exists.
 *
 * `tests/animal-expansion.test.ts` already checks the animal slugs — but it does
 * so by reading `src/app/sitemap.ts` as SOURCE TEXT and regexing the
 * `animalSlugs` array literal out of it. That catches drift inside that one
 * array and is blind to everything else the function returns. Injecting a
 * fabricated `/animals/nonexistent-slug` entry directly into the returned array
 * reached the emitted sitemap and passed all 506 tests; adding the same slug to
 * `animalSlugs` failed one. The list was guarded; the output was not.
 *
 * A sitemap is a set of promises to a crawler, and the promise is made by what
 * the function RETURNS, not by one array that happens to feed it. With
 * `dynamicParams = false` a URL with no route is a hard 404 that search engines
 * are being asked to crawl, and a hand-kept list of 704 slugs is exactly the
 * kind of thing that drifts.
 *
 * So this executes `sitemap()` and compares its real output against the routes
 * that actually exist on disk, in both directions. A URL added anywhere in the
 * return path — a new block, a helper, a copy-paste — is now caught.
 */

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const ANIMALS_DIR = path.join(REPO_ROOT, "src", "app", "animals");

/** Every `/animals/<slug>` URL the sitemap function actually emits. */
function emittedAnimalSlugs(): string[] {
  return sitemap()
    .map((entry) => entry.url)
    .map((url) => url.replace(/^https?:\/\/[^/]+/, ""))
    .filter((path) => /^\/animals\/[^/]+$/.test(path))
    .map((path) => path.slice("/animals/".length));
}

/**
 * Every animal profile that has a real route.
 *
 * A directory is only a route if it holds a `page.tsx`, and a bracketed segment
 * is a dynamic route rather than a profile, so neither counts as a slug.
 */
function routedAnimalSlugs(): string[] {
  return fs
    .readdirSync(ANIMALS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.includes("["))
    .map((entry) => entry.name)
    .filter((slug) => fs.existsSync(path.join(ANIMALS_DIR, slug, "page.tsx")))
    .sort();
}

test("the animal sitemap guard is reading a real corpus", () => {
  // Both sides empty would make every assertion below vacuously true, which is
  // the failure mode this whole file exists to prevent.
  const emitted = emittedAnimalSlugs();
  const routed = routedAnimalSlugs();
  assert.ok(emitted.length > 100, `only ${emitted.length} /animals URLs emitted`);
  assert.ok(routed.length > 100, `only ${routed.length} /animals routes on disk`);
});

test("every emitted /animals URL has a route that will build", () => {
  const routed = new Set(routedAnimalSlugs());
  const orphaned = emittedAnimalSlugs().filter((slug) => !routed.has(slug));
  assert.deepEqual(
    orphaned,
    [],
    `the sitemap emits /animals URLs with no page.tsx, which are hard 404s: ${orphaned.join(", ")}`,
  );
});

test("every /animals route is emitted in the sitemap", () => {
  const emitted = new Set(emittedAnimalSlugs());
  const missing = routedAnimalSlugs().filter((slug) => !emitted.has(slug));
  assert.deepEqual(
    missing,
    [],
    `these /animals profiles exist but the sitemap never emits them: ${missing.join(", ")}`,
  );
});

test("the emitted sitemap never repeats an /animals URL", () => {
  // A duplicate <loc> is invalid, and a hand-kept list is where one appears.
  const emitted = emittedAnimalSlugs();
  const seen = new Set<string>();
  const duplicates = emitted.filter((slug) => (seen.has(slug) ? true : (seen.add(slug), false)));
  assert.deepEqual(duplicates, [], `duplicate /animals URLs in the sitemap: ${duplicates.join(", ")}`);
});

test("the emitted sitemap never repeats ANY url", () => {
  const urls = sitemap().map((entry) => entry.url);
  const seen = new Set<string>();
  const duplicates = urls.filter((url) => (seen.has(url) ? true : (seen.add(url), false)));
  assert.deepEqual(duplicates, [], `duplicate <loc> entries: ${duplicates.slice(0, 5).join(", ")}`);
});

test("every emitted /animals URL was actually prerendered, when a build exists", (t) => {
  /*
   * The strongest available check, because it reads what Next really produced
   * rather than what the filesystem implies. It skips explicitly rather than
   * silently when there is no build — a check that quietly reads nothing and
   * reports green is how the breed-hub guard failed before it was hardened.
   */
  const manifestPath = path.join(REPO_ROOT, ".next", "prerender-manifest.json");
  if (!fs.existsSync(manifestPath)) {
    t.skip("no .next build — run `npm run build` for this check to mean anything");
    return;
  }
  const routes = new Set(
    Object.keys(JSON.parse(fs.readFileSync(manifestPath, "utf8")).routes as Record<string, unknown>),
  );
  const notBuilt = emittedAnimalSlugs().filter((slug) => !routes.has(`/animals/${slug}`));
  assert.deepEqual(
    notBuilt,
    [],
    `the sitemap emits /animals URLs the build did not prerender: ${notBuilt.join(", ")}`,
  );
});
