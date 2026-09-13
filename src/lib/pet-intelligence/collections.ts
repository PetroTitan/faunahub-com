/**
 * Breed collections — discovery pages derived from the registry.
 *
 * A collection is a QUERY, not a curated list. "Large dog breeds" is every dog
 * whose derived size band is `large`; nobody chooses its members, and its
 * membership changes automatically when the corpus does. That is what keeps it
 * honest at 274 breeds and would keep it honest at 500.
 *
 * Three rules govern what may exist here.
 *
 * 1. A collection may only select on a field the registry actually records, and
 *    only where that field's facet coverage is strong enough to publish. If the
 *    data cannot support the filter in the Breed Finder, it cannot support a
 *    page either — the page is just a saved filter with prose around it.
 *
 * 2. A collection is a CATEGORY, never a ranking. Members are listed
 *    alphabetically. There is no "best", no score, no order that implies one
 *    breed is a better answer than another. Ordered pages are a separate thing
 *    (see `rankings.ts`) and are only allowed where a common measurement exists.
 *
 * 3. The title must describe the MEMBERSHIP TEST, not a recommendation.
 *    "Dog Breeds With Higher Grooming Needs" is a statement about what the
 *    registry records. "Best Low-Maintenance Dogs" is a promise about outcomes
 *    FaunaHub cannot make. See docs/pet-intelligence/ranking-policy.md.
 *
 * Nothing here overlaps the existing `/dogs/breeds/best-*` decision guides,
 * which are hand-written household-intent articles rather than registry queries.
 * A test asserts the two slug spaces never collide.
 */
import { breedsForSpecies } from "./index.ts";
import { fitDescription } from "./presentation.ts";
import { ORDINAL_TRAIT_KEYS } from "./types.ts";
import type { Breed, BreedSpecies, OrdinalTrait, SizeClass } from "./types.ts";

export type CollectionAxis = "sizeClass" | "coatLength" | "registryGroup" | "trait";

export interface BreedCollection {
  slug: string;
  species: BreedSpecies;
  /** H1 and <title> stem. Describes the membership test. */
  title: string;
  /** One-sentence meta description. */
  description: string;
  /** What the page says about how membership is decided. */
  methodology: string;
  axis: CollectionAxis;
  /** Membership test. Pure and synchronous — collections are computed at build. */
  matches: (breed: Breed) => boolean;
}

const SIZE_COPY: Record<SizeClass, { label: string; gloss: string }> = {
  toy: {
    label: "Toy",
    gloss: "a published adult weight up to 5.5 kg",
  },
  small: {
    label: "Small",
    gloss: "a published adult weight above 5.5 kg and up to 11 kg",
  },
  medium: {
    label: "Medium",
    gloss: "a published adult weight above 11 kg and up to 25 kg",
  },
  large: {
    label: "Large",
    gloss: "a published adult weight above 25 kg and up to 45 kg",
  },
  giant: {
    label: "Giant",
    gloss: "a published adult weight above 45 kg",
  },
};

const SIZE_METHOD =
  "Membership is derived from the upper end of the weight range the breed's registry publishes, not from an editorial judgement about how big a breed looks. Bands are calibrated for dogs. A breed whose standard publishes no weight, or publishes only a floor, is absent rather than guessed at — so this page is a view of what the registry states, not a complete taxonomy of dog size.";

const TRAIT_COPY: Record<
  (typeof ORDINAL_TRAIT_KEYS)[number],
  { noun: string; means: string; notMeans: string }
