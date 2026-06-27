import type { SourceLink } from "@/lib/educational/types";
import { resolveFaunaSourceLinks } from "./featured-animals";
import type { FaunaConfidence } from "./types";

/**
 * Ocean-by-depth data layer.
 *
 * Compliance posture (read before editing):
 *  - Depth-zone descriptions are cautious educational summaries drawn from
 *    authoritative ocean-science sources (NOAA, MBARI, Smithsonian). They are
 *    factual zone science, not invented claims.
 *  - Animal records map EXISTING /animals profiles to the zone(s) they are
 *    documented to occur in, reusing each animal's already-verified sources.
 *    We never invent depth occurrence; widespread cases are "broad-range".
 *  - The deep zones (midnight/abyssal/hadal) are not yet covered by FaunaHub
 *    animal profiles. Their pages describe known deep-sea life from cited
 *    sources WITHOUT linking internal profiles, and say so honestly — they are
 *    substantive zone-science pages, not thin placeholder routes.
 */

export type OceanZoneSlug =
  | "sunlight-zone"
  | "twilight-zone"
  | "midnight-zone"
  | "abyssal-zone"
  | "hadal-zone";

export interface OceanZoneMeta {
  slug: OceanZoneSlug;
  label: string;
  scientificName: string;
  depthRange: string;
  blurb: string;
  conditions: string[];
  /** Cautious, source-backed description of life associated with the zone. */
  knownLife: string[];
  icon: string;
  order: number;
}

export const OCEAN_ZONES: Record<OceanZoneSlug, OceanZoneMeta> = {
  "sunlight-zone": {
    slug: "sunlight-zone",
    label: "Sunlight Zone",
    scientificName: "Epipelagic zone",
    depthRange: "0–200 m",
    blurb:
      "The ocean's topmost layer, where enough sunlight reaches for photosynthesis. It holds most of the sea's plant-like life and the majority of familiar marine animals.",
    conditions: [
      "Depth: roughly 0–200 metres",
      "Sunlight: abundant — enough for photosynthesis",
      "Temperature: the warmest ocean layer, varying with latitude and season",
      "The most productive and biodiverse part of the open ocean",
    ],
    knownLife: [
      "Most animals people picture in the sea live here, from reef fish and rays to dolphins, sea turtles, and the great whales that feed in productive surface waters.",
    ],
    icon: "☀️",
    order: 1,
  },
  "twilight-zone": {
    slug: "twilight-zone",
    label: "Twilight Zone",
    scientificName: "Mesopelagic zone",
    depthRange: "200–1,000 m",
    blurb:
      "Below the sunlight zone, only faint blue light filters down and photosynthesis is no longer possible. Many animals rise toward the surface at night to feed.",
    conditions: [
      "Depth: about 200–1,000 metres",
      "Light: dim and blue, fading to darkness; no photosynthesis",
      "Cold water and steadily increasing pressure",
      "Home to the daily vertical migration of countless animals",
    ],
    knownLife: [
      "Many squid and jellyfish range into the twilight zone, and some sharks descend here on deep dives. Bioluminescence — light made by living things — becomes common.",
      "FaunaHub profiles several twilight-zone specialists, including lanternfishes and marine hatchetfishes that migrate up to feed at night, and the tubular-eyed barreleye fish.",
    ],
    icon: "🌑",
    order: 2,
  },
  "midnight-zone": {
    slug: "midnight-zone",
    label: "Midnight Zone",
    scientificName: "Bathypelagic zone",
    depthRange: "1,000–4,000 m",
    blurb:
      "A realm of permanent darkness where food is scarce and pressure is immense. The animals here are highly specialised, and most are unfamiliar at the surface.",
    conditions: [
      "Depth: about 1,000–4,000 metres",
      "Permanent darkness — no sunlight reaches this far",
      "Near-freezing temperatures and crushing pressure",
      "Food mostly drifts down as 'marine snow' from above",
    ],
    knownLife: [
      "This zone's specialists are highly adapted to permanent darkness and scarce food. Animals widely documented here by ocean-science institutions include anglerfishes, gulper eels, vampire squid, and barbeled dragonfishes, while sperm whales dive down to hunt.",
      "FaunaHub now profiles several of these midnight-zone animals, shown below, each placed cautiously in the zone(s) it is documented to occur in.",
    ],
    icon: "🌚",
    order: 3,
  },
  "abyssal-zone": {
    slug: "abyssal-zone",
    label: "Abyssal Zone",
    scientificName: "Abyssopelagic zone",
    depthRange: "4,000–6,000 m",
    blurb:
      "The cold, dark expanse over much of the deep ocean floor — under enormous pressure, yet still inhabited by life adapted to the extreme.",
    conditions: [
      "Depth: about 4,000–6,000 metres",
      "Total darkness and near-freezing temperatures",
      "Extremely high pressure",
      "Sparse food, with some communities fuelled by chemosynthesis at hydrothermal vents",
    ],
    knownLife: [
      "Ocean-science sources document life such as brittle stars, sea cucumbers, glass sponges, and deep-sea fishes here, plus specialised communities around hydrothermal vents fuelled by chemosynthesis rather than sunlight.",
      "FaunaHub profiles representative abyssal-seafloor and vent animals — including the giant tube worm, yeti crab, glass sponge, and deep-sea corals — shown below with honest confidence labels.",
    ],
    icon: "🕳️",
    order: 4,
  },
  "hadal-zone": {
    slug: "hadal-zone",
    label: "Hadal Zone",
    scientificName: "Hadopelagic zone",
    depthRange: "6,000 m to the trench floor (~11,000 m)",
    blurb:
      "The deepest part of the ocean — the great trenches. It endures the highest pressures on Earth, yet specially adapted animals still survive there.",
    conditions: [
      "Depth: from about 6,000 metres to the deepest trenches (~11,000 m)",
      "The highest pressures anywhere in the ocean",
      "Total darkness and cold",
      "Found only in deep ocean trenches",
    ],
    knownLife: [
      "Documented trench life includes amphipods and snailfishes, which scientists have recorded at remarkable depths. Some snailfishes are the deepest-living fish known, filmed and collected in the great trenches.",
      "FaunaHub profiles the snailfish (family Liparidae) as representative of this zone's hadal specialists, shown below with a cautious confidence label.",
    ],
    icon: "⚓",
    order: 5,
  },
};

