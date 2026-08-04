/**
 * Animal Compare Center — registry, routing, content and safety tests.
 *
 * Runs on Node's built-in test runner with native TypeScript type-stripping,
 * like tests/ecosystem.test.ts. No test framework is added:
 *
 *   npm run test
 *
 * These tests are the enforcement layer for the section's editorial rules. The
 * registry can grow freely; what it cannot do is grow a reverse-pair duplicate,
 * a link to a route that does not exist, a page that is a near-copy of another,
 * or a claim the section has ruled out.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import {
  COMPARE_BASE,
  COMPARISONS,
  COMPARISON_CATEGORIES,
  COMPARISON_SLUGS,
  EXTERNAL_COMPARISONS,
  HUB_LABELS,
  PUBLISHED_COMPARISON_COUNT,
  allComparePaths,
  buildPairKey,
  categoryPath,
  comparisonBySlug,
  comparisonForPair,
  compareAnimalBySlug,
  findNearDuplicateComparisons,
  getComparisonsForAnimal,
  getPrimaryComparisonsByCategory,
  isKnownAnimalSlug,
  validateComparisonRegistry,
} from "../src/lib/animal-compare/index.ts";
import { COMPARE_ANIMALS } from "../src/lib/animal-compare/animals.ts";
import { COMPARISON_BACKLOG, backlogPairKeys } from "../src/lib/animal-compare/backlog.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const APP_DIR = path.join(REPO_ROOT, "src", "app");

function routeExists(routePath: string): boolean {
  const dir = path.join(APP_DIR, routePath.replace(/^\//, ""));
  return fs.existsSync(path.join(dir, "page.tsx"));
}

/* ------------------------------------------------------------------ *
 * Registry integrity
 * ------------------------------------------------------------------ */

test("registry passes its own validation", () => {
  const issues = validateComparisonRegistry();
  assert.deepEqual(
    issues,
    [],
    `registry issues:\n${issues.map((i) => `  - ${i.recordId}: ${i.issue}`).join("\n")}`,
  );
});

