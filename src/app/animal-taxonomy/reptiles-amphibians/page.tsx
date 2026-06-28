import type { Metadata } from "next";
import Link from "next/link";
import AnimalHeroImage from "@/components/AnimalHeroImage";
import RelatedLinks from "@/components/RelatedLinks";
import { getAnimalImage, getAnimalImageAbsoluteUrl } from "@/lib/images/animal-images";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  SRC_REPTILE_DATABASE,
  SRC_AMPHIBIAWEB,
  SRC_ADW,
  SRC_IUCN,
  SRC_BRITANNICA_ANIMALS,
  SRC_SMITHSONIAN_ZOO,
} from "@/lib/educational/animal-sources";

const PATH = "/animal-taxonomy/reptiles-amphibians";
const TITLE =
  "Reptiles & Amphibians: Snakes, Lizards, Turtles, Crocodilians, Frogs & Salamanders";
const DESC =
  "Reptiles and amphibians are different animal groups. Explore representative snakes, lizards, turtles, crocodilians, and tuatara alongside frogs, salamanders, and caecilians — with cautious, source-backed notes.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  ogImage: getAnimalImageAbsoluteUrl("green-sea-turtle") ?? undefined,
});

type Card = { label: string; href: string; desc: string; isNew?: boolean };
type Group = { key: string; title: string; blurb: string; cards: Card[] };

const REPTILE_GROUPS: Group[] = [
  {
    key: "snakes",
    title: "Snakes",
    blurb:
      "Legless, scaled reptiles. Most are harmless to people; some are venomous. Venomous does not mean aggressive — bites are typically defensive.",
    cards: [
      { label: "Snake", href: "/animals/snake", desc: "Suborder Serpentes — a group-level overview." },
      { label: "Saw-scaled Viper", href: "/animals/saw-scaled-viper", desc: "Echis carinatus — a small venomous viper of dry regions.", isNew: true },
      { label: "Coral Snake", href: "/animals/coral-snake", desc: "Micrurus & Micruroides — banded, secretive elapids.", isNew: true },
      { label: "Garter Snake", href: "/animals/garter-snake", desc: "Thamnophis — common, harmless North American snakes.", isNew: true },
      { label: "Burmese Python", href: "/animals/burmese-python", desc: "Python bivittatus — a giant non-venomous constrictor.", isNew: true },
      { label: "King Cobra", href: "/animals/king-cobra", desc: "The longest venomous snake." },
      { label: "Reticulated Python", href: "/animals/reticulated-python", desc: "Among the longest snakes." },
      { label: "Rattlesnake", href: "/animals/rattlesnake", desc: "New World pit vipers with a warning rattle." },
    ],
  },
  {
    key: "lizards",
    title: "Lizards",
    blurb:
      "The most diverse reptile group — from tiny geckos to the giant Komodo dragon. Most are harmless; only a few are venomous.",
    cards: [
      { label: "Green Iguana", href: "/animals/green-iguana", desc: "Iguana iguana — a large, mostly herbivorous tropical lizard.", isNew: true },
      { label: "Komodo Dragon", href: "/animals/komodo-dragon", desc: "The largest living lizard." },
      { label: "Gila Monster", href: "/animals/gila-monster", desc: "One of the few venomous lizards." },
      { label: "Chameleon", href: "/animals/chameleon", desc: "Colour-changing, independently-moving eyes." },
      { label: "Gecko", href: "/animals/gecko", desc: "Often with adhesive toe pads." },
      { label: "Marine Iguana", href: "/animals/marine-iguana", desc: "The only sea-foraging lizard." },
    ],
  },
  {
    key: "turtles",
    title: "Turtles & tortoises",
    blurb:
      "Shelled reptiles. Tortoises are land-dwelling turtles, but not all turtles are tortoises; sea turtles are fully marine.",
    cards: [
      { label: "Leatherback Sea Turtle", href: "/animals/leatherback-sea-turtle", desc: "Dermochelys coriacea — the largest living turtle.", isNew: true },
      { label: "Green Sea Turtle", href: "/animals/green-sea-turtle", desc: "Chelonia mydas — a largely herbivorous marine turtle.", isNew: true },
      { label: "Aldabra Giant Tortoise", href: "/animals/aldabra-giant-tortoise", desc: "Aldabrachelys gigantea — a Seychelles giant.", isNew: true },
      { label: "Box Turtle", href: "/animals/box-turtle", desc: "Terrapene — small turtles with a hinged shell.", isNew: true },
      { label: "Snapping Turtle", href: "/animals/snapping-turtle", desc: "Powerful freshwater turtles." },
      { label: "Galapagos Tortoise", href: "/animals/galapagos-tortoise", desc: "Iconic giant tortoises." },
    ],
  },
  {
    key: "crocodilians",
    title: "Crocodilians",
    blurb:
      "Large semi-aquatic predators — crocodiles, alligators, caimans, and gharials. Ancient archosaurs, closer kin to birds than to other reptiles.",
    cards: [
      { label: "Crocodile", href: "/animals/crocodile", desc: "Family Crocodylidae." },
      { label: "American Alligator", href: "/animals/american-alligator", desc: "A conservation success story." },
      { label: "Caiman", href: "/animals/caiman", desc: "Smaller New World crocodilians." },
      { label: "Gharial", href: "/animals/gharial", desc: "A slender, fish-eating crocodilian." },
      { label: "Saltwater Crocodile", href: "/animals/saltwater-crocodile", desc: "The largest living reptile." },
    ],
  },
  {
    key: "tuatara",
    title: "Tuatara",
    blurb:
      "Not a lizard. The tuatara is the sole survivor of an ancient reptile lineage (Rhynchocephalia), found only in New Zealand.",
    cards: [
      { label: "Tuatara", href: "/animals/tuatara", desc: "Sphenodon punctatus — a living link to the age of dinosaurs." },
    ],
  },
];

