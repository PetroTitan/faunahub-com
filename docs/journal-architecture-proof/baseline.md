# Baseline — measured, not remembered

Every number here was recomputed from the repository and from production on
2026-09-01. Nothing is carried over from a previous sprint's report.

## Git and platform

| Fact | Value |
| --- | --- |
| Branch cut from | `origin/main` @ `61d64cf` |
| Proof branch | `proof/faunahub-journal-architecture` |
| Working tree at cut | clean |
| Production deployment | `dpl_8JPkS12mxn7sWpUjp2apzxYJNSqh` (READY, target=production, commit `61d64cf`) |
| Next.js | `15.5.18` (declared `^15.5.18`, installed 15.5.18) |
| React | `19.1.0` |
| Vercel team | `team_XVsatleKgqptkBkRWGq7L0Xs` — plan **pro** |
| Vercel project | `prj_oo9vU0SDtE2878hZc6vlvbqLvq9J` (`faunahub-com`, framework nextjs, node 24.x) |

## Configuration surface

| File | State |
| --- | --- |
| `vercel.json` | **absent** |
| `.vercelignore` | absent |
| `middleware.ts` / `src/middleware.ts` | **absent** |
| `next.config.ts` | present |
| `basePath` | **not set** |
| `assetPrefix` | **not set** |
| `rewrites()` | **none** |
| `headers()` | **none** |
| `redirects()` | **one** — see below |
| `outputFileTracingRoot` | pinned to `__dirname` |
| `images.remotePatterns` | `[]` |

The single redirect is the canonical-host rule:

```ts
source: "/:path*",
has: [{ type: "host", value: "www.faunahub.com" }],
destination: "https://faunahub.com/:path*",
statusCode: 301,
```

## Domains attached to the main project

```
faunahub.com
www.faunahub.com
faunahub-com.vercel.app
faunahub-com-petrotitans-projects.vercel.app
faunahub-com-git-main-petrotitans-projects.vercel.app
```

Measured behaviour (cache-busted, 2026-09-01):

| Host + path | Result |
| --- | --- |
| `www.faunahub.com/` | 301 → `https://faunahub.com/` |
| `www.faunahub.com/animals/lion` | 301 → apex, path preserved |
| `www.faunahub.com/journal/test` | **301 → apex** (path does not exist; redirect still applies) |
| `faunahub.com/animals/lion` | 200, `x-matched-path: /animals/lion` |
| `faunahub-com.vercel.app/animals/lion` | **200, no `x-robots-tag`** |
| `faunahub-com-petrotitans-projects.vercel.app/...` | 302 → Vercel SSO, `x-robots-tag: noindex` |
| `faunahub-com-git-main-...vercel.app/...` | 302 → Vercel SSO, `x-robots-tag: noindex` |

**Pre-existing exposure, not introduced here:** `faunahub-com.vercel.app` serves
the whole site publicly at 200 with no `noindex`. It is soft-protected only —
every page carries an absolute `<link rel="canonical" href="https://faunahub.com/…">`
and its `robots.txt` declares `Host: https://faunahub.com` with the apex sitemap.
That is consolidation by canonical, not exclusion. Journal would inherit exactly
the same shape via `faunahub-journal.vercel.app`, so its canonicals must be
hardcoded to the apex from the first commit. See `adr.md` §Risks.

## `/journal` is unclaimed

| Check | Result |
| --- | --- |
| `src/app/journal` on disk | absent |
| `/journal` references in `src/` | 0 |
| `/journal` references in `scripts/` | 0 |
| `journal` in `src/app/sitemap.ts` | 0 |
| `journal` docs in `search-index.json` | 0 |
| `journal` docs in `animal-finder-index.json` | 0 |
| `https://faunahub.com/journal` live | **404** |

## Corpus counts (recomputed)

| Metric | Value |
| --- | --- |
| Animal profiles (`src/app/animals/*/page.tsx`) | 642 |
| All `page.tsx` | 853 |
| `search-index.json` documents | 1691 |
| `animal-finder-index.json` documents | 642 |
| Production `sitemap.xml` `<loc>` count | 1691 |
| Sitemap ↔ search-index parity | **exact, both directions, 0 discrepancies** |
| Test suite | 350 passing |

## Root `public/` namespace (exact)

```
public/animal-finder-index.json
public/b8c42ce2723b2b6b2e3053c5279a91c9.txt   ← IndexNow key
public/search-index.json
public/brand/
public/images/
```

Plus two route handlers that occupy root paths: `/sitemap.xml`, `/robots.txt`
(and `/image-sitemap.xml`).

## The invariants a second build unit must not break

Enumerated from the actual test suite, not from memory:

1. `every static route on disk is findable` — `staticRoutes()` **walks `src/app`
   on disk** and asserts every non-dynamic route appears in `search-index.json`.
   This is the invariant a separate build unit is structurally invisible to.
2. `every indexed url matches a route that exists on disk`.
3. `the index matches what the last production build actually prerendered`.
4. `every sitemap url is searchable, and every searchable page bar /search is submitted`.
5. `no literal sitemap url is duplicated`.
6. `the sitemap carries no query string and no fragment`.
7. `the sitemap still excludes /search`.
8. `the search page is noindex, follow — and absent from the sitemap`.
9. `no search module ever puts the reader's query into the URL`.
10. `no client search module imports a heavyweight content registry`.
11. `no private or technical route is indexed` (backlog exclusion).

Items 1–5 are single-build-unit assumptions. `parity-tests.md` redesigns them.
