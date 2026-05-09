import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Dog Behavior Guides — Understanding Canine Body Language & Training",
  description:
    "Guides on dog body language, socialization, common behavioral issues, training basics, and understanding what your dog is communicating.",
  path: "/dogs/behavior",
});

export default function DogBehaviorPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Dogs", url: "https://faunahub.com/dogs" },
    { name: "Behavior", url: "https://faunahub.com/dogs/behavior" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Behavior</span>
            </nav>
            <span className="tag mb-3 inline-block">Dogs</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Dog Behavior Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Dogs communicate through posture, facial expression, tail position, and vocalization
              — learning to read these signals accurately strengthens the human-dog relationship
              and helps owners identify anxiety, pain, or overstimulation before problems escalate.
              Understanding behavior is also the foundation of effective, humane training.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section className="prose-content max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">About This Section</h2>
            <p>
              Dog behavior guides on FaunaHub cover body language interpretation, the critical
              socialization window in puppies (roughly 3 to 14 weeks), positive reinforcement
              training principles, and common behavioral issues such as separation anxiety,
              resource guarding, leash reactivity, and excessive barking. Each guide explains
              the underlying motivation behind the behavior and evidence-based approaches to
              address it.
            </p>
            <p>
              Sudden changes in a dog&apos;s behavior — including aggression where there was none,
              unexplained lethargy, or a loss of interest in activities they previously enjoyed —
              can be early signs of a health issue. Behavior guides include guidance on when a
              veterinary consultation should be the first step, rather than a training intervention.
            </p>
          </section>

          <p className="mt-8 text-sm text-[#5E6B63]">
            Individual behavior topic guides are in development.
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
