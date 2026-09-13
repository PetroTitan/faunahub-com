/**
 * Pet Intelligence — route, sitemap and search parity.
 *
 * The invariant:
 *
 *     breed registry  ↔  generated route  ↔  sitemap  ↔  search index
 *
 * All four must describe exactly the same set of breed URLs. This site has shipped
 * the failure this guards against before: 62 animal profiles built, rendered and
 * indexed correctly while being absent from the sitemap, because the sitemap kept
 * its own hand-written list. Nothing errored; the sitemap was simply 62 URLs short.
 *
 * Breeds previously had the same shape of problem waiting — the twenty slugs lived
 * in four places at once (route directories, two hub pages, the sitemap, the image
 * registry). They now derive from one registry, and these tests are what keep that
 * true as the corpus grows to hundreds.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import {
  BREEDS,
  CAT_BREED_RECORDS,
  DOG_BREED_RECORDS,
  breedFinderPath,
  breedHubPath,
  breedPageDescription,
  breedPageTitle,
  breedPath,
} from "../src/lib/pet-intelligence/index.ts";
import { DECISION_PAGES } from "../src/lib/pet-choice/data.ts";
import { collectionPath, publishedCollections } from "../src/lib/pet-intelligence/collections.ts";
import { BREED_RANKINGS, rankingPath } from "../src/lib/pet-intelligence/rankings.ts";
import {
  MIN_SHARED_DIMENSIONS,
  PUBLISHED_COMPARISONS,
  comparisonPath,
  getComparison,
  pairSlug,
  sharedDimensions,
} from "../src/lib/pet-intelligence/comparisons/index.ts";
import sitemap from "../src/app/sitemap.ts";
import { breedRouteParams } from "../src/lib/pet-intelligence/index.ts";
import { BREED_IMAGES } from "../src/lib/images/breed-images.ts";
import { expandDocuments } from "../src/lib/search/load-index.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const APP_DIR = path.join(REPO_ROOT, "src", "app");

const searchIndex = expandDocuments(
  JSON.parse(
fs.readFileSync(path.join(REPO_ROOT, "public", "search-index.json"), "utf8"),
  ),
) as { documents: { type: string; url: string; title: string; description?: string; category?: string; aliases?: string[] }[] };

const breedDocs = searchIndex.documents.filter((d) => d.type === "breed");

test("every breed has a published route template able to render it", () => {
  for (const species of ["dogs", "cats"]) {
    const template = path.join(APP_DIR, species, "breeds", "[slug]", "page.tsx");
    assert.ok(fs.existsSync(template), `${species}/breeds/[slug] route is missing`);
  }
});

test("no breed is served by a leftover hand-written page directory", () => {
  // A stale directory would silently shadow the dynamic route for that one
  // breed, so it would keep rendering old prose while the registry moved on —
  // and nothing would fail.
  for (const species of ["dogs", "cats"]) {
    const dir = path.join(APP_DIR, species, "breeds");
    const entries = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && e.name !== "[slug]")
      .map((e) => e.name);
    assert.deepEqual(entries, [], `${species}/breeds still has hand-written page directories`);
  }
});

test("breed slugs and decision-page slugs never collide", () => {
  // The two share a URL space, and the route dispatches breed-first. A collision
  // would make a decision guide unreachable with no error anywhere.
  for (const [species, records] of [
    ["dog", DOG_BREED_RECORDS],
    ["cat", CAT_BREED_RECORDS],
  ] as const) {
    const breedSlugs = new Set(records.map((b) => b.slug));
    const decisions = DECISION_PAGES.filter((p) => p.kind === `${species}-breed`).map((p) => p.slug);
    const collisions = decisions.filter((s) => breedSlugs.has(s));
    assert.deepEqual(collisions, [], `${species} slug collision between registry and pet-choice`);
  }
});

/**
 * The sitemap as it is actually EMITTED, not as its source reads.
 *
 * An adversarial review defeated the first version of these tests in three
 * different ways, because they grepped source text: deleting `...breedRoutes`
 * from the returned array left `BREEDS.map` present in the file, so a sitemap
 * containing ZERO breed URLs passed. The same trick 404'd nine of twelve breed
 * pages by appending `.slice(0, 3)` to generateStaticParams while the regex
 * still matched. A grep on source text is not a parity check.
 *
 * These call the real functions and compare sets.
 */
