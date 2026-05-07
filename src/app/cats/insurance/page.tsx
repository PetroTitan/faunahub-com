import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Cat Pet Insurance — How It Works & What to Consider",
  description:
    "How pet insurance works for cats, what is typically covered, and how to evaluate policies for your cat's needs.",
  path: "/cats/insurance",
});

export default function CatInsurancePage() {
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
        <header className="bg-white border-b border-[#E4E8ED] py-10 sm:py-14">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#9CA5AF] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#2A7A4B] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/cats" className="hover:text-[#2A7A4B] hover:no-underline">Cats</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#1C2B3A] font-medium" aria-current="page">Insurance</span>
            </nav>
            <span className="tag mb-3 inline-block">Cats</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-3">
              Cat Pet Insurance
            </h1>
            <p className="text-base text-[#3E4F60] leading-relaxed max-w-2xl">
              Pet insurance for cats is designed to reduce the financial impact of unexpected
              veterinary costs — from emergency treatment for trauma or poisoning to the ongoing
              management of chronic conditions like kidney disease or hyperthyroidism. The value
              of any policy depends on how closely its terms match your cat&apos;s actual risk
              profile and your financial circumstances.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section className="prose-content max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">How Cat Pet Insurance Works</h2>
            <p>
              The majority of pet insurance policies for cats use a reimbursement model: you pay
              the veterinary bill at the time of service, then submit a claim for eligible expenses
              above your deductible. Reimbursement rates typically range from 70% to 90% of
              covered costs, and policies set either annual benefit limits or per-condition limits.
              Some policies also offer wellness add-ons that cover routine preventive care such
              as vaccinations and annual exams.
            </p>
            <p>
              Key exclusions to understand before purchasing include pre-existing conditions,
              bilateral conditions (where one side is pre-existing), elective procedures, dental
              disease in some policies, and hereditary conditions in certain breeds. Cats insured
              from a young age before any conditions develop typically have fewer exclusions
              applied at the point of a claim.
            </p>
            <h2>Evaluating Coverage for Your Cat</h2>
            <p>
              Indoor-only cats and outdoor cats have different risk profiles. Outdoor cats face
              higher risks of trauma, infectious disease, and bite wounds, which increases the
              probability of needing emergency care. Pedigree cats with known breed-specific health
              tendencies — such as polycystic kidney disease in Persians or respiratory issues in
              flat-faced breeds — benefit from policies that do not exclude hereditary conditions.
            </p>
          </section>

          <aside
            role="note"
            className="mt-8 max-w-3xl bg-[#F3FAF6] border border-[#c6e8d4] rounded-xl p-4 text-sm text-[#3E4F60]"
          >
            FaunaHub does not endorse, recommend, or have a commercial relationship with any
            specific pet insurance provider. Information on this page is for general educational
            purposes only. Always read a policy&apos;s full terms and conditions before purchasing.
          </aside>

          <div className="mt-8">
            <Link
              href="/cats"
              className="text-sm font-medium text-[#2A7A4B] hover:underline"
            >
              &larr; Back to Cat Care Guides
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
