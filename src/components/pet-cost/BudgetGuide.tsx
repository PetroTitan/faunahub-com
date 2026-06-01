import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import SourcesSection from "@/components/educational/SourcesSection";
import {
  COST_SOURCE_REVIEW_NOTE,
  COST_VETERINARY_DISCLAIMER,
  type BudgetGuide,
} from "@/lib/pet-cost/data";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/schema";

interface BudgetGuideViewProps {
  guide: BudgetGuide;
}

export default function BudgetGuideView({ guide }: BudgetGuideViewProps) {
  const url = `https://faunahub.com${guide.path}`;
  const allBullets = guide.sections.flatMap((s) => s.bullets);

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Guides", url: "https://faunahub.com/guides" },
      { name: guide.pageHeading, url },
    ]),
    articleSchema({
      title: guide.title,
      description: guide.description,
      path: guide.path,
      datePublished: guide.publishedTime,
      dateModified: guide.modifiedTime,
    }),
    itemListSchema(
      allBullets.map((item, i) => ({
        name: item,
        url,
        position: i + 1,
      }))
    ),
    faqSchema(guide.faqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <div className="container-content py-8">
          <Breadcrumbs
            items={[
              { label: "Guides", href: "/guides" },
              { label: guide.pageHeading },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <p className="mb-3">
                <span className="tag">Budget Guide</span>{" "}
                <span className="tag ml-1">Cost Planning</span>
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3 leading-tight">
                {guide.pageHeading}
              </h1>

              <section
                aria-labelledby="direct-answer-heading"
                className="not-prose rounded-2xl border border-[#DDE6DD] bg-[#F7F8F3] p-5 sm:p-6 mb-8"
              >
                <h2
                  id="direct-answer-heading"
                  className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2"
                >
                  Planning summary
                </h2>
                <p className="text-base sm:text-[1.05rem] text-[#17211B] leading-relaxed">
                  {guide.directAnswer}
                </p>
              </section>

              {guide.sections.map((section, i) => (
                <section
                  key={i}
                  aria-labelledby={`section-${i}`}
                  className={i === 0 ? "" : "mt-10"}
                >
                  <h2 id={`section-${i}`}>{section.heading}</h2>
                  {section.intro && (
                    <p className="text-sm sm:text-base text-[#2C3A2F]">
                      {section.intro}
                    </p>
                  )}
                  <ul className="not-prose mt-4 space-y-2 rounded-xl border border-[#DDE6DD] bg-white p-4 text-sm sm:text-base text-[#2C3A2F]">
                    {section.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="flex-shrink-0 mt-0.5 text-[#063F2A]"
                        >
                          ●
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <aside
                role="note"
                aria-label="Educational and veterinary disclaimer"
                className="not-prose mt-10 flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900"
              >
                <span
                  aria-hidden="true"
                  className="text-amber-600 flex-shrink-0 text-base mt-0.5"
                >
                  ⚠
                </span>
                <p className="leading-relaxed">{COST_VETERINARY_DISCLAIMER}</p>
              </aside>

              <div className="mt-10">
                <FAQBlock
                  items={guide.faqs}
                  title={`${guide.pageHeading} — Frequently Asked Questions`}
                />
              </div>
            </article>

            <aside
              aria-label={`${guide.pageHeading} sidebar`}
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <RelatedLinks
                title="Run your own numbers"
                links={[
                  {
                    label: "Pet Cost Calculator",
                    href: "/tools/pet-cost-calculator",
                    description: "Estimate monthly and first-year cost",
                  },
                  {
                    label: "All pet cost guides",
                    href: "/costs",
                    description: "Species-by-species frameworks",
                  },
                  {
                    label: "Pet Breed Selector",
                    href: "/tools/pet-breed-selector",
                    description: "Find categories that fit your home",
                  },
                  {
                    label: "Pet safety & emergencies",
                    href: "/pet-safety",
                    description: "Plan ahead for emergency and poisoning risks",
                  },
                  {
                    label: "Pet nutrition & feeding",
                    href: "/pet-nutrition",
                    description: "Plan feeding routines and food choices",
                  },
                ]}
              />

              <RelatedLinks
                title="Choose the right pet"
                links={[
                  {
                    label: "Best pets for apartments",
                    href: "/guides/best-pets-for-apartments",
                  },
                  {
                    label: "Best pets for families",
                    href: "/guides/best-pets-for-families",
                  },
                  {
                    label: "Best pets for beginners",
                    href: "/guides/best-pets-for-beginners",
                  },
                  {
                    label: "Low-maintenance pets",
                    href: "/guides/low-maintenance-pets",
                  },
                  {
                    label: "New puppy care",
                    href: "/puppy-care",
                  },
                  {
                    label: "New kitten care",
                    href: "/kitten-care",
                  },
                ]}
              />

              {guide.sources && guide.sources.length > 0 ? (
                <SourcesSection sources={guide.sources} />
              ) : (
                <aside
                  role="note"
                  aria-label="Source review note"
                  className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
                >
                  <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
                  <p className="leading-relaxed">{COST_SOURCE_REVIEW_NOTE}</p>
                </aside>
              )}

              <LastUpdated date={guide.modifiedTime} />

              <p>
                <Link
                  href="/guides"
                  className="text-sm font-medium text-[#063F2A] hover:underline"
                >
                  ← Back to all guides
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
