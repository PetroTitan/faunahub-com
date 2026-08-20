/**
 * FaunaHub Search — deterministic relevance engine.
 *
 * Pure functions over a hydrated index. No network, no model, no randomness,
 * no clock: the same index and the same query always produce the same ranked
 * list, which is what makes relevance testable rather than a matter of opinion.
 *
 * The ranking is explicitly TIERED. A document's tier is decided by the
 * strongest thing that matched it — an exact title beats a title prefix beats a
 * description hit — and the tiers are spaced far enough apart that the
 * within-tier modifiers can reorder siblings but can never promote a weak match
 * over a strong one. That is the property that makes "dog cat" surface Dog vs
 * Cat instead of an article that happens to contain both words.
 */
import {
  INTENT_WORDS,
  boundedEditDistance,
  fold,
  fuzzyBudget,
  isConservativeFuzzyMatch,
  queryTokens,
  wordVariants,
  tokenize,
} from "./normalize.ts";
import {
  SEARCH_GROUP_ORDER,
  type SearchDocument,
  type SearchDocumentType,
  type SearchFacets,
  type SearchIndexEntry,
  type SearchIndexPayload,
  type SearchMatchReason,
  type SearchResponse,
  type SearchResult,
  type SearchResultGroup,
} from "./types.ts";

/* ------------------------------------------------------------------ *
 * Scoring tiers.
 *
 * Minimum gap between adjacent tiers is 600; the modifier budget below is
 * capped at ±299, so a modifier can never lift a document past the tier above
 * it. Change one of these numbers and you must re-check that invariant —
 * tests/search-engine.test.ts asserts it.
 * ------------------------------------------------------------------ */
export const TIER: Record<SearchMatchReason, number> = {
  "comparison-pair": 10_000,
  "exact-title": 9_000,
  "animal-subject": 5_400,
  "exact-alias": 8_400,
  "exact-scientific-name": 7_800,
  "title-prefix": 7_000,
  "title-tokens": 6_400,
  "description-phrase": 5_800,
  "alias-tokens": 4_800,
  "token-prefix": 4_200,
  keyword: 3_000,
  description: 2_000,
  partial: 1_500,
  fuzzy: 1_000,
};

/** Tier for a document that is *about* an animal the query named. */
const ANIMAL_SUBJECT_BASE = 5_400;
/** Added per additional resolved animal the document covers. */
const ANIMAL_SUBJECT_STEP = 300;
/** Hard ceiling, kept a full tier gap below `title-tokens`. */
const ANIMAL_SUBJECT_CAP = TIER["title-tokens"] - 400;
/** Subtracted per query token the animal match does not explain. */
const ANIMAL_SUBJECT_UNMATCHED_PENALTY = 500;

/** Small, static per-shelf nudge. Intent always dominates this. */
const TYPE_BOOST: Record<SearchDocumentType, number> = {
  animal: 40,
  comparison: 34,
  hub: 30,
  tool: 26,
  behavior: 22,
  category: 18,
  guide: 14,
  research: 10,
};

/**
 * Words that mark an explicit comparison question, as opposed to two names
 * happening to sit next to each other. A subset of INTENT_WORDS: "the" and "of"
 * are noise, but they are not a request to compare anything.
 */
const COMPARISON_MARKERS: ReadonlySet<string> = new Set([
  "compare",
  "compared",
  "comparison",
  "comparisons",
  "differ",
  "difference",
  "differences",
  "different",
  "v",
  "versus",
  "vs",
  "between",
]);

/**
 * Nothing scoring below this tier is shown. Set at the weakest exact tier, so
 * the floor filters exact-pass noise; fuzzy hits are added separately and are
 * always allowed through, having already passed a much stricter gate.
 */
const SCORE_FLOOR = TIER.partial;

/** Results are capped so the panel stays navigable and the DOM stays small. */
export const MAX_RESULTS = 40;
/** Per-section cap. Keeps the panel scannable and the rendered DOM small. */
export const MAX_PER_GROUP = 6;

/**
 * A document plus everything the scorer needs, computed once at hydration.
 *
 * Doing this per query instead would re-fold ~2,000 titles on every keystroke.
 */
interface IndexedDocument {
  doc: SearchDocument;
  titleFolded: string;
  titleTokens: string[];
  aliasFolded: string[];
  aliasTokens: Set<string>;
  scientificFolded?: string;
  keywordText: string;
  descriptionText: string;
  /** Title, alias and scientific-name tokens. The only fuzzy-match surface. */
  nameTokens: string[];
}

