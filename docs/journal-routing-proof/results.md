# Results — what was proven, and what was blocked

## Summary

| Phase | Question | Status |
| --- | --- | --- |
| 2 | Which `basePath` layout is correct? | ✅ **Answered** |
| 4 | Does microfrontends routing pass or strip the prefix? | ❌ **Blocked** |
| 5 | Do `withMicrofrontends` asset prefix and `basePath` compose? | ❌ **Blocked** |
| 6 | Does `www → apex` preserve the mounted prefix? | 🟡 **Partly** — app layer proven, platform layer untested |
| 7 | Is the proof app non-indexable? | ✅ **Answered** |
| 8 | Do root assets stay main-owned? | ✅ **Answered (trivially — nothing was routed)** |
| 9 | Do status codes survive the boundary? | 🟡 **App-side proven, boundary untested** |
| 10 | Is the main site regression-free? | ✅ **Answered** |
| 11 | Is deployment isolated? | ❌ **Blocked** |

## The block

Creating the disposable Vercel project failed with a permission error, on both
available paths:

```
deploy_to_vercel   → 403 forbidden
   "You don't have permission to create a project."
create_git_project → 403 forbidden
   "You don't have permission to create the project."
   action: "create", resource: "project"
```

The Vercel MCP connection can **read** (`list_teams`, `list_projects`,
`get_project`, `list_deployments` all succeeded and returned real data) and can
deploy to an existing project. It cannot create one.

No `vercel` CLI is installed, no `VERCEL_TOKEN` is present, and there is no
other credential in this environment.

### What was deliberately NOT done to work around it

- **Not** deployed the proof app into the existing `faunahub-com` project.
  It would have polluted the production project's deployment history, and it
  proves nothing about routing anyway — a microfrontends group needs two
  projects.
- **Not** added `microfrontends.json` to `main` and merged. That is production
  routing activation, which the sprint forbids, and it is the one change that
  cannot be tested before it is live.
- **Not** repurposed `builddesignhub-com` as the second microfrontend. It is a
  second production site.

Blocking questions 1 and 2 are about behaviour inside Vercel's network
infrastructure — "Vercel makes both routing decisions in its network
infrastructure" (https://vercel.com/docs/microfrontends/routing). No local
setup can observe them.

## Phase 2 — basePath layout: ANSWERED

This is Next.js framework behaviour, not platform behaviour, so a local
measurement is authoritative. Both variants were built and served.

| Variant | Config | Route files | Result |
| --- | --- | --- | --- |
| **A** | `basePath: "/__journal-proof"` | app root (`src/app/nested/page.tsx`) | ✅ serves at `/__journal-proof/nested` |
| **B** | `basePath: "/__journal-proof"` | `src/app/__journal-proof/nested/page.tsx` | ❌ serves at `/__journal-proof/__journal-proof/nested` |

Variant A, measured on the real proof app:

```
/__journal-proof                            200
/__journal-proof/nested                     200
/__journal-proof/api/proof                  200
/__journal-proof/feed.xml                   200
/__journal-proof/search-index.json          200
/__journal-proof/proof-pixel.png            200   (public/ asset)
/__journal-proof/nope                       404   (real 404, app's own not-found)
/nested                                     404   (nothing leaks outside the prefix)
/__journal-proof/__journal-proof/nested     404   (no double prefix)
```

**Conclusion for the real Journal: `basePath: "/journal"`, routes at the app
root.** Confirmed twice now, on two independently built apps.

## Phase 5 (partial) — asset paths under basePath alone

```html
<script src="/__journal-proof/_next/static/chunks/73f50b84-….js">
<script src="/__journal-proof/_next/static/chunks/102-….js">
```

`basePath` namespaces `_next/static` on its own. No request is made to a root
`/_next/*` path, so at the Next layer there is no overlap with the main app.

**What remains unknown:** whether `withMicrofrontends`' auto-generated prefix
(`vc-ap-<hash>`) composes with this, replaces it, or conflicts. Two prefixing
mechanisms aimed at one problem is exactly where a subtle break lives, and it
cannot be observed without a real microfrontends group.

