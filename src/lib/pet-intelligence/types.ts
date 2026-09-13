/**
 * FaunaHub Pet Intelligence — canonical breed domain model.
 *
 * Editorial posture (read this before adding a field or a value):
 *
 *  - A breed record describes a breed that a NAMED REGISTRY recognises, and
 *    every structured value on it is traceable to a source record. There is no
 *    field whose value may be "what the breed is generally like": if a fact is
 *    not in a source FaunaHub can cite, the field is absent.
 *  - Absence is information, and it is not the same as a negative. A breed with
 *    no `BreedRecognition` entry for a registry means FaunaHub has NOT assessed
 *    that registry for that breed — it does NOT mean the registry rejects the
 *    breed. Only an explicit `status: "not-recognized"` record says that, and
 *    it needs its own source like any other claim.
 *  - No numeric rating is stored anywhere in this model, on purpose. Registries
 *    publish 1-5 trait scales; FaunaHub normalises them to a three-level
 *    ordinal and keeps the derivation method as prose. A number that started
 *    life as an editorial opinion becomes false precision the moment it is
 *    rendered as "4.2/5", and the cheapest way to make that impossible is for
 *    the number never to reach the client. See docs/pet-intelligence/trait-methodology.md.
 *  - There is no popularity, demand, or quality signal here. AKC publishes
 *    annual registration-volume rankings; FaunaHub deliberately does not import
 *    them. They measure US registration paperwork, not breed merit, and a
 *    "#2 most popular" badge on a breed page reads as a recommendation. This
 *    matches the same refusal already documented in `src/lib/search/types.ts`.
 *  - Nothing in this model may encode child safety, family suitability, health
 *    risk, or allergy outcome as a structured value. Those are the four claims
 *    a filterable field would turn into a promise. They exist only as sourced
 *    prose in `BreedEditorial.householdContext`, phrased per
 *    docs/pet-intelligence/decision-language-policy.md.
 */

/** The two species Pet Intelligence covers. Nothing else is in scope. */
export type BreedSpecies = "dog" | "cat";

/* ------------------------------------------------------------------ *
 * Registries and recognition
 * ------------------------------------------------------------------ */

/**
 * A breed registry FaunaHub is able to cite.
 *
 * `scope` is the honest boundary on what this registry's recognition means.
 * Reading "recognised" without it invites the reader to hear "this is a real
 * breed, universally" — when what it actually says is "this one organisation,
 * in this one jurisdiction, keeps a studbook for it".
 */
export interface BreedRegistry {
  /** Stable id used by `BreedRecognition.registryId`. */
  id: string;
  /** Full official name. */
  name: string;
  /** Short form used in dense UI (table headers, chips). */
  shortName: string;
  /** Official site. Never a mirror, aggregator, or fan site. */
  url: string;
  /** Which species this registry covers. */
  species: BreedSpecies;
  /** Institutional and geographic reach, in one sentence. */
  scope: string;
  /**
   * What this registry's grouping axis actually is, so two registries' groups
   * are never silently treated as the same classification. FCI groups are
   * numbered and function-based; AKC groups are named and partly historical.
   */
  groupingModel: string;
  /**
   * True when FaunaHub has a working, machine-readable path to this registry's
   * own pages. False records a registry we can name but could not verify
   * against — TICA served HTTP 403 to automated requests on 2026-09-13, so no
   * TICA recognition is asserted anywhere in this registry. Recording the
   * blocked attempt is what stops a later session assuming it was never tried.
   */
  machineReadable: boolean;
  /** Why `machineReadable` is false, where it is. */
  accessNotes?: string;
}

/**
 * Recognition status as ONE registry states it.
 *
 * Deliberately not a boolean. Registries run tiers — the AKC has Foundation
 * Stock Service and a Miscellaneous Class beneath full recognition, the FCI
 * accepts breeds provisionally before definitive acceptance — and flattening
 * those to yes/no would publish a stronger claim than the registry makes.
 */
export type BreedRecognitionStatus =
  | "recognized"
  | "provisional"
  | "experimental"
  | "not-recognized";

