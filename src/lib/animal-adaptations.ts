/**
 * Animal senses & adaptations data layer.
 *
 * EDUCATIONAL examples only. A small, representative, deliberately CAUTIOUS set
 * of animal adaptations — never a ranking, never "best/smartest", never a
 * scored database. Each entry is factual prose with a mandatory caveat, avoids
 * overgeneralising one species to a whole group, and flags where mechanisms are
 * still debated. Animal senses differ from human senses and humans cannot
 * directly experience many of them. This is biology education, not hunting,
 * tracking, pest-control, pet-training, handling, survival, or veterinary advice.
 */

export type AdaptationType =
  | "vision"
  | "smell"
  | "hearing"
  | "echolocation"
  | "electroreception"
  | "magnetoreception"
  | "camouflage"
  | "mimicry"
  | "bioluminescence"
  | "migration"
  | "navigation"
  | "hibernation"
  | "torpor"
  | "thermoregulation"
  | "defense";

export type DisplayGroup =
  | "mammals"
  | "birds"
  | "reptiles"
  | "amphibians"
  | "fish"
  | "invertebrates"
  | "marine"
  | "insects"
  | "polar";

export const TYPE_LABEL: Record<AdaptationType, string> = {
  vision: "Vision", smell: "Smell & chemical senses", hearing: "Hearing",
  echolocation: "Echolocation", electroreception: "Electroreception",
  magnetoreception: "Magnetoreception", camouflage: "Camouflage", mimicry: "Mimicry",
  bioluminescence: "Bioluminescence", migration: "Migration", navigation: "Navigation",
  hibernation: "Hibernation", torpor: "Torpor", thermoregulation: "Thermoregulation",
  defense: "Defense",
};

export interface AdaptationExample {
  id: string;
  /** Set only when a real /animals/[slug] profile exists. */
  animalSlug?: string;
  commonName: string;
  type: AdaptationType;
  displayGroup: DisplayGroup;
  /** Factual, cautious description — no rankings or "best" claims. */
  summary: string;
  /** Mandatory caveat keeping the example honest. */
  caveat: string;
  relatedGuidePath: string;
}

const SENSES = "/animal-senses-and-adaptations/animal-senses";
const VISION = "/animal-senses-and-adaptations/animal-vision";
const SMELL = "/animal-senses-and-adaptations/smell-and-chemical-senses";
const HEARING = "/animal-senses-and-adaptations/hearing-and-echolocation";
const CAMO = "/animal-senses-and-adaptations/camouflage-and-mimicry";
const BIO = "/animal-senses-and-adaptations/bioluminescence";
const MIGRATION = "/animal-senses-and-adaptations/migration-and-navigation";
const HIBERNATION = "/animal-senses-and-adaptations/hibernation-and-torpor";

