/**
 * Which Finder filters are allowed to exist.
 *
 * A filter is a promise: it tells a reader that choosing "Higher grooming" will
 * show them the breeds with higher grooming needs. If the underlying field is
 * only recorded for half the corpus, the filter quietly hides the other half —
 * and the reader has no way to tell an excluded breed from an unrecorded one.
 *
 * So coverage decides, not intent. Every facet is measured against the species
 * it applies to, and the tier it lands in decides whether it ships:
 *
 *   >= 80%   primary     shown as a normal filter
 *   50-79%   partial     shown, but must state its coverage in the UI
 *   < 80% and < 50%  internal    computed, never rendered as a filter
 *
 * The numbers come from the registry itself at build time, so a facet cannot
 * keep shipping after the data behind it degrades — and a facet that is absent
 * from the UI is absent because it was measured, not because it was forgotten.
 * `npm run breeds:facets` prints the current table.
 */
import { breedsForSpecies } from "./index.ts";
import { ORDINAL_TRAIT_KEYS } from "./types.ts";
import type { Breed, BreedSpecies } from "./types.ts";

export type FacetTier = "primary" | "partial" | "internal";

export interface FacetCoverage {
  /** Stable id, used as the query-key if the facet is ever exposed. */
  id: string;
  label: string;
  species: BreedSpecies;
  /** Breeds in this species. */
  total: number;
  /** Breeds with a usable value. */
  covered: number;
  /** covered / total, 0-1. */
  coverage: number;
  /** How many different values actually occur. A facet with one value filters
   * nothing, so it is held back regardless of coverage. */
  distinctValues: number;
  values: { value: string; count: number }[];
  tier: FacetTier;
  /** Why this facet is in the tier it is in. Rendered in the docs table. */
  note: string;
}

const PRIMARY_THRESHOLD = 0.8;
const PARTIAL_THRESHOLD = 0.5;

/** A facet needs at least this many distinct values to filter anything. */
const MIN_DISTINCT = 2;

type Extractor = (breed: Breed) => string | undefined;

const FACET_DEFS: { id: string; label: string; extract: Extractor }[] = [
  { id: "sizeClass", label: "Adult size", extract: (b) => b.sizeClass },
  { id: "coatLength", label: "Coat length", extract: (b) => b.coat?.length },
  {
    id: "registryGroup",
    label: "Registry group",
    extract: (b) =>
      b.recognition.find((r) => r.registryId === "akc" || r.registryId === "cfa")?.registryGroup,
  },
  ...ORDINAL_TRAIT_KEYS.map((key) => ({
    id: key,
    label: {
      shedding: "Shedding",
      groomingNeeds: "Grooming needs",
      exerciseNeeds: "Exercise needs",
      trainability: "Trainability",
      vocality: "Vocality",
    }[key],
    extract: (b: Breed) => b.traits[key]?.value,
  })),
];

function tierFor(coverage: number, distinct: number): { tier: FacetTier; note: string } {
  if (distinct < MIN_DISTINCT) {
    return {
      tier: "internal",
      note:
        distinct === 0
          ? "No breed in this species records a value, so there is nothing to filter on."
          : "Every breed that records a value records the SAME value, so a filter would never narrow anything.",
    };
  }
  if (coverage >= PRIMARY_THRESHOLD) {
    return { tier: "primary", note: "Coverage is high enough to filter without hiding breeds silently." };
  }
  if (coverage >= PARTIAL_THRESHOLD) {
    return {
      tier: "partial",
      note: "Partial coverage. May be exposed only alongside a visible statement of how many breeds carry a value.",
    };
  }
  return {
    tier: "internal",
    note: "Coverage is too low to expose: filtering would hide more breeds than it reveals.",
  };
}

export function facetCoverage(species: BreedSpecies): FacetCoverage[] {
  const breeds = breedsForSpecies(species);
  const total = breeds.length;
  return FACET_DEFS.map((def) => {
    const counts = new Map<string, number>();
    for (const breed of breeds) {
      const value = def.extract(breed);
      if (value === undefined) continue;
      counts.set(value, (counts.get(value) ?? 0) + 1);
    }
    const covered = [...counts.values()].reduce((a, b) => a + b, 0);
    const coverage = total === 0 ? 0 : covered / total;
    const { tier, note } = tierFor(coverage, counts.size);
    return {
      id: def.id,
      label: def.label,
      species,
      total,
      covered,
      coverage,
      distinctValues: counts.size,
      values: [...counts.entries()]
        .map(([value, count]) => ({ value, count }))
        .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value)),
      tier,
      note,
    };
  });
}

/** The facets a species' Finder may actually render. */
export function exposedFacets(species: BreedSpecies): FacetCoverage[] {
  return facetCoverage(species).filter((f) => f.tier !== "internal");
}

export function allFacetCoverage(): FacetCoverage[] {
  return [...facetCoverage("dog"), ...facetCoverage("cat")];
}
