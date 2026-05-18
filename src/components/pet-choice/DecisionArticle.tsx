import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import SourcesSection from "@/components/educational/SourcesSection";
import {
  DECISION_SOURCES_CAT,
  DECISION_SOURCES_DOG,
  DECISION_SOURCES_GUIDE,
} from "@/lib/educational/animal-sources";
import type { SourceLink } from "@/lib/educational/types";
import {
  DECISION_SOURCE_NOTE,
  type DecisionPage,
} from "@/lib/pet-choice/data";
import { getRelatedDecisions } from "@/lib/pet-choice/data";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/schema";

const HUB_LABEL: Record<DecisionPage["parentHub"], string> = {
  "/dogs/breeds": "Dog Breeds",
  "/cats/breeds": "Cat Breeds",
  "/guides": "Guides",
};

const HUB_PARENT_PATH: Record<DecisionPage["parentHub"], string> = {
  "/dogs/breeds": "/dogs",
  "/cats/breeds": "/cats",
  "/guides": "/guides",
};

const HUB_PARENT_LABEL: Record<DecisionPage["parentHub"], string> = {
  "/dogs/breeds": "Dogs",
  "/cats/breeds": "Cats",
  "/guides": "Guides",
};

const KIND_TAG: Record<DecisionPage["kind"], string> = {
  "dog-breed": "Dog Breed Guide",
  "cat-breed": "Cat Breed Guide",
  guide: "Pet Choice Guide",
};

function sidebarRelatedTools(page: DecisionPage) {
  const links: { label: string; href: string; description?: string }[] = [
    {
      label: "Pet Breed Selector",
      href: "/tools/pet-breed-selector",
      description: "Find categories that fit your home",
    },
    {
      label: "Pet Life Stage Calculator",
      href: "/tools/pet-life-stage-calculator",
      description: "Care focus by life stage",
    },
  ];
  if (page.kind === "dog-breed") {
    links.push({
      label: "Dog Age Calculator",
      href: "/tools/dog-age-calculator",
      description: "Size-adjusted human-age equivalent",
    });
    links.push({
      label: "Dog food safety guides",
      href: "/dogs/food",
      description: "What dogs can and cannot eat",
    });
  } else if (page.kind === "cat-breed") {
    links.push({
      label: "Cat Age Calculator",
      href: "/tools/cat-age-calculator",
      description: "Feline human-age equivalent and life stage",
    });
    links.push({
      label: "Cat food safety guides",
      href: "/cats/food",
      description: "What cats can and cannot eat",
    });
  } else {
    links.push({
      label: "All pet age calculators",
      href: "/tools/pet-age-calculator",
      description: "Pick the right tool by species",
    });
    links.push({
      label: "Free pet tools",
      href: "/tools",
      description: "Browse all FaunaHub tools",
    });
  }
  return links;
}

interface DecisionArticleViewProps {
  page: DecisionPage;
}

function defaultSourcesForKind(
  kind: DecisionPage["kind"]
): SourceLink[] {
  if (kind === "dog-breed") return DECISION_SOURCES_DOG;
  if (kind === "cat-breed") return DECISION_SOURCES_CAT;
  return DECISION_SOURCES_GUIDE;
}

