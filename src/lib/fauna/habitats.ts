import type { FaunaHabitatTag, FaunaHabitatMeta } from "./types";

/** Habitat-tag metadata used for the cautious, label-based habitat badges. */
export const FAUNA_HABITATS: Record<FaunaHabitatTag, FaunaHabitatMeta> = {
  forest: {
    tag: "forest",
    label: "Forest",
    description: "Tropical, temperate, and boreal woodland.",
    icon: "🌳",
  },
  grassland: {
    tag: "grassland",
    label: "Grassland",
    description: "Open prairies, steppe, and pampas.",
    icon: "🌾",
  },
  savanna: {
    tag: "savanna",
    label: "Savanna",
    description: "Tropical grassland dotted with trees.",
    icon: "🌿",
  },
  desert: {
    tag: "desert",
    label: "Desert",
    description: "Arid and semi-arid landscapes.",
    icon: "🏜️",
  },
  mountain: {
    tag: "mountain",
    label: "Mountain",
    description: "Highlands and alpine zones.",
    icon: "⛰️",
  },
  tundra: {
    tag: "tundra",
    label: "Tundra",
    description: "Cold, treeless plains.",
    icon: "❄️",
  },
  wetland: {
    tag: "wetland",
    label: "Wetland",
    description: "Marshes, swamps, and floodplains.",
    icon: "🪷",
  },
  freshwater: {
    tag: "freshwater",
    label: "Freshwater",
    description: "Rivers, lakes, and streams.",
    icon: "💧",
  },
  coastal: {
    tag: "coastal",
    label: "Coastal",
    description: "Shorelines and near-shore habitats.",
    icon: "🏖️",
  },
  island: {
    tag: "island",
    label: "Island",
    description: "Island and archipelago ecosystems.",
    icon: "🏝️",
  },
  polar: {
    tag: "polar",
    label: "Polar",
    description: "Sea-ice and high-latitude environments.",
    icon: "🧊",
  },
  "urban-adapted": {
    tag: "urban-adapted",
    label: "Urban-adapted",
    description: "Species that also thrive around people.",
    icon: "🏙️",
  },
};

export function getHabitatMeta(tag: FaunaHabitatTag): FaunaHabitatMeta {
  return FAUNA_HABITATS[tag];
}
