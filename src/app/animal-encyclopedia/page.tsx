import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HubGrid from "@/components/HubGrid";
import RelatedLinks from "@/components/RelatedLinks";
import { getAnimalImage } from "@/lib/images/animal-images";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Animal Encyclopedia — Wildlife Profiles, Habitats & Facts",
  description:
    "In-depth animal profiles covering mammals, birds, reptiles, marine animals, and insects. Habitat, diet, behavior, and ecology explained.",
  path: "/animal-encyclopedia",
});

const categories = [
  {
    title: "Mammals",
    description: "Lions, wolves, elephants, bears — detailed profiles of land-dwelling mammals.",
    href: "/animal-encyclopedia/mammals",
    icon: "🦁",
  },
  {
    title: "Birds",
    description: "Eagles, owls, penguins — wild bird species profiles, habitats, and behavior.",
    href: "/animal-encyclopedia/birds",
    icon: "🦅",
  },
  {
    title: "Reptiles & Amphibians",
    description: "Crocodilians, lizards, snakes, turtles, frogs, and salamanders.",
    href: "/animal-encyclopedia/reptiles",
    icon: "🐊",
  },
  {
    title: "Marine Animals",
    description: "Sharks, dolphins, whales — ocean life from surface to deep sea.",
    href: "/animal-encyclopedia/marine-animals",
    icon: "🐳",
  },
  {
    title: "Fish",
    description: "Bettas, goldfish, tetras, clownfish, salmon — aquarium and ocean fish.",
    href: "/animal-encyclopedia/fish",
    icon: "🐟",
  },
  {
    title: "Insects & Invertebrates",
    description: "Bees, butterflies, ants, spiders — the most diverse animals on Earth.",
    href: "/animal-encyclopedia/insects",
    icon: "🦋",
  },
];