export default function DecisionArticleView({
  page,
}: DecisionArticleViewProps) {
  const hubLabel = HUB_LABEL[page.parentHub];
  const resolvedSources =
    page.sources && page.sources.length > 0
      ? page.sources
      : defaultSourcesForKind(page.kind);
  const parentPath = HUB_PARENT_PATH[page.parentHub];
  const parentLabel = HUB_PARENT_LABEL[page.parentHub];
  const path = `${page.parentHub}/${page.slug}`;
  const url = `https://faunahub.com${path}`;

  const related = getRelatedDecisions(page, 3);

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: parentLabel, url: `https://faunahub.com${parentPath}` },
      ...(parentPath === page.parentHub
        ? []
        : [{ name: hubLabel, url: `https://faunahub.com${page.parentHub}` }]),
      { name: page.pageHeading, url },
    ]),
    articleSchema({
      title: page.title,
      description: page.description,
      path,
      datePublished: page.publishedTime,
      dateModified: page.modifiedTime,
    }),
    itemListSchema(
      page.recommendations.map((r, i) => ({
        name: r.name,
        url,
        position: i + 1,
      }))
    ),
    faqSchema(page.faqs),
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
            items={
              parentPath === page.parentHub
                ? [
                    { label: parentLabel, href: parentPath },
                    { label: page.pageHeading },
                  ]
                : [
                    { label: parentLabel, href: parentPath },
                    { label: hubLabel, href: page.parentHub },
                    { label: page.pageHeading },
                  ]
            }
          />

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <p className="mb-3">
                <span className="tag">{KIND_TAG[page.kind]}</span>
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3 leading-tight">
                {page.pageHeading}
              </h1>

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
                  {page.directAnswer}
                </p>
              </section>

              <h2>Decision criteria</h2>
              <p className="text-sm text-[#5E6B63] -mt-3 mb-4">
                Weigh these before reading the recommendations below.
              </p>
              <ul>
                {page.decisionCriteria.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <h2 className="mt-10">{page.recommendationsHeading}</h2>
              <p>{page.recommendationsIntro}</p>

              <ul className="not-prose mt-6 space-y-4">
                {page.recommendations.map((r, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-[#DDE6DD] bg-white p-5"
                  >
                    <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
                      <h3 className="text-lg font-semibold text-[#17211B]">
                        {r.name}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-[#8A958E]">
                        {page.kind === "guide" ? "Pet category" : "Breed example"}
                      </span>
                    </div>
                    <p className="text-sm text-[#2C3A2F] leading-relaxed mb-3">
                      {r.summary}
                    </p>
                    <ul className="space-y-1.5 text-sm text-[#2C3A2F]">
                      {r.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span
                            aria-hidden="true"
                            className="text-[#063F2A] flex-shrink-0 mt-0.5"
                          >
                            ●
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {r.caveat && (
                      <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs sm:text-sm text-amber-900 leading-relaxed">
                        <strong className="font-semibold">
                          Caution:
                        </strong>{" "}
                        {r.caveat}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10">Care expectations</h2>
              <ul>
                {page.careExpectations.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <h2 className="mt-10">Not ideal for…</h2>
              <ul>
                {page.notIdealFor.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <aside
                role="note"
                aria-label="Educational disclaimer"
                className="not-prose mt-10 flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900"
              >
                <span
                  aria-hidden="true"
                  className="text-amber-600 flex-shrink-0 text-base mt-0.5"
                >
                  ⚠
                </span>
                <p className="leading-relaxed">
                  This page is educational decision support, not a substitute for
                  advice from a veterinarian, reputable shelter, breeder, or
                  trainer. Individual animals vary by genetics, health, training,
                  socialization, and environment. Spend time with the specific
                  animal you are considering before committing.
                </p>
              </aside>

              <div className="mt-10">
                <FAQBlock
                  items={page.faqs}
                  title={`${page.pageHeading} — Frequently Asked Questions`}
                />
              </div>

              <div className="not-prose mt-10">
                <SourcesSection
                  sources={resolvedSources}
                  intro="Authoritative references for general pet-choice context. Breed-organization material reflects breed background and tendencies, not guarantees about an individual animal. External links open in a new tab."
                />
              </div>
            </article>

            <aside
              aria-label={`${page.pageHeading} sidebar`}
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
                      Type
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      {KIND_TAG[page.kind]}
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Intent
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      {page.shortIntent}
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Examples
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      {page.recommendations.length}{" "}
                      {page.kind === "guide" ? "pet categories" : "breed examples"}
                    </dd>
                  </div>
                </dl>
              </div>

              {related.length > 0 && (
                <RelatedLinks
                  title={`More ${hubLabel.toLowerCase()}`}
                  links={[
                    ...related.map((r) => ({
                      label: r.pageHeading,
                      href: `${r.parentHub}/${r.slug}`,
                    })),
                    {
                      label: `All ${hubLabel.toLowerCase()}`,
                      href: page.parentHub,
                    },
                  ]}
                />
              )}

              <RelatedLinks
                title="Related tools & care"
                links={sidebarRelatedTools(page)}
              />

              <aside
                role="note"
                aria-label="Source review note"
                className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
              >
                <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
                <p className="leading-relaxed">
                  {resolvedSources.length > 0
                    ? "Verified references are listed at the bottom of this page under “Sources and further reading”. Breed-organization material describes breed background and tendencies, not guarantees about an individual animal."
                    : DECISION_SOURCE_NOTE}
                </p>
              </aside>

              <LastUpdated date={page.modifiedTime} />

              <p>
                <Link
                  href={page.parentHub}
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
