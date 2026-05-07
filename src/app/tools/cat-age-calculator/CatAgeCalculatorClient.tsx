"use client";

import { useState } from "react";
import Link from "next/link";

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
        <nav aria-label="Breadcrumb" className="text-sm text-[#9CA5AF] mb-6 flex gap-2 items-center flex-wrap">
          <Link href="/" className="hover:text-[#2A7A4B] hover:no-underline">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#2A7A4B] hover:no-underline">Tools</Link>
          <span>/</span>
          <span className="text-[#1C2B3A] font-medium">Cat Age Calculator</span>
        </nav>

        <div className="max-w-xl mx-auto">
          <header className="mb-8">
            <span className="tag mb-4 inline-block">Free Tool</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-3">
              Cat Age Calculator
            </h1>
            <p className="text-base text-[#3E4F60] leading-relaxed">
              Enter your cat&apos;s age to get an approximate human-age equivalent and general life stage.
              This is a rough approximation — actual aging varies by breed, health, and individual factors.
            </p>
          </header>

          <div className="card p-6 mb-6">
            <label htmlFor="cat-age" className="block text-sm font-medium text-[#1C2B3A] mb-1.5">
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
              className="w-full px-3 py-2.5 border border-[#E4E8ED] rounded-lg text-sm text-[#1C2B3A] focus:outline-none focus:border-[#2A7A4B] focus:ring-1 focus:ring-[#2A7A4B]"
            />
            <p className="text-xs text-[#9CA5AF] mt-1.5">Enter the age in years (e.g. 1, 2.5, 10)</p>
          </div>

          {humanAge !== null && lifeStage !== null && (
            <div
              className="bg-[#f0faf4] border border-[#c6e8d4] rounded-xl p-6 mb-6 text-center"
              aria-live="polite"
              aria-label="Cat age result"
            >
              <p className="text-sm text-[#6B7684] mb-2">
                Approximate human-age equivalent
              </p>
              <p className="text-5xl font-bold text-[#2A7A4B] mb-2">
                {humanAge}
                <span className="text-2xl font-normal ml-1 text-[#3A9960]">years</span>
              </p>
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-[#c6e8d4]">
                <span className="text-xs text-[#6B7684]">Life stage:</span>
                <span className="text-sm font-semibold text-[#2A7A4B]">{lifeStage}</span>
              </div>
            </div>
          )}

          {/* Life stage reference */}
          <section className="card p-5 mb-6" aria-labelledby="stages-heading">
            <h2 id="stages-heading" className="text-sm font-semibold text-[#1C2B3A] uppercase tracking-wider mb-3">
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
                  <span className="text-[#3E4F60] font-medium">{stage}</span>
                  <span className="text-[#9CA5AF]">{range}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#9CA5AF] mt-3">
              Stage definitions are approximate and based on general feline veterinary guidelines.
              Individual cats vary. Life stage boundaries are used by veterinarians to guide
              preventive care frequency and health monitoring.
            </p>
          </section>

          <section className="prose-content mb-6">
            <h2 className="text-xl font-bold text-[#1C2B3A] mb-3">About the Cat Aging Model</h2>
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

          <p className="text-xs text-[#9CA5AF]">Last updated: May 7, 2025</p>
        </div>
      </div>
    </main>
  );
}
