import type { Metadata } from "next";
import Link from "next/link";

/**
 * The global 404.
 *
 * Next.js App Router renders this file for any unmatched path and for any
 * `notFound()` call, and it serves it with a real HTTP 404 — the status matters
 * as much as the copy, because a "soft 404" that answers 200 invites search
 * engines to index a page that says nothing.
 *
 * This is a RECOVERY page, not a content page. It is deliberately not in the
 * sitemap (it has no route of its own to submit), it is marked `noindex` so a
 * crawler that reaches it never keeps it, and it ships no client JavaScript:
 * the site header already carries the global search trigger, so duplicating a
 * search box here would add a client bundle to the one page a reader wants to
 * leave immediately.
 *
 * The destinations below are the site's real top-level hubs. There is no
 * "popular pages" list, because FaunaHub does not measure page popularity and
 * a fabricated one would be a claim the site cannot support.
 *
 * The rendered page carries TWO robots meta tags — Next injects a bare
 * `noindex` of its own for not-found, and the declaration below adds
 * `noindex, follow`. They agree, so there is nothing for a crawler to resolve;
 * the explicit one is kept because it states the intent in the file and is
 * guarded by tests/scientific-names.test.ts, rather than depending on a
 * framework default staying put.
 */
export const metadata: Metadata = {
  title: "Page Not Found — FaunaHub",
  description:
    "The page you are looking for could not be found. Browse FaunaHub's animal encyclopedia, Animal Finder, comparisons and taxonomy guides instead.",
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  {
    href: "/animal-encyclopedia",
    label: "Animal Encyclopedia",
    blurb: "Every animal profile, arranged by group.",
  },
  {
    href: "/animal-finder",
    label: "Animal Finder",
    blurb: "Search and filter profiles by group and taxonomy.",
  },
  {
    href: "/animal-compare",
    label: "Animal Compare Center",
    blurb: "Side-by-side comparisons of two animals.",
  },
  {
    href: "/animal-taxonomy",
    label: "Animal Taxonomy",
    blurb: "How animal groups relate to one another.",
  },
  {
    href: "/animal-intelligence-and-behavior",
    label: "Intelligence & Behavior",
    blurb: "How animals learn, communicate and live together.",
  },
  {
    href: "/",
    label: "FaunaHub home",
    blurb: "Start again from the beginning.",
  },
];

export default function NotFound() {
  return (
    <main id="main-content">
      <header className="bg-white border-b border-[#DDE6DD] py-12 sm:py-16">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#5E6B63]">
              Error 404
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#17211B]">
              Page not found
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#2C3A2F]">
              The animal, comparison or guide you are looking for may have moved, or the
              address may be incorrect. Nothing is lost — the whole collection is still
              reachable from the links below, and the search button in the header will
              look across every page on the site.
            </p>
          </div>
        </div>
      </header>

      <div className="container-content py-12 sm:py-16">
        <h2 className="text-xl font-bold text-[#17211B]">Continue from here</h2>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((destination) => (
            <li key={destination.href}>
              <Link
                href={destination.href}
                prefetch={false}
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
      </div>
    </main>
  );
}