export interface SearchEngine {
  /** Hydrated documents, in index order. */
  documents: SearchDocument[];
  /** Number of indexed documents. */
  size: number;
  /** Browse axes carried on the payload, passed through unchanged. */
  facets: SearchFacets;
  search(rawQuery: string, options?: { limit?: number }): SearchResponse;
  /** Exposed for tests and for the "no exact match" copy. */
  resolveAnimals(rawQuery: string): string[];
  /** Canonical comparison URL for an unordered pair, or undefined. */
  comparisonUrlForPair(slugA: string, slugB: string): string | undefined;
}

/**
 * Rebuild the transported document into its runtime form.
 *
 * `id` and `searchableText` are both derived here rather than transported, so
 * a document can never carry an id that contradicts its url.
 */
export function hydrateDocument(entry: SearchIndexEntry): SearchDocument {
  const parts = [
    entry.title,
    ...(entry.aliases ?? []),
    entry.scientificName ?? "",
    ...(entry.keywords ?? []),
    entry.category ?? "",
    entry.description ?? "",
  ];
  return {
    ...entry,
    id: `${entry.type}:${entry.url}`,
    searchableText: fold(parts.join(" ")),
  };
}

function indexDocument(doc: SearchDocument): IndexedDocument {
  const titleFolded = fold(doc.title);
  const titleTokens = titleFolded ? titleFolded.split(" ") : [];
  const aliasFolded = (doc.aliases ?? []).map(fold).filter(Boolean);
  const aliasTokens = new Set<string>();
  for (const alias of aliasFolded) for (const t of alias.split(" ")) aliasTokens.add(t);

  const keywordText = fold(
    [...(doc.keywords ?? []), doc.category ?? "", doc.group ?? ""].join(" "),
  );
  const descriptionText = fold(doc.description ?? "");
  const scientificFolded = doc.scientificName ? fold(doc.scientificName) : undefined;

  // Typo tolerance is applied to COMMON NAMES only — the title and its
  // aliases. Two deliberate exclusions:
  //
  //   - description text, because "elefant" would then match a tinamou whose
  //     description happens to say "elegant";
  //   - scientific names, because Eudromia *elegans* is within two edits of
  //     "elefant" too. A reader typing a binomial gets it close enough for the
  //     exact and prefix passes; a reader typing a misspelt common name must
  //     never be handed a different species.
  const nameTokens = new Set<string>(titleTokens);
  for (const token of aliasTokens) nameTokens.add(token);

  return {
    doc,
    titleFolded,
    titleTokens,
    aliasFolded,
    aliasTokens,
    scientificFolded,
    keywordText,
    descriptionText,
    nameTokens: [...nameTokens],
  };
}

/**
 * Build the engine from a payload.
 *
 * Everything expensive happens here, once, when the index is first loaded —
 * not on the keystroke path.
 */
