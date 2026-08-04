/**
 * Record factory for comparison batches.
 *
 * `defineComparison` derives the two fields that must never be hand-typed:
 *
 *  - `canonicalPairKey`, computed from the two animal slugs, so a reverse pair
 *    is structurally impossible to introduce by mistake; and
 *  - `id`, derived from the slug.
 *
 * Everything else is authored per pair. There is no default prose here on
 * purpose: a factory that filled in sentences would be the template farm this
 * section is explicitly not allowed to become.
 */
import type { ComparisonRecord } from "../types.ts";

export type ComparisonInput = Omit<ComparisonRecord, "id" | "canonicalPairKey">;

export function defineComparison(input: ComparisonInput): ComparisonRecord {
  return {
    ...input,
    id: input.slug,
    canonicalPairKey: [input.animalA.slug, input.animalB.slug].sort().join("--"),
  };
}

/** Editorial review date stamped on records authored in this sprint. */
export const REVIEWED = "2026-08-04";
