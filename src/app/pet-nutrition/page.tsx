import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import NutritionDisclaimer from "@/components/pet-nutrition/NutritionDisclaimer";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  PET_NUTRITION_ARTICLES,
  PET_NUTRITION_SOURCE_NOTE,
} from "@/lib/pet-nutrition/data";
import type { SourceLink } from "@/lib/educational/types";

const SITE = "https://faunahub.com";
const LAST_UPDATED = "2026-06-01";

export const metadata: Metadata = buildMetadata({
  title: "Pet Nutrition & Feeding Intelligence — Plan Responsibly",
  description:
    "A calm, practical hub for pet feeding: portions, schedules, life-stage feeding, food types, treats, water, transitions, and reading labels — with clear guidance on when to ask a veterinarian.",
  path: "/pet-nutrition",
});

const bySlug = Object.fromEntries(PET_NUTRITION_ARTICLES.map((a) => [a.slug, a]));

interface ThemeSection {
  id: string;
  title: string;
  intro: string;
  slugs: string[];
  extraLinks?: { label: string; href: string; description: string }[];
}

const THEMES: ThemeSection[] = [
  {
    id: "feeding-basics",
    title: "Feeding Planning Basics",
    intro:
      "Start here. How much to feed depends on the individual pet, the food label, and veterinary guidance — these pages explain the variables rather than prescribing portions.",
    slugs: [
      "how-much-should-i-feed-my-dog",
      "how-much-should-i-feed-my-cat",
      "pet-food-label-basics",
      "how-to-transition-pet-food",
    ],
  },
  {
    id: "feeding-guides",
    title: "Dog and Cat Feeding Guides",
    intro:
      "Build a routine that fits your household and your pet's life stage. Pair these with our food-safety guides for what is and isn't safe to feed.",
    slugs: ["dog-feeding-schedule", "cat-feeding-schedule"],
    extraLinks: [
      {
        label: "Dog food safety",
        href: "/dogs/food",
        description: "What dogs can and cannot eat.",
      },
      {
        label: "Cat food safety",
        href: "/cats/food",
        description: "What cats can and cannot eat.",
      },
    ],
  },
  {
    id: "food-types",
    title: "Food Types: Dry, Wet, Fresh, Raw — Cautious Overview",
    intro:
      "Balanced, non-promotional comparisons. No type is declared universally best, and raw diets are covered as a risk-aware cautions page, not advocacy.",
    slugs: [
      "wet-vs-dry-food-for-dogs",
      "wet-vs-dry-food-for-cats",
      "raw-diets-for-pets-cautions",
    ],
  },
  {
    id: "life-stage",
    title: "Life Stage Feeding: Puppy, Kitten, Adult, Senior",
    intro:
      "Needs change across a pet's life. These pages cover growth-stage and senior considerations to discuss with your veterinarian — not condition-specific diet advice.",
    slugs: [
      "puppy-feeding-basics",
      "kitten-feeding-basics",
      "senior-dog-feeding-considerations",
      "senior-cat-feeding-considerations",
    ],
  },
  {
    id: "treats-water",
    title: "Treats, Water, and Portion Awareness",
    intro:
      "The small daily things add up. Keep treats modest and within the daily total, and keep fresh water available while noticing meaningful changes in drinking.",
    slugs: ["pet-treats-and-portion-control", "how-much-water-should-pets-drink"],
  },
];

const VET_LINKS: { label: string; href: string; description: string }[] = [
  {
    label: "Vet care hub",
    href: "/vet-care",
    description: "Routine and emergency planning, and questions to ask your vet.",
  },
  {
    label: "Dog health hub",
    href: "/dogs/health",
    description: "Cautious symptom-awareness pages for dogs.",
  },
  {
    label: "Cat health hub",
    href: "/cats/health",
    description: "Cautious symptom-awareness pages for cats.",
  },
  {
    label: "Pet safety & emergencies",
    href: "/pet-safety",
    description: "Preparedness, poisoning awareness, and when to escalate.",
  },
];

const WHEN_TO_ASK_BULLETS = [
  "Puppies, kittens, pregnancy or nursing, or seniors — life stages with particular needs.",
  "Weight concerns, a changing body condition, or any weight-loss or weight-gain plan.",
  "Any diagnosed condition or prescription diet (for example kidney, urinary, diabetic, or allergy diets).",
  "Vomiting, diarrhoea, appetite loss, or refusal to eat that lasts or recurs.",
  "Before a major diet change, or if you are considering a raw, vegetarian, or home-prepared diet.",
];

