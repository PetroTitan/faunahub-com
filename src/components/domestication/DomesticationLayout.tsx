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

interface LayoutProps {
  crumbs: CrumbItem[];
  kicker: string;
  h1: string;
  intro: ReactNode;
  children: ReactNode;
  related: RelatedItem[];
  faq?: { question: string; answer: string }[];
  modified: string;
}

/**
 * Shared, accessible layout for the Animal Domestication cluster. Centralises
 * the header, the standing "educational history/ecology — not veterinary,
 * breeding, feeding, training, or livestock advice" note, schema
 * (BreadcrumbList + FAQPage where a real FAQ exists), and related links.
 */
export default function DomesticationLayout({
  crumbs,
  kicker,
  h1,
  intro,
  children,
  related,
  faq,
  modified,
}: LayoutProps) {
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
            aria-label="About this guide"
            className="card p-5 sm:p-6 mb-12 border-l-4 border-l-[#7BAA35] max-w-3xl"
          >
            <h2 className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2">
              Educational history &amp; ecology
            </h2>
            <p className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed">
              This is an educational guide to the history and ecology of domestication. Domestication
              was a long process whose timing and geography are debated and revised as evidence
              changes, so dates and origins are described cautiously. This is not veterinary,
              breeding, feeding, training, or livestock-management advice; for decisions about a
              specific animal, consult a qualified professional.
            </p>
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
