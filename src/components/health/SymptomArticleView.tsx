import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import SourcesSection from "@/components/educational/SourcesSection";
import type { SymptomArticle } from "@/lib/health/data";
import {
  getSymptomArticlesBySpecies,
} from "@/lib/health/data";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";

const VET_DISCLAIMER =
  "This content is for general educational purposes only and is not a substitute for professional veterinary advice, diagnosis, or treatment. If your pet shows severe symptoms, persistent discomfort, breathing problems, bleeding, poisoning signs, collapse, seizures, repeated vomiting, sudden weakness, inability to urinate, severe pain, or major behavior changes, contact a licensed veterinarian or emergency animal clinic immediately.";

interface SymptomArticleViewProps {
  article: SymptomArticle;
}

function BulletList({
  id,
  heading,
  intro,
  items,
  tone = "neutral",
}: {
  id: string;
  heading: string;
  intro?: string;
  items: string[];
  tone?: "neutral" | "warning" | "caution";
}) {
  const card =
    tone === "warning"
      ? "not-prose mt-4 space-y-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm sm:text-base text-amber-900"
      : tone === "caution"
        ? "not-prose mt-4 space-y-2 rounded-xl border border-[#DDE6DD] bg-[#F7F8F3] p-4 text-sm sm:text-base text-[#2C3A2F]"
        : "not-prose mt-4 space-y-2 rounded-xl border border-[#DDE6DD] bg-white p-4 text-sm sm:text-base text-[#2C3A2F]";
  const dot =
    tone === "warning"
      ? "text-amber-700"
      : "text-[#063F2A]";
  const toneLabel =
    tone === "warning"
      ? "Urgent"
      : tone === "caution"
        ? "Observe"
        : null;
  return (
    <section aria-labelledby={id}>
      <div className="flex items-baseline gap-3 flex-wrap">
        <h2 id={id}>{heading}</h2>
        {toneLabel && (
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium uppercase tracking-wide ${
              tone === "warning"
                ? "bg-amber-100 text-amber-900 border border-amber-200"
                : "bg-[#EFF4E0] text-[#063F2A] border border-[#CFE0A8]"
            }`}
          >
            {toneLabel}
          </span>
        )}
      </div>
      {intro && (
        <p className="text-sm sm:text-base text-[#2C3A2F]">{intro}</p>
      )}
      <ul className={card}>
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

export default function SymptomArticleView({
  article,
}: SymptomArticleViewProps) {
  const url = `https://faunahub.com${article.path}`;
  const parentHub =
    article.species === "dog" ? "/dogs/health" : "/cats/health";
  const grandparent = article.species === "dog" ? "/dogs" : "/cats";
  const grandparentLabel = article.species === "dog" ? "Dogs" : "Cats";
  const hubLabel = `${grandparentLabel} health`;

  const siblings = getSymptomArticlesBySpecies(article.species).filter(
    (a) => a.slug !== article.slug
  );

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: grandparentLabel, url: `https://faunahub.com${grandparent}` },
      { name: hubLabel, url: `https://faunahub.com${parentHub}` },
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

  const foodSafetyLink =
    article.species === "dog"
      ? {
          label: "Dog food safety guides",
          href: "/dogs/food",
          description: "What dogs can and cannot eat",
        }
      : {
          label: "Cat food safety guides",
          href: "/cats/food",
          description: "What cats can and cannot eat",
        };

  const ageCalculatorLink =
    article.species === "dog"
      ? {
          label: "Dog Age Calculator",
          href: "/tools/dog-age-calculator",
          description: "Size-adjusted human-age equivalent",
        }
      : {
          label: "Cat Age Calculator",
          href: "/tools/cat-age-calculator",
          description: "Feline human-age equivalent and life stage",
        };

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
              { label: grandparentLabel, href: grandparent },
              { label: hubLabel, href: parentHub },
              { label: article.pageHeading },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <p className="mb-3">
                <span className="tag">{article.speciesLabel} Health</span>{" "}
                <span className="tag ml-1">Symptom Awareness</span>
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3 leading-tight">
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
                  This can have many causes
                </h2>
                <p className="text-base sm:text-[1.05rem] text-[#17211B] leading-relaxed">
                  {article.directAnswer}
                </p>
              </section>

              <aside
                role="note"
                aria-label="Veterinary disclaimer"
                className="not-prose flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900 mb-6"
              >
                <span
                  aria-hidden="true"
                  className="text-amber-600 flex-shrink-0 text-base mt-0.5"
                >
                  ⚠
                </span>
                <p className="leading-relaxed">{VET_DISCLAIMER}</p>
              </aside>

              <BulletList
                id="possible-causes"
                heading="Possible cause categories"
                intro="Categories only — not a diagnosis. A veterinarian can identify the specific cause through examination and tests."
                items={article.possibleCauseCategories}
              />

              <div className="mt-10">
                <BulletList
                  id="emergency-signs"
                  heading="Emergency signs — contact a vet immediately"
                  intro="If any of the following are present, treat the situation as urgent and contact a licensed veterinarian or emergency clinic."
                  items={article.emergencySigns}
                  tone="warning"
                />
              </div>

              <div className="mt-10">
                <BulletList
                  id="safe-observations"
                  heading="What you can safely observe and report"
                  intro="Notes that help a veterinarian make an informed assessment when you call or visit."
                  items={article.safeObservationChecklist}
                  tone="caution"
                />
              </div>

              <div className="mt-10">
                <BulletList
                  id="what-not-to-do"
                  heading="What not to do"
                  items={article.whatNotToDo}
                />
              </div>

              <h2 className="mt-10">When to contact a veterinarian</h2>
              <p>{article.whenToContactVet}</p>

              <aside
                role="note"
                aria-label="Repeated veterinary disclaimer"
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
                  title={`${article.pageHeading} — Frequently Asked Questions`}
                />
              </div>

              <div className="mt-10">
                <SourcesSection sources={article.sources} />
              </div>
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
                      Species
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      {article.speciesLabel}
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Symptom
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      {article.symptom}
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Type
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      Symptom-awareness overview
                    </dd>
                  </div>
                </dl>
              </div>

              <RelatedLinks
                title={`More ${article.speciesLabel.toLowerCase()} health pages`}
                links={[
                  ...siblings.slice(0, 3).map((s) => ({
                    label: s.pageHeading,
                    href: s.path,
                  })),
                  { label: `${grandparentLabel} health hub`, href: parentHub },
                ]}
              />

              <RelatedLinks
                title="Vet care and tools"
                links={[
                  {
                    label: "Vet care hub",
                    href: "/vet-care",
                    description: "Routine and emergency care planning",
                  },
                  {
                    label: "When to call an emergency vet",
                    href: "/vet-care/when-to-call-an-emergency-vet",
                    description: "Common warning signs and what to say",
                  },
                  ageCalculatorLink,
                  foodSafetyLink,
                ]}
              />

              <LastUpdated date={article.modifiedTime} />

              <p>
                <Link
                  href={parentHub}
                  className="text-sm font-medium text-[#063F2A] hover:underline"
                >
                  ← Back to {hubLabel.toLowerCase()}
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
