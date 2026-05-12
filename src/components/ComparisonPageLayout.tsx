import type { ReactNode } from "react";
import Link from "next/link";
import ComparisonTable from "@/components/ComparisonTable";
import FAQBlock from "@/components/FAQBlock";
import SourceNote from "@/components/SourceNote";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";

export interface ComparisonRow {
  attribute: string;
  a: string;
  b: string;
}

export interface ComparisonFAQ {
  question: string;
  answer: string;
}

export interface ComparisonRelatedLink {
  label: string;
  href: string;
  description?: string;
}

export interface ComparisonPageLayoutProps {
  title: string;
  pageTitle: string;
  description: string;
  path: string;
  labelA: string;
  labelB: string;
  quickAnswer: ReactNode;
  table: ComparisonRow[];
  tableCaption?: string;
  keyDifferences: { heading: string; body: string }[];
  similarities: ReactNode[];
  confusionPoints: ReactNode[];
  faqs: ComparisonFAQ[];
  relatedLinks: ComparisonRelatedLink[];
  publishedDate: string;
  modifiedDate: string;
}

export default function ComparisonPageLayout({
  title,
  pageTitle,
  description,
  path,
  labelA,
  labelB,
  quickAnswer,
  table,
  tableCaption,
  keyDifferences,
  similarities,
  confusionPoints,
  faqs,
  relatedLinks,
  publishedDate,
  modifiedDate,
}: ComparisonPageLayoutProps) {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Compare", url: "https://faunahub.com/compare" },
      { name: title, url: `https://faunahub.com${path}` },
    ]),
    articleSchema({
      title: pageTitle,
      description,
      path,
      datePublished: publishedDate,
      dateModified: modifiedDate,
    }),
    faqSchema(faqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <div className="container-content py-10">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-[#8A958E] mb-6 flex gap-2 items-center flex-wrap"
          >
            <Link href="/" className="hover:text-[#063F2A] hover:no-underline">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/compare" className="hover:text-[#063F2A] hover:no-underline">
              Compare
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#17211B] font-medium" aria-current="page">
              {title}
            </span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_280px] gap-10">
            <article>
              <span className="tag mb-4 inline-block">Animal Comparison</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-6">
                {title}
              </h1>

              <section aria-labelledby="quick-answer-heading">
                <h2
                  id="quick-answer-heading"
                  className="text-2xl font-bold text-[#17211B] mt-2 mb-4 pb-2 border-b border-[#DDE6DD]"
                >
                  Quick Answer
                </h2>
                <div className="text-[#2C3A2F] text-base leading-relaxed space-y-4">
                  {quickAnswer}
                </div>
              </section>

              <section aria-labelledby="comparison-table-heading">
                <h2
                  id="comparison-table-heading"
                  className="text-2xl font-bold text-[#17211B] mt-10 mb-4 pb-2 border-b border-[#DDE6DD]"
                >
                  {title} Comparison
                </h2>
                <ComparisonTable
                  labelA={labelA}
                  labelB={labelB}
                  rows={table}
                  caption={
                    tableCaption ??
                    "Values are approximate. Verify conservation status with the current IUCN Red List."
                  }
                />
              </section>

              <section aria-labelledby="differences-heading">
                <h2
                  id="differences-heading"
                  className="text-2xl font-bold text-[#17211B] mt-10 mb-4 pb-2 border-b border-[#DDE6DD]"
                >
                  Key Differences
                </h2>
                <ul className="space-y-3 text-[#2C3A2F] text-base">
                  {keyDifferences.map((k) => (
                    <li key={k.heading} className="flex gap-2">
                      <span className="text-[#063F2A] flex-shrink-0 mt-0.5">●</span>
                      <span>
                        <strong className="text-[#17211B]">{k.heading}:</strong>{" "}
                        {k.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="similarities-heading">
                <h2
                  id="similarities-heading"
                  className="text-2xl font-bold text-[#17211B] mt-10 mb-4 pb-2 border-b border-[#DDE6DD]"
                >
                  Similarities
                </h2>
                <ul className="space-y-3 text-[#2C3A2F] text-base">
                  {similarities.map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#075FA8] flex-shrink-0 mt-0.5">●</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="confusion-heading">
                <h2
                  id="confusion-heading"
                  className="text-2xl font-bold text-[#17211B] mt-10 mb-4 pb-2 border-b border-[#DDE6DD]"
                >
                  Common Points of Confusion
                </h2>
                <ul className="space-y-3 text-[#2C3A2F] text-base">
                  {confusionPoints.map((c, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-amber-600 flex-shrink-0 mt-0.5">●</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mt-10">
                <FAQBlock items={faqs} />
              </div>
            </article>

            <aside
              aria-label="Comparison sidebar"
              className="space-y-5 lg:pt-14"
            >
              <RelatedLinks title="Related Pages" links={relatedLinks} />
              <SourceNote pending />
              <LastUpdated date={modifiedDate} />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
