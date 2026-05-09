import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Dog Pet Insurance — How It Works & What to Consider",
  description:
    "How pet insurance works for dogs, what is typically covered, deductibles and premiums, and how to evaluate your options.",
  path: "/dogs/insurance",
});

export default function DogInsurancePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Dogs", url: "https://faunahub.com/dogs" },
    { name: "Insurance", url: "https://faunahub.com/dogs/insurance" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Insurance</span>
            </nav>
            <span className="tag mb-3 inline-block">Dogs</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Dog Pet Insurance
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Pet insurance for dogs is a financial tool that helps offset the cost of unexpected
              veterinary treatment — from emergency surgery to specialist consultations and
              long-term condition management. Understanding how policies are structured helps owners
              choose coverage that genuinely matches their dog&apos;s risk profile and their own
              financial situation.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section className="prose-content max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">How Pet Insurance Works</h2>
            <p>
              Most pet insurance policies operate on a reimbursement model: the owner pays the
              veterinary bill at the time of treatment, then submits a claim to be reimbursed
              for eligible costs above the deductible, up to the policy&apos;s annual or per-incident
              limit. Key variables to compare across policies include the annual deductible amount,
              the reimbursement percentage (commonly 70–90%), the annual or lifetime benefit
              maximum, and the list of exclusions.
            </p>
            <p>
              Common exclusions in dog insurance policies include pre-existing conditions, elective
              procedures, breeding costs, and sometimes breed-specific hereditary conditions.
              Reading the policy&apos;s definition of &quot;pre-existing condition&quot; carefully is
              important — some insurers include conditions that existed before the policy start
              date even if they were never diagnosed.
            </p>
            <h2>What to Consider Before Purchasing</h2>
            <p>
              The right time to purchase pet insurance is typically when your dog is young and
              healthy, before any conditions can be classified as pre-existing. Breed matters too —
              some breeds with known hereditary health issues may face higher premiums or exclusions
              for those specific conditions. Comparing at least three to four policies side-by-side
              against your dog&apos;s specific breed risk profile is advisable before committing.
            </p>
          </section>

          <aside
            role="note"
            className="mt-8 max-w-3xl bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl p-4 text-sm text-[#2C3A2F]"
          >
            FaunaHub does not endorse, recommend, or have a commercial relationship with any
            specific pet insurance provider. Information on this page is for general educational
            purposes only. Always read a policy&apos;s full terms and conditions before purchasing.
          </aside>

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
