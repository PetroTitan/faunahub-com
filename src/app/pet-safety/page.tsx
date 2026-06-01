import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import EmergencyCallout from "@/components/pet-safety/EmergencyCallout";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { PET_SAFETY_ARTICLES, PET_SAFETY_SOURCE_NOTE } from "@/lib/pet-safety/data";
import type { SourceLink } from "@/lib/educational/types";

const SITE = "https://faunahub.com";
const LAST_UPDATED = "2026-06-01";

export const metadata: Metadata = buildMetadata({
  title: "Pet Safety & Emergency Preparedness — Plan, Recognise, Escalate",
  description:
    "A calm, practical hub for pet emergency preparedness: when to contact an emergency vet, poisoning and food risks, home and travel safety, seasonal risks, and planning checklists.",
  path: "/pet-safety",
});

const bySlug = Object.fromEntries(PET_SAFETY_ARTICLES.map((a) => [a.slug, a]));

interface ThemeSection {
  id: string;
  title: string;
  intro: string;
  slugs: string[];
  extraLinks?: { label: string; href: string; description: string }[];
}

const THEMES: ThemeSection[] = [
  {
    id: "emergency-preparedness",
    title: "Emergency Preparedness for Pet Owners",
    intro:
      "Get organised before a crisis — contacts, transport, records, and a first-aid kit. Preparedness is what lets you act calmly and reach professional care quickly.",
    slugs: ["pet-emergency-checklist", "pet-first-aid-kit", "pet-emergency-contact-list"],
  },
  {
    id: "when-to-contact-vet",
    title: "When to Contact an Emergency Veterinarian",
    intro:
      "Recognising warning signs and escalating early. These pages help you decide when to call — they do not diagnose. When in doubt, contact a licensed veterinarian.",
    slugs: ["when-to-go-to-emergency-vet", "pet-choking-warning-signs"],
    extraLinks: [
      {
        label: "When to call an emergency vet",
        href: "/vet-care/when-to-call-an-emergency-vet",
        description: "Cautious warning-signs guide from our vet-care hub.",
      },
      {
        label: "Emergency vet costs",
        href: "/vet-care/emergency-vet-costs",
        description: "Why emergency care varies and how to plan for it.",
      },
    ],
  },
  {
    id: "poisoning-food-risks",
    title: "Poisoning and Food Risks",
    intro:
      "If you suspect your pet ate something toxic, contact a veterinarian or animal poison-control line immediately — do not wait for symptoms. These pages focus on recognition and escalation, not home treatment.",
    slugs: [
      "pet-poisoning-warning-signs",
      "dog-ate-chocolate-what-to-do",
      "dog-ate-grapes-what-to-do",
      "cat-ate-toxic-food-what-to-do",
    ],
    extraLinks: [
      {
        label: "Can dogs eat chocolate?",
        href: "/dogs/food/can-dogs-eat-chocolate",
        description: "Background food-safety explainer for dogs.",
      },
      {
        label: "Can dogs eat grapes?",
        href: "/dogs/food/can-dogs-eat-grapes",
        description: "Background food-safety explainer for dogs.",
      },
      {
        label: "Can cats eat chocolate?",
        href: "/cats/food/can-cats-eat-chocolate",
        description: "Background food-safety explainer for cats.",
      },
      {
        label: "Dog food safety",
        href: "/dogs/food",
        description: "What is and isn't safe to feed dogs.",
      },
      {
        label: "Cat food safety",
        href: "/cats/food",
        description: "What is and isn't safe to feed cats.",
      },
    ],
  },
  {
    id: "home-safety",
    title: "Home Safety Planning",
    intro:
      "Most household hazards are preventable. Pet-proof your home so toxic foods, medications, plants, cords, and open windows are managed before they become a problem.",
    slugs: ["home-safety-for-pets"],
    extraLinks: [
      {
        label: "Dog health hub",
        href: "/dogs/health",
        description: "Cautious educational pages on common dog health topics.",
      },
      {
        label: "Cat health hub",
        href: "/cats/health",
        description: "Cautious educational pages on common cat health topics.",
      },
    ],
  },
  {
    id: "travel-outdoor",
    title: "Travel and Outdoor Safety",
    intro:
      "Travelling and time outdoors go more smoothly with a plan — secure restraint, current ID, and knowing what to do if a pet goes missing.",
    slugs: ["pet-travel-safety-checklist", "lost-pet-checklist"],
  },
  {
    id: "seasonal-weather",
    title: "Seasonal and Weather Risks",
    intro:
      "Heat, cold, and loud events like fireworks each bring their own risks. Prevention and early recognition keep pets safer through the seasons.",
    slugs: ["pet-heatstroke-warning-signs", "fireworks-and-pet-safety"],
  },
];

