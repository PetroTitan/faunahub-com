import type { Metadata } from "next";
import Link from "next/link";
import HubGrid from "@/components/HubGrid";
import ToolCard from "@/components/ToolCard";
import { websiteSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  // `absolute` prevents the root layout's title.template ("%s | FaunaHub")
  // from appending a redundant brand suffix.
  title: { absolute: "FaunaHub — Pet Care, Animal Facts & Wildlife Intelligence" },
  description:
    "Practical pet care guides, animal facts, wildlife explainers, and simple decision tools for responsible pet owners and curious readers.",
  alternates: { canonical: "https://faunahub.com" },
  openGraph: {
    title: "FaunaHub — Pet Care, Animal Facts & Wildlife Intelligence",
    description:
      "Practical pet care guides, animal facts, wildlife explainers, and decision tools for responsible pet owners and curious readers.",
    url: "https://faunahub.com",
    type: "website",
  },
};

const petCareCategories = [
  {
    title: "Dogs",
    description: "Breed guides, health advice, nutrition, training, and cost planning for dog owners.",
    href: "/dogs",
    icon: "🐕",
  },
  {
    title: "Cats",
    description: "Breed profiles, care guides, health information, and practical cat owner resources.",
    href: "/cats",
    icon: "🐈",
  },
  {
    title: "Small Pets",
    description: "Rabbits, hamsters, guinea pigs, and other small companion animal guides.",
    href: "/small-pets",
    icon: "🐹",
  },
  {
    title: "Birds",
    description: "Pet bird care, species profiles, and housing guides for bird owners.",
    href: "/birds",
    icon: "🦜",
  },
  {
    title: "Fish",
    description: "Aquarium setup, freshwater and saltwater species guides, and fish care basics.",
    href: "/fish",
    icon: "🐠",
  },
  {
    title: "Reptiles",
    description: "Lizards, snakes, turtles, and other reptile care guides and species information.",
    href: "/reptiles",
    icon: "🦎",
  },
];

const encyclopediaCategories = [
  {
    title: "Mammals",
    description: "From lions to wolves — profiles of land-dwelling mammals worldwide.",
    href: "/animal-encyclopedia/mammals",
    icon: "🦁",
  },
  {
    title: "Birds",
    description: "Eagles, owls, parrots and more — wild bird species profiles.",
    href: "/animal-encyclopedia/birds",
    icon: "🦅",
  },
  {
    title: "Marine Animals",
    description: "Whales, sharks, dolphins and the full scope of ocean life.",
    href: "/animal-encyclopedia/marine-animals",
    icon: "🐳",
  },
  {
    title: "Reptiles",
    description: "Wild crocodiles, constrictors, iguanas and reptile ecology.",
    href: "/animal-encyclopedia/reptiles",
    icon: "🐊",
  },
];

