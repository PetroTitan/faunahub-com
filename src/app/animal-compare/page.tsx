import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import ComparisonCard from "@/components/compare/ComparisonCard";
import ComparisonFinder from "@/components/compare/ComparisonFinder";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  COMPARE_BASE,
  COMPARISON_CATEGORIES,
  COMPARISONS,
  EXTERNAL_COMPARISONS,
  categoryPath,
  compareAnimalBySlug,
  getPrimaryComparisonsByCategory,
} from "@/lib/animal-compare";
import { COMPARISON_METHODOLOGY_NOTE, COMPARISON_SCOPE_NOTE } from "@/lib/animal-compare/sources";

export const metadata: Metadata = buildMetadata({
  title: "Animal Compare Center — Compare Animals, Pets & Wildlife",
  description:
    "Side-by-side animal comparisons that explain what actually differs: taxonomy, identification, habitat, diet, behaviour and adaptations. No rankings, no fight predictions.",
  path: COMPARE_BASE,
});

const HUB_FAQS = [
  {
    question: "How does FaunaHub decide which animals to compare?",
    answer:
      "Every pair has to earn its page. A comparison is published only where the two animals are genuinely confused for one another, share a meaningful taxonomic relationship, occupy similar ecological roles, or illustrate a clear contrast in adaptation — and only where both already have a FaunaHub profile behind them. Pairs that would produce generic content, or that exist only because both animals are popular, are rejected.",
  },
  {
    question: "Why is there no page for the two animals I picked?",
    answer:
      "Most likely one of three reasons. The pairing may not be meaningful enough to say anything useful about, one of the animals may not have a profile on FaunaHub yet, or the page may simply not be written. Comparisons are not generated automatically from every possible combination, which is deliberate: a page assembled that way would have nothing specific to tell you.",
  },
  {
    question: "Do these pages say which animal would win a fight?",
    answer:
      "No, and they never will. Confrontation framing produces content that is unverifiable, sensational and useless for identifying an animal or understanding how it lives. These pages exist to help you tell two animals apart, understand how they are related, and see how each fits its environment. There are no strength rankings, bite-force tables or outcome predictions anywhere in this section.",
  },
  {
    question: "Are the comparisons about pets buying guides?",
    answer:
      "No. Pages involving domestic animals describe the species — social biology, diet type, activity pattern, typical lifespan and what those imply about living alongside them. They do not name a best pet, quote prices, recommend suppliers, prescribe diets or portions, or give housing, breeding or veterinary instructions. Care decisions belong with a qualified veterinarian.",
  },
  {
    question: "Where do the facts come from?",
    answer:
      "Comparisons are assembled from the sourced animal profiles behind them rather than written as standalone claims, so a comparison's reference list is the union of the two animals' verified sources plus named source families such as the IUCN Red List. Where a dimension cannot be supported from the underlying profiles, it is omitted rather than filled in with a placeholder.",
  },
];

