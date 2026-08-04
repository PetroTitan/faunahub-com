import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import {
  COMPARE_BASE,
  COMPARISON_CATEGORIES,
  PUBLISHED_COMPARISON_COUNT,
  categoryPath,
} from "@/lib/animal-compare";

export const metadata: Metadata = buildMetadata({
  title: "Animal Comparisons — Side-by-Side Wildlife & Pet Facts",
  description:
    "Direct animal comparisons covering size, strength, habitat, behavior, and key differences. Clear, structured answers to common animal questions.",
  path: "/compare",
});

const comparisons = [
  {
    title: "Lion vs Tiger",
    question: "Which is the bigger cat? Which is stronger? Where do they live?",
    href: "/compare/lion-vs-tiger",
    icons: "🦁 vs 🐯",
    tags: ["Mammals", "Big Cats", "Wildlife"],
  },
  {
    title: "Leopard vs Jaguar",
    question: "How do you tell two similar-looking spotted cats apart?",
    href: "/compare/leopard-vs-jaguar",
    icons: "🐆 vs 🐆",
    tags: ["Mammals", "Big Cats", "Identification"],
  },
  {
    title: "Cheetah vs Leopard",
    question: "Solid spots vs rosettes — which is which, and how do they hunt?",
    href: "/compare/cheetah-vs-leopard",
    icons: "🐆 vs 🐆",
    tags: ["Mammals", "Cats", "Identification"],
  },
  {
    title: "Wolf vs Dog",
    question: "How similar are wolves and domestic dogs? What are the real differences?",
    href: "/compare/wolf-vs-dog",
    icons: "🐺 vs 🐕",
    tags: ["Mammals", "Canines", "Domestic vs Wild"],
  },
  {
    title: "Alligator vs Crocodile",
    question: "Snout, teeth, and range — three reliable diagnostics.",
    href: "/compare/alligator-vs-crocodile",
    icons: "🐊 vs 🐊",
    tags: ["Reptiles", "Crocodilians", "Identification"],
  },
  {
    title: "Falcon vs Eagle",
    question: "Two raptor groups, two flight styles, two different families.",
    href: "/compare/falcon-vs-eagle",
    icons: "🦅 vs 🦅",
    tags: ["Birds", "Raptors", "Identification"],
  },
  {
    title: "Rabbit vs Guinea Pig",
    question: "Different orders, different care needs — which suits which household?",
    href: "/compare/rabbit-vs-guinea-pig",
    icons: "🐇 vs 🐹",
    tags: ["Small Pets", "Care"],
  },
];

export default function ComparePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Compare", url: "https://faunahub.com/compare" },
  ]);

  const itemList = itemListSchema(
    comparisons.map((c, i) => ({
      name: c.title,
      url: `https://faunahub.com${c.href}`,
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
        <header className="bg-white border-b border-[#DDE6DD] py-12 sm:py-16">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Compare</span>
            </nav>
            <div className="max-w-2xl">
              <span className="tag mb-4 inline-block">Animal Comparisons</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4">
                Animal Comparisons
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Side-by-side comparisons of animals, species, and breeds — with structured tables,
                key differences, similarities, and clear answers to common questions.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <h2 className="section-title">Available Comparisons</h2>
          <p className="section-subtitle">
            Each comparison includes a direct answer, data table, key differences, and FAQ.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {comparisons.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card p-6 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
              >
                <div className="text-3xl mb-3 font-mono">{item.icons}</div>
                <h3 className="text-lg font-bold text-[#17211B] group-hover:text-[#063F2A] mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5E6B63] mb-4">{item.question}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <span className="text-xs font-medium text-[#063F2A]">
                  View comparison →
                </span>
              </Link>
            ))}
          </div>

          {/*
            These seven pages predate the Animal Compare Center and are kept at
            their original URLs rather than duplicated into it — the Compare
            Center registers them as external so no pair is ever published
            twice. This block used to say more comparisons were "planned",
            including domestic-vs-wild, which has been live for some time; it now
            points readers at the cluster that actually holds them.
          */}
          <div className="mt-10 p-5 sm:p-6 bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl">
            <h3 className="text-base font-semibold text-[#0F5A3A] mb-2">
              The full comparison library is the Animal Compare Center
            </h3>
            <p className="text-sm text-[#2C3A2F] mb-4">
              The {comparisons.length} pages above are FaunaHub&apos;s original
              comparisons and stay at these addresses. Everything added since
              lives in the Animal Compare Center, which now holds{" "}
              {PUBLISHED_COMPARISON_COUNT} comparisons across{" "}
              {COMPARISON_CATEGORIES.length} categories, each with a quick
              answer, a side-by-side table, the taxonomic relationship and the
              sources behind it.
            </p>
            <p className="mb-4">
              <Link
                href={COMPARE_BASE}
                className="inline-block rounded-full bg-[#063F2A] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0A5638] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
              >
                Browse all {PUBLISHED_COMPARISON_COUNT} comparisons
              </Link>
            </p>
            <ul className="not-prose flex flex-wrap gap-2 list-none p-0 m-0">
              {COMPARISON_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href={categoryPath(category.id)}
                    className="inline-block rounded-full border border-[#CFE0A8] bg-white px-3 py-1.5 text-xs font-medium text-[#063F2A] transition-colors hover:bg-[#EFF4E0] hover:no-underline"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
