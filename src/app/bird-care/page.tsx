import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import BirdDisclaimer from "@/components/birds/BirdDisclaimer";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { BIRD_CARE_ARTICLES, BIRD_CARE_HUB_SOURCES } from "@/lib/bird-care/data";
import { BIRD_SOURCE_NOTE } from "@/lib/birds/guide-types";

const SITE = "https://faunahub.com";
const LAST_UPDATED = "2026-06-12";

export const metadata: Metadata = buildMetadata({
  title: "Bird Care — Cautious Pet Bird Care Planning",
  description:
    "Responsible, cautious pet bird care planning: housing and enrichment, food and water basics, household safety, social needs, and when to contact an avian veterinarian. Not veterinary advice.",
  path: "/bird-care",
});

const bySlug = Object.fromEntries(BIRD_CARE_ARTICLES.map((a) => [a.slug, a]));

interface CardLink {
  label: string;
  href: string;
  description: string;
}
function articleCard(slug: string): CardLink {
  const a = bySlug[slug];
  return { label: a.pageHeading, href: a.path, description: a.description };
}

const ARTICLE_CARDS: CardLink[] = [
  articleCard("pet-bird-safety-basics"),
  articleCard("parrot-care-basics"),
  articleCard("when-to-call-an-avian-vet"),
];

interface SimpleSection {
  id: string;
  title: string;
  intro: string;
  bullets: string[];
}

const SECTIONS: SimpleSection[] = [
  {
    id: "housing",
    title: "Housing, Enrichment, and Daily Routine",
    intro:
      "Birds need appropriate space, daily enrichment, and a consistent routine — not just a cage.",
    bullets: [
      "Provide generous space and supervised, bird-proofed time out of the cage where appropriate.",
      "Offer daily enrichment: foraging, safe toys, and mental stimulation suited to the species.",
      "Keep a predictable routine for feeding, cleaning, rest, and interaction.",
      "Position housing away from draughts, kitchen fumes, and direct sun.",
    ],
  },
  {
    id: "food",
    title: "Food and Water — Cautious Basics",
    intro:
      "Diets vary by species, and this page gives no exact prescriptions. Plan diet with an avian vet.",
    bullets: [
      "A varied, species-appropriate diet is generally better than a seed-only diet.",
      "Provide constant access to clean, fresh water, changed regularly.",
      "Avoid foods known to be harmful to birds; check trusted avian sources.",
      "No exact quantities here — amounts and specifics should follow avian-vet guidance.",
    ],
  },
  {
    id: "safety",
    title: "Safety Risks Around the Home",
    intro:
      "The home holds hazards that can harm sensitive birds quickly.",
    bullets: [
      "Birds are very sensitive to fumes — smoke, aerosols, and some overheated non-stick cookware.",
      "Secure windows, glass, ceiling fans, hot surfaces, open water, and cords.",
      "Store toxic foods, plants, and chemicals well out of reach.",
      "Supervise interactions with other pets, which can injure or stress birds.",
    ],
  },
  {
    id: "social",
    title: "Stress, Handling, and Social Needs",
    intro:
      "Many pet birds are highly social and sensitive to stress.",
    bullets: [
      "Build trust gently and at the bird's pace; avoid grabbing or chasing.",
      "Provide companionship and interaction; isolation and boredom cause welfare problems.",
      "Watch for stress signs and changes in behaviour, appetite, or droppings.",
      "Respect the bird's need for rest and quiet, and a regular day-night cycle.",
    ],
  },
];

const BIRD_PROFILES: CardLink[] = [
  { label: "Parrot", href: "/animals/parrot", description: "Intelligent, long-lived, demanding birds." },
  { label: "Bird encyclopedia", href: "/animal-encyclopedia/birds", description: "Wild and domestic bird profiles." },
  { label: "Birdwatching hub", href: "/birdwatching", description: "Responsible wild bird observation." },
];

const HUB_FAQS = [
  {
    question: "Are pet birds easy, low-effort pets?",
    answer:
      "No. Pet birds — especially parrots — are intelligent, often long-lived, social animals with real needs for space, enrichment, companionship, an appropriate diet, a safe environment, and avian-veterinary care. They are a significant, sometimes decades-long commitment, not easy or low-effort pets.",
  },
  {
    question: "Does this hub give diagnosis or treatment?",
    answer:
      "No. These pages are educational care-planning resources. They do not diagnose, treat, prescribe medication or dosages, give exact diets, or provide breeding or wing-clipping instructions. For any health concern, contact an avian veterinarian.",
  },
  {
    question: "When should I contact an avian veterinarian?",
    answer:
      "Contact an avian vet promptly for breathing difficulty, collapse, bleeding, seizures, severe injury, refusal to eat, or rapid worsening. Because birds hide illness and can decline quickly, it helps to identify an avian or bird-experienced veterinarian before you need one.",
  },
  {
    question: "Why don't these pages give exact diets or cage sizes?",
    answer:
      "Appropriate diets and housing vary by species and individual, and getting them wrong can harm a bird. Rather than universal numbers or legal claims, we give cautious general framing and point you to an avian veterinarian and trusted welfare sources.",
  },
];

