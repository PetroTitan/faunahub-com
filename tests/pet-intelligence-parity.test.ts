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

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const APP_DIR = path.join(REPO_ROOT, "src", "app");

const searchIndex = JSON.parse(
  fs.readFileSync(path.join(REPO_ROOT, "public", "search-index.json"), "utf8"),
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
  const missing = sitemapBreedish.filter((url) => !built.has(url) && !expectedBreedSpaceUrls.has(url));
  assert.deepEqual(missing, [], "sitemap lists URLs the route does not generate");
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

test("every breed is linked from its hub's BUILT html", () => {
  // The strongest available check, and it reads the real artifact: a hub that
  // sliced its breed list would render fewer cards and fail here. Skips when
  // .next is absent (it is gitignored), following the pattern already used by
  // tests/search-index.test.ts for the prerender manifest.
  for (const [species, records] of [
    ["dogs", DOG_BREED_RECORDS],
    ["cats", CAT_BREED_RECORDS],
  ] as const) {
    const built = path.join(REPO_ROOT, ".next", "server", "app", species, "breeds.html");
    if (!fs.existsSync(built)) continue;
    const html = fs.readFileSync(built, "utf8");
    for (const breed of records) {
      assert.ok(
        html.includes(`href="${breedPath(breed)}"`),
        `${breed.id} is not linked from the built ${species} hub`,
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