export function createSearchEngine(payload: SearchIndexPayload): SearchEngine {
  const documents = payload.documents.map(hydrateDocument);
  const indexed = documents.map(indexDocument);

  const byUrl = new Map<string, IndexedDocument>();
  for (const entry of indexed) byUrl.set(entry.doc.url, entry);

  /** Animal slug -> every document about that animal. */
  const byAnimal = new Map<string, IndexedDocument[]>();
  for (const entry of indexed) {
    for (const slug of entry.doc.animalSlugs ?? []) {
      const list = byAnimal.get(slug);
      if (list) list.push(entry);
      else byAnimal.set(slug, [entry]);
    }
  }

  /** Longest animal name phrase, in tokens. Bounds the phrase scanner. */
  let maxNameTokens = 1;
  const animalNames = new Map<string, string>();
  for (const [name, slug] of Object.entries(payload.animalNames)) {
    const folded = fold(name);
    if (!folded) continue;
    animalNames.set(folded, slug);
    const length = folded.split(" ").length;
    if (length > maxNameTokens) maxNameTokens = length;
  }

  /** Animal slug -> display name, for honest "we don't have this pair" copy. */
  const animalDisplayName = new Map<string, string>();
  for (const entry of indexed) {
    if (entry.doc.type !== "animal") continue;
    const slugs = entry.doc.animalSlugs ?? [];
    if (slugs.length === 1) animalDisplayName.set(slugs[0], entry.doc.title);
  }

  const pairs = new Map(Object.entries(payload.pairs));

  function pairKey(a: string, b: string): string {
    return [a, b].sort().join("--");
  }

  function comparisonUrlForPair(a: string, b: string): string | undefined {
    return pairs.get(pairKey(a, b));
  }

  /**
   * Animal names grouped by token count, for near-phrase matching.
   * Built once; 681 names is small enough that a linear scan per span is free.
   */
  const namesByLength = new Map<number, { words: string[]; slug: string }[]>();
  for (const [name, slug] of animalNames) {
    const words = name.split(" ");
    const bucket = namesByLength.get(words.length);
    if (bucket) bucket.push({ words, slug });
    else namesByLength.set(words.length, [{ words, slug }]);
  }

  /**
   * A multi-word animal name in which exactly ONE word is a conservative typo.
   *
   * This is what lets "coral sanke" resolve to Coral Snake rather than to Coral
   * — a reef invertebrate — with the misspelt half silently discarded. Only one
   * word may be inexact and it still obeys the full per-token budget, so the
   * rest of the name has to be right: "coral X" cannot become Coral Snake
   * unless X is genuinely a near-miss for "snake".
   *
   * Single-token names are excluded: with nothing else in the phrase to anchor
   * it, a one-word near-miss is just the ordinary fuzzy pass, which runs later
   * and is ranked far below anything exact.
   */
  function nearPhraseSlug(phrase: string[]): string | undefined {
    if (phrase.length < 2) return undefined;
    const candidates = namesByLength.get(phrase.length);
    if (!candidates) return undefined;

    let best: { slug: string; distance: number } | undefined;
    for (const candidate of candidates) {
      let inexact = 0;
      let distance = 0;
      let ok = true;
      for (let i = 0; i < phrase.length; i++) {
        const word = candidate.words[i];
        if (phrase[i] === word) continue;
        if (inexact > 0 || !isConservativeFuzzyMatch(phrase[i], word)) {
          ok = false;
          break;
        }
        inexact++;
        distance += boundedEditDistance(phrase[i], word, fuzzyBudget(phrase[i]));
      }
      if (ok && inexact > 0 && (!best || distance < best.distance)) {
        best = { slug: candidate.slug, distance };
      }
    }
    return best?.slug;
  }

  /**
   * Phrase variants to try, original first.
   *
   * Only the LAST token is de-pluralised: "sea lions" -> "sea lion" is right,
   * while de-pluralising an interior word would start rewriting names.
   */
  function expandPhrase(phrase: string[]): string[] {
    const head = phrase.slice(0, -1);
    const last = phrase[phrase.length - 1];
    const spaced = wordVariants(last).map((value) => [...head, value].join(" "));
    // Readers space compound names that FaunaHub writes closed: "sea horse",
    // "lion fish", "cat fish". Without this, "sea horse" resolved to plain
    // Horse and the seahorse's own profile never appeared. Collapsing is safe
    // because it only ever produces one extra candidate to look up — a form
    // that either names a real animal or names nothing.
    if (phrase.length > 1) spaced.push(...wordVariants(phrase.join("")));
    return spaced.filter((value, index) => spaced.indexOf(value) === index);
  }

  /**
   * Greedy longest-match phrase scan over the query tokens.
   *
   * Longest first so "sea lion" is read as one animal rather than as "sea" plus
   * "lion" — the shorter reading would silently answer a different question.
   * Each token is consumed at most once, so a name can only be claimed by one
   * animal.
   *
   * `unmatched` is what the caller needs to know how much of the query it has
   * actually understood. A query with leftover tokens has NOT been fully read,
   * and the engine must not make confident claims about it — see `missingPair`.
   */
  function resolveAnimalsFromTokens(tokens: string[]): {
    slugs: string[];
    unmatched: number;
  } {
    const found: string[] = [];
    let unmatched = 0;
    let i = 0;

    while (i < tokens.length) {
      let matched = false;
      const maxSpan = Math.min(maxNameTokens, tokens.length - i);

      for (let span = maxSpan; span >= 1; span--) {
        const phrase = tokens.slice(i, i + span);
        let slug: string | undefined;
        for (const candidate of expandPhrase(phrase)) {
          slug = animalNames.get(candidate);
          if (slug) break;
        }
        // Only after every exact reading has failed at this span.
        if (!slug) slug = nearPhraseSlug(phrase);

        if (slug) {
          if (!found.includes(slug)) found.push(slug);
          i += span;
          matched = true;
          break;
        }
      }

      if (!matched) {
        // An intent word is expected noise, not an unread part of the query.
        if (!INTENT_WORDS.has(tokens[i])) unmatched++;
        i += 1;
      }
    }

    return { slugs: found, unmatched };
  }

  function resolveAnimals(rawQuery: string): string[] {
    return resolveAnimalsFromTokens(tokenize(rawQuery)).slugs;
  }

  function search(rawQuery: string, options: { limit?: number } = {}): SearchResponse {
    const limit = options.limit ?? MAX_RESULTS;
    const tokens = queryTokens(rawQuery);
    const normalized = tokens.join(" ");

    if (!normalized) {
      return {
        query: "",
        rawQuery,
        results: [],
        groups: [],
        resolvedAnimals: [],
        empty: true,
      };
    }

    // Animal names are resolved against the RAW tokens, before intent-word
    // stripping. Several real animals have an intent word inside their name —
    // Crown-of-Thorns Starfish, Bird-of-Paradise, Cock-of-the-Rock — and
    // resolving after the strip made them unmatchable: the crown-of-thorns
    // degraded into plain "starfish", a different animal, and served that
    // pair's comparison as the best match. Keeping "vs" in place also stops the
    // greedy scanner reading "mole vs rat" as the single animal "mole rat".
    const rawTokens = tokenize(rawQuery);
    const { slugs: resolved, unmatched } = resolveAnimalsFromTokens(rawTokens);

    /** Did the reader explicitly ask to compare, rather than just name two things? */
    const hasComparisonIntent = rawTokens.some((token) => COMPARISON_MARKERS.has(token));
    const resolvedSet = new Set(resolved);

    /** url -> the comparison the query's two animals resolve to, if published. */
    let pairUrl: string | undefined;
    let missingPair: SearchResponse["missingPair"];
    if (resolved.length === 2) {
      pairUrl = comparisonUrlForPair(resolved[0], resolved[1]);
      // "FaunaHub has not published X vs Y" is a factual negative claim about
      // BOTH the catalogue and the reader's intent, so it needs two things to
      // be true.
      //
      // The query must have been read in full: with a leftover token the reader
      // may well have named a different animal — "coral snkae vs king cobra"
      // resolves to coral + king-cobra, and asserting that pair is unpublished
      // denied a Coral Snake vs King Cobra page that exists and was listed on
      // the same screen.
      //
      // And the reader must actually have asked for a comparison. Two animal
      // names side by side are very often one animal: "sloth bear", "elephant
      // seal", "tiger beetle", "golden lion tamarin". Announcing "No Sloth vs
      // Bear comparison has been published yet" to someone who typed the name
      // of a real bear invents an intention they never had. Surfacing a pair
      // that DOES exist needs no such evidence — that claims nothing.
      if (!pairUrl && unmatched === 0 && hasComparisonIntent) {
        missingPair = {
          slugs: [resolved[0], resolved[1]],
          names: [
            animalDisplayName.get(resolved[0]) ?? resolved[0],
            animalDisplayName.get(resolved[1]) ?? resolved[1],
          ],
        };
      }
    }

    // Every distinct token form we will accept as "this token matched".
    const tokenForms = tokens.map((token) => wordVariants(token));

    // Whole-query forms for exact matching: the query as typed, then the same
    // query with its final token de-pluralised. That second form is what lets
    // "cats" land squarely on the Cat profile instead of tying with "Sand Cat".
    const queryHead = tokens.slice(0, -1);
    const exactForms = dedupeStrings(
      wordVariants(tokens[tokens.length - 1]).map((form) =>
        [...queryHead, form].join(" "),
      ),
    );

    const scored: SearchResult[] = [];
    let strongHits = 0;

    for (const entry of indexed) {
      const hit = scoreDocument(entry, {
        normalized,
        fullyResolved: unmatched === 0,
        unmatched,
        exactForms,
        tokens,
        tokenForms,
        resolvedSet,
        pairUrl,
      });
      if (!hit) continue;
      scored.push(hit);
      if (hit.score >= TIER.keyword) strongHits++;
    }

    // Typo tolerance is a fallback, not a default: it runs only when the exact
    // passes found NOTHING. An earlier threshold of "fewer than five strong
    // hits" let 30 correctly-spelled animal names pull in near-misses — typing
    // "skunk" returned skinks, "moose" returned a mouse — because most of the
    // long tail simply does not have five strong hits. If the query matched
    // anything at all, the reader spelled it well enough and near-misses can
    // only get in the way.
    if (strongHits === 0) {
      const alreadyHit = new Set(scored.map((r) => r.document.id));
      for (const entry of indexed) {
        if (alreadyHit.has(entry.doc.id)) continue;
        const hit = scoreFuzzy(entry, tokens);
        if (hit) scored.push(hit);
      }
    }

    scored.sort(
      (a, b) =>
        b.score - a.score ||
        a.document.title.length - b.document.title.length ||
        a.document.url.localeCompare(b.document.url),
    );

    const results = scored.slice(0, limit);

    return {
      query: normalized,
      rawQuery,
      bestMatch: pickBestMatch(results),
      results,
      groups: groupResults(results),
      resolvedAnimals: resolved,
      missingPair,
      empty: results.length === 0,
    };
  }

  interface ScoreContext {
    normalized: string;
    /** True when every non-intent token was consumed by an animal name. */
    fullyResolved: boolean;
    /** How many non-intent tokens no animal name accounted for. */
    unmatched: number;
    /** normalized, plus its singularised form when they differ. */
    exactForms: string[];
    tokens: string[];
    tokenForms: string[][];
    resolvedSet: Set<string>;
    pairUrl?: string;
  }

  function scoreDocument(entry: IndexedDocument, ctx: ScoreContext): SearchResult | null {
    const { doc } = entry;
    // A mutable holder rather than two locals: assigning through a closure is
    // what lets every rule below read as a flat list of independent checks.
    const best: { reason: SearchMatchReason | null; tier: number } = {
      reason: null,
      tier: 0,
    };

    const promote = (candidate: SearchMatchReason, value: number) => {
      if (value > best.tier) {
        best.tier = value;
        best.reason = candidate;
      }
    };

    if (ctx.pairUrl && doc.url === ctx.pairUrl) {
      // The top tier means "this comparison IS the query". When words are left
      // over it plainly is not: "dog food vs cat food" names two animals, but
      // the reader wants the dog-food-versus-cat-food article, not Dog vs Cat.
      // A leftover word demotes the pair to where a real title match can beat
      // it, without hiding it.
      promote(
        "comparison-pair",
        ctx.fullyResolved ? TIER["comparison-pair"] : TIER["title-tokens"] - 400,
      );
    }

    // The first form is the query as typed; later forms are morphological
    // variants and are scored slightly lower so a literal match always wins.
    for (let i = 0; i < ctx.exactForms.length; i++) {
      if (entry.titleFolded === ctx.exactForms[i]) {
        promote("exact-title", TIER["exact-title"] - i * 100);
        break;
      }
    }

    for (let i = 0; i < ctx.exactForms.length; i++) {
      if (entry.aliasFolded.includes(ctx.exactForms[i])) {
        promote("exact-alias", TIER["exact-alias"] - i * 100);
        break;
      }
    }

    if (entry.scientificFolded && entry.scientificFolded === ctx.normalized) {
      promote("exact-scientific-name", TIER["exact-scientific-name"]);
    } else if (entry.scientificFolded && entry.scientificFolded.includes(ctx.normalized) && ctx.tokens.length > 1) {
      // "canis lupus" typed against "Canis lupus familiaris" and the like.
      promote("exact-scientific-name", TIER["exact-scientific-name"] - 200);
    }

    if (entry.titleFolded.startsWith(`${ctx.normalized} `) || entry.titleFolded === ctx.normalized) {
      promote("title-prefix", TIER["title-prefix"]);
    }

    if (allTokensIn(ctx.tokenForms, entry.titleTokens)) {
      promote("title-tokens", TIER["title-tokens"]);
    }

    // A document about an animal the reader named. This is what keeps the two
    // profiles visible when their comparison does not exist.
    if (ctx.resolvedSet.size > 0 && doc.animalSlugs?.length) {
      let overlap = 0;
      for (const slug of doc.animalSlugs) if (ctx.resolvedSet.has(slug)) overlap++;
      if (overlap > 0) {
        // Capped above, and reduced by whatever the query left unexplained.
        //
        // Every other tier demands ALL query tokens; this one asked for a
        // single overlap, which made it the only survivor of a real question.
        // "my dog ate chocolate" returned the Dog hub and four dog comparisons
        // while "Dog Ate Chocolate — What to Do First", a page FaunaHub had
        // written, was absent. One recognised word out of four is weak
        // evidence and is now scored like it.
        promote(
          "animal-subject",
          Math.max(
            TIER.partial + 100,
            Math.min(
              ANIMAL_SUBJECT_BASE + (overlap - 1) * ANIMAL_SUBJECT_STEP,
              ANIMAL_SUBJECT_CAP,
            ) -
              ctx.unmatched * ANIMAL_SUBJECT_UNMATCHED_PENALTY,
          ),
        );
      }
    }

    if (allTokensIn(ctx.tokenForms, [...entry.aliasTokens])) {
      promote("alias-tokens", TIER["alias-tokens"]);
    }

    if (everyTokenIsPrefixOf(ctx.tokens, entry.titleTokens)) {
      promote("token-prefix", TIER["token-prefix"]);
    }

    if (entry.keywordText && allTokensInText(ctx.tokenForms, entry.keywordText)) {
      promote("keyword", TIER.keyword);
    }

    if (entry.descriptionText && allTokensInText(ctx.tokenForms, entry.descriptionText)) {
      promote("description", TIER.description);
    }

    // The whole query, as a contiguous phrase, inside the description. Far
    // stronger evidence than the same words scattered through it, and often the
    // only way an alternative common name is reachable at all: the cougar's own
    // description says it is "also called puma and mountain lion", which is the
    // only place on the site that fact is recorded in a machine-readable way.
    // Ranked above animal-subject so it beats the Lion that "mountain lion"
    // otherwise resolves to, and below title-tokens so a real title still wins.
    if (
      ctx.tokens.length >= 2 &&
      entry.descriptionText &&
      ` ${entry.descriptionText} `.includes(` ${ctx.normalized} `)
    ) {
      promote("description-phrase", TIER["description-phrase"]);
    }

    // Most of the query, not all of it — matched against the NAME fields only.
    //
    // Real questions carry words no page title contains ("my dog ate
    // chocolate", "dog age in human years"), and requiring every token meant
    // the page the reader actually wanted was not merely ranked low, it was
    // absent. The score scales with how much of the query the title covers, so
    // three of four words in the title outranks one recognised animal name —
    // and it stays below `title-tokens`, so a page matching everything still
    // wins.
    if (ctx.tokens.length >= 2) {
      let matched = 0;
      for (const forms of ctx.tokenForms) {
        if (forms.some((form) => entry.titleTokens.includes(form) || entry.aliasTokens.has(form))) {
          matched++;
        }
      }
      const coverage = matched / ctx.tokens.length;
      if (matched >= 2 && coverage >= 0.6) {
        promote(
          "partial",
          TIER.partial + Math.round(coverage * (TIER["title-tokens"] - TIER.partial - 200)),
        );
      }
    }

    if (best.reason === null || best.tier < SCORE_FLOOR) return null;

    return {
      document: doc,
      score: best.tier + modifiers(entry, ctx.tokens),
      reason: best.reason,
      fuzzy: false,
    };
  }

  function scoreFuzzy(entry: IndexedDocument, tokens: string[]): SearchResult | null {
    // Every query token must find a conservative near-match in the document's
    // names. Requiring all of them, rather than any, stops a single loose token
    // from dragging in unrelated pages.
    let totalDistance = 0;
    for (const token of tokens) {
      let best = Number.POSITIVE_INFINITY;
      for (const candidate of entry.nameTokens) {
        if (!isConservativeFuzzyMatch(token, candidate)) continue;
        const distance = boundedEditDistance(token, candidate, fuzzyBudget(token));
        if (distance < best) best = distance;
        if (best === 0) break;
      }
      if (!Number.isFinite(best)) return null;
      totalDistance += best;
    }

    // Closer spellings rank above looser ones, and — at equal distance — the
    // candidate closest in LENGTH wins. Both matter: "corw" is one edit from
    // "crow" and one edit from "cow", and only the length signal separates the
    // bird the reader was typing from the cattle they were not.
    const lengthDelta = Math.abs(
      tokens.join("").length - entry.titleFolded.replace(/ /g, "").length,
    );
    return {
      document: entry.doc,
      score:
        TIER.fuzzy -
        totalDistance * 120 -
        Math.min(lengthDelta, 6) * 40 +
        modifiers(entry, tokens),
      reason: "fuzzy",
      fuzzy: true,
    };
  }

  /**
   * Within-tier ordering. Bounded to [-60, +250] so it can only ever reorder
   * documents that already matched at the same strength.
   */
  function modifiers(entry: IndexedDocument, tokens: string[]): number {
    const priorityBoost = Math.round(entry.doc.priority * 1.5); // 0–150
    const typeBoost = TYPE_BOOST[entry.doc.type] ?? 0; // 0–40

    const titleLength = entry.titleTokens.length || 1;
    let covered = 0;
    for (const token of tokens) if (entry.titleTokens.includes(token)) covered++;
    const coverage = Math.round((covered / titleLength) * 60); // 0–60

    const extra = Math.max(0, titleLength - tokens.length);
    const lengthPenalty = Math.min(60, extra * 12); // 0–60

    return priorityBoost + typeBoost + coverage - lengthPenalty;
  }

  return {
    documents,
    size: documents.length,
    facets: payload.facets,
    search,
    resolveAnimals,
    comparisonUrlForPair,
  };
}