const emittedSitemapUrls = new Set(sitemap().map((entry) => entry.url));
const SITE = "https://faunahub.com";

/**
 * The breed URL space holds FOUR record types — profiles, collections,
 * rankings, and hand-written decision guides. The invariant is that the sitemap
 * emits exactly their union: no URL the routes will not build, and no record
 * missing from the sitemap.
 */
const expectedBreedSpaceUrls = new Set([
  ...BREEDS.map((b) => `${SITE}${breedPath(b)}`),
  ...publishedCollections().map((c) => `${SITE}${collectionPath(c)}`),
  ...BREED_RANKINGS.map((r) => `${SITE}${rankingPath(r)}`),
  ...DECISION_PAGES.filter((p) => p.kind.endsWith("-breed")).map(
    (p) => `${SITE}${p.parentHub}/${p.slug}`,
  ),
]);

test("the sitemap EMITS exactly the union of the breed URL space", () => {
  const emitted = [...emittedSitemapUrls]
    .filter((url) => /\/(dogs|cats)\/breeds\/[a-z0-9-]+$/.test(url))
    .sort();
  assert.deepEqual(
    emitted,
    [...expectedBreedSpaceUrls].sort(),
    "sitemap and the breed registries disagree",
  );
});

test("every breed profile is in the sitemap", () => {
  for (const breed of BREEDS) {
    assert.ok(
      emittedSitemapUrls.has(`${SITE}${breedPath(breed)}`),
      `${breed.id} is missing from the emitted sitemap`,
    );
  }
});

test("every published collection and ranking is in the sitemap", () => {
  for (const c of publishedCollections()) {
    assert.ok(
      emittedSitemapUrls.has(`${SITE}${collectionPath(c)}`),
      `collection ${c.slug} is missing from the sitemap`,
    );
  }
  for (const r of BREED_RANKINGS) {
    assert.ok(
      emittedSitemapUrls.has(`${SITE}${rankingPath(r)}`),
      `ranking ${r.slug} is missing from the sitemap`,
    );
  }
});

test("the four breed-space slug sets never collide", () => {
  // The route dispatches breed -> collection -> ranking -> decision. A
  // collision would make one of them permanently unreachable with no error.
  for (const species of ["dog", "cat"] as const) {
    const sets: Record<string, string[]> = {
      breed: BREEDS.filter((b) => b.species === species).map((b) => b.slug),
      collection: publishedCollections().filter((c) => c.species === species).map((c) => c.slug),
      ranking: BREED_RANKINGS.filter((r) => r.species === species).map((r) => r.slug),
      decision: DECISION_PAGES.filter((p) => p.kind === `${species}-breed`).map((p) => p.slug),
    };
    const seen = new Map<string, string>();
    for (const [kind, slugs] of Object.entries(sets)) {
      for (const slug of slugs) {
        const owner = seen.get(slug);
        assert.equal(owner, undefined, `${species} slug "${slug}" claimed by ${owner} and ${kind}`);
        seen.set(slug, kind);
      }
    }
  }
});

test("the sitemap EMITS both breed hubs and both Breed Finders", () => {
  for (const species of ["dog", "cat"] as const) {
    assert.ok(
      emittedSitemapUrls.has(`${SITE}${breedHubPath(species)}`),
      `${species} breed hub missing from the emitted sitemap`,
    );
    assert.ok(
      emittedSitemapUrls.has(`${SITE}${breedFinderPath(species)}`),
      `${species} breed finder missing from the emitted sitemap`,
    );
  }
});

