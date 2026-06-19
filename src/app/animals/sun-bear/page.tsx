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

const HERO = getAnimalImage("sun-bear");
const GALLERY = getAnimalGalleryImages("sun-bear");

export const metadata: Metadata = buildArticleMetadata({
  title: "Sun Bear — Profile, Habitat, Diet & Conservation",
  description:
    "Explore the sun bear (Helarctos malayanus): the world's smallest bear, a tree-climbing forest specialist of Southeast Asia with a long tongue and a pale chest patch.",
  path: "/animals/sun-bear",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("sun-bear"),
});

const faqItems = [
  {
    question: "Is the sun bear the smallest bear?",
    answer:
      "Yes. The sun bear (Helarctos malayanus) is the smallest of the living bear species. It is a compact, powerfully built bear adapted to climbing and foraging in tropical forest, quite different in size and shape from larger bears such as the brown or polar bear.",
  },
  {
    question: "Why is it called a sun bear?",
    answer:
      "The name refers to the pale, often golden or orange, crescent-shaped patch on the bear's chest, which has been likened to a rising or setting sun. The pattern varies between individuals and can help with identification.",
  },
  {
    question: "What do sun bears eat?",
    answer:
      "Sun bears are omnivores with a strong taste for insects — especially termites and ants — and honey, which they reach using powerful claws and an exceptionally long tongue. They also eat fruit and other plant material, and play a role in seed dispersal and forest health.",
  },
  {
    question: "Are sun bears endangered?",
    answer:
      "Sun bears are recognised as a species of conservation concern, affected mainly by forest loss and other pressures across their Southeast Asian range. Because assessments change over time, verify the current status at iucnredlist.org.",
  },
];

export default function SunBearPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Sun Bear", url: "https://faunahub.com/animals/sun-bear" },
    ]),
    articleSchema({
      title: "Sun Bear — Profile, Habitat, Diet & Conservation",
      description:
        "Explore the sun bear (Helarctos malayanus): the world's smallest bear, a tree-climbing forest specialist of Southeast Asia with a long tongue and a pale chest patch.",
      path: "/animals/sun-bear",
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
              { label: "Sun Bear" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Sun Bear <span className="italic font-normal text-[#5E6B63]">(Helarctos malayanus)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Bear</span>{" "}
                <span className="tag ml-1">Forest specialist</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The sun bear (<em>Helarctos malayanus</em>) is the smallest of the world&apos;s
                bears, a compact and agile species of the tropical forests of Southeast
                Asia. Named for the pale crescent patch on its chest, it is an accomplished
                climber that spends much of its time foraging for insects, honey, and fruit.
              </p>
              <p>
                Despite their small size, sun bears are strong, with large paws and long
                claws suited to tearing into wood and climbing. They are shy, largely
                solitary, and not often seen in the wild.
              </p>
              <p>
                <strong>Conservation note:</strong> the sun bear is recognised as a species
                of conservation concern, affected by deforestation and other pressures.
                Verify the current status at iucnredlist.org before relying on it.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Helarctos malayanus
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Carnivora"],
                      ["Family", "Ursidae"],
                      ["Genus", "Helarctos"],
                      ["Species", "H. malayanus"],
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
                The sun bear is the only species in the genus <em>Helarctos</em>, one of
                several genera within the bear family, Ursidae.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Sun bears live in tropical and subtropical forests across mainland Southeast
                Asia and parts of the islands of Sumatra and Borneo. They depend on forest
                with fruiting trees and abundant insects, and their strong climbing ability
                lets them use the canopy as well as the forest floor.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Sun bears are omnivores that rely heavily on insects — particularly termites,
                ants, and bee colonies — and on honey, fruit, and other plant material. They
                use powerful claws to break open wood and nests and an exceptionally long
                tongue to extract insects and honey, which has earned them the nickname
                &ldquo;honey bear&rdquo; in some areas.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Sun bears are largely solitary and can be active by day or night. They are
                skilled climbers and may build rough nests or rest in trees. Largely quiet
                and secretive, they rely on a keen sense of smell to find food across the
                forest.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Sun bears have short, sleek black fur, a distinctive pale to orange
                chest patch, a broad muzzle, small rounded ears, and notably large paws with
                long, curved claws. Their small size, loose skin around the neck, and the
                chest marking make them easy to tell apart from larger bears.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                The main threats to sun bears are loss of forest habitat and other pressures
                across their range. Conservation focuses on protecting forest, tackling
                illegal activity, and rehabilitating displaced bears. For current status and
                context, rely on authoritative sources such as the IUCN Red List.
              </p>

              <AnimalGallery images={GALLERY} commonName="Sun bear" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Sun Bear" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES["sun-bear"]}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Sun bear profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Helarctos malayanus"],
                    ["Family", "Ursidae (bears)"],
                    ["Class", "Mammalia"],
                    ["Order", "Carnivora"],
                    ["Claim to fame", "World's smallest bear"],
                    ["Diet", "Omnivore (insects, honey, fruit)"],
                    ["Notable feature", "Pale chest patch; long tongue"],
                    ["Social structure", "Largely solitary"],
                    ["Range", "Southeast Asia"],
                    ["IUCN Status", "Concern — verify before publication"],
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
                  { label: "Bear Profile", href: "/animals/bear", description: "Overview of the bear family" },
                  { label: "Panda Profile", href: "/animals/panda", description: "Bamboo-specialist bear" },
                  { label: "Gibbon Profile", href: "/animals/gibbon", description: "Another Southeast Asian forest mammal" },
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
