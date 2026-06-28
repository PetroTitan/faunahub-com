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
