/**
 * Animal domestication data layer.
 *
 * An EDUCATIONAL, source-cautious overview of how some animals became domestic,
 * semi-domestic, commensal, or remained tamed-but-wild. It is NOT veterinary,
 * breeding, feeding, training, or livestock-management advice, and it does NOT
 * assert exact dates, specific archaeological sites, or precise genetic origins.
 * Domestication is a long, often regionally repeated PROCESS whose timeline and
 * geography remain debated; this file deliberately uses qualitative, hedged
 * context rather than invented numbers, and assigns no scores or certainty
 * index of any kind.
 */

export type DomesticationStatus =
  | "domesticated"
  | "semi-domesticated"
  | "commensal"
  | "captive-not-domesticated"
  | "debated";

export type EvidenceType =
  | "archaeological"
  | "genetic"
  | "historical"
  | "morphological"
  | "linguistic";

export interface DomesticationRecord {
  id: string;
  /** Set ONLY when a real /animals/[slug] profile exists. */
  animalSlug?: string;
  /** Optional non-/animals link (e.g. the pet section) where no profile exists. */
  externalPath?: string;
  commonName: string;
  wildAncestorOrRelative: string;
  status: DomesticationStatus;
  /** Qualitative, hedged context — NO invented exact dates or sites. */
  approximateContext: string;
  evidenceTypes: EvidenceType[];
  /** Broad regional summary, hedged. */
  regionSummary: string;
  /** Honest statement of what remains uncertain or debated. */
  uncertaintyNote: string;
  relatedGuidePath: string;
}

export const STATUS_LABEL: Record<DomesticationStatus, string> = {
  domesticated: "Domesticated",
  "semi-domesticated": "Semi-domesticated",
  commensal: "Commensal pathway",
  "captive-not-domesticated": "Tamed/working, not domesticated",
  debated: "Debated",
};

