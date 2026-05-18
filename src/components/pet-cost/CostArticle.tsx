import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import {
  COST_SOURCE_REVIEW_NOTE,
  COST_VETERINARY_DISCLAIMER,
  type PetCostArticle,
} from "@/lib/pet-cost/data";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/schema";

interface CostArticleViewProps {
  article: PetCostArticle;
  /** Sidebar related links — species-specific links curated by the route */
  relatedTools: { label: string; href: string; description?: string }[];
  relatedChoiceLinks?: { label: string; href: string; description?: string }[];
}

function CategoryList({
  heading,
  intro,
  items,
  tone = "neutral",
  id,
}: {
  heading: string;
  intro?: string;
  items: string[];
  tone?: "neutral" | "warning";
  id: string;
}) {
  const card =
    tone === "warning"
      ? "not-prose rounded-xl border border-amber-200 bg-amber-50 p-4"
      : "not-prose rounded-xl border border-[#DDE6DD] bg-white p-4";
  const dot = tone === "warning" ? "text-amber-700" : "text-[#063F2A]";
  return (
    <section aria-labelledby={id}>
      <h2 id={id}>{heading}</h2>
      {intro && (
        <p className="text-sm text-[#5E6B63] -mt-3 mb-4">{intro}</p>
      )}
      <ul className={card + " space-y-2 text-sm sm:text-base text-[#2C3A2F]"}>
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className={`flex-shrink-0 mt-0.5 ${dot}`}>
              ●
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function CostArticleView({
  article,
  relatedTools,
  relatedChoiceLinks,
}: CostArticleViewProps) {
  const url = `https://faunahub.com${article.path}`;

  const schemas = [
    breadcrumbSchema(
      article.parentHub === article.grandparentHub
        ? [
            { name: "Home", url: "https://faunahub.com" },
            {
              name: article.grandparentLabel,
              url: `https://faunahub.com${article.grandparentHub}`,
            },
            { name: article.pageHeading, url },
          ]
        : [
            { name: "Home", url: "https://faunahub.com" },
            {
              name: article.grandparentLabel,
              url: `https://faunahub.com${article.grandparentHub}`,
            },
            {
              name: article.parentHubLabel,
              url: `https://faunahub.com${article.parentHub}`,
            },
            { name: article.pageHeading, url },
          ]
    ),
    articleSchema({
      title: article.title,
      description: article.description,
      path: article.path,
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime,
    }),
    itemListSchema(
      article.budgetChecklist.map((item, i) => ({
        name: item,
        url,
        position: i + 1,
      }))
    ),
    faqSchema(article.faqs),
  ];

  const breadcrumbItems =
    article.parentHub === article.grandparentHub
      ? [
          { label: article.grandparentLabel, href: article.grandparentHub },
          { label: article.pageHeading },
        ]
      : [
          { label: article.grandparentLabel, href: article.grandparentHub },
          { label: article.parentHubLabel, href: article.parentHub },
          { label: article.pageHeading },
        ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <div className="container-content py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <p className="mb-3">
                <span className="tag">{article.speciesLabel}</span>{" "}
                <span className="tag ml-1">Cost Planning</span>
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3 leading-tight">
                {article.pageHeading}
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
                  {article.directAnswer}
                </p>
              </section>

              <CategoryList
                id="one-time-heading"
                heading="One-time setup costs"
                intro="Costs that typically arise before or during the first weeks of ownership."
                items={article.oneTimeCategories}
              />

              <div className="mt-10">
                <CategoryList
                  id="recurring-heading"
                  heading="Recurring monthly costs"
                  intro="Costs that repeat across the pet's lifetime — plan these as a steady monthly line."
                  items={article.recurringMonthly}
                />
              </div>

              <div className="mt-10">
                <CategoryList
                  id="yearly-heading"
                  heading="Yearly considerations"
                  intro="Costs that arrive on an annual cadence or change with age."
                  items={article.yearlyConsiderations}
                />
              </div>

              <div className="mt-10">
                <CategoryList
                  id="hidden-heading"
                  heading="Hidden costs that surprise new owners"
                  intro="Categories most commonly underestimated when first budgeting."
                  items={article.hiddenCosts}
                  tone="warning"
                />
              </div>

              <h2 className="mt-10">Emergency fund as a planning concept</h2>
              <p>{article.emergencyFundNote}</p>

              <h2 className="mt-10">Factors that change cost</h2>
              <ul>
                {article.factorsThatChangeCost.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h2 className="mt-10">When this pet may not be a financial fit</h2>
              <ul>
                {article.notFinanciallySuitableFor.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="mt-10">
                <CategoryList
                  id="checklist-heading"
                  heading="Budget checklist before adopting"
                  intro="Use this as a pre-adoption checklist, then run your own numbers in the pet cost calculator."
                  items={article.budgetChecklist}
                />
              </div>

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
                  items={article.faqs}
                  title={`${article.pageHeading} — Frequently Asked Questions`}
                />
              </div>
            </article>

            <aside
              aria-label={`${article.speciesLabel} cost sidebar`}
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    At a glance
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Species
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      {article.speciesLabel}
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Type
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      Cost planning framework
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Categories
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      {article.oneTimeCategories.length} one-time ·{" "}
                      {article.recurringMonthly.length} monthly
                    </dd>
                  </div>
                </dl>
              </div>

              <RelatedLinks
                title="Run your own numbers"
                links={[
                  {
                    label: "Pet Cost Calculator",
                    href: "/tools/pet-cost-calculator",
                    description: "Estimate monthly and first-year cost",
                  },
                  {
                    label: "Pet Budget Checklist",
                    href: "/guides/pet-budget-checklist",
                    description: "Categories to walk through before adopting",
                  },
                  {
                    label: "Hidden Costs of Pet Ownership",
                    href: "/guides/hidden-costs-of-pet-ownership",
                    description: "What most owners underestimate",
                  },
                ]}
              />

              {relatedChoiceLinks && relatedChoiceLinks.length > 0 && (
                <RelatedLinks
                  title="Choose the right pet"
                  links={relatedChoiceLinks}
                />
              )}

              <RelatedLinks title="Related tools & care" links={relatedTools} />

              <aside
                role="note"
                aria-label="Source review note"
                className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
              >
                <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
                <p className="leading-relaxed">{COST_SOURCE_REVIEW_NOTE}</p>
              </aside>

              <LastUpdated date={article.modifiedTime} />

              <p>
                <Link
                  href="/costs"
                  className="text-sm font-medium text-[#063F2A] hover:underline"
                >
                  ← Back to all pet cost guides
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
