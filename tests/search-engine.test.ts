/**
 * Search relevance — ranking, comparison resolution and edge-case tests.
 *
 * These run the real engine over the real generated index, so they assert what
 * a reader would actually see rather than what a fixture says. Relevance is a
 * product decision, and this file is where those decisions are written down in
 * a form that fails when someone changes them by accident.
 *
 *   npm run test
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import {
  MAX_RESULTS,
  TIER,
  createSearchEngine,
  groupResults,
  pickBestMatch,
} from "../src/lib/search/engine.ts";
import {
  boundedEditDistance,
  fold,
  fuzzyBudget,
  isConservativeFuzzyMatch,
  queryTokens,
  wordVariants,
} from "../src/lib/search/normalize.ts";
import type { SearchIndexPayload, SearchResult } from "../src/lib/search/types.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const payload = JSON.parse(
  fs.readFileSync(path.join(REPO_ROOT, "public", "search-index.json"), "utf8"),
) as SearchIndexPayload;

const engine = createSearchEngine(payload);

/** Titles of the top `n` results, for readable assertions. */
function top(query: string, n = 5): string[] {
  return engine.search(query).results.slice(0, n).map((result) => result.document.title);
}

function first(query: string): SearchResult | undefined {
  return engine.search(query).results[0];
}

/* ------------------------------------------------------------------ *
 * Normalization
 * ------------------------------------------------------------------ */

test("folding is case, accent and punctuation insensitive", () => {
  assert.equal(fold("  WOLF  "), "wolf");
  assert.equal(fold("Blue-Ringed Octopus"), "blue ringed octopus");
  assert.equal(fold("Père David's Deer"), "pere david s deer");
  assert.equal(fold("!!!"), "");
});

test("comparison intent words are stripped, but never all of them", () => {
  assert.deepEqual(queryTokens("difference between crocodile and alligator"), [
    "crocodile",
    "alligator",
  ]);
  assert.deepEqual(queryTokens("Wolf vs. Dog"), ["wolf", "dog"]);
  assert.deepEqual(queryTokens("wolf versus dog"), ["wolf", "dog"]);
  // A query made only of intent words still has to search for something.
  assert.deepEqual(queryTokens("compare"), ["compare"]);
  assert.deepEqual(queryTokens("what is the difference"), ["what", "is", "the", "difference"]);
});

test("word variants are additive, both ways, and keep the original first", () => {
  assert.equal(wordVariants("wolves")[0], "wolves");
  assert.ok(wordVariants("wolves").includes("wolf"));
  assert.ok(wordVariants("butterflies").includes("butterfly"));
  assert.ok(wordVariants("foxes").includes("fox"));
  assert.ok(wordVariants("dogs").includes("dog"));
  assert.ok(wordVariants("dog").includes("dogs"), "a singular must also try its plural");
  assert.ok(wordVariants("butterfly").includes("butterflies"));
  // A word that merely ends in "s" is never damaged: the original survives.
  assert.equal(wordVariants("octopus")[0], "octopus");
  // Every variant of every animal name must still be a variant, never a
  // different animal that happens to be one letter away.
  for (const token of ["cat", "bat", "rat", "cow", "sow", "mole", "vole"]) {
    const variants = wordVariants(token);
    assert.equal(variants[0], token);
    for (const variant of variants.slice(1)) {
      assert.ok(
        variant.startsWith(token) || token.startsWith(variant),
        `"${token}" produced unrelated variant "${variant}"`,
      );
    }
  }
});

test("typo tolerance is off below four characters", () => {
  assert.equal(fuzzyBudget("cat"), 0);
  assert.equal(fuzzyBudget("bear"), 1);
  assert.equal(fuzzyBudget("elephant"), 2);
  // The rule that stops a three-letter animal becoming a different one.
  assert.equal(isConservativeFuzzyMatch("cat", "bat"), false);
  assert.equal(isConservativeFuzzyMatch("cat", "rat"), false);
  assert.equal(isConservativeFuzzyMatch("elk", "eel"), false);
});

