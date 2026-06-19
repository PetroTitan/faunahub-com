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

const HERO = getAnimalImage("gibbon");
const GALLERY = getAnimalGalleryImages("gibbon");

export const metadata: Metadata = buildArticleMetadata({
  title: "Gibbon — Profile, Habitat, Diet & Behavior",
  description:
    "Explore gibbons (family Hylobatidae): the small, agile apes of Asian forests, famous for arm-swinging brachiation, loud songs, and strong pair bonds.",
  path: "/animals/gibbon",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("gibbon"),
});

const faqItems = [
  {
    question: "Are gibbons monkeys or apes?",
    answer:
      "Gibbons are apes, not monkeys. They are often called the \"lesser apes\" to distinguish them from the great apes (orangutans, gorillas, chimpanzees, bonobos, and humans). Like other apes, they lack a tail, but they are smaller and more specialised for life in the trees.",
  },
  {
    question: "How do gibbons move through the forest?",
    answer:
      "Gibbons are masters of brachiation — swinging hand-over-hand beneath branches with their very long arms. This lets them travel quickly and gracefully through the forest canopy, covering large gaps in a single swing. They can also walk upright along branches, holding their arms out for balance.",
  },
  {
    question: "Why are gibbons so loud?",
    answer:
      "Gibbons are famous for elaborate, far-carrying songs, often performed as duets by a mated pair. These calls help advertise and defend their territory and reinforce the bond between partners. Different species have distinctive songs.",
  },
  {
    question: "Are gibbons endangered?",
    answer:
      "Many gibbon species face significant pressure from forest loss and other threats, and a number are considered at high risk in the wild. Because status differs by species and is updated over time, verify each species' current conservation status at iucnredlist.org.",
  },
];

export default function GibbonPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Gibbon", url: "https://faunahub.com/animals/gibbon" },
    ]),
    articleSchema({
      title: "Gibbon — Profile, Habitat, Diet & Behavior",
      description:
        "Explore gibbons (family Hylobatidae): the small, agile apes of Asian forests, famous for arm-swinging brachiation, loud songs, and strong pair bonds.",
      path: "/animals/gibbon",
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
              { label: "Gibbon" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Gibbon <span className="italic font-normal text-[#5E6B63]">(family Hylobatidae)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Ape</span>{" "}
                <span className="tag ml-1">Arboreal</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                Gibbons are small, slender apes of the family Hylobatidae, sometimes called
                the &ldquo;lesser apes&rdquo; to set them apart from the great apes. Found
                in the tropical and subtropical forests of South and Southeast Asia, they
                are among the most acrobatic of all primates, spending almost their entire
                lives high in the canopy. The animal shown here is the lar, or white-handed,
                gibbon (<em>Hylobates lar</em>).
              </p>
              <p>
                Gibbons are known for two things above all: their spectacular arm-swinging
                travel through the trees and their loud, musical calls. They typically live
                in small family groups built around a bonded pair.
              </p>
              <p>
                <strong>Conservation note:</strong> many gibbon species are under
                significant pressure from habitat loss and other threats, with several
                considered at high risk in the wild. Verify each species&apos; current
                status at iucnredlist.org before relying on it.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification — lar gibbon as a reference species
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Primates"],
                      ["Family", "Hylobatidae"],
                      ["Genus", "Hylobates"],
                      ["Species", "H. lar"],
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
                Gibbons form their own ape family, Hylobatidae, with several genera and
                many species — including the larger siamang. They are apes, but a separate
                lineage from the great apes such as the orangutan.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Gibbons inhabit tropical and subtropical rainforest across parts of South
                and Southeast Asia. They are highly dependent on tall, continuous forest
                with a connected canopy, which they need both for travel and for the
                fruiting trees that supply much of their food.
              </p>

              <h2>Movement &amp; Diet</h2>
              <p>
                Gibbons travel mainly by brachiation, swinging beneath branches on their
                long arms and hook-like hands at speed. Their diet is dominated by ripe
                fruit, supplemented by leaves, flowers, and small amounts of animal prey
                such as insects. Their movement and feeding are tightly linked to the
                distribution of fruiting trees in the canopy.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Gibbons usually live in small family groups centred on a bonded adult pair
                and their offspring. Pairs often perform coordinated song duets that ring
                through the forest at dawn, advertising and defending their territory. Young
                gibbons stay with the family for several years before dispersing.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Gibbons have very long arms relative to their body, dense fur, a tailless
                body, and an upright posture when not swinging. Coat colour varies by
                species, sex, and age; the lar gibbon, for example, ranges from cream to
                dark brown with pale hands, feet, and face ring. The combination of long
                arms, canopy acrobatics, and loud calls makes gibbons distinctive.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                The principal threats to gibbons are loss and fragmentation of forest, along
                with other pressures in some areas. Because they need connected canopy,
                fragmentation is especially harmful. Conservation centres on protecting and
                reconnecting forest habitat. Current, species-specific data should be drawn
                from the IUCN Red List.
              </p>

              <AnimalGallery images={GALLERY} commonName="Gibbon" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Gibbon" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.gibbon}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Gibbon profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Family", "Hylobatidae (lesser apes)"],
                    ["Reference species", "Hylobates lar"],
                    ["Class", "Mammalia"],
                    ["Order", "Primates"],
                    ["Movement", "Brachiation (arm-swinging)"],
                    ["Diet", "Mainly fruit (frugivore)"],
                    ["Social structure", "Small family groups"],
                    ["Known for", "Loud song duets"],
                    ["Range", "South & Southeast Asia"],
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
                  { label: "Orangutan Profile", href: "/animals/orangutan", description: "Asian great ape" },
                  { label: "Chimpanzee Profile", href: "/animals/chimpanzee", description: "A great ape and close human relative" },
                  { label: "Lemur Profile", href: "/animals/lemur", description: "Primates of Madagascar" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "Asian forest fauna in context" },
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
