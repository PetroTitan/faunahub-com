import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import AquariumDisclaimer from "@/components/aquarium/AquariumDisclaimer";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { AQUARIUM_ARTICLES, AQUARIUM_SOURCE_NOTE } from "@/lib/aquarium/data";
import type { SourceLink } from "@/lib/educational/types";

const SITE = "https://faunahub.com";
const LAST_UPDATED = "2026-06-12";

export const metadata: Metadata = buildMetadata({
  title: "Aquarium Care — Responsible Fishkeeping Basics",
  description:
    "Responsible aquarium planning: tank setup, water quality and cycling, feeding, maintenance, fish stress and warning signs, and when to seek aquatic veterinary help. Fish are not effortless decorations.",
  path: "/aquarium-care",
});

const bySlug = Object.fromEntries(AQUARIUM_ARTICLES.map((a) => [a.slug, a]));

interface CardLink {
  label: string;
  href: string;
  description: string;
}

function articleCard(slug: string): CardLink {
  const a = bySlug[slug];
  return { label: a.pageHeading, href: a.path, description: a.description };
}

interface Theme {
  id: string;
  title: string;
  intro: string;
  cards: CardLink[];
  extraLinks?: CardLink[];
}

const THEMES: Theme[] = [
  {
    id: "freshwater-basics",
    title: "Freshwater Aquarium Basics",
    intro:
      "Start with realistic expectations and a planned setup. Bigger tanks are generally more stable, and fish are living animals with real needs.",
    cards: [
      articleCard("fish-tank-setup-basics"),
      articleCard("freshwater-aquarium-beginners"),
    ],
  },
  {
    id: "water-quality",
    title: "Water Quality and Cycling — Cautious Overview",
    intro:
      "Water quality is the foundation of fish health. Test with appropriate equipment and avoid sudden major changes unless guided by a qualified professional. No chemical dosing here.",
    cards: [articleCard("aquarium-water-quality-basics")],
  },
  {
    id: "feeding-routine",
    title: "Feeding and Routine Care",
    intro:
      "Species-appropriate diets, no overfeeding, and a calm maintenance routine. No exact quantities — amounts depend on the fish and should follow qualified guidance.",
    cards: [
      articleCard("fish-feeding-basics"),
      articleCard("fish-tank-maintenance-checklist"),
    ],
    extraLinks: [
      { label: "Pet nutrition hub", href: "/pet-nutrition", description: "Broader feeding and nutrition planning." },
    ],
  },
  {
    id: "warning-vet",
    title: "Stress and Warning Signs",
    intro:
      "Learn the warning signs, know they often trace back to water quality, and understand when to seek qualified help — never diagnosis or medication from a webpage.",
    cards: [
      articleCard("fish-stress-warning-signs"),
      articleCard("when-to-call-aquatic-vet"),
    ],
    extraLinks: [
      { label: "Vet care hub", href: "/vet-care", description: "Routine and emergency vet planning." },
      { label: "Pet safety & emergencies", href: "/pet-safety", description: "Household safety and escalation." },
    ],
  },
  {
    id: "species",
    title: "Species Planning",
    intro:
      "Popular first fish have specific needs. Research the species before buying, and remember that \"beginner-friendly\" does not mean effortless.",
    cards: [
      articleCard("betta-fish-care-basics"),
      articleCard("goldfish-care-basics"),
      articleCard("guppy-care-basics"),
    ],
    extraLinks: [
      { label: "Fish encyclopedia", href: "/animal-encyclopedia/fish", description: "Profiles of aquarium and ocean fish." },
    ],
  },
];

const RELATED_PROFILES: CardLink[] = [
  { label: "Betta fish profile", href: "/animals/betta-fish", description: "Species facts and background." },
  { label: "Goldfish profile", href: "/animals/goldfish", description: "Species facts and background." },
  { label: "Guppy profile", href: "/animals/guppy", description: "Species facts and background." },
];

