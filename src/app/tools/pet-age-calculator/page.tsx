import type { Metadata } from "next";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

const MODIFIED = "2026-05-12";

export const metadata: Metadata = buildMetadata({
  title: "Pet Age Calculator — Approximate Human-Age Equivalents",
  description:
    "Pick the right pet age calculator for your species — dog, cat, rabbit, horse, hamster, or guinea pig. Approximate human-age equivalents and life stages.",
  path: "/tools/pet-age-calculator",
});

const calculators = [
  {
    title: "Dog Age Calculator",
    description: "Approximate human-age equivalent based on age and size category.",
    href: "/tools/dog-age-calculator",
    icon: "🐕",
    badge: "Free",
  },
  {
    title: "Cat Age Calculator",
    description: "Approximate human-age equivalent and feline life stage.",
    href: "/tools/cat-age-calculator",
    icon: "🐈",
    badge: "Free",
  },
  {
    title: "Rabbit Age Calculator",
    description: "Approximate human-age equivalent for pet rabbits.",
    href: "/tools/rabbit-age-calculator",
    icon: "🐇",
    badge: "Free",
  },
  {
    title: "Horse Age Calculator",
    description: "Approximate human-age equivalent for horses and ponies.",
    href: "/tools/horse-age-calculator",
    icon: "🐴",
    badge: "Free",
  },
  {
    title: "Hamster Age Calculator",
    description: "Approximate human-age equivalent for Syrian and dwarf hamsters.",
    href: "/tools/hamster-age-calculator",
    icon: "🐹",
    badge: "Free",
  },
  {
    title: "Guinea Pig Age Calculator",
    description: "Approximate human-age equivalent for pet guinea pigs.",
    href: "/tools/guinea-pig-age-calculator",
    icon: "🐹",
    badge: "Free",
  },
  {
    title: "Pet Life Stage Calculator",
    description: "Cross-species life-stage estimator with care-focus guidance.",
    href: "/tools/pet-life-stage-calculator",
    icon: "🩺",
    badge: "Free",
  },
];

export default function PetAgeCalculatorHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    { name: "Pet Age Calculator", url: "https://faunahub.com/tools/pet-age-calculator" },
  ]);
  const itemList = itemListSchema(
    calculators.map((c, i) => ({
      name: c.title,
      url: `https://faunahub.com${c.href}`,
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
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-[#8A958E] mb-4 flex gap-2"
            >
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/tools" className="hover:text-[#063F2A] hover:no-underline">
                Tools
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">
                Pet Age Calculator
              </span>
            </nav>
            <div className="max-w-2xl">
              <span className="tag mb-4 inline-block">Free Tools</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4">
                Pet Age Calculators
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Pick the calculator for your species. Each tool produces a general,
                approximate human-age equivalent based on simplified age models. Aging
                varies by species, breed, size, genetics, health, and lifestyle — these
                tools are for general orientation, not veterinary assessment.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="calculators-heading">
            <h2 id="calculators-heading" className="section-title">
              Available Calculators
            </h2>
            <p className="section-subtitle">
              All calculators are free and indexable. Results are general estimates only.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {calculators.map((tool) => (
                <ToolCard key={tool.href} {...tool} />
              ))}
            </div>
          </section>

          <section className="prose-content mt-10 max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">About These Calculators</h2>
            <p>
              Pet age calculators convert a pet&apos;s chronological age into an approximate
              human-age equivalent. They are useful as orientation — for example, helping
              owners understand when their pet is entering a life stage where preventive
              care frequency typically changes. They are not a substitute for veterinary
              assessment of individual health.
            </p>
            <p>
              The widely repeated &quot;multiply by 7&quot; rule is a long-running
              over-simplification. Different species age very differently, and within a
              species (especially dogs) aging varies by size and breed. Each calculator on
              this site uses a separate species-appropriate model and clearly marks results
              as approximate.
            </p>
            <p>
              For an indication of life stage rather than a single &quot;human age&quot;
              number, see the cross-species{" "}
              <Link href="/tools/pet-life-stage-calculator">Pet Life Stage Calculator</Link>.
            </p>
          </section>

          <div className="mt-10 max-w-2xl">
            <DisclaimerBlock type="tool" />
            <div className="mt-4">
              <LastUpdated date={MODIFIED} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