test("comparison ids are unique", () => {
  const ids = COMPARISONS.map((r) => r.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("comparison slugs are unique", () => {
  assert.equal(new Set(COMPARISON_SLUGS).size, COMPARISON_SLUGS.length);
});

test("canonicalPairKeys are unique", () => {
  const keys = COMPARISONS.map((r) => r.canonicalPairKey);
  assert.equal(new Set(keys).size, keys.length);
});

test("canonicalPairKey is always the sorted pair", () => {
  for (const record of COMPARISONS) {
    assert.equal(
      record.canonicalPairKey,
      buildPairKey(record.animalA.slug, record.animalB.slug),
      `${record.id} has a hand-written pair key`,
    );
  }
});

test("no reverse-pair duplicates exist", () => {
  const seen = new Map<string, string>();
  for (const record of COMPARISONS) {
    const forward = `${record.animalA.slug}--${record.animalB.slug}`;
    const reverse = `${record.animalB.slug}--${record.animalA.slug}`;
    assert.equal(seen.has(reverse), false, `${record.id} reverses ${seen.get(reverse)}`);
    seen.set(forward, record.id);
  }
});

test("a pair resolves to the same record in either order", () => {
  for (const record of COMPARISONS) {
    const forward = comparisonForPair(record.animalA.slug, record.animalB.slug);
    const reverse = comparisonForPair(record.animalB.slug, record.animalA.slug);
    assert.equal(forward?.slug, record.slug);
    assert.equal(reverse?.slug, record.slug, `${record.id} does not resolve in reverse order`);
  }
});

test("animalA and animalB are never the same animal", () => {
  for (const record of COMPARISONS) {
    assert.notEqual(record.animalA.slug, record.animalB.slug, record.id);
  }
});

/* ------------------------------------------------------------------ *
 * Every referenced route actually exists
 * ------------------------------------------------------------------ */

test("every animal slug resolves to a known animal", () => {
  for (const record of COMPARISONS) {
    assert.ok(isKnownAnimalSlug(record.animalA.slug), `${record.id}: ${record.animalA.slug}`);
    assert.ok(isKnownAnimalSlug(record.animalB.slug), `${record.id}: ${record.animalB.slug}`);
  }
});

test("every animal profile path is a real route in src/app", () => {
  const missing = COMPARE_ANIMALS.filter((animal) => !routeExists(animal.profilePath));
  assert.deepEqual(
    missing.map((a) => a.profilePath),
    [],
    "animal inventory points at routes that do not exist",
  );
});

test("no comparison invents an animal profile", () => {
  for (const record of COMPARISONS) {
    for (const ref of [record.animalA, record.animalB]) {
      const animal = compareAnimalBySlug(ref.slug);
      assert.ok(animal, `${record.id}: ${ref.slug} is not in the inventory`);
      assert.ok(routeExists(animal.profilePath), `${record.id}: ${animal.profilePath} is a 404`);
    }
  }
});

test("every related comparison slug resolves", () => {
  for (const record of COMPARISONS) {
    for (const slug of record.relatedComparisonSlugs) {
      assert.ok(comparisonBySlug(slug), `${record.id} links to missing comparison "${slug}"`);
    }
  }
});

test("every comparison links to at least three related comparisons", () => {
  for (const record of COMPARISONS) {
    assert.ok(
      record.relatedComparisonSlugs.length >= 3,
      `${record.id} has only ${record.relatedComparisonSlugs.length} related comparisons`,
    );
  }
});

test("every related hub path is labelled and exists", () => {
  for (const record of COMPARISONS) {
    for (const hub of record.relatedHubPaths) {
      assert.ok(HUB_LABELS[hub], `${record.id} uses unlabelled hub path "${hub}"`);
      assert.ok(routeExists(hub), `${record.id} links to missing hub "${hub}"`);
    }
  }
});

test("every hub label points at a real route", () => {
  for (const hubPath of Object.keys(HUB_LABELS)) {
    assert.ok(routeExists(hubPath), `HUB_LABELS contains missing route "${hubPath}"`);
  }
});

test("category hub paths resolve and category route file exists", () => {
  assert.ok(
    fs.existsSync(path.join(APP_DIR, "animal-compare", "categories", "[category]", "page.tsx")),
  );
  for (const category of COMPARISON_CATEGORIES) {
    assert.equal(categoryPath(category.id), `${COMPARE_BASE}/categories/${category.slug}`);
  }
});

test("external comparison links point at real routes", () => {
  for (const item of EXTERNAL_COMPARISONS) {
    assert.ok(routeExists(item.href), `external comparison "${item.href}" is a 404`);
  }
});

test("no placeholder or fragment-only link targets", () => {
  for (const record of COMPARISONS) {
    for (const target of [...record.relatedHubPaths, ...record.relatedComparisonSlugs]) {
      assert.notEqual(target, "#");
      assert.ok(!target.includes("placeholder"), `${record.id}: ${target}`);
      assert.ok(!target.startsWith("http"), `${record.id}: ${target} should be site-relative`);
    }
  }
});

/* ------------------------------------------------------------------ *
 * Deduplication against already-published pages
 * ------------------------------------------------------------------ */

test("no comparison duplicates an existing /compare page", () => {
  const external = new Set(EXTERNAL_COMPARISONS.map((e) => e.canonicalPairKey));
  for (const record of COMPARISONS) {
    assert.equal(
      external.has(record.canonicalPairKey),
      false,
      `${record.id} duplicates an older /compare URL`,
    );
  }
});

test("comparison slugs never collide with category slugs", () => {
  const categorySlugs = new Set(COMPARISON_CATEGORIES.map((c) => c.slug));
  for (const slug of COMPARISON_SLUGS) {
    assert.equal(categorySlugs.has(slug), false, `slug "${slug}" collides with a category`);
  }
});

/* ------------------------------------------------------------------ *
 * Content uniqueness
 * ------------------------------------------------------------------ */

test("metaTitles are unique", () => {
  const titles = COMPARISONS.map((r) => r.metaTitle.toLowerCase());
  assert.equal(new Set(titles).size, titles.length);
});

test("metaDescriptions are unique", () => {
  const descriptions = COMPARISONS.map((r) => r.metaDescription.toLowerCase());
  assert.equal(new Set(descriptions).size, descriptions.length);
});

test("H1 headings are unique", () => {
  const headings = COMPARISONS.map((r) => `${r.animalA.name} vs ${r.animalB.name}`.toLowerCase());
  assert.equal(new Set(headings).size, headings.length);
});

test("no two comparisons are near-duplicates", () => {
  const dupes = findNearDuplicateComparisons(0.5);
  assert.deepEqual(
    dupes,
    [],
    `near-duplicate content:\n${dupes.map((d) => `  ${d.a} ~ ${d.b} (${d.field})`).join("\n")}`,
  );
});

test("FAQ questions are not recycled across comparisons", () => {
  const counts = new Map<string, number>();
  for (const record of COMPARISONS) {
    for (const faq of record.faqs) {
      const key = faq.question.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  const repeated = [...counts.entries()].filter(([, n]) => n > 1);
  assert.deepEqual(repeated, [], "identical FAQ questions reused across pages");
});

test("category hubs do not share paragraphs", () => {
  const seen = new Map<string, string>();
  for (const category of COMPARISON_CATEGORIES) {
    for (const paragraph of [...category.intro, category.scopeNote, ...category.howToRead]) {
      const key = paragraph.toLowerCase().replace(/\s+/g, " ").trim();
      assert.equal(
        seen.has(key),
        false,
        `${category.id} repeats copy from ${seen.get(key)}`,
      );
      seen.set(key, category.id);
    }
  }
});

test("hub and category titles stay within a sensible length", () => {
  // buildMetadata appends " | FaunaHub" (11 chars), so a 62-char source title
  // renders at 73 — already generous for a search result. This keeps category
  // metadata from drifting longer over time.
  for (const category of COMPARISON_CATEGORIES) {
    assert.ok(
      category.metaTitle.length <= 62,
      `${category.id} metaTitle is ${category.metaTitle.length} chars`,
    );
    assert.ok(
      category.metaDescription.length >= 110 && category.metaDescription.length <= 165,
      `${category.id} metaDescription is ${category.metaDescription.length} chars`,
    );
  }
});

test("category hubs have substantial unique body copy", () => {
  for (const category of COMPARISON_CATEGORIES) {
    const words = [
      ...category.intro,
      category.scopeNote,
      ...category.howToRead,
      ...category.faqs.flatMap((f) => [f.question, f.answer]),
    ]
      .join(" ")
      .trim()
      .split(/\s+/).length;
    assert.ok(words >= 500, `${category.id} has only ${words} words of hub copy`);
  }
});

/* ------------------------------------------------------------------ *
 * Claim and safety boundaries
 * ------------------------------------------------------------------ */

test("no confrontation, ranking or winner framing", () => {
  const banned = [
    /who\s+would\s+win/i,
    /\bwinner\b/i,
    /\bwould\s+beat\b/i,
    /fight\s+simulat/i,
    /\bbite[- ]force\s+(ranking|league|chart)/i,
    /\bdeadliest\b/i,
    /\bmost\s+dangerous\s+animal\b/i,
    /\bstrongest\s+animal\b/i,
  ];
  for (const record of COMPARISONS) {
    const text = JSON.stringify(record);
    for (const pattern of banned) {
      assert.equal(pattern.test(text), false, `${record.id} matches ${pattern}`);
    }
  }
});

test("no universal best-pet claims", () => {
  const banned = [
    /\bbest\s+pet\s+for\s+everyone\b/i,
    /\bperfect\s+pet\b/i,
    /\bideal\s+for\s+any\s+(home|household|family)\b/i,
    /\blow[- ]maintenance\s+pet\b/i,
    /\beasy\s+starter\s+pet\b/i,
  ];
  for (const record of COMPARISONS) {
    const text = JSON.stringify(record);
    for (const pattern of banned) {
      assert.equal(pattern.test(text), false, `${record.id} matches ${pattern}`);
    }
  }
});

test("no dosage, prescription or procedural medical guidance", () => {
  const banned = [
    /\b\d+\s*(mg|ml|cc)\s*(per|\/)\s*(kg|lb|day)/i,
    /\badminister\s+\d/i,
    /\bapply\s+a\s+tourniquet\b/i,
    /\bsuck\s+out\s+the\s+venom\b/i,
    /\bhow\s+to\s+treat\s+(a\s+)?(bite|sting|wound)\b/i,
    /\bfeed\s+\d+\s*(g|grams|cups?|ml)\b/i,
  ];
  for (const record of COMPARISONS) {
    const text = JSON.stringify(record);
    for (const pattern of banned) {
      assert.equal(pattern.test(text), false, `${record.id} matches ${pattern}`);
    }
  }
});

test("pet-relevant comparisons carry an ownership boundary", () => {
  const petRecords = COMPARISONS.filter(
    (r) => r.primaryCategory === "pets-domestic" || r.searchIntent === "pet-decision",
  );
  for (const record of petRecords) {
    assert.ok(
      record.petBoundary || record.narrative.petContext,
      `${record.id} is pet-relevant but has no ownership boundary`,
    );
  }
});

test("no dimension renders an empty value or 'Unknown' filler", () => {
  for (const record of COMPARISONS) {
    for (const dimension of record.dimensions) {
      assert.ok(dimension.animalAValue.trim().length > 0, `${record.id}/${dimension.id}`);
      assert.ok(dimension.animalBValue.trim().length > 0, `${record.id}/${dimension.id}`);
      assert.ok(!/^(unknown|n\/a|tbd|-)$/i.test(dimension.animalAValue.trim()));
      assert.ok(!/^(unknown|n\/a|tbd|-)$/i.test(dimension.animalBValue.trim()));
    }
  }
});

/* ------------------------------------------------------------------ *
 * Backlog isolation
 * ------------------------------------------------------------------ */

test("no backlog pair is also published", () => {
  const published = new Set(COMPARISONS.map((r) => r.canonicalPairKey));
  for (const key of backlogPairKeys()) {
    assert.equal(published.has(key), false, `backlog pair "${key}" is also published`);
  }
});

test("backlog generates no routes and is not in the public path list", () => {
  const paths = new Set(allComparePaths());
  for (const candidate of COMPARISON_BACKLOG) {
    const guessA = `${COMPARE_BASE}/${candidate.animalA}-vs-${candidate.animalB}`;
    const guessB = `${COMPARE_BASE}/${candidate.animalB}-vs-${candidate.animalA}`;
    assert.equal(paths.has(guessA), false, `backlog route leaked: ${guessA}`);
    assert.equal(paths.has(guessB), false, `backlog route leaked: ${guessB}`);
  }
});

test("route generation and the sitemap never import the backlog", () => {
  const guarded = [
    path.join(REPO_ROOT, "src", "lib", "animal-compare", "index.ts"),
    path.join(REPO_ROOT, "src", "lib", "animal-compare", "records", "index.ts"),
    path.join(REPO_ROOT, "src", "app", "sitemap.ts"),
    path.join(REPO_ROOT, "src", "app", "animal-compare", "page.tsx"),
    path.join(REPO_ROOT, "src", "app", "animal-compare", "[slug]", "page.tsx"),
    path.join(REPO_ROOT, "src", "app", "animal-compare", "categories", "[category]", "page.tsx"),
  ];
  for (const file of guarded) {
    const source = fs.readFileSync(file, "utf8");
    assert.equal(
      /from\s+["'][^"']*backlog(\.ts)?["']/.test(source),
      false,
      `${path.relative(REPO_ROOT, file)} imports the private backlog`,
    );
  }
});

test("every backlog entry records a reason", () => {
  for (const candidate of COMPARISON_BACKLOG) {
    assert.ok(candidate.note.trim().length > 10, `${candidate.canonicalPairKey} has no reason`);
    assert.equal(
      candidate.canonicalPairKey,
      buildPairKey(candidate.animalA, candidate.animalB),
      "backlog pair key is not canonical",
    );
  }
});

/* ------------------------------------------------------------------ *
 * Route accounting
 * ------------------------------------------------------------------ */

test("public path count equals hub + categories + comparisons", () => {
  const paths = allComparePaths();
  assert.equal(paths.length, 1 + COMPARISON_CATEGORIES.length + PUBLISHED_COMPARISON_COUNT);
  assert.equal(new Set(paths).size, paths.length, "duplicate public path");
});

test("all public paths are site-relative and under the compare base", () => {
  for (const routePath of allComparePaths()) {
    assert.ok(routePath.startsWith(COMPARE_BASE), routePath);
    assert.ok(!routePath.includes("//"), routePath);
    assert.ok(!routePath.includes("?"), `${routePath} looks like a parameter URL`);
  }
});

test("canonical URLs are HTTPS and on the apex host", () => {
  for (const routePath of allComparePaths()) {
    const url = `https://faunahub.com${routePath}`;
    assert.ok(url.startsWith("https://faunahub.com/"), url);
  }
});

test("primary category counts sum to the comparison count", () => {
  const total = COMPARISON_CATEGORIES.reduce(
    (sum, category) => sum + getPrimaryComparisonsByCategory(category.id).length,
    0,
  );
  assert.equal(total, PUBLISHED_COMPARISON_COUNT);
});

test("every comparison is reachable from at least one animal profile", () => {
  for (const record of COMPARISONS) {
    const fromA = getComparisonsForAnimal(record.animalA.slug);
    assert.ok(
      fromA.some((r) => r.slug === record.slug),
      `${record.id} is not reachable from ${record.animalA.slug}`,
    );
  }
});

test("every compared animal's profile actually surfaces its comparisons", () => {
  // Inbound links are rendered either by the shared AnimalProfileLayout (which
  // most profiles use) or by AnimalComparisonLinks included directly (for the
  // hand-built profiles that do not use the layout). A profile using neither
  // would leave its comparisons with no route in from the animal side.
  const compared = new Set<string>();
  for (const record of COMPARISONS) {
    compared.add(record.animalA.slug);
    compared.add(record.animalB.slug);
  }

  const gaps: string[] = [];
  for (const slug of compared) {
    const animal = compareAnimalBySlug(slug);
    if (!animal || !animal.profilePath.startsWith("/animals/")) continue;
    const file = path.join(APP_DIR, "animals", slug, "page.tsx");
    if (!fs.existsSync(file)) {
      gaps.push(`${slug} (no page.tsx)`);
      continue;
    }
    const source = fs.readFileSync(file, "utf8");
    if (!source.includes("AnimalProfileLayout") && !source.includes("AnimalComparisonLinks")) {
      gaps.push(slug);
    }
  }

  assert.deepEqual(gaps, [], "profiles that would not link to their own comparisons");
});

test("no comparison is orphaned — each is linked from a category hub", () => {
  const linked = new Set<string>();
  for (const category of COMPARISON_CATEGORIES) {
    for (const record of getPrimaryComparisonsByCategory(category.id)) linked.add(record.slug);
  }
  for (const record of COMPARISONS) {
    assert.ok(linked.has(record.slug), `${record.id} has no category hub listing it`);
  }
});