export interface BreedRecognition {
  registryId: string;
  status: BreedRecognitionStatus;
  /**
   * The registry's own group/section label for this breed, verbatim.
   * Never translated into another registry's vocabulary: "Sporting Group" and
   * "Group 8 Retrievers" are different classifications of the same dog, and
   * showing them side by side is the point.
   */
  registryGroup?: string;
  /** The registry's own breed identifier, where it publishes one. */
  registryBreedCode?: string;
  /** The registry's own page for this breed. */
  registryUrl?: string;
  /**
   * Year the registry states it granted this status. Only ever a year the
   * registry itself prints; never inferred from a breed's history.
   */
  recognizedYear?: number;
  /** Source record backing this recognition claim. Required — no exceptions. */
  sourceId: string;
}

/* ------------------------------------------------------------------ *
 * Measurements
 * ------------------------------------------------------------------ */

/**
 * What a single measurement is measuring.
 *
 * This exists because real breed standards do not split the way a naive
 * `maleHeightCm` / `femaleHeightCm` pair assumes:
 *
 *  - Labrador Retriever: split by SEX.
 *  - Beagle and Dachshund: split by VARIETY (13-inch vs 15-inch; standard vs
 *    miniature) and not by sex at all.
 *  - Chihuahua and French Bulldog: one figure for the whole breed.
 *
 * Forcing all three into male/female fields would have silently recorded a
 * Beagle variety limit as a male measurement. Every value here says what it
 * describes.
 */
export type MeasurementBasis =
  | { kind: "sex"; sex: "male" | "female" }
  | { kind: "variety"; variety: string }
  | { kind: "breed" };

/**
 * How the range is bounded.
 *
 * Standards routinely publish half-open limits — "not exceeding 6 pounds",
 * "over 15 inches" — and storing those as a closed range would invent the
 * missing end. `at-most` carries only `max`; `at-least` carries only `min`.
 */
export type MeasurementBound = "closed" | "at-most" | "at-least";

export interface Measurement {
  /** Lower bound, in the canonical unit. Absent when `bound` is "at-most". */
  min?: number;
  /** Upper bound, in the canonical unit. Absent when `bound` is "at-least". */
  max?: number;
  bound: MeasurementBound;
  basis: MeasurementBasis;
  /**
   * The source's own wording, kept verbatim.
   *
   * Unit conversion is lossy and rounding is a judgement call, so the string
   * the registry actually published travels with the number. It is what a
   * reader is shown when the converted figure would imply precision the
   * standard does not have.
   */
  statedAs: string;
  sourceId: string;
}

/** Height in centimetres and weight in kilograms. One unit each, always. */
export interface BreedMeasurements {
  heightCm?: Measurement[];
  weightKg?: Measurement[];
}

/* ------------------------------------------------------------------ *
 * Ordinal traits
 * ------------------------------------------------------------------ */

/**
 * The ONLY scale FaunaHub publishes for a qualitative trait.
 *
 * Three levels, not five and not ten. A registry's five-point scale is an
 * editorial judgement with no measurement behind it, and re-publishing it at
 * its original resolution implies a precision that was never there. Three
 * levels is the most a reader can act on and the most the evidence supports.
 */
export type OrdinalTrait = "lower" | "moderate" | "higher";

/**
 * One trait value, with its derivation attached.
 *
 * `method` is prose rather than a number on purpose — see the header note. It
 * records HOW the level was reached so a reviewer can re-derive it, while
 * making it impossible to render "4/5" from anything in this record.
 */
export interface TraitValue {
  value: OrdinalTrait;
  /** How this level was derived, in words. */
  method: string;
  sourceId: string;
}

/**
 * The trait axes FaunaHub is willing to structure.
 *
 * This list is deliberately short, and what it LEAVES OUT is the point.
 * Registries publish scored axes for child suitability, stranger openness,
 * other-dog tolerance and protectiveness. FaunaHub does not structure any of
 * them: as a filter or a sort they become a promise about how an animal will
 * behave around a specific person, which no breed-level source can support.
 * Those subjects appear only as prose. See
 * docs/pet-intelligence/trait-methodology.md for the per-axis rationale.
 */
