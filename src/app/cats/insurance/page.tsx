import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import {
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
  {
    label: "Cornell Feline Health Center",
    url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center",
    type: "university",
    note: "Cornell University College of Veterinary Medicine — cats",
  },
];

const LAST_UPDATED = "2026-05-18";

export const metadata: Metadata = buildMetadata({
  title: "Cat Insurance — Educational Overview & Planning",
  description:
    "Cautious, source-aware overview of pet insurance considerations for cats — indoor/outdoor lifestyle, age, chronic conditions, and how to compare policies.",
  path: "/cats/insurance",
});

const LINKS = [
  {
    href: "/cats/insurance/is-pet-insurance-worth-it-for-cats",
    title: "Is pet insurance worth it for cats?",
    description:
      "Trade-offs, cat-specific risk factors, and the emergency-fund alternative.",
  },
  {
    href: "/pet-insurance",
    title: "Pet insurance overview",
    description:
      "How policies generally work, common exclusions, and what to compare.",
  },
  {
    href: "/cats/costs/how-much-does-a-cat-cost",
    title: "How much does a cat cost?",
    description: "Cost planning framework — pairs with insurance planning.",
  },
  {
    href: "/tools/pet-cost-calculator",
    title: "Pet Cost Calculator",
    description: "Run insurance + emergency fund scenarios with your numbers.",
  },
  {
    href: "/pet-insurance/pet-insurance-vs-emergency-fund",
    title: "Pet insurance vs emergency fund",
    description: "Compare the two approaches without hype.",
  },
];

export default function CatInsuranceHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Cats", url: "https://faunahub.com/cats" },
    { name: "Insurance", url: "https://faunahub.com/cats/insurance" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-10 sm:py-14">
          <div className="container-content">
            <Breadcrumbs
              items={[{ label: "Cats", href: "/cats" }, { label: "Insurance" }]}
            />
            <p className="mb-3">
              <span className="tag">Cats</span>{" "}
              <span className="tag ml-1">Insurance</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Cat Insurance — Educational Overview
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Cautious, source-aware planning pages for cat owners
              considering pet insurance. FaunaHub does not recommend or rank
              providers. These pages help you understand the trade-offs,
              cat-specific factors that may matter, and the questions to ask
              before reading any policy document.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-10">
          <ul className="grid sm:grid-cols-2 gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                >
                  <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                    {link.title}
                  </p>
                  <p className="text-sm text-[#2C3A2F] leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <DisclaimerBlock type="veterinary" />

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

          <p>
            <Link
              href="/cats"
              className="text-sm font-medium text-[#063F2A] hover:underline"
            >
              ← Back to Cat Care Guides
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