const allAnimalProfiles: { label: string; href: string; group: string }[] = [
  { label: "Lion", href: "/animals/lion", group: "Mammals" },
  { label: "Tiger", href: "/animals/tiger", group: "Mammals" },
  { label: "Leopard", href: "/animals/leopard", group: "Mammals" },
  { label: "Jaguar", href: "/animals/jaguar", group: "Mammals" },
  { label: "Cheetah", href: "/animals/cheetah", group: "Mammals" },
  { label: "Wolf", href: "/animals/wolf", group: "Mammals" },
  { label: "Fox", href: "/animals/fox", group: "Mammals" },
  { label: "Bear", href: "/animals/bear", group: "Mammals" },
  { label: "Panda", href: "/animals/panda", group: "Mammals" },
  { label: "Elephant", href: "/animals/elephant", group: "Mammals" },
  { label: "Giraffe", href: "/animals/giraffe", group: "Mammals" },
  { label: "Zebra", href: "/animals/zebra", group: "Mammals" },
  { label: "Gorilla", href: "/animals/gorilla", group: "Mammals" },
  { label: "Chimpanzee", href: "/animals/chimpanzee", group: "Mammals" },
  { label: "Kangaroo", href: "/animals/kangaroo", group: "Mammals" },
  { label: "Koala", href: "/animals/koala", group: "Mammals" },
  { label: "Horse", href: "/animals/horse", group: "Mammals" },
  { label: "Rabbit", href: "/animals/rabbit", group: "Mammals" },
  { label: "Guinea Pig", href: "/animals/guinea-pig", group: "Mammals" },
  { label: "Hamster", href: "/animals/hamster", group: "Mammals" },
  { label: "Deer", href: "/animals/deer", group: "Mammals" },
  { label: "Raccoon", href: "/animals/raccoon", group: "Mammals" },
  { label: "Otter", href: "/animals/otter", group: "Mammals" },
  { label: "Eagle", href: "/animals/eagle", group: "Birds" },
  { label: "Owl", href: "/animals/owl", group: "Birds" },
  { label: "Penguin", href: "/animals/penguin", group: "Birds" },
  { label: "Parrot", href: "/animals/parrot", group: "Birds" },
  { label: "Falcon", href: "/animals/falcon", group: "Birds" },
  { label: "Crocodile", href: "/animals/crocodile", group: "Reptiles & Amphibians" },
  { label: "Alligator", href: "/animals/alligator", group: "Reptiles & Amphibians" },
  { label: "Snake", href: "/animals/snake", group: "Reptiles & Amphibians" },
  { label: "Turtle", href: "/animals/turtle", group: "Reptiles & Amphibians" },
  { label: "Frog", href: "/animals/frog", group: "Reptiles & Amphibians" },
  { label: "Dolphin", href: "/animals/dolphin", group: "Marine Animals" },
  { label: "Shark", href: "/animals/shark", group: "Marine Animals" },
  { label: "Seal", href: "/animals/seal", group: "Marine Animals" },
  { label: "Whale", href: "/animals/whale", group: "Marine Animals" },
  { label: "Octopus", href: "/animals/octopus", group: "Marine Animals" },
  // Encyclopedia Expansion Batch 2
  { label: "Cow", href: "/animals/cow", group: "Mammals" },
  { label: "Goat", href: "/animals/goat", group: "Mammals" },
  { label: "Sheep", href: "/animals/sheep", group: "Mammals" },
  { label: "Pig", href: "/animals/pig", group: "Mammals" },
  { label: "Moose", href: "/animals/moose", group: "Mammals" },
  { label: "Lynx", href: "/animals/lynx", group: "Mammals" },
  { label: "Badger", href: "/animals/badger", group: "Mammals" },
  { label: "Beaver", href: "/animals/beaver", group: "Mammals" },
  { label: "Hedgehog", href: "/animals/hedgehog", group: "Mammals" },
  { label: "Bat", href: "/animals/bat", group: "Mammals" },
  { label: "Duck", href: "/animals/duck", group: "Birds" },
  { label: "Goose", href: "/animals/goose", group: "Birds" },
  { label: "Squid", href: "/animals/squid", group: "Marine Animals" },
  { label: "Crab", href: "/animals/crab", group: "Marine Animals" },
  { label: "Lobster", href: "/animals/lobster", group: "Marine Animals" },
  { label: "Jellyfish", href: "/animals/jellyfish", group: "Marine Animals" },
  { label: "Sea Turtle", href: "/animals/sea-turtle", group: "Marine Animals" },
  { label: "Starfish", href: "/animals/starfish", group: "Marine Animals" },
  { label: "Bee", href: "/animals/bee", group: "Insects & Invertebrates" },
  { label: "Butterfly", href: "/animals/butterfly", group: "Insects & Invertebrates" },
  { label: "Ant", href: "/animals/ant", group: "Insects & Invertebrates" },
  { label: "Spider", href: "/animals/spider", group: "Insects & Invertebrates" },
  { label: "Dragonfly", href: "/animals/dragonfly", group: "Insects & Invertebrates" },
  { label: "Ladybug", href: "/animals/ladybug", group: "Insects & Invertebrates" },
  { label: "Praying Mantis", href: "/animals/praying-mantis", group: "Insects & Invertebrates" },
  // Aquarium & Fish Encyclopedia Cluster
  { label: "Betta Fish", href: "/animals/betta-fish", group: "Fish" },
  { label: "Goldfish", href: "/animals/goldfish", group: "Fish" },
  { label: "Guppy", href: "/animals/guppy", group: "Fish" },
  { label: "Angelfish", href: "/animals/angelfish", group: "Fish" },
  { label: "Tetra", href: "/animals/tetra", group: "Fish" },
  { label: "Koi", href: "/animals/koi", group: "Fish" },
  { label: "Carp", href: "/animals/carp", group: "Fish" },
  { label: "Catfish", href: "/animals/catfish", group: "Fish" },
  { label: "Clownfish", href: "/animals/clownfish", group: "Fish" },
  { label: "Salmon", href: "/animals/salmon", group: "Fish" },
  { label: "Tuna", href: "/animals/tuna", group: "Fish" },
  { label: "Seahorse", href: "/animals/seahorse", group: "Fish" },
  { label: "Ray", href: "/animals/ray", group: "Fish" },
  { label: "Eel", href: "/animals/eel", group: "Fish" },
  { label: "Pufferfish", href: "/animals/pufferfish", group: "Fish" },
  // Birds Expansion Cluster
  { label: "Robin", href: "/animals/robin", group: "Birds" },
  { label: "Sparrow", href: "/animals/sparrow", group: "Birds" },
  { label: "Crow", href: "/animals/crow", group: "Birds" },
  { label: "Raven", href: "/animals/raven", group: "Birds" },
  { label: "Pigeon", href: "/animals/pigeon", group: "Birds" },
  { label: "Swan", href: "/animals/swan", group: "Birds" },
  { label: "Flamingo", href: "/animals/flamingo", group: "Birds" },
  { label: "Peacock", href: "/animals/peacock", group: "Birds" },
  { label: "Toucan", href: "/animals/toucan", group: "Birds" },
  { label: "Hummingbird", href: "/animals/hummingbird", group: "Birds" },
  { label: "Woodpecker", href: "/animals/woodpecker", group: "Birds" },
  { label: "Hawk", href: "/animals/hawk", group: "Birds" },
  { label: "Vulture", href: "/animals/vulture", group: "Birds" },
  { label: "Pelican", href: "/animals/pelican", group: "Birds" },
  { label: "Stork", href: "/animals/stork", group: "Birds" },
  // Reptiles & Amphibians + Mammals Batch 3
  { label: "Chameleon", href: "/animals/chameleon", group: "Reptiles & Amphibians" },
  { label: "Iguana", href: "/animals/iguana", group: "Reptiles & Amphibians" },
  { label: "Komodo Dragon", href: "/animals/komodo-dragon", group: "Reptiles & Amphibians" },
  { label: "Gecko", href: "/animals/gecko", group: "Reptiles & Amphibians" },
  { label: "Newt", href: "/animals/newt", group: "Reptiles & Amphibians" },
  { label: "Salamander", href: "/animals/salamander", group: "Reptiles & Amphibians" },
  { label: "Toad", href: "/animals/toad", group: "Reptiles & Amphibians" },
  { label: "Caiman", href: "/animals/caiman", group: "Reptiles & Amphibians" },
  { label: "Monitor Lizard", href: "/animals/monitor-lizard", group: "Reptiles & Amphibians" },
  { label: "Anaconda", href: "/animals/anaconda", group: "Reptiles & Amphibians" },
  { label: "Red Panda", href: "/animals/red-panda", group: "Mammals" },
  { label: "Sloth", href: "/animals/sloth", group: "Mammals" },
  { label: "Armadillo", href: "/animals/armadillo", group: "Mammals" },
  { label: "Porcupine", href: "/animals/porcupine", group: "Mammals" },
  { label: "Meerkat", href: "/animals/meerkat", group: "Mammals" },
  { label: "Wombat", href: "/animals/wombat", group: "Mammals" },
  { label: "Platypus", href: "/animals/platypus", group: "Mammals" },
  { label: "Lemur", href: "/animals/lemur", group: "Mammals" },
  { label: "Tapir", href: "/animals/tapir", group: "Mammals" },
  { label: "Hyena", href: "/animals/hyena", group: "Mammals" },
];