> = {
  shedding: {
    noun: "Shedding",
    means: "the relative volume of hair the breed is described as shedding",
    notMeans:
      "This is NOT an allergy signal. No breed is hypoallergenic: allergens come from dander and saliva as well as hair, so a lower-shedding breed does not reliably reduce exposure.",
  },
  groomingNeeds: {
    noun: "Grooming Needs",
    means: "the relative frequency of coat maintenance the breed is described as needing",
    notMeans:
      "This says nothing about whether the breed is easy overall. Grooming is one axis of care among many — a breed with lower grooming needs may still need a great deal of exercise, training, or time.",
  },
  exerciseNeeds: {
    noun: "Exercise Needs",
    means: "the relative routine activity demand the breed is described as having",
    notMeans:
      "This is not a measure of athleticism, stamina, or capability. A breed with lower exercise needs is not a less capable animal; it is one whose routine demand is described as smaller.",
  },
  trainability: {
    noun: "Trainability",
    means:
      "how readily the breed is generally described as responding to structured training",
    notMeans:
      "Trainability is NOT intelligence. This is the most commonly misused breed statistic on the web. A breed described as less trainable is frequently one described as independent-minded, which is a different property from cognitive ability and is not a deficiency.",
  },
  vocality: {
    noun: "Vocality",
    means: "the relative frequency with which the breed is described as vocalising",
    notMeans:
      "Vocalising is a description, not a behaviour problem or a training failure. It is included because it genuinely affects whether a household — an apartment, a shared wall — is a good fit.",
  },
};

const TRAIT_METHOD =
  "Trait bands are normalised from the AKC's published trait scale into three levels — lower, moderate, higher. FaunaHub stores the band and never a score, because a registry trait scale is an editorial judgement rather than a measurement, and re-publishing it as a number would imply a precision it never had. Membership here describes the breed as a registry describes it, not the animal in front of you.";

const BAND_LABEL: Record<OrdinalTrait, string> = {
  lower: "Lower",
  moderate: "Moderate",
  higher: "Higher",
};

function sizeCollections(): BreedCollection[] {
  return (Object.keys(SIZE_COPY) as SizeClass[]).map((size) => ({
    slug: `${size}-dog-breeds`,
    species: "dog" as const,
    title: `${SIZE_COPY[size].label} Dog Breeds`,
    description: fitDescription(`Dog breeds whose registry-published adult weight places them in the ${size} band — ${SIZE_COPY[size].gloss}. Alphabetical, with measurements.`),
    methodology: SIZE_METHOD,
    axis: "sizeClass" as const,
    matches: (b: Breed) => b.sizeClass === size,
  }));
}

function coatCollections(): BreedCollection[] {
  const defs: { species: BreedSpecies; value: string; title: string; noun: string }[] = [
    { species: "dog", value: "short", title: "Short-Coated Dog Breeds", noun: "dog" },
    { species: "dog", value: "medium", title: "Medium-Coated Dog Breeds", noun: "dog" },
    { species: "dog", value: "long", title: "Long-Coated Dog Breeds", noun: "dog" },
    { species: "cat", value: "short", title: "Short-Haired Cat Breeds", noun: "cat" },
    { species: "cat", value: "long", title: "Long-Haired Cat Breeds", noun: "cat" },
    { species: "cat", value: "variable", title: "Cat Breeds Recognised in Both Coat Lengths", noun: "cat" },
  ];
  return defs.map((d) => ({
    slug: d.title.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, ""),
    species: d.species,
    title: d.title,
    description: fitDescription(
      d.value === "variable"
        ? "Cat breeds their registry recognises in both longhair and shorthair, listed alphabetically with the registry wording."
        : `${d.noun === "dog" ? "Dog" : "Cat"} breeds whose registry records a ${d.value} coat, listed alphabetically with the registry's own wording.`,
    ),
    methodology:
      d.species === "cat"
        ? "Coat length comes from the CFA breed profile's own \"Coat Length\" field, or from the breed's registry name where that names the coat. Breeds their registry recognises in both lengths are recorded as recognised in both rather than being filed under one."
        : "Coat length comes from the AKC's published coat-length field for the breed. A breed with no recorded coat length is absent rather than assigned one.",
    axis: "coatLength" as const,
    matches: (b: Breed) => b.species === d.species && b.coat?.length === d.value,
  }));
}

