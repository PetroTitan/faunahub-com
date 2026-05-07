import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Birds Encyclopedia — Wild Bird Species Profiles & Ecology",
  description:
    "Wild bird species profiles covering eagles, owls, parrots, and more — habitat, diet, behavior, and conservation context.",
  path: "/animal-encyclopedia/birds",
});

const links = [
  {
    href: "/animals/eagle",
    label: "Eagle",
    desc: "Aquila chrysaetos — one of the most powerful aerial predators in the Northern Hemisphere.",
  },
  {
    href: "/birds",
    label: "Pet Bird Care Guides",
    desc: "Guides for owners of pet birds including parrots, canaries, and cockatiels.",
  },
  {
    href: "/animal-encyclopedia",
    label: "Animal Encyclopedia",
    desc: "Browse all animal categories including mammals, reptiles, marine animals, and insects.",
  },
];

export default function EncyclopediaBirdsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
    { name: "Birds", url: "https://faunahub.com/animal-encyclopedia/birds" },
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
              <span className="text-[#1C2B3A] font-medium" aria-current="page">Birds</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-3">
              Wild Birds
            </h1>
            <p className="text-base text-[#3E4F60] leading-relaxed max-w-2xl">
              Birds are the only living descendants of theropod dinosaurs, and with over 10,000
              known species they are the most diverse group of terrestrial vertebrates on Earth.
              They occupy every continent and most ocean habitats, from Arctic tundra to tropical
              rainforests and open ocean.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Wild bird profiles on FaunaHub cover species taxonomy, geographic range and migratory
              behavior, diet and foraging strategy, nesting and breeding ecology, and conservation
              status from the IUCN Red List. Profiles distinguish between wild bird ecology and
              the domesticated or captive-bred bird species covered in the pet birds section.
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
            More wild bird species profiles are in development.
          </p>
        </div>
      </main>
    </>
  );
}
