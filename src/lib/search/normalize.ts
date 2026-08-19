/**
 * Query and text normalization for FaunaHub search.
 *
 * Everything here is deterministic and dependency-free: the same string in
 * always produces the same tokens out, on the server, in the browser, and in
 * the test runner. There is no language model, no network call, and no
 * probabilistic guessing.
 *
 * Two rules govern this file:
 *
 *  1. Normalization may DISCARD noise (punctuation, case, accents, connective
 *     words). It may never SUBSTITUTE one animal for another.
 *  2. Morphological variants ("wolves" -> "wolf") are ADDITIVE candidates, not
 *     replacements. If a variant matches nothing, the original still stands, so
 *     a bad guess costs nothing and can never hijack a query.
 */

/**
 * Connective and intent words stripped from a query before matching.
 *
 * Deliberately a small closed list. It exists so "difference between crocodile
 * and alligator" reduces to "crocodile alligator" and finds the real comparison
 * page. It is NOT a stopword list for general English: stripping too much turns
 * a specific query into a vague one. Every word here is either a comparison
 * intent word or a function word that no FaunaHub page title depends on.
 */
export const INTENT_WORDS: ReadonlySet<string> = new Set([
  "a",
  "an",
  "and",
  "are",
  "between",
  "compare",
  "compared",
  "comparison",
  "comparisons",
  "differ",
  "difference",
  "differences",
  "different",
  "for",
  "is",
  "of",
  "or",
  "the",
  "v",
  "versus",
  "vs",
  "what",
  "whats",
]);

/**
 * Fold a string to a comparable form: lowercase, accent-stripped, punctuation
 * flattened to single spaces.
 *
 * Hyphens become spaces rather than being deleted, so "Blue-Ringed Octopus" and
 * "blue ringed octopus" collapse to the same tokens and a reader never has to
 * guess FaunaHub's hyphenation.
 */
