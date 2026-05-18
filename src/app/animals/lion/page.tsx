import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import ComparisonTable from "@/components/ComparisonTable";
import SourcesSection from "@/components/educational/SourcesSection";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { buildArticleMetadata } from "@/lib/metadata";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildArticleMetadata({
  title: "Lion — Profile, Habitat, Diet & Behavior",
  description:
    "Explore Panthera leo: where lions live across Africa and India, how pride social structures work, what lions hunt, and key conservation context.",
  path: "/animals/lion",
  publishedTime: "2025-05-07",
  modifiedTime: "2026-05-18",
});

const faqItems = [
  {
    question: "Are lions social animals?",
    answer:
      "Yes — lions are the only cats that live in consistent social groups called prides. A typical pride consists of related adult females, their offspring, and a small number of adult males. Females do the majority of cooperative hunting, while males primarily defend the pride's territory. Lone males (nomads) also exist, typically younger males that have left or been expelled from a pride.",
  },
  {
    question: "Where do lions live?",
    answer:
      "The vast majority of wild lions live in sub-Saharan Africa, predominantly in savanna grasslands, open woodlands, and scrub habitats. A small, critically endangered population of Asiatic lions (Panthera leo persica) survives in the Gir Forest National Park in Gujarat, India. Lions require large territories with sufficient prey and water.",
  },
  {
    question: "What do lions eat?",
    answer:
      "Lions are obligate carnivores and apex predators. Their primary prey in most African habitats includes wildebeest, zebra, buffalo, warthog, impala, and other medium-to-large ungulates. Lions are opportunistic and will scavenge when the chance arises. Females conduct most of the cooperative hunts; males often feed first after a kill.",
  },
  {
    question: "How fast can a lion run?",
    answer:
      "Lions are capable of short bursts estimated at roughly 50–80 km/h over very short distances. They are not built for prolonged chases and rely on stealth, coordinated group tactics, and ambush to close the distance before the final sprint. Sustained high-speed pursuit is generally limited to a few hundred metres.",
  },
];

