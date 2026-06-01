"use client";

import { useState } from "react";
import Link from "next/link";
import FAQBlock from "@/components/FAQBlock";

interface Field {
  key: string;
  label: string;
  description: string;
}

const MONTHLY_FIELDS: Field[] = [
  {
    key: "food",
    label: "Monthly food",
    description: "Kibble, wet food, treats, hay, fresh vegetables, or species-appropriate diet",
  },
  {
    key: "vet",
    label: "Monthly vet / preventive care budget",
    description:
      "Annual checkup, vaccines, parasite prevention, dental — prorated monthly",
  },
  {
    key: "grooming",
    label: "Monthly grooming or coat care",
    description: "Professional grooming, shampoo, brushes, nail trims",
  },
  {
    key: "insurance",
    label: "Monthly pet insurance premium",
    description: "Your monthly insurance premium, if any",
  },
  {
    key: "toys",
    label: "Monthly toys, enrichment & treats",
    description: "Beds, leashes, toys, enrichment items, chew toys",
  },
  {
    key: "supplies",
    label: "Monthly litter, bedding & supplies",
    description: "Litter, substrate, bedding, replacement cage liners, water filter media",
  },
  {
    key: "boarding",
    label: "Monthly boarding / sitter / daycare",
    description: "Average monthly spend across the year on boarding, sitter, or daycare",
  },
  {
    key: "emergency",
    label: "Monthly emergency fund contribution",
    description: "Setting aside funds for unexpected vet costs",
  },
  {
    key: "other",
    label: "Other monthly costs",
    description: "Anything not covered above — training subscription, transport, etc.",
  },
];

const ONE_TIME_FIELDS: Field[] = [
  {
    key: "adoption",
    label: "Adoption or purchase cost",
    description: "Shelter adoption fee, reputable breeder cost, or rescue donation",
  },
  {
    key: "initialVet",
    label: "Initial vet visit & vaccinations",
    description: "First-visit exam, vaccinations, microchip, parasite screen",
  },
  {
    key: "spayNeuter",
    label: "Spay / neuter (if applicable)",
    description: "Surgical and recovery costs where this is part of your plan",
  },
  {
    key: "habitat",
    label: "Carrier, crate, cage, tank or habitat",
    description:
      "Properly sized enclosure or transport gear — many pet-store starter kits are undersized",
  },
  {
    key: "setup",
    label: "Bowls, bedding, perches, substrate, decor",
    description: "Initial setup of the pet's daily environment",
  },
  {
    key: "training",
    label: "Initial training or setup classes",
    description:
      "Puppy class, behaviour consultation, or aquarium-cycling supplies before livestock",
  },
];

const FAQS = [
  {
    question: "Is this calculator giving me a real prediction?",
    answer:
      "No. It is a planning tool. The numbers you enter are summed and projected into monthly, yearly, and first-year totals so you can see the impact of each category. Real prices depend on country, city, veterinarian, breed, size, species, age, health, and unexpected emergencies.",
  },
  {
    question: "Should I include an emergency fund?",
    answer:
      "Most veterinarians and welfare organisations recommend setting aside a meaningful emergency veterinary fund separate from monthly spending. Adding a small monthly contribution to this calculator is a way to surface that reality in your budget rather than leaving it implicit.",
  },
  {
    question: "Why are insurance premiums so variable?",
    answer:
      "Premiums, deductibles, waiting periods, and exclusions vary widely by provider, breed, age, species, and country. Read terms carefully and compare quotes before committing. The calculator simply uses the figure you enter.",
  },
  {
    question: "What should I do after running my numbers?",
    answer:
      "Read the species-specific cost page (linked in the sidebar) and the pet budget checklist. Then talk to local vets, insurers, and reputable shelters before making a decision.",
  },
];

