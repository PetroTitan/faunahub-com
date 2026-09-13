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
import { breedPath, breedsForSpecies, formatMeasurement, span } from "./index.ts";
import { exposedFacets, facetCoverage, type FacetCoverage } from "./facets.ts";
import type { BreedSpecies, Measurement, OrdinalTrait } from "./types.ts";

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
  /**
   * The published adult weight, already formatted, or absent.
   *
   * A plain `weightMaxKg` inverted the truth on the cat cards: the British
   * Shorthair ("males may grow as large as 17 pounds") rendered "to 7.7 kg"
   * while the Maine Coon — whose standard gives only a floor of 20 lb and is
   * much the larger cat — rendered nothing at all. A reader scanning the grid
   * would have concluded the opposite of the facts. The bound has to survive
   * into the label.
   */
  weightLabel?: string;
  image?: { src: string; alt: string };
}

/** Formats a breed's whole weight span, keeping half-open bounds open. */
function weightLabelFor(weights: readonly Measurement[] | undefined): string | undefined {
  if (!weights?.length) return undefined;
  const { min, max } = span(weights);
  const openTop = weights.some((m) => m.max === undefined);
  const openBottom = weights.every((m) => m.min === undefined);
  if (openTop && min !== undefined) return formatMeasurement({ min, bound: "at-least", basis: { kind: "breed" }, statedAs: "", sourceId: "" }, "kg");
  if (openBottom && max !== undefined) return formatMeasurement({ max, bound: "at-most", basis: { kind: "breed" }, statedAs: "", sourceId: "" }, "kg");
  if (min !== undefined && max !== undefined) return formatMeasurement({ min, max, bound: "closed", basis: { kind: "breed" }, statedAs: "", sourceId: "" }, "kg");
  return undefined;
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
      weightLabel: weightLabelFor(breed.measurements?.weightKg),
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
 * leaves a reader assuming the omission is an oversight; saying why is both
 * more useful and the only honest version.
 *
 * The list is DERIVED from the facet definitions rather than hardcoded, and the
 * reason is computed per facet from the measured coverage. The first version
 * was a hand-kept list of eight ids with a single cat-specific explanation
 * applied to all of them — which meant two things an adversarial review caught:
 * a new facet would be silently missing from the "what we don't offer" panel,
 * and if a dog facet ever fell below threshold (adding 100 FCI-sourced breeds
 * with no AKC trait scores would do it) the DOG page would have published
 * "CFA publishes no trait scale" as its reason. On a site whose doctrine is no
 * fabrication, a withheld-facet explanation has to be as sourced as the facets.
 */
export function withheldFacets(species: BreedSpecies): { label: string; reason: string }[] {
  return facetCoverage(species)
    .filter((facet) => facet.tier === "internal")
    .map((facet) => ({ label: facet.label, reason: reasonFor(species, facet) }));
}

function reasonFor(species: BreedSpecies, facet: FacetCoverage): string {
  if (facet.distinctValues === 1) {
    return `Every breed in this registry records the same value (${facet.values[0]?.value}), so filtering by it would never narrow the list.`;
  }
  if (facet.covered === 0) {
    if (species === "cat" && facet.id === "sizeClass") {
      return "FaunaHub's size bands are calibrated for dogs — 9.1 kg is a small dog and a very large cat — so no cat is banded. Four cat breeds do carry a published weight, shown on their own profile.";
    }
    if (species === "cat") {
      return "CFA publishes no trait scale of the kind the AKC does for dogs, so there is nothing to normalise.";
    }
    return "No breed in this registry records a value for this axis, so there is nothing to filter on.";
  }
  return `Recorded for only ${facet.covered} of ${facet.total} breeds — filtering would hide more than it reveals.`;
}