export default function LionPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Lion", url: "https://faunahub.com/animals/lion" },
    ]),
    articleSchema({
      title: "Lion — Profile, Habitat, Diet & Behavior",
      description:
        "Explore Panthera leo: where lions live across Africa and India, how pride social structures work, what lions hunt, and key conservation context.",
      path: "/animals/lion",
      datePublished: "2025-05-07",
      dateModified: "2026-05-18",
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
              { label: "Lion" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Lion <span className="italic font-normal text-[#5E6B63]">(Panthera leo)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Apex Predator</span>
              </p>

              <h2>Overview</h2>
              <p>
                The lion (<em>Panthera leo</em>) is one of the largest wild felids and the only
                consistently social member of the cat family. Lions are apex predators whose presence
                plays a critical role in regulating prey populations and maintaining ecological balance
                in the habitats they occupy.
              </p>
              <p>
                Wild lions are found predominantly in sub-Saharan Africa, with a small isolated Asiatic
                lion population persisting in western India. Historical records indicate that lions once
                ranged across much of Africa, the Middle East, and into South Asia and southeastern
                Europe, but their range has contracted dramatically over the past few centuries due to
                habitat loss, prey depletion, and conflict with humans.
              </p>
              <p>
                <strong>Conservation note:</strong> The lion is currently listed as{" "}
                <strong>Vulnerable</strong> on the IUCN Red List (as of the most recent assessment
                available at time of writing — verify current status at iucnredlist.org before
                publication). The Asiatic lion subspecies (<em>P. l. persica</em>) carries a separate,
                more critical designation.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Panthera leo
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Carnivora"],
                      ["Family", "Felidae"],
                      ["Genus", "Panthera"],
                      ["Species", "P. leo"],
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
                Two subspecies are widely recognised: the African lion (<em>P. l. leo</em>) and the
                Asiatic lion (<em>P. l. persica</em>). Subspecific taxonomy is subject to ongoing
                revision; readers should consult current peer-reviewed literature.
              </p>

              <h2>Habitat & Range</h2>
              <p>
                African lions occupy savanna grasslands, open woodlands, thornbush, and scrub. Dense
                forest is generally avoided. Key population strongholds include the Serengeti-Mara
                ecosystem, Kruger National Park, Hwange National Park, and the Okavango-Chobe region.
              </p>
              <p>
                The Asiatic lion population is confined to the Gir Forest National Park and Wildlife
                Sanctuary in Gujarat, India — the sole wild refuge for this subspecies.
              </p>

              <h2>Diet & Hunting</h2>
              <p>
                Lions are obligate carnivores. Primary prey includes wildebeest, plains zebra, Cape
                buffalo, warthog, and various antelope species. Prey selection varies by habitat,
                season, and pride composition.
              </p>
              <p>
                Hunting is predominantly a cooperative activity carried out by adult females. Males,
                when present, often displace females at a kill and feed first despite not having
                participated in the hunt. Lions also scavenge and will steal kills from other
                predators such as hyenas and cheetahs.
              </p>

              <h2>Social Behavior</h2>
              <p>
                Lions are unique among wild felids in their formation of social groups called{" "}
                <strong>prides</strong>. A typical pride consists of a core of related adult females
                and their dependent cubs, plus one or more resident males. Pride sizes range from
                three or four individuals to twenty or more.
              </p>
              <p>
                Communication includes a variety of vocalisations — the most iconic being the roar,
                which can carry several kilometres and advertises presence, reinforces social bonds,
                and warns off rivals.
              </p>

              <h2>Appearance & Recognition</h2>
              <p>
                Lions are large, broadly built cats with a uniform <strong>tawny to
                sand-coloured coat</strong>, a paler belly, and a black-tufted tail tip
                that is distinctive in silhouette. Adult males typically carry a{" "}
                <strong>mane</strong> around the head, neck and shoulders that ranges from
                blond through ruddy to nearly black; mane size and colour vary with age,
                genetics, health, and region — and some males (well-documented in parts of
                Tsavo, Kenya) develop very small manes or none at all. Females lack a mane,
                are lighter and more lithe, and do the majority of cooperative hunting.
              </p>
              <p>
                Cubs are born with faint rosette-like markings that usually fade as they
                mature; some traces can remain into adulthood on the legs and belly. At a
                distance, lions are typically identified by the combination of group living
                (no other African cat is consistently social), the tail tuft, and — in
                males — the mane. The much smaller, isolated Asiatic lion in India
                (<em>P. l. persica</em>) is broadly similar in colour but tends to be
                slightly smaller, with a distinct longitudinal belly fold often noted by
                field observers.
              </p>

              <h2>Lion vs Tiger — Brief Comparison</h2>
              <p>
                Lions and tigers are both members of genus <em>Panthera</em>. Lions are the only
                social felid; tigers are solitary. Lions inhabit open African habitats; tigers occupy
                forests and grasslands across Asia.
              </p>
              <ComparisonTable
                labelA="Lion"
                labelB="Tiger"
                caption="High-level comparison — see the full page for detailed analysis"
                rows={[
                  { attribute: "Scientific name", a: "Panthera leo", b: "Panthera tigris" },
                  { attribute: "Typical habitat", a: "Savanna, open woodland", b: "Forest, grassland, mangrove" },
                  { attribute: "Social structure", a: "Pride (social)", b: "Solitary" },
                  { attribute: "Primary range", a: "Sub-Saharan Africa; Gir, India", b: "South & Southeast Asia; Russian Far East" },
                ]}
              />
              <p className="mt-4">
                <Link href="/compare/lion-vs-tiger" className="btn-secondary inline-flex text-sm">
                  Lion vs Tiger — Full Comparison →
                </Link>
              </p>

              <h2>Human Interaction & Conservation</h2>
              <p>
                Human-lion conflict — particularly livestock predation and retaliatory killing — is one
                of the primary threats to lions outside formally protected areas. Habitat loss, prey
                base depletion, and trophy hunting debates are additional pressures. Long-term lion
                conservation requires the maintenance of large, contiguous wild landscapes.
              </p>

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Lions" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.lion}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Lion profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Panthera leo"],
                    ["Family", "Felidae"],
                    ["Class", "Mammalia"],
                    ["Typical weight", "120–190 kg (male)"],
                    ["Head-body length", "~170–250 cm (male)"],
                    ["Lifespan (wild)", "~10–14 years"],
                    ["Social structure", "Pride"],
                    ["Primary habitat", "Savanna, open woodland"],
                    ["Range", "Sub-Saharan Africa; Gir Forest, India"],
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
                  { label: "Tiger Profile", href: "/animals/tiger", description: "Panthera tigris — largest living cat" },
                  { label: "Leopard Profile", href: "/animals/leopard", description: "Panthera pardus — most widely distributed big cat" },
                  { label: "Jaguar Profile", href: "/animals/jaguar", description: "Panthera onca — the only Panthera in the Americas" },
                  { label: "Cheetah Profile", href: "/animals/cheetah", description: "Fastest land animal" },
                  { label: "Lion vs Tiger", href: "/compare/lion-vs-tiger", description: "Full species comparison" },
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
              <LastUpdated date="2026-05-18" />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
