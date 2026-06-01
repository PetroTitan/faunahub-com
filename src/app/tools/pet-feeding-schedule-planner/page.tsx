import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import NutritionDisclaimer from "@/components/pet-nutrition/NutritionDisclaimer";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { PET_NUTRITION_SOURCE_NOTE } from "@/lib/pet-nutrition/data";
import type { SourceLink } from "@/lib/educational/types";
import PetFeedingSchedulePlannerClient from "./PetFeedingSchedulePlannerClient";

const SITE = "https://faunahub.com";
const PUBLISHED = "2026-06-01";
const MODIFIED = "2026-06-01";

const title = "Pet Feeding Schedule Planner — Free Routine Template";
const description =
  "Build a sample daily feeding routine for your dog or cat by life stage and schedule. A planning template only — no feeding amounts, no diet advice. Runs in your browser; nothing is stored or sent.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/tools/pet-feeding-schedule-planner",
});

const FAQS = [
  {
    question: "Does this tool tell me how much to feed?",
    answer:
      "No. It produces a sample daily routine template only — never feeding amounts, calories, or diet advice. The right portion comes from the food label's feeding guide and your veterinarian, who can account for your pet's age, body condition, and health.",
  },
  {
    question: "Is my input saved or sent anywhere?",
    answer:
      "No. The planner runs entirely in your browser. Your selections are not sent to a server, not saved to a database, and not recorded by analytics. Refreshing the page resets them.",
  },
  {
    question: "Can it help with a weight or health condition?",
    answer:
      "No. This is a general routine template, not condition-specific advice. Weight management, allergies, kidney disease, diabetes, and similar concerns need a veterinarian's assessment and often a prescription diet.",
  },
  {
    question: "Why are the times shown as parts of the day?",
    answer:
      "The template uses general day-parts (morning, midday, evening) rather than exact clock times because consistency matters more than precise timing, and routines vary by household. Adapt it to your schedule and your veterinarian's guidance.",
  },
];

const SOURCES: SourceLink[] = [
  {
    label: "AVMA — Pet Care Resources",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare",
    type: "veterinary",
    note: "American Veterinary Medical Association consumer pet-care hub",
  },
  {
    label: "WSAVA — Global Nutrition Guidelines",
    url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    type: "veterinary",
    note: "World Small Animal Veterinary Association nutrition guidance",
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

export default function PetFeedingSchedulePlannerPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE },
      { name: "Tools", url: `${SITE}/tools` },
      {
        name: "Pet Feeding Schedule Planner",
        url: `${SITE}/tools/pet-feeding-schedule-planner`,
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "FaunaHub Pet Feeding Schedule Planner",
      url: `${SITE}/tools/pet-feeding-schedule-planner`,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "Free, privacy-safe tool that builds a sample daily feeding routine template for dogs and cats by life stage and schedule. No feeding amounts, no diet advice, no data leaves the browser.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    faqSchema(FAQS),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-12">
          <div className="container-content">
            <Breadcrumbs
              items={[
                { label: "Tools", href: "/tools" },
                { label: "Pet Feeding Schedule Planner" },
              ]}
            />
            <div className="max-w-2xl mt-2">
              <span className="tag mb-3 inline-block">Free tool · No login · No storage</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4 leading-tight">
                Pet Feeding Schedule Planner
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Lay out a sample daily feeding routine for your dog or cat based
                on life stage and your schedule. It builds a planning template
                only — never feeding amounts or diet advice — and everything
                stays in your browser.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            <article className="prose-content min-w-0">
              <div className="not-prose mb-8">
                <NutritionDisclaimer />
              </div>

              <h2>How to use this planner</h2>
              <p>
                Pick your pet&apos;s species, life stage, preferred meal
                routine, and daytime schedule, and the planner lays out an
                illustrative daily template with check-in and water reminders.
                It is a starting point for building a consistent routine — the
                actual amount to feed comes from the feeding guide on your
                pet&apos;s food and your{" "}
                <Link href="/vet-care">veterinarian</Link>.
              </p>
              <p>
                For background, read the{" "}
                <Link href="/pet-nutrition/dog-feeding-schedule">
                  dog feeding schedule
                </Link>{" "}
                and{" "}
                <Link href="/pet-nutrition/cat-feeding-schedule">
                  cat feeding schedule
                </Link>{" "}
                guides, or the full{" "}
                <Link href="/pet-nutrition">pet nutrition hub</Link>.
              </p>

              <PetFeedingSchedulePlannerClient />

              <div className="mt-10">
                <FAQBlock
                  items={FAQS}
                  title="Pet Feeding Schedule Planner — frequently asked questions"
                />
              </div>
              <div className="mt-10">
                <SourcesSection sources={SOURCES} intro={PET_NUTRITION_SOURCE_NOTE} />
              </div>
            </article>

            <aside
              aria-label="Tool sidebar"
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <NutritionDisclaimer compact />

              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    About this tool
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Output
                    </dt>
                    <dd className="text-[#17211B] font-medium">Routine template</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Feeding amounts
                    </dt>
                    <dd className="text-[#17211B] font-medium">Never — ask your vet</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Privacy
                    </dt>
                    <dd className="text-[#17211B] font-medium">Stays in your browser</dd>
                  </div>
                </dl>
              </div>

              <div className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#2C3A2F] space-y-2">
                <p className="font-medium text-[#17211B]">Related</p>
                <ul className="text-xs flex flex-col gap-1.5">
                  <li>
                    <Link
                      href="/pet-nutrition"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Pet nutrition hub →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pet-nutrition/pet-treats-and-portion-control"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Treats &amp; portion control →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools/pet-cost-calculator"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Pet cost calculator →
                    </Link>
                  </li>
                </ul>
              </div>

              <LastUpdated date={MODIFIED} />
              <p className="text-[10px] text-[#8A958E]">Published {PUBLISHED}.</p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
