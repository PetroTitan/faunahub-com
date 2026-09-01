# Baseline — Vercel routing proof sprint

Measured 2026-09-01, before anything was attempted.

| Fact | Value |
| --- | --- |
| `origin/main` | `61d64cf` (unmoved during this sprint) |
| Branch cut from | `origin/main` |
| Working tree at cut | clean |
| Architecture proof branch | `proof/faunahub-journal-architecture` @ `fab1960` (pushed, unmerged) |
| `vercel.json` | absent |
| `basePath` / `assetPrefix` in main | not set |
| `middleware.ts` | absent |
| Canonical host rule | `next.config.ts` `redirects()`, `source: "/:path*"`, `has: host=www.faunahub.com`, 301 to apex |

## Path availability

| Path | On disk | Live |
| --- | --- | --- |
| `/journal` | absent | **404** |
| `/__journal-proof` | absent | **404** |

Both were still 404 at the end of the sprint. Neither was claimed.

## Production corpus (live, cache-busted)

| Artifact | Value |
| --- | --- |
| `sitemap.xml` | **1691** `<loc>` |
| `search-index.json` | **1691** documents |
| `animal-finder-index.json` | **642** documents |
| IndexNow key at apex root | 200, body `b8c42ce2723b2b6b2e3053c5279a91c9` |
| `robots.txt` | `Host: https://faunahub.com` |

## Tooling available to this session

| Tool | State |
| --- | --- |
| `vercel` CLI | **not installed** |
| `gh` CLI | **not installed** |
| `VERCEL_TOKEN` env | unset |
| Vercel MCP | connected — **read + deploy-to-existing only** |

The last row is what decided the outcome of this sprint. See `results.md`.
