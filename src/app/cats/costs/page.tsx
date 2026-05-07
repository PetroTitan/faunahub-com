import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Cost of Owning a Cat — Monthly & Annual Expense Guide",
  description:
    "Realistic cost breakdown for cat ownership including food, vet care, litter, grooming, and emergency funds.",
  path: "/cats/costs",
});

export default function CatCostsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Cats", url: "https://faunahub.com/cats" },
    { name: "Costs", url: "https://faunahub.com/cats/costs" },
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
              <span className="text-[#1C2B3A] font-medium" aria-current="page">Costs</span>
            </nav>
            <span className="tag mb-3 inline-block">Cats</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-3">
              Cost of Owning a Cat
            </h1>
            <p className="text-base text-[#3E4F60] leading-relaxed max-w-2xl">
              Cats are often perceived as low-maintenance pets, but the true annual cost of cat
              ownership — including food, litter, veterinary care, and setting aside funds for
              emergencies — can run into the thousands depending on the cat&apos;s age, health
              status, and your location. Planning for these costs before adopting is essential.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section className="prose-content max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">What to Expect on This Page</h2>
            <p>
              Cost guides for cat ownership cover one-time setup expenses (carrier, litter box,
              scratching post, initial vaccinations, microchipping, spay/neuter), ongoing monthly
              costs (food, litter, flea and tick prevention), and annual costs (wellness vet visits,
              dental care, license if required). Emergency veterinary expenses — including
              hospitalisation, diagnostics, and surgery — are also addressed, as these are
              frequently the largest unplanned cost cat owners face.
            </p>
            <p>
              Litter alone is a recurring cost many new cat owners underestimate. Dental disease
              is extremely common in cats — by age three, most cats show some degree of dental
              tartar — and professional dental cleaning under anaesthesia carries significant
              cost. Budgeting for these anticipated expenses avoids difficult decisions when
              a health issue arises.
            </p>
          </section>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/tools/pet-cost-calculator"
              className="inline-flex items-center gap-2 bg-[#2A7A4B] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#235f3b] transition-colors hover:no-underline"
            >
              Open Pet Cost Calculator
            </Link>
          </div>

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