test("the sitemap never lists a breed URL the route will not build", () => {
  // With dynamicParams = false, a URL in the sitemap that generateStaticParams
  // does not emit is a hard 404 that Google is being asked to crawl.
  const built = new Set([
    ...breedRouteParams("dog").map((p: { slug: string }) => `${SITE}/dogs/breeds/${p.slug}`),
    ...breedRouteParams("cat").map((p: { slug: string }) => `${SITE}/cats/breeds/${p.slug}`),
    ...DECISION_PAGES.map((p) => `${SITE}${p.parentHub}/${p.slug}`),
    ...publishedCollections().map((c) => `${SITE}${collectionPath(c)}`),
    ...BREED_RANKINGS.map((r) => `${SITE}${rankingPath(r)}`),
  ]);
  const sitemapBreedish = [...emittedSitemapUrls].filter((url) =>
    /\/(dogs|cats)\/breeds\/[a-z0-9-]+$/.test(url),
  );
  /*
   * The `&& !expectedBreedSpaceUrls.has(url)` clause that used to be here made
   * this test unsatisfiable for the very case its docstring describes. An
   * earlier test asserts the emitted sitemap EQUALS expectedBreedSpaceUrls, so
   * that clause emptied the set whenever the sitemap was correct — and a
   * truncated generateStaticParams leaves the sitemap correct and the ROUTES
   * short. Truncating breedRouteParams to three breeds did not fire it.
   */
  const missing = sitemapBreedish.filter((url) => !built.has(url));
  assert.deepEqual(missing, [], "sitemap lists breed URLs the route does not generate");

  // V9: /dogs/compare/* never matched the /breeds/ regex above, so nothing
  // checked sitemap → published in the comparison namespace. A fabricated
  // comparison URL is a hard 404 under dynamicParams = false.
  const builtComparisons = new Set(
    PUBLISHED_COMPARISONS.map((p) => `${SITE}${comparisonPath(p)}`),
  );
  const sitemapComparisons = [...emittedSitemapUrls].filter((url) =>
    /\/(dogs|cats)\/compare\/[a-z0-9-]+$/.test(url),
  );
  assert.ok(sitemapComparisons.length > 0, "no comparison URLs in the sitemap to check");
  assert.deepEqual(
    sitemapComparisons.filter((url) => !builtComparisons.has(url)),
    [],
    "sitemap lists comparison URLs the route does not generate",
  );
});

test("every breed in the registry is in the search index exactly once", () => {
  const indexed = breedDocs.map((d) => d.url).sort();
  const expected = BREEDS.map(breedPath).sort();
  assert.deepEqual(indexed, expected, "registry and search index disagree about breed URLs");
  assert.equal(new Set(indexed).size, indexed.length, "a breed is indexed twice");
});

test("breed search documents carry the species label a reader needs", () => {
  // "Dog breed" / "Cat breed" is what stops a breed result being mistaken for a
  // species profile or a listicle in the results panel.
  for (const doc of breedDocs) {
    assert.ok(
      doc.category === "Dog breed" || doc.category === "Cat breed",
      `${doc.url} has category "${doc.category}"`,
    );
    const expectedSpecies = doc.url.startsWith("/dogs/") ? "Dog breed" : "Cat breed";
    assert.equal(doc.category, expectedSpecies, `${doc.url} is filed under the wrong species`);
  }
});

test("search titles and descriptions match what the page will render", () => {
  const byUrl = new Map(breedDocs.map((d) => [d.url, d]));
  for (const breed of BREEDS) {
    const doc = byUrl.get(breedPath(breed));
    assert.ok(doc, `${breed.id} is not indexed`);
    // The index carries the breed's display name; the page's <title> is built
    // from the same record by the same module, so asserting the name is in the
    // page title is what ties the two together.
    assert.equal(doc.title, breed.name, `${breed.id} indexed under a different title`);
    assert.ok(
      breedPageTitle(breed).startsWith(breed.name),
      `${breed.id} page title does not lead with the name search shows`,
    );
    assert.ok(breedPageDescription(breed).length > 60, `${breed.id} has a stub meta description`);
  }
});

