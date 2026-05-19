import type { Metadata } from "next";
import Link from "next/link";
import HubGrid from "@/components/HubGrid";
import RelatedLinks from "@/components/RelatedLinks";
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
    title: "Reptiles",
    description: "Crocodiles, alligators, snakes — reptile biology, ecology, and distribution.",
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
    title: "Insects",
    description: "Bees, ants, beetles, butterflies — the most diverse animal class on Earth.",
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
  { label: "Eagle", href: "/animals/eagle", group: "Birds" },
  { label: "Owl", href: "/animals/owl", group: "Birds" },
  { label: "Penguin", href: "/animals/penguin", group: "Birds" },
  { label: "Crocodile", href: "/animals/crocodile", group: "Reptiles" },
  { label: "Alligator", href: "/animals/alligator", group: "Reptiles" },
  { label: "Dolphin", href: "/animals/dolphin", group: "Marine Animals" },
  { label: "Shark", href: "/animals/shark", group: "Marine Animals" },
];

const ORDER = ["Mammals", "Birds", "Reptiles", "Marine Animals"];

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
                      {items.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                        >
                          <h4 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                            {p.label}
                          </h4>
                          <span className="text-xs font-medium text-[#063F2A] mt-2 block">
                            Read profile →
                          </span>
                        </Link>
                      ))}
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
