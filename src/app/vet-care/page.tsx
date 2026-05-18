import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/schema";
import { VET_CARE_ARTICLES } from "@/lib/vet-care/data";
import { VET_CARE_SOURCE_REVIEW_NOTE } from "@/lib/educational/types";

const LAST_UPDATED = "2026-05-18";

export const metadata: Metadata = buildMetadata({
  title: "Vet Care — Routine, Emergency & First-Visit Planning",
  description:
    "Educational vet care pages: routine care costs, emergency cost planning, first-visit checklist, questions to ask, and when to call an emergency vet.",
  path: "/vet-care",
});

const HUB_FAQS = [
  {
    question: "Are these pages veterinary advice?",
    answer:
      "No. They are educational overviews. For decisions about a specific pet's care, consult a licensed veterinarian who can examine the animal directly.",
  },
  {
    question: "Why don't you publish vet prices?",
    answer:
      "Veterinary prices vary too widely by country, region, clinic, time of day, and case to be quoted responsibly. Local quotes from at least two clinics are far more reliable than a generalised figure.",
  },
  {
    question: "What should I do in a true emergency?",
    answer:
      "Contact a licensed veterinarian or emergency animal clinic immediately. The when-to-call-an-emergency-vet page lists common warning signs, but it is not exhaustive. If in doubt, call.",
  },
  {
    question: "How does this hub fit with the pet insurance hub?",
    answer:
      "Vet care and insurance planning are closely linked. Many owners use these pages alongside the insurance hub and pet cost calculator to think about routine, emergency, and reimbursement scenarios together.",
  },
];

export default function VetCareHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Vet Care", url: "https://faunahub.com/vet-care" },
  ]);
  const itemList = itemListSchema(
    VET_CARE_ARTICLES.map((a, i) => ({
      name: a.pageHeading,
      url: `https://faunahub.com${a.path}`,
      position: i + 1,
    }))
  );
  const faqLd = faqSchema(HUB_FAQS);

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
            <Breadcrumbs items={[{ label: "Vet Care" }]} />
            <p className="mb-3">
              <span className="tag">Vet Care</span>{" "}
              <span className="tag ml-1">Educational</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Vet Care — Planning Pages
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Practical, cautious pages on routine care costs, emergency
              planning, and the questions that matter at a veterinary visit.
              Educational only — for clinical decisions, consult a licensed
              veterinarian who can examine your pet directly.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-12">
          <section aria-labelledby="articles-heading">
            <h2 id="articles-heading" className="section-title">
              Pages in this hub
            </h2>
            <p className="section-subtitle">
              Each page covers one specific topic. Read the one closest to
              your situation, then explore the linked pages from there.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VET_CARE_ARTICLES.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={a.path}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                      {a.pageHeading}
                    </p>
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">
                      {a.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="tools-heading">
            <h2 id="tools-heading" className="section-title">
              Use the tools and guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 not-prose">
              <Link
                href="/tools/pet-cost-calculator"
                className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition"
              >
                <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                  Free tool
                </p>
                <p className="text-base font-semibold text-[#17211B]">
                  Pet Cost Calculator →
                </p>
                <p className="text-sm text-[#5E6B63] mt-1">
                  Estimate monthly, annual, and first-year veterinary and
                  insurance budgets.
                </p>
              </Link>
              <Link
                href="/pet-insurance"
                className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition"
              >
                <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                  Related hub
                </p>
                <p className="text-base font-semibold text-[#17211B]">
                  Pet Insurance Overview →
                </p>
                <p className="text-sm text-[#5E6B63] mt-1">
                  How insurance generally works and the trade-offs vs an
                  emergency fund.
                </p>
              </Link>
            </div>
          </section>

          <DisclaimerBlock type="veterinary" />

          <FAQBlock items={HUB_FAQS} title="Vet Care — Frequently Asked Questions" />

          <aside
            role="note"
            aria-label="Source review note"
            className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
          >
            <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
            <p className="leading-relaxed">{VET_CARE_SOURCE_REVIEW_NOTE}</p>
            <p className="mt-2 leading-relaxed">
              <strong className="text-[#2C3A2F]">Source review required.</strong>{" "}
              No external citations have been added to this hub. For
              authoritative information, consult the references listed above
              and a licensed veterinarian.
            </p>
          </aside>

          <LastUpdated date={LAST_UPDATED} />
        </div>
      </main>
    </>
  );
}
