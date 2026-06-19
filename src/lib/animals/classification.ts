/**
 * Domestication classification for animals profiled on FaunaHub.
 *
 * Purpose: cleanly separate DOMESTIC / companion animals from WILD fauna — both
 * for honest information architecture and to give pet-care and (future)
 * pet-food / nutrition content a single, reliable target. This file only
 * classifies and links to existing care content. It sells nothing: no prices,
 * no products, no affiliate links live here.
 *
 * Compliance posture (read before editing):
 *  - Wild animals are NEVER presented as pets or as purchasable. The default
 *    for any /animals/[slug] not listed below is `wild`.
 *  - `slug` must point to a real /animals/[slug] route.
 *  - `petFoodRelevant` is a future-commerce SCAFFOLD only. It flags companion
 *    species where feeding / nutrition guidance is appropriate. It does not add
 *    any storefront, price, or product. Keep it true only for companion animals
 *    that already (or will) have a dedicated care cluster — never for wildlife.
 *  - Livestock feeding is agriculture, not the companion pet-food market, so
 *    livestock are not flagged `petFoodRelevant`.
 */

export type DomesticationStatus = "wild" | "domestic";

/** Role only applies when status is "domestic". */
export type DomesticRole = "companion" | "livestock" | "working";

export interface AnimalClassification {
  /** A real /animals/[slug] route. */
  slug: string;
  status: DomesticationStatus;
  role?: DomesticRole;
  /** Existing FaunaHub care cluster for this animal, if one exists. */
  careHubUrl?: string;
  careHubLabel?: string;
  /** Future pet-food / nutrition relevance (companion species only). Scaffold
   * only — no commerce is implemented. */
  petFoodRelevant?: boolean;
  /** Optional nuance, e.g. "kept as a pet but also lives wild". */
  note?: string;
}

const SMALL_PETS = { careHubUrl: "/small-pets", careHubLabel: "Small Pets Care" };
const AQUARIUM = { careHubUrl: "/aquarium-care", careHubLabel: "Aquarium & Fish Care" };

/**
 * Domestic animals among FaunaHub's /animals profiles. Everything not listed
 * here is treated as wild by default.
 */
export const DOMESTIC_ANIMALS: readonly AnimalClassification[] = [
  // Companion animals (pet-food / nutrition relevant)
  { slug: "rabbit", status: "domestic", role: "companion", ...SMALL_PETS, petFoodRelevant: true, note: "Kept worldwide as a companion; the European rabbit is also a wild species." },
  { slug: "guinea-pig", status: "domestic", role: "companion", ...SMALL_PETS, petFoodRelevant: true },
  { slug: "hamster", status: "domestic", role: "companion", ...SMALL_PETS, petFoodRelevant: true },
  { slug: "goldfish", status: "domestic", role: "companion", ...AQUARIUM, petFoodRelevant: true, note: "A domesticated form bred from wild carp relatives." },
  { slug: "betta-fish", status: "domestic", role: "companion", ...AQUARIUM, petFoodRelevant: true },
  { slug: "guppy", status: "domestic", role: "companion", ...AQUARIUM, petFoodRelevant: true },
  { slug: "koi", status: "domestic", role: "companion", ...AQUARIUM, petFoodRelevant: true, note: "Ornamental pond fish, a domesticated form of common carp." },

  // Livestock / farm animals (agriculture, not the companion pet-food market)
  { slug: "cow", status: "domestic", role: "livestock" },
  { slug: "goat", status: "domestic", role: "livestock" },
  { slug: "sheep", status: "domestic", role: "livestock" },
  { slug: "pig", status: "domestic", role: "livestock" },

  // Working / other domestic
  { slug: "horse", status: "domestic", role: "working", note: "Kept for riding, work, and sport; also companion in many homes." },
  { slug: "camel", status: "domestic", role: "working", note: "Domesticated dromedary and Bactrian camels; the wild Bactrian camel is a separate species." },
];

const BY_SLUG = new Map(DOMESTIC_ANIMALS.map((a) => [a.slug, a]));

/** Classification for any animal slug; defaults to wild when not listed. */
export function getAnimalClassification(slug: string): AnimalClassification {
  return BY_SLUG.get(slug) ?? { slug, status: "wild" };
}

export function isDomestic(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export function domesticByRole(role: DomesticRole): AnimalClassification[] {
  return DOMESTIC_ANIMALS.filter((a) => a.role === role);
}

/** Companion species flagged for future pet-food / nutrition content. */
export function petFoodSpecies(): AnimalClassification[] {
  return DOMESTIC_ANIMALS.filter((a) => a.petFoodRelevant);
}

export const DOMESTIC_ROLE_LABEL: Record<DomesticRole, string> = {
  companion: "Companion animal",
  livestock: "Domestic · Livestock",
  working: "Domestic · Working",
};

/**
 * Flagship companion-animal care clusters that do not have a single
 * /animals/[slug] profile (dogs and cats have full breed clusters instead),
 * plus the cross-species hubs where care and feeding guidance lives. This is
 * where future pet-food / nutrition content would attach.
 */
export interface CareCluster {
  label: string;
  href: string;
  blurb: string;
  petFoodRelevant: boolean;
}

export const COMPANION_CARE_CLUSTERS: readonly CareCluster[] = [
  { label: "Dogs", href: "/dogs", blurb: "Breeds, health, behavior, and care for domestic dogs.", petFoodRelevant: true },
  { label: "Cats", href: "/cats", blurb: "Breeds, health, behavior, and care for domestic cats.", petFoodRelevant: true },
  { label: "Small Pets", href: "/small-pets", blurb: "Rabbits, guinea pigs, hamsters, and other small companions.", petFoodRelevant: true },
  { label: "Aquarium & Fish Care", href: "/aquarium-care", blurb: "Keeping freshwater and ornamental fish healthy.", petFoodRelevant: true },
  { label: "Bird Care", href: "/bird-care", blurb: "Care basics for companion and aviary birds.", petFoodRelevant: true },
  { label: "Pet Nutrition", href: "/pet-nutrition", blurb: "Cross-species feeding and nutrition guidance.", petFoodRelevant: true },
];
