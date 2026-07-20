/**
 * EcosystemDirectory — the scannable body of the "Explore all products" panel.
 *
 * Pure presentational component (no client state of its own) rendered inside
 * the client panel. Sections and cards are derived entirely from the registry.
 */
import {
  getDirectorySections,
  totalProductCount,
} from "@/lib/ecosystem/products";
import {
  ECOSYSTEM_COPY,
  HELPERG_HOME_URL,
  CURRENT_PRODUCT_ID,
  trackEcosystemEvent,
} from "@/lib/ecosystem/config";
import EcosystemProductLink from "./EcosystemProductLink";
import { ExternalLinkIcon } from "./icons";

export default function EcosystemDirectory() {
  const sections = getDirectorySections();

  return (
    <div>
      <p className="mb-4 text-sm leading-relaxed text-[#5E6B63]">
        {ECOSYSTEM_COPY.tagline}
      </p>

      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={`eco-sec-${section.id}`}>
            <h2
              id={`eco-sec-${section.id}`}
              className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-[#5E6B63]"
            >
              {section.title}
            </h2>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {section.products.map((product) => (
                <EcosystemProductLink key={product.id} product={product} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-start gap-2 border-t border-[#E2E9DE] pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#5E6B63]">
          {totalProductCount()} platforms and apps in the HELPERG ecosystem.
        </p>
        <a
          href={HELPERG_HOME_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEcosystemEvent("ecosystem_product_click", {
              sourceProduct: CURRENT_PRODUCT_ID,
              targetProduct: "helperg",
              platform: "website",
              placement: "directory-footer",
              currentPath:
                typeof window !== "undefined"
                  ? window.location.pathname
                  : undefined,
            })
          }
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#063F2A] no-underline hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
        >
          Visit HELPERG.com
          <ExternalLinkIcon size={13} />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