const AMPHIBIAN_GROUPS: Group[] = [
  {
    key: "frogs",
    title: "Frogs & toads",
    blurb:
      "Tailless amphibians (order Anura). Some have toxic skin and are poisonous if handled or eaten — but poisonous is not the same as venomous.",
    cards: [
      { label: "Red-eyed Tree Frog", href: "/animals/red-eyed-tree-frog", desc: "Agalychnis callidryas — an iconic rainforest frog.", isNew: true },
      { label: "Frog", href: "/animals/frog", desc: "Order Anura — a group-level overview." },
      { label: "Toad", href: "/animals/toad", desc: "Warty-skinned frogs." },
      { label: "Poison Dart Frog", href: "/animals/poison-dart-frog", desc: "Vivid, toxic rainforest frogs." },
      { label: "Glass Frog", href: "/animals/glass-frog", desc: "Translucent-bellied rainforest frogs." },
      { label: "Bullfrog", href: "/animals/bullfrog", desc: "Large, loud-calling frogs." },
    ],
  },
  {
    key: "salamanders",
    title: "Salamanders & newts",
    blurb:
      "Tailed amphibians (order Urodela). Newts are a type of salamander; hellbenders are giant aquatic salamanders, not lizards.",
    cards: [
      { label: "Salamander", href: "/animals/salamander", desc: "Order Urodela — a group-level overview." },
      { label: "Newt", href: "/animals/newt", desc: "Semi-aquatic salamanders." },
      { label: "Fire Salamander", href: "/animals/fire-salamander", desc: "Striking black-and-yellow European amphibian." },
      { label: "Axolotl", href: "/animals/axolotl", desc: "A salamander that stays aquatic for life." },
      { label: "Hellbender", href: "/animals/hellbender", desc: "A giant North American aquatic salamander." },
    ],
  },
  {
    key: "caecilians",
    title: "Caecilians",
    blurb:
      "Limbless, mostly burrowing amphibians (order Gymnophiona) — neither worms nor snakes, despite their shape.",
    cards: [
      { label: "Caecilian", href: "/animals/caecilian", desc: "Order Gymnophiona — limbless, soil-dwelling amphibians.", isNew: true },
    ],
  },
];

