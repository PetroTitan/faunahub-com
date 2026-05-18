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
import { INSURANCE_ARTICLES } from "@/lib/pet-insurance/data";
import {
  INSURANCE_VARIABILITY_WARNING,
  VERIFIED_SOURCE_NOTE,
  sourceTypeLabel,
  type SourceLink,
} from "@/lib/educational/types";

const HUB_SOURCES: SourceLink[] = [
  {
    label: "NAIC — Pet Insurance",
    url: "https://content.naic.org/insurance-topics/pet-insurance",
    type: "insurance-regulator",
    note: "U.S. insurance regulators' consumer overview of pet insurance",
  },
  {
    label: "AVMA — Pet Care Resources",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare",
    type: "veterinary",
    note: "American Veterinary Medical Association consumer pet-care hub",
  },
];

const LAST_UPDATED = "2026-05-18";

export const metadata: Metadata = buildMetadata({
  title: "Pet Insurance — Educational Overview & Cost Planning",
  description:
    "Cautious, source-aware overview of how pet insurance works, what it may cover, common exclusions, and how to compare policies. No provider recommendations.",
  path: "/pet-insurance",
});

const POLICY_CONCEPTS = [
  {
    name: "Premium",
    description:
      "The recurring cost of keeping the policy active, usually monthly or annual.",
  },
  {
    name: "Deductible",
    description:
      "The amount you pay out of pocket before reimbursement begins. May be per-incident or per-year.",
  },
  {
    name: "Reimbursement rate",
    description:
      "The percentage of eligible costs the insurer pays after the deductible.",
  },
  {
    name: "Annual limit",
    description:
      "The maximum total payout per year. Some policies are unlimited; many are capped.",
  },
  {
    name: "Waiting period",
    description:
      "A window after policy start during which certain claims are not eligible.",
  },
  {
    name: "Pre-existing conditions",
    description:
      "Conditions that began or showed signs before the policy started — typically excluded.",
  },
  {
    name: "Exclusions",
    description:
      "Categories or conditions the policy explicitly does not cover.",
  },
  {
    name: "Claim process",
    description:
      "The documentation and timing required to request reimbursement.",
  },
];

const HUB_FAQS = [
  {
    question: "Do you recommend a specific pet insurer?",
    answer:
      "No. FaunaHub does not recommend, rank, or endorse any provider. These pages explain general policy mechanics and the questions to ask before buying. Choice depends on your country, regulator, policies actually available to you, and your specific pet.",
  },
  {
    question: "Is pet insurance worth it?",
    answer:
      "There is no universal answer. Insurance may help some households smooth large unexpected vet bills; others may prefer a dedicated emergency veterinary fund, or a combination of both. The is-pet-insurance-worth-it page goes through trade-offs in detail.",
  },
  {
    question: "Why don't you publish prices?",
    answer:
      "Pet insurance pricing varies by country, provider, policy structure, pet species, age, breed, and health history. Publishing illustrative national averages would be misleading. Quotes for your specific pet — from policies authorised in your country — are the only meaningful source.",
  },
  {
    question: "What sources are these pages based on?",
    answer:
      "These pages are written as cautious educational overviews. Authoritative references include the AVMA, AAHA, Merck Veterinary Manual, official insurance regulators, government consumer protection agencies, and current policy documents. Source review is still required before treating any claim as definitive.",
  },
];

