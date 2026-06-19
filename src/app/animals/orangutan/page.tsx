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

const HERO = getAnimalImage("orangutan");
const GALLERY = getAnimalGalleryImages("orangutan");

export const metadata: Metadata = buildArticleMetadata({
  title: "Orangutan — Profile, Habitat, Diet & Behavior",
  description:
    "Explore the orangutans (genus Pongo): great apes of Borneo and Sumatra, their arboreal life, fruit-based diet, remarkable intelligence, and why all species are conservation priorities.",
  path: "/animals/orangutan",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("orangutan"),
});

const faqItems = [
  {
    question: "How many species of orangutan are there?",
    answer:
      "Three species are recognised: the Bornean orangutan (Pongo pygmaeus), the Sumatran orangutan (Pongo abelii), and the Tapanuli orangutan (Pongo tapanuliensis), the last described as a distinct species in 2017. All three are restricted to the islands of Borneo and Sumatra in Southeast Asia.",
  },
  {
    question: "Are orangutans great apes?",
    answer:
      "Yes. Orangutans are great apes in the family Hominidae, alongside gorillas, chimpanzees, bonobos, and humans. They are the only great apes native to Asia and are the most arboreal — spending the majority of their lives in trees.",
  },
  {
    question: "What do orangutans eat?",
    answer:
      "Orangutans are primarily frugivores, with fruit making up a large part of the diet, supplemented by leaves, bark, flowers, insects, and other plant material. Fruit availability strongly shapes their movements and ranging behaviour through the forest.",
  },
  {
    question: "Why are orangutans endangered?",
    answer:
      "Orangutan populations have declined mainly due to loss and fragmentation of tropical forest — including conversion to agriculture — along with logging and other pressures. All three species are considered to face a high risk in the wild; verify each species' current status at iucnredlist.org, as assessments are updated over time.",
  },
];

export default function OrangutanPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Orangutan", url: "https://faunahub.com/animals/orangutan" },
    ]),
    articleSchema({
      title: "Orangutan — Profile, Habitat, Diet & Behavior",
      description:
        "Explore the orangutans (genus Pongo): great apes of Borneo and Sumatra, their arboreal life, fruit-based diet, remarkable intelligence, and why all species are conservation priorities.",
      path: "/animals/orangutan",
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
              { label: "Orangutan" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Orangutan <span className="italic font-normal text-[#5E6B63]">(genus Pongo)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Great ape</span>{" "}
                <span className="tag ml-1">Arboreal</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                Orangutans (genus <em>Pongo</em>) are great apes native to the rainforests
                of Borneo and Sumatra in Southeast Asia. They are the only great apes found
                in Asia and the most arboreal of the group, moving carefully through the
                forest canopy on long, powerful arms and hook-like hands and feet.
              </p>
              <p>
                Known for high intelligence, tool use, and long mother–offspring bonds,
                orangutans are a focus of both primate research and conservation. The
                species shown here is the Bornean orangutan (<em>Pongo pygmaeus</em>).
              </p>
              <p>
                <strong>Conservation note:</strong> all three orangutan species are
                considered to face a high risk of extinction in the wild, primarily
                because of forest loss and fragmentation. As assessments are revised over
                time, always verify each species&apos; current status at iucnredlist.org.
              </p>

              <h2>The Three Species</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Recognised orangutan species (verify current conservation status at iucnredlist.org)
                  </caption>
                  <tbody>
                    {[
                      ["Bornean orangutan", "Pongo pygmaeus — island of Borneo"],
                      ["Sumatran orangutan", "Pongo abelii — northern Sumatra"],
                      ["Tapanuli orangutan", "Pongo tapanuliensis — described in 2017, very restricted range"],
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
                    Taxonomic classification — Bornean orangutan as a reference species
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Primates"],
                      ["Family", "Hominidae"],
                      ["Genus", "Pongo"],
                      ["Species", "P. pygmaeus"],
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
                Orangutans belong to the family Hominidae (great apes), which also
                includes gorillas, chimpanzees, bonobos, and humans. They are the most
                distantly related great apes to humans within that family.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Orangutans inhabit tropical and subtropical moist forests, including
                lowland and peat-swamp forest, on Borneo and Sumatra. They are highly
                dependent on continuous forest with fruiting trees, which makes them
                particularly sensitive to habitat fragmentation.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Orangutans are predominantly fruit-eaters. When fruit is abundant they
                feed heavily on it; at other times they rely more on leaves, bark, shoots,
                flowers, and insects. Their detailed knowledge of where and when different
                trees fruit is thought to be an important part of their cognitive lives.
              </p>

              <h2>Behavior &amp; Intelligence</h2>
              <p>
                Compared with other great apes, orangutans are relatively solitary, with
                adult males in particular ranging alone. The strongest social bond is
                between a mother and her offspring, who may stay together for several years
                — among the longest dependency periods of any mammal.
              </p>
              <p>
                Orangutans are notable for problem-solving, tool use, and the construction
                of fresh sleeping nests in trees each night. Mature males develop
                prominent cheek pads (flanges) and produce long calls that carry through
                the forest.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Orangutans have shaggy reddish-brown hair, long arms with a span that
                exceeds their height, and powerful grasping hands and feet adapted for
                climbing. Flanged adult males are much larger than females and have the
                distinctive wide cheek pads and throat pouch. Their slow, deliberate
                movement through the canopy is itself a recognisable trait.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                The main pressures on orangutans come from the loss and fragmentation of
                forest habitat and associated land-use change, along with other threats in
                some areas. Conservation work includes habitat protection, rehabilitation
                and release of displaced individuals, and efforts to maintain connected
                forest landscapes. Current, species-specific data should be drawn from the
                IUCN Red List.
              </p>

              <AnimalGallery images={GALLERY} commonName="Orangutan" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Orangutan" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.orangutan}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Orangutan profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Genus", "Pongo"],
                    ["Reference species", "Pongo pygmaeus"],
                    ["Class", "Mammalia"],
                    ["Order", "Primates"],
                    ["Family", "Hominidae (great apes)"],
                    ["Species", "Three (Bornean, Sumatran, Tapanuli)"],
                    ["Diet", "Mainly fruit (frugivore)"],
                    ["Lifestyle", "Highly arboreal"],
                    ["Range", "Borneo and Sumatra"],
                    ["IUCN Status", "High risk — verify by species"],
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
                  { label: "Gorilla Profile", href: "/animals/gorilla", description: "Largest living primate" },
                  { label: "Chimpanzee Profile", href: "/animals/chimpanzee", description: "One of humans' closest relatives" },
                  { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories and threatened species" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "Asian fauna in context" },
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
