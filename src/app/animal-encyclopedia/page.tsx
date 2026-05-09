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
    description: "Eagles, owls, parrots — wild bird species profiles, habitats, and behavior.",
    href: "/animal-encyclopedia/birds",
    icon: "🦅",
  },
  {
    title: "Reptiles",
    description: "Crocodiles, pythons, iguanas — reptile biology, ecology, and distribution.",
    href: "/animal-encyclopedia/reptiles",
    icon: "🐊",
  },
  {
    title: "Marine Animals",
    description: "Whales, sharks, dolphins, rays — ocean life from surface to deep sea.",
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

const featuredAnimals = [
  { label: "Lion", href: "/animals/lion", desc: "Panthera leo — apex predator of African savannas" },
  { label: "Wolf", href: "/animals/wolf", desc: "Canis lupus — ancestor of domestic dogs" },
  { label: "Eagle", href: "/animals/eagle", desc: "Aquila chrysaetos — apex aerial predator" },
];

export default function AnimalEncyclopediaPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
  ]);

  const itemList = itemListSchema(
    categories.map((c, i) => ({
      name: c.title,
      url: `https://faunahub.com${c.href}`,
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
          <HubGrid
            title="Browse by Animal Group"
            subtitle="Select a category to explore species within that group."
            items={categories}
            columns={3}
          />

          {/* Featured animals */}
          <section className="mt-12" aria-labelledby="featured-heading">
            <h2 id="featured-heading" className="section-title">Featured Animal Profiles</h2>
            <p className="section-subtitle">
              Detailed profiles with classification, habitat, diet, behavior, and FAQ.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {featuredAnimals.map((animal) => (
                <Link
                  key={animal.href}
                  href={animal.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] mb-1 transition-colors">
                    {animal.label}
                  </h3>
                  <p className="text-sm text-[#5E6B63]">{animal.desc}</p>
                  <span className="text-xs font-medium text-[#063F2A] mt-3 block">
                    Read profile →
                  </span>
                </Link>
              ))}
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
