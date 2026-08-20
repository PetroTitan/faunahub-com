# FaunaHub Search & Animal Finder — architecture

The search layer makes ~1,690 published pages reachable in seconds without adding a
dependency, a vendor, a database, or a byte of un-asked-for JavaScript to the pages
themselves.

This document is the reference for how it is built, what it deliberately does not do,
and what would have to change to go further.

---

## 1. The one rule

**Search may only describe pages that already exist.**

Every URL in the index is derived from one of exactly two sources:

1. a route directory on disk (`src/app/**/page.tsx`), or
2. the same registry the route's own `generateStaticParams` reads.

There is no hand-maintained URL list anywhere in the pipeline. Publish a profile, a
comparison or a guide and the next build indexes it; nothing else has to be updated.
The two halves of that promise are both enforced at build time:

- every indexed URL must be a route the site generates, and
- every route the site generates must be indexed (bar an explicit exclusion list).

A violation of either fails the build.

---

## 2. Pipeline

```
src/app/**/page.tsx ──┐
                      ├─→ scripts/generate-search-index.mjs ─→ public/search-index.json
src/lib/**/registries ┘         (npm prebuild, every build)              │
                                                                         │ fetched on
                                                                         │ first open
                                                                         ▼
                                       src/lib/search/engine.ts ←── load-index.ts
                                                  │
                                                  ▼
                                    src/components/search/SearchPanel.tsx
```

### Build time — `scripts/`

| File | Role |
|---|---|
| `generate-search-index.mjs` | CLI. Writes the index, or `--check`s it for staleness. Runs full validation either way and exits non-zero on any issue. |
| `lib/build-search-index.mjs` | The builder. Owns `ROUTE_SOURCES` (one entry per `generateStaticParams` in the app) and every validator. |
| `lib/harvest-page-metadata.mjs` | Reads the title, description and animal-profile classification each page already publishes, via the TypeScript compiler already present as a devDependency. |
| `lib/ts-resolve-hooks.mjs` | An ESM resolve hook so build scripts can import the app's own `.ts` registries — resolving the `@/` alias and extensionless relative imports that plain Node cannot. No bundler, no new package. |

`npm run build` triggers `prebuild`, so the committed index can never be older than the
code that describes it. `tests/search-index.test.ts` additionally shells out to
`--check`, so a stale committed index fails the test suite too.

### Runtime — `src/lib/search/`

| File | Role | Ships to the browser? |
|---|---|---|
| `types.ts` | The document model, wire format and display vocabulary. | yes (constants only) |
| `normalize.ts` | Folding, tokenizing, intent-word stripping, morphology, bounded edit distance. Pure. | lazy chunk |
| `engine.ts` | Tiered scoring, animal-phrase resolution, pair lookup, grouping. Pure. | lazy chunk |
| `load-index.ts` | Fetches and caches `search-index.json`, once per page. | lazy chunk |
| `discovery.ts` | The curated hub destinations for the empty and no-result states. | lazy chunk |
| `analytics.ts` | Consent-safe event emission. | small, in the header island |

### UI — `src/components/search/`, `src/app/search/`

`SearchTrigger` is the only search code on every page: a button, an open flag and the
shortcut listener. `SearchDialog` (portal, focus trap, scroll lock) and `SearchPanel`
(input, ranking, results, states) are loaded on demand. `SearchPanel` is shared with the
standalone `/search` page, so the overlay and the page cannot drift apart.

---

## 3. The document model

```ts
interface SearchDocument {
  id: string;              // `${type}:${url}` — derived at hydration, never transported
  type: SearchDocumentType;
  title: string;
  url: string;
  description?: string;
  aliases?: string[];
  keywords?: string[];
  scientificName?: string;
  animalSlugs?: string[];
  category?: string;
  group?: string;
  priority: number;
  searchableText: string;  // derived at hydration, never transported
}
```

Both `id` and `searchableText` are omitted from the wire and rebuilt on load. Deriving
`id` makes a document whose id disagrees with its URL structurally impossible rather than
merely detected, and it saves ~8 KB compressed.

### Provenance of every field