function num(v: string): number {
  const n = parseFloat(v);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export default function PetCostCalculatorClient() {
  const [monthly, setMonthly] = useState<Record<string, string>>(
    Object.fromEntries(MONTHLY_FIELDS.map((f) => [f.key, ""]))
  );
  const [oneTime, setOneTime] = useState<Record<string, string>>(
    Object.fromEntries(ONE_TIME_FIELDS.map((f) => [f.key, ""]))
  );

  const monthlyTotal = MONTHLY_FIELDS.reduce(
    (sum, f) => sum + num(monthly[f.key]),
    0
  );
  const oneTimeTotal = ONE_TIME_FIELDS.reduce(
    (sum, f) => sum + num(oneTime[f.key]),
    0
  );
  const annualRecurring = monthlyTotal * 12;
  const firstYear = annualRecurring + oneTimeTotal;
  const hasMonthly = monthlyTotal > 0;
  const hasAnyInput = monthlyTotal > 0 || oneTimeTotal > 0;

  function reset() {
    setMonthly(Object.fromEntries(MONTHLY_FIELDS.map((f) => [f.key, ""])));
    setOneTime(Object.fromEntries(ONE_TIME_FIELDS.map((f) => [f.key, ""])));
  }

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-8">
        <span className="tag mb-4 inline-block">Free Tool</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
          Pet Cost Calculator
        </h1>
        <p className="text-base text-[#2C3A2F] leading-relaxed">
          Enter the figures you have collected from local vets, shelters, and
          retailers. The calculator sums them into a monthly, annual recurring,
          and first-year estimate. Use the result as a planning starting point
          only — not a guaranteed cost.
        </p>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 leading-relaxed">
          <strong className="font-semibold">Read this first.</strong> This
          calculator is for budgeting and educational planning only. Actual pet
          costs vary by country, city, veterinarian, breed, size, species, age,
          health, insurance choices, food quality, grooming needs, and
          unexpected emergencies.
        </div>
      </header>

      <form
        className="card p-6 space-y-5 mb-6"
        onSubmit={(e) => e.preventDefault()}
        aria-labelledby="monthly-heading"
      >
        <h2
          id="monthly-heading"
          className="text-base font-semibold text-[#17211B]"
        >
          Monthly recurring costs
        </h2>
        {MONTHLY_FIELDS.map((field) => (
          <div key={field.key}>
            <label
              htmlFor={`m-${field.key}`}
              className="block text-sm font-medium text-[#17211B] mb-0.5"
            >
              {field.label}
            </label>
            <p
              id={`m-${field.key}-desc`}
              className="text-xs text-[#8A958E] mb-1.5"
            >
              {field.description}
            </p>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A958E] text-sm"
              >
                $
              </span>
              <input
                id={`m-${field.key}`}
                type="number"
                min="0"
                step="0.01"
                inputMode="decimal"
                placeholder="0"
                value={monthly[field.key]}
                onChange={(e) =>
                  setMonthly((prev) => ({
                    ...prev,
                    [field.key]: e.target.value,
                  }))
                }
                className="w-full pl-7 pr-4 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A]"
                aria-describedby={`m-${field.key}-desc`}
              />
            </div>
          </div>
        ))}
      </form>

      <form
        className="card p-6 space-y-5 mb-6"
        onSubmit={(e) => e.preventDefault()}
        aria-labelledby="onetime-heading"
      >
        <div>
          <h2
            id="onetime-heading"
            className="text-base font-semibold text-[#17211B]"
          >
            One-time setup costs (optional)
          </h2>
          <p className="text-xs text-[#8A958E] mt-1">
            Skip the ones that do not apply. The first-year estimate adds these
            to twelve months of recurring costs.
          </p>
        </div>
        {ONE_TIME_FIELDS.map((field) => (
          <div key={field.key}>
            <label
              htmlFor={`o-${field.key}`}
              className="block text-sm font-medium text-[#17211B] mb-0.5"
            >
              {field.label}
            </label>
            <p
              id={`o-${field.key}-desc`}
              className="text-xs text-[#8A958E] mb-1.5"
            >
              {field.description}
            </p>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A958E] text-sm"
              >
                $
              </span>
              <input
                id={`o-${field.key}`}
                type="number"
                min="0"
                step="0.01"
                inputMode="decimal"
                placeholder="0"
                value={oneTime[field.key]}
                onChange={(e) =>
                  setOneTime((prev) => ({
                    ...prev,
                    [field.key]: e.target.value,
                  }))
                }
                className="w-full pl-7 pr-4 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A]"
                aria-describedby={`o-${field.key}-desc`}
              />
            </div>
          </div>
        ))}
        <div className="pt-2">
          <button
            type="button"
            onClick={reset}
            className="px-3.5 py-2 rounded-lg text-sm font-medium border border-[#DDE6DD] bg-white text-[#17211B] hover:border-[#063F2A] focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2"
          >
            Reset all fields
          </button>
        </div>
      </form>

      {hasAnyInput && (
        <div
          className="bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl p-6 mb-6"
          aria-live="polite"
          aria-label="Estimated pet ownership costs"
        >
          <h2 className="text-sm font-semibold text-[#0F5A3A] uppercase tracking-wider mb-4">
            Estimated costs
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-[#5E6B63] mb-1">Monthly recurring</p>
              <p className="text-3xl font-bold text-[#063F2A]">
                ${monthlyTotal.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5E6B63] mb-1">Annual recurring</p>
              <p className="text-3xl font-bold text-[#063F2A]">
                ${annualRecurring.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5E6B63] mb-1">First-year total</p>
              <p className="text-3xl font-bold text-[#063F2A]">
                ${firstYear.toFixed(2)}
              </p>
              <p className="text-[11px] text-[#5E6B63] mt-1">
                Recurring × 12 + one-time setup
              </p>
            </div>
          </div>
          {!hasMonthly && (
            <p className="text-xs text-[#5E6B63] mt-4">
              You have only entered one-time costs. Add monthly figures to see
              an annual recurring projection.
            </p>
          )}
        </div>
      )}

      <section aria-labelledby="guidance-heading" className="prose-content mb-6">
        <h2
          id="guidance-heading"
          className="text-xl font-bold text-[#17211B] mb-3"
        >
          Understanding pet ownership costs
        </h2>
        <p>
          Pet ownership costs vary significantly by country, city, breed, pet
          age, and individual health history. The fields above represent common
          expense categories, but other costs may apply.
        </p>
        <p>
          <strong>Veterinary costs</strong> are often the most variable and
          unpredictable. A healthy young pet may cost relatively little in a
          given year; a senior pet or one with a chronic condition can require
          substantially more. An emergency fund contribution is strongly
          recommended.
        </p>
        <p>
          <strong>Insurance</strong> can offset large unexpected vet bills, but
          premiums, deductibles, and coverage limits vary widely between
          providers. Review policy terms carefully before purchasing.
        </p>
        <p>
          For category-by-category guidance, see the{" "}
          <Link href="/costs" className="text-[#063F2A] font-medium hover:underline">
            pet ownership cost hub
          </Link>
          , the{" "}
          <Link
            href="/guides/pet-budget-checklist"
            className="text-[#063F2A] font-medium hover:underline"
          >
            pet budget checklist
          </Link>
          , and the{" "}
          <Link
            href="/guides/hidden-costs-of-pet-ownership"
            className="text-[#063F2A] font-medium hover:underline"
          >
            hidden costs guide
          </Link>
          .
        </p>
      </section>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
        <strong>Important limitation:</strong> This calculator provides a rough
        planning estimate only. Actual costs vary widely based on your country,
        city, breed, pet age, health status, and lifestyle choices. Consult a
        licensed veterinarian for health-related cost planning.
      </div>

      <FAQBlock
        items={FAQS}
        title="Pet Cost Calculator — Frequently Asked Questions"
      />

      <section
        className="mt-8 mb-6"
        aria-labelledby="related-tools-heading"
      >
        <h2
          id="related-tools-heading"
          className="text-sm font-semibold text-[#17211B] uppercase tracking-wider mb-3"
        >
          Related tools and guides
        </h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/costs"
              className="text-[#063F2A] hover:underline font-medium"
            >
              Pet ownership cost hub
            </Link>{" "}
            — frameworks for dogs, cats, rabbits, hamsters, guinea pigs, birds,
            fish, and reptiles.
          </li>
          <li>
            <Link
              href="/guides/pet-budget-checklist"
              className="text-[#063F2A] hover:underline font-medium"
            >
              Pet Budget Checklist
            </Link>{" "}
            — pre-adoption planning checklist.
          </li>
          <li>
            <Link
              href="/guides/first-year-pet-costs"
              className="text-[#063F2A] hover:underline font-medium"
            >
              First-year pet costs
            </Link>{" "}
            — why year one is more expensive than later years.
          </li>
          <li>
            <Link
              href="/guides/hidden-costs-of-pet-ownership"
              className="text-[#063F2A] hover:underline font-medium"
            >
              Hidden costs of pet ownership
            </Link>{" "}
            — categories most owners underestimate.
          </li>
          <li>
            <Link
              href="/tools/pet-breed-selector"
              className="text-[#063F2A] hover:underline font-medium"
            >
              Pet Breed Selector
            </Link>{" "}
            — surface pet and breed categories that may fit your home.
          </li>
          <li>
            <Link
              href="/tools/pet-life-stage-calculator"
              className="text-[#063F2A] hover:underline font-medium"
            >
              Pet Life Stage Calculator
            </Link>{" "}
            — care focus by life stage.
          </li>
          <li>
            <Link
              href="/pet-nutrition"
              className="text-[#063F2A] hover:underline font-medium"
            >
              Pet nutrition &amp; feeding
            </Link>{" "}
            — plan feeding routines, food types, and portions responsibly.
          </li>
        </ul>
      </section>

      <p className="text-xs text-[#8A958E]">Last updated: May 18, 2026</p>
    </div>
  );
}
