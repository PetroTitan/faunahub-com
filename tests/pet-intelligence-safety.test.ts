/**
 * Pet Intelligence — editorial safety boundaries.
 *
 * Pet content invites four claims that wildlife content never does: that a
 * breed is safe with children, that a breed is hypoallergenic, that a breed
 * has a health risk you can act on, and that some breed is best. Each of them
 * reads as helpful and each of them is a promise FaunaHub cannot keep about an
 * animal it has never met.
 *
 * These tests enforce the boundaries as properties of the corpus rather than as
 * a review checklist, because a checklist protects the pages that existed when
 * it was written and this registry is about to grow tenfold.
 *
 * Each detector is NEGATIVE-TESTED against a string it must catch. A guard that
 * has never been shown to fire is not a guard — it is a test that passes.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import { BREEDS } from "../src/lib/pet-intelligence/index.ts";
import { AKC_TRAITS_EXCLUDED } from "../src/lib/pet-intelligence/trait-scale.ts";
import {
  PUBLISHED_COMPARISONS,
  differenceSummary,
} from "../src/lib/pet-intelligence/comparisons/index.ts";
import { publishedCollections } from "../src/lib/pet-intelligence/collections.ts";
import { BREED_RANKINGS, rankingResult } from "../src/lib/pet-intelligence/rankings.ts";
import type { Breed } from "../src/lib/pet-intelligence/types.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");

/**
 * Every string a reader can see on a breed page.
 *
 * THIS FUNCTION DEFINES THE SUITE'S SCOPE, and it used to open with
 * `if (!breed.editorial) return ""`. That single line reduced every detector
 * below to the 20 authored breeds — 7.3% of the corpus — on the reasoning that
 * a data profile "renders only sourced registry values and a standing note, so
 * there is no editorial prose to police".
 *
 * The reasoning was wrong twice. `originNote` and `scopeNote` are free prose a
 * human writes, they are rendered unconditionally
 * (BreedAttributes.tsx:165 and :209), and neither was ever reachable for a
 * profile without editorial — `originNote` sat below the early return, and
 * `scopeNote` was absent from the list entirely. Text that fails four detectors
 * in an authored breed passed all 29 tests in a data profile.
 *
 * So the fields that exist on EVERY breed are collected first and
 * unconditionally. The editorial block is added when there is one.
 */
function visibleText(breed: Breed): string {
  const always = [
    breed.originNote ?? "",
    breed.scopeNote ?? "",
    breed.coat?.statedAs ?? "",
    breed.lifespanYears?.statedAs ?? "",
    ...Object.values(breed.traits ?? {}).map((t) => t?.method ?? ""),
    ...(breed.measurements?.heightCm ?? []).map((m) => m.statedAs),
    ...(breed.measurements?.weightKg ?? []).map((m) => m.statedAs),
    ...breed.recognition.map((r) => r.registryGroup ?? ""),
  ];
  const e = breed.editorial;
  if (!e) return always.join("\n");
  return [
    ...always,
    ...e.intro,
    ...e.appearance,
    ...e.temperament,
    ...e.activity,
    ...e.grooming,
    ...(e.training ?? []),
    ...e.health,
    ...e.responsibility,
    ...(e.householdContext ?? []),
    ...e.faqs.flatMap((f) => [f.question, f.answer]),
  ].join("\n");
}

function findAll(pattern: RegExp): { breed: string; match: string }[] {
  const hits: { breed: string; match: string }[] = [];
  for (const breed of BREEDS) {
    for (const m of visibleText(breed).matchAll(pattern)) {
      hits.push({ breed: breed.id, match: m[0] });
    }
  }
  return hits;
}

/* ---------------------------------------------------------------- *
 * Veterinary boundary
 * ---------------------------------------------------------------- */

/**
 * Instructional medical language. Deliberately targets the IMPERATIVE and
 * DOSAGE forms rather than the word "health" — a breed page must be able to
 * say "discuss preventive care with a veterinarian", which is the opposite of
 * the problem.
 */
const VET_INSTRUCTION =
  /\b(?:administer|prescrib\w*|dosage|\d+\s?mg\b|milligrams?|treat (?:this|the|your) \w+ with|diagnos(?:e|ing) (?:your|the|a) \w+|you should give (?:your|the) \w+|course of (?:antibiotics|steroids)|home remedy|apply (?:cream|ointment) to)\b/gi;

