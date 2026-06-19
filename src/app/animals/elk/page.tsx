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

const HERO = getAnimalImage("elk");
const GALLERY = getAnimalGalleryImages("elk");

export const metadata: Metadata = buildArticleMetadata({
  title: "Elk (Wapiti) — Profile, Habitat, Diet & Behavior",
  description:
    "Explore the elk or wapiti (Cervus canadensis): one of the largest deer, famous for the bull's bugling call and massive antlers, across North America and parts of Asia.",
  path: "/animals/elk",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("elk"),
});

const faqItems = [
  {
    question: "Is an elk the same as a moose?",
    answer:
      "It depends on where you are. In North America, \"elk\" means the wapiti (Cervus canadensis), a large deer. In Europe, \"elk\" is the common name for the animal North Americans call a moose (Alces alces). This page covers the wapiti; see the separate moose profile for Alces alces.",
  },
  {
    question: "Why do bull elk bugle?",
    answer:
      "During the autumn breeding season (the rut), bull elk produce a loud, far-carrying call known as a bugle. Bugling advertises a bull's presence and fitness, helps gather and hold a group of females (a harem), and warns off rival males. It is one of the most distinctive sounds of North American wildlife.",
  },
  {
    question: "What do elk eat?",
    answer:
      "Elk are large herbivores that both graze and browse, feeding on grasses, forbs, shrubs, tree bark, and twigs depending on the season. They often move between higher summer range and lower winter range as food and snow conditions change.",
  },
  {
    question: "Do elk shed their antlers?",
    answer:
      "Yes. Like other deer, bull elk grow and shed a new set of antlers each year. Antlers are true bone, grow rapidly under a covering of velvet in spring and summer, are used in displays and contests during the rut, and are shed in late winter or spring.",
  },
];

export default function ElkPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Elk (Wapiti)", url: "https://faunahub.com/animals/elk" },
    ]),
    articleSchema({
      title: "Elk (Wapiti) — Profile, Habitat, Diet & Behavior",
      description:
        "Explore the elk or wapiti (Cervus canadensis): one of the largest deer, famous for the bull's bugling call and massive antlers, across North America and parts of Asia.",
      path: "/animals/elk",
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
              { label: "Elk (Wapiti)" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Elk / Wapiti <span className="italic font-normal text-[#5E6B63]">(Cervus canadensis)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Deer</span>{" "}
                <span className="tag ml-1">Grazer / browser</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                The elk, or wapiti (<em>Cervus canadensis</em>), is one of the largest
                members of the deer family, native to North America and parts of eastern
                Asia. Bulls carry large, branching antlers and, in the autumn rut, produce
                the iconic bugling call that echoes across mountain meadows and valleys.
              </p>
              <p>
                A note on names: in North America &ldquo;elk&rdquo; refers to this animal,
                while in Europe &ldquo;elk&rdquo; is the name for the moose
                (<em>Alces alces</em>). To avoid confusion the North American species is
                often called the wapiti.
              </p>
              <p>
                <strong>Conservation note:</strong> elk are widespread and abundant across
                much of their range, supported by active wildlife management, though some
                regional populations and subspecies receive particular attention. Verify
                current status at iucnredlist.org.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Cervus canadensis
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Artiodactyla"],
                      ["Family", "Cervidae"],
                      ["Genus", "Cervus"],
                      ["Species", "C. canadensis"],
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
                Elk are members of Cervidae, the deer family. They are closely related to
                the red deer (<em>Cervus elaphus</em>) of Europe and Asia, and the exact
                division between the two has been revised as research has progressed.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Elk occupy a range of habitats including forest edges, mountain meadows,
                grasslands, and valley bottoms across western North America and parts of
                Asia, with reintroduced populations in other areas. Many populations move
                seasonally between higher summer range and lower, more sheltered winter
                range.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Elk are large herbivores that both graze and browse. Grasses and forbs are
                important in spring and summer, while shrubs, twigs, and bark feature more
                in winter. As ruminants, they digest fibrous plant material efficiently.
              </p>

              <h2>Behavior &amp; the Rut</h2>
              <p>
                Elk are social, often forming sizeable herds, with cows, calves, and young
                animals together and bulls more separate outside the breeding season. During
                the autumn rut, bulls bugle, display their antlers, and compete for groups
                of females, sometimes sparring with locked antlers. Calving occurs in late
                spring.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Elk are large deer with a tan to reddish-brown body, a darker neck and mane,
                and a pale rump patch. Mature bulls grow large, sweeping antlers each year.
                Their size — much larger than typical deer but smaller and differently
                proportioned than a moose — together with the rump patch and the bugling
                call makes them recognisable.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Elk are important for wildlife watching and are managed as game in many
                areas. Conservation considerations include habitat connectivity, seasonal
                migration routes, and coexistence with people near towns and roads. For
                current status and management context, consult authoritative sources.
              </p>

              <AnimalGallery images={GALLERY} commonName="Elk" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Elk (Wapiti)" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.elk}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Elk profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Cervus canadensis"],
                    ["Also called", "Wapiti"],
                    ["Family", "Cervidae (deer)"],
                    ["Class", "Mammalia"],
                    ["Antlers", "Bulls; regrown yearly"],
                    ["Diet", "Grazer & browser"],
                    ["Social structure", "Herds"],
                    ["Signature behaviour", "Autumn bugling (rut)"],
                    ["Range", "North America & parts of Asia"],
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
                  { label: "Moose Profile", href: "/animals/moose", description: "Called \"elk\" in Europe — Alces alces" },
                  { label: "Deer Profile", href: "/animals/deer", description: "The wider deer family" },
                  { label: "Bison Profile", href: "/animals/bison", description: "Another large North American herbivore" },
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
