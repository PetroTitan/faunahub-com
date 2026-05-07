import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Insects Encyclopedia — Species Profiles & Ecology",
  description:
    "Educational profiles of insect species — the most diverse animal class on Earth. Covering bees, ants, beetles, butterflies, and more.",
  path: "/animal-encyclopedia/insects",
});

const links = [
  {
    href: "/animal-encyclopedia",
    label: "Animal Encyclopedia",
    desc: "Browse all animal categories including mammals, birds, reptiles, and marine animals.",
  },
];

export default function InsectsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
    { name: "Insects", url: "https://faunahub.com/animal-encyclopedia/insects" },
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
              <span className="text-[#1C2B3A] font-medium" aria-current="page">Insects</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-3">
              Insects
            </h1>
            <p className="text-base text-[#3E4F60] leading-relaxed max-w-2xl">
              Insects are the most species-rich class of animals on Earth — with over one million
              described species and estimates of the true total running from two to ten million or
              more. They have colonized virtually every terrestrial and freshwater habitat and
              perform ecological functions indispensable to global food systems, including
              pollination, decomposition, and forming the base of many food webs.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Insect profiles on FaunaHub cover species from major insect orders including
              Hymenoptera (bees, wasps, ants), Coleoptera (beetles), Lepidoptera (butterflies
              and moths), Diptera (flies), and Orthoptera (grasshoppers and crickets). Each
              profile addresses anatomy, life cycle, habitat, diet, ecological role, and where
              relevant, the species&apos; relationship to agriculture or human environments.
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

          <section className="prose-content mt-10 max-w-3xl" aria-labelledby="ecology-heading">
            <h2 id="ecology-heading">Why Insects Matter</h2>
            <p>
              Insects pollinate approximately 75% of the world&apos;s flowering plant species and
              around one third of global food crops. Beetles and flies are primary decomposers
              that break down organic matter and cycle nutrients back into soil. Many vertebrate
              species — including birds, fish, amphibians, and mammals — depend on insects as
              a primary food source. Insect population declines documented in recent decades
              represent a significant ecological concern with cascading effects across ecosystems.
            </p>
          </section>

          <p className="mt-8 text-sm text-[#6B7684]">
            Individual insect species profiles are in development.
          </p>
        </div>
      </main>
    </>
  );
}