const ORDER = ["Mammals", "Birds", "Reptiles & Amphibians", "Marine Animals", "Fish", "Insects & Invertebrates"];

export default function AnimalEncyclopediaPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
  ]);

  const itemList = itemListSchema(
    allAnimalProfiles.map((p, i) => ({
      name: p.label,
      url: `https://faunahub.com${p.href}`,
      position: i + 1,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, itemList]) }}
      />

      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-12 sm:py-16">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Animal Encyclopedia</span>
            </nav>
            <div className="max-w-2xl">
              <span className="tag mb-4 inline-block">Wildlife & Nature</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4">
                Animal Encyclopedia
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Structured profiles covering habitat, diet, behavior, ecology, and human interaction
                for mammals, birds, reptiles, marine animals, and insects.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          {/* Wildlife & Biodiversity callout */}
          <aside
            aria-label="Wildlife and biodiversity intelligence"
            className="card p-5 sm:p-6 mb-10 border-l-4 border-l-[#7BAA35] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <span className="tag mb-2 inline-block">Wildlife Hub</span>
              <h2 className="text-lg sm:text-xl font-semibold text-[#17211B] mb-1">
                Wildlife &amp; Biodiversity Intelligence
              </h2>
              <p className="text-sm text-[#5E6B63] leading-relaxed max-w-2xl">
                Explore wildlife and biodiversity context across animal groups, habitats,
                comparisons, and source-reviewed conservation notes.
              </p>
            </div>
            <Link href="/wildlife" className="btn-primary text-sm shrink-0">
              Open Wildlife Hub →
            </Link>
          </aside>

          <HubGrid
            title="Browse by Animal Group"
            subtitle="Select a category to explore species within that group."
            items={categories}
            columns={3}
          />

          <section className="mt-12" aria-labelledby="all-profiles-heading">
            <h2 id="all-profiles-heading" className="section-title">
              All Animal Profiles
            </h2>
            <p className="section-subtitle">
              Browse the full set of detailed animal profiles, grouped by category.
            </p>
            <div className="space-y-8">
              {ORDER.map((group) => {
                const items = allAnimalProfiles.filter((p) => p.group === group);
                if (!items.length) return null;
                return (
                  <div key={group}>
                    <h3 className="text-base font-semibold text-[#17211B] uppercase tracking-wider mb-3">
                      {group}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {items.map((p) => {
                        const slug = p.href.replace("/animals/", "");
                        const img = getAnimalImage(slug);
                        return (
                          <Link
                            key={p.href}
                            href={p.href}
                            className="card overflow-hidden hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline flex flex-col"
                          >
                            <div className="relative w-full aspect-[4/3] bg-[#EFF1EB] border-b border-[#DDE6DD] overflow-hidden">
                              {img ? (
                                <Image
                                  src={img.localPath}
                                  alt={img.alt}
                                  fill
                                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
                                  className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 flex items-center justify-center text-2xl text-[#8A958E]"
                                >
                                  {p.label.slice(0, 1)}
                                </span>
                              )}
                            </div>
                            <div className="p-3 flex-1 flex flex-col justify-between">
                              <h4 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                                {p.label}
                              </h4>
                              <span className="text-xs font-medium text-[#063F2A] mt-2 block">
                                Read profile →
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="prose-content mt-10 max-w-3xl" aria-label="About this encyclopedia">
            <h2>About This Encyclopedia</h2>
            <p>
              The FaunaHub Animal Encyclopedia aims to provide structured, educational profiles for
              wild animal species. Each profile covers classification, natural habitat, dietary habits,
              behavior patterns, relationship with humans, and conservation context where known.
            </p>
            <p>
              Conservation status information is based on IUCN Red List designations where available.
              Where exact status is uncertain or pending review, this is clearly noted. We do not
              invent or estimate scientific data.
            </p>
          </section>

          <div className="mt-10">
            <RelatedLinks
              title="Also Explore"
              links={[
                { label: "Wildlife & Biodiversity Intelligence", href: "/wildlife", description: "Source-reviewed wildlife profiles, groups, and biodiversity context" },
                { label: "Compare Animals", href: "/compare", description: "Side-by-side animal comparisons" },
                { label: "Dog Care Guides", href: "/dogs", description: "Domestic dog care and breeds" },
                { label: "Cat Care Guides", href: "/cats", description: "Domestic cat care and breeds" },
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
