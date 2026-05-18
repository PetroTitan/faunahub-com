import type { Metadata } from "next";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Free Pet Owner Tools — Age Calculators, Cost & Planning",
  description:
    "Free tools for pet owners: cross-species pet age calculators (dog, cat, rabbit, horse, hamster, guinea pig), life stage estimator, and pet cost calculator.",
  path: "/tools",
});

const ageCalculators = [
  {
    title: "Pet Age Calculator (Hub)",
    description: "Pick the right calculator for your species.",
    href: "/tools/pet-age-calculator",
    icon: "🧮",
    badge: "Hub",
  },
  {
    title: "Dog Age Calculator",
    description:
      "Convert your dog's age to human years using a size-adjusted model.",
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
    description: "Syrian and dwarf hamster age in human-year terms.",
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
    description:
      "Cross-species life-stage estimator with general care focus.",
    href: "/tools/pet-life-stage-calculator",
    icon: "🩺",
    badge: "Free",
  },
];

const otherTools = [
  {
    title: "Pet Cost Calculator",
    description:
      "Estimate monthly, annual, and first-year pet ownership cost — including optional one-time setup and an emergency fund line.",
    href: "/tools/pet-cost-calculator",
    icon: "💰",
    badge: "Free",
  },
  {
    title: "Pet Breed Selector",
    description:
      "Short questionnaire that surfaces pet and breed-category pages to read about based on your home, schedule, and preferences.",
    href: "/tools/pet-breed-selector",
    icon: "🧭",
    badge: "Free",
  },
  {
    title: "Can my pet eat this?",
    description:
      "Search a common food to find FaunaHub's cautious dog and cat food safety guidance.",
    href: "/tools/can-my-pet-eat-this",
    icon: "🥕",
    badge: "Free",
  },
];

export default function ToolsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
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
              <span className="text-[#17211B] font-medium" aria-current="page">
                Tools
              </span>
            </nav>
            <div className="max-w-2xl">
              <span className="tag mb-4 inline-block">Free Tools</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4">
                Pet Owner Tools
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Free calculators to help you plan costs, understand your pet&apos;s life
                stage, and make more informed decisions. No registration required.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="age-calculators-heading">
            <h2 id="age-calculators-heading" className="section-title">
              Pet Age &amp; Life Stage Calculators
            </h2>
            <p className="section-subtitle">
              Approximate human-age equivalents and life-stage orientation. All estimates
              are general — actual aging varies by species, breed, size, genetics, health,
              and lifestyle.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ageCalculators.map((tool) => (
                <ToolCard key={tool.href} {...tool} />
              ))}
            </div>
          </section>

          <section className="mt-12" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="section-title">
              Other Pet Planning Tools
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherTools.map((tool) => (
                <ToolCard key={tool.href} {...tool} />
              ))}
            </div>
          </section>

          <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            <strong>Tool Limitations:</strong> All tools provide general estimates only.
            Actual costs and biological aging vary significantly by country, region,
            breed, individual pet health, and local service pricing. For health-related
            decisions, always consult a licensed veterinarian.
          </div>
        </div>
      </main>
    </>
  );
}
