import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

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
    title: "Wolf vs Dog",
    question: "How similar are wolves and domestic dogs? What are the real differences?",
    href: "/compare/wolf-vs-dog",
    icons: "🐺 vs 🐕",
    tags: ["Mammals", "Canines", "Domestic vs Wild"],
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
        <header className="bg-white border-b border-[#E4E8ED] py-12 sm:py-16">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#9CA5AF] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#2A7A4B] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#1C2B3A] font-medium" aria-current="page">Compare</span>
            </nav>
            <div className="max-w-2xl">
              <span className="tag mb-4 inline-block">Animal Comparisons</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-4">
                Animal Comparisons
              </h1>
              <p className="text-base sm:text-lg text-[#3E4F60] leading-relaxed">
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
                className="card p-6 hover:shadow-md hover:border-[#c6e8d4] transition-all group hover:no-underline"
              >
                <div className="text-3xl mb-3 font-mono">{item.icons}</div>
                <h3 className="text-lg font-bold text-[#1C2B3A] group-hover:text-[#2A7A4B] mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7684] mb-4">{item.question}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <span className="text-xs font-medium text-[#2A7A4B]">
                  View comparison →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 p-5 bg-[#f0faf4] border border-[#c6e8d4] rounded-xl">
            <h3 className="text-sm font-semibold text-[#1E5C38] mb-2">
              More comparisons coming soon
            </h3>
            <p className="text-sm text-[#3E4F60]">
              Planned comparisons include cat breeds, dog breeds, domestic vs wild animals,
              and more wildlife species. Comparisons are added once sufficient data from
              authoritative sources can be verified.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