## Phase 6 (partial) — canonical host

The child app's own safeguard was proven against the deployed-shape config:

```
Host: www.faunahub.com  GET /__journal-proof/nested
→ 301 Moved Permanently
→ location: https://faunahub.com/__journal-proof/nested
```

The prefix is preserved. A trap worth recording: with `basePath` set, a
redirect's `source` matches **inside** the base path, so the `destination` must
re-state the prefix. Without that, `/__journal-proof/nested` redirects to
`https://faunahub.com/nested` — silently dropping the mount.

**What remains unknown:** whether the *platform* layer (main's own rule, or a
domain-level redirect) still fires for a path that microfrontends routing hands
to the child project. That is the ordering question the ADR refused to guess at,
and it is still unanswered.

## Phase 7 — SEO safety: ANSWERED

The proof app is non-indexable by construction:

- `X-Robots-Tag: noindex, nofollow` on every response, via `headers()` in
  `next.config.ts` (verified on the served response).
- `robots: { index: false, follow: false, nocache: true }` in root metadata.
- No proof path in any sitemap, search index or finder index — verified live:
  sitemap is still 1691, search index 1691, finder 642, none containing
  `__journal-proof`.
- `metadataBase` is the apex, so no canonical can point at an infrastructure host.

## Phase 8 & 10 — main site: ANSWERED (nothing was changed)

All 13 sampled production routes returned 200; `/this-main-page-does-not-exist`
returned **404** with the custom `Page not found` h1. Root artifacts unchanged:
sitemap 1691, search index 1691, finder index 642, IndexNow key 200 with correct
body, `robots.txt` `Host: https://faunahub.com`.

`/__journal-proof` and `/journal` both still return **404** in production.
No routing was activated. This is regression-freedom by construction rather than
by repair: production was never touched.

## Phase 11 — deployment isolation: BLOCKED

Requires two projects. Not attempted. No evidence is offered, and none should be
inferred.

---

## Continuation attempt — 2026-09-01, after PR #12

A continuation sprint was started on the premise that `faunahub-journal-proof`
had been created manually. **It has not been.** Verified four ways before
concluding, to avoid the false-negative failure mode this project has been bitten
by before:

| Check | Result |
| --- | --- |
| `list_projects` on `team_XVsatleKgqptkBkRWGq7L0Xs` | only `faunahub-com`, `builddesignhub-com` |
| `get_project` by slug `faunahub-journal-proof` | **404 Not Found** |
| `list_teams` | one team only — no second account to hide in |
| `faunahub-journal-proof.vercel.app` + 3 name variants | all **404** |

(`*.vercel.app` DNS resolves for any name — the wildcard is not evidence. The
HTTP 404 is.)

So blocking questions 1 and 2 remain **unanswered**. Nothing changed about them.

### What PR #12 did establish, at no cost

The proof app was merged to `main` (`bcf5785`) and Vercel built and deployed
production successfully — `dpl_EbwQrNMCc39tWQuFik9JKs6TKUeB`, READY, target
production.

That upgrades a local claim to a production one: **`proofs/journal-routing/` is
inert on real Vercel infrastructure**, not merely in a local build. Its nested
`package.json` did not trigger monorepo detection, change the build, or leak a
route. Measured live, cache-busted, after the merge:

```
13/13 main routes            200
/this-main-page-does-not-exist 404, custom "Page not found"
/__journal-proof             404      ← proof app NOT served by main
/__journal-proof/nested      404
/journal                     404      ← still unclaimed
/proofs/journal-routing      404
PROOF-APP-MARKER on homepage 0 occurrences
sitemap                      1691, 0 proof URLs
search-index                 1691
animal-finder-index          642
IndexNow key                 200, correct body
```

The one thing to be aware of: the proof app's source is now public in the repo
and on `main`. It is inert and unroutable, but it is no longer a private
scratch artifact, and `proofs/journal-routing/README.md` documents its disposal.
