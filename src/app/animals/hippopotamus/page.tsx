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

const HERO = getAnimalImage("hippopotamus");
const GALLERY = getAnimalGalleryImages("hippopotamus");

export const metadata: Metadata = buildArticleMetadata({
  title: "Hippopotamus — Profile, Habitat, Diet & Behavior",
  description:
    "Explore Hippopotamus amphibius: where hippos live across sub-Saharan Africa, their semi-aquatic life, grazing diet, social pods, and conservation context.",
  path: "/animals/hippopotamus",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("hippopotamus"),
});

const faqItems = [
  {
    question: "Are hippos dangerous to humans?",
    answer:
      "Hippopotamuses are widely regarded as among the most dangerous large animals in Africa. They are highly territorial in water and will defend their space and young aggressively. Most incidents involve people on foot near water or in boats. They are not predators — conflict is defensive and territorial — but their size, speed in shallow water, and powerful bite make them hazardous. Keep a wide distance and follow local guidance near hippo habitat.",
  },
  {
    question: "What do hippos eat?",
    answer:
      "Hippos are primarily grazers. They leave the water at dusk and travel to grazing lawns, feeding mainly on short grasses through the night before returning to water by morning. Despite their bulk they eat a relatively modest amount of vegetation for their size. Reports of occasional non-plant feeding exist in the literature but grass is overwhelmingly the staple.",
  },
  {
    question: "Why do hippos spend so much time in water?",
    answer:
      "Hippos are semi-aquatic. Staying submerged in rivers, lakes, and wetlands during the day helps regulate body temperature and protects their relatively hairless skin from the sun. They can hold their breath for several minutes and even rest underwater, surfacing to breathe without fully waking.",
  },
  {
    question: "What are a hippo's closest relatives?",
    answer:
      "Although hippos look pig-like, molecular and fossil evidence indicates their closest living relatives are cetaceans — whales and dolphins. The two lineages share a common ancestor, which is why hippos are sometimes discussed alongside whales in evolutionary studies.",
  },
];

export default function HippopotamusPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Hippopotamus", url: "https://faunahub.com/animals/hippopotamus" },
    ]),
    articleSchema({
      title: "Hippopotamus — Profile, Habitat, Diet & Behavior",
      description:
        "Explore Hippopotamus amphibius: where hippos live across sub-Saharan Africa, their semi-aquatic life, grazing diet, social pods, and conservation context.",
      path: "/animals/hippopotamus",
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
              { label: "Hippopotamus" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Hippopotamus <span className="italic font-normal text-[#5E6B63]">(Hippopotamus amphibius)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Semi-aquatic</span>{" "}
                <span className="tag ml-1">Herbivore</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The common hippopotamus (<em>Hippopotamus amphibius</em>) is a large,
                semi-aquatic mammal of sub-Saharan Africa and one of the heaviest land
                animals alive. Hippos spend much of the day in rivers, lakes, and
                wetlands and emerge after dark to graze on land, making them a defining
                presence of Africa&apos;s freshwater systems.
              </p>
              <p>
                Despite a bulky, slow-looking build, hippos are powerful and can move
                quickly over short distances both in water and on land. They are
                strongly territorial in water, and their grazing and dung deposition
                play an important role in moving nutrients between land and aquatic
                ecosystems.
              </p>
              <p>
                <strong>Conservation note:</strong> the common hippopotamus has been
                assessed as <strong>Vulnerable</strong> on the IUCN Red List in recent
                assessments, with habitat loss and unregulated hunting among the main
                pressures. Always verify current status at iucnredlist.org before
                relying on it. The hippo family also includes the much smaller,
                separately assessed pygmy hippopotamus (<em>Choeropsis liberiensis</em>)
                of West Africa.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Hippopotamus amphibius
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Artiodactyla"],
                      ["Family", "Hippopotamidae"],
                      ["Genus", "Hippopotamus"],
                      ["Species", "H. amphibius"],
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
                Hippos belong to the even-toed ungulates (Artiodactyla). Molecular and
                fossil evidence places cetaceans (whales and dolphins) as their closest
                living relatives — a relationship that surprises many readers given the
                hippo&apos;s superficially pig-like appearance.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Common hippos occur across sub-Saharan Africa wherever there is
                permanent water bordered by grazing land. They favour slow rivers,
                lakes, swamps, and seasonal pools deep enough to submerge in. Strongholds
                include parts of East Africa&apos;s Rift Valley lakes and rivers and the
                wetlands of southern Africa.
              </p>
              <p>
                Suitable habitat must combine deep water for daytime refuge with
                accessible grassland for night-time grazing, so hippo distribution
                closely tracks the availability of both.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Hippos are herbivores that feed mainly on grasses. They leave the water
                at dusk and may travel several kilometres along established paths to
                grazing areas, cropping short grasses with their broad lips before
                returning to water by dawn. Their enormous canine and incisor teeth are
                used for fighting and display rather than feeding.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Hippos are social in water, gathering in groups — often called pods or
                schools — that can range from a handful of animals to several dozen,
                typically led by a dominant male defending a stretch of water. Much of
                their communication is vocal, including loud grunts and bellows, some of
                which carry both above and below the surface.
              </p>
              <p>
                Territorial disputes between males can be intense, involving open-mouthed
                threat displays and clashes with their large tusk-like teeth. Females are
                highly protective of calves, which can nurse and even suckle underwater.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Hippos have a barrel-shaped body, short legs, and a massive head with
                eyes, ears, and nostrils set high so the animal can see, hear, and
                breathe while mostly submerged. The skin is thick and nearly hairless,
                grey to brownish, and secretes a reddish substance sometimes called
                &ldquo;blood sweat&rdquo; that helps protect against sun and infection.
              </p>
              <p>
                At a distance, hippos are recognised by the rows of eyes and nostrils
                breaking the surface of a river, their bulk when hauled out on banks, and
                the explosive open-mouthed gape used in threat displays. The pygmy
                hippopotamus is far smaller, rounder, and forest-dwelling rather than
                living in large open-water pods.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Hippos can come into serious conflict with people, both through their
                defence of waterways and through crop feeding near settlements. They are
                also affected by habitat loss, water diversion, and hunting for meat and
                ivory-like canine teeth. Effective conservation depends on protecting
                freshwater habitats and managing human–wildlife conflict around them.
              </p>

              <AnimalGallery images={GALLERY} commonName="Hippopotamus" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Hippopotamus" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.hippopotamus}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Hippopotamus profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Hippopotamus amphibius"],
                    ["Family", "Hippopotamidae"],
                    ["Class", "Mammalia"],
                    ["Diet", "Herbivore (grazer)"],
                    ["Lifestyle", "Semi-aquatic"],
                    ["Lifespan (wild)", "~40–50 years"],
                    ["Social structure", "Pods led by a dominant male"],
                    ["Primary habitat", "Rivers, lakes, wetlands"],
                    ["Range", "Sub-Saharan Africa"],
                    ["IUCN Status", "Vulnerable (verify before publication)"],
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
                  { label: "Rhinoceros Profile", href: "/animals/rhinoceros", description: "Large horned herbivores of Africa and Asia" },
                  { label: "Crocodile Profile", href: "/animals/crocodile", description: "Apex predator of African and tropical waterways" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "African land fauna in context" },
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
