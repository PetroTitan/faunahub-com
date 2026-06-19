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

const HERO = getAnimalImage("echidna");
const GALLERY = getAnimalGalleryImages("echidna");

export const metadata: Metadata = buildArticleMetadata({
  title: "Echidna — Profile, Habitat, Diet & Behavior",
  description:
    "Explore echidnas (family Tachyglossidae): spiny, egg-laying mammals of Australia and New Guinea that, with the platypus, make up the unique monotreme group.",
  path: "/animals/echidna",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("echidna"),
});

const faqItems = [
  {
    question: "Do echidnas really lay eggs?",
    answer:
      "Yes. Echidnas, like the platypus, are monotremes — the only group of mammals that lay eggs rather than giving birth to live young. A female lays a single egg into a temporary pouch; after it hatches, the young (sometimes called a puggle) feeds on milk secreted from specialised skin glands.",
  },
  {
    question: "What do echidnas eat?",
    answer:
      "The short-beaked echidna feeds mainly on ants and termites, while the long-beaked echidnas of New Guinea specialise more on earthworms and other invertebrates. Echidnas have no teeth; they collect prey with a long, sticky tongue after opening nests or probing soil and logs.",
  },
  {
    question: "Are echidnas the same as hedgehogs or porcupines?",
    answer:
      "No. Although echidnas are spiny like hedgehogs and porcupines, they are not closely related to either. The resemblance is a case of similar defensive adaptations evolving separately. Echidnas are monotremes, an entirely distinct mammal lineage.",
  },
  {
    question: "Where do echidnas live?",
    answer:
      "The short-beaked echidna is widespread across Australia and also occurs in New Guinea, in habitats from forest to arid country. The long-beaked echidnas are found in New Guinea. This profile uses the short-beaked echidna (Tachyglossus aculeatus) as the reference species.",
  },
];

export default function EchidnaPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Echidna", url: "https://faunahub.com/animals/echidna" },
    ]),
    articleSchema({
      title: "Echidna — Profile, Habitat, Diet & Behavior",
      description:
        "Explore echidnas (family Tachyglossidae): spiny, egg-laying mammals of Australia and New Guinea that, with the platypus, make up the unique monotreme group.",
      path: "/animals/echidna",
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
              { label: "Echidna" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Echidna <span className="italic font-normal text-[#5E6B63]">(family Tachyglossidae)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Monotreme</span>{" "}
                <span className="tag ml-1">Egg-laying</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                Echidnas are spiny, egg-laying mammals of Australia and New Guinea. Together
                with the platypus, they form the monotremes — the only mammals that lay eggs.
                Covered in protective spines and equipped with a tubular snout and a long
                tongue, echidnas are specialised feeders on ants, termites, and other
                invertebrates. The animal shown here is the short-beaked echidna
                (<em>Tachyglossus aculeatus</em>).
              </p>
              <p>
                Slow-moving but powerful diggers, echidnas can wedge themselves into the
                ground or curl up to present only their spines when threatened. They are a
                living window into an ancient branch of the mammal family tree.
              </p>
              <p>
                <strong>Conservation note:</strong> the short-beaked echidna is widespread
                and generally not of major concern, while the long-beaked echidnas of New
                Guinea are considered far more threatened. Because status differs by species,
                verify current details at iucnredlist.org.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification — short-beaked echidna as a reference species
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Monotremata"],
                      ["Family", "Tachyglossidae"],
                      ["Genus", "Tachyglossus"],
                      ["Species", "T. aculeatus"],
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
                Echidnas belong to the order Monotremata, which also contains the platypus.
                The family includes the short-beaked echidna and the long-beaked echidnas
                (genus <em>Zaglossus</em>) of New Guinea.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                The short-beaked echidna is found throughout much of Australia and in parts
                of New Guinea, occupying a remarkable range of habitats — forests, woodlands,
                heath, and arid interior — wherever there are ants, termites, or other
                invertebrate prey and suitable ground for digging.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Echidnas are toothless insectivores. The short-beaked echidna eats mainly
                ants and termites, opening nests with strong claws and gathering prey on a
                long, sticky tongue. Long-beaked echidnas rely more on earthworms and other
                soil invertebrates. Strong muscular action and hard pads help grind the food.
              </p>

              <h2>Behavior &amp; Defence</h2>
              <p>
                Echidnas are mostly solitary and can be active by day or night depending on
                conditions, sheltering in burrows, logs, or vegetation. When threatened, an
                echidna may curl into a spiny ball or dig straight down to anchor itself,
                leaving only sharp spines exposed. They are good swimmers and surprisingly
                capable climbers.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Echidnas are covered in coarse hair interspersed with stiff spines, with a
                small head, a slender tubular snout, short powerful limbs, and large digging
                claws. The short-beaked echidna has a shorter, straighter snout than the
                long-beaked species. The combination of spines and a tubular snout makes
                echidnas easy to recognise and hard to confuse with any unrelated spiny
                animal.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                The short-beaked echidna remains widespread, though individual animals face
                hazards such as roads and habitat change, while the long-beaked echidnas are
                of much greater conservation concern. As monotremes, echidnas are of special
                scientific interest. Consult authoritative sources for current,
                species-specific status.
              </p>

              <AnimalGallery images={GALLERY} commonName="Echidna" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Echidna" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.echidna}
                  intro="Authoritative wildlife references used for general educational context. Conservation status varies by species and should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Echidna profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Family", "Tachyglossidae"],
                    ["Reference species", "Tachyglossus aculeatus"],
                    ["Class", "Mammalia"],
                    ["Order", "Monotremata"],
                    ["Special trait", "Egg-laying mammal (monotreme)"],
                    ["Diet", "Ants, termites, invertebrates"],
                    ["Defence", "Spines; digs in / curls up"],
                    ["Social structure", "Largely solitary"],
                    ["Range", "Australia & New Guinea"],
                    ["IUCN Status", "Varies by species (verify)"],
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
                  { label: "Platypus Profile", href: "/animals/platypus", description: "The other living monotreme" },
                  { label: "Hedgehog Profile", href: "/animals/hedgehog", description: "A spiny but unrelated mammal" },
                  { label: "Wombat Profile", href: "/animals/wombat", description: "Another Australian mammal" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "Australian fauna in context" },
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
