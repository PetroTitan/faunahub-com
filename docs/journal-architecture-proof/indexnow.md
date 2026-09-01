# IndexNow ownership across two deployment units

## Current state (measured 2026-09-01)

```
https://faunahub.com/b8c42ce2723b2b6b2e3053c5279a91c9.txt
  HTTP 200 · 0 redirects · text/plain; charset=utf-8
  32 bytes, no trailing newline, body === filename stem, no HTML
```

Owned by the main project as `public/b8c42ce2723b2b6b2e3053c5279a91c9.txt`.
Last submission: 18 URLs, `api.indexnow.org/indexnow`, HTTP 200 batch accepted.

## The question

Can a second deployment unit submit `https://faunahub.com/journal/<slug>` using
a key file it does not own and cannot serve?

## Proven from the protocol spec — yes

IndexNow scopes a key by **where the key file sits on the host**:

> Option 1: "You must host a UTF-8 encoded text key file `{your-key}.txt`
> listing the key in the file at the root directory of your website."
>
> Option 2: "one to many UTF-8 encoded text key files in other locations within
> the same host" — and such a key is scoped: "A key file located at
> `http://example.com/catalog/key12457EDd.txt` can include any URLs starting
> with `http://example.com/catalog/` but cannot include URLs starting with
> `http://example.com/help/`."
> — https://www.indexnow.org/documentation

FaunaHub's key is at the **root** of the apex. Under Option 1 it authorises
**every** URL on `faunahub.com`, `/journal/*` included. Ownership is by *host*,
not by Vercel project.

## Decision

- The key stays **solely owned by main**, at the apex root. Journal ships no key.
- A Journal submitter sends:
  ```json
  {
    "host": "faunahub.com",
    "key": "b8c42ce2723b2b6b2e3053c5279a91c9",
    "keyLocation": "https://faunahub.com/b8c42ce2723b2b6b2e3053c5279a91c9.txt",
    "urlList": ["https://faunahub.com/journal/<slug>", "…"]
  }
  ```
  `keyLocation` is optional under Option 1 but is stated explicitly so the
  contract is visible at the call site.
- Rejected alternative: a second key at `/journal/key.txt`. It would work (Option
  2 scopes it to `/journal/`, which is exactly Journal's corpus) but it adds a
  second credential-shaped artifact and a second thing to keep live, for no gain.

## Secrecy posture — stated precisely

The spec says: *"Only you and the search engines should know the key and your
file key location."* That sits in tension with the file being publicly fetchable,
which it must be for verification to work. The honest description:

- It is a **public verification token**, not a secret. Its whole function is to
  be readable at the host it authorises.
- It is **not** in the class of private API secrets the repo scans for.
  Committing it exposes nothing; the repo's own commit adding it says so.
- It must never be treated as an access credential, and no private key exists to
  leak. The repo's secret scan targets the WebmasterID private-key prefix and
  must keep returning zero — including across these documents, which therefore
  never quote that prefix literally.

## Rules for Journal's submitter

1. **Never** submit a `*.vercel.app` URL. Every submitted URL must begin
   `https://faunahub.com/journal/`. Enforced by a test, not by review.
2. Submit only apex URLs — never `www.`, never with a query string or fragment.
3. Submit only URLs present in Journal's own sitemap at submission time.
4. Submit only **changed** URLs. Never the whole corpus, never the sitemap URL
   itself as a proxy for "everything".
5. **IndexNow failure must never fail a Journal deployment.** Submission is a
   post-deploy side effect: non-blocking, no retry storm, log and move on. A
   search-engine endpoint being down is not a reason to hold a publish.
6. Record for every submission: endpoint, URL count, HTTP status, response body.
   Report the batch status honestly — IndexNow returns **one status for the
   batch and no per-URL breakdown**, so "0 rejected" may only ever mean "the
   batch was accepted", never "18 URLs were individually confirmed".
7. Submission is a deliberate, authorised step. Nothing auto-submits on merge
   without an explicit decision.

## Not done in this sprint

No URL was submitted. No key was rotated, moved or duplicated.
