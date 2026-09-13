# Pet decision language policy

How breed pages are allowed to talk about suitability.

Last reviewed: 2026-09-13.

---

## The line

FaunaHub may help a reader **understand differences between breeds**.

FaunaHub may not claim **deterministic compatibility** between a breed and a
household.

The difference is not decoration. A reader deciding whether to bring an animal
into a home with a small child is making a safety decision, and a sentence that
sounds like a guarantee will be read as one.

---

## Use

- tends to · commonly · often · generally · usually
- widely described as · frequently described as
- may be better suited to
- individual dogs / cats vary
- socialisation and environment matter
- breeder and line variation may matter
- household circumstances differ
- spend time with a specific animal before deciding

## Avoid

- perfect for
- guaranteed good with children
- always friendly · never aggressive
- ideal for everyone
- a safe breed
- allergy-free · hypoallergenic (as a property of a breed)
- the best breed for X

---

## Four specific subjects

### Children

No breed is universally safe with children. Every mention of children must be
accompanied by individual variation, supervision, or both. The honest sentence
is *"no breed is universally safe with children"* — and the guard is written so
that this sentence **passes** while *"is always safe with children"* fails.

That is deliberate and was tested explicitly: a naive phrase list flags the
disclaimers rather than the claims, which pressures an author to delete the
safest sentence on the page. The suite asserts both directions — the detector
fires on four violating forms, and does *not* fire on three honest ones.

### Allergies

No breed is fully hypoallergenic. Allergens come from dander and saliva as well
as hair. A page may say a breed is *described as lower-shedding* and must, in
the same page, state that this is not an allergy guarantee.

The Sphynx is the clearest case: a hairless cat is not hypoallergenic, because
the allergens are in saliva and skin secretions rather than in hair. Its page
says so directly.

### Other pets

Introductions are individual and gradual. A breed page may describe a general
tendency (a strong chase drive, for instance) and must route the actual decision
to observation of the specific animals.

### First-time owners

A page may say a breed is *often suggested* for first-time owners, and should be
specific about what makes it demanding. It may not say a breed *is* suitable for
first-time owners as a fact.

---

## Enforcement

`tests/pet-intelligence-safety.test.ts`:

- no unhedged child-safety claim on any breed page
- any page mentioning children also states individual variation or supervision
- no page describes a breed as hypoallergenic without the negation before it
- any page raising allergies carries the correction
- every temperament section contains at least one hedge
- no absolute temperament language ("always friendly", "never aggressive",
  "every dog of this breed is…")

Every detector is negative-tested.
