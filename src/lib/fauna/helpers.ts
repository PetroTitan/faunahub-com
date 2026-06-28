import { FAUNA_RECORDS, resolveFaunaSourceLinks } from "./featured-animals";
import { getAnimalImage } from "@/lib/images/animal-images";
import type {
  FaunaContinentRecord,
  FaunaContinentSlug,
  FaunaHabitatTag,
} from "./types";

export type FaunaTaxon =
  | "mammals"
  | "birds"
  | "reptiles-amphibians"
  | "invertebrates";

const TAXON: Record<FaunaTaxon, Set<string>> = {
  mammals: new Set([
    "lion", "leopard", "cheetah", "tiger", "jaguar", "elephant", "giraffe",
    "zebra", "gorilla", "chimpanzee", "hyena", "meerkat", "lemur", "red-panda",
    "panda", "tapir", "sloth", "armadillo", "porcupine", "wolf", "fox", "bear",
    "lynx", "deer", "moose", "raccoon", "otter", "beaver", "badger", "hedgehog",
    "bat", "kangaroo", "koala", "wombat", "platypus", "rabbit", "seal",
    // Africa expansion
    "african-buffalo", "wildebeest", "okapi", "aardvark", "mandrill", "gelada",
    "hippopotamus",
    // Asia expansion
    "snow-leopard", "asian-black-bear", "musk-deer", "clouded-leopard",
    "sun-bear", "takin", "proboscis-monkey", "orangutan", "gibbon", "macaque",
    "slow-loris", "binturong", "colugo", "tarsier", "douc", "langur", "saiga",
    "rhinoceros", "camel",
    // Europe expansion
    "european-bison", "eurasian-lynx", "european-badger", "red-deer",
    "roe-deer", "european-hare", "european-hedgehog", "european-otter",
    "alpine-ibex", "pine-marten", "wild-boar",
    // North America expansion
    "bighorn-sheep", "mountain-goat", "cougar", "american-black-bear",
    "polar-bear", "arctic-fox", "pronghorn", "elk", "bobcat", "coyote",
    "skunk", "bison",
    // South America expansion
    "giant-anteater", "vicuna", "guanaco", "llama", "spectacled-bear",
    "pink-river-dolphin", "giant-otter", "capybara", "maned-wolf", "ocelot",
    "howler-monkey", "spider-monkey", "coati", "agouti", "kinkajou", "peccary",
    // Oceania expansion
    "wallaby", "dingo", "cuscus", "dugong", "humpback-whale", "tree-kangaroo",
    "quokka", "sugar-glider", "echidna", "tasmanian-devil", "numbat", "bilby",
    "quoll", "bandicoot",
    // Polar / Antarctica refinement (marine mammals)
    "leopard-seal", "weddell-seal", "crabeater-seal", "whale", "orca",
  ]),
  birds: new Set([
    "eagle", "owl", "falcon", "hawk", "vulture", "penguin", "pelican",
    "flamingo", "peacock", "toucan", "hummingbird", "woodpecker", "robin",
    "sparrow", "crow", "raven", "pigeon", "swan", "stork", "duck", "goose",
    // Africa expansion
    "marabou-stork", "african-grey-parrot", "secretary-bird", "ostrich",
    // Asia expansion
    "sarus-crane", "mandarin-duck", "hornbill",
    // Europe expansion
    "white-stork", "barn-owl", "golden-eagle", "capercaillie",
    // North America expansion
    "bald-eagle", "wild-turkey", "whooping-crane", "sandhill-crane",
    "california-condor", "snowy-owl", "common-loon",
    // South America expansion
    "harpy-eagle", "andean-condor", "macaw", "rhea", "king-vulture",
    "scarlet-ibis", "hoatzin",
    // Oceania expansion
    "galah", "black-swan", "wedge-tailed-eagle", "takahe", "cassowary", "emu",
    "kiwi", "kakapo", "kea", "lyrebird", "bird-of-paradise", "magpie",
    // Polar / Antarctica refinement (seabirds)
    "emperor-penguin", "adelie-penguin", "snow-petrel", "wandering-albatross",
    "albatross",
  ]),
  "reptiles-amphibians": new Set([
    "crocodile", "alligator", "caiman", "komodo-dragon", "monitor-lizard",
    "iguana", "chameleon", "gecko", "snake", "anaconda", "turtle", "frog",
    "toad", "salamander", "newt",
    // Africa expansion
    "nile-crocodile", "rock-python", "puff-adder", "mamba", "clawed-frog",
    // Asia expansion
    "king-cobra", "reticulated-python", "asian-giant-salamander", "gharial",
    // Europe expansion
    "european-viper", "grass-snake", "european-tree-frog", "fire-salamander",
    // North America expansion
    "american-alligator", "snapping-turtle", "rattlesnake", "gila-monster",
    "axolotl", "bullfrog",
    // South America expansion
    "marine-iguana", "galapagos-tortoise", "poison-dart-frog", "glass-frog",
    "boa",
    // Oceania expansion
    "saltwater-crocodile", "blue-tongued-skink", "cane-toad", "tuatara",
    "frilled-lizard", "thorny-devil", "sea-turtle",
  ]),
  invertebrates: new Set([
    "bee", "butterfly", "ant", "spider", "dragonfly", "ladybug",
    "praying-mantis",
    // Africa expansion
    "dung-beetle", "termite", "tsetse-fly",
    // Asia expansion
    "asian-giant-hornet", "silkworm", "horseshoe-crab",
    // Europe expansion
    "stag-beetle",
    // North America expansion
    "monarch-butterfly", "luna-moth", "scorpion",
    // South America expansion
    "blue-morpho-butterfly", "leafcutter-ant", "goliath-birdeater",
    "amazonian-giant-centipede",
    // Oceania expansion
    "box-jellyfish", "crown-of-thorns-starfish", "funnel-web-spider",
    "redback-spider", "giant-weta", "blue-ringed-octopus", "stick-insect",
    // Polar / Antarctica refinement (Southern Ocean invertebrates)
    "antarctic-krill", "krill", "squid",
  ]),
};

