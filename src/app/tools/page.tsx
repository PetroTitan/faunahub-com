import type { Metadata } from "next";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Free Pet Owner Tools — Calculators & Planning Guides",
  description:
    "Free tools for pet owners: pet cost calculator, dog age calculator, cat age calculator, and more. Simple, practical, no registration required.",
  path: "/tools",
});

const tools = [
  {
    title: "Pet Cost Calculator",
    description:
      "Estimate monthly and annual costs for owning a pet. Input food, vet visits, grooming, insurance, toys, and emergency fund estimates.",
    href: "/tools/pet-cost-calculator",
    icon: "💰",
    badge: "Free",
  },
  {
    title: "Dog Age Calculator",
    description:
      "Enter your dog's age and size to get an approximate human-age equivalent. Based on general size-adjusted aging models.",
    href: "/tools/dog-age-calculator",
    icon: "🐕",
    badge: "Free",
  },
  {
    title: "Cat Age Calculator",
    description:
      "Enter your cat's age in years to get a general approximation of the equivalent human age.",
    href: "/tools/cat-age-calculator",
    icon: "🐈",
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
        <header className="bg-white border-b border-[#E4E8ED] py-12 sm:py-16">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#9CA5AF] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#2A7A4B] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#1C2B3A] font-medium" aria-current="page">Tools</span>
            </nav>
            <div className="max-w-2xl">
              <span className="tag mb-4 inline-block">Free Tools</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-4">
                Pet Owner Tools
              </h1>
              <p className="text-base sm:text-lg text-[#3E4F60] leading-relaxed">
                Simple, free calculators to help you plan costs, understand your pet&apos;s life stage,
                and make more informed decisions. No registration required.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <h2 className="section-title">Available Tools</h2>
          <p className="section-subtitle">
            All tools are free to use and provide general estimates. Results should be used as
            a planning starting point only.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {tools.map((tool) => (
              <ToolCard key={tool.href} {...tool} />
            ))}
          </div>

          <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            <strong>Tool Limitations:</strong> All tools provide general estimates only. Actual
            costs vary significantly by country, region, breed, individual pet health, and local
            service pricing. For health-related decisions, always consult a licensed veterinarian.
          </div>
        </div>
      </main>
    </>
  );
}
