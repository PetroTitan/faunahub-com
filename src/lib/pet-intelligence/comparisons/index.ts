/**
 * Breed comparisons — architecture and the published corpus.
 *
 * ROUTING. Breed comparisons live at `/dogs/compare/[slug]` and
 * `/cats/compare/[slug]`, NOT inside the existing `/animal-compare`. That
 * cluster compares species and taxa — "Lion vs Tiger" — and its records carry
 * `animalSlugs` that resolve into the animal registry. A Labrador is not a
 * species competing with the dog profile, and folding breed pairs into the same
 * namespace would have made "dog vs cat" and "Labrador vs Golden Retriever"
 * indistinguishable in routing, in search, and in the pair index. The two
 * systems answer different questions and stay separate. See
 * docs/pet-intelligence/breed-comparison-architecture.md.
 *
 * WHERE THE PAIRS COME FROM. The candidate graph is SOURCED, not inferred. Its
 * primary input is the AKC's own `related_breeds` field, restricted to pairs
 * where the relationship is MUTUAL — 201 of them, where both breeds are
 * published here. That matters more than it might seem: a comparison
 * page asserts, implicitly, that these two breeds are worth comparing. If
 * FaunaHub derived that premise from shared attributes it would be inventing the
 * question as well as answering it. Here the registry supplies the question.
 *
 * Cats have no equivalent field, so their candidates come from shared registry
 * facts — same FIFe category or both CFA Championship, plus the same coat
 * length — which is a weaker signal and produces a smaller corpus. That is the
 * honest outcome rather than a reason to invent pairs.
 *
 * WHAT A COMPARISON MAY NEVER DO. There is no winner, no "better breed", no
 * "safer", no "smarter", and no score. Every dimension renders both breeds'
 * published values side by side and stops. Deriving a verdict from two ordinal
 * bands would manufacture a judgement out of data that cannot carry one — see
 * docs/pet-intelligence/ranking-policy.md.
 */
import { breedsForSpecies, getBreed, span } from "../index.ts";
import { AKC_RELATED_PAIRS } from "./akc-related.ts";
import type { Breed, BreedSpecies } from "../types.ts";

export type CandidateState = "candidate" | "published" | "rejected";

export interface ComparisonPair {
  slug: string;
  species: BreedSpecies;
  a: Breed;
  b: Breed;
  /** Why this pair is worth comparing, in the source's terms. */
  basis: string;
  /** How many dimensions both breeds actually populate. */
  sharedDimensions: number;
}

/** Canonical, order-independent slug for a pair. */
export function pairSlug(a: string, b: string): string {
  return [a, b].sort().join("-vs-");
}

/**
 * Dimensions a comparison can show. A pair is only worth publishing if both
 * breeds populate enough of them — otherwise the page is two columns of "not
 * recorded", which tells a reader nothing and looks like a broken page.
 */
export const COMPARISON_DIMENSIONS = [
  "registryGroup",
  "sizeClass",
  "heightCm",
  "weightKg",
  "coatLength",
  "exerciseNeeds",
  "groomingNeeds",
  "shedding",
  "trainability",
  "vocality",
  "lifespanYears",
] as const;

export type ComparisonDimension = (typeof COMPARISON_DIMENSIONS)[number];

function populated(breed: Breed, dimension: ComparisonDimension): boolean {
  switch (dimension) {
    case "registryGroup":
      return breed.recognition.some((r) => Boolean(r.registryGroup));
    case "sizeClass":
      return Boolean(breed.sizeClass);
    case "heightCm":
      return Boolean(breed.measurements?.heightCm?.length);
    case "weightKg":
      return Boolean(breed.measurements?.weightKg?.length);
    case "coatLength":
      return Boolean(breed.coat?.length);
    case "lifespanYears":
      return Boolean(breed.lifespanYears);
    default:
      return Boolean(breed.traits[dimension]);
  }
}

export function sharedDimensions(a: Breed, b: Breed): ComparisonDimension[] {
  return COMPARISON_DIMENSIONS.filter((d) => populated(a, d) && populated(b, d));
}

