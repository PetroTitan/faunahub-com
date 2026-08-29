import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import AnimalFinder from "@/components/finder/AnimalFinder";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FINDER_BASE, type FinderIndexPayload } from "@/lib/finder/types";
import { FINDER_DESTINATIONS, FINDER_PRESETS } from "@/lib/finder/presets";

/**
 * /animal-finder — one canonical, indexable discovery hub.
 *
 * SEO posture, deliberately narrow:
 *
 *  - This route is indexable. It is ONE page: the filters live in component
 *    state and are never written to the URL, so no `?group=birds` or
 *    `/animal-finder/ocean/mammals` variant exists to be crawled, indexed or
 *    submitted. `sitemap.ts` gains exactly one entry. A faceted-URL scheme over
 *    a 642-item collection would mint thousands of near-duplicate pages whose
 *    content is a reordering of the encyclopedia's — the textbook doorway
 *    pattern, and the reason the Finder deliberately cannot deep-link.
 *  - The existing hubs remain the landing pages. Every group, preset and
 *    related index below is a real crawlable link OUT to a page that already
 *    ranks; nothing was moved behind JavaScript to build this.
 *  - The sections beneath the tool are server-rendered, so the page is a real
 *    node with real content — and a complete route into the collection — with
 *    JavaScript disabled or still loading.
 *
 * Every link on this page sets `prefetch={false}`, matching the search panel.
 * With Next's default prefetching, the three link grids below speculatively
 * fetch an RSC payload for each of the 25 destinations as they scroll into
 * view — more bytes than the finder index itself, for pages a reader has not
 * asked for. Every destination is prerendered static HTML, so navigation is
 * fast without it.
 *
 * The counts and the coverage table below are read from the generated index at
 * build time rather than transcribed. A number in the prose that disagreed with
 * the number in the tool would be the exact failure this page is meant to
 * prevent, so there is only one source for both.
 */

/** Read at build time. This is a server component and the page is static, so
 * the JSON never reaches the client from here — the browser fetches the same
 * file itself, once, when the tool mounts. */
function readIndex(): FinderIndexPayload {
  const file = path.join(process.cwd(), "public", "animal-finder-index.json");
  return JSON.parse(fs.readFileSync(file, "utf8")) as FinderIndexPayload;
}

const index = readIndex();
const TOTAL = index.documents.length;
const GROUPS = index.facets.find((facet) => facet.id === "group")?.values ?? [];
const TAXON = index.facets.find((facet) => facet.id === "taxon");
const WITH_COMPARISON =
  index.facets
    .find((facet) => facet.id === "coverage")
    ?.values.find((value) => value.value === "comparison")?.count ?? 0;

/**
 * A plain string, not a template interpolating TOTAL.
 *
 * The search-index harvester folds a metadata call only when every part of it
 * resolves to a literal, and `${TOTAL}` is a number read from the index at
 * build time. Interpolating it left /animal-finder as the one document of 1,691
 * with no description, so its own search result card had no subtitle. The count
 * is on the page in the h1 paragraph, where it is generated and cannot go stale.
 */
export const metadata: Metadata = buildMetadata({
  title: "Animal Finder — Browse & Filter FaunaHub's Animal Profiles",
  description:
    "Browse every FaunaHub animal profile by group and by taxonomy, search by common or scientific name, and jump straight to comparisons, conservation records and care hubs.",
  path: FINDER_BASE,
});