| Field | Where it comes from | Fabrication risk |
|---|---|---|
| `title` | Animals: the compare registry's display name. Everything else: the page's own `<title>` or its registry record. | none — never authored for search |
| `description` | The page's own meta description, trimmed to 110 chars. | none |
| `scientificName` | `SCIENTIFIC_NAMES`, itself extracted from the `scientificName` prop each profile renders. 533 of 644 animals. **Absence is meaningful** — 109 profiles are group-level pages where a binomial would be wrong. | none; never backfilled |
| `aliases` | Three real sources only: the profile's own `commonName` when it differs from the registry name (including the parenthetical form — "Colugo (Flying Lemur)" yields "Flying Lemur"); the IUCN common name for the same slug; and `FOOD_SAFETY_ARTICLES.searchAliases`, the editors' own curated list. | none; no synonym is invented |
| `keywords` | The profile's `tags` prop, its taxonomy groups, fauna continent/habitat tags, IUCN category, domestic status. | none |
| `category` / `group` | The encyclopedia category each profile declares, with the label decided by majority vote among the profiles filed under it. | none |
| `priority` | A static, editorially-assigned weight per document type and depth. | **not a popularity score** — see §7 |

---

## 4. Ranking

Deterministic and tiered. A document's tier is set by the strongest thing that matched
it; within-tier modifiers reorder siblings but can never promote a weak match past a
strong one.

| Tier | Score | Meaning |
|---|---|---|
| `comparison-pair` | 10,000 | The query named two animals *and nothing else*, and this is their published comparison |
| `exact-title` | 9,000 | Whole normalized query equals the title |
| `exact-alias` | 8,400 | Whole query equals a verified alias |
| `exact-scientific-name` | 7,800 | Whole query equals a declared scientific name |
| `title-prefix` | 7,000 | Title starts with the query |
| `title-tokens` | 6,400 | Every query token is a title token |
| `comparison-pair` (partial) | 6,000 | A pair match with query words left over |
| `description-phrase` | 5,800 | The whole query appears as a contiguous phrase in the description |
| `animal-subject` | 5,400 (+300 each, capped 6,000, −500 per unexplained word) | The document is *about* an animal the query named |
| `alias-tokens` | 4,800 | Every query token appears in an alias |
| `token-prefix` | 4,200 | Every query token prefixes a distinct title token |
| `keyword` | 3,000 | Every query token appears in keywords/category |
| `description` | 2,000 | Every query token appears in the description |
| `partial` | 1,500 + coverage×4,700 | ≥2 tokens and ≥60% of the query matched in the title or an alias |
| `fuzzy` | 1,000 − 120·distance − 40·length gap | Conservative typo tolerance, common names only |

Modifiers total between −60 and +250: static priority (0–150), a small per-type nudge
(0–40), title-coverage (0–60), and a length penalty (0–60). The smallest tier gap is
600, so modifiers cannot invert a tier — `tests/search-engine.test.ts` asserts this.

### Query handling

- **Normalization** — lowercase, accents folded, punctuation flattened, hyphens become
  spaces so "Blue-Ringed Octopus" and "blue ringed octopus" are the same query.
- **Intent words** — a small closed list (`difference`, `between`, `compare`, `versus`,
  `vs`, and a handful of function words) is stripped for *text matching*, so *"difference
  between crocodile and alligator"* becomes `crocodile alligator`. If stripping would
  empty the query, it is not stripped.
- **Animal names are resolved BEFORE that strip**, against the raw tokens. Several real
  animals contain an intent word — Crown-of-Thorns Starfish, Bird-of-Paradise,
  Cock-of-the-Rock — and resolving afterwards made them unmatchable: the crown-of-thorns
  degraded into plain "starfish", a *different* animal, and served that pair's comparison
  as the best match. Keeping `vs` in place also stops the greedy scanner reading
  "mole vs rat" as the single animal "mole rat".
- **Morphology** — number inflection produces *additional* candidate forms in both
  directions, never replacements. "wolves" also tries "wolf"; "dog" also tries "dogs", so
  a reader typing "dog" reaches "Best Dogs for Apartments". "octopus" is never damaged.
- **Animal phrases** — a greedy longest-match scan over a 988-name vocabulary covering
  every animal document, Red List species included. It also tries the space-collapsed
  form, so "sea horse" finds Seahorse, and a phrase with exactly one mistyped word, so
  "coral sanke" finds Coral Snake rather than answering a venomous-snake question with a
  reef invertebrate.

### Comparison resolution

Two resolved animals produce a canonical `sorted(a,b).join("--")` key. If that key is in
the pair index, its comparison is surfaced — in either order, and including the seven
legacy `/compare/*` pages. All 288 published pairs are swept in both directions by
`tests/search-engine.test.ts`.

The **top** tier is reserved for a query the pair fully accounts for. "dog food vs cat
food" names two animals but leaves "food" over twice, so the pair drops below a real
title match and the dog-food-versus-cat-food article FaunaHub actually wrote wins.

