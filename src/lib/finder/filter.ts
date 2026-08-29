/**
 * Animal Finder — the deterministic filter and text-match engine.
 *
 * Pure: no network, no storage, no clock, no randomness, no model. The same
 * documents and the same selection always produce the same list in the same
 * order, which is what makes the behaviour testable rather than merely
 * plausible.
 *
 * It deliberately reuses `@/lib/search/normalize` rather than growing a second
 * normalizer. A reader who types "blue-ringed octopus" in the Finder and in
 * global search must fold the same way in both places, and two implementations
 * would eventually disagree.
 *
 * Text matching here is NAME-SHAPED on purpose. The Finder answers "which
 * animals are in this part of the collection"; global search answers "what does
 * FaunaHub say about X", with full-description matching, question handling,
 * comparison-pair resolution and typo tolerance. Duplicating that engine over a
 * second payload would double the code for a worse version of a facility that
 * already exists one click away — so the Finder matches names, scientific
 * names and tags, and links to search for everything else.
 */
import { fold, tokenize } from "../search/normalize.ts";
import {
  FINDER_COVERAGE_FACET,
  type FinderAnimalDocument,
  type FinderCoverageFlag,
  type FinderFacet,
} from "./types.ts";

/** The reader's current selection: facet id -> chosen values. */
export type FinderSelection = Record<string, string[]>;

/** Why a document matched the text query. Ordered strongest to weakest. */
export type FinderMatchReason =
  | "exact-name"
  | "name-prefix"
  | "name-tokens"
  | "scientific-name"
  | "tag"
  | "none";

export interface FinderResult {
  document: FinderAnimalDocument;
  reason: FinderMatchReason;
}

/** Longer input is not a name. Capped because matching runs during render. */
export const MAX_QUERY_LENGTH = 80;

/** Tier scores. The gaps are wide enough that no tie-break can invert them. */
const TIER: Record<Exclude<FinderMatchReason, "none">, number> = {
  "exact-name": 5000,
  "name-prefix": 4000,
  "name-tokens": 3000,
  "scientific-name": 2000,
  tag: 1000,
};

/** True when every selected value on every facet is satisfied. */
export function matchesSelection(
  document: FinderAnimalDocument,
  selection: FinderSelection,
  facets: readonly FinderFacet[],
): boolean {
  for (const facet of facets) {
    const chosen = selection[facet.id];
    if (!chosen || chosen.length === 0) continue;

    const held = valuesFor(document, facet.id);
    // "any" is the right default for a browse control: choosing Mammals and
    // Birds means "show me both", which is what a reader ticking two boxes
    // expects. "all" is reserved for the coverage facet, where ticking two
    // boxes means "animals that have both".
    const ok =
      facet.mode === "all"
        ? chosen.every((value) => held.includes(value))
        : chosen.some((value) => held.includes(value));
    if (!ok) return false;
  }
  return true;
}

/** The values a document holds on one axis. Unknown axes hold nothing. */
export function valuesFor(document: FinderAnimalDocument, facetId: string): string[] {
  if (facetId === "group") return document.group ? [document.group] : [];
  if (facetId === "taxon") return document.taxonGroups ?? [];
  if (facetId === FINDER_COVERAGE_FACET) return document.coverage;
  return [];
}

/**
 * Score one document against a folded query.
 *
 * Returns null when nothing matched, so a caller can distinguish "no text
 * query" from "query matched nothing" without a sentinel score.
 */
function scoreDocument(
  document: FinderAnimalDocument,
  folded: string,
  tokens: readonly string[],
): { score: number; reason: FinderMatchReason } | null {
  // Precomputed at hydration. Folding and tokenizing per document per pass cost
  // roughly 10,000 NFD normalizations and regex splits per keystroke across the
  // four passes (one for the results, one per facet's counts) — 7.6 ms on an
  // M-series Mac and several times that on a mid-range phone, for values that
  // never change.
  const name = document.foldedName;

  if (name === folded) return { score: TIER["exact-name"], reason: "exact-name" };

  // A spaced form of a compound name: "sea horse" must reach Seahorse, and
  // "blue ringed octopus" the Blue-Ringed Octopus. Global search does this and
  // a name control that does not is worse at the one job it has.
  //
  // The collapse is applied ONLY when the reader typed a space. Collapsing a
  // single word too would make "seal" a prefix of "sealion" and surface Sea
  // Lion off a string coincidence rather than off anything the reader meant.
  if (folded.includes(" ")) {
    const collapsedQuery = folded.replace(/\s+/g, "");
    const collapsedName = name.replace(/\s+/g, "");
    if (collapsedName === collapsedQuery) {
      return { score: TIER["exact-name"], reason: "exact-name" };
    }
    if (collapsedName.startsWith(collapsedQuery)) {
      return {
        score: TIER["name-prefix"] - Math.min(name.length, 40),
        reason: "name-prefix",
      };
    }
  }

  if (name.startsWith(folded)) {
    // Shorter names win among prefix matches: typing "rat" should reach Rat
    // before Rattlesnake, which is the difference between a control that feels
    // exact and one that feels approximate.
    return { score: TIER["name-prefix"] - Math.min(name.length, 40), reason: "name-prefix" };
  }

  const nameTokens = document.nameTokens;
  if (tokens.length > 0 && tokens.every((token) => nameTokens.some((n) => n.startsWith(token)))) {
    return { score: TIER["name-tokens"] - Math.min(name.length, 40), reason: "name-tokens" };
  }

  if (document.foldedScientificName) {
    const scientific = document.foldedScientificName;
    if (scientific.includes(folded)) {
      return { score: TIER["scientific-name"], reason: "scientific-name" };
    }
  }

  // Tags are the profile's own labels. They are matched whole-token so "bird"
  // does not reach "Birdeater", and they are the weakest tier because a tag is
  // a topical label rather than a name.
  const tagTokenSets = document.tagTokens;
  if (tokens.length > 0 && tagTokenSets.length > 0) {
    for (const tagTokens of tagTokenSets) {
      if (tokens.every((token) => tagTokens.includes(token))) {
        return { score: TIER.tag, reason: "tag" };
      }
    }
  }

  return null;
}