const HUB_FAQ = [
  {
    question: "What is the difference between a reptile and an amphibian?",
    answer:
      "They are different groups of animals. Reptiles (snakes, lizards, turtles, crocodilians, and the tuatara) have dry, scaly skin and lay shelled eggs on land or give live birth, and they do not have an aquatic larval stage. Amphibians (frogs and toads, salamanders and newts, and caecilians) usually have moist, permeable skin, often depend on water or damp habitats, and many begin life as aquatic larvae such as tadpoles. Amphibians are not reptiles.",
  },
  {
    question: "Does venomous mean dangerous or aggressive?",
    answer:
      "No. Venomous means an animal can inject venom, usually for hunting and defence; it does not mean the animal is aggressive. Most venomous snakes and lizards avoid people and bite only defensively when cornered or handled. Risk varies by species, situation, and location. FaunaHub does not provide bite or venom first aid — any such concern should go to qualified medical professionals or local health authorities.",
  },
  {
    question: "What is the difference between venomous and poisonous?",
    answer:
      "Venomous animals inject toxins (for example, a snake's bite). Poisonous animals are harmful if they are touched or eaten — many toxic frogs and toads are poisonous in this sense, not venomous. The two words are often confused, but they describe different things.",
  },
  {
    question: "Is this a complete list of reptiles and amphibians?",
    answer:
      "No. There are thousands of reptile and amphibian species. This hub presents representative, source-backed examples that have a FaunaHub profile, grouped by major type. It is not a complete global list, and ranges and conservation status should be checked against current authoritative sources.",
  },
];

const SOURCES = [
  SRC_REPTILE_DATABASE,
  SRC_AMPHIBIAWEB,
  SRC_ADW,
  SRC_IUCN,
  SRC_BRITANNICA_ANIMALS,
  SRC_SMITHSONIAN_ZOO,
];

