import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import SourceNote from "@/components/SourceNote";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import { buildArticleMetadata } from "@/lib/metadata";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildArticleMetadata({
  title: "Wolf — Profile, Habitat, Diet & Behavior",
  description:
    "Canis lupus: wolf habitat and range, pack social structure, hunting behaviour, the relationship with domestic dogs, and conservation context.",
  path: "/animals/wolf",
  publishedTime: "2025-05-07",
  modifiedTime: "2026-05-18",
});

const faqItems = [
  {
    question: "Are wolves dangerous to humans?",
    answer:
      "Unprovoked attacks on healthy adult humans by wild wolves are rare. Wolves are naturally wary of people and typically avoid direct contact. Habituated wolves — those that have lost natural wariness, often due to supplemental feeding by humans — pose a higher risk. As with all large predators, caution and respect for their space is appropriate.",
  },
  {
    question: "How large is a wolf pack?",
    answer:
      "Pack size varies considerably. Many packs consist of a breeding pair and their offspring from one or more years, commonly ranging from around 5 to 10 individuals. In areas with very large prey such as bison, packs can be larger. Where prey is scarce or hunting pressure high, pack sizes tend to be smaller.",
  },
  {
    question: "What is the relationship between wolves and dogs?",
    answer:
      "Domestic dogs (Canis lupus familiaris) are a subspecies of the grey wolf, descended from a now-extinct wolf population domesticated thousands of years ago. Genetic and archaeological evidence places domestication at least 15,000 years ago, possibly earlier. Despite shared ancestry, dogs and wolves have diverged significantly in behaviour, morphology, and physiology.",
  },
  {
    question: "Where do wolves live?",
    answer:
      "Grey wolves historically occupied most of the Northern Hemisphere. Today they are found across large parts of North America (Canada and portions of the United States), Russia, and parts of Europe and Central Asia. They occupy tundra, boreal forest, temperate forest, grassland, and mountainous terrain.",
  },
];

