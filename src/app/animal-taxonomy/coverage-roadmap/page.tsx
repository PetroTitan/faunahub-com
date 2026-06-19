import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import RoadmapCard from "@/components/taxonomy/RoadmapCard";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FUTURE_BATCHES } from "@/lib/taxonomy/expansion-roadmap";
import { TAXONOMY_CORE_SOURCES, TAXONOMY_LAST_REVIEW } from "@/lib/taxonomy/sources";

const PATH = "/animal-taxonomy/coverage-roadmap";

export const metadata: Metadata = buildMetadata({
  title: "Animal Coverage Roadmap — How FaunaHub Expands in Verified Batches",
  description:
    "FaunaHub's plan for expanding animal coverage: batch-based expansion, source and image-licensing requirements, quality gates, and the priority queue of future animal batches.",
  path: PATH,
});

const PRIORITY_RANK = { high: 0, medium: 1, low: 2 } as const;

const FAQ = [
  {
    question: "Are the roadmap batches live pages?",
    answer:
      "No. The roadmap is a planning queue. Each batch lists candidate animals, source needs, and image difficulty, but no pages exist until the batch passes FaunaHub's quality gates and is actually built.",
  },
  {
    question: "What has to be true before a batch is published?",
    answer:
      "Each animal needs meaningful, source-backed content; detailed profiles also need a properly licensed image (Public Domain, CC0, CC BY, or CC BY-SA). Anything that fails these gates is held back rather than published thin.",
  },
];

export default function CoverageRoadmapPage() {
  const batches = [...FUTURE_BATCHES].sort(
    (a, b) => PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority],
  );

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Taxonomy", url: "https://faunahub.com/animal-taxonomy" },
      { name: "Coverage Roadmap", url: `https://faunahub.com${PATH}` },
    ]),
    faqSchema(FAQ),
  ];

  const principles: { title: string; body: string }[] = [
    { title: "Batch-based coverage", body: "Coverage grows in themed batches (deep-sea, invertebrates, regional fauna), not all at once." },
    { title: "Source requirements", body: "Every animal needs authoritative sources — taxonomy authorities, ADW, IUCN, NOAA/USFWS, or museum/university resources." },
    { title: "Image licensing", body: "Detailed profiles require Public Domain, CC0, CC BY, or CC BY-SA images only — never NC, ND, GFDL-only, AI-generated, or unclear-license media." },
    { title: "Quality gates before publishing", body: "Anything without meaningful content or a clean image is held back, not published thin." },
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
                { label: "Coverage Roadmap" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] max-w-3xl leading-tight">
              Animal coverage roadmap
            </h1>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              How FaunaHub plans to expand animal coverage — in verified,
              source-backed batches with quality gates, rather than mass-generated
              thin pages. The queue below is a plan, not a set of live pages.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-12">
          {/* Expansion principles */}
          <section aria-labelledby="principles-heading">
            <h2 id="principles-heading" className="text-2xl font-bold text-[#17211B] mb-5">
              Expansion principles
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.title} className="card p-5">
                  <h3 className="text-base font-semibold text-[#17211B] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#5E6B63] leading-snug">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Priority batch queue */}
          <section aria-labelledby="queue-heading">
            <h2 id="queue-heading" className="text-2xl font-bold text-[#17211B] mb-2">
              Priority batch queue
            </h2>
            <p className="text-sm text-[#5E6B63] mb-5 max-w-2xl">
              {batches.length} planned expansion batches. Example species are
              candidates for research — not published pages.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {batches.map((b) => (
                <li key={b.slug}>
                  <RoadmapCard batch={b} />
                </li>
              ))}
            </ul>
          </section>

          {/* Why avoid thin pages */}
          <section className="prose-content max-w-3xl">
            <h2>Why we avoid thin pages</h2>
            <p>
              A roadmap makes it tempting to spin up a page for every candidate at
              once. FaunaHub deliberately doesn&apos;t. Each batch is researched,
              sourced, and (for detailed profiles) illustrated with licensed
              images before anything is published. That keeps the site trustworthy
              and useful rather than padded with empty entries.
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
                  { label: "Missing animals", href: "/animal-taxonomy/missing-animals" },
                  { label: "Endangered Animals", href: "/endangered-animals" },
                  { label: "Ocean fauna by depth", href: "/fauna/ocean" },
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
