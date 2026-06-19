import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import ContinentCard from "@/components/fauna/ContinentCard";
import HabitatTag from "@/components/fauna/HabitatTag";
import AnimalDistributionList from "@/components/fauna/AnimalDistributionList";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { CONTINENT_ORDER, FAUNA_CONTINENTS } from "@/lib/fauna/continents";
import { continentCounts, getFeaturedFauna } from "@/lib/fauna/helpers";
import type { FaunaHabitatTag } from "@/lib/fauna/types";

const PATH = "/fauna/continents";

export const metadata: Metadata = buildMetadata({
  title: "Land Fauna by Continent — Animals of Africa, Asia, the Americas & More",
  description:
    "Browse land animals by continent: Africa, Asia, Europe, North and South America, Oceania, and Antarctica. Cautious, source-backed distribution notes — not complete range maps.",
  path: PATH,
});

const HABITAT_PATTERNS: { tag: FaunaHabitatTag; note: string }[] = [
  { tag: "savanna", note: "Open tropical grassland — iconic in Africa." },
  { tag: "forest", note: "From the Amazon to Borneo and boreal Eurasia." },
  { tag: "desert", note: "Arid specialists across several continents." },
  { tag: "mountain", note: "Highland and alpine species worldwide." },
  { tag: "wetland", note: "Rivers, marshes, and floodplains." },
  { tag: "polar", note: "Cold-adapted coastal and sea-ice species." },
];

const FAQ = [
  {
    question: "Why is animal distribution complex?",
    answer:
      "A species' range can differ between where it is native, where it has been introduced, where it migrates, and where it only occurs in captivity. Ranges also change over time. FaunaHub uses cautious, source-backed summaries and never treats a continent card as a complete range map.",
  },
  {
    question: "Does “found in” mean the animal is native there?",
    answer:
      "Not always. We use “native” only where it is source-backed, and prefer wording like “found in,” “associated with,” or “representative of” when exact native range is complex. Introduced and domestic contexts are flagged separately.",
  },
  {
    question: "Why are some animals listed on several continents?",
    answer:
      "Widespread groups — like bats, owls, snakes, or many insects — genuinely occur across multiple continents. These are marked “broad / widespread” rather than tied to a single native range.",
  },
];

export default function ContinentsHubPage() {
  const counts = continentCounts();
  const featured = getFeaturedFauna(6);

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Fauna", url: "https://faunahub.com/fauna" },
      { name: "Continents", url: `https://faunahub.com${PATH}` },
    ]),
    itemListSchema(
      CONTINENT_ORDER.map((c, i) => ({
        name: FAUNA_CONTINENTS[c].label,
        url: `https://faunahub.com/fauna/continents/${c}`,
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
                { label: "Fauna", href: "/fauna" },
                { label: "Continents" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] max-w-3xl leading-tight">
              Land fauna by continent
            </h1>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              Explore representative land animals of each continent, linked to
              their full FaunaHub profiles, with cautious source-backed
              distribution notes.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          {/* 1. Land Fauna by Continent (intro) */}
          <section className="prose-content max-w-3xl">
            <h2>Land fauna by continent</h2>
            <p>
              Continents shape animal life. Geography, climate, and long isolation
              have produced distinctive faunas — marsupials in Australia, lemurs
              on Madagascar, hummingbirds in the Americas. The cards below lead to
              a representative selection for each continent.
            </p>
          </section>

          {/* 2. Why Animal Distribution Is Complex */}
          <section aria-labelledby="complex-heading">
            <div className="border border-[#DDE6DD] rounded-xl bg-[#EFF1EB] p-5 sm:p-6">
              <h2
                id="complex-heading"
                className="text-base font-semibold text-[#17211B] mb-2"
              >
                Why animal distribution is complex
              </h2>
              <p className="text-sm text-[#2C3A2F] leading-relaxed">
                Animal distribution changes over time and can differ between
                native range, introduced range, migratory range, domestic
                presence, and captive presence. FaunaHub uses cautious,
                source-backed summaries and does not treat continent cards as
                complete range maps. Each animal carries a confidence label, and
                introduced or domestic contexts are flagged.
              </p>
            </div>
          </section>

          {/* 3. Browse Continents */}
          <section aria-labelledby="browse-heading">
            <h2
              id="browse-heading"
              className="text-2xl font-bold text-[#17211B] mb-5"
            >
              Browse continents
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CONTINENT_ORDER.map((c) => (
                <ContinentCard key={c} slug={c} count={counts[c]} />
              ))}
            </div>
          </section>

          {/* 4. Habitat Patterns Across Continents */}
          <section aria-labelledby="patterns-heading">
            <h2
              id="patterns-heading"
              className="text-2xl font-bold text-[#17211B] mb-4"
            >
              Habitat patterns across continents
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {HABITAT_PATTERNS.map((h) => (
                <div key={h.tag} className="card p-4 flex flex-col gap-2">
                  <HabitatTag tag={h.tag} />
                  <p className="text-sm text-[#5E6B63] leading-snug">{h.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Representative Animals */}
          <section aria-labelledby="rep-heading">
            <h2
              id="rep-heading"
              className="text-2xl font-bold text-[#17211B] mb-5"
            >
              Representative animals
            </h2>
            <AnimalDistributionList records={featured} />
          </section>

          {/* 6. Conservation and Range Notes */}
          <section aria-labelledby="range-heading" className="prose-content max-w-3xl">
            <h2 id="range-heading">Conservation and range notes</h2>
            <p>
              Ranges shown here are educational summaries, not legal or scientific
              range maps. Distribution shifts as habitats change, and conservation
              status is a dated snapshot rather than a permanent label. For status,
              see our <Link href="/endangered-animals">endangered animals</Link>{" "}
              pages and verify with official authorities.
            </p>
          </section>

          {/* 7. Sources and FAQ */}
          <div className="grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2">
              <FAQBlock items={FAQ} />
            </section>
            <aside className="space-y-6">
              <RelatedLinks
                title="Explore more"
                links={[
                  { label: "Fauna hub", href: "/fauna" },
                  { label: "Ocean fauna by depth", href: "/fauna/ocean" },
                  {
                    label: "From water to land",
                    href: "/fauna/evolution/from-water-to-land",
                  },
                  { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
                  { label: "Wildlife & Biodiversity", href: "/wildlife" },
                ]}
              />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
