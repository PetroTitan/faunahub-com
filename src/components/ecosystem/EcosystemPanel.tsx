"use client";

/**
 * EcosystemPanel — the only client island in the ecosystem banner.
 *
 * Owns the "Explore all products" trigger and the directory it opens:
 *   - desktop (md+): an anchored popover under the sticky stack
 *   - mobile: a bottom sheet with a dimmed backdrop and body-scroll lock
 *
 * Handles focus movement into the panel, a focus trap, Escape-to-close,
 * outside-click-to-close, focus return to the trigger, and reduced-motion.
 * The panel content is rendered only while open, so there is no always-hidden
 * duplicate link block and no extra weight in the initial HTML.
 */
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  CURRENT_PRODUCT_ID,
  ECOSYSTEM_COPY,
  trackEcosystemEvent,
} from "@/lib/ecosystem/config";
import EcosystemDirectory from "./EcosystemDirectory";
import { ChevronDownIcon, CloseIcon, GridIcon } from "./icons";

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

const MOBILE_QUERY = "(max-width: 767px)";

export default function EcosystemPanel({
  className,
}: {
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const scrollLock = useRef<{ overflow: string; paddingRight: string } | null>(
    null,
  );

  // Portals require the DOM; only enable after mount to avoid SSR mismatch.
  useEffect(() => setMounted(true), []);

  const lockScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    if (scrollLock.current) return; // already locked
    if (!window.matchMedia(MOBILE_QUERY).matches) return; // sheet only
    const body = document.body;
    scrollLock.current = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };
    const gap = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    if (!scrollLock.current) return;
    document.body.style.overflow = scrollLock.current.overflow;
    document.body.style.paddingRight = scrollLock.current.paddingRight;
    scrollLock.current = null;
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    unlockScroll();
    // Return focus to the trigger after the panel unmounts.
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, [unlockScroll]);

  const openPanel = useCallback(() => {
    setOpen(true);
    lockScroll();
    trackEcosystemEvent("ecosystem_banner_open", {
      sourceProduct: CURRENT_PRODUCT_ID,
      placement: "ecosystem-bar",
      currentPath:
        typeof window !== "undefined" ? window.location.pathname : undefined,
    });
  }, [lockScroll]);

  // Move focus into the panel once it renders.
  useEffect(() => {
    if (!open) return;
    const t = requestAnimationFrame(() => closeRef.current?.focus());
    return () => cancelAnimationFrame(t);
  }, [open]);

  // Escape + focus trap.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const nodes = panel.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (nodes.length === 0) {
        e.preventDefault();
        return;
      }
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;
      const inPanel = active instanceof Node && panel.contains(active);
      // If focus has escaped the panel (e.g. a click on non-focusable dialog
      // padding moved it to <body>), pull it back rather than let Tab leave.
      if (!inPanel) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [open, close]);

  // Outside-click / outside-tap closes (works for both popover and sheet).
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return; // trigger toggles itself
      close();
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [open, close]);

  // Keep the scroll-lock aligned with the breakpoint while open: the mobile
  // sheet locks body scroll, the desktop popover does not. This heals a resize
  // across the `md` boundary while the panel is open.
  useEffect(() => {
    if (!open || typeof window === "undefined") return;
    const mql = window.matchMedia(MOBILE_QUERY);
    const onChange = () => (mql.matches ? lockScroll() : unlockScroll());
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [open, lockScroll, unlockScroll]);

  // Safety: always release the scroll lock on unmount.
  useEffect(() => unlockScroll, [unlockScroll]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => (open ? close() : openPanel())}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#063F2A] px-2.5 py-1.5 text-xs font-semibold text-white no-underline transition-colors hover:bg-[#0F5A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF1EA] ${
          className ?? ""
        }`}
      >
        <GridIcon size={14} />
        <span className="hidden sm:inline">{ECOSYSTEM_COPY.cta}</span>
        <span className="sm:hidden">
          Explore<span className="sr-only"> products</span>
        </span>
        <ChevronDownIcon
          size={14}
          className={`transition-transform duration-150 motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[80]">
            {/* Backdrop: dimmed on mobile, invisible on desktop (popover). */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#17211B]/40 animate-[eco-fade-in_160ms_ease-out] motion-reduce:animate-none md:bg-transparent"
            />

            <div
              ref={panelRef}
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label={`${ECOSYSTEM_COPY.identity} — all products`}
              className="
                absolute inset-x-0 bottom-0
                max-h-[82vh] overflow-y-auto overscroll-contain
                rounded-t-2xl border-t border-[#DDE6DD] bg-white p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-2xl
                animate-[eco-sheet-in_190ms_ease-out] motion-reduce:animate-none
                md:inset-x-auto md:bottom-auto md:right-4
                md:top-[calc(var(--ecosystem-bar-height)+8px)]
                md:w-[min(760px,calc(100vw-2rem))]
                md:max-h-[min(78vh,640px)]
                md:rounded-2xl md:border md:p-5
                md:animate-[eco-panel-in_180ms_ease-out]
              "
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-[#17211B]">
                    {ECOSYSTEM_COPY.identity}
                  </p>
                  <p className="text-xs text-[#5E6B63]">{ECOSYSTEM_COPY.brand}</p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  className="-mr-1.5 -mt-1.5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#5E6B63] transition-colors hover:bg-[#EFF1EB] hover:text-[#17211B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
                >
                  <CloseIcon size={20} />
                  <span className="sr-only">Close product directory</span>
                </button>
              </div>

              <EcosystemDirectory />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
