# Animal Finder — architecture

`/animal-finder` turns FaunaHub's 642 animal profiles into a browsable collection:
structured filters, name search, and one-click slices — without adding a dependency, a
vendor, a database, or a single indexable filter URL.

This document is the reference for how it is built, what it deliberately does not do,
and what would have to change to go further. Its companion is
[`search-architecture.md`](./search-architecture.md); the two layers are deliberately
different tools and §2 explains why.

---

## 1. The one rule

**A filter is a promise that the collection can be sliced that way.**

Search's rule is that it may only describe pages that exist. The Finder inherits that —
every record is created because a `src/app/animals/<slug>/page.tsx` is on disk — and adds
a second one, because a browse control makes a stronger claim than a search result does.

A search result that misses a page is a miss. A filter chip reading **Birds 134** that
opens onto 96 animals is a lie about the collection, and the reader has no way to see it.
So an axis becomes a filter only when the data behind it genuinely covers the population,
and every axis that does not is **published as a known gap on the page itself** rather
than quietly omitted.

Both halves are enforced at build time, and a violation fails the build:

- every record must be a route the site generates, and every route the site generates
  under `/animals` must have a record;
- every facet must clear the coverage gate;
- every facet value's count must equal the number of records that actually hold it.

---

## 2. Why this is not the search index

The Finder ships its own payload. That is a deliberate answer to an obvious objection —
"there is already an index of these animals" — and the numbers are the argument.

| | documents | raw | gzip | brotli |
|---|---|---|---|---|
| `search-index.json` | 1,691 | 723,152 B | 158,757 B | 126,433 B |
| `animal-finder-index.json` | 642 | 327,950 B | **70,411 B** | **56,676 B** |

Reusing the search index would make the Finder download **2.3× more** compressed bytes,
of which three quarters describe comparisons, guides, behaviour pages and hub routes it
cannot filter — plus full-length descriptions it does not match against. The duplicated
bytes exist twice **on disk**, where they are free; over the wire a reader pays for one.

The two layers also answer different questions, and each is bad at the other's:

| | Global search | Animal Finder |
|---|---|---|
| Corpus | all 1,690 published pages | the 642 animal profiles |
| Input | free text, questions, two-animal comparisons | names plus structured filters |
| Matching | 14 scoring tiers, morphology, Damerau-Levenshtein typo tolerance | name / scientific name / tag, four tiers |
| Answers | "what does FaunaHub say about X?" | "which animals are in this part of the collection?" |

They cross-link rather than compete: the search overlay offers the Finder in its initial
and no-results states, and the Finder's input hint sends prose queries to `/search`.

---

## 3. Pipeline

```
src/app/animals/*/page.tsx ──┐
                             ├─→ scripts/generate-finder-index.mjs ─→ public/animal-finder-index.json
src/lib/**/registries ───────┘        (npm prebuild, every build)               │
                                                                                │ fetched
                                                                                │ on mount
                                                                                ▼
                                        src/lib/finder/filter.ts ←── load-index.ts
                                                    │
                                                    ▼
                                     src/components/finder/AnimalFinder.tsx
```

### Build time

| File | Role |
|---|---|
| `scripts/generate-finder-index.mjs` | CLI. Writes the index, `--check`s it for staleness, or prints the `--audit` coverage table. Runs full validation in every mode and exits non-zero on any issue. |
| `scripts/lib/build-finder-index.mjs` | The builder. Owns the axis measurements, the coverage gate and every validator. |
| `scripts/lib/harvest-page-metadata.mjs` | Shared with the search index. This sprint added `quickFacts` extraction so the diet/class/habitat/activity axes are *measured* rather than assumed thin. |

`npm run build` runs `prebuild`, which regenerates both indexes, so a committed index can
never be older than the code it describes. `tests/animal-finder.test.ts` also shells out
to `--check`, so a stale committed index fails the test suite.

### Runtime — `src/lib/finder/`

| File | Role | Ships to the browser? |
|---|---|---|
| `types.ts` | Document model, wire format, thresholds, display vocabulary. | yes (constants only) |
| `filter.ts` | Selection matching, tiered name scoring, per-facet counts. Pure. | `/animal-finder` only |
| `presets.ts` | The browse slices and the related-hub destinations. | `/animal-finder` only |
| `load-index.ts` | Fetches and caches the index, once per page. | `/animal-finder` only |
| `analytics.ts` | Consent-safe event emission. | `/animal-finder` only |

