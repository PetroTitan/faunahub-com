"use client";

import { useState } from "react";
import Link from "next/link";

// Guinea pigs typically live around 5–8 years in good care. This calculator
// treats the first year as roughly equivalent to 18 human years (rapid early
// maturation) and each subsequent year as roughly +8 human years. These are
// general approximations only — variation by breed, genetics, and care is
// significant.
function calculateGuineaPigHumanAge(age: number): number {
  if (age <= 0) return 0;
  if (age < 1) return Math.round(age * 18);
  return 18 + Math.round((age - 1) * 8);
}

function getGuineaPigLifeStage(age: number): string {
  if (age <= 0) return "";
  if (age < 0.25) return "Pup (very young)";
  if (age < 1) return "Juvenile";
  if (age < 3) return "Young Adult";
  if (age < 5) return "Adult";
  if (age < 7) return "Mature";
  return "Senior";
}

export default function GuineaPigAgeCalculatorClient() {
  const [age, setAge] = useState<string>("");

  const parsed = parseFloat(age);
  const valid = !isNaN(parsed) && parsed >= 0.1 && parsed <= 12;
  const humanAge = valid ? calculateGuineaPigHumanAge(parsed) : null;
  const stage = valid ? getGuineaPigLifeStage(parsed) : null;

  return (
    <main id="main-content">
      <div className="container-content py-10">
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-[#8A958E] mb-6 flex gap-2 items-center flex-wrap"
        >
          <Link href="/" className="hover:text-[#063F2A] hover:no-underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#063F2A] hover:no-underline">
            Tools
          </Link>
          <span>/</span>
          <span className="text-[#17211B] font-medium">Guinea Pig Age Calculator</span>
        </nav>

        <div className="max-w-xl mx-auto">
          <header className="mb-8">
            <span className="tag mb-4 inline-block">Free Tool</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Guinea Pig Age Calculator
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed">
              Enter your guinea pig&apos;s age in years to see an approximate human-age
              equivalent and life stage. Aging varies by breed, genetics, and care — this
              is a general approximation only.
            </p>
          </header>

          <div className="card p-6 mb-6">
            <label
              htmlFor="gp-age"
              className="block text-sm font-medium text-[#17211B] mb-1.5"
            >
              Guinea pig&apos;s age (years)
            </label>
            <input
              id="gp-age"
              type="number"
              min="0.1"
              max="12"
              step="0.25"
              placeholder="e.g. 2"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A]"
              aria-describedby="gp-age-help"
            />
            <p id="gp-age-help" className="text-xs text-[#8A958E] mt-1.5">
              Enter the age in years (e.g. 0.5, 1.5, 4).
            </p>
          </div>

          {humanAge !== null && stage !== null && (
            <div
              className="bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl p-6 mb-6 text-center"
              aria-live="polite"
              aria-label="Guinea pig age result"
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
                <span className="text-sm font-semibold text-[#063F2A]">{stage}</span>
              </div>
            </div>
          )}

          <section className="prose-content mb-6" aria-labelledby="about-heading">
            <h2 id="about-heading" className="text-xl font-bold text-[#17211B] mb-3">
              About Guinea Pig Aging
            </h2>
            <p>
              Pet guinea pigs typically live around 5–8 years in good conditions. They
              mature relatively quickly in the first year. Senior guinea pigs commonly
              benefit from softer or supplemented food, more frequent vet checks, and
              attention to dental and weight changes — all of which should be assessed by a
              vet experienced with exotic small mammals.
            </p>
            <p>
              Diet considerations: guinea pigs cannot synthesise vitamin C and must obtain
              it through their diet daily. This is one of the key differences between
              guinea-pig care and rabbit care.
            </p>
          </section>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
            <strong>Limitation:</strong> This calculator provides a general approximation
            and is not a veterinary assessment. For health questions, consult a vet
            experienced with guinea pigs.
          </div>

          <p className="text-xs text-[#8A958E]">Last updated: May 12, 2026</p>
        </div>
      </div>
    </main>
  );
}
