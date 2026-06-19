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

const HERO = getAnimalImage("bison");
const GALLERY = getAnimalGalleryImages("bison");

export const metadata: Metadata = buildArticleMetadata({
  title: "Bison — Profile, Habitat, Diet & Behavior",
  description:
    "Explore the American bison (Bison bison): North America's largest land mammal, its grassland habitat, grazing diet, herd behaviour, near-extinction, and conservation recovery.",
  path: "/animals/bison",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("bison"),
});

const faqItems = [
  {
    question: "What is the difference between a bison and a buffalo?",
    answer:
      "Although American bison are often called \"buffalo\" in everyday speech, they are not true buffalo. True buffalo — the African (Cape) buffalo and the Asian water buffalo — belong to different genera. Bison (genus Bison) are distinguished by a large shoulder hump, a heavy head, and a thick beard and mane.",
  },
  {
    question: "How big is an American bison?",
    answer:
      "The American bison is the largest land mammal in North America. Bulls are substantially larger and heavier than cows, with a massive forequarter, a pronounced shoulder hump supported by tall vertebral spines, and a broad head carried low. Exact measurements vary with subspecies, sex, age, and condition.",
  },
  {
    question: "Why did bison nearly go extinct?",
    answer:
      "American bison once numbered in the tens of millions across the Great Plains but were reduced to a tiny remnant in the 19th century through large-scale commercial and uncontrolled hunting and habitat change. Long-term protection, private and public herds, and conservation programmes have since allowed populations to recover from the brink.",
  },
  {
    question: "Is the European bison the same animal?",
    answer:
      "No. The European bison or wisent (Bison bonasus) is a separate, closely related species native to Europe. It too came close to extinction and has been restored through dedicated breeding and reintroduction. This profile focuses on the American bison (Bison bison).",
  },
];

export default function BisonPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Bison", url: "https://faunahub.com/animals/bison" },
    ]),
    articleSchema({
      title: "Bison — Profile, Habitat, Diet & Behavior",
      description:
        "Explore the American bison (Bison bison): North America's largest land mammal, its grassland habitat, grazing diet, herd behaviour, near-extinction, and conservation recovery.",
      path: "/animals/bison",
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
              { label: "Bison" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                American Bison <span className="italic font-normal text-[#5E6B63]">(Bison bison)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Grazer</span>{" "}
                <span className="tag ml-1">Conservation recovery</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The American bison (<em>Bison bison</em>) is the largest land mammal in
                North America and an icon of the continent&apos;s grasslands. Heavy-bodied
                and surprisingly agile, bison are grazing herd animals whose history is
                closely tied to the ecology of the Great Plains and to one of the
                best-known conservation recoveries in modern times.
              </p>
              <p>
                Two subspecies are generally recognised: the plains bison and the larger
                wood bison of more northern forested regions. Bison shape grasslands
                through grazing, wallowing, and trampling, influencing plant communities
                and other wildlife.
              </p>
              <p>
                <strong>Conservation note:</strong> after near-extinction in the 19th
                century, bison have recovered through protected and managed herds, though
                much of the population today is managed rather than fully wild. For current
                conservation status of wild and conservation herds, verify at
                iucnredlist.org.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Bison bison
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Artiodactyla"],
                      ["Family", "Bovidae"],
                      ["Genus", "Bison"],
                      ["Species", "B. bison"],
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
                Bison are bovids — the same family as cattle, buffalo, antelope, sheep,
                and goats. The closely related European bison or wisent
                (<em>Bison bonasus</em>) is a separate species.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Plains bison are animals of open grassland, prairie, and sagebrush, while
                wood bison occupy more northern meadow and boreal forest mosaics. Today
                bison occur largely in national parks, reserves, tribal lands, and managed
                herds across parts of North America, rather than across their full
                historical range.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Bison are grazers, feeding primarily on grasses and sedges. As ruminants,
                they ferment plant material in a multi-chambered stomach, allowing them to
                extract nutrients from fibrous vegetation. Their grazing patterns help
                maintain grassland structure and diversity.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Bison are social and usually live in herds, with cows, calves, and younger
                animals forming groups that bulls join especially during the rut. The
                breeding season features bellowing, displays, and sparring between bulls.
                Despite their bulk, bison are fast runners and capable jumpers and should
                always be given a wide berth in the wild.
              </p>
              <p>
                A characteristic behaviour is wallowing — rolling in dust or mud — which
                may help with shedding, parasites, and thermoregulation and leaves shallow
                depressions that persist in the landscape.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Bison are recognised by their massive forequarters, a prominent shoulder
                hump, a large low-slung head, and a shaggy dark-brown coat that is thickest
                over the head, neck, and shoulders, forming a beard and mane. Both sexes
                carry short, curved horns. The contrast between the heavy front end and
                the leaner hindquarters gives bison their distinctive silhouette.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Bison hold deep cultural significance for many Indigenous peoples of North
                America and are central to grassland restoration efforts. Conservation
                today balances genetics, disease management, available habitat, and the
                relationship between conservation herds and managed or commercial herds.
                Current status and population information should be drawn from authoritative
                conservation sources.
              </p>

              <AnimalGallery images={GALLERY} commonName="Bison" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — American Bison" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.bison}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Bison profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Bison bison"],
                    ["Family", "Bovidae"],
                    ["Class", "Mammalia"],
                    ["Order", "Artiodactyla"],
                    ["Subspecies", "Plains bison, wood bison"],
                    ["Diet", "Grazer (grasses, sedges)"],
                    ["Social structure", "Herds"],
                    ["Primary habitat", "Grassland, prairie, boreal meadow"],
                    ["Range", "North America (largely managed herds)"],
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
                  { label: "Moose Profile", href: "/animals/moose", description: "The largest living deer" },
                  { label: "Deer Profile", href: "/animals/deer", description: "Widespread browsing ungulates" },
                  { label: "Cow (Cattle) Profile", href: "/animals/cow", description: "Domesticated bovid relative" },
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
