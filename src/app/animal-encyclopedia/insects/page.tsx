import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Insects & Invertebrates Encyclopedia — Species Profiles & Ecology",
  description:
    "Educational profiles of insects and other invertebrates — bees, butterflies, ants, spiders, dragonflies, ladybugs, and mantises. Anatomy, diet, and ecology.",
  path: "/animal-encyclopedia/insects",
});

const groups = [
  {
    href: "/animals/bee",
    label: "Bee",
    desc: "Clade Anthophila — vital pollinators; a group-level overview using the honey bee.",
  },
  {
    href: "/animals/butterfly",
    label: "Butterfly",
    desc: "Order Lepidoptera — day-flying insects with a four-stage life cycle.",
  },
  {
    href: "/animals/ant",
    label: "Ant",
    desc: "Family Formicidae — highly social insects living in organised colonies.",
  },
  {
    href: "/animals/dragonfly",
    label: "Dragonfly",
    desc: "Infraorder Anisoptera — fast aerial predators with aquatic larvae.",
  },
  {
    href: "/animals/ladybug",
    label: "Ladybug",
    desc: "Family Coccinellidae — small beetles, many of them helpful aphid predators.",
  },
  {
    href: "/animals/praying-mantis",
    label: "Praying Mantis",
    desc: "Order Mantodea — ambush predators with grasping forelegs and keen eyesight.",
  },
  {
    href: "/animals/spider",
    label: "Spider",
    desc: "Order Araneae — eight-legged arachnids (not insects) that produce silk.",
  },
  {
    href: "/animals/beetle",
    label: "Beetle",
    desc: "Order Coleoptera — the most species-rich animal group, with hardened wing cases.",
  },
  {
    href: "/animals/scorpion",
    label: "Scorpion",
    desc: "Order Scorpiones — arachnids with pincers and a venomous tail sting.",
  },
  {
    href: "/animals/earthworm",
    label: "Earthworm",
    desc: "Annelida — segmented worms that aerate and enrich the soil.",
  },
  {
    href: "/animals/tarantula",
    label: "Tarantula",
    desc: "Theraphosidae — large, hairy spiders, mostly calm and only mildly venomous.",
  },
  {
    href: "/animals/centipede",
    label: "Centipede",
    desc: "Chilopoda — fast, venomous, many-legged predators (one leg pair per segment).",
  },
  {
    href: "/animals/millipede",
    label: "Millipede",
    desc: "Diplopoda — slow, harmless litter recyclers (two leg pairs per segment).",
  },
  {
    href: "/animals/moth",
    label: "Moth",
    desc: "Lepidoptera — mostly night-flying insects that outnumber butterflies.",
  },
  {
    href: "/animals/grasshopper",
    label: "Grasshopper",
    desc: "Caelifera — plant-eating insects with powerful jumping legs.",
  },
  {
    href: "/animals/snail",
    label: "Snail",
    desc: "Shelled gastropod molluscs that glide on a muscular foot.",
  },
  {
    href: "/animals/slug",
    label: "Slug",
    desc: "Shell-less gastropod molluscs; close relatives of snails.",
  },
  {
    href: "/animals/cicada",
    label: "Cicada",
    desc: "Family Cicadidae — loud summer singers whose nymphs live underground for years.",
  },
  {
    href: "/animals/cricket",
    label: "Cricket",
    desc: "Family Gryllidae — chirping insects that sing by rubbing their wings.",
  },
  {
    href: "/animals/stick-insect",
    label: "Stick Insect",
    desc: "Order Phasmatodea — masters of camouflage that mimic twigs and leaves.",
  },
  {
    href: "/animals/wasp",
    label: "Wasp",
    desc: "Order Hymenoptera — feared for their sting, but vital pest controllers and pollinators.",
  },
  {
    href: "/animals/termite",
    label: "Termite",
    desc: "Order Isoptera — social wood-recyclers and mound-builders (actually a kind of cockroach).",
  },
  {
    href: "/animals/tardigrade",
    label: "Tardigrade (Water Bear)",
    desc: "Phylum Tardigrada — microscopic animals that survive almost anything, even space.",
  },
  {
    href: "/animals/cockroach",
    label: "Cockroach",
    desc: "Order Blattodea — ancient, hardy insects; mostly wild recyclers, a few are pests.",
  },
  {
    href: "/animals/crayfish",
    label: "Crayfish",
    desc: "Lobster-like freshwater crustaceans; recyclers, and invasive where introduced.",
  },
  {
    href: "/animals/velvet-worm",
    label: "Velvet Worm",
    desc: "Phylum Onychophora — ancient soft-bodied predators that shoot sticky slime.",
  },
  {
    href: "/animals/mayfly",
    label: "Mayfly",
    desc: "Order Ephemeroptera — short-lived adults; nymphs indicate clean fresh water.",
  },
  {
    href: "/animals/woodlouse",
    label: "Woodlouse",
    desc: "Suborder Oniscidea — the only crustaceans fully adapted to land; harmless soil recyclers.",
  },
  {
    href: "/animals/lacewing",
    label: "Lacewing",
    desc: "Order Neuroptera — lacy-winged insects whose 'aphid lion' larvae devour garden pests.",
  },
];

export default function InsectsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
    { name: "Insects & Invertebrates", url: "https://faunahub.com/animal-encyclopedia/insects" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Insects &amp; Invertebrates</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Insects &amp; Invertebrates
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Insects are the most species-rich class of animals on Earth — with over one million
              described species and estimates of the true total running far higher. Together with
              other invertebrates such as spiders, they have colonised virtually every land and
              freshwater habitat and perform ecological functions indispensable to global food
              systems, including pollination, decomposition, and forming the base of many food webs.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="profiles-heading">
            <h2 id="profiles-heading" className="section-title">Insect &amp; Invertebrate Profiles</h2>
            <p className="section-subtitle max-w-2xl">
              Each profile is a cautious, group-level overview rather than a single-species
              monograph. We cover anatomy, life cycle, habitat, diet, and ecological role, and we
              note where a common name spans many species. Spiders are included here as familiar
              invertebrates, with a clear reminder that they are arachnids, not insects.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {groups.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {g.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{g.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="prose-content mt-10 max-w-3xl" aria-labelledby="ecology-heading">
            <h2 id="ecology-heading">Why Insects &amp; Invertebrates Matter</h2>
            <p>
              Insects pollinate a large share of the world&apos;s flowering plants and many food
              crops, while beetles, flies, and other invertebrates are primary decomposers that
              break down organic matter and cycle nutrients back into soil. Spiders and predatory
              insects help regulate the numbers of other invertebrates. Many vertebrate species —
              including birds, fish, amphibians, and mammals — depend on insects and other
              invertebrates as a primary food source. Documented declines in some insect populations
              are a significant ecological concern with cascading effects across ecosystems.
            </p>
          </section>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link
              href="/wildlife"
              className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
            >
              <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                Wildlife &amp; Biodiversity Hub
              </h3>
              <p className="text-xs text-[#5E6B63]">
                Explore wildlife and biodiversity context across animal groups and habitats.
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
                Browse all animal categories including mammals, birds, reptiles, and marine animals.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
