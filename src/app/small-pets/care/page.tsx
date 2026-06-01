import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import SmallPetDisclaimer from "@/components/small-pets/SmallPetDisclaimer";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  SMALL_PET_ARTICLES,
  SMALL_PET_SOURCE_NOTE,
} from "@/lib/small-pets/data";
import type { SourceLink } from "@/lib/educational/types";

const SITE = "https://faunahub.com";
const LAST_UPDATED = "2026-06-01";

export const metadata: Metadata = buildMetadata({
  title: "Small Pets Care — Rabbit, Guinea Pig & Hamster Planning",
  description:
    "Responsible care planning for rabbits, guinea pigs, and hamsters: housing, feeding, handling, enrichment, vet care, and warning signs. Small pets are not low-effort — plan carefully.",
  path: "/small-pets/care",
});

const bySlug = Object.fromEntries(SMALL_PET_ARTICLES.map((a) => [a.slug, a]));

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
    id: "care-paths",
    title: "Rabbit, Guinea Pig, and Hamster Care Paths",
    intro:
      "Start with the responsible-care overview for your species. Each links to housing, feeding, first-week, and warning-sign pages.",
    cards: [
      articleCard("rabbit-care"),
      articleCard("guinea-pig-care"),
      articleCard("hamster-care"),
    ],
    extraLinks: [
      { label: "Rabbit profile", href: "/animals/rabbit", description: "Species facts and background." },
      { label: "Guinea pig profile", href: "/animals/guinea-pig", description: "Species facts and background." },
      { label: "Hamster profile", href: "/animals/hamster", description: "Species facts and background." },
    ],
  },
  {
    id: "housing",
    title: "Housing and Setup Planning",
    intro:
      "Space and setup matter enormously for small-pet welfare. Bigger is better, and exact minimum sizes vary by organisation and country — check current local guidance.",
    cards: [
      articleCard("rabbit-housing-setup"),
      articleCard("guinea-pig-housing-setup"),
      articleCard("hamster-housing-setup"),
    ],
  },
  {
    id: "feeding",
    title: "Feeding and Water Basics",
    intro:
      "Species-appropriate diets and constant fresh water — no exact quantities here. Reduced eating is a serious sign in small pets.",
    cards: [
      articleCard("rabbit-feeding-basics"),
      articleCard("guinea-pig-feeding-basics"),
      articleCard("hamster-feeding-basics"),
    ],
    extraLinks: [
      { label: "Pet nutrition hub", href: "/pet-nutrition", description: "Broader feeding and nutrition planning." },
    ],
  },
  {
    id: "vet-warning",
    title: "Vet Care and Warning Signs",
    intro:
      "Small pets hide illness and can decline fast. Learn the warning signs and line up a small-animal or exotic veterinarian before you need one.",
    cards: [
      articleCard("rabbit-warning-signs"),
      articleCard("guinea-pig-warning-signs"),
      articleCard("hamster-warning-signs"),
    ],
    extraLinks: [
      { label: "Vet care hub", href: "/vet-care", description: "Routine and emergency vet planning." },
      { label: "Pet safety & emergencies", href: "/pet-safety", description: "Poisoning awareness and escalation." },
    ],
  },
];

const FIRST_WEEK_LINKS: CardLink[] = [
  articleCard("rabbit-first-week-checklist"),
  articleCard("guinea-pig-first-week-checklist"),
  articleCard("hamster-first-week-checklist"),
];

