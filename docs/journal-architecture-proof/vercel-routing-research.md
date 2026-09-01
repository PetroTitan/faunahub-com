# Vercel routing research

Consulted 2026-09-01 against current official documentation. Every behavioural
claim below cites the page it came from. Where the docs do **not** answer a
question, that is said plainly rather than filled in from recollection.

## Sources

- Microfrontends — https://vercel.com/docs/microfrontends
- Microfrontends Routing — https://vercel.com/docs/microfrontends/routing
- Routing (layer order) — https://vercel.com/docs/routing
- Adding & Configuring a Custom Domain — https://vercel.com/docs/domains/working-with-domains/add-a-domain
- Deploying & Redirecting Domains — https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting
- IndexNow protocol documentation — https://www.indexnow.org/documentation

## 1. Microfrontends is the officially supported mechanism

> "Microfrontends allow you to split a single application into smaller,
> independently deployable units that render as one cohesive application for
> users. Different teams using different technologies can develop, test, and
> deploy each microfrontend while Vercel handles connecting the microfrontends
> and routing requests on the global network."
> — https://vercel.com/docs/microfrontends

It is generally available, not beta (changelog: "Microfrontends now generally
available"), and explicitly supports our repository shape:

> "Microfrontends work the same whether you keep your applications in one
> repository (a monorepo) or spread them across several (a polyrepo). The
> microfrontends group, path routing, and production routing behave identically
> in both cases. Each application is its own Vercel project and deploys on its
> own, no matter where its code lives."
> — https://vercel.com/docs/microfrontends

**Polyrepo caveat that would bite us.** FaunaHub Journal in a *separate*
repository is a polyrepo:

> "In a polyrepo, the configuration lives in only one repository, so each other
> application needs its own access to it. This applies at build time as well as
> locally: a polyrepo application whose build can't find `microfrontends.json`
> fails with a build error. Pull the configuration into the application with
> `vercel microfrontends pull` or set `VC_MICROFRONTENDS_CONFIG`."
> — https://vercel.com/docs/microfrontends

So a separate Journal repo adds a build-time dependency on `microfrontends.json`.
A monorepo avoids it. This is a real input to the repo-layout decision.

## 2. Routing is in-network, not a proxy hop

> "When Vercel receives a request to a domain that uses microfrontends, it reads
> the `microfrontends.json` file in the live deployment to determine which
> application handles the path. This happens within the same request. **It is
> not a rewrite that results in a second outbound request to the child
> application's URL, so there is no additional network hop.**"
> — https://vercel.com/docs/microfrontends/routing

This is the decisive advantage over a hand-rolled external rewrite: no proxy
latency, and no infrastructure hostname in the request path.

## 3. Path routing configuration

```json filename="microfrontends.json"
{
  "$schema": "https://openapi.vercel.sh/microfrontends.json",
  "applications": {
    "web": {},
    "docs": { "routing": [ { "paths": ["/docs/:path*", "/new-path-to-route"] } ] }
  }
}
```
— https://vercel.com/docs/microfrontends/routing

Supported expressions include `/prefix/:path*` (zero or more trailing segments).
Explicitly **not** supported:

> "Conflicting or overlapping paths: Paths must uniquely map to one microfrontend"

**Consequence for us, and it is the good kind.** Routing is an explicit
allowlist. The default application keeps every path not listed. Journal cannot
accidentally serve `/search-index.json`, `/sitemap.xml`, `/robots.txt` or the
IndexNow key, because those paths are never routed to it. Root-namespace
collision is structurally impossible rather than merely avoided by convention.

An official unit-test helper exists for this:

> "To assert whether the path expressions will work for your path, use the
> `validateRouting` test utility to add unit tests that ensure paths get routed
> to the correct microfrontend."

## 4. Asset prefixing — automatic for JS/CSS, manual for `public/`

> "An *asset prefix* is a unique prefix prepended to paths in URLs of static
> assets, like JavaScript, CSS, or images. This is needed so that URLs are
> unique across microfrontends and can be correctly routed to the appropriate
> project. Without this, these static assets may collide with each other and not
> work correctly."
>
> "When using `withMicrofrontends`, a default auto-generated asset prefix is
> automatically added. The default value is an obfuscated hash of the project
> name, like `vc-ap-b3331f`, in order to not leak the project name to users."
> — https://vercel.com/docs/microfrontends/routing

And the gotcha that matters most for FaunaHub:

> "### Next.js
> JavaScript and CSS URLs are automatically prefixed with the asset prefix, but
> **content in the `public/` directory needs to be manually moved to a
> subdirectory with the name of the asset prefix.**"
> — https://vercel.com/docs/microfrontends/routing

So `_next/static` collisions are solved by the platform. `public/` files are
**not**. Journal's `search-index.json`, feeds and images are `public/` content
and must be placed deliberately. See `public-namespace.md`.

Also noted:

> "Changing the asset prefix is not guaranteed to be backwards compatible."

→ choose a human-readable prefix once, before launch, or accept the generated hash.

## 5. Routing layer order — partially documented

> "Requests flow through multiple routing layers in a fixed order. Each layer
> can modify, redirect, or terminate the request before it reaches the next
> step.
>
> **Project Routes** are project-level routing rules you configure from the
> dashboard or API. They run after bulk redirects and before your deployment's
> own routes."
> — https://vercel.com/docs/routing

Established order: **bulk redirects → project routes → deployment routes**.
A Next.js `redirects()` entry compiles into that last layer (the deployment's
own routes).

### UNRESOLVED, and load-bearing

The documentation reviewed does **not** state where microfrontends path routing
sits relative to a project's *deployment routes*. That single ordering question
decides whether the main project's `www → apex` redirect still runs for a path
that microfrontends routing assigns to Journal.

We do not resolve it by inference. The architecture is designed so that the
answer does not matter — see `adr.md` §Canonical host — and a production test is
specified to confirm the real behaviour once a prototype exists.

## 6. Domain-level redirect exists and is independent of project code

> "You can add domain redirects from the **Domains** section in the sidebar when
> more than one domain is present in the project. This provides a way to, for
> example, redirect a `www` **subdomain** to an **apex domain** […] To add a
> redirect, open **Domains** in the sidebar within **Project Settings**, then
> select **Edit** on the domain you want to redirect from. Use the **Redirect
> to** dropdown to select the domain you want to redirect to."
> — https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting

And on relying on Vercel's implicit behaviour:

> "If a user visits your domain with or without the 'www' subdomain prefix, we
> will attempt to redirect automatically. You might still want to add this
> redirect explicitly."
>
> "For more robust protection, you should explicitly add this domain and redirect it."
> — https://vercel.com/docs/domains/working-with-domains/add-a-domain

The docs do **not** state the status code the domain-level redirect issues, and
we have not verified it. Recorded as unknown.

## 7. Deployment selection, rollback and failure isolation

> "Domains assigned to the production environment always route to each project's
> current production deployment. […] If you roll back a microfrontend project,
> microfrontends routing uses the rollback deployment."
> — https://vercel.com/docs/microfrontends/routing

Each project is rolled back independently via Instant Rollback. A Journal
rollback does not touch the main site. Routing changes themselves live in
`microfrontends.json` in the default app, so a bad routing change is reverted by
rolling back the **main** project — meaning a routing mistake is a main-site
event, which is worth knowing before adopting it.

> "Changes to separate microfrontends are not rolled out in lockstep. If you
> need to modify `microfrontends.json`, make sure that the new application can
> handle the requests before merging the change."

## 8. Pricing

> "Hobby and Pro include two microfrontend projects. […] Additional
> Microfrontends Projects — $250/project/month"
>
> Included Microfrontends Routing: Hobby 50K requests/month, **Pro N/A**;
> Additional: **$2 per 1M requests**.
> — https://vercel.com/docs/microfrontends

This team is on **pro**. Main + Journal = 2 projects = within the included
allowance. Routing is metered on Pro with no included tier: at FaunaHub's
current traffic this is effectively zero, but it is a real per-request line item
and should be acknowledged, not discovered later.

## 9. IndexNow key scope

> Option 1: "You must host a UTF-8 encoded text key file `{your-key}.txt` […] at
> the root directory of your website."
>
> Option 2 (key in a subdirectory) scopes the key: "A key file located at
> `http://example.com/catalog/key12457EDd.txt` can include any URLs starting
> with `http://example.com/catalog/` but cannot include URLs starting with
> `http://example.com/help/`."
> — https://www.indexnow.org/documentation

FaunaHub's key is at the **root** of the apex, so it authorises **every** URL on
`faunahub.com`, `/journal/*` included. This is proven from the spec, not assumed.
See `indexnow.md`.
