# Go / no-go

**Verdict: routing proof NOT completed. Journal build stays blocked — on access,
not on architecture.**

Nothing was discovered that argues against the design. The experiment could not
be run: creating the disposable Vercel project returned
`403 forbidden — "You don't have permission to create a project."` on both
available paths, and no CLI or token exists in this environment as an alternative.

## The eleven questions

| # | Question | Answer |
| --- | --- | --- |
| 1 | Does Microfrontends pass or strip the prefix? | **UNKNOWN — blocked.** Needs two real projects. |
| 2 | Does the auto asset prefix compose with `basePath`? | **UNKNOWN — blocked.** `basePath` alone namespaces `_next/static` correctly; composition untested. |
| 3 | Should the real Journal use `basePath: "/journal"`? | **Yes.** Proven on two independently built apps. |
| 4 | Should Journal routes live at the app root? | **Yes.** Routes under `src/app/journal/` double-prefix to `/journal/journal/…`. |
| 5 | Is `assetPrefix` needed? | **No, do not set it manually.** `basePath` covers `_next`, and `withMicrofrontends` supplies its own. Setting a third is how the composition breaks. |
| 6 | How must `www → apex` be enforced? | **Three layers.** Platform domain redirect + main's existing rule + the Journal app's own rule. The third is proven to work and preserve the prefix; it is the one that holds regardless of routing order. `destination` **must** re-state the prefix. |
| 7 | Can the root IndexNow key stay main-owned? | **Yes.** Proven from the spec: a key at the host root authorises every URL on that host. Unchanged by this sprint. |
| 8 | Can machine-readable files live under `/journal/*` route handlers? | **Yes.** `/…/feed.xml`, `/…/search-index.json` and `/…/api/proof` all serve correctly as route handlers under a `basePath`, with `X-Robots-Tag` applied. This avoids the `public/` asset-prefix caveat entirely. |
| 9 | Does the split preserve main sitemap/search parity? | **Yes, by construction — and unverified under real routing.** Corpora stay disjoint, so no main test weakens. Production is still exactly 1691 = 1691. |
| 10 | What exact launch changes are required? | See `next-steps.md`. Shortest path: `microfrontends.json` in main routing only the disposable prefix; one `robots.txt` line at real launch. |
| 11 | What must not be done? | Do not deploy the proof into `faunahub-com`. Do not mount anything at `/journal` until Q1 and Q2 are answered. Do not set a manual `assetPrefix`. Do not add proof paths to any sitemap, feed or index. Do not submit any proof URL to IndexNow. |

## What this sprint did establish

- The correct route layout, twice, on real builds.
- That a `basePath` app serves pages, nested pages, JSON and XML route handlers,
  a `public/` asset and a real 404 under a mounted prefix, with nothing leaking
  outside it.
- That the child app can enforce the canonical host itself, prefix intact — and
  the exact way that redirect is written wrong.
- That the proof app is unindexable on every response.
- That production is untouched: 13 routes 200, custom 404 live, 1691/1691/642
  unchanged, `/journal` and `/__journal-proof` both still 404.

## What it did not

Anything requiring Vercel's routing network. Those results are absent, not
inferred, and no claim in this document depends on them.
