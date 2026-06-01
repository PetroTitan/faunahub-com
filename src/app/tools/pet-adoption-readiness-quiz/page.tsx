import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import PetAdoptionReadinessQuizClient from "./PetAdoptionReadinessQuizClient";

const PUBLISHED = "2026-05-22";
const MODIFIED = "2026-05-22";

const title =
  "Pet Adoption Readiness Quiz — Are You Ready to Adopt? A Cautious Check";
const description =
  "A short, privacy-safe readiness check that helps you think through the time, budget, household, and vet-care commitments behind responsible pet adoption.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/tools/pet-adoption-readiness-quiz",
});

const FAQS = [
  {
    question: "Does this quiz approve or reject me for adoption?",
    answer:
      "No. FaunaHub does not approve or reject anyone for pet adoption. The quiz is an educational reflection tool. Real adoption decisions depend on local shelter policies, housing rules, household circumstances, veterinary guidance, long-term budget, and the needs of the individual animal.",
  },
  {
    question: "Is my data saved or sent anywhere?",
    answer:
      "No. The quiz runs entirely in your browser. Answers are not sent to a server, not stored in a database, and not associated with your account because there are no accounts. Refreshing the page clears the answers. FaunaHub's general page-level analytics (WebmasterID) record that you visited the page, but not your answers.",
  },
  {
    question: "Why does the result link to FaunaHub tools?",
    answer:
      "Each result state recommends practical next steps — for example, using the Pet Cost Calculator to estimate budget, or the Pet Breed Selector to think about household fit. These are reflective tools, not recommendations of any specific pet or breed.",
  },
  {
    question: "What if a shelter or rescue uses a different process?",
    answer:
      "They will. Local shelters, rescue organisations, and breeders typically have their own structured adoption process, including in-person meets, home checks, references, and trial periods. This quiz is for your own thinking before that conversation begins.",
  },
];

const READINESS_CHECKLIST = [
  "Daily time for feeding, exercise, training, and attention",
  "Long-term commitment that may last 10+ years",
  "Realistic monthly budget for food, vet care, grooming, and supplies",
  "Emergency vet-care plan — savings, insurance, or both",
  "Housing rules that allow the pet you're considering",
  "Household agreement among everyone who lives with you",
  "Awareness of allergies in anyone in the household",
  "Plan for children and other pets already in the household",
  "Reliable backup care during travel or away-from-home work",
  "Activity level you can sustainably match for the species/breed",
  "Grooming and routine-care time the species/breed actually needs",
  "Identified veterinarian for routine and emergency care",
];

export default function PetAdoptionReadinessQuizPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Tools", url: "https://faunahub.com/tools" },
      {
        name: "Pet Adoption Readiness Quiz",
        url: "https://faunahub.com/tools/pet-adoption-readiness-quiz",
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "FaunaHub Pet Adoption Readiness Quiz",
      url: "https://faunahub.com/tools/pet-adoption-readiness-quiz",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "Educational, privacy-safe quiz that helps prospective pet owners think through time, budget, housing, and vet-care commitments before adoption.",
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
                { label: "Pet Adoption Readiness Quiz" },
              ]}
            />
            <div className="max-w-2xl mt-2">
              <span className="tag mb-3 inline-block">Free tool · No login</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4 leading-tight">
                Pet Adoption Readiness Quiz
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                A short, cautious reflection tool for people thinking about
                adopting a pet. It is not an approval system, not a
                breed-matching oracle, and not a substitute for shelter,
                veterinary, landlord, or legal guidance.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            <article className="prose-content min-w-0">
              <div className="not-prose mb-8 border-l-4 border-l-[#7BAA35] bg-[#EFF4E0]/60 p-5 rounded-r-xl">
                <p className="text-sm text-[#2C3A2F] leading-relaxed">
                  <strong className="text-[#063F2A]">Educational only.</strong>{" "}
                  This tool is educational and does not approve or reject
                  anyone for pet adoption. Real adoption decisions can depend
                  on local shelter policies, housing rules, household
                  circumstances, veterinary guidance, long-term budget, and
                  the needs of the individual animal.
                </p>
              </div>

              <h2>What &quot;adoption readiness&quot; actually means</h2>
              <p>
                Pet adoption is a long-term commitment that touches almost
                every part of daily life — time, budget, housing, household
                relationships, travel, veterinary care, and emotional energy.
                Most adoptions go well; the ones that struggle often share a
                few preventable patterns: time scarcity, unexpected vet
                costs, allergies that were not tested in person, household
                disagreement, or a mismatch between the animal&apos;s needs
                and the owner&apos;s schedule.
              </p>
              <p>
                The quiz below walks through the questions a reputable
                shelter or rescue is likely to discuss with you anyway. The
                result is just a reflection — not a final answer.
              </p>

              <h2>Readiness checklist</h2>
              <ul>
                {READINESS_CHECKLIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <PetAdoptionReadinessQuizClient />

              <h2>If the result was &quot;Not ready yet&quot;</h2>
              <p>
                That result is not a judgement. Many people become great pet
                owners later, once foundations are in place. Practical
                things that often help: building experience through fostering
                or volunteering at a local shelter, pet-sitting for friends,
                using the{" "}
                <Link href="/tools/pet-cost-calculator">Pet Cost Calculator</Link>{" "}
                and{" "}
                <Link href="/guides/pet-budget-checklist">Pet Budget Checklist</Link>{" "}
                to model real costs, and reading the{" "}
                <Link href="/vet-care">Vet Care</Link> and{" "}
                <Link href="/pet-insurance">Pet Insurance</Link> hubs before
                an emergency happens rather than during one.
              </p>

              <h2>Useful next steps</h2>
              <p>
                Whatever the result, these tools and guides pair well with
                this quiz:
              </p>
              <ul>
                <li>
                  <Link href="/tools/pet-breed-selector">Pet Breed Selector</Link>{" "}
                  — surfaces the right decision page for your household.
                </li>
                <li>
                  <Link href="/tools/pet-cost-calculator">Pet Cost Calculator</Link>{" "}
                  — estimates monthly, annual, and first-year costs.
                </li>
                <li>
                  <Link href="/guides/best-pets-for-beginners">
                    Best pets for beginners
                  </Link>{" "}
                  — cautious guidance on starting points.
                </li>
                <li>
                  <Link href="/guides/low-maintenance-pets">
                    Low-maintenance pets
                  </Link>{" "}
                  — what &quot;low maintenance&quot; really means in
                  practice.
                </li>
              </ul>

              <h2>Editorial &amp; source note</h2>
              <p>
                Readiness factors used in this quiz are drawn from general
                responsible-ownership guidance published by veterinary and
                animal-welfare organisations — including the{" "}
                <a
                  href="https://www.avma.org/resources-tools/pet-owners/petcare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AVMA pet-care resources
                </a>{" "}
                and the{" "}
                <a
                  href="https://www.aspca.org/pet-care"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ASPCA pet-care library
                </a>
                . FaunaHub does not store any answers and does not provide
                veterinary, legal, housing, or financial advice.
              </p>

              <div className="mt-10">
                <FAQBlock
                  items={FAQS}
                  title="Pet Adoption Readiness Quiz — frequently asked questions"
                />
              </div>
            </article>

            <aside
              aria-label="Quiz sidebar"
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    About this tool
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Length
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      14 short questions
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Privacy
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      Answers stay in your browser
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Account
                    </dt>
                    <dd className="text-[#17211B] font-medium">Not required</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Result type
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      Reflection, not approval
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#2C3A2F] space-y-2">
                <p className="font-medium text-[#17211B]">Related tools</p>
                <ul className="text-xs flex flex-col gap-1.5">
                  <li>
                    <Link
                      href="/tools/pet-breed-selector"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Pet breed selector →
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
                  <li>
                    <Link
                      href="/guides/pet-budget-checklist"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Pet budget checklist →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pet-nutrition"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Pet nutrition &amp; feeding →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/puppy-care"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      New puppy care →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kitten-care"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      New kitten care →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-pets/care"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Small pets care →
                    </Link>
                  </li>
                </ul>
              </div>

              <LastUpdated date={MODIFIED} />
              <p className="text-[10px] text-[#8A958E]">
                Published {PUBLISHED}.
              </p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
