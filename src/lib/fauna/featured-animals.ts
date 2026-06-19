import type { SourceLink } from "@/lib/educational/types";
import { ANIMAL_SOURCES, SRC_ADW } from "@/lib/educational/animal-sources";
import type { FaunaContinentRecord } from "./types";

/**
 * Continent distribution records for existing FaunaHub animal profiles.
 *
 * Sourcing: each record reuses the species' already-verified authoritative
 * sources (ANIMAL_SOURCES) so distribution claims rest on the same accounts
 * that document the animal's range. A small set of profiles not covered by
 * ANIMAL_SOURCES use a verified ADW account here (FAUNA_EXTRA_SOURCES).
 *
 * Scope: this layer covers LAND, freshwater, and coastal fauna only. Purely
 * marine/aquarium species (sharks, whales, reef fish, etc.) are intentionally
 * excluded and reserved for the future ocean-by-depth layer.
 *
 * No invented ranges. Widespread groups are marked "broad-range" and described
 * cautiously; nothing here is a complete range map.
 */

const adwAccount = (binomial: string, label: string): SourceLink => ({
  label: `Animal Diversity Web — ${label}`,
  url: `https://animaldiversity.org/accounts/${binomial}/`,
  type: "university",
  note: "University of Michigan species account",
});

/** Verified ADW accounts for profiles not present in ANIMAL_SOURCES. */
const FAUNA_EXTRA_SOURCES: Record<string, SourceLink[]> = {
  bear: [adwAccount("Ursus_arctos", "Ursus arctos (brown bear)"), SRC_ADW],
  fox: [adwAccount("Vulpes_vulpes", "Vulpes vulpes (red fox)"), SRC_ADW],
  giraffe: [
    adwAccount("Giraffa_camelopardalis", "Giraffa camelopardalis (giraffe)"),
    SRC_ADW,
  ],
  kangaroo: [adwAccount("Macropus_rufus", "Macropus rufus (red kangaroo)"), SRC_ADW],
  koala: [
    adwAccount("Phascolarctos_cinereus", "Phascolarctos cinereus (koala)"),
    SRC_ADW,
  ],
  owl: [adwAccount("Strigidae", "Strigidae (typical owls)"), SRC_ADW],
  panda: [
    adwAccount("Ailuropoda_melanoleuca", "Ailuropoda melanoleuca (giant panda)"),
    SRC_ADW,
  ],
  zebra: [adwAccount("Equus_quagga", "Equus quagga (plains zebra)"), SRC_ADW],
};

/** Resolve a profile's authoritative source links for fauna distribution. */
export function resolveFaunaSourceLinks(animalSlug: string): SourceLink[] {
  return ANIMAL_SOURCES[animalSlug] ?? FAUNA_EXTRA_SOURCES[animalSlug] ?? [];
}

type RawRecord = Omit<FaunaContinentRecord, "sourceUrls"> & {
  sourceUrls?: string[];
};

function fc(r: RawRecord): FaunaContinentRecord {
  const sourceUrls =
    r.sourceUrls ?? resolveFaunaSourceLinks(r.animalSlug).map((s) => s.url);
  return { ...r, sourceUrls };
}

