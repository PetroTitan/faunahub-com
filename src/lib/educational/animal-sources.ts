import type { SourceLink } from "@/lib/educational/types";

/**
 * Verified source URLs used by animal-profile, comparison, and pet-decision
 * pages. Each entry was reachable at the time of the most recent source-review
 * pass. ADW species accounts follow the
 * `https://animaldiversity.org/accounts/{Genus}_{species}/` pattern and are
 * peer-edited by the University of Michigan Museum of Zoology.
 */

export const SRC_ADW: SourceLink = {
  label: "Animal Diversity Web — University of Michigan Museum of Zoology",
  url: "https://animaldiversity.org/",
  type: "university",
  note: "Peer-edited reference accounts for animal species",
};

export const SRC_BRITANNICA_ANIMALS: SourceLink = {
  label: "Encyclopaedia Britannica — Animals reference",
  url: "https://www.britannica.com/",
  type: "reference",
  note: "Editor-reviewed encyclopedia overview entries",
};

export const SRC_SMITHSONIAN_ZOO: SourceLink = {
  label: "Smithsonian's National Zoo & Conservation Biology Institute — Animals",
  url: "https://nationalzoo.si.edu/animals",
  type: "wildlife",
  note: "Educational species pages from the Smithsonian Institution",
};

export const SRC_IUCN: SourceLink = {
  label: "IUCN Red List of Threatened Species",
  url: "https://www.iucnredlist.org/",
  type: "wildlife",
  note: "Authoritative source for current conservation status",
};

export const SRC_NOAA_FISHERIES: SourceLink = {
  label: "NOAA Fisheries — Marine Life",
  url: "https://www.fisheries.noaa.gov/",
  type: "government",
  note: "U.S. government science agency for marine species and habitats",
};

export const SRC_XERCES: SourceLink = {
  label: "Xerces Society for Invertebrate Conservation",
  url: "https://www.xerces.org/",
  type: "wildlife",
  note: "Science-based invertebrate conservation resources",
};

export const SRC_CORNELL_BIRDS: SourceLink = {
  label: "Cornell Lab of Ornithology — All About Birds",
  url: "https://www.allaboutbirds.org/",
  type: "university",
  note: "Cornell University ornithology reference for bird species",
};

export const SRC_AUDUBON: SourceLink = {
  label: "National Audubon Society — Bird Guide",
  url: "https://www.audubon.org/",
  type: "wildlife",
  note: "Bird identification and conservation reference",
};

/** Per-species ADW account helper. */
function adw(species: string, label: string, note?: string): SourceLink {
  return {
    label: `Animal Diversity Web — ${label}`,
    url: `https://animaldiversity.org/accounts/${species}/`,
    type: "university",
    note: note ?? "University of Michigan species account",
  };
}

/** Per-species Britannica helper. */
function brit(slug: string, label: string): SourceLink {
  return {
    label: `Britannica — ${label}`,
    url: `https://www.britannica.com/animal/${slug}`,
    type: "reference",
    note: "Editor-reviewed encyclopedia entry",
  };
}

