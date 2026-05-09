import type { Metadata } from "next";
import Link from "next/link";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Cat Health Guides — Common Conditions & Preventive Care",
  description:
    "Educational guides on common feline health conditions, preventive care, and warning signs that require immediate veterinary attention.",
  path: "/cats/health",
});

export default function CatHealthPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Cats", url: "https://faunahub.com/cats" },
    { name: "Health", url: "https://faunahub.com/cats/health" },
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
              <Link href="/cats" className="hover:text-[#063F2A] hover:no-underline">Cats</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Health</span>
            </nav>
            <span className="tag mb-3 inline-block">Cats</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Cat Health Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Cats are adept at masking illness, which means health problems are often not apparent
              until they have become significant — making regular veterinary check-ups and owner
              awareness of subtle behavioral changes essential parts of feline care.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="max-w-3xl mb-8">
            <DisclaimerBlock type="veterinary" />
          </div>

          <section className="prose-content max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">About This Section</h2>
            <p>
              Cat health guides on FaunaHub cover common feline conditions including dental disease,
              chronic kidney disease, hyperthyroidism, feline lower urinary tract disease (FLUTD),
              diabetes mellitus, upper respiratory infections, and parasites. Each guide explains
              the condition, typical clinical signs, how it is diagnosed and managed, and what
              changes in your cat&apos;s behavior or physical state should prompt an immediate
              veterinary visit.
            </p>
            <p>
              Preventive care for cats includes annual wellness exams, core vaccinations, parasite
              prevention, dental assessment, and weight monitoring. Indoor cats have different risk
              profiles than outdoor cats, but both benefit significantly from regular veterinary
              oversight — many conditions, including dental disease and early kidney changes, are
              detectable before the cat shows obvious signs of discomfort.
            </p>
          </section>

          <p className="mt-8 text-sm text-[#5E6B63]">
            Individual condition guides are in development.
          </p>

          <div className="mt-8">
            <Link
              href="/cats"
              className="text-sm font-medium text-[#063F2A] hover:underline"
            >
              &larr; Back to Cat Care Guides
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
