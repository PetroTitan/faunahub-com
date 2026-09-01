# Public namespace and asset collisions

## Measured root namespace (2026-09-01)

Files physically in `public/`:

```
public/animal-finder-index.json     ← fetched by /animal-finder on mount
public/b8c42ce2723b2b6b2e3053c5279a91c9.txt   ← IndexNow key (root-scoped)
public/search-index.json            ← fetched by the search overlay on open
public/brand/
public/images/
```

Root paths additionally owned by route handlers: `/sitemap.xml`,
`/image-sitemap.xml`, `/robots.txt`.

## Why collision is structurally impossible, not merely avoided

Microfrontends path routing is an **explicit allowlist**, and overlapping paths
are rejected outright:

> "Conflicting or overlapping paths: Paths must uniquely map to one microfrontend"
> — https://vercel.com/docs/microfrontends/routing

The default application (main FaunaHub) keeps every path not listed in
`microfrontends.json`. With Journal routed only `"/journal/:path*"`, a request
for `/search-index.json` is never offered to Journal — even if the Journal repo
contains a file of that name. A stray file in Journal's `public/` is therefore
unreachable, not conflicting.

This inverts the usual risk. The danger is not Journal *overwriting* a main
asset; it is Journal shipping an asset that silently **404s** because its path
was never routed.

## The real gotcha: `public/` is not auto-prefixed

> "JavaScript and CSS URLs are automatically prefixed with the asset prefix, but
> content in the `public/` directory needs to be manually moved to a
> subdirectory with the name of the asset prefix."
> — https://vercel.com/docs/microfrontends/routing

So the platform solves `_next/static` (the collision that would otherwise break
both apps) and explicitly does **not** solve `public/`.

**Open question 4 in the ADR:** it is unclear whether that manual move is
required for files we intend to serve under `/journal/...`, which is already a
routed path. Two candidate layouts:

| | If prefixing is NOT required for routed paths | If prefixing IS required |
| --- | --- | --- |
| Journal search index | `/journal/search-index.json` | `/journal/<assetPrefix>/search-index.json` |
| Journal RSS | `/journal/rss.xml` | needs a route handler instead of `public/` |

A route handler (`app/journal/rss.xml/route.ts`) sidesteps the question
entirely, because it is a route, not `public/` content, and routes follow path
routing. **Recommendation: serve every machine-readable Journal artifact from a
route handler rather than from `public/`.** That makes the URLs predictable, keeps
them inside the routed prefix, and removes the dependency on an undocumented
detail. The prototype should still measure the `public/` behaviour so the choice
is informed rather than merely defensive.

## Rules for the Journal project

Binding, regardless of how the open question resolves:

1. Journal **must not** publish, at any root path: `search-index.json`,
   `animal-finder-index.json`, `sitemap.xml`, `image-sitemap.xml`, `robots.txt`,
   or any `*.txt` that looks like an IndexNow key.
2. Journal **must not** ship its own IndexNow key file. The root key is owned by
   main and already covers `/journal/*` (`indexnow.md`).
3. Every Journal-owned public URL lives under `/journal/`:
   ```
   /journal/                      hub
   /journal/<slug>                article
   /journal/sitemap.xml           route handler
   /journal/rss.xml               route handler
   /journal/feed.json             route handler
   /journal/search-index.json     route handler (see search-integration.md)
   /journal/images/*              images
   ```
4. Journal's `metadataBase` is `https://faunahub.com`, and every canonical it
   emits is an absolute apex URL. It must never self-canonicalise to
   `faunahub-journal.vercel.app`.
5. Journal must not serve a `robots.txt`. Robots is a root artifact owned by
   main; `/journal/robots.txt` is meaningless to crawlers and would only be
   confusing.
6. The asset prefix, once chosen, is fixed: "Changing the asset prefix is not
   guaranteed to be backwards compatible."

## Enforcement

`parity-tests.md` §Journal specifies a test that fails if any file appears in
Journal's `public/` root, and a cross-project production test that fetches each
root artifact and asserts it is still served by main (by content signature, e.g.
`sitemap.xml` containing `/animals/lion`).
