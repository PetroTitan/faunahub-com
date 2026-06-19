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

const HERO = getAnimalImage("aardvark");
const GALLERY = getAnimalGalleryImages("aardvark");

export const metadata: Metadata = buildArticleMetadata({
  title: "Aardvark — Profile, Habitat, Diet & Behavior",
  description:
    "Explore the aardvark (Orycteropus afer): a nocturnal, burrowing African mammal that feeds on ants and termites and is the sole living member of its own order.",
  path: "/animals/aardvark",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("aardvark"),
});

const faqItems = [
  {
    question: "What is an aardvark?",
    answer:
      "The aardvark (Orycteropus afer) is a medium-sized, nocturnal, burrowing mammal of sub-Saharan Africa that feeds almost entirely on ants and termites. Its name comes from Afrikaans words meaning \"earth pig,\" though it is not a pig. It is the only living species in its order, Tubulidentata.",
  },
  {
    question: "What do aardvarks eat?",
    answer:
      "Aardvarks are specialised insectivores, eating mainly ants and termites. They use powerful claws to break open nests and a long, sticky tongue to collect the insects, locating prey largely by smell and hearing as they forage at night.",
  },
  {
    question: "Why are aardvark burrows important?",
    answer:
      "Aardvarks are prolific diggers, excavating extensive burrows for shelter and breeding. Abandoned aardvark burrows are used by many other animals — including warthogs, hyenas, birds, and reptiles — which makes the aardvark an important provider of shelter in its ecosystem.",
  },
  {
    question: "Are aardvarks related to anteaters?",
    answer:
      "No, not closely. Although aardvarks, anteaters, and pangolins all eat ants and termites and share some similar features, these are the result of similar lifestyles rather than close relationship. The aardvark belongs to its own distinct order and lineage.",
  },
];

export default function AardvarkPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Aardvark", url: "https://faunahub.com/animals/aardvark" },
    ]),
    articleSchema({
      title: "Aardvark — Profile, Habitat, Diet & Behavior",
      description:
        "Explore the aardvark (Orycteropus afer): a nocturnal, burrowing African mammal that feeds on ants and termites and is the sole living member of its own order.",
      path: "/animals/aardvark",
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
              { label: "Aardvark" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Aardvark <span className="italic font-normal text-[#5E6B63]">(Orycteropus afer)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Insectivore</span>{" "}
                <span className="tag ml-1">Burrower</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The aardvark (<em>Orycteropus afer</em>) is a distinctive nocturnal mammal
                of sub-Saharan Africa, instantly recognisable by its arched back, long
                snout, large rabbit-like ears, and powerful digging limbs. It feeds almost
                entirely on ants and termites and is the only living member of its own
                mammal order, Tubulidentata.
              </p>
              <p>
                Rarely seen because of its nocturnal, solitary habits, the aardvark is
                nonetheless an ecologically important animal: its burrows provide shelter
                for a wide range of other species.
              </p>
              <p>
                <strong>Conservation note:</strong> the aardvark is widely distributed
                across much of sub-Saharan Africa and has generally been assessed in a
                lower category of concern, but verify current status at iucnredlist.org
                before relying on it.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Orycteropus afer
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Tubulidentata"],
                      ["Family", "Orycteropodidae"],
                      ["Genus", "Orycteropus"],
                      ["Species", "O. afer"],
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
                The aardvark is the sole living species of the order Tubulidentata, named
                for the unusual tube-like structure of its teeth. It has no close living
                relatives among other ant- and termite-eating mammals.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Aardvarks occur across much of sub-Saharan Africa in habitats ranging from
                savanna and grassland to woodland and scrub. Their distribution is shaped
                largely by the availability of ants and termites and by soil suitable for
                digging their extensive burrows.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Aardvarks are specialised insectivores, feeding chiefly on ants and termites.
                They rip open nests and mounds with strong claws and gather insects with a
                long, sticky tongue, relying on acute smell and hearing to find colonies in
                the dark. They also eat a particular wild fruit sometimes called the
                &ldquo;aardvark cucumber.&rdquo;
              </p>

              <h2>Behavior &amp; Burrowing</h2>
              <p>
                Aardvarks are nocturnal and largely solitary, sheltering in burrows by day
                and emerging at night to forage over considerable distances. They are
                formidable diggers, capable of excavating quickly into hard ground. Their
                burrows, once abandoned, become important refuges for many other animals.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                The aardvark has a stocky, arched body with sparse hair over thick skin, a
                long tubular snout, long upright ears, a muscular tail, and strong limbs
                ending in spade-like claws. Its unusual mix of features — pig-like body,
                rabbit-like ears, and a long snout — makes it look like no other animal.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Aardvarks are widespread but can be affected by habitat change and other
                local pressures, and they are sensitive to anything that reduces their
                insect prey. Their role as burrow-builders links their wellbeing to that of
                many other species. Consult authoritative sources for current status.
              </p>

              <AnimalGallery images={GALLERY} commonName="Aardvark" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Aardvark" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.aardvark}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Aardvark profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Orycteropus afer"],
                    ["Order", "Tubulidentata (only living species)"],
                    ["Class", "Mammalia"],
                    ["Family", "Orycteropodidae"],
                    ["Diet", "Ants & termites (insectivore)"],
                    ["Activity", "Nocturnal"],
                    ["Notable for", "Powerful digging; burrows"],
                    ["Social structure", "Largely solitary"],
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
                  { label: "Pangolin Profile", href: "/animals/pangolin", description: "Another ant- and termite-eater (unrelated)" },
                  { label: "Armadillo Profile", href: "/animals/armadillo", description: "Burrowing insectivore of the Americas" },
                  { label: "Warthog Profile", href: "/animals/warthog", description: "Often uses abandoned aardvark burrows" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
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