function GroupSection({ group }: { group: Group }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-[#17211B] mb-1">{group.title}</h3>
      <p className="text-sm text-[#5E6B63] leading-relaxed mb-4 max-w-3xl">{group.blurb}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
        {group.cards.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="card p-4 h-full flex flex-col gap-1.5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
            >
              <span className="flex items-center gap-2">
                <span className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                  {c.label}
                </span>
                {c.isNew && (
                  <span className="text-[10px] uppercase tracking-wide text-[#7BAA35] font-semibold">New</span>
                )}
              </span>
              <span className="text-sm text-[#5E6B63] leading-snug">{c.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ReptilesAmphibiansHubPage() {
  const heroImage = getAnimalImage("green-sea-turtle");
  const allCards = [...REPTILE_GROUPS, ...AMPHIBIAN_GROUPS].flatMap((g) => g.cards);
  const itemList = allCards.map((c, i) => ({
    name: c.label,
    url: `https://faunahub.com${c.href}`,
    position: i + 1,
  }));
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Taxonomy", url: "https://faunahub.com/animal-taxonomy" },
      { name: "Reptiles & Amphibians", url: `https://faunahub.com${PATH}` },
    ]),
    itemListSchema(itemList),
    faqSchema(HUB_FAQ),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <header className="bg-gradient-to-b from-[#EFF4E0] via-[#f7faf7] to-white border-b border-[#DDE6DD] py-12 sm:py-16">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex flex-wrap gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/animal-taxonomy" className="hover:text-[#063F2A] hover:no-underline">Animal Taxonomy</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Reptiles &amp; Amphibians</span>
            </nav>
            <div className="max-w-3xl">
              <span className="tag mb-4 inline-block">Taxonomy guide</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17211B] mb-4 leading-tight">
                Reptiles and amphibians
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Reptiles and amphibians are two <strong>different</strong> groups of animals that are
                often grouped together in everyday use. This guide introduces representative snakes,
                lizards, turtles, crocodilians, and the tuatara, alongside frogs, salamanders, and
                caecilians — with calm, source-backed notes.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-12">
          <aside
            role="note"
            aria-label="About this guide"
            className="card p-5 sm:p-6 mb-12 border-l-4 border-l-[#7BAA35]"
          >
            <h2 className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2">
              About this guide
            </h2>
            <ul className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed space-y-1.5 list-disc list-outside pl-5">
              <li>Reptiles and amphibians are different groups — amphibians are not reptiles.</li>
              <li>Venomous does not mean aggressive, and venomous (injected) is not the same as poisonous (harmful if touched or eaten).</li>
              <li>Dangerous species are described calmly; conservation status varies by species and region.</li>
              <li>This is representative coverage, not a complete global list, and ranges are source-backed on each profile.</li>
              <li>This is an educational taxonomy guide — it contains no pet-keeping, handling, bite-treatment, or pest-control advice.</li>
            </ul>
          </aside>

          {heroImage && (
            <div className="max-w-2xl mb-12">
              <AnimalHeroImage image={heroImage} />
            </div>
          )}

          <section aria-labelledby="reptiles-heading" className="mb-12">
            <div className="mb-6 max-w-3xl">
              <h2 id="reptiles-heading" className="section-title">Reptiles</h2>
              <p className="section-subtitle mb-0">
                Scaled vertebrates with dry skin: snakes, lizards, turtles and tortoises, crocodilians,
                and the tuatara.
              </p>
            </div>
            {REPTILE_GROUPS.map((g) => (
              <GroupSection key={g.key} group={g} />
            ))}
          </section>

          <section aria-labelledby="amphibians-heading" className="mb-12">
            <div className="mb-6 max-w-3xl">
              <h2 id="amphibians-heading" className="section-title">Amphibians</h2>
              <p className="section-subtitle mb-0">
                Usually moist-skinned vertebrates, many tied to water for part of their lives: frogs and
                toads, salamanders and newts, and caecilians.
              </p>
            </div>
            {AMPHIBIAN_GROUPS.map((g) => (
              <GroupSection key={g.key} group={g} />
            ))}
          </section>

          <section aria-labelledby="safety-heading" className="mb-12 max-w-3xl">
            <h2 id="safety-heading" className="section-title">Safety and human interaction</h2>
            <div className="card p-5 sm:p-6 border-l-4 border-l-[#7BAA35] space-y-4 text-[#2C3A2F] leading-relaxed">
              <p>
                Most reptiles and amphibians are harmless to people and avoid contact. Some snakes and a
                few lizards are venomous, and some frogs, toads, and salamanders have toxic skin, but
                these animals are not aggressive and generally use their defences when threatened or
                handled. Risk varies by species, situation, and location.
              </p>
              <p>
                FaunaHub does not provide snakebite or venom first aid, medical guidance, handling or
                capture instructions, pet-keeping or terrarium advice, or pest-control and invasive-species
                removal instructions. Concerns about a bite, sting, or toxin should go to qualified medical
                professionals or local health authorities, and wildlife-conflict or invasive-species
                questions to local wildlife authorities or qualified professionals.
              </p>
            </div>
          </section>

          <section aria-labelledby="faq-heading" className="mb-12 max-w-3xl">
            <h2 id="faq-heading" className="section-title">Frequently asked questions</h2>
            <dl className="space-y-4">
              {HUB_FAQ.map((f) => (
                <div key={f.question} className="card p-5">
                  <dt className="font-semibold text-[#17211B] mb-1.5">{f.question}</dt>
                  <dd className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="sources-heading" className="mb-12 max-w-3xl">
            <h2 id="sources-heading" className="section-title">Sources &amp; methodology</h2>
            <div className="space-y-4 text-[#2C3A2F] leading-relaxed">
              <p>
                This hub presents a representative, curated selection of reptiles and amphibians that have
                a FaunaHub profile, grouped by major type. Taxonomy is described cautiously and ranges and
                conservation status are attributed on each profile. The references below are authoritative,
                reachable starting points.
              </p>
              <ul className="space-y-2 list-disc list-outside pl-5">
                {SOURCES.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-medium">
                      {s.label}
                    </a>
                    {s.note && <span className="text-sm text-[#5E6B63]"> — {s.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <RelatedLinks
            title="Explore more"
            links={[
              { label: "Reptiles & Amphibians (Encyclopedia)", href: "/animal-encyclopedia/reptiles" },
              { label: "Vertebrates", href: "/animal-taxonomy/vertebrates" },
              { label: "Animal Taxonomy", href: "/animal-taxonomy" },
              { label: "Wildlife & Biodiversity", href: "/wildlife" },
              { label: "Endangered Animals", href: "/endangered-animals" },
              { label: "Fauna by Continent", href: "/fauna/continents" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
