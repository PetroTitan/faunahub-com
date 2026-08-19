import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { DISCOVERY_DESTINATIONS } from "@/lib/search/discovery";
import SearchPageClient from "./SearchPageClient";

/**
 * /search — the standalone search page.
 *
 * It exists for three reasons the overlay cannot serve: a search can be linked
 * and shared, a reader arriving from a bookmark lands somewhere sensible, and
 * the WebSite SearchAction in the homepage JSON-LD needs a real target.
 *
 * SEO posture, deliberately restrictive:
 *   - `noindexFollow` — the page must never rank (it is a shell with no content
 *     of its own, and `?q=` would otherwise mint unlimited near-duplicate URLs),
 *     but its links are real paths into published pages and should be followed.
 *   - The canonical is the bare `/search`, so every `?q=` variant consolidates
 *     onto one URL rather than accumulating.
 *   - It is NOT in sitemap.ts. A sitemap entry for a noindex page is a
 *     contradiction Search Console reports as an error.
 *   - It accepts NO query parameter. The query never enters the URL in either
 *     direction, because the site-wide analytics tracker reports
 *     window.location.href — see SearchPageClient for the measurement. The
 *     canonical and the noindex directive remain regardless, so a `?q=` a
 *     reader arrives with from elsewhere still cannot be indexed.
 *
 * The hub links below are server-rendered, so this page is a real crawlable
 * node even with JavaScript disabled — search is an additional discovery layer,
 * never a replacement for the site's own navigation.
 */
export const metadata: Metadata = buildMetadata({
  title: "Search FaunaHub",
  description:
    "Search FaunaHub's animal profiles, comparisons, behavior guides, taxonomy, conservation pages and pet care tools.",
  path: "/search",
  noindexFollow: true,
});

export default function SearchPage() {
  return (
    <main id="main-content" className="container-content py-6 sm:py-10">
      <Breadcrumbs items={[{ label: "Search" }]} />

      <h1 className="section-title mt-4">Search FaunaHub</h1>
      <p className="section-subtitle max-w-2xl">
        Find an animal by name or scientific name, put two animals side by side, or jump
        straight to a guide, tool or hub.
      </p>

      <SearchPageClient />

      <section aria-labelledby="browse-heading" className="mt-10">
        <h2 id="browse-heading" className="text-xl font-bold text-[#17211B]">
          Browse instead
        </h2>
        <p className="mt-1 text-sm text-[#5E6B63]">
          Every one of these is a full index you can read straight through.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DISCOVERY_DESTINATIONS.map((destination) => (
            <li key={destination.href}>
              <Link
                href={destination.href}
                className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-4 transition-colors hover:border-[#CFE0A8] hover:bg-[#F7F8F3] hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
              >
                <span className="block text-sm font-semibold text-[#17211B]">
                  {destination.label}
                </span>
                <span className="mt-1 block text-xs leading-snug text-[#5E6B63]">
                  {destination.blurb}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