export interface BreedTraits {
  /** Relative volume of hair shed. NOT an allergy signal. */
  shedding?: TraitValue;
  /** Relative frequency of coat maintenance. NOT "how easy the breed is". */
  groomingNeeds?: TraitValue;
  /** Relative routine activity demand. NOT athleticism, and NOT fitness. */
  exerciseNeeds?: TraitValue;
  /** Relative readiness to respond to structured training. NOT intelligence. */
  trainability?: TraitValue;
  /** Relative frequency of vocalising. NOT a behaviour problem. */
  vocality?: TraitValue;
}

/** Field names of `BreedTraits`, for facet code that iterates the axes. */
export const ORDINAL_TRAIT_KEYS = [
  "shedding",
  "groomingNeeds",
  "exerciseNeeds",
  "trainability",
  "vocality",
] as const satisfies readonly (keyof BreedTraits)[];

export type OrdinalTraitKey = (typeof ORDINAL_TRAIT_KEYS)[number];

/* ------------------------------------------------------------------ *
 * Coat and size
 * ------------------------------------------------------------------ */

/**
 * Coat length.
 *
 * `hairless` exists because cats need it (the Sphynx is a CFA championship
 * breed) and no dog in the pilot uses it. That asymmetry is the reason the
 * model is shared but the VOCABULARY is per-species: forcing a cat into a
 * dog-shaped enum is how a hairless breed ends up filed as "short".
 */
export type CoatLength = "short" | "medium" | "long" | "hairless" | "variable";

/**
 * Adult size band.
 *
 * For dogs this is derived from published height and weight (see
 * `deriveSizeClass`), so it is reproducible rather than asserted. For cats it
 * is left absent: CFA breed standards describe size qualitatively — the Maine
 * Coon standard says "Size medium to large" and prints no weight at all — so
 * there is no numeric basis to band them with. Verified against
 * cfa.org/wp-content/uploads/2024/03/maine-coon-standard.pdf on 2026-09-13.
 */
export type SizeClass = "toy" | "small" | "medium" | "large" | "giant";

export interface BreedCoat {
  length?: CoatLength;
  /** Registry coat-type vocabulary, verbatim (e.g. "Double", "Silky"). */
  types?: string[];
  /**
   * The standard's own coat wording, kept verbatim — for the same reason
   * `Measurement.statedAs` exists. Banding loses real information: the CFA
   * Ragdoll standard says "moderately long", and the Sphynx standard says the
   * breed is "not actually completely hairless". A reader who is choosing on
   * coat deserves the sentence, not only the band.
   */
  statedAs?: string;
  sourceId?: string;
}

/* ------------------------------------------------------------------ *
 * Sources and images
 * ------------------------------------------------------------------ */

export type BreedSourceType =
  | "registry-standard"
  | "registry-overview"
  | "institutional"
  | "research"
  | "historical";

export interface BreedSource {
  id: string;
  title: string;
  organization: string;
  url: string;
  sourceType: BreedSourceType;
  /**
   * The date this URL was actually retrieved and read. Never back-filled and
   * never copied from a sibling record: an access date that was not an access
   * is a fabricated provenance claim.
   */
  accessedAt: string;
  /** What this source is being cited FOR, so over-citation is visible. */
  scope: string;
  notes?: string;
}

/* ------------------------------------------------------------------ *
 * Editorial content
 * ------------------------------------------------------------------ */

/** A paragraph run. Plain strings so prose is data, not JSX. */
export type Prose = readonly string[];

export interface BreedFaqEntry {
  question: string;
  answer: string;
}

/**
 * The written half of a breed page.
 *
 * Structured fields above answer "what is measured"; this answers "what should
 * a reader understand". Keeping them in one record but separate shapes is what
 * lets the page show, visibly, which figures are sourced measurements and which
 * are editorial context.
 */
export interface BreedEditorial {
  intro: Prose;
  appearance: Prose;
  temperament: Prose;
  activity: Prose;
  grooming: Prose;
  training?: Prose;
  /**
   * Health CONTEXT only. No condition names presented as breed diagnoses, no
   * risk levels, no screening instructions, no treatment, no prognosis.
   * Enforced by tests/pet-intelligence-safety.test.ts.
   */
  health: Prose;
  responsibility: Prose;
  /**
   * Household considerations as prose — apartment life, children, other pets,
   * first-time owners. Prose and never structured, because a structured
   * "good with children" value is a safety promise. Phrasing must follow
   * docs/pet-intelligence/decision-language-policy.md.
   */
  householdContext?: Prose;
  faqs: BreedFaqEntry[];
}