export default function BirdCareHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE },
    { name: "Bird Care", url: `${SITE}/bird-care` },
  ]);
  const itemList = itemListSchema(
    BIRD_CARE_ARTICLES.map((a, i) => ({
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
            <Breadcrumbs items={[{ label: "Bird Care" }]} />
            <p className="mb-3">
              <span className="tag">Bird Care</span>{" "}
              <span className="tag ml-1">Responsible planning</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Bird Care — Cautious Pet Bird Care Planning
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Responsible planning for keeping pet birds — housing and
              enrichment, food and water basics, household safety, social needs,
              and knowing when to seek an avian veterinarian. Pet birds are
              specialised, often long-lived animals, not easy pets. This is
              educational planning, not veterinary advice.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          <BirdDisclaimer />

          <section aria-labelledby="specialized-heading">
            <h2 id="specialized-heading" className="section-title">
              Pet Birds Are Specialized Animals
            </h2>
            <p className="section-subtitle max-w-3xl">
              Marketed as decorative or easy, pet birds are anything but. Plan
              for their real needs before bringing one home.
            </p>
            <ul className="not-prose space-y-2 rounded-xl border border-[#DDE6DD] bg-white border-l-4 border-l-[#063F2A] p-4 sm:p-5 text-sm sm:text-base text-[#2C3A2F]">
              {[
                "They need space, daily enrichment, and a consistent routine — not just a cage.",
                "Many are highly social and can suffer from isolation and boredom.",
                "Diets are species-specific; a seed-only diet is usually inadequate.",
                "Birds are very sensitive to household fumes and hazards.",
                "They hide illness and can decline quickly — avian-vet access matters.",
              ].map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="flex-shrink-0 mt-0.5 text-[#063F2A]">→</span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {SECTIONS.map((s) => (
            <section key={s.id} aria-labelledby={`${s.id}-heading`}>
              <h2 id={`${s.id}-heading`} className="section-title">{s.title}</h2>
              <p className="section-subtitle max-w-3xl">{s.intro}</p>
              <ul className="not-prose space-y-2 rounded-xl border border-[#DDE6DD] bg-white p-4 sm:p-5 text-sm sm:text-base text-[#2C3A2F]">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span aria-hidden="true" className="flex-shrink-0 mt-0.5 text-[#063F2A]">●</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section aria-labelledby="vet-heading">
            <h2 id="vet-heading" className="section-title">
              When to Contact an Avian Veterinarian
            </h2>
            <p className="section-subtitle max-w-3xl">
              Birds hide illness and can decline fast. Learn the warning signs
              and line up an avian vet before you need one.
            </p>
            <ul className="not-prose space-y-2 rounded-xl border border-[#DDE6DD] bg-white border-l-4 border-l-[#063F2A] p-4 sm:p-5 text-sm sm:text-base text-[#2C3A2F]">
              {[
                "Breathing difficulty, tail-bobbing, or open-mouth breathing — urgent.",
                "Collapse, weakness, or sitting fluffed-up and inactive.",
                "Bleeding, injury, burns, or a suspected fracture.",
                "Seizures, loss of balance, or sudden behaviour change.",
                "Refusal to eat or drink, or any rapid worsening — contact an avian vet immediately.",
              ].map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="flex-shrink-0 mt-0.5 text-[#063F2A]">→</span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="guides-heading">
            <h2 id="guides-heading" className="section-title">Bird Care Guides</h2>
            <p className="section-subtitle max-w-3xl">
              Cautious, educational planning pages — never diagnosis, treatment,
              or dosage.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ARTICLE_CARDS.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">{c.label}</p>
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">{c.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="profiles-heading">
            <h2 id="profiles-heading" className="section-title">Related Bird Profiles</h2>
            <p className="section-subtitle max-w-3xl">
              Explore bird profiles and the wider bird resources on FaunaHub.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {BIRD_PROFILES.map((c) => (
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
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { href: "/pet-nutrition", label: "Pet nutrition" },
                { href: "/pet-safety", label: "Pet safety" },
                { href: "/vet-care", label: "Vet care" },
                { href: "/tools/pet-cost-calculator", label: "Cost calculator" },
                { href: "/guides/pet-budget-checklist", label: "Budget checklist" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs px-3 py-1.5 rounded-full border border-[#DDE6DD] bg-white text-[#2C3A2F] hover:border-[#7BAA35] hover:text-[#063F2A] hover:no-underline transition"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="sources-heading">
            <SourcesSection sources={BIRD_CARE_HUB_SOURCES} intro={BIRD_SOURCE_NOTE} headingId="sources-heading" />
          </section>

          <FAQBlock items={HUB_FAQS} title="Bird Care — Frequently Asked Questions" />

          <LastUpdated date={LAST_UPDATED} />
        </div>
      </main>
    </>
  );
}
