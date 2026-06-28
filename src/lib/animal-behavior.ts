/**
 * Animal intelligence & behavior data layer (typed registry).
 *
 * The scalable foundation for FaunaHub's behavior/intelligence content system.
 * This file holds the TYPE SYSTEM, the pillar-guide registry, and the
 * published species-profile index. Long-form prose lives in the generated
 * content modules (behavior-pillar-content.ts, behavior-species-content.ts)
 * that the routes consume. The future 1000-page roadmap lives, non-public, in
 * animal-behavior-backlog.ts — those candidates are NOT routed and NOT in the
 * sitemap.
 *
 * EDUCATIONAL ethology / comparative-cognition only. No IQ scores, no rankings,
 * no "smartest animal" framing, no anthropomorphic overclaims, and no
 * pet-training, handling, hunting, pest-control, survival, or veterinary advice.
 */

export const BEHAVIOR_BASE = "/animal-intelligence-and-behavior";

export type BehaviorType =
  | "intelligence"
  | "learning"
  | "memory"
  | "problem-solving"
  | "tool-use"
  | "communication"
  | "vocalization"
  | "social-behavior"
  | "cooperation"
  | "parenting"
  | "play"
  | "mating-display"
  | "territoriality"
  | "foraging"
  | "hunting"
  | "migration"
  | "domesticated-behavior"
  | "wild-vs-captive"
  | "emotion-caution"
  | "self-recognition"
  | "culture-caution";

export type EvidenceContext =
  | "field-observation"
  | "controlled-study"
  | "captive-study"
  | "wild-study"
  | "mixed-evidence"
  | "debated"
  | "broad-group";

export type DisplayGroup =
  | "mammals"
  | "birds"
  | "reptiles"
  | "amphibians"
  | "fish"
  | "invertebrates"
  | "marine"
  | "insects"
  | "domesticated"
  | "primates"
  | "cetaceans"
  | "cephalopods";

export const BEHAVIOR_TYPE_LABEL: Record<BehaviorType, string> = {
  intelligence: "Intelligence", learning: "Learning", memory: "Memory",
  "problem-solving": "Problem-solving", "tool-use": "Tool use",
  communication: "Communication", vocalization: "Vocalization",
  "social-behavior": "Social behavior", cooperation: "Cooperation",
  parenting: "Parenting & care", play: "Play", "mating-display": "Mating display",
  territoriality: "Territoriality", foraging: "Foraging", hunting: "Hunting",
  migration: "Migration", "domesticated-behavior": "Domesticated behavior",
  "wild-vs-captive": "Wild vs captive", "emotion-caution": "Emotion (cautious)",
  "self-recognition": "Self-recognition", "culture-caution": "Culture (cautious)",
};

/** Plain-language, non-ranking label for how strong/what kind the evidence is. */
export const EVIDENCE_LABEL: Record<EvidenceContext, string> = {
  "field-observation": "Field observation",
  "controlled-study": "Controlled study",
  "captive-study": "Captive study",
  "wild-study": "Wild study",
  "mixed-evidence": "Mixed evidence",
  debated: "Debated",
  "broad-group": "Broad-group pattern",
};

export const GROUP_LABEL: Record<DisplayGroup, string> = {
  mammals: "Mammals", birds: "Birds", reptiles: "Reptiles", amphibians: "Amphibians",
  fish: "Fish", invertebrates: "Invertebrates", marine: "Marine", insects: "Insects",
  domesticated: "Domesticated", primates: "Primates", cetaceans: "Cetaceans",
  cephalopods: "Cephalopods",
};

export interface BehaviorGuide {
  slug: string;
  title: string;
  /** Short hub/card blurb. */
  blurb: string;
}

