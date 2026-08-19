"use client";

/**
 * SearchTrigger — the globally mounted search control in the site header.
 *
 * This is the only search code that ships on every page, so it is kept
 * deliberately thin: a button, an open flag, and the shortcut listener. The
 * dialog, the relevance engine and the index are all pulled in on demand, so a
 * reader who never searches downloads none of it.
 *
 * The trigger itself renders in the header; the dialog it opens portals to the
 * document body — see SearchDialog for why that is required rather than
 * preferred.
 */
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { trackSearchEvent } from "@/lib/search/analytics";
import { SEARCH_INDEX_URL } from "@/lib/search/types";
import { SearchIcon } from "./icons";

// Loaded on demand. React's own `lazy` rather than `next/dynamic`: the dialog
// only exists in response to a reader action, and next/dynamic drags its own
// ~8 KB loader runtime onto all 851 routes to defer a component a fraction of
// that size. `lazy` uses machinery already in the shared React bundle.
//
// It is never server-rendered because it is only ever mounted from an event
// handler, so no markup for it reaches any prerendered page.
const SearchDialog = lazy(() => import("./SearchDialog"));

/** True while any other modal dialog owns the screen. */
function anotherDialogIsOpen(): boolean {
  // The ecosystem banner's panel is also `aria-modal` and paints at z-80, above
  // this dialog. Opening on top of it produced two competing focus traps and
  // two modal roots, with the search input focused but invisible underneath
  // the panel a mouse user could still see.
  return document.querySelector('[role="dialog"][aria-modal="true"]') !== null;
}

/** Elements whose typing must never be hijacked by a single-key shortcut. */
function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}

export default function SearchTrigger() {
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const warmed = useRef(false);

  useEffect(() => {
    // Only affects the hint text; the listener accepts both modifiers either way.
    setIsMac(/Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent));
  }, []);

  const openSearch = useCallback((placement: "header" | "shortcut") => {
    if (anotherDialogIsOpen()) return;
    setOpen(true);
    trackSearchEvent("search_open", { placement });
  }, []);

  /**
   * Warm the dialog chunk and the index on intent, not on load.
   *
   * Both imports are dynamic so neither lands in this component's chunk; by the
   * time a reader has moved the pointer onto the button and pressed it, the
   * fetch is usually already in flight.
   */
  const warm = useCallback(() => {
    // Once per page. Pointer-enter and focus both fire, and both fire again on
    // every reopen — unguarded, twenty open/close cycles issued forty-three
    // requests for the same asset.
    if (warmed.current) return;
    warmed.current = true;

    // Start the index download IMMEDIATELY, not after the chunk that knows how
    // to parse it has arrived. Measured on Slow 3G, waiting for the JS first
    // cost roughly half a second before the first result could appear; both
    // requests now run in parallel and the loader's own fetch is then served
    // from the HTTP cache. The body is consumed so the browser actually stores
    // it rather than discarding an unread stream.
    void fetch(SEARCH_INDEX_URL, { credentials: "omit" })
      .then((response) => response.arrayBuffer())
      .catch(() => {});
    void import("./SearchDialog");
    void import("@/lib/search/load-index").then((module) => module.prefetchSearchEngine());
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isCommandK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      const isSlash = event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey;
      if (!isCommandK && !isSlash) return;

      // Never steal a bare "/" from a field the reader is typing in — that is
      // what stops it opening search mid-sentence in the compare finder or a
      // calculator input. A modified chord is not a character the field would
      // have received, so it stays live everywhere, including inside search's
      // own input.
      if (isSlash && isTypingTarget(event.target)) return;

      event.preventDefault();
      setOpen((wasOpen) => {
        if (wasOpen) return true;
        if (anotherDialogIsOpen()) return false;
        trackSearchEvent("search_open", { placement: "shortcut" });
        return true;
      });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => openSearch("header")}
        onPointerEnter={warm}
        onFocus={warm}
        aria-label="Search FaunaHub"
        aria-haspopup="dialog"
        aria-expanded={open}
        className="
          inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-lg
          border border-[#DDE6DD]
          bg-white px-2.5 py-2 text-sm font-medium text-[#2C3A2F] transition-colors
          md:min-h-[40px] md:min-w-0
          hover:border-[#CFE0A8] hover:bg-[#F7F8F3]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2
          md:px-3
        "
      >
        <SearchIcon size={16} />
        {/* The word is shown from `md` up, where the header has room for it.
            Below that the button is the icon alone, but the accessible name on
            the button itself is unconditional. */}
        <span className="hidden md:inline">Search</span>
        <kbd
          aria-hidden="true"
          className="hidden rounded border border-[#DDE6DD] bg-[#F7F8F3] px-1.5 py-0.5 font-sans text-[11px] font-semibold text-[#5E6B63] lg:inline"
        >
          {isMac ? "⌘K" : "Ctrl K"}
        </kbd>
      </button>

      {open && (
        // No fallback: the chunk is warmed on hover and focus, and a flash of
        // placeholder chrome would be worse than the few milliseconds it saves.
        <Suspense fallback={null}>
          <SearchDialog open={open} onClose={() => setOpen(false)} returnFocusTo={triggerRef} />
        </Suspense>
      )}
    </>
  );
}
