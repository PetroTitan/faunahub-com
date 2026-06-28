/**
 * Animal lifespans & life stages data layer.
 *
 * EDUCATIONAL examples only. This file holds a small, representative set of
 * broadly-documented, deliberately HEDGED lifespan/life-cycle examples — NOT a
 * scraped database of averages, NOT a ranking, and NOT a prediction tool. It
 * contains no precise invented average-lifespan figures, no "maximum age"
 * records presented as the norm, no scores, and no mortality-risk values. Every
 * entry is qualitative prose with an explicit context label and a caveat.
 * Lifespan depends on species, genetics, environment, sex, body size,
 * predation, disease, and (in human care) care context. This is not veterinary
 * advice and not a lifespan prediction for any individual animal.
 */

export type LifespanContext =
  | "wild"
  | "captive"
  | "domestic"
  | "maximum-recorded"
  | "estimate"
  | "life-cycle"
  | "varies-by-species";

export type DisplayGroup =
  | "mammals"
  | "birds"
  | "reptiles"
  | "amphibians"
  | "fish"
  | "invertebrates"
  | "marine"
  | "pets"
  | "metamorphosis";

export const CONTEXT_LABEL: Record<LifespanContext, string> = {
  wild: "Wild",
  captive: "In human care",
  domestic: "Domestic",
  "maximum-recorded": "Maximum recorded age",
  estimate: "Estimate",
  "life-cycle": "Life cycle",
  "varies-by-species": "Varies by species",
};

export interface LifespanExample {
  id: string;
  /** Set only when a real /animals/[slug] profile exists. */
  animalSlug?: string;
  commonName: string;
  displayGroup: DisplayGroup;
  context: LifespanContext;
  /** Broad, hedged, source-cautious description — never a precise invented average. */
  cautiousText: string;
  /** Mandatory caveat keeping the example honest. */
  caveat: string;
  relatedPath: string;
}

const LONGEST = "/animal-lifespans/longest-living-animals";
const SHORTEST = "/animal-lifespans/shortest-living-animals";
const META = "/animal-lifespans/metamorphosis";
const PETS = "/animal-lifespans/pet-lifespans";