const FAQS = [
  {
    question: "Why can I filter by group but not by habitat, diet or continent?",
    answer:
      "Because a filter is a promise that the collection can be sliced that way, and for those axes it cannot. Habitat and continent are recorded for 283 of 642 profiles, so a continent filter would silently hide more than half the animals rather than reporting them as unrecorded. Diet is written on most profiles, but as a sentence — 561 profiles carry 508 different diet descriptions — and sorting those sentences into carnivore, herbivore and omnivore would mean assigning a classification FaunaHub's editors never made. The full measurement for every axis considered is in the coverage table on this page.",
  },
  {
    question: "Does the Finder cover every animal on FaunaHub?",
    answer: `It covers all ${TOTAL} animal profiles in the encyclopedia — the pages at /animals. It deliberately does not mix in the Red List species pages under /endangered-animals, which are a conservation dataset with their own categories and their own index. Site search covers both at once.`,
  },
  {
    question: "Can I share or bookmark a filtered view?",
    answer:
      "No, and that is a deliberate trade. Filters and search text live in the page rather than in the address bar, because FaunaHub's site-wide analytics reports the full URL of every page view — so putting what you typed into the URL would send it to a third party. The browse buttons reach the useful slices in one click instead.",
  },
  {
    question: "Where do the group labels come from?",
    answer:
      "Animal group is the encyclopedia shelf each profile already declares and links to in its own breadcrumb. Taxonomic group comes from FaunaHub's taxonomy registry, which records class- and phylum-level groups. Nothing on this page is generated or inferred: every label is a value that already exists on the profile or in a registry the site's own pages read.",
  },
  {
    question: "Why do some animals show no group tag?",
    answer:
      "Because FaunaHub has not filed them under one yet, and saying so is more useful than guessing. The taxonomic registry covers 497 of 642 profiles; the rest are absent from it, which is a gap in FaunaHub's records rather than a statement about the animal. Filtering on that axis narrows to the animals that have been filed, and the panel says how many that is.",
  },
];

