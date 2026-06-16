import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HubGrid from "@/components/HubGrid";
import ToolCard from "@/components/ToolCard";
import { getAnimalImage } from "@/lib/images/animal-images";
import { websiteSchema, organizationSchema } from "@/lib/schema";
import { RED_LIST_SPECIES_COUNT } from "@/lib/red-list/species";
import { getDetailedProfiles, getFeaturedSpecies } from "@/lib/red-list/helpers";
import CategoryBadge from "@/components/red-list/CategoryBadge";

const HOME_OG_IMAGE = {
  url: "https://faunahub.com/brand/faunahub-logo-horizontal.png",
  width: 1600,
  height: 900,
  alt: "FaunaHub — Pet Care, Animal Facts & Wildlife Intelligence",
};

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
    siteName: "FaunaHub",
    type: "website",
    images: [HOME_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "FaunaHub — Pet Care, Animal Facts & Wildlife Intelligence",
    description:
      "Practical pet care guides, animal facts, wildlife explainers, and decision tools for responsible pet owners and curious readers.",
    images: [HOME_OG_IMAGE.url],
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
    title: "Reptiles & Amphibians",
    description: "Wild crocodiles, constrictors, iguanas, frogs and salamanders.",
    href: "/animal-encyclopedia/reptiles",
    icon: "🐊",
  },
  {
    title: "Marine Animals",
    description: "Whales, sharks, dolphins and the full scope of ocean life.",
    href: "/animal-encyclopedia/marine-animals",
    icon: "🐳",
  },
  {
    title: "Fish",
    description: "Aquarium and ocean fish — bettas and goldfish to salmon and rays.",
    href: "/animal-encyclopedia/fish",
    icon: "🐟",
  },
  {
    title: "Insects & Invertebrates",
    description: "Bees, butterflies, ants, spiders — the most diverse animals on Earth.",
    href: "/animal-encyclopedia/insects",
    icon: "🦋",
  },
];

const tools = [
  {
    title: "Pet Age Calculator",
    description:
      "Pick the right age calculator for your species — dog, cat, rabbit, horse, hamster, guinea pig.",
    href: "/tools/pet-age-calculator",
    icon: "🧮",
    badge: "Free",
  },
  {
    title: "Pet Life Stage Calculator",
    description:
      "Cross-species life-stage estimator with general care focus by species.",
    href: "/tools/pet-life-stage-calculator",
    icon: "🩺",
    badge: "Free",
  },
  {
    title: "Pet Cost Calculator",
    description:
      "Estimate monthly, annual, and first-year cost — including an emergency fund line.",
    href: "/tools/pet-cost-calculator",
    icon: "💰",
    badge: "Free",
  },
  {
    title: "Pet Breed Selector",
    description:
      "Short questionnaire that surfaces pet and breed-category pages to read about.",
    href: "/tools/pet-breed-selector",
    icon: "🧭",
    badge: "Free",
  },
];

const planningAndSafety = [
  {
    title: "Pet Food Safety",
    description:
      "Cautious dog and cat food safety guides — what's safe, what's not, and when to call a vet.",
    href: "/dogs/food",
    icon: "🥕",
  },
  {
    title: "Pet Ownership Costs",
    description:
      "Honest cost planning frameworks for dogs, cats, small pets, birds, fish, and reptiles.",
    href: "/costs",
    icon: "💰",
  },
  {
    title: "Pet Insurance",
    description:
      "How pet insurance generally works, what to compare, and the emergency-fund alternative.",
    href: "/pet-insurance",
    icon: "🛡",
  },
  {
    title: "Vet Care",
    description:
      "Routine and emergency vet care planning, first-visit checklist, and what to ask your vet.",
    href: "/vet-care",
    icon: "🩺",
  },
  {
    title: "Emergency Vet Guidance",
    description:
      "When to call an emergency vet — common warning signs and what to say on the phone.",
    href: "/vet-care/when-to-call-an-emergency-vet",
    icon: "🚨",
  },
];