/** Presenting a named condition as something the breed has. */
const CONDITION_CLAIM =
  /\b(?:suffers? from|prone to (?:hip dysplasia|bloat|cardiomyopathy|epilepsy)|will develop|is at high risk of|commonly develops)\b/gi;

test("no breed page gives veterinary instructions", () => {
  assert.deepEqual(findAll(VET_INSTRUCTION), [], "instructional medical language on a breed page");
});

test("the veterinary detector actually fires", () => {
  const bad = "Administer 5 mg twice daily and treat the dog with a course of antibiotics.";
  assert.ok(bad.match(VET_INSTRUCTION), "VET_INSTRUCTION failed to catch a clear violation");
});

test("no breed page presents a named condition as a breed diagnosis", () => {
  assert.deepEqual(findAll(CONDITION_CLAIM), [], "breed-level condition claim");
});

test("the condition detector actually fires", () => {
  const bad = "This breed is prone to hip dysplasia and commonly develops joint problems.";
  assert.ok(bad.match(CONDITION_CLAIM), "CONDITION_CLAIM failed to catch a clear violation");
});

/**
 * A DIRECTIVE reference to a veterinarian, not merely a mention of one.
 *
 * The first version of this guard was `health.includes("veterinarian")`, and it
 * passed a Beagle section reading "Body-condition management and ear care are
 * common discussion points with veterinarians" — a sentence that states what
 * vets discuss and never tells the reader to see one. The policy requires
 * routing; the old test measured mention.
 */
const VET_ROUTING =
  /\b(?:discuss|ask|talk to|speak to|consult|is a question for|are a question for|worth (?:raising|asking|discussing)|should (?:research|go to|be raised|be directed))\b[^.]{0,160}\b(?:veterinarian|vet)\b/i;

test("every breed's health section ROUTES the reader to a veterinarian", () => {
  for (const breed of BREEDS) {
    if (!breed.editorial) continue;
    const health = breed.editorial.health.join(" ");
    assert.match(health, VET_ROUTING, `${breed.id} health section mentions vets without routing to one`);
  }
});

test("the vet-routing guard rejects a passive mention", () => {
  // The exact sentence that slipped through before. If this ever passes, the
  // guard has regressed to substring matching.
  const passive =
    "Body-condition management and ear care are common discussion points with veterinarians.";
  assert.doesNotMatch(passive, VET_ROUTING, "VET_ROUTING accepts a passive mention again");
  assert.match(
    "Discuss preventive care with a licensed veterinarian.",
    VET_ROUTING,
    "VET_ROUTING rejects genuine routing",
  );
});

/* ---------------------------------------------------------------- *
 * Child and family certainty
 * ---------------------------------------------------------------- */

/**
 * Unhedged safety claims about children and dogs.
 *
 * The regex deliberately allows "no breed is universally safe with children",
 * which is the sentence FaunaHub wants, by requiring an affirmative subject
 * immediately before the claim.
 */
const CHILD_CERTAINTY =
  /\b(?:(?:is|are|makes?) (?:always |completely |totally |perfectly )?(?:safe|gentle|trustworthy) (?:with|around) (?:children|kids|babies|toddlers)|great with kids|guaranteed (?:good|safe) with|never (?:bites?|aggressive)|perfect (?:family )?(?:dog|cat|pet) for)\b/gi;

test("no breed page promises a child-safety outcome", () => {
  assert.deepEqual(findAll(CHILD_CERTAINTY), [], "unhedged child-safety claim");
});

test("the child-safety detector actually fires", () => {
  for (const bad of [
    "This breed is always safe with children.",
    "Labradors are great with kids.",
    "A guaranteed good with children breed.",
    "The perfect family dog for any household.",
  ]) {
    assert.ok(bad.match(CHILD_CERTAINTY), `CHILD_CERTAINTY missed: ${bad}`);
  }
});

test("the child-safety detector does NOT fire on the honest sentence", () => {
  // The failure mode that matters most: a naive phrase list flags the
  // disclaimers rather than the claims, so the guard pressures an author to
  // delete the safest sentence on the page.
  for (const good of [
    "No breed is universally safe with children.",
    "No breed is universally child-safe and individual cats vary.",
    "Behaviour depends on the individual dog, training, socialisation, and supervision.",
  ]) {
    assert.equal(good.match(CHILD_CERTAINTY), null, `CHILD_CERTAINTY false-positived on: ${good}`);
  }
});

