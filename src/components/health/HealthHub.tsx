import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import type { SourceLink } from "@/lib/educational/types";
import type { SymptomArticle, HealthSpecies } from "@/lib/health/data";
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/schema";

const VET_DISCLAIMER =
  "This content is for general educational purposes only and is not a substitute for professional veterinary advice, diagnosis, or treatment. If your pet shows severe symptoms, persistent discomfort, breathing problems, bleeding, poisoning signs, collapse, seizures, repeated vomiting, sudden weakness, inability to urinate, severe pain, or major behavior changes, contact a licensed veterinarian or emergency animal clinic immediately.";

const SHARED_EMERGENCY_SIGNS = [
  "Difficulty breathing, choking, or pale/blue gums",
  "Collapse, seizures, or unresponsiveness",
  "Severe or unstoppable bleeding",
  "Suspected ingestion of a toxic substance",
  "Repeated vomiting, severe diarrhoea, or inability to keep water down",
  "Distended or painful abdomen — particularly in larger dogs",
  "Sudden inability to use the legs or paws",
  "Inability to urinate, straining, or blood in urine — especially in male cats (life-threatening emergency)",
  "Severe pain, vocalising, or sudden refusal to move",
];

interface HealthHubProps {
  species: HealthSpecies;
  articles: SymptomArticle[];
  sources: SourceLink[];
  lastUpdated: string;
  faqs: { question: string; answer: string }[];
}

