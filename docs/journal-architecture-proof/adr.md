# ADR 001 — Serving FaunaHub Journal at `faunahub.com/journal/*`

- **Status:** Accepted (architecture only — nothing is routed, built or deployed)
- **Date:** 2026-09-01
- **Baseline:** `main` @ `61d64cf`, production `dpl_8JPkS12mxn7sWpUjp2apzxYJNSqh`
- **Scope:** how a second deployment unit may be served under the existing apex
  without weakening any current production invariant.

## Context

FaunaHub is one Next.js 15 app on one Vercel project, serving 1,691 indexed
pages from `https://faunahub.com`. It holds invariants that took real work to
establish and that are enforced by 350 tests — in particular an exact
sitemap ↔ search-index parity (1691 = 1691, both directions), and a test that
walks `src/app` on disk and fails the build if any static route ships
unsearchable.

Journal is wanted as an **independently deployable unit** so that publishing an
article does not rebuild 1,691 pages, and so its release cadence is decoupled.

The hard part is not rendering articles. It is that every invariant above is
written against a single build unit.

## Decision

**Adopt Vercel Microfrontends** (Option B). Route `/journal/:path*` to a second
Vercel project, `faunahub-journal`, via `microfrontends.json` owned by the main
project.

### Why not the alternatives

**Option A — external rewrite from main to the Journal deployment.**
Rejected. It is the hand-rolled version of what Microfrontends does properly.
It introduces a second outbound request per page view, requires naming a
`*.vercel.app` origin inside main's config, and — decisively — does nothing
about `_next/static` collisions between two Next apps, which we would then have
to solve manually with `assetPrefix`. Microfrontends routing "happens within the
same request… so there is no additional network hop"
(https://vercel.com/docs/microfrontends/routing) and auto-generates the asset
prefix.

**Option C — external reverse proxy (Cloudflare/nginx in front).**
Rejected. It buys nothing Vercel does not already provide, moves the canonical
host and caching story off-platform, and adds an operational component with its
own failure and rollback semantics. It would only be justified if we needed to
front non-Vercel origins, which we do not.

**Option D — keep Journal inside the main app (`src/app/journal/*`).**
Not adopted, but **explicitly retained as the fallback**, and it is a much
better fallback than it first appears. Every invariant stays intact for free:
`staticRoutes()` finds Journal routes, sitemap parity holds automatically, one
sitemap, one search index, one deploy, no `microfrontends.json`, no per-request
routing cost, no polyrepo config dependency. Its only real cost is that
publishing an article rebuilds the whole site and couples release cadence.
**If the prototype in Phase 10 fails on either open question below, this is the
answer, and it is not a defeat.**

## Canonical host — the risk this ADR exists for

If Journal became reachable at both `faunahub.com/journal/*` and
`www.faunahub.com/journal/*`, the site would be publishing a duplicate corpus
under a non-canonical host. Today that is prevented by a single
`next.config.ts` redirect belonging to the **main** project.

The documentation reviewed does **not** state whether microfrontends path
routing runs before or after a project's own deployment routes
(`vercel-routing-research.md` §5). If it runs first, main's redirect never
executes for `/journal/*` and the protection silently disappears for exactly the
new content — the worst possible failure shape, because the main site would
still look correct.

**We do not resolve this by inference. We make the answer irrelevant:**

1. **Platform layer (primary).** Configure `www.faunahub.com` with an explicit
   domain-level **Redirect to** `faunahub.com` in Project Settings → Domains.
   Vercel's own guidance is that the implicit behaviour is not enough: "For more
   robust protection, you should explicitly add this domain and redirect it"
   (https://vercel.com/docs/domains/working-with-domains/add-a-domain).
2. **Main app (keep).** Leave the existing `next.config.ts` host redirect exactly
   as it is. It costs nothing and covers the case where the platform rule is
   ever removed.
3. **Journal app (mandatory).** The Journal project must ship the *same* host
   redirect in its own `next.config.ts` from its first commit. This is the layer
   that holds regardless of routing order, because it lives in the app that
   actually receives the request.
4. **Test, don't trust.** A production check asserts
   `www.faunahub.com/journal/*` → 301/308 → apex, run after any routing change.
   See `parity-tests.md` §Cross-project.

Belt, braces, and a third belt. The redundancy is deliberate: the failure is
silent and SEO-destructive, and the cost of over-covering it is three lines of
config.

## Open questions the prototype must answer

These are **not** resolved by documentation and must not be assumed:

1. **Is the matched path passed through to the child app intact?**
   The docs describe which application handles a path, not whether the prefix is
   stripped. If `/journal/x` arrives at Journal as `/journal/x`, Journal needs
   `basePath: "/journal"` (or routes physically under `src/app/journal/*`). If it
   arrives as `/x`, `basePath` would be actively wrong. **Everything about
   Journal's route layout depends on this, so it is question one.**
2. **Where does microfrontends routing sit relative to deployment routes?**
   Mitigated by the belt-and-braces design above, but worth measuring so the
   mitigation is understood rather than superstitious.
3. **What status code does the domain-level redirect issue?** Undocumented in
   the pages reviewed. Must be 301 or 308 to be safe for SEO.
4. **Does `public/` content need the asset-prefix subdirectory even when it is
   already under a routed path?** The docs say `public/` must be "manually moved
   to a subdirectory with the name of the asset prefix". It is unclear whether
   that applies to files we intend to serve at `/journal/...` — a path already
   routed to Journal. This decides the real URL of
   `/journal/search-index.json`, so it gates `search-integration.md`.

## Consequences

**Accepted:**
- Main gains `microfrontends.json`, and one line in `robots.txt` at Journal launch.
- A routing change is a *main-project* deploy, so a bad route is rolled back by
  rolling back main.
- Routing is metered on Pro ($2 / 1M requests, no included allowance).
- Journal in a separate repo makes its build depend on `microfrontends.json`
  being pulled (`vercel microfrontends pull` / `VC_MICROFRONTENDS_CONFIG`), and
  a build fails outright without it. A monorepo avoids this.

**Preserved:**
- Root namespace is safe *by construction*, not convention: path routing is an
  explicit allowlist and "paths must uniquely map to one microfrontend", so
  Journal is never asked to serve `/sitemap.xml`, `/robots.txt`,
  `/search-index.json` or the IndexNow key.
- The IndexNow key stays solely owned by main and, being at the host root,
  already authorises `/journal/*` (`indexnow.md`).
- No existing test is weakened; they are re-scoped to "main-owned corpus" and
  joined by new Journal-side and cross-project checks (`parity-tests.md`).

**New risk to carry:** `faunahub-com.vercel.app` already serves the production
site at 200 with no `noindex`, protected only by absolute canonicals. Journal
will get `faunahub-journal.vercel.app` with the same shape. Journal must
therefore hardcode `metadataBase`/canonical to `https://faunahub.com/journal/…`
from commit one, and must never emit a self-referential canonical on its
deployment host.

## Verdict

**SAFE TO PROTOTYPE**

The mechanism is officially supported and generally available; the plan is
within the team's existing Pro allowance; root-namespace collisions are
structurally excluded; IndexNow ownership is proven from the spec; and the one
genuinely dangerous failure mode — duplicate-host indexing of `/journal/*` — has
a three-layer mitigation that does not depend on the undocumented ordering.

This authorises a **local, non-production** prototype to answer the four open
questions. It does **not** authorise creating the Vercel project, registering
routing, or serving anything at `faunahub.com/journal/*`.
