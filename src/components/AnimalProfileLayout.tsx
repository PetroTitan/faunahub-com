import type { ReactNode } from "react";
import { Fragment } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import SourceNote from "@/components/SourceNote";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import SourcesSection from "@/components/educational/SourcesSection";
import AnimalComparisonLinks from "@/components/compare/AnimalComparisonLinks";
import AnimalHeroImage from "@/components/AnimalHeroImage";
import AnimalGallery from "@/components/AnimalGallery";
import type { SourceLink } from "@/lib/educational/types";
import type { AnimalImage } from "@/lib/images/types";
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
  parentCategory:
    | "Mammals"
    | "Birds"
    | "Reptiles"
    | "Reptiles & Amphibians"
    | "Marine Animals"
    | "Fish"
    | "Insects"
    | "Insects & Invertebrates"
    | "Amphibians";
  parentCategoryHref:
    | "/animal-encyclopedia/mammals"
    | "/animal-encyclopedia/birds"
    | "/animal-encyclopedia/reptiles"
    | "/animal-encyclopedia/marine-animals"
    | "/animal-encyclopedia/fish"
    | "/animal-encyclopedia/insects"
    | "/animal-encyclopedia";
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
  /** Optional verified-source list. When present, renders SourcesSection
   * inline and hides the "source review pending" sidebar note. */
  sources?: SourceLink[];
  /** Optional verified hero image. When present, renders above the overview. */
  image?: AnimalImage;
  /** Optional verified gallery images. When non-empty, renders a "More photos"
   * section after Human Interaction (i.e. after the main educational sections). */
  galleryImages?: AnimalImage[];
  publishedDate: string;
  modifiedDate: string;
}


/**
 * Italicise only the taxon name, never the rank word.
 *
 * Zoological convention italicises genus-rank names and below, and leaves
 * higher ranks — and the words "family", "genus", "order", "subfamily" — in
 * roman type. Many group-level profiles carry values like "family Otariidae" or
 * "Mus musculus and relatives", so italicising the whole string set the rank
 * word in italics too. Splitting here fixes every profile at once rather than
 * asking each page to pre-format its own markup.
 *
 * Hybrid formulae are the third case. A cross is written "Equus asinus ×
 * Equus caballus", and the multiplication sign is NOT part of either name, so
 * it stays roman while the two binomials either side are italicised. Rendering
 * the whole string in italics turns the formula into something that reads like
 * a single pseudo-binomial — exactly the reading a hybrid page has to avoid.
 */
const RANK_PREFIX = /^(super|sub|infra)?(family|order|class|phylum|genus|tribe)\s+/i;
/** Matches the multiplication sign, or a lone ASCII "x" used in its place. */
const HYBRID_SEPARATOR = /\s+(?:×|x)\s+/;

function renderScientificName(value: string): ReactNode {
  if (HYBRID_SEPARATOR.test(value)) {
    const parts = value.split(HYBRID_SEPARATOR);
    return (
      <>
        {parts.map((part, index) => (
          <Fragment key={part}>
            {index > 0 && " × "}
            <span className="italic">{part}</span>
          </Fragment>
        ))}
      </>
    );
  }
  return renderRankedName(value);
}

function renderRankedName(value: string): ReactNode {
  const trailing = value.match(/^(.*?)(\s+and relatives)$/i);
  const core = trailing ? trailing[1] : value;
  const suffix = trailing ? trailing[2] : "";

  const rank = core.match(RANK_PREFIX);
  if (rank) {
    return (
      <>
        {rank[0]}
        <span className="italic">{core.slice(rank[0].length)}</span>
        {suffix}
      </>
    );
  }
  return (
    <>
      <span className="italic">{core}</span>
      {suffix}
    </>
  );
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
  sources,
  image,
  galleryImages,
  publishedDate,
  modifiedDate,
}: AnimalProfileLayoutProps) {
  const hasSources = !!sources && sources.length > 0;
  // Derive the animal slug from the canonical path ("/animals/lion" -> "lion")
  // so every profile using this layout gains Compare Center links without any
  // per-file edit. The component renders nothing when there is no comparison.
  const animalSlug = path.startsWith("/animals/") ? path.slice("/animals/".length) : "";
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
                    <span className="font-normal text-[#5E6B63]">
                      ({renderScientificName(scientificName)})
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

              {image && <AnimalHeroImage image={image} priority />}

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

              <AnimalComparisonLinks slug={animalSlug} />

              {galleryImages && galleryImages.length > 0 && (
                <AnimalGallery
                  images={galleryImages}
                  commonName={commonName}
                />
              )}

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock
                  items={faqs}
                  title={`Frequently Asked Questions — ${commonName}`}
                />
              </div>

              {hasSources && (
                <div className="not-prose mt-10">
                  <SourcesSection
                    sources={sources!}
                    intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                  />
                </div>
              )}
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
              {hasSources ? (
                <aside
                  role="note"
                  aria-label="Sources reference"
                  className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
                >
                  <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
                  <p>
                    Verified wildlife references are listed at the bottom of
                    this page under &quot;Sources and further reading&quot;.
                  </p>
                </aside>
              ) : (
                <SourceNote pending />
              )}
              <LastUpdated date={modifiedDate} />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