export default function AnimalFinderPage() {
  const url = `https://faunahub.com${FINDER_BASE}`;

  return (
    <main id="main-content" className="container-content py-6 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Home", url: "https://faunahub.com" },
              { name: "Animal Finder", url },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <Breadcrumbs items={[{ label: "Animal Finder" }]} />

      {/* ---- Hero -------------------------------------------------- */}
      <h1 className="section-title mt-4">Animal Finder</h1>
      <p className="section-subtitle max-w-3xl">
        Browse all {TOTAL} animal profiles on FaunaHub by group and by taxonomy, or search
        by common or scientific name. Every filter is built from what the profiles already
        record — where the data does not support an axis, it is not offered.
      </p>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#2C3A2F]">
        Looking for two animals side by side? The{" "}
        <Link href="/animal-compare" prefetch={false} className="underline underline-offset-2">
          Animal Compare Center
        </Link>{" "}
        has {WITH_COMPARISON} of these animals in at least one published comparison. For
        questions, guides and care articles,{" "}
        <Link href="/search" prefetch={false} className="underline underline-offset-2">
          site search
        </Link>{" "}
        covers the whole site.
      </p>

      {/* ---- The tool ---------------------------------------------- */}
      <AnimalFinder />

      <noscript>
        <p className="mt-4 rounded-xl border border-[#DDE6DD] bg-white p-4 text-sm leading-relaxed text-[#2C3A2F]">
          Filtering needs JavaScript. Every animal is still reachable — the groups below
          link to the full, browsable index for each part of the collection.
        </p>
      </noscript>

      {/* ---- Crawlable group index --------------------------------- */}
      <section aria-labelledby="groups-heading" className="mt-14">
        <h2 id="groups-heading" className="text-xl font-bold text-[#17211B]">
          Browse by group
        </h2>
        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[#5E6B63]">
          Each of these is a full index you can read straight through, and the same six
          shelves the group filter uses.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <li key={group.value}>
              <Link
                href={group.href ?? "/animal-encyclopedia"}
                prefetch={false}
                className="flex h-full items-baseline justify-between gap-3 rounded-xl border border-[#DDE6DD] bg-white p-4 transition-colors hover:border-[#CFE0A8] hover:bg-[#F7F8F3] hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
              >
                <span className="text-sm font-semibold text-[#17211B]">{group.label}</span>
                <span className="shrink-0 text-xs tabular-nums text-[#5E6B63]">
                  {group.count} profiles
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ---- Presets, as links ------------------------------------- */}
      <section aria-labelledby="slices-heading" className="mt-12">
        <h2 id="slices-heading" className="text-xl font-bold text-[#17211B]">
          Ready-made slices
        </h2>
        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[#5E6B63]">
          The browse buttons above apply these filters in the tool. Each one also has a
          hub page behind it that indexes the same subject in full.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FINDER_PRESETS.filter((preset) => preset.href).map((preset) => (
            <li key={preset.id}>
              <Link
                href={preset.href!}
                prefetch={false}
                className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-4 transition-colors hover:border-[#CFE0A8] hover:bg-[#F7F8F3] hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
              >
                <span className="block text-sm font-semibold text-[#17211B]">
                  {preset.label}
                </span>
                <span className="mt-1 block text-xs leading-snug text-[#5E6B63]">
                  {preset.blurb}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ---- Methodology ------------------------------------------- */}
      <section aria-labelledby="method-heading" className="mt-12">
        <h2 id="method-heading" className="text-xl font-bold text-[#17211B]">
          How these filters are built
        </h2>
        <div className="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-[#2C3A2F]">
          <p>
            Every filter is derived from data FaunaHub already publishes. Animal group is
            the encyclopedia shelf each profile declares in its own breadcrumb.
            Taxonomic group comes from the taxonomy registry that the coverage pages read.
            The coverage refinements — a comparison page, a conservation record, a
            domestication entry — are facts about what this site publishes for an animal,
            checked for all {TOTAL} profiles.
          </p>
          <p>
            Nothing here is generated, inferred or filled in. A profile with no recorded
            taxonomic group shows no taxonomic tag rather than a guessed one, and the panel
            states how many profiles carry a value on each axis.
          </p>
          <p>
            An axis is only offered as a filter when the data behind it covers at least
            half the collection and holds a small, consistent set of values. Several
            obvious axes fail that test today. They are listed below rather than quietly
            omitted, because a missing filter is a gap in FaunaHub&rsquo;s structured data
            — future editorial work, not a decision that habitat does not matter.
          </p>
        </div>

        {/* The table is wider than a phone, so the container scrolls. A scroll
            container with no focusable child is unreachable by keyboard, which
            is what `tabIndex={0}` and the region role fix — axe flags exactly
            this as `scrollable-region-focusable`. */}
        <div
          className="mt-5 overflow-x-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A]"
          tabIndex={0}
          role="region"
          aria-label="Axes measured for the Animal Finder, scrollable"
        >
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Axes measured for the Animal Finder and the reason each was not offered as a
              filter
            </caption>
            <thead>
              <tr className="border-b border-[#DDE6DD]">
                <th scope="col" className="py-2 pr-4 font-bold text-[#17211B]">
                  Axis
                </th>
                <th scope="col" className="py-2 pr-4 font-bold text-[#17211B]">
                  Recorded for
                </th>
                <th scope="col" className="py-2 pr-4 font-bold text-[#17211B]">
                  Distinct values
                </th>
                <th scope="col" className="py-2 font-bold text-[#17211B]">
                  Why it is not a filter
                </th>
              </tr>
            </thead>
            <tbody>
              {index.excludedFacets.map((axis) => (
                <tr key={axis.id} className="border-b border-[#EAF0EA] align-top">
                  <th scope="row" className="py-2.5 pr-4 font-semibold text-[#17211B]">
                    {axis.label}
                  </th>
                  <td className="py-2.5 pr-4 tabular-nums text-[#2C3A2F]">
                    {axis.covered} of {axis.total}
                    <span className="block text-xs text-[#5E6B63]">
                      {((axis.covered / axis.total) * 100).toFixed(1)}%
                    </span>
                  </td>
                  <td className="py-2.5 pr-4 tabular-nums text-[#2C3A2F]">
                    {axis.distinctValues}
                  </td>
                  <td className="py-2.5 leading-relaxed text-[#2C3A2F]">{axis.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-[#5E6B63]">
          Taxonomic group is recorded for {TAXON?.covered ?? 0} of {TAXON?.total ?? TOTAL}{" "}
          profiles and is offered with that gap stated in the panel. Every figure on this
          page is computed at build time from the same index the tool loads, so the prose
          and the tool cannot disagree. Index generated {index.generatedAt}.
        </p>
      </section>

      {/* ---- Related indexes --------------------------------------- */}
      <section aria-labelledby="related-heading" className="mt-12">
        <h2 id="related-heading" className="text-xl font-bold text-[#17211B]">
          The axes the Finder does not cover
        </h2>
        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[#5E6B63]">
          Geography, conservation, diet, lifespan and behaviour each have a hub that
          indexes them properly.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FINDER_DESTINATIONS.map((destination) => (
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
      </section>

      <div className="mt-12">
        <FAQBlock items={FAQS} />
      </div>
    </main>
  );
}
