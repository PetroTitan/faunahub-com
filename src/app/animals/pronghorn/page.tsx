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

const HERO = getAnimalImage("pronghorn");
const GALLERY = getAnimalGalleryImages("pronghorn");

export const metadata: Metadata = buildArticleMetadata({
  title: "Pronghorn — Profile, Speed, Habitat & Behavior",
  description:
    "Explore the pronghorn (Antilocapra americana): North America's fastest land mammal, a unique species of open western grasslands with branched horns and long-distance migrations.",
  path: "/animals/pronghorn",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("pronghorn"),
});

const faqItems = [
  {
    question: "Is a pronghorn an antelope?",
    answer:
      "Not technically. Although it is often called the \"American antelope,\" the pronghorn (Antilocapra americana) is the only living member of its own family, Antilocapridae. True antelopes belong to a different family (Bovidae) in the Old World. The pronghorn's resemblance to antelopes reflects a similar way of life, not close relationship.",
  },
  {
    question: "How fast is a pronghorn?",
    answer:
      "The pronghorn is the fastest land mammal in North America and one of the fastest in the world over distance. It is built for sustained high-speed running across open country, with a large heart and lungs and lightweight limbs, allowing it to outrun the predators of its grassland home.",
  },
  {
    question: "Do pronghorns shed their horns?",
    answer:
      "Pronghorns have an unusual feature: true horns with a bony core, but with an outer sheath that is branched (pronged) and shed and regrown each year. This combination — a horn sheath that is both branched and deciduous — is distinctive to the pronghorn.",
  },
  {
    question: "Where do pronghorns live?",
    answer:
      "Pronghorns live in open grasslands, sagebrush plains, and deserts of western and central North America. They depend on wide, open landscapes and, in some regions, undertake long seasonal migrations between summer and winter range.",
  },
];

export default function PronghornPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Pronghorn", url: "https://faunahub.com/animals/pronghorn" },
    ]),
    articleSchema({
      title: "Pronghorn — Profile, Speed, Habitat & Behavior",
      description:
        "Explore the pronghorn (Antilocapra americana): North America's fastest land mammal, a unique species of open western grasslands with branched horns and long-distance migrations.",
      path: "/animals/pronghorn",
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
              { label: "Pronghorn" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Pronghorn <span className="italic font-normal text-[#5E6B63]">(Antilocapra americana)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Grazer / browser</span>{" "}
                <span className="tag ml-1">Fastest in N. America</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The pronghorn (<em>Antilocapra americana</em>) is a hoofed mammal of
                western and central North America and the fastest land animal on the
                continent. Often called the American antelope, it is in fact the sole living
                member of its own family, a unique survivor adapted to wide-open grasslands
                and sagebrush plains.
              </p>
              <p>
                Pronghorns are renowned for endurance running and keen eyesight, traits
                shaped by life in open country. In some regions they make impressive
                long-distance migrations between seasonal ranges.
              </p>
              <p>
                <strong>Conservation note:</strong> the pronghorn as a species is
                widespread across much of the North American west, though some local
                populations and subspecies are of greater concern. Verify current status at
                iucnredlist.org before relying on it.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Antilocapra americana
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Artiodactyla"],
                      ["Family", "Antilocapridae"],
                      ["Genus", "Antilocapra"],
                      ["Species", "A. americana"],
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
                The pronghorn is the only surviving species of the family Antilocapridae —
                a lineage native to the Americas and not closely related to the true
                antelopes of the Old World.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Pronghorns inhabit open grassland, sagebrush steppe, and desert across
                western and central North America. They favour wide, unobstructed terrain
                where their speed and long-range vision give them the advantage, and they
                tend to avoid areas with dense cover.
              </p>

              <h2>Speed &amp; Migration</h2>
              <p>
                Built for fast, sustained running, the pronghorn has large lungs and heart
                and light, slender limbs. It is the fastest land mammal in North America and
                exceptionally enduring over distance. In parts of its range, pronghorns
                undertake some of the longest land migrations on the continent, which depend
                on open, connected landscapes free of impassable barriers.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Pronghorns are herbivores that both graze and browse, feeding on forbs,
                sagebrush and other shrubs, and grasses, with the balance shifting by season.
                Their ability to use sagebrush and other tough plants helps them thrive in
                arid western habitats.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Pronghorns are social, often forming larger groups in winter and smaller
                ones in the breeding season. They rely heavily on sight, using their large
                eyes to detect movement at great distance, and flash the white hair of the
                rump as an alarm signal. Rather than jumping fences, pronghorns more often
                go under them — a behaviour with real consequences where fencing crosses
                migration routes.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Pronghorns are tan above and white below, with white bands on the throat and
                a prominent white rump patch. Males, and some females, carry the
                characteristic branched (pronged) horns whose outer sheath is shed each year.
                Their lean build, distinctive markings, and fast, gliding run make them easy
                to identify in open country.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Pronghorns recovered strongly from severe declines in the past and are now
                widespread, but migratory populations are sensitive to fencing, roads, and
                land conversion that fragment their range. Conservation increasingly focuses
                on keeping migration corridors open. Consult authoritative sources for
                current status.
              </p>

              <AnimalGallery images={GALLERY} commonName="Pronghorn" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Pronghorn" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.pronghorn}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Pronghorn profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Antilocapra americana"],
                    ["Family", "Antilocapridae"],
                    ["Class", "Mammalia"],
                    ["Order", "Artiodactyla"],
                    ["Claim to fame", "Fastest land mammal in N. America"],
                    ["Horns", "Branched; outer sheath shed yearly"],
                    ["Diet", "Forbs, shrubs, grasses"],
                    ["Social structure", "Herds (larger in winter)"],
                    ["Range", "Western & central North America"],
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
                  { label: "Bison Profile", href: "/animals/bison", description: "Another icon of the North American plains" },
                  { label: "Deer Profile", href: "/animals/deer", description: "Widespread browsing ungulates" },
                  { label: "Cheetah Profile", href: "/animals/cheetah", description: "The fastest land animal overall" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "North American fauna in context" },
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
