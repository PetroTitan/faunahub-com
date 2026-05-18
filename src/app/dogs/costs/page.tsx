import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Cost of Owning a Dog — Planning Frameworks & Calculator",
  description:
    "Cautious dog cost planning: a full how-much-does-a-dog-cost framework, the pet cost calculator, dog breed selection, and food safety links.",
  path: "/dogs/costs",
});

const LINKS = [
  {
    href: "/dogs/costs/how-much-does-a-dog-cost",
    title: "How much does a dog cost?",
    description:
      "One-time, monthly, yearly, and hidden cost categories — without fake exact prices.",
  },
  {
    href: "/tools/pet-cost-calculator",
    title: "Pet Cost Calculator",
    description: "Run your own monthly, annual, and first-year estimate.",
  },
  {
    href: "/dogs/breeds",
    title: "Dog breed decision guides",
    description: "Apartment, family, low-maintenance, first-time owner, small breeds.",
  },
  {
    href: "/dogs/food",
    title: "Dog food safety guides",
    description: "What dogs can and cannot eat — careful, source-aware.",
  },
  {
    href: "/guides/pet-budget-checklist",
    title: "Pet budget checklist",
    description: "Pre-adoption planning checklist that pairs with this page.",
  },
];

export default function DogCostsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Dogs", url: "https://faunahub.com/dogs" },
    { name: "Costs", url: "https://faunahub.com/dogs/costs" },
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
            <Breadcrumbs
              items={[{ label: "Dogs", href: "/dogs" }, { label: "Costs" }]}
            />
            <p className="mb-3">
              <span className="tag">Dogs</span>{" "}
              <span className="tag ml-1">Cost Planning</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Cost of Owning a Dog
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Planning the real cost of a dog goes well beyond the adoption fee.
              These resources cover the categories you should plan for, a
              calculator that uses your own numbers, and links to dog breed
              decisions and food safety guides — none of it pretends to know
              your local prices.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <ul className="grid sm:grid-cols-2 gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                >
                  <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                    {link.title}
                  </p>
                  <p className="text-sm text-[#2C3A2F] leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/dogs"
              className="text-sm font-medium text-[#063F2A] hover:underline"
            >
              ← Back to Dog Care Guides
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
