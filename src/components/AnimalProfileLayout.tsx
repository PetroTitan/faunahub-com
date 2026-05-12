import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import SourceNote from "@/components/SourceNote";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";

export interface AnimalProfileSection {
  heading: string;
  body: ReactNode;
}

export interface AnimalProfileFact {
  label: string;
  value: string;
}

export interface AnimalProfileFAQ {
  question: string;
  answer: string;
}

export interface AnimalRelatedLink {
  label: string;
  href: string;
  description?: string;
}

export interface AnimalProfileLayoutProps {
  commonName: string;
  scientificName?: string;
  pageTitle: string;
  description: string;
  path: string;
  parentCategory: "Mammals" | "Birds" | "Reptiles" | "Marine Animals" | "Insects";
  parentCategoryHref:
    | "/animal-encyclopedia/mammals"
    | "/animal-encyclopedia/birds"
    | "/animal-encyclopedia/reptiles"
    | "/animal-encyclopedia/marine-animals"
    | "/animal-encyclopedia/insects";
  tags: string[];
  overview: ReactNode;
  habitat: ReactNode;
  diet: ReactNode;
  behavior: ReactNode;
  humanInteraction: ReactNode;
  similarAnimals?: ReactNode;
  extraSections?: AnimalProfileSection[];
  comparisonCallouts?: { href: string; label: string }[];
  faqs: AnimalProfileFAQ[];
  quickFacts: AnimalProfileFact[];
  relatedLinks: AnimalRelatedLink[];
  factsHeaderNote?: string;
  publishedDate: string;
  modifiedDate: string;
}

export default function AnimalProfileLayout({
  commonName,
  scientificName,
  pageTitle,
  description,
  path,
  parentCategory,
  parentCategoryHref,
  tags,
  overview,
  habitat,
  diet,
  behavior,
  humanInteraction,
  similarAnimals,
  extraSections,
  comparisonCallouts,
  faqs,
  quickFacts,
  relatedLinks,
  factsHeaderNote,
  publishedDate,
  modifiedDate,
}: AnimalProfileLayoutProps) {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: parentCategory, url: `https://faunahub.com${parentCategoryHref}` },
      { name: commonName, url: `https://faunahub.com${path}` },
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
          <Breadcrumbs
            items={[
              { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
              { label: parentCategory, href: parentCategoryHref },
              { label: commonName },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                {commonName}
                {scientificName && (
                  <>
                    {" "}
                    <span className="italic font-normal text-[#5E6B63]">
                      ({scientificName})
                    </span>
                  </>
                )}
              </h1>
              <p className="mb-8">
                {tags.map((t, i) => (
                  <span key={t} className={i === 0 ? "tag" : "tag ml-1"}>
                    {t}
                  </span>
                ))}
              </p>

              <h2>Overview</h2>
              {overview}

              <h2>Habitat &amp; Range</h2>
              {habitat}

              <h2>Diet</h2>
              {diet}

              <h2>Behavior</h2>
              {behavior}

              <h2>Human Interaction &amp; Conservation</h2>
              {humanInteraction}

              {extraSections?.map((s) => (
                <section key={s.heading}>
                  <h2>{s.heading}</h2>
                  {s.body}
                </section>
              ))}

              {similarAnimals && (
                <>
                  <h2>Similar Animals</h2>
                  {similarAnimals}
                </>
              )}

              {comparisonCallouts && comparisonCallouts.length > 0 && (
                <p className="mt-2 flex flex-wrap gap-2">
                  {comparisonCallouts.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="btn-secondary inline-flex text-sm"
                    >
                      {c.label} →
                    </Link>
                  ))}
                </p>
              )}

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock
                  items={faqs}
                  title={`Frequently Asked Questions — ${commonName}`}
                />
              </div>
            </article>

            <aside
              aria-label={`${commonName} profile sidebar`}
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Key Facts
                  </p>
                </div>
                {factsHeaderNote && (
                  <div className="px-5 py-2.5 bg-amber-50 border-b border-[#DDE6DD]">
                    <p className="text-xs text-amber-700">{factsHeaderNote}</p>
                  </div>
                )}
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {quickFacts.map((f) => (
                    <div key={f.label} className="px-5 py-3 flex flex-col gap-0.5">
                      <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                        {f.label}
                      </dt>
                      <dd className="text-[#17211B] font-medium">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
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
