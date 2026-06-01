import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import type { SourceLink } from "@/lib/educational/types";
import {
  RiskLevelBadge,
  SafetyBadge,
} from "@/components/food-safety/RiskBadge";

const FOOD_HUB_SOURCES: SourceLink[] = [
  {
    label: "ASPCA — People Foods To Avoid Feeding Your Pets",
    url: "https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets",
    type: "veterinary",
    note: "ASPCA list of common toxic and risky people-foods",
  },
  {
    label: "ASPCA Animal Poison Control Center",
    url: "https://www.aspca.org/pet-care/animal-poison-control",
    type: "veterinary",
    note: "24/7 emergency animal-poisoning helpline (US)",
  },
  {
    label: "Merck Veterinary Manual — Food Hazards",
    url: "https://www.merckvetmanual.com/toxicology/food-hazards",
    type: "reference",
    note: "Veterinary reference on food-related toxicology in animals",
  },
  {
    label: "AVMA — Pet Care Resources",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare",
    type: "veterinary",
    note: "American Veterinary Medical Association consumer pet-care hub",
  },
];
import type {
  FoodSafetyArticle,
  SafetyClassification,
} from "@/lib/food-safety/data";
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/schema";

const SPECIES_LABEL: Record<"dog" | "cat", string> = {
  dog: "Dogs",
  cat: "Cats",
};

const SPECIES_PARENT: Record<"dog" | "cat", string> = {
  dog: "/dogs",
  cat: "/cats",
};

const SPECIES_HEALTH: Record<"dog" | "cat", string> = {
  dog: "/dogs/health",
  cat: "/cats/health",
};

const SPECIES_HUB: Record<"dog" | "cat", string> = {
  dog: "/dogs/food",
  cat: "/cats/food",
};

const GROUP_ORDER: SafetyClassification[] = [
  "usually-safe",
  "depends",
  "usually-unsafe",
];

const GROUP_TITLE: Record<SafetyClassification, string> = {
  "usually-safe": "Usually safe in plain small amounts",
  depends: "Depends — caution",
  "usually-unsafe": "Usually unsafe",
};

const GROUP_BLURB: Record<SafetyClassification, string> = {
  "usually-safe":
    "These foods are generally tolerated by healthy adults when offered plain, unseasoned, and in modest amounts. Preparation still matters — read each page for details.",
  depends:
    "These foods are not categorically unsafe but carry real cautions. Individual sensitivity, preparation, and quantity affect whether they are appropriate at all.",
  "usually-unsafe":
    "These foods are widely treated as unsafe. There is no responsibly recommended everyday amount. If your pet has eaten one of these, contact a veterinarian.",
};

const FOOD_HUB_FAQS: { question: string; answer: string }[] = [
  {
    question: "Are these guides a substitute for a veterinarian?",
    answer:
      "No. These pages are educational overviews. Food safety can depend on the animal's size, age, health, the amount eaten, the way the food was prepared, and individual sensitivity — all factors that a licensed veterinarian assesses in context. Always treat known ingestion of an unsafe food as a veterinary question.",
  },
  {
    question: "What does the 'depends' classification mean?",
    answer:
      "The 'depends' label is used for foods that are not categorically unsafe but carry real cautions. Whether they are appropriate at all — and in what amount and preparation — varies by individual animal. We do not use this label loosely.",
  },
  {
    question: "Why don't these pages give exact safe-or-unsafe amounts?",
    answer:
      "Telling you that 'X grams is fine' would be misleading because the answer depends on factors a website cannot evaluate: weight, age, health, the type and preparation of the food, and individual sensitivity. We deliberately do not give numeric thresholds that could be applied without veterinary input.",
  },
  {
    question: "What should I do in an emergency?",
    answer:
      "If your pet shows vomiting, diarrhea, weakness, tremors, breathing difficulty, collapse, seizures, bleeding, or sudden behaviour changes — or you know they ate something potentially toxic — contact a licensed veterinarian or emergency animal clinic immediately. Do not wait to see whether symptoms develop.",
  },
];

interface FoodSafetyHubProps {
  species: "dog" | "cat";
  articles: FoodSafetyArticle[];
  intro: string;
  pageTitle: string;
  lastUpdated: string;
}

