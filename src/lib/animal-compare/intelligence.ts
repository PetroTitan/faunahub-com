/**
 * Compare Intelligence Layer — derived views over the existing comparison
 * registry.
 *
 * Design rule, and the reason this file contains no prose about animals: every
 * block below is DERIVED from fields that were already authored, reviewed and
 * gated in `records/batch-*.ts`. Nothing here writes a sentence about a species.
 * The only text this module owns is structural labelling — the name of a
 * taxonomic relationship, a column heading — which is true of every pair by
 * construction and cannot become a fabricated claim about an animal.
 *
 * That constraint is deliberate. A layer that generated per-pair sentences at
 * render time would be producing 281 pages of unreviewed content wearing the
 * authority of the reviewed pages around it.
 *
 * Everything is computed once at module scope. Route rendering does map lookups
 * only — no scans, no per-page filtering over the full registry.
 */
import type {
  ComparisonRecord,
  ComparisonRelationship,
  ComparisonCategory,
} from "./types.ts";
import { COMPARISONS, comparisonBySlug, comparisonPath } from "./index.ts";
import { COMPARE_ANIMALS, type CompareAnimal } from "./animals.ts";
import { scientificNameFor } from "./scientific-names.ts";

/* ------------------------------------------------------------------ *
 * Precomputed indexes
 * ------------------------------------------------------------------ */

/** Comparisons keyed by each participating animal slug. */
const BY_ANIMAL = new Map<string, ComparisonRecord[]>();
/** Comparisons keyed by primary category. */
const BY_CATEGORY = new Map<ComparisonCategory, ComparisonRecord[]>();
/** Comparisons keyed by relationship. */
const BY_RELATIONSHIP = new Map<ComparisonRelationship, ComparisonRecord[]>();

for (const record of COMPARISONS) {
  for (const slug of [record.animalA.slug, record.animalB.slug]) {
    const list = BY_ANIMAL.get(slug);
    if (list) list.push(record);
    else BY_ANIMAL.set(slug, [record]);
  }
  const cat = BY_CATEGORY.get(record.primaryCategory);
  if (cat) cat.push(record);
  else BY_CATEGORY.set(record.primaryCategory, [record]);

  const rel = BY_RELATIONSHIP.get(record.relationship);
  if (rel) rel.push(record);
  else BY_RELATIONSHIP.set(record.relationship, [record]);
}

/** Animals keyed by slug, for validating every link target before rendering. */
const ANIMAL_BY_SLUG = new Map<string, CompareAnimal>(
  COMPARE_ANIMALS.map((a) => [a.slug, a]),
);

export function animalBySlug(slug: string): CompareAnimal | undefined {
  return ANIMAL_BY_SLUG.get(slug);
}

/* ------------------------------------------------------------------ *
 * Relationship labelling
 * ------------------------------------------------------------------ */

/**
 * Human-readable label for each relationship value.
 *
 * These describe the SHAPE of the relationship, not the biology of any pair, so
 * they are safe to apply uniformly. The biology stays where it was written and
 * reviewed: `narrative.taxonomy`.
 */
const RELATIONSHIP_LABEL: Record<ComparisonRelationship, string> = {
  "commonly-confused": "Commonly confused",
  "close-relatives": "Close relatives",
  "species-vs-group": "Species against group name",
  "domestic-vs-wild": "Domestic against wild",
  "similar-appearance": "Similar in appearance",
  "similar-ecological-role": "Similar ecological role",
  "same-habitat": "Share a habitat",
  "contrasting-adaptations": "Contrasting adaptations",
  "pet-decision": "Both kept by people",
  "taxonomy-clarification": "Taxonomy clarification",
};

export function relationshipLabel(relationship: ComparisonRelationship): string {
  return RELATIONSHIP_LABEL[relationship];
}

/** Relationships where the pairing exists because people mix the two up. */
const CONFUSION_RELATIONSHIPS: ReadonlySet<ComparisonRelationship> = new Set([
  "commonly-confused",
  "similar-appearance",
  "taxonomy-clarification",
  "species-vs-group",
]);

/* ------------------------------------------------------------------ *
 * Quick answer
 * ------------------------------------------------------------------ */

/**
 * The direct answer shown above the fold.
 *
 * `shortAnswer` is already gated to 45–110 words and already answers the
 * question directly, so this returns it unchanged. It is a named accessor
 * rather than a raw field read so the extraction target has one definition.
 */
