# Commercial policy

What FaunaHub may eventually monetise on Pet Intelligence surfaces, and the
rules that hold whatever it builds.

Last reviewed: 2026-09-13. **Nothing is monetised today.** `COMMERCE_ENABLED`
is `false`, `BREED_COMMERCIAL_CONTEXT` is empty, and no breed page carries an
affiliate link.

---

## The one rule

> **Editorial breed data cannot change because an advertiser pays.**

Everything below follows from it.

A future sponsored or affiliate module must not:

- alter any breed attribute
- alter a comparison outcome
- alter Finder ordering or filtering
- create a recommendation FaunaHub would not otherwise make
- produce pay-to-rank results in any surface

Commercial blocks must be visually and structurally distinguishable from
editorial content, and labelled.

---

## Plausible future categories

**Dogs** — food · treats · grooming tools · harnesses and collars · leads ·
crates and carriers · beds · toys · travel · training equipment

**Cats** — food · litter and trays · carriers · beds · scratching furniture ·
toys · grooming tools · travel

**Services** — grooming · training · boarding · day-care · pet-sitting · walking

### Categories deliberately absent

There is no `medication`, `supplements`, `veterinarians`, `breeders`, or
`pharmacy` category, and a test asserts none appears. FaunaHub does not rank
health products, clinicians, or animals for sale:

- ranking **veterinarians** or **breeders** would make FaunaHub an arbiter of
  clinical and welfare quality it cannot assess
- monetising **medication or supplements** would cross the
  [veterinary boundary](./veterinary-boundary.md) directly
- listing **animals for sale** is not something a breed encyclopedia should be
  adjacent to

Insurance is listed as a *relevance flag* rather than a product category, and any
future insurance surface must be comparison-style and disclosed, never a
single-partner recommendation.

---

## Structural separation

```
BREEDS ─────────────────► breed facts, sourced, registry-backed
   ▲
   │ breedId (one direction only)
   │
BREED_COMMERCIAL_CONTEXT ──► categories, services, insurance relevance
```

Commercial context is a **separate record keyed by breed id**, never a field on
`Breed`. The arrow points one way: `src/lib/pet-intelligence/commercial.ts` may
import the registry; **the registry may never import it**.

A test walks every file under `src/lib/pet-intelligence/` and fails if any of
them — other than `commercial.ts` itself — imports the commercial module. So
there is no code path by which a merchant record can reach a breed fact.

Further enforced:

- no breed record may carry a field matching
  `sponsor|affiliate|merchant|price|product|partner|promoted|advertis`
- no breed-facing surface may contain `rel="sponsored"`, an affiliate tag, a
  `utm_` parameter, or a commission link
- the Finder's result ordering must be `localeCompare` on the name, with no
  `score`, `weight`, `priority`, `rank` or `sponsor` term anywhere in the sort

That last one matters most: **ordering is the first surface a sponsor would try
to buy.**

---

## Schema

No `Product`, `Review`, `AggregateRating` or `Offer` structured data on any breed
page while no genuine commercial content exists. Fake ratings are not an option
at any point. A test asserts their absence across every breed surface.

---

## Disclosure

FaunaHub already carries `/affiliate-disclosure`. Any commercial breed surface
must link it, label the commercial block inline, and keep the label visible
without interaction.
