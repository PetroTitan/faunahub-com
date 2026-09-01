# Sitemap strategy

## The invariant at stake

Measured 2026-09-01: production `sitemap.xml` = **1691** `<loc>`,
`search-index.json` = **1691** documents, **0** discrepancies in either
direction. Enforced by `tests/scientific-names.test.ts`:

> `every sitemap url is searchable, and every searchable page bar /search is submitted`

A second build unit breaks this the moment it publishes a page, because main
cannot see Journal's routes.

## Decision — Strategy A: two sitemaps advertised in `robots.txt`

```
https://faunahub.com/sitemap.xml          ← main, unchanged, 1691 URLs
https://faunahub.com/image-sitemap.xml    ← main, unchanged
https://faunahub.com/journal/sitemap.xml  ← Journal-owned, new
```

**Why A over B (sitemap index).** The site already advertises multiple sitemaps
in `robots.txt` — `sitemap.xml` *and* `image-sitemap.xml`. Adding a third
follows the existing, working convention exactly. Strategy B would require
restructuring main's `sitemap.xml` from a URL set into an index, plus a new
`/sitemap-main.xml`, i.e. rewriting a verified artifact and its parity tests to
gain one entrypoint. Search engines accept multiple `Sitemap:` directives; the
sitemap index solves a problem (a 50k-URL cap, many files) that FaunaHub does
not have at 1,691.

**Why not C (main pulls a Journal feed).** Rejected on the stated grounds: it
either couples main's rebuild to Journal's publish cadence — defeating the whole
point of the split — or introduces a runtime fetch into a static sitemap, which
turns a build artifact into a availability dependency.

## Ownership and lifecycle

| | Main sitemap | Journal sitemap |
| --- | --- | --- |
| URL | `/sitemap.xml` | `/journal/sitemap.xml` |
| Owner | `faunahub-com` | `faunahub-journal` |
| Generated | `src/app/sitemap.ts` at build | Journal route handler at build |
| Updates when | main deploys | **Journal deploys only** |
| Contains | main-owned corpus only; **never** `/journal/*` | Journal-owned corpus only; **never** a main URL |
| Count today | 1691 | 0 (does not exist) |

Main's sitemap does **not** gain `/journal/*` URLs — not even `/journal` itself.
Keeping the two corpora disjoint is what lets each parity test stay exact.

**One-time coupling, accepted:** main's `robots.ts` gains a single line at
Journal launch. That is a one-off main deploy, not a per-article one.

## robots.txt

```ts
sitemap: [
  "https://faunahub.com/sitemap.xml",
  "https://faunahub.com/image-sitemap.xml",
  "https://faunahub.com/journal/sitemap.xml",   // added at Journal launch
],
host: "https://faunahub.com",
```

`disallow` is unchanged. `/journal/*` is crawlable. Journal must **not** serve
its own `robots.txt`.

**Ordering rule:** the `robots.txt` line is added only *after* Journal is live
and `/journal/sitemap.xml` returns 200. Advertising a 404 sitemap is a
self-inflicted crawl error.

## Search Console

- Submit `https://faunahub.com/journal/sitemap.xml` as a **separate** sitemap in
  the existing `faunahub.com` property. No new property: same host, same
  ownership.
- Per-sitemap coverage reporting then separates Journal indexation from the
  animal corpus, which is a genuine reporting benefit of Strategy A over an index.
- Submission is manual and explicitly authorised — not part of any deploy.

## Failure modes

| Failure | Effect | Response |
| --- | --- | --- |
| Journal deploy broken, `/journal/sitemap.xml` 404s | Crawl error on one sitemap; main's 1691 unaffected | Instant Rollback of the Journal project only |
| Journal sitemap contains a main URL | Duplicate submission across sitemaps | Journal-side test forbids any non-`/journal/` URL |
| Main sitemap grows a `/journal/*` URL | Both sitemaps claim it; main rebuilds per article | Main-side test forbids `/journal` in `sitemap.ts` except none |
| `robots.txt` advertises the Journal sitemap before launch | Crawler fetches a 404 | Ordering rule above; the line ships in the launch deploy |
| Journal routing removed but robots line remains | Advertised sitemap 404s | Rollback checklist includes removing the robots line |

## Rollback

Journal sitemap disappearing is **not** a main-site incident. Main's
`sitemap.xml` is untouched by any Journal state. The worst case is one 404
sitemap in Search Console, cleared by rolling back Journal or removing one line
from main's robots.
