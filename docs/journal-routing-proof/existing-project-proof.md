# Existing-project routing proof — attempt 2026-09-01

**Stopped at Phase 3.** The GitHub repository exists and is now populated. The
Vercel project does not exist, and this session still cannot create one.

## Phase 0 findings — the premise was half true

| Asset | Expected by the brief | Actual |
| --- | --- | --- |
| `PetroTitan/faunahub-journal` (GitHub) | exists | ✅ **exists** — private, and was **empty** |
| `/Users/titan/faunahub-journal` | may exist | absent; cloned fresh |
| Vercel project `faunahub-journal` | exists, linked | ❌ **does not exist** |

### How the GitHub repo was confirmed, and why it looked like it did not exist

Unauthenticated checks all said no:

```
https://github.com/PetroTitan/faunahub-journal            → 404
https://api.github.com/repos/PetroTitan/faunahub-journal  → 404
```

Those 404s are GitHub hiding a **private** repository from anonymous requests,
not evidence of absence. `git ls-remote` over SSH exited **0 with zero refs**,
which is ambiguous on its own, so it was calibrated against known cases:

| Target | exit | refs | stderr |
| --- | --- | --- | --- |
| `PetroTitan/definitely-not-a-real-repo-xyz123` | **128** | 0 | `ERROR: Repository not found.` |
| `PetroTitan/faunahub-com` | 0 | 26 | — |
| `PetroTitan/faunahub-journal` | **0** | **0** | — |

Exit 0 with zero refs is the signature of a repository that **exists and is
empty**. SSH authenticated as `PetroTitan`.

### How the Vercel project's absence was confirmed

```
list_projects (team_XVsatleKgqptkBkRWGq7L0Xs)  → faunahub-com, builddesignhub-com only
get_project("faunahub-journal")                → 404 Not Found
create_git_project(...)                        → 403 forbidden
    "You don't have permission to create the project." action: create, resource: project

https://faunahub-journal.vercel.app/__journal-proof                              → 404
https://faunahub-journal-petrotitans-projects.vercel.app/__journal-proof         → 404
https://faunahub-journal-git-main-petrotitans-projects.vercel.app/__journal-proof → 404
```

`https://vercel.com/petrotitans-projects/faunahub-journal` returns **200**, but
that is the dashboard SPA shell, which answers 200 for any path when
unauthenticated. **It is not evidence that the project exists**, and it should
not be read as such — the API result and the three 404 deployment hostnames are.

## What this sprint did complete

**Phases 1 and 2 in full.** `PetroTitan/faunahub-journal` went from empty to a
working, pushed proof app at commit `61a0f9d`:

```
src/app/page.tsx                   → /__journal-proof
src/app/nested/page.tsx            → /__journal-proof/nested
src/app/api/proof/route.ts         → /__journal-proof/api/proof
src/app/feed.xml/route.ts          → /__journal-proof/feed.xml
src/app/search-index.json/route.ts → /__journal-proof/search-index.json
src/app/not-found.tsx              → real 404
public/proof-pixel.png             → /__journal-proof/proof-pixel.png
```

Local route table (`next start`, production build):

| Path | Status |
| --- | --- |
| `/__journal-proof` | 200 |
| `/__journal-proof/` | 308 → non-slash (Next's normal trailing-slash redirect) |
| `/__journal-proof/nested` | 200 |
| `/__journal-proof/api/proof` | 200 |
| `/__journal-proof/feed.xml` | 200 |
| `/__journal-proof/search-index.json` | 200 |
| `/__journal-proof/proof-pixel.png` | 200 |
| `/__journal-proof/this-page-does-not-exist` | **404** (app's own not-found) |
| `/nested` | 404 — nothing leaks outside the prefix |
| `/__journal-proof/__journal-proof/nested` | 404 — no double prefix |

`X-Robots-Tag: noindex, nofollow` on every response including route handlers.
`PROOF-APP-MARKER` present. Assets emitted at
`/__journal-proof/_next/static/…`. Gates: lint clean, typecheck clean, build
exit 0, 0 secret matches.

`npm audit` in the Journal repo reports **3 high** — `next` (direct), `postcss`,
`sharp` — the same transitive toolchain advisories as the main repo.
`npm audit fix --force` was **not** run.

## What remains unanswered

Both blocking questions, untouched:

1. Does microfrontends routing pass `/__journal-proof/x` through, or strip it?
2. Does Vercel's auto asset prefix compose with `basePath`?

They live in Vercel's routing network and need two projects. The diagnostics
table in the proof app is the instrument; it just needs somewhere to run.

## Exact correction needed

Either grant the Vercel MCP integration **project-creation** rights on
`team_XVsatleKgqptkBkRWGq7L0Xs`, or create the project by hand — now a single
import, because the repository is populated:

1. Vercel → **Add New… → Project** → import **`PetroTitan/faunahub-journal`**
2. Keep the name `faunahub-journal`; framework Next.js; **Root Directory: repo root**
3. Do **not** attach `faunahub.com` and do **not** attach any custom domain
4. Deploy, then confirm
   `https://faunahub-journal.vercel.app/__journal-proof` renders the
   diagnostics table with `PROOF-APP-MARKER`

Then Phase 4 onward can run. Phase 6 (production routing on the disposable
path) still needs separate explicit approval, because microfrontends routing is
declared in main's `microfrontends.json` and takes effect only once merged and
live.

## Production state throughout

Untouched. `main` stayed at `bcf5785`; no `microfrontends.json`, no
`vercel.json`, no `src/app/journal`. Verified live and cache-busted at the end:

```
11/11 sampled routes           200
/this-main-page-does-not-exist 404, custom "Page not found"
/journal                       404      ← still unclaimed
/__journal-proof               404      ← never routed
sitemap 1691 (0 journal URLs) · search-index 1691 · finder 642
IndexNow key 200 · robots Host: https://faunahub.com
HELPERG banner present · WebmasterID tracker present
PROOF-APP-MARKER on faunahub.com: 0 occurrences
```
