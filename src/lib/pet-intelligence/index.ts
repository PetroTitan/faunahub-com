/**
 * Pet Intelligence — the public surface of the breed registry.
 *
 * Everything a route, a component, or a build script needs comes from here.
 * The data modules underneath are not imported directly anywhere else, so the
 * invariants below (unique ids, unique slugs per species, resolvable source and
 * image ids) have exactly one place to be enforced.
 */
import { DOG_BREEDS } from "./breeds/dogs/index.ts";
import { CAT_BREEDS } from "./breeds/cats/index.ts";
import { span } from "./measure.ts";
import type { Breed, BreedSpecies, Measurement, SizeClass } from "./types.ts";

export * from "./types.ts";
export {
  breedPageTitle,
  breedPageDescription,
  breedSearchDescription,
  breedPageTags,
} from "./presentation.ts";
export { BREED_REGISTRIES, getRegistry, citableRegistryIds } from "./registries.ts";
export { BREED_SOURCES, getBreedSource } from "./sources.ts";
export {
  ORDINAL_LABEL,
  ORDINAL_ORDER,
  AKC_TRAIT_MAP,
  AKC_TRAITS_EXCLUDED,
  bandFromFivePointScale,
} from "./trait-scale.ts";
export {
  basisLabel,
  formatMeasurement,
  formatLifespan,
  span,
  parseMeasurementString,
  parseLifespanYears,
} from "./measure.ts";

/* ------------------------------------------------------------------ *
 * Size banding
 * ------------------------------------------------------------------ */

/**
 * Weight bands, in kilograms, keyed by the UPPER end of a breed's published
 * weight span. CALIBRATED FOR DOGS, and applicable only to dogs.
 *
 * Derived rather than asserted, so the band for a breed can be recomputed from
 * its sources and argued with. Weight is the axis, not height: height alone
 * files a Dachshund as a toy breed because the standard measures a long dog at
 * the shoulder, which is true and useless.
 *
 * The bands will not always match colloquial usage — a French Bulldog's
 * published ceiling of "under 28 pounds" lands it at the bottom of `medium`
 * where many people would say "small". That is a property of banding a
 * continuous measure, and the page always shows the measurements themselves
 * next to the band so a reader is never left with only the label.
 *
 * WHY THESE BANDS ARE DOG-ONLY. An adversarial review found four CFA breed
 * PROFILE pages that publish weights even though none of the eight CFA
 * STANDARDS does. Adding those four measurements immediately banded the Maine
 * Coon — which its own CFA page calls "the gentle giant of the cat fancy" — as
 * `small`, because 9.1 kg is a small DOG. The scale a band means is a property
 * of the species, and a shared numeric ladder across two species produces
 * confidently wrong labels from correct data. Cats therefore carry
 * measurements and NO size class until a cat-calibrated ladder exists with
 * evidence behind it.
 */
const WEIGHT_BANDS: readonly { upTo: number; size: SizeClass }[] = [
  { upTo: 5.5, size: "toy" },
  { upTo: 11, size: "small" },
  { upTo: 25, size: "medium" },
  { upTo: 45, size: "large" },
  { upTo: Infinity, size: "giant" },
];

/**
 * Bands a breed from its published weight.
 *
 * Returns undefined for cats unconditionally (see WEIGHT_BANDS), and for any
 * breed with no published weight. An undefined result is a correct answer, not
 * a gap to be filled.
 */
export function deriveSizeClass(
  species: BreedSpecies,
  weights: readonly Measurement[] | undefined,
): SizeClass | undefined {
  if (species !== "dog") return undefined;
  if (!weights?.length) return undefined;
  // An unbounded range cannot be banded. Falling back to the MINIMUM used to
  // turn a standard that says only "over 90 pounds" into `large`, which invents
  // the ceiling the standard deliberately left open.
  if (weights.some((m) => m.max === undefined)) return undefined;
  const { max } = span(weights);
  if (max === undefined) return undefined;
  return WEIGHT_BANDS.find((b) => max <= b.upTo)?.size;
}

/* ------------------------------------------------------------------ *
 * The registry
 * ------------------------------------------------------------------ */

/** Every breed, size class derived at module load so it can never drift. */
export const BREEDS: readonly Breed[] = [...DOG_BREEDS, ...CAT_BREEDS].map((breed) => ({
  ...breed,
  sizeClass: breed.sizeClass ?? deriveSizeClass(breed.species, breed.measurements?.weightKg),
}));

export const DOG_BREED_RECORDS = BREEDS.filter((b) => b.species === "dog");
export const CAT_BREED_RECORDS = BREEDS.filter((b) => b.species === "cat");

const BY_KEY = new Map(BREEDS.map((b) => [`${b.species}:${b.slug}`, b]));

export function getBreed(species: BreedSpecies, slug: string): Breed | undefined {
  return BY_KEY.get(`${species}:${slug}`);
}

export function breedsForSpecies(species: BreedSpecies): readonly Breed[] {
  return species === "dog" ? DOG_BREED_RECORDS : CAT_BREED_RECORDS;
}

/** The published path for a breed. The ONLY place this URL shape is built. */
export function breedPath(breed: Pick<Breed, "species" | "slug">): string {
  return `${breedHubPath(breed.species)}/${breed.slug}`;
}

export function breedHubPath(species: BreedSpecies): string {
  return species === "dog" ? "/dogs/breeds" : "/cats/breeds";
}

export function breedFinderPath(species: BreedSpecies): string {
  return species === "dog" ? "/dogs/breed-finder" : "/cats/breed-finder";
}

export const SPECIES_LABEL: Record<BreedSpecies, string> = {
  dog: "Dog breed",
  cat: "Cat breed",
};

