import type { Metadata } from "next";
import Link from "next/link";
import HubGrid from "@/components/HubGrid";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Wildlife & Biodiversity Intelligence — Profiles, Habitats, Source-Reviewed Notes",
  description:
    "Explore wildlife profiles, animal groups, habitat context, and source-transparent biodiversity explainers. An educational hub — not a live conservation database.",
  path: "/wildlife",
});

const wildlifeProfiles = [
  {
    label: "Tiger",
    href: "/animals/tiger",
    desc: "Panthera tigris — largest living cat, with disjunct Asian populations.",
    icon: "🐯",
  },
  {
    label: "Elephant",
    href: "/animals/elephant",
    desc: "Three living species — the largest land mammals.",
    icon: "🐘",
  },
  {
    label: "Dolphin",
    href: "/animals/dolphin",
    desc: "Highly social marine mammals across oceans and some rivers.",
    icon: "🐬",
  },
  {
    label: "Shark",
    href: "/animals/shark",
    desc: "An ancient lineage of cartilaginous fishes — over 500 known species.",
    icon: "🦈",
  },
  {
    label: "Penguin",
    href: "/animals/penguin",
    desc: "Flightless seabirds adapted for life across the Southern Hemisphere.",
    icon: "🐧",
  },
  {
    label: "Lion",
    href: "/animals/lion",
    desc: "Panthera leo — the only true social big cat.",
    icon: "🦁",
  },
  {
    label: "Wolf",
    href: "/animals/wolf",
    desc: "Canis lupus — pack-hunting ancestor of domestic dogs.",
    icon: "🐺",
  },
  {
    label: "Eagle",
    href: "/animals/eagle",
    desc: "Large diurnal raptors with powerful vision and varied global range.",
    icon: "🦅",
  },
];

const animalGroups = [
  {
    title: "Mammals",
    description:
      "Big cats, canids, primates, marsupials, and the largest land animals.",
    href: "/animal-encyclopedia/mammals",
    icon: "🦁",
  },
  {
    title: "Birds",
    description:
      "Raptors, seabirds, and waterbirds — from eagles to penguins.",
    href: "/animal-encyclopedia/birds",
    icon: "🦅",
  },
  {
    title: "Reptiles",
    description:
      "Crocodilians, lizards, and snakes — ancient lineages still thriving.",
    href: "/animal-encyclopedia/reptiles",
    icon: "🐊",
  },
  {
    title: "Marine Animals",
    description:
      "Sharks, dolphins, whales, and the broader scope of ocean life.",
    href: "/animal-encyclopedia/marine-animals",
    icon: "🐳",
  },
  {
    title: "Insects",
    description:
      "Bees, ants, butterflies — the most diverse animal class on Earth.",
    href: "/animal-encyclopedia/insects",
    icon: "🦋",
  },
];

const wildlifeComparisons = [
  {
    href: "/compare/leopard-vs-jaguar",
    title: "Leopard vs Jaguar",
    question: "Two spotted big cats — how do you tell them apart?",
    icon: "🐆",
  },
  {
    href: "/compare/alligator-vs-crocodile",
    title: "Alligator vs Crocodile",
    question: "Snout, teeth, and range — three reliable diagnostics.",
    icon: "🐊",
  },
  {
    href: "/compare/cheetah-vs-leopard",
    title: "Cheetah vs Leopard",
    question: "Build, behavior, and coat pattern compared.",
    icon: "🐆",
  },
  {
    href: "/compare/falcon-vs-eagle",
    title: "Falcon vs Eagle",
    question: "Two iconic raptor groups, very different hunting styles.",
    icon: "🦅",
  },
  {
    href: "/compare/lion-vs-tiger",
    title: "Lion vs Tiger",
    question: "Size, range, and social structure of the two largest cats.",
    icon: "🦁",
  },
];