/* ------------------------------------------------------------------ *
 * Commercial extension point
 * ------------------------------------------------------------------ */

/**
 * The seam where a future commercial layer attaches.
 *
 * It is a SEPARATE record keyed by breed id, never a field on `Breed`, and
 * nothing in this sprint populates or renders it. That separation is the whole
 * design: a merchant relationship must be incapable of reaching breed facts,
 * so that no future advertiser can change what a breed page says about a
 * breed. See docs/pet-intelligence/commercial-extension.md.
 */
export interface BreedCommercialContext {
  breedId: string;
  /** Coarse product categories plausibly relevant. Not products, not brands. */
  productCategories?: string[];
  serviceCategories?: string[];
  insuranceRelevant?: boolean;
}

/* ------------------------------------------------------------------ *
 * The breed record
 * ------------------------------------------------------------------ */

export interface Breed {
  /** Stable identity: `${species}-${slug}`. Never reused, never renamed. */
  id: string;
  /**
   * The URL segment under /dogs/breeds or /cats/breeds.
   *
   * FaunaHub's slug is its OWN identifier and is not a registry's slug. Several
   * published FaunaHub slugs predate this registry (`german-shepherd`,
   * `persian-cat`, `bengal-cat`) and differ from the registry spelling; they
   * stay as they are because they are indexed URLs. The registry's own slug
   * travels in `BreedRecognition.registryUrl` instead.
   */
  slug: string;
  species: BreedSpecies;

  /** Display name FaunaHub uses. */
  name: string;
  /**
   * The name a registry uses when it differs from `name`.
   *
   * e.g. FaunaHub says "German Shepherd"; the AKC's breed is the "German
   * Shepherd Dog". Recording both is what keeps a registry citation honest
   * while leaving the published page title alone.
   */
  canonicalCommonName?: string;
  /**
   * Other real names for this breed. Only names that appear in a cited source —
   * a registry's own nickname field, or a registry's alternative breed name.
   * Never a search term someone might type.
   */
  aliases?: string[];

  /** Countries as the cited registry states them, not as inferred history. */
  originCountries?: string[];
  /**
   * Set when cited registries disagree about origin, with the disagreement
   * spelled out. The Labrador Retriever is the live example: AKC records
   * Canada, the FCI records Great Britain as the patronage country. FaunaHub
   * shows both rather than silently choosing.
   */
  originNote?: string;

  /**
   * What this record covers, where a registry splits the breed and FaunaHub
   * does not.
   *
   * Some breeds are one page on one registry and several on another. The AKC
   * publishes THREE Poodle pages — Standard, Miniature and Toy — which share a
   * breed code (701) but not a group: the Toy Poodle is in the Toy Group while
   * the other two are Non-Sporting. A single record that silently used the
   * Standard's page would assert a group that the registry contradicts for a
   * third of the breed, and would band a 2 kg Toy Poodle as a large dog.
   *
   * The Dachshund is the contrast: the AKC publishes both varieties on one page,
   * so one record covers them correctly and needs no note.
   *
   * When present, this renders at the top of the recognition panel, so a reader
   * is told the scope before reading any value inside it.
   */
  scopeNote?: string;

  recognition: BreedRecognition[];

  /** What the breed was developed to do, as cited sources describe it. */
  originalFunctions?: string[];

  sizeClass?: SizeClass;
  measurements?: BreedMeasurements;
  coat?: BreedCoat;
  traits: BreedTraits;

  /**
   * Lifespan range as a registry publishes it.
   *
   * Present for dogs (the AKC prints a life-expectancy range per breed) and
   * absent for cats (CFA standards do not). It is a breed-level published
   * figure and never a prediction about an individual animal.
   */
  lifespanYears?: Measurement;

  editorial: BreedEditorial;

  /** Every source id cited anywhere on this record. */
  sources: string[];
  /** Ids into `BREED_IMAGES`. May be empty; a breed without a verified image
   * renders a monogram rather than borrowing another breed's photo. */
  images: string[];

  /** When a human last checked this record against its sources. */
  reviewedAt: string;
  publishedAt: string;
}
