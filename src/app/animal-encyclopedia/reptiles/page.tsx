import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Reptiles Encyclopedia — Wild Reptile Species Profiles",
  description:
    "Wild reptile species profiles covering crocodilians (crocodiles, alligators), snakes, lizards, and turtles — habitat, diet, behavior, and ecology.",
  path: "/animal-encyclopedia/reptiles",
});

const reptiles = [
  {
    href: "/animals/crocodile",
    label: "Crocodile",
    desc: "Family Crocodylidae — large aquatic predators of the tropics and subtropics.",
  },
  {
    href: "/animals/alligator",
    label: "Alligator",
    desc: "Family Alligatoridae — two living species: American and Chinese alligator.",
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
        <header className="bg-white border-b border-[#DDE6DD] py-10 sm:py-14">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/animal-encyclopedia" className="hover:text-[#063F2A] hover:no-underline">
                Animal Encyclopedia
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Reptiles</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Wild Reptiles
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
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
              {reptiles.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {r.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{r.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10" aria-labelledby="related-heading">
            <h2 id="related-heading" className="section-title">Related Comparisons</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/compare/alligator-vs-crocodile"
                className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
              >
                <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                  Alligator vs Crocodile
                </h3>
                <span className="text-xs font-medium text-[#063F2A] mt-2 block">
                  Compare →
                </span>
              </Link>
            </div>
          </section>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link
              href="/reptiles"
              className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
            >
              <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                Pet Reptile Care Guides
              </h3>
              <p className="text-xs text-[#5E6B63]">
                Habitat, feeding, and health guides for lizards, snakes, turtles, and other pet reptiles.
              </p>
            </Link>
            <Link
              href="/animal-encyclopedia"
              className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
            >
              <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                Animal Encyclopedia
              </h3>
              <p className="text-xs text-[#5E6B63]">
                Browse all animal categories including mammals, birds, marine animals, and insects.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
