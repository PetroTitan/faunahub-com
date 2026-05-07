import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Mammals Encyclopedia — Wildlife Profiles & Ecology",
  description:
    "Profiles of mammal species from lions to wolves to bears — covering habitat, diet, behavior, and conservation context.",
  path: "/animal-encyclopedia/mammals",
});

const links = [
  {
    href: "/animals/lion",
    label: "Lion",
    desc: "Panthera leo — apex predator of African savannas and woodlands.",
  },
  {
    href: "/animals/wolf",
    label: "Wolf",
    desc: "Canis lupus — highly social pack hunter and ancestor of domestic dogs.",
  },
  {
    href: "/animal-encyclopedia",
    label: "Animal Encyclopedia",
    desc: "Browse all animal categories including birds, reptiles, marine animals, and insects.",
  },
];

export default function MammalsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
    { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
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
              <span className="text-[#1C2B3A] font-medium" aria-current="page">Mammals</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-3">
              Mammals
            </h1>
            <p className="text-base text-[#3E4F60] leading-relaxed max-w-2xl">
              Mammals are warm-blooded vertebrates that nurse their young with milk and, with a few
              exceptions, give birth to live offspring. The class Mammalia spans over 5,500 known
              species — from the 1.5-gram Bumblebee bat to the 180-tonne Blue whale — occupying
              virtually every habitat on Earth.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Mammal profiles on FaunaHub cover species classification, geographic range and
              preferred habitat, diet and foraging behavior, social structure, reproduction, and
              conservation status based on IUCN Red List data. Profiles aim to be factually
              accurate and clearly distinguish between well-established science and areas where
              research is ongoing or contested.
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
            More mammal species profiles are in development and will be added progressively.
          </p>
        </div>
      </main>
    </>
  );
}