export function getQuickAnswer(record: ComparisonRecord): string {
  return record.shortAnswer;
}

/* ------------------------------------------------------------------ *
 * Key differences
 * ------------------------------------------------------------------ */

export interface KeyDifferenceRow {
  id: string;
  label: string;
  animalAValue: string;
  animalBValue: string;
  interpretation?: string;
}

/**
 * The summary box near the top of the page.
 *
 * Built from `dimensions`, which already carry a label and a value for each
 * animal — the exact shape a summary box needs. Taking the first rows preserves
 * the author's ordering, which puts the decisive dimension first.
 *
 * The full set still renders lower down in the comparison table; this is a
 * lead-in, not a second copy of the data.
 */
export function getKeyDifferences(
  record: ComparisonRecord,
  limit = 4,
): KeyDifferenceRow[] {
  return record.dimensions.slice(0, limit).map((d) => ({
    id: d.id,
    label: d.label,
    animalAValue: d.animalAValue,
    animalBValue: d.animalBValue,
    interpretation: d.interpretation,
  }));
}

/* ------------------------------------------------------------------ *
 * Taxonomy difference
 * ------------------------------------------------------------------ */

export interface TaxonomyDifference {
  relationshipLabel: string;
  summary: string;
  animalAName: string;
  animalBName: string;
  /** Undefined when the profile carries no scientific name — never invented. */
  animalAScientificName?: string;
  animalBScientificName?: string;
  caveat?: string;
}

/**
 * Structured view of how the two animals are related.
 *
 * `summary` is `narrative.taxonomy` verbatim — the reviewed paragraph, not a
 * rewrite. Scientific names come from the animals' own profile pages via the
 * generated map, so a comparison page can never disagree with the profile it
 * links to, and an animal with no scientific name on its profile simply has
 * none here.
 */
export function getTaxonomyDifference(record: ComparisonRecord): TaxonomyDifference {
  return {
    relationshipLabel: relationshipLabel(record.relationship),
    summary: record.narrative.taxonomy,
    animalAName: record.animalA.name,
    animalBName: record.animalB.name,
    animalAScientificName: scientificNameFor(record.animalA.slug),
    animalBScientificName: scientificNameFor(record.animalB.slug),
    caveat: record.taxonomyCaveat,
  };
}

/* ------------------------------------------------------------------ *
 * Misconceptions
 * ------------------------------------------------------------------ */

export interface Misconception {
  claim: string;
}

/**
 * Pair-specific misconceptions.
 *
 * `commonConfusions` entries are already written as the mistaken belief itself
 * ("Treating eagle as a taxonomic rank, when it is a size-and-shape label…"),
 * which is exactly what this section needs. They are returned as-is.
 *
 * No correction text is generated to sit beside them. Manufacturing 800-odd
 * corrections from adjacent fields would produce unreviewed claims about
 * animals, which is the one thing this layer must not do — and the corrections
 * already exist as reviewed prose in the sections above and below.
 */
export function getMisconceptions(record: ComparisonRecord): Misconception[] {
  return record.commonConfusions.map((claim) => ({ claim }));
}

/* ------------------------------------------------------------------ *
 * Frequently confused animals
 * ------------------------------------------------------------------ */

export interface FrequentlyConfusedAnimal {
  slug: string;
  name: string;
  profilePath: string;
  /** The animal on this page that the third animal is confused with. */
  confusedWithName: string;
  /** Existing comparison covering that confusion. Always a live route. */
  comparisonSlug: string;
  comparisonTitle: string;
  relationshipLabel: string;
}

/**
 * Third animals that are themselves commonly confused with one of this pair.
 *
 * Derived strictly from comparisons that already exist: for each of A and B, the
 * other confusion-relationship comparisons that animal appears in. Every entry
 * therefore points at a published page and a real profile, and the "reason" is
 * not invented text — it is the relationship label of the existing comparison
 * plus which animal the confusion involves.
 *
 * A and B are excluded, so this never restates the pair the reader is already on.
 */
