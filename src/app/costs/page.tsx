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
import {
  BUDGET_GUIDES,
  COST_SOURCE_REVIEW_NOTE,
  PET_COST_ARTICLES,
} from "@/lib/pet-cost/data";

const LAST_UPDATED = "2026-05-18";

export const metadata: Metadata = buildMetadata({
  title: "Pet Ownership Costs — Honest Planning Across Species",
  description:
    "Cautious, source-aware pet cost planning frameworks for dogs, cats, rabbits, hamsters, guinea pigs, birds, fish, and reptiles — plus the pet cost calculator.",
  path: "/costs",
});

const COST_CATEGORIES = [
  "Adoption or purchase cost",
  "Food appropriate to species and life stage",
  "Routine vet care",
  "Emergency vet care",
  "Vaccines and preventive care",
  "Grooming",
  "Pet insurance",
  "Supplies and consumables",
  "Toys and enrichment",
  "Training",
  "Boarding or pet sitting",
  "Housing or habitat setup",
  "Time and responsibility",
];

const HUB_FAQS = [
  {
    question: "Why don't you publish a single 'cost per year' number?",
    answer:
      "Because there isn't one. The same pet can cost very different amounts depending on country, city, breed, size, age, veterinarian, insurance situation, food choices, grooming needs, and unpredictable emergencies. Quoting a single number would be misleading. Each cost page lists categories to plan for; the pet cost calculator lets you run your own scenario.",
  },
  {
    question: "Are these pages financial advice?",
    answer:
      "No. They are educational planning frameworks. Decisions about insurance, savings, or major purchases should be made with your own circumstances and, where relevant, a licensed financial professional. Veterinary cost questions belong with your local veterinarian.",
  },
  {
    question: "What's the most overlooked pet cost?",
    answer:
      "Emergency veterinary care and senior-stage care. Most owners plan for monthly recurring costs but underestimate the variable, sometimes large costs that arrive later in a pet's life.",
  },
  {
    question: "Should I buy pet insurance?",
    answer:
      "It depends. Insurance can offset large unexpected bills, but premiums, deductibles, waiting periods, and exclusions vary widely by provider, species, breed, age, and location. Read terms carefully and compare quotes before committing.",
  },
];

export default function CostsHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Pet Ownership Costs", url: "https://faunahub.com/costs" },
  ]);
  const itemList = itemListSchema(
    PET_COST_ARTICLES.map((a, i) => ({
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
            <Breadcrumbs items={[{ label: "Pet Ownership Costs" }]} />
            <p className="mb-3">
              <span className="tag">Cost Planning</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Pet Ownership Costs
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Practical, cautious planning frameworks for the real cost of
              owning different pets. Each page lists the categories you should
              budget for — one-time setup, recurring monthly, yearly checkpoints,
              hidden costs, and emergency planning — without pretending to know
              your local prices.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-12">
          <section aria-labelledby="species-heading">
            <h2 id="species-heading" className="section-title">
              Cost planning by species
            </h2>
            <p className="section-subtitle">
              Each page is a framework, not a fixed estimate. Read the one that
              matches your situation and then run your own numbers in the pet
              cost calculator.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PET_COST_ARTICLES.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={a.path}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                      {a.speciesLabel}
                    </p>
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

          <section aria-labelledby="categories-heading">
            <h2 id="categories-heading" className="section-title">
              Cost categories every pet has
            </h2>
            <p className="section-subtitle">
              Use this list as a starting checklist regardless of species.
            </p>
            <ul className="not-prose rounded-xl border border-[#DDE6DD] bg-white p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm text-[#2C3A2F]">
              {COST_CATEGORIES.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 mt-0.5 text-[#063F2A]"
                  >
                    ●
                  </span>
                  <span>{c}</span>
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
                  Run your own monthly, yearly, and first-year numbers.
                </p>
              </Link>
              <Link
                href="/tools/pet-breed-selector"
                className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition"
              >
                <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                  Free tool
                </p>
                <p className="text-base font-semibold text-[#17211B]">
                  Pet Breed Selector →
                </p>
                <p className="text-sm text-[#5E6B63] mt-1">
                  Surface pet and breed categories that may fit your household.
                </p>
              </Link>
            </div>
          </section>

          <section aria-labelledby="insurance-heading">
            <h2 id="insurance-heading" className="section-title">
              Insurance &amp; emergency care planning
            </h2>
            <p className="section-subtitle">
              Pet insurance is one option for managing large unexpected
              veterinary bills. An emergency fund is another. These pages
              explain the trade-offs without recommending a provider.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 not-prose">
              <Link
                href="/pet-insurance"
                className="rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:no-underline transition"
              >
                <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                  Educational hub
                </p>
                <p className="text-base font-semibold text-[#17211B]">
                  Pet insurance overview →
                </p>
                <p className="text-sm text-[#5E6B63] mt-1">
                  How policies generally work and what to compare.
                </p>
              </Link>
              <Link
                href="/pet-insurance/pet-insurance-vs-emergency-fund"
                className="rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:no-underline transition"
              >
                <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                  Comparison
                </p>
                <p className="text-base font-semibold text-[#17211B]">
                  Insurance vs emergency fund →
                </p>
                <p className="text-sm text-[#5E6B63] mt-1">
                  Trade-offs without hype.
                </p>
              </Link>
              <Link
                href="/vet-care/emergency-vet-costs"
                className="rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:no-underline transition"
              >
                <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                  Vet care
                </p>
                <p className="text-base font-semibold text-[#17211B]">
                  Emergency vet costs →
                </p>
                <p className="text-sm text-[#5E6B63] mt-1">
                  Why emergency care varies and how to plan.
                </p>
              </Link>
              <Link
                href="/vet-care/first-vet-visit-checklist"
                className="rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:no-underline transition"
              >
                <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                  Vet care
                </p>
                <p className="text-base font-semibold text-[#17211B]">
                  First vet visit checklist →
                </p>
                <p className="text-sm text-[#5E6B63] mt-1">
                  What to bring and what to ask.
                </p>
              </Link>
            </div>
          </section>

          <section aria-labelledby="budget-heading">
            <h2 id="budget-heading" className="section-title">
              Budgeting and planning guides
            </h2>
            <ul className="grid sm:grid-cols-3 gap-4">
              {BUDGET_GUIDES.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={g.path}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                      {g.pageHeading}
                    </p>
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">
                      {g.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <DisclaimerBlock type="veterinary" />

          <FAQBlock items={HUB_FAQS} title="Pet Ownership Costs — Frequently Asked Questions" />

          <aside
            role="note"
            aria-label="Source review note"
            className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
          >
            <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
            <p className="leading-relaxed">{COST_SOURCE_REVIEW_NOTE}</p>
          </aside>

          <LastUpdated date={LAST_UPDATED} />
        </div>
      </main>
    </>
  );
}
