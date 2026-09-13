# Ranking policy

Which breed rankings FaunaHub may publish, which need an explicit methodology,
and which are permanently prohibited.

Last reviewed: 2026-09-13. **No ranking page exists yet.** This policy governs
the ones a future sprint may build.

---

## The rule behind all three categories

A ranking is a claim that an ordering exists and is meaningful. That requires a
**metric** — a defined, reproducible thing being measured. Where there is no
metric, a ranking is an opinion wearing a number.

And whatever the metric, a ranking must never imply:

> ranking = individual outcome

The #1 breed on any list is not the right animal for a reader, and the last one
is not a bad animal.

---

## A. Objective / high-confidence

Allowed where the metric is a published measurement and the ordering is a fact
about those measurements.

- tallest breeds / shortest breeds
- heaviest breeds / lightest breeds
- size categories (counts per band)
- coat length distributions
- counts of breeds per recognised registry group

**Conditions.** Any such page must: name the registry the measurements come
from; state that it ranks *published standards*, not individual animals; render
`statedAs` alongside converted figures; and handle half-open bounds honestly — a
breed whose standard says only "under 28 pounds" has no lower bound and cannot
be placed in a "lightest" ordering as though it did.

**Coverage condition.** A ranking may only span a population where the
underlying measurement is recorded for effectively all of it. With cats having
no published numeric size at all, **no cat size ranking is possible today.**

---

## B. Structured qualitative

Possible, with an explicit and linked methodology.

- higher / lower exercise needs
- higher / lower grooming needs
- higher / lower shedding
- higher / lower trainability
- higher / lower vocality

**These are tiers, not positions.** FaunaHub stores a three-level band, so the
only honest presentation is *groups* — "breeds in the higher band for grooming" —
never `#1–#100`. There is no data that could order two breeds within a band, and
inventing one by tie-breaking on another axis would manufacture precision.

Every such page must link [trait-methodology.md](./trait-methodology.md) and
restate what the trait does not mean (trainability ≠ intelligence; shedding ≠
allergy).

---

## C. Prohibited

These must not be published, in any form, under any heading.

| Prohibited | Why |
|---|---|
| Smartest dog breeds (as general intelligence) | No breed-level measure of intelligence exists. Trainability is not intelligence. |
| Dumbest breeds | Same, plus it is a slur applied to animals. |
| Strongest breeds | No defined measure. "Strength" is undefined across body plans. |
| Bite-force leaderboards | The circulating figures are not standardised, frequently traced to small or non-comparable studies, and are used to argue breeds are dangerous. |
| Most dangerous / most aggressive breeds | Aggression is individual and situational. Breed-level "danger" rankings drive breed-specific legislation and shelter euthanasia. |
| Best family dogs (as universal truth) | Suitability depends on the household, not the breed. |
| Best dogs for children (as certainty) | A safety promise about an animal FaunaHub has never met. |
| Healthiest breeds | Requires health-risk scoring, which FaunaHub does not do — see [veterinary-boundary.md](./veterinary-boundary.md). |
| Longest-lived breed rankings | Only possible if the dataset and methodology genuinely support it. Published life-expectancy *ranges* are breed-level editorial figures, not survival data, and ordering breeds by them implies a precision the ranges do not have. |
| Anything sponsored or pay-to-rank | See [commercial-policy.md](./commercial-policy.md). |

Note that "best family dogs" appears as a **decision guide** at
`/dogs/breeds/best-family-dogs`. That page is permitted because it is framed as
*breeds often considered for households with children*, with cautions and
explicit individual variation — not as a ranked leaderboard of family safety.
The distinction is the framing, and it is load-bearing.

---

## Enforcement

`tests/pet-intelligence-safety.test.ts` fails the build on the phrases that
express category C on any breed page — "the smartest breed", "the best dog for
everyone", "most dangerous breed", "the healthiest breed", "#1 breed" — and on
any numeric rating (`8.7/10`, `4 out of 5`, stars).

Each detector is **negative-tested**: the suite asserts it fires on a known-bad
string, so a guard can never pass merely because its pattern stopped matching
anything.
