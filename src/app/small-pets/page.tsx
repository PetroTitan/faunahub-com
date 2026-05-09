import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Small Pet Care Guides — Rabbits, Hamsters, Guinea Pigs & More",
  description:
    "Practical care guides for small companion animals including rabbits, hamsters, guinea pigs, gerbils, and other small pets.",
  path: "/small-pets",
});

const links = [
  {
    href: "/dogs",
    label: "Dog Care Guides",
    desc: "Breeds, health, nutrition, and behavior guides for dog owners.",
  },
  {
    href: "/cats",
    label: "Cat Care Guides",
    desc: "Feline care resources covering health, feeding, and behavior.",
  },
  {
    href: "/birds",
    label: "Pet Bird Care Guides",
    desc: "Species guides and care basics for parrots, canaries, and cockatiels.",
  },
  {
    href: "/fish",
    label: "Pet Fish & Aquarium Guides",
    desc: "Aquarium setup, freshwater and saltwater species profiles, and fishkeeping basics.",
  },
];

export default function SmallPetsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Small Pets", url: "https://faunahub.com/small-pets" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Small Pets</span>
            </nav>
            <span className="tag mb-3 inline-block">Pet Care</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Small Pet Care Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Small companion animals like rabbits, guinea pigs, hamsters, and gerbils can be deeply
              rewarding pets, but each species has distinct habitat, dietary, and social requirements.
              Understanding their specific needs helps ensure they live healthy, enriched lives in
              your care.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Small pets vary greatly in lifespan, social behavior, and space requirements — a
              rabbit may live 8 to 12 years and needs space to run, while a hamster is largely
              solitary and crepuscular. Species-specific knowledge is essential before bringing any
              small animal home.
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

          <p className="mt-8 text-sm text-[#5E6B63]">
            More small pet guides covering rabbits, hamsters, guinea pigs, and gerbils are in
            development.
          </p>
        </div>
      </main>
    </>
  );
}