export const FAUNA_RECORDS: readonly FaunaContinentRecord[] = [
  // --- Mammals ---
  fc({ animalSlug: "lion", commonName: "Lion", continentSlugs: ["africa", "asia"], habitatTags: ["savanna", "grassland"], distributionNote: "Found across much of sub-Saharan Africa, with a small population in the Gir Forest of India.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "leopard", commonName: "Leopard", continentSlugs: ["africa", "asia"], habitatTags: ["forest", "savanna", "mountain"], distributionNote: "Widely distributed across Africa and parts of Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "cheetah", commonName: "Cheetah", continentSlugs: ["africa", "asia"], habitatTags: ["savanna", "grassland"], distributionNote: "Mainly sub-Saharan Africa, with a tiny remnant population in Iran.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "tiger", commonName: "Tiger", continentSlugs: ["asia"], habitatTags: ["forest", "grassland", "wetland"], distributionNote: "Native to scattered parts of Asia.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "jaguar", commonName: "Jaguar", continentSlugs: ["south-america", "north-america"], habitatTags: ["forest", "wetland"], distributionNote: "Ranges from parts of the southern United States through Central and South America.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "elephant", commonName: "Elephant", continentSlugs: ["africa", "asia"], habitatTags: ["savanna", "forest", "grassland"], distributionNote: "African elephants occur across sub-Saharan Africa; the Asian elephant lives in South and Southeast Asia.", confidence: "verified", isNativeRange: true, notes: "Distinct species on each continent." }),
  fc({ animalSlug: "giraffe", commonName: "Giraffe", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland"], distributionNote: "Native to sub-Saharan Africa.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "zebra", commonName: "Zebra", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland"], distributionNote: "Native to eastern and southern Africa.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "gorilla", commonName: "Gorilla", continentSlugs: ["africa"], habitatTags: ["forest", "mountain"], distributionNote: "Equatorial African rainforests.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "chimpanzee", commonName: "Chimpanzee", continentSlugs: ["africa"], habitatTags: ["forest", "savanna"], distributionNote: "Forests and savanna-woodland of equatorial Africa.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "hyena", commonName: "Hyena", continentSlugs: ["africa", "asia"], habitatTags: ["savanna", "grassland", "desert"], distributionNote: "Across Africa and into parts of the Middle East and Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "meerkat", commonName: "Meerkat", continentSlugs: ["africa"], habitatTags: ["desert", "savanna"], distributionNote: "Dry savanna and deserts of southern Africa.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "lemur", commonName: "Lemur", continentSlugs: ["africa"], habitatTags: ["forest"], distributionNote: "Found only on Madagascar, off the south-east African coast.", confidence: "verified", isNativeRange: true, notes: "Endemic to Madagascar." }),
  fc({ animalSlug: "red-panda", commonName: "Red Panda", continentSlugs: ["asia"], habitatTags: ["forest", "mountain"], distributionNote: "Eastern Himalaya and mountains of south-western China.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "panda", commonName: "Giant Panda", continentSlugs: ["asia"], habitatTags: ["forest", "mountain"], distributionNote: "Mountain bamboo forests of central China.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "tapir", commonName: "Tapir", continentSlugs: ["south-america", "north-america", "asia"], habitatTags: ["forest", "wetland"], distributionNote: "Tapir species occur in Central and South America and in South-east Asia.", confidence: "broad-range", isNativeRange: true, notes: "Several distinct species." }),
  fc({ animalSlug: "sloth", commonName: "Sloth", continentSlugs: ["south-america", "north-america"], habitatTags: ["forest"], distributionNote: "Tropical forests of Central and South America.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "armadillo", commonName: "Armadillo", continentSlugs: ["south-america", "north-america"], habitatTags: ["grassland", "forest"], distributionNote: "The Americas; the nine-banded armadillo ranges into the southern United States.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "porcupine", commonName: "Porcupine", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america"], habitatTags: ["forest", "grassland", "desert"], distributionNote: "Old World and New World porcupines occur across several continents.", confidence: "broad-range", isNativeRange: true, notes: "Two distinct families." }),
  fc({ animalSlug: "wolf", commonName: "Wolf", continentSlugs: ["north-america", "europe", "asia"], habitatTags: ["forest", "tundra", "grassland", "mountain"], distributionNote: "Across much of the Northern Hemisphere.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "fox", commonName: "Fox", continentSlugs: ["europe", "asia", "north-america", "africa"], habitatTags: ["forest", "grassland", "urban-adapted", "tundra"], distributionNote: "The red fox is one of the most widespread wild carnivores; foxes also occur on other continents.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "bear", commonName: "Bear", continentSlugs: ["north-america", "europe", "asia"], habitatTags: ["forest", "mountain", "tundra"], distributionNote: "The brown bear ranges across North America, Europe, and Asia; other bears occur in these regions too.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "lynx", commonName: "Lynx", continentSlugs: ["europe", "asia", "north-america"], habitatTags: ["forest", "mountain", "tundra"], distributionNote: "Lynx species occur across Europe, Asia, and North America.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "deer", commonName: "Deer", continentSlugs: ["europe", "asia", "north-america", "south-america"], habitatTags: ["forest", "grassland"], distributionNote: "Deer occur natively across many continents.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "moose", commonName: "Moose", continentSlugs: ["north-america", "europe", "asia"], habitatTags: ["forest", "wetland"], distributionNote: "Northern forests of North America and northern Eurasia.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "raccoon", commonName: "Raccoon", continentSlugs: ["north-america"], habitatTags: ["forest", "wetland", "urban-adapted"], distributionNote: "Native to North America; introduced to parts of Europe and Asia.", confidence: "verified", isNativeRange: true, isIntroducedRange: true }),
  fc({ animalSlug: "otter", commonName: "Otter", continentSlugs: ["europe", "asia", "north-america", "south-america", "africa"], habitatTags: ["freshwater", "wetland", "coastal"], distributionNote: "Otter species occur on most continents.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "beaver", commonName: "Beaver", continentSlugs: ["north-america", "europe", "asia"], habitatTags: ["freshwater", "wetland"], distributionNote: "North American and Eurasian beavers.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "badger", commonName: "Badger", continentSlugs: ["europe", "asia", "north-america"], habitatTags: ["forest", "grassland"], distributionNote: "Badger species occur across Eurasia and North America.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "hedgehog", commonName: "Hedgehog", continentSlugs: ["europe", "asia", "africa"], habitatTags: ["forest", "grassland", "urban-adapted"], distributionNote: "Native to Europe, Asia, and Africa — not naturally to the Americas or Australia.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "bat", commonName: "Bat", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america", "oceania"], habitatTags: ["forest", "urban-adapted", "coastal"], distributionNote: "Bats occur on every continent except Antarctica.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "kangaroo", commonName: "Kangaroo", continentSlugs: ["oceania"], habitatTags: ["grassland", "savanna", "desert"], distributionNote: "Native to Australia.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "koala", commonName: "Koala", continentSlugs: ["oceania"], habitatTags: ["forest"], distributionNote: "Eucalyptus forests of eastern Australia.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "wombat", commonName: "Wombat", continentSlugs: ["oceania"], habitatTags: ["forest", "grassland"], distributionNote: "Native to Australia and Tasmania.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "platypus", commonName: "Platypus", continentSlugs: ["oceania"], habitatTags: ["freshwater", "wetland"], distributionNote: "Freshwater systems of eastern Australia and Tasmania.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "rabbit", commonName: "Rabbit", continentSlugs: ["europe"], habitatTags: ["grassland", "urban-adapted"], distributionNote: "The European rabbit is native to the Iberian Peninsula and widely introduced elsewhere.", confidence: "verified", isNativeRange: true, isIntroducedRange: true }),

  // --- Birds ---
  fc({ animalSlug: "eagle", commonName: "Eagle", continentSlugs: ["north-america", "europe", "asia", "africa"], habitatTags: ["mountain", "forest", "coastal"], distributionNote: "Eagle species occur on several continents.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "owl", commonName: "Owl", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america", "oceania"], habitatTags: ["forest", "grassland", "urban-adapted"], distributionNote: "Owls occur on every continent except Antarctica.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "falcon", commonName: "Falcon", continentSlugs: ["north-america", "europe", "asia", "africa", "oceania", "south-america"], habitatTags: ["grassland", "mountain", "urban-adapted"], distributionNote: "The peregrine falcon is among the most widely distributed birds.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "hawk", commonName: "Hawk", continentSlugs: ["north-america", "south-america"], habitatTags: ["forest", "grassland"], distributionNote: "Hawks are widespread; the red-tailed hawk ranges across North America.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "vulture", commonName: "Vulture", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america"], habitatTags: ["savanna", "mountain"], distributionNote: "Old World and New World vultures occur across several continents.", confidence: "broad-range", isNativeRange: true, notes: "Two distinct groups." }),
  fc({ animalSlug: "penguin", commonName: "Penguin", continentSlugs: ["antarctica", "oceania", "south-america", "africa"], habitatTags: ["coastal", "polar", "island"], distributionNote: "Southern Hemisphere; several species are associated with Antarctic coasts and the Southern Ocean.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "pelican", commonName: "Pelican", continentSlugs: ["north-america", "south-america", "europe", "asia", "africa", "oceania"], habitatTags: ["coastal", "wetland"], distributionNote: "Pelicans occur on coasts and inland waters across continents.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "flamingo", commonName: "Flamingo", continentSlugs: ["africa", "south-america", "asia", "europe"], habitatTags: ["wetland", "coastal"], distributionNote: "Flamingo species occur in Africa, the Americas, and parts of Eurasia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "peacock", commonName: "Peacock", continentSlugs: ["asia"], habitatTags: ["forest", "grassland"], distributionNote: "Indian peafowl are native to South Asia.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "toucan", commonName: "Toucan", continentSlugs: ["south-america", "north-america"], habitatTags: ["forest"], distributionNote: "Tropical forests of Central and South America.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "hummingbird", commonName: "Hummingbird", continentSlugs: ["south-america", "north-america"], habitatTags: ["forest", "mountain"], distributionNote: "Found only in the Americas.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "woodpecker", commonName: "Woodpecker", continentSlugs: ["north-america", "europe", "asia", "africa", "south-america"], habitatTags: ["forest"], distributionNote: "Woodpeckers occur on most continents (absent from Australia and Antarctica).", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "robin", commonName: "Robin", continentSlugs: ["europe"], habitatTags: ["forest", "urban-adapted"], distributionNote: "The European robin is common across Europe.", confidence: "verified", isNativeRange: true, notes: "Distinct from the American robin." }),
  fc({ animalSlug: "sparrow", commonName: "Sparrow", continentSlugs: ["europe", "asia", "africa", "north-america", "south-america", "oceania"], habitatTags: ["urban-adapted", "grassland"], distributionNote: "The house sparrow has spread across much of the world alongside people.", confidence: "broad-range", isNativeRange: true, isIntroducedRange: true }),
  fc({ animalSlug: "crow", commonName: "Crow", continentSlugs: ["north-america", "europe", "asia", "oceania"], habitatTags: ["urban-adapted", "forest", "grassland"], distributionNote: "Crows are widespread and highly adaptable.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "raven", commonName: "Raven", continentSlugs: ["north-america", "europe", "asia"], habitatTags: ["mountain", "tundra", "forest"], distributionNote: "The common raven ranges across the Northern Hemisphere.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "pigeon", commonName: "Pigeon", continentSlugs: ["europe", "asia", "africa", "north-america", "south-america", "oceania"], habitatTags: ["urban-adapted", "coastal"], distributionNote: "The rock dove is found worldwide, especially around cities.", confidence: "broad-range", isNativeRange: true, isIntroducedRange: true }),
  fc({ animalSlug: "swan", commonName: "Swan", continentSlugs: ["europe", "asia", "north-america"], habitatTags: ["freshwater", "wetland"], distributionNote: "Swan species occur across the Northern Hemisphere; the black swan is native to Australia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "stork", commonName: "Stork", continentSlugs: ["europe", "africa", "asia"], habitatTags: ["wetland", "grassland"], distributionNote: "The white stork breeds across Europe, with migrations to Africa and Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "duck", commonName: "Duck", continentSlugs: ["europe", "asia", "north-america"], habitatTags: ["freshwater", "wetland"], distributionNote: "The mallard is widespread across the Northern Hemisphere.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "goose", commonName: "Goose", continentSlugs: ["europe", "asia"], habitatTags: ["freshwater", "wetland", "grassland"], distributionNote: "The greylag goose breeds across Europe and Asia.", confidence: "broad-range", isNativeRange: true }),

  // --- Reptiles & Amphibians ---
  fc({ animalSlug: "crocodile", commonName: "Crocodile", continentSlugs: ["africa", "asia", "oceania"], habitatTags: ["wetland", "freshwater", "coastal"], distributionNote: "Crocodile species occur in Africa, Asia, and northern Australia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "alligator", commonName: "Alligator", continentSlugs: ["north-america", "asia"], habitatTags: ["wetland", "freshwater"], distributionNote: "The American alligator lives in the south-eastern US; the Chinese alligator in eastern China.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "caiman", commonName: "Caiman", continentSlugs: ["south-america", "north-america"], habitatTags: ["wetland", "freshwater"], distributionNote: "Wetlands of Central and South America.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "komodo-dragon", commonName: "Komodo Dragon", continentSlugs: ["asia"], habitatTags: ["island", "forest"], distributionNote: "A few islands in Indonesia.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "monitor-lizard", commonName: "Monitor Lizard", continentSlugs: ["africa", "asia", "oceania"], habitatTags: ["forest", "savanna", "wetland"], distributionNote: "Monitor lizards occur across Africa, Asia, and Australia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "iguana", commonName: "Iguana", continentSlugs: ["south-america", "north-america"], habitatTags: ["forest", "coastal"], distributionNote: "Green iguanas range across Central and South America.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "chameleon", commonName: "Chameleon", continentSlugs: ["africa", "asia", "europe"], habitatTags: ["forest", "savanna"], distributionNote: "Most chameleon species live in Africa and Madagascar, with some in southern Europe and Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "gecko", commonName: "Gecko", continentSlugs: ["asia", "oceania", "africa", "north-america", "south-america", "europe"], habitatTags: ["forest", "desert", "urban-adapted"], distributionNote: "Geckos are a large, widespread group across warm regions of the world.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "snake", commonName: "Snake", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america", "oceania"], habitatTags: ["forest", "grassland", "desert", "wetland"], distributionNote: "Snakes occur on every continent except Antarctica.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "anaconda", commonName: "Anaconda", continentSlugs: ["south-america"], habitatTags: ["wetland", "freshwater"], distributionNote: "The green anaconda lives in tropical South America.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "turtle", commonName: "Turtle", continentSlugs: ["north-america", "asia", "europe", "africa", "south-america"], habitatTags: ["freshwater", "wetland"], distributionNote: "Freshwater and terrestrial turtles occur widely across continents.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "frog", commonName: "Frog", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america", "oceania"], habitatTags: ["wetland", "freshwater", "forest"], distributionNote: "Frogs occur on every continent except Antarctica.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "toad", commonName: "Toad", continentSlugs: ["europe", "asia", "africa", "north-america", "south-america"], habitatTags: ["grassland", "forest", "urban-adapted"], distributionNote: "True toads are widespread across continents.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "salamander", commonName: "Salamander", continentSlugs: ["north-america", "europe", "asia"], habitatTags: ["freshwater", "forest"], distributionNote: "Salamanders are concentrated in the Northern Hemisphere.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "newt", commonName: "Newt", continentSlugs: ["europe", "asia", "north-america"], habitatTags: ["freshwater", "wetland"], distributionNote: "Newts occur across the Northern Hemisphere.", confidence: "broad-range", isNativeRange: true }),

  // --- Coastal / polar ---
  fc({ animalSlug: "seal", commonName: "Seal", continentSlugs: ["antarctica", "north-america", "europe", "oceania", "south-america", "africa"], habitatTags: ["coastal", "polar"], distributionNote: "Seals occur on coasts and in cold seas worldwide, including around Antarctica.", confidence: "broad-range", isNativeRange: true }),

  // --- Notable invertebrates ---
  fc({ animalSlug: "bee", commonName: "Bee", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america", "oceania"], habitatTags: ["grassland", "forest", "urban-adapted"], distributionNote: "Bees occur on every continent except Antarctica.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "butterfly", commonName: "Butterfly", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america", "oceania"], habitatTags: ["grassland", "forest"], distributionNote: "Butterflies occur on every continent except Antarctica.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "ant", commonName: "Ant", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america", "oceania"], habitatTags: ["forest", "grassland", "urban-adapted"], distributionNote: "Ants occur on every continent except Antarctica.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "spider", commonName: "Spider", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america", "oceania"], habitatTags: ["forest", "grassland", "urban-adapted"], distributionNote: "Spiders occur on every continent except Antarctica.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "dragonfly", commonName: "Dragonfly", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america", "oceania"], habitatTags: ["wetland", "freshwater"], distributionNote: "Dragonflies are found near fresh water across every continent except Antarctica.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "ladybug", commonName: "Ladybug", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america", "oceania"], habitatTags: ["grassland", "urban-adapted"], distributionNote: "Lady beetles are widespread across the world's land continents.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "praying-mantis", commonName: "Praying Mantis", continentSlugs: ["africa", "asia", "europe", "north-america", "south-america", "oceania"], habitatTags: ["grassland", "forest"], distributionNote: "Mantises occur in warmer regions across many continents.", confidence: "broad-range", isNativeRange: true }),
];

export const FAUNA_RECORD_COUNT = FAUNA_RECORDS.length;
