# Unblocking the routing proof

Everything except the two platform questions is done. The proof app is written,
built, locally verified and committed at `proofs/journal-routing/`. What is
missing is **permission to create a Vercel project**.

## Option 1 — grant the integration project-creation rights (preferred)

The Vercel MCP connection currently authenticates with read + deploy-to-existing
scope. Raising it to allow project creation on
`team_XVsatleKgqptkBkRWGq7L0Xs` lets the whole proof run unattended in one pass.

## Option 2 — create the project by hand (5 minutes)

1. Vercel dashboard → **Add New… → Project**.
2. Name it **`faunahub-journal-proof`**. Do **not** name it `faunahub-journal`;
   that name is reserved for the real thing.
3. Deploy the contents of `proofs/journal-routing/` (drag-drop, or link a repo
   with **Root Directory** = `proofs/journal-routing`).
4. Confirm `https://faunahub-journal-proof.vercel.app/__journal-proof` renders
   the diagnostics table.
5. Tell the agent the project exists; it can then read deployments over MCP and
   drive the rest.

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
No occurrence of faunahub-journal-proof.vercel.app in HTML, canonical, OG,
JSON-LD or any feed.

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

Delete the `faunahub-journal-proof` Vercel project, remove the
`__journal-proof` entry from `microfrontends.json`, and delete
`proofs/journal-routing/`. Nothing depends on any of them.
