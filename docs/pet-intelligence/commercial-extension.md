# Commercial extension design

The shape a future commercial layer must take. Design only — nothing here is
implemented.

Last reviewed: 2026-09-13. Read [commercial-policy.md](./commercial-policy.md)
first; this document assumes its rules.

---

## The extension point

```ts
export interface BreedCommercialContext {
  breedId: string;
  productCategories?: string[];
  serviceCategories?: string[];
  insuranceRelevant?: boolean;
}
```

Keyed by `breedId`. Not a field on `Breed`. Stored in
`src/lib/pet-intelligence/commercial.ts`, which currently exports an empty array.

Categories are drawn from the agreed vocabulary in `COMMERCIAL_CATEGORIES` and
`SERVICE_CATEGORIES`. They are **coarse nouns** — `grooming-tools`,
`scratching-furniture` — never products, brands, merchants, or prices. A test
asserts every category is plain lowercase with no brand marks; the moment a brand
name appears in that file, editorial separation is gone.

---

## What a commercial sprint must add, and where

| Concern | Where it belongs |
|---|---|
| Merchant / offer records | A **new module**, not `pet-intelligence`. It may import the registry; the registry must remain unable to import it. |
| Category → breed relevance | `BREED_COMMERCIAL_CONTEXT`. Editorial judgement, reviewable, no merchant input. |
| Rendering | A distinct component with a visible label. Never inside `BreedAttributes`, which is the sourced-facts surface. |
| Disclosure | Link `/affiliate-disclosure` on any page carrying commercial content. |

### Placement rule

Commercial blocks may sit **after** the editorial and sourced sections of a breed
page. They may not be interleaved with registry facts, and they may not appear
inside the Finder's result list, where they would read as results.

---

## Invariants that must survive the first commercial sprint

1. `Breed` gains no commercial field.
2. `src/lib/pet-intelligence/**` (except `commercial.ts`) imports nothing
   commercial.
3. Finder ordering stays alphabetical by name.
4. No `Product` / `Review` / `AggregateRating` / `Offer` schema without genuine
   commercial content, and no fabricated ratings ever.
5. `COMMERCE_ENABLED` flips deliberately and visibly, in one place.

All five are enforced by `tests/pet-intelligence-commercial.test.ts` today, while
they are trivially true. That is the point: they were written before there was
any pressure on them.

---

## Demand intelligence (design only)

Events a future implementation may record, via the existing WebmasterID tracker
rather than any new analytics:

```
breed_profile_view
breed_compare_open
breed_finder_open
breed_finder_filter      (facet id + value; never free text)
breed_result_click
commercial_category_click
```

**Constraints.** No free-text search input may be transmitted — the Finder's
text box value must never leave the browser, consistent with how Global Search
already behaves on this site. No merchant tracking. No cross-site identifiers.
Nothing is implemented in this sprint.