test("typo tolerance requires a matching first letter", () => {
  assert.equal(isConservativeFuzzyMatch("hare", "bare"), false);
  assert.equal(isConservativeFuzzyMatch("elefant", "elephant"), true);
  assert.equal(isConservativeFuzzyMatch("pengiun", "penguin"), true);
});

test("bounded edit distance short-circuits instead of over-reporting", () => {
  assert.equal(boundedEditDistance("wolf", "wolf", 2), 0);
  assert.equal(boundedEditDistance("wolf", "wolves", 1), 2); // max + 1
  assert.equal(boundedEditDistance("kitten", "sitting", 3), 3);
});

/* ------------------------------------------------------------------ *
 * Tier invariants
 * ------------------------------------------------------------------ */

test("scoring tiers stay far enough apart that modifiers cannot invert them", () => {
  // modifiers() is bounded to [-60, +250]; the smallest adjacent gap must
  // exceed the full 310-point swing or a weak match could outrank a strong one.
  const tiers = [...Object.values(TIER)].sort((a, b) => a - b);
  for (let i = 1; i < tiers.length; i++) {
    const gap = tiers[i] - tiers[i - 1];
    assert.ok(gap >= 400, `tier gap of ${gap} is too small to be safe`);
  }
});

test("no computed score can climb into the tier above it", () => {
  // Two tiers are computed rather than constant — animal-subject grows with the
  // number of animals a document covers, and partial grows with coverage — so
  // neither appears in TIER and the gap test above cannot see them. Both used
  // to be unbounded; a page listing seven animals reached 7,200, above
  // `title-prefix`. Asserted here over the real index rather than by reading
  // the formulas.
  const queries = [
    "chimpanzee gorilla orangutan lemur baboon macaque",
    "gecko chameleon iguana komodo dragon sea turtle snake",
    "octopus cuttlefish squid nautilus",
    "frog toad salamander newt",
    "my dog ate chocolate",
    "dog age in human years",
  ];
  for (const query of queries) {
    for (const result of engine.search(query).results) {
      if (result.reason === "animal-subject") {
        assert.ok(
          result.score < TIER["title-prefix"],
          `animal-subject reached ${result.score} on "${query}" — above title-prefix`,
        );
      }
      if (result.reason === "partial") {
        assert.ok(
          result.score < TIER["title-tokens"],
          `partial reached ${result.score} on "${query}" — above title-tokens`,
        );
      }
    }
  }
});

/* ------------------------------------------------------------------ *
 * Exact matching
 * ------------------------------------------------------------------ */

test("an exact animal name ranks its profile first", () => {
  for (const [query, expected] of [
    ["Wolf", "Wolf"],
    ["elephant", "Elephant"],
    ["pangolin", "Pangolin"],
    ["axolotl", "Axolotl"],
    ["sea lion", "Sea Lion"],
    ["blue ringed octopus", "Blue-Ringed Octopus"],
  ] as const) {
    assert.equal(top(query)[0], expected, `"${query}" did not lead with ${expected}`);
  }
});

test("case, padding and punctuation do not change the winner", () => {
  const expected = top("wolf")[0];
  for (const variant of ["Wolf", "  WOLF  ", "wolf!", "..wolf..", "WoLf"]) {
    assert.equal(top(variant)[0], expected, `"${variant}" ranked differently`);
  }
});

test("a plural lands on the singular profile, not a longer name containing it", () => {
  assert.equal(top("cats")[0], "Cat");
  assert.equal(top("wolves")[0], "Wolf");
  assert.equal(top("butterflies")[0], "Butterfly");
});

test("a verified scientific name resolves to its animal", () => {
  const result = first("Panthera leo");
  assert.ok(result, "no result for Panthera leo");
  assert.equal(result.document.type, "animal");
  assert.match(result.document.scientificName ?? "", /Panthera leo/);
});