/**
 * How many shared dimensions a pair needs to publish, BY SPECIES.
 *
 * Species-aware for the same reason the weight bands are: a single number here
 * is silently dog-calibrated. Dogs can populate all eleven dimensions, so seven
 * is a meaningful bar. Cats can populate at most three — registry group, coat
 * length, and a published weight where CFA states one — because neither cat
 * registry publishes a trait scale, a height, or a lifespan. Applying the dog
 * bar to cats produced ZERO cat comparisons from 66 candidates, which looked
 * like an absence of data and was actually a mis-set threshold.
 *
 * Three is therefore the cat bar, and it is a real bar: it requires BOTH breeds
 * to carry a published weight, which only 16 of 55 do. A cat comparison is
 * genuinely thinner than a dog one, and the page says so rather than padding.
 */
export const MIN_SHARED_DIMENSIONS: Record<BreedSpecies, number> = {
  dog: 7,
  cat: 3,
};

function buildDogCandidates(): ComparisonPair[] {
  const out: ComparisonPair[] = [];
  for (const [aSlug, bSlug] of AKC_RELATED_PAIRS) {
    const a = getBreed("dog", aSlug);
    const b = getBreed("dog", bSlug);
    if (!a || !b) continue;
    const shared = sharedDimensions(a, b);
    out.push({
      slug: pairSlug(aSlug, bSlug),
      species: "dog",
      a,
      b,
      basis:
        "Each of these breeds is listed as related to the other on the American Kennel Club's own breed pages. FaunaHub compares pairs where that relationship is mutual, so the premise of the comparison comes from the registry rather than from FaunaHub.",
      sharedDimensions: shared.length,
    });
  }
  return out;
}

/**
 * The FIFe CATEGORY, not the whole group string.
 *
 * `registryGroup` reads "Fully recognised, category 3 (MCO Maine Coon)" — the
 * code makes it unique per breed, so comparing the raw string matched nothing
 * and produced zero cat candidates. The category number is the part that two
 * breeds can actually share.
 */
function catRegistryKey(breed: Breed): string | undefined {
  const fife = breed.recognition.find((r) => r.registryId === "fife")?.registryGroup;
  return fife?.match(/category (\d)/)?.[1];
}

function buildCatCandidates(): ComparisonPair[] {
  const cats = breedsForSpecies("cat");
  const out: ComparisonPair[] = [];
  for (let i = 0; i < cats.length; i += 1) {
    for (let j = i + 1; j < cats.length; j += 1) {
      const a = cats[i];
      const b = cats[j];
      const sameCoat = a.coat?.length && a.coat.length === b.coat?.length;
      const sameCategory = catRegistryKey(a) && catRegistryKey(a) === catRegistryKey(b);
      if (!sameCoat || !sameCategory) continue;
      const shared = sharedDimensions(a, b);
      out.push({
        slug: pairSlug(a.slug, b.slug),
        species: "cat",
        a,
        b,
        basis:
          "Both breeds are recognised in the same FIFe category and recorded with the same coat length, which is why FaunaHub compares them. Neither CFA nor FIFe publishes a related-breeds list, so this is a weaker basis than the dog comparisons and the corpus is correspondingly smaller.",
        sharedDimensions: shared.length,
      });
    }
  }
  return out;
}

/** Every candidate, whether or not it clears the publication bar. */
export const COMPARISON_CANDIDATES: readonly ComparisonPair[] = [
  ...buildDogCandidates(),
  ...buildCatCandidates(),
].sort((a, b) => a.slug.localeCompare(b.slug));

/**
 * Published comparisons.
 *
 * A candidate publishes when both breeds populate at least
 * `MIN_SHARED_DIMENSIONS`. There is no cap and no hand-picking: capping would
 * mean choosing which sourced pairs to honour, and hand-picking would put
 * FaunaHub's judgement back into a graph whose value is that it is the
 * registry's.
 */