If the pair is **not** published, no URL is composed. `missingPair` is set — and the UI
says so — only when two conditions both hold:

1. **the whole query was read**, because a leftover token may mean the reader named a
   different animal ("coral snkae vs king cobra" resolved to coral + king-cobra and
   denied a Coral Snake vs King Cobra page that exists and was listed on the same
   screen); and
2. **the reader actually asked to compare** — an explicit `vs`, `versus`, `compare`,
   `difference` or `between`. Two names side by side are very often one animal:
   "sloth bear", "elephant seal", "tiger beetle", "golden lion tamarin". Announcing
   "No Sloth vs Bear comparison has been published" to someone who typed the name of a
   real bear invents an intention they never had.

Surfacing a pair that *does* exist needs no such evidence — that claims nothing.

### Typo tolerance

The distance metric is **Damerau-Levenshtein**: a transposition costs one edit, not two.
That is not a refinement. Under plain Levenshtein "corw" was one edit from *cow* and two
from *crow*, so a reader typing the bird was shown cattle and the bird was unreachable —
195 such cases across one-edit variants of the name vocabulary.

Three guards remain:

1. **Nothing below four characters.** At three characters almost every animal is one edit
   from another one — this is what stops "cat" reaching "bat", "rat" or "cow".
2. **The first character must match**, with one exception: a transposition of the first
   two characters, so "owlf" reaches "wolf". That exception is safe precisely because it
   is so specific — it needs both letters present and merely swapped, which a
   substitution can never satisfy, so "hare" still cannot reach "bare".
3. **Common names only.** Fuzzy matching sees titles and aliases, never descriptions and
   never scientific names. *Eudromia elegans* (the tinamou) is two edits from "elefant";
   without this guard a misspelt elephant returned a completely different bird.

It runs **only when the exact passes found nothing at all**. An earlier "fewer than five
strong hits" threshold let 30 correctly-spelled names pull in near-misses — "skunk"
returned skinks, "moose" returned a mouse. A sweep over every name in the vocabulary
asserts that none of them returns a fuzzy result.

When suggestions are all there is, they are presented as suggestions: a **"Did you mean"**
section headed *"No exact match found. These are the closest spellings on FaunaHub —
check the name before following one."* They are never interleaved with real results,
never promoted to "Best match", and the same caveat reaches the live region.

**Known limits, stated rather than hidden.** A first-character *substitution* is still
rejected, so "gamster" cannot reach "hamster" and "lownfish" cannot reach "clownfish";
relaxing it would let mole/vole and seal/teal substitute for each other, which is the
worse failure. Two-edit misspellings of six-letter names ("dolfin") find nothing.

### Whole questions, not just names

Every tier above `partial` demands that ALL query tokens match, and `animal-subject`
originally demanded only one. That asymmetry made it the sole survivor of a real
question: "my dog ate chocolate" returned the Dog hub and four dog comparisons while
"Dog Ate Chocolate — What to Do First", a page FaunaHub had written, was absent
entirely.

Two changes fix it, and they pull in opposite directions on purpose:

- `animal-subject` loses 500 points for every query word the animal match does not
  explain. One recognised word out of four is weak evidence and is now scored like it.
- `partial` scales with how much of the query the title covers, up to just below
  `title-tokens`. Three of four words in a title beats one recognised animal name; four
  of four still loses to a page that matches everything.

The result on real question shapes: "my dog ate chocolate" → the pet-safety page,
"dog age in human years" → the Dog Age Calculator, "cat vomiting" → the symptom guide,
"best dog breed for apartments" → that exact guide, "how long do dogs live" → the
lifespans hub.

---

## 5. Performance

Measured with Chromium against two real production builds — base `72af5a0` and this
branch — not from a build manifest.

### Cost on every route

| Metric | Before | After | Δ |
|---|---|---|---|
| JavaScript shipped on every route (gz) | 118,251 B | 119,772 B | **+1,521 B (+1.29 %)** |
| CSS shipped on every route (gz) | 8,979 B | 9,662 B | **+683 B (+7.61 %)** |
| **Total per route (gz)** | 127,230 B | 129,434 B | **+2,204 B (+1.73 %)** |
| Transferred JS, `/animals/wolf`, cold cache (raw) | 404,699 B | 409,161 B | +4,462 B (+1.10 %) |