`filter.ts` imports `fold` and `tokenize` from `@/lib/search/normalize` rather than
growing a second normalizer. A reader who types "blue-ringed octopus" must fold the same
way in both tools, and two implementations would eventually disagree.

---

## 4. The facet coverage audit

Measured by the build itself over all 642 profiles — `npm run finder:audit` reprints it.
The table on `/animal-finder` is rendered from the same computation, so the page and the
tool cannot disagree.

| Axis | Source | Coverage | Distinct values | Verdict |
|---|---|---|---|---|
| **Animal group** | the `parentCategoryHref` prop each profile declares, with breadcrumb JSON-LD as the fallback for the 27 bespoke pages | **641 / 642 (99.8 %)** | 6 | **shipped** — each value is a real hub |
| **Taxonomic group** | `taxonomy/animal-groups.ts`, class/phylum/informal ranks | **497 / 642 (77.4 %)** | 14 | **shipped** with a partial-data note |
| **FaunaHub coverage** | compare, image, Red List and domestication registries | **642 / 642 (100 %)** | 3 flags | **shipped** — complete by construction |
| Scientific name | the profile's own prop | 533 / 642 (83 %) | 531 | a search **field**, never a facet — absence is meaningful |
| Continent | `fauna/featured-animals.ts` | 283 / 642 (44.1 %) | 7 | **excluded** — below the 50 % floor |
| Habitat tag | same registry | 283 / 642 (44.1 %) | 12 | **excluded** — same gap |
| Ocean depth zone | `fauna/ocean.ts` | 43 / 642 (6.7 %) | 5 | **excluded** — too thin |
| Diet | `quickFacts` label "Diet" | 561 / 642 (87.4 %) | **508** | **excluded** — free text wearing an enum's name |
| Class (taxon) | `quickFacts` label "Class" | 371 / 642 (57.8 %) | **79** | **excluded** — the taxonomy registry has it normalised |
| Habitat (written) | `quickFacts` label "Habitat" | 291 / 642 (45.3 %) | **288** | **excluded** — prose |
| Activity pattern | `quickFacts` label "Activity" | 59 / 642 (9.2 %) | 43 | **excluded** — thin *and* prose |
| Conservation status | Red List join (see §5) | 55 / 642 (8.6 %) | 1 | **excluded** for `/animals` |
| Domestic or wild | `animals/classification.ts` | 23 / 642 (3.6 %) | 1 | **excluded** as a binary |

### The gate

```
covered / total ≥ 0.50   AND   0 < distinct values ≤ 40
```

Both halves earn their place. **Diet clears the coverage bar comfortably and is still
unusable** — 561 profiles carry 508 different diet sentences, and bucketing them into
carnivore / herbivore / omnivore would be assigning a classification FaunaHub's editors
never made. Conversely `continent` is a clean 7-value enum that simply is not recorded
often enough.

### Three axes that deserve their own note

**Continent and habitat (44.1 %).** The gap is not an oversight: `fauna/featured-animals.ts`
says in its own header that it covers land, freshwater and coastal fauna and excludes
purely marine species. So the missing 359 are not "unrecorded", they are *out of that
registry's scope* — and a continent filter would silently drop them rather than report
them. This is the most valuable single piece of future structured-data work: bringing
marine species into a range registry would take the axis past 70 % in one editorial pass.

**Conservation status.** FaunaHub *does* have a genuine IUCN enum, on 363 Red List
records with their own pages under `/endangered-animals`. Only 55 of them correspond to
an encyclopedia profile. Mixing the two populations into one Finder would put two
incompatible shelf systems on one axis — the encyclopedia files whales under Marine
Animals, the Red List files them under mammals — so the Finder covers the encyclopedia
and links out to the conservation hub, which indexes its own collection properly.

**Domestic or wild.** `animals/classification.ts` is a reviewed list of 23 domesticated
animals. Everything absent from it defaults to `wild` **without ever having been
individually checked**, so a wild/domestic toggle would imply an audit that did not
happen. The documented half ships as a coverage refinement, where the claim is only
"FaunaHub records this animal as domesticated" — which is true.

---

## 5. What ships, and why those three

