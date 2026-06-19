import type { SourceLink } from "@/lib/educational/types";
import type { AnimalTaxonomyGroup } from "./types";
import {
  TAXONOMY_CORE_SOURCES,
  SRC_WORMS,
  SRC_ADW_HOME,
  SRC_IUCN_HOME,
  SRC_ITIS,
  SRC_CATALOGUE_OF_LIFE,
} from "./sources";

type RawGroup = Omit<AnimalTaxonomyGroup, "sourceUrls"> & {
  sources: SourceLink[];
};

function g(r: RawGroup): AnimalTaxonomyGroup {
  const { sources, ...rest } = r;
  return { ...rest, sourceUrls: sources.map((s) => s.url) };
}

const CORE = TAXONOMY_CORE_SOURCES;
const MARINE = [SRC_WORMS, SRC_CATALOGUE_OF_LIFE, SRC_ADW_HOME];

export const ANIMAL_TAXONOMY_GROUPS: readonly AnimalTaxonomyGroup[] = [
  // ===========================================================================
  // TOP-LEVEL
  // ===========================================================================
  g({ slug: "vertebrates", label: "Vertebrates", rankLabel: "informal-group", description: "Animals with a backbone — mammals, birds, reptiles, amphibians, and fish. FaunaHub's strongest area of coverage.", coverageStatus: "strong", existingAnimalSlugs: [], priorityMissingExamples: [], futureBatchPriority: "medium", sources: CORE }),
  g({ slug: "invertebrates", label: "Invertebrates", rankLabel: "informal-group", description: "Animals without a backbone — by far the largest share of animal diversity, from insects to corals. FaunaHub covers representative examples and is expanding here.", coverageStatus: "partial", existingAnimalSlugs: [], priorityMissingExamples: [], futureBatchPriority: "high", sources: CORE, notes: "Counts vary widely by source; invertebrates make up the great majority of described animal species." }),

  // ===========================================================================
  // VERTEBRATE CLASSES
  // ===========================================================================
  g({ slug: "mammals", label: "Mammals", parentSlug: "vertebrates", rankLabel: "class", description: "Warm-blooded vertebrates that feed young with milk — from big cats and primates to whales and bats.", coverageStatus: "strong", existingAnimalSlugs: ["lion","tiger","leopard","jaguar","cheetah","wolf","fox","bear","panda","red-panda","elephant","giraffe","zebra","gorilla","chimpanzee","lemur","kangaroo","koala","wombat","platypus","sloth","armadillo","porcupine","meerkat","tapir","hyena","deer","moose","lynx","badger","beaver","hedgehog","bat","raccoon","otter","seal","whale","dolphin","horse","cow","goat","sheep","pig","rabbit","guinea-pig","hamster","hippopotamus","rhinoceros","orangutan","bison","camel","squirrel","warthog","wildebeest","capybara","gibbon","pangolin","pronghorn","okapi","wild-boar","elk","sun-bear","aardvark","echidna","wolverine","bobcat","coyote","mongoose","skunk","weasel","orca","common-dolphin","spinner-dolphin","pilot-whale","rissos-dolphin","commersons-dolphin"], priorityMissingExamples: ["walrus","mole","pine-marten","stoat","civet","genet"], futureBatchPriority: "medium", sources: [...CORE, SRC_IUCN_HOME] }),
  g({ slug: "birds", label: "Birds", parentSlug: "vertebrates", rankLabel: "class", description: "Feathered, egg-laying vertebrates — raptors, waterbirds, songbirds, and more.", coverageStatus: "strong", existingAnimalSlugs: ["eagle","owl","penguin","parrot","falcon","hawk","vulture","duck","goose","swan","crow","raven","pigeon","sparrow","robin","flamingo","peacock","toucan","hummingbird","woodpecker","pelican","stork","ostrich","emu","cassowary","kiwi","magpie","cardinal","heron","kingfisher","kookaburra","hornbill","bee-eater"], priorityMissingExamples: ["albatross","seagull","swift","sunbird","roadrunner","quetzal"], futureBatchPriority: "medium", sources: CORE }),
  g({ slug: "reptiles", label: "Reptiles", parentSlug: "vertebrates", rankLabel: "class", description: "Scaled vertebrates including crocodilians, lizards, snakes, and turtles.", coverageStatus: "strong", existingAnimalSlugs: ["crocodile","alligator","caiman","snake","anaconda","turtle","sea-turtle","chameleon","iguana","gecko","komodo-dragon","monitor-lizard","tortoise","cobra","python","rattlesnake","gila-monster","tuatara","boa","gharial"], priorityMissingExamples: ["skink","viper","mamba","tegu","anole","chuckwalla"], futureBatchPriority: "medium", sources: CORE, notes: "“Reptiles” as traditionally used is paraphyletic; modern classifications group birds with reptiles." }),
  g({ slug: "amphibians", label: "Amphibians", parentSlug: "vertebrates", rankLabel: "class", description: "Frogs, toads, salamanders, newts, and caecilians — many with life stages tied to water.", coverageStatus: "partial", existingAnimalSlugs: ["frog","toad","salamander","newt","tree-frog","poison-dart-frog","fire-salamander","axolotl","bullfrog"], priorityMissingExamples: ["caecilian","hellbender","glass-frog","mudpuppy","olm","surinam-toad"], futureBatchPriority: "high", sources: CORE }),
  g({ slug: "fish", label: "Fish", parentSlug: "vertebrates", rankLabel: "informal-group", description: "Aquatic vertebrates spanning sharks and rays, bony fish, and more — an informal grouping rather than a single lineage.", coverageStatus: "strong", existingAnimalSlugs: ["shark","ray","eel","tuna","salmon","seahorse","clownfish","pufferfish","betta-fish","goldfish","guppy","angelfish","tetra","koi","carp","catfish"], priorityMissingExamples: ["cod","herring","swordfish","marlin","piranha","barracuda","anglerfish","lionfish","sardine","mackerel"], futureBatchPriority: "medium", sources: [...CORE, SRC_WORMS], notes: "“Fish” is not a single evolutionary group; it spans several lineages." }),

  // ===========================================================================
  // INVERTEBRATE GROUPS
  // ===========================================================================
  g({ slug: "insects", label: "Insects", parentSlug: "invertebrates", rankLabel: "class", description: "Six-legged arthropods — the most diverse group of animals by described species.", coverageStatus: "partial", existingAnimalSlugs: ["bee","butterfly","ant","dragonfly","ladybug","praying-mantis"], priorityMissingExamples: ["beetle","grasshopper","cricket","moth","wasp","termite","firefly","cicada","cockroach","aphid"], futureBatchPriority: "high", sources: CORE, notes: "Insects are widely regarded as the most species-rich animal group, though exact totals vary by source." }),
  g({ slug: "arachnids", label: "Arachnids", parentSlug: "invertebrates", rankLabel: "class", description: "Eight-legged arthropods — spiders, scorpions, ticks, and mites.", coverageStatus: "thin", existingAnimalSlugs: ["spider"], priorityMissingExamples: ["scorpion","tarantula","tick","mite","harvestman"], futureBatchPriority: "high", sources: CORE }),
  g({ slug: "crustaceans", label: "Crustaceans", parentSlug: "invertebrates", rankLabel: "informal-group", description: "Mostly aquatic arthropods — crabs, lobsters, shrimp, krill, and more.", coverageStatus: "thin", existingAnimalSlugs: ["crab","lobster"], priorityMissingExamples: ["shrimp","crayfish","barnacle","krill","giant-isopod"], futureBatchPriority: "high", sources: MARINE }),
  g({ slug: "mollusks", label: "Mollusks", parentSlug: "invertebrates", rankLabel: "phylum", description: "A huge phylum including snails, clams, octopuses, and squid.", coverageStatus: "thin", existingAnimalSlugs: ["octopus","squid"], priorityMissingExamples: ["snail","slug","clam","oyster","mussel","scallop","nautilus","cuttlefish","nudibranch","cone-snail"], futureBatchPriority: "high", sources: MARINE }),
  g({ slug: "echinoderms", label: "Echinoderms", parentSlug: "invertebrates", rankLabel: "phylum", description: "Spiny-skinned marine animals — sea stars, urchins, sea cucumbers, and relatives.", coverageStatus: "thin", existingAnimalSlugs: ["starfish"], priorityMissingExamples: ["sea-urchin","sea-cucumber","sand-dollar","brittle-star","crinoid"], futureBatchPriority: "medium", sources: MARINE }),
  g({ slug: "cnidarians", label: "Cnidarians", parentSlug: "invertebrates", rankLabel: "phylum", description: "Stinging-celled animals — jellyfish, corals, sea anemones, and hydrozoans.", coverageStatus: "thin", existingAnimalSlugs: ["jellyfish"], priorityMissingExamples: ["coral","sea-anemone","hydra","portuguese-man-o-war","sea-fan"], futureBatchPriority: "high", sources: MARINE }),
  g({ slug: "annelids", label: "Annelids", parentSlug: "invertebrates", rankLabel: "phylum", description: "Segmented worms — earthworms, leeches, and marine bristle worms.", coverageStatus: "planned", existingAnimalSlugs: [], priorityMissingExamples: ["earthworm","leech","ragworm","tube-worm"], futureBatchPriority: "medium", sources: CORE }),
  g({ slug: "flatworms", label: "Flatworms", parentSlug: "invertebrates", rankLabel: "phylum", description: "Soft, flattened worms, including free-living planarians and parasitic groups.", coverageStatus: "planned", existingAnimalSlugs: [], priorityMissingExamples: ["planarian","tapeworm","fluke"], futureBatchPriority: "low", sources: CORE }),
  g({ slug: "nematodes", label: "Nematodes", parentSlug: "invertebrates", rankLabel: "phylum", description: "Roundworms — an enormously abundant group found in nearly every habitat.", coverageStatus: "planned", existingAnimalSlugs: [], priorityMissingExamples: ["roundworm","hookworm"], futureBatchPriority: "low", sources: CORE }),
  g({ slug: "sponges", label: "Sponges", parentSlug: "invertebrates", rankLabel: "phylum", description: "Simple, filter-feeding animals (Porifera) anchored to the seafloor.", coverageStatus: "planned", existingAnimalSlugs: [], priorityMissingExamples: ["sea-sponge","glass-sponge"], futureBatchPriority: "low", sources: MARINE }),
  g({ slug: "other-invertebrates", label: "Other Invertebrates", parentSlug: "invertebrates", rankLabel: "informal-group", description: "Many further invertebrate groups exist, from tardigrades to comb jellies and velvet worms.", coverageStatus: "planned", existingAnimalSlugs: [], priorityMissingExamples: ["tardigrade","comb-jelly","velvet-worm","horseshoe-crab","sea-squirt"], futureBatchPriority: "medium", sources: CORE }),

  // ===========================================================================
  // MARINE CROSS-CUTTING (topic groups)
  // ===========================================================================
  g({ slug: "reef-animals", label: "Reef Animals", rankLabel: "topic-group", description: "Animals associated with coral reefs — reef fish, corals, and invertebrates.", coverageStatus: "partial", existingAnimalSlugs: ["clownfish","pufferfish","seahorse","octopus"], priorityMissingExamples: ["coral","sea-anemone","parrotfish","moray-eel","reef-shark"], futureBatchPriority: "medium", sources: MARINE }),
  g({ slug: "deep-sea-animals", label: "Deep-Sea Animals", rankLabel: "topic-group", description: "Animals of the ocean's dark, high-pressure depths. Described on FaunaHub's ocean depth pages; dedicated profiles are planned.", coverageStatus: "planned", existingAnimalSlugs: [], priorityMissingExamples: ["anglerfish","giant-squid","vampire-squid","dumbo-octopus","gulper-eel","barreleye"], futureBatchPriority: "high", sources: MARINE }),
  g({ slug: "open-ocean-animals", label: "Open-Ocean Animals", rankLabel: "topic-group", description: "Animals of the open water column — fast pelagic predators and ocean wanderers.", coverageStatus: "partial", existingAnimalSlugs: ["shark","tuna","whale","dolphin","sea-turtle","ray","orca","common-dolphin","pilot-whale"], priorityMissingExamples: ["marlin","swordfish","flying-fish","ocean-sunfish"], futureBatchPriority: "low", sources: MARINE }),
  g({ slug: "seafloor-animals", label: "Seafloor Animals", rankLabel: "topic-group", description: "Bottom-dwelling marine animals on shallow and deep seabeds.", coverageStatus: "partial", existingAnimalSlugs: ["crab","lobster","starfish","octopus"], priorityMissingExamples: ["sea-cucumber","sea-urchin","flatfish","hermit-crab"], futureBatchPriority: "medium", sources: MARINE }),
  g({ slug: "planktonic-animals", label: "Planktonic Animals", rankLabel: "topic-group", description: "Drifting animals of the water column, from tiny zooplankton to drifting jellyfish.", coverageStatus: "planned", existingAnimalSlugs: ["jellyfish"], priorityMissingExamples: ["krill","copepod","salp","comb-jelly"], futureBatchPriority: "low", sources: MARINE }),

  // ===========================================================================
  // HUMAN-CONTEXT (topic groups)
  // ===========================================================================
  g({ slug: "domestic-animals", label: "Domestic Animals", rankLabel: "topic-group", description: "Animals domesticated by people, kept as livestock or companions. Clearly distinguished from wild fauna.", coverageStatus: "partial", existingAnimalSlugs: ["horse","cow","goat","sheep","pig","rabbit","guinea-pig","hamster"], priorityMissingExamples: ["donkey","chicken","turkey","alpaca","ferret"], futureBatchPriority: "medium", sources: [SRC_ITIS, SRC_ADW_HOME] }),
  g({ slug: "farm-animals", label: "Farm Animals", parentSlug: "domestic-animals", rankLabel: "topic-group", description: "Livestock raised for food, fibre, or work.", coverageStatus: "partial", existingAnimalSlugs: ["cow","goat","sheep","pig","horse"], priorityMissingExamples: ["chicken","turkey","duck-domestic","alpaca","water-buffalo"], futureBatchPriority: "medium", sources: [SRC_ITIS, SRC_ADW_HOME] }),
  g({ slug: "companion-animals", label: "Companion Animals", parentSlug: "domestic-animals", rankLabel: "topic-group", description: "Animals commonly kept as pets. FaunaHub also has dedicated dog and cat care clusters.", coverageStatus: "partial", existingAnimalSlugs: ["rabbit","guinea-pig","hamster"], priorityMissingExamples: ["ferret","gerbil","chinchilla","budgerigar"], futureBatchPriority: "low", sources: [SRC_ADW_HOME] }),
  g({ slug: "urban-wildlife", label: "Urban Wildlife", rankLabel: "topic-group", description: "Wild animals that thrive around people and cities.", coverageStatus: "partial", existingAnimalSlugs: ["raccoon","pigeon","fox","crow","sparrow","squirrel","coyote","skunk"], priorityMissingExamples: ["rat","seagull","opossum","starling"], futureBatchPriority: "low", sources: CORE }),
  g({ slug: "invasive-species", label: "Invasive & Introduced Species", rankLabel: "topic-group", description: "Species established outside their native range. FaunaHub only labels introduced status where it is source-backed, never by assumption.", coverageStatus: "planned", existingAnimalSlugs: [], priorityMissingExamples: ["cane-toad","lionfish","european-starling","zebra-mussel"], futureBatchPriority: "low", sources: [SRC_IUCN_HOME, SRC_CATALOGUE_OF_LIFE], notes: "Introduced/invasive status varies by region and must be source-backed per species." }),
];

export function getGroup(slug: string): AnimalTaxonomyGroup | undefined {
  return ANIMAL_TAXONOMY_GROUPS.find((x) => x.slug === slug);
}

export function getChildren(parentSlug: string): AnimalTaxonomyGroup[] {
  return ANIMAL_TAXONOMY_GROUPS.filter((x) => x.parentSlug === parentSlug);
}
