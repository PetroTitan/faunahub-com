import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import SourcesSection from "@/components/educational/SourcesSection";
import NutritionDisclaimer from "@/components/pet-nutrition/NutritionDisclaimer";
import {
  PET_NUTRITION_SOURCE_NOTE,
  type NutritionSection,
  type PetNutritionArticle,
} from "@/lib/pet-nutrition/data";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

const SITE = "https://faunahub.com";

type CardTone = "neutral" | "escalate" | "avoid" | "check";

const TONE_STYLES: Record<
  CardTone,
  { card: string; marker: string; glyph: string }
> = {
  neutral: {
    card: "border-[#DDE6DD] bg-white",
    marker: "text-[#063F2A]",
    glyph: "●",
  },
  escalate: {
    card: "border-[#DDE6DD] bg-white border-l-4 border-l-[#063F2A]",
    marker: "text-[#063F2A]",
    glyph: "→",
  },
  avoid: {
    card: "border-[#E4CFC4] bg-white border-l-4 border-l-[#A04E2A]",
    marker: "text-[#A04E2A]",
    glyph: "✕",
  },
  check: {
    card: "border-[#CFE0A8] bg-[#F7FAF0]",
    marker: "text-[#0F5A3A]",
    glyph: "✓",
  },
};

function NutritionCard({
  section,
  tone,
  id,
}: {
  section: NutritionSection;
  tone: CardTone;
  id: string;
}) {
  const s = TONE_STYLES[tone];
  return (
    <section aria-labelledby={id} className="not-prose">
      <h2 id={id} className="text-xl sm:text-2xl font-bold mb-2 text-[#17211B]">
        {section.heading}
      </h2>
      {section.intro && (
        <p className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed mb-3">
          {section.intro}
        </p>
      )}
      <ul
        className={`space-y-2 rounded-xl border p-4 sm:p-5 text-sm sm:text-base text-[#2C3A2F] ${s.card}`}
      >
        {section.bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5">
            <span aria-hidden="true" className={`flex-shrink-0 mt-0.5 ${s.marker}`}>
              {s.glyph}
            </span>
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function PetNutritionArticleView({
  article,
}: {
  article: PetNutritionArticle;
}) {
  const url = `${SITE}${article.path}`;

  const breadcrumbItems = [
    { label: "Pet Nutrition", href: "/pet-nutrition" },
    { label: article.pageHeading },
  ];

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE },
      { name: "Pet Nutrition", url: `${SITE}/pet-nutrition` },
      { name: article.pageHeading, url },
    ]),
    articleSchema({
      title: article.title,
      description: article.description,
      path: article.path,
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime,
    }),
    faqSchema(article.faqs),
  ];

  const sectionCount = article.sections.length + 3; // checklist + whatNotToAssume + whenToContactVet

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
              <p className="mb-3 not-prose">
                <span className="tag">{article.topicTag}</span>{" "}
                <span className="tag ml-1">Nutrition &amp; feeding</span>
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4 leading-tight">
                {article.pageHeading}
              </h1>

              <section
                aria-labelledby="direct-answer-heading"
                className="not-prose rounded-2xl border border-[#DDE6DD] bg-[#F7F8F3] p-5 sm:p-6 mb-6"
              >
                <h2
                  id="direct-answer-heading"
                  className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2"
                >
                  In short
                </h2>
                <p className="text-base sm:text-[1.05rem] text-[#17211B] leading-relaxed">
                  {article.directAnswer}
                </p>
              </section>

              <div className="mb-2">
                <NutritionDisclaimer />
              </div>

              <div className="space-y-10 mt-10">
                {article.sections.map((section, i) => (
                  <NutritionCard
                    key={i}
                    section={section}
                    tone="neutral"
                    id={`section-${i}`}
                  />
                ))}

                <NutritionCard
                  section={article.checklist}
                  tone="check"
                  id="checklist"
                />

                <NutritionCard
                  section={article.whatNotToAssume}
                  tone="avoid"
                  id="what-not-to-assume"
                />

                <NutritionCard
                  section={article.whenToContactVet}
                  tone="escalate"
                  id="when-to-ask-vet"
                />
              </div>

              <div className="mt-10">
                <FAQBlock
                  items={article.faqs}
                  title={`${article.pageHeading} — Frequently Asked Questions`}
                />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={article.sources}
                  intro={PET_NUTRITION_SOURCE_NOTE}
                />
              </div>
            </article>

            <aside
              aria-label={`${article.pageHeading} sidebar`}
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <NutritionDisclaimer compact />

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
                    <dd className="text-[#17211B] font-medium">{article.topicTag}</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Type
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      Feeding planning guide
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Sections
                    </dt>
                    <dd className="text-[#17211B] font-medium">{sectionCount}</dd>
                  </div>
                </dl>
              </div>

              {article.related.map((g, i) => (
                <RelatedLinks key={i} title={g.title} links={g.links} />
              ))}

              <aside
                role="note"
                aria-label="Source note"
                className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
              >
                <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
                <p className="leading-relaxed">{PET_NUTRITION_SOURCE_NOTE}</p>
              </aside>

              <LastUpdated date={article.modifiedTime} />

              <p>
                <Link
                  href="/pet-nutrition"
                  className="text-sm font-medium text-[#063F2A] hover:underline"
                >
                  ← Back to pet nutrition hub
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
