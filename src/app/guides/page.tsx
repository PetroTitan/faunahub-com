import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/schema";
import { getDecisionsByKind } from "@/lib/pet-choice/data";
import { BUDGET_GUIDES } from "@/lib/pet-cost/data";

const LAST_UPDATED = "2026-05-18";

export const metadata: Metadata = buildMetadata({
  title: "Pet Care Guides — Choosing the Right Pet for Your Household",
  description:
    "FaunaHub guides on choosing the right pet for apartments, families, beginners, and lower-maintenance lifestyles — plus links to dog, cat, and small-pet resources.",
  path: "/guides",
});

const HUB_FAQS = [
  {
    question: "Which guide should I read first?",
    answer:
      "Start with the guide closest to your situation — apartment, family, beginner, or low-maintenance — then read at least one other. Most households fit several of these intents at once.",
  },
  {
    question: "Are these guides veterinary advice?",
    answer:
      "No. They are educational decision support. Real adoption and care decisions should involve reputable shelters, breeders, trainers, or veterinarians and the specific animal you are considering.",
  },
  {
    question: "Do you recommend specific exotic pets?",
    answer:
      "No. Exotic or legally restricted species require deep research, species-savvy veterinary care, and local-law compliance. The guides mention reptiles and unusual species cautiously and direct you to consult experienced keepers and authorities.",
  },
  {
    question: "What if I want help choosing?",
    answer:
      "Try the Pet Breed Selector tool — it surfaces relevant decision pages based on a short questionnaire about your home, schedule, and preferences.",
  },
];

const SECONDARY_LINKS = [
  {
    href: "/dogs",
    label: "Dog Care Guides",
    desc: "Breeds, health, nutrition, behaviour, costs, and insurance for dog owners.",
  },
  {
    href: "/cats",
    label: "Cat Care Guides",
    desc: "Breeds, health, nutrition, behaviour, costs, and insurance for cat owners.",
  },
  {
    href: "/small-pets",
    label: "Small Pet Care Guides",
    desc: "Care resources for rabbits, guinea pigs, hamsters, and others.",
  },
  {
    href: "/animal-encyclopedia",
    label: "Animal Encyclopedia",
    desc: "Wildlife profiles for mammals, birds, reptiles, marine animals, and insects.",
  },
];

export default function GuidesPage() {
  const choiceGuides = getDecisionsByKind("guide");

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Guides", url: "https://faunahub.com/guides" },
  ]);
  const itemList = itemListSchema(
    choiceGuides.map((p, i) => ({
      name: p.pageHeading,
      url: `https://faunahub.com/guides/${p.slug}`,
      position: i + 1,
    }))
  );
  const faqLd = faqSchema(HUB_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, itemList, faqLd]),
        }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-10 sm:py-14">
          <div className="container-content">
            <Breadcrumbs items={[{ label: "Guides" }]} />
            <p className="mb-3">
              <span className="tag">Pet &amp; Animal Guides</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Pet Care Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Practical, cautious guides for choosing the right pet for your
              household, and care resources for dogs, cats, small pets, and
              wildlife learning.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-10">
          <section aria-labelledby="choice-heading">
            <h2 id="choice-heading" className="section-title">
              Choosing the right pet
            </h2>
            <p className="section-subtitle">
              Decision pages organised by user intent. Read more than one — most
              households fit several of these at once.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {choiceGuides.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/guides/${p.slug}`}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                      {p.shortIntent}
                    </p>
                    <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                      {p.pageHeading}
                    </p>
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">
                      {p.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="budget-heading">
            <h2 id="budget-heading" className="section-title">
              Budget and ownership cost planning
            </h2>
            <p className="section-subtitle">
              Plan honestly before adopting. These pages pair with the pet cost
              calculator and the species cost frameworks.
            </p>
            <ul className="grid sm:grid-cols-3 gap-4">
              {BUDGET_GUIDES.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={g.path}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                      {g.pageHeading}
                    </p>
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">
                      {g.description}
                    </p>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/costs"
                  className="block h-full rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                >
                  <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                    All species
                  </p>
                  <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                    Pet ownership cost hub →
                  </p>
                  <p className="text-sm text-[#2C3A2F] leading-relaxed">
                    Cost planning frameworks across dogs, cats, rabbits,
                    hamsters, guinea pigs, birds, fish, and reptiles.
                  </p>
                </Link>
              </li>
            </ul>
          </section>

          <section aria-labelledby="tools-heading">
            <h2 id="tools-heading" className="section-title">
              Use the tools
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 not-prose">
              <Link
                href="/tools/pet-breed-selector"
                className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition"
              >
                <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                  Free tool
                </p>
                <p className="text-base font-semibold text-[#17211B]">
                  Pet Breed Selector →
                </p>
                <p className="text-sm text-[#5E6B63] mt-1">
                  Short questionnaire that surfaces relevant decision pages.
                </p>
              </Link>
              <Link
                href="/tools/pet-life-stage-calculator"
                className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition"
              >
                <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                  Free tool
                </p>
                <p className="text-base font-semibold text-[#17211B]">
                  Pet Life Stage Calculator →
                </p>
                <p className="text-sm text-[#5E6B63] mt-1">
                  Care focus by life stage across species.
                </p>
              </Link>
            </div>
          </section>

          <section aria-labelledby="care-heading">
            <h2 id="care-heading" className="section-title">
              Care resources
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {SECONDARY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-base font-semibold text-[#17211B] mb-1">
                      {link.label}
                    </p>
                    <p className="text-sm text-[#5E6B63]">{link.desc}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <DisclaimerBlock type="veterinary" />

          <FAQBlock items={HUB_FAQS} title="Guides — Frequently Asked Questions" />

          <LastUpdated date={LAST_UPDATED} />
        </div>
      </main>
    </>
  );
}
