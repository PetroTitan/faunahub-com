"use client";

/**
 * SearchPanel — the search experience itself, without the dialog chrome.
 *
 * Split out from SearchDialog so the same input, ranking, result list and empty
 * states serve both the overlay and the standalone /search page. Everything
 * here is presentation over `SearchResponse`; all relevance lives in
 * @/lib/search/engine.
 *
 * Nothing on this screen is invented. Titles and descriptions are the strings
 * the destination page itself publishes, a comparison is only ever offered when
 * FaunaHub has actually written it, and a query that finds nothing says so and
 * offers real hubs rather than a plausible-looking guess.
 */
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MAX_PER_GROUP, type SearchEngine } from "@/lib/search/engine";
import { loadSearchEngine } from "@/lib/search/load-index";
import {
  MIN_TRACKED_QUERY_LENGTH,
  QUERY_EVENT_DEBOUNCE_MS,
  trackSearchEvent,
} from "@/lib/search/analytics";
import {
  DISCOVERY_DESTINATIONS,
  FALLBACK_DESTINATIONS,
} from "@/lib/search/discovery";
import {
  SEARCH_TYPE_LABEL,
  type SearchDocument,
  type SearchFacets,
  type SearchResponse,
  type SearchResult,
} from "@/lib/search/types";
import { SearchIcon, CornerArrowIcon } from "./icons";

/*
 * A note on colour: this panel uses --color-muted (#5E6B63) for its secondary
 * text rather than the lighter --color-subtle (#8A958E) the site uses for the
 * same role elsewhere. Measured from the rendered pixels, #8A958E is 3.10:1 on
 * white and 2.91:1 on #F7F8F3 — below the 4.5:1 WCAG AA floor for text at these
 * sizes. #5E6B63 is 5.59:1 and 5.23:1. Every label, hint and count here is real
 * information, not decoration, so it is held to the AA threshold.
 */

interface SearchPanelProps {
  /** Where the panel is mounted, for analytics only. */
  placement: "overlay" | "page";
  /** Called after a result is chosen, so the overlay can close itself. */
  onNavigate?: () => void;
  /** Autofocus the input on mount. */
  autoFocus?: boolean;
}

/*
 * There is deliberately no `initialQuery` and no `onQueryChange`.
 *
 * The query never enters the URL, in either direction. The site-wide
 * WebmasterID tracker patches history.pushState/replaceState and reports
 * window.location.href, so a query in the address bar is a query sent to a
 * third-party endpoint — once per keystroke. See src/app/search/SearchPageClient
 * for the measurement and the trade-off.
 */

/** Longest query the engine is asked to rank. Far beyond any real search. */
const MAX_QUERY_LENGTH = 120;

/** How long the query must settle before the live region speaks. */
const ANNOUNCE_DEBOUNCE_MS = 500;

type LoadState = "idle" | "loading" | "ready" | "error";