### Animal group — 6 values, 99.8 %

The encyclopedia shelf each profile already declares and links to in its own breadcrumb.
It is labelled as a shelf rather than a taxon, in the panel and in the FAQ, because it is
one: whales and seals sit under Marine Animals, sharks under Fish. Each value's chip has
the real hub behind it, so browsing in the Finder and browsing the site lead to the same
crawlable place.

### Taxonomic group — 14 values, 77.4 %

Finer than the shelves, and genuinely different information: amphibians separate from
reptiles (34), molluscs from insects (23), crustaceans (14), cnidarians (9), arachnids
(5). Above the 70 % "strong" bar, but not complete, so the panel says exactly that:
*"Recorded for 497 of 642 profiles. Filtering on this axis hides the 145 animals FaunaHub
has not filed here yet."*

### What FaunaHub has — 3 flags, complete

The honest answer to thin habitat and diet data is not to fake those axes; it is to
expose the ones where the information is perfect. These are facts about **the site**, not
about the animal:

| Flag | Source | Count |
|---|---|---|
| Has a comparison page | `COMPARISONS` + `EXTERNAL_COMPARISONS` | 290 |
| Has a conservation record | the Red List join below | 55 |
| Documented domestic animal | `animals/classification.ts`, rows whose `status` is `domestic` | 23 |

Two of those three are joins, and both were wrong in the first cut of this branch in the
same way — they described a *field being populated* rather than the thing the label says:

- **Comparisons** counted only `COMPARISONS`, the registry behind `/animal-compare/<slug>`.
  The seven hand-written pages at `/compare/<slug>` are real routes, listed on the Compare
  Center and indexed by search, so `lion` and `tiger` were reported as having no
  comparison while `/compare/lion-vs-tiger` is published — making the preset blurb
  "every animal that appears in at least one side-by-side page" false for the site's
  best-known pair. Both registries now count: 287 → **290**.
- **Conservation** used `existingAnimalSlug`, the registry's optional cross-link field,
  which is set on 15 records. Forty more profiles — `polar-bear`, `snow-leopard`,
  `axolotl`, `kakapo`, `great-white-shark`, `gharial`, `dugong`, `california-condor` and
  the rest — have a published page at `/endangered-animals/species/<slug>` under a slug
  identical to their profile's, and were reported as having no conservation record. The
  flag now takes both: the explicit cross-link, and a join on FaunaHub's own slug
  namespace. 15 → **55**.

  The slug join is a derivation, so it has to prove itself: `assertConservationJoin` folds
  both names and fails the build unless one contains the other, which accepts the two real
  variants (the Red List spells Kakapo *Kākāpō*, and names the Coelacanth record *West
  Indian Ocean Coelacanth*) and would catch a genuine slug collision. Editorial
  cross-links are exempt from that check — the registry deliberately points the *Green
  Turtle* record at the group-level *Sea Turtle* profile, and overruling that would be
  second-guessing the editors rather than validating a derivation.

"Has a licensed photo" is computed the same way and is **not** offered as a control,
because all 642 profiles carry one — a value that matches everything cannot narrow
anything. The builder drops any value whose count equals the total, so if a future
profile ships without a photo the control reappears on its own.

This facet uses `mode: "all"`: ticking two boxes means "animals that have both", which is
what a reader ticking two coverage boxes means. The other two use `mode: "any"`.

---

## 6. Browse presets

Eleven one-click slices, each of which is a real filter selection over facets that
shipped plus a real hub link. `tests/animal-finder.test.ts` asserts every preset resolves
to at least one animal and that every `href` is a page that exists.

Three requested presets were **not** built:

- **"Arctic and polar animals"** and **"Rainforest animals"** would have to come from the
  habitat tags, which cover 44 % of profiles. A preset titled "Polar animals" that
  silently omits half the polar animals FaunaHub has profiled is worse than no preset,
  because the reader cannot see the omission.
- **"Ocean animals"** is offered as **"Marine animals"** and described as the
  encyclopedia's own shelf, because it is not a claim about which animals live in the
  sea — sharks are filed under Fish and sea snakes under Reptiles.

There is no "Popular" or "Trending" preset. FaunaHub has no first-party traffic data
wired into the site, so any such label would describe something nobody measured. The
heading is *"Browse a slice"*, and a test fails the build on the words *popular*,
*trending*, *most searched*, *most viewed* and *top pick* anywhere in the facet, axis or
preset copy.

