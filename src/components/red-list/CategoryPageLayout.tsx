import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import SpeciesBrowser from "@/components/red-list/SpeciesBrowser";
import DataLimitations from "@/components/red-list/DataLimitations";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { recordInternalHref } from "@/lib/red-list/helpers";
import { RED_LIST_LAST_REVIEW } from "@/lib/red-list/methodology";
import type { RedListSpeciesRecord } from "@/lib/red-list/types";

interface RelatedLinkItem {
  label: string;
  href: string;
  description?: string;
}

interface CategoryPageLayoutProps {
  breadcrumbLabel: string;
  kicker: string;
  h1: string;
  intro: ReactNode;
  path: string;
  records: readonly RedListSpeciesRecord[];
  /** Hide the per-record group line (used on group pages). */
  hideGroup?: boolean;
  faq: { question: string; answer: string }[];
  related: { title: string; links: RelatedLinkItem[] }[];
  /** Short, original intro for the methodology callout. */
  methodologyExtra?: string;
}

export default function CategoryPageLayout({
  breadcrumbLabel,
  kicker,
  h1,
  intro,
  path,
  records,
  hideGroup,
  faq,
  related,
  methodologyExtra,
}: CategoryPageLayoutProps) {
  // Prefer internal pages; fall back to the IUCN lookup so every item has a URL.
  const itemListResolved = records.map((r, i) => {
    const internal = recordInternalHref(r);
    return {
      name: `${r.commonName} (${r.scientificName})`,
      url: internal ? `https://faunahub.com${internal}` : r.iucnUrl ?? "",
      position: i + 1,
    };
  });

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      {
        name: "Endangered Animals",
        url: "https://faunahub.com/endangered-animals",
      },
      { name: breadcrumbLabel, url: `https://faunahub.com${path}` },
    ]),
    ...(itemListResolved.length > 0 ? [itemListSchema(itemListResolved)] : []),
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
                { label: "Endangered Animals", href: "/endangered-animals" },
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
            <p className="mt-4 text-sm text-[#5E6B63]">
              {records.length} record{records.length === 1 ? "" : "s"} in this
              view · last reviewed{" "}
              <time dateTime={RED_LIST_LAST_REVIEW}>{RED_LIST_LAST_REVIEW}</time>
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-10">
          {methodologyExtra && (
            <p className="text-sm text-[#5E6B63] max-w-3xl -mt-2">
              {methodologyExtra}
            </p>
          )}
          <DataLimitations />

          <section aria-labelledby="records-heading">
            <h2 id="records-heading" className="sr-only">
              {breadcrumbLabel} records
            </h2>
            <SpeciesBrowser
              records={records}
              hideGroup={hideGroup}
              facets={{
                group: !hideGroup,
                category: !!hideGroup,
                region: true,
                status: true,
              }}
            />
          </section>

          <div className="grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2">
              <FAQBlock items={faq} />
            </section>
            <aside className="space-y-6">
              {related.map((group) => (
                <RelatedLinks
                  key={group.title}
                  title={group.title}
                  links={group.links}
                />
              ))}
            </aside>
          </div>

          <LastUpdated date={RED_LIST_LAST_REVIEW} />
        </div>
      </main>
    </>
  );
}