const TOOLS_AND_PLANNING: { label: string; href: string; description: string; badge: string }[] = [
  {
    label: "Pet Emergency Contact List",
    href: "/tools/pet-emergency-contact-list",
    description: "Build a printable contact list privately in your browser — nothing is stored or sent.",
    badge: "Free tool",
  },
  {
    label: "Pet Cost Calculator",
    href: "/tools/pet-cost-calculator",
    description: "Estimate monthly, annual, and first-year budgets, including emergency planning.",
    badge: "Free tool",
  },
  {
    label: "Pet Adoption Readiness Quiz",
    href: "/tools/pet-adoption-readiness-quiz",
    description: "A privacy-safe reflection on whether you're ready to adopt.",
    badge: "Free tool",
  },
  {
    label: "Pet Insurance",
    href: "/pet-insurance",
    description: "How insurance generally works and the trade-offs versus an emergency fund.",
    badge: "Planning hub",
  },
  {
    label: "Pet Budget Checklist",
    href: "/guides/pet-budget-checklist",
    description: "Plan the recurring and one-off costs of responsible pet ownership.",
    badge: "Guide",
  },
  {
    label: "Vet Care",
    href: "/vet-care",
    description: "Routine care, emergency planning, and questions to ask your vet.",
    badge: "Planning hub",
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
    label: "AVMA — Pets and Disasters",
    url: "https://www.avma.org/resources-tools/pet-owners/emergency-care/pets-and-disasters",
    type: "veterinary",
    note: "Disaster and emergency preparedness for pet owners",
  },
  {
    label: "ASPCA Animal Poison Control Center",
    url: "https://www.aspca.org/pet-care/aspca-poison-control",
    type: "veterinary",
    note: "24/7 emergency animal-poisoning helpline (US)",
  },
  {
    label: "ASPCA — Disaster Preparedness",
    url: "https://www.aspca.org/pet-care/general-pet-care/disaster-preparedness",
    type: "veterinary",
    note: "Emergency and disaster planning for pet owners",
  },
  {
    label: "Ready.gov — Prepare Your Pets for Disasters",
    url: "https://www.ready.gov/pets",
    type: "government",
    note: "US government emergency-preparedness guidance",
  },
  {
    label: "American Red Cross — Pet Disaster Preparedness",
    url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/pet-disaster-preparedness.html",
    type: "animal-welfare",
    note: "Pet preparedness and first-aid guidance",
  },
  {
    label: "Merck Veterinary Manual",
    url: "https://www.merckvetmanual.com",
    type: "reference",
    note: "Comprehensive veterinary reference",
  },
];

const HUB_FAQS = [
  {
    question: "Is this hub a substitute for a veterinarian?",
    answer:
      "No. Every page here is educational and focuses on preparedness, recognising warning situations, and escalating to professional help. It does not diagnose, treat, or replace a licensed veterinarian who can examine your pet directly.",
  },
  {
    question: "What should I do in a true emergency?",
    answer:
      "Contact a licensed veterinarian or emergency animal clinic immediately. If you suspect poisoning, also consider an animal poison-control line. When in doubt, call — telephone triage is part of what veterinary teams do.",
  },
  {
    question: "Why don't these pages give treatment or first-aid steps?",
    answer:
      "Diagnosis, treatment, dosage, and hands-on first-aid procedures can cause harm when done incorrectly and depend on the individual animal. These pages help you prepare and recognise when professional help is needed, then get you to it quickly.",
  },
  {
    question: "My pet already ate something toxic — where do I start?",
    answer:
      "Contact a veterinarian or animal poison-control line right away, even before symptoms appear, and keep any packaging or plant material. The poisoning pages explain how to escalate and what information to have ready.",
  },
];

export default function PetSafetyHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE },
    { name: "Pet Safety", url: `${SITE}/pet-safety` },
  ]);
  const itemList = itemListSchema(
    PET_SAFETY_ARTICLES.map((a, i) => ({
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
            <Breadcrumbs items={[{ label: "Pet Safety" }]} />
            <p className="mb-3">
              <span className="tag">Pet Safety</span>{" "}
              <span className="tag ml-1">Emergency preparedness</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Pet Safety &amp; Emergency Preparedness
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              A calm, practical hub to help you prepare for emergencies,
              recognise when urgent veterinary help may be needed, and plan a
              safer household. These pages are educational — they help you
              prepare and escalate, not diagnose or treat. For any decision
              about a specific animal, contact a licensed veterinarian.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          <EmergencyCallout />

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

          <section aria-labelledby="tools-heading">
            <h2 id="tools-heading" className="section-title">
              Related Tools and Planning Resources
            </h2>
            <p className="section-subtitle max-w-3xl">
              Pair these safety pages with FaunaHub&apos;s free tools and
              planning hubs so your emergency plan, budget, and contacts are
              ready before you need them.
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
              intro={PET_SAFETY_SOURCE_NOTE}
              headingId="sources-heading"
            />
          </section>

          <FAQBlock items={HUB_FAQS} title="Pet Safety — Frequently Asked Questions" />

          <LastUpdated date={LAST_UPDATED} />
        </div>
      </main>
    </>
  );
}