export const OCEAN_ZONE_ORDER: OceanZoneSlug[] = (
  Object.values(OCEAN_ZONES) as OceanZoneMeta[]
)
  .sort((a, b) => a.order - b.order)
  .map((z) => z.slug);

export function getOceanZoneMeta(slug: OceanZoneSlug): OceanZoneMeta {
  return OCEAN_ZONES[slug];
}

export function isOceanZone(value: string): value is OceanZoneSlug {
  return value in OCEAN_ZONES;
}

export interface OceanZoneRecord {
  animalSlug: string;
  commonName: string;
  zoneSlugs: OceanZoneSlug[];
  /** Short, cautious card note (rendered in the zone list). */
  note: string;
  confidence: FaunaConfidence;
  sourceUrls: string[];
  /**
   * Optional richer depth-zone metadata for deep-sea species. These fields are
   * populated cautiously — we never invent precise depth ranges, so
   * `depthRangeMeters` is left undefined unless a value is well documented.
   */
  depthRangeMeters?: [number, number];
  habitatTags?: string[];
  /** Cautious, original-language note on where the animal is documented. */
  distributionNote?: string;
  /** Cautious note on the depth association (qualitative, not invented). */
  depthNote?: string;
  isVerticalMigrator?: boolean;
  isCoastalSpecies?: boolean;
  isDeepSeaSpecialist?: boolean;
  notes?: string;
}

type RawOcean = Omit<OceanZoneRecord, "sourceUrls">;

function oc(r: RawOcean): OceanZoneRecord {
  return {
    ...r,
    sourceUrls: resolveFaunaSourceLinks(r.animalSlug).map((s) => s.url),
  };
}

/**
 * Existing /animals profiles mapped to the depth zone(s) they are documented
 * to occur in. Marine/aquarium freshwater fish are excluded; only true marine
 * animals appear. Deep zones intentionally have no records (no profiles yet).
 */