test("scientific-name matching only uses names the profiles declare", async () => {
  // Wolf used to be the fixture here, because it declared no scientificName
  // despite printing "(Canis lupus)" in its own <h1>. It now declares one, so
  // the example moved to a page where the absence is permanent: "Shark" covers
  // more than 500 species and must never resolve to one of them.
  const shark = engine.documents.find((document) => document.url === "/animals/shark");
  assert.ok(shark);
  assert.equal(shark.scientificName, undefined);

  // The point the fixture was standing in for, asserted directly: no document
  // may carry a name its profile does not declare, in either direction.
  const { SCIENTIFIC_NAMES } = await import("../src/lib/animal-compare/scientific-names.ts");
  for (const document of engine.documents) {
    if (!document.url.startsWith("/animals/")) continue;
    const slug = document.url.slice("/animals/".length);
    assert.equal(
      document.scientificName ?? undefined,
      SCIENTIFIC_NAMES[slug] ?? undefined,
      `${document.url} carries a scientific name its profile does not declare`,
    );
  }
});

test("a verified alias resolves to the canonical animal", () => {
  // "Flying Lemur" and "Killer Whale" are the parenthetical names the profiles
  // themselves print — not synonyms invented for search.
  assert.equal(top("flying lemur")[0], "Colugo");
  assert.equal(top("killer whale")[0], "Orca");
});

/* ------------------------------------------------------------------ *
 * Prefix and partial matching
 * ------------------------------------------------------------------ */

test("a prefix finds the animal", () => {
  assert.equal(top("eleph")[0], "Elephant");
  assert.equal(top("pangol")[0], "Pangolin");
  assert.ok(top("octop", 8).includes("Octopus"));
});

test("a prefix result is never a fuzzy guess", () => {
  const result = first("eleph");
  assert.ok(result);
  assert.equal(result.fuzzy, false);
});

/* ------------------------------------------------------------------ *
 * Comparison resolution
 * ------------------------------------------------------------------ */

test("two animals resolve to the published comparison, in either order", () => {
  for (const [a, b] of [
    ["wolf dog", "dog wolf"],
    ["crow raven", "raven crow"],
    ["dog cat", "cat dog"],
    ["octopus squid", "squid octopus"],
    ["frog toad", "toad frog"],
  ] as const) {
    const forward = engine.search(a);
    const reverse = engine.search(b);
    assert.equal(
      forward.results[0].document.type,
      "comparison",
      `"${a}" did not lead with a comparison`,
    );
    assert.equal(
      forward.results[0].document.url,
      reverse.results[0].document.url,
      `"${a}" and "${b}" resolved to different pages`,
    );
  }
});

test("every animal name in the vocabulary resolves to its own animal", () => {
  // A sweep, not a sample. Three names used to resolve to nothing or to a
  // DIFFERENT animal because intent words were stripped before the phrase
  // scanner ran: "Crown-of-Thorns Starfish" collapsed to plain "starfish" and
  // then served that pair's comparison as the best match.
  const broken: string[] = [];
  for (const [name, slug] of Object.entries(payload.animalNames)) {
    if (!engine.resolveAnimals(name).includes(slug)) {
      broken.push(`${name} -> ${JSON.stringify(engine.resolveAnimals(name))}`);
    }
  }
  assert.deepEqual(broken, [], `names that do not resolve to themselves: ${broken.join("; ")}`);
});

test("every animal document leads with its own page when searched by title", () => {
  // A sweep over all 992 animal documents. This is the check that catches a
  // multi-word name being split into two other animals — "whale shark" used to
  // return a Whale vs Shark comparison above the whale shark's own profile.
  const animals = payload.documents.filter((document) => document.type === "animal");
  // Keyed on the FOLDED title, because that is what a reader's query becomes.
  // "Kākāpō" and "Kakapo" are one bird under two spellings, and leading with
  // either page is correct.
  const titles = new Map<string, string[]>();
  for (const document of animals) {
    const key = fold(document.title);
    titles.set(key, [...(titles.get(key) ?? []), document.url]);
  }

  const failures: string[] = [];
  for (const document of animals) {
    const top = engine.search(document.title).results[0];
    if (!top) {
      failures.push(`"${document.title}" returned nothing`);
      continue;
    }
    // Two documents may legitimately share a title (the same species under two
    // spellings); leading with either is correct.
    const acceptable = titles.get(fold(document.title)) ?? [document.url];
    if (!acceptable.includes(top.document.url)) {
      failures.push(`"${document.title}" -> ${top.document.url} (expected one of ${acceptable.join(", ")})`);
    }
  }
  assert.deepEqual(failures, [], `animals not leading with their own page:\n${failures.join("\n")}`);
});

