/**
 * Red List Species Intelligence — data model.
 *
 * This is an EDUCATIONAL data layer. It records conservation context for a
 * curated set of threatened species so FaunaHub can present source-transparent
 * overviews and link readers to authoritative conservation references.
 *
 * It is NOT a live conservation database and is NOT a substitute for the
 * official IUCN Red List. Conservation status changes over time; every record
 * carries a `lastVerified` date and a `dataConfidence` flag so readers can see
 * exactly how much weight to place on it. See `methodology.ts` for the full
 * sourcing and confidence policy.
 *
 * Hard editorial rules encoded by this model:
 *  - No invented conservation status, population numbers, trends, threats,
 *    ranges, or taxonomy.
 *  - Optional fields (trend, range, threats) are omitted when not verified —
 *    they are never filled with guesses.
 *  - `sourceUrls` must contain at least one real, reachable authoritative URL.
 */

/** IUCN Red List taxonomic grouping used for FaunaHub category pages. */
export type RedListTaxonGroup =
  | "mammals"
  | "birds"
  | "reptiles-amphibians"
  | "fish"
  | "invertebrates"
  | "other";

/**
 * IUCN Red List category codes.
 *  CR = Critically Endangered, EN = Endangered, VU = Vulnerable,
 *  NT = Near Threatened, LC = Least Concern, DD = Data Deficient,
 *  EW = Extinct in the Wild, EX = Extinct, NE = Not Evaluated.
 */
export type RedListCategoryCode =
  | "CR"
  | "EN"
  | "VU"
  | "NT"
  | "LC"
  | "DD"
  | "EW"
  | "EX"
  | "NE";

export type RedListPopulationTrend =
  | "increasing"
  | "decreasing"
  | "stable"
  | "unknown";

/**
 * How much confidence to place in a record.
 *  - "verified": category and key fields confirmed against authoritative
 *    sources during the most recent review pass.
 *  - "partial": category is well established; some optional fields are not
 *    individually verified.
 *  - "source-review-pending": category reflects widely published assessments
 *    but should be confirmed against the live IUCN Red List entry before being
 *    treated as definitive.
 */
export type RedListDataConfidence =
  | "verified"
  | "partial"
  | "source-review-pending";

/**
 * Whether this record becomes its own page.
 *  - "index-only": appears only in category/hub lists; never a standalone page.
 *  - "detailed-profile": has a page at /endangered-animals/species/[slug].
 *  - "existing-profile-linked": links to an existing /animals/[slug] page.
 */
export type RedListProfileStatus =
  | "index-only"
  | "detailed-profile"
  | "existing-profile-linked";

export type RedListImageStatus = "has-image" | "needs-image" | "not-planned";

export interface RedListSpeciesRecord {
  /** URL-safe identifier, unique across the dataset. */
  slug: string;
  commonName: string;
  scientificName: string;
  taxonGroup: RedListTaxonGroup;
  redListCategory: RedListCategoryCode;
  /** Human-readable category label, e.g. "Critically Endangered". */
  redListCategoryLabel: string;
  /** Only set when the trend is verified; otherwise omitted or "unknown". */
  populationTrend?: RedListPopulationTrend;
  /** Short, original-language range note. Omitted when not verified. */
  rangeSummary?: string;
  /** Major threats. Omitted entirely when not verified — never guessed. */
  primaryThreats?: string[];
  /** At least one real, reachable authoritative URL. */
  sourceUrls: string[];
  /** Direct IUCN Red List reference where one has been confirmed. */
  iucnUrl?: string;
  /** ISO date (YYYY-MM-DD) this record was last reviewed. */
  lastVerified: string;
  dataConfidence: RedListDataConfidence;
  profileStatus: RedListProfileStatus;
  /** For "existing-profile-linked": the slug under /animals/[slug]. */
  existingAnimalSlug?: string;
  imageStatus?: RedListImageStatus;
  /** Free-form editorial note (e.g. taxonomy caveats, sub-population context). */
  notes?: string;
}

/** Static metadata describing an IUCN category for badges and explainers. */
export interface RedListCategoryMeta {
  code: RedListCategoryCode;
  label: string;
  /** Short, original-language summary of what the category means. */
  shortDescription: string;
  /** Whether FaunaHub treats this as a "threatened" category (CR/EN/VU). */
  threatened: boolean;
  /** Tailwind classes for the accessible badge (never colour-only). */
  badgeClass: string;
  /** Relative ordering, highest extinction risk first. */
  order: number;
}

/** Static metadata describing a taxon group for category pages. */
export interface RedListGroupMeta {
  group: RedListTaxonGroup;
  label: string;
  /** Plain-language description of the group on FaunaHub. */
  description: string;
  icon: string;
}
