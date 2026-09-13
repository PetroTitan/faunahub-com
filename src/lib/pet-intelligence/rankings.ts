/**
 * Measured breed rankings — the ONLY kind FaunaHub publishes.
 *
 * docs/pet-intelligence/ranking-policy.md divides rankings into three
 * categories. This module implements category A and nothing else: orderings
 * where the metric is a published measurement and the ordering is a fact about
 * those measurements, not an opinion about the breeds.
 *
 * There is no "smartest", no "strongest", no "best family", no "healthiest",
 * and no bite-force leaderboard here — not because they were forgotten, but
 * because none of them has a metric. A ranking without a defined measurable
 * variable is an opinion wearing a number.
 *
 * Four rules make these honest:
 *
 * 1. ONE BASIS. A breed enters a ranking only if it publishes a CLOSED range —
 *    both ends. A standard that says only "over 90 pounds" is unbounded above
 *    and cannot be placed against one that says "65-80 pounds" without
 *    inventing its ceiling. Those breeds are excluded and counted, not guessed.
 *
 * 2. SEX AND VARIETY ARE DECLARED. Registries publish separate figures for
 *    males and females, and separate figures per variety. The ranking uses the
 *    widest published span across all of them and says so, because ranking a
 *    male-only figure against a whole-breed figure would compare two different
 *    things.
 *
 * 3. TIES AND OVERLAPS ARE SHOWN. Breed ranges overlap constantly. Every row
 *    renders the range it was ordered by, so a reader can see that #4 and #9
 *    overlap rather than inferring a difference the data does not support.
 *
 * 4. NO INDIVIDUAL CLAIM. A ranking of published standards says nothing about
 *    any particular animal, and every page says so.
 */
import { breedsForSpecies, span } from "./index.ts";
import type { Breed, BreedSpecies, Measurement } from "./types.ts";

export type RankingMetric = "heightCm" | "weightKg";

export interface BreedRanking {
  slug: string;
  species: BreedSpecies;
  title: string;
  description: string;
  metric: RankingMetric;
  /** Which end of the published span orders the list. */
  orderBy: "max" | "min";
  direction: "desc" | "asc";
  unit: string;
  /** What the column of numbers is. */
  columnLabel: string;
  methodology: string;
}

/** A breed's measurements are usable only if every one is a closed range. */
export function rankableSpan(
  breed: Breed,
  metric: RankingMetric,
): { min: number; max: number } | undefined {
  const rows = breed.measurements?.[metric];
  if (!rows?.length) return undefined;
  // `about` is a single published figure — a point, and comparable.
  // `at-least` / `at-most` are half-open and are not.
  if (rows.some((m: Measurement) => m.bound === "at-least" || m.bound === "at-most")) {
    return undefined;
  }
  const { min, max } = span(rows);
  if (min === undefined || max === undefined) return undefined;
  return { min, max };
}

const COMMON =
  "This ranks PUBLISHED BREED STANDARDS, not animals. A standard describes an ideal, and individual dogs routinely fall outside it. Breeds whose standard gives only a floor or only a ceiling are excluded rather than assigned an invented other end, and the count of exclusions is shown. Where a registry publishes separate figures by sex or by variety, the widest published span is used. Ranges overlap heavily — every row shows the range it was ordered by, so two adjacent breeds are usually not meaningfully different.";

export const BREED_RANKINGS: readonly BreedRanking[] = [
  {
    slug: "tallest-dog-breeds",
    species: "dog",
    title: "Tallest Dog Breeds by Published Height",
    description:
      "Dog breeds ordered by the upper end of the height range their registry publishes. Every row shows the range and the registry's own wording; breeds with an open-ended standard are excluded and counted.",
    metric: "heightCm",
    orderBy: "max",
    direction: "desc",
    unit: "cm",
    columnLabel: "Published height",
    methodology: COMMON,
  },
  {
    slug: "heaviest-dog-breeds",
    species: "dog",
    title: "Heaviest Dog Breeds by Published Weight",
    description:
      "Dog breeds ordered by the upper end of the weight range their registry publishes, with the range shown for each so overlapping standards are visible.",
    metric: "weightKg",
    orderBy: "max",
    direction: "desc",
    unit: "kg",
    columnLabel: "Published weight",
    methodology: COMMON,
  },
  {
    slug: "smallest-dog-breeds-by-weight",
    species: "dog",
    title: "Smallest Dog Breeds by Published Weight",
    description:
      "Dog breeds ordered by the lower end of the weight range their registry publishes — the smallest published figures first.",
    metric: "weightKg",
    orderBy: "min",
    direction: "asc",
    unit: "kg",
    columnLabel: "Published weight",
    methodology: COMMON,
  },
];

export interface RankedRow {
  breed: Breed;
  min: number;
  max: number;
  /** The registry wording behind the figures, for display. */
  statedAs: string[];
}

export interface RankingResult {
  rows: RankedRow[];
  /** Breeds in this species with no usable measurement, and why. */
  excluded: { breed: Breed; reason: string }[];
}

export function rankingResult(ranking: BreedRanking, limit = 40): RankingResult {
  const rows: RankedRow[] = [];
  const excluded: { breed: Breed; reason: string }[] = [];

  for (const breed of breedsForSpecies(ranking.species)) {
    const measurements = breed.measurements?.[ranking.metric];
    const usable = rankableSpan(breed, ranking.metric);
    if (!usable) {
      excluded.push({
        breed,
        reason: !measurements?.length
          ? "the registry publishes no figure"
          : "the registry's figure is open-ended, so it has no comparable end",
      });
      continue;
    }
    rows.push({
      breed,
      ...usable,
      statedAs: (measurements ?? []).map((m) => m.statedAs),
    });
  }

  rows.sort((a, b) => {
    const av = ranking.orderBy === "max" ? a.max : a.min;
    const bv = ranking.orderBy === "max" ? b.max : b.min;
    const primary = ranking.direction === "desc" ? bv - av : av - bv;
    // Ties resolve alphabetically, so the order is stable and no breed gains a
    // position from anything other than its published figure.
    return primary || a.breed.name.localeCompare(b.breed.name);
  });

  return { rows: rows.slice(0, limit), excluded };
}

export function getRanking(species: BreedSpecies, slug: string): BreedRanking | undefined {
  return BREED_RANKINGS.find((r) => r.species === species && r.slug === slug);
}

export function rankingPath(ranking: BreedRanking): string {
  return `/${ranking.species === "dog" ? "dogs" : "cats"}/breeds/${ranking.slug}`;
}