/**
 * The variation statement must sit in the SAME partition as the child mention.
 *
 * FAQ answers render inside a collapsed <details>, so a disclaimer that lives
 * only in an FAQ is not on screen next to a claim made in the open prose. The
 * earlier version of this test flattened prose and FAQs into one string, which
 * meant a claim in the always-visible body could be "covered" by a disclaimer a
 * reader has to click to reach. Checking each partition separately is what makes
 * the guard match what the page actually shows.
 */
const CHILD_MENTION = /\b(children|kids|toddlers|babies)\b/i;
const VARIATION =
  /\b(no breed is universally|individual (dogs?|cats?|animals?) vary|varies by (?:individual|dog|cat)|depends on the individual|supervis)/i;

test("wherever children are discussed, variation is stated in the same partition", () => {
  for (const breed of BREEDS) {
    const e = breed.editorial;
    if (!e) continue;
    const openProse = [
      ...e.intro,
      ...e.appearance,
      ...e.temperament,
      ...e.activity,
      ...e.grooming,
      ...(e.training ?? []),
      ...e.health,
      ...e.responsibility,
      ...(e.householdContext ?? []),
    ].join("\n");
    if (CHILD_MENTION.test(openProse)) {
      assert.match(
        openProse,
        VARIATION,
        `${breed.id} discusses children in always-visible prose without stating variation there`,
      );
    }
    for (const faq of e.faqs) {
      const entry = `${faq.question} ${faq.answer}`;
      if (!CHILD_MENTION.test(entry)) continue;
      assert.match(
        entry,
        VARIATION,
        `${breed.id} FAQ "${faq.question}" discusses children without stating variation in the same answer`,
      );
    }
  }
});

/* ---------------------------------------------------------------- *
 * Allergy language
 * ---------------------------------------------------------------- */

const HYPOALLERGENIC_CLAIM =
  /\b(?:is|are) (?:a )?(?:truly |completely |fully )?hypoallergenic\b|\b(?:allergy[- ]free|allergen[- ]free|safe for allergy sufferers|will not trigger allergies)\b/gi;

/**
 * True when a match is DENIED rather than asserted.
 *
 * "No breed is hypoallergenic" contains the phrase this suite forbids, and it
 * is the sentence FaunaHub most wants on the page. A phrase list that cannot
 * tell a claim from its correction flags precisely the honest writing, so every
 * allergy check reads the run-up to the match before failing.
 */
function isDenial(text: string, index: number): boolean {
  const before = text.slice(Math.max(0, index - 60), index).toLowerCase();
  return /\bno\b|\bnot\b|\bnone\b|\bnever\b/.test(before);
}

test("no breed is described as hypoallergenic", () => {
  for (const breed of BREEDS) {
    const text = visibleText(breed);
    for (const m of text.matchAll(HYPOALLERGENIC_CLAIM)) {
      assert.ok(
        isDenial(text, m.index),
        `${breed.id} claims hypoallergenic status: "${m[0]}"`,
      );
    }
  }
});

test("the denial test distinguishes a claim from its correction", () => {
  const claim = "This breed is hypoallergenic and sheds little.";
  const correction = "No breed is hypoallergenic, whatever a seller tells you.";
  assert.ok(!isDenial(claim, claim.indexOf("is hypoallergenic")), "claim must not read as denial");
  assert.ok(
    isDenial(correction, correction.indexOf("is hypoallergenic")),
    "correction must read as denial",
  );
});

test("the hypoallergenic detector actually fires", () => {
  assert.ok("This breed is hypoallergenic.".match(HYPOALLERGENIC_CLAIM));
  assert.ok("An allergy-free companion.".match(HYPOALLERGENIC_CLAIM));
});

test("every breed page that raises allergies says no breed is fully hypoallergenic", () => {
  for (const breed of BREEDS) {
    const text = visibleText(breed);
    if (!/\b(hypoallergenic|allerg)/i.test(text)) continue;
    assert.ok(
      /no (?:dog |cat )?breed is fully hypoallergenic|no cat breed is fully hypoallergenic|no dog breed is fully hypoallergenic/i.test(
        text,
      ),
      `${breed.id} raises allergies without the correction`,
    );
  }
});

/* ---------------------------------------------------------------- *
 * Superlatives and ranking
 * ---------------------------------------------------------------- */