/**
 * Apply the text query and the facet selection together.
 *
 * Order of operations matters for correctness, not just speed: filters are
 * applied first so the text tiers rank only what the reader has already chosen
 * to look at. Results are alphabetical when there is no query, because any
 * other default order would be an editorial claim the data does not support.
 */
export function runFinder(
  documents: readonly FinderAnimalDocument[],
  query: string,
  selection: FinderSelection,
  facets: readonly FinderFacet[],
): FinderResult[] {
  const filtered = documents.filter((document) => matchesSelection(document, selection, facets));

  const trimmed = query.trim().slice(0, MAX_QUERY_LENGTH);
  if (trimmed.length === 0) {
    return filtered
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((document) => ({ document, reason: "none" as const }));
  }

  const folded = fold(trimmed);
  if (folded.length === 0) {
    return filtered
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((document) => ({ document, reason: "none" as const }));
  }
  const tokens = tokenize(trimmed);

  const scored: { result: FinderResult; score: number }[] = [];
  for (const document of filtered) {
    const hit = scoreDocument(document, folded, tokens);
    if (hit) scored.push({ result: { document, reason: hit.reason }, score: hit.score });
  }

  scored.sort(
    (a, b) => b.score - a.score || a.result.document.name.localeCompare(b.result.document.name),
  );
  return scored.map((entry) => entry.result);
}

/**
 * How many results each value of a facet would produce if the reader clicked it.
 *
 * The rule differs by facet mode, and getting that wrong makes a chip lie about
 * the list it opens:
 *
 * **`any` (disjunctive)** — the facet's own selection is dropped from the base.
 * With it applied, every unselected value would read zero, telling a reader the
 * collection is empty when it is not. So "Mammals 187" beside a selected
 * "Birds" means "187 of the animals matching your other filters are mammals",
 * which is the convention every faceted browse uses.
 *
 * **`all` (conjunctive)** — the facet's own selection STAYS applied, because
 * ticking a second box narrows rather than widens. Dropping it produced a chip
 * that lied: with "Has a comparison page" active (290 results), the
 * "Has a conservation record" chip read 55 — its unfiltered total — and opened
 * onto 40. It now reads what clicking it actually returns.
 */
export function facetCounts(
  documents: readonly FinderAnimalDocument[],
  query: string,
  selection: FinderSelection,
  facets: readonly FinderFacet[],
  facetId: string,
): Record<string, number> {
  const counts: Record<string, number> = {};
  const facet = facets.find((entry) => entry.id === facetId);
  if (!facet) return counts;
  for (const value of facet.values) counts[value.value] = 0;

  const base =
    facet.mode === "all"
      ? runFinder(documents, query, selection, facets)
      : runFinder(
          documents,
          query,
          selection,
          facets.filter((entry) => entry.id !== facetId),
        );

  for (const { document } of base) {
    for (const value of valuesFor(document, facetId)) {
      if (value in counts) counts[value] += 1;
    }
  }
  return counts;
}

/** True when the reader has narrowed anything at all. */
export function hasActiveSelection(selection: FinderSelection): boolean {
  return Object.values(selection).some((values) => values.length > 0);
}

/** How many individual values are selected across every facet. */
export function selectionSize(selection: FinderSelection): number {
  return Object.values(selection).reduce((total, values) => total + values.length, 0);
}

/**
 * A stable, closed-vocabulary description of the current selection.
 *
 * Used as an analytics payload and in tests. It contains facet ids and value
 * slugs only — never the reader's typed text — and it is sorted so the same
 * selection always produces the same string regardless of click order.
 */
export function selectionKey(selection: FinderSelection): string {
  return Object.entries(selection)
    .filter(([, values]) => values.length > 0)
    .map(([facetId, values]) => `${facetId}:${[...values].sort().join("+")}`)
    .sort()
    .join("|");
}

/** Type guard for a coverage flag arriving from untrusted input. */
export function isCoverageFlag(value: string): value is FinderCoverageFlag {
  return (
    value === "comparison" || value === "photo" || value === "conservation" || value === "domestic"
  );
}

/**
 * Drop anything that is not a declared value of a declared facet.
 *
 * The Finder holds its state in memory rather than in the URL, so this is not
 * guarding against a hostile query string today. It exists because a selection
 * can outlive the payload that produced it — a reader with the page open
 * across a deploy that retires a facet value — and because a filter set
 * containing a value no facet declares would silently return nothing with no
 * way for the reader to see why.
 */
export function sanitizeSelection(
  selection: FinderSelection,
  facets: readonly FinderFacet[],
): FinderSelection {
  const clean: FinderSelection = {};
  for (const facet of facets) {
    const chosen = selection[facet.id];
    if (!chosen) continue;
    const allowed = new Set(facet.values.map((value) => value.value));
    const kept = chosen.filter((value) => allowed.has(value));
    if (kept.length > 0) clean[facet.id] = kept;
  }
  return clean;
}
