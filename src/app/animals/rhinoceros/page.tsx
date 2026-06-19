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

const HERO = getAnimalImage("rhinoceros");
const GALLERY = getAnimalGalleryImages("rhinoceros");

export const metadata: Metadata = buildArticleMetadata({
  title: "Rhinoceros — Species, Habitat, Diet & Conservation",
  description:
    "Explore the world's rhinoceroses: the five living species across Africa and Asia, the white rhino (Ceratotherium simum), how rhinos live and feed, and why poaching makes conservation urgent.",
  path: "/animals/rhinoceros",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("rhinoceros"),
});

const faqItems = [
  {
    question: "How many species of rhinoceros are there?",
    answer:
      "Five living species are widely recognised: the white rhinoceros and black rhinoceros in Africa, and the greater one-horned (Indian), Javan, and Sumatran rhinoceroses in Asia. They differ in size, number of horns, lip shape, and habitat, and their conservation situations vary dramatically from species to species.",
  },
  {
    question: "What are rhino horns made of?",
    answer:
      "Rhino horns are made of keratin — the same structural protein found in hair and nails — rather than bone. They grow from the skin and can regrow if broken. Demand for horn has driven intense poaching, which is one of the central threats to several rhino species.",
  },
  {
    question: "What do rhinos eat?",
    answer:
      "All rhinos are herbivores, but feeding styles differ. The white rhino is a grazer with a broad, square lip suited to cropping grass close to the ground. The black rhino is a browser with a pointed, prehensile upper lip used to pull leaves and twigs from shrubs and trees. Asian species browse and graze depending on habitat.",
  },
  {
    question: "Are rhinos endangered?",
    answer:
      "It depends on the species. Some, such as the Javan and Sumatran rhinoceros, are considered Critically Endangered with very small populations, while the southern white rhinoceros has recovered to a comparatively larger population through long-term protection. Because situations differ so much and change over time, always verify each species' current status at iucnredlist.org.",
  },
];

export default function RhinocerosPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Rhinoceros", url: "https://faunahub.com/animals/rhinoceros" },
    ]),
    articleSchema({
      title: "Rhinoceros — Species, Habitat, Diet & Conservation",
      description:
        "Explore the world's rhinoceroses: the five living species across Africa and Asia, the white rhino (Ceratotherium simum), how rhinos live and feed, and why poaching makes conservation urgent.",
      path: "/animals/rhinoceros",
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
              { label: "Rhinoceros" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Rhinoceros <span className="italic font-normal text-[#5E6B63]">(family Rhinocerotidae)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Megaherbivore</span>{" "}
                <span className="tag ml-1">Conservation priority</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                Rhinoceroses are large, thick-skinned herbivores of the family
                Rhinocerotidae, instantly recognised by the one or two keratin horns on
                the snout. Five living species survive today — two in Africa and three in
                Asia — the remnants of a once far more diverse and widespread group.
              </p>
              <p>
                As megaherbivores, rhinos shape the vegetation and landscapes they live
                in through heavy grazing or browsing. The species shown here is the
                southern white rhinoceros (<em>Ceratotherium simum</em>), the largest of
                the living rhinos and a grassland grazer of southern and eastern Africa.
              </p>
              <p>
                <strong>Conservation note:</strong> rhino conservation status varies
                enormously by species, from comparatively recovered populations to a
                handful of surviving individuals. Several species and subspecies are
                considered Critically Endangered, driven above all by poaching for horn.
                Because these situations change, always verify each species&apos; current
                status at iucnredlist.org before relying on it.
              </p>

              <h2>The Five Living Species</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Living rhinoceros species (verify current conservation status at iucnredlist.org)
                  </caption>
                  <tbody>
                    {[
                      ["White rhinoceros", "Africa — grassland grazer, two horns, square lip"],
                      ["Black rhinoceros", "Africa — browser, two horns, hooked prehensile lip"],
                      ["Greater one-horned (Indian)", "South Asia — single horn, wetland and grassland"],
                      ["Javan rhinoceros", "Southeast Asia — single horn, very small population"],
                      ["Sumatran rhinoceros", "Southeast Asia — two horns, hairy, forest-dwelling"],
                    ].map(([name, note], i) => (
                      <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-[#F7F8F3]"}>
                        <td className="font-medium text-[#17211B] w-1/3">{name}</td>
                        <td>{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification — white rhinoceros as a reference species
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Perissodactyla"],
                      ["Family", "Rhinocerotidae"],
                      ["Genus", "Ceratotherium (white rhino)"],
                      ["Species", "C. simum"],
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
                Rhinos are odd-toed ungulates (Perissodactyla), a group that also includes
                horses and tapirs. Subspecies-level taxonomy — for example within the white
                rhino — is subject to ongoing scientific discussion.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                African rhinos occupy savanna grasslands, bushveld, and scrub, while the
                Asian species range from grassland and floodplain to dense tropical
                forest. White rhinos in particular are associated with open grasslands
                where short, nutritious grasses are available for grazing.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                All rhinos are herbivores. The white rhino&apos;s wide, square lip is
                adapted for grazing grasses, whereas the black rhino&apos;s pointed,
                grasping lip suits browsing on shrubs and trees. This difference in lip
                shape is one of the clearest ways to distinguish the two African species.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Rhinos are generally less social than herd animals like buffalo or
                elephants. White rhinos can form loose groups, especially females with
                young, while black rhinos are more solitary. Adults communicate through
                vocalisations, scent-marking, and communal dung sites that act as shared
                information posts. Eyesight is relatively poor, but hearing and smell are
                acute.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Rhinos are unmistakable: massive bodies, columnar legs, thick grey to
                brownish skin, and one or two horns on the snout. African and the Sumatran
                species have two horns; the greater one-horned and Javan rhinos have a
                single horn. The Sumatran rhino is the smallest and notably hairy, while
                the white rhino is the largest, with a pronounced shoulder hump and a
                broad, square muzzle.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Poaching for horn — driven by illegal trade — is the dominant threat to
                rhinos, alongside habitat loss and fragmentation. Conservation efforts
                include anti-poaching protection, strictly protected reserves,
                translocations, and intensive monitoring. Outcomes differ sharply between
                species, which is why current, species-specific data from the IUCN Red
                List should always be consulted.
              </p>

              <AnimalGallery images={GALLERY} commonName="Rhinoceros" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Rhinoceros" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.rhinoceros}
                  intro="Authoritative wildlife references used for general educational context. Conservation status varies by species and should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Rhinoceros profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Family", "Rhinocerotidae"],
                    ["Reference species", "Ceratotherium simum"],
                    ["Class", "Mammalia"],
                    ["Order", "Perissodactyla"],
                    ["Living species", "Five (2 African, 3 Asian)"],
                    ["Diet", "Herbivore (grazer or browser)"],
                    ["Horn material", "Keratin"],
                    ["Primary habitat", "Grassland, bushveld, forest"],
                    ["Range", "Africa and Asia"],
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
                  { label: "Elephant Profile", href: "/animals/elephant", description: "The largest land mammals" },
                  { label: "Hippopotamus Profile", href: "/animals/hippopotamus", description: "Semi-aquatic African megaherbivore" },
                  { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories and threatened species" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "African and Asian fauna in context" },
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
