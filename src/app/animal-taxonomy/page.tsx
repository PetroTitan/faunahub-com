import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import CoverageBadge from "@/components/taxonomy/CoverageBadge";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  getVertebrateClasses,
  getInvertebrateGroups,
  getMarineGroups,
  getHumanGroups,
  totalProfiledAnimals,
  coverageCountsByStatus,
} from "@/lib/taxonomy/helpers";
import { FUTURE_BATCHES } from "@/lib/taxonomy/expansion-roadmap";
import { TAXONOMY_CORE_SOURCES } from "@/lib/taxonomy/sources";

const PATH = "/animal-taxonomy";

export const metadata: Metadata = buildMetadata({
  title: "Animal Taxonomy & Coverage — How FaunaHub Organizes Animal Life",
  description:
    "How FaunaHub organizes animals by major group — vertebrates, invertebrates, and marine life — and how coverage expands in verified batches. Not a complete species inventory.",
  path: PATH,
});

const SUB_PAGES = [
  { label: "Vertebrates", href: "/animal-taxonomy/vertebrates" },
  { label: "Reptiles & amphibians", href: "/animal-taxonomy/reptiles-amphibians" },
  { label: "Invertebrates", href: "/animal-taxonomy/invertebrates" },
  { label: "Marine animal groups", href: "/animal-taxonomy/marine-animal-groups" },
  { label: "Missing animals", href: "/animal-taxonomy/missing-animals" },
  { label: "Coverage roadmap", href: "/animal-taxonomy/coverage-roadmap" },
];

const FAQ = [
  {
    question: "Does FaunaHub cover every animal?",
    answer:
      "No. There are millions of animal species — most of them invertebrates — and many are still being discovered. FaunaHub provides representative coverage of major groups and expands systematically in verified batches. It is not, and does not claim to be, a complete species inventory.",
  },
  {
    question: "How are animals grouped here?",
    answer:
      "By widely used major groups: vertebrates (mammals, birds, reptiles, amphibians, fish), invertebrates (insects, arachnids, mollusks, and more), plus cross-cutting marine and human-associated groupings. Classification changes as science improves, so we describe groups cautiously and cite taxonomy authorities.",
  },
  {
    question: "Why not just publish a page for every species?",
    answer:
      "Thin, weakly sourced pages help no one. FaunaHub only publishes a profile when there is meaningful, source-backed content and, for detailed pages, a properly licensed image. Quality gates come before volume.",
  },
  {
    question: "Where do the species counts come from?",
    answer:
      "We deliberately avoid stating exact species totals, because counts vary by source and discovery status. We describe relative diversity qualitatively and link to taxonomy authorities such as the Catalogue of Life and GBIF.",
  },
];

