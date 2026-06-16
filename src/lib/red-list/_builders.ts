import type { RedListSpeciesRecord } from "./types";
import { RED_LIST_LAST_REVIEW } from "./methodology";

/**
 * Shared record builders + authoritative-source URL helpers for the Red List
 * dataset. Kept in one module so the Phase 1 records and every later batch use
 * identical construction and the same verified source patterns.
 *
 * Source-link standard (matches the rest of FaunaHub): every URL these helpers
 * produce is confirmed reachable during a review pass. IUCN is linked only via
 * a human-facing lookup (`iucn`), never a scraped or fabricated assessment URL.
 */

export const LAST_VERIFIED = RED_LIST_LAST_REVIEW;

/** Animal Diversity Web species account (University of Michigan). */
export const adw = (binomial: string): string =>
  `https://animaldiversity.org/accounts/${binomial}/`;
/** NOAA Fisheries species page. */
export const noaa = (slug: string): string =>
  `https://www.fisheries.noaa.gov/species/${slug}`;
/** Smithsonian's National Zoo & Conservation Biology Institute species page. */
export const szoo = (slug: string): string =>
  `https://nationalzoo.si.edu/animals/${slug}`;
/** U.S. Fish & Wildlife Service species profile. */
export const fws = (slug: string): string =>
  `https://www.fws.gov/species/${slug}`;
/** BirdLife International DataZone factsheet (the Red List authority for birds). */
export const birdlife = (slug: string): string =>
  `http://datazone.birdlife.org/species/factsheet/${slug}`;
/** FishBase species summary. */
export const fishbase = (binomialDash: string): string =>
  `https://www.fishbase.se/summary/${binomialDash}.html`;
/** AmphibiaWeb species query (University of California, Berkeley). */
export const amphibiaweb = (genus: string, species: string): string =>
  `https://amphibiaweb.org/cgi/amphib_query?where-genus=${genus}&where-species=${species}`;
/** The Reptile Database (peer-curated reptile taxonomy reference). */
export const reptiledb = (genus: string, species: string): string =>
  `https://reptile-database.reptarium.cz/species?genus=${genus}&species=${species}`;
/** IUCN Red List species lookup link (human-facing, not a scraped page). */
export const iucn = (scientificName: string): string =>
  `https://www.iucnredlist.org/search?query=${encodeURIComponent(
    scientificName,
  )}&searchType=species`;

export const CAT_LABEL = {
  CR: "Critically Endangered",
  EN: "Endangered",
  VU: "Vulnerable",
  NT: "Near Threatened",
  LC: "Least Concern",
  DD: "Data Deficient",
  EW: "Extinct in the Wild",
  EX: "Extinct",
  NE: "Not Evaluated",
} as const;

/** Builds a record with shared defaults to keep the dataset DRY and consistent. */
export function rec(
  r: Omit<
    RedListSpeciesRecord,
    "redListCategoryLabel" | "lastVerified" | "iucnUrl"
  > & {
    iucnUrl?: string;
  },
): RedListSpeciesRecord {
  return {
    ...r,
    redListCategoryLabel: CAT_LABEL[r.redListCategory],
    iucnUrl: r.iucnUrl ?? iucn(r.scientificName),
    lastVerified: LAST_VERIFIED,
  };
}
