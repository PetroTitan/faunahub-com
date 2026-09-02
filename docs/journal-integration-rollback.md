# Rolling back the `/journal` integration

**Written before the integration ships, which is the only useful time to write
it.** As of 2026-09-02 nothing is integrated: `faunahub.com/journal` returns
**404**, `microfrontends.json` does not exist, and there is nothing to undo.
This document exists so that the undo is already decided when it is needed.

## What the integration will consist of

Exactly two things in the main repository:

1. `microfrontends.json` routing `"/journal/:path*"` to the `faunahub-journal`
   project.
2. One line in `src/app/robots.ts` advertising
   `https://faunahub.com/journal/sitemap.xml`.

Nothing else in the main app changes. There is deliberately no `src/app/journal`
route, so the main build has no knowledge of the Journal at all. Navigation
links (header, mobile, footer, search discovery) are a **separate** change and
are listed separately below, because they must be reverted first.

## Rollback, in order

Reverting navigation before routing matters: a visible "Journal" link pointing
at a 404 is worse than no link, so the link must go before the route does.

```bash
# 1. Remove the navigation links (header, mobile, footer, search discovery).
git revert --no-edit <nav-commit>

# 2. Remove the routing entry.
#    Either delete microfrontends.json, or delete only the "/journal/:path*"
#    entry from it if other paths are routed by then.
git revert --no-edit <routing-commit>

# 3. Remove the Journal sitemap line from robots.ts if it was added.
git revert --no-edit <robots-commit>

git push origin main    # Vercel redeploys production automatically
```

If speed matters more than history, Vercel **Instant Rollback** on the
`faunahub-com` project restores the previous production deployment immediately;
the git revert can follow.

## What rollback must restore

| Check | Expected after rollback |
| --- | --- |
| `https://faunahub.com/journal` | **404** |
| `https://faunahub.com/journal/anything` | **404** |
| `https://faunahub.com/sitemap.xml` | 1691 `<loc>`, unchanged |
| `https://faunahub.com/search-index.json` | 1691 documents, unchanged |
| `https://faunahub.com/animal-finder-index.json` | 642 documents, unchanged |
| `https://faunahub.com/b8c42ce2723b2b6b2e3053c5279a91c9.txt` | 200, body equals the key |
| `https://faunahub.com/robots.txt` | `Host: https://faunahub.com`, Journal sitemap line gone |
| 13-route main sweep | all 200 |
| `https://faunahub.com/this-page-does-not-exist` | 404, custom "Page not found" |
| Header / mobile nav / footer | no "Journal" link anywhere |

**Verify every one of those cache-busted** (`?cb=<random>`). On 2026-09-01 a
plain curl reported a stale 404 and a stale sitemap count while Vercel already
showed the deployment READY. A cache-busted success proves nothing extra; it
only prevents a false negative. Never declare a rollback incomplete on a single
cached read.

## What rollback must NOT touch

- **The `faunahub-journal` Vercel project and repository.** They are a separate
  deployment unit. Removing main's routing makes them unreachable at
  `faunahub.com/journal`; it does not un-deploy them, and it must not.
- **The IndexNow key.** Root-owned by main, unrelated to Journal routing.
- **The main sitemap, search index or Animal Finder index.** None of them ever
  contain a `/journal` URL, by design — that is what keeps main's parity tests
  exact. If a rollback changes any of these counts, something was wired wrong
  and the diff needs reading, not re-reverting.
- **`www → apex` canonical-host behaviour.** Enforced independently of Journal.

## If IndexNow URLs were already submitted

Nothing to undo, and no action to take. IndexNow has no withdrawal mechanism.
Submitted `/journal/*` URLs will be crawled, found to 404, and dropped. That is
the ordinary handling of a removed page and needs no intervention — which is
precisely why submission comes only **after** production verification, never
before.

## Rollback triggers

Roll back immediately, without debate, if production shows any of:

- `faunahub.com/journal/*` redirecting to a `*.vercel.app` host;
- `www.faunahub.com/journal/*` serving **200** instead of redirecting to apex;
- `www.faunahub.com/journal/x` redirecting to `faunahub.com/x` — prefix dropped;
- any main route regressing from 200, or the custom 404 breaking;
- the main sitemap, search index or finder index count changing;
- Journal assets 404ing, or colliding with the main app's root `/_next/*`;
- an infrastructure hostname appearing in any canonical, OG tag, JSON-LD or feed.
