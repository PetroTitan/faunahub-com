import type { FutureBatch } from "./types";

/**
 * Internal expansion roadmap. These are PLANNING records, not public animal
 * pages. `exampleSpecies` are candidate animals for future batches, never
 * published routes. Pages are created later, one verified batch at a time, only
 * after the quality gates on /animal-taxonomy/coverage-roadmap are met.
 */
export const FUTURE_BATCHES: readonly FutureBatch[] = [
  {
    slug: "deep-sea-species",
    title: "Deep-Sea Species Expansion",
    purpose:
      "Add dedicated profiles for deep-sea animals so the ocean depth pages can link real profiles, not just zone science.",
    priority: "high",
    exampleSpecies: ["anglerfish","giant-isopod","vampire-squid","dumbo-octopus","gulper-eel","barreleye","yeti-crab","snailfish","lanternfish","hatchetfish"],
    requiredSourceTypes: ["NOAA Ocean Exploration","MBARI","WoRMS","peer-reviewed deep-sea research"],
    imageDifficulty: "hard",
    riskNotes:
      "Licensed images of deep-sea animals are scarce; many available images are research-cruise media with unclear licenses. Verify each license carefully.",
    shouldCreatePages: false,
    status: "ready-for-research",
  },
  {
    slug: "invertebrates-batch-1",
    title: "Invertebrates Expansion — Batch 1",
    purpose: "Strengthen thin invertebrate coverage with well-known terrestrial and marine invertebrates.",
    priority: "high",
    exampleSpecies: ["scorpion","tarantula","tick","mite","centipede","millipede","earthworm","leech","sea-cucumber","sea-urchin"],
    requiredSourceTypes: ["Animal Diversity Web","Catalogue of Life","WoRMS","museum/university zoology"],
    imageDifficulty: "moderate",
    riskNotes: "Species identification matters; some groups need careful image verification.",
    shouldCreatePages: false,
    status: "ready-for-research",
  },
  {
    slug: "mollusks-shellfish",
    title: "Mollusks & Shellfish Batch",
    purpose: "Cover the diverse mollusk phylum beyond octopus and squid.",
    priority: "high",
    exampleSpecies: ["clam","mussel","oyster","scallop","nautilus","cuttlefish","sea-slug","nudibranch","cone-snail","abalone"],
    requiredSourceTypes: ["WoRMS","Catalogue of Life","Animal Diversity Web","NOAA Fisheries"],
    imageDifficulty: "moderate",
    riskNotes: "Distinguish marine vs freshwater species; cone snails are venomous — frame educationally.",
    shouldCreatePages: false,
    status: "planned",
  },
  { slug: "africa-fauna", title: "African Fauna Batch", purpose: "Deepen African land-fauna coverage to support the continents layer.", priority: "medium", exampleSpecies: ["wildebeest","mongoose","aardvark","warthog","african-buffalo","greater-kudu"], requiredSourceTypes: ["Animal Diversity Web","IUCN Red List","Britannica"], imageDifficulty: "moderate", riskNotes: "Prefer species with clean wild-habitat licensed images.", shouldCreatePages: false, status: "planned" },
  { slug: "asia-fauna", title: "Asian Fauna Batch", purpose: "Deepen Asian land-fauna coverage.", priority: "medium", exampleSpecies: ["gibbon","sun-bear","binturong","pangolin","macaque","clouded-leopard"], requiredSourceTypes: ["Animal Diversity Web","IUCN Red List"], imageDifficulty: "moderate", riskNotes: "Several candidates are threatened; coordinate with the Red List layer.", shouldCreatePages: false, status: "planned" },
  { slug: "europe-fauna", title: "European Fauna Batch", purpose: "Deepen European land-fauna coverage.", priority: "medium", exampleSpecies: ["european-bison","wild-boar","ibex","chamois","pine-marten","stoat"], requiredSourceTypes: ["Animal Diversity Web","national wildlife agencies"], imageDifficulty: "easy", riskNotes: "Distinguish wild from domestic forms.", shouldCreatePages: false, status: "planned" },
  { slug: "north-america-fauna", title: "North American Fauna Batch", purpose: "Deepen North American land-fauna coverage.", priority: "medium", exampleSpecies: ["pronghorn","coyote","opossum","skunk","chipmunk","elk"], requiredSourceTypes: ["Animal Diversity Web","USFWS","NPS"], imageDifficulty: "easy", riskNotes: "Government public-domain images often available.", shouldCreatePages: false, status: "planned" },
  { slug: "south-america-fauna", title: "South American Fauna Batch", purpose: "Deepen South American land-fauna coverage.", priority: "medium", exampleSpecies: ["capybara","llama","anteater","coati","agouti","spectacled-bear"], requiredSourceTypes: ["Animal Diversity Web","IUCN Red List"], imageDifficulty: "moderate", riskNotes: "Verify native range carefully.", shouldCreatePages: false, status: "planned" },
  { slug: "oceania-fauna", title: "Oceania Fauna Batch", purpose: "Deepen Australian and Pacific fauna coverage.", priority: "medium", exampleSpecies: ["echidna","tasmanian-devil","kookaburra","cassowary","quokka","numbat"], requiredSourceTypes: ["Animal Diversity Web","Australian government wildlife resources"], imageDifficulty: "moderate", riskNotes: "Distinguish mainland vs island endemics.", shouldCreatePages: false, status: "planned" },
  { slug: "polar-fauna", title: "Polar Fauna Batch", purpose: "Cover Arctic and Antarctic-associated animals.", priority: "medium", exampleSpecies: ["polar-bear","walrus","arctic-fox","reindeer","snowy-owl","albatross"], requiredSourceTypes: ["Animal Diversity Web","NOAA","national polar institutes"], imageDifficulty: "moderate", riskNotes: "Coordinate with ocean/coastal layers.", shouldCreatePages: false, status: "planned" },
  { slug: "red-list-detailed", title: "Red List Detailed Profiles Batch", purpose: "Add more detailed endangered species profiles with licensed images.", priority: "high", exampleSpecies: ["amur-leopard","mountain-gorilla","sumatran-tiger","vaquita","saola","kakapo"], requiredSourceTypes: ["IUCN Red List","Animal Diversity Web","NOAA/USFWS"], imageDifficulty: "moderate", riskNotes: "Extends the existing /endangered-animals cluster; reuse its compliance posture.", shouldCreatePages: false, status: "ready-for-research" },
  { slug: "domestic-farm", title: "Domestic & Farm Animals Batch", purpose: "Cover common domestic and farm animals, clearly labelled as domestic.", priority: "medium", exampleSpecies: ["chicken","turkey","donkey","alpaca","water-buffalo","domestic-duck"], requiredSourceTypes: ["Animal Diversity Web","ITIS","agricultural extension resources"], imageDifficulty: "easy", riskNotes: "Always label as domestic/livestock; do not present as wild fauna.", shouldCreatePages: false, status: "planned" },
  { slug: "urban-wildlife", title: "Urban Wildlife Batch", purpose: "Cover wild animals that thrive around people.", priority: "low", exampleSpecies: ["rat","squirrel","opossum","seagull","starling","house-mouse"], requiredSourceTypes: ["Animal Diversity Web","municipal wildlife resources"], imageDifficulty: "easy", riskNotes: "Avoid pest-control framing; keep educational.", shouldCreatePages: false, status: "planned" },
  { slug: "pollinators", title: "Pollinators Batch", purpose: "Cover key pollinating animals across groups.", priority: "medium", exampleSpecies: ["bumblebee","hoverfly","moth","beetle-pollinator","nectar-bat","sunbird"], requiredSourceTypes: ["Xerces Society","Animal Diversity Web","university entomology"], imageDifficulty: "easy", riskNotes: "Cross-cuts insects, birds, and bats.", shouldCreatePages: false, status: "planned" },
  { slug: "venomous-educational", title: "Venomous Animals Educational Batch", purpose: "Cover venomous animals with a careful, safety-aware educational frame.", priority: "low", exampleSpecies: ["cobra","rattlesnake","scorpion","box-jellyfish","cone-snail","blue-ringed-octopus"], requiredSourceTypes: ["Animal Diversity Web","medical/toxinology institutions","museum resources"], imageDifficulty: "moderate", riskNotes: "Educational only — no first-aid/medical instructions; clear safety framing.", shouldCreatePages: false, status: "planned" },
];

export function batchesByStatus(status: FutureBatch["status"]): FutureBatch[] {
  return FUTURE_BATCHES.filter((b) => b.status === status);
}