const tools = [
  {
    title: "Pet Cost Calculator",
    description: "Estimate monthly and annual costs for owning a pet — food, vet, grooming, and more.",
    href: "/tools/pet-cost-calculator",
    icon: "💰",
    badge: "Free",
  },
  {
    title: "Dog Age Calculator",
    description: "Convert your dog's age to a human-equivalent estimate based on size.",
    href: "/tools/dog-age-calculator",
    icon: "🐕",
    badge: "Free",
  },
  {
    title: "Cat Age Calculator",
    description: "Find out your cat's approximate age in human years.",
    href: "/tools/cat-age-calculator",
    icon: "🐈",
    badge: "Free",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteSchema(), organizationSchema()]),
        }}
      />

      <main id="main-content">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f0faf4] via-[#f7faf7] to-[#FAFAF8]">
          <div className="container-content">
            <div className="max-w-2xl">
              <span className="tag mb-5 inline-block">Independent Animal Knowledge Platform</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C2B3A] leading-tight mb-5">
                Pet care, animal facts,{" "}
                <span className="text-[#2A7A4B]">and wildlife intelligence.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#3E4F60] leading-relaxed mb-8">
                Practical guides for responsible pet owners, in-depth wildlife profiles, animal comparisons,
                and simple decision tools — all in one trusted place.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/dogs" className="btn-primary">
                  Explore Dogs
                </Link>
                <Link href="/animal-encyclopedia" className="btn-secondary">
                  Animal Encyclopedia
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pet Care Hub */}
        <section className="py-14 container-content">
          <h2 className="section-title">Pet Care Guides</h2>
          <p className="section-subtitle">
            Practical, trustworthy care information for the most common companion animals.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
            {petCareCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="card p-4 flex flex-col items-center gap-2 text-center hover:shadow-md hover:border-[#c6e8d4] transition-all group hover:no-underline"
              >
                <span className="text-3xl" role="img" aria-hidden="true">
                  {cat.icon}
                </span>
                <span className="text-sm font-semibold text-[#1C2B3A] group-hover:text-[#2A7A4B] transition-colors">
                  {cat.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {petCareCategories.slice(0, 3).map((cat) => (
              <Link
                key={cat.href + "-detail"}
                href={cat.href}
                className="card p-5 hover:shadow-md hover:border-[#c6e8d4] transition-all group hover:no-underline"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0" role="img" aria-hidden="true">
                    {cat.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1C2B3A] group-hover:text-[#2A7A4B] transition-colors mb-1">
                      {cat.title} Guide
                    </h3>
                    <p className="text-sm text-[#6B7684] leading-snug">{cat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Animal Encyclopedia */}
        <section className="py-14 bg-white border-y border-[#E4E8ED]">
          <div className="container-content">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <div>
                <h2 className="section-title">Animal Encyclopedia</h2>
                <p className="section-subtitle mb-0">
                  Wildlife profiles, habitat data, behavior, and ecology — from lions to eagles.
                </p>
              </div>
              <Link href="/animal-encyclopedia" className="btn-secondary text-sm shrink-0">
                Browse All Animals →
              </Link>
            </div>

            <HubGrid items={encyclopediaCategories} columns={4} />

            {/* Featured animal links */}
            <div className="mt-8 p-5 bg-[#f4f4f1] rounded-xl border border-[#E4E8ED]">
              <h3 className="text-sm font-semibold text-[#6B7684] uppercase tracking-wider mb-3">
                Featured Animal Profiles
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Lion", href: "/animals/lion" },
                  { label: "Wolf", href: "/animals/wolf" },
                  { label: "Eagle", href: "/animals/eagle" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 bg-white border border-[#E4E8ED] rounded-lg text-sm font-medium text-[#3E4F60] hover:border-[#c6e8d4] hover:text-[#2A7A4B] transition-colors hover:no-underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compare Section */}
        <section className="py-14 container-content">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <h2 className="section-title">Animal Comparisons</h2>
              <p className="section-subtitle mb-0">
                Side-by-side comparisons of animals, breeds, and species to answer common questions.
              </p>
            </div>
            <Link href="/compare" className="btn-secondary text-sm shrink-0">
              All Comparisons →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/compare/lion-vs-tiger",
                title: "Lion vs Tiger",
                question: "Which is bigger? Which is stronger?",
                icon: "🦁🐯",
              },
              {
                href: "/compare/wolf-vs-dog",
                title: "Wolf vs Dog",
                question: "How different are domestic dogs from their wild ancestors?",
                icon: "🐺🐕",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card p-6 hover:shadow-md hover:border-[#c6e8d4] transition-all group hover:no-underline"
              >
                <div className="text-3xl mb-3" role="img" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1C2B3A] group-hover:text-[#2A7A4B] mb-1 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7684]">{item.question}</p>
                <span className="text-xs font-medium text-[#2A7A4B] mt-3 block">
                  Compare now →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-14 bg-[#f4f4f1] border-y border-[#E4E8ED]">
          <div className="container-content">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <div>
                <h2 className="section-title">Pet Owner Tools</h2>
                <p className="section-subtitle mb-0">
                  Simple, free calculators to help you plan and understand your pet&apos;s care.
                </p>
              </div>
              <Link href="/tools" className="btn-secondary text-sm shrink-0">
                All Tools →
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <ToolCard key={tool.href} {...tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-14 container-content">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-4">
              Built on Editorial Integrity
            </h2>
            <p className="text-base text-[#6B7684] leading-relaxed mb-8">
              FaunaHub is an independent platform. We do not invent veterinary facts, fake
              conservation statistics, or fabricate citations. Health content includes clear
              disclaimers and is not a substitute for professional veterinary care.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              {[
                {
                  icon: "🔬",
                  title: "Fact-checked content",
                  desc: "No invented facts. No fake sources. Content is educational and clearly marked when pending expert review.",
                },
                {
                  icon: "🩺",
                  title: "Veterinary safety",
                  desc: "Health pages include clear disclaimers. We never give diagnoses, dosages, or advice that replaces a licensed vet.",
                },
                {
                  icon: "📋",
                  title: "Transparent editorial policy",
                  desc: "Our editorial principles are public. We disclose affiliate relationships and update content over time.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <span className="text-2xl mb-3 block" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="text-sm font-semibold text-[#1C2B3A] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#6B7684] leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/editorial-policy" className="btn-secondary text-sm">
                Editorial Policy
              </Link>
              <Link href="/about" className="btn-secondary text-sm">
                About FaunaHub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