test("every published pair resolves to its comparison, in both orders", () => {
  // All 288, both directions. The earlier test checked one pair, which is how
  // "Mole vs Rat" shipped answering correctly in one order and wrongly in the
  // other — the greedy scanner read the two animals as the single animal
  // "mole rat" once "vs" had been stripped out from between them.
  const names = new Map<string, string>();
  for (const document of payload.documents) {
    if (document.type !== "animal") continue;
    const slugs = document.animalSlugs ?? [];
    if (slugs.length === 1) names.set(slugs[0], document.title);
  }

  const failures: string[] = [];
  for (const [key, url] of Object.entries(payload.pairs)) {
    const [slugA, slugB] = key.split("--");
    const nameA = names.get(slugA);
    const nameB = names.get(slugB);
    // A handful of pair members are hub entries rather than single profiles.
    if (!nameA || !nameB) continue;
    for (const query of [`${nameA} vs ${nameB}`, `${nameB} vs ${nameA}`]) {
      const top = engine.search(query).results[0];
      if (top?.document.url !== url) {
        failures.push(`"${query}" -> ${top?.document.url ?? "(none)"} (expected ${url})`);
      }
    }
  }
  assert.deepEqual(failures, [], `pair resolution failures:\n${failures.join("\n")}`);
});

test("a natural-language comparison phrase reaches the same page", () => {
  const direct = engine.search("crocodile alligator").results[0];
  const phrased = engine.search("difference between crocodile and alligator").results[0];
  const versus = engine.search("crocodile vs alligator").results[0];
  assert.equal(direct.document.url, phrased.document.url);
  assert.equal(direct.document.url, versus.document.url);
  assert.equal(direct.document.type, "comparison");
});

test("the resolved comparison is the one the registry publishes", () => {
  const url = engine.comparisonUrlForPair("wolf", "dog");
  assert.ok(url, "wolf--dog has no published comparison");
  assert.equal(engine.search("wolf dog").results[0].document.url, url);
  // Order-independence at the lookup level, not just in the ranking.
  assert.equal(engine.comparisonUrlForPair("dog", "wolf"), url);
});

test("a partly-understood query never claims a comparison is unpublished", () => {
  // The engine may only make the factual negative claim "X vs Y has not been
  // published" about a query it has read in full. "coral snkae vs king cobra"
  // used to resolve to coral + king-cobra and assert that pair was unpublished,
  // while /animal-compare/coral-snake-vs-king-cobra was listed on the same
  // screen — the page contradicting itself about content FaunaHub had written.
  const response = engine.search("coral snkae vs king cobra");
  assert.equal(response.results[0].document.url, "/animal-compare/coral-snake-vs-king-cobra");
  assert.equal(response.missingPair, undefined);

  // A token the engine cannot place is enough to withhold the claim.
  assert.equal(engine.search("sae lion vs seal").missingPair, undefined);
  assert.equal(engine.search("how long do dogs live").missingPair, undefined);

  // But a fully-understood, explicitly comparative query still makes it.
  assert.ok(engine.search("elephant vs rhinoceros").missingPair);
});

test("two names side by side are not treated as a comparison request", () => {
  // Very often they are one animal, or one animal and a stray word. Announcing
  // "No Sloth vs Bear comparison has been published yet" to a reader who typed
  // the name of a real bear invents an intention they never expressed.
  for (const query of [
    "sloth bear",
    "elephant seal",
    "tiger beetle",
    "koala bear",
    "golden lion tamarin",
    "elephant rhinoceros",
  ]) {
    assert.equal(
      engine.search(query).missingPair,
      undefined,
      `"${query}" claimed a comparison the reader never asked for`,
    );
  }

  // Adding an explicit marker is what turns it into a question.
  assert.ok(engine.search("elephant vs rhinoceros").missingPair);
  assert.ok(engine.search("difference between elephant and rhinoceros").missingPair);
});