export default function PetInsuranceHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Pet Insurance", url: "https://faunahub.com/pet-insurance" },
  ]);
  const itemList = itemListSchema(
    INSURANCE_ARTICLES.filter((a) => a.kind === "insurance").map((a, i) => ({
      name: a.pageHeading,
      url: `https://faunahub.com${a.path}`,
      position: i + 1,
    }))
  );
  const faqLd = faqSchema(HUB_FAQS);

  const educationArticles = INSURANCE_ARTICLES.filter(
    (a) => a.kind === "insurance"
  );

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
            <Breadcrumbs items={[{ label: "Pet Insurance" }]} />
            <p className="mb-3">
              <span className="tag">Pet Insurance</span>{" "}
              <span className="tag ml-1">Educational</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Pet Insurance — Educational Overview
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Cautious, source-aware educational pages on how pet insurance
              generally works. FaunaHub does not recommend or rank providers.
              These pages help you understand mechanics, ask better questions,
              and read actual policy documents critically.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-12">
          <section
            className="prose-content max-w-3xl"
            aria-labelledby="what-it-is"
          >
            <h2 id="what-it-is">What pet insurance is</h2>
            <p>
              Pet insurance is a contract between an owner and an insurer that
              may reimburse a portion of eligible veterinary costs in exchange
              for a recurring premium. Coverage, exclusions, reimbursement
              rules, deductibles, waiting periods, premiums, and claim
              processes vary by provider, country, policy, pet species, age,
              breed, health history, and local regulation.
            </p>
            <h2>What pet insurance may cover</h2>
            <p>
              Most accident-and-illness policies in widely served markets cover
              veterinary diagnosis and treatment of accidents and illnesses
              that arise after the policy starts. Coverage may include
              diagnostics, surgery, medications, hospitalisation, and
              specialist referrals. Wellness or preventive-care add-ons are
              available in some markets.
            </p>
            <h2>What pet insurance may exclude</h2>
            <p>
              Common exclusions include pre-existing conditions, conditions
              arising during waiting periods, elective or cosmetic procedures,
              and (depending on the policy) certain breed-specific or
              hereditary conditions. Read the actual exclusion list before
              committing — two policies at similar premiums can pay out very
              differently.
            </p>
          </section>

          <section aria-labelledby="concepts-heading">
            <h2 id="concepts-heading" className="section-title">
              Common policy concepts
            </h2>
            <p className="section-subtitle">
              The terms you will see in every policy document. Understanding
              them is more useful than comparing premium quotes alone.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {POLICY_CONCEPTS.map((c) => (
                <li
                  key={c.name}
                  className="rounded-xl border border-[#DDE6DD] bg-white p-5"
                >
                  <p className="text-base font-semibold text-[#17211B] mb-1">
                    {c.name}
                  </p>
                  <p className="text-sm text-[#2C3A2F] leading-relaxed">
                    {c.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="articles-heading">
            <h2 id="articles-heading" className="section-title">
              Educational pages
            </h2>
            <p className="section-subtitle">
              Each page covers one specific concept. Use the order below or
              read whichever is most useful for your situation.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {educationArticles.map((a) => (
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

          <section
            className="prose-content max-w-3xl"
            aria-labelledby="who-heading"
          >
            <h2 id="who-heading">Who may consider pet insurance</h2>
            <ul>
              <li>
                Owners who could face real financial pressure if a single
                large vet bill arrived next week.
              </li>
              <li>
                Households unsure of their ability to consistently maintain a
                separate emergency savings reserve.
              </li>
              <li>
                Owners of species, breeds, or ages where chronic conditions or
                expensive procedures are realistically possible.
              </li>
            </ul>
            <h2>Who may prefer an emergency fund instead</h2>
            <ul>
              <li>
                Owners with strong saving discipline and an existing
                cash-reserve habit.
              </li>
              <li>
                Households whose budget cannot reasonably absorb both
                premiums and recurring monthly pet costs.
              </li>
              <li>
                Owners adopting a pet with significant pre-existing
                conditions excluded by available policies.
              </li>
            </ul>
            <p>
              Many owners use a combination of both — see the{" "}
              <Link
                href="/pet-insurance/pet-insurance-vs-emergency-fund"
                className="text-[#063F2A] font-medium hover:underline"
              >
                pet insurance vs emergency fund
              </Link>{" "}
              page for trade-offs.
            </p>
          </section>

          <aside
            role="note"
            aria-label="Country and policy variability warning"
            className="rounded-xl border border-[#DDE6DD] bg-[#F7F8F3] p-4 text-sm text-[#2C3A2F] leading-relaxed"
          >
            {INSURANCE_VARIABILITY_WARNING}
          </aside>

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
                  Estimate monthly, annual, and first-year cost including an
                  insurance line and emergency fund.
                </p>
              </Link>
              <Link
                href="/guides/pet-budget-checklist"
                className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition"
              >
                <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                  Guide
                </p>
                <p className="text-base font-semibold text-[#17211B]">
                  Pet Budget Checklist →
                </p>
                <p className="text-sm text-[#5E6B63] mt-1">
                  Categories to walk through before adopting.
                </p>
              </Link>
            </div>
          </section>

          <DisclaimerBlock type="veterinary" />

          <FAQBlock
            items={HUB_FAQS}
            title="Pet Insurance — Frequently Asked Questions"
          />

          <section
            aria-labelledby="hub-sources-heading"
            className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6"
          >
            <h2
              id="hub-sources-heading"
              className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2"
            >
              Sources and further reading
            </h2>
            <p className="text-xs text-[#5E6B63] mb-4 leading-relaxed">
              {VERIFIED_SOURCE_NOTE}
            </p>
            <ul className="space-y-3">
              {HUB_SOURCES.map((source) => (
                <li
                  key={source.url}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
                >
                  <span className="inline-flex items-center self-start px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#EFF4E0] text-[#063F2A] border border-[#CFE0A8] uppercase tracking-wide whitespace-nowrap">
                    {sourceTypeLabel(source.type)}
                  </span>
                  <span className="text-sm text-[#2C3A2F] leading-relaxed">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#063F2A] font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2 rounded-sm"
                    >
                      {source.label}
                    </a>
                    {source.note && (
                      <span className="text-[#5E6B63]"> — {source.note}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <LastUpdated date={LAST_UPDATED} />
        </div>
      </main>
    </>
  );
}
