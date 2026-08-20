/**
 * FaunaHub Search — domain model.
 *
 * Editorial posture (read this before adding a document source):
 *
 *  - A search document may only describe a page that ALREADY EXISTS. Every URL
 *    in the index is either derived from a real route directory on disk or from
 *    a published registry that route generation itself reads. No URL is ever
 *    composed speculatively.
 *  - Titles and descriptions are HARVESTED, never authored for search. They are
 *    the same strings the page already renders in its <title> and meta
 *    description, so a search result can never promise something the page does
 *    not deliver.
 *  - `aliases` carries only names that exist somewhere in verified data (an IUCN
 *    common name, a scientific name, a comparison partner's name). Inventing a
 *    nickname to catch more queries would be fabrication.
 *  - `priority` is a static, editorially-assigned weight per document type and
 *    provenance. It is NOT a popularity score: FaunaHub has no first-party
 *    traffic data wired into the build, so any "popular" or "trending" claim
 *    would be invented. Never rename this field to imply otherwise.
 */

/** Coarse shelf a document is filed under. Exactly one per document. */
export type SearchDocumentType =
  | "animal"
  | "comparison"
  | "guide"
  | "category"
  | "behavior"
  | "research"
  | "tool"
  | "hub";

/**
 * One indexed page.
 *
 * `searchableText` is NOT transported: it is derived at hydration by
 * `hydrateDocument`, because shipping it would roughly double the payload for
 * text the client can rebuild in a few milliseconds.
 */
export interface SearchDocument {
  /** Deterministic and stable: `${type}:${url}`. */
  id: string;
  type: SearchDocumentType;
  /** Display title. The page's own title, minus the brand suffix. */
  title: string;
  /** Site-relative canonical path, always starting with "/". */
  url: string;
  /** The page's own meta description, trimmed for display. */
  description?: string;
  /** Alternative real names for the same subject. Never invented. */
  aliases?: string[];
  /** Category/group/topic labels already attached to the page's data. */
  keywords?: string[];
  /** Only ever the exact string the profile page displays. */
  scientificName?: string;
  /** Animal slugs this document is about. Comparisons carry exactly two. */
  animalSlugs?: string[];
  /** Human-readable shelf label shown on the result card. */
  category?: string;
  /** Taxonomy group id, where the page's data provides one. */
  group?: string;
  /** Static authority weight, 0–100. Not popularity. See the note above. */
  priority: number;
  /** Precomputed lowercase haystack. Derived at hydration, never transported. */
  searchableText: string;
}

/**
 * The document exactly as it is transported in search-index.json.
 *
 * Both `id` and `searchableText` are omitted from the wire: `id` is always
 * `${type}:${url}` and `searchableText` is always derived from the other
 * fields, so transporting either would only create a way for them to disagree
 * with the document they describe. `hydrateDocument` rebuilds both.
 */
export type SearchIndexEntry = Omit<SearchDocument, "searchableText" | "id">;

/**
 * The wire format of /search-index.json.
 *
 * `pairs` maps a canonical unordered animal-pair key to the URL of the single
 * published comparison for that pair. It exists so two-animal queries resolve
 * in one lookup instead of a scan, and so a pair with no published page is
 * detectably absent rather than guessable.
 */
export interface SearchIndexPayload {
  /** Schema version. Bump when the wire shape changes incompatibly. */
  version: number;
  /** ISO date the index was generated. Build provenance, not page freshness. */
  generatedAt: string;
  documents: SearchIndexEntry[];
  /** sorted([slugA, slugB]).join("--") -> comparison URL. */
  pairs: Record<string, string>;
  /**
   * Lowercased animal name (and derived multi-word forms) -> animal slug.
   * Drives phrase detection in two-animal queries.
   */
  animalNames: Record<string, string>;
  /** Browse axes that have enough real data to filter on. */
  facets: SearchFacets;
}