/** 18 published pillar guides. Order is the hub display order. */
export const BEHAVIOR_GUIDES: BehaviorGuide[] = [
  { slug: "animal-intelligence", title: "Animal intelligence", blurb: "Why intelligence is context-specific, not a single IQ ladder — and why ‘smartest animal’ rankings mislead." },
  { slug: "animal-learning", title: "Animal learning", blurb: "Habituation, conditioning, trial-and-error, and social learning — distinct from pet-training advice." },
  { slug: "animal-memory", title: "Animal memory", blurb: "Spatial, caching, migratory, and social memory, without human-like episodic overclaims." },
  { slug: "problem-solving", title: "Problem-solving", blurb: "How corvids, apes, octopuses, and others solve tasks — and why task design and context matter." },
  { slug: "tool-use", title: "Tool use", blurb: "Tool use across apes, some corvids, and others — with careful definitions, not ‘technology’." },
  { slug: "animal-communication", title: "Animal communication", blurb: "Calls, song, dance, scent, and display — and the precise line between communication and language." },
  { slug: "social-behavior", title: "Social behavior", blurb: "Herds, packs, colonies, and schools — including why the old wolf ‘alpha’ model is outdated." },
  { slug: "cooperation", title: "Cooperation", blurb: "Cooperative hunting, group defence, alloparenting, and eusocial insects — without moralising." },
  { slug: "parenting-and-care", title: "Parenting and care", blurb: "How parental care varies from none to extended across mammals, birds, fish, and insects." },
  { slug: "play-behavior", title: "Play behavior", blurb: "Social, object, and locomotor play in mammals and birds, and hypotheses about its function." },
  { slug: "mating-displays", title: "Mating displays and courtship", blurb: "Courtship and sexual selection across birds, insects, fish, and mammals." },
  { slug: "territorial-behavior", title: "Territorial behavior", blurb: "Scent marking, song, displays, and ritualised contests that often avoid injury." },
  { slug: "hunting-and-foraging", title: "Hunting and foraging", blurb: "Ambush, pursuit, filter feeding, cooperative hunting, and caching as foraging ecology." },
  { slug: "wild-vs-captive-behavior", title: "Wild vs captive behavior", blurb: "Captive bias and why zoo, aquarium, and lab findings may not generalise to the wild." },
  { slug: "domesticated-animal-behavior", title: "Domesticated animal behavior", blurb: "How domestication reshaped behavior in dogs, cats, and livestock — biology, not training." },
  { slug: "animal-emotions", title: "Animal emotions", blurb: "Observable behaviour vs inferred internal states — affect treated cautiously, not projected." },
  { slug: "self-recognition", title: "Self-recognition", blurb: "What the mirror test does and does not show — debated, limited, and not a consciousness ranking." },
  { slug: "animal-culture", title: "Animal culture", blurb: "Socially-learned, locally-varying traditions in some whales, primates, and birds, defined carefully." },
];

export interface SpeciesBehaviorIndex {
  slug: string;
  commonName: string;
  /** Must resolve to an existing /animals/[slug] profile. */
  animalSlug: string;
  displayGroup: DisplayGroup;
}

