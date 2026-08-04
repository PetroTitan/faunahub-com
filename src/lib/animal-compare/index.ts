/**
 * Animal Compare Center — public registry.
 *
 * This module is the ONLY thing route generation reads. The private candidate
 * backlog (`./backlog.ts`) is deliberately not imported here, so a backlog entry
 * can never leak into a route, a sitemap entry, or an internal link.
 *
 * All lookups are precomputed into Maps at module load. Route rendering must
 * never scan the full record array — with ~500 routes that would be quadratic.
 */
import { COMPARISON_RECORDS } from "./records/index.ts";
import { compareAnimalBySlug, isKnownAnimalSlug, type CompareAnimal } from "./animals.ts";
import { ALL_CATEGORY_IDS, categoryPath } from "./categories.ts";
import { isKnownHubPath } from "./hubs.ts";
import type {
  ComparisonCategory,
  ComparisonRecord,
  ExternalComparison,
} from "./types.ts";

export const COMPARE_BASE = "/animal-compare";

// NOTE: `./sources` is deliberately NOT re-exported here. It reaches into
// `@/lib/educational/animal-sources`, and the `@/` alias does not resolve under
// Node's test runner. Keeping this module alias-free is what allows
// tests/animal-compare.test.ts to import the registry directly. Route files
// import source helpers from "@/lib/animal-compare/sources" instead.
export { COMPARISON_CATEGORIES, categoryById, categoryBySlug, categoryName, categoryPath } from "./categories.ts";
export { COMPARE_ANIMALS, compareAnimalBySlug, isKnownAnimalSlug } from "./animals.ts";
export { HUB_LABELS, hubLabel, isKnownHubPath } from "./hubs.ts";
export type * from "./types.ts";

/** Build the canonical, order-independent key for a pair. */
export function buildPairKey(slugA: string, slugB: string): string {
  return [slugA, slugB].sort().join("--");
}

/**
 * Comparisons that already exist on FaunaHub as hand-written pages under
 * /compare. They are surfaced from the Compare Center but are NOT rebuilt under
 * /animal-compare — republishing an already-indexed pair at a second URL would
 * be self-inflicted duplicate content. The pair keys below are blocked from the
 * registry by `validateComparisonRegistry`.
 */
export const EXTERNAL_COMPARISONS: ExternalComparison[] = [
  {
    canonicalPairKey: buildPairKey("lion", "tiger"),
    title: "Lion vs Tiger",
    href: "/compare/lion-vs-tiger",
    summary: "Two big cats separated by continent and by social structure — pride life against solitary territory.",
    category: "mammals",
  },
  {
    canonicalPairKey: buildPairKey("leopard", "jaguar"),
    title: "Leopard vs Jaguar",
    href: "/compare/leopard-vs-jaguar",
    summary: "Rosette pattern, skull build and continent separate two spotted cats that are routinely mixed up.",
    category: "look-alikes",
  },
  {
    canonicalPairKey: buildPairKey("cheetah", "leopard"),
    title: "Cheetah vs Leopard",
    href: "/compare/cheetah-vs-leopard",
    summary: "Solid spots against rosettes, and a sprinter's body against an ambush climber's.",
    category: "look-alikes",
  },
  {
    canonicalPairKey: buildPairKey("wolf", "dog"),
    title: "Wolf vs Dog",
    href: "/compare/wolf-vs-dog",
    summary: "What domestication actually changed between a wild canid and the domestic dog.",
    category: "pets-domestic",
  },
  {
    canonicalPairKey: buildPairKey("alligator", "crocodile"),
    title: "Alligator vs Crocodile",
    href: "/compare/alligator-vs-crocodile",
    summary: "Snout profile, tooth arrangement and range — the three cues that actually separate them.",
    category: "reptiles-amphibians",
  },
  {
    canonicalPairKey: buildPairKey("falcon", "eagle"),
    title: "Falcon vs Eagle",
    href: "/compare/falcon-vs-eagle",
    summary: "Two raptor groups in separate orders, with two completely different flight styles.",
    category: "birds",
  },
  {
    canonicalPairKey: buildPairKey("rabbit", "guinea-pig"),
    title: "Rabbit vs Guinea Pig",
    href: "/compare/rabbit-vs-guinea-pig",
    summary: "Different mammalian orders, different social biology, different household demands.",
    category: "pets-domestic",
  },
];