function groupCollections(): BreedCollection[] {
  const groups = [
    { group: "Sporting Group", slug: "sporting-group-dog-breeds", title: "Sporting Group Dog Breeds" },
    { group: "Hound Group", slug: "hound-group-dog-breeds", title: "Hound Group Dog Breeds" },
    { group: "Working Group", slug: "working-group-dog-breeds", title: "Working Group Dog Breeds" },
    { group: "Terrier Group", slug: "terrier-group-dog-breeds", title: "Terrier Group Dog Breeds" },
    { group: "Toy Group", slug: "toy-group-dog-breeds", title: "Toy Group Dog Breeds" },
    { group: "Non-Sporting Group", slug: "non-sporting-group-dog-breeds", title: "Non-Sporting Group Dog Breeds" },
    { group: "Herding Group", slug: "herding-group-dog-breeds", title: "Herding Group Dog Breeds" },
  ];
  return groups.map((g) => ({
    slug: g.slug,
    species: "dog" as const,
    title: g.title,
    description: fitDescription(`Dog breeds the American Kennel Club places in its ${g.group}, listed alphabetically, each linked to its registry entry.`),
    methodology: `Membership is the AKC's own classification, taken verbatim from each breed's AKC entry. Registry groups are NOT interchangeable between organisations — the FCI classifies the same dogs into ten numbered groups on a different basis, and a breed in the AKC's ${g.group} may sit in a differently-named FCI group. This page reports one registry's view and says whose it is.`,
    axis: "registryGroup" as const,
    matches: (b: Breed) =>
      b.recognition.some((r) => r.registryId === "akc" && r.registryGroup === g.group),
  }));
}

/** Trait collections, only for bands worth a page (higher and lower, not moderate). */
function traitCollections(): BreedCollection[] {
  const wanted: { key: (typeof ORDINAL_TRAIT_KEYS)[number]; bands: OrdinalTrait[] }[] = [
    { key: "exerciseNeeds", bands: ["higher", "moderate"] },
    { key: "groomingNeeds", bands: ["higher", "lower"] },
    { key: "shedding", bands: ["higher", "lower"] },
    { key: "trainability", bands: ["higher"] },
    { key: "vocality", bands: ["higher", "lower"] },
  ];
  const out: BreedCollection[] = [];
  for (const { key, bands } of wanted) {
    for (const band of bands) {
      const copy = TRAIT_COPY[key];
      out.push({
        slug: `dog-breeds-with-${band}-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`,
        species: "dog",
        title: `Dog Breeds With ${BAND_LABEL[band]} ${copy.noun}`,
        description: fitDescription(`Dog breeds recorded in the ${band} band for ${copy.noun.toLowerCase()} — ${copy.means}. Alphabetical, never ranked.`),
        methodology: `${TRAIT_METHOD} ${copy.notMeans}`,
        axis: "trait",
        matches: (b: Breed) => b.traits[key]?.value === band,
      });
    }
  }
  return out;
}

export const BREED_COLLECTIONS: readonly BreedCollection[] = [
  ...sizeCollections(),
  ...coatCollections(),
  ...groupCollections(),
  ...traitCollections(),
];

/** Members of a collection, alphabetical. Never ordered by anything else. */
export function collectionMembers(collection: BreedCollection): Breed[] {
  return breedsForSpecies(collection.species)
    .filter(collection.matches)
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Collections with enough members to publish.
 *
 * A page listing one or two breeds is not a category, it is a breed page with
 * extra steps — and at 274 breeds it would also be a sign the axis is wrong.
 * Below the floor the collection is computed and simply not published, the same
 * way a Finder facet below its coverage threshold is computed and not exposed.
 */
export const MIN_COLLECTION_MEMBERS = 5;

export function publishedCollections(): BreedCollection[] {
  return BREED_COLLECTIONS.filter(
    (c) => collectionMembers(c).length >= MIN_COLLECTION_MEMBERS,
  );
}

export function getCollection(species: BreedSpecies, slug: string): BreedCollection | undefined {
  return publishedCollections().find((c) => c.species === species && c.slug === slug);
}

export function collectionPath(collection: BreedCollection): string {
  return `/${collection.species === "dog" ? "dogs" : "cats"}/breeds/${collection.slug}`;
}

/** Other published collections on the same axis, for cross-linking. */
export function relatedCollections(collection: BreedCollection, limit = 6): BreedCollection[] {
  return publishedCollections()
    .filter(
      (c) =>
        c.slug !== collection.slug &&
        c.species === collection.species &&
        c.axis === collection.axis,
    )
    .slice(0, limit);
}
