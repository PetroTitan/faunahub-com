/**
 * Fauna geography data model.
 *
 * This layer maps EXISTING FaunaHub animal profiles (/animals/[slug]) to the
 * continents and habitats they are associated with, for educational discovery.
 *
 * Compliance posture (read before editing):
 *  - Continent links describe where a species is found / associated with, drawn
 *    from the authoritative account already cited for that animal. They are NOT
 *    complete range maps and never a political/border claim.
 *  - No invented ranges, continent presence, habitats, or "native to" claims.
 *  - `confidence` is honest: "verified" (clear, well-documented range),
 *    "broad-range" (widespread/cosmopolitan — shown as representative),
 *    "representative" (group/!exact, e.g. a family page standing for the group),
 *    "source-review-pending" (compiled, confirm against the source).
 *  - Domestic/livestock and introduced contexts are flagged, never presented as
 *    wild native fauna.
 */

export type FaunaContinentSlug =
  | "africa"
  | "asia"
  | "europe"
  | "north-america"
  | "south-america"
  | "oceania"
  | "antarctica";

export type FaunaHabitatTag =
  | "forest"
  | "grassland"
  | "savanna"
  | "desert"
  | "mountain"
  | "tundra"
  | "wetland"
  | "freshwater"
  | "coastal"
  | "island"
  | "polar"
  | "urban-adapted";

export type FaunaConfidence =
  | "verified"
  | "broad-range"
  | "representative"
  | "source-review-pending";

export interface FaunaContinentRecord {
  /** Links to an existing /animals/[slug] profile. */
  animalSlug: string;
  commonName: string;
  continentSlugs: FaunaContinentSlug[];
  habitatTags: FaunaHabitatTag[];
  /** Short, cautious, original-language note on where the animal is found. */
  distributionNote: string;
  /** Authoritative source URLs (resolved from verified animal sources). */
  sourceUrls: string[];
  confidence: FaunaConfidence;
  isNativeRange?: boolean;
  isIntroducedRange?: boolean;
  isDomesticContext?: boolean;
  notes?: string;
}

export interface FaunaContinentMeta {
  slug: FaunaContinentSlug;
  label: string;
  blurb: string;
  icon: string;
  order: number;
}

export interface FaunaHabitatMeta {
  tag: FaunaHabitatTag;
  label: string;
  description: string;
  icon: string;
}
