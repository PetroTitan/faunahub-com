# Prototype findings — measured, with limits stated

A throwaway Next.js 15.5.18 app was built and served locally to answer what can
be answered locally. It lived at
`<scratchpad>/journal-proof`, was never committed, never deployed, and no Vercel
project was created. It is deleted.

## What a local prototype CAN and CANNOT prove

**Cannot.** Microfrontends path routing happens in Vercel's network — "Vercel
makes both routing decisions in its network infrastructure"
(https://vercel.com/docs/microfrontends/routing). ADR open question 1 (does the
matched path reach the child app intact, or is the prefix stripped?) is
therefore **not answerable locally** and remains open. Everything below assumes
the path arrives intact, which is the case `basePath` is designed for.

**Can.** Whether `basePath` produces the namespace the architecture needs, and
whether the Journal app can enforce the canonical host by itself.

## Finding 1 — `basePath` and a `src/app/journal/` directory are mutually exclusive

First attempt used **both** `basePath: "/journal"` and routes at
`src/app/journal/hello`. Result:

```
/journal/hello           404
/journal/journal/hello   200   ← double prefix
```

The prefix is applied to routes that are already nested, silently. This is the
kind of mistake that looks like a routing bug and is actually a layout bug.

**Correct layout — measured:**

| | Route files | Public URL |
| --- | --- | --- |
| ✅ chosen | `src/app/hello/page.tsx` + `basePath: "/journal"` | `/journal/hello` |
| ✅ alternative | `src/app/journal/hello/page.tsx`, **no** `basePath` | `/journal/hello` |
| ❌ | `src/app/journal/hello` **+** `basePath` | `/journal/journal/hello` |

Verified with the correct layout:

```
/journal/hello           200
/journal/sitemap.xml     200
/journal/journal/hello   404   ← double prefix gone
/hello                   404   ← nothing leaks outside the prefix
```

**Recommendation: `basePath: "/journal"` with routes at the app root.** It makes
the prefix a single declared fact instead of a directory convention every future
file must remember, and a route accidentally created outside the prefix becomes
impossible rather than merely discouraged.

## Finding 2 — `basePath` namespaces `_next/static` automatically

Emitted markup on `/journal/hello`:

```html
<script src="/journal/_next/static/chunks/73f50b84-….js">
<script src="/journal/_next/static/chunks/102-….js">
<link  href="/journal/_next/static/chunks/webpack-….js">
```

All returned **200**. No asset is requested from `/_next/*`, so there is no
overlap with the main project's asset namespace at the Next layer.

**Caveat, unresolved:** Vercel's microfrontends adds its *own* asset prefix
(`vc-ap-<hash>`) via `withMicrofrontends`. Whether that composes with, replaces,
or conflicts with a `basePath` is **not documented in the pages reviewed and not
tested here**. Two prefixing mechanisms aimed at the same problem is precisely
where a subtle breakage would live. The Vercel-side prototype must check the
emitted asset URLs with both enabled before any launch.

## Finding 3 — the Journal app can enforce the canonical host by itself

ADR mitigation layer 3, tested directly against the prototype:

```
Host: www.faunahub.com  GET /journal/hello
→ HTTP/1.1 301 Moved Permanently
→ location: https://faunahub.com/journal/hello
```

The `/journal` prefix is preserved and the destination is the apex. This is the
layer that holds **regardless** of where microfrontends routing sits relative to
main's deployment routes, because it executes inside the app that receives the
request. Config used:

```ts
async redirects() {
  return [{
    source: "/:path*",
    has: [{ type: "host", value: "www.faunahub.com" }],
    destination: "https://faunahub.com/journal/:path*",
    statusCode: 301,
  }];
}
```

Note `destination` must include `/journal` — with `basePath` set, `source` is
matched *inside* the base path, so a naive copy of main's rule would redirect
`/journal/hello` to `https://faunahub.com/hello`. Measured, not assumed.

## Finding 4 — canonical and metadataBase behave as required

`metadataBase: new URL("https://faunahub.com")` plus an explicit
`alternates.canonical` emitted:

```html
<link rel="canonical" href="https://faunahub.com/journal/hello"/>
```

An absolute apex URL, which is what protects Journal from the
`faunahub-journal.vercel.app` duplicate-host exposure described in the ADR.

## Finding 5 — `/journal` itself needs an explicit route

`/journal` returned 404 until an index route exists. With `basePath`, that is
`src/app/page.tsx`. Obvious in hindsight; worth writing down because the hub URL
is the one most likely to be linked from main.

## Still open after this prototype

1. Does microfrontends routing pass `/journal/x` through intact? **(blocking)**
2. Do `withMicrofrontends`' asset prefix and `basePath` compose? **(blocking)**
3. Where does microfrontends routing sit relative to deployment routes?
   (mitigated by Finding 3, still worth measuring)
4. What status code does the domain-level redirect issue?

1 and 2 require a real Vercel project and are the content of the next sprint.
