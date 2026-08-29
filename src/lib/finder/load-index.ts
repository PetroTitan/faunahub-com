"use client";

/**
 * Lazily loads the generated Animal Finder index in the browser.
 *
 * The index is a static asset, not a bundled module. Importing it would put
 * every byte into the shared JavaScript on all 1,697 routes to serve one page;
 * fetched on demand it costs nothing anywhere else, and the browser caches it
 * for the rest of the visit.
 *
 * No cache headers are set on the asset, matching the search index: it is
 * revalidated on each fresh page load, so a deploy that retires a profile can
 * never leave a stale index pointing a reader at a 404.
 */
import {
  FINDER_INDEX_URL,
  FINDER_INDEX_VERSION,
  hydrateFinderDocument,
  type FinderAnimalDocument,
  type FinderFacet,
  type FinderExcludedFacet,
  type FinderIndexPayload,
} from "./types.ts";

export interface FinderData {
  documents: FinderAnimalDocument[];
  facets: FinderFacet[];
  excludedFacets: FinderExcludedFacet[];
  generatedAt: string;
}

/**
 * Module-level so the index is parsed once per page however many times the
 * component remounts. The promise itself is cached, so two rapid callers share
 * one request rather than racing.
 */
let pending: Promise<FinderData> | null = null;

export function loadFinderData(): Promise<FinderData> {
  if (pending) return pending;

  pending = fetch(FINDER_INDEX_URL, { credentials: "omit" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`animal finder index request failed with ${response.status}`);
      }
      return response.json() as Promise<FinderIndexPayload>;
    })
    .then((payload) => {
      if (payload.version !== FINDER_INDEX_VERSION) {
        // A cached index from an older deploy. Refusing it is safer than
        // guessing at a shape that has changed.
        throw new Error(
          `animal finder index version ${payload.version} does not match expected ${FINDER_INDEX_VERSION}`,
        );
      }
      return {
        documents: payload.documents.map(hydrateFinderDocument),
        facets: payload.facets,
        excludedFacets: payload.excludedFacets,
        generatedAt: payload.generatedAt,
      };
    })
    .catch((error: unknown) => {
      // Clear the cache so a transient network failure can be retried by a
      // reload rather than poisoning the page for the rest of the visit.
      pending = null;
      throw error;
    });

  return pending;
}