/** 30 published species behavior profiles (first quality-gated batch). */
export const SPECIES_INDEX: SpeciesBehaviorIndex[] = [
  { slug: "dolphin", commonName: "Dolphins", animalSlug: "dolphin", displayGroup: "cetaceans" },
  { slug: "orca", commonName: "Orcas", animalSlug: "orca", displayGroup: "cetaceans" },
  { slug: "whale", commonName: "Whales", animalSlug: "whale", displayGroup: "cetaceans" },
  { slug: "elephant", commonName: "Elephants", animalSlug: "elephant", displayGroup: "mammals" },
  { slug: "chimpanzee", commonName: "Chimpanzees", animalSlug: "chimpanzee", displayGroup: "primates" },
  { slug: "gorilla", commonName: "Gorillas", animalSlug: "gorilla", displayGroup: "primates" },
  { slug: "orangutan", commonName: "Orangutans", animalSlug: "orangutan", displayGroup: "primates" },
  { slug: "crow", commonName: "Crows", animalSlug: "crow", displayGroup: "birds" },
  { slug: "raven", commonName: "Ravens", animalSlug: "raven", displayGroup: "birds" },
  { slug: "parrot", commonName: "Parrots", animalSlug: "parrot", displayGroup: "birds" },
  { slug: "macaw", commonName: "Macaws", animalSlug: "macaw", displayGroup: "birds" },
  { slug: "octopus", commonName: "Octopuses", animalSlug: "octopus", displayGroup: "cephalopods" },
  { slug: "cuttlefish", commonName: "Cuttlefish", animalSlug: "cuttlefish", displayGroup: "cephalopods" },
  { slug: "squid", commonName: "Squid", animalSlug: "squid", displayGroup: "cephalopods" },
  { slug: "wolf", commonName: "Wolves", animalSlug: "wolf", displayGroup: "mammals" },
  { slug: "bee", commonName: "Honey bees", animalSlug: "bee", displayGroup: "insects" },
  { slug: "ant", commonName: "Ants", animalSlug: "ant", displayGroup: "insects" },
  { slug: "termite", commonName: "Termites", animalSlug: "termite", displayGroup: "insects" },
  { slug: "spider", commonName: "Spiders", animalSlug: "spider", displayGroup: "invertebrates" },
  { slug: "frog", commonName: "Frogs", animalSlug: "frog", displayGroup: "amphibians" },
  { slug: "salmon", commonName: "Salmon", animalSlug: "salmon", displayGroup: "fish" },
  { slug: "sea-turtle", commonName: "Sea turtles", animalSlug: "sea-turtle", displayGroup: "reptiles" },
  { slug: "albatross", commonName: "Albatrosses", animalSlug: "albatross", displayGroup: "birds" },
  { slug: "pigeon", commonName: "Pigeons", animalSlug: "pigeon", displayGroup: "birds" },
  { slug: "owl", commonName: "Owls", animalSlug: "owl", displayGroup: "birds" },
  { slug: "eagle", commonName: "Eagles", animalSlug: "eagle", displayGroup: "birds" },
  { slug: "meerkat", commonName: "Meerkats", animalSlug: "meerkat", displayGroup: "mammals" },
  { slug: "bat", commonName: "Bats", animalSlug: "bat", displayGroup: "mammals" },
  { slug: "polar-bear", commonName: "Polar bears", animalSlug: "polar-bear", displayGroup: "mammals" },
  { slug: "monarch-butterfly", commonName: "Monarch butterflies", animalSlug: "monarch-butterfly", displayGroup: "insects" },
];

export interface BehaviorMethodGuide {
  slug: string;
  title: string;
  /** Short hub/card blurb. */
  blurb: string;
  /** Pillar guide slugs this method relates to (must exist in BEHAVIOR_GUIDES). */
  relatedPillarSlugs: string[];
  /** Species profile slugs this method relates to (must exist in SPECIES_INDEX). */
  relatedSpeciesSlugs: string[];
  /** Source/methodology pages (must be real routes). */
  relatedSourcePages: { label: string; href: string }[];
}

const SRC_HUB = { label: "Animal research sources", href: "/animal-research-sources" };
const SRC_WORKFLOW = { label: "How FaunaHub uses sources", href: "/animal-research-sources/how-faunahub-uses-sources" };
const SRC_VET = { label: "Animal-care & veterinary boundaries", href: "/animal-research-sources/animal-care-and-veterinary-boundaries" };

