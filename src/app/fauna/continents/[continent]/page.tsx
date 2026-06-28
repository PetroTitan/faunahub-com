import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import HabitatTag from "@/components/fauna/HabitatTag";
import AnimalDistributionList from "@/components/fauna/AnimalDistributionList";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  CONTINENT_ORDER,
  FAUNA_CONTINENTS,
  isFaunaContinent,
  getContinentMeta,
} from "@/lib/fauna/continents";
import { getContinentByTaxon, getByContinent } from "@/lib/fauna/helpers";
import { FROM_WATER_TO_LAND_UPDATED } from "@/lib/fauna/evolution";
import type {
  FaunaContinentRecord,
  FaunaContinentSlug,
  FaunaHabitatTag,
} from "@/lib/fauna/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return CONTINENT_ORDER.map((continent) => ({ continent }));
}

type RouteParams = { continent: string };

const OVERVIEW: Record<FaunaContinentSlug, string> = {
  africa:
    "Africa's land fauna is recognised worldwide — great cats, primates, and the large herbivores of the savanna, plus the unique animals of Madagascar. Habitats range from rainforest and savanna to desert.",
  asia:
    "Asia spans tropical rainforest, the Himalaya, steppe, and island chains. It supports tigers, the giant panda, elephants, and an enormous diversity of reptiles, amphibians, and birds.",
  europe:
    "Europe's temperate forests, mountains, and wetlands hold wolves, foxes, deer, and many waterbirds — fauna that has long shared the landscape with dense human settlement.",
  "north-america":
    "North America reaches from Arctic tundra to deserts and subtropical wetlands, with bears, wolves, raptors, and animals that crossed the Central American land bridge.",
  "south-america":
    "South America's Amazon, Andes, and grasslands are exceptionally rich, home to jaguars, sloths, toucans, hummingbirds, and a remarkable variety of amphibians.",
  oceania:
    "Oceania — especially Australia and New Guinea — is known for marsupials and the egg-laying monotremes, alongside distinctive birds and reptiles.",
  antarctica:
    "Antarctica is Earth's coldest, driest continent. It has no native land mammals or reptiles; its only true terrestrial animals are tiny invertebrates such as mites, springtails, and a wingless midge. The animals most people picture here — penguins and seals — are coastal species tied to the surrounding Southern Ocean.",
};

const TAXON_SECTIONS: {
  key: "mammals" | "birds" | "reptiles-amphibians" | "fish" | "invertebrates";
  // Fish uses a habitat-conditional heading computed per continent (see fishHeading).
  heading?: string;
}[] = [
  { key: "mammals", heading: "Representative mammals" },
  { key: "birds", heading: "Representative birds" },
  { key: "reptiles-amphibians", heading: "Representative reptiles & amphibians" },
  { key: "fish" },
  { key: "invertebrates", heading: "Notable invertebrates" },
];

/**
 * Habitat-conditional heading for the featured fish section. "Fish" is a broad
 * vernacular grouping (not a single scientific class); the qualifier reflects
 * where the continent's fish live, never asserting a taxonomic class or calling
 * any non-fish (whale, seal, krill, octopus, jellyfish) a fish.
 */
function fishHeading(
  records: readonly FaunaContinentRecord[],
  continent: FaunaContinentSlug,
): string {
  if (continent === "antarctica") return "Featured Southern Ocean fish";
  const habs = new Set<FaunaHabitatTag>(records.flatMap((r) => r.habitatTags));
  const freshwater = habs.has("freshwater") || habs.has("wetland");
  // Marine/reef fish carry the "coastal" habitat tag (there is no "marine"/"reef" tag).
  const marine = habs.has("coastal");
  if (freshwater && marine) return "Featured fish & aquatic life";
  if (marine) return "Featured marine & reef fish";
  if (freshwater) return "Featured freshwater fish";
  return "Featured fish";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { continent } = await params;
  if (!isFaunaContinent(continent)) return {};
  const meta = getContinentMeta(continent);
  const isAntarctica = continent === "antarctica";
  return buildMetadata({
    title: isAntarctica
      ? `Antarctic & Southern Ocean Wildlife — Fauna by Continent`
      : `Land Animals of ${meta.label} — Fauna by Continent`,
    description: isAntarctica
      ? `Representative Antarctic and Southern Ocean wildlife — penguins, seals, whales, seabirds, krill and fish. Antarctica has no native land vertebrates; its animals are marine and coastal. Cautious, source-backed notes; not a complete range map.`
      : `Representative land fauna of ${meta.label}: mammals, birds, reptiles, amphibians, and notable invertebrates, with cautious source-backed distribution notes. Not a complete range map.`,
    path: `/fauna/continents/${continent}`,
  });
}

