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

const HERO = getAnimalImage("coyote");
const GALLERY = getAnimalGalleryImages("coyote");

export const metadata: Metadata = buildArticleMetadata({
  title: "Coyote — Profile, Habitat, Diet & Behavior",
  description:
    "Explore the coyote (Canis latrans): a highly adaptable wild canid of North America that thrives from deserts and prairies to forests and cities.",
  path: "/animals/coyote",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("coyote"),
});

const faqItems = [
  {
    question: "What is a coyote?",
    answer:
      "The coyote (Canis latrans) is a medium-sized wild canid native to North America, related to wolves, jackals, and domestic dogs. Smaller and more lightly built than a gray wolf, it is one of the continent's most adaptable mammals and has expanded its range as landscapes have changed.",
  },
  {
    question: "Do coyotes live in cities?",
    answer:
      "Yes. Coyotes are remarkably adaptable and now live in and around many cities and suburbs across North America, in addition to deserts, grasslands, and forests. Urban coyotes typically avoid people and are active mainly at night, feeding on rodents, fruit, and other available foods.",
  },
  {
    question: "What do coyotes eat?",
    answer:
      "Coyotes are opportunistic omnivores. Their diet centres on small mammals such as rodents and rabbits, but also includes birds, insects, reptiles, fruit, and carrion, and varies widely with location and season. This flexibility is central to their success.",
  },
  {
    question: "Are coyotes dangerous to people or pets?",
    answer:
      "Coyotes generally avoid people, and serious incidents involving humans are uncommon. They can pose a risk to small unattended pets in some areas. Not feeding coyotes, securing food and rubbish, and supervising pets are the standard recommendations; follow local wildlife guidance.",
  },
];

export default function CoyotePage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Coyote", url: "https://faunahub.com/animals/coyote" },
    ]),
    articleSchema({
      title: "Coyote — Profile, Habitat, Diet & Behavior",
      description:
        "Explore the coyote (Canis latrans): a highly adaptable wild canid of North America that thrives from deserts and prairies to forests and cities.",
      path: "/animals/coyote",
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
              { label: "Coyote" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Coyote <span className="italic font-normal text-[#5E6B63]">(Canis latrans)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Canid</span>{" "}
                <span className="tag ml-1">Highly adaptable</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The coyote (<em>Canis latrans</em>) is a medium-sized wild canid native to
                North America and a close relative of wolves, jackals, and domestic dogs.
                Intelligent, versatile, and resourceful, it has not only persisted but
                expanded its range as human landscapes have spread, becoming a familiar
                presence even in cities.
              </p>
              <p>
                Coyotes occupy nearly every habitat on the continent and play an important
                ecological role as predators of rodents and other small animals.
              </p>
              <p>
                <strong>Conservation note:</strong> the coyote is widespread and abundant
                and is not of conservation concern; in many areas it is instead a focus of
                coexistence and management discussions. Verify current status and local
                guidance through authoritative sources.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Canis latrans
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Carnivora"],
                      ["Family", "Canidae"],
                      ["Genus", "Canis"],
                      ["Species", "C. latrans"],
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
                The coyote belongs to Canidae, the dog family, in the same genus
                (<em>Canis</em>) as wolves and domestic dogs, with which it can sometimes
                interbreed.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Coyotes occur from Central America through the United States and Canada,
                across deserts, grasslands, mountains, forests, and farmland, as well as
                suburban and urban areas. Their range has expanded over the past century,
                helped by their adaptability and changes to the landscape.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Coyotes are opportunistic omnivores. Small mammals such as rodents and
                rabbits are dietary staples, supplemented by birds, insects, reptiles,
                fruit, and carrion. Diet shifts with what is locally and seasonally
                available, which underpins their success across so many habitats.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Coyotes are flexible socially: they may live alone, in pairs, or in small
                family groups, depending on food and conditions. They are well known for
                their vocalisations — yips, barks, and howls — used to communicate within
                and between groups. They are mainly active around dusk, dawn, and at night,
                especially near people.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Coyotes have a slender build, a narrow, pointed muzzle, large erect ears,
                and a bushy, black-tipped tail usually carried low when running — a useful
                way to distinguish them from domestic dogs and wolves. Coat colour is
                typically grey to tan with paler underparts, varying by region.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Coyotes interact with people across much of North America, including in
                cities, which raises questions of coexistence with pets and livestock.
                Standard guidance emphasises not feeding them and securing attractants. For
                current status and local recommendations, rely on authoritative sources.
              </p>

              <AnimalGallery images={GALLERY} commonName="Coyote" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Coyote" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.coyote}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Coyote profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Canis latrans"],
                    ["Family", "Canidae (dogs)"],
                    ["Class", "Mammalia"],
                    ["Order", "Carnivora"],
                    ["Diet", "Opportunistic omnivore"],
                    ["Social structure", "Solitary to small family groups"],
                    ["Known for", "Adaptability; howls and yips"],
                    ["Habitat", "Deserts to forests to cities"],
                    ["Range", "North & Central America"],
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
                  { label: "Wolf Profile", href: "/animals/wolf", description: "Larger wild canid relative" },
                  { label: "Fox Profile", href: "/animals/fox", description: "Another adaptable canid" },
                  { label: "Bobcat Profile", href: "/animals/bobcat", description: "A fellow North American predator" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "North American fauna in context" },
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
