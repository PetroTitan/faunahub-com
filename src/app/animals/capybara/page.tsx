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

const HERO = getAnimalImage("capybara");
const GALLERY = getAnimalGalleryImages("capybara");

export const metadata: Metadata = buildArticleMetadata({
  title: "Capybara — Profile, Habitat, Diet & Behavior",
  description:
    "Explore the capybara (Hydrochoerus hydrochaeris): the world's largest rodent, a semi-aquatic, highly social grazer of South American wetlands and riverbanks.",
  path: "/animals/capybara",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("capybara"),
});

const faqItems = [
  {
    question: "Is the capybara really the largest rodent?",
    answer:
      "Yes. The capybara (Hydrochoerus hydrochaeris) is the largest living rodent in the world, considerably bigger than animals like beavers. It is a heavy-bodied, barrel-shaped relative of guinea pigs and other South American rodents.",
  },
  {
    question: "Where do capybaras live?",
    answer:
      "Capybaras are native to much of South America, where they live in and around water — wetlands, marshes, riverbanks, lakeshores, and flooded grasslands. They are semi-aquatic and are rarely found far from water.",
  },
  {
    question: "What do capybaras eat?",
    answer:
      "Capybaras are herbivores that feed mainly on grasses and aquatic plants, along with some fruit and bark. Like rabbits, they practise coprophagy — re-ingesting some droppings — which helps them extract more nutrients from fibrous plant material.",
  },
  {
    question: "Why are capybaras so social?",
    answer:
      "Capybaras typically live in groups, sometimes quite large, usually centred on females, young, and one or more males. Living in groups offers protection from predators and is supported by their reliance on shared water and grazing areas. Their calm tolerance of other animals is often noted by observers.",
  },
];

export default function CapybaraPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Capybara", url: "https://faunahub.com/animals/capybara" },
    ]),
    articleSchema({
      title: "Capybara — Profile, Habitat, Diet & Behavior",
      description:
        "Explore the capybara (Hydrochoerus hydrochaeris): the world's largest rodent, a semi-aquatic, highly social grazer of South American wetlands and riverbanks.",
      path: "/animals/capybara",
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
              { label: "Capybara" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Capybara <span className="italic font-normal text-[#5E6B63]">(Hydrochoerus hydrochaeris)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Rodent</span>{" "}
                <span className="tag ml-1">Semi-aquatic</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The capybara (<em>Hydrochoerus hydrochaeris</em>) is the largest living
                rodent in the world, a semi-aquatic herbivore native to South America.
                Heavy-bodied and barrel-shaped, with partially webbed feet, it is supremely
                adapted to life around water and is almost always found near wetlands,
                rivers, and lakes.
              </p>
              <p>
                Capybaras are highly social and remarkably tolerant animals, often seen
                resting in groups and sharing space with a wide range of birds and other
                wildlife. They are a familiar and well-loved species across much of their
                range.
              </p>
              <p>
                <strong>Conservation note:</strong> the capybara is widespread and common
                across much of South America, but local populations depend on healthy
                wetland habitat. Verify current status at iucnredlist.org before relying on
                it.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Hydrochoerus hydrochaeris
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Rodentia"],
                      ["Family", "Caviidae"],
                      ["Genus", "Hydrochoerus"],
                      ["Species", "H. hydrochaeris"],
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
                Capybaras are rodents in the family Caviidae, which makes them relatives of
                guinea pigs and other South American cavies. A second, smaller species, the
                lesser capybara (<em>Hydrochoerus isthmius</em>), occurs in parts of
                northern South America and Panama.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Capybaras live across much of South America east of the Andes, in densely
                vegetated areas beside water: marshes, swamps, riverbanks, lake margins,
                and seasonally flooded grasslands such as the Pantanal and Llanos. Reliable
                access to water and grazing is essential.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Capybaras are grazing herbivores, eating mainly grasses and aquatic plants
                and supplementing this with fruit and bark at times. As hindgut fermenters
                that also re-ingest some droppings, they make efficient use of a
                fibre-rich, relatively low-quality diet.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Capybaras are gregarious, generally living in groups built around females
                and young with one or more males. Water is central to their lives: they
                swim well, wallow to keep cool, and dive to escape predators, sometimes
                staying submerged with just the nostrils showing. They communicate with a
                range of vocalisations, including barks, whistles, and purrs.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Capybaras have a large, blunt-muzzled head, small ears and eyes set high on
                the head, a heavy body covered in coarse reddish-brown hair, and short legs
                with slightly webbed feet. They have no real tail. Their size alone — by far
                the largest of any rodent — together with their waterside habitat makes them
                easy to recognise.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Capybaras are generally tolerant of people and in some areas live close to
                farmland and settlements. They are hunted in parts of their range and are
                affected by wetland loss, but remain widespread overall. For current status
                and any regional concerns, consult authoritative conservation sources.
              </p>

              <AnimalGallery images={GALLERY} commonName="Capybara" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Capybara" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.capybara}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Capybara profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Hydrochoerus hydrochaeris"],
                    ["Family", "Caviidae"],
                    ["Class", "Mammalia"],
                    ["Order", "Rodentia"],
                    ["Claim to fame", "World's largest rodent"],
                    ["Diet", "Grazer (grasses, aquatic plants)"],
                    ["Lifestyle", "Semi-aquatic"],
                    ["Social structure", "Groups"],
                    ["Range", "South America (east of the Andes)"],
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
                  { label: "Guinea Pig Profile", href: "/animals/guinea-pig", description: "Domesticated cavy relative" },
                  { label: "Beaver Profile", href: "/animals/beaver", description: "Another large semi-aquatic rodent" },
                  { label: "Squirrel Profile", href: "/animals/squirrel", description: "Diverse rodent family" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "South American fauna in context" },
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