export default function WolfPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Wolf", url: "https://faunahub.com/animals/wolf" },
    ]),
    articleSchema({
      title: "Wolf — Profile, Habitat, Diet & Behavior",
      description:
        "Canis lupus: wolf habitat and range, pack social structure, hunting behaviour, the relationship with domestic dogs, and conservation context.",
      path: "/animals/wolf",
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
              { label: "Wolf" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Wolf <span className="italic font-normal text-[#5E6B63]">(Canis lupus)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Apex Predator</span>
              </p>

              <h2>Overview</h2>
              <p>
                The grey wolf (<em>Canis lupus</em>) is the largest wild member of the family Canidae
                and one of the most ecologically significant predators in the Northern Hemisphere.
                Wolves are keystone predators whose presence or absence can substantially reshape
                the structure and dynamics of the ecosystems they inhabit — a phenomenon documented
                in places such as Yellowstone National Park following their reintroduction in the 1990s.
              </p>
              <p>
                Wolves are also the direct ancestor of the domestic dog (<em>Canis lupus familiaris</em>),
                making them uniquely significant to human civilisation.
              </p>
              <p>
                <strong>Conservation note:</strong> The grey wolf is currently listed as{" "}
                <strong>Least Concern</strong> on the IUCN Red List at the species level (verify
                current status at iucnredlist.org before publication). However, regional and subspecific
                status varies widely; some populations are critically endangered or locally extinct.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification of Canis lupus
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Carnivora"],
                      ["Family", "Canidae"],
                      ["Genus", "Canis"],
                      ["Species", "C. lupus"],
                      ["Common name", "Grey wolf / Gray wolf"],
                    ].map(([rank, taxon], i) => (
                      <tr key={rank} className={i % 2 === 0 ? "bg-white" : "bg-[#F7F8F3]"}>
                        <td className="font-medium text-[#17211B] w-1/3">{rank}</td>
                        <td className="italic">{taxon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>Habitat & Range</h2>
              <p>
                Wolves are among the most habitat-tolerant of large carnivores. They inhabit arctic
                tundra, boreal conifer forest, temperate deciduous forest, grassland, shrubland,
                mountainous terrain, and semi-desert. The primary ecological requirement is a
                sufficient prey base rather than a specific vegetation type.
              </p>
              <p>
                Legal protection and formal reintroduction programmes — notably in the Greater
                Yellowstone area — have allowed populations to recover in several regions. Wolves
                have naturally recolonised parts of Western Europe from remnant Italian and Iberian
                populations.
              </p>

              <h2>Diet & Hunting</h2>
              <p>
                Wolves are hypercarnivores. Primary prey in North America includes deer, elk, moose,
                caribou, and bison. In Europe and Asia, prey may include red deer, roe deer, and
                wild boar. Pack hunting allows wolves to pursue and bring down prey substantially
                larger than any individual wolf.
              </p>
              <p>
                This selective predation on vulnerable individuals can have positive effects on prey
                population health over time. Wolves also scavenge and will consume smaller prey and
                berries seasonally.
              </p>

              <h2>Pack Behavior & Social Structure</h2>
              <p>
                The wolf pack is fundamentally a family unit: a breeding pair and their offspring
                from one or more years, typically ranging from 5 to 10 individuals. Young wolves
                usually disperse at one to three years of age to seek mates and establish new territories.
              </p>
              <p>
                Communication includes howling, body language, facial expressions, and scent marking.
                Howling reinforces social bonds, coordinates group activities, and communicates
                territorial occupancy. Territory sizes range from under 100 km² in prey-rich areas
                to thousands of square kilometres in sparse environments.
              </p>

              <h2>Appearance & Recognition</h2>
              <p>
                Grey wolves are long-legged, lean canids with a <strong>deep but narrow
                chest</strong>, a relatively large head with long muzzle, and a thick,
                bushy tail typically carried straight back or hanging — not curled over the
                back as in many domestic dog breeds. Paws are noticeably large relative to
                body size, an adaptation for moving on snow and uneven terrain. Eyes are
                most commonly yellow to amber in adults; blue eyes are unusual in pure wild
                wolves and more typical of certain dog breeds and wolf-dog hybrids.
              </p>
              <p>
                Coat colour and density vary strongly with region and subspecies. Arctic
                wolves of the high north are largely white; Eurasian and northern North
                American wolves typically show a mix of greys, browns, blacks and creams
                arranged in an &quot;agouti&quot; pattern; some North American populations
                include high frequencies of black or near-black individuals. Subspecific
                size also varies — northern wolves tend to be heavier and larger than
                southern populations. Field identification can be complicated by large
                wolf-like dog breeds (e.g. Northern Inuit, Tamaskan) and by wolf-dog
                hybrids; behaviour and ranging context are typically more reliable than
                colour alone.
              </p>

              <h2>Wolves and Dogs</h2>
              <p>
                Domestication produced profound changes: dogs became behaviourally, morphologically,
                and physiologically distinct from wolves through selection pressures tied to
                coexistence with humans. Key differences include dogs&apos; enhanced ability to read
                and respond to human social cues, reduced fear responses, and changes in play
                behaviour. Wolves, even when hand-raised, retain fundamentally wild behavioural traits.
              </p>
              <p className="mt-4">
                <Link href="/compare/wolf-vs-dog" className="btn-secondary inline-flex text-sm">
                  Wolf vs Dog — Full Comparison →
                </Link>
              </p>

              <h2>Human Interaction & Conservation</h2>
              <p>
                Wolves have one of the most complex relationships with humans of any wild animal.
                Livestock depredation is the primary source of conflict. Non-lethal deterrents —
                livestock guardian dogs, electrified fencing, and night penning — can reduce
                predation risk. Wolf management remains one of the most politically contested areas
                in wildlife conservation.
              </p>

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Wolves" />
              </div>
            </article>

            <aside aria-label="Wolf profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Scientific name", "Canis lupus"],
                    ["Family", "Canidae"],
                    ["Class", "Mammalia"],
                    ["Typical weight", "20–80 kg (varies by subspecies)"],
                    ["Head-body length", "~100–160 cm"],
                    ["Lifespan (wild)", "~6–8 years"],
                    ["Social structure", "Pack (family group)"],
                    ["Primary habitat", "Forest, tundra, grassland, mountain"],
                    ["Range", "North America, Europe, Russia, Central Asia"],
                    ["IUCN Status", "Least Concern (species-level — verify before publication)"],
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
                  { label: "Fox Profile", href: "/animals/fox", description: "Vulpes vulpes — opportunistic canid" },
                  { label: "Lion Profile", href: "/animals/lion", description: "Panthera leo — pride predator" },
                  { label: "Bear Profile", href: "/animals/bear", description: "Family Ursidae — overview" },
                  { label: "Wolf vs Dog", href: "/compare/wolf-vs-dog", description: "Full comparison" },
                  { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
                ]}
              />
              <SourceNote pending />
              <LastUpdated date="2026-05-18" />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