---

## 6a. Name matching

Four tiers, widest gap 1,000, so a tie-break can never invert one:

| Tier | Score | Meaning |
|---|---|---|
| `exact-name` | 5,000 | the whole query equals the name |
| `name-prefix` | 4,000 − min(len, 40) | the name starts with the query; **shorter names win**, so "rat" reaches Rat before Rattlesnake |
| `name-tokens` | 3,000 − min(len, 40) | every query token prefixes a distinct name token |
| `scientific-name` | 2,000 | the query appears in the declared binomial |
| `tag` | 1,000 | every query token is a whole token of one of the profile's own tags |

Filters are applied **before** ranking, so the tiers order only what the reader has
already chosen to look at. With no query, results are alphabetical — any other default
order would be an editorial claim the data does not support.

A query containing a space is also tried space-collapsed, so **"sea horse" reaches
Seahorse** and "blue ringed octopus" the Blue-Ringed Octopus, matching what global search
already does. The collapse is applied *only* when the reader typed a space: collapsing
single words too would make "seal" a prefix of "sealion" and surface Sea Lion off a string
coincidence rather than off anything the reader meant. A test asserts both halves.

Two behaviours that look like bugs and are not:

- **`shark` + Animal group "Fish" returns nothing.** Sharks are filed under *Marine
  Animals* by their own profile, while the taxonomy registry files them under *fish*. The
  shelf and the taxon genuinely disagree, which is exactly why the group facet is labelled
  as a shelf and the taxon facet exists as a second axis — `shark` + Taxonomic group
  "Fish" finds them.
- **`Panthera leo` returns nothing.** `/animals/lion` declares no `scientificName` prop.
  Rather than backfilling the binomial everyone knows, the Finder omits it, because
  inventing a value the page does not publish is the one thing this layer may not do.
  Adding it is a content fix on that profile, after which the Finder picks it up on the
  next build with no code change. (`Vulpes` does reach Arctic Fox and Fennec Fox, so
  scientific-name matching itself is working.)

---

## 7. SEO posture

- **`/animal-finder` is one indexable page.** Filters live in component state and are
  never written to the URL, so there is no `?group=birds` and no `/animal-finder/ocean/mammals`
  to crawl. `sitemap.ts` gains **exactly one** entry: 1,687 → 1,688 URLs. A test asserts
  no route exists under `/animal-finder/`, and a second asserts the sitemap gains one URL
  and no query string.
- **The existing hubs remain the landing pages.** Every group, preset and related index
  on the page is a crawlable link *out* to a page that already ranks. Nothing was moved
  behind JavaScript to build this.
- **The page has real content without JavaScript.** The hero, the group index with live
  counts, the ready-made slices, the methodology, the full coverage table and five FAQs
  are all server-rendered — 92 internal links and a `BreadcrumbList` + `FAQPage` JSON-LD
  block — plus a `<noscript>` pointing at the group index.
- **`robots.txt` is unchanged apart from a comment.** Blocking
  `/animal-finder-index.json` alongside `/search-index.json` looked consistent and was
  briefly on this branch, but the two cases are not equivalent: `/search` is `noindex` and
  fetches its index only after a reader opens the overlay, so a blocked fetch is never
  rendered. `/animal-finder` **is** indexable and fetches its index on mount, so blocking
  it would send Google's renderer down `LoadFailed` and index the words *"The animal index
  did not load"* on a page that otherwise renders 48 animals correctly. Saving one crawl
  request is not worth publishing an error state.
- **No search result or filtered list is server-rendered**, so the Finder cannot create
  indexable near-duplicate content.

---

## 8. Analytics and privacy

Four events — `animal_finder_open`, `animal_finder_filter_change`,
`animal_finder_result_click`, `animal_finder_no_results` — through `trackFinderEvent`,
which mirrors the existing `trackSearchEvent` exactly: it dispatches a DOM `CustomEvent`
and pushes to `window.dataLayer` **only if one already exists**. It opens no connection,
adds no vendor, and writes no storage. Verified in the browser: filtering, typing and
clicking leave `localStorage`, `sessionStorage` and `document.cookie` byte-identical to
an untouched `/animals/wolf` page — the only keys present are the pre-existing
WebmasterID tracker's.