const TOOLS_AND_GUIDES: { label: string; href: string; description: string; badge: string }[] = [
  {
    label: "Small Pet Setup Checklist",
    href: "/tools/small-pet-setup-checklist",
    description: "Build a tailored setup checklist for a rabbit, guinea pig, or hamster — stays in your browser.",
    badge: "Free tool",
  },
  {
    label: "Pet Cost Calculator",
    href: "/tools/pet-cost-calculator",
    description: "Estimate the real monthly, annual, and first-year cost of small-pet ownership.",
    badge: "Free tool",
  },
  {
    label: "Pet Adoption Readiness Quiz",
    href: "/tools/pet-adoption-readiness-quiz",
    description: "A privacy-safe reflection on whether you're ready to commit.",
    badge: "Free tool",
  },
  {
    label: "Pet Budget Checklist",
    href: "/guides/pet-budget-checklist",
    description: "Plan recurring and one-off costs before adopting.",
    badge: "Guide",
  },
  {
    label: "All Small Pets",
    href: "/small-pets",
    description: "Small-pet overview and species cost pages.",
    badge: "Hub",
  },
  {
    label: "Pet Safety & Emergencies",
    href: "/pet-safety",
    description: "Household safety, poisoning awareness, and emergency planning.",
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
    label: "RSPCA — Rabbit Care",
    url: "https://www.rspca.org.uk/adviceandwelfare/pets/rabbits",
    type: "animal-welfare",
    note: "Welfare-based rabbit care guidance (UK)",
  },
  {
    label: "RSPCA — Guinea Pig Care",
    url: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs",
    type: "animal-welfare",
    note: "Welfare-based guinea pig care guidance (UK)",
  },
  {
    label: "RSPCA — Hamster Care",
    url: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/hamsters",
    type: "animal-welfare",
    note: "Welfare-based hamster care guidance (UK)",
  },
  {
    label: "Merck Veterinary Manual — Rabbits",
    url: "https://www.merckvetmanual.com/all-other-pets/rabbits",
    type: "reference",
    note: "Veterinary reference on rabbit care and health",
  },
  {
    label: "ASPCA Animal Poison Control Center",
    url: "https://www.aspca.org/pet-care/aspca-poison-control",
    type: "veterinary",
    note: "24/7 emergency animal-poisoning helpline (US)",
  },
  {
    label: "House Rabbit Society — Rabbit Care",
    url: "https://rabbit.org/care/",
    type: "animal-welfare",
    note: "Rabbit-welfare organisation care resources",
  },
];

const HUB_FAQS = [
  {
    question: "Are rabbits, guinea pigs, and hamsters low-maintenance pets?",
    answer:
      "No. These animals need appropriate space, species-correct diets, enrichment, gentle handling, companionship where relevant, and access to a knowledgeable veterinarian. They are real, often multi-year commitments — not low-effort, disposable, or starter pets.",
  },
  {
    question: "Do small pets really need a veterinarian?",
    answer:
      "Yes. Rabbits, guinea pigs, and hamsters all benefit from veterinary care, and they can become seriously ill quickly. It helps to identify a small-animal or exotic veterinarian before you need one, because not every clinic treats these species.",
  },
  {
    question: "Is this content veterinary advice?",
    answer:
      "No. These pages are educational care-planning resources. They do not diagnose or treat. For any concern about a specific animal — especially reduced eating, breathing trouble, diarrhoea, injury, or rapid worsening — contact a qualified veterinarian.",
  },
  {
    question: "Which small pet is right for me?",
    answer:
      "It depends on your space, time, budget, and what each species needs — they are quite different. Read each care overview, use the adoption readiness quiz and cost calculator, and talk to a rescue or veterinarian before deciding.",
  },
];