const biodiversityContext = [
  {
    title: "Habitats",
    icon: "🌿",
    body:
      "Species are shaped by where they live — savannas, rainforests, polar oceans, and urban edges all support very different wildlife communities.",
  },
  {
    title: "Species Variation",
    icon: "🧬",
    body:
      "Within a single common name (\"tiger\", \"elephant\", \"shark\") there are often multiple distinct species or subspecies with different traits.",
  },
  {
    title: "Conservation Status Caution",
    icon: "⚠️",
    body:
      "Conservation status, population estimates, and range maps change over time. Always verify against current authoritative sources before citing.",
  },
  {
    title: "Human–Wildlife Interaction",
    icon: "🤝",
    body:
      "Habitat change, fisheries, livestock, trade, and tourism all shape outcomes for wild species — both positively and negatively.",
  },
  {
    title: "Why Source Review Matters",
    icon: "🔬",
    body:
      "Popular sources sometimes oversimplify or repeat outdated figures. FaunaHub favors primary and authoritative references over recycled web claims.",
  },
];

const sourceCategories = [
  {
    name: "IUCN Red List",
    note: "Authoritative reference for global conservation status.",
  },
  {
    name: "Animal Diversity Web",
    note: "University of Michigan natural history database.",
  },
  {
    name: "Smithsonian",
    note: "Museum and research collections covering global fauna.",
  },
  {
    name: "Britannica",
    note: "Editorially reviewed encyclopedic overviews.",
  },
  {
    name: "WWF",
    note: "Species and habitat education from a major conservation NGO.",
  },
  {
    name: "Government Wildlife Agencies",
    note: "National parks services and fisheries agencies for regional data.",
  },
  {
    name: "University Biology & Zoology Resources",
    note: "Academic departments and peer-reviewed literature.",
  },
  {
    name: "Museum & Zoo Education Resources",
    note: "Curated public-facing materials from accredited institutions.",
  },
];

