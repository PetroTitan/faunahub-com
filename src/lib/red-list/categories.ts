import type {
  RedListCategoryCode,
  RedListCategoryMeta,
  RedListGroupMeta,
  RedListTaxonGroup,
} from "./types";

/**
 * IUCN Red List category metadata.
 *
 * Descriptions are short, original-language summaries written by FaunaHub for
 * educational orientation. They are NOT reproductions of IUCN assessment text.
 * The authoritative definitions live with the IUCN Red List itself, which is
 * linked from every explainer page.
 *
 * Badge colours are intentionally serious and muted — no neon "panic" reds —
 * and every badge always renders its code and label as text, so meaning is
 * never conveyed by colour alone.
 */
export const RED_LIST_CATEGORIES: Record<
  RedListCategoryCode,
  RedListCategoryMeta
> = {
  CR: {
    code: "CR",
    label: "Critically Endangered",
    shortDescription:
      "Faces an extremely high risk of extinction in the wild based on IUCN criteria.",
    threatened: true,
    badgeClass: "bg-[#7A1F1F] text-white border-[#641818]",
    order: 1,
  },
  EN: {
    code: "EN",
    label: "Endangered",
    shortDescription:
      "Faces a very high risk of extinction in the wild based on IUCN criteria.",
    threatened: true,
    badgeClass: "bg-[#9A4A12] text-white border-[#7E3C0E]",
    order: 2,
  },
  VU: {
    code: "VU",
    label: "Vulnerable",
    shortDescription:
      "Faces a high risk of extinction in the wild based on IUCN criteria.",
    threatened: true,
    badgeClass: "bg-[#7C6313] text-white border-[#65500F]",
    order: 3,
  },
  NT: {
    code: "NT",
    label: "Near Threatened",
    shortDescription:
      "Does not currently qualify as threatened but is close to qualifying, or likely to in the near future.",
    threatened: false,
    badgeClass: "bg-[#3F5E7A] text-white border-[#334D64]",
    order: 4,
  },
  LC: {
    code: "LC",
    label: "Least Concern",
    shortDescription:
      "Widespread and abundant; assessed as not currently threatened by the IUCN.",
    threatened: false,
    badgeClass: "bg-[#2F6B3F] text-white border-[#265634]",
    order: 5,
  },
  DD: {
    code: "DD",
    label: "Data Deficient",
    shortDescription:
      "Not enough information exists to assess extinction risk directly or indirectly.",
    threatened: false,
    badgeClass: "bg-[#52514E] text-white border-[#434240]",
    order: 6,
  },
  EW: {
    code: "EW",
    label: "Extinct in the Wild",
    shortDescription:
      "Survives only in cultivation, captivity, or as a naturalised population outside its historic range.",
    threatened: false,
    badgeClass: "bg-[#3A2A3A] text-white border-[#2E212E]",
    order: 7,
  },
  EX: {
    code: "EX",
    label: "Extinct",
    shortDescription:
      "No reasonable doubt remains that the last individual has died.",
    threatened: false,
    badgeClass: "bg-[#23231F] text-white border-[#161613]",
    order: 8,
  },
  NE: {
    code: "NE",
    label: "Not Evaluated",
    shortDescription:
      "Has not yet been assessed against the IUCN Red List criteria.",
    threatened: false,
    badgeClass: "bg-[#6B6B6B] text-white border-[#565656]",
    order: 9,
  },
};

/** Ordered list of all categories, highest extinction risk first. */
export const RED_LIST_CATEGORY_ORDER: RedListCategoryCode[] = (
  Object.values(RED_LIST_CATEGORIES) as RedListCategoryMeta[]
)
  .sort((a, b) => a.order - b.order)
  .map((c) => c.code);

/** The three "threatened" categories FaunaHub builds dedicated pages for. */
export const THREATENED_CATEGORIES: RedListCategoryCode[] = ["CR", "EN", "VU"];

/** Slug used in URLs for each risk-category page. */
export const CATEGORY_PAGE_SLUG: Partial<Record<RedListCategoryCode, string>> = {
  CR: "critically-endangered",
  EN: "endangered",
  VU: "vulnerable",
};

export const RED_LIST_GROUPS: Record<RedListTaxonGroup, RedListGroupMeta> = {
  mammals: {
    group: "mammals",
    label: "Mammals",
    description:
      "Big cats, primates, rhinos, cetaceans, and other threatened mammals.",
    icon: "🐾",
  },
  birds: {
    group: "birds",
    label: "Birds",
    description:
      "Raptors, parrots, seabirds, and songbirds of conservation concern.",
    icon: "🦅",
  },
  "reptiles-amphibians": {
    group: "reptiles-amphibians",
    label: "Reptiles & Amphibians",
    description:
      "Turtles, lizards, crocodilians, frogs, and salamanders under pressure.",
    icon: "🐢",
  },
  fish: {
    group: "fish",
    label: "Fish",
    description:
      "Sharks, rays, sturgeon, and bony fishes facing population decline.",
    icon: "🐟",
  },
  invertebrates: {
    group: "invertebrates",
    label: "Invertebrates",
    description:
      "Corals, insects, molluscs, and other animals without backbones.",
    icon: "🦋",
  },
  other: {
    group: "other",
    label: "Other Groups",
    description: "Species that sit outside the main FaunaHub taxon groups.",
    icon: "🧬",
  },
};

/** Groups that have their own category page, in display order. */
export const GROUP_PAGE_ORDER: RedListTaxonGroup[] = [
  "mammals",
  "birds",
  "reptiles-amphibians",
  "fish",
  "invertebrates",
];

export function getCategoryMeta(
  code: RedListCategoryCode,
): RedListCategoryMeta {
  return RED_LIST_CATEGORIES[code];
}

export function getGroupMeta(group: RedListTaxonGroup): RedListGroupMeta {
  return RED_LIST_GROUPS[group];
}

export function trendLabel(
  trend: string | undefined,
): { label: string; symbol: string } | null {
  switch (trend) {
    case "increasing":
      return { label: "Increasing", symbol: "▲" };
    case "decreasing":
      return { label: "Decreasing", symbol: "▼" };
    case "stable":
      return { label: "Stable", symbol: "▬" };
    case "unknown":
      return { label: "Trend unknown", symbol: "—" };
    default:
      return null;
  }
}
