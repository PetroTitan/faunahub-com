import type { ReactNode } from "react";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export interface CrumbItem {
  name: string;
  href: string;
}
export interface RelatedItem {
  label: string;
  href: string;
  description?: string;
}

interface SourcePageLayoutProps {
  /** Breadcrumb trail (excluding Home, which is prepended). The last item is the current page. */
  crumbs: CrumbItem[];
  kicker: string;
  h1: string;
  intro: ReactNode;
  /** Main body sections. */
  children: ReactNode;
  related: RelatedItem[];
  faq?: { question: string; answer: string }[];
  /** Optional override for the standing educational-only note. */
  note?: ReactNode;
  modified: string;
}

/**
 * Shared, accessible layout for the Animal Research Sources cluster. Centralises
 * the header, the standing "educational only — not veterinary/legal advice"
 * note, schema (BreadcrumbList + FAQPage where a real FAQ exists), and related
 * links so every page in the cluster stays consistent and metadata-safe.
 */
export default function SourcePageLayout({
  crumbs,
  kicker,
  h1,
  intro,
  children,
  related,
  faq,
  note,
  modified,
}: SourcePageLayoutProps) {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      ...crumbs.map((c) => ({ name: c.name, url: `https://faunahub.com${c.href}` })),
    ]),
    ...(faq && faq.length > 0 ? [faqSchema(faq)] : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <header className="bg-gradient-to-b from-[#EFF4E0] via-[#f7faf7] to-white border-b border-[#DDE6DD] py-12 sm:py-16">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex flex-wrap gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              {crumbs.map((c, i) => (
                <span key={c.href} className="flex gap-2">
                  <span aria-hidden="true">/</span>
                  {i === crumbs.length - 1 ? (
                    <span className="text-[#17211B] font-medium" aria-current="page">{c.name}</span>
                  ) : (
                    <Link href={c.href} className="hover:text-[#063F2A] hover:no-underline">{c.name}</Link>
                  )}
                </span>
              ))}
            </nav>
            <div className="max-w-3xl">
              <span className="tag mb-4 inline-block">{kicker}</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17211B] mb-4 leading-tight">
                {h1}
              </h1>
              <div className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">{intro}</div>
            </div>
          </div>
        </header>

        <div className="container-content py-12">
          <aside
            role="note"
            aria-label="How to use this page"
            className="card p-5 sm:p-6 mb-12 border-l-4 border-l-[#7BAA35] max-w-3xl"
          >
            {note ?? (
              <>
                <h2 className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2">
                  Educational use only
                </h2>
                <p className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed">
                  FaunaHub is an educational resource and is not affiliated with, endorsed by, or
                  certified by any of the organisations named here. This page explains how to find and
                  read animal sources; it is not veterinary, legal, or regulatory advice. For decisions
                  about a specific animal, consult a qualified veterinarian, and for wildlife or
                  invasive-species questions, contact the relevant official wildlife authority.
                </p>
              </>
            )}
          </aside>

          <div className="max-w-3xl">{children}</div>

          <div className="max-w-3xl mt-12">
            <RelatedLinks title="Related guides" links={related} />
            <div className="mt-8">
              <LastUpdated date={modified} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

/** Small presentational helpers shared across the cluster. */
export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={`${id}-h`} className="mb-10">
      <h2 id={`${id}-h`} className="section-title">{title}</h2>
      <div className="space-y-4 text-[#2C3A2F] leading-relaxed">{children}</div>
    </section>
  );
}

export function FaqBlock({ faq }: { faq: { question: string; answer: string }[] }) {
  return (
    <section aria-labelledby="faq-h" className="mb-10">
      <h2 id="faq-h" className="section-title">Frequently asked questions</h2>
      <dl className="space-y-4">
        {faq.map((f) => (
          <div key={f.question} className="card p-5">
            <dt className="font-semibold text-[#17211B] mb-1.5">{f.question}</dt>
            <dd className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed">{f.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
