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

export const SRC_AMPHIBIAWEB: SourceLink = {
  label: "AmphibiaWeb — University of California, Berkeley",
  url: "https://amphibiaweb.org/",
  type: "university",
  note: "Authoritative database of amphibian biology and conservation",
};

export const SRC_WORMS: SourceLink = {
  label: "WoRMS — World Register of Marine Species",
  url: "https://www.marinespecies.org/",
  type: "reference",
  note: "Authoritative register of marine species names",
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
  // Land fauna batch 1 (2026-06-19)
  hippopotamus: [
    adw("Hippopotamus_amphibius", "Hippopotamus amphibius (hippopotamus)"),
    brit("hippopotamus", "Hippopotamus"),
    SRC_IUCN,
  ],
  rhinoceros: [
    adw("Ceratotherium_simum", "Ceratotherium simum (white rhinoceros)"),
    brit("rhinoceros", "Rhinoceros"),
    SRC_IUCN,
  ],
  orangutan: [
    adw("Pongo_pygmaeus", "Pongo pygmaeus (Bornean orangutan)"),
    brit("orangutan", "Orangutan"),
    SRC_IUCN,
  ],
  bison: [
    adw("Bison_bison", "Bison bison (American bison)"),
    brit("American-bison", "American bison"),
    SRC_IUCN,
  ],
  camel: [
    adw("Camelus_dromedarius", "Camelus dromedarius (dromedary camel)"),
    brit("camel", "Camel"),
    SRC_SMITHSONIAN_ZOO,
  ],
  squirrel: [
    adw("Sciurus_vulgaris", "Sciurus vulgaris (Eurasian red squirrel)"),
    brit("squirrel", "Squirrel"),
    SRC_IUCN,
  ],
  // Land fauna batch 2 (2026-06-19)
  warthog: [
    adw("Phacochoerus_africanus", "Phacochoerus africanus (common warthog)"),
    brit("warthog", "Warthog"),
    SRC_IUCN,
  ],
  wildebeest: [
    adw("Connochaetes_taurinus", "Connochaetes taurinus (blue wildebeest)"),
    brit("wildebeest", "Wildebeest"),
    SRC_IUCN,
  ],
  capybara: [
    adw("Hydrochoerus_hydrochaeris", "Hydrochoerus hydrochaeris (capybara)"),
    brit("capybara", "Capybara"),
    SRC_IUCN,
  ],
  gibbon: [
    adw("Hylobates_lar", "Hylobates lar (lar gibbon)"),
    brit("gibbon", "Gibbon"),
    SRC_IUCN,
  ],
  pangolin: [
    adw("Manis_javanica", "Manis javanica (Sunda pangolin)"),
    brit("pangolin", "Pangolin"),
    SRC_IUCN,
  ],
  pronghorn: [
    adw("Antilocapra_americana", "Antilocapra americana (pronghorn)"),
    brit("pronghorn", "Pronghorn"),
    SRC_IUCN,
  ],
  // Land fauna batch 3 (2026-06-19)
  okapi: [
    adw("Okapia_johnstoni", "Okapia johnstoni (okapi)"),
    brit("okapi", "Okapi"),
    SRC_IUCN,
  ],
  "wild-boar": [
    adw("Sus_scrofa", "Sus scrofa (wild boar)"),
    brit("wild-boar", "Wild boar"),
    SRC_IUCN,
  ],
  elk: [
    adw("Cervus_canadensis", "Cervus canadensis (elk / wapiti)"),
    brit("elk", "Elk (wapiti)"),
    SRC_IUCN,
  ],
  "sun-bear": [
    adw("Helarctos_malayanus", "Helarctos malayanus (sun bear)"),
    brit("sun-bear", "Sun bear"),
    SRC_IUCN,
  ],
  aardvark: [
    adw("Orycteropus_afer", "Orycteropus afer (aardvark)"),
    brit("aardvark", "Aardvark"),
    SRC_IUCN,
  ],
  echidna: [
    adw("Tachyglossus_aculeatus", "Tachyglossus aculeatus (short-beaked echidna)"),
    brit("echidna", "Echidna"),
    SRC_IUCN,
  ],
  // Land fauna batch 4 (2026-06-19)
  wolverine: [
    adw("Gulo_gulo", "Gulo gulo (wolverine)"),
    brit("wolverine", "Wolverine"),
    SRC_IUCN,
  ],
  bobcat: [
    adw("Lynx_rufus", "Lynx rufus (bobcat)"),
    brit("bobcat", "Bobcat"),
    SRC_IUCN,
  ],
  coyote: [
    adw("Canis_latrans", "Canis latrans (coyote)"),
    brit("coyote", "Coyote"),
    SRC_IUCN,
  ],
  mongoose: [
    adw("Mungos_mungo", "Mungos mungo (banded mongoose)"),
    brit("mongoose", "Mongoose"),
    SRC_IUCN,
  ],
  skunk: [
    adw("Mephitis_mephitis", "Mephitis mephitis (striped skunk)"),
    brit("skunk", "Skunk"),
    SRC_IUCN,
  ],
  weasel: [
    adw("Mustela_nivalis", "Mustela nivalis (least weasel)"),
    brit("weasel", "Weasel"),
    SRC_IUCN,
  ],
  // Land fauna batch 5 — reptiles (2026-06-19)
  tortoise: [
    brit("tortoise", "Tortoise"),
    SRC_ADW,
    SRC_IUCN,
  ],
  cobra: [
    adw("Naja_naja", "Naja naja (Indian cobra)"),
    brit("cobra", "Cobra"),
    SRC_IUCN,
  ],
  python: [
    brit("python", "Python"),
    SRC_ADW,
    SRC_IUCN,
  ],
  rattlesnake: [
    brit("rattlesnake", "Rattlesnake"),
    SRC_ADW,
    SRC_IUCN,
  ],
  "gila-monster": [
    adw("Heloderma_suspectum", "Heloderma suspectum (Gila monster)"),
    brit("Gila-monster", "Gila monster"),
    SRC_IUCN,
  ],
  tuatara: [
    adw("Sphenodon_punctatus", "Sphenodon punctatus (tuatara)"),
    brit("tuatara", "Tuatara"),
    SRC_IUCN,
  ],
  // Land fauna batch 6 — birds (2026-06-19)
  ostrich: [
    adw("Struthio_camelus", "Struthio camelus (ostrich)"),
    brit("ostrich", "Ostrich"),
    SRC_IUCN,
  ],
  emu: [
    adw("Dromaius_novaehollandiae", "Dromaius novaehollandiae (emu)"),
    brit("emu", "Emu"),
    SRC_IUCN,
  ],
  cassowary: [
    adw("Casuarius_casuarius", "Casuarius casuarius (southern cassowary)"),
    brit("cassowary", "Cassowary"),
    SRC_IUCN,
  ],
  kiwi: [
    brit("kiwi", "Kiwi"),
    SRC_ADW,
    SRC_IUCN,
  ],
  magpie: [
    brit("magpie", "Magpie"),
    SRC_ADW,
    SRC_IUCN,
  ],
  cardinal: [
    SRC_CORNELL_BIRDS,
    SRC_AUDUBON,
    SRC_IUCN,
  ],
  // Land fauna batch 7 — birds + amphibians (2026-06-19)
  heron: [
    brit("heron", "Heron"),
    SRC_ADW,
    SRC_IUCN,
  ],
  kingfisher: [
    brit("kingfisher", "Kingfisher"),
    SRC_ADW,
    SRC_IUCN,
  ],
  kookaburra: [
    brit("kookaburra", "Kookaburra"),
    SRC_ADW,
    SRC_IUCN,
  ],
  "tree-frog": [
    SRC_AMPHIBIAWEB,
    SRC_ADW,
    SRC_IUCN,
  ],
  "poison-dart-frog": [
    SRC_AMPHIBIAWEB,
    SRC_ADW,
    SRC_IUCN,
  ],
  "fire-salamander": [
    SRC_AMPHIBIAWEB,
    SRC_ADW,
    SRC_IUCN,
  ],
  // Land fauna batch 8 — amphibians + reptiles + birds (2026-06-19)
  axolotl: [
    SRC_AMPHIBIAWEB,
    SRC_ADW,
    SRC_IUCN,
  ],
  bullfrog: [
    SRC_AMPHIBIAWEB,
    SRC_ADW,
    SRC_IUCN,
  ],
  boa: [
    adw("Boa_constrictor", "Boa constrictor (boa)"),
    brit("boa", "Boa"),
    SRC_IUCN,
  ],
  gharial: [
    adw("Gavialis_gangeticus", "Gavialis gangeticus (gharial)"),
    brit("gharial", "Gharial"),
    SRC_IUCN,
  ],
  hornbill: [
    brit("hornbill", "Hornbill"),
    SRC_ADW,
    SRC_IUCN,
  ],
  "bee-eater": [
    brit("bee-eater", "Bee eater"),
    SRC_ADW,
    SRC_IUCN,
  ],
  // Dolphin family (Delphinidae) batch (2026-06-19)
  orca: [
    adw("Orcinus_orca", "Orcinus orca (orca / killer whale)"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "common-dolphin": [
    adw("Delphinus_delphis", "Delphinus delphis (common dolphin)"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "spinner-dolphin": [
    adw("Stenella_longirostris", "Stenella longirostris (spinner dolphin)"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "pilot-whale": [
    adw("Globicephala_melas", "Globicephala melas (long-finned pilot whale)"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "rissos-dolphin": [
    adw("Grampus_griseus", "Grampus griseus (Risso's dolphin)"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "commersons-dolphin": [
    adw("Cephalorhynchus_commersonii", "Cephalorhynchus commersonii (Commerson's dolphin)"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  // Marine predators batch (2026-06-19)
  "great-white-shark": [
    adw("Carcharodon_carcharias", "Carcharodon carcharias (great white shark)"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "hammerhead-shark": [
    SRC_NOAA_FISHERIES,
    SRC_ADW,
    SRC_IUCN,
  ],
  barracuda: [
    adw("Sphyraena_barracuda", "Sphyraena barracuda (great barracuda)"),
    brit("barracuda", "Barracuda"),
    SRC_IUCN,
  ],
  grouper: [
    brit("grouper", "Grouper"),
    SRC_ADW,
    SRC_IUCN,
  ],
  "moray-eel": [
    brit("moray", "Moray"),
    SRC_ADW,
    SRC_IUCN,
  ],
  lionfish: [
    adw("Pterois_volitans", "Pterois volitans (red lionfish)"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  // Deep-sea batch (2026-06-19)
  "giant-isopod": [
    SRC_WORMS,
    SRC_ADW,
    SRC_IUCN,
  ],
  "dumbo-octopus": [
    SRC_WORMS,
    SRC_ADW,
    SRC_IUCN,
  ],
  coelacanth: [
    adw("Latimeria_chalumnae", "Latimeria chalumnae (coelacanth)"),
    brit("coelacanth", "Coelacanth"),
    SRC_IUCN,
  ],
  "giant-squid": [
    SRC_WORMS,
    SRC_ADW,
    SRC_IUCN,
  ],
  anglerfish: [
    SRC_WORMS,
    SRC_ADW,
    SRC_IUCN,
  ],
  "frilled-shark": [
    SRC_WORMS,
    SRC_ADW,
    SRC_IUCN,
  ],
  // Invertebrates batch (2026-06-19)
  beetle: [
    SRC_ADW,
    brit("beetle", "Beetle"),
    SRC_IUCN,
  ],
  scorpion: [
    SRC_ADW,
    brit("scorpion", "Scorpion"),
    SRC_IUCN,
  ],
  nautilus: [
    SRC_WORMS,
    brit("nautilus", "Nautilus"),
    SRC_IUCN,
  ],
  "sea-urchin": [
    SRC_WORMS,
    SRC_ADW,
    SRC_IUCN,
  ],
  coral: [
    SRC_WORMS,
    brit("coral", "Coral"),
    SRC_IUCN,
  ],
  earthworm: [
    SRC_ADW,
    brit("earthworm", "Earthworm"),
    SRC_IUCN,
  ],
  // Corals batch (2026-06-19)
  "brain-coral": [
    SRC_WORMS,
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "staghorn-coral": [
    SRC_WORMS,
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "elkhorn-coral": [
    SRC_WORMS,
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "sea-fan": [
    SRC_WORMS,
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "mushroom-coral": [
    SRC_WORMS,
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "sea-anemone": [
    SRC_WORMS,
    brit("sea-anemone", "Sea anemone"),
    SRC_IUCN,
  ],
  // Invertebrates batch 2 (2026-06-19)
  shrimp: [
    SRC_WORMS,
    SRC_ADW,
    SRC_IUCN,
  ],
  barnacle: [
    SRC_WORMS,
    SRC_ADW,
    SRC_IUCN,
  ],
  tarantula: [
    SRC_ADW,
    brit("tarantula", "Tarantula"),
    SRC_IUCN,
  ],
  centipede: [
    SRC_ADW,
    brit("centipede", "Centipede"),
    SRC_IUCN,
  ],
  cuttlefish: [
    SRC_WORMS,
    brit("cuttlefish", "Cuttlefish"),
    SRC_IUCN,
  ],
  nudibranch: [
    SRC_WORMS,
    SRC_ADW,
    SRC_IUCN,
  ],
  // Invertebrates batch 3 (2026-06-20)
  snail: [
    SRC_ADW,
    brit("snail", "Snail"),
    SRC_IUCN,
  ],
  slug: [
    SRC_ADW,
    brit("slug", "Slug"),
    SRC_IUCN,
  ],
  millipede: [
    SRC_ADW,
    brit("millipede", "Millipede"),
    SRC_IUCN,
  ],
  moth: [
    SRC_ADW,
    brit("moth", "Moth"),
    SRC_IUCN,
  ],
  grasshopper: [
    SRC_ADW,
    brit("grasshopper", "Grasshopper"),
    SRC_IUCN,
  ],
  krill: [
    SRC_WORMS,
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  // Fish batch (2026-06-20)
  cod: [
    SRC_NOAA_FISHERIES,
    SRC_WORMS,
    SRC_IUCN,
  ],
  mackerel: [
    SRC_NOAA_FISHERIES,
    SRC_WORMS,
    SRC_IUCN,
  ],
  piranha: [
    adw("Pygocentrus_nattereri", "Pygocentrus nattereri (red-bellied piranha)"),
    brit("piranha", "Piranha"),
    SRC_IUCN,
  ],
  parrotfish: [
    SRC_WORMS,
    brit("parrotfish", "Parrotfish"),
    SRC_IUCN,
  ],
  seadragon: [
    SRC_WORMS,
    SRC_ADW,
    SRC_IUCN,
  ],
  mudskipper: [
    SRC_WORMS,
    SRC_ADW,
    SRC_IUCN,
  ],
  // Mammals + birds batch (2026-06-20)
  walrus: [
    adw("Odobenus_rosmarus", "Odobenus rosmarus (walrus)"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  mole: [
    adw("Talpa_europaea", "Talpa europaea (European mole)"),
    brit("mole", "Mole"),
    SRC_IUCN,
  ],
  "pine-marten": [
    adw("Martes_martes", "Martes martes (European pine marten)"),
    brit("marten", "Marten"),
    SRC_IUCN,
  ],
  albatross: [
    brit("albatross", "Albatross"),
    SRC_ADW,
    SRC_IUCN,
  ],
  seagull: [
    brit("gull", "Gull"),
    SRC_AUDUBON,
    SRC_IUCN,
  ],
  roadrunner: [
    SRC_CORNELL_BIRDS,
    SRC_AUDUBON,
    SRC_IUCN,
  ],
  // Mammals + birds batch 2 (2026-06-20)
  civet: [
    adw("Civettictis_civetta", "Civettictis civetta (African civet)"),
    brit("civet", "Civet"),
    SRC_IUCN,
  ],
  genet: [
    adw("Genetta_genetta", "Genetta genetta (common genet)"),
    brit("genet", "Genet"),
    SRC_IUCN,
  ],
  stoat: [
    adw("Mustela_erminea", "Mustela erminea (stoat / ermine)"),
    brit("stoat", "Stoat"),
    SRC_IUCN,
  ],
  quetzal: [
    brit("quetzal", "Quetzal"),
    SRC_ADW,
    SRC_IUCN,
  ],
  hoopoe: [
    brit("hoopoe", "Hoopoe"),
    SRC_ADW,
    SRC_IUCN,
  ],
  sunbird: [
    brit("sunbird", "Sunbird"),
    SRC_ADW,
    SRC_IUCN,
  ],
  // Cross-class batch (2026-06-20)
  shrew: [
    adw("Sorex_araneus", "Sorex araneus (common shrew)"),
    brit("shrew", "Shrew"),
    SRC_IUCN,
  ],
  binturong: [
    adw("Arctictis_binturong", "Arctictis binturong (binturong)"),
    brit("binturong", "Binturong"),
    SRC_IUCN,
  ],
  swift: [
    brit("swift-bird", "Swift"),
    SRC_ADW,
    SRC_IUCN,
  ],
  "secretary-bird": [
    brit("secretary-bird", "Secretary bird"),
    SRC_ADW,
    SRC_IUCN,
  ],
  mamba: [
    adw("Dendroaspis_polylepis", "Dendroaspis polylepis (black mamba)"),
    brit("black-mamba", "Black mamba"),
    SRC_IUCN,
  ],
  skink: [
    brit("skink", "Skink"),
    SRC_ADW,
    SRC_IUCN,
  ],
  // Unusual mammals batch (2026-06-20)
  "tasmanian-devil": [
    adw("Sarcophilus_harrisii", "Sarcophilus harrisii (Tasmanian devil)"),
    brit("Tasmanian-devil", "Tasmanian devil"),
    SRC_IUCN,
  ],
  fossa: [
    adw("Cryptoprocta_ferox", "Cryptoprocta ferox (fossa)"),
    brit("fossa", "Fossa"),
    SRC_IUCN,
  ],
  numbat: [
    adw("Myrmecobius_fasciatus", "Myrmecobius fasciatus (numbat)"),
    brit("numbat", "Numbat"),
    SRC_IUCN,
  ],
  "mole-rat": [
    adw("Heterocephalus_glaber", "Heterocephalus glaber (naked mole-rat)"),
    brit("naked-mole-rat", "Naked mole rat"),
    SRC_IUCN,
  ],
  quoll: [
    adw("Dasyurus_maculatus", "Dasyurus maculatus (spotted-tailed quoll)"),
    brit("quoll", "Quoll"),
    SRC_IUCN,
  ],
  bilby: [
    adw("Macrotis_lagotis", "Macrotis lagotis (greater bilby)"),
    brit("bilby", "Bilby"),
    SRC_IUCN,
  ],
  // Mammals + birds batch 3 (2026-06-20)
  tenrec: [
    adw("Hemicentetes_semispinosus", "Hemicentetes semispinosus (lowland streaked tenrec)"),
    brit("tenrec", "Tenrec"),
    SRC_IUCN,
  ],
  bandicoot: [
    adw("Perameles_nasuta", "Perameles nasuta (long-nosed bandicoot)"),
    brit("bandicoot", "Bandicoot"),
    SRC_IUCN,
  ],
  "sugar-glider": [
    adw("Petaurus_breviceps", "Petaurus breviceps (sugar glider)"),
    brit("sugar-glider", "Sugar glider"),
    SRC_IUCN,
  ],
  quokka: [
    adw("Setonix_brachyurus", "Setonix brachyurus (quokka)"),
    brit("quokka", "Quokka"),
    SRC_IUCN,
  ],
  colugo: [
    adw("Galeopterus_variegatus", "Galeopterus variegatus (Sunda colugo)"),
    brit("colugo", "Colugo"),
    SRC_IUCN,
  ],
  weaver: [
    brit("weaver", "Weaver"),
    SRC_ADW,
    SRC_IUCN,
  ],
  oxpecker: [
    brit("oxpecker", "Oxpecker"),
    SRC_ADW,
    SRC_IUCN,
  ],
  nightjar: [
    brit("nightjar", "Nightjar"),
    SRC_ADW,
    SRC_IUCN,
  ],
  lyrebird: [
    brit("lyrebird", "Lyrebird"),
    SRC_ADW,
    SRC_IUCN,
  ],
  turaco: [
    brit("turaco", "Turaco"),
    SRC_ADW,
    SRC_IUCN,
  ],
  // Mammals + birds batch 4 (2026-06-20)
  "aye-aye": [
    adw("Daubentonia_madagascariensis", "Daubentonia madagascariensis (aye-aye)"),
    brit("aye-aye", "Aye-aye"),
    SRC_IUCN,
  ],
  sifaka: [
    adw("Propithecus_verreauxi", "Propithecus verreauxi (Verreaux's sifaka)"),
    brit("sifaka", "Sifaka"),
    SRC_IUCN,
  ],
  tarsier: [
    adw("Carlito_syrichta", "Carlito syrichta (Philippine tarsier)"),
    brit("tarsier", "Tarsier"),
    SRC_IUCN,
  ],
  "slow-loris": [
    adw("Nycticebus_coucang", "Nycticebus coucang (Sunda slow loris)"),
    brit("slow-loris", "Slow loris"),
    SRC_IUCN,
  ],
  springhare: [
    adw("Pedetes_capensis", "Pedetes capensis (springhare)"),
    brit("springhare", "Springhare"),
    SRC_IUCN,
  ],
  shoebill: [
    brit("shoebill", "Shoebill"),
    SRC_ADW,
    SRC_IUCN,
  ],
  frogmouth: [
    brit("frogmouth", "Frogmouth"),
    SRC_ADW,
    SRC_IUCN,
  ],
  potoo: [
    brit("potoo", "Potoo"),
    SRC_ADW,
    SRC_IUCN,
  ],
  hoatzin: [
    brit("hoatzin", "Hoatzin"),
    SRC_ADW,
    SRC_IUCN,
  ],
  jacana: [
    brit("jacana", "Jacana"),
    SRC_ADW,
    SRC_IUCN,
  ],
  // Mammals + birds batch 5 (2026-06-20)
  marmoset: [
    adw("Callithrix_jacchus", "Callithrix jacchus (common marmoset)"),
    brit("marmoset", "Marmoset"),
    SRC_IUCN,
  ],
  tamarin: [
    adw("Leontopithecus_rosalia", "Leontopithecus rosalia (golden lion tamarin)"),
    brit("tamarin", "Tamarin"),
    SRC_IUCN,
  ],
  galago: [
    adw("Galago_moholi", "Galago moholi (Mohol bushbaby)"),
    brit("galago", "Galago"),
    SRC_IUCN,
  ],
  indri: [
    adw("Indri_indri", "Indri indri (indri)"),
    brit("indri", "Indri"),
    SRC_IUCN,
  ],
  mandrill: [
    adw("Mandrillus_sphinx", "Mandrillus sphinx (mandrill)"),
    brit("mandrill", "Mandrill"),
    SRC_IUCN,
  ],
  motmot: [
    brit("motmot", "Motmot"),
    SRC_ADW,
    SRC_IUCN,
  ],
  sunbittern: [
    brit("sunbittern", "Sunbittern"),
    SRC_ADW,
    SRC_IUCN,
  ],
  kagu: [
    brit("kagu", "Kagu"),
    SRC_ADW,
    SRC_IUCN,
  ],
  jabiru: [
    brit("jabiru", "Jabiru"),
    SRC_ADW,
    SRC_IUCN,
  ],
  tropicbird: [
    brit("tropicbird", "Tropicbird"),
    SRC_ADW,
    SRC_IUCN,
  ],
  // Mammals + birds batch 6 (2026-06-20)
  "proboscis-monkey": [
    adw("Nasalis_larvatus", "Nasalis larvatus (proboscis monkey)"),
    brit("proboscis-monkey", "Proboscis monkey"),
    SRC_IUCN,
  ],
  langur: [
    adw("Semnopithecus_entellus", "Semnopithecus entellus (northern plains gray langur)"),
    brit("langur", "Langur"),
    SRC_IUCN,
  ],
  douc: [
    adw("Pygathrix_nemaeus", "Pygathrix nemaeus (red-shanked douc)"),
    brit("douc", "Douc"),
    SRC_IUCN,
  ],
  uakari: [
    adw("Cacajao_calvus", "Cacajao calvus (bald uakari)"),
    brit("uakari", "Uakari"),
    SRC_IUCN,
  ],
  "saki-monkey": [
    adw("Pithecia_pithecia", "Pithecia pithecia (white-faced saki)"),
    brit("saki", "Saki"),
    SRC_IUCN,
  ],
  hamerkop: [
    brit("hamerkop", "Hamerkop"),
    SRC_ADW,
    SRC_IUCN,
  ],
  "cock-of-the-rock": [
    brit("cock-of-the-rock", "Cock-of-the-rock"),
    SRC_ADW,
    SRC_IUCN,
  ],
  bowerbird: [
    brit("bowerbird", "Bowerbird"),
    SRC_ADW,
    SRC_IUCN,
  ],
  frigatebird: [
    brit("frigate-bird", "Frigate bird"),
    SRC_ADW,
    SRC_IUCN,
  ],
  umbrellabird: [
    brit("umbrellabird", "Umbrellabird"),
    SRC_ADW,
    SRC_IUCN,
  ],
  // Mammals + birds batch 7 (2026-06-21)
  colobus: [
    adw("Colobus_guereza", "Colobus guereza (mantled guereza)"),
    brit("colobus", "Colobus"),
    SRC_IUCN,
  ],
  macaque: [
    adw("Macaca_fuscata", "Macaca fuscata (Japanese macaque)"),
    brit("macaque", "Macaque"),
    SRC_IUCN,
  ],
  "howler-monkey": [
    adw("Alouatta_palliata", "Alouatta palliata (mantled howler)"),
    brit("howler-monkey", "Howler monkey"),
    SRC_IUCN,
  ],
  "spider-monkey": [
    adw("Ateles_geoffroyi", "Ateles geoffroyi (Geoffroy's spider monkey)"),
    brit("spider-monkey", "Spider monkey"),
    SRC_IUCN,
  ],
  tamandua: [
    adw("Tamandua_tetradactyla", "Tamandua tetradactyla (southern tamandua)"),
    brit("tamandua", "Tamandua"),
    SRC_IUCN,
  ],
  hornero: [
    brit("hornero", "Hornero"),
    SRC_ADW,
    SRC_IUCN,
  ],
  screamer: [
    brit("screamer", "Screamer"),
    SRC_ADW,
    SRC_IUCN,
  ],
  trumpeter: [
    brit("trumpeter-bird", "Trumpeter"),
    SRC_ADW,
    SRC_IUCN,
  ],
  seriema: [
    brit("seriema", "Seriema"),
    SRC_ADW,
    SRC_IUCN,
  ],
  guan: [
    brit("guan", "Guan"),
    SRC_ADW,
    SRC_IUCN,
  ],
  // Mammals + birds batch 8 (2026-06-21)
  baboon: [
    adw("Papio_anubis", "Papio anubis (olive baboon)"),
    brit("baboon", "Baboon"),
    SRC_IUCN,
  ],
  guenon: [
    adw("Cercopithecus_neglectus", "Cercopithecus neglectus (De Brazza's monkey)"),
    brit("guenon", "Guenon"),
    SRC_IUCN,
  ],
  "titi-monkey": [
    adw("Callicebus_cupreus", "Callicebus/Plecturocebus cupreus (coppery titi)"),
    brit("titi", "Titi"),
    SRC_IUCN,
  ],
  "woolly-monkey": [
    adw("Lagothrix_lagotricha", "Lagothrix lagothricha (woolly monkey)"),
    brit("woolly-monkey", "Woolly monkey"),
    SRC_IUCN,
  ],
  muriqui: [
    adw("Brachyteles_arachnoides", "Brachyteles arachnoides (southern muriqui)"),
    brit("muriqui", "Muriqui"),
    SRC_IUCN,
  ],
  tinamou: [
    brit("tinamou", "Tinamou"),
    SRC_ADW,
    SRC_IUCN,
  ],
  limpkin: [
    brit("limpkin", "Limpkin"),
    SRC_ADW,
    SRC_IUCN,
  ],
  curassow: [
    brit("curassow", "Curassow"),
    SRC_ADW,
    SRC_IUCN,
  ],
  chachalaca: [
    brit("chachalaca", "Chachalaca"),
    SRC_ADW,
    SRC_IUCN,
  ],
  sungrebe: [
    brit("sungrebe", "Sungrebe"),
    SRC_ADW,
    SRC_IUCN,
  ],
  // Cross-class balance batch (2026-06-21)
  viper: [
    adw("Bitis_gabonica", "Bitis gabonica (Gaboon viper)"),
    brit("viper", "Viper"),
    SRC_IUCN,
  ],
  tegu: [
    adw("Tupinambis_merianae", "Salvator / Tupinambis merianae (Argentine tegu)"),
    brit("tegu", "Tegu"),
    SRC_IUCN,
  ],
  anole: [
    adw("Anolis_carolinensis", "Anolis carolinensis (green anole)"),
    brit("anole", "Anole"),
    SRC_IUCN,
  ],
  hellbender: [
    adw("Cryptobranchus_alleganiensis", "Cryptobranchus alleganiensis (hellbender)"),
    SRC_AMPHIBIAWEB,
    SRC_IUCN,
  ],
  "glass-frog": [
    SRC_AMPHIBIAWEB,
    brit("glass-frog", "Glass frog"),
    SRC_IUCN,
  ],
  mola: [
    SRC_NOAA_FISHERIES,
    SRC_WORMS,
    SRC_IUCN,
  ],
  wrasse: [
    SRC_WORMS,
    brit("wrasse", "Wrasse"),
    SRC_IUCN,
  ],
  triggerfish: [
    SRC_WORMS,
    brit("triggerfish", "Triggerfish"),
    SRC_IUCN,
  ],
  cicada: [
    brit("cicada", "Cicada"),
    SRC_ADW,
    SRC_XERCES,
  ],
  cricket: [
    brit("cricket-insect", "Cricket"),
    SRC_ADW,
    SRC_XERCES,
  ],
  // Cross-class balance batch 2 (2026-06-21)
  basilisk: [
    adw("Basiliscus_plumifrons", "Basiliscus plumifrons (green basilisk)"),
    brit("basilisk", "Basilisk (lizard)"),
    SRC_IUCN,
  ],
  chuckwalla: [
    adw("Sauromalus_ater", "Sauromalus ater (common chuckwalla)"),
    brit("chuckwalla", "Chuckwalla"),
    SRC_IUCN,
  ],
  "tiger-salamander": [
    adw("Ambystoma_tigrinum", "Ambystoma tigrinum (tiger salamander)"),
    SRC_AMPHIBIAWEB,
    SRC_IUCN,
  ],
  olm: [
    SRC_AMPHIBIAWEB,
    brit("olm", "Olm"),
    SRC_IUCN,
  ],
  sturgeon: [
    SRC_NOAA_FISHERIES,
    brit("sturgeon", "Sturgeon"),
    SRC_IUCN,
  ],
  "electric-eel": [
    adw("Electrophorus_electricus", "Electrophorus electricus (electric eel)"),
    brit("electric-eel", "Electric eel"),
    SRC_IUCN,
  ],
  archerfish: [
    adw("Toxotes_jaculatrix", "Toxotes jaculatrix (banded archerfish)"),
    brit("archerfish", "Archerfish"),
    SRC_IUCN,
  ],
  "mantis-shrimp": [
    SRC_WORMS,
    brit("mantis-shrimp", "Mantis shrimp"),
    SRC_IUCN,
  ],
  "horseshoe-crab": [
    SRC_WORMS,
    brit("horseshoe-crab", "Horseshoe crab"),
    SRC_IUCN,
  ],
  "stick-insect": [
    brit("stick-insect", "Stick insect"),
    SRC_ADW,
    SRC_XERCES,
  ],
  // Cross-class balance batch 3 (2026-06-21)
  "frilled-lizard": [
    adw("Chlamydosaurus_kingii", "Chlamydosaurus kingii (frilled lizard)"),
    brit("frilled-lizard", "Frilled lizard"),
    SRC_IUCN,
  ],
  krait: [
    adw("Bungarus_fasciatus", "Bungarus fasciatus (banded krait)"),
    brit("krait", "Krait"),
    SRC_IUCN,
  ],
  mudpuppy: [
    adw("Necturus_maculosus", "Necturus maculosus (mudpuppy)"),
    SRC_AMPHIBIAWEB,
    SRC_IUCN,
  ],
  "goliath-frog": [
    SRC_AMPHIBIAWEB,
    brit("goliath-frog", "Goliath frog"),
    SRC_IUCN,
  ],
  lungfish: [
    brit("lungfish", "Lungfish"),
    SRC_ADW,
    SRC_IUCN,
  ],
  flounder: [
    SRC_NOAA_FISHERIES,
    brit("flounder", "Flounder"),
    SRC_IUCN,
  ],
  stonefish: [
    SRC_WORMS,
    brit("stonefish", "Stonefish"),
    SRC_IUCN,
  ],
  wasp: [
    brit("wasp", "Wasp"),
    SRC_ADW,
    SRC_XERCES,
  ],
  "hermit-crab": [
    SRC_WORMS,
    brit("hermit-crab", "Hermit crab"),
    SRC_IUCN,
  ],
  "sea-cucumber": [
    SRC_WORMS,
    brit("sea-cucumber", "Sea cucumber"),
    SRC_IUCN,
  ],
  // Cross-class balance batch 4 (2026-06-21)
  "tokay-gecko": [
    adw("Gekko_gecko", "Gekko gecko (tokay gecko)"),
    brit("gecko", "Gecko"),
    SRC_IUCN,
  ],
  "sea-snake": [
    adw("Laticauda_colubrina", "Laticauda colubrina (banded sea krait)"),
    brit("sea-snake", "Sea snake"),
    SRC_IUCN,
  ],
  "surinam-toad": [
    adw("Pipa_pipa", "Pipa pipa (Surinam toad)"),
    SRC_AMPHIBIAWEB,
    SRC_IUCN,
  ],
  "clawed-frog": [
    adw("Xenopus_laevis", "Xenopus laevis (African clawed frog)"),
    SRC_AMPHIBIAWEB,
    SRC_IUCN,
  ],
  lamprey: [
    SRC_NOAA_FISHERIES,
    brit("lamprey", "Lamprey"),
    SRC_IUCN,
  ],
  remora: [
    SRC_WORMS,
    brit("remora", "Remora"),
    SRC_IUCN,
  ],
  oarfish: [
    SRC_WORMS,
    brit("oarfish", "Oarfish"),
    SRC_IUCN,
  ],
  termite: [
    brit("termite", "Termite"),
    SRC_ADW,
    SRC_XERCES,
  ],
  tardigrade: [
    brit("tardigrade", "Tardigrade"),
    SRC_ADW,
    SRC_IUCN,
  ],
  "comb-jelly": [
    SRC_WORMS,
    brit("ctenophore", "Ctenophore (comb jelly)"),
    SRC_IUCN,
  ],
  // Cross-class balance batch 5 (2026-06-21)
  "thorny-devil": [
    adw("Moloch_horridus", "Moloch horridus (thorny devil)"),
    brit("thorny-devil", "Thorny devil"),
    SRC_IUCN,
  ],
  "flying-snake": [
    adw("Chrysopelea_ornata", "Chrysopelea ornata (golden tree / flying snake)"),
    brit("flying-snake", "Flying snake"),
    SRC_IUCN,
  ],
  mantella: [
    SRC_AMPHIBIAWEB,
    brit("mantella", "Mantella"),
    SRC_IUCN,
  ],
  "midwife-toad": [
    adw("Alytes_obstetricans", "Alytes obstetricans (common midwife toad)"),
    SRC_AMPHIBIAWEB,
    SRC_IUCN,
  ],
  "spadefoot-toad": [
    SRC_AMPHIBIAWEB,
    brit("spadefoot-toad", "Spadefoot toad"),
    SRC_IUCN,
  ],
  hagfish: [
    SRC_NOAA_FISHERIES,
    brit("hagfish", "Hagfish"),
    SRC_IUCN,
  ],
  "flying-fish": [
    SRC_WORMS,
    brit("flying-fish", "Flying fish"),
    SRC_IUCN,
  ],
  cockroach: [
    brit("cockroach", "Cockroach"),
    SRC_ADW,
    SRC_XERCES,
  ],
  crayfish: [
    brit("crayfish", "Crayfish"),
    SRC_ADW,
    SRC_IUCN,
  ],
  "velvet-worm": [
    brit("velvet-worm", "Velvet worm (Onychophora)"),
    SRC_ADW,
    SRC_IUCN,
  ],
  // Cross-class balance batch 6 (2026-06-21)
  "caiman-lizard": [
    adw("Dracaena_guianensis", "Dracaena guianensis (caiman lizard)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  agama: [
    adw("Agama_agama", "Agama agama (red-headed rock agama)"),
    brit("agama", "Agama"),
    SRC_IUCN,
  ],
  "tomato-frog": [
    adw("Dyscophus_antongilii", "Dyscophus antongilii (tomato frog)"),
    SRC_AMPHIBIAWEB,
    SRC_IUCN,
  ],
  "marbled-newt": [
    adw("Triturus_marmoratus", "Triturus marmoratus (marbled newt)"),
    SRC_AMPHIBIAWEB,
    SRC_IUCN,
  ],
  gar: [
    brit("gar", "Gar"),
    SRC_ADW,
    SRC_IUCN,
  ],
  paddlefish: [
    brit("paddlefish", "Paddlefish"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  snakehead: [
    brit("snakehead", "Snakehead"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  "coconut-crab": [
    SRC_WORMS,
    brit("coconut-crab", "Coconut crab"),
    SRC_IUCN,
  ],
  "sea-squirt": [
    SRC_WORMS,
    brit("tunicate", "Tunicate (sea squirt)"),
    SRC_IUCN,
  ],
  mayfly: [
    brit("mayfly", "Mayfly"),
    SRC_ADW,
    SRC_XERCES,
  ],
  // Mammals & birds batch (2026-06-21)
  gelada: [
    adw("Theropithecus_gelada", "Theropithecus gelada (gelada)"),
    brit("gelada", "Gelada"),
    SRC_IUCN,
  ],
  kinkajou: [
    adw("Potos_flavus", "Potos flavus (kinkajou)"),
    brit("kinkajou", "Kinkajou"),
    SRC_IUCN,
  ],
  coati: [
    adw("Nasua_narica", "Nasua narica (white-nosed coati)"),
    brit("coati", "Coati"),
    SRC_IUCN,
  ],
  caracal: [
    adw("Caracal_caracal", "Caracal caracal (caracal)"),
    brit("caracal", "Caracal"),
    SRC_IUCN,
  ],
  "fennec-fox": [
    adw("Vulpes_zerda", "Vulpes zerda (fennec fox)"),
    brit("fennec-fox", "Fennec fox"),
    SRC_IUCN,
  ],
  kakapo: [
    brit("kakapo", "Kakapo"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  kea: [
    brit("kea", "Kea"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  cotinga: [
    brit("cotinga", "Cotinga"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  manakin: [
    brit("manakin", "Manakin"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  "bird-of-paradise": [
    brit("bird-of-paradise", "Bird of paradise"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  // Cross-class balance batch 7 (2026-06-22)
  "horned-lizard": [
    adw("Phrynosoma_cornutum", "Phrynosoma cornutum (Texas horned lizard)"),
    brit("horned-lizard", "Horned lizard"),
    SRC_IUCN,
  ],
  "glass-lizard": [
    adw("Pseudopus_apodus", "Pseudopus apodus (European glass lizard)"),
    brit("glass-lizard", "Glass lizard"),
    SRC_IUCN,
  ],
  "reed-frog": [
    SRC_AMPHIBIAWEB,
    SRC_ADW,
    SRC_IUCN,
  ],
  "fire-bellied-toad": [
    adw("Bombina_orientalis", "Bombina orientalis (oriental fire-bellied toad)"),
    SRC_AMPHIBIAWEB,
    SRC_IUCN,
  ],
  bichir: [
    brit("bichir", "Bichir"),
    SRC_ADW,
    SRC_IUCN,
  ],
  butterflyfish: [
    SRC_NOAA_FISHERIES,
    SRC_ADW,
    SRC_IUCN,
  ],
  frogfish: [
    SRC_NOAA_FISHERIES,
    SRC_ADW,
    SRC_IUCN,
  ],
  woodlouse: [
    SRC_ADW,
    brit("isopod", "Isopod (woodlice)"),
    SRC_IUCN,
  ],
  lacewing: [
    SRC_ADW,
    brit("lacewing", "Lacewing"),
    SRC_XERCES,
  ],
  "fiddler-crab": [
    SRC_WORMS,
    brit("fiddler-crab", "Fiddler crab"),
    SRC_IUCN,
  ],
  // Mammals & birds batch 2 (2026-06-22)
  serval: [
    adw("Leptailurus_serval", "Leptailurus serval (serval)"),
    brit("serval", "Serval"),
    SRC_IUCN,
  ],
  margay: [
    adw("Leopardus_wiedii", "Leopardus wiedii (margay)"),
    brit("margay", "Margay"),
    SRC_IUCN,
  ],
  olingo: [
    adw("Bassaricyon_gabbii", "Bassaricyon gabbii (olingo)"),
    brit("olingo", "Olingo"),
    SRC_IUCN,
  ],
  douroucouli: [
    adw("Aotus_trivirgatus", "Aotus trivirgatus (night monkey)"),
    brit("night-monkey", "Night monkey (douroucouli)"),
    SRC_IUCN,
  ],
  "clouded-leopard": [
    adw("Neofelis_nebulosa", "Neofelis nebulosa (clouded leopard)"),
    brit("clouded-leopard", "Clouded leopard"),
    SRC_IUCN,
  ],
  "fairy-wren": [
    brit("fairy-wren", "Fairy-wren"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  bellbird: [
    brit("bellbird", "Bellbird"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  "boat-billed-heron": [
    brit("boat-billed-heron", "Boat-billed heron"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  antpitta: [
    SRC_CORNELL_BIRDS,
    SRC_ADW,
    SRC_IUCN,
  ],
  roller: [
    brit("roller", "Roller"),
    SRC_CORNELL_BIRDS,
    SRC_IUCN,
  ],
  // Cross-class balance batch 8 (2026-06-22)
  "worm-lizard": [
    SRC_ADW,
    brit("amphisbaenian", "Amphisbaenian (worm lizard)"),
    SRC_IUCN,
  ],
  "girdled-lizard": [
    adw("Cordylus_cataphractus", "Cordylus cataphractus (armadillo girdled lizard)"),
    SRC_BRITANNICA_ANIMALS,
    SRC_IUCN,
  ],
  "spring-peeper": [
    adw("Pseudacris_crucifer", "Pseudacris crucifer (spring peeper)"),
    SRC_AMPHIBIAWEB,
    SRC_IUCN,
  ],
  "painted-frog": [
    adw("Discoglossus_pictus", "Discoglossus pictus (painted frog)"),
    SRC_AMPHIBIAWEB,
    SRC_IUCN,
  ],
  goby: [
    brit("goby", "Goby"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  damselfish: [
    brit("damselfish", "Damselfish"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  boxfish: [
    brit("boxfish", "Boxfish (trunkfish)"),
    SRC_NOAA_FISHERIES,
    SRC_IUCN,
  ],
  aphid: [
    SRC_ADW,
    brit("aphid", "Aphid"),
    SRC_XERCES,
  ],
  antlion: [
    SRC_ADW,
    brit("antlion", "Antlion"),
    SRC_XERCES,
  ],
  "sea-spider": [
    SRC_WORMS,
    brit("sea-spider", "Sea spider (Pycnogonida)"),
    SRC_ADW,
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
