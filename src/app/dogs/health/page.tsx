import type { Metadata } from "next";
import Link from "next/link";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Dog Health Guides — Common Conditions & Preventive Care",
  description:
    "Educational guides on common dog health conditions, preventive care routines, and when to contact a veterinarian. Not a substitute for professional advice.",
  path: "/dogs/health",
});

export default function DogHealthPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Dogs", url: "https://faunahub.com/dogs" },
    { name: "Health", url: "https://faunahub.com/dogs/health" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Health</span>
            </nav>
            <span className="tag mb-3 inline-block">Dogs</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Dog Health Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Understanding common health conditions in dogs helps owners recognize warning signs
              early and maintain preventive care routines that support long-term wellbeing.
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
              Dog health guides on FaunaHub cover common conditions by body system — skin, joints,
              digestive, dental, cardiac, and neurological — explaining what the condition is,
              which breeds may be predisposed, how it is typically diagnosed and managed, and what
              signs should prompt an immediate veterinary visit. Guides also cover preventive care
              schedules, including vaccination timing, parasite prevention, and annual wellness
              check recommendations.
            </p>
            <p>
              Preventive veterinary care is the single most effective tool for extending a dog&apos;s
              healthy lifespan. Annual wellness exams allow veterinarians to detect dental disease,
              weight changes, early organ dysfunction, and other conditions before they become
              serious — often before owners notice any outward signs.
            </p>
          </section>

          <p className="mt-8 text-sm text-[#5E6B63]">
            Individual condition guides are in development.
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
