import type { Metadata } from "next";
import Link from "next/link";
import HubGrid from "@/components/HubGrid";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Cat Care Guides — Breeds, Health, Food & More",
  description:
    "Complete cat care resources covering breed guides, health advice, nutrition, behavior, and cost planning for responsible cat owners.",
  path: "/cats",
});

const sections = [
  {
    title: "Cat Breeds",
    description: "Profiles of popular and rare cat breeds — coat type, temperament, size, and care needs.",
    href: "/cats/breeds",
    icon: "🐈",
  },
  {
    title: "Cat Health",
    description: "Common feline health conditions, preventive care, and when to call a veterinarian.",
    href: "/cats/health",
    icon: "🩺",
  },
  {
    title: "Cat Food & Nutrition",
    description: "Dietary requirements for cats, feeding schedules, and foods that are harmful to cats.",
    href: "/cats/food",
    icon: "🐟",
  },
  {
    title: "Cat Behavior",
    description: "Understanding feline body language, territorial behavior, and enrichment needs.",
    href: "/cats/behavior",
    icon: "🧠",
  },
  {
    title: "New Kitten Care",
    description: "First weeks, vet visit planning, feeding, litter setup, and home safety for new kittens.",
    href: "/kitten-care",
    icon: "🐱",
  },
  {
    title: "Cost of Owning a Cat",
    description: "Realistic monthly and annual cost estimates for cat ownership.",
    href: "/cats/costs",
    icon: "💰",
  },
  {
    title: "Cat Insurance",
    description: "Pet insurance options for cats, what is typically covered, and how to choose.",
    href: "/cats/insurance",
    icon: "📋",
  },
];

export default function CatsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Cats", url: "https://faunahub.com/cats" },
  ]);

  const itemList = itemListSchema(
    sections.map((s, i) => ({
      name: s.title,
      url: `https://faunahub.com${s.href}`,
      position: i + 1,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, itemList]) }}
      />

      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-12 sm:py-16">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Cats</span>
            </nav>
            <div className="max-w-2xl">
              <span className="tag mb-4 inline-block">Pet Care</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4">
                Cat Care Guides
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Practical, trustworthy cat care information — from choosing a breed to daily nutrition,
                health monitoring, and understanding feline behavior.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <HubGrid
            title="Explore Cat Topics"
            subtitle="Select a section to find guides and information for cat owners."
            items={sections}
            columns={3}
          />

          <section className="prose-content mt-10 max-w-3xl" aria-label="Introduction">
            <h2>Understanding Your Cat</h2>
            <p>
              Cats are obligate carnivores with specific nutritional, behavioral, and environmental needs
              that differ significantly from dogs. Understanding feline biology is essential for providing
              appropriate care.
            </p>
            <p>
              Cats communicate primarily through body language, scent, and vocalizations. A cat that is
              hiding, refusing food, or showing changes in litter box habits may be signaling a health
              issue that warrants veterinary attention.
            </p>
            <h2>Cat Health Safety Note</h2>
            <p>
              Many substances that are safe for humans or dogs are toxic to cats, including certain
              common plants, essential oils, and over-the-counter medications. Always verify with a
              licensed veterinarian before introducing new foods, supplements, or products into your
              cat&apos;s environment.
            </p>
          </section>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <RelatedLinks
              title="Planning and safety for cat owners"
              links={[
                {
                  label: "Cat insurance overview",
                  href: "/cats/insurance",
                  description: "Cat-specific factors to weigh, with no provider rankings",
                },
                {
                  label: "Pet insurance hub",
                  href: "/pet-insurance",
                  description: "How policies generally work and what to compare",
                },
                {
                  label: "Vet care hub",
                  href: "/vet-care",
                  description: "Routine and emergency vet care planning",
                },
                {
                  label: "When to call an emergency vet",
                  href: "/vet-care/when-to-call-an-emergency-vet",
                  description: "Common warning signs and what to say on the phone",
                },
                {
                  label: "How much does a cat cost?",
                  href: "/cats/costs/how-much-does-a-cat-cost",
                  description: "Honest cost planning framework",
                },
                {
                  label: "Cat Age Calculator",
                  href: "/tools/cat-age-calculator",
                  description: "Feline human-age equivalent and life stage",
                },
                {
                  label: "Pet Cost Calculator",
                  href: "/tools/pet-cost-calculator",
                  description: "Run monthly, annual, and first-year scenarios",
                },
              ]}
            />
            <RelatedLinks
              title="Also Explore"
              links={[
                { label: "Dog Care Guides", href: "/dogs", description: "Comparable guides for dog owners" },
                { label: "Animal Encyclopedia", href: "/animal-encyclopedia", description: "Wildlife profiles and animal facts" },
                { label: "Cat food safety guides", href: "/cats/food", description: "What cats can and cannot eat" },
                { label: "Pet Breed Selector", href: "/tools/pet-breed-selector", description: "Find pet and breed categories that fit your home" },
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
