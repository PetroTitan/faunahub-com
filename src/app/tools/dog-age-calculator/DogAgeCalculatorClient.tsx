"use client";

import { useState } from "react";
import Link from "next/link";
import FAQBlock from "@/components/FAQBlock";

type SizeCategory = "small" | "medium" | "large" | "giant";

const SIZE_LABELS: Record<SizeCategory, string> = {
  small: "Small (under 10 kg)",
  medium: "Medium (10–25 kg)",
  large: "Large (25–45 kg)",
  giant: "Giant (over 45 kg)",
};

// Simplified size-adjusted model:
// Year 1 = 15 human years (all sizes)
// Year 2 = 24 human years (all sizes)
// Year 3+: small +4/yr, medium +5/yr, large +6/yr, giant +7/yr
const RATES: Record<SizeCategory, number> = {
  small: 4,
  medium: 5,
  large: 6,
  giant: 7,
};

function calculateHumanAge(dogAge: number, size: SizeCategory): number {
  if (dogAge <= 0) return 0;
  if (dogAge === 1) return 15;
  if (dogAge === 2) return 24;
  return 24 + (dogAge - 2) * RATES[size];
}

export default function DogAgeCalculatorClient() {
  const [dogAge, setDogAge] = useState<string>("");
  const [size, setSize] = useState<SizeCategory>("medium");

  const age = parseInt(dogAge, 10);
  const humanAge = !isNaN(age) && age >= 1 && age <= 25 ? calculateHumanAge(age, size) : null;

  return (
    <main id="main-content">
      <div className="container-content py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-6 flex gap-2 items-center flex-wrap">
          <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#063F2A] hover:no-underline">Tools</Link>
          <span>/</span>
          <span className="text-[#17211B] font-medium">Dog Age Calculator</span>
        </nav>

        <div className="max-w-xl mx-auto">
          <header className="mb-8">
            <span className="tag mb-4 inline-block">Free Tool</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Dog Age Calculator
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed">
              Enter your dog&apos;s age and approximate size category to see a rough human-age equivalent.
              This is a general estimate only — actual aging varies by breed, health, and environment.
            </p>
          </header>

          <div className="card p-6 space-y-5 mb-6">
            <div>
              <label htmlFor="dog-age" className="block text-sm font-medium text-[#17211B] mb-1.5">
                Dog&apos;s age (years)
              </label>
              <input
                id="dog-age"
                type="number"
                min="1"
                max="25"
                placeholder="e.g. 5"
                value={dogAge}
                onChange={(e) => setDogAge(e.target.value)}
                className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A]"
              />
            </div>
            <div>
              <label htmlFor="dog-size" className="block text-sm font-medium text-[#17211B] mb-1.5">
                Size category
              </label>
              <select
                id="dog-size"
                value={size}
                onChange={(e) => setSize(e.target.value as SizeCategory)}
                className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A] bg-white"
              >
                {(Object.entries(SIZE_LABELS) as [SizeCategory, string][]).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
          </div>

          {humanAge !== null && (
            <div
              className="bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl p-6 mb-6 text-center"
              aria-live="polite"
              aria-label="Dog age result"
            >
              <p className="text-sm text-[#5E6B63] mb-2">
                Approximate human-age equivalent
              </p>
              <p className="text-5xl font-bold text-[#063F2A] mb-2">
                {humanAge}
                <span className="text-2xl font-normal ml-1 text-[#7BAA35]">years</span>
              </p>
              <p className="text-xs text-[#8A958E]">
                Based on a {age}-year-old {SIZE_LABELS[size].toLowerCase()} dog
              </p>
            </div>
          )}

          <section className="prose-content mb-6">
            <h2 className="text-xl font-bold text-[#17211B] mb-3">How This Calculator Works</h2>
            <p>
              This calculator uses a simplified size-adjusted model. It does not use the simple
              &quot;multiply by 7&quot; rule, which is a popular misconception. Dogs age rapidly in their
              first two years — comparable to a human reaching young adulthood — and then continue
              aging at a rate that varies by size. Larger dogs tend to age faster and have shorter
              typical lifespans than smaller dogs.
            </p>
            <p>
              The model used here is a general approximation. Actual aging varies considerably by
              individual breed, genetics, health, and environment. This tool should not be used to
              make veterinary or health decisions.
            </p>
          </section>

          <section
            className="card p-5 mb-6"
            aria-labelledby="examples-heading"
          >
            <h2
              id="examples-heading"
              className="text-sm font-semibold text-[#17211B] uppercase tracking-wider mb-3"
            >
              Worked examples
            </h2>
            <ul className="space-y-2 text-sm text-[#2C3A2F]">
              <li>
                <strong>5-year-old small dog</strong> (e.g. under 10 kg): roughly{" "}
                <strong>{calculateHumanAge(5, "small")}</strong> human years — a young adult by most measures.
              </li>
              <li>
                <strong>5-year-old medium dog</strong> (10–25 kg): roughly{" "}
                <strong>{calculateHumanAge(5, "medium")}</strong> human years.
              </li>
              <li>
                <strong>5-year-old giant dog</strong> (over 45 kg): roughly{" "}
                <strong>{calculateHumanAge(5, "giant")}</strong> human years — often already approaching the
                senior threshold for that size class.
              </li>
              <li>
                <strong>10-year-old medium dog</strong>: roughly{" "}
                <strong>{calculateHumanAge(10, "medium")}</strong> human years — typically a candidate for
                twice-yearly vet checks and senior-focused care.
              </li>
            </ul>
          </section>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
            <strong>Limitation:</strong> Dog aging varies significantly by breed and size. This
            calculator uses a simplified general model and is not a veterinary assessment. Consult
            your veterinarian for health-stage guidance.
          </div>

          <FAQBlock
            title="Dog Age — Frequently Asked Questions"
            items={[
              {
                question: "Why doesn't the '1 dog year = 7 human years' rule work?",
                answer:
                  "The 7-year rule is a long-running over-simplification. Dogs reach reproductive and physical maturity within their first two years — comparable to a human teenager or young adult — so early dog years map to many more human years than later ones. After that early phase, the rate of aging varies by size, with larger dogs tending to age faster than smaller ones.",
              },
              {
                question: "Why does size matter so much for dog aging?",
                answer:
                  "Across breeds, larger dogs tend to have shorter typical lifespans than smaller dogs. This is a consistent pattern in veterinary literature, although the underlying biology is still actively researched. The size-adjusted rate in this calculator is a simple reflection of that pattern; it is not a precise prediction for any individual dog.",
              },
              {
                question: "Is this calculator suitable for puppies under one year old?",
                answer:
                  "For under-one-year puppies, this calculator returns a rough human-age value but life stage is more useful than 'human age'. For a structured view of puppy through senior life stages and general care focus, see the cross-species pet life stage calculator.",
              },
              {
                question: "Should I make health decisions based on this result?",
                answer:
                  "No. The output is a rough orientation, not a clinical assessment. Use it as a conversation starter with your veterinarian — particularly around when to transition to senior-focused care, dental work, weight management, or more frequent checkups.",
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
                <Link href="/tools/cat-age-calculator" className="text-[#063F2A] hover:underline font-medium">
                  Cat Age Calculator
                </Link>{" "}
                — feline human-age equivalent and life stage.
              </li>
              <li>
                <Link href="/tools/pet-life-stage-calculator" className="text-[#063F2A] hover:underline font-medium">
                  Pet Life Stage Calculator
                </Link>{" "}
                — cross-species life stage and general care focus.
              </li>
              <li>
                <Link href="/tools/pet-age-calculator" className="text-[#063F2A] hover:underline font-medium">
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
