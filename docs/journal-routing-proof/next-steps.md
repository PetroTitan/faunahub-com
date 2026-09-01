# Unblocking the routing proof

Everything except the two platform questions is done. What is missing is
**permission to create a Vercel project**.

> **Superseded instructions below the fold.** The original plan was to deploy
> `proofs/journal-routing/` from the FaunaHub repo into a project named
> `faunahub-journal-proof`. That is no longer the shortest path:
> **`PetroTitan/faunahub-journal` now exists and is populated** with the same
> proof app at commit `61a0f9d`, at the repository root. Use Option 2 below.
> The copy at `proofs/journal-routing/` in the FaunaHub repo is now a reference
> copy only.

## Option 1 — grant the integration project-creation rights (preferred)

The Vercel MCP connection currently authenticates with read + deploy-to-existing
scope. Raising it to allow project creation on
`team_XVsatleKgqptkBkRWGq7L0Xs` lets the whole proof run unattended in one pass.

## Option 2 — create the project by hand (one import)

1. Vercel dashboard → **Add New… → Project** → import
   **`PetroTitan/faunahub-journal`** (private; already contains the proof app).
2. Keep the name **`faunahub-journal`**. Framework **Next.js**.
   **Root Directory: the repository root** — not a subdirectory.
3. Do **not** attach `faunahub.com`, and do **not** attach any custom domain.
   The proof runs on the Vercel-assigned hostname until routing is configured.
4. Deploy, then confirm
   `https://faunahub-journal.vercel.app/__journal-proof` renders the diagnostics
   table and contains `PROOF-APP-MARKER`.
5. Say so; the agent can then read deployments over MCP and drive Phase 4 onward.

The repo currently holds **only** the disposable proof app. It mounts
`/__journal-proof`, never `/journal`, so importing it claims no real path.

## Then: the microfrontends step, and its one real risk

Routing is declared in `microfrontends.json` **in the default application** —
i.e. in FaunaHub itself — and the docs state it "will take effect when the code
is merged and the deployment is live".

That is the crux. The routing cannot be exercised on the production domain
without shipping a config change to production. Two ways to handle it:

**A. Branch-preview first (recommended).** Push `microfrontends.json` on a
branch and test against the branch URL. Vercel documents branch URLs as
participating in microfrontends routing ("Branch URL or domain assigned to a Git
branch → the latest deployment for the matching Git branch"). Caveat measured on
2026-09-01: the `-git-<branch>-` preview host is **SSO-protected** (302 to
`vercel.com/sso-api`, `x-robots-tag: noindex`), so an authenticated fetch is
needed to read it.

**B. Production, with a disposable prefix.** Merge `microfrontends.json` routing
only `/__journal-proof/:path*`. Because path routing is an explicit allowlist and
"paths must uniquely map to one microfrontend", every existing FaunaHub path is
untouched by construction. The blast radius is one path that currently 404s.

**Whichever is chosen, it is a production-config decision and needs explicit
authorization.** This sprint did not take it.

## The exact checks to run once routing is live

```
# 1. Prefix pass-through — the blocking question.
#    Read the diagnostics table; compare x-matched-path against the public path.
/__journal-proof            → 200, marker present
/__journal-proof/nested     → 200, x-matched-path reveals pass-through vs strip
/__journal-proof/api/proof  → 200, JSON marker
/__journal-proof/feed.xml   → 200, XML
/__journal-proof/search-index.json → 200, JSON
/__journal-proof/nope       → 404, proof app's own not-found (NOT main's)

# 2. Asset composition — the other blocking question.
grep the served HTML for:  /_next/   /__journal-proof/_next/   vc-ap-
Every <script src> and <link href> must return 200 on a hard refresh
AND after a client navigation.

# 3. Canonical host, with the prefix.
www.faunahub.com/__journal-proof/nested
  → 301|308 → https://faunahub.com/__journal-proof/nested     (prefix preserved)
  NOT → /nested, NOT 200, NOT a *.vercel.app host

# 4. Infrastructure host must not leak.
No occurrence of faunahub-journal.vercel.app (or any *.vercel.app host) in
HTML, canonical, OG, JSON-LD or any feed.

# 5. Root namespace unchanged.
/sitemap.xml 1691 · /search-index.json 1691 · /animal-finder-index.json 642
/robots.txt Host: https://faunahub.com · IndexNow key 200

# 6. Main site regression — the 13-route sweep in results.md.

# 7. Deployment isolation.
Push a proof-app-only change → proof project deploys, faunahub-com does NOT.
Record both project names, deployment IDs and timestamps from list_deployments.
```

**Stale-edge rule.** Any check about to report a FAILURE must be repeated with
cache-busting (`?cb=<random>`) first. On 2026-09-01 a plain curl reported the old
404 and a 1688-URL sitemap while Vercel already showed the deployment READY. A
cache-busted success proves nothing extra; it only prevents a false negative.

## Cleanup when done

Remove the `__journal-proof` entry from `microfrontends.json`, delete the proof
app from `PetroTitan/faunahub-journal` (the repo then becomes the real Journal's
home), and delete the reference copy at `proofs/journal-routing/` in the FaunaHub
repo. Keep the Vercel project only if it is to become the real Journal project;
otherwise delete it. Nothing depends on any of them.