// Verified species-level sources for priority animals.
// These URLs were each fetched and confirmed during source review.
export const ANIMAL_SOURCES: Record<string, SourceLink[]> = {
  tiger: [
    adw("Panthera_tigris", "Panthera tigris (tiger)"),
    brit("tiger", "Tiger (Panthera tigris)"),
    SRC_IUCN,
  ],
  lion: [
    adw("Panthera_leo", "Panthera leo (lion)"),
    brit("lion", "Lion (Panthera leo)"),
    {
      label: "Smithsonian's National Zoo — Lion",
      url: "https://nationalzoo.si.edu/animals/lion",
      type: "wildlife",
      note: "Species page from the Smithsonian Institution",
    },
  ],
  elephant: [
    adw("Loxodonta_africana", "Loxodonta africana (African elephant)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  wolf: [
    adw("Canis_lupus", "Canis lupus (gray wolf)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  dolphin: [
    adw(
      "Tursiops_truncatus",
      "Tursiops truncatus (common bottlenose dolphin)"
    ),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  shark: [
    adw(
      "Carcharodon_carcharias",
      "Carcharodon carcharias (great white shark)"
    ),
    brit("shark", "Shark — order Selachii"),
    SRC_IUCN,
  ],
  penguin: [
    adw("Aptenodytes_forsteri", "Aptenodytes forsteri (emperor penguin)"),
    brit("penguin", "Penguin — order Sphenisciformes"),
    SRC_IUCN,
  ],
  eagle: [
    adw("Aquila_chrysaetos", "Aquila chrysaetos (golden eagle)"),
    brit("eagle-bird", "Eagle — family Accipitridae"),
    SRC_IUCN,
  ],
  leopard: [
    adw("Panthera_pardus", "Panthera pardus (leopard)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  jaguar: [
    adw("Panthera_onca", "Panthera onca (jaguar)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  cheetah: [
    adw("Acinonyx_jubatus", "Acinonyx jubatus (cheetah)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  gorilla: [
    adw("Gorilla_gorilla", "Gorilla gorilla (western gorilla)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  chimpanzee: [
    adw("Pan_troglodytes", "Pan troglodytes (chimpanzee)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  crocodile: [
    adw("Crocodylus_niloticus", "Crocodylus niloticus (Nile crocodile)"),
    brit("crocodile", "Crocodile — family Crocodylidae"),
    SRC_IUCN,
  ],
  alligator: [
    adw(
      "Alligator_mississippiensis",
      "Alligator mississippiensis (American alligator)"
    ),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  horse: [
    adw("Equus_caballus", "Equus caballus (domestic horse)"),
    brit("horse", "Horse (Equus caballus)"),
    {
      label: "AVMA — Equine Welfare",
      url: "https://www.avma.org/resources-tools/animal-health-welfare/equine-welfare",
      type: "veterinary",
      note: "Veterinary guidance on equine care",
    },
  ],
  rabbit: [
    adw("Oryctolagus_cuniculus", "Oryctolagus cuniculus (European rabbit)"),
    brit("rabbit", "Rabbit (family Leporidae)"),
    {
      label: "House Rabbit Society — Care",
      url: "https://rabbit.org/category/care/",
      type: "wildlife",
      note: "Educational guidance on rabbit welfare and care",
    },
  ],
  "guinea-pig": [
    adw("Cavia_porcellus", "Cavia porcellus (guinea pig)"),
    brit("guinea-pig", "Guinea pig (Cavia porcellus)"),
    {
      label: "AVMA — Pet Owner Resources",
      url: "https://www.avma.org/resources-tools/pet-owners/petcare",
      type: "veterinary",
      note: "American Veterinary Medical Association pet-care hub",
    },
  ],
  hamster: [
    adw(
      "Mesocricetus_auratus",
      "Mesocricetus auratus (golden / Syrian hamster)"
    ),
    brit("hamster", "Hamster — subfamily Cricetinae"),
    {
      label: "AVMA — Pet Owner Resources",
      url: "https://www.avma.org/resources-tools/pet-owners/petcare",
      type: "veterinary",
      note: "American Veterinary Medical Association pet-care hub",
    },
  ],
  parrot: [
    adw("Ara_macao", "Ara macao (scarlet macaw)"),
    brit("parrot", "Parrot — order Psittaciformes"),
    SRC_IUCN,
  ],
  falcon: [
    adw("Falco_peregrinus", "Falco peregrinus (peregrine falcon)"),
    brit("falcon", "Falcon — family Falconidae"),
    SRC_IUCN,
  ],
  deer: [
    adw(
      "Odocoileus_virginianus",
      "Odocoileus virginianus (white-tailed deer)"
    ),
    brit("deer", "Deer — family Cervidae"),
    SRC_IUCN,
  ],
  raccoon: [
    adw("Procyon_lotor", "Procyon lotor (common raccoon)"),
    brit("raccoon", "Raccoon (Procyon lotor)"),
    SRC_IUCN,
  ],
  otter: [
    adw("Lutra_lutra", "Lutra lutra (Eurasian otter)"),
    brit("otter", "Otter — subfamily Lutrinae"),
    SRC_IUCN,
  ],
  seal: [
    adw("Phoca_vitulina", "Phoca vitulina (harbor seal)"),
    brit("seal-mammal", "Seal — family Phocidae"),
    SRC_IUCN,
  ],
  whale: [
    adw(
      "Megaptera_novaeangliae",
      "Megaptera novaeangliae (humpback whale)"
    ),
    brit("whale", "Whale — infraorder Cetacea"),
    SRC_IUCN,
  ],
  octopus: [
    adw("Octopus_vulgaris", "Octopus vulgaris (common octopus)"),
    brit("octopus-mollusk", "Octopus — order Octopoda"),
    SRC_IUCN,
  ],
  snake: [
    adw("Pantherophis_guttatus", "Pantherophis guttatus (corn snake)"),
    brit("snake", "Snake — suborder Serpentes"),
    SRC_IUCN,
  ],
  turtle: [
    adw("Chelonia_mydas", "Chelonia mydas (green sea turtle)"),
    brit("turtle-reptile", "Turtle — order Testudines"),
    SRC_IUCN,
  ],
  frog: [
    adw(
      "Agalychnis_callidryas",
      "Agalychnis callidryas (red-eyed tree frog)"
    ),
    brit("frog", "Frog — order Anura"),
    SRC_IUCN,
  ],

  // ---------------------------------------------------------------------------
  // Animal Encyclopedia Expansion Batch 2. ADW species/group accounts below
  // were each confirmed reachable (HTTP 200) on 2026-06-12. Group-level pages
  // use the relevant higher taxon account rather than a single species.
  // ---------------------------------------------------------------------------
  cow: [
    adw("Bos_taurus", "Bos taurus (domestic cattle)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  goat: [
    adw("Capra_hircus", "Capra hircus (domestic goat)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  sheep: [
    adw("Ovis_aries", "Ovis aries (domestic sheep)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  pig: [
    adw("Sus_scrofa", "Sus scrofa (wild boar / domestic pig)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  duck: [
    adw("Anas_platyrhynchos", "Anas platyrhynchos (mallard)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  goose: [
    adw("Anser_anser", "Anser anser (greylag goose)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  moose: [
    adw("Alces_alces", "Alces alces (moose)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  lynx: [
    adw("Lynx_lynx", "Lynx lynx (Eurasian lynx)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  badger: [
    adw("Meles_meles", "Meles meles (European badger)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  beaver: [
    adw("Castor_canadensis", "Castor canadensis (North American beaver)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  hedgehog: [
    adw("Erinaceus_europaeus", "Erinaceus europaeus (European hedgehog)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  bat: [
    adw("Chiroptera", "Chiroptera (bats)", "University of Michigan order-level account"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  squid: [
    adw("Cephalopoda", "Cephalopoda (cephalopods, including squid)", "University of Michigan class-level account"),
    SRC_NOAA_FISHERIES,
    SRC_BRITANNICA_ANIMALS,
  ],
  crab: [
    adw("Brachyura", "Brachyura (true crabs)", "University of Michigan infraorder-level account"),
    SRC_NOAA_FISHERIES,
    SRC_BRITANNICA_ANIMALS,
  ],
  lobster: [
    adw("Homarus_americanus", "Homarus americanus (American lobster)"),
    {
      label: "NOAA Fisheries — American Lobster",
      url: "https://www.fisheries.noaa.gov/species/american-lobster",
      type: "government",
      note: "U.S. government species page for the American lobster",
    },
    SRC_BRITANNICA_ANIMALS,
  ],
  jellyfish: [
    adw("Scyphozoa", "Scyphozoa (true jellyfish)", "University of Michigan class-level account"),
    SRC_NOAA_FISHERIES,
    SRC_BRITANNICA_ANIMALS,
  ],
  "sea-turtle": [
    adw("Chelonia_mydas", "Chelonia mydas (green sea turtle)"),
    {
      label: "NOAA Fisheries — Green Sea Turtle",
      url: "https://www.fisheries.noaa.gov/species/green-sea-turtle",
      type: "government",
      note: "U.S. government species page for the green sea turtle",
    },
    SRC_IUCN,
  ],
  starfish: [
    adw("Asteroidea", "Asteroidea (sea stars)", "University of Michigan class-level account"),
    SRC_NOAA_FISHERIES,
    SRC_BRITANNICA_ANIMALS,
  ],
  bee: [
    adw("Apis_mellifera", "Apis mellifera (western honey bee)"),
    SRC_XERCES,
    SRC_BRITANNICA_ANIMALS,
  ],
  butterfly: [
    adw("Danaus_plexippus", "Danaus plexippus (monarch butterfly)"),
    SRC_XERCES,
    SRC_BRITANNICA_ANIMALS,
  ],
  ant: [
    adw("Formicidae", "Formicidae (ants)", "University of Michigan family-level account"),
    SRC_BRITANNICA_ANIMALS,
  ],
  spider: [
    adw("Araneae", "Araneae (spiders)", "University of Michigan order-level account"),
    SRC_XERCES,
    SRC_BRITANNICA_ANIMALS,
  ],
  dragonfly: [
    adw("Anisoptera", "Anisoptera (dragonflies)", "University of Michigan infraorder-level account"),
    SRC_XERCES,
    SRC_BRITANNICA_ANIMALS,
  ],
  ladybug: [
    adw("Coccinellidae", "Coccinellidae (lady beetles)", "University of Michigan family-level account"),
    SRC_XERCES,
    SRC_BRITANNICA_ANIMALS,
  ],
  "praying-mantis": [
    adw("Mantodea", "Mantodea (mantises)", "University of Michigan order-level account"),
    SRC_BRITANNICA_ANIMALS,
  ],

  // ---------------------------------------------------------------------------
  // Aquarium & Fish Encyclopedia Cluster. ADW species/group accounts below were
  // each confirmed reachable (HTTP 200) on 2026-06-12. Group-level fish pages
  // use the relevant higher taxon account rather than a single species.
  // ---------------------------------------------------------------------------
  "betta-fish": [
    adw("Betta_splendens", "Betta splendens (Siamese fighting fish)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  goldfish: [
    adw("Carassius_auratus", "Carassius auratus (goldfish)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  guppy: [
    adw("Poecilia_reticulata", "Poecilia reticulata (guppy)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  angelfish: [
    adw("Pterophyllum_scalare", "Pterophyllum scalare (freshwater angelfish)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  tetra: [
    adw("Paracheirodon_innesi", "Paracheirodon innesi (neon tetra)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  koi: [
    adw("Cyprinus_carpio", "Cyprinus carpio (common carp / koi)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  carp: [
    adw("Cyprinus_carpio", "Cyprinus carpio (common carp)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  catfish: [
    adw("Ictalurus_punctatus", "Ictalurus punctatus (channel catfish)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  clownfish: [
    adw("Amphiprion_ocellaris", "Amphiprion ocellaris (clown anemonefish)"),
    SRC_BRITANNICA_ANIMALS,
  ],
  salmon: [
    adw("Oncorhynchus_nerka", "Oncorhynchus nerka (sockeye salmon)"),
    {
      label: "NOAA Fisheries — Sockeye Salmon",
      url: "https://www.fisheries.noaa.gov/species/sockeye-salmon",
      type: "government",
      note: "U.S. government species page for sockeye salmon",
    },
    SRC_IUCN,
  ],
  tuna: [
    adw("Thunnus_thynnus", "Thunnus thynnus (Atlantic bluefin tuna)"),
    {
      label: "NOAA Fisheries — Pacific Bluefin Tuna",
      url: "https://www.fisheries.noaa.gov/species/pacific-bluefin-tuna",
      type: "government",
      note: "U.S. government species page for bluefin tuna",
    },
    SRC_IUCN,
  ],
  seahorse: [
    adw("Hippocampus_erectus", "Hippocampus erectus (lined seahorse)"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  ray: [
    adw("Dasyatis", "Dasyatis (stingrays)", "University of Michigan genus-level account"),
    SRC_NOAA_FISHERIES,
    SRC_BRITANNICA_ANIMALS,
  ],
  eel: [
    adw("Anguilliformes", "Anguilliformes (true eels)", "University of Michigan order-level account"),
    SRC_NOAA_FISHERIES,
    SRC_BRITANNICA_ANIMALS,
  ],
  pufferfish: [
    adw("Tetraodontidae", "Tetraodontidae (pufferfish)", "University of Michigan family-level account"),
    SRC_NOAA_FISHERIES,
    SRC_BRITANNICA_ANIMALS,
  ],

  // ---------------------------------------------------------------------------
  // Birds Expansion Cluster. ADW species accounts below were each confirmed
  // reachable (HTTP 200) on 2026-06-12. Group-level bird pages name a
  // reference species and use cautious, varies-by-species language.
  // ---------------------------------------------------------------------------
  robin: [
    adw("Erithacus_rubecula", "Erithacus rubecula (European robin)"),
    SRC_CORNELL_BIRDS,
    SRC_BRITANNICA_ANIMALS,
  ],
  sparrow: [
    adw("Passer_domesticus", "Passer domesticus (house sparrow)"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  crow: [
    adw("Corvus_brachyrhynchos", "Corvus brachyrhynchos (American crow)"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  raven: [
    adw("Corvus_corax", "Corvus corax (common raven)"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  pigeon: [
    adw("Columba_livia", "Columba livia (rock dove / pigeon)"),
    SRC_CORNELL_BIRDS,
    SRC_BRITANNICA_ANIMALS,
  ],
  swan: [
    adw("Cygnus_olor", "Cygnus olor (mute swan)"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  flamingo: [
    adw("Phoenicopterus_roseus", "Phoenicopterus roseus (greater flamingo)"),
    SRC_AUDUBON,
    SRC_IUCN,
  ],
  peacock: [
    adw("Pavo_cristatus", "Pavo cristatus (Indian peafowl)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  toucan: [
    adw("Ramphastos_toco", "Ramphastos toco (toco toucan)"),
    SRC_AUDUBON,
    SRC_IUCN,
  ],
  hummingbird: [
    adw("Calypte_anna", "Calypte anna (Anna's hummingbird)"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  woodpecker: [
    adw("Dendrocopos_major", "Dendrocopos major (great spotted woodpecker)"),
    SRC_CORNELL_BIRDS,
    SRC_BRITANNICA_ANIMALS,
  ],
  hawk: [
    adw("Buteo_jamaicensis", "Buteo jamaicensis (red-tailed hawk)"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  vulture: [
    adw("Cathartes_aura", "Cathartes aura (turkey vulture)"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  pelican: [
    adw("Pelecanus_occidentalis", "Pelecanus occidentalis (brown pelican)"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  stork: [
    adw("Ciconia_ciconia", "Ciconia ciconia (white stork)"),
    SRC_AUDUBON,
    SRC_IUCN,
  ],

  // ---------------------------------------------------------------------------
  // Reptiles & Amphibians + Mammals Batch 3. ADW species accounts below were
  // each confirmed reachable (HTTP 200) on 2026-06-12. Group-level pages name a
  // reference species and use cautious, varies-by-species conservation wording.
  // ---------------------------------------------------------------------------
  chameleon: [
    adw("Furcifer_pardalis", "Furcifer pardalis (panther chameleon)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  iguana: [
    adw("Iguana_iguana", "Iguana iguana (green iguana)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  "komodo-dragon": [
    adw("Varanus_komodoensis", "Varanus komodoensis (Komodo dragon)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  gecko: [
    adw("Eublepharis_macularius", "Eublepharis macularius (leopard gecko)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  newt: [
    adw("Lissotriton_vulgaris", "Lissotriton vulgaris (smooth newt)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  salamander: [
    adw("Salamandra_salamandra", "Salamandra salamandra (fire salamander)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  toad: [
    adw("Bufo_bufo", "Bufo bufo (common toad)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  caiman: [
    adw("Caiman_crocodilus", "Caiman crocodilus (spectacled caiman)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  "monitor-lizard": [
    adw("Varanus_niloticus", "Varanus niloticus (Nile monitor)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  anaconda: [
    adw("Eunectes_murinus", "Eunectes murinus (green anaconda)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  "red-panda": [
    adw("Ailurus_fulgens", "Ailurus fulgens (red panda)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  sloth: [
    adw("Bradypus_variegatus", "Bradypus variegatus (brown-throated sloth)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  armadillo: [
    adw("Dasypus_novemcinctus", "Dasypus novemcinctus (nine-banded armadillo)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  porcupine: [
    adw("Erethizon_dorsatum", "Erethizon dorsatum (North American porcupine)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  meerkat: [
    adw("Suricata_suricatta", "Suricata suricatta (meerkat)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  wombat: [
    adw("Vombatus_ursinus", "Vombatus ursinus (common wombat)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  platypus: [
    adw("Ornithorhynchus_anatinus", "Ornithorhynchus anatinus (platypus)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  lemur: [
    adw("Lemur_catta", "Lemur catta (ring-tailed lemur)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  tapir: [
    adw("Tapirus_terrestris", "Tapirus terrestris (South American tapir)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  hyena: [
    adw("Crocuta_crocuta", "Crocuta crocuta (spotted hyena)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
};

/**
 * Sources used on cross-species comparison pages. We reuse the species-level
 * accounts so the same authority backs both the profile page and the
 * comparison page.
 */
export const COMPARISON_SOURCES: Record<string, SourceLink[]> = {
  "lion-vs-tiger": [
    adw("Panthera_leo", "Panthera leo (lion)"),
    adw("Panthera_tigris", "Panthera tigris (tiger)"),
    SRC_IUCN,
  ],
  "leopard-vs-jaguar": [
    adw("Panthera_pardus", "Panthera pardus (leopard)"),
    adw("Panthera_onca", "Panthera onca (jaguar)"),
    SRC_IUCN,
  ],
  "cheetah-vs-leopard": [
    adw("Acinonyx_jubatus", "Acinonyx jubatus (cheetah)"),
    adw("Panthera_pardus", "Panthera pardus (leopard)"),
    SRC_IUCN,
  ],
  "alligator-vs-crocodile": [
    adw(
      "Alligator_mississippiensis",
      "Alligator mississippiensis (American alligator)"
    ),
    adw("Crocodylus_niloticus", "Crocodylus niloticus (Nile crocodile)"),
    brit("crocodile", "Crocodile — family Crocodylidae"),
  ],
  "wolf-vs-dog": [
    adw("Canis_lupus", "Canis lupus (gray wolf)"),
    {
      label: "AVMA — Pet Owner Resources",
      url: "https://www.avma.org/resources-tools/pet-owners/petcare",
      type: "veterinary",
      note: "American Veterinary Medical Association pet-care hub",
    },
    SRC_BRITANNICA_ANIMALS,
  ],
  "falcon-vs-eagle": [
    adw("Aquila_chrysaetos", "Aquila chrysaetos (golden eagle)"),
    brit("eagle-bird", "Eagle — family Accipitridae"),
    SRC_IUCN,
  ],
  "rabbit-vs-guinea-pig": [
    {
      label: "AVMA — Pet Owner Resources",
      url: "https://www.avma.org/resources-tools/pet-owners/petcare",
      type: "veterinary",
      note: "American Veterinary Medical Association pet-care hub",
    },
    {
      label: "ASPCA — Pet Care",
      url: "https://www.aspca.org/pet-care",
      type: "veterinary",
      note: "Responsible pet-ownership guidance",
    },
  ],
};

// Pet-decision pages reuse a small handful of authoritative pet-care sources.
export const AKC_BREEDS: SourceLink = {
  label: "American Kennel Club — Dog Breeds",
  url: "https://www.akc.org/dog-breeds/",
  type: "breed-organization",
  note: "AKC's official breed directory with breed-group background",
};

export const AVMA_PET_CARE: SourceLink = {
  label: "AVMA — Pet Owner Resources",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare",
  type: "veterinary",
  note: "American Veterinary Medical Association pet-care hub",
};

export const ASPCA_PET_CARE: SourceLink = {
  label: "ASPCA — Pet Care",
  url: "https://www.aspca.org/pet-care",
  type: "veterinary",
  note: "Animal-welfare guidance on responsible pet ownership",
};

export const CORNELL_FELINE: SourceLink = {
  label:
    "Cornell Feline Health Center — Cornell University College of Veterinary Medicine",
  url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center",
  type: "veterinary",
  note: "Feline-specific veterinary research and education",
};

export const DECISION_SOURCES_DOG: SourceLink[] = [
  AKC_BREEDS,
  AVMA_PET_CARE,
  ASPCA_PET_CARE,
];

export const DECISION_SOURCES_CAT: SourceLink[] = [
  CORNELL_FELINE,
  AVMA_PET_CARE,
  ASPCA_PET_CARE,
];

export const DECISION_SOURCES_GUIDE: SourceLink[] = [
  AVMA_PET_CARE,
  ASPCA_PET_CARE,
];
