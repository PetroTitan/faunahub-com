import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Cost of Owning a Dog — Monthly & Annual Expense Guide",
  description:
    "Realistic cost breakdown for dog ownership including food, vet care, grooming, training, insurance, and unexpected expenses.",
  path: "/dogs/costs",
});

export default function DogCostsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Dogs", url: "https://faunahub.com/dogs" },
    { name: "Costs", url: "https://faunahub.com/dogs/costs" },
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
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/dogs" className="hover:text-[#063F2A] hover:no-underline">Dogs</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Costs</span>
            </nav>
            <span className="tag mb-3 inline-block">Dogs</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Cost of Owning a Dog
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              The true cost of dog ownership extends well beyond the initial purchase or adoption
              fee — food, veterinary care, grooming, training, boarding, and unexpected emergencies
              are ongoing commitments that can add up significantly over a dog&apos;s 10 to 15-year
              lifespan. Budgeting realistically before acquiring a dog is an act of responsible
              ownership.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section className="prose-content max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">What to Expect on This Page</h2>
            <p>
              Cost guides on FaunaHub break down dog ownership expenses into categories: one-time
              setup costs (crate, bedding, collar, leash, microchipping, initial vaccinations),
              recurring monthly costs (food, flea and tick prevention, treats), and annual costs
              (wellness vet visits, license renewal, grooming for longer-coated breeds). Emergency
              veterinary costs — which can reach thousands of dollars for surgeries, diagnostics,
              or specialist referrals — are also addressed, including how an emergency fund or
              pet insurance policy can mitigate financial risk.
            </p>
            <p>
              Costs vary considerably by location, dog size, breed-specific grooming needs, and
              individual health history. The Pet Cost Calculator below can help you estimate a
              personalised annual budget.
            </p>
          </section>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/tools/pet-cost-calculator"
              className="inline-flex items-center gap-2 bg-[#063F2A] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#235f3b] transition-colors hover:no-underline"
            >
              Open Pet Cost Calculator
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/dogs"
              className="text-sm font-medium text-[#063F2A] hover:underline"
            >
              &larr; Back to Dog Care Guides
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