### The reader's text never leaves the browser — including through the URL

The payload carries `queryLength`, never the query. FaunaHub's privacy policy lists what
it collects, that list is exhaustive, it permits "anonymous interaction events such as
link clicks or page-level actions", and it contains **no user-supplied free-text
category**. There is no consent banner.

**The Finder therefore writes nothing to the address bar** — not the query, and not the
filters either. The WebmasterID tracker mounted site-wide patches `history.pushState` and
`replaceState` and sends `window.location.href` with every resulting `page_view`, so any
state mirrored into the URL ships to a third-party endpoint. Filter slugs are a closed
vocabulary and would not leak text, but they would still fire a `page_view` on every
click, so the whole class is refused rather than split.

Three mechanical guards, each verified by injecting the violation and confirming the test
fails:

1. no finder module may reference `history.pushState/replaceState`, assign to
   `window.location`, mutate `URLSearchParams`, call `useSearchParams`, call `useRouter`,
   or construct a `q=` string;
2. `FinderAnalyticsProps` may declare no field named `query`, `text`, `term`, `phrase` or
   `input`, and no call site may pass one;
3. every token in the `filters` payload must be a facet id or value slug generated at
   build time.

**The cost is real and accepted: a Finder view cannot be deep-linked or shared.** The
browse presets exist partly to soften it — they reach the useful slices in one click.

### What the event stream can and cannot answer

| Question | Signal | Available? |
|---|---|---|
| Which filter combinations return nothing? | `animal_finder_no_results` with `filters` | **yes** — the most valuable signal here |
| Which slices of the collection do readers ask for? | `filters` distribution | yes |
| Which results do readers choose, and at what rank? | `resultUrl`, `position` | yes |
| How often does browse fail vs succeed? | no-results vs filter-change counts | yes |
| Which animals do readers *type*? | requires query text | **no** |
| Which unmatched names do readers type? | requires query text | **no** |

`animal_finder_no_results` is the Finder's counterpart to search's `missingPair`, and it
is strictly better as a content-demand signal: a combination like
`group:marine-animals|coverage:conservation` returning zero is a specific, closed-vocabulary
request for coverage that does not exist yet. Nothing derived from it may be rendered on
a public page — that would turn readers' requests into published content.

Events are debounced by 600 ms, matching search, so a settled selection produces one
event rather than one per click. The debounce key includes the **result count**, not just
the query length: keying on length alone made two different queries of the same length
look like the same state, so the second never scheduled a timer at all. Four-letter animal
names are pervasive here, and the worst case was precisely the signal this module exists
for — *wolf* (3 results, recorded) followed by *zzzz* (0 results) never emitted
`animal_finder_no_results`. Verified in the browser: `wolf`, `zzzz`, `bear` now emit three
events, the middle one a no-result. Result links carry `data-wmid-cta="animal-finder-result"`,
a static literal that can never hold reader text; if the tracker is absent it is inert.

**To unlock query-text analysis**, two things must land first: a consent mechanism gating
the tracker, and an amendment to the privacy policy's collection list. Both are product
decisions, not engineering ones.

---

## 9. Performance

Measured with Chromium against two real production builds — base `857468f` and this
branch — not from a build manifest.

### Cost on every other route

| Metric | Before | After | Δ |
|---|---|---|---|
| JavaScript shipped on every route (gz) | 102,503 B | 102,501 B | **−2 B** |
| CSS shipped on every route (gz) | 9,665 B | 10,125 B | **+460 B (+4.76 %)** |
| Routes whose reported bundle size changed | — | **1 of 857** | `/search` only |

Three of the four shared chunks are **byte-identical** to the baseline; the fourth is the
webpack runtime, which is the same 3,545 raw bytes. The CSS row is the real site-wide
cost and is reported because it is real: the Finder's utility classes are bytes on every
page whether the component renders or not. The drawer reuses the existing `eco-sheet-in`
and `eco-fade-in` keyframes rather than adding a fourth, which also inherits the
`[class*="animate-[eco-"]` reduced-motion guard in `globals.css`.

`/search` grew 9.49 → 10.1 kB route JS for the two Finder callouts in the overlay. Every
other route — `/`, `/animals/wolf`, `/animal-encyclopedia`, `/animal-compare` — is
unchanged.

