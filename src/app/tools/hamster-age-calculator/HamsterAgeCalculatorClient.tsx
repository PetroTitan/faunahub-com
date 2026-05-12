"use client";

import { useState } from "react";
import Link from "next/link";

type HamsterType = "syrian" | "dwarf";

const TYPE_LABELS: Record<HamsterType, string> = {
  syrian: "Syrian / Golden hamster",
  dwarf: "Dwarf hamster (e.g. Roborovski, Campbell's, winter white)",
};

// Hamsters live much shorter lives than dogs or cats — typically around
// 1.5 to 3 years depending on species and care. The model below treats one
// hamster month as roughly equivalent to 6 human months early in life, then
// shifts to roughly 4 months per hamster month after the first year. Dwarf
// hamsters compress this further. These are general approximations.
function calculateHamsterHumanAge(
  ageMonths: number,
  type: HamsterType
): number {
  if (ageMonths <= 0) return 0;
  const earlyRate = type === "syrian" ? 6 : 7;
  const lateRate = type === "syrian" ? 4 : 5;
  if (ageMonths <= 12) return Math.round((ageMonths * earlyRate) / 12 * 12);
  const yearOneHuman = earlyRate * 12;
  return Math.round(yearOneHuman + ((ageMonths - 12) / 12) * (lateRate * 12));
}

function getHamsterLifeStage(ageMonths: number, type: HamsterType): string {
  if (ageMonths <= 0) return "";
  if (ageMonths < 2) return "Pup";
  if (ageMonths < 6) return "Young Adult";
  if (ageMonths < 12) return "Adult";
  if (type === "dwarf" && ageMonths >= 18) return "Senior";
  if (ageMonths < 18) return "Mature";
  return "Senior";
}

export default function HamsterAgeCalculatorClient() {
  const [ageMonths, setAgeMonths] = useState<string>("");
  const [type, setType] = useState<HamsterType>("syrian");

  const parsed = parseFloat(ageMonths);
  const valid = !isNaN(parsed) && parsed >= 0.5 && parsed <= 48;
  const humanAge = valid ? calculateHamsterHumanAge(parsed, type) : null;
  const stage = valid ? getHamsterLifeStage(parsed, type) : null;

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
          <span className="text-[#17211B] font-medium">Hamster Age Calculator</span>
        </nav>

        <div className="max-w-xl mx-auto">
          <header className="mb-8">
            <span className="tag mb-4 inline-block">Free Tool</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Hamster Age Calculator
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed">
              Enter your hamster&apos;s age in months and select the type to see an
              approximate human-age equivalent. Hamster aging is faster than most other
              pets and varies between Syrian and dwarf hamsters.
            </p>
          </header>

          <div className="card p-6 space-y-5 mb-6">
            <div>
              <label
                htmlFor="hamster-age"
                className="block text-sm font-medium text-[#17211B] mb-1.5"
              >
                Hamster&apos;s age (months)
              </label>
              <input
                id="hamster-age"
                type="number"
                min="0.5"
                max="48"
                step="0.5"
                placeholder="e.g. 12"
                value={ageMonths}
                onChange={(e) => setAgeMonths(e.target.value)}
                className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A]"
              />
            </div>
            <div>
              <label
                htmlFor="hamster-type"
                className="block text-sm font-medium text-[#17211B] mb-1.5"
              >
                Hamster type
              </label>
              <select
                id="hamster-type"
                value={type}
                onChange={(e) => setType(e.target.value as HamsterType)}
                className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A] bg-white"
              >
                {(Object.entries(TYPE_LABELS) as [HamsterType, string][]).map(
                  ([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          {humanAge !== null && stage !== null && (
            <div
              className="bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl p-6 mb-6 text-center"
              aria-live="polite"
              aria-label="Hamster age result"
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
              About Hamster Aging
            </h2>
            <p>
              Pet hamsters have short lifespans compared with dogs or cats. Syrian
              (golden) hamsters typically live around 2–3 years in good conditions; dwarf
              hamsters typically live around 1.5–2.5 years. Even minor differences in
              housing, diet, and stress can have a noticeable impact on lifespan.
            </p>
            <p>
              This calculator scales hamster months onto a rough human-year equivalent and
              is intended only as a general reference. Health concerns should be assessed
              by a veterinarian familiar with small mammals.
            </p>
          </section>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
            <strong>Limitation:</strong> Hamster aging is highly compressed and varies by
            species (Syrian vs dwarf) and individual factors. This is a general estimate,
            not a veterinary tool.
          </div>

          <p className="text-xs text-[#8A958E]">Last updated: May 12, 2026</p>
        </div>
      </div>
    </main>
  );
}
