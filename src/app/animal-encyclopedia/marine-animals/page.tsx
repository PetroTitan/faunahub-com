import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Marine Animals Encyclopedia — Ocean Life Profiles",
  description:
    "Profiles of marine animals including whales, sharks, dolphins, rays, and deep-sea species — habitat, behavior, and ecology.",
  path: "/animal-encyclopedia/marine-animals",
});

const links = [
  {
    href: "/animals/dolphin",
    label: "Dolphin",
    desc: "Family Delphinidae — highly social marine mammals (Cetacea).",
  },
  {
    href: "/animals/shark",
    label: "Shark",
    desc: "Cartilaginous fish — 500+ species in superorder Selachimorpha.",
  },
  {
    href: "/animals/whale",
    label: "Whale",
    desc: "Cetaceans including the largest animals ever known to have lived.",
  },
  {
    href: "/animals/seal",
    label: "Seal",
    desc: "Pinnipeds — marine mammals adapted to life in and out of water.",
  },
  {
    href: "/animals/octopus",
    label: "Octopus",
    desc: "Eight-armed cephalopod molluscs known for intelligence and camouflage.",
  },
  {
    href: "/animals/squid",
    label: "Squid",
    desc: "Fast-swimming cephalopods — a group-level overview of order Teuthida.",
  },
  {
    href: "/animals/crab",
    label: "Crab",
    desc: "True crabs (Brachyura) — ten-legged crustaceans with a broad shell.",
  },
  {
    href: "/animals/lobster",
    label: "Lobster",
    desc: "Clawed seabed crustaceans, using the American lobster as a reference.",
  },
  {
    href: "/animals/jellyfish",
    label: "Jellyfish",
    desc: "Soft-bodied drifting cnidarians with stinging tentacles.",
  },
  {
    href: "/animals/sea-turtle",
    label: "Sea Turtle",
    desc: "Ancient ocean reptiles — seven species, several of them threatened.",
  },
  {
    href: "/animals/starfish",
    label: "Starfish",
    desc: "Sea stars (Asteroidea) — five-armed echinoderms of the seabed.",
  },
  {
    href: "/animals/clownfish",
    label: "Clownfish",
    desc: "Reef anemonefish — see the Fish encyclopedia for more ocean fish.",
  },
  {
    href: "/animals/seahorse",
    label: "Seahorse",
    desc: "Upright reef fish where the male carries the young.",
  },
  {
    href: "/animals/ray",
    label: "Ray",
    desc: "Flattened cartilaginous fish related to sharks.",
  },
  {
    href: "/animal-encyclopedia/fish",
    label: "Fish Encyclopedia",
    desc: "Salmon, tuna, eels, pufferfish, and aquarium fish — the full fish category.",
  },
  {
    href: "/animal-encyclopedia",
    label: "Animal Encyclopedia",
    desc: "Browse all animal categories including mammals, birds, reptiles, and insects.",
  },
];

export default function MarineAnimalsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
    { name: "Marine Animals", url: "https://faunahub.com/animal-encyclopedia/marine-animals" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Marine Animals</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Marine Animals
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              The ocean covers approximately 71% of Earth&apos;s surface and is home to an enormous
              diversity of life — from microscopic zooplankton to the Blue whale, the largest
              animal ever known to have existed. Marine ecosystems include coral reefs, open ocean
              pelagic zones, kelp forests, mangroves, and the largely unexplored deep sea.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Marine animal profiles on FaunaHub cover species from multiple taxonomic groups —
              including cetaceans (whales, dolphins, porpoises), cartilaginous fish (sharks, rays),
              bony fish, marine reptiles (sea turtles, marine iguanas), and selected invertebrates
              such as cephalopods. Each profile addresses habitat range, diet and feeding strategy,
              social behavior where applicable, and conservation status. Deep-sea species are noted
              where scientific knowledge is limited by the difficulty of direct observation.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
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

          <section className="prose-content mt-10 max-w-3xl" aria-labelledby="conservation-heading">
            <h2 id="conservation-heading">Marine Conservation Context</h2>
            <p>
              Many marine species face significant conservation pressures including overfishing,
              bycatch, habitat destruction, ocean warming, acidification from increased atmospheric
              CO2, and plastic pollution. Conservation status information in these profiles is
              drawn from the IUCN Red List. Where a species&apos; status is listed as Data Deficient
              or Not Evaluated, this is clearly stated rather than an estimate provided.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