export default async function ContinentPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { continent } = await params;
  if (!isFaunaContinent(continent)) notFound();

  const meta = getContinentMeta(continent);
  const path = `/fauna/continents/${continent}`;
  const groups = getContinentByTaxon(continent);
  const all = getByContinent(continent);

  // Habitats present across this continent's records.
  const habitats = Array.from(
    new Set(all.flatMap((r) => r.habitatTags)),
  ) as FaunaHabitatTag[];

  const FAQ = [
    {
      question: `Is this every animal in ${meta.label}?`,
      answer:
        "No. This is a curated, source-backed selection of representative animals that have a FaunaHub profile — not a complete inventory or range map.",
    },
    {
      question: `Are these animals all native to ${meta.label}?`,
      answer:
        "Most are shown where their native or regular range is source-backed, but widespread groups are marked “broad / widespread,” and introduced or domestic contexts are flagged. We avoid unsupported “native to” claims.",
    },
  ];

  const itemList = all
    .map((r, i) => ({
      name: r.commonName,
      url: `https://faunahub.com/animals/${r.animalSlug}`,
      position: i + 1,
    }));

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Fauna", url: "https://faunahub.com/fauna" },
      { name: "Continents", url: "https://faunahub.com/fauna/continents" },
      { name: meta.label, url: `https://faunahub.com${path}` },
    ]),
    ...(itemList.length > 0 ? [itemListSchema(itemList)] : []),
    faqSchema(FAQ),
  ];

  const isAntarctica = continent === "antarctica";

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
                { label: "Continents", href: "/fauna/continents" },
                { label: meta.label },
              ]}
            />
            <p className="text-xs uppercase tracking-wider text-[#7BAA35] font-semibold mb-3">
              <span aria-hidden="true">{meta.icon}</span>{" "}
              {isAntarctica ? "Antarctic & Southern Ocean wildlife" : "Land fauna"}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] leading-tight">
              {isAntarctica
                ? "Antarctic and Southern Ocean wildlife"
                : `Land animals of ${meta.label}`}
            </h1>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              {OVERVIEW[continent]}
            </p>
            <p className="mt-4 text-sm text-[#5E6B63]">
              {all.length} featured animal{all.length === 1 ? "" : "s"} ·
              representative selection, not a complete range map
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-12">
          {/* Major habitats */}
          {habitats.length > 0 && (
            <section aria-labelledby="habitats-heading">
              <h2
                id="habitats-heading"
                className="text-xl font-bold text-[#17211B] mb-3"
              >
                Major habitats
              </h2>
              <div className="flex flex-wrap gap-2">
                {habitats.map((t) => (
                  <HabitatTag key={t} tag={t} />
                ))}
              </div>
            </section>
          )}

          {isAntarctica && (
            <aside
              role="note"
              className="border border-[#DDE6DD] rounded-xl bg-[#EFF1EB] p-5 text-sm text-[#2C3A2F] leading-relaxed"
            >
              <p className="font-semibold text-[#17211B] mb-1">
                A note on Antarctic land fauna
              </p>
              <p>
                Antarctica has no native land vertebrates. Its genuine terrestrial
                animals are microscopic-to-tiny invertebrates, which FaunaHub does
                not yet profile. The animals below are the coastal and marine
                species most associated with Antarctica; broader Southern Ocean
                life will feature in the planned ocean-fauna layer.
              </p>
            </aside>
          )}

          {/* Taxon sections (the fish section is an additive ecological grouping) */}
          {TAXON_SECTIONS.map(({ key, heading }) => {
            const records = groups[key];
            // Only feature fish when at least two are recorded for the continent.
            if (key === "fish" ? records.length < 2 : records.length === 0)
              return null;
            const sectionHeading =
              key === "fish" ? fishHeading(records, continent) : heading;
            return (
              <section key={key} aria-labelledby={`${key}-heading`}>
                <h2
                  id={`${key}-heading`}
                  className={`text-2xl font-bold text-[#17211B] ${
                    key === "fish" ? "mb-2" : "mb-4"
                  }`}
                >
                  {sectionHeading}
                </h2>
                {key === "fish" && (
                  <p className="text-sm text-[#5E6B63] leading-relaxed mb-4 max-w-3xl">
                    A representative selection of fish recorded for {meta.label},
                    grouped by where they live rather than as a single scientific
                    class. Coverage is representative, not complete; each card links
                    to a profile with source-backed range notes.
                  </p>
                )}
                <AnimalDistributionList records={records} />
              </section>
            );
          })}

          {/* Source & range methodology */}
          <section
            aria-labelledby="methodology-heading"
            className="border border-[#DDE6DD] rounded-xl bg-[#F7F8F3] p-5 sm:p-6"
          >
            <h2
              id="methodology-heading"
              className="text-base font-semibold text-[#17211B] mb-2"
            >
              Source &amp; range methodology
            </h2>
            <ul className="space-y-2 text-sm text-[#2C3A2F] leading-relaxed list-none">
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-[#7BAA35]">•</span>
                <span>
                  Distribution notes are cautious educational summaries drawn from
                  the authoritative source linked on each animal — not complete
                  range maps.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-[#7BAA35]">•</span>
                <span>
                  A confidence label is shown on every record; introduced and
                  domestic contexts are flagged, and we avoid unsupported
                  “native to” claims.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-[#7BAA35]">•</span>
                <span>
                  Captive or zoo presence is never treated as wild range, and
                  continent membership is not a political claim about borders.
                </span>
              </li>
            </ul>
          </section>

          {/* FAQ + related */}
          <div className="grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2">
              <FAQBlock items={FAQ} />
            </section>
            <aside className="space-y-6">
              <RelatedLinks
                title="Other continents"
                links={CONTINENT_ORDER.filter((c) => c !== continent).map(
                  (c) => ({
                    label: FAUNA_CONTINENTS[c].label,
                    href: `/fauna/continents/${c}`,
                  }),
                )}
              />
              <RelatedLinks
                title="Explore more"
                links={[
                  { label: "All continents", href: "/fauna/continents" },
                  {
                    label: "From water to land",
                    href: "/fauna/evolution/from-water-to-land",
                  },
                  { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
                  { label: "Wildlife & Biodiversity", href: "/wildlife" },
                  { label: "Endangered Animals", href: "/endangered-animals" },
                ]}
              />
            </aside>
          </div>

          <LastUpdated date={FROM_WATER_TO_LAND_UPDATED} />
        </div>
      </main>
    </>
  );
}
