import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Cat Breed Guides — Profiles, Traits & Care Requirements",
  description:
    "Cat breed profiles covering coat type, temperament, size, health tendencies, and care requirements for popular breeds.",
  path: "/cats/breeds",
});

export default function CatBreedsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Cats", url: "https://faunahub.com/cats" },
    { name: "Breeds", url: "https://faunahub.com/cats/breeds" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Breeds</span>
            </nav>
            <span className="tag mb-3 inline-block">Cats</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Cat Breed Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Recognized cat breeds differ in coat length and texture, body type, activity level,
              and social personality — from the talkative Siamese to the quiet, placid Ragdoll.
              Understanding a breed&apos;s typical characteristics helps prospective owners choose a
              cat that suits their household and lifestyle.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section className="prose-content max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">About This Section</h2>
            <p>
              Cat breed profiles on FaunaHub cover the characteristics owners find most useful:
              coat type and grooming requirements, typical adult size and weight, energy and play
              needs, social behavior with humans and other pets, and known breed-specific health
              predispositions such as hypertrophic cardiomyopathy in Maine Coons or brachycephalic
              airway issues in Persians and Exotic Shorthairs. These profiles are educational and
              describe breed tendencies rather than guarantees of individual personality.
            </p>
            <p>
              Many cats in shelters and rescues are domestic short or longhairs without a specific
              breed background. Mixed-breed cats are often genetically diverse and can make
              excellent companions — breed profiles are a starting point for those specifically
              seeking or already living with a pedigree cat.
            </p>
          </section>

          <p className="mt-8 text-sm text-[#5E6B63]">
            Individual breed profiles are in development and will be published progressively.
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
