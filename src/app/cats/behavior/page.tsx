import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Cat Behavior Guides — Understanding Feline Body Language",
  description:
    "Understanding cat body language, territorial behavior, indoor enrichment, and common behavioral changes that may signal health issues.",
  path: "/cats/behavior",
});

export default function CatBehaviorPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Cats", url: "https://faunahub.com/cats" },
    { name: "Behavior", url: "https://faunahub.com/cats/behavior" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Behavior</span>
            </nav>
            <span className="tag mb-3 inline-block">Cats</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Cat Behavior Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Cats are territorial, solitary hunters by nature — their indoor behavior is shaped by
              instincts developed over thousands of years of evolution that did not disappear with
              domestication. Understanding those instincts makes it far easier to interpret feline
              body language, design enriching indoor environments, and recognize when a behavioral
              change is signaling a physical health problem.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section className="prose-content max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">About This Section</h2>
            <p>
              Cat behavior guides on FaunaHub cover the signals communicated through ear position,
              tail movement, pupil dilation, whisker position, and vocalization patterns. Topics
              also include territorial marking, litter box behavior and what changes in its use
              indicate, appropriate indoor enrichment to reduce boredom and stress, introducing
              cats to new household members (human or animal), and the distinction between play
              aggression and genuine aggression.
            </p>
            <p>
              Behavioral changes in cats — including hiding, a sudden increase or decrease in
              vocalization, changes in grooming habits, or litter box avoidance — frequently
              indicate pain, illness, or significant stress. These changes should prompt a
              veterinary consultation before any behavioral intervention is attempted, as treating
              an underlying medical cause typically resolves the behavior.
            </p>
          </section>

          <p className="mt-8 text-sm text-[#5E6B63]">
            Individual behavior topic guides are in development.
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