const BEST_BREED_CLAIM =
  /\b(?:the (?:best|smartest|dumbest|strongest|most aggressive|most dangerous|healthiest) (?:breed|dog|cat)\b|is the best (?:dog|cat|breed|pet) (?:for everyone|overall)|#\s?\d+ (?:breed|dog|cat))/gi;

test("no breed page crowns a best, smartest, strongest or most dangerous breed", () => {
  assert.deepEqual(findAll(BEST_BREED_CLAIM), [], "prohibited superlative ranking claim");
});

test("the superlative detector actually fires", () => {
  for (const bad of [
    "The smartest breed by a distance.",
    "It is the best dog for everyone.",
    "Widely called the most dangerous breed.",
    "The healthiest breed you can buy.",
  ]) {
    assert.ok(bad.match(BEST_BREED_CLAIM), `BEST_BREED_CLAIM missed: ${bad}`);
  }
});

/* ---------------------------------------------------------------- *
 * Fake precision
 * ---------------------------------------------------------------- */

/** A rating out of five or ten, or a star rating. */
const FAKE_PRECISION = /\b\d(?:\.\d)?\s*(?:\/|out of)\s*(?:5|10)\b|★|\b\d(?:\.\d)?\s*stars?\b/gi;

test("no breed page renders a numeric rating", () => {
  assert.deepEqual(findAll(FAKE_PRECISION), [], "numeric rating on a breed page");
});

test("the fake-precision detector actually fires", () => {
  for (const bad of ["Trainability: 8.7/10", "Rated 4 out of 5", "★★★★", "4.5 stars"]) {
    assert.ok(bad.match(FAKE_PRECISION), `FAKE_PRECISION missed: ${bad}`);
  }
});

test("no numeric score reaches the registry or its rendering components", () => {
  // The structural half of the same rule: the band is stored, the score is not,
  // so there is nothing on a record for a future component to render as "4/5".
  for (const breed of BREEDS) {
    const serialized = JSON.stringify(breed.traits);
    assert.doesNotMatch(serialized, /"score"|"rating"|"outOf"/, `${breed.id} stores a raw score`);
  }
  for (const file of [
    "src/components/breeds/BreedAttributes.tsx",
    "src/components/breeds/BreedProfileView.tsx",
    "src/app/dogs/breed-finder/BreedFinderClient.tsx",
  ]) {
    const source = fs.readFileSync(path.join(REPO_ROOT, file), "utf8");
    assert.doesNotMatch(source, /\bstars?\b|★|outOf|\/\s*5\b/, `${file} renders a rating`);
  }
});

/* ---------------------------------------------------------------- *
 * Excluded trait axes
 * ---------------------------------------------------------------- */

test("the trait axes FaunaHub refuses to structure are documented, not just absent", () => {
  for (const key of [
    "good_with_young_children",
    "good_with_other_dogs",
    "openness_to_strangers",
    "watchdogprotective_nature",
  ]) {
    const reason = AKC_TRAITS_EXCLUDED[key];
    assert.ok(reason && reason.length > 30, `${key} is excluded without a recorded reason`);
  }
});

test("no breed record carries a structured child, stranger or protectiveness value", () => {
  // The structured model must stay incapable of expressing these, so a future
  // Finder cannot grow a "good with children" filter by adding a field.
  const forbidden = /child|kid|stranger|protective|guard|aggress|family[A-Z]/i;
  for (const breed of BREEDS) {
    for (const key of Object.keys(breed.traits)) {
      assert.doesNotMatch(key, forbidden, `${breed.id} has a forbidden structured trait "${key}"`);
    }
  }
});

/* ---------------------------------------------------------------- *
 * Hedging present where it should be
 * ---------------------------------------------------------------- */

test("every authored breed's temperament section hedges", () => {
  const HEDGE =
    /\b(?:tends? to|tend to|commonly|often|generally|usually|widely described|frequently described|may be|varies|vary|is described as|are described as)\b/i;
  for (const breed of BREEDS) {
    if (!breed.editorial) continue;
    const text = breed.editorial.temperament.join(" ");
    assert.match(text, HEDGE, `${breed.id} states temperament as fact`);
  }
});

test("no breed page uses absolute temperament language", () => {
  const ABSOLUTE =
    /\b(?:always friendly|never aggressive|will always be|is guaranteed to|every \w+ of this breed is|all \w+s of this breed are)\b/gi;
  assert.deepEqual(findAll(ABSOLUTE), [], "absolute temperament claim");
});

test("the absolute-language detector actually fires", () => {
  const ABSOLUTE =
    /\b(?:always friendly|never aggressive|will always be|is guaranteed to|every \w+ of this breed is|all \w+s of this breed are)\b/gi;
  assert.ok("This breed is always friendly and never aggressive.".match(ABSOLUTE));
});

/* ---------------------------------------------------------------- *
 * Schema safety
 * ---------------------------------------------------------------- */

/**
 * Every source file that renders any part of the breed space.
 *
 * This was a HAND-WRITTEN LIST OF SEVEN FILES guarding against a hand-added
 * file — the one failure mode a list cannot cover. A reviewer put a Product
 * node with an AggregateRating into five other breed-facing surfaces
 * (BreedCollectionView, BreedRankingView, BreedDirectory, BreedDiscovery,
 * BreedProfileGrid) and all 479 tests passed.
 *
 * Discovering the files instead means a new component is covered the moment it
 * exists, which is the only way a guard survives a corpus that grows.
 */
function breedSurfaceFiles(): string[] {
  const out: string[] = [];
  const roots = [
    path.join(REPO_ROOT, "src/components/breeds"),
    path.join(REPO_ROOT, "src/app/dogs"),
    path.join(REPO_ROOT, "src/app/cats"),
  ];
  const walkDir = (dir: string) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (fs.statSync(full).isDirectory()) walkDir(full);
      else if (/\.tsx?$/.test(full)) out.push(full);
    }
  };
  roots.forEach(walkDir);
  // Shared components that render breed data but live outside those trees.
  for (const extra of ["src/components/BreedProfileLayout.tsx"]) {
    const full = path.join(REPO_ROOT, extra);
    if (fs.existsSync(full)) out.push(full);
  }
  return out;
}

