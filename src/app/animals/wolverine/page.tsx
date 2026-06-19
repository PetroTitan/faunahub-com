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

const HERO = getAnimalImage("wolverine");
const GALLERY = getAnimalGalleryImages("wolverine");

export const metadata: Metadata = buildArticleMetadata({
  title: "Wolverine — Profile, Habitat, Diet & Behavior",
  description:
    "Explore the wolverine (Gulo gulo): the largest land member of the weasel family, a powerful, far-ranging carnivore of northern forests and tundra.",
  path: "/animals/wolverine",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("wolverine"),
});

const faqItems = [
  {
    question: "What is a wolverine?",
    answer:
      "The wolverine (Gulo gulo) is the largest land-dwelling member of the weasel family (Mustelidae). Stocky and powerfully built, it resembles a small bear but is a mustelid, and is known for its strength, stamina, and ability to survive in harsh northern environments.",
  },
  {
    question: "Where do wolverines live?",
    answer:
      "Wolverines live in the boreal forests, taiga, and tundra of the Northern Hemisphere, across parts of northern Europe, Asia, and North America. They favour cold, remote regions with reliable snow cover and large undisturbed areas to roam.",
  },
  {
    question: "What do wolverines eat?",
    answer:
      "Wolverines are opportunistic carnivores and scavengers. They hunt smaller animals and, especially in winter, feed heavily on carrion, including carcasses left by other predators. Powerful jaws let them feed on frozen meat and bone, and they may cache food for later.",
  },
  {
    question: "Are wolverines dangerous to people?",
    answer:
      "Wolverines are shy and avoid people, and encounters are rare given how remote their habitat is. They have a reputation for fierceness in defending food, but they are not a meaningful threat to humans. Like all wildlife, they should be observed from a distance.",
  },
];

export default function WolverinePage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Wolverine", url: "https://faunahub.com/animals/wolverine" },
    ]),
    articleSchema({
      title: "Wolverine — Profile, Habitat, Diet & Behavior",
      description:
        "Explore the wolverine (Gulo gulo): the largest land member of the weasel family, a powerful, far-ranging carnivore of northern forests and tundra.",
      path: "/animals/wolverine",
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
              { label: "Wolverine" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Wolverine <span className="italic font-normal text-[#5E6B63]">(Gulo gulo)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Mustelid</span>{" "}
                <span className="tag ml-1">Carnivore</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The wolverine (<em>Gulo gulo</em>) is the largest land-dwelling member of
                the weasel family and one of the toughest carnivores of the far north.
                Bear-like in appearance but built like an oversized mustelid, it is famous
                for its strength, endurance, and ability to thrive in cold, remote
                landscapes.
              </p>
              <p>
                Wolverines range over enormous territories in search of food and are most
                associated with snowy boreal and tundra environments, where their wide feet
                help them travel over deep snow.
              </p>
              <p>
                <strong>Conservation note:</strong> the wolverine as a species is
                widespread across the circumpolar north, though some regional populations
                are of greater concern and the species is sensitive to disturbance and
                changing snow conditions. Verify current status at iucnredlist.org.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Gulo gulo
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Carnivora"],
                      ["Family", "Mustelidae"],
                      ["Genus", "Gulo"],
                      ["Species", "G. gulo"],
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
                The wolverine is a mustelid — the family that includes weasels, otters,
                badgers, and martens — and the largest member of that family that lives on
                land.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Wolverines inhabit boreal forest, taiga, and alpine tundra across northern
                Europe, northern and central Asia, and northern North America. They favour
                cold regions with persistent snow and large, undisturbed areas, and
                individual animals can range across very large territories.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Wolverines are opportunistic carnivores and powerful scavengers. They hunt
                small and medium animals and rely heavily on carrion, especially in winter,
                using strong jaws and teeth to feed on frozen carcasses and bone. They are
                known to cache food to return to later.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Wolverines are largely solitary and territorial, covering great distances as
                they patrol and forage. They are active across the day and night and are
                renowned for their stamina in difficult terrain. Scent-marking helps them
                maintain territories in their vast, sparsely populated range.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Wolverines have a stocky, muscular body, short legs, large paws, and a
                bushy tail. The dark brown coat is typically marked with a paler band that
                runs along each side from the shoulders to the rump. The bear-like build
                combined with weasel-family features makes the wolverine distinctive.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Because they need large, undisturbed, snowy habitats, wolverines are
                sensitive to human disturbance, habitat fragmentation, and changing
                conditions in the north. Conservation focuses on protecting connected
                wilderness. For current status and regional context, consult authoritative
                sources.
              </p>

              <AnimalGallery images={GALLERY} commonName="Wolverine" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Wolverine" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.wolverine}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Wolverine profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Gulo gulo"],
                    ["Family", "Mustelidae (weasels)"],
                    ["Class", "Mammalia"],
                    ["Order", "Carnivora"],
                    ["Claim to fame", "Largest land mustelid"],
                    ["Diet", "Carnivore & scavenger"],
                    ["Social structure", "Largely solitary"],
                    ["Primary habitat", "Boreal forest, taiga, tundra"],
                    ["Range", "Northern Hemisphere (circumpolar)"],
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
                  { label: "Badger Profile", href: "/animals/badger", description: "Another stocky mustelid" },
                  { label: "Otter Profile", href: "/animals/otter", description: "Aquatic member of the weasel family" },
                  { label: "Weasel Profile", href: "/animals/weasel", description: "The smallest mustelids" },
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