test("a multi-word animal name is never split into two other animals", () => {
  // "whale shark" used to be read as whale + shark, and the Whale vs Shark
  // comparison — an article about two different animals — was featured as the
  // best match above the whale shark's own profile.
  for (const [query, expected] of [
    ["whale shark", "Whale Shark"],
    ["javan hawk eagle", "Javan Hawk-eagle"],
    ["sloth bear", "Sloth Bear"],
    ["golden lion tamarin", "Golden Lion Tamarin"],
  ] as const) {
    assert.equal(top(query)[0], expected, `"${query}" did not lead with ${expected}`);
  }
});

test("a document that is about several animals is recognised as being about them", () => {
  // The behavior group registry's `relatedAnimalSlugs` holds { slug, name }
  // objects despite the name; copied straight into a string[] field, every
  // membership test against those 14 documents silently failed.
  for (const document of payload.documents) {
    for (const slug of document.animalSlugs ?? []) {
      assert.equal(typeof slug, "string", `${document.url} has a non-string animal slug`);
    }
  }
  assert.match(top("octopus cuttlefish squid")[0], /Cephalopod/i);
  assert.match(top("frog toad salamander newt")[0], /Amphibian/i);
});

test("an unpublished pair invents nothing and offers both animals instead", () => {
  const response = engine.search("elephant vs rhinoceros");
  assert.ok(response.missingPair, "no missingPair reported for an unpublished pair");
  assert.deepEqual([...response.missingPair.slugs].sort(), ["elephant", "rhinoceros"]);

  // No result may be a comparison URL for a pair that does not exist.
  assert.equal(engine.comparisonUrlForPair("elephant", "rhinoceros"), undefined);
  const urls = response.results.map((result) => result.document.url);
  assert.equal(urls.includes("/animal-compare/elephant-vs-rhinoceros"), false);
  assert.equal(urls.includes("/animal-compare/rhinoceros-vs-elephant"), false);

  // Both real profiles are offered.
  assert.ok(urls.includes("/animals/elephant"), "elephant profile not offered");
  assert.ok(urls.includes("/animals/rhinoceros"), "rhinoceros profile not offered");
});

test("multi-word animal names are read as one animal", () => {
  assert.deepEqual(engine.resolveAnimals("sea lion"), ["sea-lion"]);
  assert.deepEqual(engine.resolveAnimals("sea lion seal"), ["sea-lion", "seal"]);
  // The greedy longest match must not read "sea lion" as "sea" plus "lion".
  assert.equal(engine.resolveAnimals("sea lion").includes("lion"), false);
});

test("a published comparison outranks articles that merely mention both animals", () => {
  const response = engine.search("dog cat");
  assert.equal(response.results[0].document.type, "comparison");
  assert.ok(
    response.results[0].score - response.results[1].score > 1000,
    "the comparison does not decisively lead",
  );
});

test("a spaced compound name reaches the closed-up profile", () => {
  // FaunaHub writes these closed; readers often space them. "sea horse" used to
  // resolve to plain Horse and the seahorse's own profile never appeared.
  assert.deepEqual(engine.resolveAnimals("sea horse"), ["seahorse"]);
  assert.equal(top("sea horse")[0], "Seahorse");
  assert.equal(top("lion fish")[0], "Lionfish");
});

test("a pair only takes the top tier when it accounts for the whole query", () => {
  // "dog food vs cat food" names two animals, but the reader wants the article
  // about the two foods — which FaunaHub has written.
  assert.equal(
    top("dog food vs cat food")[0],
    "Dog Food vs Cat Food: What's the Difference?",
  );
  // With nothing left over, the pair still wins outright.
  assert.equal(engine.search("dog cat").results[0].document.url, "/animal-compare/dog-vs-cat");
});

