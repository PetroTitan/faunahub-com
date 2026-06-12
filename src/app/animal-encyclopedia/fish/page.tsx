import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Fish Encyclopedia — Freshwater, Aquarium & Ocean Fish Profiles",
  description:
    "Educational fish profiles covering aquarium and freshwater fish — bettas, goldfish, guppies, tetras — and ocean fish such as clownfish, salmon, tuna, seahorses, and rays.",
  path: "/animal-encyclopedia/fish",
});

const freshwater = [
  { href: "/animals/betta-fish", label: "Betta Fish", desc: "Betta splendens — the labyrinth-breathing Siamese fighting fish." },
  { href: "/animals/goldfish", label: "Goldfish", desc: "Carassius auratus — a long-lived domesticated carp-family fish." },
  { href: "/animals/guppy", label: "Guppy", desc: "Poecilia reticulata — a small, colourful livebearer." },
  { href: "/animals/angelfish", label: "Angelfish", desc: "Pterophyllum scalare — a tall-finned South American cichlid." },
  { href: "/animals/tetra", label: "Tetra", desc: "Small schooling characins, using the neon tetra as a reference." },
  { href: "/animals/koi", label: "Koi", desc: "Ornamental varieties of the common carp, kept in ponds." },
  { href: "/animals/carp", label: "Carp", desc: "Cyprinus carpio — a widespread, often introduced freshwater fish." },
  { href: "/animals/catfish", label: "Catfish", desc: "Order Siluriformes — barbel-bearing fish, using the channel catfish." },
];

const marine = [
  { href: "/animals/clownfish", label: "Clownfish", desc: "Anemonefish (Amphiprion) famous for their anemone partnership." },
  { href: "/animals/salmon", label: "Salmon", desc: "Migratory fish that return to fresh water to spawn." },
  { href: "/animals/tuna", label: "Tuna", desc: "Fast, powerful open-ocean fish of the mackerel family." },
  { href: "/animals/seahorse", label: "Seahorse", desc: "Upright reef fish where the male carries the young." },
  { href: "/animals/ray", label: "Ray", desc: "Flattened cartilaginous fish related to sharks." },
  { href: "/animals/eel", label: "Eel", desc: "Elongated true eels (Anguilliformes), using the moray eel." },
  { href: "/animals/pufferfish", label: "Pufferfish", desc: "Tetraodontidae — inflating fish, many of them highly toxic." },
];

export default function FishEncyclopediaPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
    { name: "Fish", url: "https://faunahub.com/animal-encyclopedia/fish" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Fish</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Fish
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Fish are the most diverse group of vertebrates, with tens of thousands of species
              living in fresh water and the sea. These profiles cover popular aquarium and
              freshwater fish alongside ocean fish, with a consistent reminder that aquarium fish
              are living animals with real needs — not effortless decorations — and that wild fish
              are wildlife, not pets.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          {/* Aquarium-care callout */}
          <aside
            aria-label="Aquarium care hub"
            className="card p-5 sm:p-6 mb-10 border-l-4 border-l-[#7BAA35] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <span className="tag mb-2 inline-block">Care Hub</span>
              <h2 className="text-lg sm:text-xl font-semibold text-[#17211B] mb-1">
                Thinking about keeping fish?
              </h2>
              <p className="text-sm text-[#5E6B63] leading-relaxed max-w-2xl">
                The Aquarium Care hub covers responsible setup, water quality, feeding, and when to
                seek qualified help — educational planning, not veterinary advice.
              </p>
            </div>
            <Link href="/aquarium-care" className="btn-primary text-sm shrink-0">
              Open Aquarium Care →
            </Link>
          </aside>

          <section aria-labelledby="freshwater-heading">
            <h2 id="freshwater-heading" className="section-title">Freshwater &amp; Aquarium Fish</h2>
            <p className="section-subtitle max-w-2xl">
              Popular aquarium and pond fish. Each profile distinguishes responsible aquarium
              keeping from wild fish and links to the relevant care basics.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {freshwater.map((f) => (
                <Link
                  key={f.href}
                  href={f.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {f.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{f.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="marine-heading" className="mt-12">
            <h2 id="marine-heading" className="section-title">Marine &amp; Ocean Fish</h2>
            <p className="section-subtitle max-w-2xl">
              Ocean fish covered as wildlife, with cautious conservation notes and clear distinction
              from aquarium pets. Several of these are group-level overviews.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {marine.map((f) => (
                <Link
                  key={f.href}
                  href={f.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {f.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{f.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="prose-content mt-12 max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">About Fish Profiles</h2>
            <p>
              Fish profiles on FaunaHub cover classification, appearance, habitat, diet, and
              behaviour, with cautious, source-reviewed wording. Where a common name spans many
              species — such as &quot;tetra&quot;, &quot;catfish&quot;, &quot;ray&quot;, or
              &quot;pufferfish&quot; — the page is a group-level overview rather than a single-species
              account, and a representative reference species is named. Conservation status varies by
              species and should be checked against current authoritative sources.
            </p>
          </section>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link
              href="/animal-encyclopedia/marine-animals"
              className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
            >
              <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                Marine Animals
              </h3>
              <p className="text-xs text-[#5E6B63]">
                Whales, dolphins, sharks, and invertebrates of the ocean.
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
                Browse all animal categories including mammals, birds, reptiles, and insects.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
