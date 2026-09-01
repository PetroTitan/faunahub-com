# Journal routing proof app — inert, not part of the FaunaHub build

A minimal, disposable Next.js app used to measure how a mounted path prefix
behaves. It is **not** FaunaHub Journal and contains no article content.

## It does not participate in the FaunaHub build

Verified on 2026-09-01 with this directory present:

| Gate | Result |
| --- | --- |
| `npx tsc --noEmit` | exit 0 |
| `npm run test` | 350/350 |
| `npm run build` | exit 0, **859 routes** (unchanged), 0 proof routes emitted |
| `npm run lint` | clean |

The root `package.json` declares **no `workspaces` field**, so `npm install`
never reaches the `package.json` in this directory. Next.js compiles only
`src/app`. Nothing here is deployed by the FaunaHub project.

## What it is for

`basePath: "/__journal-proof"` with routes at the app root — the layout
`docs/journal-architecture-proof/prototype-findings.md` identified as correct.
It carries a server-rendered diagnostics table that prints the routing headers
the app actually receives, which is the instrument for the one question that
still needs a real Vercel deployment: does microfrontends routing pass the
mounted prefix through, or strip it?

## To run it locally

```bash
cd proofs/journal-routing
npm install
npm run build && npm run start        # http://localhost:3000/__journal-proof
```

## To deploy it (requires project-creation access, which this session lacked)

Deploy as its own Vercel project named `faunahub-journal-proof`, target
`preview`. Then follow `docs/journal-routing-proof/next-steps.md`.

**Never** deploy this into the `faunahub-com` project, and never mount it at
`/journal`. The real prefix stays unclaimed until the architecture is proven.

## Disposal

Delete this directory and the Vercel project once the routing questions are
answered. Nothing depends on it.