export default function CompareHubPage() {
  const url = `https://faunahub.com${COMPARE_BASE}`;

  // Finder data. Only animals that actually appear in a published comparison,
  // so the control can never offer a selection that leads nowhere useful.
  const animalSlugs = new Set<string>();
  for (const record of COMPARISONS) {
    animalSlugs.add(record.animalA.slug);
    animalSlugs.add(record.animalB.slug);
  }
  const finderAnimals = [...animalSlugs]
    .map((slug) => compareAnimalBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .map((a) => ({ slug: a.slug, name: a.name }));

  const pairIndex: Record<string, string> = {};
  const byAnimal: Record<string, string[]> = {};
  const titles: Record<string, string> = {};
  for (const record of COMPARISONS) {
    pairIndex[record.canonicalPairKey] = record.slug;
    titles[record.slug] = record.title;
    for (const slug of [record.animalA.slug, record.animalB.slug]) {
      (byAnimal[slug] ??= []).push(record.slug);
    }
  }

  const popular = COMPARISONS.filter((r) => r.confidence === "strong").slice(0, 6);

  return (
    <main id="main-content" className="mx-auto w-full max-w-5xl px-4 sm:px-6 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Animal Compare Center", url }]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              COMPARISON_CATEGORIES.map((category, index) => ({
                name: category.name,
                url: `https://faunahub.com${categoryPath(category.id)}`,
                position: index + 1,
              })),
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HUB_FAQS)) }}
      />

      <Breadcrumbs items={[{ label: "Animal Compare Center" }]} />

      <header className="pt-2 pb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17211B] leading-tight mb-4">
          Animal Compare Center
        </h1>
        <p className="text-lg text-[#2C3A2F] leading-relaxed max-w-3xl mb-3">
          Side-by-side comparisons that answer the question people actually have:
          which one is which, how are they related, and what is genuinely
          different about how they live.
        </p>
        <p className="text-base text-[#5E6B63] leading-relaxed max-w-3xl">
          {COMPARISONS.length} comparisons across {COMPARISON_CATEGORIES.length}{" "}
          categories, each built from the sourced animal profiles behind it. No
          rankings, no fight predictions, and no page that exists only because
          both animals are well known.
        </p>
      </header>

      <div className="mb-12">
        <ComparisonFinder
          animals={finderAnimals}
          pairIndex={pairIndex}
          byAnimal={byAnimal}
          titles={titles}
        />
      </div>

      <section aria-labelledby="popular-heading" className="mb-12">
        <h2
          id="popular-heading"
          className="text-2xl font-bold text-[#17211B] mb-4"
        >
          Popular comparisons
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
          {popular.map((record) => (
            <ComparisonCard key={record.slug} record={record} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="categories-heading" className="mb-12">
        <h2
          id="categories-heading"
          className="text-2xl font-bold text-[#17211B] mb-4"
        >
          Browse by category
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 list-none p-0">
          {COMPARISON_CATEGORIES.map((category) => {
            const count = getPrimaryComparisonsByCategory(category.id).length;
            return (
              <li
                key={category.id}
                className="rounded-2xl border border-[#DDE6DD] bg-white p-5 transition-colors hover:border-[#CFE0A8]"
              >
                <h3 className="text-base font-bold text-[#17211B] mb-1.5">
                  <Link
                    href={categoryPath(category.id)}
                    className="hover:text-[#063F2A]"
                  >
                    {category.name}
                  </Link>
                </h3>
                <p className="text-sm text-[#5E6B63] leading-relaxed mb-2">
                  {category.metaDescription}
                </p>
                <p className="text-xs uppercase tracking-wide text-[#8A958E]">
                  {count} {count === 1 ? "comparison" : "comparisons"}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="all-heading" className="mb-12">
        <h2 id="all-heading" className="text-2xl font-bold text-[#17211B] mb-4">
          Browse all comparisons
        </h2>
        <ul className="flex flex-wrap gap-2 list-none p-0">
          {COMPARISONS.map((record) => (
            <li key={record.slug}>
              <Link
                href={`${COMPARE_BASE}/${record.slug}`}
                className="inline-block rounded-full border border-[#DDE6DD] bg-white px-3.5 py-1.5 text-sm text-[#2C3A2F] transition-colors hover:border-[#CFE0A8] hover:no-underline"
              >
                {record.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="external-heading" className="mb-12">
        <h2
          id="external-heading"
          className="text-2xl font-bold text-[#17211B] mb-2"
        >
          Comparisons published elsewhere on FaunaHub
        </h2>
        <p className="text-sm text-[#5E6B63] leading-relaxed max-w-3xl mb-4">
          These pairs already have their own hand-written pages. They are not
          duplicated here — each pair keeps a single address on the site.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 list-none p-0">
          {EXTERNAL_COMPARISONS.map((item) => (
            <li
              key={item.href}
              className="rounded-xl border border-[#DDE6DD] bg-white p-4"
            >
              <Link
                href={item.href}
                className="text-sm font-semibold text-[#063F2A] hover:no-underline"
              >
                {item.title}
              </Link>
              <p className="text-sm text-[#5E6B63] leading-relaxed mt-1">
                {item.summary}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="method-heading"
        className="mb-12 rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6"
      >
        <h2 id="method-heading" className="text-2xl font-bold text-[#17211B] mb-3">
          How FaunaHub builds comparisons
        </h2>
        <p className="text-sm text-[#5E6B63] leading-relaxed mb-3">
          {COMPARISON_METHODOLOGY_NOTE}
        </p>
        <p className="text-sm text-[#5E6B63] leading-relaxed">
          {COMPARISON_SCOPE_NOTE}
        </p>
      </section>

      <FAQBlock items={HUB_FAQS} title="About the Compare Center" />
    </main>
  );
}
