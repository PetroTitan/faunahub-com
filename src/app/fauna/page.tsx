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
import { FAUNA_HABITATS } from "@/lib/fauna/habitats";
import {
  continentCounts,
  getFeaturedFauna,
  FAUNA_RECORDS,
} from "@/lib/fauna/helpers";
import type { FaunaHabitatTag } from "@/lib/fauna/types";

export const metadata: Metadata = buildMetadata({
  title: "Fauna — Animal Life by Continent, Habitat & Evolution",
  description:
    "Explore the world's land animals by continent and habitat, and the evolutionary story connecting land fauna to aquatic ancestors. A source-transparent geography of animal life.",
  path: "/fauna",
});

const HABITAT_ORDER: FaunaHabitatTag[] = [
  "forest", "grassland", "savanna", "desert", "mountain", "tundra",
  "wetland", "freshwater", "coastal", "island", "polar", "urban-adapted",
];

const FAQ = [
  {
    question: "What does “fauna” mean?",
    answer:
      "Fauna is the animal life of a particular region or period. FaunaHub's fauna layer organises animals by geography — continents and habitats — and by evolutionary context, linking to our existing animal profiles.",
  },
  {
    question: "Are the continent pages complete range maps?",
    answer:
      "No. They are cautious, source-backed selections of representative animals, not complete range maps. A species' distribution can differ between native, introduced, migratory, and captive ranges, so we describe ranges carefully and show a confidence label.",
  },
  {
    question: "Did land animals come from the sea?",
    answer:
      "Land animals descend, over deep geological time, from aquatic ancestors. Our water-to-land evolution page summarises the accepted scientific framing without overstating the unsettled detail of life's origin.",
  },
  {
    question: "Will ocean animals be added?",
    answer:
      "Yes. An ocean-fauna layer organised by depth zones is planned as the next step. We are not publishing thin ocean pages before that full, source-backed cluster is ready.",
  },
];

