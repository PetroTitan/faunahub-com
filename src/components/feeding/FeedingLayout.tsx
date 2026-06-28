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
 * Shared, accessible layout for the Animal Food & Diet Safety cluster.
 * Centralises the header, a MANDATORY, prominent veterinary-boundary note on
 * every page, schema (BreadcrumbList + FAQPage where a real FAQ exists), and
 * related links. The note is boundary language, never an excuse for advice.
 */
export default function FeedingLayout({
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
          {/* MANDATORY veterinary-boundary note — present on every page in this cluster. */}
          <aside
            role="note"
            aria-label="Important: educational only, not veterinary advice"
            className="card p-5 sm:p-6 mb-12 border-l-4 border-l-[#C2622B] bg-[#FBF3EC] max-w-3xl"
          >
            <h2 className="text-sm font-semibold text-[#8A4216] uppercase tracking-wider mb-2">
              Educational only — not veterinary advice
            </h2>
            <p className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed">
              This page is general educational information about animal diets and feeding safety. It is
              not veterinary advice, diagnosis, treatment, dosage, or emergency guidance, and it does
              not provide feeding plans, portion sizes, or recipes. For any decision about a specific
              animal&apos;s diet or health, consult a qualified veterinarian. If you suspect an animal
              has eaten something harmful, contact a veterinarian, an animal poison-control service, or
              your local emergency service right away — do not wait.
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