/* ------------------------------------------------------------------ *
 * Match predicates
 * ------------------------------------------------------------------ */

/** De-duplicate while preserving order. */
function dedupeStrings(values: string[]): string[] {
  return values.filter((value, index) => values.indexOf(value) === index);
}

/** Every query token (in any of its singular forms) appears in `haystack`. */
function allTokensIn(tokenForms: string[][], haystack: string[]): boolean {
  if (haystack.length === 0) return false;
  const set = new Set(haystack);
  return tokenForms.every((forms) => forms.some((form) => set.has(form)));
}

/** Same, but against a folded text blob using word-boundary substring checks. */
function allTokensInText(tokenForms: string[][], text: string): boolean {
  const padded = ` ${text} `;
  return tokenForms.every((forms) => forms.some((form) => padded.includes(` ${form} `)));
}

/**
 * Every query token is a prefix of some title token, and the tokens are
 * consumed in order without reuse. This is what makes "eleph" find Elephant and
 * "blue ring" find Blue-Ringed Octopus, without letting one title token satisfy
 * two different query tokens.
 */
function everyTokenIsPrefixOf(tokens: string[], titleTokens: string[]): boolean {
  if (titleTokens.length === 0) return false;
  const used = new Array<boolean>(titleTokens.length).fill(false);
  return tokens.every((token) => {
    for (let i = 0; i < titleTokens.length; i++) {
      if (!used[i] && titleTokens[i].startsWith(token)) {
        used[i] = true;
        return true;
      }
    }
    return false;
  });
}