/** 9 published research-method (source-literacy) guides under /methods/[slug]. */
export const BEHAVIOR_METHODS: BehaviorMethodGuide[] = [
  { slug: "how-animal-intelligence-is-studied", title: "How animal intelligence is studied", blurb: "Field observation, controlled tasks, and comparative cognition — and why one task never defines a whole mind.", relatedPillarSlugs: ["animal-intelligence", "problem-solving", "tool-use"], relatedSpeciesSlugs: ["crow", "octopus", "dolphin"], relatedSourcePages: [SRC_HUB, SRC_WORKFLOW] },
  { slug: "why-animal-iq-rankings-mislead", title: "Why animal IQ rankings mislead", blurb: "Why ‘animal IQ’ and ‘smartest animal’ lists hide ecology and reward similarity to the testers.", relatedPillarSlugs: ["animal-intelligence", "problem-solving"], relatedSpeciesSlugs: ["crow", "octopus", "elephant"], relatedSourcePages: [SRC_HUB] },
  { slug: "field-observation-vs-lab-study", title: "Field observation vs lab study", blurb: "The complementary strengths and limits of natural observation and controlled experiments.", relatedPillarSlugs: ["wild-vs-captive-behavior", "social-behavior"], relatedSpeciesSlugs: ["wolf", "meerkat"], relatedSourcePages: [SRC_WORKFLOW, SRC_HUB] },
  { slug: "captive-bias-in-behavior-research", title: "Captive bias in behavior research", blurb: "Why captive and lab findings are valuable but context-limited, and may not describe wild behavior.", relatedPillarSlugs: ["wild-vs-captive-behavior", "domesticated-animal-behavior"], relatedSpeciesSlugs: ["dolphin", "octopus"], relatedSourcePages: [SRC_VET, SRC_HUB] },
  { slug: "mirror-test-limitations", title: "Mirror test limitations", blurb: "What the mark test can and cannot show — and why passing or failing proves less than it seems.", relatedPillarSlugs: ["self-recognition", "animal-intelligence"], relatedSpeciesSlugs: ["dolphin", "elephant", "chimpanzee"], relatedSourcePages: [SRC_HUB] },
  { slug: "tool-use-definitions", title: "Tool-use definitions", blurb: "What counts as tool use, the contested boundary cases, and why ‘technology’ is the wrong frame.", relatedPillarSlugs: ["tool-use", "problem-solving"], relatedSpeciesSlugs: ["chimpanzee", "crow", "orangutan"], relatedSourcePages: [SRC_HUB] },
  { slug: "communication-vs-language", title: "Communication vs language", blurb: "How rich animal signalling differs from human language — bee dance, whale song, and bird song.", relatedPillarSlugs: ["animal-communication", "animal-culture"], relatedSpeciesSlugs: ["bee", "whale", "parrot"], relatedSourcePages: [SRC_HUB] },
  { slug: "anthropomorphism-in-animal-behavior", title: "Anthropomorphism in animal behavior", blurb: "Why human projection misleads, how to separate observation from interpretation, without dismissing cognition.", relatedPillarSlugs: ["animal-emotions", "social-behavior"], relatedSpeciesSlugs: ["wolf", "dolphin"], relatedSourcePages: [SRC_WORKFLOW, SRC_HUB] },
  { slug: "evidence-context-in-animal-behavior", title: "Evidence context in animal behavior", blurb: "What FaunaHub’s evidence labels mean — field, controlled, captive, wild, mixed, debated, broad-group.", relatedPillarSlugs: ["animal-intelligence", "wild-vs-captive-behavior"], relatedSpeciesSlugs: ["dolphin", "elephant"], relatedSourcePages: [SRC_WORKFLOW, SRC_HUB] },
];

/** Which method guides each pillar links to (reverse map, for in-page cross-linking). */
export const PILLAR_METHOD_LINKS: Record<string, string[]> = {
  "animal-intelligence": ["how-animal-intelligence-is-studied", "why-animal-iq-rankings-mislead"],
  "problem-solving": ["how-animal-intelligence-is-studied", "tool-use-definitions"],
  "tool-use": ["tool-use-definitions"],
  "animal-communication": ["communication-vs-language"],
  "self-recognition": ["mirror-test-limitations"],
  "animal-emotions": ["anthropomorphism-in-animal-behavior", "evidence-context-in-animal-behavior"],
  "wild-vs-captive-behavior": ["captive-bias-in-behavior-research", "field-observation-vs-lab-study"],
  "animal-culture": ["communication-vs-language"],
  "social-behavior": ["field-observation-vs-lab-study"],
};

export function methodBySlug(slug: string): BehaviorMethodGuide | undefined {
  return BEHAVIOR_METHODS.find((m) => m.slug === slug);
}

export interface BehaviorGroupGuide {
  slug: string;
  title: string;
  /** Short hub/card blurb. */
  blurb: string;
  /** Pillar guide slugs (must exist in BEHAVIOR_GUIDES). */
  relatedPillarSlugs: string[];
  /** Method guide slugs (must exist in BEHAVIOR_METHODS). */
  relatedMethodSlugs: string[];
  /** Species behavior-page slugs (must exist in SPECIES_INDEX). */
  relatedSpeciesSlugs: string[];
  /** Base /animals/[slug] profiles (must resolve). */
  relatedAnimalSlugs: { slug: string; name: string }[];
  /** Optional cross-cluster ecosystem hub links (must be real routes). */
  ecosystemLinks?: { label: string; href: string }[];
}

