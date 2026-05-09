"use client";

import { useState } from "react";
import Link from "next/link";

const FIELDS = [
  { key: "food", label: "Monthly food", description: "Kibble, wet food, treats, or raw diet" },
  { key: "vet", label: "Monthly vet / preventive care budget", description: "Annual checkup, vaccines, flea/tick prevention, dental — prorated monthly" },
  { key: "grooming", label: "Monthly grooming", description: "Professional grooming, shampoo, brushes, nail trims" },
  { key: "insurance", label: "Monthly pet insurance", description: "Your monthly insurance premium, if any" },
  { key: "toys", label: "Monthly toys, accessories & treats", description: "Beds, leashes, toys, enrichment items" },
  { key: "emergency", label: "Monthly emergency fund contribution", description: "Setting aside funds for unexpected vet costs" },
];

export default function PetCostCalculatorClient() {
  const [values, setValues] = useState<Record<string, string>>({
    food: "",
    vet: "",
    grooming: "",
    insurance: "",
    toys: "",
    emergency: "",
  });

  const monthly = FIELDS.reduce((sum, f) => sum + (parseFloat(values[f.key]) || 0), 0);
  const annual = monthly * 12;
  const hasInput = monthly > 0;

  return (
    <main id="main-content">
      <div className="container-content py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-6 flex gap-2 items-center flex-wrap">
          <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#063F2A] hover:no-underline">Tools</Link>
          <span>/</span>
          <span className="text-[#17211B] font-medium">Pet Cost Calculator</span>
        </nav>

        <div className="max-w-2xl mx-auto">
          <header className="mb-8">
            <span className="tag mb-4 inline-block">Free Tool</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Pet Cost Calculator
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed">
              Enter your estimated monthly costs for each category to see your total monthly
              and annual pet ownership cost. Use this as a planning starting point only.
            </p>
          </header>

          {/* Calculator form */}
          <div className="card p-6 space-y-5 mb-6">
            <h2 className="text-base font-semibold text-[#17211B]">Monthly Cost Inputs</h2>
            {FIELDS.map((field) => (
              <div key={field.key}>
                <label
                  htmlFor={field.key}
                  className="block text-sm font-medium text-[#17211B] mb-0.5"
                >
                  {field.label}
                </label>
                <p className="text-xs text-[#8A958E] mb-1.5">{field.description}</p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A958E] text-sm">
                    $
                  </span>
                  <input
                    id={field.key}
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0"
                    value={values[field.key]}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, [field.key]: e.target.value }))
                    }
                    className="w-full pl-7 pr-4 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A]"
                    aria-describedby={`${field.key}-desc`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          {hasInput && (
            <div className="bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl p-6 mb-6" aria-live="polite" aria-label="Cost estimate results">
              <h2 className="text-sm font-semibold text-[#0F5A3A] uppercase tracking-wider mb-4">
                Estimated Costs
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-[#5E6B63] mb-1">Monthly estimate</p>
                  <p className="text-3xl font-bold text-[#063F2A]">
                    ${monthly.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#5E6B63] mb-1">Annual estimate</p>
                  <p className="text-3xl font-bold text-[#063F2A]">
                    ${annual.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Cost guidance */}
          <section aria-labelledby="cost-guidance-heading" className="prose-content mb-6">
            <h2 id="cost-guidance-heading" className="text-xl font-bold text-[#17211B] mb-3">
              Understanding Pet Ownership Costs
            </h2>
            <p>
              Pet ownership costs vary significantly by country, city, breed, pet age, and individual
              health history. The categories above represent common recurring expenses, but other
              costs may apply.
            </p>
            <p>
              <strong>Veterinary costs</strong> are often the most variable and unpredictable.
              A healthy young pet may cost relatively little in a given year; a senior pet or one
              with a chronic condition can require substantially more. An emergency fund contribution
              is strongly recommended.
            </p>
            <p>
              <strong>Insurance</strong> can offset large unexpected vet bills, but premiums,
              deductibles, and coverage limits vary widely between providers. Review policy terms
              carefully before purchasing.
            </p>
          </section>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
            <strong>Important limitation:</strong> This calculator provides a rough planning estimate
            only. Actual costs vary widely based on your country, city, breed, pet age, health status,
            and lifestyle choices. Consult a licensed veterinarian for health-related cost planning.
          </div>

          <p className="text-xs text-[#8A958E]">Last updated: May 7, 2025</p>
        </div>
      </div>
    </main>
  );
}
