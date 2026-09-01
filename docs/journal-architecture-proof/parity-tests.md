# Parity tests across two build units

## Principle

No existing test is deleted or loosened. Each single-build-unit assertion is
**re-scoped to "the main-owned corpus"** — which today is the entire corpus, so
the assertions keep exactly their current strength — and new Journal-side and
cross-project checks are added around them.

The failure this design exists to prevent: a split that makes the tests pass by
narrowing what they look at.

## Main project — changes to existing tests

Today `staticRoutes()` walks `src/app` and asserts every static route is in
`search-index.json`. That stays. It is main's own corpus and it should remain
exact.

| Existing test | Change | Why |
| --- | --- | --- |
| `every static route on disk is findable` | **none** | walks main's `src/app`; Journal is a different repo/app, so nothing changes |
| `every indexed url matches a route that exists on disk` | **none** | main index, main routes |
| `every sitemap url is searchable…` | **none** | both sides stay main-owned and disjoint from Journal |
| `no literal sitemap url is duplicated` | **none** | |
| `the sitemap carries no query string and no fragment` | **none** | |
| `the sitemap still excludes /search` | **none** | |

The point worth stating: because main's sitemap and index both deliberately
exclude `/journal/*` (`sitemap-strategy.md`), **none of main's parity tests need
weakening at all.** The corpora are disjoint, so each stays exact.

### New main-project tests

```
main sitemap contains no /journal url
  → sitemap.ts must never emit a /journal path; Journal owns that corpus

main search-index contains no /journal document
  → the two indexes stay disjoint

robots.txt advertises the Journal sitemap only once it exists
  → guards the "advertising a 404 sitemap" failure

main root artifacts are main-owned
  → /sitemap.xml, /robots.txt, /search-index.json, /animal-finder-index.json
    and the IndexNow key are not listed in microfrontends.json routing

microfrontends routing paths do not overlap
  → official helper: validateRouting
    (https://vercel.com/docs/microfrontends/troubleshooting#validaterouting)

global search tolerates an unavailable Journal index
  → stub a rejecting fetch; assert main results still render and nothing throws

no Journal index fetch on cold page load
  → asserts the lazy contract survives the integration
```

## Journal project — its own suite

Journal must carry the mirror image of main's invariants, over its own corpus:

```
every Journal route on disk is in /journal/search-index.json
every /journal/search-index.json url exists as a route
Journal sitemap urls == Journal search-index urls   (exact, both directions)
every Journal url starts with https://faunahub.com/journal/
Journal sitemap contains no main url
Journal public/ root is empty                       (public-namespace.md rule 1)
Journal ships no robots.txt and no IndexNow key file
every canonical is an absolute apex URL             (never *.vercel.app)
no query string or fragment in any Journal sitemap url
no draft/unpublished article is routed or sitemapped
the IndexNow submitter emits only https://faunahub.com/journal/ urls
```

The last one matters most: it is the test that prevents a `*.vercel.app` URL
ever being submitted, and it belongs in the repo that owns the submitter.

## Cross-project — production checks

These cannot run in either unit test suite; they need a live host. They belong
in a post-deploy script, run after any routing change.

```
1. canonical host, the load-bearing one
   www.faunahub.com/journal/<slug>  → 301|308 → https://faunahub.com/journal/<slug>
   www.faunahub.com/               → 301|308 → apex          (regression guard)
   ASSERT the redirect happens for a path that microfrontends routes to Journal,
   not merely for a main-owned path. That is the whole point.

2. no duplicate host serves Journal
   faunahub-journal.vercel.app/journal/<slug>
     → expect noindex, or an apex canonical, or SSO — never a bare indexable 200

3. root artifacts still served by main
   /sitemap.xml         contains /animals/lion   (content signature, not status)
   /robots.txt          Host: https://faunahub.com
   /search-index.json   1691 documents
   /<indexnow-key>.txt  200, body === key

4. both sitemaps reachable and disjoint
   /sitemap.xml and /journal/sitemap.xml both 200
   intersection of their <loc> sets is EMPTY

5. assets resolve from their namespaced paths
   every <script src> and <link href> on a Journal page returns 200
   no Journal asset is requested from a main-owned path

6. Journal outage does not break main search
   with Journal offline: open search on faunahub.com, assert main results render

7. IndexNow key validates a Journal URL
   key file 200 at apex root; submitted Journal urls all start with the apex
```

### Stale-CDN rule for every check above

A production check may hit a stale edge. This bit us on 2026-09-01: a plain
`curl` reported the old 404 and a 1688-URL sitemap while Vercel already reported
the deployment READY; a cache-busted request returned the new build immediately.

> **Any check that is about to report a FAILURE must first be repeated with
> cache-busting** (`?cb=<random>` or `Cache-Control: no-cache`). A cache-busted
> success proves nothing extra — it only prevents a false negative. Never
> declare a deploy missing or a route broken on a single cached read.

## What is not covered

- These are checks, not proofs. Nothing here establishes microfrontends routing
  order; that is measured by the prototype (ADR open question 2).
- No test can prevent Journal from publishing a *wrong* article. Editorial
  no-fabrication rules are separate and unchanged.
