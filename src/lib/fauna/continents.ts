import type {
  FaunaContinentSlug,
  FaunaContinentMeta,
} from "./types";

/**
 * Continent metadata for the fauna geography layer. Blurbs are short, original
 * educational summaries — not range maps or political statements about borders.
 */
export const FAUNA_CONTINENTS: Record<FaunaContinentSlug, FaunaContinentMeta> = {
  africa: {
    slug: "africa",
    label: "Africa",
    blurb:
      "Savannas, rainforests, deserts, and the island of Madagascar — home to some of the most recognised land mammals on Earth.",
    icon: "🦁",
    order: 1,
  },
  asia: {
    slug: "asia",
    label: "Asia",
    blurb:
      "The largest continent, spanning tropical forests, the Himalaya, steppe, and island archipelagos with exceptional animal diversity.",
    icon: "🐯",
    order: 2,
  },
  europe: {
    slug: "europe",
    label: "Europe",
    blurb:
      "Temperate forests, mountains, and wetlands whose fauna has long lived alongside dense human settlement.",
    icon: "🦊",
    order: 3,
  },
  "north-america": {
    slug: "north-america",
    label: "North America",
    blurb:
      "From Arctic tundra to deserts and temperate forests, including the Central American land bridge.",
    icon: "🦅",
    order: 4,
  },
  "south-america": {
    slug: "south-america",
    label: "South America",
    blurb:
      "The Amazon, Andes, Pantanal, and Atlantic Forest — a continent famous for unique mammals, birds, and amphibians.",
    icon: "🦥",
    order: 5,
  },
  oceania: {
    slug: "oceania",
    label: "Oceania",
    blurb:
      "Australia, New Guinea, New Zealand, and Pacific islands — known for marsupials, monotremes, and distinctive birds.",
    icon: "🦘",
    order: 6,
  },
  antarctica: {
    slug: "antarctica",
    label: "Antarctica",
    blurb:
      "Earth's coldest continent. True land fauna is limited to tiny invertebrates; the animals people associate with it are coastal and marine birds and seals.",
    icon: "🐧",
    order: 7,
  },
};

export const CONTINENT_ORDER: FaunaContinentSlug[] = (
  Object.values(FAUNA_CONTINENTS) as FaunaContinentMeta[]
)
  .sort((a, b) => a.order - b.order)
  .map((c) => c.slug);

export function getContinentMeta(
  slug: FaunaContinentSlug,
): FaunaContinentMeta {
  return FAUNA_CONTINENTS[slug];
}

export function isFaunaContinent(value: string): value is FaunaContinentSlug {
  return value in FAUNA_CONTINENTS;
}
