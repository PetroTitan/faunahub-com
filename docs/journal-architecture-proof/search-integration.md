# Search and Finder integration

## Measured starting point (2026-09-01)

| Artifact | raw | gzip | brotli | Loaded when |
| --- | --- | --- | --- | --- |
| `/search-index.json` | 723,706 B | 158,850 B | 126,453 B | on overlay open |
| `/animal-finder-index.json` | 328,484 B | 70,481 B | 56,774 B | on `/animal-finder` mount |

Verified in a real browser: a cold load of `https://faunahub.com/` issues **zero**
fetches for either index (33 requests, none of them an index). Both are lazy
today, and that must survive the split.

## Decision 1 — Global Search **does** include Journal (Option A, lazy)

When the overlay opens, fetch both indexes in parallel:

```
/search-index.json           (main, 1691 docs)
/journal/search-index.json   (Journal-owned)
```

Rationale: a reader who searches "otter" should find the otter profile *and* an
article about otters. Excluding Journal (Option B) would make the site's own
search the only place Journal is invisible — an odd and quickly annoying gap.
Option C (main periodically imports Journal data) recreates the coupling the
split exists to remove and adds a stale window.

### Rules

1. **Parallel, not sequential.** `Promise.allSettled`, never `await` one then the
   other — Journal latency must not delay main results.
2. **Journal failure is non-fatal.** If the Journal fetch rejects, times out, or
   returns a bad shape, search runs on main results alone. It must never throw,
   never blank the overlay, and never surface an error to the reader. This is
   `allSettled`, deliberately, not `all`.
3. **Still lazy.** No Journal index fetch on cold page load, on hover, or on
   header mount. The existing test `no client search module imports a
   heavyweight content registry` stays as-is and a new test asserts no cold-load
   fetch.
4. **Own budget.** Journal's index gets its own ceiling, tracked separately:
   **≤ 60 KB brotli** at launch, reviewed at 100 articles. Journal documents
   carry title, url, description, date and tags — never article bodies. If it
   approaches the ceiling, split a sidecar; do not silently grow the payload the
   overlay must download.
5. **Schema is versioned and independent.** Journal's index declares its own
   `version` field. Main refuses a payload whose version it does not recognise
   and degrades to main-only — the same posture `load-index.ts` already takes for
   a stale main index ("A cached index from an older deploy. Refusing it is safer
   than…"). The two schemas may diverge; they must not be assumed identical.
6. **Ranking stays deterministic.** Journal documents enter the existing tier
   system as their own document type. No new scoring model, no cross-index
   normalisation hack. A Journal article must not outrank an animal's own
   profile for that animal's name.
7. **Privacy is unchanged and non-negotiable.** The reader's query still never
   reaches the URL, and no query text may be sent to any endpoint. Fetching a
   second *static* JSON file adds no query-bearing request. The existing tests
   `no search module ever puts the reader's query into the URL` and `no analytics
   payload can carry the query text` apply unchanged to any new code.

### Serving the Journal index

Serve it from a **route handler** (`app/journal/search-index.json/route.ts`),
not from `public/`. Reason in `public-namespace.md`: `public/` content under
microfrontends "needs to be manually moved to a subdirectory with the name of
the asset prefix", and a route handler follows path routing with no such
caveat. `robots.txt` should then `Disallow: /journal/search-index.json`, matching
the existing treatment of `/search-index.json` — it is a machine artifact whose
every title already lives on a real indexable URL.

## Decision 2 — Animal Finder does **not** include Journal

Explicit, and not a deferral.

The Finder's population is *"the set of directories under `src/app/animals` — the
642 profiles that exist as real routes"*, and its facets are animal facets:
group, taxonomic group, and FaunaHub-coverage flags. An article has no
taxonomic group. Adding Journal documents would mean either inventing facet
values for them (fabrication, and the Finder's entire design is a refusal to do
that) or shipping records that every filter excludes — dead weight in a payload
that is deliberately separate from the search index precisely to avoid carrying
documents it cannot filter.

Journal reaches readers through Global Search and through links. Not through the
animal Finder. If that is ever revisited it needs its own design and its own
facet-coverage audit, not a quiet ingest.

## Decision 3 — who owns Journal documents

Journal owns them, end to end. Main never contains a Journal document in
`search-index.json`, and the main index stays at exactly the main-owned corpus.
This is what keeps main's parity test exact rather than approximate.

## Performance summary

| | Today | After Journal |
| --- | --- | --- |
| Cold page load index fetches | 0 | **0** (unchanged) |
| Overlay open | 1 fetch, 126 KB brotli | 2 parallel fetches, 126 KB + ≤60 KB |
| `/animal-finder` mount | 1 fetch, 57 KB brotli | **unchanged** |
| Journal index unavailable | n/a | search degrades to main-only, silently |
