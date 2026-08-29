/**
 * Animal Finder — domain model.
 *
 * Editorial posture (read this before adding a field or a facet):
 *
 *  - The Finder describes the 642 animal profiles that ALREADY EXIST under
 *    /animals/[slug]. Every record is derived from a real route directory on
 *    disk, and every value on it is either a string the profile already renders
 *    or a membership fact from a registry the site's own routes read.
 *  - A facet may only be exposed when the underlying data genuinely covers the
 *    population. `docs/animal-finder.md` carries the per-axis coverage audit,
 *    including the axes that are deliberately ABSENT — habitat, continent,
 *    diet, conservation status, activity — because the data does not exist at
 *    the coverage or consistency a filter would imply. Bucketing prose into a
 *    classification the editors never made would be fabrication, not
 *    extraction.
 *  - Absence is information. A profile with no taxonomic group is reported as
 *    "not recorded", never silently folded into a bucket and never guessed.
 *  - There is no popularity, trending or ranking signal anywhere in this
 *    module. FaunaHub has no first-party traffic data wired into the build, so
 *    any such label would be invented.
 */

import { fold, tokenize } from "../search/normalize.ts";

/**
 * One animal profile, as the Finder sees it.
 *
 * `searchText` is NOT transported: it is derived at hydration by
 * `hydrateFinderDocument`, because shipping it would duplicate every name and
 * tag the record already carries.
 */
export interface FinderAnimalDocument {
  /** The /animals/[slug] directory name. Unique, and the record's identity. */
  slug: string;
  /** Display name — the profile's own `commonName` prop. */
  name: string;
  /** Site-relative canonical path. Always `/animals/${slug}`. */
  url: string;
  /** The profile's own meta description, trimmed for display. */
  description?: string;
  /** Only ever the exact string the profile renders. Absent where the profile
   * declares none — 109 profiles are group-level pages where a binomial would
   * be wrong, so absence is meaningful and is never backfilled. */
  scientificName?: string;
  /**
   * Encyclopedia category slug — `mammals`, `birds`, `reptiles`, `fish`,
   * `marine-animals`, `insects`. This is a SHELF, not a taxon: FaunaHub files
   * whales under Marine Animals and sharks under Fish. Sourced from the
   * profile's own `parentCategoryHref`, with its breadcrumb JSON-LD as the
   * fallback for the bespoke pages that predate the shared layout.
   */
  group?: string;
  /**
   * Taxonomic group slugs from `@/lib/taxonomy/animal-groups`, restricted to
   * class/phylum/informal ranks. A profile may carry more than one (an animal
   * can be both a mollusk and, in the registry's topic layer, a reef animal —
   * only the taxonomic ranks are kept here). Recorded for 497 of 642 profiles;
   * absence means the registry has not filed it yet, NOT that it has no class.
   */
  taxonGroups?: string[];
  /** The profile's own `tags` prop. Searchable, never a facet: the tag
   * vocabulary is editorial and partial, so absence proves nothing. */
  tags?: string[];
  /** Coverage flags — see `FINDER_COVERAGE_FACET`. Facts about what FaunaHub
   * publishes for this animal, never claims about the animal itself. */
  coverage: FinderCoverageFlag[];
  /** How many published comparisons include this animal. 0 when none. */
  comparisonCount: number;
  /** The hero photo the profile already renders, or absent if it has none. */
  image?: FinderImage;
  /** Lowercase haystack. Derived at hydration, never transported. */
  searchText: string;
  /**
   * Match keys, derived once at hydration and never transported.
   *
   * Ranking runs synchronously during render, four times over 642 documents on
   * every keystroke — once for the results and once per facet's counts. Folding
   * and tokenizing inside the scorer meant ~10,000 Unicode normalizations and
   * regex splits per keystroke for values that cannot change. Deriving them
   * here is the same trick `searchText` already uses.
   */
  foldedName: string;
  nameTokens: string[];
  foldedScientificName?: string;
  /** One token list per tag, in the profile's own order. */
  tagTokens: string[][];
}

/** The hero image a profile already publishes. Paths come from the licensed
 * image registry; nothing here is composed from a slug. */
export interface FinderImage {
  /** Site-relative path to the already-optimised asset. */
  src: string;
  width: number;
  height: number;
}

/**
 * Facts about FaunaHub's own coverage of an animal.
 *
 * These are the only axes on which the Finder has complete information for all
 * 642 profiles, because they are statements about the site rather than about
 * the animal. "Has a comparison page" is knowable with certainty; "lives in
 * the ocean" is not, at the coverage the data actually has.
 */
