import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Mammals Encyclopedia — Wildlife Profiles & Ecology",
  description:
    "Profiles of mammal species from lions and tigers to bears, primates, and marsupials — covering habitat, diet, behavior, and conservation context.",
  path: "/animal-encyclopedia/mammals",
});

const mammals = [
  { href: "/animals/lion", label: "Lion", desc: "Panthera leo — apex predator of African savannas." },
  { href: "/animals/tiger", label: "Tiger", desc: "Panthera tigris — largest living cat species." },
  { href: "/animals/leopard", label: "Leopard", desc: "Panthera pardus — most widely distributed big cat." },
  { href: "/animals/jaguar", label: "Jaguar", desc: "Panthera onca — apex predator of the Americas." },
  { href: "/animals/cheetah", label: "Cheetah", desc: "Acinonyx jubatus — fastest land animal." },
  { href: "/animals/wolf", label: "Wolf", desc: "Canis lupus — pack-hunting ancestor of domestic dogs." },
  { href: "/animals/fox", label: "Fox", desc: "Vulpes vulpes — adaptable opportunistic omnivore." },
  { href: "/animals/bear", label: "Bear", desc: "Family Ursidae — eight living species." },
  { href: "/animals/panda", label: "Giant Panda", desc: "Ailuropoda melanoleuca — bamboo-specialist bear." },
  { href: "/animals/elephant", label: "Elephant", desc: "Three species — the largest land mammals." },
  { href: "/animals/giraffe", label: "Giraffe", desc: "Genus Giraffa — tallest extant land animal." },
  { href: "/animals/zebra", label: "Zebra", desc: "Three African equid species." },
  { href: "/animals/gorilla", label: "Gorilla", desc: "Genus Gorilla — largest extant primate." },
  { href: "/animals/chimpanzee", label: "Chimpanzee", desc: "Pan troglodytes — one of humans' closest relatives." },
  { href: "/animals/kangaroo", label: "Kangaroo", desc: "Macropodidae — Australian marsupials." },
  { href: "/animals/koala", label: "Koala", desc: "Phascolarctos cinereus — arboreal marsupial." },
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
        <header className="bg-white border-b border-[#DDE6DD] py-10 sm:py-14">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/animal-encyclopedia" className="hover:text-[#063F2A] hover:no-underline">
                Animal Encyclopedia
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Mammals</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Mammals
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {mammals.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {m.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{m.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10" aria-labelledby="related-heading">
            <h2 id="related-heading" className="section-title">Related Comparisons</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/compare/lion-vs-tiger", label: "Lion vs Tiger" },
                { href: "/compare/leopard-vs-jaguar", label: "Leopard vs Jaguar" },
                { href: "/compare/cheetah-vs-leopard", label: "Cheetah vs Leopard" },
                { href: "/compare/wolf-vs-dog", label: "Wolf vs Dog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                    {link.label}
                  </h3>
                  <span className="text-xs font-medium text-[#063F2A] mt-2 block">
                    Compare →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