export function taxonOf(animalSlug: string): FaunaTaxon | "other" {
  for (const t of Object.keys(TAXON) as FaunaTaxon[]) {
    if (TAXON[t].has(animalSlug)) return t;
  }
  return "other";
}

const CONFIDENCE_RANK: Record<string, number> = {
  verified: 0,
  "broad-range": 1,
  representative: 2,
  "source-review-pending": 3,
};

function sortRecords(records: FaunaContinentRecord[]): FaunaContinentRecord[] {
  return [...records].sort(
    (a, b) =>
      CONFIDENCE_RANK[a.confidence] - CONFIDENCE_RANK[b.confidence] ||
      a.commonName.localeCompare(b.commonName),
  );
}

export function getByContinent(
  continent: FaunaContinentSlug,
): FaunaContinentRecord[] {
  return sortRecords(
    FAUNA_RECORDS.filter((r) => r.continentSlugs.includes(continent)),
  );
}

export function getByHabitat(tag: FaunaHabitatTag): FaunaContinentRecord[] {
  return sortRecords(FAUNA_RECORDS.filter((r) => r.habitatTags.includes(tag)));
}

export function continentCounts(): Record<FaunaContinentSlug, number> {
  const out = {
    africa: 0, asia: 0, europe: 0, "north-america": 0,
    "south-america": 0, oceania: 0, antarctica: 0,
  } as Record<FaunaContinentSlug, number>;
  for (const r of FAUNA_RECORDS)
    for (const c of r.continentSlugs) out[c] += 1;
  return out;
}

/** Group a continent's records by taxon for the page sections. */
export function getContinentByTaxon(
  continent: FaunaContinentSlug,
): Record<FaunaTaxon, FaunaContinentRecord[]> {
  const records = getByContinent(continent);
  const groups: Record<FaunaTaxon, FaunaContinentRecord[]> = {
    mammals: [], birds: [], "reptiles-amphibians": [], invertebrates: [],
  };
  for (const r of records) {
    const t = taxonOf(r.animalSlug);
    if (t !== "other") groups[t].push(r);
  }
  return groups;
}

/** A small, image-led featured selection for the /fauna hub. */
export function getFeaturedFauna(limit = 8): FaunaContinentRecord[] {
  const picks = [
    "lion", "tiger", "kangaroo", "jaguar", "panda", "gorilla", "penguin", "sloth",
  ];
  const bySlug = new Map(FAUNA_RECORDS.map((r) => [r.animalSlug, r]));
  return picks
    .map((s) => bySlug.get(s))
    .filter((r): r is FaunaContinentRecord => !!r)
    .slice(0, limit);
}

/** Resolve source links (with labels) for display. */
export function faunaSourceLinks(animalSlug: string) {
  return resolveFaunaSourceLinks(animalSlug);
}

/** Hero image for an animal, if one exists. */
export function faunaImage(animalSlug: string) {
  return getAnimalImage(animalSlug) ?? null;
}

export { FAUNA_RECORDS };
