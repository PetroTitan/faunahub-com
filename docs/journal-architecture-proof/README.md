# FaunaHub Journal — architecture proof

Docs-only sprint. Nothing is routed, built, deployed or submitted. `/journal`
remains unclaimed and returns 404 in production.

Read in this order:

| Document | Answers |
| --- | --- |
| [`baseline.md`](baseline.md) | What is true today, measured on 2026-09-01 |
| [`vercel-routing-research.md`](vercel-routing-research.md) | What the official docs say, with citations — and what they do not say |
| [`adr.md`](adr.md) | The decision, the rejected options, and the verdict |
| [`prototype-findings.md`](prototype-findings.md) | What a local prototype measured, and what it could not |
| [`public-namespace.md`](public-namespace.md) | Asset and root-path collision rules |
| [`indexnow.md`](indexnow.md) | Key ownership across two deployment units |
| [`sitemap-strategy.md`](sitemap-strategy.md) | Two sitemaps, and why not a sitemap index |
| [`search-integration.md`](search-integration.md) | Global Search yes, Animal Finder no |
| [`parity-tests.md`](parity-tests.md) | How the invariants survive the split |

**Verdict:** SAFE TO PROTOTYPE on Vercel. Two blocking questions remain and are
listed at the end of `prototype-findings.md`; both need a real Vercel project
and neither is answerable from documentation or locally.