export function getFrequentlyConfusedAnimals(
  record: ComparisonRecord,
  limit = 6,
): FrequentlyConfusedAnimal[] {
  const onPage = new Set([record.animalA.slug, record.animalB.slug]);
  const seen = new Set<string>();
  const out: FrequentlyConfusedAnimal[] = [];

  // Alternate between A's confusions and B's so one animal cannot fill the block.
  const buckets = [record.animalA, record.animalB].map((animal) =>
    (BY_ANIMAL.get(animal.slug) ?? [])
      .filter((r) => r.slug !== record.slug)
      .filter((r) => CONFUSION_RELATIONSHIPS.has(r.relationship))
      .map((r) => {
        const other = r.animalA.slug === animal.slug ? r.animalB : r.animalA;
        return { record: r, other, confusedWith: animal };
      })
      .filter((x) => !onPage.has(x.other.slug)),
  );

  const maxDepth = Math.max(...buckets.map((b) => b.length), 0);
  for (let depth = 0; depth < maxDepth && out.length < limit; depth += 1) {
    for (const bucket of buckets) {
      if (out.length >= limit) break;
      const entry = bucket[depth];
      if (!entry) continue;
      if (seen.has(entry.other.slug)) continue;
      const animal = ANIMAL_BY_SLUG.get(entry.other.slug);
      if (!animal) continue; // never link an animal without a real profile
      seen.add(entry.other.slug);
      out.push({
        slug: animal.slug,
        name: animal.name,
        profilePath: animal.profilePath,
        confusedWithName: entry.confusedWith.name,
        comparisonSlug: entry.record.slug,
        comparisonTitle: entry.record.title,
        relationshipLabel: relationshipLabel(entry.record.relationship),
      });
    }
  }

  return out;
}

/* ------------------------------------------------------------------ *
 * Related comparisons
 * ------------------------------------------------------------------ */

export interface RelatedComparison {
  slug: string;
  title: string;
  path: string;
  categoryId: ComparisonCategory;
  relationshipLabel: string;
  /** Why this appears — shown as a small label, derived not authored. */
  connection: string;
}

/**
 * Related comparisons, ranked deterministically.
 *
 * Order: the author's own `relatedComparisonSlugs` first (they were chosen for
 * this pair specifically), then derived neighbours — shares animal A, shares
 * animal B, same relationship, same category. Deduplicated, self excluded, and
 * capped so the block stays a shortlist rather than a link dump.
 *
 * Interleaving the shares-A and shares-B pools matters: taking them in sequence
 * would fill the block with one animal's comparisons on pages where that animal
 * happens to have many.
 */
export function getRelatedComparisons(
  record: ComparisonRecord,
  limit = 8,
): RelatedComparison[] {
  const seen = new Set<string>([record.slug]);
  const out: RelatedComparison[] = [];

  const push = (candidate: ComparisonRecord | undefined, connection: string) => {
    if (!candidate || out.length >= limit) return;
    if (seen.has(candidate.slug)) return;
    // Reverse pairs cannot exist in the registry, but guard anyway so a future
    // data change cannot surface the same pair twice under two slugs.
    if (candidate.canonicalPairKey === record.canonicalPairKey) return;
    seen.add(candidate.slug);
    out.push({
      slug: candidate.slug,
      title: candidate.title,
      path: comparisonPath(candidate),
      categoryId: candidate.primaryCategory,
      relationshipLabel: relationshipLabel(candidate.relationship),
      connection,
    });
  };

  // 1. Editorially chosen for this pair.
  for (const slug of record.relatedComparisonSlugs) {
    push(comparisonBySlug(slug), "Editor's pick");
  }

  // 2. Shares one of the two animals, alternating so neither dominates.
  const sharesA = (BY_ANIMAL.get(record.animalA.slug) ?? []).filter(
    (r) => r.slug !== record.slug,
  );
  const sharesB = (BY_ANIMAL.get(record.animalB.slug) ?? []).filter(
    (r) => r.slug !== record.slug,
  );
  const depth = Math.max(sharesA.length, sharesB.length);
  for (let i = 0; i < depth && out.length < limit; i += 1) {
    push(sharesA[i], `More on the ${record.animalA.name.toLowerCase()}`);
    push(sharesB[i], `More on the ${record.animalB.name.toLowerCase()}`);
  }

  // 3. Same relationship, then same category, to round the block out.
  for (const candidate of BY_RELATIONSHIP.get(record.relationship) ?? []) {
    push(candidate, relationshipLabel(record.relationship));
  }
  for (const candidate of BY_CATEGORY.get(record.primaryCategory) ?? []) {
    push(candidate, "Same category");
  }

  return out;
}