const A = (slug: string, name: string) => ({ slug, name });

/** 14 published group behavior pages under /groups/[slug] (first batch). */
export const BEHAVIOR_GROUPS: BehaviorGroupGuide[] = [
  { slug: "primate-behavior", title: "Primate behavior", blurb: "Social learning, tool use, parenting, and communication — and how apes, monkeys, and lemurs differ.", relatedPillarSlugs: ["social-behavior", "tool-use", "animal-learning"], relatedMethodSlugs: ["how-animal-intelligence-is-studied", "tool-use-definitions"], relatedSpeciesSlugs: ["chimpanzee", "gorilla", "orangutan"], relatedAnimalSlugs: [A("chimpanzee", "Chimpanzee"), A("gorilla", "Gorilla"), A("orangutan", "Orangutan"), A("lemur", "Lemur"), A("baboon", "Baboon"), A("macaque", "Macaque")] },
  { slug: "corvid-intelligence", title: "Corvid intelligence", blurb: "Problem-solving, caching, and tool use in some crows, ravens, and jays — representative, not a ranking.", relatedPillarSlugs: ["problem-solving", "tool-use", "animal-intelligence"], relatedMethodSlugs: ["how-animal-intelligence-is-studied", "why-animal-iq-rankings-mislead"], relatedSpeciesSlugs: ["crow", "raven"], relatedAnimalSlugs: [A("crow", "Crow"), A("raven", "Raven"), A("magpie", "Magpie")] },
  { slug: "parrot-learning", title: "Parrot learning", blurb: "Vocal learning, imitation, and social learning — and why mimicry is not human language.", relatedPillarSlugs: ["animal-communication", "animal-learning"], relatedMethodSlugs: ["communication-vs-language", "captive-bias-in-behavior-research"], relatedSpeciesSlugs: ["parrot", "macaw"], relatedAnimalSlugs: [A("parrot", "Parrot"), A("macaw", "Macaw")] },
  { slug: "cetacean-behavior", title: "Cetacean behavior", blurb: "Communication, social structure, migration, and foraging — toothed vs baleen whales differ greatly.", relatedPillarSlugs: ["animal-communication", "social-behavior", "cooperation"], relatedMethodSlugs: ["communication-vs-language", "captive-bias-in-behavior-research"], relatedSpeciesSlugs: ["dolphin", "orca", "whale"], relatedAnimalSlugs: [A("dolphin", "Dolphin"), A("orca", "Orca"), A("whale", "Whale")], ecosystemLinks: [{ label: "Ocean fauna", href: "/fauna/ocean" }] },
  { slug: "elephant-social-behavior", title: "Elephant social behavior", blurb: "Social bonds, low-frequency communication, and calf care, with memory in ecological context.", relatedPillarSlugs: ["social-behavior", "animal-memory", "cooperation"], relatedMethodSlugs: ["anthropomorphism-in-animal-behavior", "evidence-context-in-animal-behavior"], relatedSpeciesSlugs: ["elephant"], relatedAnimalSlugs: [A("elephant", "Elephant")] },
  { slug: "cephalopod-intelligence", title: "Cephalopod intelligence", blurb: "Problem-solving, camouflage signalling, and the diversity of octopuses, cuttlefish, squid, and nautilus.", relatedPillarSlugs: ["problem-solving", "animal-communication", "animal-learning"], relatedMethodSlugs: ["how-animal-intelligence-is-studied", "captive-bias-in-behavior-research"], relatedSpeciesSlugs: ["octopus", "cuttlefish", "squid"], relatedAnimalSlugs: [A("octopus", "Octopus"), A("cuttlefish", "Cuttlefish"), A("squid", "Squid"), A("nautilus", "Nautilus")], ecosystemLinks: [{ label: "Ocean fauna", href: "/fauna/ocean" }] },
  { slug: "eusocial-insects", title: "Eusocial insects", blurb: "Division of labour, communication, and decentralised colony organisation in bees, ants, and termites.", relatedPillarSlugs: ["cooperation", "social-behavior", "animal-communication"], relatedMethodSlugs: ["anthropomorphism-in-animal-behavior"], relatedSpeciesSlugs: ["bee", "ant", "termite"], relatedAnimalSlugs: [A("bee", "Bee"), A("ant", "Ant"), A("termite", "Termite"), A("wasp", "Wasp")] },
  { slug: "reptile-behavior", title: "Reptile behavior", blurb: "Thermoregulation, territoriality, courtship, and parental care across hugely varied reptiles.", relatedPillarSlugs: ["territorial-behavior", "parenting-and-care", "mating-displays"], relatedMethodSlugs: ["anthropomorphism-in-animal-behavior", "evidence-context-in-animal-behavior"], relatedSpeciesSlugs: ["sea-turtle"], relatedAnimalSlugs: [A("sea-turtle", "Sea turtle"), A("snake", "Snake"), A("coral-snake", "Coral snake"), A("gecko", "Gecko"), A("chameleon", "Chameleon"), A("iguana", "Iguana"), A("komodo-dragon", "Komodo dragon")], ecosystemLinks: [{ label: "Reptiles & amphibians", href: "/animal-taxonomy/reptiles-amphibians" }] },
  { slug: "amphibian-communication", title: "Amphibian communication", blurb: "Frog and toad calls, courtship and territorial signals — with salamander and caecilian caveats.", relatedPillarSlugs: ["animal-communication", "mating-displays", "territorial-behavior"], relatedMethodSlugs: ["communication-vs-language"], relatedSpeciesSlugs: ["frog"], relatedAnimalSlugs: [A("frog", "Frog"), A("toad", "Toad"), A("salamander", "Salamander"), A("axolotl", "Axolotl"), A("newt", "Newt")], ecosystemLinks: [{ label: "Reptiles & amphibians", href: "/animal-taxonomy/reptiles-amphibians" }] },
  { slug: "fish-schooling", title: "Fish schooling", blurb: "Schooling vs shoaling, predator avoidance, and self-organised group movement — not all fish school.", relatedPillarSlugs: ["social-behavior", "cooperation", "animal-communication"], relatedMethodSlugs: ["anthropomorphism-in-animal-behavior", "evidence-context-in-animal-behavior"], relatedSpeciesSlugs: ["salmon"], relatedAnimalSlugs: [A("salmon", "Salmon"), A("shark", "Shark"), A("tuna", "Tuna"), A("cod", "Cod")], ecosystemLinks: [{ label: "Ocean fauna", href: "/fauna/ocean" }] },
  { slug: "pollinator-behavior", title: "Pollinator behavior", blurb: "Flower-visiting across bees, butterflies, moths, birds, and bats — visiting is not always pollination.", relatedPillarSlugs: ["animal-communication", "animal-learning"], relatedMethodSlugs: ["evidence-context-in-animal-behavior"], relatedSpeciesSlugs: ["bee", "monarch-butterfly"], relatedAnimalSlugs: [A("bee", "Bee"), A("butterfly", "Butterfly"), A("monarch-butterfly", "Monarch butterfly"), A("moth", "Moth"), A("hummingbird", "Hummingbird"), A("bat", "Bat")], ecosystemLinks: [{ label: "Pollinators hub", href: "/wildlife/pollinators" }, { label: "Ocean fauna", href: "/fauna/ocean" }] },
  { slug: "bird-migration-behavior", title: "Bird migration behavior", blurb: "Seasonal movement, multi-cue navigation, flocking, and stopovers — and why not all birds migrate.", relatedPillarSlugs: ["social-behavior", "animal-memory"], relatedMethodSlugs: ["evidence-context-in-animal-behavior"], relatedSpeciesSlugs: ["albatross", "pigeon"], relatedAnimalSlugs: [A("albatross", "Albatross"), A("pigeon", "Pigeon"), A("goose", "Goose"), A("swan", "Swan"), A("stork", "Stork")], ecosystemLinks: [{ label: "Migration & navigation", href: "/animal-senses-and-adaptations/migration-and-navigation" }, { label: "Animal lifespans", href: "/animal-lifespans" }] },
  { slug: "mammal-parenting-behavior", title: "Mammal parenting behavior", blurb: "Lactation and the wide variation in parental care — maternal, biparental, and cooperative.", relatedPillarSlugs: ["parenting-and-care", "social-behavior", "cooperation"], relatedMethodSlugs: ["anthropomorphism-in-animal-behavior"], relatedSpeciesSlugs: ["elephant", "wolf", "meerkat", "polar-bear"], relatedAnimalSlugs: [A("elephant", "Elephant"), A("wolf", "Wolf"), A("meerkat", "Meerkat"), A("polar-bear", "Polar bear"), A("lion", "Lion")], ecosystemLinks: [{ label: "Animal lifespans", href: "/animal-lifespans" }] },
  { slug: "social-carnivore-behavior", title: "Social carnivore behavior", blurb: "Cooperative hunting and group living in wolves, lions, hyenas, and meerkats — modern family-pack view.", relatedPillarSlugs: ["cooperation", "social-behavior", "hunting-and-foraging"], relatedMethodSlugs: ["anthropomorphism-in-animal-behavior", "field-observation-vs-lab-study"], relatedSpeciesSlugs: ["wolf", "meerkat"], relatedAnimalSlugs: [A("wolf", "Wolf"), A("lion", "Lion"), A("hyena", "Hyena"), A("meerkat", "Meerkat"), A("cheetah", "Cheetah")] },
];

