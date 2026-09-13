/**
 * Pet Intelligence — the public surface of the breed registry.
 *
 * Everything a route, a component, or a build script needs comes from here.
 * The data modules underneath are not imported directly anywhere else, so the
 * invariants below (unique ids, unique slugs per species, resolvable source and
 * image ids) have exactly one place to be enforced.
 */
import { DOG_BREEDS } from "./breeds/dogs.ts";
import { CAT_BREEDS } from "./breeds/cats.ts";
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
 * weight span.
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
 * Returns undefined when there is no weight to band — which is every cat in
 * the registry, because CFA standards publish no numeric size. An undefined
 * result is a correct answer, not a gap to be filled.
 */
export function deriveSizeClass(weights: readonly Measurement[] | undefined): SizeClass | undefined {
  const { max, min } = span(weights);
  const ceiling = max ?? min;
  if (ceiling === undefined) return undefined;
  return WEIGHT_BANDS.find((b) => ceiling <= b.upTo)?.size;
}

/* ------------------------------------------------------------------ *
 * The registry
 * ------------------------------------------------------------------ */

/** Every breed, size class derived at module load so it can never drift. */
export const BREEDS: readonly Breed[] = [...DOG_BREEDS, ...CAT_BREEDS].map((breed) => ({
  ...breed,
  sizeClass: breed.sizeClass ?? deriveSizeClass(breed.measurements?.weightKg),
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
 * Relatedness is computed from what the records actually share — registry
 * group first, then size band, then coat length — rather than from a
 * hand-maintained list that would rot as breeds are added. Registry group is
 * weighted highest because it is a registry's own statement that two breeds
 * belong together, which is the only relatedness claim here that FaunaHub is
 * not making itself.
 */
export function relatedBreeds(breed: Breed, limit = 4): Breed[] {
  const groupOf = (b: Breed) =>
    b.recognition.find((r) => r.registryId === "akc" || r.registryId === "cfa")?.registryGroup;
  const myGroup = groupOf(breed);
  return breedsForSpecies(breed.species)
    .filter((b) => b.id !== breed.id)
    .map((b) => {
      let score = 0;
      if (myGroup && groupOf(b) === myGroup) score += 3;
      if (breed.sizeClass && b.sizeClass === breed.sizeClass) score += 2;
      if (breed.coat?.length && b.coat?.length === breed.coat.length) score += 1;
      return { breed: b, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.breed.name.localeCompare(b.breed.name))
    .slice(0, limit)
    .map((x) => x.breed);
}
