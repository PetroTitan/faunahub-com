/**
 * Coverage-gap notes for /animal-taxonomy/missing-animals.
 *
 * These describe WHERE FaunaHub coverage is thin or planned, in cautious
 * language. They are roadmap context — not lists of pages, and not species
 * counts. Specific candidate species live in the expansion roadmap.
 */
export interface CoverageGap {
  heading: string;
  body: string;
  /** Example groups/animals to illustrate the gap (roadmap items, not pages). */
  examples: string[];
}

export const COVERAGE_GAPS: readonly CoverageGap[] = [
  {
    heading: "Invertebrate coverage gaps",
    body: "Invertebrates make up the great majority of described animal species, yet they are the thinnest part of FaunaHub today. Several whole groups have no profiles yet.",
    examples: ["scorpions", "centipedes & millipedes", "earthworms & leeches", "sea urchins & sea cucumbers", "corals & sea anemones", "snails & slugs"],
  },
  {
    heading: "Deep-sea coverage gaps",
    body: "FaunaHub's ocean depth pages describe deep-sea life from authoritative sources, but the deeper zones do not yet have dedicated animal profiles.",
    examples: ["anglerfish", "giant squid", "vampire squid", "dumbo octopus", "gulper eel", "barreleye"],
  },
  {
    heading: "Regional fauna coverage gaps",
    body: "The continents layer is representative, not complete. Each continent has well-known animals still to add, especially smaller mammals, regional birds, and herpetofauna.",
    examples: ["saiga", "markhor", "Tasmanian devil", "numbat", "quokka", "dingo"],
  },
  {
    heading: "Conservation (Red List) coverage gaps",
    body: "The endangered-animals layer holds many index records but only a limited number of detailed profiles. More threatened species deserve full, source-backed profiles with licensed images.",
    examples: ["additional Critically Endangered mammals", "threatened amphibians", "threatened marine fish", "more region-specific species"],
  },
  {
    heading: "Domestic, farm & urban gaps",
    body: "Common domestic, farm, and urban-adapted animals are only partly covered, and should be clearly labelled as domestic or human-associated rather than wild fauna.",
    examples: ["chicken", "turkey", "donkey", "opossum", "starling"],
  },
];
