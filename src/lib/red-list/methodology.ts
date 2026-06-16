/**
 * Red List Species Intelligence — methodology, sourcing policy, and the
 * editorial disclaimers shared across every endangered-animals page.
 *
 * Keeping this text in one module means the same honest, cautious language
 * appears on the hub, category pages, explainers, and detailed profiles, and
 * can be reviewed and updated in a single place.
 */

/** The date FaunaHub last reviewed the Red List dataset as a whole. */
export const RED_LIST_LAST_REVIEW = "2026-06-16";

/** Short label for the source set FaunaHub draws on. */
export const RED_LIST_PRIMARY_SOURCES = [
  "IUCN Red List of Threatened Species",
  "Animal Diversity Web (University of Michigan Museum of Zoology)",
  "NOAA Fisheries",
  "U.S. Fish & Wildlife Service",
  "National Park Service",
  "Smithsonian's National Zoo & Conservation Biology Institute",
] as const;

/**
 * The core disclaimer. Rendered prominently on the hub and every category and
 * profile page so the educational, non-authoritative nature is always visible.
 */
export const RED_LIST_CORE_DISCLAIMER =
  "FaunaHub is an independent educational publisher, not a conservation authority. The conservation context on these pages is a source-transparent overview, not the official assessment. Conservation status changes over time as new science and threats emerge. Always confirm a species' current status directly on the official IUCN Red List before relying on it.";

/** What each confidence flag means, in plain language. */
export const DATA_CONFIDENCE_NOTES: Record<string, string> = {
  verified:
    "Category and key fields were confirmed against authoritative sources during the most recent review pass.",
  partial:
    "The Red List category is well established in the published literature; some optional fields have not been individually re-verified.",
  "source-review-pending":
    "The category reflects widely published assessments and is shown for educational orientation. Confirm it against the live IUCN Red List entry before treating it as definitive.",
};

/** Explains the "last verified" date shown on records. */
export const LAST_VERIFIED_EXPLAINER =
  "“Last verified” is the date FaunaHub last reviewed a record against its listed sources. It is not the date of the underlying IUCN assessment, which may be older or newer. Because status can change between our reviews, the official IUCN Red List is always the current source of truth.";

/** Why not every record is a full page. */
export const INDEX_VS_PROFILE_EXPLAINER =
  "FaunaHub deliberately does not publish a separate page for every species in this dataset. Many records are index entries: they appear in category lists with their status and sources, but do not get a standalone page unless there is enough verified material — and, where possible, a properly licensed photograph — to support one. This avoids thin, low-value pages and keeps the focus on accuracy over volume.";

/** Global vs. local status note. */
export const GLOBAL_VS_LOCAL_EXPLAINER =
  "IUCN Red List categories describe global extinction risk. A species can be globally threatened while remaining locally common in part of its range, or be globally secure but protected nationally. National and regional assessments — for example a country's own red list or endangered-species law — can differ from the global category and are maintained by separate authorities.";

/** IUCN attribution and compliance note. */
export const IUCN_ATTRIBUTION_NOTE =
  "Conservation status categories originate with the IUCN Red List of Threatened Species. FaunaHub links to IUCN and other authoritative references rather than reproducing their assessment text, maps, or datasets. Category definitions are summarised here in original language for educational use.";

/** The standard methodology paragraph used on category and profile pages. */
export const RED_LIST_METHODOLOGY_SUMMARY =
  "Each record lists the species' common and scientific name, its IUCN Red List category, a last-verified date, a data-confidence flag, and links to authoritative sources. Population trend, range, and threats are shown only when verified — never guessed. Where FaunaHub already publishes a detailed animal profile, the record links to it instead of duplicating content.";

export interface MethodologyFaqItem {
  question: string;
  answer: string;
}

/** Shared FAQ used on the methodology and hub pages. */
export const METHODOLOGY_FAQ: MethodologyFaqItem[] = [
  {
    question: "Is this the official IUCN Red List?",
    answer:
      "No. FaunaHub is an independent educational publisher. This is a source-transparent overview that links to the official IUCN Red List and other authoritative references. For current, authoritative status always use iucnredlist.org.",
  },
  {
    question: "How current is the conservation status shown here?",
    answer:
      "Each record carries a last-verified date — the date FaunaHub last reviewed it against its sources. Status can change between reviews, so the live IUCN Red List entry is always the current source of truth.",
  },
  {
    question: "Why doesn't every species have its own page?",
    answer:
      "Many records are index-only: they appear in category lists with their status and sources but do not get a standalone page. FaunaHub only builds a detailed profile when there is enough verified material, and ideally a properly licensed photo, to justify one. This keeps quality high and avoids thin pages.",
  },
  {
    question: "Where does FaunaHub get its conservation data?",
    answer:
      "From authoritative sources: the IUCN Red List, Animal Diversity Web (University of Michigan), NOAA Fisheries, the U.S. Fish & Wildlife Service, the National Park Service, and museum and university references. FaunaHub does not use unsourced listicles, pet shops, or AI-generated fact pages.",
  },
  {
    question: "Does a category like “Endangered” ever change?",
    answer:
      "Yes. As populations recover or decline and as new science arrives, the IUCN reassesses species and categories move up or down. FaunaHub presents status as a snapshot, never as permanent, and points readers to the live IUCN entry for the latest assessment.",
  },
];
