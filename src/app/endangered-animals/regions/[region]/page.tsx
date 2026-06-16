import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import SpeciesBrowser from "@/components/red-list/SpeciesBrowser";
import DataLimitations from "@/components/red-list/DataLimitations";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  RED_LIST_REGIONS,
  REGION_ORDER,
  type RedListRegion,
} from "@/lib/red-list/regions";
import { getByRegion, recordInternalHref } from "@/lib/red-list/helpers";
import { RED_LIST_LAST_REVIEW } from "@/lib/red-list/methodology";

export const dynamicParams = false;

export function generateStaticParams() {
  return REGION_ORDER.map((region) => ({ region }));
}

type RouteParams = { region: string };

function isRegion(value: string): value is RedListRegion {
  return (REGION_ORDER as string[]).includes(value);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { region } = await params;
  if (!isRegion(region)) return {};
  const meta = RED_LIST_REGIONS[region];
  return buildMetadata({
    title: `Endangered Animals of ${meta.label} — Global Red List Status`,
    description: `Threatened species of ${meta.label} with their global IUCN Red List category and verified sources. Educational overview — national legal status differs and should be checked separately.`,
    path: `/endangered-animals/regions/${region}`,
  });
}

export default async function RegionPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { region } = await params;
  if (!isRegion(region)) notFound();

  const meta = RED_LIST_REGIONS[region];
  const records = getByRegion(region);
  const path = `/endangered-animals/regions/${region}`;

  const FAQ = [
    {
      question: `Does this list show legally protected species in ${meta.label}?`,
      answer:
        "No. It shows each species' global IUCN Red List category, not national legal status. Legal protection depends on the relevant country's own laws and national Red Books, which are separate and vary widely. Always check the appropriate national authority.",
    },
    {
      question: `How were these species chosen for ${meta.label}?`,
      answer:
        "A species appears here when its native range or regular occurrence falls in this region, as documented in the authoritative sources linked on each record. FaunaHub does not invent regional presence.",
    },
    {
      question: "Is this a complete list of threatened species in the region?",
      answer:
        "No. It is a curated educational selection from FaunaHub's Red List dataset, not a complete regional inventory. The official IUCN Red List and national authorities hold the complete data.",
    },
  ];

  const itemListResolved = records.map((r, i) => {
    const internal = recordInternalHref(r);
    return {
      name: `${r.commonName} (${r.scientificName})`,
      url: internal ? `https://faunahub.com${internal}` : r.iucnUrl ?? "",
      position: i + 1,
    };
  });

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      {
        name: "Endangered Animals",
        url: "https://faunahub.com/endangered-animals",
      },
      { name: "Regions", url: "https://faunahub.com/endangered-animals/regions" },
      { name: meta.label, url: `https://faunahub.com${path}` },
    ]),
    ...(itemListResolved.length > 0 ? [itemListSchema(itemListResolved)] : []),
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
                { label: "Regions", href: "/endangered-animals/regions" },
                { label: meta.label },
              ]}
            />
            <p className="text-xs uppercase tracking-wider text-[#7BAA35] font-semibold mb-3">
              <span aria-hidden="true">{meta.icon}</span> Region
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] max-w-3xl leading-tight">
              Endangered animals of {meta.label}
            </h1>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              {meta.description} Each record shows the species&apos;{" "}
              <strong>global IUCN Red List category</strong> and links to
              authoritative sources. National legal status is separate — see the
              note below.
            </p>
            <p className="mt-4 text-sm text-[#5E6B63]">
              {records.length} record{records.length === 1 ? "" : "s"} ·
              last reviewed{" "}
              <time dateTime={RED_LIST_LAST_REVIEW}>{RED_LIST_LAST_REVIEW}</time>
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-10">
          <DataLimitations regional />

          <section aria-labelledby="records-heading">
            <h2 id="records-heading" className="sr-only">
              Threatened species of {meta.label}
            </h2>
            <SpeciesBrowser
              records={records}
              facets={{ group: true, category: true, status: true }}
            />
          </section>

          <div className="grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2">
              <FAQBlock items={FAQ} />
            </section>
            <aside className="space-y-6">
              <RelatedLinks
                title="Other regions"
                links={REGION_ORDER.filter((r) => r !== region).map((r) => ({
                  label: RED_LIST_REGIONS[r].label,
                  href: `/endangered-animals/regions/${r}`,
                }))}
              />
              <RelatedLinks
                title="Understand the data"
                links={[
                  { label: "All regions", href: "/endangered-animals/regions" },
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
            </aside>
          </div>

          <LastUpdated date={RED_LIST_LAST_REVIEW} />
        </div>
      </main>
    </>
  );
}