const TOOLS_AND_PLANNING: { label: string; href: string; description: string; badge: string }[] = [
  {
    label: "Pet Feeding Schedule Planner",
    href: "/tools/pet-feeding-schedule-planner",
    description: "Build a sample daily routine template in your browser — nothing is stored or sent.",
    badge: "Free tool",
  },
  {
    label: "Pet Cost Calculator",
    href: "/tools/pet-cost-calculator",
    description: "Estimate monthly, annual, and first-year budgets, including food.",
    badge: "Free tool",
  },
  {
    label: "Pet Adoption Readiness Quiz",
    href: "/tools/pet-adoption-readiness-quiz",
    description: "A privacy-safe reflection on whether you're ready to adopt.",
    badge: "Free tool",
  },
  {
    label: "Pet Budget Checklist",
    href: "/guides/pet-budget-checklist",
    description: "Plan recurring costs of responsible pet ownership, food included.",
    badge: "Guide",
  },
  {
    label: "Pet Insurance",
    href: "/pet-insurance",
    description: "How insurance generally works and the trade-offs versus an emergency fund.",
    badge: "Planning hub",
  },
  {
    label: "Pet Safety & Emergencies",
    href: "/pet-safety",
    description: "Poisoning awareness, household safety, and emergency preparedness.",
    badge: "Related hub",
  },
  {
    label: "Puppy Care Foundation",
    href: "/puppy-care",
    description: "Early-care planning for a new puppy, including feeding routines.",
    badge: "Related hub",
  },
  {
    label: "Kitten Care Foundation",
    href: "/kitten-care",
    description: "Early-care planning for a new kitten, including feeding routines.",
    badge: "Related hub",
  },
  {
    label: "Small Pets Care",
    href: "/small-pets/care",
    description: "Rabbit, guinea pig, and hamster feeding, housing, and care planning.",
    badge: "Related hub",
  },
];

const HUB_SOURCES: SourceLink[] = [
  {
    label: "AVMA — Selecting Pet Food",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare/selecting-pet-food",
    type: "veterinary",
    note: "How to evaluate and choose a commercial pet food",
  },
  {
    label: "WSAVA — Global Nutrition Guidelines",
    url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    type: "veterinary",
    note: "World Small Animal Veterinary Association nutrition guidance",
  },
  {
    label: "AAFCO — Understanding Pet Food",
    url: "https://www.aafco.org/consumers/understanding-pet-food/",
    type: "reference",
    note: "Consumer guidance on pet-food labels",
  },
  {
    label: "FDA — Pet Food",
    url: "https://www.fda.gov/animal-veterinary/animal-foods-feeds/pet-food",
    type: "government",
    note: "US FDA pet-food regulation and labelling information",
  },
  {
    label: "Merck Veterinary Manual — Nutrition in Small Animals",
    url: "https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals",
    type: "reference",
    note: "Veterinary reference on dog and cat nutrition",
  },
  {
    label: "ASPCA — Dog Nutrition Tips",
    url: "https://www.aspca.org/pet-care/dog-care/dog-nutrition-tips",
    type: "veterinary",
    note: "General feeding guidance for dogs",
  },
  {
    label: "ASPCA — Cat Nutrition Tips",
    url: "https://www.aspca.org/pet-care/cat-care/cat-nutrition-tips",
    type: "veterinary",
    note: "General feeding guidance for cats",
  },
];

const HUB_FAQS = [
  {
    question: "Is this hub veterinary nutrition advice?",
    answer:
      "No. Every page here is educational and focuses on planning, comparisons, and knowing when to ask a professional. It does not diagnose, prescribe diets, or give exact feeding amounts. For an individual pet's nutrition, consult a licensed veterinarian.",
  },
  {
    question: "Why don't you give exact feeding amounts?",
    answer:
      "The right amount depends on species, age, size, activity, body condition, the specific food, and health — factors a webpage cannot assess. The feeding guide on the food label, refined with your veterinarian, is far more reliable than a universal number.",
  },
  {
    question: "Do you recommend specific food brands?",
    answer:
      "No. FaunaHub does not rank or recommend brands and carries no affiliate food links. These pages explain how to read labels and weigh options so you can decide with your veterinarian.",
  },
  {
    question: "My pet has a health condition — can these pages help?",
    answer:
      "These pages are general planning resources, not condition-specific diet advice. Weight problems, kidney disease, diabetes, allergies, and similar conditions need a veterinarian's assessment and often a prescription diet.",
  },
];

