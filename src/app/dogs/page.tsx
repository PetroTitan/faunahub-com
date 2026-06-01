import type { Metadata } from "next";
import Link from "next/link";
import HubGrid from "@/components/HubGrid";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Dog Care Guides — Breeds, Health, Food & More",
  description:
    "Complete dog care resources covering breed guides, health advice, nutrition, behavior, and cost planning for responsible dog owners.",
  path: "/dogs",
});

const sections = [
  {
    title: "Dog Breeds",
    description: "Profiles of popular and rare dog breeds — size, temperament, care needs, and history.",
    href: "/dogs/breeds",
    icon: "🐕",
  },
  {
    title: "Dog Health",
    description: "Common health conditions, preventive care, and when to contact a veterinarian.",
    href: "/dogs/health",
    icon: "🩺",
  },
  {
    title: "Dog Food & Nutrition",
    description: "Feeding guides, dietary needs by life stage, and what to avoid feeding your dog.",
    href: "/dogs/food",
    icon: "🦴",
  },
  {
    title: "Dog Behavior",
    description: "Understanding canine behavior, body language, socialization, and training basics.",
    href: "/dogs/behavior",
    icon: "🧠",
  },
  {
    title: "New Puppy Care",
    description: "First weeks, vet visit planning, feeding, socialization, and home safety for new puppies.",
    href: "/puppy-care",
    icon: "🐶",
  },
  {
    title: "Cost of Owning a Dog",
    description: "Realistic cost breakdowns for food, veterinary care, grooming, and other expenses.",
    href: "/dogs/costs",
    icon: "💰",
  },
  {
    title: "Dog Insurance",
    description: "How pet insurance works, what it covers, and how to evaluate your options.",
    href: "/dogs/insurance",
    icon: "📋",
  },
];

export default function DogsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Dogs", url: "https://faunahub.com/dogs" },
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
        {/* Page header */}
        <header className="bg-white border-b border-[#DDE6DD] py-12 sm:py-16">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Dogs</span>
            </nav>
            <div className="max-w-2xl">
              <span className="tag mb-4 inline-block">Pet Care</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4">
                Dog Care Guides
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                From choosing the right breed to understanding health signs and managing daily care —
                practical, trustworthy guides for dog owners at every stage.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <HubGrid
            title="Explore Dog Topics"
            subtitle="Select a section to find guides, advice, and information for dog owners."
            items={sections}
            columns={3}
          />

          {/* Intro text */}
          <section className="prose-content mt-10 max-w-3xl" aria-label="Introduction">
            <h2>Understanding Your Dog</h2>
            <p>
              Dogs are among the most diverse domestic animals on earth. With hundreds of recognized breeds,
              they range from tiny companion dogs under 2 kg to giant working breeds over 90 kg. Each breed
              has distinct care requirements, health tendencies, and behavioral traits developed over
              centuries of selective breeding.
            </p>
            <p>
              Responsible dog ownership involves understanding your specific breed&apos;s needs, establishing
              a preventive healthcare routine with a licensed veterinarian, providing appropriate nutrition,
              and investing time in socialization and training from an early age.
            </p>
            <h2>Finding Reliable Dog Information</h2>
            <p>
              For health questions, always consult a licensed veterinarian. Reputable sources for breed and
              care information include the{" "}
              <strong>American Kennel Club (AKC)</strong>,{" "}
              <strong>American Veterinary Medical Association (AVMA)</strong>, and{" "}
              <strong>VCA Animal Hospitals</strong>.
              FaunaHub content is for general educational purposes and should not replace professional
              veterinary advice.
            </p>
          </section>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <RelatedLinks
              title="Planning and safety for dog owners"
              links={[
                {
                  label: "Dog insurance overview",
                  href: "/dogs/insurance",
                  description: "Dog-specific factors to weigh, with no provider rankings",
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
                  label: "How much does a dog cost?",
                  href: "/dogs/costs/how-much-does-a-dog-cost",
                  description: "Honest cost planning framework",
                },
                {
                  label: "Dog Age Calculator",
                  href: "/tools/dog-age-calculator",
                  description: "Size-adjusted human-age equivalent",
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
                { label: "Cat Care Guides", href: "/cats", description: "Comparable guides for cat owners" },
                { label: "Wolf vs Dog Comparison", href: "/compare/wolf-vs-dog", description: "How dogs differ from their wild ancestors" },
                { label: "Dog food safety guides", href: "/dogs/food", description: "What dogs can and cannot eat" },
                { label: "Pet Breed Selector", href: "/tools/pet-breed-selector", description: "Find pet and breed categories that fit your home" },
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