/* ------------------------------------------------------------------ *
 * Presentation helpers
 * ------------------------------------------------------------------ */

/**
 * The lead result, but only when it is genuinely decisive.
 *
 * A "Best match" heading above a coin-flip would be a confidence the engine has
 * not earned, so the panel simply omits the section when the top two results
 * are close.
 */
export function pickBestMatch(results: SearchResult[]): SearchResult | undefined {
  const top = results[0];
  if (!top) return undefined;
  if (top.fuzzy) return undefined;
  const runnerUp = results[1];
  if (!runnerUp) return top;
  return top.score - runnerUp.score >= 400 ? top : undefined;
}

/** Bucket results by shelf, in display order, dropping empty sections. */
export function groupResults(results: SearchResult[]): SearchResultGroup[] {
  const groups: SearchResultGroup[] = [];
  const seenLabels = new Map<string, SearchResultGroup>();

  for (const { type, label } of SEARCH_GROUP_ORDER) {
    const matching = results.filter((result) => result.document.type === type);
    if (matching.length === 0) continue;

    // Two shelves share the "Categories & Topics" heading; merge rather than
    // render the same heading twice.
    const existing = seenLabels.get(label);
    if (existing) {
      existing.results = [...existing.results, ...matching].sort((a, b) => b.score - a.score);
      continue;
    }

    const group: SearchResultGroup = { type, label, results: matching };
    seenLabels.set(label, group);
    groups.push(group);
  }

  return groups;
}