const EXTERNAL_PAIR_KEYS = new Set(EXTERNAL_COMPARISONS.map((e) => e.canonicalPairKey));

export function isExternallyCoveredPair(slugA: string, slugB: string): boolean {
  return EXTERNAL_PAIR_KEYS.has(buildPairKey(slugA, slugB));
}

export function externalComparisonsForCategory(category: ComparisonCategory): ExternalComparison[] {
  return EXTERNAL_COMPARISONS.filter((e) => e.category === category);
}

/* ------------------------------------------------------------------ *
 * Precomputed indexes. Built once at module load, never per request.
 * ------------------------------------------------------------------ */

export const COMPARISONS: ComparisonRecord[] = COMPARISON_RECORDS;

const BY_SLUG = new Map<string, ComparisonRecord>();
const BY_PAIR_KEY = new Map<string, ComparisonRecord>();
const BY_ANIMAL = new Map<string, ComparisonRecord[]>();
const BY_CATEGORY = new Map<ComparisonCategory, ComparisonRecord[]>();

for (const id of ALL_CATEGORY_IDS) BY_CATEGORY.set(id, []);

for (const record of COMPARISONS) {
  BY_SLUG.set(record.slug, record);
  BY_PAIR_KEY.set(record.canonicalPairKey, record);

  for (const slug of [record.animalA.slug, record.animalB.slug]) {
    const list = BY_ANIMAL.get(slug);
    if (list) list.push(record);
    else BY_ANIMAL.set(slug, [record]);
  }

  BY_CATEGORY.get(record.primaryCategory)?.push(record);
  for (const secondary of record.secondaryCategories ?? []) {
    if (secondary !== record.primaryCategory) BY_CATEGORY.get(secondary)?.push(record);
  }
}

export function comparisonBySlug(slug: string): ComparisonRecord | undefined {
  return BY_SLUG.get(slug);
}

export function comparisonByPairKey(key: string): ComparisonRecord | undefined {
  return BY_PAIR_KEY.get(key);
}

/**
 * Resolve a pair in either order to its single canonical record. This is what
 * makes the hub's comparison finder order-independent: selecting B then A lands
 * on exactly the same URL as selecting A then B.
 */
export function comparisonForPair(slugA: string, slugB: string): ComparisonRecord | undefined {
  return BY_PAIR_KEY.get(buildPairKey(slugA, slugB));
}

/** Every published comparison featuring this animal, in registry order. */
export function getComparisonsForAnimal(slug: string): ComparisonRecord[] {
  return BY_ANIMAL.get(slug) ?? [];
}

/** Comparisons filed under a category, primary and secondary. */
export function getComparisonsByCategory(category: ComparisonCategory): ComparisonRecord[] {
  return BY_CATEGORY.get(category) ?? [];
}

/** Comparisons whose PRIMARY shelf is this category. Sums to the page count. */
export function getPrimaryComparisonsByCategory(category: ComparisonCategory): ComparisonRecord[] {
  return (BY_CATEGORY.get(category) ?? []).filter((r) => r.primaryCategory === category);
}

export function comparisonPath(record: ComparisonRecord): string {
  return `${COMPARE_BASE}/${record.slug}`;
}

export function comparisonHeading(record: ComparisonRecord): string {
  return `${record.animalA.name} vs ${record.animalB.name}: Key Differences Explained`;
}

/** The other animal in a pair, given one of them. Used for inbound linking. */
export function partnerAnimal(record: ComparisonRecord, animalSlug: string): CompareAnimal | undefined {
  const otherSlug = record.animalA.slug === animalSlug ? record.animalB.slug : record.animalA.slug;
  return compareAnimalBySlug(otherSlug);
}

export const PUBLISHED_COMPARISON_COUNT = COMPARISONS.length;
export const COMPARISON_SLUGS: string[] = COMPARISONS.map((r) => r.slug);