export type FinderCoverageFlag =
  | "comparison"
  | "photo"
  | "conservation"
  | "domestic";

/** The document exactly as it is transported in finder-index.json. */
export type FinderIndexEntry = Omit<FinderAnimalDocument, "searchText">;

/** One selectable value inside a facet. */
export interface FinderFacetValue {
  /** Stable identifier used in filter state and analytics. Closed vocabulary. */
  value: string;
  label: string;
  /** How many indexed animals carry this value. Shown, never rounded. */
  count: number;
  /** A real, crawlable hub behind the value, where one exists. */
  href?: string;
  /** One line on what the value means, where a bare label is ambiguous. */
  hint?: string;
}

/** How a facet's values combine when more than one is selected. */
export type FinderFacetMode = "any" | "all";

/** A facet the UI may render. Only facets that passed the coverage gate at
 * build time reach the payload. */
export interface FinderFacet {
  id: string;
  label: string;
  /** One line explaining what the axis is and where it comes from. */
  description: string;
  mode: FinderFacetMode;
  values: FinderFacetValue[];
  /** How many of `total` records carry any value on this axis. */
  covered: number;
  /** The population the coverage is measured against. */
  total: number;
  /**
   * True when every record carries a value, so an empty selection cannot
   * silently hide anything. False facets render a partial-data note.
   */
  complete: boolean;
}

/** The wire format of /animal-finder-index.json. */
export interface FinderIndexPayload {
  /** Schema version. Bump when the wire shape changes incompatibly. */
  version: number;
  /** ISO date the index was generated. Build provenance, not page freshness. */
  generatedAt: string;
  documents: FinderIndexEntry[];
  facets: FinderFacet[];
  /**
   * Axes that were measured and deliberately NOT exposed, with the reason.
   * Carried in the payload so the page can publish its own limits rather than
   * leaving a reader to assume the missing axes were forgotten.
   */
  excludedFacets: FinderExcludedFacet[];
}

/** A measured, rejected axis. */
export interface FinderExcludedFacet {
  id: string;
  label: string;
  /** Records carrying a usable value, out of the same total as the facets. */
  covered: number;
  total: number;
  /** How many distinct values the raw data holds. High counts mean free text. */
  distinctValues: number;
  /** Plain-language reason, written for a reader, not for a changelog. */
  reason: string;
}

/** Where the generated index is served from. A static asset, not an API. */
export const FINDER_INDEX_URL = "/animal-finder-index.json";

/** Wire-format version. Kept beside the type it describes. */
export const FINDER_INDEX_VERSION = 1;

/** The Finder's own canonical route. */
export const FINDER_BASE = "/animal-finder";

/**
 * Coverage thresholds, applied at build time by the index builder.
 *
 * A facet below `MINIMUM` is not exposed at all: a filter that silently hides
 * more than half the collection teaches a reader that the collection is
 * smaller than it is. Between `MINIMUM` and `STRONG` a facet ships with a
 * visible partial-data note stating exactly how many records carry a value.
 */
export const FACET_COVERAGE_STRONG = 0.7;
export const FACET_COVERAGE_MINIMUM = 0.5;

/** Display labels for the coverage flags. */
export const FINDER_COVERAGE_LABEL: Record<FinderCoverageFlag, string> = {
  comparison: "Has a comparison page",
  photo: "Has a licensed photo",
  conservation: "Has a conservation record",
  domestic: "Documented domestic animal",
};

/** Longer hints, shown beside each coverage checkbox. */
export const FINDER_COVERAGE_HINT: Record<FinderCoverageFlag, string> = {
  comparison: "Appears in at least one published side-by-side comparison.",
  photo: "The profile carries a licence-verified photograph.",
  conservation: "Linked to a FaunaHub Red List conservation record.",
  domestic: "On FaunaHub's reviewed list of domesticated animals.",
};

/** The id of the facet that carries the coverage flags. */
export const FINDER_COVERAGE_FACET = "coverage";

/** Rebuild the fields that are derived rather than transported. */
export function hydrateFinderDocument(entry: FinderIndexEntry): FinderAnimalDocument {
  const parts = [entry.name, entry.scientificName ?? "", ...(entry.tags ?? [])];
  return {
    ...entry,
    searchText: parts.join(" ").toLowerCase(),
    foldedName: fold(entry.name),
    nameTokens: tokenize(entry.name),
    foldedScientificName: entry.scientificName ? fold(entry.scientificName) : undefined,
    tagTokens: (entry.tags ?? []).map((tag) => tokenize(tag)),
  };
}