test("indexed breed aliases only ever come from the registry record", () => {
  const byUrl = new Map(BREEDS.map((b) => [breedPath(b), b]));
  for (const doc of breedDocs) {
    const breed = byUrl.get(doc.url);
    assert.ok(breed, `indexed breed url ${doc.url} has no registry record`);
    const allowed = new Set([breed.canonicalCommonName, ...(breed.aliases ?? [])].filter(Boolean));
    for (const alias of doc.aliases ?? []) {
      assert.ok(allowed.has(alias), `${doc.url} is indexed under invented alias "${alias}"`);
    }
  }
});

test("every breed image referenced by the registry exists on disk", () => {
  // A missing file renders as a broken hero rather than an error, so the build
  // would not catch it.
  const byId = new Map(BREED_IMAGES.map((i) => [i.id, i]));
  for (const breed of BREEDS) {
    for (const id of breed.images) {
      const image = byId.get(id);
      assert.ok(image, `${breed.id} cites unknown image ${id}`);
      const file = path.join(REPO_ROOT, "public", image.localPath.replace(/^\//, ""));
      assert.ok(fs.existsSync(file), `${image.id} points at a missing file: ${image.localPath}`);
    }
  }
});

test("breedRouteParams GENERATES a param for every registry record", () => {
  // Executed, not grepped. `.slice(0, 3)` here used to pass a source regex.
  for (const [species, records] of [
    ["dog", DOG_BREED_RECORDS],
    ["cat", CAT_BREED_RECORDS],
  ] as const) {
    const generated = breedRouteParams(species).map((p: { slug: string }) => p.slug).sort();
    assert.deepEqual(
      generated,
      records.map((b) => b.slug).sort(),
      `${species} route params disagree with the registry; with dynamicParams=false the gap 404s`,
    );
  }
});

test("both breed routes call breedRouteParams rather than mapping their own list", () => {
  // The executable test above only helps if the routes actually use it.
  for (const species of ["dogs", "cats"]) {
    const source = fs.readFileSync(
      path.join(APP_DIR, species, "breeds", "[slug]", "page.tsx"),
      "utf8",
    );
    /*
     * THE EXPORT NAME IS THE CONTRACT. Next.js calls a function named exactly
     * `generateStaticParams` and nothing else; rename it and the route builds
     * zero pages while every breed URL stays in the sitemap and search index.
     * Matching only `breedRouteParams("dog")` survived that rename, because the
     * call still sits in the file — inside a function nobody calls.
     */
    assert.match(
      source,
      /export\s+(?:async\s+)?(?:function\s+generateStaticParams\b|const\s+generateStaticParams\b)/,
      `${species} route does not export generateStaticParams under that exact name`,
    );
    assert.match(source, /breedRouteParams\("(dog|cat)"\)/, `${species} route builds its own list`);
    assert.doesNotMatch(
      source,
      /BREED_RECORDS\s*\.\s*(slice|filter)/,
      `${species} route narrows the registry before generating params`,
    );
  }
});

test("breed routes refuse slugs they did not generate", () => {
  for (const species of ["dogs", "cats"]) {
    const source = fs.readFileSync(
      path.join(APP_DIR, species, "breeds", "[slug]", "page.tsx"),
      "utf8",
    );
    assert.match(source, /dynamicParams = false/, `${species} route allows unlisted slugs`);
  }
});

test("every breed is linked from its hub's BUILT html", (t) => {
  /*
   * This reads the real artifact, which makes it the only check here that can
   * see a route returning notFound() at runtime. It used to `continue` when the
   * HTML was absent — so when .next held nothing but _not-found.html it read
   * NOTHING and reported green, while a route-body notFound() 404ing 254 of 274
   * breed pages passed the whole suite.
   *
   * Two states are now distinguished. No build at all is an explicit SKIP, and
   * shows as one. A build that exists but did not produce the hub is a
   * FAILURE — that is the artifact saying the page did not render.
   */
  const appDir = path.join(REPO_ROOT, ".next", "server", "app");
  if (!fs.existsSync(appDir)) {
    t.skip("no build artifact in .next — run `npm run build` for this check to mean anything");
    return;
  }

  for (const [species, records] of [
    ["dogs", DOG_BREED_RECORDS],
    ["cats", CAT_BREED_RECORDS],
  ] as const) {
    const built = path.join(appDir, species, "breeds.html");
    assert.ok(
      fs.existsSync(built),
      `.next exists but ${species}/breeds.html was not prerendered — the hub did not build`,
    );
    const html = fs.readFileSync(built, "utf8");
    for (const breed of records) {
      assert.ok(
        html.includes(`href="${breedPath(breed)}"`),
        `${breed.id} is not linked from the built ${species} hub`,
      );
    }
  }
});

test("neither breed route 404s a page it generated", () => {
  /*
   * `if (breed && !breed.editorial) notFound()` would 404 the 254 data profiles
   * while leaving every one of them in the sitemap, the search index and
   * generateStaticParams. Nothing caught it, because notFound() is legitimate
   * — for a slug that does not resolve.
   *
   * So the shape is constrained rather than the call: every notFound() in a
   * breed route must be guarded by the lookup having failed, never by a
   * property of a breed that was found.
   */
  for (const species of ["dogs", "cats"]) {
    const source = fs.readFileSync(
      path.join(APP_DIR, species, "breeds", "[slug]", "page.tsx"),
      "utf8",
    );
    for (const m of source.matchAll(/notFound\(\)/g)) {
      const before = source.slice(Math.max(0, m.index - 140), m.index);
      assert.match(
        before,
        /if\s*\(\s*!\s*\w+\s*\)\s*$|if\s*\(\s*!\s*\w+\s*\)\s*\{?\s*$/,
        `${species} route calls notFound() somewhere other than a failed lookup: "...${before.slice(-90)}notFound()"`,
      );
    }
  }
});

test("neither hub narrows the registry before rendering it", () => {
  for (const species of ["dogs", "cats"]) {
    const source = fs.readFileSync(path.join(APP_DIR, species, "breeds", "page.tsx"), "utf8");
    assert.match(source, /BREED_RECORDS/, `${species} hub does not render the registry`);
    assert.doesNotMatch(
      source,
      /BREED_RECORDS\s*\.\s*(slice|filter)/,
      `${species} hub narrows the registry before rendering`,
    );
    assert.doesNotMatch(
      source,
      /const (DOG|CAT)_BREED_PROFILES/,
      `${species} hub has regrown a hand-written breed list`,
    );
  }
});

test("every decision page's kind agrees with the hub it is filed under", () => {
  // The route dispatches on `kind` while the sitemap emits `parentHub`, and
  // nothing compared them: setting a dog-breed page's parentHub to "/guides"
  // put a 404 in the sitemap while the real URL went unlisted.
  const HUB_FOR_KIND: Record<string, string> = {
    "dog-breed": "/dogs/breeds",
    "cat-breed": "/cats/breeds",
    guide: "/guides",
  };
  for (const page of DECISION_PAGES) {
    const expected = HUB_FOR_KIND[page.kind];
    assert.ok(expected, `unknown decision kind "${page.kind}"`);
    assert.equal(
      page.parentHub,
      expected,
      `${page.slug} is kind "${page.kind}" but filed under ${page.parentHub}`,
    );
  }
});

test("every decision page URL the sitemap emits is one a route will build", () => {
  for (const page of DECISION_PAGES) {
    assert.ok(
      emittedSitemapUrls.has(`${SITE}${page.parentHub}/${page.slug}`),
      `${page.slug} is missing from the emitted sitemap`,
    );
  }
});

/* ---------------------------------------------------------------- *
 * Breed comparisons
 * ---------------------------------------------------------------- */

test("every published comparison is in the sitemap and resolvable", () => {
  for (const pair of PUBLISHED_COMPARISONS) {
    assert.ok(
      emittedSitemapUrls.has(`${SITE}${comparisonPath(pair)}`),
      `comparison ${pair.slug} is missing from the sitemap`,
    );
    assert.equal(
      getComparison(pair.species, pair.slug)?.slug,
      pair.slug,
      `comparison ${pair.slug} does not resolve by its own slug`,
    );
  }
});

test("comparison slugs are canonical and unique", () => {
  const seen = new Set<string>();
  for (const pair of PUBLISHED_COMPARISONS) {
    const key = `${pair.species}:${pair.slug}`;
    assert.ok(!seen.has(key), `duplicate comparison ${key}`);
    seen.add(key);
    // Order-independent: a pair has exactly one URL, so A-vs-B and B-vs-A
    // cannot both exist.
    assert.equal(
      pair.slug,
      pairSlug(pair.a.slug, pair.b.slug),
      `${pair.slug} is not the canonical ordering of its two breeds`,
    );
    assert.notEqual(pair.a.id, pair.b.id, `${pair.slug} compares a breed with itself`);
    assert.equal(pair.a.species, pair.species);
    assert.equal(pair.b.species, pair.species);
  }
});

test("every published comparison clears its species' shared-dimension bar", () => {
  for (const pair of PUBLISHED_COMPARISONS) {
    const shared = sharedDimensions(pair.a, pair.b).length;
    assert.ok(
      shared >= MIN_SHARED_DIMENSIONS[pair.species],
      `${pair.slug} publishes with only ${shared} shared dimensions`,
    );
  }
});

test("breed comparisons never collide with the species comparison namespace", () => {
  // /animal-compare compares species; /dogs/compare compares breeds. A URL in
  // both would make one unreachable.
  for (const pair of PUBLISHED_COMPARISONS) {
    assert.doesNotMatch(
      comparisonPath(pair),
      /^\/animal-compare\//,
      `${pair.slug} is routed into the species comparison namespace`,
    );
  }
});

/*
 * ---------------------------------------------------------------------------
 * SERP WIDTH
 *
 * A title and a description have a rendered width, and exceeding it does not
 * error — it truncates, silently, in the one place a reader sees the page
 * before deciding whether to open it.
 *
 * This shipped: 409 of 527 breed-space titles were over 60 characters, all 284
 * comparison titles among them at a median of 89, because the TEMPLATES were
 * over budget before a breed name was substituted in. Descriptions were fixed
 * to the limit in an earlier commit; titles were not, and nothing measured
 * either.
 *
 * The limits are soft — Google measures pixels, not characters — so these
 * assert the template's own budget rather than a per-page ideal. A handful of
 * genuinely long breed names (Nova Scotia Duck Tolling Retriever) may exceed
 * it; a systemic overshoot may not.
 * ---------------------------------------------------------------------------
 */
const TITLE_LIMIT = 60;
const BRAND_SUFFIX = " | FaunaHub";

test("breed page titles fit the width a SERP renders", () => {
  const over = BREEDS.map((b) => `${breedPageTitle(b)}${BRAND_SUFFIX}`).filter(
    (t) => t.length > TITLE_LIMIT,
  );
  // Only names long enough to blow the budget on their own may exceed it.
  assert.ok(
    over.length <= 5,
    `${over.length} of ${BREEDS.length} breed titles exceed ${TITLE_LIMIT} chars — the template is over budget, not the names:\n  ${over.slice(0, 5).join("\n  ")}`,
  );
});

test("comparison titles fit the width a SERP renders", () => {
  const titles = PUBLISHED_COMPARISONS.map((p) => `${p.a.name} vs ${p.b.name} Compared`);
  const over = titles.filter((t) => t.length > TITLE_LIMIT);
  assert.ok(
    over.length <= titles.length * 0.1,
    `${over.length} of ${titles.length} comparison titles exceed ${TITLE_LIMIT} chars:\n  ${over.slice(0, 5).join("\n  ")}`,
  );
});

test("collection and ranking titles fit too", () => {
  for (const c of publishedCollections()) {
    assert.ok(
      `${c.title}${BRAND_SUFFIX}`.length <= TITLE_LIMIT,
      `collection title too long (${`${c.title}${BRAND_SUFFIX}`.length}): ${c.title}`,
    );
  }
  for (const r of BREED_RANKINGS) {
    assert.ok(
      `${r.title}${BRAND_SUFFIX}`.length <= TITLE_LIMIT,
      `ranking title too long (${`${r.title}${BRAND_SUFFIX}`.length}): ${r.title}`,
    );
  }
});
