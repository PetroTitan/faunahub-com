"use client";

/**
 * Animal Finder — the interactive browse experience.
 *
 * Deliberate constraints, each of which is enforced by a test:
 *
 *  - **No URL state.** Neither the typed query nor the filter selection is ever
 *    written to the address bar. The WebmasterID tracker mounted site-wide
 *    patches `history.pushState`/`replaceState` and reports
 *    `window.location.href` with every resulting page_view, so mirroring state
 *    into the URL would ship the reader's typed text to a third-party endpoint
 *    once per keystroke. The cost is real and accepted: a Finder view cannot be
 *    deep-linked or shared. The browse presets exist partly to soften that —
 *    they reach the useful slices in one click.
 *  - **No network per keystroke.** The index is fetched exactly once per page,
 *    at mount, and every subsequent query and filter runs against memory.
 *  - **No model, no vendor, no storage.** Ranking is the pure function in
 *    `@/lib/finder/filter`; the same inputs always produce the same list.
 *
 * The index loads on mount rather than on first interaction because this page's
 * whole purpose is the tool: waiting for a keystroke to start a 60 KB download
 * would put the fetch on the critical path of the first thing the reader does.
 */
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import FinderFilters from "./FinderFilters";
import FinderResultCard from "./FinderResultCard";
import FinderDrawer from "./FinderDrawer";
import { FilterIcon, SearchIcon, CloseIcon } from "./icons";
import { loadFinderData, type FinderData } from "@/lib/finder/load-index";
import {
  facetCounts,
  hasActiveSelection,
  runFinder,
  sanitizeSelection,
  selectionKey,
  selectionSize,
  MAX_QUERY_LENGTH,
  type FinderSelection,
} from "@/lib/finder/filter";
import {
  FINDER_EVENT_DEBOUNCE_MS,
  MIN_TRACKED_QUERY_LENGTH,
  trackFinderEvent,
} from "@/lib/finder/analytics";
import { FINDER_PRESETS, FINDER_FALLBACK_DESTINATIONS } from "@/lib/finder/presets";
import type { FinderAnimalDocument, FinderFacet } from "@/lib/finder/types";

/** How many cards render before "Show more". Rendering all 642 at once costs
 * roughly 2,000 DOM nodes and 642 image elements for a list nobody scrolls to
 * the end of; a page at a time keeps the first paint cheap without hiding
 * anything, because the total is always stated above the grid. */
const PAGE_SIZE = 48;

/** Cards above the fold load eagerly; the rest defer. */
const EAGER_IMAGES = 8;

/** A stable empty array, so the loading state does not invalidate every memo. */
const EMPTY_FACETS: FinderFacet[] = [];