const TOOLS_AND_GUIDES: { label: string; href: string; description: string; badge: string }[] = [
  {
    label: "Aquarium Setup Checklist",
    href: "/tools/aquarium-setup-checklist",
    description: "Build a tailored beginner setup checklist for a freshwater or marine tank — stays in your browser.",
    badge: "Free tool",
  },
  {
    label: "Pet Cost Calculator",
    href: "/tools/pet-cost-calculator",
    description: "Estimate the real cost of setting up and running an aquarium.",
    badge: "Free tool",
  },
  {
    label: "Pet Budget Checklist",
    href: "/guides/pet-budget-checklist",
    description: "Plan recurring and one-off costs before you start.",
    badge: "Guide",
  },
  {
    label: "Fish Encyclopedia",
    href: "/animal-encyclopedia/fish",
    description: "Aquarium and ocean fish profiles with licensed photos.",
    badge: "Encyclopedia",
  },
  {
    label: "Marine Animals",
    href: "/animal-encyclopedia/marine-animals",
    description: "Ocean life beyond fish — mammals, sharks, and invertebrates.",
    badge: "Encyclopedia",
  },
  {
    label: "Pet Safety & Emergencies",
    href: "/pet-safety",
    description: "Household safety, hazards, and emergency planning.",
    badge: "Related hub",
  },
];

const HUB_SOURCES: SourceLink[] = [
  {
    label: "AVMA — Pet Care Resources",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare",
    type: "veterinary",
    note: "American Veterinary Medical Association consumer pet-care hub",
  },
  {
    label: "World Aquatic Veterinary Medical Association",
    url: "https://wavma.org/",
    type: "veterinary",
    note: "Professional body for aquatic-animal veterinary medicine",
  },
  {
    label: "Merck Veterinary Manual — Fish",
    url: "https://www.merckvetmanual.com/all-other-pets/fish",
    type: "reference",
    note: "Veterinary reference covering pet and aquarium fish",
  },
  {
    label: "RSPCA — Fish Welfare",
    url: "https://www.rspca.org.uk/adviceandwelfare/pets/fish",
    type: "animal-welfare",
    note: "Welfare-based guidance on keeping fish (UK)",
  },
  {
    label: "University of Florida IFAS Extension (EDIS)",
    url: "https://edis.ifas.ufl.edu/",
    type: "university",
    note: "University extension articles on aquaculture and fish health",
  },
];

const HUB_FAQS = [
  {
    question: "Are aquarium fish low-effort, decorative pets?",
    answer:
      "No. Fish are living animals that depend on a well-managed aquarium — appropriate tank size, filtration, stable water quality, species-appropriate feeding, and maintenance. They are a real, often multi-year commitment, not effortless decorations.",
  },
  {
    question: "Is this content veterinary advice?",
    answer:
      "No. These pages are educational care-planning resources. They do not diagnose disease, recommend medications, or give chemical doses. For severe distress, injury, rapid worsening, mass illness, or unexplained deaths, seek a qualified aquatic veterinarian or specialist.",
  },
  {
    question: "Why don't these pages give exact tank sizes or chemical doses?",
    answer:
      "Requirements vary by species, setup, and country, and water chemistry should be handled carefully. We give general planning guidance and point you to qualified sources rather than universal rules, exact doses, or treatments that could be harmful if misapplied.",
  },
  {
    question: "Can a fish really see a veterinarian?",
    answer:
      "Yes. Aquatic veterinary medicine is an established field, and some veterinarians and clinics treat fish. Because not every clinic does, it helps to identify an aquatic or fish-experienced vet before you need one.",
  },
];