The CSS row is part of the cost and is reported because it is: the new utility classes
are real bytes on every page. The trigger uses React's own `lazy` rather than
`next/dynamic`, which had been pulling ~8 KB of loader runtime onto all 851 routes to
defer a component a fraction of that size.

### Cost only when a reader opens search

| Asset | Size |
|---|---|
| Dialog + panel + engine chunks | 9,990 B gz |
| `public/search-index.json` | 722,863 B raw · 158,694 B gz · **126,325 B brotli** |
| `/search` route-specific JS | 9,434 B gz |

Nothing above is requested on a normal page load — verified in the browser: a cold load
of `/animals/wolf` issues no request for the index. It is fetched once per page and
cached at module scope, so opening and closing search twenty times still issues exactly
one request. The trigger warms both the chunk and the index on pointer-enter and focus,
starting the index download in parallel with the JavaScript rather than behind it.

**Click-to-first-result, throttled, cold:** 1,164 ms on Fast 3G, **5,172 ms on Slow 3G**.
The second figure is dominated by the index over a 400 kbps link and is the honest
ceiling of the single-payload design.

**Every link inside the panel sets `prefetch={false}`.** With Next's default prefetching,
the result list — rebuilt on each keystroke — speculatively fetched an RSC payload for
every result the reader scrolled past: measured at **43 requests and 2.8 MB across ten
ordinary queries**, more than twenty times the index itself. Every destination is a
prerendered static page, so navigation stays fast without it. Post-fix the same ten
queries issue **zero** prefetch requests.

Engine hydration is ~11 ms over 1,690 documents and a query is 1–5 ms, so ranking runs
comfortably on every keystroke. The input is capped at 120 characters before it reaches
the engine, since ranking runs synchronously during render.

### Budget, and where it goes next

`tests/search-index.test.ts` fails above 900 KB raw or 190 KB gzipped. Descriptions are
close to half the compressed payload and are indexed **in full** rather than at a display
length — truncating them to 110 characters made every word past the cut unsearchable, so
"mountain lion" could not reach the cougar's profile even though its own meta description
says exactly that.

At today's ~1,700 pages this is comfortable. **At 5,000–10,000 pages it is not**: the
index would reach roughly 370–740 KB brotli, and Slow 3G would become unusable. The
architecture is ready for that — the fix is to split the payload into a core index plus a
descriptions sidecar, a change local to `load-index.ts` — but the split is not built
today and should not be assumed.

**No custom cache headers.** The asset is served at a fixed URL with `max-age=0`, so it
is revalidated on each fresh page load. That guarantees a deploy which removes a page can
never leave a stale index pointing readers at a 404 — but it costs a conditional request
even when the body is already on disk: measured at 162 ms on Fast 3G and **408 ms on Slow
3G**, on a page where nothing needed downloading.

The better answer, and the recommended next step, is a **content-hashed filename**
(`search-index.<hash>.json`) served `immutable`, with the hash emitted into a generated
module the client imports. That is strictly better on both counts: repeat opens become
instant, and the hash changing with the content is a stronger staleness guarantee than
revalidation. It is not built here because it introduces a generated source module and
stale-artifact cleanup, and the correctness property was the one worth having first.

### Colour

The panel uses `--color-muted` (`#5E6B63`) for secondary text rather than the lighter
`--color-subtle` (`#8A958E`) the site uses for the same role elsewhere. Measured from the
rendered pixels, `#8A958E` is 3.10:1 on white and 2.91:1 on `#F7F8F3` — below the 4.5:1
WCAG AA floor. `#5E6B63` is 5.59:1 and 5.23:1. Every label, hint and count in the panel
is real information rather than decoration, so it is held to AA. A pixel-level audit
across all four panel states (initial, browse, results, empty) measures 42 text/background
pairs and reports zero failures.

---

## 6. SEO posture

- Existing pages remain the SEO landing pages. Search adds a discovery layer and removes
  nothing: hubs, breadcrumbs, related links, comparison relationships and taxonomy
  navigation are untouched, and no crawlable internal link was moved behind JavaScript.
- `/search` is `noindex, follow` with an explicit `googleBot` block. The block is
  mandatory: the root layout sets `robots.googleBot = { index: true, … }`, and Googlebot
  obeys the more specific directive — a page setting only the generic `index: false`
  would still be indexed.
- `/search` canonicalises to the bare `https://faunahub.com/search`, so every `?q=`
  variant consolidates onto one URL.
- **`/search` is not in `sitemap.ts`, and neither is any query-string URL.** A sitemap
  entry for a `noindex` page is a contradiction Search Console reports as an error.
  Two tests enforce this.
