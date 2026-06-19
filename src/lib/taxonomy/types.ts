/**
 * Animal taxonomy coverage model.
 *
 * This layer documents how FaunaHub organises animal life and tracks which
 * major groups are covered, partially covered, or planned — WITHOUT claiming a
 * complete species inventory.
 *
 * Compliance posture (read before editing):
 *  - No invented taxonomy, species counts, or groups. Group descriptions use
 *    cautious, qualitative language ("the most diverse group"), not fabricated
 *    totals. Counts genuinely vary by source and discovery status.
 *  - `existingAnimalSlugs` must point to real /animals/[slug] profiles.
 *  - `priorityMissingExamples` are ROADMAP items only — never public pages.
 *  - `coverageStatus` is honest; FaunaHub never claims to cover "all animals".
 */

export type TaxonomyRank =
  | "kingdom"
  | "phylum"
  | "class"
  | "order"
  | "family"
  | "informal-group"
  | "topic-group";

export type CoverageStatus = "strong" | "partial" | "thin" | "planned";

export type FutureBatchPriority = "high" | "medium" | "low";

export interface AnimalTaxonomyGroup {
  slug: string;
  label: string;
  parentSlug?: string;
  rankLabel: TaxonomyRank;
  description: string;
  sourceUrls: string[];
  coverageStatus: CoverageStatus;
  /** Real /animals/[slug] routes already published for this group. */
  existingAnimalSlugs: string[];
  /** Roadmap-only examples of well-known animals not yet profiled. */
  priorityMissingExamples: string[];
  futureBatchPriority: FutureBatchPriority;
  notes?: string;
}

export type BatchStatus =
  | "planned"
  | "ready-for-research"
  | "blocked"
  | "complete";

export type ImageDifficulty = "easy" | "moderate" | "hard";

export interface FutureBatch {
  slug: string;
  title: string;
  purpose: string;
  priority: FutureBatchPriority;
  exampleSpecies: string[];
  requiredSourceTypes: string[];
  imageDifficulty: ImageDifficulty;
  riskNotes: string;
  shouldCreatePages: boolean;
  status: BatchStatus;
}
