import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Pet Care Guides & Animal Guides",
  description:
    "Practical guides for pet owners and animal enthusiasts — covering dogs, cats, small pets, wildlife, and responsible ownership decisions.",
  path: "/guides",
});

const links = [
  {
    href: "/dogs",
    label: "Dog Care Guides",
    desc: "Breeds, health, nutrition, behavior, costs, and insurance for dog owners.",
  },
  {
    href: "/cats",
    label: "Cat Care Guides",
    desc: "Breeds, health, nutrition, behavior, costs, and insurance for cat owners.",
  },
  {
    href: "/small-pets",
    label: "Small Pet Care Guides",
    desc: "Care resources for rabbits, guinea pigs, hamsters, gerbils, and more.",
  },
  {
    href: "/animal-encyclopedia",
    label: "Animal Encyclopedia",
    desc: "Wildlife profiles for mammals, birds, reptiles, marine animals, and insects.",
  },
  {
    href: "/compare",
    label: "Compare Animals",
    desc: "Side-by-side comparisons of animal species and breeds.",
  },
  {
    href: "/tools",
    label: "Pet Tools & Calculators",
    desc: "Cost calculators, age converters, and other useful tools for pet owners.",
  },
];

export default function GuidesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Guides", url: "https://faunahub.com/guides" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Guides</span>
            </nav>
            <span className="tag mb-3 inline-block">Pet &amp; Animal Guides</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              FaunaHub guides are written for pet owners and animal enthusiasts who want accurate,
              practical information — whether you are choosing a first pet, managing a health
              concern, or learning about wildlife.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">What to Expect on This Page</h2>
            <p className="section-subtitle max-w-2xl">
              All guides on FaunaHub aim to be species-specific, factually grounded, and honest
              about the limits of general educational content — health and medical questions should
              always be directed to a licensed veterinarian, and conservation data is sourced from
              established authorities such as the IUCN Red List.
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
        </div>
      </main>
    </>
  );
}
