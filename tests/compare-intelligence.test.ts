/**
 * Compare Intelligence Layer tests.
 *
 * The layer is shared, so a defect in it is a defect on all 281 pages at once.
 * These tests assert against the DERIVED output for every record rather than
 * spot-checking a sample, because "works on rat-vs-mouse" says nothing about the
 * other 280.
 *
 * Several tests exist specifically to stop the layer from inventing content:
 * scientific names must match the animal's own profile, every link target must
 * resolve, and the derived blocks must be empty rather than filled with
 * placeholder text when a pair has no data for them.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import {
  COMPARISONS,
  COMPARISON_CATEGORIES,
  EXTERNAL_COMPARISONS,
  comparisonBySlug,
  allComparePaths,
} from "../src/lib/animal-compare/index.ts";
import { COMPARE_ANIMALS } from "../src/lib/animal-compare/animals.ts";
import { COMPARISON_BACKLOG } from "../src/lib/animal-compare/backlog.ts";
import { SCIENTIFIC_NAMES } from "../src/lib/animal-compare/scientific-names.ts";
import {
  getComparisonIntelligence,
  getConfusionClusters,
  getFeaturedComparisonsForAnimal,
  getFrequentlyConfusedAnimals,
  getKeyDifferences,
  getMisconceptions,
  getQuickAnswer,
  getRelatedComparisons,
  getTaxonomyDifference,
  relationshipLabel,
} from "../src/lib/animal-compare/intelligence.ts";
import { comparisonArticleSchema } from "../src/lib/schema.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const APP_DIR = path.join(REPO_ROOT, "src", "app");

const ANIMAL_SLUGS = new Set(COMPARE_ANIMALS.map((a) => a.slug));
const COMPARISON_SLUG_SET = new Set(COMPARISONS.map((r) => r.slug));

/* ------------------------------------------------------------------ *
 * Coverage: every page gets every block that has data
 * ------------------------------------------------------------------ */

test("every comparison receives a quick answer", () => {
  const missing = COMPARISONS.filter((r) => {
    const answer = getQuickAnswer(r);
    return !answer || answer.trim().length === 0;
  });
  assert.deepEqual(missing.map((r) => r.slug), []);
  assert.equal(COMPARISONS.length, 281);
});

test("quick answers stay in the extractable length band", () => {
  // Too short and it does not answer; too long and a snippet truncates it
  // mid-thought, which is worse than not being selected.
  const bad = COMPARISONS.filter((r) => {
    const words = getQuickAnswer(r).trim().split(/\s+/).length;
    return words < 40 || words > 120;
  });
  assert.deepEqual(bad.map((r) => `${r.slug}:${getQuickAnswer(r).split(/\s+/).length}w`), []);
});

test("every comparison receives key differences", () => {
  const bad = COMPARISONS.filter((r) => getKeyDifferences(r).length < 3);
  assert.deepEqual(bad.map((r) => r.slug), []);
});

test("every comparison receives a comparison table with real dimensions", () => {
  const bad: string[] = [];
  for (const record of COMPARISONS) {
    if (record.dimensions.length < 3) bad.push(`${record.slug}: too few`);
    for (const d of record.dimensions) {
      const values = [d.animalAValue, d.animalBValue];
      if (values.some((v) => !v || !v.trim())) bad.push(`${record.slug}:${d.id} empty`);
      if (values.some((v) => /^(unknown|n\/a|tbd|-|—)$/i.test(v.trim())))
        bad.push(`${record.slug}:${d.id} filler`);
    }
  }
  assert.deepEqual(bad, []);
});

test("every comparison receives a taxonomy difference", () => {
  const bad: string[] = [];
  for (const record of COMPARISONS) {
    const t = getTaxonomyDifference(record);
    if (!t.relationshipLabel) bad.push(`${record.slug}: no relationship label`);
    if (!t.summary || t.summary.trim().length < 40)
      bad.push(`${record.slug}: no taxonomy summary`);
  }
  assert.deepEqual(bad, []);
});

test("every relationship value maps to a label", () => {
  for (const record of COMPARISONS) {
    const label = relationshipLabel(record.relationship);
    assert.ok(label && label.length > 0, `${record.slug}: ${record.relationship}`);
  }
});

