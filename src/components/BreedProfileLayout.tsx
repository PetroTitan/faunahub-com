import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import SourcesSection from "@/components/educational/SourcesSection";
import ImageCredit from "@/components/ImageCredit";
import type { SourceLink } from "@/lib/educational/types";
import type { BreedImage } from "@/lib/images/breed-images";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";

export interface BreedFact {
  label: string;
  value: string;
}

export interface BreedFaq {
  question: string;
  answer: string;
}

export interface BreedRelatedLink {
  label: string;
  href: string;
  description?: string;
}

export interface BreedProfileLayoutProps {
  breedName: string;
  species: "dog" | "cat";
  pageTitle: string;
  description: string;
  path: string;
  tags: string[];
  /** One-paragraph intro framed cautiously. Should not promise temperament. */
  intro: ReactNode;
  /** Appearance & size content. */
  appearance: ReactNode;
  /** Temperament & household-fit content; must include "individual variation" language. */
  temperament: ReactNode;
  /** Exercise/enrichment for dogs, activity for cats. */
  activity: ReactNode;
  /** Grooming & care notes. */
  grooming: ReactNode;
  /** Optional training/socialization notes (dog pages; optional for cats). */
  training?: ReactNode;
  /** Health planning notes — must avoid diagnosis/dosage language. */
  health: ReactNode;
  /** Cost & responsible ownership notes. */
  responsibility: ReactNode;
  quickFacts: BreedFact[];
  faqs: BreedFaq[];
  relatedLinks: BreedRelatedLink[];
  sources: SourceLink[];
  image?: BreedImage;
  publishedDate: string;
  modifiedDate: string;
}

export default function BreedProfileLayout(props: BreedProfileLayoutProps) {
  const {
    breedName,
    species,
    pageTitle,
    description,
    path,
    tags,
    intro,
    appearance,
    temperament,
    activity,
    grooming,
    training,
    health,
    responsibility,
    quickFacts,
    faqs,
    relatedLinks,
    sources,
    image,
    publishedDate,
    modifiedDate,
  } = props;

  const parentLabel = species === "dog" ? "Dog Breeds" : "Cat Breeds";
  const parentHref = species === "dog" ? "/dogs/breeds" : "/cats/breeds";
  const topHref = species === "dog" ? "/dogs" : "/cats";
  const topLabel = species === "dog" ? "Dogs" : "Cats";

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: topLabel, url: `https://faunahub.com${topHref}` },
      { name: parentLabel, url: `https://faunahub.com${parentHref}` },
      { name: breedName, url: `https://faunahub.com${path}` },
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
              { label: topLabel, href: topHref },
              { label: parentLabel, href: parentHref },
              { label: breedName },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                {breedName}
              </h1>
              <p className="mb-6">
                {tags.map((t, i) => (
                  <span key={t} className={i === 0 ? "tag" : "tag ml-1"}>
                    {t}
                  </span>
                ))}
              </p>

              {image && (
                <figure className="not-prose mb-8 overflow-hidden rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] shadow-sm">
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: `${image.width} / ${image.height}` }}
                  >
                    <Image
                      src={image.localPath}
                      alt={image.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 760px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 sm:px-5 sm:py-4 bg-white border-t border-[#DDE6DD]">
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">
                      {image.caption}
                    </p>
                    <ImageCredit image={image} className="mt-1.5" />
                  </figcaption>
                </figure>
              )}

              <div className="not-prose mb-8 border-l-4 border-l-[#7BAA35] bg-[#EFF4E0]/60 p-5 rounded-r-xl">
                <p className="text-sm text-[#2C3A2F] leading-relaxed">
                  <strong className="text-[#063F2A]">Breed tendencies, not guarantees.</strong>{" "}
                  This page describes general characteristics often
                  associated with the {breedName} breed. Individual
                  {species === "dog" ? " dogs " : " cats "}vary by genetics,
                  training, socialisation, age, health, environment, and
                  owner experience. Spend time with a specific animal and
                  talk to a licensed veterinarian or reputable shelter
                  before deciding whether a breed is right for your
                  household.
                </p>
              </div>

              <h2>Overview</h2>
              {intro}

              <h2>Appearance &amp; size</h2>
              {appearance}

              <h2>Temperament &amp; household fit</h2>
              {temperament}

              <h2>{species === "dog" ? "Exercise & enrichment" : "Activity & enrichment"}</h2>
              {activity}

              <h2>Grooming &amp; care</h2>
              {grooming}

              {training && (
                <>
                  <h2>Training &amp; socialisation</h2>
                  {training}
                </>
              )}

              <h2>Health considerations</h2>
              {health}

              <h2>Responsible ownership</h2>
              {responsibility}

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock
                  items={faqs}
                  title={`Frequently asked questions — ${breedName}`}
                />
              </div>

              <div className="not-prose mt-10">
                <SourcesSection
                  sources={sources}
                  intro="Background, breed standard, and general care references used in this profile. External links open in a new tab. Always confirm specific care decisions with a licensed veterinarian or reputable shelter."
                />
              </div>
            </article>

            <aside
              aria-label={`${breedName} breed sidebar`}
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick summary
                  </p>
                </div>
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
              <RelatedLinks title="Related" links={relatedLinks} />
              <div className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#2C3A2F] space-y-2">
                <p className="font-medium text-[#17211B]">Planning a pet?</p>
                <p className="text-xs leading-relaxed">
                  Use these tools alongside breed pages — they do not
                  recommend a specific breed but help with budgeting and
                  household fit.
                </p>
                <ul className="text-xs flex flex-col gap-1 mt-1">
                  <li>
                    <Link
                      href="/tools/pet-breed-selector"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Pet breed selector →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools/pet-cost-calculator"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Pet cost calculator →
                    </Link>
                  </li>
                </ul>
              </div>
              <LastUpdated date={modifiedDate} />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
