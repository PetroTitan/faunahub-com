"use client";

/**
 * Lazily loads the generated search index in the browser.
 *
 * The index is a static asset, not a bundled module. That distinction is the
 * whole performance story: `public/search-index.json` is roughly 585 KB raw and
 * 117 KB compressed, and importing it would put every byte of that into the
 * shared JavaScript on every page of the site. Fetched on demand it costs
 * nothing until a reader actually opens search, and the browser caches it for
 * the rest of the visit.
 *
 * No cache headers are set on the asset on purpose. It is revalidated on each
 * new page load, which means a deploy that removes a page can never leave a
 * stale index pointing readers at a 404 — worth far more than the conditional
 * request it costs.
 */
import { createSearchEngine, type SearchEngine } from "./engine.ts";
import { SEARCH_INDEX_URL, SEARCH_INDEX_VERSION, type SearchIndexPayload } from "./types.ts";

/**
 * Module-level so the index is parsed once per page, however many times the
 * overlay is opened and closed. The promise itself is cached, so two rapid
 * opens share one request rather than racing.
 */
let pending: Promise<SearchEngine> | null = null;

export function loadSearchEngine(): Promise<SearchEngine> {
  if (pending) return pending;

  pending = fetch(SEARCH_INDEX_URL, { credentials: "omit" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`search index request failed with ${response.status}`);
      }
      return response.json() as Promise<SearchIndexPayload>;
    })
    .then((payload) => {
      if (payload.version !== SEARCH_INDEX_VERSION) {
        // A cached index from an older deploy. Refusing it is safer than
        // guessing at a shape that has changed.
        throw new Error(
          `search index version ${payload.version} does not match expected ${SEARCH_INDEX_VERSION}`,
        );
      }
      return createSearchEngine(payload);
    })
    .catch((error: unknown) => {
      // Clear the cache so a transient network failure can be retried by simply
      // reopening search, rather than poisoning the page.
      pending = null;
      throw error;
    });

  return pending;
}

/**
 * Warm the index without blocking.
 *
 * Called on pointer-enter and focus of the search trigger: by the time the
 * overlay renders the fetch is usually already in flight, so the first
 * keystroke lands on a ready engine. Failures are swallowed here because this
 * is speculative work — the real open path reports errors properly.
 */
export function prefetchSearchEngine(): void {
  void loadSearchEngine().catch(() => {});
}
