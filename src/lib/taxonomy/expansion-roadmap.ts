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
      "Delivered: dedicated, source-backed profiles for deep-sea animals — vampire squid, gulper eel, barreleye, yeti crab, snailfish, hatchetfish, black dragonfish, glass sponge, deep-sea coral, and the hydrothermal-vent tube worm — now link from the ocean depth pages.",
    priority: "high",
    exampleSpecies: ["vampire-squid","gulper-eel","barreleye-fish","yeti-crab","snailfish","hatchetfish","black-dragonfish","glass-sponge"],
    requiredSourceTypes: ["NOAA Ocean Exploration","MBARI","WoRMS","peer-reviewed deep-sea research"],
    imageDifficulty: "hard",
    riskNotes:
      "Licensed images of deep-sea animals are scarce; images here were each license-verified (Public Domain / CC0 / CC BY / CC BY-SA) via Wikimedia Commons, favouring NOAA, Smithsonian, and museum sources.",
    shouldCreatePages: false,
    status: "complete",
  },
  {
    slug: "invertebrates-batch-1",
    title: "Invertebrates Expansion — Batch 1",
    purpose: "Delivered: representative profiles across underrepresented invertebrate groups — arachnids (tick, mite), annelids (leech), and bivalve molluscs (clam, oyster, mussel) — joining the existing scorpion, tarantula, centipede, millipede, earthworm, sea cucumber, and sea urchin profiles.",
    priority: "high",
    exampleSpecies: ["tick","mite","leech","clam","oyster","mussel","scorpion","earthworm"],
    requiredSourceTypes: ["Animal Diversity Web","Catalogue of Life","WoRMS","museum/university zoology"],
    imageDifficulty: "moderate",
    riskNotes: "Safety-sensitive groups (tick, mite, leech) drafted with calm, source-backed framing and no medical/first-aid instructions; images each license-verified (CC BY / CC BY-SA, named authors) via Wikimedia Commons.",
    shouldCreatePages: false,
    status: "complete",
  },
  {
    slug: "mollusks-shellfish",
    title: "Mollusks & Shellfish Batch",
    purpose: "Delivered: representative coverage across the mollusk phylum — gastropods (abalone, sea slug, cone snail, limpet, whelk, cowrie), bivalves (scallop, giant clam, shipworm), the chiton (Polyplacophora), and the blue-ringed octopus — joining existing octopus, squid, cuttlefish, nautilus, clam, oyster, mussel, nudibranch, snail, and slug profiles.",
    priority: "high",
    exampleSpecies: ["abalone","scallop","sea-slug","cone-snail","limpet","whelk","chiton","cowrie","shipworm","blue-ringed-octopus"],
    requiredSourceTypes: ["WoRMS","Catalogue of Life","Animal Diversity Web","NOAA Fisheries"],
    imageDifficulty: "moderate",
    riskNotes: "Venom species (cone snail, blue-ringed octopus) and edible shellfish were drafted with calm, source-backed framing — no medical, seafood-safety, or harvesting how-to; the shipworm is clarified as a bivalve, not a worm; images each license-verified (PD / CC BY / CC BY-SA, named authors).",
    shouldCreatePages: false,
    status: "complete",
  },
  { slug: "africa-fauna", title: "African Fauna Batch", purpose: "Delivered: 10 new African profiles (African buffalo, marabou stork, African grey parrot, Nile crocodile, African rock python, puff adder, Nile perch, tilapia, dung beetle, tsetse fly) plus integration of existing African animals into the /fauna/continents/africa layer.", priority: "medium", exampleSpecies: ["african-buffalo","marabou-stork","african-grey-parrot","nile-crocodile","puff-adder","nile-perch","dung-beetle","tsetse-fly"], requiredSourceTypes: ["Animal Diversity Web","IUCN Red List","Britannica"], imageDifficulty: "moderate", riskNotes: "Dangerous species framed calmly (no first-aid/survival how-to); range framed cautiously with native vs introduced distinguished; African grey parrot pet-trade framed as a conservation concern; images license-verified (PD/CC0/CC BY/CC BY-SA, named authors), captive/illustration images captioned honestly.", shouldCreatePages: false, status: "complete" },
  { slug: "asia-fauna", title: "Asian Fauna Batch", purpose: "Delivered: 13 new Asian profiles (snow leopard, Asian black bear, musk deer, sarus crane, mandarin duck, king cobra, reticulated python, Asian giant salamander, Asian arowana, mahseer, Mekong giant catfish, Asian giant hornet, silkworm) plus integration of many existing Asian animals into the /fauna/continents/asia layer.", priority: "medium", exampleSpecies: ["snow-leopard","king-cobra","reticulated-python","sarus-crane","mekong-giant-catfish","arowana","asian-giant-hornet","silkworm"], requiredSourceTypes: ["Animal Diversity Web","IUCN Red List","Britannica"], imageDifficulty: "moderate", riskNotes: "Dangerous species framed calmly (no first-aid/survival how-to); range framed cautiously (precise for mountain/island/freshwater; native vs introduced); CITES/threatened trade (arowana, Mekong giant catfish, musk deer) framed as conservation concern; captive/aquarium/specimen/illustration images captioned honestly.", shouldCreatePages: false, status: "complete" },
  { slug: "europe-fauna", title: "European Fauna Batch", purpose: "Delivered: 20 new European profiles (European bison, Eurasian lynx, European badger, red deer, roe deer, European hare, European hedgehog, European otter, Alpine ibex, white stork, barn owl, golden eagle, western capercaillie, European adder, grass snake, European tree frog, Atlantic salmon, European eel, brown trout, stag beetle) plus integration of existing European animals (incl. pine marten, fire salamander, wild boar) into the /fauna/continents/europe layer.", priority: "medium", exampleSpecies: ["european-bison","eurasian-lynx","alpine-ibex","white-stork","golden-eagle","european-eel","atlantic-salmon","stag-beetle"], requiredSourceTypes: ["Animal Diversity Web","IUCN Red List","Britannica"], imageDifficulty: "easy", riskNotes: "Reintroduction history framed honestly (European bison, Alpine ibex — restored from remnants/captive stock); range framed cautiously (native vs introduced vs migratory; brown trout introduced elsewhere; white stork winters in Africa; barn owl/golden eagle cosmopolitan); European adder framed calmly (venomous but bites uncommon — no first-aid/handling how-to, route to medical/wildlife authorities); European eel Critically Endangered with uncertain oceanic spawning; captive wildlife-park (otter) and market (Atlantic salmon) images captioned honestly. eurasian-jay deferred; european-honeybee/red-wood-ant covered via existing bee/ant profiles.", shouldCreatePages: false, status: "complete" },
  { slug: "north-america-fauna", title: "North American Fauna Batch", purpose: "Deepen North American land-fauna coverage.", priority: "medium", exampleSpecies: ["opossum","chipmunk","bighorn-sheep","mule-deer","muskrat","gopher"], requiredSourceTypes: ["Animal Diversity Web","USFWS","NPS"], imageDifficulty: "easy", riskNotes: "Government public-domain images often available.", shouldCreatePages: false, status: "planned" },
  { slug: "south-america-fauna", title: "South American Fauna Batch", purpose: "Deepen South American land-fauna coverage.", priority: "medium", exampleSpecies: ["llama","anteater","coati","agouti","spectacled-bear","maned-wolf"], requiredSourceTypes: ["Animal Diversity Web","IUCN Red List"], imageDifficulty: "moderate", riskNotes: "Verify native range carefully.", shouldCreatePages: false, status: "planned" },
  { slug: "oceania-fauna", title: "Oceania Fauna Batch", purpose: "Deepen Australian and Pacific fauna coverage.", priority: "medium", exampleSpecies: ["echidna","tasmanian-devil","kookaburra","cassowary","quokka","numbat"], requiredSourceTypes: ["Animal Diversity Web","Australian government wildlife resources"], imageDifficulty: "moderate", riskNotes: "Distinguish mainland vs island endemics.", shouldCreatePages: false, status: "planned" },
  { slug: "polar-fauna", title: "Polar Fauna Batch", purpose: "Cover Arctic and Antarctic-associated animals.", priority: "medium", exampleSpecies: ["polar-bear","walrus","arctic-fox","reindeer","snowy-owl","albatross"], requiredSourceTypes: ["Animal Diversity Web","NOAA","national polar institutes"], imageDifficulty: "moderate", riskNotes: "Coordinate with ocean/coastal layers.", shouldCreatePages: false, status: "planned" },
  { slug: "red-list-detailed", title: "Red List Detailed Profiles Batch", purpose: "Add more detailed endangered species profiles with licensed images.", priority: "high", exampleSpecies: ["amur-leopard","mountain-gorilla","sumatran-tiger","vaquita","saola","kakapo"], requiredSourceTypes: ["IUCN Red List","Animal Diversity Web","NOAA/USFWS"], imageDifficulty: "moderate", riskNotes: "Extends the existing /endangered-animals cluster; reuse its compliance posture.", shouldCreatePages: false, status: "ready-for-research" },
  { slug: "domestic-farm", title: "Domestic & Farm Animals Batch", purpose: "Cover common domestic and farm animals, clearly labelled as domestic.", priority: "medium", exampleSpecies: ["chicken","turkey","donkey","alpaca","water-buffalo","domestic-duck"], requiredSourceTypes: ["Animal Diversity Web","ITIS","agricultural extension resources"], imageDifficulty: "easy", riskNotes: "Always label as domestic/livestock; do not present as wild fauna.", shouldCreatePages: false, status: "planned" },
  { slug: "urban-wildlife", title: "Urban Wildlife Batch", purpose: "Cover wild animals that thrive around people.", priority: "low", exampleSpecies: ["rat","squirrel","opossum","seagull","starling","house-mouse"], requiredSourceTypes: ["Animal Diversity Web","municipal wildlife resources"], imageDifficulty: "easy", riskNotes: "Avoid pest-control framing; keep educational.", shouldCreatePages: false, status: "planned" },
  { slug: "pollinators", title: "Pollinators Batch", purpose: "Cover key pollinating animals across groups.", priority: "medium", exampleSpecies: ["bumblebee","hoverfly","moth","beetle-pollinator","nectar-bat","sunbird"], requiredSourceTypes: ["Xerces Society","Animal Diversity Web","university entomology"], imageDifficulty: "easy", riskNotes: "Cross-cuts insects, birds, and bats.", shouldCreatePages: false, status: "planned" },
  { slug: "venomous-educational", title: "Venomous Animals Educational Batch", purpose: "Cover venomous animals with a careful, safety-aware educational frame.", priority: "low", exampleSpecies: ["scorpion","box-jellyfish","cone-snail","blue-ringed-octopus","king-cobra","stonefish"], requiredSourceTypes: ["Animal Diversity Web","medical/toxinology institutions","museum resources"], imageDifficulty: "moderate", riskNotes: "Educational only — no first-aid/medical instructions; clear safety framing.", shouldCreatePages: false, status: "planned" },
];

export function batchesByStatus(status: FutureBatch["status"]): FutureBatch[] {
  return FUTURE_BATCHES.filter((b) => b.status === status);
}
