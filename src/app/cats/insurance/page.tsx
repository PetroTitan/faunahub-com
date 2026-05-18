import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { INSURANCE_SOURCE_REVIEW_NOTE } from "@/lib/educational/types";

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

          <aside
            role="note"
            aria-label="Source review note"
            className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
          >
            <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
            <p className="leading-relaxed">{INSURANCE_SOURCE_REVIEW_NOTE}</p>
            <p className="mt-2 leading-relaxed">
              <strong className="text-[#2C3A2F]">Source review required.</strong>{" "}
              No external citations have been added to this hub.
            </p>
          </aside>

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
