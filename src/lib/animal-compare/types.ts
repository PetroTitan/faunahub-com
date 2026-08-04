/**
 * Animal Compare Center — type model.
 *
 * Editorial posture (read this before adding a comparison):
 *
 *  - A comparison exists to help a reader tell two animals apart, understand how
 *    they are related, or understand how they differ ecologically. It is NEVER a
 *    fight simulator, a ranking, or a "who would win" page.
 *  - Every value rendered on a comparison page must be traceable to the
 *    source-backed base profiles the pair is built from. If a dimension cannot
 *    be supported, OMIT the dimension. Never render an empty row and never use
 *    "Unknown" as filler.
 *  - No veterinary, medical, first-aid, handling, capture, hunting, pest-control
 *    or breeding instructions. No universal "better pet" claims.
 *  - Numbers are hedged and contextualised (subspecies, region, wild vs captive).
 *    A single exact figure presented as universal truth is a defect.
 */

/** Primary shelf a comparison is filed under. Exactly one per comparison. */
export type ComparisonCategory =
  | "pets-domestic"
  | "mammals"
  | "birds"
  | "reptiles-amphibians"
  | "fish-marine"
  | "insects-invertebrates"
  | "look-alikes"
  | "taxonomy"
  | "behavior-adaptations"
  | "habitat-ecology";

/** Why the two animals are being placed side by side. */
export type ComparisonRelationship =
  | "commonly-confused"
  | "close-relatives"
  | "species-vs-group"
  | "domestic-vs-wild"
  | "similar-appearance"
  | "similar-ecological-role"
  | "same-habitat"
  | "contrasting-adaptations"
  | "pet-decision"
  | "taxonomy-clarification";

/**
 * How firmly the central distinction is established.
 *  - "strong": a crisp, well-documented diagnostic difference.
 *  - "supported": well documented, but with real overlap or regional variation.
 *  - "representative": one or both names covers a group, so the page compares
 *    typical members rather than two fixed species.
 */
export type ComparisonConfidence = "strong" | "supported" | "representative";

/** What the reader is most likely trying to do. */
export type ComparisonSearchIntent =
  | "identification"
  | "taxonomy"
  | "pet-decision"
  | "ecology"
  | "behavior"
  | "general-comparison";

/**
 * One row of the comparison table.
 *
 * `interpretation` is what stops the table being a bare stat dump: it tells the
 * reader what the difference actually means. `caveat` carries overlap, regional
 * variation, or captive-vs-wild context and is rendered as fine print.
 */
export interface ComparisonDimension {
  id: string;
  label: string;
  animalAValue: string;
  animalBValue: string;
  interpretation: string;
  caveat?: string;
}

export interface ComparisonAnimalRef {
  /** Must exist in COMPARE_ANIMALS — no invented profiles. */
  slug: string;
  /** Display name as used in prose on this page. */
  name: string;
}

export interface ComparisonFAQ {
  question: string;
  answer: string;
}

/**
 * The narrative body of a comparison page. Every field is pair-specific prose;
 * none of it may be assembled from a shared sentence template with the names
 * swapped, and a cross-record similarity gate enforces that.
 *
 * Required fields are the ones that carry a comparison's value regardless of
 * pair. Optional fields exist because forcing, say, a lifespan section onto a
 * pair with no comparable lifespan data would produce exactly the padding this
 * section is designed to avoid.
 */
export interface ComparisonNarrative {
  /** How the two are related: rank, family, order, or not related at all. */
  taxonomy: string;
  /** Safe, observable visual distinctions. Never a safety procedure. */
  identification: string;
  /** Where each lives, and whether the ranges actually meet. */
  habitat: string;
  /** Diet category and ecological role, not feeding instructions. */
  diet: string;
  /** Documented behaviour, without borrowed human motive. */
  behavior: string;
  /** Domestication, conservation, coexistence or research relationship. */
  humanRelationship: string;
  /** Resolves the common-name confusion in plain language. */
  whichIsWhich: string;
  /** Optional: senses and adaptations, where the pair makes it meaningful. */
  sensesAdaptations?: string;
  /** Optional: lifespan, with wild/captive/domestic contexts kept separate. */
  lifespan?: string;
  /** Optional: conservation framing. Never asserts a status as permanent. */
  conservation?: string;
  /** Optional: ownership-responsibility context for pet-relevant pairs. */
  petContext?: string;
}

export interface ComparisonRecord {
  id: string;
  /** URL segment under /animal-compare. */
  slug: string;

  animalA: ComparisonAnimalRef;
  animalB: ComparisonAnimalRef;

  /** sort([a.slug, b.slug]).join("--") — one public URL per unordered pair. */
  canonicalPairKey: string;

  /** On-page H1 stem, e.g. "Wolf vs Coyote". */
  title: string;
  metaTitle: string;
  metaDescription: string;

  /** 50–90 words. The direct answer, placed above the fold. */
  shortAnswer: string;

  primaryCategory: ComparisonCategory;
  secondaryCategories?: ComparisonCategory[];

  relationship: ComparisonRelationship;
  confidence: ComparisonConfidence;
  searchIntent: ComparisonSearchIntent;

  /** Why this pair is worth comparing at all (eligibility, in prose). */
  whyCompare: string;
  /** The single most useful distinction, snippet-shaped. */
  centralDifference: string;

  dimensions: ComparisonDimension[];

  /** Pair-specific prose body. See ComparisonNarrative. */
  narrative: ComparisonNarrative;

  /** 4–6 questions, unique to this pair. No filler, no recycled sets. */
  faqs: ComparisonFAQ[];

  commonConfusions: string[];
  similarities: string[];
  keyDifferences: string[];

  /** Calm, non-procedural risk framing. No first aid, no handling steps. */
  safetyBoundary?: string;
  /** Ownership-responsibility framing. Never a "better pet" verdict. */
  petBoundary?: string;
  /** Where a common name is a group, is regional, or is not a clade. */
  taxonomyCaveat?: string;
  /** Status changes; route readers to the IUCN Red List rather than assert. */
  conservationCaveat?: string;

  relatedComparisonSlugs: string[];
  /** Existing FaunaHub cluster paths this pair genuinely belongs with. */
  relatedHubPaths: string[];

  /** Source-family ids from ./sources.ts, keyed by animal, not per claim. */
  sourceIds: string[];
  lastReviewed: string;
}

/** Category hub copy. Each hub owns unique explanatory content. */
export interface ComparisonCategoryDefinition {
  id: ComparisonCategory;
  /** URL segment under /animal-compare/categories. */
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Two to four unique paragraphs. Never shared between hubs. */
  intro: string[];
  /** What belongs on this shelf and what deliberately does not. */
  scopeNote: string;
  /** Category-specific reading guidance. */
  howToRead: string[];
  faqs: { question: string; answer: string }[];
  /** Existing FaunaHub clusters this category feeds. */
  relatedHubPaths: { label: string; href: string }[];
}

/**
 * A comparison that already exists elsewhere on FaunaHub as a hand-written page.
 * These are surfaced from the Compare Center but are NOT re-created under
 * /animal-compare — that would be a duplicate of an already-indexed URL.
 */
export interface ExternalComparison {
  canonicalPairKey: string;
  title: string;
  href: string;
  summary: string;
  category: ComparisonCategory;
}