- The homepage `WebSite` JSON-LD deliberately still carries **no** `SearchAction`. The
  comment in `src/lib/schema.ts` has been updated to say why: the sitelinks searchbox
  works by sending readers to `/search?q=<their text>`, and the site-wide tracker reports
  `window.location.href`. The site emits **zero** internal query-string URLs.
- No search result is server-rendered into any page's HTML, so search cannot create
  indexable near-duplicate content.

---

## 7. Analytics and privacy

Search emits four events — `search_open`, `search_query`, `search_result_click`,
`search_no_results` — through `trackSearchEvent`, which mirrors the site's existing
`trackEcosystemEvent`: it dispatches a DOM `CustomEvent` and pushes to `window.dataLayer`
**only if one already exists**. It opens no connection, adds no vendor, and writes no
storage — verified in the browser: typing four queries and clicking a result leaves
`localStorage`, `sessionStorage` and `document.cookie` all empty and issues no request.

### The raw query never leaves the browser — including through the URL

The payload carries `queryLength`, not the query. FaunaHub's privacy policy lists what it
collects, that list is exhaustive, it permits "anonymous interaction events such as link
clicks or page-level actions", and it contains **no user-supplied free-text category**.
There is no consent banner.

**`/search` therefore takes no `?q=` parameter, and the homepage carries no
`SearchAction`.** An earlier version had both. The WebmasterID tracker mounted site-wide
in the root layout patches `history.pushState` and `history.replaceState` and sends
`window.location.href` with every resulting `page_view`, so mirroring the query into the
address bar shipped the reader's typed text to a third-party endpoint — once per
keystroke while typing, and once more on any shared link. A hash fragment is not a fix
(`href` includes it) and neither is hashing the query (a hash is still a stable
identifier for text that may contain anything).

The cost is real and is accepted: **a FaunaHub search cannot be deep-linked or shared.**
Three mechanical guards keep it that way — no search module may touch `history`,
`location` or `useSearchParams`; `SearchAnalyticsProps` may not declare a query field and
no call site may pass one; and `schema.ts` may not declare a `SearchAction`. Each guard
was verified to fail against a deliberately injected violation.

### What the event stream can and cannot answer

| Question | Signal | Available? |
|---|---|---|
| Which comparison pairs are requested but unpublished? | `missingPair` — a canonical key of two slugs from FaunaHub's own closed animal registry, never free text | **yes**, and it is the most valuable signal here |
| How often does search fail? | `search_no_results` count vs `search_query` count | yes |
| Which results do readers choose? | `resultUrl`, `resultType`, `position` | yes |
| Which content types absorb demand? | `resultType` distribution | yes |
| Which animals are searched most? | requires query text | **no** |
| Which queries produce no result? | requires query text | **no** |

Result links also carry `data-wmid-cta="search-result"`, the WebmasterID tracker's
declarative click hook. The value is a static literal, so it can never carry query text;
if the tracker is absent the attribute is inert. It is unverified in production.

**To unlock query-text analysis**, two things must land first: a consent mechanism gating
the tracker, and an amendment to the privacy policy's collection list. Both are product
decisions, not engineering ones. `/search?q=` and the `SearchAction` can return at the
same time. Until then nothing derived from reader queries may be rendered on a public
page either — that would turn readers' requests into published content.

Events are debounced by 600 ms and queries under two characters are never recorded, so a
settled query produces one event rather than one per keystroke.

---

## 8. Animal Finder — what shipped and what did not

A first version ships inside the overlay: browse chips over the encyclopedia category,
filtering to real profiles, with each chip also linking to its real hub page.

It uses **one** axis, because one axis is what the data honestly supports.

