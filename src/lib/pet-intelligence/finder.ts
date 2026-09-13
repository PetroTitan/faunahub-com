/**
 * The compact projection the Breed Finder ships to the browser.
 *
 * A breed record carries its full editorial prose — eight or nine paragraphs
 * and four FAQs. Sending that to a filter UI would put roughly 4 KB of text per
 * breed into the page payload for text the Finder never renders, and at the
 * 500-breed scale this architecture is meant to reach, that is about 2 MB of
 * dead weight. So the Finder gets a projection: identity, the filterable axes,
 * and one image path.
 *
 * The projection is built on the server and embedded in the prerendered page,
 * so there is no fetch and no API route — consistent with how the Animal Finder
 * and Global Search already work on this site.
 */
import { getBreedHeroImage } from "@/lib/images/breed-images";
import { breedPath, breedsForSpecies, span } from "./index.ts";
import { exposedFacets, type FacetCoverage } from "./facets.ts";
import type { BreedSpecies, OrdinalTrait } from "./types.ts";

export interface FinderBreed {
  slug: string;
  name: string;
  url: string;
  /** Lowercased name plus aliases, for the Finder's text box. */
  search: string;
  group?: string;
  sizeClass?: string;
  coatLength?: string;
  /** Ordinal trait values, keyed by trait id. Bands only — never a score. */
  traits: Partial<Record<string, OrdinalTrait>>;
  /** Upper end of the published weight span, kg. Absent where none is published. */
  weightMaxKg?: number;
  image?: { src: string; alt: string };
}

export function finderBreeds(species: BreedSpecies): FinderBreed[] {
  return breedsForSpecies(species).map((breed) => {
    const image = getBreedHeroImage(breed.species, breed.slug);
    const group = breed.recognition.find(
      (r) => r.registryId === "akc" || r.registryId === "cfa",
    )?.registryGroup;
    const traits: Partial<Record<string, OrdinalTrait>> = {};
    for (const [key, value] of Object.entries(breed.traits)) {
      if (value) traits[key] = value.value;
    }
    const names = [breed.name, breed.canonicalCommonName, ...(breed.aliases ?? [])]
      .filter((n): n is string => Boolean(n))
      .join(" ");
    return {
      slug: breed.slug,
      name: breed.name,
      url: breedPath(breed),
      search: names.toLowerCase(),
      group,
      sizeClass: breed.sizeClass,
      coatLength: breed.coat?.length,
      traits,
      weightMaxKg: span(breed.measurements?.weightKg).max,
      image: image ? { src: image.localPath, alt: image.alt } : undefined,
    };
  });
}

export interface FinderFacet {
  id: string;
  label: string;
  /** The option values, in the order the UI should show them. */
  options: { value: string; label: string; count: number }[];
  /** True when this facet does not cover the whole species. */
  partial: boolean;
  covered: number;
  total: number;
}

/** Ordinal facets read low-to-high; everything else reads most-common-first. */
const ORDINAL_SEQUENCE = ["lower", "moderate", "higher"];

function optionLabel(facetId: string, value: string): string {
  if (ORDINAL_SEQUENCE.includes(value)) {
    return { lower: "Lower", moderate: "Moderate", higher: "Higher" }[value] ?? value;
  }
  if (facetId === "sizeClass" || facetId === "coatLength") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return value;
}

export function finderFacets(species: BreedSpecies): FinderFacet[] {
  return exposedFacets(species).map((facet: FacetCoverage) => {
    const isOrdinal = facet.values.every((v) => ORDINAL_SEQUENCE.includes(v.value));
    const values = isOrdinal
      ? [...facet.values].sort(
          (a, b) => ORDINAL_SEQUENCE.indexOf(a.value) - ORDINAL_SEQUENCE.indexOf(b.value),
        )
      : facet.values;
    return {
      id: facet.id,
      label: facet.label,
      options: values.map((v) => ({
        value: v.value,
        label: optionLabel(facet.id, v.value),
        count: v.count,
      })),
      partial: facet.tier === "partial",
      covered: facet.covered,
      total: facet.total,
    };
  });
}

/**
 * The axes the Finder is NOT offering, with the reason.
 *
 * Rendered on the page. A filter list that silently omits what it cannot do
 * leaves a reader assuming the omission is an oversight; saying "no size filter,
 * because cat breed standards publish no numbers" is both more useful and the
 * only honest version.
 */
export function withheldFacets(species: BreedSpecies): { label: string; reason: string }[] {
  const exposed = new Set(exposedFacets(species).map((f) => f.id));
  const catNoNumbers =
    "CFA breed standards describe size qualitatively and publish no height or weight, and CFA publishes no trait scale — so FaunaHub has nothing to filter on that it did not invent.";
  return [
    { id: "sizeClass", label: "Adult size" },
    { id: "coatLength", label: "Coat length" },
    { id: "registryGroup", label: "Registry group" },
    { id: "exerciseNeeds", label: "Exercise needs" },
    { id: "groomingNeeds", label: "Grooming needs" },
    { id: "shedding", label: "Shedding" },
    { id: "trainability", label: "Trainability" },
    { id: "vocality", label: "Vocality" },
  ]
    .filter((f) => !exposed.has(f.id))
    .map((f) => ({
      label: f.label,
      reason:
        f.id === "registryGroup"
          ? "Every breed in this registry sits in the same class, so filtering by it would never narrow the list."
          : catNoNumbers,
    }));
}