export const LIFESPAN_EXAMPLES: LifespanExample[] = [
  // --- Long-lived (notable examples, not a ranking) ---
  { id: "galapagos-tortoise", animalSlug: "galapagos-tortoise", commonName: "Galápagos tortoise", displayGroup: "reptiles", context: "maximum-recorded", cautiousText: "Giant tortoises are well documented as among the longest-lived land animals, with some individuals living well over a century.", caveat: "Refers to exceptional documented individuals, not a typical figure for every tortoise.", relatedPath: LONGEST },
  { id: "aldabra-giant-tortoise", animalSlug: "aldabra-giant-tortoise", commonName: "Aldabra giant tortoise", displayGroup: "reptiles", context: "maximum-recorded", cautiousText: "Like other giant tortoises, the Aldabra giant tortoise can be very long-lived, with some famous individuals recorded reaching great ages.", caveat: "Famous old individuals are exceptional and their exact ages are sometimes uncertain.", relatedPath: LONGEST },
  { id: "bowhead-whale", animalSlug: "whale", commonName: "Bowhead whale", displayGroup: "marine", context: "estimate", cautiousText: "The bowhead whale is considered among the longest-lived mammals, with lifespans estimated to reach well beyond a century.", caveat: "Ages are estimated from indirect methods and remain an area of ongoing research.", relatedPath: LONGEST },
  { id: "greenland-shark", animalSlug: "shark", commonName: "Greenland shark", displayGroup: "fish", context: "estimate", cautiousText: "The Greenland shark is estimated to be among the longest-lived vertebrates known, with lifespans thought to reach several centuries.", caveat: "These are estimates with wide uncertainty, derived from indirect dating methods.", relatedPath: LONGEST },
  { id: "ocean-quahog", commonName: "Ocean quahog (a clam)", displayGroup: "invertebrates", context: "maximum-recorded", cautiousText: "The ocean quahog, a marine clam, includes individuals documented to have lived for centuries, aged from growth rings in the shell.", caveat: "Refers to specific aged individuals; it is not a typical figure for the species as a whole.", relatedPath: LONGEST },
  { id: "lobster", animalSlug: "lobster", commonName: "Lobster", displayGroup: "invertebrates", context: "varies-by-species", cautiousText: "Lobsters keep growing throughout life and do not have a clear fixed lifespan, so the largest individuals are generally thought to be old.", caveat: "Lobster ages are estimated indirectly; there is no simple maximum.", relatedPath: LONGEST },
  { id: "koi", animalSlug: "koi", commonName: "Koi", displayGroup: "fish", context: "captive", cautiousText: "Koi kept in ponds are often noted as long-lived, and a few famous individuals have been reported reaching remarkable ages.", caveat: "The most famous ages are exceptional and partly anecdotal, not a typical lifespan.", relatedPath: LONGEST },
  { id: "tuatara", animalSlug: "tuatara", commonName: "Tuatara", displayGroup: "reptiles", context: "wild", cautiousText: "The tuatara is a slow-living reptile that matures and ages gradually and is generally regarded as long-lived.", caveat: "Its slow life history makes precise lifespans hard to measure.", relatedPath: LONGEST },

  // --- Short-lived (notable examples, not a ranking) ---
  { id: "mayfly", animalSlug: "mayfly", commonName: "Mayfly", displayGroup: "invertebrates", context: "life-cycle", cautiousText: "Adult mayflies are famous for very short winged lives — often only about a day — while the aquatic nymph stage beforehand lasts far longer.", caveat: "The brief adult stage is not the animal's whole life; the larval stage is much longer.", relatedPath: SHORTEST },
  { id: "drone-bee", animalSlug: "bee", commonName: "Worker and drone bees", displayGroup: "invertebrates", context: "varies-by-species", cautiousText: "In honey bees, individual workers and drones live only weeks to months, far shorter than the colony's long-lived queen.", caveat: "Lifespan differs sharply between castes and with the season; this is colony biology, not a single figure.", relatedPath: SHORTEST },

  // --- Metamorphosis / life cycle ---
  { id: "frog", animalSlug: "frog", commonName: "Frog", displayGroup: "amphibians", context: "life-cycle", cautiousText: "Most frogs develop from aquatic tadpoles into air-breathing adults through metamorphosis — a developmental change, not aging.", caveat: "Metamorphosis is part of the life cycle and is separate from how long the adult lives.", relatedPath: META },
  { id: "butterfly", animalSlug: "butterfly", commonName: "Butterfly", displayGroup: "metamorphosis", context: "life-cycle", cautiousText: "Butterflies undergo complete metamorphosis: egg, larva (caterpillar), pupa (chrysalis), and adult.", caveat: "Each stage can last a very different length of time depending on species and conditions.", relatedPath: META },
  { id: "dragonfly", animalSlug: "dragonfly", commonName: "Dragonfly", displayGroup: "metamorphosis", context: "life-cycle", cautiousText: "Dragonflies undergo incomplete metamorphosis — egg, aquatic nymph, then adult — with no pupal stage.", caveat: "The aquatic nymph stage often lasts far longer than the flying adult stage.", relatedPath: META },
  { id: "axolotl", animalSlug: "axolotl", commonName: "Axolotl", displayGroup: "amphibians", context: "life-cycle", cautiousText: "The axolotl famously keeps a larval-like aquatic form for life (neoteny) and usually does not complete metamorphosis.", caveat: "An unusual case among salamanders, often discussed as an exception.", relatedPath: META },

  // --- Pets (educational, not predictions) ---
  { id: "dog", commonName: "Dogs", displayGroup: "pets", context: "domestic", cautiousText: "Dog lifespans vary widely, and body size and breed are associated with differences alongside many individual factors.", caveat: "Educational only — not a prediction for any individual dog; consult a veterinarian.", relatedPath: PETS },
  { id: "cat", commonName: "Cats", displayGroup: "pets", context: "domestic", cautiousText: "Cat lifespans vary with the individual and its circumstances, including indoor versus outdoor life.", caveat: "Educational only — not a prediction for any individual cat; consult a veterinarian.", relatedPath: PETS },
  { id: "rabbit", animalSlug: "rabbit", commonName: "Rabbits", displayGroup: "pets", context: "domestic", cautiousText: "Pet rabbit lifespans vary by individual and circumstances and differ from those of their wild relatives.", caveat: "Educational only — not a prediction; a rabbit-savvy veterinarian is the right source for health questions.", relatedPath: PETS },
];

export function examplesByGroup(group: DisplayGroup): LifespanExample[] {
  return LIFESPAN_EXAMPLES.filter((e) => e.displayGroup === group);
}

export function examplesByContext(context: LifespanContext): LifespanExample[] {
  return LIFESPAN_EXAMPLES.filter((e) => e.context === context);
}

export function duplicateExampleIds(): string[] {
  const seen = new Set<string>();
  const dups: string[] = [];
  for (const e of LIFESPAN_EXAMPLES) {
    if (seen.has(e.id)) dups.push(e.id);
    seen.add(e.id);
  }
  return dups;
}

export const LIFESPAN_EXAMPLE_COUNT = LIFESPAN_EXAMPLES.length;
