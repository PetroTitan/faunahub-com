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

const HERO = getAnimalImage("weasel");
const GALLERY = getAnimalGalleryImages("weasel");

export const metadata: Metadata = buildArticleMetadata({
  title: "Weasel — Profile, Habitat, Diet & Behavior",
  description:
    "Explore weasels (genus Mustela): small, slender, fast-moving carnivores of the weasel family, including the least weasel — the smallest carnivoran in the world.",
  path: "/animals/weasel",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("weasel"),
});

const faqItems = [
  {
    question: "What is a weasel?",
    answer:
      "Weasels are small, slender carnivores in the genus Mustela, part of the weasel family (Mustelidae). The group includes the least weasel — often cited as the smallest carnivoran in the world — along with relatives such as stoats and, more broadly, polecats and ferrets.",
  },
  {
    question: "What do weasels eat?",
    answer:
      "Weasels are carnivores that prey mainly on small mammals such as mice and voles, and their long, thin bodies let them pursue prey into burrows. They may also take birds, eggs, and other small animals. Their high metabolism means they need to hunt frequently.",
  },
  {
    question: "Why do some weasels turn white in winter?",
    answer:
      "In colder parts of their range, some weasels and their close relatives moult into a white winter coat, which provides camouflage in snow, then return to brown in warmer months. The timing is linked to day length and local climate.",
  },
  {
    question: "Are weasels related to otters and badgers?",
    answer:
      "Yes. Weasels belong to Mustelidae, the family that also includes otters, badgers, martens, and the wolverine. Within that family, weasels are among the smallest and most slender members.",
  },
];

export default function WeaselPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Weasel", url: "https://faunahub.com/animals/weasel" },
    ]),
    articleSchema({
      title: "Weasel — Profile, Habitat, Diet & Behavior",
      description:
        "Explore weasels (genus Mustela): small, slender, fast-moving carnivores of the weasel family, including the least weasel — the smallest carnivoran in the world.",
      path: "/animals/weasel",
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
              { label: "Weasel" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Weasel <span className="italic font-normal text-[#5E6B63]">(genus Mustela)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Mustelid</span>{" "}
                <span className="tag ml-1">Small carnivore</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                Weasels are small, slender, fast-moving carnivores of the genus
                <em> Mustela</em>, within the weasel family (Mustelidae). The group includes
                the least weasel (<em>Mustela nivalis</em>), frequently described as the
                smallest carnivoran in the world. Despite their size, weasels are bold and
                effective hunters.
              </p>
              <p>
                Their elongated, low-slung bodies are perfectly suited to following small
                prey into burrows and crevices, making weasels important predators of
                rodents across much of the Northern Hemisphere.
              </p>
              <p>
                <strong>Conservation note:</strong> the least weasel and several relatives
                are widespread and generally not of conservation concern, though status
                varies among the many species in the genus. Verify specifics at
                iucnredlist.org.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification — least weasel as a reference species
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Carnivora"],
                      ["Family", "Mustelidae"],
                      ["Genus", "Mustela"],
                      ["Species", "M. nivalis"],
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
                Weasels are mustelids, related to stoats, polecats, ferrets, martens,
                otters, badgers, and the wolverine. The genus <em>Mustela</em> contains the
                true weasels along with several close relatives.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Weasels are found across much of Europe, Asia, North America, and parts of
                North Africa, in habitats ranging from farmland and grassland to woodland
                and scrub. They favour areas with plenty of cover and abundant small-mammal
                prey.
              </p>

              <h2>Diet &amp; Hunting</h2>
              <p>
                Weasels are specialist hunters of small mammals, particularly mice and
                voles, using their slim bodies to pursue prey underground. They have a fast
                metabolism and must eat frequently relative to their size. They may also
                take birds, eggs, and other small animals when available.
              </p>

              <h2>Behavior &amp; Adaptations</h2>
              <p>
                Weasels are mostly solitary, active by day or night, and constantly on the
                move. In colder regions, some weasels moult to a white winter coat for
                camouflage in snow, switching back to brown in warmer seasons. Their
                boldness and agility allow them to tackle prey close to their own size.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Weasels have a very long, thin body, short legs, a small flattened head, and
                a short tail. The least weasel is typically brown above and pale below, and
                is strikingly small. The elongated shape that lets weasels enter burrows is
                their most distinctive feature.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Weasels help control rodent populations and are mostly beneficial, though
                they occasionally take poultry or eggs. Most species are widespread; for
                any species of particular concern, and for regional context, consult
                authoritative sources.
              </p>

              <AnimalGallery images={GALLERY} commonName="Weasel" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Weasel" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.weasel}
                  intro="Authoritative wildlife references used for general educational context. Conservation status varies by species and should be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Weasel profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Genus", "Mustela"],
                    ["Reference species", "Mustela nivalis"],
                    ["Family", "Mustelidae"],
                    ["Class", "Mammalia"],
                    ["Order", "Carnivora"],
                    ["Diet", "Carnivore (mainly small mammals)"],
                    ["Notable", "Least weasel: smallest carnivoran"],
                    ["Social structure", "Largely solitary"],
                    ["Range", "Eurasia, North America, N. Africa"],
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
                  { label: "Wolverine Profile", href: "/animals/wolverine", description: "The largest land mustelid" },
                  { label: "Otter Profile", href: "/animals/otter", description: "Aquatic member of the weasel family" },
                  { label: "Badger Profile", href: "/animals/badger", description: "A stocky mustelid relative" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "Northern fauna in context" },
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
