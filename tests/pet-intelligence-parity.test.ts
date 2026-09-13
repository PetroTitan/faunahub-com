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

test("the sitemap derives breed URLs from the registry, not a hand-kept list", () => {
  const source = fs.readFileSync(path.join(APP_DIR, "sitemap.ts"), "utf8");
  assert.match(source, /BREEDS\.map/, "sitemap no longer derives breed routes from the registry");
  assert.doesNotMatch(
    source,
    /const (dog|cat)BreedSlugs\s*=/,
    "sitemap has regrown a hand-written breed slug array",
  );
});

test("the sitemap includes both breed hubs and both Breed Finders", () => {
  const source = fs.readFileSync(path.join(APP_DIR, "sitemap.ts"), "utf8");
  for (const species of ["dog", "cat"] as const) {
    assert.ok(source.includes(breedHubPath(species)), `${species} breed hub missing from sitemap`);
    assert.ok(
      source.includes(breedFinderPath(species)),
      `${species} breed finder missing from sitemap`,
    );
  }
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

test("every breed is reachable from its hub", () => {
  // The hubs render the registry directly, so this asserts the wiring rather
  // than a list: a hub that stopped importing the registry would fail here.
  for (const [species, records] of [
    ["dogs", DOG_BREED_RECORDS],
    ["cats", CAT_BREED_RECORDS],
  ] as const) {
    const source = fs.readFileSync(path.join(APP_DIR, species, "breeds", "page.tsx"), "utf8");
    assert.match(
      source,
      /BREED_RECORDS/,
      `${species} hub does not render the registry`,
    );
    assert.doesNotMatch(
      source,
      /const (DOG|CAT)_BREED_PROFILES/,
      `${species} hub has regrown a hand-written breed list`,
    );
    assert.ok(records.length > 0, `${species} registry is empty`);
  }
});

test("breed routes generate static params for every registry record", () => {
  for (const [species, records] of [
    ["dogs", DOG_BREED_RECORDS],
    ["cats", CAT_BREED_RECORDS],
  ] as const) {
    const source = fs.readFileSync(
      path.join(APP_DIR, species, "breeds", "[slug]", "page.tsx"),
      "utf8",
    );
    assert.match(source, /BREED_RECORDS\.map\(\(breed\) => \(\{ slug: breed\.slug \}\)\)/);
    assert.match(source, /dynamicParams = false/, `${species} route allows unlisted slugs`);
    assert.ok(records.length > 0);
  }
});
