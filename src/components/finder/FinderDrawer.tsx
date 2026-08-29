"use client";

/**
 * The mobile filter drawer.
 *
 * Structurally modelled on SearchDialog, this site's established overlay:
 * portal to `document.body`, focus moved in, focus trapped, Escape to close,
 * focus returned to the trigger, body scroll locked, reduced motion respected.
 *
 * The portal is not optional. SiteHeader is `sticky` with `z-50` and the
 * ecosystem bar sits above it at `z-60`, both of which are stacking contexts —
 * a drawer rendered inside the page could never paint above them whatever
 * z-index it carried, so it would open underneath the header on exactly the
 * screens it exists for. Rendering into `document.body` at `z-[70]` puts it
 * above the whole sticky stack while staying below the skip link (`z-90`).
 *
 * The entry animation reuses the `eco-sheet-in` and `eco-fade-in` keyframes the
 * ecosystem panel and the search dialog already ship, rather than adding a
 * fourth. Two reasons: the CSS is on every page whether this component renders
 * or not, so a new keyframe would be bytes paid site-wide for one route; and
 * globals.css carries a `[class*="animate-[eco-"]` reduced-motion guard, so
 * reusing the name inherits that protection instead of needing a second one.
 */
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "./icons";

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]';

function tabbableWithin(root: HTMLElement): HTMLElement[] {
  return [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
    (node) => node.tabIndex >= 0 && node.offsetParent !== null,
  );
}

export interface FinderDrawerProps {
  open: boolean;
  onClose: () => void;
  /** Rendered in the drawer header, beside the title. */
  summary: string;
  /** Focused again when the drawer closes. */
  returnFocusTo?: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
  /** The drawer's own footer actions — reset and apply. */
  footer?: React.ReactNode;
}

export default function FinderDrawer({
  open,
  onClose,
  summary,
  returnFocusTo,
  children,
  footer,
}: FinderDrawerProps) {
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
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

    // Only lock if nobody else already has. The ecosystem banner's panel and
    // the search dialog both lock the body; snapshotting another overlay's
    // "hidden" and writing it back on close leaves the page permanently
    // unscrollable. Whoever locked first owns the unlock.
    if (body.style.overflow === "hidden") return;

    scrollLock.current = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };
    const gap = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    return unlockScroll;
  }, [open, unlockScroll]);

  const close = useCallback(() => {
    onClose();
    unlockScroll();
    requestAnimationFrame(() => returnFocusTo?.current?.focus());
  }, [onClose, unlockScroll, returnFocusTo]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const nodes = tabbableWithin(panel);
      if (nodes.length === 0) {
        event.preventDefault();
        return;
      }
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;
      const inside = active instanceof Node && panel.contains(active);

      // If focus has escaped — a tap on non-focusable drawer padding moves it
      // to <body> — pull it back rather than letting Tab leave the drawer.
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

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  // Move focus into the drawer when it opens.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    const [first] = tabbableWithin(panel);
    first?.focus();
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[70] lg:hidden">
      <div
        className="absolute inset-0 bg-[#17211B]/45 animate-[eco-fade-in_140ms_ease-out] motion-reduce:animate-none"
        onClick={close}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute inset-x-0 bottom-0 flex max-h-[88vh] flex-col rounded-t-2xl bg-white shadow-2xl animate-[eco-sheet-in_170ms_ease-out] motion-reduce:animate-none"
      >
        <div className="flex items-start justify-between gap-3 border-b border-[#DDE6DD] px-4 py-3">
          <div className="min-w-0">
            <h2 id={titleId} className="text-base font-bold text-[#17211B]">
              Filter animals
            </h2>
            <p className="mt-0.5 text-xs text-[#5E6B63]">{summary}</p>
          </div>
          <button
            type="button"
            onClick={close}
            className="-mr-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-[#2C3A2F] transition-colors hover:bg-[#EFF4E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A]"
          >
            <CloseIcon size={18} />
            <span className="sr-only">Close filters</span>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4">
          {children}
        </div>

        {footer && (
          <div className="border-t border-[#DDE6DD] bg-white px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
