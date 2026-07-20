/**
 * EcosystemBar — the globally mounted HELPERG ecosystem strip.
 *
 * Mounted once at the very top of the shared public layout, above the site
 * header, as the top layer of a coordinated sticky stack. Server-rendered:
 * the identity, the timeline links, and the trigger markup are all in the
 * initial HTML. Only the "Explore all products" panel behavior is a client
 * island (EcosystemPanel).
 *
 * Height is driven by the `--ecosystem-bar-height` custom property (see
 * globals.css) so the site header can offset itself by exactly the same value
 * — the banner and header never overlap and there is no layout shift.
 */
import { CURRENT_PRODUCT_ID, ECOSYSTEM_COPY } from "@/lib/ecosystem/config";
import { getProductById } from "@/lib/ecosystem/products";
import EcosystemTimeline from "./EcosystemTimeline";
import EcosystemPanel from "./EcosystemPanel";
import { GridIcon } from "./icons";

export default function EcosystemBar() {
  const current = getProductById(CURRENT_PRODUCT_ID);

  return (
    <nav
      aria-label={ECOSYSTEM_COPY.navLabel}
      className="ecosystem-bar sticky top-0 z-[60] h-[var(--ecosystem-bar-height)] border-b border-[#DBE4DA] bg-[#EEF1EA] pt-[env(safe-area-inset-top)] print:hidden"
    >
      <div className="container-content flex h-full items-center justify-between gap-3">
        {/* Identity + timeline */}
        <div className="flex min-w-0 items-center gap-2.5">
          <span
            aria-hidden="true"
            className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-[#063F2A] text-white"
          >
            <GridIcon size={13} />
          </span>

          <span className="shrink-0 whitespace-nowrap text-[13px] leading-none">
            <span className="font-bold text-[#063F2A]">HELPERG</span>
            {/* "Ecosystem" is dropped on the narrowest screens so the current
                product label below is never clipped. */}
            <span className="hidden font-medium text-[#5E6B63] sm:inline">
              {" "}
              Ecosystem
            </span>
          </span>

          {/* Current product — compact indicator on mobile only */}
          {current && (
            <span className="flex min-w-0 items-center gap-1.5 text-[13px] md:hidden">
              <span aria-hidden="true" className="text-[#B7C3B4]">
                ·
              </span>
              <span className="inline-flex min-w-0 items-center gap-1">
                <span
                  aria-hidden="true"
                  className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#0F5A3A]"
                />
                <span className="truncate font-semibold text-[#063F2A]">
                  {current.name}
                </span>
                <span className="sr-only">— current product</span>
              </span>
            </span>
          )}

          {/* Full timeline — tablet and desktop */}
          <span
            aria-hidden="true"
            className="hidden h-4 w-px shrink-0 bg-[#C6D3C4] md:block"
          />
          <div className="hidden min-w-0 md:block">
            <EcosystemTimeline currentProductId={CURRENT_PRODUCT_ID} />
          </div>
        </div>

        <EcosystemPanel className="shrink-0" />
      </div>
    </nav>
  );
}
