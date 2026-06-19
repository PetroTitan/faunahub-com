import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import SourcesSection from "@/components/educational/SourcesSection";
import AnimalHeroImage from "@/components/AnimalHeroImage";
import AnimalGallery from "@/components/AnimalGallery";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";

const HERO = getAnimalImage("camel");
const GALLERY = getAnimalGalleryImages("camel");

export const metadata: Metadata = buildArticleMetadata({
  title: "Camel — Profile, Desert Adaptations, Diet & Types",
  description:
    "Explore camels (genus Camelus): the one-humped dromedary and two-humped Bactrian camel, their remarkable desert adaptations, diet, and long relationship with people.",
  path: "/animals/camel",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("camel"),
});

const faqItems = [
  {
    question: "What is the difference between a dromedary and a Bactrian camel?",
    answer:
      "The dromedary (Camelus dromedarius) has a single hump and is associated with the deserts of the Middle East, North Africa, and South Asia. The Bactrian camel (Camelus bactrianus) has two humps and is found in Central Asia. A separate, critically endangered wild species, the wild Bactrian camel (Camelus ferus), survives in small numbers in remote parts of Asia.",
  },
  {
    question: "What is stored in a camel's hump?",
    answer:
      "A camel's hump stores fat, not water. The fat reserve can be drawn on when food is scarce, and metabolising it also releases some water. This is one of several adaptations — alongside efficient water use and tolerance of body-temperature fluctuation — that help camels cope with hot, arid environments.",
  },
  {
    question: "Are camels wild or domestic animals?",
    answer:
      "Dromedary and Bactrian camels are domesticated animals, kept for transport, milk, meat, fibre, and work, and this profile treats them as domestic. There are feral dromedary populations (for example in Australia) descended from introduced animals, while the only truly wild camel species is the separate, critically endangered wild Bactrian camel.",
  },
  {
    question: "What do camels eat?",
    answer:
      "Camels are herbivores adapted to sparse, tough desert vegetation. They browse and graze on grasses, shrubs, and other plants, including thorny and salty species that many other animals avoid. As ruminant-like foregut fermenters, they digest fibrous plant material efficiently.",
  },
];