/**
 * Names a search index may use for a breed: its own name, the registry's name
 * for it, and its cited aliases. Never a speculative query term.
 */
export function breedSearchNames(breed: Breed): string[] {
  const names = [breed.name, breed.canonicalCommonName, ...(breed.aliases ?? [])];
  return [...new Set(names.filter((n): n is string => Boolean(n)))];
}

/**
 * Related breeds, within one species.
 *
 * Relatedness is computed from what the records actually share rather than from
 * a hand-maintained list that would rot as breeds are added. Registry group is
 * weighted highest because it is a registry's own statement that two breeds
 * belong together — the only relatedness claim here FaunaHub is not making
 * itself.
 *
 * WHY THE TIE-BREAKERS MATTER. The first version scored on group, size and coat
 * alone — six possible scores — and broke ties alphabetically. An adversarial
 * review simulated 300 dog breeds drawn from the real attribute mix and found
 * the link graph collapses: 245 of 300 breeds (82%) receive ZERO inbound links,
 * only 55 breeds are ever linked at all, and the top four absorb 49 inbound
 * links each, purely because 24 breeds tie at the top score and the four
 * alphabetically-first always win. At today's twelve breeds there are no
 * orphans, so the mechanism looks healthy exactly until the scale it was
 * written for. On an SEO-first site that is internal-link-equity collapse.
 *
 * So the score now includes finer, information-bearing signals — shared origin
 * country, shared original function, shared FCI section, and a shared lifespan
 * band — and ties break on a stable hash of the two ids rather than on the
 * alphabet. The hash is deterministic (the same pair always resolves the same
 * way, so builds stay reproducible) but distributes across the corpus instead
 * of concentrating at "A".
 */
function fciSection(breed: Breed): string | undefined {
  return breed.recognition.find((r) => r.registryId === "fci")?.registryGroup;
}

/** Deterministic, order-independent spread for tie-breaking. Not randomness. */
function pairHash(a: string, b: string): number {
  const key = a < b ? `${a}|${b}` : `${b}|${a}`;
  let h = 2166136261;
  for (let i = 0; i < key.length; i += 1) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967296;
}

export function relatedBreeds(breed: Breed, limit = 4): Breed[] {
  const groupOf = (b: Breed) =>
    b.recognition.find((r) => r.registryId === "akc" || r.registryId === "cfa")?.registryGroup;
  const myGroup = groupOf(breed);
  const myOrigins = new Set(breed.originCountries ?? []);
  const myFunctions = new Set(breed.originalFunctions ?? []);
  const mySection = fciSection(breed);

  return breedsForSpecies(breed.species)
    .filter((b) => b.id !== breed.id)
    .map((b) => {
      let score = 0;
      if (myGroup && groupOf(b) === myGroup) score += 6;
      if (mySection && fciSection(b) === mySection) score += 4;
      if (breed.sizeClass && b.sizeClass === breed.sizeClass) score += 3;
      if (breed.coat?.length && b.coat?.length === breed.coat.length) score += 2;
      if ((b.originCountries ?? []).some((c) => myOrigins.has(c))) score += 2;
      if ((b.originalFunctions ?? []).some((f) => myFunctions.has(f))) score += 2;
      const mine = breed.lifespanYears;
      const theirs = b.lifespanYears;
      if (mine?.max !== undefined && theirs?.max !== undefined && Math.abs(mine.max - theirs.max) <= 2) {
        score += 1;
      }
      return { breed: b, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || pairHash(breed.id, a.breed.id) - pairHash(breed.id, b.breed.id))
    .slice(0, limit)
    .map((x) => x.breed);
}

/**
 * The slugs a breed route must generate, for one species.
 *
 * Lives here, in a plain module, so a test can EXECUTE it. The route files are
 * .tsx and cannot be imported by Node's test runner, and the first version of
 * the parity suite worked around that by grepping the route source — which an
 * adversarial review defeated by appending `.slice(0, 3)` to the call while the
 * regex still matched, turning nine of twelve breed URLs into hard 404s that
 * stayed in the sitemap. With `dynamicParams = false` that is the most damaging
 * single-character change available in this codebase, so the list it produces
 * is now real, shared, and tested.
 */
export function breedRouteParams(species: BreedSpecies): { slug: string }[] {
  return breedsForSpecies(species).map((breed) => ({ slug: breed.slug }));
}

/**
 * Resolves a breed by an EXACT name, within one species.
 *
 * Exact only — the breed's own name, the registry's canonical name, or a cited
 * alias, case-insensitively. No fuzzy matching, no prefix matching, no
 * stemming. A decision guide that names "Russian Blue" gets nothing back,
 * because FaunaHub has no Russian Blue profile, and inventing a link to the
 * nearest-looking breed would be worse than no link at all.
 */
export function resolveBreedByExactName(
  species: BreedSpecies,
  name: string,
): Breed | undefined {
  const needle = name.trim().toLowerCase();
  return breedsForSpecies(species).find((breed) =>
    breedSearchNames(breed).some((candidate) => candidate.toLowerCase() === needle),
  );
}

/**
 * True when a human has written this breed's overview.
 *
 * The distinction is rendered, not hidden: a data profile says so. It is also
 * what the page uses to decide whether it is an Article at all — a record with
 * no prose is a structured reference entry, and calling it an article in
 * schema.org would be a claim about content that does not exist.
 */
export function hasEditorial(breed: Breed): boolean {
  return Boolean(breed.editorial?.intro?.length);
}

/** Breeds whose overview has been written, for coverage reporting. */
export function editorialCoverage(species: BreedSpecies): {
  total: number;
  authored: number;
} {
  const breeds = breedsForSpecies(species);
  return { total: breeds.length, authored: breeds.filter(hasEditorial).length };
}