### Cost on `/animal-finder`

| Asset | Size |
|---|---|
| Route JavaScript | 8.98 kB (120 kB first load) |
| `public/animal-finder-index.json` | 327,950 B raw · **70,411 B gz** · 56,676 B brotli |
| Images, default 48-card page | **0.75 MB** (0.48 MB above the fold) |

Nothing above is requested on any other page — verified in the browser: a cold load of
`/animals/wolf` issues no request for either index. The index is fetched once per page
at mount and cached at module scope.

**Open-to-first-result**, cold, from `goto` to the first rendered card:

| Connection | Time |
|---|---|
| Local (unthrottled) | 112 ms |
| Fast 3G (1.6 Mbps / 150 ms) | 2,471 ms |
| Slow 3G (400 kbps / 400 ms) | 8,771 ms |

The Slow 3G figure is dominated by the index over a 400 kbps link and is the honest
ceiling of the single-payload design — the same trade the search index makes, at 38 % of
its size.

### The images were the real payload

The first cut of this branch rendered card thumbnails with a plain `<img>` pointing at the
profile hero originals. Those are 1600 px files averaging 229 KB (largest 919 KB) —
correct at the top of a profile page, absurd in a 300 px card. Measured: the default
48-card page transferred **10.15 MB**, of which 2.19 MB was eager above the fold, and every
filter change swapped in another gridful. That was **33× the index** this whole layer
fetches lazily in order to stay small — the cheap thing carefully optimised while the
expensive thing sat unmeasured beside it.

They now go through `next/image` with an explicit `sizes`, exactly as
`components/fauna/OceanAnimalList.tsx` already does:

| | Before | After | Δ |
|---|---|---|---|
| Above the fold | 2.19 MB | **0.48 MB** | −78 % |
| Full 48-card page | 10.15 MB | **0.75 MB** | **−93 %** |
| Largest single image | 919 KB | 52 KB | −94 % |

All 50 requests are served as `/_next/image` derivatives. The cost is 6 kB gz of route
JavaScript (114 → 120 kB first load) and one Vercel image transformation per unique
size/slug pair, cached after the first request — the same mechanism the 642 profile heroes
already use.

**Every link on the page sets `prefetch={false}`,** matching the search panel. With Next's
default prefetching the three link grids speculatively fetch an RSC payload for each of
their 25 destinations as they scroll into view — more bytes than the index itself, for
pages the reader has not asked for. Measured scrolled to the bottom: **47 RSC prefetches,
all of them from the shared site footer and header**, against 160 on `/animal-encyclopedia`
and 339 on `/animal-compare`. The footer's own prefetching is pre-existing and site-wide;
fixing it would touch every route and is the recommended next performance step.

**Rendering is paged at 48 cards** with a *Show more* control. Rendering all 642 at once
costs roughly 2,000 DOM nodes and 642 image elements for a list nobody scrolls to the end
of; the total is always stated above the grid, so nothing is hidden. The first 8 images
load eagerly and the rest defer; the card's `aspect-[3/2]` wrapper reserves the box before
anything loads, which matters because the 642 heroes span 172 distinct intrinsic ratios,
none of which the card uses.

**The loading skeleton renders 48 placeholders, not 6.** The first render after the index
lands is always 48 cards, so anything fewer leaves the group index, the presets, the
coverage table and the FAQ to jump down by fourteen grid rows on arrival — eight seconds
into a Slow 3G load. Measured layout shift of the result count across all six viewport
widths is **0 px**.

**Ranking is 35× faster than it was.** `facetCounts` runs the filter engine once per facet,
so a keystroke is four passes over 642 documents. Folding and tokenizing inside the scorer
meant ~10,000 Unicode normalizations and regex splits per keystroke for values that cannot
change: measured at **7.63 ms** for "wolf" on an M-series Mac, several times that on a
mid-range phone, before React re-rendered a single card. `hydrateFinderDocument` now
derives `foldedName`, `nameTokens`, `foldedScientificName` and `tagTokens` once, the same
trick `searchText` already used — **0.22 ms**. `facets` is also memoised rather than
defaulted to a fresh `[]`, without which every render re-filtered 642 documents four
times.

---

## 10. Accessibility

`axe-core` 4.10.2, WCAG 2.0/2.1 A + AA, in five states — desktop initial, desktop
filtered, desktop empty, mobile drawer open, and 320 px.

