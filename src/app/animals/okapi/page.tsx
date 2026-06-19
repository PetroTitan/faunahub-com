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

const HERO = getAnimalImage("okapi");
const GALLERY = getAnimalGalleryImages("okapi");

export const metadata: Metadata = buildArticleMetadata({
  title: "Okapi — Profile, Habitat, Diet & Conservation",
  description:
    "Explore the okapi (Okapia johnstoni): the giraffe's only living relative, a secretive striped forest mammal of the Democratic Republic of the Congo, and a conservation priority.",
  path: "/animals/okapi",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("okapi"),
});

const faqItems = [
  {
    question: "Is the okapi related to the giraffe?",
    answer:
      "Yes. Despite its zebra-like striped legs, the okapi (Okapia johnstoni) is the giraffe's only living relative, both belonging to the family Giraffidae. It shares features such as a long, dark, prehensile tongue and skin-covered horn-like structures (ossicones) in males.",
  },
  {
    question: "Where do okapis live?",
    answer:
      "Okapis are found only in the dense tropical rainforests of the northern and eastern Democratic Republic of the Congo, in central Africa. They are forest specialists and are not found anywhere else in the wild.",
  },
  {
    question: "Why are an okapi's legs striped?",
    answer:
      "The okapi's horizontal white stripes on the hindquarters and upper legs are thought to provide camouflage in the dappled light of the forest and may also help young follow their mother in dim conditions. The pattern is sometimes described as resembling a zebra's.",
  },
  {
    question: "Are okapis endangered?",
    answer:
      "The okapi is recognised as a species of conservation concern, affected by habitat loss, hunting, and instability within its limited range. Because assessments are updated over time, verify the current status at iucnredlist.org.",
  },
];

export default function OkapiPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Okapi", url: "https://faunahub.com/animals/okapi" },
    ]),
    articleSchema({
      title: "Okapi — Profile, Habitat, Diet & Conservation",
      description:
        "Explore the okapi (Okapia johnstoni): the giraffe's only living relative, a secretive striped forest mammal of the Democratic Republic of the Congo, and a conservation priority.",
      path: "/animals/okapi",
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
              { label: "Okapi" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Okapi <span className="italic font-normal text-[#5E6B63]">(Okapia johnstoni)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Giraffe relative</span>{" "}
                <span className="tag ml-1">Forest specialist</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The okapi (<em>Okapia johnstoni</em>) is a striking forest mammal of central
                Africa and the only living relative of the giraffe. With a dark,
                velvety body, striped legs, and a long prehensile tongue, it looks like a
                blend of several animals, but it belongs firmly to the giraffe family,
                Giraffidae.
              </p>
              <p>
                Shy, solitary, and superbly camouflaged, the okapi was unknown to outside
                science until the early twentieth century and remains difficult to observe
                in the wild. It is restricted to a single country and is an important symbol
                of Congolese rainforest conservation.
              </p>
              <p>
                <strong>Conservation note:</strong> the okapi is recognised as a species of
                conservation concern, affected by habitat loss, hunting, and regional
                instability. Verify the current status at iucnredlist.org before relying on
                it.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Okapia johnstoni
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Artiodactyla"],
                      ["Family", "Giraffidae"],
                      ["Genus", "Okapia"],
                      ["Species", "O. johnstoni"],
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
                Giraffidae today contains just two genera: the giraffe (<em>Giraffa</em>)
                and the okapi (<em>Okapia</em>). The two share distinctive traits including
                a long dark tongue and, in males, skin-covered ossicones.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                The okapi lives only in the dense tropical rainforests of the northern and
                eastern Democratic Republic of the Congo. It favours closed-canopy forest
                with abundant understorey vegetation and is closely tied to this restricted
                central African range.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Okapis are browsers, using their long, flexible tongue to strip leaves,
                buds, and shoots from forest plants. They also eat fruit, fungi, and some
                other plant material, and are known to consume certain clays and charcoal,
                likely for minerals.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Okapis are largely solitary and secretive, coming together mainly to breed.
                They rely on excellent hearing and camouflage to avoid their main natural
                predator, the leopard. Communication includes scent-marking and
                low-frequency sounds that may travel through the forest without being easily
                detected.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                The okapi has a deep reddish-brown to near-black, velvety coat, with bold
                horizontal white stripes on the hindquarters and upper legs and white
                lower legs. The head is paler, with large ears, and males bear short,
                skin-covered ossicones. The combination of striped legs and a giraffe-like
                head and tongue makes the okapi unmistakable.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Because it occupies a single, often troubled region, the okapi is sensitive
                to deforestation, hunting, and instability. Protected areas such as the
                Okapi Wildlife Reserve are central to its conservation, along with the work
                of dedicated conservation organisations. Consult authoritative sources for
                current status.
              </p>

              <AnimalGallery images={GALLERY} commonName="Okapi" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Okapi" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.okapi}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Okapi profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Okapia johnstoni"],
                    ["Family", "Giraffidae"],
                    ["Class", "Mammalia"],
                    ["Order", "Artiodactyla"],
                    ["Closest relative", "Giraffe"],
                    ["Diet", "Browser (leaves, buds, fruit)"],
                    ["Social structure", "Largely solitary"],
                    ["Primary habitat", "Tropical rainforest"],
                    ["Range", "NE Democratic Republic of the Congo"],
                    ["IUCN Status", "Concern — verify before publication"],
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
                  { label: "Giraffe Profile", href: "/animals/giraffe", description: "The okapi's tall living relative" },
                  { label: "Zebra Profile", href: "/animals/zebra", description: "Another striped African mammal (unrelated)" },
                  { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories and threatened species" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "Central African forest fauna in context" },
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
