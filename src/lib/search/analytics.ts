/**
 * FaunaHub search analytics — consent-safe and vendor-neutral.
 *
 * This deliberately mirrors `trackEcosystemEvent` in @/lib/ecosystem/config,
 * which is the pattern this site already uses. It introduces no analytics
 * vendor, opens no connection, and sets no storage of its own. All it does is:
 *
 *   1. dispatch a DOM CustomEvent that an already-consented listener may
 *      subscribe to, and
 *   2. push to `window.dataLayer` if — and only if — one already exists.
 *
 * If no consented sink is present, nothing is recorded. That is what makes it
 * safe to call before any consent decision: the function cannot itself become
 * the thing that needs consent.
 *
 * On why it does not call the WebmasterID tracker directly: the tracker is
 * loaded site-wide from the root layout as a third-party script, and this repo
 * contains no documented public event API for it — no types, no wrapper, no
 * existing call site. Emitting to a guessed global would be inventing an
 * integration, and a silently-dropped event is worse than no event because it
 * looks like it works. The CustomEvent above is the honest seam: whenever a
 * documented tracker API does land, one listener registered in the layout
 * forwards every event below without a single change here.
 *
 * PRIVACY: the payload NEVER carries the reader's query text. It carries a
 * character count, result counts, and the destination path of a clicked result.
 * No identifier, no session id, no timestamp, no page-history trail. See the
 * note on `queryLength` for why the text itself is excluded and what that
 * costs.
 */

export type SearchAnalyticsEvent =
  | "search_open"
  | "search_query"
  | "search_result_click"
  | "search_no_results";

export interface SearchAnalyticsProps {
  /**
   * How many characters the reader typed — NOT what they typed.
   *
   * The raw query is deliberately absent from this whole module. FaunaHub's
   * privacy policy lists what it collects and that list is exhaustive: it
   * permits "anonymous interaction events such as link clicks or page-level
   * actions" and contains no user-supplied free-text category. A search box is
   * free text by definition, and there is no consent banner on the site, so
   * recording query strings would put the site's own published policy out of
   * date. A hash would not help — it is still a stable identifier for text that
   * may contain anything a reader types.
   *
   * The consequence is stated plainly rather than worked around: FaunaHub
   * cannot answer "which words do readers search for" from this event stream.
   * It can answer "how often does search fail", "which results get chosen", and
   * "which comparisons are being asked for" — see `missingPair`.
   */
  queryLength?: number;
  /** How many results the query produced. */
  resultCount?: number;
  /** The shelf of the clicked result. */
  resultType?: string;
  /** The destination of the clicked result, as a site-relative path. */
  resultUrl?: string;
  /** 1-based position of the clicked result within the full ranked list. */
  position?: number;
  /** Where search was used: "overlay" or "page". */
  placement?: string;
  /**
   * The canonical key for a two-animal query FaunaHub has NOT published, e.g.
   * "elephant--rhinoceros".
   *
   * This is not free text. It is produced only when the query resolves cleanly
   * to two entries in FaunaHub's own 644-animal registry, so the value is
   * always two slugs from a closed set — the same information a reader gives by
   * choosing two options in the Compare Center's dropdowns. It is the single
   * most useful signal search can produce for editorial planning: a specific,
   * real request for a page that does not exist yet.
   *
   * It stays private. Nothing derived from it may be rendered on a public page,
   * because doing so would turn readers' requests into published content.
   */
  missingPair?: string;
}

/** The DOM event name. One listener can serve every event type. */
export const SEARCH_EVENT_NAME = "faunahub:search";

export function trackSearchEvent(
  event: SearchAnalyticsEvent,
  props: SearchAnalyticsProps = {},
): void {
  if (typeof window === "undefined") return;

  const detail = { event, ...props };

  try {
    window.dispatchEvent(new CustomEvent(SEARCH_EVENT_NAME, { detail }));
  } catch {
    /* CustomEvent unsupported — ignore. */
  }

  const w = window as unknown as { dataLayer?: unknown[] };
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push(detail);
  }
}

/**
 * How long a reader must pause before a query is recorded.
 *
 * Recording every keystroke would turn one search into a dozen events and would
 * capture partial words that mean nothing — "w", "wo", "wol" — while making the
 * data less private, not more useful. 600ms is long enough that only settled
 * queries are recorded.
 */
export const QUERY_EVENT_DEBOUNCE_MS = 600;

/** Queries shorter than this are never recorded: they carry no intent. */
export const MIN_TRACKED_QUERY_LENGTH = 2;