**Result: 2 violation nodes in every state, both in the shared site footer**
(`© 2026 FaunaHub` and the disclaimer paragraph), which appear identically on untouched
pages — `/animal-encyclopedia` reports 9 and `/animal-compare` 19 from the same
pre-existing `#8A958E` colour. **The Finder itself introduces zero violations.**

Two defects were found by that audit and fixed on this branch:

1. **A dimmed facet row failed AA.** Values that can no longer narrow the result set were
   recessed with `opacity-55`, which dropped the label to roughly 2.6:1 and failed in 16
   places at once. They are now recessed with a lighter border and `#5E6B63` (5.59:1 on
   white) instead. The state was never colour-only either way — the visible count reads 0.
2. **The coverage table's scroll container was unreachable by keyboard.** The table is
   wider than a phone and scrolls inside `overflow-x-auto`; a scroll container with no
   focusable child cannot be scrolled with a keyboard. It now carries `tabIndex={0}`,
   `role="region"` and a label — axe's `scrollable-region-focusable`, now clean.

Verified by hand in the browser on top of that:

- the input is a real `<input type="search">` inside `<form role="search">` with a
  labelled control; each facet is a `<fieldset>` with a `<legend>`;
- the checkboxes are native `<input type="checkbox">`, visually restyled but never
  replaced — Space toggles, and the focus ring is drawn on the visible box via
  `peer-focus-visible`;
- the result count is an `aria-live="polite"` region, so a filter change is announced
  without interrupting a reader mid-word;
- each facet value's count is repeated for assistive technology as "N matching animals"
  rather than a stray number after the label;
- the drawer is `role="dialog" aria-modal="true"` with an accessible name, moves focus in,
  traps it (verified: focus did not escape after 40 Tab presses), closes on Escape,
  returns focus to its trigger, locks body scroll and restores it;
- the drawer paints at `z-index: 70`, above the sticky header (`z-50`) and ecosystem bar
  (`z-60`) — measured: drawer top 101 px against header bottom 113 px, so it covers the
  header rather than opening beneath it;
- every interactive control is ≥ 44 px tall. The single sub-44px element is the 1 px
  `sr-only` label for the search input, which is not a touch target.

---

## 11. Responsive

Tested at 320, 390, 768, 1280, 1440 and 1920 px against the production build.

| Width | Columns | Filters | Horizontal overflow | Count shift after load |
|---|---|---|---|---|
| 320 | 1 | drawer | none | 0 px |
| 390 | 1 | drawer | none | 0 px |
| 768 | 2 | drawer | none | 0 px |
| 1280 | 3 | sidebar | none | 0 px |
| 1440 | 3 | sidebar | none | 0 px |
| 1920 | 3 | sidebar | none | 0 px |

The document never scrolls horizontally at any width. The one element wider than a 320 px
viewport is the coverage table, which scrolls inside its own labelled, focusable
`overflow-x-auto` container — the intended behaviour for wide tabular data.

---

## 12. Tests

`tests/animal-finder.test.ts` — **55 tests**, in seven groups:

*Index integrity* — wire version, unique slugs, no duplicate card under any selection,
every record is a real route, every real profile is findable, no backlog leak, no runtime
module imports a backlog, URL hygiene, every image file exists with real dimensions, and
scientific names are never backfilled.

*Facet honesty* — every exposed facet clears the gate, **every value's count equals the
records that hold it**, **a conjunctive chip's count equals the list it opens**, stated
coverage matches the documents, no value matches every record, every value `href`
resolves, excluded axes carry a real reason and are never also exposed, the known-thin
axes are excluded *by name*, diet is excluded for being prose rather than for being
absent, no copy claims popularity, every coverage flag agrees with the registry it came
from, **the conservation flag covers every profile with a published Red List page**, and
**the slug-derived conservation join never links two differently-named animals**.

The last two check against `search-index.json` rather than against `red-list/species.ts`
— deliberately. The finder builder reads that module, so checking against it would only
prove the builder agrees with itself; the search index is produced by a different builder
from the route's own `generateStaticParams`, so it is independent evidence that
`/endangered-animals/species/<slug>` is a page that exists.