test("the breed-surface file discovery finds the components it must guard", () => {
  // A discovered list that silently returns nothing would make the guard below
  // pass vacuously — the exact failure it replaces.
  const files = breedSurfaceFiles().map((f) => path.relative(REPO_ROOT, f));
  assert.ok(files.length >= 15, `only ${files.length} breed surfaces discovered`);
  for (const required of [
    "src/components/breeds/BreedCollectionView.tsx",
    "src/components/breeds/BreedRankingView.tsx",
    "src/components/breeds/BreedDirectory.tsx",
    "src/components/breeds/BreedDiscovery.tsx",
    "src/components/breeds/BreedProfileGrid.tsx",
    "src/components/BreedProfileLayout.tsx",
    "src/app/dogs/breeds/[slug]/page.tsx",
    "src/app/cats/compare/[slug]/page.tsx",
  ]) {
    assert.ok(files.includes(required), `discovery missed ${required}`);
  }
});

test("breed pages emit no Product, Review or AggregateRating schema", () => {
  for (const file of breedSurfaceFiles()) {
    const source = fs.readFileSync(file, "utf8");
    assert.doesNotMatch(
      source,
      /"@type":\s*"(?:Product|Review|AggregateRating|Offer)"|AggregateRating|aggregateRating/,
      `${path.relative(REPO_ROOT, file)} emits commercial schema`,
    );
  }
});

test("no breed page invents a Schema.org type that does not exist", () => {
  const source = fs.readFileSync(path.join(REPO_ROOT, "src/lib/schema.ts"), "utf8");
  assert.doesNotMatch(source, /"(?:DogBreed|CatBreed|PetBreed)"/, "invented Schema.org type");
});

/* ---------------------------------------------------------------- *
 * Comparisons must never pick a winner
 * ---------------------------------------------------------------- */

test("no comparison difference statement declares a winner", () => {
  // `differenceSummary` is generated from two breeds' values, so a careless
  // template here would produce a verdict on hundreds of pages at once.
  const VERDICT =
    /\b(better|best|worse|superior|inferior|winner|wins|beats|safer|smarter|easier breed|right choice|recommend)\b/i;
  for (const pair of PUBLISHED_COMPARISONS) {
    for (const line of differenceSummary(pair)) {
      assert.doesNotMatch(line, VERDICT, `${pair.slug}: "${line}"`);
    }
  }
});