export default function AquariumCareHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE },
    { name: "Aquarium Care", url: `${SITE}/aquarium-care` },
  ]);
  const itemList = itemListSchema(
    AQUARIUM_ARTICLES.map((a, i) => ({
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
            <Breadcrumbs items={[{ label: "Aquarium Care" }]} />
            <p className="mb-3">
              <span className="tag">Aquarium Care</span>{" "}
              <span className="tag ml-1">Responsible fishkeeping</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Aquarium Care — Responsible Fishkeeping Basics
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Practical, responsible planning for home aquariums — tank setup,
              water quality and cycling, feeding, maintenance, and warning signs.
              Fish are living animals with real needs, not effortless
              decorations. This is educational planning, not veterinary advice;
              for a specific fish or tank problem, seek a qualified aquatic
              veterinarian or aquarium professional.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          <AquariumDisclaimer />

          <section aria-labelledby="responsibility-heading">
            <h2 id="responsibility-heading" className="section-title">
              Responsible Aquarium Keeping
            </h2>
            <p className="section-subtitle max-w-3xl">
              Aquariums can be calm and rewarding, but only with planning and
              upkeep. Set realistic expectations before bringing fish home.
            </p>
            <ul className="not-prose space-y-2 rounded-xl border border-[#DDE6DD] bg-white border-l-4 border-l-[#063F2A] p-4 sm:p-5 text-sm sm:text-base text-[#2C3A2F]">
              {[
                "Plan the setup around the fish you want — research their needs first.",
                "Cycle the tank so beneficial bacteria establish before stocking.",
                "Test water with appropriate equipment; most problems are water-quality related.",
                "Feed species-appropriate diets without overfeeding, and maintain the tank on a routine.",
                "Fish can become seriously ill quickly — know when to seek qualified help.",
              ].map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="flex-shrink-0 mt-0.5 text-[#063F2A]">→</span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {THEMES.map((theme) => (
            <section key={theme.id} aria-labelledby={`${theme.id}-heading`}>
              <h2 id={`${theme.id}-heading`} className="section-title">
                {theme.title}
              </h2>
              <p className="section-subtitle max-w-3xl">{theme.intro}</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {theme.cards.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                    >
                      <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                        {c.label}
                      </p>
                      <p className="text-sm text-[#2C3A2F] leading-relaxed">{c.description}</p>
                    </Link>
                  </li>
                ))}
                {theme.extraLinks?.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block h-full rounded-xl border border-dashed border-[#DDE6DD] bg-[#F7F8F3] p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                    >
                      <p className="text-base font-semibold text-[#063F2A] mb-2 leading-snug">
                        {link.label} →
                      </p>
                      <p className="text-sm text-[#5E6B63] leading-relaxed">{link.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section aria-labelledby="profiles-heading">
            <h2 id="profiles-heading" className="section-title">
              Related Fish Profiles
            </h2>
            <p className="section-subtitle max-w-3xl">
              Educational species profiles with licensed photos, distinguishing
              responsible aquarium keeping from wild fish.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {RELATED_PROFILES.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-4 hover:border-[#0F5A3A] hover:no-underline transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2"
                >
                  <p className="text-base font-semibold text-[#17211B] leading-snug">{c.label} →</p>
                  <p className="text-xs text-[#5E6B63] mt-1 leading-relaxed">{c.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="tools-heading">
            <h2 id="tools-heading" className="section-title">
              Related Tools and Guides
            </h2>
            <p className="section-subtitle max-w-3xl">
              Pair this hub with FaunaHub&apos;s free tools and planning resources.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TOOLS_AND_GUIDES.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2"
                >
                  <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">{t.badge}</p>
                  <p className="text-base font-semibold text-[#17211B]">{t.label} →</p>
                  <p className="text-sm text-[#5E6B63] mt-1 leading-relaxed">{t.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="sources-heading">
            <SourcesSection sources={HUB_SOURCES} intro={AQUARIUM_SOURCE_NOTE} headingId="sources-heading" />
          </section>

          <FAQBlock items={HUB_FAQS} title="Aquarium Care — Frequently Asked Questions" />

          <LastUpdated date={LAST_UPDATED} />
        </div>
      </main>
    </>
  );
}
