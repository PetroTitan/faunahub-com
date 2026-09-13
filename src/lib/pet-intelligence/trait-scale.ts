/**
 * Normalising registry trait scales into FaunaHub's three-level ordinal.
 *
 * The AKC publishes a 1-5 score per trait axis per breed. Those scores are a
 * real, attributable editorial judgement by a breed authority — they are not
 * measurements, and they were never produced by testing dogs. Re-publishing
 * "4 out of 5" would hand a reader a number that looks measured.
 *
 * So FaunaHub compresses to three levels and keeps only the level:
 *
 *   1, 2  ->  lower
 *   3     ->  moderate
 *   4, 5  ->  higher
 *
 * The compression is deliberately lossy. Three levels is roughly what the
 * underlying evidence can carry, and it is what a reader can act on: the
 * difference between a 4 and a 5 on a scale with no instrument behind it is
 * not a difference anyone should choose a pet by.
 *
 * `describeBand` produces the `TraitValue.method` prose. The numeric score is
 * used HERE, at derivation, and is not stored on the breed record — so no
 * rendered surface can reach it. `scripts/verify-breed-registry.mjs` re-fetches
 * the live registry and re-derives, which is what keeps the values honest
 * without shipping the number.
 *
 * Only five axes are mapped. See docs/pet-intelligence/trait-methodology.md for
 * the axes that are deliberately NOT structured — child suitability, other-dog
 * tolerance, stranger openness, protectiveness — and why structuring them would
 * turn a breed-level opinion into a safety promise.
 */
import type { OrdinalTrait, TraitValue } from "./types.ts";

/** AKC trait keys FaunaHub is willing to normalise, mapped to our axes. */
export const AKC_TRAIT_MAP = {
  shedding_level: "shedding",
  coat_grooming_frequency: "groomingNeeds",
  energy_level: "exerciseNeeds",
  trainability_level: "trainability",
  barking_level: "vocality",
} as const;

/**
 * AKC trait keys that exist and are deliberately NOT imported.
 *
 * Listed rather than merely omitted so the refusal is reviewable, and so a
 * future session adding "one more useful filter" has to read why first.
 */
export const AKC_TRAITS_EXCLUDED: Readonly<Record<string, string>> = {
  good_with_young_children:
    "A structured child-suitability value is a safety claim about an individual animal that no breed-level source can support. Prose only.",
  good_with_other_dogs:
    "Same reason: presented as a filter it promises an interaction outcome.",
  openness_to_strangers:
    "Reads as a temperament guarantee and is heavily shaped by socialisation, not breed.",
  watchdogprotective_nature:
    "Filtering breeds by protectiveness invites selection for guarding behaviour, which FaunaHub does not advise on.",
  playfulness_level: "Too vague to define a metric for; no reproducible meaning.",
  affectionate_with_family: "An affection score is not a measurable property.",
  adaptability_level: "Conflates several unrelated things; no coherent metric.",
  mental_stimulation_needs:
    "Overlaps exercise needs without a clean boundary; would double-count the same evidence.",
  drooling_level: "Not a decision axis FaunaHub surfaces; no filter planned.",
};

/** The compression itself. Exported so tests can assert the band edges. */
export function bandFromFivePointScale(score: number): OrdinalTrait | undefined {
  if (!Number.isInteger(score) || score < 1 || score > 5) return undefined;
  if (score <= 2) return "lower";
  if (score === 3) return "moderate";
  return "higher";
}

/** Human-readable derivation note stored on the trait value. */
export function describeBand(band: OrdinalTrait, registryShortName: string): string {
  const where =
    band === "lower"
      ? "the low band"
      : band === "moderate"
        ? "the middle band"
        : "the high band";
  return `Normalised from the ${registryShortName} published trait scale for this breed, which places it in ${where}. FaunaHub stores only the band, never a score.`;
}

export function traitFromFivePointScale(
  score: number,
  registryShortName: string,
  sourceId: string,
): TraitValue | undefined {
  const value = bandFromFivePointScale(score);
  if (!value) return undefined;
  return { value, method: describeBand(value, registryShortName), sourceId };
}

/** Display labels. Short, and never implying a judgement of the breed. */
export const ORDINAL_LABEL: Record<OrdinalTrait, string> = {
  lower: "Lower",
  moderate: "Moderate",
  higher: "Higher",
};

/** Ordering for any UI that groups by level. Not a ranking of breeds. */
export const ORDINAL_ORDER: Record<OrdinalTrait, number> = {
  lower: 0,
  moderate: 1,
  higher: 2,
};
