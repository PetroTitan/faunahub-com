"use client";

/**
 * SearchDialog — the modal shell around SearchPanel.
 *
 * Structurally modelled on EcosystemPanel, which is this site's established
 * overlay: portal to `document.body`, focus moved in, focus trapped, Escape to
 * close, focus returned to the trigger, body scroll locked, reduced motion
 * respected.
 *
 * The portal is not optional. SiteHeader is `sticky` with `z-50`, which makes it
 * a stacking context — a dialog rendered inside the header could never paint
 * above the ecosystem bar (`z-60`) no matter what z-index it carried. Rendering
 * into `document.body` at `z-[70]` puts it above the whole sticky stack while
 * staying below the skip link (`z-90`).
 *
 * Layout differs by width because the two jobs differ: on a phone a search sheet
 * that does not fill the screen leaves a cramped list under a keyboard, and on a
 * desktop a full-screen takeover for a lookup is disorienting.
 */
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "./icons";
import SearchPanel from "./SearchPanel";

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]';

/**
 * The elements Tab will actually visit, in order.
 *
 * Filtering on `tabIndex >= 0` is what makes the trap agree with the browser:
 * the result options are `a[href]` — which the selector matches — but they
 * carry `tabindex="-1"` because they are listbox options reached with the arrow
 * keys. Counting them as the trap's boundaries put the real last stop in the
 * middle of the list, so Tab from the close button walked straight out of the
 * dialog.
 */
function tabbableWithin(root: HTMLElement): HTMLElement[] {
  return [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
    (node) => node.tabIndex >= 0 && node.offsetParent !== null,
  );
}

export interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
  /** Focused again when the dialog closes. */
  returnFocusTo?: React.RefObject<HTMLElement | null>;
}

export default function SearchDialog({ open, onClose, returnFocusTo }: SearchDialogProps) {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const scrollLock = useRef<{ overflow: string; paddingRight: string } | null>(null);
  const titleId = useId();

  // Portals need the DOM; enabling only after mount avoids an SSR mismatch.
  useEffect(() => setMounted(true), []);

  const unlockScroll = useCallback(() => {
    if (!scrollLock.current) return;
    document.body.style.overflow = scrollLock.current.overflow;
    document.body.style.paddingRight = scrollLock.current.paddingRight;
    scrollLock.current = null;
  }, []);

  useEffect(() => {
    if (!open) return;
    const body = document.body;

    // Only lock if nobody else already has. The ecosystem banner's own panel
    // locks the body on mobile, and snapshotting its "hidden" and writing it
    // back on close left the page permanently unscrollable after both dialogs
    // were dismissed — a state only a reload could recover from. Whoever locked
    // first owns the unlock.
    if (body.style.overflow === "hidden") return;

    scrollLock.current = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };
    // Compensate for the scrollbar so locking does not shift the page behind.
    const gap = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    return unlockScroll;
  }, [open, unlockScroll]);

  const close = useCallback(() => {
    onClose();
    unlockScroll();
    // After the dialog unmounts, put focus back where the reader left it.
    requestAnimationFrame(() => returnFocusTo?.current?.focus());
  }, [onClose, unlockScroll, returnFocusTo]);

  // Escape closes; Tab is trapped inside the dialog.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;
      const nodes = tabbableWithin(dialog);
      if (nodes.length === 0) {
        event.preventDefault();
        return;
      }
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;
      const inside = active instanceof Node && dialog.contains(active);

      // If focus has escaped — a click on non-focusable dialog padding moves it
      // to <body> — pull it back rather than letting Tab leave the dialog.
      if (!inside) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
        return;
      }
      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [open, close]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[70] print:hidden">
      {/* Backdrop. Presentational: Escape and the labelled close button are the
          keyboard routes out, so this needs no role of its own. */}
      <div
        aria-hidden="true"
        onClick={close}
        className="absolute inset-0 bg-[#17211B]/45 animate-[eco-fade-in_140ms_ease-out] motion-reduce:animate-none"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="
          absolute inset-x-0 top-0 flex h-[100dvh] flex-col bg-white
          animate-[eco-sheet-in_160ms_ease-out] motion-reduce:animate-none
          sm:left-1/2 sm:right-auto sm:top-[calc(var(--sticky-stack-height)+12px)]
          sm:h-auto sm:max-h-[min(640px,calc(100dvh-var(--sticky-stack-height)-32px))]
          sm:w-[min(680px,calc(100vw-32px))] sm:-translate-x-1/2
          sm:rounded-2xl sm:border sm:border-[#DDE6DD] sm:shadow-xl
          sm:animate-[eco-panel-in_160ms_ease-out]
          [@media(max-height:600px)]:inset-0 [@media(max-height:600px)]:left-0
          [@media(max-height:600px)]:top-0 [@media(max-height:600px)]:h-[100dvh]
          [@media(max-height:600px)]:w-auto [@media(max-height:600px)]:max-h-none
          [@media(max-height:600px)]:translate-x-0 [@media(max-height:600px)]:rounded-none
          [@media(max-height:600px)]:border-0 [@media(max-height:600px)]:shadow-none
        "
      >
        <h2 id={titleId} className="sr-only">
          Search FaunaHub
        </h2>

        {/* Close control. Kept above the input on mobile so it stays reachable
            with the on-screen keyboard open, and sized to a 44px touch target. */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#EAF0EA] px-3 py-2 sm:px-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5E6B63]">
            Search FaunaHub
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Close search"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#2C3A2F] transition-colors hover:bg-[#F1F4EC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2 sm:h-9 sm:w-9"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        <SearchPanel placement="overlay" onNavigate={close} autoFocus />

        {/* Hidden on short viewports as well as narrow ones. On a landscape
            phone this row took 36px of the 129px left for results — more space
            than the one visible result — to describe shortcuts a touch user
            does not have. */}
        <p className="hidden shrink-0 items-center gap-3 border-t border-[#EAF0EA] px-4 py-2 text-[11px] text-[#5E6B63] sm:flex [@media(max-height:600px)]:hidden">
          <span>
            <kbd className="rounded border border-[#DDE6DD] bg-[#F7F8F3] px-1">↑</kbd>{" "}
            <kbd className="rounded border border-[#DDE6DD] bg-[#F7F8F3] px-1">↓</kbd> to navigate
          </span>
          <span>
            <kbd className="rounded border border-[#DDE6DD] bg-[#F7F8F3] px-1">Enter</kbd> to open
          </span>
          <span>
            <kbd className="rounded border border-[#DDE6DD] bg-[#F7F8F3] px-1">Esc</kbd> to close
          </span>
        </p>
      </div>
    </div>,
    document.body,
  );
}