export const OCEAN_RECORDS: readonly OceanZoneRecord[] = [
  oc({ animalSlug: "dolphin", commonName: "Dolphin", zoneSlugs: ["sunlight-zone"], note: "Air-breathing mammals of sunlit surface waters.", confidence: "verified" }),
  oc({ animalSlug: "whale", commonName: "Whale", zoneSlugs: ["sunlight-zone"], note: "Baleen whales such as the humpback feed in productive surface waters.", confidence: "verified" }),
  oc({ animalSlug: "shark", commonName: "Shark", zoneSlugs: ["sunlight-zone", "twilight-zone"], note: "Many sharks hunt in sunlit surface waters; some descend into the twilight zone on deep dives.", confidence: "broad-range" }),
  oc({ animalSlug: "tuna", commonName: "Tuna", zoneSlugs: ["sunlight-zone"], note: "Fast open-ocean predators of the sunlit zone.", confidence: "verified" }),
  oc({ animalSlug: "sea-turtle", commonName: "Sea Turtle", zoneSlugs: ["sunlight-zone"], note: "Sea turtles surface to breathe and forage in shallow, sunlit waters.", confidence: "verified" }),
  oc({ animalSlug: "seal", commonName: "Seal", zoneSlugs: ["sunlight-zone"], note: "Seals forage in coastal and surface waters, diving for prey.", confidence: "broad-range" }),
  oc({ animalSlug: "penguin", commonName: "Penguin", zoneSlugs: ["sunlight-zone"], note: "Penguins pursue prey in the sunlit surface layer.", confidence: "verified" }),
  oc({ animalSlug: "clownfish", commonName: "Clownfish", zoneSlugs: ["sunlight-zone"], note: "Reef fish of shallow, sunlit tropical waters.", confidence: "verified" }),
  oc({ animalSlug: "pufferfish", commonName: "Pufferfish", zoneSlugs: ["sunlight-zone"], note: "Many pufferfish live in warm, shallow coastal waters.", confidence: "broad-range" }),
  oc({ animalSlug: "octopus", commonName: "Octopus", zoneSlugs: ["sunlight-zone"], note: "Many octopuses live on shallow reefs and coastal seabeds.", confidence: "broad-range" }),
  oc({ animalSlug: "crab", commonName: "Crab", zoneSlugs: ["sunlight-zone"], note: "Many crabs live in shallow coastal and intertidal habitats.", confidence: "broad-range" }),
  oc({ animalSlug: "lobster", commonName: "Lobster", zoneSlugs: ["sunlight-zone"], note: "Many lobsters live on relatively shallow seabeds.", confidence: "broad-range" }),
  oc({ animalSlug: "starfish", commonName: "Starfish", zoneSlugs: ["sunlight-zone"], note: "Sea stars are common from the shore into shallow seas.", confidence: "broad-range" }),
  oc({ animalSlug: "seahorse", commonName: "Seahorse", zoneSlugs: ["sunlight-zone"], note: "Seahorses live in shallow seagrass and reef habitats.", confidence: "verified" }),
  oc({ animalSlug: "ray", commonName: "Ray", zoneSlugs: ["sunlight-zone"], note: "Many rays live on shallow seabeds and in coastal waters.", confidence: "broad-range" }),
  oc({ animalSlug: "eel", commonName: "Eel", zoneSlugs: ["sunlight-zone"], note: "Moray and other eels are common on shallow reefs.", confidence: "broad-range" }),
  oc({ animalSlug: "jellyfish", commonName: "Jellyfish", zoneSlugs: ["sunlight-zone", "twilight-zone"], note: "Jellyfish drift through surface waters, and some occur down in the twilight zone.", confidence: "broad-range" }),
  oc({ animalSlug: "squid", commonName: "Squid", zoneSlugs: ["sunlight-zone", "twilight-zone"], note: "Squid range from surface waters down into the twilight zone.", confidence: "broad-range" }),

  // === Deep-Sea Species Expansion (2026-06-27) ===
  // Cautious depth-zone placements for FaunaHub's deep-sea profiles. Depth zones
  // are educational frameworks, not rigid boundaries; many species range across
  // layers and vary by life stage and region, so confidence is honest and we do
  // not assert precise metre ranges.
  oc({
    animalSlug: "lanternfish", commonName: "Lanternfish",
    zoneSlugs: ["twilight-zone"], confidence: "broad-range",
    note: "Classic twilight-zone fishes; many rise toward the surface to feed at night and sink by day.",
    distributionNote: "Family Myctophidae, documented worldwide in the open ocean's twilight zone.",
    depthNote: "Commonly associated with the mesopelagic (twilight) zone; strong daily vertical migrators.",
    habitatTags: ["open-ocean", "midwater"], isVerticalMigrator: true,
  }),
  oc({
    animalSlug: "hatchetfish", commonName: "Hatchetfish",
    zoneSlugs: ["twilight-zone", "midnight-zone"], confidence: "broad-range",
    note: "Marine hatchetfishes are documented in the twilight zone, ranging into the upper midnight; many migrate vertically.",
    distributionNote: "Family Sternoptychidae (marine hatchetfish), reported from temperate and tropical oceans.",
    depthNote: "Often found in the twilight zone, with some reaching darker layers; not the unrelated freshwater aquarium hatchetfish.",
    habitatTags: ["open-ocean", "midwater"], isVerticalMigrator: true, isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "barreleye-fish", commonName: "Barreleye Fish",
    zoneSlugs: ["twilight-zone", "midnight-zone"], confidence: "representative",
    note: "Barreleyes are documented in the deep twilight zone, ranging into darker layers; known mainly from a few live observations.",
    distributionNote: "Family Opisthoproctidae, reported from deep waters of several oceans.",
    depthNote: "Commonly associated with the lower twilight zone, into the upper midnight zone.",
    habitatTags: ["open-ocean", "midwater"], isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "vampire-squid", commonName: "Vampire Squid",
    zoneSlugs: ["twilight-zone", "midnight-zone"], confidence: "representative",
    note: "Lives in cold, low-oxygen midwater — commonly the twilight into the upper midnight zone (the oxygen-minimum zone).",
    distributionNote: "A midwater drifter of temperate and tropical oceans, not a vent or seafloor animal.",
    depthNote: "Associated with the oxygen-minimum zone, reported from mesopelagic into upper bathypelagic depths.",
    habitatTags: ["open-ocean", "midwater", "oxygen-minimum-zone"], isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "anglerfish", commonName: "Anglerfish",
    zoneSlugs: ["twilight-zone", "midnight-zone"], confidence: "broad-range",
    note: "Deep-sea anglerfishes are documented in the dark midwater, commonly from the twilight into the midnight zone.",
    distributionNote: "Suborder Ceratioidei (deep-sea anglerfish), reported from oceans worldwide.",
    depthNote: "Commonly associated with the deep midwater; spread thinly through a vast, food-poor habitat.",
    habitatTags: ["open-ocean", "midwater"], isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "gulper-eel", commonName: "Gulper Eel",
    zoneSlugs: ["midnight-zone"], confidence: "representative",
    note: "Reported from the deep open ocean, commonly the bathypelagic midnight zone.",
    distributionNote: "Eurypharynx pelecanoides (pelican eel), reported from deep waters worldwide.",
    depthNote: "Commonly associated with the midnight (bathypelagic) zone; known mainly from net-caught specimens.",
    habitatTags: ["open-ocean", "midwater"], isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "black-dragonfish", commonName: "Black Dragonfish",
    zoneSlugs: ["twilight-zone", "midnight-zone"], confidence: "representative",
    note: "Documented in the deep twilight and midnight zones; females are reported to migrate upward at night to hunt.",
    distributionNote: "Genus Idiacanthus (barbeled dragonfishes, family Stomiidae).",
    depthNote: "Commonly associated with the twilight into the midnight zone.",
    habitatTags: ["open-ocean", "midwater"], isVerticalMigrator: true, isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "dumbo-octopus", commonName: "Dumbo Octopus",
    zoneSlugs: ["midnight-zone", "abyssal-zone"], confidence: "broad-range",
    note: "Among the deepest-living octopuses, documented across a wide range of deep-ocean depths.",
    distributionNote: "Genus Grimpoteuthis, reported from cold deep waters worldwide, on or above the seafloor.",
    depthNote: "Associated with the deep ocean; reported across a broad depth range, often near the bottom.",
    habitatTags: ["deep-seafloor", "near-bottom"], isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "giant-isopod", commonName: "Giant Isopod",
    zoneSlugs: ["midnight-zone", "abyssal-zone"], confidence: "broad-range",
    note: "Scavengers of the deep seafloor, documented across a wide depth range into the abyssal zone.",
    distributionNote: "Genus Bathynomus, reported from cold, deep seabeds in several oceans.",
    depthNote: "Associated with the deep seafloor across a broad depth range; a benthic scavenger.",
    habitatTags: ["deep-seafloor", "benthic"], isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "deep-sea-coral", commonName: "Deep-Sea Coral",
    zoneSlugs: ["midnight-zone", "abyssal-zone"], confidence: "broad-range",
    note: "Cold-water corals grow on seamounts, slopes, and ridges across a wide depth range, into the deep ocean.",
    distributionNote: "Cold-water (deep-sea) corals such as Lophelia pertusa, reported worldwide on hard deep substrates.",
    depthNote: "Associated with cold, dark deep water across a broad depth range; not the sunlit shallow reefs.",
    habitatTags: ["deep-seafloor", "seamount", "benthic"], isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "sea-cucumber", commonName: "Sea Cucumber",
    zoneSlugs: ["abyssal-zone"], confidence: "representative",
    note: "Sea cucumbers occur from the shore to the deep sea, and are among the most abundant animals on the abyssal seafloor.",
    distributionNote: "Class Holothuroidea, found from coastal waters to the deepest seafloor.",
    depthNote: "Shown here as representative of abyssal seafloor life; the group spans all ocean depths.",
    habitatTags: ["deep-seafloor", "benthic"], isCoastalSpecies: true,
  }),
  oc({
    animalSlug: "glass-sponge", commonName: "Glass Sponge",
    zoneSlugs: ["abyssal-zone"], confidence: "representative",
    note: "Glass sponges build silica skeletons on the cold deep seafloor, documented into the abyssal zone.",
    distributionNote: "Class Hexactinellida (e.g. Venus' flower basket), reported from cold deep seas worldwide.",
    depthNote: "Associated with the cold, dark deep seafloor; can form sponge grounds that shelter other animals.",
    habitatTags: ["deep-seafloor", "benthic"], isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "yeti-crab", commonName: "Yeti Crab",
    zoneSlugs: ["midnight-zone", "abyssal-zone"], confidence: "representative",
    note: "Documented at hydrothermal vents and cold seeps on the deep seafloor, where chemosynthesis fuels the community.",
    distributionNote: "Genus Kiwa, reported from vent and seep sites in the Pacific, Southern Ocean, and elsewhere.",
    depthNote: "Associated with vent and seep habitats on the deep seafloor; distribution tracks venting, not a fixed depth.",
    habitatTags: ["hydrothermal-vent", "cold-seep", "deep-seafloor"], isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "hydrothermal-vent-tubeworm", commonName: "Hydrothermal Vent Tubeworm",
    zoneSlugs: ["abyssal-zone"], confidence: "representative",
    note: "Forms dense clusters at hydrothermal vents on mid-ocean ridges, on the deep seafloor, fuelled by chemosynthesis.",
    distributionNote: "Giant tube worm (Riftia pachyptila), reported from East Pacific Rise and Galápagos Rift vents.",
    depthNote: "Associated with hydrothermal vents on the deep seafloor; distribution tracks active venting.",
    habitatTags: ["hydrothermal-vent", "deep-seafloor"], isDeepSeaSpecialist: true,
  }),
  oc({
    animalSlug: "snailfish", commonName: "Snailfish",
    zoneSlugs: ["abyssal-zone", "hadal-zone"], confidence: "representative",
    note: "The family spans shallow seas to the deep; some snailfishes are the deepest-living fish known, recorded in hadal trenches.",
    distributionNote: "Family Liparidae; certain species (e.g. the Mariana snailfish) are documented at hadal depths.",
    depthNote: "Shown for the deepest zones, where specific hadal species occur; the family as a whole spans shallow to hadal.",
    habitatTags: ["deep-seafloor", "trench", "benthic"], isDeepSeaSpecialist: true,
  }),
];