export const ADAPTATION_EXAMPLES: AdaptationExample[] = [
  // --- Hearing & echolocation ---
  { id: "bat", animalSlug: "bat", commonName: "Bats", type: "echolocation", displayGroup: "mammals", summary: "Many bats echolocate, emitting calls and interpreting the returning echoes to navigate and find prey in the dark.", caveat: "Not all bats echolocate — some large fruit bats rely mainly on vision and smell.", relatedGuidePath: HEARING },
  { id: "dolphin", animalSlug: "dolphin", commonName: "Dolphins", type: "echolocation", displayGroup: "marine", summary: "Toothed whales and dolphins use echolocation (biosonar), producing clicks whose echoes reveal objects underwater.", caveat: "Baleen whales do not echolocate in the same way.", relatedGuidePath: HEARING },
  { id: "owl", animalSlug: "owl", commonName: "Owls", type: "hearing", displayGroup: "birds", summary: "Some owls have asymmetric ear openings that help them pinpoint the source of a sound, aiding hunting in low light.", caveat: "Hearing and ear structure vary among owl species.", relatedGuidePath: HEARING },
  { id: "elephant", animalSlug: "elephant", commonName: "Elephants", type: "hearing", displayGroup: "mammals", summary: "Elephants communicate partly with very low-frequency sound (infrasound) that can travel long distances.", caveat: "Low-frequency calls are one part of a broader communication system.", relatedGuidePath: HEARING },
  // --- Vision ---
  { id: "eagle", animalSlug: "eagle", commonName: "Eagles & other raptors", type: "vision", displayGroup: "birds", summary: "Many birds of prey have sharp, detailed vision well suited to spotting prey at a distance.", caveat: "Whether vision is 'sharper than human' depends on what is measured, and it differs by species.", relatedGuidePath: VISION },
  { id: "mantis-shrimp", animalSlug: "mantis-shrimp", commonName: "Mantis shrimp", type: "vision", displayGroup: "invertebrates", summary: "Mantis shrimp have unusually complex eyes with many photoreceptor types and can detect light humans cannot.", caveat: "More receptor types does not simply mean 'better' colour vision; how they use them is still studied.", relatedGuidePath: VISION },
  { id: "chameleon", animalSlug: "chameleon", commonName: "Chameleons", type: "vision", displayGroup: "reptiles", summary: "Chameleons can move their two eyes independently to scan widely before focusing on prey.", caveat: "Their colour change is mainly signalling and temperature control, not only camouflage.", relatedGuidePath: VISION },
  { id: "cats-nocturnal", commonName: "Cats & other nocturnal mammals", type: "vision", displayGroup: "mammals", summary: "Many nocturnal animals have a reflective layer behind the retina (tapetum lucidum) that improves vision in low light.", caveat: "Better low-light vision often comes with trade-offs in colour or detail.", relatedGuidePath: VISION },
  // --- Smell & chemical senses ---
  { id: "dogs-olfaction", commonName: "Dogs", type: "smell", displayGroup: "mammals", summary: "Dogs have a highly developed sense of smell used to detect and distinguish many scents.", caveat: "Popular 'thousands of times better than humans' figures vary widely and are uncertain.", relatedGuidePath: SMELL },
  { id: "salmon", animalSlug: "salmon", commonName: "Salmon", type: "smell", displayGroup: "fish", summary: "Salmon are thought to use smell to help return to the river where they hatched in order to spawn.", caveat: "Scent is one of several cues, and the full homing mechanism is still researched.", relatedGuidePath: SMELL },
  { id: "shark", animalSlug: "shark", commonName: "Sharks", type: "smell", displayGroup: "fish", summary: "Sharks detect chemicals dissolved in water and can follow scent gradients toward a source.", caveat: "Claims that sharks 'smell a drop of blood from miles away' are exaggerations.", relatedGuidePath: SMELL },
  { id: "snake-jacobson", animalSlug: "snake", commonName: "Snakes", type: "smell", displayGroup: "reptiles", summary: "Snakes flick the tongue to carry scent particles to the vomeronasal (Jacobson's) organ in the roof of the mouth.", caveat: "Vomeronasal sensing occurs in many other animals too, in varied forms.", relatedGuidePath: SMELL },
  // --- Electroreception ---
  { id: "platypus", animalSlug: "platypus", commonName: "Platypus", type: "electroreception", displayGroup: "mammals", summary: "The platypus detects weak electric fields from prey using receptors in its bill (electroreception).", caveat: "Electroreception also occurs, differently, in some fish and sharks.", relatedGuidePath: SENSES },
  // --- Camouflage & mimicry ---
  { id: "octopus", animalSlug: "octopus", commonName: "Octopuses", type: "camouflage", displayGroup: "invertebrates", summary: "Octopuses change skin colour and texture rapidly to blend into surroundings and to signal.", caveat: "Remarkably, many appear colourblind yet still match coloured backgrounds — how is still studied.", relatedGuidePath: CAMO },
  { id: "cuttlefish", animalSlug: "cuttlefish", commonName: "Cuttlefish", type: "camouflage", displayGroup: "invertebrates", summary: "Cuttlefish produce fast, complex skin patterns used for camouflage and communication.", caveat: "Their displays serve several functions, not camouflage alone.", relatedGuidePath: CAMO },
  { id: "stick-insect", animalSlug: "stick-insect", commonName: "Stick & leaf insects", type: "camouflage", displayGroup: "insects", summary: "Stick and leaf insects closely resemble twigs and leaves (masquerade), helping them avoid detection.", caveat: "Resemblance varies by species and is one of several defences.", relatedGuidePath: CAMO },
  { id: "monarch-aposematism", animalSlug: "monarch-butterfly", commonName: "Monarch butterfly", type: "defense", displayGroup: "insects", summary: "The monarch's bold colours act as a warning (aposematism) that it can be distasteful to predators.", caveat: "Distastefulness comes from larval food plants and varies between individuals.", relatedGuidePath: CAMO },
  { id: "coral-snake-mimicry", animalSlug: "coral-snake", commonName: "Coral snakes & their mimics", type: "mimicry", displayGroup: "reptiles", summary: "Some harmless snakes resemble venomous coral snakes — a source-backed example of mimicry.", caveat: "Colour patterns are NOT a reliable rule for safely identifying or handling snakes.", relatedGuidePath: CAMO },
  // --- Bioluminescence ---
  { id: "anglerfish", animalSlug: "anglerfish", commonName: "Deep-sea anglerfish", type: "bioluminescence", displayGroup: "marine", summary: "Some deep-sea anglerfish use a glowing lure to attract prey; the light is produced by symbiotic bacteria.", caveat: "Only some anglerfish have this, and the light comes from bacteria, not the fish's own tissue.", relatedGuidePath: BIO },
  { id: "lanternfish", animalSlug: "lanternfish", commonName: "Lanternfish", type: "bioluminescence", displayGroup: "marine", summary: "Lanternfish carry light-producing organs (photophores), likely used for camouflage and signalling.", caveat: "Exact functions vary and are still studied.", relatedGuidePath: BIO },
  { id: "squid", animalSlug: "squid", commonName: "Squid", type: "bioluminescence", displayGroup: "marine", summary: "Many squid produce light, including for counter-illumination that hides their silhouette from below.", caveat: "Bioluminescence varies widely across squid; not all species produce light.", relatedGuidePath: BIO },
  { id: "jellyfish", animalSlug: "jellyfish", commonName: "Jellyfish & comb jellies", type: "bioluminescence", displayGroup: "marine", summary: "Many jellyfish and comb jellies produce light, often as a startle or distraction defence.", caveat: "Some apparent glow is fluorescence (re-emitted light), which is not the same as bioluminescence.", relatedGuidePath: BIO },
  // --- Migration & navigation ---
  { id: "sea-turtle", animalSlug: "sea-turtle", commonName: "Sea turtles", type: "magnetoreception", displayGroup: "marine", summary: "Sea turtles are thought to use Earth's magnetic field, among other cues, to navigate across oceans and return to nesting beaches.", caveat: "Exactly how animals sense the magnetic field is not yet fully understood.", relatedGuidePath: MIGRATION },
  { id: "monarch-migration", animalSlug: "monarch-butterfly", commonName: "Monarch migration", type: "migration", displayGroup: "insects", summary: "Monarch butterflies make a long, multi-generational migration, using cues that include the position of the sun.", caveat: "No single butterfly completes the whole round trip, and navigation is still researched.", relatedGuidePath: MIGRATION },
  { id: "albatross", animalSlug: "albatross", commonName: "Albatrosses", type: "navigation", displayGroup: "birds", summary: "Albatrosses range across vast stretches of open ocean, navigating with several combined cues.", caveat: "How seabirds navigate over featureless ocean is an active research area.", relatedGuidePath: MIGRATION },
  { id: "pigeon", animalSlug: "pigeon", commonName: "Homing pigeons", type: "navigation", displayGroup: "birds", summary: "Homing pigeons can return over long distances using cues that may include the sun and the magnetic field.", caveat: "A magnetic sense is real in some animals, but its mechanism remains debated.", relatedGuidePath: MIGRATION },
  { id: "whale-migration", animalSlug: "whale", commonName: "Migratory whales", type: "migration", displayGroup: "marine", summary: "Some whales migrate thousands of kilometres between feeding and breeding areas each year.", caveat: "Routes and the cues used vary by species and population.", relatedGuidePath: MIGRATION },
  // --- Hibernation & torpor ---
  { id: "hummingbird-torpor", animalSlug: "hummingbird", commonName: "Hummingbirds", type: "torpor", displayGroup: "birds", summary: "Hummingbirds can enter daily torpor, lowering metabolism and body temperature overnight to save energy.", caveat: "Torpor is a short-term state, distinct from seasonal hibernation.", relatedGuidePath: HIBERNATION },
  { id: "frog-winter", animalSlug: "frog", commonName: "Overwintering frogs", type: "hibernation", displayGroup: "amphibians", summary: "Some frogs survive winter in a dormant state, and a few species can tolerate partial freezing.", caveat: "Freeze tolerance occurs in certain species, not all frogs.", relatedGuidePath: HIBERNATION },
  { id: "polar-bear-denning", animalSlug: "polar-bear", commonName: "Polar bears (winter denning)", type: "hibernation", displayGroup: "polar", summary: "Pregnant polar bears den through winter in a dormancy that differs from the deep hibernation of some smaller mammals.", caveat: "Whether bear winter dormancy counts as 'true hibernation' is debated by biologists.", relatedGuidePath: HIBERNATION },
];

export function examplesByType(type: AdaptationType): AdaptationExample[] {
  return ADAPTATION_EXAMPLES.filter((e) => e.type === type);
}

export function examplesByGuide(path: string): AdaptationExample[] {
  return ADAPTATION_EXAMPLES.filter((e) => e.relatedGuidePath === path);
}

export function duplicateAdaptationIds(): string[] {
  const seen = new Set<string>();
  const dups: string[] = [];
  for (const e of ADAPTATION_EXAMPLES) {
    if (seen.has(e.id)) dups.push(e.id);
    seen.add(e.id);
  }
  return dups;
}

export const ADAPTATION_EXAMPLE_COUNT = ADAPTATION_EXAMPLES.length;
