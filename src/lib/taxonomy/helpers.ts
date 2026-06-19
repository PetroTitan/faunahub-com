import type { SourceLink } from "@/lib/educational/types";
import { ANIMAL_TAXONOMY_GROUPS, getChildren } from "./animal-groups";
import {
  SRC_CATALOGUE_OF_LIFE,
  SRC_GBIF,
  SRC_ITIS,
  SRC_WORMS,
  SRC_EOL,
  SRC_ADW_HOME,
  SRC_IUCN_HOME,
} from "./sources";
import type { AnimalTaxonomyGroup, CoverageStatus } from "./types";

export const VERTEBRATE_CLASS_ORDER = [
  "mammals", "birds", "reptiles", "amphibians", "fish",
];
export const INVERTEBRATE_GROUP_ORDER = [
  "insects", "arachnids", "crustaceans", "mollusks", "echinoderms",
  "cnidarians", "annelids", "flatworms", "nematodes", "sponges",
  "other-invertebrates",
];
export const MARINE_GROUP_ORDER = [
  "reef-animals", "deep-sea-animals", "open-ocean-animals",
  "seafloor-animals", "planktonic-animals",
];
export const HUMAN_GROUP_ORDER = [
  "domestic-animals", "farm-animals", "companion-animals",
  "urban-wildlife", "invasive-species",
];

export function getVertebrateClasses(): AnimalTaxonomyGroup[] {
  return getChildren("vertebrates");
}
export function getInvertebrateGroups(): AnimalTaxonomyGroup[] {
  return getChildren("invertebrates");
}
export function getMarineGroups(): AnimalTaxonomyGroup[] {
  return MARINE_GROUP_ORDER.map(
    (s) => ANIMAL_TAXONOMY_GROUPS.find((g) => g.slug === s)!,
  ).filter(Boolean);
}
export function getHumanGroups(): AnimalTaxonomyGroup[] {
  return HUMAN_GROUP_ORDER.map(
    (s) => ANIMAL_TAXONOMY_GROUPS.find((g) => g.slug === s)!,
  ).filter(Boolean);
}

/** Unique count of real /animals profiles mapped across all groups. */
export function totalProfiledAnimals(): number {
  const set = new Set<string>();
  for (const g of ANIMAL_TAXONOMY_GROUPS)
    for (const s of g.existingAnimalSlugs) set.add(s);
  return set.size;
}

export function coverageCountsByStatus(): Record<CoverageStatus, number> {
  const out: Record<CoverageStatus, number> = {
    strong: 0, partial: 0, thin: 0, planned: 0,
  };
  for (const g of ANIMAL_TAXONOMY_GROUPS) out[g.coverageStatus] += 1;
  return out;
}

const ALL_SOURCES: SourceLink[] = [
  SRC_CATALOGUE_OF_LIFE, SRC_GBIF, SRC_ITIS, SRC_WORMS, SRC_EOL,
  SRC_ADW_HOME, SRC_IUCN_HOME,
];
const URL_TO_SOURCE = new Map(ALL_SOURCES.map((s) => [s.url, s]));

/** Resolve a group's source URLs to labelled links for display. */
export function groupSourceLinks(group: AnimalTaxonomyGroup): SourceLink[] {
  return group.sourceUrls
    .map((u) => URL_TO_SOURCE.get(u))
    .filter((s): s is SourceLink => !!s);
}

export { ANIMAL_TAXONOMY_GROUPS, getChildren };
