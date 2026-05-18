import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Pet Fish & Aquarium Guides — Setup, Species & Care",
  description:
    "Aquarium setup guides, freshwater and saltwater fish species profiles, and essential fishkeeping basics for beginners and experienced owners.",
  path: "/fish",
});

const links = [
  {
    href: "/small-pets",
    label: "Small Pet Care Guides",
    desc: "Care guides for rabbits, guinea pigs, hamsters, and other small companions.",
  },
  {
    href: "/reptiles",
    label: "Reptile Pet Care Guides",
    desc: "Habitat setup, feeding, and health guides for lizards, snakes, and turtles.",
  },
];

export default function FishPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Fish", url: "https://faunahub.com/fish" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-10 sm:py-14">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Fish</span>
            </nav>
            <span className="tag mb-3 inline-block">Pet Care</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Pet Fish &amp; Aquarium Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Fishkeeping rewards patience and attention to water chemistry — understanding nitrogen
              cycling, appropriate tank size, and species compatibility is the foundation of a
              healthy aquarium. Whether you are setting up your first 20-litre tank or managing a
              complex reef system, the biology of your fish always drives the right decisions.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Guides in this section cover freshwater and saltwater species, aquarium cycling, water
              parameter management, feeding schedules, common diseases, and appropriate tank mates.
              Species profiles note whether fish are suitable for community tanks and what level of
              experience is recommended.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {link.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <RelatedLinks
              title="Planning and care resources for fish"
              links={[
                {
                  label: "How much does an aquarium fish setup cost?",
                  href: "/fish/how-much-does-a-fish-cost",
                  description: "Tank, cycling, and equipment cost framework",
                },
                {
                  label: "Pet Cost Calculator",
                  href: "/tools/pet-cost-calculator",
                  description: "Run monthly, annual, and first-year scenarios",
                },
                {
                  label: "Vet care hub",
                  href: "/vet-care",
                  description: "General vet-care planning resources",
                },
                {
                  label: "Best pets for beginners",
                  href: "/guides/best-pets-for-beginners",
                  description: "Honest pet-choice guide including fish",
                },
                {
                  label: "Low-maintenance pets",
                  href: "/guides/low-maintenance-pets",
                  description: "What 'low-maintenance' really means",
                },
              ]}
            />
            <RelatedLinks
              title="Wildlife & encyclopedia profiles (educational, not pet recommendations)"
              links={[
                {
                  label: "Marine animals encyclopedia",
                  href: "/animal-encyclopedia/marine-animals",
                  description: "Educational profiles of wild marine species",
                },
                {
                  label: "Dolphin profile (wildlife)",
                  href: "/animals/dolphin",
                  description: "Educational profile of dolphins — not pet-care",
                },
                {
                  label: "Shark profile (wildlife)",
                  href: "/animals/shark",
                  description: "Educational profile of sharks — not pet-care",
                },
              ]}
            />
          </div>

          <p className="mt-8 text-sm text-[#5E6B63]">
            Aquarium setup guides and fish species profiles are in development.
            The wildlife and encyclopedia profiles linked above are educational
            resources about wild marine species and are not pet-care or
            pet-ownership recommendations.
          </p>
        </div>
      </main>
    </>
  );
}