export default function FoodSafetyHub({
  species,
  articles,
  intro,
  pageTitle,
  lastUpdated,
}: FoodSafetyHubProps) {
  const speciesLabel = SPECIES_LABEL[species];
  const hubHref = SPECIES_HUB[species];
  const parentHref = SPECIES_PARENT[species];
  const healthHref = SPECIES_HEALTH[species];

  const grouped: Record<SafetyClassification, FoodSafetyArticle[]> = {
    "usually-safe": [],
    depends: [],
    "usually-unsafe": [],
  };
  for (const a of articles) {
    grouped[a.safetyClassification].push(a);
  }

  const itemList = itemListSchema(
    articles.map((a, i) => ({
      name: a.pageQuestion,
      url: `https://faunahub.com${hubHref}/${a.slug}`,
      position: i + 1,
    }))
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: speciesLabel, url: `https://faunahub.com${parentHref}` },
    { name: "Food & Nutrition", url: `https://faunahub.com${hubHref}` },
  ]);

  const faqLd = faqSchema(FOOD_HUB_FAQS);

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
                { label: speciesLabel, href: parentHref },
                { label: "Food & Nutrition" },
              ]}
            />
            <p className="mb-3">
              <span className="tag">{speciesLabel}</span>{" "}
              <span className="tag ml-1">Food Safety</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              {pageTitle}
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              {intro}
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-12">
          {GROUP_ORDER.map((classification) => {
            const items = grouped[classification];
            if (items.length === 0) return null;
            return (
              <section
                key={classification}
                aria-labelledby={`group-${classification}`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2
                    id={`group-${classification}`}
                    className="text-xl sm:text-2xl font-bold text-[#17211B]"
                  >
                    {GROUP_TITLE[classification]}
                  </h2>
                  <SafetyBadge classification={classification} size="sm" />
                </div>
                <p className="text-sm sm:text-base text-[#2C3A2F] max-w-2xl mb-5">
                  {GROUP_BLURB[classification]}
                </p>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`${hubHref}/${a.slug}`}
                        className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                      >
                        <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-2">
                          {a.foodName}
                        </p>
                        <p className="text-base font-semibold text-[#17211B] mb-3 leading-snug">
                          {a.pageQuestion}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          <SafetyBadge
                            classification={a.safetyClassification}
                            size="sm"
                          />
                          <RiskLevelBadge level={a.riskLevel} size="sm" />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

          <section
            className="prose-content max-w-3xl"
            aria-labelledby="how-we-classify"
          >
            <h2 id="how-we-classify">How we classify these foods</h2>
            <p>
              FaunaHub uses three broad food-safety categories — <em>usually
              safe in plain small amounts</em>, <em>depends — caution</em>, and{" "}
              <em>usually unsafe</em> — paired with a risk level of <em>low</em>,
              <em> moderate</em>, or <em>high</em>. These labels are deliberately
              not precise dosage statements. Food safety in a real pet depends on
              animal size, age, health, the amount eaten, how the food was
              prepared, and individual sensitivity. A licensed veterinarian is
              the right source for advice tied to your specific pet.
            </p>
          </section>

          <DisclaimerBlock type="veterinary" />

          <FAQBlock
            items={FOOD_HUB_FAQS}
            title={`${speciesLabel} Food Safety — Frequently Asked Questions`}
          />

          <div className="grid sm:grid-cols-3 gap-4 not-prose">
            <Link
              href={healthHref}
              className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition"
            >
              <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                Care &amp; conditions
              </p>
              <p className="text-base font-semibold text-[#17211B]">
                {speciesLabel} health guides →
              </p>
            </Link>
            <Link
              href="/tools/can-my-pet-eat-this"
              className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition"
            >
              <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                Free tool
              </p>
              <p className="text-base font-semibold text-[#17211B]">
                Can my pet eat this? →
              </p>
            </Link>
            <Link
              href="/pet-safety/pet-poisoning-warning-signs"
              className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition"
            >
              <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                Pet safety
              </p>
              <p className="text-base font-semibold text-[#17211B]">
                Poisoning warning signs →
              </p>
            </Link>
          </div>

          <SourcesSection sources={FOOD_HUB_SOURCES} />

          <div>
            <LastUpdated date={lastUpdated} />
          </div>
        </div>
      </main>
    </>
  );
}