/** All public Compare Center routes: hub + category hubs + comparisons. */
export function allComparePaths(): string[] {
  return [
    COMPARE_BASE,
    ...ALL_CATEGORY_IDS.map((id) => categoryPath(id)),
    ...COMPARISONS.map((r) => comparisonPath(r)),
  ];
}

/* ------------------------------------------------------------------ *
 * Validation. Exercised by tests/animal-compare.test.ts; kept in source
 * so the rules travel with the data rather than living only in tests.
 * ------------------------------------------------------------------ */

export interface RegistryIssue {
  recordId: string;
  issue: string;
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateComparisonRegistry(): RegistryIssue[] {
  const issues: RegistryIssue[] = [];
  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();
  const seenPairKeys = new Set<string>();
  const seenTitles = new Map<string, string>();
  const seenDescriptions = new Map<string, string>();
  const seenShortAnswers = new Map<string, string>();

  const add = (recordId: string, issue: string) => issues.push({ recordId, issue });

  for (const r of COMPARISONS) {
    if (seenIds.has(r.id)) add(r.id, "duplicate id");
    seenIds.add(r.id);

    if (seenSlugs.has(r.slug)) add(r.id, `duplicate slug "${r.slug}"`);
    seenSlugs.add(r.slug);

    if (!SLUG_PATTERN.test(r.slug)) add(r.id, `slug is not kebab-case: "${r.slug}"`);

    const expectedKey = buildPairKey(r.animalA.slug, r.animalB.slug);
    if (r.canonicalPairKey !== expectedKey) {
      add(r.id, `canonicalPairKey "${r.canonicalPairKey}" should be "${expectedKey}"`);
    }
    if (seenPairKeys.has(expectedKey)) {
      add(r.id, `duplicate pair — "${expectedKey}" already published (reverse or repeat)`);
    }
    seenPairKeys.add(expectedKey);

    if (EXTERNAL_PAIR_KEYS.has(expectedKey)) {
      add(r.id, `pair "${expectedKey}" already exists at an older /compare URL`);
    }

    if (r.animalA.slug === r.animalB.slug) add(r.id, "animalA and animalB are the same animal");
    if (!isKnownAnimalSlug(r.animalA.slug)) add(r.id, `unresolved animal slug "${r.animalA.slug}"`);
    if (!isKnownAnimalSlug(r.animalB.slug)) add(r.id, `unresolved animal slug "${r.animalB.slug}"`);

    const words = r.shortAnswer.trim().split(/\s+/).length;
    if (words < 45 || words > 110) add(r.id, `shortAnswer is ${words} words (expected 45–110)`);
    if (!r.centralDifference.trim()) add(r.id, "missing centralDifference");
    if (!r.whyCompare.trim()) add(r.id, "missing whyCompare");

    if (r.dimensions.length < 5) add(r.id, `only ${r.dimensions.length} dimensions (expected >= 5)`);
    const dimIds = new Set<string>();
    for (const d of r.dimensions) {
      if (dimIds.has(d.id)) add(r.id, `duplicate dimension id "${d.id}"`);
      dimIds.add(d.id);
      if (!d.animalAValue.trim() || !d.animalBValue.trim()) {
        add(r.id, `dimension "${d.id}" has an empty value — omit the row instead`);
      }
      if (/^unknown$/i.test(d.animalAValue.trim()) || /^unknown$/i.test(d.animalBValue.trim())) {
        add(r.id, `dimension "${d.id}" uses "Unknown" as filler — omit the row instead`);
      }
      if (!d.interpretation.trim()) add(r.id, `dimension "${d.id}" has no interpretation`);
    }

    if (r.keyDifferences.length < 3) add(r.id, "fewer than 3 key differences");
    if (r.similarities.length < 2) add(r.id, "fewer than 2 similarities");
    if (r.commonConfusions.length < 1) add(r.id, "no common confusions recorded");

    if (r.faqs.length < 4 || r.faqs.length > 6) add(r.id, `${r.faqs.length} FAQs (expected 4–6)`);
    const faqQuestions = new Set<string>();
    for (const f of r.faqs) {
      const key = normalize(f.question);
      if (faqQuestions.has(key)) add(r.id, "duplicate FAQ question within the page");
      faqQuestions.add(key);
      if (f.answer.trim().split(/\s+/).length < 25) add(r.id, "FAQ answer is too thin");
    }

    if (r.metaTitle.length > 65) add(r.id, `metaTitle is ${r.metaTitle.length} chars (max 65)`);
    if (r.metaDescription.length < 110 || r.metaDescription.length > 165) {
      add(r.id, `metaDescription is ${r.metaDescription.length} chars (expected 110–165)`);
    }

    const titleKey = normalize(r.metaTitle);
    if (seenTitles.has(titleKey)) add(r.id, `duplicate metaTitle with ${seenTitles.get(titleKey)}`);
    seenTitles.set(titleKey, r.id);

    const descKey = normalize(r.metaDescription);
    if (seenDescriptions.has(descKey)) add(r.id, `duplicate metaDescription with ${seenDescriptions.get(descKey)}`);
    seenDescriptions.set(descKey, r.id);

    const answerKey = normalize(r.shortAnswer);
    if (seenShortAnswers.has(answerKey)) add(r.id, `duplicate shortAnswer with ${seenShortAnswers.get(answerKey)}`);
    seenShortAnswers.set(answerKey, r.id);

    if (!r.sourceIds.length) add(r.id, "no source families declared");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.lastReviewed)) add(r.id, `bad lastReviewed "${r.lastReviewed}"`);

