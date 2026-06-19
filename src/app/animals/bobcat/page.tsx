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

const HERO = getAnimalImage("bobcat");
const GALLERY = getAnimalGalleryImages("bobcat");

export const metadata: Metadata = buildArticleMetadata({
  title: "Bobcat — Profile, Habitat, Diet & Behavior",
  description:
    "Explore the bobcat (Lynx rufus): a medium-sized wild cat of North America, named for its short tail, and one of the continent's most adaptable predators.",
  path: "/animals/bobcat",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("bobcat"),
});

const faqItems = [
  {
    question: "What is a bobcat?",
    answer:
      "The bobcat (Lynx rufus) is a medium-sized wild cat native to North America and a member of the lynx genus. It is named for its short, \"bobbed\" tail. Bobcats are roughly twice the size of a domestic cat and are widespread and adaptable across many habitats.",
  },
  {
    question: "How is a bobcat different from a lynx?",
    answer:
      "The bobcat is one of several species in the genus Lynx. Compared with the larger Canada lynx, the bobcat has smaller feet, shorter ear tufts, a less uniformly grey coat (often spotted), and is generally more adaptable to a wider range of habitats and climates.",
  },
  {
    question: "What do bobcats eat?",
    answer:
      "Bobcats are carnivores that prey mainly on small to medium animals such as rabbits, hares, and rodents, along with birds and occasionally larger prey. They are solitary, mostly crepuscular and nocturnal hunters that rely on stealth and ambush.",
  },
  {
    question: "Are bobcats dangerous to people?",
    answer:
      "Bobcats are shy and generally avoid people; attacks on humans are very rare. They are an important part of healthy ecosystems as predators of small mammals. As with any wild animal, they should not be fed or approached.",
  },
];

export default function BobcatPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Bobcat", url: "https://faunahub.com/animals/bobcat" },
    ]),
    articleSchema({
      title: "Bobcat — Profile, Habitat, Diet & Behavior",
      description:
        "Explore the bobcat (Lynx rufus): a medium-sized wild cat of North America, named for its short tail, and one of the continent's most adaptable predators.",
      path: "/animals/bobcat",
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
              { label: "Bobcat" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Bobcat <span className="italic font-normal text-[#5E6B63]">(Lynx rufus)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Wild cat</span>{" "}
                <span className="tag ml-1">Carnivore</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The bobcat (<em>Lynx rufus</em>) is a medium-sized wild cat native to North
                America and one of the continent&apos;s most widespread and adaptable
                predators. About twice the size of a house cat, it takes its name from its
                short, &ldquo;bobbed&rdquo; tail and is a member of the lynx genus.
              </p>
              <p>
                Secretive and largely solitary, bobcats occupy a remarkable range of
                habitats, from forest and desert to scrub and the edges of suburban areas,
                where they help control populations of small mammals.
              </p>
              <p>
                <strong>Conservation note:</strong> the bobcat is widespread across much of
                North America and generally not of conservation concern across its range,
                though regional management varies. Verify current status at iucnredlist.org.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Lynx rufus
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Carnivora"],
                      ["Family", "Felidae"],
                      ["Genus", "Lynx"],
                      ["Species", "L. rufus"],
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
                The bobcat is one of the cats in the genus <em>Lynx</em>, alongside the
                Canada lynx, Eurasian lynx, and Iberian lynx. FaunaHub also has a broader
                lynx overview.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Bobcats range across much of the United States, southern Canada, and Mexico.
                They are habitat generalists, using forest, woodland, semi-desert, scrub,
                and the fringes of developed areas, provided there is cover and adequate
                prey.
              </p>

              <h2>Diet &amp; Hunting</h2>
              <p>
                Bobcats are carnivores that hunt mainly small to medium mammals, with
                rabbits and hares often important, along with rodents and birds. They are
                ambush hunters, relying on stealth and a short, fast rush, and are most
                active around dawn and dusk.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Bobcats are solitary and territorial, marking and patrolling home ranges
                that vary with habitat and prey. They are agile climbers and capable
                swimmers, though they hunt mainly on the ground. Communication relies on
                scent-marking and a range of vocalisations.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Bobcats have a tan to greyish-brown coat, usually marked with dark spots or
                bars, a pale underside, short black-tipped ear tufts, ruff-like facial fur,
                and the short black-banded tail that gives the species its name. The
                combination of spotting, modest ear tufts, and stubby tail distinguishes
                bobcats from the larger, greyer Canada lynx.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Bobcats coexist with people across much of their range and sometimes appear
                near suburban areas. They are managed as furbearers and game in some
                jurisdictions, with regulations intended to keep populations sustainable.
                For current status and management context, consult authoritative sources.
              </p>

              <AnimalGallery images={GALLERY} commonName="Bobcat" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Bobcat" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.bobcat}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Bobcat profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Lynx rufus"],
                    ["Family", "Felidae (cats)"],
                    ["Class", "Mammalia"],
                    ["Order", "Carnivora"],
                    ["Genus", "Lynx"],
                    ["Diet", "Carnivore (small & medium prey)"],
                    ["Named for", "Its short “bobbed” tail"],
                    ["Social structure", "Solitary"],
                    ["Range", "North America"],
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
                  { label: "Lynx Profile", href: "/animals/lynx", description: "The wider lynx genus" },
                  { label: "Cheetah Profile", href: "/animals/cheetah", description: "Another wild cat" },
                  { label: "Coyote Profile", href: "/animals/coyote", description: "A fellow North American predator" },
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
