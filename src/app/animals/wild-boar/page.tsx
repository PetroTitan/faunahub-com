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

const HERO = getAnimalImage("wild-boar");
const GALLERY = getAnimalGalleryImages("wild-boar");

export const metadata: Metadata = buildArticleMetadata({
  title: "Wild Boar — Profile, Habitat, Diet & Behavior",
  description:
    "Explore the wild boar (Sus scrofa): the wild ancestor of domestic pigs, a highly adaptable omnivore of Eurasian forests now found across much of the world.",
  path: "/animals/wild-boar",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("wild-boar"),
});

const faqItems = [
  {
    question: "Is the wild boar the ancestor of domestic pigs?",
    answer:
      "Yes. The wild boar (Sus scrofa) is the wild species from which domestic pigs were descended. Domestic pigs are usually treated as the same species or a domestic form of it, which is why wild boar and farm pigs share so many features.",
  },
  {
    question: "What do wild boar eat?",
    answer:
      "Wild boar are omnivores with a very broad diet. They root in the soil for roots, tubers, bulbs, fungi, and invertebrates, and also eat fallen fruit and nuts, plants, and occasionally small animals or carrion. This dietary flexibility is a big reason for their success.",
  },
  {
    question: "Where are wild boar found?",
    answer:
      "Wild boar are native across much of Europe and Asia and parts of North Africa, in forests, woodland, scrub, and farmland edges. Through introduction and feral populations, boar and boar-pig hybrids now occur in many other regions, where they can become invasive.",
  },
  {
    question: "Are wild boar dangerous?",
    answer:
      "Wild boar generally avoid people, but they are powerful animals, and a sow defending piglets or a cornered adult can be dangerous. They should be observed at a distance and never approached or fed in the wild.",
  },
];

export default function WildBoarPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Wild Boar", url: "https://faunahub.com/animals/wild-boar" },
    ]),
    articleSchema({
      title: "Wild Boar — Profile, Habitat, Diet & Behavior",
      description:
        "Explore the wild boar (Sus scrofa): the wild ancestor of domestic pigs, a highly adaptable omnivore of Eurasian forests now found across much of the world.",
      path: "/animals/wild-boar",
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
              { label: "Wild Boar" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Wild Boar <span className="italic font-normal text-[#5E6B63]">(Sus scrofa)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Wild pig</span>{" "}
                <span className="tag ml-1">Omnivore</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The wild boar (<em>Sus scrofa</em>) is a robust wild pig native to Eurasia
                and North Africa, and the wild ancestor of the domestic pig. Adaptable,
                intelligent, and highly fertile, it lives in a wide range of habitats and
                has spread, through introductions and feral populations, to many parts of
                the world.
              </p>
              <p>
                Wild boar are powerful diggers whose rooting reshapes the forest floor, and
                they are an important prey species as well as, in many regions, a focus of
                wildlife management.
              </p>
              <p>
                <strong>Conservation note:</strong> the wild boar is widespread and
                generally not of conservation concern across its range; in some regions
                introduced boar are instead managed as an invasive species. Verify current
                status and regional context at iucnredlist.org and local wildlife sources.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Sus scrofa
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Artiodactyla"],
                      ["Family", "Suidae"],
                      ["Genus", "Sus"],
                      ["Species", "S. scrofa"],
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
                Wild boar belong to Suidae, the pig family. The domestic pig is the
                domesticated form of this species, and the two readily interbreed, producing
                feral hybrid populations in some areas.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Native wild boar occupy deciduous and mixed forest, woodland, scrub, marsh
                edges, and agricultural margins across Europe, much of Asia, and North
                Africa. They do well wherever there is cover, water, and varied food, which
                has helped introduced populations establish in other regions.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Wild boar are opportunistic omnivores. They use their strong snout to root
                in soil for roots, tubers, fungi, and invertebrates, and they also eat
                fallen nuts and fruit, green plants, and occasionally small animals or
                carrion. This broad diet underpins their adaptability.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Females and young live in family groups called sounders, while adult males
                are more solitary outside the breeding season. Wild boar are mainly active
                around dawn, dusk, and at night, especially where they are disturbed by
                people. They wallow in mud to cool down and deter parasites, and rely on an
                excellent sense of smell.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Wild boar are heavily built, with a large head, a long mobile snout, and a
                coat of coarse bristly hair, usually grey-brown to black. Adult males have
                prominent tusks (enlarged canines). Piglets are born with pale longitudinal
                stripes that fade with age. The high-shouldered, front-heavy build is
                characteristic of the species.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Wild boar interact with people through crop damage, vehicle collisions, and,
                in some places, expansion into urban areas, and introduced populations can
                cause significant ecological harm. Management varies by region and aim — from
                conservation to population control — and should follow local guidance and
                authoritative sources.
              </p>

              <AnimalGallery images={GALLERY} commonName="Wild boar" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Wild Boar" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES["wild-boar"]}
                  intro="Authoritative wildlife references used for general educational context. Conservation and management status varies by region and should always be verified against current data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Wild boar profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Sus scrofa"],
                    ["Family", "Suidae (pigs)"],
                    ["Class", "Mammalia"],
                    ["Order", "Artiodactyla"],
                    ["Domestic form", "Domestic pig"],
                    ["Diet", "Omnivore (rooting forager)"],
                    ["Social structure", "Family groups (sounders)"],
                    ["Native range", "Eurasia & North Africa"],
                    ["Elsewhere", "Introduced / feral in many regions"],
                    ["IUCN Status", "Verify before publication"],
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
                  { label: "Pig Profile", href: "/animals/pig", description: "The domestic form of the wild boar" },
                  { label: "Warthog Profile", href: "/animals/warthog", description: "African wild pig relative" },
                  { label: "Deer Profile", href: "/animals/deer", description: "Another widespread forest ungulate" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "Eurasian forest fauna in context" },
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
                  Verified wildlife references are listed at the bottom of
                  this page under &quot;Sources and further reading&quot;.
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
