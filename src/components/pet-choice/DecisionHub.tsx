import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import type { DecisionPage } from "@/lib/pet-choice/data";
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/schema";

interface DecisionHubProps {
  parentHub: DecisionPage["parentHub"];
  hubLabel: string;
  parentPath: string;
  parentLabel: string;
  h1: string;
  intro: string;
  decisionPages: DecisionPage[];
  hubFaqs: { question: string; answer: string }[];
  faqTitle: string;
  lastUpdated: string;
  /** Optional extra section rendered between the tool cards and the FAQ.
   * Used for example by the dog/cat breed hubs to surface specific
   * breed-profile cards alongside the decision pages. */
  extraSection?: ReactNode;
}

export default function DecisionHub({
  parentHub,
  hubLabel,
  parentPath,
  parentLabel,
  h1,
  intro,
  decisionPages,
  hubFaqs,
  faqTitle,
  lastUpdated,
  extraSection,
}: DecisionHubProps) {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: parentLabel, url: `https://faunahub.com${parentPath}` },
    ...(parentPath === parentHub
      ? []
      : [{ name: hubLabel, url: `https://faunahub.com${parentHub}` }]),
  ]);

  const itemList = itemListSchema(
    decisionPages.map((p, i) => ({
      name: p.pageHeading,
      url: `https://faunahub.com${parentHub}/${p.slug}`,
      position: i + 1,
    }))
  );

  const faqLd = faqSchema(hubFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, itemList, faqLd]),
        }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-10 sm:py-14">
          <div className="container-content">
            <Breadcrumbs
              items={
                parentPath === parentHub
                  ? [{ label: parentLabel }]
                  : [
                      { label: parentLabel, href: parentPath },
                      { label: hubLabel },
                    ]
              }
            />
            <p className="mb-3">
              <span className="tag">{hubLabel}</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              {h1}
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              {intro}
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-10">
          <section aria-labelledby="pages-heading">
            <h2 id="pages-heading" className="section-title">
              Decision pages
            </h2>
            <p className="section-subtitle">
              Each page covers one common decision. Read more than one — most
              households fit several of these intents at once.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {decisionPages.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`${parentHub}/${p.slug}`}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                      {p.shortIntent}
                    </p>
                    <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                      {p.pageHeading}
                    </p>
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">
                      {p.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="grid sm:grid-cols-2 gap-4 not-prose">
            <Link
              href="/tools/pet-breed-selector"
              className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition"
            >
              <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                Free tool
              </p>
              <p className="text-base font-semibold text-[#17211B]">
                Try the Pet Breed Selector →
              </p>
              <p className="text-sm text-[#5E6B63] mt-1">
                A short questionnaire that surfaces relevant decision pages.
              </p>
            </Link>
            <Link
              href="/tools/pet-life-stage-calculator"
              className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition"
            >
              <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                Free tool
              </p>
              <p className="text-base font-semibold text-[#17211B]">
                Pet Life Stage Calculator →
              </p>
              <p className="text-sm text-[#5E6B63] mt-1">
                Estimate life stage and general care focus across species.
              </p>
            </Link>
          </div>

          <DisclaimerBlock type="veterinary" />

          {extraSection}

          <FAQBlock items={hubFaqs} title={faqTitle} />

          <LastUpdated date={lastUpdated} />
        </div>
      </main>
    </>
  );
}
