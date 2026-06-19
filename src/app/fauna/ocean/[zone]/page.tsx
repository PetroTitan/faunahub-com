import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import OceanAnimalList from "@/components/fauna/OceanAnimalList";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  OCEAN_ZONE_ORDER,
  OCEAN_ZONES,
  isOceanZone,
  getOceanZoneMeta,
  getOceanByZone,
  OCEAN_SOURCES,
  OCEAN_UPDATED,
} from "@/lib/fauna/ocean";

export const dynamicParams = false;

export function generateStaticParams() {
  return OCEAN_ZONE_ORDER.map((zone) => ({ zone }));
}

type RouteParams = { zone: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { zone } = await params;
  if (!isOceanZone(zone)) return {};
  const meta = getOceanZoneMeta(zone);
  return buildMetadata({
    title: `${meta.label} (${meta.scientificName}) — Ocean Depth ${meta.depthRange}`,
    description: `The ocean's ${meta.label.toLowerCase()} (${meta.depthRange}): conditions, the life documented there, and the marine animals FaunaHub profiles in this layer. Source-backed ocean-science overview.`,
    path: `/fauna/ocean/${zone}`,
  });
}

export default async function OceanZonePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { zone } = await params;
  if (!isOceanZone(zone)) notFound();

  const meta = getOceanZoneMeta(zone);
  const path = `/fauna/ocean/${zone}`;
  const records = getOceanByZone(zone);

  const FAQ = [
    {
      question: `How deep is the ${meta.label.toLowerCase()}?`,
      answer: `The ${meta.label.toLowerCase()} (${meta.scientificName.toLowerCase()}) spans roughly ${meta.depthRange}.`,
    },
    {
      question:
        records.length > 0
          ? `Do these animals live only in the ${meta.label.toLowerCase()}?`
          : `Why are there no animal profiles for the ${meta.label.toLowerCase()}?`,
      answer:
        records.length > 0
          ? "Not necessarily. Many marine animals move between depth zones, some migrating vertically each day. We show the zone(s) each animal is documented to occur in, with a confidence label."
          : "FaunaHub does not yet publish profiles for this zone's specialised deep-sea animals. The descriptions here summarise known life from authoritative ocean-science sources rather than inventing claims.",
    },
  ];

  const itemList = records.map((r, i) => ({
    name: r.commonName,
    url: `https://faunahub.com/animals/${r.animalSlug}`,
    position: i + 1,
  }));

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Fauna", url: "https://faunahub.com/fauna" },
      { name: "Ocean", url: "https://faunahub.com/fauna/ocean" },
      { name: meta.label, url: `https://faunahub.com${path}` },
    ]),
    ...(itemList.length > 0 ? [itemListSchema(itemList)] : []),
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
                { label: "Fauna", href: "/fauna" },
                { label: "Ocean", href: "/fauna/ocean" },
                { label: meta.label },
              ]}
            />
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-wider text-[#075FA8] font-semibold">
                <span aria-hidden="true">{meta.icon}</span> Depth zone
              </span>
              <span className="text-[11px] font-medium text-[#5E6B63] bg-[#EFF1EB] border border-[#DDE6DD] rounded-full px-2 py-0.5">
                {meta.depthRange}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] leading-tight">
              {meta.label}
            </h1>
            <p className="mt-1 text-lg italic text-[#5E6B63]">
              {meta.scientificName}
            </p>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              {meta.blurb}
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-12">
          {/* Conditions */}
          <section aria-labelledby="conditions-heading">
            <h2
              id="conditions-heading"
              className="text-2xl font-bold text-[#17211B] mb-4"
            >
              Conditions in this zone
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {meta.conditions.map((c) => (
                <li
                  key={c}
                  className="card p-4 text-sm text-[#2C3A2F] flex gap-2 leading-snug"
                >
                  <span aria-hidden="true" className="text-[#075FA8]">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Known life */}
          <section aria-labelledby="life-heading" className="prose-content max-w-3xl">
            <h2 id="life-heading">Life of the {meta.label.toLowerCase()}</h2>
            {meta.knownLife.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {/* FaunaHub profiles in this zone */}
          <section aria-labelledby="profiles-heading">
            <h2
              id="profiles-heading"
              className="text-2xl font-bold text-[#17211B] mb-2"
            >
              Animal profiles in this zone
            </h2>
            <p className="text-sm text-[#5E6B63] mb-5 max-w-2xl">
              {records.length > 0
                ? "Marine animals FaunaHub profiles that are documented in this zone. Many also occur in other layers."
                : "FaunaHub does not yet have animal profiles for this deep zone."}
            </p>
            <OceanAnimalList records={records} />
          </section>

          {/* Source & methodology */}
          <section
            aria-labelledby="methodology-heading"
            className="border border-[#DDE6DD] rounded-xl bg-[#F7F8F3] p-5 sm:p-6"
          >
            <h2
              id="methodology-heading"
              className="text-base font-semibold text-[#17211B] mb-2"
            >
              Source &amp; methodology
            </h2>
            <p className="text-sm text-[#2C3A2F] leading-relaxed mb-3">
              Zone science here is summarised from authoritative ocean-science
              sources. Animal placements reuse each species&apos; verified source
              and show a confidence label; a depth zone is not treated as a
              complete range, since many animals move between layers.
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
              {OCEAN_SOURCES.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-2 text-[#063F2A] hover:text-[#0F5A3A]"
                  >
                    {s.label.replace(/ —.*$/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ + related */}
          <div className="grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2">
              <FAQBlock items={FAQ} />
            </section>
            <aside className="space-y-6">
              <RelatedLinks
                title="Other depth zones"
                links={OCEAN_ZONE_ORDER.filter((z) => z !== zone).map((z) => ({
                  label: `${OCEAN_ZONES[z].label} (${OCEAN_ZONES[z].depthRange})`,
                  href: `/fauna/ocean/${z}`,
                }))}
              />
              <RelatedLinks
                title="Explore more"
                links={[
                  { label: "Ocean fauna hub", href: "/fauna/ocean" },
                  { label: "Land fauna by continent", href: "/fauna/continents" },
                  {
                    label: "From water to land",
                    href: "/fauna/evolution/from-water-to-land",
                  },
                  { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
                ]}
              />
            </aside>
          </div>

          <LastUpdated date={OCEAN_UPDATED} />
        </div>
      </main>
    </>
  );
}
