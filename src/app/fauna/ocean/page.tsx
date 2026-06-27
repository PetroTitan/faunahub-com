import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import ZoneCard from "@/components/fauna/ZoneCard";
import OceanAnimalList from "@/components/fauna/OceanAnimalList";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  OCEAN_ZONE_ORDER,
  OCEAN_ZONES,
  oceanZoneCounts,
  getOceanByZone,
  OCEAN_SOURCES,
} from "@/lib/fauna/ocean";

const PATH = "/fauna/ocean";

export const metadata: Metadata = buildMetadata({
  title: "Ocean Fauna by Depth Zone — From the Sunlit Surface to the Deep Trenches",
  description:
    "Explore ocean animals by depth zone: the sunlight, twilight, midnight, abyssal, and hadal zones. Source-backed zone science with the marine animals documented in each layer.",
  path: PATH,
});

const FAQ = [
  {
    question: "What are the ocean's depth zones?",
    answer:
      "Oceanographers divide the open ocean by depth into the sunlight (epipelagic, 0–200 m), twilight (mesopelagic, 200–1,000 m), midnight (bathypelagic, 1,000–4,000 m), abyssal (4,000–6,000 m), and hadal (6,000 m to the deepest trenches) zones, based mainly on how much light reaches each layer.",
  },
  {
    question: "Why do most featured animals appear in the sunlight zone?",
    answer:
      "The sunlit surface holds most of the ocean's life and the majority of the animals FaunaHub profiles. The deeper zones are home to specialised deep-sea animals — FaunaHub now profiles a growing set of them, from anglerfish and vampire squid to giant tube worms and glass sponges, each placed cautiously in the zone(s) it is documented to occur in.",
  },
  {
    question: "Does a depth zone equal an animal's exact range?",
    answer:
      "No. Many animals move between zones — some migrate vertically every day. We show the zone(s) each animal is documented to occur in, with a confidence label, and never treat a zone as a complete range.",
  },
];

export default function OceanHubPage() {
  const counts = oceanZoneCounts();
  const featured = getOceanByZone("sunlight-zone").slice(0, 8);

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Fauna", url: "https://faunahub.com/fauna" },
      { name: "Ocean", url: `https://faunahub.com${PATH}` },
    ]),
    itemListSchema(
      OCEAN_ZONE_ORDER.map((z, i) => ({
        name: `${OCEAN_ZONES[z].label} (${OCEAN_ZONES[z].depthRange})`,
        url: `https://faunahub.com/fauna/ocean/${z}`,
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
              items={[{ label: "Fauna", href: "/fauna" }, { label: "Ocean" }]}
            />
            <p className="text-xs uppercase tracking-wider text-[#075FA8] font-semibold mb-3">
              Ocean fauna by depth
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] max-w-3xl leading-tight">
              Ocean fauna by depth zone
            </h1>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              The ocean is layered by depth, light, and pressure. Explore each
              zone — from the sunlit surface to the deepest trenches — with
              source-backed zone science and the marine animals documented in
              each layer.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          {/* What depth zonation means */}
          <section className="prose-content max-w-3xl">
            <h2>How the ocean is layered</h2>
            <p>
              Most of the ocean&apos;s open water is divided into depth zones,
              defined mainly by how much sunlight reaches each layer. Light fades
              quickly with depth: photosynthesis is possible only near the
              surface, and below a few hundred metres the ocean is in permanent
              darkness, cold, and under increasing pressure.
            </p>
            <p>
              These pages are educational. Animals are shown in the zone(s) they
              are documented to occur in — many move between layers — and the
              deep zones, from the midnight zone to the hadal trenches, are
              described from authoritative ocean-science sources alongside the
              deep-sea animals FaunaHub now profiles.
            </p>
          </section>

          {/* Browse zones */}
          <section aria-labelledby="zones-heading">
            <h2
              id="zones-heading"
              className="text-2xl font-bold text-[#17211B] mb-5"
            >
              Browse the depth zones
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {OCEAN_ZONE_ORDER.map((z) => (
                <ZoneCard key={z} slug={z} count={counts[z]} />
              ))}
            </div>
          </section>

          {/* Why depth matters */}
          <section className="prose-content max-w-3xl">
            <h2>Why depth shapes ocean life</h2>
            <p>
              Depth controls the basics of life in the sea. Light determines
              where plant-like life can grow; temperature and pressure shape what
              bodies can endure; and food becomes scarcer with depth, much of it
              drifting down from the productive surface as &ldquo;marine
              snow.&rdquo; These gradients explain why a sunlit reef and a deep
              trench hold such different animals.
            </p>
          </section>

          {/* Representative surface animals */}
          <section aria-labelledby="featured-heading">
            <h2
              id="featured-heading"
              className="text-2xl font-bold text-[#17211B] mb-2"
            >
              Animals of the sunlit ocean
            </h2>
            <p className="text-sm text-[#5E6B63] mb-5 max-w-2xl">
              A selection of marine animals FaunaHub profiles that are documented
              in the sunlight zone.
            </p>
            <OceanAnimalList records={featured} />
          </section>

          {/* Sources & FAQ */}
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section aria-labelledby="sources-heading">
                <h2
                  id="sources-heading"
                  className="text-2xl font-bold text-[#17211B] mb-3"
                >
                  Sources
                </h2>
                <ul className="space-y-2 list-none">
                  {OCEAN_SOURCES.map((s) => (
                    <li key={s.url} className="text-sm text-[#2C3A2F]">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A]"
                      >
                        {s.label}
                      </a>
                      {s.note && <span className="text-[#8A958E]"> — {s.note}</span>}
                    </li>
                  ))}
                </ul>
              </section>
              <FAQBlock items={FAQ} />
            </div>
            <aside className="space-y-6">
              <RelatedLinks
                title="Explore more"
                links={[
                  { label: "Fauna hub", href: "/fauna" },
                  { label: "Land fauna by continent", href: "/fauna/continents" },
                  {
                    label: "From water to land",
                    href: "/fauna/evolution/from-water-to-land",
                  },
                  { label: "Animal Taxonomy & Coverage", href: "/animal-taxonomy" },
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
