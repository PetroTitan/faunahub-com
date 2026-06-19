import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import CoverageBadge from "@/components/taxonomy/CoverageBadge";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { COVERAGE_GAPS } from "@/lib/taxonomy/missing-groups";
import { ANIMAL_TAXONOMY_GROUPS } from "@/lib/taxonomy/helpers";
import { TAXONOMY_CORE_SOURCES, TAXONOMY_LAST_REVIEW } from "@/lib/taxonomy/sources";

const PATH = "/animal-taxonomy/missing-animals";

export const metadata: Metadata = buildMetadata({
  title: "Animal Coverage Gaps — What FaunaHub Hasn't Covered Yet",
  description:
    "An honest look at where FaunaHub's animal coverage is thin or planned — invertebrates, deep-sea life, regional fauna, and conservation profiles — and how we prioritise filling the gaps.",
  path: PATH,
});

const FAQ = [
  {
    question: "Does “missing” mean FaunaHub will never cover these animals?",
    answer:
      "No. Missing means not yet covered. These groups are queued for future verified batches. We add profiles only when sources and (for detailed pages) licensed images are available, so coverage grows steadily rather than all at once.",
  },
  {
    question: "Why not just add the missing animals quickly?",
    answer:
      "Speed at the cost of quality produces thin, weakly sourced pages. FaunaHub prioritises source-backed content and licensed images over raw page counts.",
  },
];

export default function MissingAnimalsPage() {
  const undercovered = ANIMAL_TAXONOMY_GROUPS.filter(
    (g) => g.coverageStatus === "thin" || g.coverageStatus === "planned",
  );

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Taxonomy", url: "https://faunahub.com/animal-taxonomy" },
      { name: "Missing Animals", url: `https://faunahub.com${PATH}` },
    ]),
    faqSchema(FAQ),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD]">
          <div className="container-content pt-4 pb-10">
            <Breadcrumbs
              items={[
                { label: "Animal Taxonomy", href: "/animal-taxonomy" },
                { label: "Missing Animals" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] max-w-3xl leading-tight">
              Animal coverage gaps
            </h1>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              An honest map of where FaunaHub&apos;s animal coverage is still thin
              or planned. Naming a gap is how we make sure no major group is
              forgotten as coverage grows.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-12">
          {/* 1. Why missing doesn't mean ignored */}
          <section className="prose-content max-w-3xl">
            <h2>Why &ldquo;missing&rdquo; does not mean ignored</h2>
            <p>
              FaunaHub is built in verified batches, so at any moment some major
              groups are well covered and others are queued. Listing the gaps
              openly keeps the project honest and makes sure whole branches of the
              animal tree — especially invertebrates and the deep sea — are not
              forgotten.
            </p>
          </section>

          {/* 2-6. Coverage gaps */}
          <section aria-labelledby="gaps-heading">
            <h2 id="gaps-heading" className="text-2xl font-bold text-[#17211B] mb-5">
              Where coverage is thin or planned
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {COVERAGE_GAPS.map((gap) => (
                <div key={gap.heading} className="card p-5 flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-[#17211B]">
                    {gap.heading}
                  </h3>
                  <p className="text-sm text-[#5E6B63] leading-snug">{gap.body}</p>
                  <p className="text-xs text-[#2C3A2F] leading-snug mt-1">
                    <span className="text-[#8A958E]">Examples on the roadmap: </span>
                    {gap.examples.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Undercovered groups (from the data layer) */}
          <section aria-labelledby="groups-heading">
            <h2 id="groups-heading" className="text-2xl font-bold text-[#17211B] mb-4">
              Groups currently marked thin or planned
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {undercovered.map((g) => (
                <li key={g.slug} className="card p-4 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-[#17211B]">
                      {g.label}
                    </span>
                    <CoverageBadge status={g.coverageStatus} />
                  </div>
                  <span className="text-xs text-[#5E6B63] leading-snug">
                    {g.priorityMissingExamples
                      .slice(0, 5)
                      .map((e) => e.replace(/-/g, " "))
                      .join(", ")}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7. How we prioritise */}
          <section className="prose-content max-w-3xl">
            <h2>How FaunaHub prioritises future species</h2>
            <p>
              We weigh several factors: how big a coverage gap a group represents,
              how well-known and searched its animals are, whether authoritative
              sources exist, and whether properly licensed images are available.
              The full plan lives on the{" "}
              <Link
                href="/animal-taxonomy/coverage-roadmap"
                className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A]"
              >
                coverage roadmap
              </Link>
              .
            </p>
          </section>

          {/* Sources & FAQ */}
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section aria-labelledby="src-heading">
                <h2 id="src-heading" className="text-2xl font-bold text-[#17211B] mb-3">
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
                    </li>
                  ))}
                </ul>
              </section>
              <FAQBlock items={FAQ} />
            </div>
            <aside className="space-y-6">
              <RelatedLinks
                title="Coverage"
                links={[
                  { label: "Animal taxonomy hub", href: "/animal-taxonomy" },
                  { label: "Coverage roadmap", href: "/animal-taxonomy/coverage-roadmap" },
                  { label: "Vertebrates", href: "/animal-taxonomy/vertebrates" },
                  { label: "Invertebrates", href: "/animal-taxonomy/invertebrates" },
                ]}
              />
            </aside>
          </div>

          <LastUpdated date={TAXONOMY_LAST_REVIEW} />
        </div>
      </main>
    </>
  );
}
