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
      "FaunaHub does not yet profile the specialists of this zone. Animals widely documented here by ocean-science institutions include anglerfishes, gulper eels, and vampire squid, while sperm whales dive down to hunt.",
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
      "FaunaHub does not yet profile abyssal animals. Ocean-science sources document life such as brittle stars, sea cucumbers, and deep-sea fishes here, plus specialised communities around hydrothermal vents.",
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
      "FaunaHub does not yet profile hadal animals. Documented trench life includes amphipods and snailfishes, which scientists have recorded at remarkable depths.",
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
  note: string;
  confidence: FaunaConfidence;
  sourceUrls: string[];
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

export const OCEAN_UPDATED = "2026-06-16";

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