/* ------------------------------------------------------------------ *
 * The layer must not invent content
 * ------------------------------------------------------------------ */

test("scientific names come from the animal's own profile page", () => {
  // The map is generated from the profiles. If it ever drifts, a comparison
  // page would state a different name from the profile it links to.
  const mismatched: string[] = [];
  for (const [slug, name] of Object.entries(SCIENTIFIC_NAMES)) {
    const file = path.join(APP_DIR, "animals", slug, "page.tsx");
    if (!fs.existsSync(file)) {
      mismatched.push(`${slug}: no profile page`);
      continue;
    }
    const m = fs.readFileSync(file, "utf8").match(/scientificName="([^"]+)"/);
    if (!m) mismatched.push(`${slug}: profile has no scientificName`);
    else if (m[1] !== name) mismatched.push(`${slug}: "${name}" vs profile "${m[1]}"`);
  }
  assert.deepEqual(mismatched, []);
});

test("an animal without a profile scientific name gets none rather than a guess", () => {
  const invented: string[] = [];
  for (const record of COMPARISONS) {
    const t = getTaxonomyDifference(record);
    for (const [slug, value] of [
      [record.animalA.slug, t.animalAScientificName],
      [record.animalB.slug, t.animalBScientificName],
    ] as const) {
      if (value && SCIENTIFIC_NAMES[slug] !== value) invented.push(`${record.slug}:${slug}`);
    }
  }
  assert.deepEqual(invented, []);
});

test("misconceptions render only from real recorded confusions", () => {
  for (const record of COMPARISONS) {
    const items = getMisconceptions(record);
    assert.equal(items.length, record.commonConfusions.length, record.slug);
    for (const item of items) {
      assert.ok(record.commonConfusions.includes(item.claim), `${record.slug}: invented`);
      assert.ok(item.claim.trim().length > 10, `${record.slug}: stub misconception`);
    }
  }
});

/* ------------------------------------------------------------------ *
 * Related comparisons
 * ------------------------------------------------------------------ */

test("related comparisons never self-link", () => {
  const bad = COMPARISONS.filter((r) =>
    getRelatedComparisons(r).some((x) => x.slug === r.slug),
  );
  assert.deepEqual(bad.map((r) => r.slug), []);
});

test("related comparisons contain no duplicates and no reverse pairs", () => {
  const bad: string[] = [];
  for (const record of COMPARISONS) {
    const related = getRelatedComparisons(record);
    const slugs = related.map((r) => r.slug);
    if (new Set(slugs).size !== slugs.length) bad.push(`${record.slug}: duplicate`);
    const keys = related.map((r) => comparisonBySlug(r.slug)!.canonicalPairKey);
    if (new Set(keys).size !== keys.length) bad.push(`${record.slug}: reverse pair`);
    if (keys.includes(record.canonicalPairKey)) bad.push(`${record.slug}: own pair`);
  }
  assert.deepEqual(bad, []);
});

test("every related comparison resolves to a published comparison", () => {
  const bad: string[] = [];
  for (const record of COMPARISONS) {
    for (const related of getRelatedComparisons(record)) {
      if (!COMPARISON_SLUG_SET.has(related.slug))
        bad.push(`${record.slug} -> ${related.slug}`);
      if (related.path !== `/animal-compare/${related.slug}`)
        bad.push(`${record.slug} -> bad path ${related.path}`);
    }
  }
  assert.deepEqual(bad, []);
});

test("related comparisons stay a shortlist, not a link dump", () => {
  const bad = COMPARISONS.filter((r) => {
    const n = getRelatedComparisons(r).length;
    return n < 4 || n > 8;
  });
  assert.deepEqual(bad.map((r) => `${r.slug}:${getRelatedComparisons(r).length}`), []);
});

/* ------------------------------------------------------------------ *
 * Frequently confused animals
 * ------------------------------------------------------------------ */