test("the comparison verdict detector actually fires", () => {
  const VERDICT =
    /\b(better|best|worse|superior|inferior|winner|wins|beats|safer|smarter|easier breed|right choice|recommend)\b/i;
  for (const bad of [
    "The Labrador is the better family dog.",
    "We recommend the Poodle for most households.",
    "The Beagle wins on trainability.",
  ]) {
    assert.match(bad, VERDICT, `detector missed: ${bad}`);
  }
});

/**
 * A verdict word only counts when nothing nearby negates it.
 *
 * The first version matched a bare "better" and failed on "Neither is better" —
 * the single most important line on the page. Widening it to a lookbehind still
 * failed on "There is no winner" and "does not pick a winner", where the
 * negation is several words away. So the check looks back a short window rather
 * than trying to encode English in one expression. This is the same failure the
 * child-safety guard was built to avoid: a naive phrase list flags the honest
 * sentence and pressures an author to delete it.
 */
function unnegatedVerdicts(source: string): string[] {
  const VERDICT = /\b(winner|wins|beats|superior|is better|are better)\b/gi;
  const NEGATION = /\b(no|not|never|neither|nor|without)\b/i;
  const hits: string[] = [];
  for (const m of source.matchAll(VERDICT)) {
    const before = source.slice(Math.max(0, m.index - 60), m.index);
    if (!NEGATION.test(before)) hits.push(source.slice(Math.max(0, m.index - 40), m.index + 20));
  }
  return hits;
}

test("the comparison renderer contains no winner or score logic", () => {
  const source = fs.readFileSync(
    path.join(REPO_ROOT, "src/components/breeds/BreedComparisonView.tsx"),
    "utf8",
  );
  assert.deepEqual(unnegatedVerdicts(source), [], "verdict logic in the comparison view");
  assert.doesNotMatch(source, /★|\/\s*5\b|aggregateRating/i, "a score reached the comparison view");
  assert.match(
    source,
    /Neither is better/,
    "the comparison page no longer states that it picks no winner",
  );
});

test("the comparison-view detector separates verdicts from disclaimers", () => {
  assert.equal(unnegatedVerdicts("The Labrador is the winner here.").length, 1);
  assert.equal(unnegatedVerdicts("The Poodle is better for most homes.").length, 1);
  assert.equal(unnegatedVerdicts("Neither is better.").length, 0);
  assert.equal(unnegatedVerdicts("FaunaHub does not pick a winner.").length, 0);
  assert.equal(unnegatedVerdicts("There is no winner, no recommendation.").length, 0);
});


/*
 * ---------------------------------------------------------------------------
 * DERIVED SURFACES
 *
 * Everything above reads breed records. Collections, rankings and comparisons
 * carry their own written prose — titles, descriptions, methodology notes — and
 * until now no detector could see a word of it.
 *
 * That is not hypothetical. A reviewer renamed a collection to "Best
 * Low-Maintenance Dog Breeds" — the exact phrase collections.ts's own docstring
 * forbids — and all 479 tests passed, because the only test touching collection
 * titles checks them for slug collisions and is title-agnostic. 27 collections,
 * 3 rankings and 210 comparison pages were policed by nothing.
 *
 * These strings are the most dangerous prose on the site: a breed page's claim
 * is about one breed, but a collection TITLE is a claim about a whole category
 * and is what a search engine shows.
 * ---------------------------------------------------------------------------
 */

/** Every reader-visible string that is written rather than sourced. */
function derivedSurfaceText(): { surface: string; text: string }[] {
  const out: { surface: string; text: string }[] = [];
  for (const c of publishedCollections()) {
    out.push({
      surface: `collection ${c.slug}`,
      text: [c.title, c.description, c.methodology].join("\n"),
    });
  }
  for (const r of BREED_RANKINGS) {
    out.push({
      surface: `ranking ${r.slug}`,
      text: [r.title, r.description, r.methodology, r.columnLabel].join("\n"),
    });
  }
  for (const p of PUBLISHED_COMPARISONS) {
    out.push({
      surface: `comparison ${p.slug}`,
      text: [p.basis, ...differenceSummary(p)].join("\n"),
    });
  }
  return out;
}

function findAllDerived(pattern: RegExp): { surface: string; match: string }[] {
  const hits: { surface: string; match: string }[] = [];
  for (const { surface, text } of derivedSurfaceText()) {
    for (const m of text.matchAll(pattern)) hits.push({ surface, match: m[0] });
  }
  return hits;
}

