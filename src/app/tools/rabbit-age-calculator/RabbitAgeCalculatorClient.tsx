"use client";

import { useState } from "react";
import Link from "next/link";

// Simplified pet rabbit aging model used by this tool:
// - Year 1: rapid maturation to roughly the equivalent of a young adult human.
// - Year 2+: each rabbit year is treated as roughly +6 human-year equivalents.
// Aging in rabbits varies significantly by breed (small vs giant) and individual
// health, so this is a general-orientation estimate only.
function calculateRabbitHumanAge(rabbitAge: number): number {
  if (rabbitAge <= 0) return 0;
  if (rabbitAge < 1) return Math.round(rabbitAge * 16); // first year scales
  return 16 + Math.round((rabbitAge - 1) * 6);
}

function getRabbitLifeStage(rabbitAge: number): string {
  if (rabbitAge <= 0) return "";
  if (rabbitAge < 0.5) return "Kit (very young)";
  if (rabbitAge < 1) return "Juvenile";
  if (rabbitAge < 3) return "Young Adult";
  if (rabbitAge < 6) return "Adult";
  if (rabbitAge < 9) return "Mature";
  return "Senior";
}

export default function RabbitAgeCalculatorClient() {
  const [age, setAge] = useState<string>("");

  const parsed = parseFloat(age);
  const valid = !isNaN(parsed) && parsed >= 0.25 && parsed <= 15;
  const humanAge = valid ? calculateRabbitHumanAge(parsed) : null;
  const stage = valid ? getRabbitLifeStage(parsed) : null;

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
          <span className="text-[#17211B] font-medium">Rabbit Age Calculator</span>
        </nav>

        <div className="max-w-xl mx-auto">
          <header className="mb-8">
            <span className="tag mb-4 inline-block">Free Tool</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Rabbit Age Calculator
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed">
              Enter your rabbit&apos;s age in years to see a general human-age equivalent.
              This is an approximate estimate. Rabbit aging varies by breed, size, genetics,
              health, and lifestyle.
            </p>
          </header>

          <div className="card p-6 mb-6">
            <label
              htmlFor="rabbit-age"
              className="block text-sm font-medium text-[#17211B] mb-1.5"
            >
              Rabbit&apos;s age (years)
            </label>
            <input
              id="rabbit-age"
              type="number"
              min="0.25"
              max="15"
              step="0.25"
              placeholder="e.g. 3"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A]"
              aria-describedby="rabbit-age-help"
            />
            <p id="rabbit-age-help" className="text-xs text-[#8A958E] mt-1.5">
              Enter the age in years (e.g. 0.5, 1, 4)
            </p>
          </div>

          {humanAge !== null && stage !== null && (
            <div
              className="bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl p-6 mb-6 text-center"
              aria-live="polite"
              aria-label="Rabbit age result"
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
              About Rabbit Aging
            </h2>
            <p>
              Pet rabbits mature rapidly in the first year of life and then age more slowly.
              Small and medium-sized breeds tend to live longer than giant breeds in general,
              and indoor housing, appropriate diet, and access to suitable vet care are
              substantial factors. Wild rabbits typically have much shorter lifespans than
              well-cared-for pet rabbits.
            </p>
            <p>
              The model used here is intentionally simple and is intended for orientation.
              It should not be used to make health decisions for your rabbit; that is the
              role of a veterinarian familiar with exotic small mammals.
            </p>
          </section>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
            <strong>Limitation:</strong> This is a general approximation. Rabbit aging
            varies significantly by breed, size, and individual factors. This tool is not a
            veterinary assessment. For health-related questions, consult a vet experienced
            with rabbits and other exotic small mammals.
          </div>

          <p className="text-xs text-[#8A958E]">Last updated: May 12, 2026</p>
        </div>
      </div>
    </main>
  );
}
