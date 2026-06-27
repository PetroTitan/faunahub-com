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

  // === Regional Fauna: Africa Expansion (2026-06-27) ===
  // New African profiles + previously-unrecorded existing African animals.
  // Cautious range framing; native vs introduced distinguished; no completeness claim.
  fc({ animalSlug: "african-buffalo", commonName: "African Buffalo", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland", "wetland"], distributionNote: "Found in parts of sub-Saharan Africa, in savanna, grassland, and wetland edges with reliable water.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "wildebeest", commonName: "Wildebeest", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland"], distributionNote: "Eastern and southern Africa; famous for large seasonal migrations on the savanna.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "okapi", commonName: "Okapi", continentSlugs: ["africa"], habitatTags: ["forest"], distributionNote: "Endemic to the rainforests of the northeastern Democratic Republic of the Congo.", confidence: "verified", isNativeRange: true, notes: "Narrow, forest-restricted range." }),
  fc({ animalSlug: "aardvark", commonName: "Aardvark", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland", "forest"], distributionNote: "Occurs across parts of sub-Saharan Africa where termites and ants are plentiful.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "mandrill", commonName: "Mandrill", continentSlugs: ["africa"], habitatTags: ["forest"], distributionNote: "Rainforests of west-central Africa (e.g. Cameroon, Gabon, Congo).", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "gelada", commonName: "Gelada", continentSlugs: ["africa"], habitatTags: ["mountain", "grassland"], distributionNote: "Endemic to the high grasslands of the Ethiopian Highlands.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "hippopotamus", commonName: "Hippopotamus", continentSlugs: ["africa"], habitatTags: ["freshwater", "wetland", "savanna"], distributionNote: "Rivers, lakes, and wetlands across parts of sub-Saharan Africa.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "marabou-stork", commonName: "Marabou Stork", continentSlugs: ["africa"], habitatTags: ["wetland", "savanna", "urban-adapted"], distributionNote: "Widespread in sub-Saharan Africa, around wetlands, savannas, and human settlements.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "african-grey-parrot", commonName: "African Grey Parrot", continentSlugs: ["africa"], habitatTags: ["forest"], distributionNote: "Rainforests of western and central Africa; Endangered, with wild capture for the pet trade a key pressure.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "secretary-bird", commonName: "Secretary Bird", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland"], distributionNote: "Open grasslands and savannas across parts of sub-Saharan Africa.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "ostrich", commonName: "Ostrich", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland", "desert"], distributionNote: "Open and arid habitats across parts of Africa.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "nile-crocodile", commonName: "Nile Crocodile", continentSlugs: ["africa"], habitatTags: ["freshwater", "wetland"], distributionNote: "Rivers, lakes, and wetlands across parts of sub-Saharan Africa and the Nile basin.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "rock-python", commonName: "African Rock Python", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland", "forest"], distributionNote: "Sub-Saharan Africa, in savanna, grassland, and forest edge, often near water.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "puff-adder", commonName: "Puff Adder", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland", "desert"], distributionNote: "Widely across sub-Saharan Africa (and parts of Arabia), in savanna, grassland, and semi-desert.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "mamba", commonName: "Black Mamba", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland", "forest"], distributionNote: "The black mamba ranges across parts of sub-Saharan Africa in savanna and woodland.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "clawed-frog", commonName: "African Clawed Frog", continentSlugs: ["africa"], habitatTags: ["freshwater", "wetland"], distributionNote: "Native to ponds and wetlands of southern Africa; widely introduced elsewhere in the world.", confidence: "verified", isNativeRange: true, isIntroducedRange: true, notes: "Introduced/invasive in several regions outside Africa." }),
  fc({ animalSlug: "nile-perch", commonName: "Nile Perch", continentSlugs: ["africa"], habitatTags: ["freshwater"], distributionNote: "Native to parts of Africa (Nile, Congo and other systems); introduced into Lake Victoria, where it is invasive.", confidence: "verified", isNativeRange: true, isIntroducedRange: true, notes: "Invasive in Lake Victoria; linked to native cichlid declines." }),
  fc({ animalSlug: "tilapia", commonName: "Tilapia", continentSlugs: ["africa"], habitatTags: ["freshwater"], distributionNote: "Native to parts of Africa (and the Levant); the Nile tilapia is widely farmed and introduced worldwide.", confidence: "broad-range", isNativeRange: true, isIntroducedRange: true }),
  fc({ animalSlug: "dung-beetle", commonName: "Dung Beetle", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland", "forest"], distributionNote: "Highly diverse across Africa (and worldwide except Antarctica); abundant in savannas with large herbivores.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "termite", commonName: "Termite", continentSlugs: ["africa"], habitatTags: ["savanna", "grassland", "forest"], distributionNote: "Diverse across Africa (and warm regions worldwide); mound-builders are prominent in African savannas.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "tsetse-fly", commonName: "Tsetse Fly", continentSlugs: ["africa"], habitatTags: ["savanna", "forest", "wetland"], distributionNote: "Found in parts of sub-Saharan Africa, in savanna woodland and riverine forest.", confidence: "broad-range", isNativeRange: true }),

  // === Regional Fauna: Asia Expansion (2026-06-27) ===
  // New Asian profiles + previously-unrecorded existing Asian animals.
  // Cautious range framing; native vs introduced vs domestic distinguished; no completeness claim.
  fc({ animalSlug: "snow-leopard", commonName: "Snow Leopard", continentSlugs: ["asia"], habitatTags: ["mountain"], distributionNote: "High mountains of Central and South Asia (Himalayas, Tibetan Plateau, Altai).", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "asian-black-bear", commonName: "Asian Black Bear", continentSlugs: ["asia"], habitatTags: ["forest", "mountain"], distributionNote: "Forests across parts of South, East, and Southeast Asia and the Himalayas.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "musk-deer", commonName: "Musk Deer", continentSlugs: ["asia"], habitatTags: ["forest", "mountain"], distributionNote: "Forested and alpine habitats across parts of Asia (Himalayas, Siberia, China).", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "sarus-crane", commonName: "Sarus Crane", continentSlugs: ["asia"], habitatTags: ["wetland", "grassland"], distributionNote: "Wetlands and farmland in parts of the Indian subcontinent and Southeast Asia (also northern Australia).", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "mandarin-duck", commonName: "Mandarin Duck", continentSlugs: ["asia"], habitatTags: ["wetland", "freshwater", "forest"], distributionNote: "Native to East Asia (China, Japan, Korea, Russian Far East); introduced populations occur in Europe.", confidence: "verified", isNativeRange: true, isIntroducedRange: true }),
  fc({ animalSlug: "king-cobra", commonName: "King Cobra", continentSlugs: ["asia"], habitatTags: ["forest"], distributionNote: "Forests across parts of South and Southeast Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "reticulated-python", commonName: "Reticulated Python", continentSlugs: ["asia"], habitatTags: ["forest", "grassland", "freshwater"], distributionNote: "Forests, grasslands, and rivers across parts of South and Southeast Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "asian-giant-salamander", commonName: "Asian Giant Salamander", continentSlugs: ["asia"], habitatTags: ["freshwater"], distributionNote: "Cool, clear streams and rivers in parts of East Asia (Japan and China).", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "arowana", commonName: "Asian Arowana", continentSlugs: ["asia"], habitatTags: ["freshwater", "wetland"], distributionNote: "Slow rivers, swamps, and flooded forests of parts of Southeast Asia.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "mahseer", commonName: "Mahseer", continentSlugs: ["asia"], habitatTags: ["freshwater"], distributionNote: "Fast-flowing rivers and streams across parts of South and Southeast Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "mekong-giant-catfish", commonName: "Mekong Giant Catfish", continentSlugs: ["asia"], habitatTags: ["freshwater"], distributionNote: "Native to the Mekong River basin in Southeast Asia.", confidence: "verified", isNativeRange: true, notes: "Critically Endangered; restricted to the Mekong basin." }),
  fc({ animalSlug: "asian-giant-hornet", commonName: "Asian Giant Hornet", continentSlugs: ["asia"], habitatTags: ["forest", "grassland"], distributionNote: "Native to parts of East and South Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "silkworm", commonName: "Silkworm", continentSlugs: ["asia"], habitatTags: ["urban-adapted"], distributionNote: "A fully domesticated insect (Bombyx mori), reared for silk and not found in the wild; sericulture began in ancient China.", confidence: "verified", notes: "Domesticated; no wild range." }),
  fc({ animalSlug: "clouded-leopard", commonName: "Clouded Leopard", continentSlugs: ["asia"], habitatTags: ["forest"], distributionNote: "Forests of parts of South and Southeast Asia and the Himalayan foothills.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "sun-bear", commonName: "Sun Bear", continentSlugs: ["asia"], habitatTags: ["forest"], distributionNote: "Tropical forests of parts of Southeast Asia.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "takin", commonName: "Takin", continentSlugs: ["asia"], habitatTags: ["mountain", "forest"], distributionNote: "Mountain forests of the eastern Himalayas and parts of China and Myanmar.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "proboscis-monkey", commonName: "Proboscis Monkey", continentSlugs: ["asia"], habitatTags: ["forest", "wetland"], distributionNote: "Endemic to the island of Borneo, in mangrove and riverine forest.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "orangutan", commonName: "Orangutan", continentSlugs: ["asia"], habitatTags: ["forest"], distributionNote: "Rainforests of the islands of Borneo and Sumatra.", confidence: "verified", isNativeRange: true, notes: "Restricted to Borneo and Sumatra." }),
  fc({ animalSlug: "gibbon", commonName: "Gibbon", continentSlugs: ["asia"], habitatTags: ["forest"], distributionNote: "Tropical forests across parts of South and Southeast Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "hornbill", commonName: "Hornbill", continentSlugs: ["asia"], habitatTags: ["forest"], distributionNote: "Many hornbills live in forests of parts of Asia (others occur in sub-Saharan Africa).", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "gharial", commonName: "Gharial", continentSlugs: ["asia"], habitatTags: ["freshwater"], distributionNote: "Rivers of the northern Indian subcontinent (e.g. the Ganges basin).", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "saiga", commonName: "Saiga", continentSlugs: ["asia"], habitatTags: ["grassland", "desert"], distributionNote: "Steppe and semi-desert of Central Asia.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "macaque", commonName: "Macaque", continentSlugs: ["asia"], habitatTags: ["forest", "grassland", "urban-adapted"], distributionNote: "Widespread across parts of Asia (with one species in North Africa).", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "slow-loris", commonName: "Slow Loris", continentSlugs: ["asia"], habitatTags: ["forest"], distributionNote: "Forests of parts of South and Southeast Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "binturong", commonName: "Binturong", continentSlugs: ["asia"], habitatTags: ["forest"], distributionNote: "Forests of parts of South and Southeast Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "colugo", commonName: "Colugo", continentSlugs: ["asia"], habitatTags: ["forest"], distributionNote: "Rainforests of parts of Southeast Asia.", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "tarsier", commonName: "Tarsier", continentSlugs: ["asia"], habitatTags: ["forest", "island"], distributionNote: "Islands of Southeast Asia (e.g. the Philippines, Borneo, and Sulawesi).", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "douc", commonName: "Douc", continentSlugs: ["asia"], habitatTags: ["forest"], distributionNote: "Forests of parts of Indochina (Vietnam, Laos, and Cambodia).", confidence: "verified", isNativeRange: true }),
  fc({ animalSlug: "langur", commonName: "Langur", continentSlugs: ["asia"], habitatTags: ["forest"], distributionNote: "Forests across parts of South and Southeast Asia.", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "rhinoceros", commonName: "Rhinoceros", continentSlugs: ["asia"], habitatTags: ["grassland", "forest", "wetland"], distributionNote: "Asian rhinos (Indian, Javan, Sumatran) live in parts of South and Southeast Asia; African species occur on another continent.", confidence: "broad-range", isNativeRange: true, notes: "Distinct species in Asia and Africa." }),
  fc({ animalSlug: "camel", commonName: "Camel", continentSlugs: ["asia"], habitatTags: ["desert", "grassland"], distributionNote: "The wild Bactrian camel is native to Central Asia; camels are also widely domesticated across Asia.", confidence: "broad-range", isNativeRange: true, isDomesticContext: true }),
  fc({ animalSlug: "catfish", commonName: "Catfish", continentSlugs: ["asia"], habitatTags: ["freshwater"], distributionNote: "Catfish are diverse in the rivers and lakes of parts of Asia (and worldwide).", confidence: "broad-range", isNativeRange: true }),
  fc({ animalSlug: "carp", commonName: "Carp", continentSlugs: ["asia"], habitatTags: ["freshwater"], distributionNote: "Native to parts of Asia and Europe; widely farmed and introduced around the world.", confidence: "broad-range", isNativeRange: true, isIntroducedRange: true }),
  fc({ animalSlug: "horseshoe-crab", commonName: "Horseshoe Crab", continentSlugs: ["asia"], habitatTags: ["coastal"], distributionNote: "Asian horseshoe crabs (Tachypleus, Carcinoscorpius) live on coasts of parts of Asia (other species on American coasts).", confidence: "broad-range", isNativeRange: true }),
];

export const FAUNA_RECORD_COUNT = FAUNA_RECORDS.length;
