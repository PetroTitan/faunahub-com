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

const HERO = getAnimalImage("squirrel");
const GALLERY = getAnimalGalleryImages("squirrel");

export const metadata: Metadata = buildArticleMetadata({
  title: "Squirrel — Profile, Types, Habitat, Diet & Behavior",
  description:
    "Explore squirrels (family Sciuridae): tree squirrels, ground squirrels, and flying squirrels, their worldwide range, seed-caching diet, and adaptable behaviour.",
  path: "/animals/squirrel",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("squirrel"),
});

const faqItems = [
  {
    question: "What kinds of squirrels are there?",
    answer:
      "The squirrel family (Sciuridae) is large and varied. It includes tree squirrels such as the Eurasian red squirrel and eastern gray squirrel, ground squirrels, chipmunks, marmots, prairie dogs, and the gliding flying squirrels. They share a common family but differ widely in size, habitat, and behaviour.",
  },
  {
    question: "What do squirrels eat?",
    answer:
      "Most squirrels are primarily herbivorous, eating nuts, seeds, fruit, buds, and fungi, though many are opportunistic and will take a wider range of foods. Tree squirrels are well known for caching food — burying or hiding seeds and nuts to recover later — which also helps disperse seeds.",
  },
  {
    question: "Where do squirrels live?",
    answer:
      "Squirrels are found on most continents and in a wide range of habitats, from forests and woodlands to grasslands, mountains, and cities. They are notably absent as native species from Australia and Antarctica. Their adaptability is one reason several species do well around people.",
  },
  {
    question: "Are squirrels endangered?",
    answer:
      "Many squirrel species are common and widespread, but some have restricted ranges or face pressure from habitat loss, competition, or disease. The Eurasian red squirrel, for example, has declined in parts of its range where the introduced eastern gray squirrel is established. Status varies by species, so verify specifics at iucnredlist.org.",
  },
];

export default function SquirrelPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Squirrel", url: "https://faunahub.com/animals/squirrel" },
    ]),
    articleSchema({
      title: "Squirrel — Profile, Types, Habitat, Diet & Behavior",
      description:
        "Explore squirrels (family Sciuridae): tree squirrels, ground squirrels, and flying squirrels, their worldwide range, seed-caching diet, and adaptable behaviour.",
      path: "/animals/squirrel",
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
              { label: "Squirrel" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Squirrel <span className="italic font-normal text-[#5E6B63]">(family Sciuridae)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Rodent</span>{" "}
                <span className="tag ml-1">Adaptable</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                Squirrels are small to medium-sized rodents of the family Sciuridae, one of
                the most familiar and widespread groups of mammals. The family is far
                broader than the tree squirrels most people picture: it also includes
                ground squirrels, chipmunks, marmots, prairie dogs, and flying squirrels.
              </p>
              <p>
                The animal shown here is the Eurasian red squirrel
                (<em>Sciurus vulgaris</em>), a classic tree squirrel, used as a reference
                for this family-level overview. Squirrels are known for agility, sharp
                senses, and a strong habit of caching food.
              </p>
              <p>
                <strong>Conservation note:</strong> the squirrel family contains many
                common, widespread species as well as some with restricted ranges or local
                declines. Because status varies so much from species to species, verify any
                specific conservation claim at iucnredlist.org.
              </p>

              <h2>Major Squirrel Groups</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Broad groups within the family Sciuridae
                  </caption>
                  <tbody>
                    {[
                      ["Tree squirrels", "Agile climbers such as red and gray squirrels"],
                      ["Ground squirrels", "Burrowing species of open habitats"],
                      ["Chipmunks", "Small, striped, partly ground-dwelling squirrels"],
                      ["Marmots & prairie dogs", "Large, social, burrow-living squirrels"],
                      ["Flying squirrels", "Gliding species with a skin membrane between limbs"],
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
                    Taxonomic classification — Eurasian red squirrel as a reference species
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Rodentia"],
                      ["Family", "Sciuridae"],
                      ["Genus", "Sciurus (tree squirrels)"],
                      ["Species", "S. vulgaris"],
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
                Squirrels are rodents (order Rodentia), the largest order of mammals.
                Within Sciuridae, classification into subfamilies and many genera reflects
                the family&apos;s great diversity across the world.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Squirrels occur across most of the world, from northern forests to
                tropical woodland, grassland, mountains, and urban parks and gardens. They
                are not native to Australia or Antarctica. Tree squirrels favour wooded
                habitat, ground squirrels and prairie dogs open country, and flying
                squirrels mature forest.
              </p>

              <h2>Diet &amp; Caching</h2>
              <p>
                Most squirrels eat a plant-based diet of nuts, seeds, fruit, buds, and
                fungi, with some species taking insects or other foods opportunistically.
                Tree squirrels are famous for caching — hiding food in many small stores or
                a central larder for later use. Because not every cache is recovered,
                squirrels play a role in dispersing and planting tree seeds.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Behaviour varies widely across the family. Many tree squirrels are largely
                solitary and active by day, while marmots and prairie dogs live in social
                colonies with complex burrow systems and alarm calls. Squirrels use sharp
                vision, agile movement, and a bushy tail for balance, signalling, and
                warmth.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Tree squirrels are recognised by a slender body, prominent bushy tail, and
                quick, darting movements through trees. Coat colour varies by species and
                region — the red squirrel ranges from rust-red to dark brown, sometimes with
                ear tufts in winter. Ground-dwelling relatives tend to be stockier, and
                flying squirrels have a distinctive gliding membrane.
              </p>

              <h2>Human Interaction</h2>
              <p>
                Squirrels are among the wild mammals people encounter most often,
                especially in towns and cities where several species thrive. Interactions
                range from enjoyment of urban wildlife to management issues where
                introduced squirrels affect native species — as with the introduced eastern
                gray squirrel and the native red squirrel in parts of Europe.
              </p>

              <AnimalGallery images={GALLERY} commonName="Squirrel" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Squirrel" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.squirrel}
                  intro="Authoritative wildlife references used for general educational context. Conservation status varies by species and should be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Squirrel profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Family", "Sciuridae"],
                    ["Reference species", "Sciurus vulgaris"],
                    ["Class", "Mammalia"],
                    ["Order", "Rodentia"],
                    ["Main groups", "Tree, ground, flying squirrels & relatives"],
                    ["Diet", "Mainly nuts, seeds, fruit, fungi"],
                    ["Notable behaviour", "Food caching"],
                    ["Range", "Worldwide except Australia & Antarctica"],
                    ["Activity", "Mostly diurnal"],
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
                  { label: "Beaver Profile", href: "/animals/beaver", description: "Dam-building wetland rodent" },
                  { label: "Porcupine Profile", href: "/animals/porcupine", description: "Quill-covered rodents" },
                  { label: "Hedgehog Profile", href: "/animals/hedgehog", description: "Small spiny insectivore" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "Woodland and urban fauna in context" },
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
