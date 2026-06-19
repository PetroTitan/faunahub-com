import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import GroupCard from "@/components/taxonomy/GroupCard";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { TAXONOMY_CORE_SOURCES, TAXONOMY_LAST_REVIEW } from "@/lib/taxonomy/sources";
import type { AnimalTaxonomyGroup } from "@/lib/taxonomy/types";

interface RelatedLinkItem {
  label: string;
  href: string;
  description?: string;
}

export default function TaxonomyGroupLayout({
  breadcrumbLabel,
  kicker,
  h1,
  intro,
  path,
  groups,
  faq,
  related,
}: {
  breadcrumbLabel: string;
  kicker: string;
  h1: string;
  intro: ReactNode;
  path: string;
  groups: AnimalTaxonomyGroup[];
  faq: { question: string; answer: string }[];
  related: { title: string; links: RelatedLinkItem[] }[];
}) {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Taxonomy", url: "https://faunahub.com/animal-taxonomy" },
      { name: breadcrumbLabel, url: `https://faunahub.com${path}` },
    ]),
    itemListSchema(
      groups.map((gr, i) => ({
        name: gr.label,
        url: `https://faunahub.com${path}#${gr.slug}`,
        position: i + 1,
      })),
    ),
    ...(faq.length > 0 ? [faqSchema(faq)] : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD]">
          <div className="container-content pt-4 pb-10">
            <Breadcrumbs
              items={[
                { label: "Animal Taxonomy", href: "/animal-taxonomy" },
                { label: breadcrumbLabel },
              ]}
            />
            <p className="text-xs uppercase tracking-wider text-[#7BAA35] font-semibold mb-3">
              {kicker}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] max-w-3xl leading-tight">
              {h1}
            </h1>
            <div className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed space-y-3">
              {intro}
            </div>
          </div>
        </header>

        <div className="container-content py-10 space-y-10">
          <section aria-label={`${breadcrumbLabel} groups`}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {groups.map((gr) => (
                <li key={gr.slug} id={gr.slug}>
                  <GroupCard group={gr} />
                </li>
              ))}
            </ul>
          </section>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section aria-labelledby="src-heading">
                <h2 id="src-heading" className="text-2xl font-bold text-[#17211B] mb-3">
                  Sources
                </h2>
                <ul className="space-y-2 list-none">
                  {TAXONOMY_CORE_SOURCES.map((s) => (
                    <li key={s.url} className="text-sm text-[#2C3A2F]">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A]"
                      >
                        {s.label}
                      </a>
                      {s.note && <span className="text-[#8A958E]"> — {s.note}</span>}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#8A958E] mt-3">
                  Coverage is representative, not a complete inventory. Taxonomy
                  changes as science improves, and species counts vary by source.
                </p>
              </section>
              {faq.length > 0 && <FAQBlock items={faq} />}
            </div>
            <aside className="space-y-6">
              {related.map((grp) => (
                <RelatedLinks key={grp.title} title={grp.title} links={grp.links} />
              ))}
            </aside>
          </div>

          <LastUpdated date={TAXONOMY_LAST_REVIEW} />
        </div>
      </main>
    </>
  );
}
