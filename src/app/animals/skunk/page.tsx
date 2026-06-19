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

const HERO = getAnimalImage("skunk");
const GALLERY = getAnimalGalleryImages("skunk");

export const metadata: Metadata = buildArticleMetadata({
  title: "Skunk — Profile, Habitat, Diet & Defense",
  description:
    "Explore skunks (family Mephitidae): black-and-white mammals of the Americas best known for the powerful spray they use as a defense, and their adaptable, omnivorous lives.",
  path: "/animals/skunk",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("skunk"),
});

const faqItems = [
  {
    question: "Why do skunks spray?",
    answer:
      "Skunks spray as a last-resort defense. Specialised glands near the base of the tail can eject a strong-smelling fluid with good aim over a short distance. Skunks usually warn first — stamping, raising the tail, and posturing — and spray only if a threat persists, because the spray takes time to replenish.",
  },
  {
    question: "What do skunks eat?",
    answer:
      "Skunks are omnivores with a varied, opportunistic diet that includes insects and other invertebrates, small vertebrates, eggs, fruit, and plant material. They often dig for grubs and insects, and their diet shifts with the seasons.",
  },
  {
    question: "Are a skunk's black-and-white markings a warning?",
    answer:
      "Yes. The bold black-and-white pattern is widely interpreted as warning (aposematic) coloration, advertising to potential predators that the animal can defend itself with a noxious spray. Many predators learn to avoid skunks after a single encounter.",
  },
  {
    question: "Where do skunks live?",
    answer:
      "Skunks are found across the Americas, with the striped skunk (Mephitis mephitis) widespread in North America. They occupy a range of habitats — woodland, grassland, farmland, and the edges of towns — and often shelter in burrows or under structures.",
  },
];

export default function SkunkPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Skunk", url: "https://faunahub.com/animals/skunk" },
    ]),
    articleSchema({
      title: "Skunk — Profile, Habitat, Diet & Defense",
      description:
        "Explore skunks (family Mephitidae): black-and-white mammals of the Americas best known for the powerful spray they use as a defense, and their adaptable, omnivorous lives.",
      path: "/animals/skunk",
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
              { label: "Skunk" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Skunk <span className="italic font-normal text-[#5E6B63]">(family Mephitidae)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Omnivore</span>{" "}
                <span className="tag ml-1">Chemical defense</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                Skunks are black-and-white mammals of the Americas, famous for the potent
                defensive spray they can release when threatened. They make up the family
                Mephitidae, with the striped skunk (<em>Mephitis mephitis</em>) being the
                most familiar species across North America and the reference for this
                profile.
              </p>
              <p>
                Beyond their notorious defense, skunks are adaptable omnivores that play a
                useful role in controlling insects and other small prey, and that get along
                surprisingly well in landscapes shared with people.
              </p>
              <p>
                <strong>Conservation note:</strong> the striped skunk is widespread and
                common, though other skunk species vary in status. Verify any specific
                species&apos; status at iucnredlist.org.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification — striped skunk as a reference species
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Carnivora"],
                      ["Family", "Mephitidae"],
                      ["Genus", "Mephitis"],
                      ["Species", "M. mephitis"],
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
                Skunks were once grouped with the weasel family but are now placed in their
                own family, Mephitidae, which also includes the spotted skunks, hog-nosed
                skunks, and the Asian stink badgers.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Skunks are found across North and South America. The striped skunk ranges
                widely across North America in woodland, grassland, farmland, and
                suburban areas, sheltering in burrows, hollow logs, brush piles, or beneath
                buildings.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Skunks are opportunistic omnivores. They eat insects and grubs, worms,
                small vertebrates, eggs, fruit, and plants, often digging in soil for
                invertebrates. Their broad diet helps them thrive across varied habitats and
                seasons.
              </p>

              <h2>Defense &amp; Behavior</h2>
              <p>
                The skunk&apos;s signature defense is a strong-smelling spray produced by
                glands near the tail, which it can direct with accuracy over a short
                distance. Skunks typically give clear warnings first — stamping their feet,
                raising the tail, and posturing — and spray only when these are ignored.
                They are mainly nocturnal and largely solitary outside the breeding season.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Skunks are stocky, short-legged mammals with a bushy tail and a striking
                black coat marked with white stripes or spots that vary by species and
                individual. The bold contrasting pattern serves as a warning to predators
                and makes skunks easy to recognise.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Skunks frequently live near people and are valued for eating insect pests,
                though their denning under buildings and their spray can bring them into
                conflict with residents. They are widespread and adaptable; for current
                status and humane coexistence guidance, consult authoritative sources.
              </p>

              <AnimalGallery images={GALLERY} commonName="Skunk" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Skunk" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.skunk}
                  intro="Authoritative wildlife references used for general educational context. Conservation status varies by species and should be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Skunk profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Family", "Mephitidae"],
                    ["Reference species", "Mephitis mephitis"],
                    ["Class", "Mammalia"],
                    ["Order", "Carnivora"],
                    ["Diet", "Omnivore"],
                    ["Defense", "Aimed defensive spray"],
                    ["Markings", "Warning (aposematic) black & white"],
                    ["Activity", "Mainly nocturnal"],
                    ["Range", "The Americas"],
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
                  { label: "Raccoon Profile", href: "/animals/raccoon", description: "Another adaptable North American mammal" },
                  { label: "Badger Profile", href: "/animals/badger", description: "A stocky burrowing carnivore" },
                  { label: "Weasel Profile", href: "/animals/weasel", description: "Small carnivore once grouped with skunks" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "American fauna in context" },
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