export function getOceanByZone(zone: OceanZoneSlug): OceanZoneRecord[] {
  const rank: Record<string, number> = {
    verified: 0, "broad-range": 1, representative: 2, "source-review-pending": 3,
  };
  return [...OCEAN_RECORDS]
    .filter((r) => r.zoneSlugs.includes(zone))
    .sort(
      (a, b) =>
        rank[a.confidence] - rank[b.confidence] ||
        a.commonName.localeCompare(b.commonName),
    );
}

export function oceanZoneCounts(): Record<OceanZoneSlug, number> {
  const out = {
    "sunlight-zone": 0, "twilight-zone": 0, "midnight-zone": 0,
    "abyssal-zone": 0, "hadal-zone": 0,
  } as Record<OceanZoneSlug, number>;
  for (const r of OCEAN_RECORDS) for (const z of r.zoneSlugs) out[z] += 1;
  return out;
}

export const OCEAN_UPDATED = "2026-06-27";

export const OCEAN_SOURCES: SourceLink[] = [
  {
    label: "NOAA National Ocean Service — ocean light & depth",
    url: "https://oceanservice.noaa.gov/facts/light_travel.html",
    type: "government",
    note: "U.S. government ocean-science education resource",
  },
  {
    label: "NOAA Ocean Exploration",
    url: "https://oceanexplorer.noaa.gov/",
    type: "government",
    note: "U.S. government deep-ocean exploration resource",
  },
  {
    label: "Monterey Bay Aquarium Research Institute (MBARI)",
    url: "https://www.mbari.org/",
    type: "university",
    note: "Deep-sea research institute",
  },
  {
    label: "NOAA Fisheries — Marine Life",
    url: "https://www.fisheries.noaa.gov/",
    type: "government",
    note: "U.S. government science agency for marine species",
  },
];