export default function CamelPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Camel", url: "https://faunahub.com/animals/camel" },
    ]),
    articleSchema({
      title: "Camel — Profile, Desert Adaptations, Diet & Types",
      description:
        "Explore camels (genus Camelus): the one-humped dromedary and two-humped Bactrian camel, their remarkable desert adaptations, diet, and long relationship with people.",
      path: "/animals/camel",
      datePublished: "2026-06-19",
      dateModified: "2026-06-19",
    }),
    faqSchema(faqItems),
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
              { label: "Mammals", href: "/animal-encyclopedia/mammals" },
              { label: "Camel" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Camel <span className="italic font-normal text-[#5E6B63]">(genus Camelus)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Domesticated</span>{" "}
                <span className="tag ml-1">Desert-adapted</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                Camels (genus <em>Camelus</em>) are large, long-legged mammals famous for
                their humps and their ability to thrive in hot, dry environments. Two
                domesticated species dominate: the one-humped dromedary
                (<em>Camelus dromedarius</em>) and the two-humped Bactrian camel
                (<em>Camelus bactrianus</em>). The animal shown here is the dromedary.
              </p>
              <p>
                Camels have been working partners of people for thousands of years,
                providing transport, milk, meat, fibre, and labour across desert regions.
                This profile treats them primarily as domestic animals, which is how the
                great majority of camels exist today.
              </p>
              <p>
                <strong>Note on wild camels:</strong> the only truly wild camel species is
                the wild Bactrian camel (<em>Camelus ferus</em>), a separate species that
                survives in small numbers in remote parts of Asia and is considered
                critically endangered. Domestic dromedaries and Bactrians are not assessed
                in the same way; verify any conservation claim at iucnredlist.org.
              </p>

              <h2>Dromedary vs Bactrian</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    The living camels of the genus Camelus
                  </caption>
                  <tbody>
                    {[
                      ["Dromedary", "Camelus dromedarius — one hump; Middle East, North Africa, South Asia (domestic)"],
                      ["Bactrian camel", "Camelus bactrianus — two humps; Central Asia (domestic)"],
                      ["Wild Bactrian camel", "Camelus ferus — two humps; separate wild species, critically endangered"],
                    ].map(([name, note], i) => (
                      <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-[#F7F8F3]"}>
                        <td className="font-medium text-[#17211B] w-1/3">{name}</td>
                        <td className="italic">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification — dromedary as a reference species
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Artiodactyla"],
                      ["Family", "Camelidae"],
                      ["Genus", "Camelus"],
                      ["Species", "C. dromedarius"],
                    ].map(([rank, taxon], i) => (
                      <tr key={rank} className={i % 2 === 0 ? "bg-white" : "bg-[#F7F8F3]"}>
                        <td className="font-medium text-[#17211B] w-1/3">{rank}</td>
                        <td className="italic">{taxon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Camels belong to the family Camelidae, which also includes the South
                American llamas, alpacas, guanacos, and vicuñas — their close relatives in
                a different part of the world.
              </p>

              <h2>Desert Adaptations</h2>
              <p>
                Camels are renowned for coping with heat and scarcity. The hump stores fat
                that can be metabolised for energy; camels can tolerate considerable water
                loss and then rehydrate rapidly when water is available; and features such
                as thick eyelashes, closable nostrils, and tough mouths help them deal with
                blowing sand and coarse, thorny plants. Their broad, padded feet spread
                weight on soft ground.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Camels are herbivores that browse and graze on a wide range of desert
                plants, including dry grasses and thorny shrubs. Their digestive system is
                well suited to extracting nutrients from low-quality, fibrous forage, which
                lets them survive where richer feed is unavailable.
              </p>

              <h2>Behavior &amp; Use by People</h2>
              <p>
                Domestic camels are typically kept in herds and are known for endurance
                under load over long distances. They are used for riding, pack transport,
                and as a source of milk and other products in many arid regions. Camels
                communicate with a range of vocalisations and body postures and can be
                strong-willed working animals.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                The dromedary is recognised by its single hump, long curved neck, and long
                legs, with a coat ranging from sandy to brown. The Bactrian camel is
                stockier with two humps and, in cold seasons, a much thicker coat. The
                number of humps is the quickest way to tell the two domestic species apart.
              </p>

              <h2>Human Interaction</h2>
              <p>
                Camels remain economically and culturally important across desert societies.
                Because most camels are domestic livestock rather than wild animals, their
                management relates to animal husbandry and agriculture, while conservation
                concern centres on the separate wild Bactrian camel.
              </p>

              <AnimalGallery images={GALLERY} commonName="Camel" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Camel" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.camel}
                  intro="Authoritative references used for general educational context. Conservation claims about the separate wild Bactrian camel should be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Camel profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Genus", "Camelus"],
                    ["Reference species", "Camelus dromedarius"],
                    ["Family", "Camelidae"],
                    ["Class", "Mammalia"],
                    ["Domestic species", "Dromedary, Bactrian"],
                    ["Diet", "Herbivore (browser/grazer)"],
                    ["Hump stores", "Fat (not water)"],
                    ["Status", "Mainly domesticated"],
                    ["Typical habitat", "Deserts and arid regions"],
                    ["Relatives", "Llamas, alpacas (Camelidae)"],
                  ].map(([label, value]) => (
                    <div key={label} className="px-5 py-3 flex flex-col gap-0.5">
                      <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                        {label}
                      </dt>
                      <dd className="text-[#17211B] font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <RelatedLinks
                title="Related Pages"
                links={[
                  { label: "Horse Profile", href: "/animals/horse", description: "Domesticated working and riding animal" },
                  { label: "Cow (Cattle) Profile", href: "/animals/cow", description: "Domesticated farm ruminant" },
                  { label: "Goat Profile", href: "/animals/goat", description: "Agile domesticated browser" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "Desert and arid-land fauna in context" },
                  { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
                ]}
              />
              <aside
                role="note"
                aria-label="Sources reference"
                className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
              >
                <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
                <p>
                  Verified references are listed at the bottom of this page
                  under &quot;Sources and further reading&quot;.
                </p>
              </aside>
              <LastUpdated date="2026-06-19" />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
