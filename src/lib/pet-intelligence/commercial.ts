/**
 * The seam a future commercial layer attaches to — deliberately empty.
 *
 * Nothing here is populated, rendered, or exported into any page in this
 * sprint. It exists so that when commerce is built, the shape it has to take
 * is already decided, and the decision is one that cannot corrupt editorial
 * data:
 *
 *   BREEDS ──────────────► breed facts, sourced, registry-backed
 *      ▲
 *      │ breedId (one direction only)
 *      │
 *   BREED_COMMERCIAL_CONTEXT ──► categories, services, insurance relevance
 *
 * The arrow points one way. `Breed` has no commercial field and no import from
 * this module, so there is no code path by which a merchant record can change
 * what a breed page says about a breed. A sponsor can buy a slot; it cannot buy
 * a size class, a trait band, a Finder position, or a comparison outcome —
 * because the modules that compute those cannot see this one.
 *
 * Two rules that must survive the first commercial sprint:
 *
 *  1. This module may import from the registry. The registry may NEVER import
 *     from this module. `tests/pet-intelligence-commercial.test.ts` enforces
 *     the direction.
 *  2. Product categories here are COARSE and generic ("grooming tools",
 *     "harnesses"). They are not products, brands, merchants, or prices. The
 *     moment a brand name appears in this file, editorial separation is gone.
 *
 * See docs/pet-intelligence/commercial-policy.md and
 * docs/pet-intelligence/commercial-extension.md.
 */
import type { BreedCommercialContext, BreedSpecies } from "./types.ts";

/**
 * The category vocabulary a future commercial layer may draw on.
 *
 * Listed so the vocabulary is agreed before anything uses it, and so a reviewer
 * can see that it contains no brands. Categories a breed page would not be an
 * honest place to monetise are absent by design: there is no "medication",
 * "supplements", "breeders", or "veterinarians" category, because FaunaHub does
 * not rank health products, animals for sale, or clinicians.
 */
export const COMMERCIAL_CATEGORIES: Readonly<Record<BreedSpecies, readonly string[]>> = {
  dog: [
    "food",
    "treats",
    "grooming-tools",
    "harnesses-and-collars",
    "leads",
    "crates-and-carriers",
    "beds",
    "toys",
    "travel",
    "training-equipment",
  ],
  cat: [
    "food",
    "litter-and-trays",
    "carriers",
    "beds",
    "scratching-furniture",
    "toys",
    "grooming-tools",
    "travel",
  ],
};

export const SERVICE_CATEGORIES: readonly string[] = [
  "grooming",
  "training",
  "boarding",
  "day-care",
  "pet-sitting",
  "walking",
];

/**
 * Commercial context per breed. EMPTY, and it stays empty until a commercial
 * sprint is explicitly authorised.
 *
 * An empty array here is the current, correct state of the system: FaunaHub
 * publishes no affiliate links, no products, and no merchant relationships.
 */
export const BREED_COMMERCIAL_CONTEXT: readonly BreedCommercialContext[] = [];

export function commercialContextFor(breedId: string): BreedCommercialContext | undefined {
  return BREED_COMMERCIAL_CONTEXT.find((c) => c.breedId === breedId);
}

/** True while FaunaHub publishes no commercial breed content. Asserted by tests. */
export const COMMERCE_ENABLED = false;
