# Breed comparison architecture

Why breed comparisons are their own namespace, where the pairs come from, and
what a comparison page may never say.

Last reviewed: 2026-09-13.

---

## Routing decision

```
/animal-compare/[slug]      species and taxa      "Lion vs Tiger"
/dogs/compare/[slug]        dog breeds            "Beagle vs Basset Hound"
/cats/compare/[slug]        cat breeds            "Korat vs Singapura"
```

Breed comparisons are **deliberately not** folded into `/animal-compare`.

That cluster's records carry `animalSlugs` that resolve into the animal
registry, and its search index maintains a `pairs` map keyed by an unordered
animal-pair key. A Labrador Retriever is not a species competing with the dog
profile. Putting breed pairs in the same namespace would have meant:

- `dog-vs-cat` and `labrador-retriever-vs-golden-retriever` indistinguishable in
  routing;
- a pair index where a species key and a breed key could collide;
- search results where "compare two animals" and "compare two dog breeds" sit on
  one shelf with no way to tell which a result is.

The two systems answer different questions. They stay separate, and a test
asserts no breed comparison is ever routed under `/animal-compare/`.

---

## Where the pairs come from

**A comparison page asserts, implicitly, that these two breeds are worth
comparing.** If FaunaHub derived that premise from shared attributes — same
group, similar size — it would be inventing the question as well as answering
it, at a scale of hundreds of pages.

So the candidate graph is **sourced**.

### Dogs: the AKC's own related-breeds field

Every AKC breed page publishes `related_breeds`. Across the corpus that is 770
directed edges and 569 undirected pairs where both breeds are published here.

FaunaHub keeps only the **mutual** ones — where both breed pages name each
other. That cuts 569 to **201**, and what it removes is the long tail where a
rare breed's page cites a much better-known relative that does not reciprocate.
A page claiming two breeds are comparable should rest on both registry entries
agreeing.

### Cats: shared registry facts

Neither CFA nor FIFe publishes a related-breeds list. Cat candidates are pairs
sharing a **FIFe category** and a **coat length** — a weaker basis, and each
page says so in its "Why these two breeds" panel.

---

## The publication bar is per species

A pair publishes only when both breeds populate enough comparison dimensions.

```
dog   7 of 11 dimensions
cat   3 of 11
```

**This was a single number, and it was silently dog-calibrated.** Dogs can
populate all eleven — registry group, size band, height, weight, coat, five
trait bands, lifespan. Cats can populate at most three, because neither cat
registry publishes a trait scale, a height, or a lifespan.

The dog bar applied to cats produced **zero cat comparisons from 66 candidates**,
which looked like an absence of data and was a mis-set threshold. It is the same
species-asymmetry mistake the weight bands made, caught the same way: by adding
real data and noticing the result was implausible.

Three is a real bar for cats, not a rubber stamp: it requires **both** breeds to
carry a published weight, which only 16 of 55 do.

| | Candidates | Published |
|---|---|---|
| Dogs | 201 | 201 |
| Cats | 66 | 9 |

The cat figure is below this sprint's 20–50 target. That is the honest result of
the evidence rather than a reason to lower the bar.

---

## What a comparison may never do

No winner. No "better breed". No "safer", "smarter", "easier". No score. No
recommendation.

Every dimension renders both breeds' published values side by side and stops.
Deriving a verdict from two ordinal bands would manufacture a judgement out of
data that cannot carry one — see [ranking-policy.md](./ranking-policy.md).

An absent value renders as **"not recorded"** rather than being omitted, because
a missing row reads as "the same" and an absence is not a match.

### Enforcement, and the guard that flagged its own disclaimer

`tests/pet-intelligence-safety.test.ts` asserts that no generated difference
statement contains a verdict word, and that the renderer contains none either.

Building the second check reproduced a failure worth recording. The first
version matched a bare `better` — and failed on the page's own sentence
**"Neither is better."**, which is the most important line on it. Widening it to
a lookbehind still failed on "There is no winner" and "does not pick a winner",
where the negation sits several words away.

The detector now checks a **negation window** and is tested in both directions:
it fires on "The Poodle is better for most homes" and stays silent on all three
disclaimers. This is the same failure mode the child-safety guard was built to
avoid — a naive phrase list flags the honest sentence and pressures an author to
delete it.