export default function FaunaHubPage() {
  const counts = continentCounts();
  const featured = getFeaturedFauna(8);

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Fauna", url: "https://faunahub.com/fauna" },
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
          <div className="container-content pt-4 pb-12">
            <Breadcrumbs items={[{ label: "Fauna" }]} />
            <p className="text-xs uppercase tracking-wider text-[#7BAA35] font-semibold mb-3">
              Animal Geography &amp; Evolution
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17211B] max-w-3xl leading-tight">
              Fauna: animal life by continent, habitat &amp; evolution
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#2C3A2F] max-w-2xl leading-relaxed">
              A source-transparent guide to the world&apos;s land animals — where
              they are found, the habitats they live in, and the deep
              evolutionary story that connects land fauna to aquatic ancestors.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link href="/fauna/continents" className="btn-primary text-sm">
                Browse by continent
              </Link>
              <Link href="/fauna/ocean" className="btn-secondary text-sm">
                Ocean by depth
              </Link>
              <Link
                href="/fauna/evolution/from-water-to-land"
                className="btn-secondary text-sm"
              >
                From water to land
              </Link>
            </div>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          {/* 1. What Fauna Means */}
          <section className="prose-content max-w-3xl">
            <h2>What fauna means</h2>
            <p>
              <strong>Fauna</strong> is the animal life of a place or time. This
              layer of FaunaHub organises our existing animal profiles by
              geography and evolution: which continents and habitats an animal is
              associated with, and how today&apos;s land animals connect to life
              that began in water.
            </p>
            <p>
              These pages are educational and source-backed. They are not range
              maps and do not claim to be complete — animal distribution is
              genuinely complex, and we describe it cautiously.
            </p>
          </section>

          {/* 2. Explore Land Fauna by Continent */}
          <section aria-labelledby="continents-heading">
            <div className="flex items-end justify-between gap-3 flex-wrap mb-5">
              <div>
                <h2 id="continents-heading" className="section-title">
                  Explore land fauna by continent
                </h2>
                <p className="section-subtitle mb-0">
                  Representative animals from each continent, linked to their full
                  FaunaHub profiles.
                </p>
              </div>
              <Link
                href="/fauna/continents"
                className="btn-secondary text-sm shrink-0"
              >
                All continents →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CONTINENT_ORDER.map((c) => (
                <ContinentCard key={c} slug={c} count={counts[c]} />
              ))}
            </div>
          </section>

          {/* 3. Explore Animals by Habitat */}
          <section aria-labelledby="habitat-heading">
            <h2
              id="habitat-heading"
              className="text-2xl font-bold text-[#17211B] mb-2"
            >
              Explore animals by habitat
            </h2>
            <p className="text-sm text-[#5E6B63] mb-4 max-w-2xl">
              Habitat tags describe the broad environments an animal is
              associated with — a quick way to see ecological patterns across
              continents.
            </p>
            <div className="flex flex-wrap gap-2">
              {HABITAT_ORDER.map((t) => (
                <span key={t}>
                  <HabitatTag tag={t} />
                </span>
              ))}
            </div>
            <p className="text-xs text-[#8A958E] mt-3">
              {FAUNA_RECORDS.length} animal profiles are mapped across{" "}
              {Object.keys(FAUNA_HABITATS).length} habitat types.
            </p>
          </section>

          {/* 4. From Water to Land */}
          <section aria-labelledby="evo-heading">
            <div className="card p-6 sm:p-8 border-l-4 border-l-[#7BAA35]">
              <h2
                id="evo-heading"
                className="text-2xl font-bold text-[#17211B] mb-2"
              >
                From water to land — evolutionary context
              </h2>
              <p className="text-base text-[#2C3A2F] leading-relaxed max-w-3xl mb-4">
                Land animals are part of a much older story that began in water.
                The scientific consensus is that life originated in aquatic
                environments and that today&apos;s land animals descend, over deep
                geological time, from aquatic ancestors. We summarise this
                carefully — without overstating the unsettled detail of life&apos;s
                origin.
              </p>
              <Link
                href="/fauna/evolution/from-water-to-land"
                className="btn-primary text-sm"
              >
                Read the water-to-land story →
              </Link>
            </div>
          </section>

          {/* 5. Featured Wildlife Profiles */}
          <section aria-labelledby="featured-heading">
            <h2
              id="featured-heading"
              className="text-2xl font-bold text-[#17211B] mb-5"
            >
              Featured wildlife profiles
            </h2>
            <AnimalDistributionList records={featured} />
          </section>

          {/* 6. Conservation Context */}
          <section aria-labelledby="conservation-heading" className="prose-content max-w-3xl">
            <h2 id="conservation-heading">Conservation context</h2>
            <p>
              Where an animal lives is closely tied to how it is faring. Habitat
              loss, climate change, and human pressure all reshape animal
              distribution over time. For conservation status — which is a dated
              snapshot, never permanent — see our{" "}
              <Link href="/endangered-animals">endangered animals</Link> pages,
              and always verify current status with official authorities.
            </p>
          </section>

          {/* 7. Ocean Depths Layer */}
          <section aria-labelledby="ocean-heading">
            <div className="card p-6 sm:p-8 border-l-4 border-l-[#075FA8]">
              <span className="text-xs uppercase tracking-wider text-[#075FA8] font-semibold">
                Now live
              </span>
              <h2
                id="ocean-heading"
                className="text-2xl font-bold text-[#17211B] mt-1 mb-2"
              >
                Ocean fauna by depth zones
              </h2>
              <p className="text-base text-[#2C3A2F] leading-relaxed max-w-3xl mb-4">
                The ocean is layered by depth, light, and pressure. Explore marine
                animals from the sunlit surface to the deep trenches across five
                depth zones — source-backed zone science, with the animals
                documented in each layer.
              </p>
              <Link href="/fauna/ocean" className="btn-primary text-sm">
                Explore ocean depth zones →
              </Link>
            </div>
          </section>

          {/* 8. Sources and FAQ */}
          <div className="grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2">
              <FAQBlock items={FAQ} />
            </section>
            <aside className="space-y-6">
              <RelatedLinks
                title="Explore more"
                links={[
                  { label: "Ocean fauna by depth", href: "/fauna/ocean" },
                  { label: "Animal Taxonomy & Coverage", href: "/animal-taxonomy" },
                  { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
                  { label: "Wildlife & Biodiversity", href: "/wildlife" },
                  { label: "Endangered Animals", href: "/endangered-animals" },
                  {
                    label: "From water to land",
                    href: "/fauna/evolution/from-water-to-land",
                  },
                ]}
              />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
