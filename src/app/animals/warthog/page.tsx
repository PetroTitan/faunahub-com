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

const HERO = getAnimalImage("warthog");
const GALLERY = getAnimalGalleryImages("warthog");

export const metadata: Metadata = buildArticleMetadata({
  title: "Warthog — Profile, Habitat, Diet & Behavior",
  description:
    "Explore the common warthog (Phacochoerus africanus): a wild pig of African savannas, its burrowing habits, grazing diet, tusks, and how it lives alongside larger wildlife.",
  path: "/animals/warthog",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("warthog"),
});

const faqItems = [
  {
    question: "What is a warthog?",
    answer:
      "The common warthog (Phacochoerus africanus) is a wild member of the pig family native to sub-Saharan Africa. It is named for the paired protrusions — often called \"warts\" — on the sides of the face, which are fleshy pads rather than growths caused by disease.",
  },
  {
    question: "Do warthogs dig their own burrows?",
    answer:
      "Warthogs shelter in burrows but usually do not dig them. They typically use holes excavated by other animals, especially aardvarks, retreating into them to rest, raise young, and escape predators and heat. They often back in so their tusks face the entrance.",
  },
  {
    question: "What do warthogs eat?",
    answer:
      "Warthogs are mainly grazers, feeding on grasses and also taking roots, bulbs, berries, bark, and other plant material, sometimes using their snout and tusks to dig. They are well known for kneeling on their padded wrists to feed on short grass close to the ground.",
  },
  {
    question: "Are warthogs dangerous?",
    answer:
      "Warthogs are not predators and generally flee from threats, running with the tail held upright. If cornered, however, an adult can defend itself with its lower tusks, so wild warthogs should be observed at a respectful distance.",
  },
];

export default function WarthogPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Warthog", url: "https://faunahub.com/animals/warthog" },
    ]),
    articleSchema({
      title: "Warthog — Profile, Habitat, Diet & Behavior",
      description:
        "Explore the common warthog (Phacochoerus africanus): a wild pig of African savannas, its burrowing habits, grazing diet, tusks, and how it lives alongside larger wildlife.",
      path: "/animals/warthog",
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
              { label: "Warthog" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Common Warthog <span className="italic font-normal text-[#5E6B63]">(Phacochoerus africanus)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Wild pig</span>{" "}
                <span className="tag ml-1">Grazer</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The common warthog (<em>Phacochoerus africanus</em>) is a wild member of
                the pig family found across much of sub-Saharan Africa. Adapted to open
                savanna and grassland, it is a familiar sight in many African parks,
                often grazing on its knees or trotting away with its tufted tail held
                straight up.
              </p>
              <p>
                Warthogs are a good example of how a medium-sized herbivore fits into a
                landscape dominated by larger animals and predators, relying on burrows,
                vigilance, and speed rather than size for safety.
              </p>
              <p>
                <strong>Conservation note:</strong> the common warthog is a widespread
                species and has generally been assessed in a lower category of concern,
                but as always, verify current status at iucnredlist.org before relying on
                it.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Phacochoerus africanus
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Artiodactyla"],
                      ["Family", "Suidae"],
                      ["Genus", "Phacochoerus"],
                      ["Species", "P. africanus"],
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
                Warthogs belong to Suidae, the pig family. A second species, the desert
                warthog (<em>Phacochoerus aethiopicus</em>), occurs in parts of the Horn
                of Africa.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Warthogs favour open and lightly wooded habitats — savanna, grassland, and
                floodplains — across sub-Saharan Africa. They depend on access to grazing,
                water for at least part of the year, and burrows for shelter, and tend to
                avoid dense forest.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Warthogs are predominantly grazers, eating grasses and also digging for
                roots, bulbs, and tubers with their snout and tusks, especially in the dry
                season. Their habit of kneeling to feed on short grass is one of their
                most recognisable behaviours.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Warthogs are active mainly by day and shelter in burrows at night. Females
                and young form family groups called sounders, while adult males are more
                solitary outside the breeding season. When alarmed they run quickly with
                the tail raised, which may help young keep the group in sight in tall
                grass.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Warthogs have a large flat head, a mane of coarse hair along the back,
                sparse body hair, and the distinctive facial pads that give them their
                name. Both sexes carry curved tusks — upper and lower pairs — with the
                upper tusks often prominent. The combination of the big head, the kneeling
                feeding posture, and the upright tail when running is unmistakable.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Warthogs are widespread and adaptable, though they can come into conflict
                with farming in some areas and are affected by hunting and habitat change.
                Their reliance on burrows links them ecologically to burrow-diggers such as
                aardvarks. For current status, consult authoritative conservation sources.
              </p>

              <AnimalGallery images={GALLERY} commonName="Warthog" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Warthog" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.warthog}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Warthog profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Phacochoerus africanus"],
                    ["Family", "Suidae (pigs)"],
                    ["Class", "Mammalia"],
                    ["Order", "Artiodactyla"],
                    ["Diet", "Mainly grazer (grasses, roots)"],
                    ["Shelter", "Burrows (often aardvark holes)"],
                    ["Social structure", "Family groups (sounders)"],
                    ["Primary habitat", "Savanna, grassland"],
                    ["Range", "Sub-Saharan Africa"],
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
                  { label: "Hippopotamus Profile", href: "/animals/hippopotamus", description: "Semi-aquatic African megaherbivore" },
                  { label: "Pig Profile", href: "/animals/pig", description: "Domesticated relative in the pig family" },
                  { label: "Wildebeest Profile", href: "/animals/wildebeest", description: "Migratory African antelope" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "African savanna fauna in context" },
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