    for (const related of r.relatedComparisonSlugs) {
      if (related === r.slug) add(r.id, "relates to itself");
      if (!seenSlugsLater(related)) add(r.id, `related comparison "${related}" does not resolve`);
    }
    for (const hub of r.relatedHubPaths) {
      if (!hub.startsWith("/")) add(r.id, `related hub path "${hub}" is not site-relative`);
      if (hub === "#" || hub.includes("#placeholder")) add(r.id, "placeholder hub path");
      if (!isKnownHubPath(hub)) add(r.id, `related hub path "${hub}" is not in HUB_LABELS`);
    }
    if (new Set(r.relatedHubPaths).size !== r.relatedHubPaths.length) {
      add(r.id, "duplicate related hub path");
    }
  }

  return issues;
}

function seenSlugsLater(slug: string): boolean {
  return BY_SLUG.has(slug);
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

/**
 * Cross-record near-duplicate detection over the prose fields that carry the
 * page's unique value. Returns pairs whose Jaccard similarity over word
 * trigrams exceeds `threshold`.
 */
export function findNearDuplicateComparisons(threshold = 0.5): {
  a: string;
  b: string;
  field: string;
  similarity: number;
}[] {
  const fields: { name: string; pick: (r: ComparisonRecord) => string }[] = [
    { name: "shortAnswer", pick: (r) => r.shortAnswer },
    { name: "centralDifference", pick: (r) => r.centralDifference },
  ];

  const out: { a: string; b: string; field: string; similarity: number }[] = [];

  for (const field of fields) {
    // Bucket by shared trigram so this stays close to linear instead of
    // comparing every record against every other record.
    const buckets = new Map<string, { id: string; grams: Set<string> }[]>();
    const entries = COMPARISONS.map((r) => ({ id: r.id, grams: trigrams(field.pick(r)) }));

    for (const entry of entries) {
      for (const gram of entry.grams) {
        const bucket = buckets.get(gram);
        if (bucket) bucket.push(entry);
        else buckets.set(gram, [entry]);
      }
    }

    const checked = new Set<string>();
    for (const bucket of buckets.values()) {
      if (bucket.length < 2 || bucket.length > 40) continue;
      for (let i = 0; i < bucket.length; i++) {
        for (let j = i + 1; j < bucket.length; j++) {
          const key = `${bucket[i].id}|${bucket[j].id}`;
          if (checked.has(key)) continue;
          checked.add(key);
          const sim = jaccard(bucket[i].grams, bucket[j].grams);
          if (sim > threshold) {
            out.push({ a: bucket[i].id, b: bucket[j].id, field: field.name, similarity: sim });
          }
        }
      }
    }
  }

  return out;
}

function trigrams(text: string): Set<string> {
  const words = normalize(text).split(" ").filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + 2 < words.length; i++) out.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const value of a) if (b.has(value)) shared++;
  return shared / (a.size + b.size - shared);
}
