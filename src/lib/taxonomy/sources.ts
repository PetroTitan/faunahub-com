import type { SourceLink } from "@/lib/educational/types";

/**
 * Authoritative taxonomy / biodiversity references used across the coverage
 * system. These are organisation-level references for how animal classification
 * and coverage work — not per-species claims.
 */
export const SRC_CATALOGUE_OF_LIFE: SourceLink = {
  label: "Catalogue of Life",
  url: "https://www.catalogueoflife.org/",
  type: "reference",
  note: "Global index of the world's known species",
};

export const SRC_GBIF: SourceLink = {
  label: "GBIF — Global Biodiversity Information Facility",
  url: "https://www.gbif.org/",
  type: "reference",
  note: "International biodiversity data network",
};

export const SRC_ITIS: SourceLink = {
  label: "ITIS — Integrated Taxonomic Information System",
  url: "https://www.itis.gov/",
  type: "government",
  note: "Authoritative taxonomic information (U.S. partnership)",
};

export const SRC_WORMS: SourceLink = {
  label: "WoRMS — World Register of Marine Species",
  url: "https://www.marinespecies.org/",
  type: "reference",
  note: "Authoritative list of marine species names",
};

export const SRC_EOL: SourceLink = {
  label: "Encyclopedia of Life (EOL)",
  url: "https://eol.org/",
  type: "reference",
  note: "Open access biodiversity knowledge resource",
};

export const SRC_ADW_HOME: SourceLink = {
  label: "Animal Diversity Web — University of Michigan",
  url: "https://animaldiversity.org/",
  type: "university",
  note: "Peer-edited reference accounts for animal species",
};

export const SRC_IUCN_HOME: SourceLink = {
  label: "IUCN Red List of Threatened Species",
  url: "https://www.iucnredlist.org/",
  type: "wildlife",
  note: "Authoritative source for conservation status",
};

/** Default reference set for general taxonomy pages. */
export const TAXONOMY_CORE_SOURCES: SourceLink[] = [
  SRC_CATALOGUE_OF_LIFE,
  SRC_GBIF,
  SRC_ITIS,
  SRC_ADW_HOME,
];

export const TAXONOMY_LAST_REVIEW = "2026-06-16";