export default function AnimalFinder() {
  const [data, setData] = useState<FinderData | null>(null);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [selection, setSelection] = useState<FinderSelection>({});
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerTriggerRef = useRef<HTMLButtonElement | null>(null);
  const resultsHeadingRef = useRef<HTMLParagraphElement | null>(null);
  const inputId = useId();

  /* ---- Load once per page ------------------------------------------ */

  useEffect(() => {
    let live = true;
    loadFinderData().then(
      (loaded) => {
        if (live) setData(loaded);
      },
      () => {
        if (live) setFailed(true);
      },
    );
    return () => {
      live = false;
    };
  }, []);

  useEffect(() => {
    if (data) trackFinderEvent("animal_finder_open", { resultCount: data.documents.length });
  }, [data]);

  /* ---- Derived state ----------------------------------------------- */

  // Memoised, not `data?.facets ?? []`. The bare fallback mints a new array
  // on every render while the index is loading, which makes every memo below
  // depend on a changing identity — and `counts` runs the filter engine once
  // per facet over 642 documents, so that is a real cost, not a lint nicety.
  const facets = useMemo(() => data?.facets ?? EMPTY_FACETS, [data]);

  // A selection can outlive the payload that produced it across a deploy that
  // retires a value, and a stale value would silently return nothing.
  const safeSelection = useMemo(
    () => sanitizeSelection(selection, facets),
    [selection, facets],
  );

  const results = useMemo(() => {
    if (!data) return [];
    return runFinder(data.documents, query, safeSelection, facets);
  }, [data, query, safeSelection, facets]);

  const counts = useMemo(() => {
    if (!data) return {};
    const out: Record<string, Record<string, number>> = {};
    for (const facet of facets) {
      out[facet.id] = facetCounts(data.documents, query, safeSelection, facets, facet.id);
    }
    return out;
  }, [data, query, safeSelection, facets]);

  const groupLabels = useMemo(() => {
    const labels = new Map<string, string>();
    for (const value of facets.find((facet) => facet.id === "group")?.values ?? []) {
      labels.set(value.value, value.label);
    }
    return labels;
  }, [facets]);

  const active = hasActiveSelection(safeSelection) || query.trim().length > 0;
  const filterCount = selectionSize(safeSelection);

  /* ---- Reset the page window whenever the result set changes -------- */

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query, safeSelection]);

  /* ---- Analytics: debounced, closed-vocabulary, never the query ----- */

  const settled = useRef<string>("");
  useEffect(() => {
    if (!data) return;
    // The result count is part of the key, not just the query LENGTH. Keying on
    // length alone made two different queries of the same length look like the
    // same state, so the second never scheduled a timer — and four-letter
    // animal names are pervasive here. The worst case was precisely the signal
    // this module exists for: "wolf" (3 results, recorded) followed by "zzzz"
    // (0 results) never emitted animal_finder_no_results.
    const key = `${selectionKey(safeSelection)}#${query.trim().length}#${results.length}`;
    if (key === settled.current) return;

    const timer = window.setTimeout(() => {
      settled.current = key;
      const trimmed = query.trim();
      if (trimmed.length > 0 && trimmed.length < MIN_TRACKED_QUERY_LENGTH) return;
      if (!active) return;

      const props = {
        // The LENGTH of what was typed, never the text. See the module note in
        // @/lib/finder/analytics for why, and what it costs.
        queryLength: trimmed.length,
        resultCount: results.length,
        filters: selectionKey(safeSelection),
        filterCount,
      };
      trackFinderEvent(
        results.length === 0 ? "animal_finder_no_results" : "animal_finder_filter_change",
        props,
      );
    }, FINDER_EVENT_DEBOUNCE_MS);

    return () => window.clearTimeout(timer);
  }, [data, query, safeSelection, results.length, active, filterCount]);

  /* ---- Handlers ----------------------------------------------------- */

  const toggle = useCallback((facetId: string, value: string) => {
    setSelection((current) => {
      const chosen = current[facetId] ?? [];
      const next = chosen.includes(value)
        ? chosen.filter((entry) => entry !== value)
        : [...chosen, value];
      const updated = { ...current, [facetId]: next };
      if (next.length === 0) delete updated[facetId];
      return updated;
    });
  }, []);

  const reset = useCallback(() => {
    setSelection({});
    setQuery("");
  }, []);

  const applyPreset = useCallback((presetSelection: FinderSelection) => {
    setSelection(presetSelection);
    setQuery("");
    // Move the reader to the count, so a preset chosen from below the grid does
    // not silently rewrite a list that is off screen.
    requestAnimationFrame(() => {
      resultsHeadingRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }, []);

  const onResultClick = useCallback(
    (document: FinderAnimalDocument, position: number) => {
      trackFinderEvent("animal_finder_result_click", {
        resultUrl: document.url,
        position,
        resultCount: results.length,
        filters: selectionKey(safeSelection),
        filterCount,
        queryLength: query.trim().length,
      });
    },
    [results.length, safeSelection, filterCount, query],
  );

  /* ---- Render ------------------------------------------------------- */

  const shown = results.slice(0, visible);
  const countLabel = !data
    ? "Loading animals…"
    : results.length === 1
      ? "1 animal found"
      : `${results.length} animals found`;

  const filtersNode = (idPrefix: string) => (
    <FinderFilters
      facets={facets}
      selection={safeSelection}
      counts={counts}
      onToggle={toggle}
      idPrefix={idPrefix}
    />
  );

  return (
    <div className="mt-6">
      {/* ---- Search field --------------------------------------------- */}
      <form
        role="search"
        aria-label="Find an animal"
        onSubmit={(event) => event.preventDefault()}
        className="relative"
      >
        <label htmlFor={inputId} className="sr-only">
          Search animals by name or scientific name
        </label>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5E6B63]"
        >
          <SearchIcon size={18} />
        </span>
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value.slice(0, MAX_QUERY_LENGTH))}
          maxLength={MAX_QUERY_LENGTH}
          autoComplete="off"
          spellCheck={false}
          placeholder="Search by name — wolf, blue-ringed octopus, Panthera leo"
          // The trailing arbitrary variant suppresses Chrome's own
          // search-cancel glyph. `type="search"` earns the right semantics and
          // the mobile keyboard's search key, but its native clear button has
          // no accessible name, does not exist in Firefox, and sat directly
          // beside the labelled Clear button below — two crosses, one of which
          // a screen reader cannot describe.
          className="h-12 w-full rounded-xl border border-[#DDE6DD] bg-white pl-11 pr-11 text-[15px] text-[#17211B] placeholder:text-[#5E6B63] focus:border-[#063F2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] [&::-webkit-search-cancel-button]:appearance-none"
        />
        {query.length > 0 && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-1.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-[#2C3A2F] transition-colors hover:bg-[#EFF4E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A]"
          >
            <CloseIcon size={16} />
            <span className="sr-only">Clear the search field</span>
          </button>
        )}
      </form>

      <p className="mt-2 text-xs leading-snug text-[#5E6B63]">
        Matches animal names, scientific names and profile tags. For questions, guides
        and comparisons,{" "}
        <Link href="/search" className="underline underline-offset-2">
          use site search
        </Link>
        .
      </p>

      {/* ---- Browse presets -------------------------------------------- */}
      <section aria-labelledby="finder-presets" className="mt-5">
        <h2 id="finder-presets" className="text-sm font-bold text-[#17211B]">
          Browse a slice
        </h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {FINDER_PRESETS.map((preset) => {
            const isActive = selectionKey(safeSelection) === selectionKey(preset.selection);
            return (
              <li key={preset.id}>
                <button
                  type="button"
                  onClick={() => applyPreset(preset.selection)}
                  aria-pressed={isActive}
                  title={preset.blurb}
                  className={[
                    "min-h-[44px] rounded-full border px-3.5 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2",
                    isActive
                      ? "border-[#063F2A] bg-[#063F2A] text-white"
                      : "border-[#DDE6DD] bg-white text-[#2C3A2F] hover:border-[#CFE0A8] hover:bg-[#EFF4E0]",
                  ].join(" ")}
                >
                  {preset.label}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ---- Panel + results ------------------------------------------- */}
      <div className="mt-6 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8">
        {/* Desktop filter panel */}
        <aside
          aria-labelledby="finder-filters-heading"
          className="hidden lg:block lg:self-start"
        >
          <div className="flex items-baseline justify-between gap-2">
            <h2 id="finder-filters-heading" className="text-sm font-bold text-[#17211B]">
              Filters
            </h2>
            {active && (
              <button
                type="button"
                onClick={reset}
                className="rounded px-1 py-0.5 text-xs font-semibold text-[#063F2A] underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A]"
              >
                Reset all
              </button>
            )}
          </div>
          <div className="mt-4">{data ? filtersNode("panel") : <FilterSkeleton />}</div>
        </aside>

        <div className="min-w-0">
          {/* Result count + mobile filter trigger */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p
              ref={resultsHeadingRef}
              className="text-sm font-semibold text-[#17211B]"
              // The count is the one thing a filter change must announce. It is
              // polite rather than assertive so it never interrupts a reader
              // mid-word while they are still typing.
              aria-live="polite"
              aria-atomic="true"
            >
              {countLabel}
              {active && data && (
                <span className="ml-1.5 font-normal text-[#5E6B63]">
                  of {data.documents.length}
                </span>
              )}
            </p>

            <div className="flex items-center gap-2">
              {active && (
                <button
                  type="button"
                  onClick={reset}
                  className="min-h-[44px] rounded-lg border border-[#DDE6DD] bg-white px-3 text-sm font-semibold text-[#063F2A] transition-colors hover:bg-[#EFF4E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] lg:hidden"
                >
                  Reset
                </button>
              )}
              <button
                ref={drawerTriggerRef}
                type="button"
                onClick={() => setDrawerOpen(true)}
                disabled={!data}
                className="flex min-h-[44px] items-center gap-2 rounded-lg border border-[#DDE6DD] bg-white px-3.5 text-sm font-semibold text-[#17211B] transition-colors hover:border-[#CFE0A8] hover:bg-[#EFF4E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] disabled:opacity-60 lg:hidden"
              >
                <FilterIcon />
                Filters
                {filterCount > 0 && (
                  <span className="rounded-full bg-[#063F2A] px-1.5 py-0.5 text-[11px] font-bold text-white">
                    {filterCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="mt-4">
            {failed ? (
              <LoadFailed />
            ) : !data ? (
              <ResultsSkeleton />
            ) : results.length === 0 ? (
              <EmptyState onReset={reset} />
            ) : (
              <>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {shown.map((result, index) => (
                    <FinderResultCard
                      key={result.document.slug}
                      document={result.document}
                      groupLabel={
                        result.document.group ? groupLabels.get(result.document.group) : undefined
                      }
                      position={index + 1}
                      onSelect={onResultClick}
                      eager={index < EAGER_IMAGES}
                    />
                  ))}
                </ul>

                {visible < results.length && (
                  <div className="mt-6 text-center">
                    <button
                      type="button"
                      onClick={() => setVisible((current) => current + PAGE_SIZE)}
                      className="min-h-[44px] rounded-lg border border-[#063F2A] bg-white px-5 text-sm font-semibold text-[#063F2A] transition-colors hover:bg-[#EFF4E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
                    >
                      Show more — {results.length - visible} remaining
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* ---- Mobile drawer --------------------------------------------- */}
      <FinderDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        returnFocusTo={drawerTriggerRef}
        summary={countLabel}
        footer={
          <div className="flex gap-2">
            <button
              type="button"
              onClick={reset}
              disabled={!active}
              className="min-h-[44px] flex-1 rounded-lg border border-[#DDE6DD] bg-white px-4 text-sm font-semibold text-[#2C3A2F] transition-colors hover:bg-[#EFF4E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] disabled:opacity-50"
            >
              Reset filters
            </button>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="min-h-[44px] flex-1 rounded-lg bg-[#063F2A] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0F5A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
            >
              Show {results.length}
            </button>
          </div>
        }
      >
        {data ? filtersNode("drawer") : <FilterSkeleton />}
      </FinderDrawer>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * States
 * ------------------------------------------------------------------ */

/**
 * The loading grid.
 *
 * It renders exactly PAGE_SIZE placeholders, because the first render after the
 * index lands is always PAGE_SIZE cards — so the grid occupies its final height
 * before anything arrives and the sections beneath it never move. Six looked
 * tidier and shifted the group index, the presets, the coverage table and the
 * FAQ down by fourteen grid rows on arrival, which on a slow connection is
 * eight seconds of the page reflowing under the reader.
 *
 * The placeholders are empty boxes, not images, so the DOM cost is trivial.
 * They are `aria-hidden` because the live region above already says
 * "Loading animals…", and announcing 48 empty boxes as well would be noise.
 */
function ResultsSkeleton() {
  return (
    <ul
      aria-hidden="true"
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3"
    >
      {Array.from({ length: PAGE_SIZE }, (_, index) => (
        <li
          key={index}
          className="overflow-hidden rounded-xl border border-[#DDE6DD] bg-white"
        >
          <div className="aspect-[3/2] w-full bg-[#EFF1EB]" />
          <div className="space-y-2 p-3.5">
            <div className="h-4 w-2/5 rounded bg-[#EFF1EB]" />
            <div className="h-3 w-3/5 rounded bg-[#EFF1EB]" />
            <div className="h-3 w-full rounded bg-[#EFF1EB]" />
          </div>
        </li>
      ))}
    </ul>
  );
}

function FilterSkeleton() {
  return (
    <div aria-hidden="true" className="space-y-3">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="h-11 rounded-lg border border-[#DDE6DD] bg-white" />
      ))}
    </div>
  );
}

/**
 * The empty state.
 *
 * It says plainly that nothing matched, offers the one control that fixes it,
 * and then offers real hubs — it never invents a near-match or silently widens
 * the filters to produce a list.
 */
function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-xl border border-[#DDE6DD] bg-white p-5">
      <p className="text-sm font-bold text-[#17211B]">No animal matches all of those</p>
      <p className="mt-1 text-sm leading-relaxed text-[#2C3A2F]">
        Nothing in FaunaHub&rsquo;s {" "}
        <Link href="/animal-encyclopedia" className="underline underline-offset-2">
          animal encyclopedia
        </Link>{" "}
        matches that combination. Clearing a filter usually helps more than changing the
        search text.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 min-h-[44px] rounded-lg border border-[#063F2A] bg-white px-4 text-sm font-semibold text-[#063F2A] transition-colors hover:bg-[#EFF4E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
      >
        Reset filters
      </button>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {FINDER_FALLBACK_DESTINATIONS.map((destination) => (
          <li key={destination.href}>
            <Link
              href={destination.href}
              prefetch={false}
              data-wmid-cta="animal-finder-empty-cta"
              className="block rounded-xl border border-[#DDE6DD] bg-white px-3 py-2.5 transition-colors hover:border-[#CFE0A8] hover:bg-[#F7F8F3] hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A]"
            >
              <span className="block text-sm font-semibold text-[#17211B]">
                {destination.label}
              </span>
              <span className="mt-0.5 block text-xs leading-snug text-[#5E6B63]">
                {destination.blurb}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The index could not be fetched.
 *
 * The page below this component is a complete, crawlable index of the same
 * collection, so the honest thing to say is where to go — not to retry silently
 * and leave the reader looking at an empty grid.
 */
function LoadFailed() {
  return (
    <div className="rounded-xl border border-[#DDE6DD] bg-white p-5">
      <p className="text-sm font-bold text-[#17211B]">The animal index did not load</p>
      <p className="mt-1 text-sm leading-relaxed text-[#2C3A2F]">
        Filtering needs a data file that could not be fetched. Reloading usually fixes it.
        Either way, every animal below is reachable from the{" "}
        <Link href="/animal-encyclopedia" className="underline underline-offset-2">
          animal encyclopedia
        </Link>
        , which lists the full collection without it.
      </p>
    </div>
  );
}
