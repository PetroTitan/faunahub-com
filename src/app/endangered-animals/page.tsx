import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import CategoryBadge from "@/components/red-list/CategoryBadge";
import ConfidenceBadge from "@/components/red-list/ConfidenceBadge";
import SpeciesList from "@/components/red-list/SpeciesList";
import MethodologyNote from "@/components/red-list/MethodologyNote";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  THREATENED_CATEGORIES,
  GROUP_PAGE_ORDER,
  getCategoryMeta,
  getGroupMeta,
  CATEGORY_PAGE_SLUG,
} from "@/lib/red-list/categories";
import { REGION_ORDER, getRegionMeta } from "@/lib/red-list/regions";
import {
  getFeaturedSpecies,
  getRecentlyVerified,
  countByCategory,
  countByGroup,
  recordInternalHref,
} from "@/lib/red-list/helpers";
import { RED_LIST_SPECIES_COUNT } from "@/lib/red-list/species";
import {
  METHODOLOGY_FAQ,
  RED_LIST_LAST_REVIEW,
  RED_LIST_PRIMARY_SOURCES,
} from "@/lib/red-list/methodology";

export const metadata: Metadata = buildMetadata({
  title:
    "Endangered Animals & Red List Species Intelligence — Conservation Status, Carefully Sourced",
  description:
    "A source-transparent guide to endangered animals and IUCN Red List categories. Browse threatened species by risk level and animal group, with verified sources and clear data limitations.",
  path: "/endangered-animals",
});

const HERO_LINKS = [
  { label: "Browse by region", href: "/endangered-animals/regions" },
  { label: "Red List explained", href: "/endangered-animals/red-list-explained" },
  {
    label: "How conservation status works",
    href: "/endangered-animals/how-conservation-status-works",
  },
  {
    label: "Data methodology",
    href: "/endangered-animals/red-list-data-methodology",
  },
];