export const DOMESTICATION_RECORDS: DomesticationRecord[] = [
  // --- Companion / commensal ---
  {
    id: "dog", externalPath: "/dogs", commonName: "Dog", wildAncestorOrRelative: "Gray wolf (Canis lupus)", status: "domesticated",
    approximateContext: "Widely regarded as the first domesticated animal, well before farming, with a relationship rooted in shared landscapes rather than herding.",
    evidenceTypes: ["archaeological", "genetic", "morphological"], regionSummary: "Eurasia, with the exact region and number of origins debated.",
    uncertaintyNote: "The timing, location, and whether domestication happened once or several times are all actively debated.",
    relatedGuidePath: "/animal-domestication/dog-domestication",
  },
  {
    id: "cat", externalPath: "/cats", commonName: "Cat", wildAncestorOrRelative: "African wildcat (Felis lybica)", status: "commensal",
    approximateContext: "Followed a commensal pathway: wildcats are thought to have drawn close to early farming settlements where stored grain attracted rodents.",
    evidenceTypes: ["archaeological", "genetic"], regionSummary: "The Near East, later spreading widely with people.",
    uncertaintyNote: "Often described as largely self-domesticated; the process was gradual and is still being clarified by genetics.",
    relatedGuidePath: "/animal-domestication/cat-domestication",
  },
  // --- Transport / pastoral ---
  {
    id: "horse", animalSlug: "horse", commonName: "Horse", wildAncestorOrRelative: "Now-extinct wild horses (Przewalski's horse is a distinct wild horse, not the ancestor of modern domestic horses)", status: "domesticated",
    approximateContext: "Domestication transformed transport, herding, trade, and warfare across the Eurasian steppe and beyond.",
    evidenceTypes: ["archaeological", "genetic", "historical"], regionSummary: "The Eurasian steppe, with the precise homeland and routes debated and revised by recent genetics.",
    uncertaintyNote: "Recent ancient-DNA work has revised earlier ideas; the timing and geography remain an active research area.",
    relatedGuidePath: "/animal-domestication/horse-domestication",
  },
  {
    id: "donkey", commonName: "Donkey", wildAncestorOrRelative: "African wild ass (Equus africanus)", status: "domesticated",
    approximateContext: "A key pack and transport animal whose domestication is linked to arid northeastern Africa.",
    evidenceTypes: ["archaeological", "genetic"], regionSummary: "Northeastern Africa, spreading along trade routes.",
    uncertaintyNote: "The wild African ass is now Critically Endangered, and details of the donkey's origin continue to be refined.",
    relatedGuidePath: "/animal-domestication/horse-domestication",
  },
  // --- Livestock ---
  {
    id: "cattle", animalSlug: "cow", commonName: "Cattle", wildAncestorOrRelative: "Aurochs (Bos primigenius, extinct)", status: "domesticated",
    approximateContext: "Domesticated from the wild aurochs in more than one region, giving rise to humpless (taurine) and humped (zebu) cattle.",
    evidenceTypes: ["archaeological", "genetic"], regionSummary: "The Near East and South Asia, as separate domestications.",
    uncertaintyNote: "The number and exact locations of cattle domestications are still studied; the aurochs itself went extinct in the 1600s.",
    relatedGuidePath: "/animal-domestication/livestock-domestication",
  },
  {
    id: "sheep", animalSlug: "sheep", commonName: "Sheep", wildAncestorOrRelative: "Wild sheep of the mouflon group (Ovis)", status: "domesticated",
    approximateContext: "Among the earliest herded livestock, tied to the spread of farming in the Fertile Crescent.",
    evidenceTypes: ["archaeological", "genetic", "morphological"], regionSummary: "The Near East / Fertile Crescent.",
    uncertaintyNote: "Which wild populations contributed, and how wool was later selected for, are still researched.",
    relatedGuidePath: "/animal-domestication/livestock-domestication",
  },
  {
    id: "goat", animalSlug: "goat", commonName: "Goat", wildAncestorOrRelative: "Bezoar ibex (Capra aegagrus)", status: "domesticated",
    approximateContext: "One of the first herd animals, closely associated with early Near Eastern farming communities.",
    evidenceTypes: ["archaeological", "genetic"], regionSummary: "The Near East / Fertile Crescent.",
    uncertaintyNote: "Details of the founding populations and dispersal routes are still being clarified.",
    relatedGuidePath: "/animal-domestication/livestock-domestication",
  },
  {
    id: "pig", animalSlug: "pig", commonName: "Pig", wildAncestorOrRelative: "Wild boar (Sus scrofa)", status: "domesticated",
    approximateContext: "Domesticated from wild boar independently in more than one region, with continued mixing between wild and domestic pigs.",
    evidenceTypes: ["archaeological", "genetic"], regionSummary: "The Near East and East Asia, as separate domestications.",
    uncertaintyNote: "Repeated interbreeding with wild boar complicates a simple origin story.",
    relatedGuidePath: "/animal-domestication/livestock-domestication",
  },
  {
    id: "camel", animalSlug: "camel", commonName: "Camel", wildAncestorOrRelative: "Wild dromedary (extinct) and wild Bactrian camel (Camelus ferus, Critically Endangered)", status: "domesticated",
    approximateContext: "Domestication of the one-humped dromedary and two-humped Bactrian camel underpinned desert trade and travel.",
    evidenceTypes: ["archaeological", "genetic", "historical"], regionSummary: "Arabia / the Horn of Africa (dromedary) and Central Asia (Bactrian).",
    uncertaintyNote: "A small population of genuinely wild Bactrian camels survives and is distinct from domestic ones.",
    relatedGuidePath: "/animal-domestication/livestock-domestication",
  },
  {
    id: "llama", animalSlug: "llama", commonName: "Llama", wildAncestorOrRelative: "Guanaco (Lama guanicoe)", status: "domesticated",
    approximateContext: "Domesticated in the high Andes as a pack animal and source of meat and fibre.",
    evidenceTypes: ["archaeological", "genetic"], regionSummary: "The Andes of South America.",
    uncertaintyNote: "Llama and alpaca ancestry has been partly reshuffled by genetic work.",
    relatedGuidePath: "/animal-domestication/livestock-domestication",
  },
  {
    id: "alpaca", commonName: "Alpaca", wildAncestorOrRelative: "Vicuña (Vicugna vicugna)", status: "domesticated",
    approximateContext: "Domesticated in the Andes mainly for its fine fibre.",
    evidenceTypes: ["archaeological", "genetic"], regionSummary: "The Andes of South America.",
    uncertaintyNote: "Hybridisation between alpacas and llamas complicates their genetic history.",
    relatedGuidePath: "/animal-domestication/livestock-domestication",
  },
  {
    id: "guinea-pig", animalSlug: "guinea-pig", commonName: "Guinea pig", wildAncestorOrRelative: "Wild cavies (Cavia)", status: "domesticated",
    approximateContext: "Domesticated in the Andes, long used as food and in ritual, and later kept worldwide as a companion animal.",
    evidenceTypes: ["archaeological", "genetic"], regionSummary: "The Andes of South America.",
    uncertaintyNote: "The exact wild founding populations are still studied.",
    relatedGuidePath: "/animal-domestication/livestock-domestication",
  },
  {
    id: "rabbit", animalSlug: "rabbit", commonName: "Rabbit", wildAncestorOrRelative: "European rabbit (Oryctolagus cuniculus)", status: "domesticated",
    approximateContext: "Domesticated comparatively recently in European history, well after most livestock.",
    evidenceTypes: ["historical", "genetic"], regionSummary: "Western Europe.",
    uncertaintyNote: "Popular accounts of a single precise origin date are not well supported; the process was gradual.",
    relatedGuidePath: "/animal-domestication/livestock-domestication",
  },
  {
    id: "ferret", commonName: "Ferret", wildAncestorOrRelative: "European polecat (Mustela putorius)", status: "domesticated",
    approximateContext: "Domesticated from polecats, historically used to flush rabbits and rodents.",
    evidenceTypes: ["historical", "genetic"], regionSummary: "Europe and the Mediterranean.",
    uncertaintyNote: "The precise origin and the role of related polecats are still discussed.",
    relatedGuidePath: "/animal-domestication/commensal-and-semi-domesticated-animals",
  },
  // --- Birds / poultry ---
  {
    id: "chicken", commonName: "Chicken", wildAncestorOrRelative: "Red junglefowl (Gallus gallus), with input from related junglefowl", status: "domesticated",
    approximateContext: "Domesticated from junglefowl in South and Southeast Asia, later spreading across the world.",
    evidenceTypes: ["archaeological", "genetic", "historical"], regionSummary: "South and Southeast Asia.",
    uncertaintyNote: "Early dates and routes have been revised, and some traits trace to more than one junglefowl species.",
    relatedGuidePath: "/animal-domestication/birds-and-poultry-domestication",
  },
  {
    id: "duck", animalSlug: "duck", commonName: "Duck", wildAncestorOrRelative: "Mallard (Anas platyrhynchos); the Muscovy duck is a separate New World domestication", status: "domesticated",
    approximateContext: "Most domestic ducks descend from the mallard, with the Muscovy duck domesticated separately in the Americas.",
    evidenceTypes: ["historical", "genetic"], regionSummary: "Eurasia (mallard) and the Americas (Muscovy).",
    uncertaintyNote: "The timing of duck domestication is less precisely known than for some other poultry.",
    relatedGuidePath: "/animal-domestication/birds-and-poultry-domestication",
  },
  {
    id: "goose", animalSlug: "goose", commonName: "Goose", wildAncestorOrRelative: "Greylag goose (Anser anser) in Europe; swan goose (Anser cygnoides) in East Asia", status: "domesticated",
    approximateContext: "Domesticated from different wild geese in Europe and East Asia.",
    evidenceTypes: ["historical", "genetic"], regionSummary: "Europe and East Asia, as separate domestications.",
    uncertaintyNote: "Early domestic goose history is documented unevenly across regions.",
    relatedGuidePath: "/animal-domestication/birds-and-poultry-domestication",
  },
  {
    id: "turkey", commonName: "Turkey", wildAncestorOrRelative: "Wild turkey (Meleagris gallopavo)", status: "domesticated",
    approximateContext: "Domesticated in Mesoamerica from the wild turkey, long before European contact.",
    evidenceTypes: ["archaeological", "genetic"], regionSummary: "Mesoamerica and the present-day southwestern United States.",
    uncertaintyNote: "Whether there were one or more independent domestications is still studied.",
    relatedGuidePath: "/animal-domestication/birds-and-poultry-domestication",
  },
  {
    id: "pigeon", animalSlug: "pigeon", commonName: "Pigeon", wildAncestorOrRelative: "Rock dove (Columba livia)", status: "domesticated",
    approximateContext: "Domesticated from the rock dove and kept for food, messaging, and companionship; feral city pigeons descend from domestic birds.",
    evidenceTypes: ["historical", "genetic"], regionSummary: "The Mediterranean and Near East, spreading worldwide.",
    uncertaintyNote: "The earliest stages are hard to pin down because rock doves and feral pigeons mix readily.",
    relatedGuidePath: "/animal-domestication/birds-and-poultry-domestication",
  },
  // --- Insects / managed ---
  {
    id: "silkworm", animalSlug: "silkworm", commonName: "Silkworm", wildAncestorOrRelative: "Wild silk moth (Bombyx mandarina)", status: "domesticated",
    approximateContext: "So thoroughly domesticated for silk that the domestic silk moth can no longer survive without human care.",
    evidenceTypes: ["historical", "genetic", "morphological"], regionSummary: "China, later spreading along trade routes.",
    uncertaintyNote: "An unusually complete example of domestication in an insect.",
    relatedGuidePath: "/animal-domestication/commensal-and-semi-domesticated-animals",
  },
  {
    id: "honeybee", animalSlug: "bee", commonName: "Honey bee", wildAncestorOrRelative: "Wild honey bees (Apis mellifera and relatives)", status: "semi-domesticated",
    approximateContext: "Managed rather than fully domesticated: people keep and move colonies, but managed bees remain biologically close to wild ones and can live independently.",
    evidenceTypes: ["historical", "morphological"], regionSummary: "Africa, Europe, and the Near East, with beekeeping spreading worldwide.",
    uncertaintyNote: "Best described as a managed or semi-domesticated animal rather than a fully domesticated one.",
    relatedGuidePath: "/animal-domestication/commensal-and-semi-domesticated-animals",
  },
  // --- Semi-domesticated / debated ---
  {
    id: "reindeer", commonName: "Reindeer", wildAncestorOrRelative: "Wild reindeer / caribou (Rangifer tarandus)", status: "semi-domesticated",
    approximateContext: "Herded across the Arctic, but many populations remain wild and herded animals are often only partly managed.",
    evidenceTypes: ["historical", "archaeological"], regionSummary: "Arctic Eurasia (herding) and wild across the circumpolar north.",
    uncertaintyNote: "Frequently described as semi-domesticated; the line between wild and herded reindeer is blurred.",
    relatedGuidePath: "/animal-domestication/commensal-and-semi-domesticated-animals",
  },
  {
    id: "elephant", animalSlug: "elephant", commonName: "Elephant", wildAncestorOrRelative: "Wild Asian elephant (Elephas maximus)", status: "captive-not-domesticated",
    approximateContext: "Working Asian elephants are tamed individuals, usually captured or captive-bred from wild stock — not a domesticated species, because their breeding and biology have not been reshaped by people over generations.",
    evidenceTypes: ["historical"], regionSummary: "South and Southeast Asia.",
    uncertaintyNote: "A clear example of taming and working use that is NOT the same as domestication.",
    relatedGuidePath: "/animal-domestication/domestication-vs-taming",
  },
];

export function recordsByStatus(status: DomesticationStatus): DomesticationRecord[] {
  return DOMESTICATION_RECORDS.filter((r) => r.status === status);
}

/** Returns the best internal link for a record (profile, then external section, else its guide). */
export function recordLink(r: DomesticationRecord): string {
  if (r.animalSlug) return `/animals/${r.animalSlug}`;
  if (r.externalPath) return r.externalPath;
  return r.relatedGuidePath;
}

export function duplicateDomesticationIds(): string[] {
  const seen = new Set<string>();
  const dups: string[] = [];
  for (const r of DOMESTICATION_RECORDS) {
    if (seen.has(r.id)) dups.push(r.id);
    seen.add(r.id);
  }
  return dups;
}

export const DOMESTICATION_RECORD_COUNT = DOMESTICATION_RECORDS.length;
