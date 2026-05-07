import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Reptiles Encyclopedia — Wild Reptile Species Profiles",
  description:
    "Wild reptile species profiles covering crocodilians, snakes, lizards, and turtles — habitat, diet, behavior, and ecology.",
  path: "/animal-encyclopedia/reptiles",
});

const links = [
  {
    href: "/reptiles",
    label: "Pet Reptile Care Guides",
    desc: "Habitat, feeding, and health guides for lizards, snakes, turtles, and other pet reptiles.",
  },
  {
    href: "/animal-encyclopedia",
    label: "Animal Encyclopedia",
    desc: "Browse all animal categories including mammals, birds, marine animals, and insects.",
  },
];

export default function EncyclopediaReptilesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
    { name: "Reptiles", url: "https://faunahub.com/animal-encyclopedia/reptiles" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main id="main-content">
        <header className="bg-white border-b border-[#E4E8ED] py-10 sm:py-14">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#9CA5AF] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#2A7A4B] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/animal-encyclopedia" className="hover:text-[#2A7A4B] hover:no-underline">
                Animal Encyclopedia
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#1C2B3A] font-medium" aria-current="page">Reptiles</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-3">
              Wild Reptiles
            </h1>
            <p className="text-base text-[#3E4F60] leading-relaxed max-w-2xl">
              Reptiles are a diverse group of ectothermic vertebrates that includes over 10,000
              species of lizards, snakes, crocodilians, turtles, and the tuatara. They are found
              on every continent except Antarctica and play crucial roles as predators, prey, and
              seed dispersers in their ecosystems.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Wild reptile profiles on FaunaHub cover species classification, natural geographic
              range, preferred habitat conditions, thermoregulation behavior, diet and prey
              capture strategies, reproduction, and conservation status from IUCN Red List data.
              The distinction between wild ecology and captive husbandry needs is clearly noted
              where relevant — for pet reptile care information, see the Pet Reptiles section.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card p-5 hover:shadow-md hover:border-[#c6e8d4] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#1C2B3A] group-hover:text-[#2A7A4B] transition-colors mb-1">
                    {link.label}
                  </h3>
                  <p className="text-xs text-[#6B7684]">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <p className="mt-8 text-sm text-[#6B7684]">
            Wild reptile species profiles are in development.
          </p>
        </div>
      </main>
    </>
  );
}