*Filtering* — empty selection returns everything alphabetically, one facet unions, two
facets intersect, the coverage facet requires ALL flags, exact-name and scientific-name
lookup, short names outrank longer prefixes, text + filter intersect, an impossible
combination returns an empty list rather than a fallback, hostile and degenerate input
(XSS, SQL, traversal, emoji, full-width, 5,000 characters), the query cap, per-facet
counts exclude their own facet but respond to others, unknown values are rejected, and
the selection helpers are order-independent.

*Filtering, presets, route, SEO, privacy, budget* — a spaced compound name reaches its
animal without the collapse leaking into single-word queries; **descriptions are the
page's own sentence, whole**, with three named corrective clauses asserted present; every
preset resolves and every href exists; `/animal-finder` exists with no faceted sub-route
and is indexable and canonical; the sitemap gains one URL and no query string; the search
overlay links in from both states; **its fallback destinations are named rather than
positional**; **the search field is not a successful form control**; the privacy guards;
no heavyweight registry in client code; the committed index is not stale; and the payload
budget, including an assertion that the finder index stays smaller than the search index
it declines to reuse.

**The privacy guards are written to survive the obvious bypass.** The first version of
them would have passed `location.href = …` without a `window.` prefix, `location.assign()`,
`window["location"]`, `searchParams.append()`, `?query=`, an aliased `useRouter`, and a
props field named `raw` or `needle`; and its `stripComments` truncated any line containing
`//` inside a string literal, so `router.push("https://x?q=" + q)` became `router.push("https:`
and defeated the check it was there to make. It now matches bracket access and every
navigation shape, whitelists the seven fields `FinderAnalyticsProps` may declare, and
extracts each `trackFinderEvent(…)` argument by balancing parentheses instead of scanning
a fixed 400-character window that silently skipped single-line calls.

Seven guards were verified by injecting the violation and confirming the suite fails: a
`history.replaceState` call in a finder module, a `query?: string` field on the analytics
props, an inflated facet count in the committed index, a faceted sub-route directory, the
conjunctive facet-count bug, a positional fallback destination, and a `name` attribute on
the search input.

The existing 228 tests are unchanged and still pass — **283 in total**.

---

## 13. Adding content later

Nothing to do. A new `src/app/animals/<slug>/page.tsx` is in the Finder on the next build,
with its group, tags, scientific name, photo and coverage flags derived from what the page
and the registries already say.

**Two things do need a line of code.** Adding a new *axis* means adding a `measureAxis`
entry to `buildFinderIndex` — after which the gate decides whether it becomes a filter or
a published gap, and no further change is needed either way. Adding a new *facet value
kind* means extending `valuesFor` in `filter.ts` and `documentValues` in the builder,
which are deliberately two small mirrored functions so a disagreement between them is
caught by the facet-count test rather than shipped.

---

## 14. What would take this further

Ranked by how much they would improve the Finder per unit of work:

1. **A marine range registry.** Continent and habitat both sit at 44.1 % for the same
   reason — `fauna/featured-animals.ts` excludes purely marine species by design. One
   editorial pass covering them would push both axes past 70 % and add the two most
   requested filters at once. This is the highest-value structured-data work FaunaHub has.
2. **A normalised diet enum**, derived from and validated against the 561 diet sentences
   the profiles already publish. That is an editorial project, not an extraction — the
   whole point is that a machine should not do it.
3. **Joining more Red List records to profiles.** 15 of 642 today; the enum is already
   genuine, so this is join work rather than data collection.
4. **A content-hashed index filename** served `immutable`, replacing the current
   `max-age=0` revalidation. Strictly better on both counts — repeat opens become instant,
   and a changing hash is a stronger staleness guarantee than revalidation. Shared with
   the search index, and the same recommendation stands there.
5. **`prefetch={false}` in `SiteFooter`.** 47 of the Finder's 47 remaining RSC prefetches
   come from the footer, and it is on all 1,697 routes. Out of scope here because it would
   touch every page on the site.
6. **`/animals/lion` has no `scientificName`.** A one-line content fix on that profile,
   after which "Panthera leo" reaches it with no code change. It is listed here rather
   than done because a binomial FaunaHub has not published is not this branch's to invent.
7. **The two site-wide contrast failures in `SiteFooter`.** They are the only axe
   violations left on `/animal-finder`, they predate this branch, and they appear on all
   1,697 routes.