| Axis | Source | Coverage of 642 profiles | Verdict |
|---|---|---|---|
| **Encyclopedia category** | the `parentCategoryHref` prop each profile declares, with a breadcrumb-JSON-LD fallback for the 27 bespoke pages | **641 / 642 (99.8 %)** | **shipped** — 6 values, each a real hub |
| Taxonomy group | `taxonomy/animal-groups.ts` → `existingAnimalSlugs` | 511 / 642 (79.6 %) | indexed as keywords; available as a finer future facet |
| Scientific name | `SCIENTIFIC_NAMES` | 533 / 642 (83 %) | a search **field**, never a facet — absence is meaningful |
| Continent | `fauna/featured-animals.ts` → `continentSlugs` | 283 / 642 (44 %) | keywords only; the registry deliberately excludes purely marine species, so a facet would look broken on 150 profiles |
| Habitat tag | same module → `habitatTags` | 283 / 642 (44 %) | keywords only, same gap |
| Wild vs domestic | `animals/classification.ts` | 23 documented domestic; the other 619 default to "wild" without ever having been audited | keywords only — a filter would imply an audit that did not happen |
| Ocean depth zone | `fauna/ocean.ts` | 43 / 642 (6.7 %) | too thin |
| Conservation status | `red-list/**` | 15–55 / 642 joinable | **missing for `/animals/*`.** The prose alternative is unusable: four competing `quickFacts` labels, 113 distinct values, and 42 pages reading "Verify before publication". It *is* a genuine enum on the 348 Red List pages, where it is indexed. |
| Class (taxon) | `quickFacts` label "Class" | 371 / 642, **79 distinct strings** | **missing.** Use taxonomy groups instead — same information, already normalised |
| Diet | `quickFacts` label "Diet" | 561 occurrences, **508 distinct values** | **missing.** Effectively free text. Bucketing into carnivore/herbivore/omnivore would be inferring a classification the editors never made |
| Habitat (prose) | `quickFacts` label "Habitat" | 291 occurrences, 288 distinct | **missing.** Pure prose |

**To go further**, the missing axes need a new normalised registry *derived from and
validated against what the pages already say* — an editorial project, not an extraction.
The extension points are in place: `SearchDocument.group` and `SearchIndexPayload.facets`
are the only two places a second axis has to appear.

---

## 9. What is deliberately excluded

| Excluded | Why |
|---|---|
| `src/lib/animal-compare/backlog.ts` | 165 candidate comparisons. Only the rows marked `published` describe real pages. |
| `src/lib/animal-behavior-backlog.ts` | 1,000 candidate behavior pages, 19 published. |
| `src/lib/taxonomy/expansion-roadmap.ts`, `missing-groups.ts` | Planning data; generates no route. |
| `/search` itself | It is `noindex` and would return itself as a result. |

The backlogs are imported in exactly one place — `assertNoBacklogLeakage`, which exists
to check *against* them. `tests/search-index.test.ts` asserts that no runtime search
module imports either one, and that no client search module imports the heavyweight
content registries (`animal-compare/records` is ~3.8 MB; `images/animal-images.ts` is
~1.2 MB).

---

## 10. Tests

`tests/search-index.test.ts` (**32**) — wire version, uniqueness, title presence, URL
hygiene, every indexed URL is a real route, every real route is indexed, a cross-check
against `.next/prerender-manifest.json` (the one list independent of the generator's own
route model), no backlog leak, no forbidden import, no heavyweight registry in client
code, **no query text in a URL or an analytics payload**, **no `SearchAction`**,
pair-key canonicality, legacy `/compare` titles come from the registry, scientific names
match their profiles, no alias duplicates its title, `animalSlugs` are slugs, facet
integrity and honest coverage counts, discovery destinations resolve, no popularity
claims, `/search` noindex + absent from the sitemap, no query-string sitemap URL, payload
budget, and the drift gate.

`tests/search-engine.test.ts` (**53**) — normalization, tier invariants, exact/alias/
scientific-name/prefix/plural matching, **all 681 names resolving to themselves**, **all
288 published pairs in both orders**, natural phrasing, spaced compound names, one-typo
multi-word names, partial-pair demotion, unpublished-pair honesty, the
two-names-is-not-a-comparison-request rule, ingredient aliases, description-carried
alternative names, natural-language queries reaching real pages, transposition typos,
no fuzzy pollution on any correctly-spelled name, fuzzy always below exact, empty and
punctuation-only input, hostile input (XSS, SQL, traversal, 5,000-character strings,
full-width characters, emoji), result caps, grouping order, mixed-type merged sections,
best-match discipline, and a per-query timing assertion.

The existing 140 tests are unchanged and still pass — **225 in total**.

Every regression test in both files exists because a reviewer reproduced the defect it
guards. Several of the guards were themselves verified by injecting the violation and
confirming the test fails.

---

## 11. Adding content later

Nothing to do. A new profile, comparison, guide, tool or hub is indexed by the next
build.

**Adding a new dynamic route template** is the one case that needs a line of code: add an
entry to `ROUTE_SOURCES` in `scripts/lib/build-search-index.mjs` naming the registry its
`generateStaticParams` reads and the URL it builds. If you forget,
`assertRouteSourcesCoverTemplates` fails the build — the template cannot ship
unsearchable.
