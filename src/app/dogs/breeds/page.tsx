import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Dog Breed Guides — Profiles, Traits & Care Requirements",
  description:
    "Dog breed profiles covering size, temperament, exercise needs, health tendencies, and care requirements for popular and less common breeds.",
  path: "/dogs/breeds",
});

export default function DogBreedsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Dogs", url: "https://faunahub.com/dogs" },
    { name: "Breeds", url: "https://faunahub.com/dogs/breeds" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Breeds</span>
            </nav>
            <span className="tag mb-3 inline-block">Dogs</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Dog Breed Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              There are over 340 recognized dog breeds worldwide, each developed for specific
              purposes — from herding and guarding to companionship and scent work. Choosing a
              breed that suits your living situation, activity level, and experience with dogs
              is one of the most important decisions in responsible dog ownership.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section className="prose-content max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">About This Section</h2>
            <p>
              Dog breed profiles on FaunaHub cover the key information prospective and current
              owners need: typical adult size and weight, energy and exercise requirements,
              coat type and grooming needs, known health predispositions, and general suitability
              for families, first-time owners, or apartment living. Breed-specific health
              tendencies are noted to help owners work proactively with their veterinarian, not
              to predict individual outcomes.
            </p>
            <p>
              Breed characteristics describe typical tendencies in well-bred, socialized dogs.
              Individual temperament is always influenced by early socialization, training history,
              and environment — no breed profile should be taken as a guarantee of behavior.
            </p>
          </section>

          <p className="mt-8 text-sm text-[#5E6B63]">
            Individual breed profiles are in development and will be published progressively.
          </p>

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