test("derived surfaces exist to be checked", () => {
  // Guards against the whole block below passing because the corpus is empty.
  const surfaces = derivedSurfaceText();
  assert.ok(surfaces.length > 200, `only ${surfaces.length} derived surfaces found`);
  assert.ok(surfaces.every((s) => s.text.trim().length > 0), "a derived surface has no prose");
});

test("no collection, ranking or comparison crowns a best breed", () => {
  assert.deepEqual(findAllDerived(BEST_BREED_CLAIM), [], "superlative on a derived surface");
});

test("the derived-surface superlative detector actually fires", () => {
  assert.ok("Best Low-Maintenance Dog Breeds".match(/\bbest\b/i));
  assert.ok(
    "These are the best dog breeds for families".match(BEST_BREED_CLAIM),
    "BEST_BREED_CLAIM must catch a category-level superlative",
  );
});

/*
 * A collection TITLE has less room to hedge than a paragraph, so the bar is
 * higher: marketing superlatives are refused outright, not merely in the
 * "best breed" construction the prose detector looks for.
 */
const TITLE_SUPERLATIVE =
  /\b(?:best|top|worst|greatest|ultimate|perfect|ideal|must[- ]have|favourite|favorite)\b/i;

test("no collection or ranking TITLE uses a marketing superlative", () => {
  const offenders: string[] = [];
  for (const c of publishedCollections()) {
    if (TITLE_SUPERLATIVE.test(c.title)) offenders.push(`collection ${c.slug}: ${c.title}`);
  }
  for (const r of BREED_RANKINGS) {
    // "Tallest"/"Heaviest"/"Smallest" are measured superlatives and allowed —
    // they name the variable the page actually orders by.
    if (TITLE_SUPERLATIVE.test(r.title)) offenders.push(`ranking ${r.slug}: ${r.title}`);
  }
  assert.deepEqual(offenders, [], "marketing superlative in a title");
});

test("the title-superlative guard actually fires", () => {
  assert.ok(TITLE_SUPERLATIVE.test("Best Low-Maintenance Dog Breeds"));
  assert.ok(TITLE_SUPERLATIVE.test("Top 10 Apartment Dogs"));
  assert.ok(!TITLE_SUPERLATIVE.test("Tallest Dog Breeds by Published Height"));
  assert.ok(!TITLE_SUPERLATIVE.test("Short-Coated Dog Breeds"));
});

test("no derived surface promises child safety, allergy freedom or a rating", () => {
  assert.deepEqual(findAllDerived(CHILD_CERTAINTY), [], "child-safety promise");
  assert.deepEqual(findAllDerived(FAKE_PRECISION), [], "numeric rating");
  assert.deepEqual(findAllDerived(VET_INSTRUCTION), [], "veterinary instruction");

  // Two shedding collections carry "No breed is hypoallergenic" as the whole
  // point of their methodology note, so this one reads the run-up too.
  for (const { surface, text } of derivedSurfaceText()) {
    for (const m of text.matchAll(HYPOALLERGENIC_CLAIM)) {
      assert.ok(isDenial(text, m.index), `${surface} claims hypoallergenic status: "${m[0]}"`);
    }
  }
});

test("the derived-surface detectors fire on injected text", () => {
  assert.ok("Breeds that are always safe with children".match(CHILD_CERTAINTY));
  assert.ok("Breeds that are completely hypoallergenic".match(HYPOALLERGENIC_CLAIM));
  assert.ok("Scores 5/5 for grooming".match(FAKE_PRECISION));
  assert.ok("Administer 10 mg daily".match(VET_INSTRUCTION));
});

test("no ranking names an excluded breed it cannot actually place", () => {
  /*
   * The named-exclusions block tells a reader the Chihuahua is missing from
   * "Smallest Dog Breeds" and why. That is only honest if the breed is
   * genuinely absent from the table — naming a breed as excluded while also
   * ranking it would be worse than saying nothing.
   */
  for (const ranking of BREED_RANKINGS) {
    const result = rankingResult(ranking);
    const ranked = new Set(result.rows.map((r) => r.breed.id));
    for (const { breed } of result.notableExclusions) {
      assert.ok(
        !ranked.has(breed.id),
        `${ranking.slug} names ${breed.name} as excluded but also ranks it`,
      );
    }
  }
});