export default function SearchPanel({
  placement,
  onNavigate,
  autoFocus = false,
}: SearchPanelProps) {
  const [query, setQuery] = useState("");
  const [engine, setEngine] = useState<SearchEngine | null>(null);
  const [loadState, setLoadState] = useState<LoadState>("idle");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [browseGroup, setBrowseGroup] = useState<string | null>(null);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const baseId = useId();
  const listboxId = `${baseId}-results`;
  const optionId = (index: number) => `${baseId}-option-${index}`;

  /* ---- Index loading ---------------------------------------------- */

  useEffect(() => {
    let cancelled = false;
    setLoadState("loading");
    loadSearchEngine()
      .then((loaded) => {
        if (cancelled) return;
        setEngine(loaded);
        setLoadState("ready");
      })
      .catch(() => {
        if (!cancelled) setLoadState("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  /* ---- Ranking ---------------------------------------------------- */

  const response: SearchResponse | null = useMemo(() => {
    if (!engine || !query.trim()) return null;
    // Ranking runs synchronously during render, so the input length is bounded
    // before it gets there. No real search is longer than this, and a pasted
    // wall of text should not be able to make the panel janky.
    return engine.search(query.slice(0, MAX_QUERY_LENGTH));
  }, [engine, query]);

  /**
   * The rendered sections, and the flat list keyboard navigation walks.
   *
   * Both are produced in ONE pass, and the flat list is derived from the
   * sections rather than rebuilt beside them. An earlier version computed them
   * separately and re-derived section membership from each result's type, which
   * silently dropped results whenever two shelves share a heading — "Hubs" and
   * "Categories" both render as "Categories & Topics" — leaving entries that
   * Arrow Down could reach but nothing had drawn.
   */
  const { sections, visible, exactCount } = useMemo(() => {
    const sections: { label: string; items: { result: SearchResult; index: number }[] }[] = [];
    const visible: SearchResult[] = [];
    if (!response) return { sections, visible, exactCount: 0 };

    const seen = new Set<string>();
    const push = (result: SearchResult) => {
      const index = visible.length;
      visible.push(result);
      return { result, index };
    };

    if (response.bestMatch) {
      seen.add(response.bestMatch.document.id);
      sections.push({ label: "Best match", items: [push(response.bestMatch)] });
    }

    for (const group of response.groups) {
      const items: { result: SearchResult; index: number }[] = [];
      for (const result of group.results) {
        // Typo suggestions are collected separately and shown last. Mixing them
        // into the shelves put a misspelling's guess ABOVE a genuine match: a
        // fuzzy "Mouse" rendered in Animals sat above an exact "Moose vs Elk"
        // in Comparisons, purely because Animals is drawn first.
        if (result.fuzzy) continue;
        if (items.length >= MAX_PER_GROUP) break;
        if (seen.has(result.document.id)) continue;
        seen.add(result.document.id);
        items.push(push(result));
      }
      // Empty sections are never rendered.
      if (items.length > 0) sections.push({ label: group.label, items });
    }

    const exactCount = visible.length;

    const suggestions: { result: SearchResult; index: number }[] = [];
    for (const result of response.results) {
      if (!result.fuzzy || seen.has(result.document.id)) continue;
      if (suggestions.length >= MAX_PER_GROUP) break;
      seen.add(result.document.id);
      suggestions.push(push(result));
    }
    if (suggestions.length > 0) sections.push({ label: "Did you mean", items: suggestions });

    return { sections, visible, exactCount };
  }, [response]);

  useEffect(() => setActiveIndex(-1), [query]);

  /* ---- Browse ------------------------------------------------------ */

  const facets = engine?.facets ?? null;

  const browseResults = useMemo(() => {
    if (!engine || !browseGroup) return [] as SearchDocument[];
    return engine.documents
      .filter((document) => document.type === "animal" && document.group === browseGroup)
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [engine, browseGroup]);

  /* ---- Analytics --------------------------------------------------- */

  // Debounced so a settled query is recorded once, not once per keystroke.
  useEffect(() => {
    if (!response) return;
    const trimmed = query.trim();
    if (trimmed.length < MIN_TRACKED_QUERY_LENGTH) return;

    const timer = window.setTimeout(() => {
      trackSearchEvent(response.empty ? "search_no_results" : "search_query", {
        queryLength: trimmed.length,
        resultCount: response.results.length,
        placement,
        // Only ever a key built from two slugs in FaunaHub's own 644-animal
        // registry — never the reader's text. See the privacy note in
        // @/lib/search/analytics.
        missingPair: response.missingPair
          ? [...response.missingPair.slugs].sort().join("--")
          : undefined,
      });
    }, QUERY_EVENT_DEBOUNCE_MS);

    return () => window.clearTimeout(timer);
  }, [response, query, placement]);

  /* ---- Interaction -------------------------------------------------- */

  const handleSelect = useCallback(
    (result: SearchResult, position: number) => {
      trackSearchEvent("search_result_click", {
        resultType: result.document.type,
        resultUrl: result.document.url,
        position: position + 1,
        placement,
        queryLength: query.trim().length,
      });
      onNavigate?.();
    },
    [onNavigate, placement, query],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (visible.length === 0) return;

      // Home and End are deliberately NOT intercepted. They are the standard
      // caret bindings for the field the reader is still typing in, and taking
      // them to jump the result selection left someone who spotted a typo with
      // no way back to the start of their own text.
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % visible.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((index) => (index <= 0 ? visible.length - 1 : index - 1));
      } else if (event.key === "Enter") {
        // Enter with nothing highlighted follows the top result, which is what
        // a reader who typed an exact animal name expects.
        const index = activeIndex >= 0 ? activeIndex : 0;
        const result = visible[index];
        if (!result) return;
        event.preventDefault();
        handleSelect(result, index);
        // A client-side transition, so Enter behaves exactly like clicking the
        // same result rather than reloading the whole document.
        router.push(result.document.url);
      }
    },
    [visible, activeIndex, handleSelect, router],
  );

  // Keep the highlighted option inside the scroll viewport.
  useEffect(() => {
    if (activeIndex < 0) return;
    const node = listRef.current?.querySelector<HTMLElement>(`#${CSS.escape(optionId(activeIndex))}`);
    node?.scrollIntoView({ block: "nearest" });
    // optionId is derived from a stable useId, so it is not a dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // Debounced: recomputed on every keystroke, the live region interrupted
  // itself continuously and a screen reader never finished a sentence.
  const [announcement, setAnnouncement] = useState("");
  useEffect(() => {
    const next = buildAnnouncement(loadState, query, response, visible.length, exactCount);
    const timer = window.setTimeout(() => setAnnouncement(next), ANNOUNCE_DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [loadState, query, response, visible.length, exactCount]);

  /* ---- Render ------------------------------------------------------ */

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Input. `role="search"` makes this a landmark a screen-reader user can
          jump to directly, the same way the native <search> element would. */}
      <div role="search" className="relative shrink-0 border-b border-[#DDE6DD] bg-white">
        <span
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#5E6B63]"
          aria-hidden="true"
        >
          <SearchIcon size={18} />
        </span>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setBrowseGroup(null);
          }}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-expanded={visible.length > 0}
          // Only referenced while the listbox is actually in the DOM; pointing
          // aria-controls at an element that does not exist is an ARIA error.
          aria-controls={visible.length > 0 ? listboxId : undefined}
          aria-autocomplete="list"
          aria-activedescendant={activeIndex >= 0 ? optionId(activeIndex) : undefined}
          aria-label="Search animals, comparisons, guides and tools"
          // Short enough to fit the input at 320px; the longer form was clipped
          // mid-word with no ellipsis.
          placeholder="Search animals, comparisons…"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="search"
          className="w-full bg-transparent py-4 pl-12 pr-4 text-base text-[#17211B] placeholder:text-[#5E6B63] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#063F2A]"
        />
      </div>

      {/* Screen-reader status. Visually hidden but always current. */}
      <div role="status" aria-live="polite" className="sr-only">
        {announcement}
      </div>

      {/* Results / states */}
      <div
        ref={listRef}
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3 sm:px-4"
      >
        {loadState === "error" && (
          <p className="px-2 py-6 text-sm text-[#2C3A2F]">
            Search could not load right now. Every page is still reachable from the{" "}
            <Link href="/animal-encyclopedia" prefetch={false} className="font-medium underline">
              Animal Encyclopedia
            </Link>{" "}
            and the site navigation.
          </p>
        )}

        {loadState !== "error" && !query.trim() && (
          <InitialState
            facets={facets}
            browseGroup={browseGroup}
            browseResults={browseResults}
            onBrowse={setBrowseGroup}
            onNavigate={onNavigate}
            loading={loadState !== "ready"}
          />
        )}

        {loadState === "ready" && query.trim() && response && (
          <>
            {visible.length > 0 ? (
              <ResultSections
                response={response}
                sections={sections}
                suggestionsOnly={exactCount === 0}
                activeIndex={activeIndex}
                optionId={optionId}
                listboxId={listboxId}
                onSelect={handleSelect}
              />
            ) : (
              <EmptyState response={response} onNavigate={onNavigate} />
            )}
          </>
        )}

        {loadState === "loading" && query.trim() && (
          <p className="px-2 py-6 text-sm text-[#5E6B63]">Loading the index…</p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Sections
 * ------------------------------------------------------------------ */

function ResultSections({
  response,
  sections,
  suggestionsOnly,
  activeIndex,
  optionId,
  listboxId,
  onSelect,
}: {
  response: SearchResponse;
  sections: { label: string; items: { result: SearchResult; index: number }[] }[];
  /** True when every row on screen is a spelling suggestion, not a match. */
  suggestionsOnly: boolean;
  activeIndex: number;
  optionId: (index: number) => string;
  listboxId: string;
  onSelect: (result: SearchResult, index: number) => void;
}) {
  return (
    <div id={listboxId} role="listbox" aria-label="Search results">
      {suggestionsOnly && (
        <p className="mx-1 mb-3 rounded-xl border border-[#DDE6DD] bg-[#F7F8F3] px-3 py-2.5 text-sm text-[#2C3A2F]">
          {/* Said plainly, because the alternative is a page that looks like it
              answered the question. Nothing below is a match for what was
              typed — they are the closest spellings on the site, and one of
              them may well be a different animal entirely. */}
          <span className="font-semibold">No exact match found.</span> These are the closest
          spellings on FaunaHub — check the name before following one.
        </p>
      )}

      {response.missingPair && (
        <p className="mx-1 mb-3 rounded-xl border border-[#DDE6DD] bg-[#F7F8F3] px-3 py-2.5 text-sm text-[#2C3A2F]">
          {/* Phrased without an article so it reads correctly for every animal
              name — "a Elephant" and "an Wolf" are both one substitution away. */}
          No {response.missingPair.names[0]} vs {response.missingPair.names[1]} comparison has
          been published yet. Both profiles are below.
        </p>
      )}

      {sections.map((section) => (
        <div key={section.label} role="group" aria-label={section.label} className="mb-3 last:mb-0">
          <p
            aria-hidden="true"
            className="px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#5E6B63]"
          >
            {section.label}
          </p>
          <ul role="presentation" className="space-y-0.5">
            {section.items.map(({ result, index }) => (
              <li key={result.document.id} role="presentation">
                <ResultCard
                  result={result}
                  id={optionId(index)}
                  active={index === activeIndex}
                  onSelect={() => onSelect(result, index)}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ResultCard({
  result,
  id,
  active,
  onSelect,
}: {
  result: SearchResult;
  id: string;
  active: boolean;
  onSelect: () => void;
}) {
  const { document } = result;
  // The type label is always spelled out in text. Nothing about a result's kind
  // is communicated by colour alone.
  const meta = [SEARCH_TYPE_LABEL[document.type], document.category]
    .filter((value, index, all) => value && all.indexOf(value) === index)
    .join(" · ");

  return (
    <Link
      href={document.url}
      id={id}
      // Prefetching is off for every link in this panel. The result list is
      // rebuilt on each keystroke, so Next would speculatively fetch an RSC
      // payload for a page the reader is already scrolling past: measured at
      // 43 requests and 2.8 MB across ten ordinary queries — more than twenty
      // times the size of the search index itself. Every destination is a
      // prerendered static page, so navigation stays fast without it.
      prefetch={false}
      role="option"
      aria-selected={active}
      onClick={onSelect}
      // Hover deliberately does NOT move the selection. It used to, which meant
      // a pointer resting anywhere over the list silently retargeted Enter: a
      // keyboard user arrowing to a result and pressing Enter was sent to
      // whatever the mouse happened to be over instead.
      //
      // tabIndex -1 because these are listbox options, reached with the arrow
      // keys from the input. Left in the tab order they added up to forty stops
      // between the input and the close button. The href is real, so
      // middle-click, copy-link and open-in-new-tab all still work.
      tabIndex={-1}
      data-wmid-cta="search-result"
      className={`block rounded-xl px-3 py-2.5 transition-colors hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] ${
        active ? "bg-[#EFF4E0]" : "hover:bg-[#F1F4EC]"
      }`}
    >
      <span className="flex items-start justify-between gap-3">
        <span className="min-w-0">
          <span className="block truncate text-[15px] font-semibold text-[#17211B]">
            {document.title}
          </span>
          <span className="mt-0.5 block text-xs font-medium text-[#5E6B63]">{meta}</span>
          {document.description && (
            <span className="mt-1 block line-clamp-2 text-[13px] leading-snug text-[#2C3A2F]">
              {document.description}
            </span>
          )}
        </span>
        {active && (
          <span aria-hidden="true" className="mt-1 shrink-0 text-[#063F2A]">
            <CornerArrowIcon />
          </span>
        )}
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ *
 * Empty and initial states
 * ------------------------------------------------------------------ */

function EmptyState({
  response,
  onNavigate,
}: {
  response: SearchResponse;
  onNavigate?: () => void;
}) {
  return (
    <div className="px-2 py-4">
      <p className="text-sm font-semibold text-[#17211B]">No exact match found</p>
      <p className="mt-1 text-sm leading-relaxed text-[#2C3A2F]">
        {response.missingPair
          ? `No ${response.missingPair.names[0]} vs ${response.missingPair.names[1]} comparison has been published yet. Comparisons are written only where the pairing is genuinely useful and both animals are already profiled.`
          : "Nothing on FaunaHub matches that yet. These hubs are the best places to look next."}
      </p>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {FALLBACK_DESTINATIONS.map((destination) => (
          <li key={destination.href}>
            <Link
              href={destination.href}
              onClick={onNavigate}
              prefetch={false}
              data-wmid-cta="search-empty-cta"
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

function InitialState({
  facets,
  browseGroup,
  browseResults,
  onBrowse,
  onNavigate,
  loading,
}: {
  facets: SearchFacets | null;
  browseGroup: string | null;
  browseResults: SearchDocument[];
  onBrowse: (slug: string | null) => void;
  onNavigate?: () => void;
  loading: boolean;
}) {
  const active = facets?.animalGroups.find((group) => group.slug === browseGroup);
  const browseRef = useRef<HTMLDivElement | null>(null);

  // Reveal the list when a chip is chosen. Without this the chip highlights and
  // 187 animals render below the fold, so on a desktop-height panel the click
  // looks like it did nothing.
  useEffect(() => {
    if (!browseGroup) return;
    // Reduced-motion readers get the same reveal without the animated scroll.
    const smooth =
      typeof window !== "undefined" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    browseRef.current?.scrollIntoView({ block: "nearest", behavior: smooth ? "smooth" : "auto" });
  }, [browseGroup]);

  return (
    <div className="px-2 py-2">
      <p className="pb-2 text-[11px] font-semibold uppercase tracking-wider text-[#5E6B63]">
        Explore
      </p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {DISCOVERY_DESTINATIONS.map((destination) => (
          <li key={destination.href}>
            <Link
              href={destination.href}
              onClick={onNavigate}
              prefetch={false}
              data-wmid-cta="search-explore"
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

      {facets && facets.animalGroups.length > 0 && (
        <div className="mt-5">
          <p className="pb-2 text-[11px] font-semibold uppercase tracking-wider text-[#5E6B63]">
            Browse animals by group
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {facets.animalGroups.map((group) => {
              const selected = group.slug === browseGroup;
              return (
                <li key={group.slug}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => onBrowse(selected ? null : group.slug)}
                    className={`min-h-[36px] rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2 ${
                      selected
                        ? "border-[#063F2A] bg-[#063F2A] text-white"
                        : "border-[#CFE0A8] bg-[#EFF4E0] text-[#063F2A] hover:bg-[#E3EDCB]"
                    }`}
                  >
                    {group.label}{" "}
                    <span className={selected ? "text-[#CFE0A8]" : "text-[#5E6B63]"}>
                      {group.count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Coverage is stated rather than implied. The filter reaches the
              animals whose profile records a group, and says how many that is. */}
          <p className="mt-2 text-[11px] leading-snug text-[#5E6B63]">
            {facets.classifiedAnimals} of {facets.totalAnimalProfiles} animal profiles carry a
            recorded group. Groups are the encyclopedia categories the profiles themselves use.
          </p>

          {active && (
            <div ref={browseRef} className="mt-3 scroll-mt-3">
              <p className="pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#5E6B63]">
                {active.label}
                {" — "}
                <Link
                  href={active.href}
                  onClick={onNavigate}
                  prefetch={false}
                  className="font-semibold text-[#063F2A] underline"
                >
                  open the full hub
                </Link>
              </p>
              {/* Height tracks the viewport rather than a fixed 16rem, and this
                  inner list does NOT contain overscroll: a fixed 256px list on a
                  short screen sat flush with the bottom edge, and blocking
                  scroll chaining meant a swipe there could never bring the query
                  field back into view. The panel's own scroller still contains
                  overscroll against the page behind it. */}
              <ul className="max-h-[min(16rem,32vh)] space-y-0.5 overflow-y-auto rounded-xl border border-[#DDE6DD] bg-white p-1.5">
                {browseResults.map((document) => (
                  <li key={document.id}>
                    <Link
                      href={document.url}
                      onClick={onNavigate}
                      prefetch={false}
                      data-wmid-cta="search-browse"
                      className="block rounded-lg px-2.5 py-1.5 text-sm text-[#17211B] transition-colors hover:bg-[#F1F4EC] hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A]"
                    >
                      {document.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {loading && (
        <p className="mt-4 text-xs text-[#5E6B63]">Loading the search index…</p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

function buildAnnouncement(
  loadState: LoadState,
  query: string,
  response: SearchResponse | null,
  visibleCount: number,
  exactCount: number,
): string {
  if (loadState === "error") return "Search could not load.";
  if (!query.trim()) return "Type to search FaunaHub.";
  if (loadState !== "ready") return "Loading search results.";
  if (!response || response.empty) return "No results found.";
  // Every caveat a sighted reader sees has to reach the live region too.
  const missing = response.missingPair
    ? `No ${response.missingPair.names[0]} versus ${response.missingPair.names[1]} comparison has been published. `
    : "";
  if (exactCount === 0) {
    return `${missing}No exact match found. ${visibleCount} spelling suggestion${
      visibleCount === 1 ? "" : "s"
    } shown.`;
  }
  const lead = response.bestMatch ? `Best match: ${response.bestMatch.document.title}. ` : "";
  return `${missing}${lead}${visibleCount} result${visibleCount === 1 ? "" : "s"} shown.`;
}
