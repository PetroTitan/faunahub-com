import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import ComparisonCard from "@/components/compare/ComparisonCard";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  COMPARE_BASE,
  COMPARISON_CATEGORIES,
  categoryBySlug,
  categoryPath,
  externalComparisonsForCategory,
  getComparisonsByCategory,
  getPrimaryComparisonsByCategory,
} from "@/lib/animal-compare";
import { COMPARISON_METHODOLOGY_NOTE } from "@/lib/animal-compare/sources";

export function generateStaticParams() {
  return COMPARISON_CATEGORIES.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const definition = categoryBySlug(category);
  if (!definition) return {};
  return buildMetadata({
    title: definition.metaTitle,
    description: definition.metaDescription,
    path: `${COMPARE_BASE}/categories/${definition.slug}`,
  });
}

export default async function CategoryHubPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const definition = categoryBySlug(category);
  if (!definition) notFound();

  const path = categoryPath(definition.id);
  const url = `https://faunahub.com${path}`;
  const primary = getPrimaryComparisonsByCategory(definition.id);
  const all = getComparisonsByCategory(definition.id);
  const alsoFiled = all.filter((r) => r.primaryCategory !== definition.id);
  const external = externalComparisonsForCategory(definition.id);
  const featured = primary.slice(0, 3);

  return (
    <main id="main-content" className="mx-auto w-full max-w-5xl px-4 sm:px-6 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Animal Compare Center", url: `https://faunahub.com${COMPARE_BASE}` },
              { name: definition.name, url },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              all.map((record, index) => ({
                name: record.title,
                url: `https://faunahub.com${COMPARE_BASE}/${record.slug}`,
                position: index + 1,
              })),
            ),
          ),
        }}
      />
      {definition.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(definition.faqs)),
          }}
        />
      )}

      <Breadcrumbs
        items={[
          { label: "Animal Compare Center", href: COMPARE_BASE },
          { label: definition.name },
        ]}
      />

      <header className="pt-2 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] leading-tight mb-4">
          {definition.h1}
        </h1>
        {definition.intro.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="text-base text-[#2C3A2F] leading-relaxed mb-3 max-w-3xl"
          >
            {paragraph}
          </p>
        ))}
      </header>

      <section
        aria-labelledby="scope-heading"
        className="rounded-2xl border border-[#DDE6DD] border-l-4 border-l-[#075FA8] bg-white p-5 mb-10"
      >
        <h2
          id="scope-heading"
          className="text-sm font-semibold uppercase tracking-wide text-[#075FA8] mb-1.5"
        >
          What this section does and does not cover
        </h2>
        <p className="text-sm text-[#2C3A2F] leading-relaxed">{definition.scopeNote}</p>
      </section>

      {featured.length > 0 && (
        <section aria-labelledby="featured-heading" className="mb-10">
          <h2
            id="featured-heading"
            className="text-xl sm:text-2xl font-bold text-[#17211B] mb-4"
          >
            Start here
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
            {featured.map((record) => (
              <ComparisonCard key={record.slug} record={record} />
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="how-to-read-heading" className="mb-10">
        <h2
          id="how-to-read-heading"
          className="text-xl sm:text-2xl font-bold text-[#17211B] mb-4"
        >
          How to read these comparisons
        </h2>
        <ul className="space-y-2 max-w-3xl">
          {definition.howToRead.map((item) => (
            <li
              key={item}
              className="text-base text-[#2C3A2F] leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#7BAA35]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="all-heading" className="mb-10">
        <h2 id="all-heading" className="text-xl sm:text-2xl font-bold text-[#17211B] mb-2">
          All {definition.name.toLowerCase()} comparisons
        </h2>
        <p className="text-sm text-[#5E6B63] mb-4">
          {primary.length} {primary.length === 1 ? "comparison is" : "comparisons are"}{" "}
          filed here as their primary category.
        </p>
        {primary.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
            {primary.map((record) => (
              <ComparisonCard key={record.slug} record={record} />
            ))}
          </ul>
        ) : (
          <p className="text-base text-[#2C3A2F]">
            No comparisons are filed here yet. The{" "}
            <Link href={COMPARE_BASE}>Compare Center hub</Link> lists everything
            currently published.
          </p>
        )}
      </section>

      {alsoFiled.length > 0 && (
        <section aria-labelledby="also-heading" className="mb-10">
          <h2 id="also-heading" className="text-xl sm:text-2xl font-bold text-[#17211B] mb-4">
            Also relevant here
          </h2>
          <p className="text-sm text-[#5E6B63] mb-4 max-w-3xl">
            These comparisons are filed under another category but touch on{" "}
            {definition.name.toLowerCase()} directly.
          </p>
          <ul className="flex flex-wrap gap-2 list-none p-0">
            {alsoFiled.map((record) => (
              <li key={record.slug}>
                <Link
                  href={`${COMPARE_BASE}/${record.slug}`}
                  className="inline-block rounded-full border border-[#CFE0A8] bg-[#EFF4E0] px-3.5 py-1.5 text-sm font-medium text-[#063F2A] transition-colors hover:bg-[#E3EDCB] hover:no-underline"
                >
                  {record.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {external.length > 0 && (
        <section aria-labelledby="external-heading" className="mb-10">
          <h2
            id="external-heading"
            className="text-xl sm:text-2xl font-bold text-[#17211B] mb-4"
          >
            Elsewhere on FaunaHub
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 list-none p-0">
            {external.map((item) => (
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
      )}

      <section aria-labelledby="hubs-heading" className="mb-10">
        <h2 id="hubs-heading" className="text-xl sm:text-2xl font-bold text-[#17211B] mb-4">
          Related FaunaHub sections
        </h2>
        <ul className="flex flex-wrap gap-2 list-none p-0">
          {definition.relatedHubPaths.map((hub) => (
            <li key={hub.href}>
              <Link
                href={hub.href}
                className="inline-block rounded-full border border-[#DDE6DD] bg-white px-3.5 py-1.5 text-sm text-[#2C3A2F] transition-colors hover:border-[#CFE0A8] hover:no-underline"
              >
                {hub.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FAQBlock items={definition.faqs} title="Questions about this section" />

      <section
        aria-labelledby="methodology-heading"
        className="mt-10 rounded-2xl border border-[#DDE6DD] bg-white p-5"
      >
        <h2
          id="methodology-heading"
          className="text-sm font-semibold uppercase tracking-wide text-[#063F2A] mb-2"
        >
          How FaunaHub builds comparisons
        </h2>
        <p className="text-sm text-[#5E6B63] leading-relaxed">
          {COMPARISON_METHODOLOGY_NOTE}
        </p>
      </section>

      <nav aria-label="Other comparison categories" className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#5E6B63] mb-3">
          Browse other categories
        </h2>
        <ul className="flex flex-wrap gap-2 list-none p-0">
          {COMPARISON_CATEGORIES.filter((c) => c.id !== definition.id).map((c) => (
            <li key={c.id}>
              <Link
                href={categoryPath(c.id)}
                className="inline-block rounded-full border border-[#DDE6DD] bg-white px-3.5 py-1.5 text-sm text-[#2C3A2F] transition-colors hover:border-[#CFE0A8] hover:no-underline"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