export const PUBLISHED_COMPARISONS: readonly ComparisonPair[] =
  COMPARISON_CANDIDATES.filter((p) => p.sharedDimensions >= MIN_SHARED_DIMENSIONS[p.species]);

const BY_KEY = new Map(PUBLISHED_COMPARISONS.map((p) => [`${p.species}:${p.slug}`, p]));

export function getComparison(species: BreedSpecies, slug: string): ComparisonPair | undefined {
  return BY_KEY.get(`${species}:${slug}`);
}

export function comparisonPath(pair: Pick<ComparisonPair, "species" | "slug">): string {
  return `/${pair.species === "dog" ? "dogs" : "cats"}/compare/${pair.slug}`;
}

/** Published comparisons that involve this breed. */
export function comparisonsForBreed(breed: Breed, limit = 6): ComparisonPair[] {
  return PUBLISHED_COMPARISONS.filter(
    (p) => p.species === breed.species && (p.a.id === breed.id || p.b.id === breed.id),
  ).slice(0, limit);
}

/** Other published comparisons sharing a breed with this one. */
export function relatedComparisons(pair: ComparisonPair, limit = 6): ComparisonPair[] {
  return PUBLISHED_COMPARISONS.filter(
    (p) =>
      p.slug !== pair.slug &&
      p.species === pair.species &&
      [p.a.id, p.b.id].some((id) => id === pair.a.id || id === pair.b.id),
  ).slice(0, limit);
}

/* ------------------------------------------------------------------ *
 * Rendering helpers — values only, never verdicts
 * ------------------------------------------------------------------ */

export const DIMENSION_LABEL: Record<ComparisonDimension, string> = {
  registryGroup: "Registry group",
  sizeClass: "Adult size band",
  heightCm: "Published height",
  weightKg: "Published weight",
  coatLength: "Coat length",
  exerciseNeeds: "Exercise needs",
  groomingNeeds: "Grooming needs",
  shedding: "Shedding",
  trainability: "Trainability",
  vocality: "Vocality",
  lifespanYears: "Published lifespan",
};

/**
 * A short statement of what actually differs, built only from values both
 * breeds record. It reports differences; it never says which is preferable.
 */
export function differenceSummary(pair: ComparisonPair): string[] {
  const { a, b } = pair;
  const out: string[] = [];

  const aw = span(a.measurements?.weightKg);
  const bw = span(b.measurements?.weightKg);
  if (aw.max !== undefined && bw.max !== undefined && aw.max !== bw.max) {
    const [heavier, lighter] = aw.max > bw.max ? [a, b] : [b, a];
    out.push(
      `${heavier.name} has the higher published weight ceiling (${Math.max(aw.max, bw.max)} kg against ${Math.min(aw.max, bw.max)} kg for the ${lighter.name}).`,
    );
  }
  if (a.sizeClass && b.sizeClass && a.sizeClass !== b.sizeClass) {
    out.push(`Their derived size bands differ: ${a.name} is ${a.sizeClass}, ${b.name} is ${b.sizeClass}.`);
  }
  if (a.coat?.length && b.coat?.length && a.coat.length !== b.coat.length) {
    out.push(`Coat length differs: ${a.coat.length} for the ${a.name}, ${b.coat.length} for the ${b.name}.`);
  }
  for (const key of ["exerciseNeeds", "groomingNeeds", "shedding", "trainability", "vocality"] as const) {
    const av = a.traits[key]?.value;
    const bv = b.traits[key]?.value;
    if (av && bv && av !== bv) {
      out.push(
        `${DIMENSION_LABEL[key]}: ${a.name} is recorded in the ${av} band, ${b.name} in the ${bv} band.`,
      );
    }
  }
  const ag = a.recognition.find((r) => r.registryId === "akc" || r.registryId === "cfa")?.registryGroup;
  const bg = b.recognition.find((r) => r.registryId === "akc" || r.registryId === "cfa")?.registryGroup;
  if (ag && bg && ag !== bg) {
    out.push(`Their registries file them differently: ${a.name} in ${ag}, ${b.name} in ${bg}.`);
  }
  return out;
}