export default function WildlifePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Wildlife & Biodiversity Intelligence", url: "https://faunahub.com/wildlife" },
  ]);

  const itemList = itemListSchema(
    wildlifeProfiles.map((p, i) => ({
      name: p.label,
      url: `https://faunahub.com${p.href}`,
      position: i + 1,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, itemList]) }}
      />

      <main id="main-content">
        {/* Hero */}
        <header className="bg-gradient-to-b from-[#EFF4E0] via-[#f7faf7] to-white border-b border-[#DDE6DD] py-12 sm:py-16">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">
                Wildlife &amp; Biodiversity Intelligence
              </span>
            </nav>
            <div className="max-w-3xl">
              <span className="tag mb-4 inline-block">Educational Wildlife Hub</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17211B] mb-4 leading-tight">
                Wildlife &amp; Biodiversity Intelligence
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                FaunaHub helps readers explore wildlife profiles, animal groups, habitat context,
                biodiversity explainers, and source-transparent conservation notes — in one calm,
                educational place.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-12">
          {/* Scope note — clear but not alarming */}
          <aside
            role="note"
            aria-label="About this hub"
            className="card p-5 sm:p-6 mb-12 border-l-4 border-l-[#7BAA35]"
          >
            <h2 className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2">
              About this hub
            </h2>
            <ul className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed space-y-1.5 list-disc list-outside pl-5">
              <li>This is an educational wildlife hub, not a live conservation database.</li>
              <li>
                Conservation status and population data should be verified against current
                authoritative sources before citing.
              </li>
              <li>
                Exact taxonomy, geographic range, and population details can change as research and
                review processes evolve.
              </li>
            </ul>
          </aside>

          {/* 1. Explore Wildlife Profiles */}
          <section aria-labelledby="profiles-heading" className="mb-16">
            <div className="mb-6">
              <h2 id="profiles-heading" className="section-title">
                Explore Wildlife Profiles
              </h2>
              <p className="section-subtitle mb-0">
                Structured profiles covering habitat, diet, behavior, ecology, and human
                interaction.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {wildlifeProfiles.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <span className="text-3xl mb-3 block" role="img" aria-hidden="true">
                    {p.icon}
                  </span>
                  <h3 className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {p.label}
                  </h3>
                  <p className="text-sm text-[#5E6B63] leading-snug mb-2">{p.desc}</p>
                  <span className="text-xs font-medium text-[#063F2A] mt-1 block">
                    Read profile →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* 2. Browse by Animal Group */}
          <section aria-labelledby="groups-heading" className="mb-16">
            <HubGrid
              title="Browse by Animal Group"
              subtitle="Step up one level and explore broader taxonomic categories."
              items={animalGroups}
              columns={3}
            />
          </section>

          {/* 3. Wildlife Comparisons */}
          <section aria-labelledby="compare-heading" className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <div>
                <h2 id="compare-heading" className="section-title">
                  Wildlife Comparisons
                </h2>
                <p className="section-subtitle mb-0">
                  Side-by-side comparisons that answer common identification and ecology
                  questions.
                </p>
              </div>
              <Link href="/compare" className="btn-secondary text-sm shrink-0">
                All Comparisons →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {wildlifeComparisons.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <div className="text-2xl mb-2" role="img" aria-hidden="true">
                    {c.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] mb-1 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#5E6B63] leading-snug">{c.question}</p>
                  <span className="text-xs font-medium text-[#063F2A] mt-3 block">
                    Compare →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* 4. Biodiversity Context */}
          <section
            aria-labelledby="biodiversity-heading"
            className="mb-16 bg-[#EFF1EB] border border-[#DDE6DD] rounded-2xl p-6 sm:p-8"
          >
            <div className="max-w-3xl mb-6">
              <h2 id="biodiversity-heading" className="section-title">
                Biodiversity Context
              </h2>
              <p className="section-subtitle mb-0">
                Educational framing for how to read wildlife information critically — without
                inventing scientific claims.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {biodiversityContext.map((item) => (
                <div
                  key={item.title}
                  className="card p-5 h-full"
                >
                  <span className="text-2xl mb-3 block" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="text-base font-semibold text-[#17211B] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5E6B63] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Sources and Review Standards */}
          <section aria-labelledby="sources-heading" className="mb-12">
            <div className="max-w-3xl mb-6">
              <h2 id="sources-heading" className="section-title">
                Sources &amp; Review Standards
              </h2>
              <p className="section-subtitle mb-0">
                FaunaHub does not publish invented scientific data. Wildlife pages are written
                against — and should be re-checked against — the following preferred source
                categories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sourceCategories.map((s) => (
                <div
                  key={s.name}
                  className="card p-4 flex flex-col gap-1"
                >
                  <span className="text-sm font-semibold text-[#17211B]">{s.name}</span>
                  <span className="text-xs text-[#5E6B63] leading-snug">{s.note}</span>
                </div>
              ))}
            </div>

            <aside
              role="note"
              aria-label="Source transparency note"
              className="mt-6 border border-[#DDE6DD] rounded-xl p-4 sm:p-5 bg-[#EFF1EB] text-sm text-[#5E6B63]"
            >
              <p className="font-semibold text-[#2C3A2F] mb-1">Source transparency note</p>
              <p className="leading-relaxed">
                Source URLs are added only when independently verified. When a page is still
                pending source review, it is clearly marked. FaunaHub does not fabricate citations,
                conservation statuses, population figures, or scientific names.
              </p>
            </aside>
          </section>

          {/* Related */}
          <RelatedLinks
            title="Also Explore"
            links={[
              {
                label: "Animal Encyclopedia",
                href: "/animal-encyclopedia",
                description: "Browse profiles by animal group.",
              },
              {
                label: "Animal Comparisons",
                href: "/compare",
                description: "Side-by-side comparisons of related species.",
              },
              {
                label: "Editorial Policy",
                href: "/editorial-policy",
                description: "How FaunaHub sources, reviews, and updates content.",
              },
            ]}
          />
        </div>
      </main>
    </>
  );
}