export function fold(input: string): string {
  return input
    .normalize("NFD")
    // Strip combining diacritical marks so "Père David's Deer" folds to ascii.
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** Fold, then split into tokens. Empty input yields an empty array. */
export function tokenize(input: string): string[] {
  const folded = fold(input);
  return folded ? folded.split(" ") : [];
}

/**
 * The tokens a query is actually matched on.
 *
 * Intent words are removed, but only when something survives: a reader who
 * types just "compare" still gets the comparison hub rather than an empty
 * result set, because stripping everything would be worse than stripping
 * nothing.
 */
export function queryTokens(input: string): string[] {
  const all = tokenize(input);
  const kept = all.filter((token) => !INTENT_WORDS.has(token));
  return kept.length > 0 ? kept : all;
}

/** The normalized query string used for exact-title comparison. */
export function normalizeQuery(input: string): string {
  return queryTokens(input).join(" ");
}

/**
 * Additive singular candidates for a token.
 *
 * Standard English morphology only, applied conservatively:
 *   - "butterflies" -> "butterfly"   (ies -> y)
 *   - "wolves"      -> "wolf", "wolfe" (ves -> f / fe)
 *   - "foxes"       -> "fox"         (es -> "")
 *   - "dogs"        -> "dog"         (s  -> "")
 *
 * The token itself is always the first candidate, so a word that is already
 * singular — or that simply ends in "s", like "octopus" — is never damaged.
 * Short tokens are left alone entirely: trimming "bus" to "bu" or "ants" to
 * "ant" is fine, but trimming "cats" is the only useful case at that length and
 * the guard below still allows it.
 */
export function singularCandidates(token: string): string[] {
  const out = [token];
  if (token.length > 4 && token.endsWith("ies")) {
    out.push(`${token.slice(0, -3)}y`);
  }
  if (token.length > 4 && token.endsWith("ves")) {
    out.push(`${token.slice(0, -3)}f`, `${token.slice(0, -3)}fe`);
  }
  if (token.length > 3 && token.endsWith("es")) {
    out.push(token.slice(0, -2));
  }
  if (token.length > 3 && token.endsWith("s") && !token.endsWith("ss")) {
    out.push(token.slice(0, -1));
  }
  // De-duplicate while preserving the original-first ordering.
  return out.filter((value, index) => value.length > 1 && out.indexOf(value) === index);
}

/**
 * Bounded Damerau-Levenshtein distance (optimal string alignment).
 *
 * Transpositions count as ONE edit, not two. That is not a refinement — it is
 * the difference between finding the reader's animal and handing them a
 * different one. Under plain Levenshtein, "corw" is one edit from *cow* and two
 * from *crow*, so a budget of 1 admitted the cattle and excluded the bird the
 * reader was typing. Swapping two adjacent keys is the most common typing error
 * there is; a metric that treats it as two errors systematically prefers the
 * wrong word.
 *
 * Returns `max + 1` as soon as the true distance is known to exceed `max`, so
 * the common case (two obviously different words) exits after a few cells
 * instead of filling an entire matrix.
 */
export function boundedEditDistance(a: string, b: string, max: number): number {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > max) return max + 1;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  // Three rows: the transposition rule needs the row before last.
  let twoBack = new Array<number>(b.length + 1).fill(0);
  let previous = new Array<number>(b.length + 1);
  let current = new Array<number>(b.length + 1);
  for (let j = 0; j <= b.length; j++) previous[j] = j;

  for (let i = 1; i <= a.length; i++) {
    current[0] = i;
    let rowMin = current[0];
    for (let j = 1; j <= b.length; j++) {
      const cost = a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1;
      let value = Math.min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + cost);
      if (
        i > 1 &&
        j > 1 &&
        a.charCodeAt(i - 1) === b.charCodeAt(j - 2) &&
        a.charCodeAt(i - 2) === b.charCodeAt(j - 1)
      ) {
        value = Math.min(value, twoBack[j - 2] + 1);
      }
      current[j] = value;
      if (value < rowMin) rowMin = value;
    }
    if (rowMin > max) return max + 1;
    const spare = twoBack;
    twoBack = previous;
    previous = current;
    current = spare;
  }

  return previous[b.length];
}

/**
 * How much typo tolerance a token of this length earns.
 *
 * Zero below four characters. That is the rule that stops "cat" matching "bat",
 * "rat" and "cow" — at three characters almost every animal is one edit from
 * another one, so tolerance there would silently swap the reader's animal for a
 * different species. Longer words are far less collision-prone, so one edit at
 * 4–6 characters and two at seven or more stay safe.
 */
export function fuzzyBudget(token: string): number {
  if (token.length < 4) return 0;
  if (token.length < 7) return 1;
  return 2;
}

/**
 * Whether `candidate` is a permitted typo of `token`.
 *
 * Beyond the length budget there is one extra guard: the first character must
 * match. A dropped or substituted letter almost never lands on the first
 * character, while allowing it is exactly what turns "elk" into "eel" and
 * "hare" into "bare".
 *
 * The one exception is a transposition of the first two characters — "owlf" for
 * "wolf". That is a real and common slip, and permitting it is safe precisely
 * because it is so specific: it requires both characters to be present and
 * merely swapped, which a substitution can never satisfy. "hare" and "bare"
 * still fail, because 'h' is nowhere in "bare".
 */
export function isConservativeFuzzyMatch(token: string, candidate: string): boolean {
  const budget = fuzzyBudget(token);
  if (budget === 0) return false;
  if (Math.abs(token.length - candidate.length) > budget) return false;

  if (token.charCodeAt(0) !== candidate.charCodeAt(0)) {
    const leadingSwap =
      token.length > 1 &&
      candidate.length > 1 &&
      token.charCodeAt(0) === candidate.charCodeAt(1) &&
      token.charCodeAt(1) === candidate.charCodeAt(0);
    if (!leadingSwap) return false;
  }

  return boundedEditDistance(token, candidate, budget) <= budget;
}