export default function SmallPetsCareHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE },
    { name: "Small Pets", url: `${SITE}/small-pets` },
    { name: "Small Pet Care", url: `${SITE}/small-pets/care` },
  ]);
  const itemList = itemListSchema(
    SMALL_PET_ARTICLES.map((a, i) => ({
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
            <Breadcrumbs items={[{ label: "Small Pets", href: "/small-pets" }, { label: "Care" }]} />
            <p className="mb-3">
              <span className="tag">Small Pets</span>{" "}
              <span className="tag ml-1">Responsible care</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Small Pets Care — Rabbits, Guinea Pigs &amp; Hamsters
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Practical, responsible planning for rabbits, guinea pigs, and
              hamsters — housing, feeding, handling, enrichment, vet care, and
              warning signs. These animals are not low-effort or disposable
              pets. This is educational planning, not veterinary advice; for a
              specific animal&apos;s health, contact a qualified veterinarian.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          <SmallPetDisclaimer />

          <section aria-labelledby="responsibility-heading">
            <h2 id="responsibility-heading" className="section-title">
              Small Pets Are Real Care Responsibilities
            </h2>
            <p className="section-subtitle max-w-3xl">
              Marketed as cheap and easy, small pets are anything but. Plan for
              their real needs before bringing one home.
            </p>
            <ul className="not-prose space-y-2 rounded-xl border border-[#DDE6DD] bg-white border-l-4 border-l-[#063F2A] p-4 sm:p-5 text-sm sm:text-base text-[#2C3A2F]">
              {[
                "They need appropriate space and enrichment — usually far more than pet-store cages provide.",
                "They have species-specific diets, and reduced eating is a serious warning sign.",
                "Rabbits and guinea pigs are highly social; many hamsters are solitary — needs differ by species.",
                "They can become seriously ill quickly and need a knowledgeable veterinarian.",
                "They are multi-year commitments with real ongoing time and cost.",
              ].map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="flex-shrink-0 mt-0.5 text-[#063F2A]">→</span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link href="/tools/pet-adoption-readiness-quiz" className="text-sm font-medium text-[#063F2A] hover:underline">
                Reflect with the pet adoption readiness quiz →
              </Link>
            </div>
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

          <section aria-labelledby="handling-heading">
            <h2 id="handling-heading" className="section-title">
              Handling, Socialization, and Stress
            </h2>
            <p className="section-subtitle max-w-3xl">
              All three species are prey animals that can be easily stressed.
              Build trust gently and let them set the pace.
            </p>
            <ul className="not-prose space-y-2 rounded-xl border border-[#DDE6DD] bg-white p-4 sm:p-5 text-sm sm:text-base text-[#2C3A2F]">
              {[
                "Approach calmly and let the animal come to you; avoid chasing or grabbing.",
                "Support the body fully and keep handling sessions short, especially at first.",
                "Provide hiding spots so they can retreat and feel safe.",
                "Respect natural rhythms — hamsters are mostly active at night and should not be woken to play.",
                "Watch for stress signs and give space; persistent fear or changes warrant a vet conversation.",
              ].map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="flex-shrink-0 mt-0.5 text-[#063F2A]">●</span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="enrichment-heading">
            <h2 id="enrichment-heading" className="section-title">
              Enrichment and Daily Routine
            </h2>
            <p className="section-subtitle max-w-3xl">
              Daily enrichment and a predictable routine support physical and
              mental wellbeing for small pets.
            </p>
            <ul className="not-prose space-y-2 rounded-xl border border-[#DDE6DD] bg-white p-4 sm:p-5 text-sm sm:text-base text-[#2C3A2F]">
              {[
                "Provide safe chew items, foraging opportunities, tunnels, and hides appropriate to the species.",
                "Give daily out-of-enclosure or in-enclosure exercise as appropriate, in a safe space.",
                "Keep a consistent routine for food, cleaning, and quiet time.",
                "Refresh and rotate enrichment to keep it interesting.",
                "Pair enrichment planning with the first-week checklists below.",
              ].map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="flex-shrink-0 mt-0.5 text-[#063F2A]">●</span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {FIRST_WEEK_LINKS.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-4 hover:border-[#0F5A3A] hover:no-underline transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2"
                >
                  <p className="text-base font-semibold text-[#17211B] leading-snug">{c.label} →</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="budget-heading">
            <h2 id="budget-heading" className="section-title">
              Budget and Supplies Planning
            </h2>
            <p className="section-subtitle max-w-3xl">
              Housing, food, enrichment, and vet care add up. Plan an honest
              budget before you commit.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Pet cost calculator", href: "/tools/pet-cost-calculator", desc: "Estimate monthly and first-year costs." },
                { label: "Pet budget checklist", href: "/guides/pet-budget-checklist", desc: "Plan recurring and one-off costs." },
                { label: "How much does a rabbit cost?", href: "/small-pets/rabbits/how-much-does-a-rabbit-cost", desc: "Rabbit cost framework." },
                { label: "How much does a guinea pig cost?", href: "/small-pets/guinea-pigs/how-much-does-a-guinea-pig-cost", desc: "Guinea pig cost framework." },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-4 hover:border-[#0F5A3A] hover:no-underline transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2"
                >
                  <p className="text-sm font-semibold text-[#17211B] leading-snug">{c.label} →</p>
                  <p className="text-xs text-[#5E6B63] mt-1 leading-relaxed">{c.desc}</p>
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
            <SourcesSection sources={HUB_SOURCES} intro={SMALL_PET_SOURCE_NOTE} headingId="sources-heading" />
          </section>

          <FAQBlock items={HUB_FAQS} title="Small Pets Care — Frequently Asked Questions" />

          <LastUpdated date={LAST_UPDATED} />
        </div>
      </main>
    </>
  );
}
