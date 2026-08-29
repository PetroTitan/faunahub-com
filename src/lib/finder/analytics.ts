/**
 * Animal Finder analytics — consent-safe, vendor-neutral, and query-free.
 *
 * This mirrors `trackSearchEvent` in @/lib/search/analytics exactly, for the
 * same reason it exists: it introduces no analytics vendor, opens no
 * connection, sets no storage of its own, and dispatches a DOM CustomEvent plus
 * a `window.dataLayer` push if — and only if — a dataLayer already exists. If
 * no consented sink is present, nothing is recorded, which is what makes it
 * safe to call before any consent decision.
 *
 * PRIVACY — what the payload may and may not carry:
 *
 *   MAY: the facet ids and value slugs the reader selected. These are a CLOSED
 *   vocabulary generated at build time from FaunaHub's own registries — the
 *   same information a reader gives by clicking a link — and there are 23 of
 *   them in total. They cannot contain anything a reader typed.
 *
 *   MAY: a character count of the text query, the number of results, and the
 *   site-relative path of a clicked result.
 *
 *   MUST NOT: the query text itself, in any form. FaunaHub's privacy policy
 *   lists what the site collects, that list is exhaustive, and it contains no
 *   user-supplied free-text category. There is no consent banner. A hash would
 *   not help — it is still a stable identifier for text that may contain
 *   anything. `FinderAnalyticsProps` deliberately declares no field that could
 *   hold it, and tests/animal-finder.test.ts fails the build if one appears.
 *
 * The same rule applies to the URL: the Finder never writes its state to the
 * address bar. The WebmasterID tracker mounted site-wide patches
 * `history.pushState`/`replaceState` and reports `window.location.href` with
 * every resulting page_view, so a mirrored query would ship the reader's typed
 * text to a third-party endpoint once per keystroke. See docs/animal-finder.md.
 */

export type FinderAnalyticsEvent =
  | "animal_finder_open"
  | "animal_finder_filter_change"
  | "animal_finder_result_click"
  | "animal_finder_no_results";

export interface FinderAnalyticsProps {
  /**
   * How many characters the reader typed — NOT what they typed. See the module
   * note above for why the text itself is absent and what that costs: FaunaHub
   * cannot answer "which words do readers type into the Finder", and it can
   * answer "which filter combinations return nothing", which is the signal
   * that actually names a missing page.
   */
  queryLength?: number;
  /** How many animals the current filter and query produced. */
  resultCount?: number;
  /**
   * The active selection as a canonical, sorted string of facet ids and value
   * slugs, e.g. `coverage:conservation|group:birds`.
   *
   * Closed vocabulary, built at build time. This is the Finder's most useful
   * editorial signal: a combination that repeatedly returns nothing is a
   * specific, real request for coverage that does not exist yet.
   */
  filters?: string;
  /** How many individual facet values are selected. */
  filterCount?: number;
  /** The destination of a clicked result, as a site-relative path. */
  resultUrl?: string;
  /** 1-based position of the clicked result within the full list. */
  position?: number;
  /** Which control produced a filter change: "panel", "drawer" or "preset". */
  source?: string;
}

/** The DOM event name. One listener can serve every event type. */
export const FINDER_EVENT_NAME = "faunahub:animal-finder";

export function trackFinderEvent(
  event: FinderAnalyticsEvent,
  props: FinderAnalyticsProps = {},
): void {
  if (typeof window === "undefined") return;

  const detail = { event, ...props };

  try {
    window.dispatchEvent(new CustomEvent(FINDER_EVENT_NAME, { detail }));
  } catch {
    /* CustomEvent unsupported — ignore. */
  }

  const w = window as unknown as { dataLayer?: unknown[] };
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push(detail);
  }
}

/**
 * How long a reader must pause before a query or a filter change is recorded.
 *
 * Ticking three boxes in quick succession is one decision, not three, and
 * recording each keystroke would turn one lookup into a dozen events while
 * capturing partial words that mean nothing. 600 ms matches the search
 * module's debounce so the two event streams stay comparable.
 */
export const FINDER_EVENT_DEBOUNCE_MS = 600;

/** Queries shorter than this are never recorded: they carry no intent. */
export const MIN_TRACKED_QUERY_LENGTH = 2;
