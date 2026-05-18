"use client";

import { useState } from "react";
import Link from "next/link";
import FAQBlock from "@/components/FAQBlock";

// Model:
// Year 1 = 15 human years
// Year 2 = 24 human years
// Each year after = +4 human years
function calculateCatHumanAge(catAge: number): number {
  if (catAge <= 0) return 0;
  if (catAge === 1) return 15;
  if (catAge === 2) return 24;
  return 24 + (catAge - 2) * 4;
}

function getLifeStage(catAge: number): string {
  if (catAge <= 0) return "";
  if (catAge <= 0.5) return "Kitten";
  if (catAge <= 2) return "Junior / Adolescent";
  if (catAge <= 6) return "Young Adult";
  if (catAge <= 10) return "Mature Adult";
  if (catAge <= 14) return "Senior";
  return "Geriatric";
}

export default function CatAgeCalculatorClient() {
  const [catAge, setCatAge] = useState<string>("");

  const age = parseFloat(catAge);
  const humanAge = !isNaN(age) && age >= 0.5 ? calculateCatHumanAge(Math.round(age)) : null;
  const lifeStage = !isNaN(age) && age >= 0.5 ? getLifeStage(age) : null;

  return (
    <main id="main-content">
      <div className="container-content py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-6 flex gap-2 items-center flex-wrap">
          <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#063F2A] hover:no-underline">Tools</Link>
          <span>/</span>
          <span className="text-[#17211B] font-medium">Cat Age Calculator</span>
        </nav>

        <div className="max-w-xl mx-auto">
          <header className="mb-8">
            <span className="tag mb-4 inline-block">Free Tool</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Cat Age Calculator
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed">
              Enter your cat&apos;s age to get an approximate human-age equivalent and general life stage.
              This is a rough approximation — actual aging varies by breed, health, and individual factors.
            </p>
          </header>

          <div className="card p-6 mb-6">
            <label htmlFor="cat-age" className="block text-sm font-medium text-[#17211B] mb-1.5">
              Cat&apos;s age (years)
            </label>
            <input
              id="cat-age"
              type="number"
              min="0.5"
              max="30"
              step="0.5"
              placeholder="e.g. 4"
              value={catAge}
              onChange={(e) => setCatAge(e.target.value)}
              className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A]"
            />
            <p className="text-xs text-[#8A958E] mt-1.5">Enter the age in years (e.g. 1, 2.5, 10)</p>
          </div>

          {humanAge !== null && lifeStage !== null && (
            <div
              className="bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl p-6 mb-6 text-center"
              aria-live="polite"
              aria-label="Cat age result"
            >
              <p className="text-sm text-[#5E6B63] mb-2">
                Approximate human-age equivalent
              </p>
              <p className="text-5xl font-bold text-[#063F2A] mb-2">
                {humanAge}
                <span className="text-2xl font-normal ml-1 text-[#7BAA35]">years</span>
              </p>
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-[#CFE0A8]">
                <span className="text-xs text-[#5E6B63]">Life stage:</span>
                <span className="text-sm font-semibold text-[#063F2A]">{lifeStage}</span>
              </div>
            </div>
          )}

          {/* Life stage reference */}
          <section className="card p-5 mb-6" aria-labelledby="stages-heading">
            <h2 id="stages-heading" className="text-sm font-semibold text-[#17211B] uppercase tracking-wider mb-3">
              Feline Life Stage Reference
            </h2>
            <div className="space-y-1.5 text-sm">
              {[
                ["Kitten", "0–6 months"],
                ["Junior / Adolescent", "6 months – 2 years"],
                ["Young Adult", "3–6 years"],
                ["Mature Adult", "7–10 years"],
                ["Senior", "11–14 years"],
                ["Geriatric", "15+ years"],
              ].map(([stage, range]) => (
                <div key={stage} className="flex justify-between">
                  <span className="text-[#2C3A2F] font-medium">{stage}</span>
                  <span className="text-[#8A958E]">{range}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#8A958E] mt-3">
              Stage definitions are approximate and based on general feline veterinary guidelines.
              Individual cats vary. Life stage boundaries are used by veterinarians to guide
              preventive care frequency and health monitoring.
            </p>
          </section>

          <section className="prose-content mb-6">
            <h2 className="text-xl font-bold text-[#17211B] mb-3">About the Cat Aging Model</h2>
            <p>
              Cats develop rapidly in their first two years — reaching a rough equivalent of human
              young adulthood by age two. After that, each cat year is roughly equivalent to around
              four human years in most models. However, the &quot;cats age 7 times faster than humans&quot;
              rule is a simplification that does not accurately reflect how cats age.
            </p>
            <p>
              Senior and geriatric cats (generally 11+ years) benefit from more frequent veterinary
              checkups — often twice yearly — to monitor for age-related conditions including kidney
              disease, hyperthyroidism, dental disease, and arthritis.
            </p>
          </section>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
            <strong>Limitation:</strong> This is a general approximation. Cat aging varies by breed,
            health, and environment. This calculator should not be used for veterinary decisions.
            Consult your veterinarian for health-stage guidance specific to your cat.
          </div>

          <FAQBlock
            title="Cat Age — Frequently Asked Questions"
            items={[
              {
                question: "Why doesn't 'cat year = 7 human years' work?",
                answer:
                  "It oversimplifies a non-linear curve. Cats develop very quickly in the first year of life — reaching the rough equivalent of a human in their mid-teens — and then continue aging at roughly four 'human years' per cat year in most simplified models. A flat 7× multiplier ignores that early acceleration.",
              },
              {
                question: "When should I start considering my cat 'senior'?",
                answer:
                  "Most feline veterinary frameworks consider cats senior from around 11 years and geriatric from around 15 years. These are conventions, not strict biology. Many vets recommend twice-yearly checkups from the senior stage onward to catch age-related conditions early — including kidney disease, hyperthyroidism, dental disease, and arthritis.",
              },
              {
                question: "Do indoor and outdoor cats age differently?",
                answer:
                  "Lifestyle affects lifespan more than chronological aging rate, but the practical effect can look like 'aging differently'. Indoor cats are typically protected from many environmental risks (traffic, predators, infectious disease) and on average live longer; outdoor cats face higher exposure to those risks. Aging tools cannot account for individual circumstances.",
              },
              {
                question: "Is this calculator a substitute for a vet visit?",
                answer:
                  "No. It is a general orientation tool. For actual health-stage decisions — vaccinations, diet, dental care, blood work cadence — a veterinarian familiar with your individual cat is the appropriate source.",
              },
            ]}
          />

          <section
            className="mt-8 mb-6"
            aria-labelledby="related-tools-heading"
          >
            <h2
              id="related-tools-heading"
              className="text-sm font-semibold text-[#17211B] uppercase tracking-wider mb-3"
            >
              Related calculators
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tools/dog-age-calculator"
                  className="text-[#063F2A] hover:underline font-medium"
                >
                  Dog Age Calculator
                </Link>{" "}
                — size-adjusted human-age equivalent for dogs.
              </li>
              <li>
                <Link
                  href="/tools/pet-life-stage-calculator"
                  className="text-[#063F2A] hover:underline font-medium"
                >
                  Pet Life Stage Calculator
                </Link>{" "}
                — cross-species life stage and general care focus.
              </li>
              <li>
                <Link
                  href="/tools/pet-age-calculator"
                  className="text-[#063F2A] hover:underline font-medium"
                >
                  All pet age calculators
                </Link>{" "}
                — pick the right tool by species.
              </li>
            </ul>
          </section>

          <p className="text-xs text-[#8A958E]">Last updated: May 18, 2026</p>
        </div>
      </div>
    </main>
  );
}