export default function PetNutritionHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE },
    { name: "Pet Nutrition", url: `${SITE}/pet-nutrition` },
  ]);
  const itemList = itemListSchema(
    PET_NUTRITION_ARTICLES.map((a, i) => ({
      name: a.pageHeading,
      url: `${SITE}${a.path}`,
      position: i + 1,
    }))
  );
  const faqLd = faqSchema(HUB_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, itemList, faqLd]) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-10 sm:py-14">
          <div className="container-content">
            <Breadcrumbs items={[{ label: "Pet Nutrition" }]} />
            <p className="mb-3">
              <span className="tag">Pet Nutrition</span>{" "}
              <span className="tag ml-1">Feeding &amp; planning</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Pet Nutrition &amp; Feeding Intelligence
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Calm, practical pages to help you plan feeding routines, compare
              food types, understand life-stage needs, and read labels — and to
              know when a question belongs with your veterinarian. Educational
              only: no diet prescriptions, no exact portions, no brand rankings.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          <NutritionDisclaimer />

          {THEMES.map((theme) => (
            <section key={theme.id} aria-labelledby={`${theme.id}-heading`}>
              <h2 id={`${theme.id}-heading`} className="section-title">
                {theme.title}
              </h2>
              <p className="section-subtitle max-w-3xl">{theme.intro}</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {theme.slugs.map((slug) => {
                  const a = bySlug[slug];
                  if (!a) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={a.path}
                        className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                      >
                        <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                          {a.pageHeading}
                        </p>
                        <p className="text-sm text-[#2C3A2F] leading-relaxed">
                          {a.description}
                        </p>
                      </Link>
                    </li>
                  );
                })}
                {theme.extraLinks?.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block h-full rounded-xl border border-dashed border-[#DDE6DD] bg-[#F7F8F3] p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                    >
                      <p className="text-base font-semibold text-[#063F2A] mb-2 leading-snug">
                        {link.label} →
                      </p>
                      <p className="text-sm text-[#5E6B63] leading-relaxed">
                        {link.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section aria-labelledby="when-to-ask-heading">
            <h2 id="when-to-ask-heading" className="section-title">
              When to Ask a Veterinarian
            </h2>
            <p className="section-subtitle max-w-3xl">
              Nutrition is individual. These pages help you plan, but some
              situations call for professional guidance before you act.
            </p>
            <ul className="not-prose space-y-2 rounded-xl border border-[#DDE6DD] bg-white border-l-4 border-l-[#063F2A] p-4 sm:p-5 text-sm sm:text-base text-[#2C3A2F]">
              {WHEN_TO_ASK_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="flex-shrink-0 mt-0.5 text-[#063F2A]">
                    →
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {VET_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-4 hover:border-[#0F5A3A] hover:no-underline transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2"
                >
                  <p className="text-base font-semibold text-[#17211B] leading-snug">
                    {link.label} →
                  </p>
                  <p className="text-sm text-[#5E6B63] mt-1 leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="tools-heading">
            <h2 id="tools-heading" className="section-title">
              Related Tools and Planning Resources
            </h2>
            <p className="section-subtitle max-w-3xl">
              Pair these feeding pages with FaunaHub&apos;s free tools and
              planning hubs to map routines, budgets, and household fit.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TOOLS_AND_PLANNING.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2"
                >
                  <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                    {t.badge}
                  </p>
                  <p className="text-base font-semibold text-[#17211B]">
                    {t.label} →
                  </p>
                  <p className="text-sm text-[#5E6B63] mt-1 leading-relaxed">
                    {t.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="sources-heading">
            <SourcesSection
              sources={HUB_SOURCES}
              intro={PET_NUTRITION_SOURCE_NOTE}
              headingId="sources-heading"
            />
          </section>

          <FAQBlock items={HUB_FAQS} title="Pet Nutrition — Frequently Asked Questions" />

          <LastUpdated date={LAST_UPDATED} />
        </div>
      </main>
    </>
  );
}
