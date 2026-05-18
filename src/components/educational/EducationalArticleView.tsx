import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import SourcesSection from "@/components/educational/SourcesSection";
import {
  INSURANCE_SOURCE_REVIEW_NOTE,
  INSURANCE_VARIABILITY_WARNING,
  VERIFIED_SOURCE_NOTE,
  VET_CARE_DISCLAIMER,
  VET_CARE_SOURCE_REVIEW_NOTE,
  type ArticleSection,
  type EducationalArticle,
} from "@/lib/educational/types";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/schema";

interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

interface EducationalArticleViewProps {
  article: EducationalArticle;
  /** Sidebar related-link groups, each rendered as its own RelatedLinks block */
  relatedGroups: { title: string; links: RelatedLink[] }[];
}

function isInsuranceKind(kind: EducationalArticle["kind"]): boolean {
  return (
    kind === "insurance" || kind === "dog-insurance" || kind === "cat-insurance"
  );
}

function SectionBlock({
  section,
  tone = "neutral",
  prefixId,
}: {
  section: ArticleSection;
  tone?: "neutral" | "warning";
  prefixId: string;
}) {
  const card =
    tone === "warning"
      ? "not-prose mt-4 space-y-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm sm:text-base text-amber-900"
      : "not-prose mt-4 space-y-2 rounded-xl border border-[#DDE6DD] bg-white p-4 text-sm sm:text-base text-[#2C3A2F]";
  const dot = tone === "warning" ? "text-amber-700" : "text-[#063F2A]";
  return (
    <section aria-labelledby={prefixId}>
      <h2 id={prefixId}>{section.heading}</h2>
      {section.intro && (
        <p className="text-sm sm:text-base text-[#2C3A2F]">{section.intro}</p>
      )}
      <ul className={card}>
        {section.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className={`flex-shrink-0 mt-0.5 ${dot}`}>
              ●
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function EducationalArticleView({
  article,
  relatedGroups,
}: EducationalArticleViewProps) {
  const url = `https://faunahub.com${article.path}`;
  const isInsurance = isInsuranceKind(article.kind);

  const breadcrumbItems: { label: string; href?: string }[] = [];
  if (article.grandparentHub && article.grandparentLabel) {
    breadcrumbItems.push({
      label: article.grandparentLabel,
      href: article.grandparentHub,
    });
  }
  breadcrumbItems.push({
    label: article.parentHubLabel,
    href: article.parentHub,
  });
  breadcrumbItems.push({ label: article.pageHeading });

  const breadcrumbSchemaItems: { name: string; url: string }[] = [
    { name: "Home", url: "https://faunahub.com" },
  ];
  if (article.grandparentHub && article.grandparentLabel) {
    breadcrumbSchemaItems.push({
      name: article.grandparentLabel,
      url: `https://faunahub.com${article.grandparentHub}`,
    });
  }
  breadcrumbSchemaItems.push({
    name: article.parentHubLabel,
    url: `https://faunahub.com${article.parentHub}`,
  });
  breadcrumbSchemaItems.push({ name: article.pageHeading, url });

  const allBullets = [
    ...article.sections.flatMap((s) => s.bullets),
    ...(article.checklist?.bullets ?? []),
    ...(article.questionsToConsider?.bullets ?? []),
    ...(article.risksLimitations?.bullets ?? []),
    ...(article.warningSigns?.bullets ?? []),
  ];

  const schemas = [
    breadcrumbSchema(breadcrumbSchemaItems),
    articleSchema({
      title: article.title,
      description: article.description,
      path: article.path,
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime,
    }),
    itemListSchema(
      allBullets.slice(0, 50).map((b, i) => ({
        name: b,
        url,
        position: i + 1,
      }))
    ),
    faqSchema(article.faqs),
  ];

  const hasVerifiedSources = !!article.sources && article.sources.length > 0;
  const sourceNote = hasVerifiedSources
    ? VERIFIED_SOURCE_NOTE
    : isInsurance
      ? INSURANCE_SOURCE_REVIEW_NOTE
      : VET_CARE_SOURCE_REVIEW_NOTE;

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
                <span className="tag">{article.topicTag}</span>{" "}
                <span className="tag ml-1">Educational</span>
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
                  {isInsurance ? "Planning summary" : "Summary"}
                </h2>
                <p className="text-base sm:text-[1.05rem] text-[#17211B] leading-relaxed">
                  {article.directAnswer}
                </p>
              </section>

              {article.sections.map((section, i) => (
                <div key={i} className={i === 0 ? "" : "mt-10"}>
                  <SectionBlock section={section} prefixId={`section-${i}`} />
                </div>
              ))}

              {article.warningSigns && (
                <div className="mt-10">
                  <SectionBlock
                    section={article.warningSigns}
                    tone="warning"
                    prefixId="warning-signs"
                  />
                </div>
              )}

              {article.checklist && (
                <div className="mt-10">
                  <SectionBlock
                    section={article.checklist}
                    prefixId="checklist"
                  />
                </div>
              )}

              {article.questionsToConsider && (
                <div className="mt-10">
                  <SectionBlock
                    section={article.questionsToConsider}
                    prefixId="questions"
                  />
                </div>
              )}

              {article.risksLimitations && (
                <div className="mt-10">
                  <SectionBlock
                    section={article.risksLimitations}
                    prefixId="risks"
                  />
                </div>
              )}

              {article.showVariabilityWarning && (
                <aside
                  role="note"
                  aria-label="Country and policy variability warning"
                  className="not-prose mt-10 flex gap-3 bg-[#F7F8F3] border border-[#DDE6DD] rounded-xl p-4 text-sm text-[#2C3A2F]"
                >
                  <span
                    aria-hidden="true"
                    className="text-[#063F2A] flex-shrink-0 text-base mt-0.5"
                  >
                    i
                  </span>
                  <p className="leading-relaxed">
                    {INSURANCE_VARIABILITY_WARNING}
                  </p>
                </aside>
              )}

              {article.showVetDisclaimer && (
                <aside
                  role="note"
                  aria-label="Veterinary disclaimer"
                  className="not-prose mt-10 flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900"
                >
                  <span
                    aria-hidden="true"
                    className="text-amber-600 flex-shrink-0 text-base mt-0.5"
                  >
                    ⚠
                  </span>
                  <p className="leading-relaxed">{VET_CARE_DISCLAIMER}</p>
                </aside>
              )}

              <div className="mt-10">
                <FAQBlock
                  items={article.faqs}
                  title={`${article.pageHeading} — Frequently Asked Questions`}
                />
              </div>

              {article.sources && article.sources.length > 0 && (
                <div className="mt-10">
                  <SourcesSection sources={article.sources} />
                </div>
              )}
            </article>

            <aside
              aria-label={`${article.pageHeading} sidebar`}
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
                      Topic
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      {article.topicTag}
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Type
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      Educational overview
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Sections
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      {article.sections.length +
                        (article.checklist ? 1 : 0) +
                        (article.questionsToConsider ? 1 : 0) +
                        (article.risksLimitations ? 1 : 0) +
                        (article.warningSigns ? 1 : 0)}
                    </dd>
                  </div>
                </dl>
              </div>

              {relatedGroups.map((g, i) => (
                <RelatedLinks key={i} title={g.title} links={g.links} />
              ))}

              <aside
                role="note"
                aria-label="Source note"
                className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
              >
                <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
                <p className="leading-relaxed">{sourceNote}</p>
                {!hasVerifiedSources && (
                  <p className="mt-2 leading-relaxed">
                    <strong className="text-[#2C3A2F]">
                      Source review required.
                    </strong>{" "}
                    No external citations have been added to this page. For
                    authoritative information, consult the references listed
                    above and a licensed professional in your country.
                  </p>
                )}
              </aside>

              <LastUpdated date={article.modifiedTime} />

              <p>
                <Link
                  href={article.parentHub}
                  className="text-sm font-medium text-[#063F2A] hover:underline"
                >
                  ← Back to {article.parentHubLabel.toLowerCase()}
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
