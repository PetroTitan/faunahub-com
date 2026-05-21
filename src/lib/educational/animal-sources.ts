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
