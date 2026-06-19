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

const HERO = getAnimalImage("pangolin");
const GALLERY = getAnimalGalleryImages("pangolin");

export const metadata: Metadata = buildArticleMetadata({
  title: "Pangolin — Profile, Scales, Diet & Conservation",
  description:
    "Explore pangolins (order Pholidota): the scale-covered, ant- and termite-eating mammals of Africa and Asia, and why they are a major focus of conservation against illegal trade.",
  path: "/animals/pangolin",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("pangolin"),
});

const faqItems = [
  {
    question: "What is a pangolin?",
    answer:
      "A pangolin is a mammal covered in large, overlapping keratin scales — the only mammals with such scales. There are eight species across Africa and Asia. They are sometimes called \"scaly anteaters\" because they feed on ants and termites, but they are not closely related to true anteaters.",
  },
  {
    question: "What are pangolin scales made of?",
    answer:
      "Pangolin scales are made of keratin, the same protein found in hair, nails, and rhino horn. When threatened, a pangolin can roll into a tight ball, presenting only its hard scales — an effective defence against many natural predators.",
  },
  {
    question: "What do pangolins eat?",
    answer:
      "Pangolins are insectivores specialised on ants and termites. They have no teeth; instead they use powerful claws to open nests and a very long, sticky tongue to collect insects. Strong stomach muscles and swallowed grit help grind the food.",
  },
  {
    question: "Why are pangolins a conservation concern?",
    answer:
      "Pangolins are widely described as heavily affected by illegal hunting and trafficking, alongside habitat loss, and all eight species are recognised as being of conservation concern. Because the situation differs by species and changes over time, verify current status at iucnredlist.org and rely on authoritative conservation sources.",
  },
];

export default function PangolinPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Pangolin", url: "https://faunahub.com/animals/pangolin" },
    ]),
    articleSchema({
      title: "Pangolin — Profile, Scales, Diet & Conservation",
      description:
        "Explore pangolins (order Pholidota): the scale-covered, ant- and termite-eating mammals of Africa and Asia, and why they are a major focus of conservation against illegal trade.",
      path: "/animals/pangolin",
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
              { label: "Pangolin" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Pangolin <span className="italic font-normal text-[#5E6B63]">(order Pholidota)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Insectivore</span>{" "}
                <span className="tag ml-1">Conservation priority</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                Pangolins are unusual mammals covered in large, overlapping scales of
                keratin — the only mammals to have them. The eight living species, divided
                between Africa and Asia, are specialised ant- and termite-eaters and are
                often called &ldquo;scaly anteaters,&rdquo; though they are not close
                relatives of true anteaters. The animal shown here is the Sunda pangolin
                (<em>Manis javanica</em>).
              </p>
              <p>
                Shy, mostly nocturnal, and rarely seen, pangolins have become one of the
                most talked-about animals in conservation because of the pressure placed on
                them by illegal trade.
              </p>
              <p>
                <strong>Conservation note:</strong> all pangolin species are recognised as
                being of conservation concern, widely reported as affected by trafficking
                and habitat loss. Because status differs by species and is updated over
                time, verify current status at iucnredlist.org.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification — Sunda pangolin as a reference species
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Pholidota"],
                      ["Family", "Manidae"],
                      ["Genus", "Manis"],
                      ["Species", "M. javanica"],
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
                Pangolins form their own order, Pholidota, separate from other insect-eating
                mammals. Their resemblance to anteaters and armadillos reflects similar
                lifestyles rather than close relationship.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Pangolins occur across parts of Africa and Asia in a range of habitats,
                including forest, savanna, and scrub. Some species are mainly ground-dwelling
                and dig burrows, while others are skilled climbers that use tree hollows.
                All depend on a good supply of ants and termites.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Pangolins are specialist insectivores, feeding almost entirely on ants and
                termites. Lacking teeth, they rip open nests with strong claws and gather
                insects on an extremely long, sticky tongue. They swallow small stones and
                grit that, with muscular stomach action, help grind their food.
              </p>

              <h2>Behavior &amp; Defence</h2>
              <p>
                Most pangolins are solitary and nocturnal, sheltering in burrows or tree
                hollows by day. Their signature defence is to curl into a tight ball, with
                the tough scales protecting the soft underparts and head — effective against
                many natural predators. They can also lash with the scaled tail and release
                strong-smelling secretions.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Pangolins are immediately recognisable: a body armoured in brownish
                overlapping scales, a long tail, a small pointed head, short powerful limbs
                with large digging claws, and no external teeth. The scales cover the back,
                sides, limbs, and tail, while the face and belly are soft. No other mammal
                looks quite like a pangolin.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Pangolins are widely reported as heavily affected by illegal hunting and
                trafficking for their scales and meat, in addition to habitat loss.
                International protection and anti-trafficking efforts are central to their
                conservation. Given how much attention and change surrounds this issue, rely
                on current, authoritative sources such as the IUCN Red List for status.
              </p>

              <AnimalGallery images={GALLERY} commonName="Pangolin" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Pangolin" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.pangolin}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Pangolin profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Order", "Pholidota"],
                    ["Reference species", "Manis javanica"],
                    ["Class", "Mammalia"],
                    ["Family", "Manidae"],
                    ["Living species", "Eight (Africa & Asia)"],
                    ["Diet", "Ants & termites (insectivore)"],
                    ["Scales", "Keratin"],
                    ["Defence", "Rolls into a ball"],
                    ["Range", "Africa and Asia"],
                    ["IUCN Status", "Concern — verify by species"],
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
                  { label: "Armadillo Profile", href: "/animals/armadillo", description: "Armoured digging mammal of the Americas" },
                  { label: "Sloth Profile", href: "/animals/sloth", description: "Slow-moving mammal relative group" },
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