/* ------------------------------------------------------------------ *
 * Inbound linking from animal profiles
 * ------------------------------------------------------------------ */

/**
 * Ranking used when a profile page picks which comparisons to surface.
 *
 * Identification questions come first because that is what a reader arriving at
 * an animal profile is most often trying to resolve; ecology and behaviour sit
 * lower because those readers are usually already past the "which is it" stage.
 */
const PROFILE_RELATIONSHIP_RANK: Record<ComparisonRelationship, number> = {
  "commonly-confused": 0,
  "similar-appearance": 1,
  "taxonomy-clarification": 2,
  "species-vs-group": 3,
  "close-relatives": 4,
  "domestic-vs-wild": 5,
  "pet-decision": 6,
  "similar-ecological-role": 7,
  "same-habitat": 8,
  "contrasting-adaptations": 9,
};

/**
 * Comparisons to surface on an animal's profile, best first.
 *
 * Ties break on slug so the order is stable across builds — an unstable order
 * would churn the rendered HTML of hundreds of pages on every rebuild for no
 * reason.
 */
export function getFeaturedComparisonsForAnimal(
  slug: string,
  limit = 6,
): ComparisonRecord[] {
  const all = BY_ANIMAL.get(slug) ?? [];
  return [...all]
    .sort((a, b) => {
      const rank =
        PROFILE_RELATIONSHIP_RANK[a.relationship] -
        PROFILE_RELATIONSHIP_RANK[b.relationship];
      if (rank !== 0) return rank;
      return a.slug.localeCompare(b.slug);
    })
    .slice(0, limit);
}

/* ------------------------------------------------------------------ *
 * Aggregate accessor
 * ------------------------------------------------------------------ */

export interface ComparisonIntelligence {
  quickAnswer: string;
  keyDifferences: KeyDifferenceRow[];
  taxonomyDifference: TaxonomyDifference;
  misconceptions: Misconception[];
  frequentlyConfusedAnimals: FrequentlyConfusedAnimal[];
  relatedComparisons: RelatedComparison[];
}

/** Everything the comparison renderer needs, resolved in one call. */
export function getComparisonIntelligence(
  record: ComparisonRecord,
): ComparisonIntelligence {
  return {
    quickAnswer: getQuickAnswer(record),
    keyDifferences: getKeyDifferences(record),
    taxonomyDifference: getTaxonomyDifference(record),
    misconceptions: getMisconceptions(record),
    frequentlyConfusedAnimals: getFrequentlyConfusedAnimals(record),
    relatedComparisons: getRelatedComparisons(record),
  };
}

/* ------------------------------------------------------------------ *
 * Confusion clusters (Compare Center hub)
 * ------------------------------------------------------------------ */

export interface ConfusionCluster {
  /** The animal at the centre of the cluster. */
  slug: string;
  name: string;
  profilePath: string;
  /** The confusion comparisons this animal appears in, best first. */
  comparisons: { slug: string; title: string; path: string }[];
}

/**
 * Animals that sit at the centre of several identification questions.
 *
 * An animal appearing in many commonly-confused pairings is, by that fact, one
 * readers repeatedly fail to place — so these clusters are the hub's answer to
 * "I saw something and I am not sure what it was", which no category listing
 * addresses. The ranking is the count of confusion comparisons, with slug as a
 * tiebreak so the hub's HTML is stable between builds.
 */
export function getConfusionClusters(
  minComparisons = 3,
  limit = 6,
): ConfusionCluster[] {
  const clusters: ConfusionCluster[] = [];

  for (const [slug, records] of BY_ANIMAL) {
    const confusions = records.filter((r) =>
      CONFUSION_RELATIONSHIPS.has(r.relationship),
    );
    if (confusions.length < minComparisons) continue;
    const animal = ANIMAL_BY_SLUG.get(slug);
    if (!animal) continue;
    clusters.push({
      slug: animal.slug,
      name: animal.name,
      profilePath: animal.profilePath,
      comparisons: confusions
        .slice()
        .sort((a, b) => a.slug.localeCompare(b.slug))
        .map((r) => ({ slug: r.slug, title: r.title, path: comparisonPath(r) })),
    });
  }

  return clusters
    .sort(
      (a, b) =>
        b.comparisons.length - a.comparisons.length ||
        a.slug.localeCompare(b.slug),
    )
    .slice(0, limit);
}
