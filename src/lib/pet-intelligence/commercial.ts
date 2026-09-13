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
 * Coarse relevance rules a future commercial layer may start from.
 *
 * These are NOT populated per breed, and nothing reads them at render time.
 * They exist so that when commerce is built, the mapping is derived from
 * registry facts a breed already records — coat length, size band, trait bands —
 * rather than being hand-assigned breed by breed, which is where an advertiser's
 * influence would enter.
 *
 * Written as a pure function of a breed's own recorded values, so a category
 * appears for a breed only because the registry says something that implies it.
 * A breed with no recorded coat gets no grooming category, the same way a breed
 * with no recorded weight gets no size band.
 */
export const COMMERCIAL_RELEVANCE_RULES: readonly {
  category: string;
  species: BreedSpecies;
  reason: string;
}[] = [
  {
    category: "grooming-tools",
    species: "dog",
    reason: "Recorded grooming needs in the higher band, or a recorded long coat.",
  },
  {
    category: "grooming-tools",
    species: "cat",
    reason: "A recorded long coat, or a registry that recognises the breed in a long coat.",
  },
  {
    category: "crates-and-carriers",
    species: "dog",
    reason: "A derived size band, which determines the size of crate that fits.",
  },
  {
    category: "training-equipment",
    species: "dog",
    reason: "Recorded exercise needs in the higher band.",
  },
  {
    category: "toys",
    species: "dog",
    reason: "Recorded exercise needs in the higher band.",
  },
  {
    category: "scratching-furniture",
    species: "cat",
    reason: "Applies to every cat breed; not breed-specific.",
  },
];

/**
 * Commercial context per breed. EMPTY, and it stays empty until a commercial
 * sprint is explicitly authorised.
 *
 * An empty array here is the current, correct state of the system: FaunaHub
 * publishes no affiliate links, no products, and no merchant relationships.
 * `COMMERCE_ENABLED` is false and the registry cannot import this module.
 */
export const BREED_COMMERCIAL_CONTEXT: readonly BreedCommercialContext[] = [];

export function commercialContextFor(breedId: string): BreedCommercialContext | undefined {
  return BREED_COMMERCIAL_CONTEXT.find((c) => c.breedId === breedId);
}

/** True while FaunaHub publishes no commercial breed content. Asserted by tests. */
export const COMMERCE_ENABLED = false;