test("frequently confused animals resolve to real public profiles", () => {
  const bad: string[] = [];
  for (const record of COMPARISONS) {
    for (const animal of getFrequentlyConfusedAnimals(record)) {
      if (!ANIMAL_SLUGS.has(animal.slug)) bad.push(`${record.slug} -> ${animal.slug}`);
      const dir = animal.profilePath.replace(/^\//, "");
      if (!fs.existsSync(path.join(APP_DIR, dir, "page.tsx")))
        bad.push(`${record.slug} -> missing route ${animal.profilePath}`);
      if (!COMPARISON_SLUG_SET.has(animal.comparisonSlug))
        bad.push(`${record.slug} -> dead comparison ${animal.comparisonSlug}`);
    }
  }
  assert.deepEqual(bad, []);
});

test("frequently confused animals never repeat the pair being compared", () => {
  const bad: string[] = [];
  for (const record of COMPARISONS) {
    const onPage = new Set([record.animalA.slug, record.animalB.slug]);
    for (const animal of getFrequentlyConfusedAnimals(record)) {
      if (onPage.has(animal.slug)) bad.push(`${record.slug} repeats ${animal.slug}`);
    }
  }
  assert.deepEqual(bad, []);
});

test("frequently confused animals are unique and capped", () => {
  for (const record of COMPARISONS) {
    const animals = getFrequentlyConfusedAnimals(record);
    const slugs = animals.map((a) => a.slug);
    assert.equal(new Set(slugs).size, slugs.length, `${record.slug}: duplicate`);
    assert.ok(slugs.length <= 6, `${record.slug}: ${slugs.length} entries`);
  }
});

/* ------------------------------------------------------------------ *
 * No backlog, no invented routes
 * ------------------------------------------------------------------ */

test("no derived block surfaces a private backlog route", () => {
  const unpublished = new Set(
    COMPARISON_BACKLOG.filter((r) => r.status !== "published").map((r) => r.proposedSlug),
  );
  const bad: string[] = [];
  for (const record of COMPARISONS) {
    const intel = getComparisonIntelligence(record);
    for (const r of intel.relatedComparisons)
      if (unpublished.has(r.slug)) bad.push(`${record.slug} -> ${r.slug}`);
    for (const a of intel.frequentlyConfusedAnimals)
      if (unpublished.has(a.comparisonSlug)) bad.push(`${record.slug} -> ${a.comparisonSlug}`);
  }
  assert.deepEqual(bad, []);
});

test("confusion clusters link only to live comparisons and real profiles", () => {
  const clusters = getConfusionClusters();
  assert.ok(clusters.length > 0, "no clusters produced");
  for (const cluster of clusters) {
    assert.ok(ANIMAL_SLUGS.has(cluster.slug), cluster.slug);
    assert.ok(
      fs.existsSync(path.join(APP_DIR, cluster.profilePath.replace(/^\//, ""), "page.tsx")),
      `${cluster.slug}: missing profile route`,
    );
    for (const item of cluster.comparisons) {
      assert.ok(COMPARISON_SLUG_SET.has(item.slug), `${cluster.slug} -> ${item.slug}`);
    }
  }
});

/* ------------------------------------------------------------------ *
 * Profile inbound linking
 * ------------------------------------------------------------------ */

test("featured comparisons for an animal always include that animal", () => {
  const bad: string[] = [];
  for (const animal of COMPARE_ANIMALS) {
    for (const record of getFeaturedComparisonsForAnimal(animal.slug)) {
      if (record.animalA.slug !== animal.slug && record.animalB.slug !== animal.slug)
        bad.push(`${animal.slug} -> ${record.slug}`);
    }
  }
  assert.deepEqual(bad, []);
});

test("featured comparisons are capped and deterministic", () => {
  for (const animal of COMPARE_ANIMALS) {
    const first = getFeaturedComparisonsForAnimal(animal.slug).map((r) => r.slug);
    const second = getFeaturedComparisonsForAnimal(animal.slug).map((r) => r.slug);
    assert.deepEqual(first, second, `${animal.slug}: unstable order`);
    assert.ok(first.length <= 6, `${animal.slug}: ${first.length} links`);
    assert.equal(new Set(first).size, first.length, `${animal.slug}: duplicate`);
  }
});

/* ------------------------------------------------------------------ *
 * Structured data
 * ------------------------------------------------------------------ */

const ALLOWED_SCHEMA_TYPES = new Set([
  "Article",
  "WebPage",
  "BreadcrumbList",
  "ListItem",
  "FAQPage",
  "Question",
  "Answer",
  "ItemList",
  "Thing",
  "Organization",
  "ImageObject",
  "WebSite",
  "SearchAction",
  "EntryPoint",
]);

const FORBIDDEN_SCHEMA_TYPES = [
  "Product",
  "Review",
  "AggregateRating",
  "Rating",
  "HowTo",
  "MedicalWebPage",
  "Dataset",
  "Offer",
  "Comparison",
  "ComparisonPage",
];

function collectTypes(node: unknown, out: string[] = []): string[] {
  if (Array.isArray(node)) {
    for (const item of node) collectTypes(item, out);
  } else if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
      if (key === "@type") {
        if (typeof value === "string") out.push(value);
        else if (Array.isArray(value)) out.push(...value.filter((v): v is string => typeof v === "string"));
      } else collectTypes(value, out);
    }
  }
  return out;
}

test("comparison schema parses and uses only supported types", () => {
  for (const record of COMPARISONS) {
    const intel = getComparisonIntelligence(record);
    const schema = comparisonArticleSchema({
      title: record.title,
      description: record.metaDescription,
      path: `/animal-compare/${record.slug}`,
      datePublished: record.lastReviewed,
      about: [
        { name: record.animalA.name, url: "https://faunahub.com/animals/x" },
        { name: record.animalB.name, url: "https://faunahub.com/animals/y" },
      ],
      keyDifferences: intel.keyDifferences.map((row) => ({
        name: row.label,
        description: `${row.animalAValue} / ${row.animalBValue}`,
      })),
    });
    const json = JSON.stringify(schema);
    assert.doesNotThrow(() => JSON.parse(json), record.slug);
    for (const type of collectTypes(schema)) {
      assert.ok(ALLOWED_SCHEMA_TYPES.has(type), `${record.slug}: unsupported @type ${type}`);
      assert.ok(!FORBIDDEN_SCHEMA_TYPES.includes(type), `${record.slug}: forbidden ${type}`);
    }
  }
});

test("comparison schema never asserts a winner or a rating", () => {
  for (const record of COMPARISONS.slice(0, 40)) {
    const intel = getComparisonIntelligence(record);
    const json = JSON.stringify(
      comparisonArticleSchema({
        title: record.title,
        description: record.metaDescription,
        path: `/animal-compare/${record.slug}`,
        datePublished: record.lastReviewed,
        about: [],
        keyDifferences: intel.keyDifferences.map((r) => ({ name: r.label, description: r.label })),
      }),
    );
    for (const banned of ["ratingValue", "bestRating", "winner", "aggregateRating", "reviewRating"]) {
      assert.equal(json.includes(banned), false, `${record.slug}: ${banned}`);
    }
  }
});

test("about entities point at animals that exist in the registry", () => {
  const bad: string[] = [];
  for (const record of COMPARISONS) {
    for (const ref of [record.animalA, record.animalB]) {
      const animal = COMPARE_ANIMALS.find((a) => a.slug === ref.slug);
      if (!animal) bad.push(`${record.slug}: ${ref.slug}`);
      else if (!animal.profilePath.startsWith("/")) bad.push(`${record.slug}: bad path`);
    }
  }
  assert.deepEqual(bad, []);
});

/* ------------------------------------------------------------------ *
 * Invariants the intelligence layer must not disturb
 * ------------------------------------------------------------------ */

test("comparison count and public paths are unchanged", () => {
  assert.equal(COMPARISONS.length, 281);
  // 1 hub + 10 categories + 281 comparisons
  assert.equal(allComparePaths().length, 292);
  assert.equal(COMPARISON_CATEGORIES.length, 10);
});

test("no reverse pairs exist in the registry", () => {
  const keys = COMPARISONS.map((r) => r.canonicalPairKey);
  assert.equal(new Set(keys).size, keys.length);
  for (const record of COMPARISONS) {
    assert.equal(
      record.canonicalPairKey,
      [record.animalA.slug, record.animalB.slug].sort().join("--"),
      record.slug,
    );
  }
});

test("metadata stays unique across all comparisons", () => {
  const titles = COMPARISONS.map((r) => r.metaTitle);
  const descriptions = COMPARISONS.map((r) => r.metaDescription);
  const headings = COMPARISONS.map((r) => r.title);
  assert.equal(new Set(titles).size, titles.length, "duplicate metaTitle");
  assert.equal(new Set(descriptions).size, descriptions.length, "duplicate metaDescription");
  assert.equal(new Set(headings).size, headings.length, "duplicate H1");
});

test("no comparison collides with a legacy /compare page", () => {
  const legacy = new Set(EXTERNAL_COMPARISONS.map((e) => e.canonicalPairKey));
  const collisions = COMPARISONS.filter((r) => legacy.has(r.canonicalPairKey));
  assert.deepEqual(collisions.map((r) => r.slug), []);
});

/* ------------------------------------------------------------------ *
 * Regressions from the audit that produced this layer
 * ------------------------------------------------------------------ */

test("domestic-vs-wild is only used when exactly one animal is domestic", async () => {
  // Surfacing the relationship as a visible label made a latent data error into
  // a visible false claim: two records described a hybrid and its own domestic
  // parent species as "domestic against wild".
  const { isDomestic } = await import("../src/lib/animals/classification.ts");
  const bad = COMPARISONS.filter((r) => r.relationship === "domestic-vs-wild").filter(
    (r) => isDomestic(r.animalA.slug) === isDomestic(r.animalB.slug),
  );
  assert.deepEqual(bad.map((r) => r.slug), []);
});

test("the taxonomy block never asserts group-level-ness it has not verified", async () => {
  // Six pages rendered "Group-level name — no single scientific name applies"
  // for the dog and cat cluster hubs. That phrasing reads as a claim about the
  // taxon, but was really a statement about missing data: Canis familiaris and
  // Felis catus are perfectly well defined, and the generator simply cannot see
  // them because it reads /animals/<slug> pages and those two are hubs.
  //
  // The component must render only names it actually has. This test pins the
  // absence of the claim rather than the presence of any particular wording, so
  // it keeps holding if the copy is reworded later.
  const raw = fs.readFileSync(
    path.join(REPO_ROOT, "src", "components", "animal-compare", "ComparisonTaxonomy.tsx"),
    "utf8",
  );
  // Comments are stripped first: the block explaining why the claim was removed
  // necessarily quotes it, and that documentation is worth keeping.
  const component = raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
  assert.equal(
    /Group-level name/.test(component),
    false,
    "taxonomy block still claims an unverified name is group-level",
  );
  assert.ok(
    /\.filter\(\(n\) => n\.scientific\)/.test(component),
    "taxonomy block no longer filters to animals that actually have a name",
  );

  // And the data path that produced it: every hub-kind animal reaches the block
  // with no scientific name, so none of them may be captioned.
  const hubs = COMPARE_ANIMALS.filter((a) => a.profileKind === "hub");
  assert.ok(hubs.length > 0, "no hub animals to check");
  for (const hub of hubs) {
    assert.equal(
      SCIENTIFIC_NAMES[hub.slug],
      undefined,
      `${hub.slug}: hub unexpectedly has a generated name — revisit the fallback`,
    );
  }
});

test("the legacy compare hub links to the Animal Compare Center", () => {
  // It previously advertised categories as "planned" that had been live for
  // some time, and linked nowhere into the 281-page cluster.
  const source = fs.readFileSync(path.join(APP_DIR, "compare", "page.tsx"), "utf8");
  assert.ok(source.includes("/animal-compare"), "legacy hub does not link to the cluster");
  assert.equal(
    /Planned comparisons include/.test(source),
    false,
    "legacy hub still advertises live categories as planned",
  );
});

test("no WebmasterID secret key is present in the comparison layer", () => {
  // The needle is assembled rather than written out. A test that spelled the
  // prefix literally would itself match the repository-wide secret scan,
  // permanently pinning that scan above zero and making a real leak
  // indistinguishable from this guard.
  const SECRET_PREFIX = ["wmsk", "_"].join("");
  const files = [
    path.join(REPO_ROOT, "src", "lib", "animal-compare", "intelligence.ts"),
    path.join(REPO_ROOT, "src", "lib", "animal-compare", "scientific-names.ts"),
    path.join(REPO_ROOT, "src", "lib", "schema.ts"),
    path.join(APP_DIR, "animal-compare", "[slug]", "page.tsx"),
    path.join(APP_DIR, "animal-compare", "page.tsx"),
    path.join(APP_DIR, "compare", "page.tsx"),
  ];
  for (const file of files) {
    assert.equal(fs.readFileSync(file, "utf8").includes(SECRET_PREFIX), false, file);
  }
});
