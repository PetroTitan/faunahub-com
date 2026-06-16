import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import DataLimitations from "@/components/red-list/DataLimitations";
import CategoryBadge from "@/components/red-list/CategoryBadge";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  RED_LIST_REGIONS,
  REGION_ORDER,
  regionsForSlug,
} from "@/lib/red-list/regions";
import { countByRegion, RED_LIST_SPECIES } from "@/lib/red-list/helpers";

const PATH = "/endangered-animals/regions";

export const metadata: Metadata = buildMetadata({
  title: "Endangered Animals by Region — Global Red List Status Around the World",
  description:
    "Browse threatened species by region — Africa, Asia, the Americas, Europe, Oceania, and the oceans. Shows global IUCN Red List status, with clear notes that national legal status differs.",
  path: PATH,
});

const FAQ = [
  {
    question: "Does a global Red List category mean a species is legally protected here?",
    answer:
      "No. The IUCN Red List describes global extinction risk, not legal status. Whether a species is legally protected in a given country depends on that country's own laws and national Red Books, which are separate and vary widely. Always check the relevant national authority.",
  },
  {
    question: "How are species assigned to a region on FaunaHub?",
    answer:
      "A species appears under a region when its native range or regular occurrence falls there, as documented in the authoritative sources linked on each record. We do not invent presence, and a region listing is never a claim about legal protection.",
  },
  {
    question: "Why do some species appear in several regions?",
    answer:
      "Wide-ranging and migratory species — many whales, sharks, turtles, and some big cats and birds — naturally span more than one region. Marine species that cross ocean basins are grouped under “Oceans.”",
  },
];

export default function RegionsHubPage() {
  const counts = countByRegion();

  // "Broad regional relevance": species occurring across the most regions.
  const broad = [...RED_LIST_SPECIES]
    .map((r) => ({ r, n: regionsForSlug(r.slug).length }))
    .filter((x) => x.n >= 3)
    .sort((a, b) => b.n - a.n || a.r.commonName.localeCompare(b.r.commonName))
    .slice(0, 8)
    .map((x) => x.r);

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      {
        name: "Endangered Animals",
        url: "https://faunahub.com/endangered-animals",
      },
      { name: "Regions", url: `https://faunahub.com${PATH}` },
    ]),
    itemListSchema(
      REGION_ORDER.map((region, i) => ({
        name: RED_LIST_REGIONS[region].label,
        url: `https://faunahub.com${PATH}/${region}`,
        position: i + 1,
      })),
    ),
    faqSchema(FAQ),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD]">
          <div className="container-content pt-4 pb-10">
            <Breadcrumbs
              items={[
                { label: "Endangered Animals", href: "/endangered-animals" },
                { label: "Regions" },
              ]}
            />
            <p className="text-xs uppercase tracking-wider text-[#7BAA35] font-semibold mb-3">
              Regional discovery
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] max-w-3xl leading-tight">
              Endangered animals by region
            </h1>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              Explore threatened species grouped by where they live. We show each
              species&apos; <strong>global IUCN Red List category</strong> — not
              its national legal status, which is a separate matter handled by
              each country&apos;s own laws and Red Books.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          {/* Why region matters */}
          <section className="prose-content max-w-3xl">
            <h2>Why region matters</h2>
            <p>
              Extinction risk is not spread evenly across the planet. Some
              regions hold extraordinary numbers of species found nowhere else,
              and the threats species face — habitat loss, fishing pressure,
              invasive species, the wildlife trade — play out differently from
              place to place. Browsing by region is a useful way to understand
              where conservation attention is concentrated.
            </p>
          </section>

          {/* Global vs national */}
          <section className="prose-content max-w-3xl">
            <h2>Global Red List vs national Red Books</h2>
            <p>
              The IUCN Red List is a <strong>global</strong> assessment of
              extinction risk. Many countries also maintain their own national
              Red Books and protected-species laws, which can classify a species
              differently and carry the actual legal protections. A species can
              be globally threatened yet locally common in part of its range, or
              globally secure yet strictly protected in one country. FaunaHub
              shows the global category and points you to the relevant
              authorities for legal status.
            </p>
          </section>

          {/* Browse by region */}
          <section aria-labelledby="browse-heading">
            <h2
              id="browse-heading"
              className="text-2xl font-bold text-[#17211B] mb-5"
            >
              Browse by region
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {REGION_ORDER.map((region) => {
                const meta = RED_LIST_REGIONS[region];
                return (
                  <Link
                    key={region}
                    href={`${PATH}/${region}`}
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
                      {counts[region]} records
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Broad regional relevance */}
          <section aria-labelledby="broad-heading">
            <h2
              id="broad-heading"
              className="text-2xl font-bold text-[#17211B] mb-2"
            >
              Species with broad regional relevance
            </h2>
            <p className="text-sm text-[#5E6B63] mb-5 max-w-2xl">
              Wide-ranging and migratory species that occur across several
              regions.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {broad.map((r) => (
                <li key={r.slug} className="card p-5 flex flex-col gap-2">
                  <CategoryBadge code={r.redListCategory} size="sm" />
                  <span className="text-base font-semibold text-[#17211B] leading-snug">
                    {r.commonName}
                  </span>
                  <span className="text-xs italic text-[#5E6B63]">
                    {r.scientificName}
                  </span>
                  <span className="text-xs text-[#8A958E] mt-auto">
                    {regionsForSlug(r.slug)
                      .map((rg) => RED_LIST_REGIONS[rg].label)
                      .join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Data limitations */}
          <DataLimitations regional />

          {/* Sources & FAQ */}
          <div className="grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2">
              <FAQBlock items={FAQ} />
            </section>
            <aside className="space-y-6">
              <RelatedLinks
                title="Explore"
                links={[
                  { label: "Endangered animals hub", href: "/endangered-animals" },
                  {
                    label: "Browse by risk category",
                    href: "/endangered-animals/critically-endangered",
                  },
                  {
                    label: "Data methodology",
                    href: "/endangered-animals/red-list-data-methodology",
                  },
                  { label: "Wildlife & biodiversity", href: "/wildlife" },
                ]}
              />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
