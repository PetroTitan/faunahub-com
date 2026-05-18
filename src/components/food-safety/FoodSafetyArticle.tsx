import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import SourcesSection from "@/components/educational/SourcesSection";
import {
  RiskLevelBadge,
  SafetyBadge,
} from "@/components/food-safety/RiskBadge";
import type { FoodSafetyArticle } from "@/lib/food-safety/data";
import { getRelatedArticles } from "@/lib/food-safety/data";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";

const SPECIES_LABEL: Record<"dog" | "cat", string> = {
  dog: "Dogs",
  cat: "Cats",
};

const SPECIES_HUB: Record<"dog" | "cat", string> = {
  dog: "/dogs/food",
  cat: "/cats/food",
};

const SPECIES_PARENT: Record<"dog" | "cat", string> = {
  dog: "/dogs",
  cat: "/cats",
};

const SPECIES_HEALTH: Record<"dog" | "cat", string> = {
  dog: "/dogs/health",
  cat: "/cats/health",
};

const SOURCE_REVIEW_NOTE =
  "Source review note: This page is an educational food safety overview. Pet food safety details should be verified against authoritative veterinary references such as AVMA, the Merck Veterinary Manual, ASPCA Animal Poison Control, Cornell University College of Veterinary Medicine, or VCA Hospitals before being treated as definitive.";

const VET_DISCLAIMER =
  "This content is for general educational purposes only and is not a substitute for professional veterinary advice. Food safety can depend on the animal's size, age, health, quantity eaten, ingredients, preparation, and individual sensitivity. If your pet ate something potentially toxic, shows vomiting, diarrhea, weakness, tremors, breathing problems, collapse, seizures, bleeding, or sudden behavior changes, contact a licensed veterinarian or emergency animal clinic immediately.";

interface FoodSafetyArticleViewProps {
  article: FoodSafetyArticle;
}

export default function FoodSafetyArticleView({
  article,
}: FoodSafetyArticleViewProps) {
  const speciesLabel = SPECIES_LABEL[article.species];
  const hubHref = SPECIES_HUB[article.species];
  const parentHref = SPECIES_PARENT[article.species];
  const healthHref = SPECIES_HEALTH[article.species];
  const path = `${hubHref}/${article.slug}`;
  const url = `https://faunahub.com${path}`;

  const related = getRelatedArticles(article, 3);

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: speciesLabel, url: `https://faunahub.com${parentHref}` },
      { name: "Food & Nutrition", url: `https://faunahub.com${hubHref}` },
      { name: article.pageQuestion, url },
    ]),
    articleSchema({
      title: article.title,
      description: article.description,
      path,
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime,
    }),
    faqSchema(article.faqs),
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
              { label: speciesLabel, href: parentHref },
              { label: "Food & Nutrition", href: hubHref },
              { label: article.pageQuestion },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <p className="mb-3">
                <span className="tag">{speciesLabel}</span>{" "}
                <span className="tag ml-1">Food Safety</span>
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3 leading-tight">
                {article.pageQuestion}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6 not-prose">
                <SafetyBadge classification={article.safetyClassification} />
                <RiskLevelBadge level={article.riskLevel} />
              </div>

              <section
                aria-labelledby="direct-answer-heading"
                className="not-prose rounded-2xl border border-[#DDE6DD] bg-[#F7F8F3] p-5 sm:p-6 mb-8"
              >
                <h2
                  id="direct-answer-heading"
                  className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2"
                >
                  Direct answer
                </h2>
                <p className="text-base sm:text-[1.05rem] text-[#17211B] leading-relaxed">
                  {article.directAnswer}
                </p>
              </section>

              <h2>Why this matters</h2>
              {article.why.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <h2>Preparation cautions</h2>
              <ul>
                {article.preparationCautions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h2>Quantity caution</h2>
              <p>{article.quantityCaution}</p>

              <h2>Warning signs to watch for</h2>
              <p className="text-sm text-[#5E6B63] -mt-3 mb-4">
                Any of the following signs warrant prompt veterinary contact —
                particularly if more than one appears, if they persist, or if
                they appear after a known ingestion.
              </p>
              <div className="not-prose rounded-xl border border-amber-200 bg-amber-50 p-4">
                <ul className="space-y-2 text-sm text-amber-900">
                  {article.warningSigns.map((sign, i) => (
                    <li key={i} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="flex-shrink-0 mt-0.5 text-amber-700"
                      >
                        ●
                      </span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mt-10">When to call a veterinarian</h2>
              <div className="not-prose rounded-xl border border-red-200 bg-red-50 p-4">
                <p className="text-sm sm:text-base text-red-900 leading-relaxed">
                  <span className="font-semibold">If in doubt, call. </span>
                  {article.whenToCallVet}
                </p>
              </div>

              {article.saferAlternatives.length > 0 && (
                <>
                  <h2 className="mt-10">Safer alternatives</h2>
                  <ul>
                    {article.saferAlternatives.map((alt, i) => (
                      <li key={i}>{alt}</li>
                    ))}
                  </ul>
                </>
              )}

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
                <p className="leading-relaxed">{VET_DISCLAIMER}</p>
              </aside>

              <div className="mt-10">
                <FAQBlock
                  items={article.faqs}
                  title={`Frequently Asked Questions — ${article.foodName} & ${speciesLabel}`}
                />
              </div>
            </article>

            <aside
              aria-label={`${article.foodName} food-safety sidebar`}
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
                      {speciesLabel}
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-1">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Classification
                    </dt>
                    <dd>
                      <SafetyBadge
                        classification={article.safetyClassification}
                        size="sm"
                      />
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-1">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Risk level
                    </dt>
                    <dd>
                      <RiskLevelBadge level={article.riskLevel} size="sm" />
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Food
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      {article.foodName}
                    </dd>
                  </div>
                </dl>
              </div>

              {related.length > 0 && (
                <RelatedLinks
                  title={`More ${speciesLabel.toLowerCase()} food safety`}
                  links={[
                    ...related.map((r) => ({
                      label: r.pageQuestion,
                      href: `${SPECIES_HUB[r.species]}/${r.slug}`,
                    })),
                    {
                      label: `All ${speciesLabel} food safety guides`,
                      href: hubHref,
                    },
                  ]}
                />
              )}

              <RelatedLinks
                title="Related tools & care"
                links={[
                  {
                    label: `${speciesLabel} health guides`,
                    href: healthHref,
                    description: "Care, conditions & vet visits",
                  },
                  {
                    label: "Can my pet eat this?",
                    href: "/tools/can-my-pet-eat-this",
                    description: "Look up a food across this site",
                  },
                  {
                    label: "Pet Life Stage Calculator",
                    href: "/tools/pet-life-stage-calculator",
                    description: "Care focus by life stage",
                  },
                ]}
              />

              {article.sources && article.sources.length > 0 ? (
                <SourcesSection sources={article.sources} />
              ) : (
                <aside
                  role="note"
                  aria-label="Source review note"
                  className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
                >
                  <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
                  <p className="leading-relaxed">{SOURCE_REVIEW_NOTE}</p>
                </aside>
              )}

              <LastUpdated date={article.modifiedTime} />

              <p>
                <Link
                  href={hubHref}
                  className="text-sm font-medium text-[#063F2A] hover:underline"
                >
                  ← Back to {speciesLabel.toLowerCase()} food safety
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
