import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Reptile Pet Care Guides — Lizards, Snakes & Turtles",
  description:
    "Pet reptile care guides covering lizards, snakes, turtles, and other reptiles. Habitat setup, feeding, health, and species profiles.",
  path: "/reptiles",
});

const links = [
  {
    href: "/animal-encyclopedia/reptiles",
    label: "Wild Reptile Species Encyclopedia",
    desc: "Profiles of crocodilians, pythons, iguanas and more in their natural habitat.",
  },
  {
    href: "/fish",
    label: "Pet Fish & Aquarium Guides",
    desc: "Aquarium setup and species profiles for freshwater and saltwater fish.",
  },
  {
    href: "/small-pets",
    label: "Small Pet Care Guides",
    desc: "Care guides for rabbits, guinea pigs, hamsters, and other small companions.",
  },
];

export default function ReptilesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Reptiles", url: "https://faunahub.com/reptiles" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Reptiles</span>
            </nav>
            <span className="tag mb-3 inline-block">Pet Care</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Reptile Pet Care Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Reptiles are ectothermic animals that depend on their environment to regulate body
              temperature, which makes correct enclosure setup — including lighting, heating
              gradients, and humidity — critical to their health. From popular beginner species like
              leopard geckos to more demanding snakes and tortoises, proper husbandry is
              non-negotiable.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Reptile care guides on FaunaHub cover habitat construction, UVB lighting requirements,
              appropriate live and frozen prey for snakes, vegetable and supplementation schedules
              for herbivorous lizards, and signs of common health issues like metabolic bone disease
              and respiratory infections.
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
            Individual reptile species care guides are in development.
          </p>
        </div>
      </main>
    </>
  );
}