export default function HealthHub({
  species,
  articles,
  sources,
  lastUpdated,
  faqs,
}: HealthHubProps) {
  const speciesLabel = species === "dog" ? "Dogs" : "Cats";
  const speciesSingular = species === "dog" ? "dog" : "cat";
  const parentHub = species === "dog" ? "/dogs" : "/cats";
  const path = species === "dog" ? "/dogs/health" : "/cats/health";

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: speciesLabel, url: `https://faunahub.com${parentHub}` },
    { name: "Health", url: `https://faunahub.com${path}` },
  ]);
  const itemList = itemListSchema(
    articles.map((a, i) => ({
      name: a.pageHeading,
      url: `https://faunahub.com${a.path}`,
      position: i + 1,
    }))
  );
  const faqLd = faqSchema(faqs);

  const foodLinks =
    species === "dog"
      ? [
          {
            label: "Dog food safety guides",
            href: "/dogs/food",
            description: "What dogs can and cannot eat",
          },
          {
            label: "Can dogs eat chocolate?",
            href: "/dogs/food/can-dogs-eat-chocolate",
            description: "Treat as a veterinary question",
          },
          {
            label: "Can dogs eat grapes?",
            href: "/dogs/food/can-dogs-eat-grapes",
            description: "Treat as a veterinary question",
          },
        ]
      : [
          {
            label: "Cat food safety guides",
            href: "/cats/food",
            description: "What cats can and cannot eat",
          },
          {
            label: "Can cats eat chocolate?",
            href: "/cats/food/can-cats-eat-chocolate",
            description: "Treat as a veterinary question",
          },
          {
            label: "Can cats drink milk?",
            href: "/cats/food/can-cats-drink-milk",
            description: "Cautious overview",
          },
        ];

  const planningLinks =
    species === "dog"
      ? [
          {
            label: "Dog insurance overview",
            href: "/dogs/insurance",
            description: "Insurance considerations — no provider rankings",
          },
          {
            label: "How much does a dog cost?",
            href: "/dogs/costs/how-much-does-a-dog-cost",
            description: "Honest cost framework",
          },
          {
            label: "Dog Age Calculator",
            href: "/tools/dog-age-calculator",
            description: "Size-adjusted human-age equivalent",
          },
          {
            label: "Pet Life Stage Calculator",
            href: "/tools/pet-life-stage-calculator",
            description: "Care focus by life stage",
          },
        ]
      : [
          {
            label: "Cat insurance overview",
            href: "/cats/insurance",
            description: "Insurance considerations — no provider rankings",
          },
          {
            label: "How much does a cat cost?",
            href: "/cats/costs/how-much-does-a-cat-cost",
            description: "Honest cost framework",
          },
          {
            label: "Cat Age Calculator",
            href: "/tools/cat-age-calculator",
            description: "Feline human-age equivalent",
          },
          {
            label: "Pet Life Stage Calculator",
            href: "/tools/pet-life-stage-calculator",
            description: "Care focus by life stage",
          },
        ];

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
            <Breadcrumbs
              items={[
                { label: speciesLabel, href: parentHub },
                { label: "Health" },
              ]}
            />
            <p className="mb-3">
              <span className="tag">{speciesLabel}</span>{" "}
              <span className="tag ml-1">Health</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              {speciesLabel} Health — Educational Overview
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Cautious, source-aware educational pages on common {speciesSingular} symptoms.
              These pages help you recognise emergency signs and ask better
              questions of a licensed veterinarian. They do not diagnose, do
              not prescribe treatment, and do not replace a veterinary visit.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-12">
          <aside
            role="note"
            aria-label="Veterinary disclaimer"
            className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900"
          >
            <span
              aria-hidden="true"
              className="text-amber-600 flex-shrink-0 text-base mt-0.5"
            >
              ⚠
            </span>
            <p className="leading-relaxed">{VET_DISCLAIMER}</p>
          </aside>

          <section aria-labelledby="symptoms-heading">
            <h2 id="symptoms-heading" className="section-title">
              Common {speciesSingular} health questions
            </h2>
            <p className="section-subtitle">
              Each page lists possible cause categories, emergency warning
              signs, and what to observe before contacting a veterinarian.
              None of them give a diagnosis.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={a.path}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                      {a.symptom}
                    </p>
                    <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                      {a.pageHeading}
                    </p>
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">
                      {a.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="emergency-heading">
            <div className="flex items-baseline gap-3 flex-wrap mb-2">
              <h2
                id="emergency-heading"
                className="text-xl sm:text-2xl font-bold text-[#17211B]"
              >
                Emergency signs that need urgent veterinary guidance
              </h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium uppercase tracking-wide bg-amber-100 text-amber-900 border border-amber-200">
                Urgent
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#2C3A2F] max-w-3xl mb-4">
              This list is not exhaustive. Any of the following — particularly
              more than one, or persistent — generally warrants contacting a
              licensed veterinarian or emergency clinic. If in doubt, call.
            </p>
            <ul className="not-prose space-y-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm sm:text-base text-amber-900">
              {SHARED_EMERGENCY_SIGNS.map((sign, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 mt-0.5 text-amber-700"
                  >
                    ●
                  </span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/vet-care/when-to-call-an-emergency-vet"
                className="text-sm font-medium text-[#063F2A] hover:underline"
              >
                Full when-to-call-an-emergency-vet guide →
              </Link>
              <Link
                href="/pet-safety/when-to-go-to-emergency-vet"
                className="text-sm font-medium text-[#063F2A] hover:underline"
              >
                Pet safety: when to go to the emergency vet →
              </Link>
            </div>
          </section>

          <section aria-labelledby="food-heading">
            <h2 id="food-heading" className="section-title">
              Food and poisoning risks
            </h2>
            <p className="section-subtitle">
              Foods and household exposures that warrant immediate veterinary
              contact in any quantity, and the food-safety guides that explain why.
            </p>
            <ul className="grid sm:grid-cols-3 gap-4">
              {foodLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-base font-semibold text-[#17211B] mb-1 leading-snug">
                      {link.label}
                    </p>
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">
                      {link.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="vet-care-heading">
            <h2 id="vet-care-heading" className="section-title">
              Routine vet care, age tools, and planning
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  label: "Vet care hub",
                  href: "/vet-care",
                  description: "Routine and emergency planning for any pet",
                },
                {
                  label: "Pet safety & emergencies",
                  href: "/pet-safety",
                  description: "Preparedness, poisoning awareness, and when to escalate",
                },
                {
                  label: "Questions to ask a vet",
                  href: "/vet-care/questions-to-ask-a-vet",
                  description: "Practical list for routine appointments",
                },
                ...planningLinks,
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-base font-semibold text-[#17211B] mb-1 leading-snug">
                      {link.label}
                    </p>
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">
                      {link.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <FAQBlock
            items={faqs}
            title={`${speciesLabel} health — Frequently Asked Questions`}
          />

          <SourcesSection sources={sources} />

          <LastUpdated date={lastUpdated} />
        </div>
      </main>
    </>
  );
}