export default function AnimalTaxonomyHub() {
  const verts = getVertebrateClasses();
  const inverts = getInvertebrateGroups();
  const marine = getMarineGroups();
  const human = getHumanGroups();
  const totalProfiles = totalProfiledAnimals();
  const counts = coverageCountsByStatus();
  const plannedBatches = FUTURE_BATCHES.length;

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Taxonomy", url: `https://faunahub.com${PATH}` },
    ]),
    itemListSchema(
      SUB_PAGES.map((p, i) => ({
        name: p.label,
        url: `https://faunahub.com${p.href}`,
        position: i + 1,
      })),
    ),
    faqSchema(FAQ),
  ];

  const sectionSummary = (
    title: string,
    href: string,
    groups: { coverageStatus: string }[],
    blurb: string,
  ) => (
    <Link
      href={href}
      className="card p-5 flex flex-col gap-2 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline h-full"
    >
      <h3 className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A]">
        {title}
      </h3>
      <p className="text-sm text-[#5E6B63] leading-snug">{blurb}</p>
      <span className="text-xs text-[#8A958E] mt-auto pt-1">
        {groups.length} groups tracked
      </span>
      <span className="text-xs font-medium text-[#063F2A]">Explore →</span>
    </Link>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD]">
          <div className="container-content pt-4 pb-12">
            <Breadcrumbs items={[{ label: "Animal Taxonomy" }]} />
            <p className="text-xs uppercase tracking-wider text-[#7BAA35] font-semibold mb-3">
              Coverage &amp; classification
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17211B] max-w-3xl leading-tight">
              How FaunaHub organizes animal life
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#2C3A2F] max-w-2xl leading-relaxed">
              An honest map of how FaunaHub groups animals and how coverage
              grows. We currently profile {totalProfiles} animals across the
              major groups and expand in verified batches — this is representative
              coverage, <strong>not a complete species inventory</strong>.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SUB_PAGES.map((p) => (
                <Link key={p.href} href={p.href} className="btn-secondary text-sm">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          {/* 1. How FaunaHub Organizes Animals */}
          <section className="prose-content max-w-3xl">
            <h2>How FaunaHub organizes animals</h2>
            <p>
              Animal life is vast and unevenly known. We organize it by widely
              used major groups so coverage can grow without forgetting whole
              branches of the tree of life. Classification itself changes as
              science improves, so we describe groups cautiously and link to
              taxonomy authorities rather than asserting a single definitive
              scheme.
            </p>
          </section>

          {/* 6. Coverage Status (summary up top for context) */}
          <section aria-labelledby="status-heading">
            <h2
              id="status-heading"
              className="text-2xl font-bold text-[#17211B] mb-4"
            >
              Coverage status at a glance
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {(
                [
                  ["strong", counts.strong, "Well represented"],
                  ["partial", counts.partial, "Some representation"],
                  ["thin", counts.thin, "Few profiles so far"],
                  ["planned", counts.planned, "Expansion planned"],
                ] as const
              ).map(([status, n, label]) => (
                <div key={status} className="card p-4 flex flex-col gap-2">
                  <CoverageBadge status={status} />
                  <span className="text-2xl font-bold text-[#17211B]">{n}</span>
                  <span className="text-xs text-[#5E6B63]">{label} groups</span>
                </div>
              ))}
            </div>
          </section>

          {/* 2-5. Section summaries */}
          <section aria-labelledby="groups-heading">
            <h2
              id="groups-heading"
              className="text-2xl font-bold text-[#17211B] mb-5"
            >
              Browse the major groupings
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sectionSummary("Vertebrates", "/animal-taxonomy/vertebrates", verts, "Animals with a backbone — mammals, birds, reptiles, amphibians, and fish.")}
              {sectionSummary("Invertebrates", "/animal-taxonomy/invertebrates", inverts, "Animals without a backbone — insects, mollusks, corals, and many more.")}
              {sectionSummary("Marine animal groups", "/animal-taxonomy/marine-animal-groups", marine, "Cross-cutting ocean groupings, from reefs to the deep sea.")}
              {sectionSummary("Domestic & human-associated", "/domestic-animals", human, "Domestic, farm, companion, and urban-adapted animals — clearly distinguished from wild fauna.")}
            </div>
          </section>

          {/* 7. Missing groups & future expansion */}
          <section aria-labelledby="expansion-heading">
            <div className="card p-6 sm:p-8 border-l-4 border-l-[#7BAA35]">
              <h2
                id="expansion-heading"
                className="text-2xl font-bold text-[#17211B] mb-2"
              >
                Missing groups &amp; future expansion
              </h2>
              <p className="text-base text-[#2C3A2F] leading-relaxed max-w-3xl mb-4">
                We track where coverage is thin and maintain a roadmap of{" "}
                {plannedBatches} future expansion batches — from deep-sea species
                to invertebrates and regional fauna. &ldquo;Missing&rdquo; never
                means ignored: it means queued for verified, source-backed work.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/animal-taxonomy/missing-animals" className="btn-primary text-sm">
                  See coverage gaps
                </Link>
                <Link href="/animal-taxonomy/coverage-roadmap" className="btn-secondary text-sm">
                  View the expansion roadmap
                </Link>
              </div>
            </div>
          </section>

          {/* 8. Why no thin pages */}
          <section className="prose-content max-w-3xl">
            <h2>Why we don&apos;t publish thin species pages</h2>
            <p>
              It would be easy to auto-generate a page for every species name.
              We don&apos;t. A page is only worth publishing when it has
              meaningful, source-backed content and — for detailed profiles — a
              properly licensed image. That keeps FaunaHub trustworthy and avoids
              the thin, AI-spam pages that make information harder to trust.
            </p>
          </section>

          {/* 9. Sources & FAQ */}
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section aria-labelledby="sources-heading">
                <h2 id="sources-heading" className="text-2xl font-bold text-[#17211B] mb-3">
                  Sources
                </h2>
                <ul className="space-y-2 list-none">
                  {TAXONOMY_CORE_SOURCES.map((s) => (
                    <li key={s.url} className="text-sm text-[#2C3A2F]">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A]"
                      >
                        {s.label}
                      </a>
                      {s.note && <span className="text-[#8A958E]"> — {s.note}</span>}
                    </li>
                  ))}
                </ul>
              </section>
              <FAQBlock items={FAQ} />
            </div>
            <aside className="space-y-6">
              <RelatedLinks
                title="Explore FaunaHub"
                links={[
                  { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
                  { label: "Wildlife & Biodiversity", href: "/wildlife" },
                  { label: "Fauna by Continent", href: "/fauna" },
                  { label: "Ocean fauna by depth", href: "/fauna/ocean" },
                  { label: "Endangered Animals", href: "/endangered-animals" },
                ]}
              />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
