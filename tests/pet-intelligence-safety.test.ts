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
import type { Breed } from "../src/lib/pet-intelligence/types.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");

/**
 * Every string a reader can see on a breed page.
 *
 * A data profile — a breed with no written overview — contributes nothing here,
 * which is correct: it renders only sourced registry values and a standing
 * note, so there is no editorial prose to police.
 */
function visibleText(breed: Breed): string {
  const e = breed.editorial;
  if (!e) return "";
  return [
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
    breed.originNote ?? "",
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

test("no breed is described as hypoallergenic", () => {
  const hits = findAll(HYPOALLERGENIC_CLAIM).filter(
    // "No dog breed IS fully hypoallergenic" is the correction, not the claim.
    (h) => !/^\s*(?:is|are)\b/i.test(h.match) || false,
  );
  for (const breed of BREEDS) {
    const text = visibleText(breed);
    for (const m of text.matchAll(HYPOALLERGENIC_CLAIM)) {
      const before = text.slice(Math.max(0, m.index - 60), m.index).toLowerCase();
      assert.ok(
        /\bno\b|\bnot\b|\bnone\b/.test(before),
        `${breed.id} claims hypoallergenic status: "...${before}${m[0]}"`,
      );
    }
  }
  void hits;
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

test("breed pages emit no Product, Review or AggregateRating schema", () => {
  for (const file of [
    "src/components/BreedProfileLayout.tsx",
    "src/components/breeds/BreedAttributes.tsx",
    "src/components/breeds/BreedProfileView.tsx",
    "src/app/dogs/breeds/[slug]/page.tsx",
    "src/app/cats/breeds/[slug]/page.tsx",
    "src/app/dogs/breed-finder/page.tsx",
    "src/app/cats/breed-finder/page.tsx",
  ]) {
    const source = fs.readFileSync(path.join(REPO_ROOT, file), "utf8");
    assert.doesNotMatch(
      source,
      /"@type":\s*"(?:Product|Review|AggregateRating|Offer)"|AggregateRating|aggregateRating/,
      `${file} emits commercial schema`,
    );
  }
});

test("no breed page invents a Schema.org type that does not exist", () => {
  const source = fs.readFileSync(path.join(REPO_ROOT, "src/lib/schema.ts"), "utf8");
  assert.doesNotMatch(source, /"(?:DogBreed|CatBreed|PetBreed)"/, "invented Schema.org type");
});