export default function EndangeredAnimalsHubPage() {
  const featured = getFeaturedSpecies(8);
  const recent = getRecentlyVerified(8);
  const catCounts = countByCategory();
  const groupCounts = countByGroup();

  const featuredWithHref = featured
    .map((r) => ({ record: r, href: recordInternalHref(r) }))
    .filter((f): f is { record: typeof f.record; href: string } => !!f.href);

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      {
        name: "Endangered Animals",
        url: "https://faunahub.com/endangered-animals",
      },
    ]),
    itemListSchema(
      featuredWithHref.map((f, i) => ({
        name: `${f.record.commonName} (${f.record.scientificName})`,
        url: `https://faunahub.com${f.href}`,
        position: i + 1,
      })),
    ),
    faqSchema(METHODOLOGY_FAQ),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        {/* Hero */}
        <header className="bg-white border-b border-[#DDE6DD]">
          <div className="container-content pt-4 pb-12">
            <Breadcrumbs items={[{ label: "Endangered Animals" }]} />
            <p className="text-xs uppercase tracking-wider text-[#7BAA35] font-semibold mb-3">
              Red List Species Intelligence
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17211B] max-w-3xl leading-tight">
              Endangered Animals &amp; Conservation Status, Carefully Sourced
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#2C3A2F] max-w-2xl leading-relaxed">
              An educational, source-transparent guide to threatened wildlife.
              We summarise IUCN Red List categories for {RED_LIST_SPECIES_COUNT}{" "}
              species, link every record to authoritative references, and show
              exactly how current and how confident each entry is — never
              presenting status as permanent.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {HERO_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="btn-secondary text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          {/* 1. What the Red List Means */}
          <section aria-labelledby="what-heading" className="prose-content max-w-3xl">
            <h2 id="what-heading">What the Red List means</h2>
            <p>
              The <strong>IUCN Red List of Threatened Species</strong> is the
              world&apos;s most widely used assessment of extinction risk. Each
              species is placed in a category — from{" "}
              <strong>Least Concern</strong> to{" "}
              <strong>Critically Endangered</strong> — based on transparent
              criteria such as population size, rate of decline, and range. The
              Red List is maintained by the International Union for Conservation
              of Nature and is updated as new science arrives.
            </p>
            <p>
              FaunaHub is an independent educational publisher. We do not run
              assessments or set conservation status. Instead, we summarise
              published categories in plain language and link you to the
              authoritative source so you can verify the current status
              yourself.
            </p>
          </section>

          {/* 2. How FaunaHub Uses Conservation Status Carefully */}
          <section aria-labelledby="careful-heading">
            <h2
              id="careful-heading"
              className="text-2xl font-bold text-[#17211B] mb-4"
            >
              How FaunaHub uses conservation status carefully
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  t: "Verified sources only",
                  d: "Every record links to authoritative references — IUCN, Animal Diversity Web, NOAA Fisheries, and the U.S. Fish & Wildlife Service.",
                },
                {
                  t: "No invented data",
                  d: "We never invent status, population numbers, trends, threats, or ranges. Optional fields are shown only when verified.",
                },
                {
                  t: "Status is a snapshot",
                  d: "Categories change as species recover or decline. We date every record and point you to the live IUCN entry.",
                },
                {
                  t: "Quality over volume",
                  d: "Many records are index-only. We build full profiles only where there is enough verified material and a licensed photo.",
                },
                {
                  t: "Honest confidence flags",
                  d: "Each record carries a confidence flag so you can see how much of it has been individually re-verified.",
                },
                {
                  t: "No alarmism",
                  d: "This is a calm reference, not a fundraising campaign. We avoid panic language and sensational claims.",
                },
              ].map((c) => (
                <div key={c.t} className="card p-5">
                  <h3 className="text-base font-semibold text-[#17211B] mb-1.5">
                    {c.t}
                  </h3>
                  <p className="text-sm text-[#5E6B63] leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Featured Threatened Species */}
          <section aria-labelledby="featured-heading">
            <h2
              id="featured-heading"
              className="text-2xl font-bold text-[#17211B] mb-2"
            >
              Featured threatened species
            </h2>
            <p className="text-sm text-[#5E6B63] mb-5 max-w-2xl">
              Species with a detailed FaunaHub profile or a linked animal page.
              Each links to its full write-up and sources.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredWithHref.map(({ record, href }) => (
                <li key={record.slug}>
                  <Link
                    href={href}
                    className="card p-5 flex flex-col gap-2 h-full hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                  >
                    <CategoryBadge code={record.redListCategory} size="sm" />
                    <span className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] leading-snug">
                      {record.commonName}
                    </span>
                    <span className="text-xs italic text-[#5E6B63]">
                      {record.scientificName}
                    </span>
                    <span className="text-xs font-medium text-[#063F2A] mt-auto">
                      {record.profileStatus === "detailed-profile"
                        ? "Read profile →"
                        : "View animal page →"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Browse by Risk Category */}
          <section aria-labelledby="risk-heading">
            <h2
              id="risk-heading"
              className="text-2xl font-bold text-[#17211B] mb-5"
            >
              Browse by risk category
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {THREATENED_CATEGORIES.map((code) => {
                const meta = getCategoryMeta(code);
                const slug = CATEGORY_PAGE_SLUG[code]!;
                return (
                  <Link
                    key={code}
                    href={`/endangered-animals/${slug}`}
                    className="card p-5 flex flex-col gap-3 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                  >
                    <div className="flex items-center justify-between">
                      <CategoryBadge code={code} />
                      <span className="text-xs text-[#8A958E]">
                        {catCounts[code]} records
                      </span>
                    </div>
                    <span className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A]">
                      {meta.label}
                    </span>
                    <span className="text-sm text-[#5E6B63] leading-snug">
                      {meta.shortDescription}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* 5. Browse by Animal Group */}
          <section aria-labelledby="group-heading">
            <h2
              id="group-heading"
              className="text-2xl font-bold text-[#17211B] mb-5"
            >
              Browse by animal group
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GROUP_PAGE_ORDER.map((group) => {
                const meta = getGroupMeta(group);
                return (
                  <Link
                    key={group}
                    href={`/endangered-animals/${group}`}
                    className="card p-5 flex flex-col gap-2 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                  >
                    <span className="text-3xl" aria-hidden="true">
                      {meta.icon}
                    </span>
                    <span className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A]">
                      {meta.label}
                    </span>
                    <span className="text-sm text-[#5E6B63] leading-snug">
                      {meta.description}
                    </span>
                    <span className="text-xs text-[#8A958E] mt-1">
                      {groupCounts[group]} records
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* 5b. Browse by Region */}
          <section aria-labelledby="region-heading">
            <div className="flex items-end justify-between gap-3 flex-wrap mb-5">
              <h2
                id="region-heading"
                className="text-2xl font-bold text-[#17211B]"
              >
                Browse by region
              </h2>
              <Link
                href="/endangered-animals/regions"
                className="text-sm font-medium text-[#063F2A] hover:underline"
              >
                All regions →
              </Link>
            </div>
            <p className="text-sm text-[#5E6B63] mb-5 max-w-2xl">
              Explore threatened species by where they live. Region pages show
              the global Red List category — national legal status is separate.
            </p>
            <div className="flex flex-wrap gap-2">
              {REGION_ORDER.map((region) => (
                <Link
                  key={region}
                  href={`/endangered-animals/regions/${region}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#DDE6DD] bg-white px-3 py-1.5 text-sm text-[#2C3A2F] hover:border-[#CFE0A8] hover:text-[#063F2A] hover:no-underline transition-colors"
                >
                  <span aria-hidden="true">{getRegionMeta(region).icon}</span>
                  {getRegionMeta(region).label}
                </Link>
              ))}
            </div>
          </section>

          {/* 6. Recently Verified Records */}
          <section aria-labelledby="recent-heading">
            <div className="flex items-center justify-between mb-2 gap-3 flex-wrap">
              <h2
                id="recent-heading"
                className="text-2xl font-bold text-[#17211B]"
              >
                Recently verified records
              </h2>
              <ConfidenceBadge confidence="source-review-pending" />
            </div>
            <p className="text-sm text-[#5E6B63] mb-5 max-w-2xl">
              The dataset was last reviewed on{" "}
              <time dateTime={RED_LIST_LAST_REVIEW}>{RED_LIST_LAST_REVIEW}</time>
              . &ldquo;Verified&rdquo; here means we re-checked the record
              against its listed sources — not the date of the underlying IUCN
              assessment.
            </p>
            <SpeciesList records={recent} />
          </section>

          {/* 7. Data Limitations and Source Methodology */}
          <section aria-labelledby="limits-heading">
            <h2
              id="limits-heading"
              className="text-2xl font-bold text-[#17211B] mb-4"
            >
              Data limitations and source methodology
            </h2>
            <MethodologyNote
              lastVerified={RED_LIST_LAST_REVIEW}
              extra="Conservation status here is a curated educational snapshot, not a complete or live database. Some sub-populations and subspecies are assessed differently from the species as a whole, and national status can differ from the global category."
            />
            <p className="text-sm text-[#5E6B63] mt-4">
              Primary sources used across this section:{" "}
              {RED_LIST_PRIMARY_SOURCES.join(", ")}.
            </p>
          </section>

          {/* 8. Related Animal Encyclopedia Pages + 9. Sources & FAQ */}
          <div className="grid gap-8 lg:grid-cols-3">
            <section
              aria-labelledby="faq-section-heading"
              className="lg:col-span-2"
            >
              <h2 id="faq-section-heading" className="sr-only">
                Frequently asked questions
              </h2>
              <FAQBlock items={METHODOLOGY_FAQ} />
            </section>
            <div className="space-y-6">
              <RelatedLinks
                title="Related encyclopedia pages"
                links={[
                  {
                    label: "Animal Encyclopedia",
                    href: "/animal-encyclopedia",
                    description: "Profiles across every major animal group",
                  },
                  {
                    label: "Wildlife & Biodiversity",
                    href: "/wildlife",
                    description: "Habitats and biodiversity explainers",
                  },
                  {
                    label: "Mammals",
                    href: "/animal-encyclopedia/mammals",
                  },
                  {
                    label: "Birds",
                    href: "/animal-encyclopedia/birds",
                  },
                  {
                    label: "Reptiles & Amphibians",
                    href: "/animal-encyclopedia/reptiles",
                  },
                ]}
              />
              <RelatedLinks
                title="Understand the Red List"
                links={[
                  {
                    label: "Red List explained",
                    href: "/endangered-animals/red-list-explained",
                  },
                  {
                    label: "How conservation status works",
                    href: "/endangered-animals/how-conservation-status-works",
                  },
                  {
                    label: "Data methodology",
                    href: "/endangered-animals/red-list-data-methodology",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
