/**
 * Source resolution for the Animal Compare Center.
 *
 * Deliberate design: comparison pages do NOT get their own invented citations.
 * A comparison is an editorial join of two already-sourced animal profiles, so
 * its reference list is the union of the two animals' verified source records
 * from `ANIMAL_SOURCES`, plus a small number of named source *families* the
 * record explicitly opts into (IUCN for conservation framing, WoRMS for marine
 * nomenclature, and so on).
 *
 * This is why `ComparisonRecord.sourceIds` holds family ids and not URLs: it is
 * structurally impossible for a record to cite a paper, researcher, dataset, or
 * URL that does not already exist in the repository's verified source registry.
 */
import {
  ANIMAL_SOURCES,
  SRC_ADW,
  SRC_AMPHIBIAWEB,
  SRC_AUDUBON,
  SRC_BRITANNICA_ANIMALS,
  SRC_CORNELL_BIRDS,
  SRC_IUCN,
  SRC_NOAA_FISHERIES,
  SRC_REPTILE_DATABASE,
  SRC_SMITHSONIAN_OCEAN,
  SRC_SMITHSONIAN_ZOO,
  SRC_WORMS,
  SRC_XERCES,
} from "@/lib/educational/animal-sources";
import type { SourceLink } from "@/lib/educational/types";

/** Source families a comparison record may explicitly opt into. */
export const COMPARISON_SOURCE_FAMILIES = {
  adw: SRC_ADW,
  britannica: SRC_BRITANNICA_ANIMALS,
  smithsonian: SRC_SMITHSONIAN_ZOO,
  iucn: SRC_IUCN,
  noaa: SRC_NOAA_FISHERIES,
  xerces: SRC_XERCES,
  cornell: SRC_CORNELL_BIRDS,
  audubon: SRC_AUDUBON,
  amphibiaweb: SRC_AMPHIBIAWEB,
  "reptile-database": SRC_REPTILE_DATABASE,
  worms: SRC_WORMS,
  "smithsonian-ocean": SRC_SMITHSONIAN_OCEAN,
} as const satisfies Record<string, SourceLink>;

export type ComparisonSourceFamilyId = keyof typeof COMPARISON_SOURCE_FAMILIES;

export function isKnownSourceFamily(id: string): id is ComparisonSourceFamilyId {
  return id in COMPARISON_SOURCE_FAMILIES;
}

/**
 * Resolve the reference list for a comparison: both animals' verified profile
 * sources first (they carry the species-level claims), then any opted-in source
 * families that are not already present. Deduplicated by URL.
 */
export function resolveComparisonSources(
  animalASlug: string,
  animalBSlug: string,
  sourceIds: readonly string[],
): SourceLink[] {
  const out: SourceLink[] = [];
  const seen = new Set<string>();

  const push = (source: SourceLink | undefined) => {
    if (!source || seen.has(source.url)) return;
    seen.add(source.url);
    out.push(source);
  };

  for (const slug of [animalASlug, animalBSlug]) {
    for (const source of ANIMAL_SOURCES[slug] ?? []) push(source);
  }
  for (const id of sourceIds) {
    if (isKnownSourceFamily(id)) push(COMPARISON_SOURCE_FAMILIES[id]);
  }

  return out;
}

/** True when at least one animal in the pair has verified profile sources. */
export function hasProfileSources(animalASlug: string, animalBSlug: string): boolean {
  return Boolean(ANIMAL_SOURCES[animalASlug]?.length || ANIMAL_SOURCES[animalBSlug]?.length);
}

export const COMPARISON_METHODOLOGY_NOTE =
  "How this comparison is built: FaunaHub comparisons are assembled from the sourced animal profiles behind them rather than written as standalone claims. Figures such as size, mass, and lifespan are typical ranges that vary by subspecies, population, region, sex, age, and — where relevant — whether an animal lives in the wild or under human care, so they are presented as ranges rather than fixed values. Where a common name covers a group rather than a single species, the page says so instead of implying a species-to-species match. Conservation status changes over time and should be confirmed against the current IUCN Red List. Dimensions that could not be supported from the underlying profiles are omitted rather than filled in.";

export const COMPARISON_SCOPE_NOTE =
  "What this page does not do: it does not rank the two animals, predict the outcome of a confrontation, or present either one as stronger, smarter, or better. It is not veterinary, medical, first-aid, handling, capture, hunting, or pest-control guidance. For an animal in your care, or any situation involving injury, contact a qualified veterinarian, your local wildlife authority, or emergency services.";