/**
 * The structured axes the browse filter can offer.
 *
 * Only ONE axis ships: the encyclopedia category each animal profile already
 * declares. It is the only classification with near-complete coverage
 * (641 of 642 profiles) that also maps onto a real hub page. See
 * docs/search-architecture.md for the per-axis coverage audit, and for the axes
 * (diet, class, conservation status for /animals, habitat, continent) that are
 * deliberately absent because the underlying data does not exist — not because
 * they were forgotten.
 */
export interface SearchFacets {
  /**
   * Encyclopedia categories that have at least one indexed animal.
   *
   * `href` is the real hub page behind the chip, so browsing inside the overlay
   * and browsing the site itself lead to the same, crawlable place.
   */
  animalGroups: { slug: string; label: string; count: number; href: string }[];
  /** How many animal profiles carry a recorded category. */
  classifiedAnimals: number;
  /** How many animal profiles exist in total. */
  totalAnimalProfiles: number;
}

/** A scored hit. `matchedOn` is what makes relevance explainable and testable. */
export interface SearchResult {
  document: SearchDocument;
  score: number;
  /** The scoring tier that placed this result. */
  reason: SearchMatchReason;
  /** True when the hit only survived conservative typo tolerance. */
  fuzzy: boolean;
}

/**
 * Why a document matched. Ordered loosely from strongest to weakest intent;
 * the numeric tiers live in engine.ts so this stays a pure vocabulary.
 */
export type SearchMatchReason =
  | "comparison-pair"
  | "animal-subject"
  | "exact-title"
  | "exact-alias"
  | "exact-scientific-name"
  | "title-prefix"
  | "title-tokens"
  | "description-phrase"
  | "alias-tokens"
  | "token-prefix"
  | "keyword"
  | "description"
  | "partial"
  | "fuzzy";

/** A rendered section of the results panel. Empty sections are never emitted. */
export interface SearchResultGroup {
  type: SearchDocumentType;
  label: string;
  results: SearchResult[];
}

/**
 * The complete answer to one query.
 *
 * `resolvedAnimals` and `missingPair` are what let the empty state be honest:
 * when a reader asks for a pair FaunaHub has not published, we can say exactly
 * that and offer the two real profiles instead of inventing a comparison URL.
 */
export interface SearchResponse {
  /** The normalized query actually used, after intent-word stripping. */
  query: string;
  /** The raw query as typed. */
  rawQuery: string;
  /** Highest-scoring result, if the lead is decisive enough to feature. */
  bestMatch?: SearchResult;
  /** Every result including the best match, ranked. */
  results: SearchResult[];
  /** Results bucketed by type, in display order, empty groups removed. */
  groups: SearchResultGroup[];
  /** Animal slugs recognised in the query, in query order. */
  resolvedAnimals: string[];
  /**
   * Set when the query names exactly two known animals and FaunaHub has NOT
   * published that comparison. The UI must say so rather than fabricate a URL.
   */
  missingPair?: { slugs: [string, string]; names: [string, string] };
  /** True when nothing scored above the floor. */
  empty: boolean;
}

/** Display labels for each shelf. Used for result-card type text and headings. */
export const SEARCH_TYPE_LABEL: Record<SearchDocumentType, string> = {
  animal: "Animal profile",
  comparison: "Animal comparison",
  guide: "Guide",
  category: "Category",
  behavior: "Behavior guide",
  research: "Research & sources",
  tool: "Tool",
  hub: "Hub",
};

/** Section headings, in the order the overlay renders them. */
export const SEARCH_GROUP_ORDER: { type: SearchDocumentType; label: string }[] = [
  { type: "animal", label: "Animals" },
  { type: "comparison", label: "Comparisons" },
  { type: "behavior", label: "Behavior" },
  { type: "guide", label: "Guides & Research" },
  { type: "research", label: "Research & Sources" },
  { type: "hub", label: "Categories & Topics" },
  { type: "category", label: "Categories & Topics" },
  { type: "tool", label: "Tools" },
];

/** Where the generated index is served from. Static asset, not an API route. */
export const SEARCH_INDEX_URL = "/search-index.json";

/** Wire-format version. Kept beside the type it describes. */
export const SEARCH_INDEX_VERSION = 1;
