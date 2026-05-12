"use client";

import { useState } from "react";
import Link from "next/link";

// Simplified horse aging model used by this tool:
// - First year: horse reaches roughly the equivalent of mid-teens human-age.
// - Year 2: roughly equivalent of late teens / early twenties.
// - Year 3+: each horse year is treated as roughly +2.5 human years.
// Horse aging varies meaningfully by breed and life history; this is a general
// orientation, not a veterinary assessment.
function calculateHorseHumanAge(horseAge: number): number {
  if (horseAge <= 0) return 0;
  if (horseAge < 1) return Math.round(horseAge * 12);
  if (horseAge < 2) return 12 + Math.round((horseAge - 1) * 8); // 12 -> 20
  return 20 + Math.round((horseAge - 2) * 2.5);
}

function getHorseLifeStage(horseAge: number): string {
  if (horseAge <= 0) return "";
  if (horseAge < 1) return "Foal";
  if (horseAge < 2) return "Yearling";
  if (horseAge < 4) return "Young Adult";
  if (horseAge < 15) return "Adult";
  if (horseAge < 20) return "Mature";
  return "Senior";
}

export default function HorseAgeCalculatorClient() {
  const [age, setAge] = useState<string>("");

  const parsed = parseFloat(age);
  const valid = !isNaN(parsed) && parsed >= 0.25 && parsed <= 40;
  const humanAge = valid ? calculateHorseHumanAge(parsed) : null;
  const stage = valid ? getHorseLifeStage(parsed) : null;

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
          <span className="text-[#17211B] font-medium">Horse Age Calculator</span>
        </nav>

        <div className="max-w-xl mx-auto">
          <header className="mb-8">
            <span className="tag mb-4 inline-block">Free Tool</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Horse Age Calculator
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed">
              Enter your horse&apos;s age to see an approximate human-age equivalent.
              Aging varies by breed, lifestyle, workload, diet, and individual health —
              this estimate is for general orientation.
            </p>
          </header>

          <div className="card p-6 mb-6">
            <label
              htmlFor="horse-age"
              className="block text-sm font-medium text-[#17211B] mb-1.5"
            >
              Horse&apos;s age (years)
            </label>
            <input
              id="horse-age"
              type="number"
              min="0.25"
              max="40"
              step="0.25"
              placeholder="e.g. 10"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A]"
              aria-describedby="horse-age-help"
            />
            <p id="horse-age-help" className="text-xs text-[#8A958E] mt-1.5">
              Enter the age in years (foal to senior).
            </p>
          </div>

          {humanAge !== null && stage !== null && (
            <div
              className="bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl p-6 mb-6 text-center"
              aria-live="polite"
              aria-label="Horse age result"
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
              About Horse Aging
            </h2>
            <p>
              Horses mature rapidly compared with humans in their first one to two years and
              then age more gradually. The exact rate varies meaningfully by breed and by
              individual workload, conformation, and care. Horses are often in active work
              well into their adult years, and many continue to enjoy good quality of life
              into their twenties with appropriate management.
            </p>
            <p>
              This tool is intended for general orientation. Health, soundness, and
              age-related management decisions should be made with a veterinarian
              experienced with horses.
            </p>
          </section>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
            <strong>Limitation:</strong> Horse aging varies by breed, workload, and
            individual factors. This calculator is a general approximation and not a
            veterinary assessment.
          </div>

          <p className="text-xs text-[#8A958E]">Last updated: May 12, 2026</p>
        </div>
      </div>
    </main>
  );
}