export default function HomePage() {
  // Counts are derived from the dataset at build time — never hard-coded or
  // exaggerated. Used for honest, verifiable discovery copy.
  const redListDetailedCount = getDetailedProfiles().length;
  const redListFeatured = getFeaturedSpecies(6);

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
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#EFF4E0] via-[#f7faf7] to-[#F7F8F3]">
          <div className="container-content">
            <div className="max-w-2xl">
              <span className="tag mb-5 inline-block">Independent Animal Knowledge Platform</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17211B] leading-tight mb-5">
                Pet care, animal facts,{" "}
                <span className="text-[#063F2A]">and wildlife intelligence.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#2C3A2F] leading-relaxed mb-8">
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
                <Link href="/wildlife" className="btn-secondary">
                  Wildlife &amp; Biodiversity
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
                className="card p-4 flex flex-col items-center gap-2 text-center hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
              >
                <span className="text-3xl" role="img" aria-hidden="true">
                  {cat.icon}
                </span>
                <span className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
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
                className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0" role="img" aria-hidden="true">
                    {cat.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                      {cat.title} Guide
                    </h3>
                    <p className="text-sm text-[#5E6B63] leading-snug">{cat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Animal Encyclopedia */}
        <section className="py-14 bg-white border-y border-[#DDE6DD]">
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

            <HubGrid items={encyclopediaCategories} columns={3} />

            {/* Featured animal links */}
            <div className="mt-8 p-5 bg-[#EFF1EB] rounded-xl border border-[#DDE6DD]">
              <h3 className="text-sm font-semibold text-[#5E6B63] uppercase tracking-wider mb-3">
                Featured Animal Profiles
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Tiger", href: "/animals/tiger" },
                  { label: "Elephant", href: "/animals/elephant" },
                  { label: "Dolphin", href: "/animals/dolphin" },
                  { label: "Penguin", href: "/animals/penguin" },
                  { label: "Alligator", href: "/animals/alligator" },
                  { label: "Eagle", href: "/animals/eagle" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 bg-white border border-[#DDE6DD] rounded-lg text-sm font-medium text-[#2C3A2F] hover:border-[#CFE0A8] hover:text-[#063F2A] transition-colors hover:no-underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife & Biodiversity Intelligence */}
        <section className="py-14 container-content">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 items-stretch">
            <div className="card p-6 sm:p-8 flex flex-col justify-between border-l-4 border-l-[#7BAA35]">
              <div>
                <span className="tag mb-3 inline-block">New · Educational Hub</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#17211B] mb-3">
                  Wildlife &amp; Biodiversity Intelligence
                </h2>
                <p className="text-base text-[#2C3A2F] leading-relaxed mb-4">
                  Explore wildlife profiles, animal groups, habitat context, and source-transparent
                  conservation notes — an educational hub, not a live conservation database.
                </p>
                <ul className="text-sm text-[#5E6B63] space-y-1.5 mb-6 list-disc list-outside pl-5">
                  <li>Source-reviewed wildlife profiles</li>
                  <li>Biodiversity context and source standards</li>
                  <li>Comparisons between related species</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/wildlife" className="btn-primary">
                  Explore Wildlife Hub
                </Link>
                <Link href="/animal-encyclopedia" className="btn-secondary">
                  Animal Encyclopedia
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Tiger", href: "/animals/tiger", icon: "🐯", slug: "tiger" },
                { label: "Dolphin", href: "/animals/dolphin", icon: "🐬", slug: "dolphin" },
                { label: "Eagle", href: "/animals/eagle", icon: "🦅", slug: "eagle" },
                { label: "Wolf", href: "/animals/wolf", icon: "🐺", slug: "wolf" },
                {
                  label: "Leopard vs Jaguar",
                  href: "/compare/leopard-vs-jaguar",
                  icon: "🐆",
                  slug: null,
                },
                {
                  label: "Lion vs Tiger",
                  href: "/compare/lion-vs-tiger",
                  icon: "🦁",
                  slug: null,
                },
              ].map((item) => {
                const img = item.slug ? getAnimalImage(item.slug) : null;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="card overflow-hidden flex flex-col hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                  >
                    {img ? (
                      <div className="relative w-full aspect-[16/10] bg-[#EFF1EB] border-b border-[#DDE6DD] overflow-hidden">
                        <Image
                          src={img.localPath}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 240px, 50vw"
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="px-4 pt-4">
                        <span className="text-2xl" role="img" aria-hidden="true">
                          {item.icon}
                        </span>
                      </div>
                    )}
                    <div className="p-4">
                      <span className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Endangered Animals / Red List Intelligence */}
        <section className="py-14 bg-white border-y border-[#DDE6DD]">
          <div className="container-content">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <div>
                <span className="tag mb-3 inline-block">Red List Intelligence</span>
                <h2 className="section-title">Endangered Animals</h2>
                <p className="section-subtitle mb-0">
                  A source-transparent guide to IUCN Red List categories —{" "}
                  {RED_LIST_SPECIES_COUNT} reviewed species records and{" "}
                  {redListDetailedCount} detailed conservation profiles. Status is
                  shown as a dated snapshot, never as permanent.
                </p>
              </div>
              <Link
                href="/endangered-animals"
                className="btn-secondary text-sm shrink-0"
              >
                Explore Endangered Animals →
              </Link>
            </div>

            {/* Featured threatened species */}
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {redListFeatured.map((r) => {
                const href =
                  r.profileStatus === "detailed-profile"
                    ? `/endangered-animals/species/${r.slug}`
                    : r.existingAnimalSlug
                      ? `/animals/${r.existingAnimalSlug}`
                      : "/endangered-animals";
                return (
                  <li key={r.slug}>
                    <Link
                      href={href}
                      className="card p-4 flex flex-col gap-2 h-full hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                    >
                      <CategoryBadge code={r.redListCategory} size="sm" />
                      <span className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] leading-snug">
                        {r.commonName}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Quick browse */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Critically Endangered", href: "/endangered-animals/critically-endangered" },
                { label: "Endangered", href: "/endangered-animals/endangered" },
                { label: "Vulnerable", href: "/endangered-animals/vulnerable" },
                { label: "Browse by region", href: "/endangered-animals/regions" },
                { label: "Red List explained", href: "/endangered-animals/red-list-explained" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3 py-1.5 bg-[#EFF1EB] border border-[#DDE6DD] rounded-full text-sm font-medium text-[#2C3A2F] hover:border-[#CFE0A8] hover:text-[#063F2A] transition-colors hover:no-underline"
                >
                  {l.label}
                </Link>
              ))}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                href: "/compare/lion-vs-tiger",
                title: "Lion vs Tiger",
                question: "Which is bigger? Which is stronger?",
                icon: "🦁🐯",
              },
              {
                href: "/compare/leopard-vs-jaguar",
                title: "Leopard vs Jaguar",
                question: "How do you tell two similar-looking cats apart?",
                icon: "🐆🐆",
              },
              {
                href: "/compare/alligator-vs-crocodile",
                title: "Alligator vs Crocodile",
                question: "Snout, teeth, and range — three reliable diagnostics.",
                icon: "🐊🐊",
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
                className="card p-6 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
              >
                <div className="text-3xl mb-3" role="img" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] mb-1 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5E6B63]">{item.question}</p>
                <span className="text-xs font-medium text-[#063F2A] mt-3 block">
                  Compare now →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-14 bg-[#EFF1EB] border-y border-[#DDE6DD]">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <ToolCard key={tool.href} {...tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Planning & Safety */}
        <section className="py-14 container-content">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <h2 className="section-title">Planning &amp; Safety</h2>
              <p className="section-subtitle mb-0">
                Cautious educational pages on the costs, insurance trade-offs,
                and vet-care planning behind responsible pet ownership.
              </p>
            </div>
            <Link href="/costs" className="btn-secondary text-sm shrink-0">
              All Cost Guides →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {planningAndSafety.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="text-2xl flex-shrink-0"
                    role="img"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#5E6B63] leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* More to explore */}
        <section className="py-14 bg-[#EFF1EB] border-y border-[#DDE6DD]">
          <div className="container-content">
            <h2 className="section-title">More to Explore</h2>
            <p className="section-subtitle">
              Dedicated guide clusters across pet care, wild birds, and aquariums.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { label: "Birdwatching", href: "/birdwatching", icon: "🔭" },
                { label: "Bird Care", href: "/bird-care", icon: "🐦" },
                { label: "Aquarium Care", href: "/aquarium-care", icon: "🐠" },
                { label: "Small Pets", href: "/small-pets", icon: "🐹" },
                { label: "Puppy Care", href: "/puppy-care", icon: "🐶" },
                { label: "Kitten Care", href: "/kitten-care", icon: "🐱" },
                { label: "Pet Safety", href: "/pet-safety", icon: "⛑" },
                { label: "Pet Nutrition", href: "/pet-nutrition", icon: "🥗" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="card p-4 flex items-center gap-3 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <span className="text-2xl" role="img" aria-hidden="true">
                    {l.icon}
                  </span>
                  <span className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                    {l.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-14 container-content">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17211B] mb-4">
              Built on Editorial Integrity
            </h2>
            <p className="text-base text-[#5E6B63] leading-relaxed mb-8">
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
                  <h3 className="text-sm font-semibold text-[#17211B] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#5E6B63] leading-snug">{item.desc}</p>
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