test("an ingredient a page merely mentions is not treated as a name for it", () => {
  // "fish" is in the searchAliases of "Can Cats Eat Tuna?". At alias strength it
  // made a cat-food article the best match for "fish" on an animal encyclopedia.
  const first = engine.search("fish").results[0];
  assert.doesNotMatch(first.document.url, /\/food\//, `"fish" led with ${first.document.url}`);
  // The alias is still reachable, one tier down.
  assert.ok(
    engine.search("cocoa").results.some((result) => result.document.url.includes("chocolate")),
    "curated food aliases became unreachable",
  );
});

test("a page's own description can carry an alternative name", () => {
  // The cougar's meta description says it is "also called puma and mountain
  // lion" — the only machine-readable record of that on the site. Truncating
  // descriptions to a display length put those words out of reach, so the
  // continent's commonest name for the animal found the African lion instead.
  assert.equal(top("mountain lion")[0], "Cougar");
  assert.equal(top("puma")[0], "Cougar");
});

test("a query with words no page contains still reaches the right page", () => {
  // Every other tier demands all query tokens, which meant a real question —
  // words and all — returned the animal and its comparisons and nothing else.
  for (const [query, url] of [
    ["my dog ate chocolate", "/pet-safety/dog-ate-chocolate-what-to-do"],
    ["dog age in human years", "/tools/dog-age-calculator"],
    ["best dog breed for apartments", "/dogs/breeds/best-dogs-for-apartments"],
  ] as const) {
    const urls = engine.search(query).results.map((result) => result.document.url);
    assert.ok(urls.includes(url), `"${query}" does not reach ${url} at all`);
  }
});

/* ------------------------------------------------------------------ *
 * Fuzzy matching
 * ------------------------------------------------------------------ */

test("a plausible typo surfaces the right animal first", () => {
  assert.equal(top("elefant")[0], "Elephant");
  assert.equal(top("pengiun")[0], "Penguin");
  assert.equal(top("giraff")[0], "Giraffe");
});

test("a fuzzy hit is flagged, and never presented as the best match", () => {
  const response = engine.search("elefant");
  assert.ok(response.results[0].fuzzy, "the typo result is not flagged as fuzzy");
  assert.equal(response.bestMatch, undefined, "a fuzzy guess was promoted to best match");
});

test("fuzzy matching never reaches description or scientific-name text", () => {
  // "elegans" (Eudromia elegans, the tinamou) is two edits from "elefant".
  // Allowing fuzzy matching there would hand a reader a completely different
  // bird; the tinamou must not appear at all.
  const titles = top("elefant", 10);
  assert.equal(titles.includes("Tinamou"), false, "a scientific-name typo match leaked in");
});

test("no correctly-spelled animal name anywhere in the index returns a fuzzy result", () => {
  // Swept across every name rather than sampled. Sampling "wolf" hid a real
  // defect: the fuzzy pass used to run whenever a query had fewer than five
  // strong hits, so 30 correctly-spelled names — skunk returning skinks, moose
  // returning a mouse, cricket returning chickens — pulled in near-misses.
  const polluted: string[] = [];
  for (const name of Object.keys(payload.animalNames)) {
    if (engine.search(name).results.some((result) => result.fuzzy)) polluted.push(name);
  }
  assert.deepEqual(polluted, [], `correctly-spelled names returning fuzzy results: ${polluted.join(", ")}`);
});

test("a transposed pair of keys still reaches the animal the reader meant", () => {
  // Plain Levenshtein charges two edits for a transposition, which put the
  // INTENDED animal outside the budget while a different one sat inside it:
  // "corw" was one edit from Cow and two from Crow, so the reader asking about
  // a bird was shown cattle and nothing else.
  for (const [typo, intended] of [
    ["corw", "Crow"],
    ["owlf", "Wolf"],
    ["loin", "Lion"],
    ["sawn", "Swan"],
    ["muose", "Moose"],
  ] as const) {
    assert.equal(top(typo)[0], intended, `"${typo}" did not lead with ${intended}`);
  }
});

test("a typo inside a multi-word name resolves the whole name, not a fragment", () => {
  // "coral sanke" used to drop the misspelt token and answer with Coral — a
  // reef invertebrate — for a query about a venomous snake.
  assert.deepEqual(engine.resolveAnimals("coral sanke"), ["coral-snake"]);
  assert.equal(top("coral sanke")[0], "Coral Snake");
});

test("every fuzzy result scores below every exact result", () => {
  for (const query of ["corw", "owlf", "gamster", "elefant", "pengiun", "muose"]) {
    const results = engine.search(query).results;
    const exact = results.filter((result) => !result.fuzzy);
    const fuzzy = results.filter((result) => result.fuzzy);
    if (exact.length === 0 || fuzzy.length === 0) continue;
    const worstExact = Math.min(...exact.map((result) => result.score));
    const bestFuzzy = Math.max(...fuzzy.map((result) => result.score));
    assert.ok(bestFuzzy < worstExact, `"${query}": a fuzzy result outscored an exact one`);
  }
});

/* ------------------------------------------------------------------ *
 * Topic, group and hub queries
 * ------------------------------------------------------------------ */

test("topic queries reach the right cluster", () => {
  assert.match(top("primate behavior")[0], /Primate Behavior/i);
  assert.ok(top("animal taxonomy", 5).some((title) => /Taxonomy/i.test(title)));
  assert.ok(top("endangered", 5).some((title) => /Endangered|Red List/i.test(title)));
  assert.ok(top("lifespan", 6).some((title) => /Lifespan/i.test(title)));
});

test("a tool query reaches the tool", () => {
  const results = engine.search("hamster age calculator").results;
  assert.equal(results[0].document.type, "tool");
  assert.equal(results[0].document.url, "/tools/hamster-age-calculator");
});

test("an editorially curated food alias reaches the safety page", () => {
  // "cocoa" and "cacao" are in FOOD_SAFETY_ARTICLES.searchAliases, written by
  // the editors for exactly this purpose.
  const urls = engine.search("cocoa").results.map((result) => result.document.url);
  assert.ok(
    urls.some((url) => url.includes("chocolate")),
    "the curated food aliases are not reachable",
  );
});

/* ------------------------------------------------------------------ *
 * Empty, nonsense and hostile input
 * ------------------------------------------------------------------ */

test("empty and whitespace-only queries return nothing, calmly", () => {
  for (const query of ["", " ", "   ", "\t\n", " "]) {
    const response = engine.search(query);
    assert.equal(response.empty, true);
    assert.equal(response.results.length, 0);
    assert.equal(response.groups.length, 0);
    assert.equal(response.bestMatch, undefined);
  }
});

test("punctuation-only input is treated as empty", () => {
  for (const query of ["!!!", "???", "...", "-", "@#$%^&*()"]) {
    assert.equal(engine.search(query).empty, true, `"${query}" was not treated as empty`);
  }
});

test("a nonsense query returns no results and invents nothing", () => {
  const response = engine.search("xyzzy plugh frobnicate");
  assert.equal(response.empty, true);
  assert.equal(response.results.length, 0);
  assert.equal(response.missingPair, undefined);
});

test("hostile and pathological input never throws", () => {
  const inputs = [
    "<script>alert(1)</script>",
    "'; DROP TABLE animals;--",
    "../../etc/passwd",
    "%%%%%%",
    "\\",
    "a".repeat(5000),
    "wolf ".repeat(400),
    "🐺🦊🐻",
    " ",
    "-1e309",
    "wolf dog",
    "ＷＯＬＦ",
  ];
  for (const input of inputs) {
    assert.doesNotThrow(
      () => engine.search(input),
      `threw on ${JSON.stringify(input.slice(0, 40))}`,
    );
  }
});

test("results are capped so the panel can never grow unbounded", () => {
  // "a" prefixes an enormous number of titles.
  assert.ok(engine.search("a").results.length <= MAX_RESULTS);
  assert.ok(engine.search("the").results.length <= MAX_RESULTS);
});

/* ------------------------------------------------------------------ *
 * Grouping and best match
 * ------------------------------------------------------------------ */

test("results group by type and empty groups are dropped", () => {
  const response = engine.search("dog");
  assert.ok(response.groups.length > 0);
  for (const group of response.groups) {
    assert.ok(group.results.length > 0, `group "${group.label}" is empty`);
    // Every result in a group is reachable from the flat list too.
    for (const result of group.results) {
      assert.ok(
        response.results.includes(result),
        `${result.document.url} is grouped but not in results`,
      );
    }
  }
  const labels = response.groups.map((group) => group.label);
  assert.equal(new Set(labels).size, labels.length, "a section heading was rendered twice");
});

test("a merged section may hold more than one document type", () => {
  // "Hubs" and "Categories" deliberately share the heading "Categories & Topics",
  // so groupResults merges them into ONE section whose results are of mixed
  // type. Any UI that rebuilds section membership from a result's type will
  // silently drop the minority type — which is exactly the defect this asserts
  // the shape of. SearchPanel derives its keyboard list FROM the sections it
  // renders, so the two cannot diverge.
  const groups = groupResults(engine.search("endangered").results);
  const merged = groups.find((group) => group.label === "Categories & Topics");
  assert.ok(merged, "expected a merged Categories & Topics section");
  const types = new Set(merged.results.map((result) => result.document.type));
  assert.ok(
    types.size > 1,
    "the merged section no longer mixes types — re-check SearchPanel's section building",
  );
  // And the merged section is rendered exactly once.
  assert.equal(groups.filter((group) => group.label === "Categories & Topics").length, 1);
});

test("grouping preserves score order inside each section", () => {
  const groups = groupResults(engine.search("dog").results);
  for (const group of groups) {
    for (let i = 1; i < group.results.length; i++) {
      assert.ok(
        group.results[i - 1].score >= group.results[i].score,
        `${group.label} is out of order`,
      );
    }
  }
});

test("best match is only claimed when the lead is decisive", () => {
  assert.ok(engine.search("wolf").bestMatch, "an exact animal name produced no best match");
  assert.equal(pickBestMatch([]), undefined);
  const close = engine.search("a");
  if (close.bestMatch) {
    assert.ok(close.results[0].score - close.results[1].score >= 400);
  }
});

test("every result points at a url that is in the index", () => {
  const known = new Set(engine.documents.map((document) => document.url));
  for (const query of ["wolf", "dog cat", "eleph", "endangered", "tools", "cocoa", "elefant"]) {
    for (const result of engine.search(query).results) {
      assert.ok(known.has(result.document.url), `${result.document.url} is not an indexed url`);
    }
  }
});

/* ------------------------------------------------------------------ *
 * Performance
 * ------------------------------------------------------------------ */

test("a pathological query cannot be made expensive", () => {
  // Ranking runs synchronously during render, so cost has to be bounded by the
  // input rather than by good behaviour. A query made entirely of intent words
  // deliberately survives stripping (a query of only intent words still has to
  // search for something), which at 3,200 repetitions took over a second.
  // SearchPanel caps the input at 120 characters before it reaches the engine;
  // this asserts the engine is fast at that ceiling whatever was pasted.
  const CAP = 120;
  for (const tokens of [400, 1600, 3200]) {
    const query = "the ".repeat(tokens).trim().slice(0, CAP);
    const started = performance.now();
    engine.search(query);
    const elapsed = performance.now() - started;
    assert.ok(elapsed < 60, `${tokens} pasted tokens still cost ${elapsed.toFixed(0)}ms once capped`);
  }
  const started = performance.now();
  engine.search("a".repeat(20_000).slice(0, CAP));
  assert.ok(performance.now() - started < 60);
});

test("a query completes fast enough to run on every keystroke", () => {
  const queries = ["w", "wo", "wol", "wolf", "wolf d", "wolf dog", "elephant rhinoceros"];
  const started = performance.now();
  for (let i = 0; i < 20; i++) for (const query of queries) engine.search(query);
  const perQuery = (performance.now() - started) / (20 * queries.length);
  assert.ok(perQuery < 25, `${perQuery.toFixed(1)}ms per query is too slow for typing`);
});