export function groupBySlug(slug: string): BehaviorGroupGuide | undefined {
  return BEHAVIOR_GROUPS.find((g) => g.slug === slug);
}

/** Which group guides each pillar links to (reverse map, for in-page cross-linking). */
export const PILLAR_GROUP_LINKS: Record<string, string[]> = {
  "animal-intelligence": ["primate-behavior", "corvid-intelligence", "cephalopod-intelligence"],
  "problem-solving": ["corvid-intelligence", "cephalopod-intelligence"],
  "tool-use": ["primate-behavior", "corvid-intelligence"],
  "animal-communication": ["parrot-learning", "cetacean-behavior", "amphibian-communication", "eusocial-insects"],
  "social-behavior": ["primate-behavior", "cetacean-behavior", "social-carnivore-behavior", "fish-schooling"],
  "cooperation": ["eusocial-insects", "social-carnivore-behavior"],
  "parenting-and-care": ["mammal-parenting-behavior", "reptile-behavior"],
  "animal-memory": ["elephant-social-behavior", "bird-migration-behavior"],
  "animal-learning": ["parrot-learning", "primate-behavior"],
  "mating-displays": ["amphibian-communication"],
  "territorial-behavior": ["reptile-behavior"],
};

export function guideBySlug(slug: string): BehaviorGuide | undefined {
  return BEHAVIOR_GUIDES.find((g) => g.slug === slug);
}
export function speciesBySlug(slug: string): SpeciesBehaviorIndex | undefined {
  return SPECIES_INDEX.find((s) => s.slug === slug);
}
export function speciesByGroup(group: DisplayGroup): SpeciesBehaviorIndex[] {
  return SPECIES_INDEX.filter((s) => s.displayGroup === group);
}
export function duplicateBehaviorSlugs(): string[] {
  const all = [...BEHAVIOR_GUIDES.map((g) => g.slug), ...SPECIES_INDEX.map((s) => s.slug)];
  const seen = new Set<string>();
  const dups: string[] = [];
  for (const s of all) {
    // guide and species slugs live under different route segments, so collisions
    // are only checked within each set.
    if (seen.has(s)) dups.push(s);
    seen.add(s);
  }
  return dups;
}

export const BEHAVIOR_GUIDE_COUNT = BEHAVIOR_GUIDES.length;
export const SPECIES_PROFILE_COUNT = SPECIES_INDEX.length;
export const BEHAVIOR_METHOD_COUNT = BEHAVIOR_METHODS.length;
export const BEHAVIOR_GROUP_COUNT = BEHAVIOR_GROUPS.length;
