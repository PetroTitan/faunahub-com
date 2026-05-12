"use client";

import { useState } from "react";
import Link from "next/link";

type Species =
  | "dog"
  | "cat"
  | "rabbit"
  | "horse"
  | "guinea-pig"
  | "hamster-syrian"
  | "hamster-dwarf";

type DogSize = "small" | "medium" | "large" | "giant";

const SPECIES_LABELS: Record<Species, string> = {
  dog: "Dog",
  cat: "Cat",
  rabbit: "Rabbit",
  horse: "Horse",
  "guinea-pig": "Guinea Pig",
  "hamster-syrian": "Hamster (Syrian / golden)",
  "hamster-dwarf": "Hamster (dwarf)",
};

const DOG_SIZE_LABELS: Record<DogSize, string> = {
  small: "Small (under 10 kg)",
  medium: "Medium (10–25 kg)",
  large: "Large (25–45 kg)",
  giant: "Giant (over 45 kg)",
};

interface Result {
  humanAgeRange: string;
  stage: string;
  careFocus: string;
}

const DOG_RATES: Record<DogSize, number> = {
  small: 4,
  medium: 5,
  large: 6,
  giant: 7,
};

function computeDog(ageYears: number, size: DogSize): Result {
  let human: number;
  if (ageYears <= 0) human = 0;
  else if (ageYears <= 1) human = 15;
  else if (ageYears <= 2) human = 24;
  else human = 24 + (ageYears - 2) * DOG_RATES[size];

  let stage: string;
  let careFocus: string;
  if (ageYears < 1) {
    stage = "Puppy";
    careFocus =
      "Vaccination schedule, socialisation, parasite control, growth-stage diet, and early training.";
  } else if (ageYears < 3) {
    stage = "Young Adult";
    careFocus =
      "Reinforce training, adult-formulated diet, annual vet check, and dental routine.";
  } else if (
    (size === "small" && ageYears < 10) ||
    (size === "medium" && ageYears < 8) ||
    (size === "large" && ageYears < 7) ||
    (size === "giant" && ageYears < 6)
  ) {
    stage = "Adult";
    careFocus = "Maintain weight, annual vet checks, dental and parasite care.";
  } else if (
    (size === "small" && ageYears < 13) ||
    (size === "medium" && ageYears < 11) ||
    (size === "large" && ageYears < 10) ||
    (size === "giant" && ageYears < 8)
  ) {
    stage = "Senior";
    careFocus =
      "Twice-yearly vet checks, watch for joint, weight, and dental changes; consider senior diet.";
  } else {
    stage = "Geriatric";
    careFocus =
      "Frequent vet checks; mobility, cognition, and chronic-disease monitoring become priorities.";
  }

  const lowerBand = Math.max(0, Math.round(human - 3));
  const upperBand = Math.round(human + 3);
  const humanAgeRange =
    human === 0 ? "—" : `${lowerBand}–${upperBand} human years (approx.)`;
  return { humanAgeRange, stage, careFocus };
}

function computeCat(ageYears: number): Result {
  let human: number;
  if (ageYears <= 0) human = 0;
  else if (ageYears <= 1) human = 15;
  else if (ageYears <= 2) human = 24;
  else human = 24 + (ageYears - 2) * 4;

  let stage: string;
  let careFocus: string;
  if (ageYears <= 0.5) {
    stage = "Kitten";
    careFocus =
      "Vaccination, parasite control, kitten-specific nutrition, socialisation.";
  } else if (ageYears <= 2) {
    stage = "Junior / Adolescent";
    careFocus =
      "Spay/neuter conversation with vet, transition to adult diet, dental routine.";
  } else if (ageYears <= 6) {
    stage = "Young Adult";
    careFocus = "Annual vet checks, weight management, dental care, enrichment.";
  } else if (ageYears <= 10) {
    stage = "Mature Adult";
    careFocus =
      "Annual vet checks, monitor weight changes, consider mature-cat diet.";
  } else if (ageYears <= 14) {
    stage = "Senior";
    careFocus =
      "Twice-yearly vet checks; watch for kidney, thyroid, dental, and arthritis signs.";
  } else {
    stage = "Geriatric";
    careFocus =
      "Frequent vet checks, mobility support, comfort care, chronic-disease monitoring.";
  }
  const lower = Math.max(0, Math.round(human - 3));
  const upper = Math.round(human + 3);
  return {
    humanAgeRange: human === 0 ? "—" : `${lower}–${upper} human years (approx.)`,
    stage,
    careFocus,
  };
}

function computeRabbit(ageYears: number): Result {
  const human = ageYears < 1 ? Math.round(ageYears * 16) : 16 + Math.round((ageYears - 1) * 6);
  let stage: string;
  let careFocus: string;
  if (ageYears < 0.5) {
    stage = "Kit";
    careFocus = "Hay-based diet transition, parasite check, gentle socialisation.";
  } else if (ageYears < 1) {
    stage = "Juvenile";
    careFocus = "Diet transition, spay/neuter conversation with vet, social bonding.";
  } else if (ageYears < 3) {
    stage = "Young Adult";
    careFocus = "Annual vet check, dental monitoring, enrichment, social companionship.";
  } else if (ageYears < 6) {
    stage = "Adult";
    careFocus =
      "Maintain weight, hay-based diet, watch for dental and gut motility issues.";
  } else if (ageYears < 9) {
    stage = "Mature";
    careFocus = "Twice-yearly vet checks, watch for arthritis and chronic disease.";
  } else {
    stage = "Senior";
    careFocus = "Frequent vet checks, comfort care, mobility and chronic-disease support.";
  }
  const lower = Math.max(0, Math.round(human - 3));
  const upper = Math.round(human + 3);
  return {
    humanAgeRange: `${lower}–${upper} human years (approx.)`,
    stage,
    careFocus,
  };
}

function computeHorse(ageYears: number): Result {
  let human: number;
  if (ageYears <= 0) human = 0;
  else if (ageYears < 1) human = Math.round(ageYears * 12);
  else if (ageYears < 2) human = 12 + Math.round((ageYears - 1) * 8);
  else human = 20 + Math.round((ageYears - 2) * 2.5);

  let stage: string;
  let careFocus: string;
  if (ageYears < 1) {
    stage = "Foal";
    careFocus = "Growth-stage nutrition, vaccinations, parasite control, early handling.";
  } else if (ageYears < 2) {
    stage = "Yearling";
    careFocus = "Hoof and dental care, ongoing handling, balanced growth nutrition.";
  } else if (ageYears < 4) {
    stage = "Young Adult";
    careFocus = "Conditioning, training, hoof and dental routine.";
  } else if (ageYears < 15) {
    stage = "Adult";
    careFocus = "Workload appropriate to fitness; routine dental, hoof, and parasite care.";
  } else if (ageYears < 20) {
    stage = "Mature";
    careFocus = "Monitor weight, soundness, and dental wear; adjust workload as needed.";
  } else {
    stage = "Senior";
    careFocus =
      "Senior nutrition, joint and dental monitoring, regular vet evaluations.";
  }
  const lower = Math.max(0, Math.round(human - 3));
  const upper = Math.round(human + 3);
  return {
    humanAgeRange: human === 0 ? "—" : `${lower}–${upper} human years (approx.)`,
    stage,
    careFocus,
  };
}

function computeGuineaPig(ageYears: number): Result {
  const human = ageYears < 1 ? Math.round(ageYears * 18) : 18 + Math.round((ageYears - 1) * 8);
  let stage: string;
  let careFocus: string;
  if (ageYears < 0.25) {
    stage = "Pup";
    careFocus = "Hay-based diet, dietary vitamin C, gentle handling.";
  } else if (ageYears < 1) {
    stage = "Juvenile";
    careFocus = "Diet (hay-based plus daily vitamin C), bonding, enclosure size.";
  } else if (ageYears < 3) {
    stage = "Young Adult";
    careFocus = "Routine vet check, weight monitoring, daily vitamin C.";
  } else if (ageYears < 5) {
    stage = "Adult";
    careFocus = "Maintain weight, monitor dental health and behaviour.";
  } else if (ageYears < 7) {
    stage = "Mature";
    careFocus = "Watch for arthritis, dental disease, and weight loss.";
  } else {
    stage = "Senior";
    careFocus = "Frequent vet checks; consider softer foods if dental issues arise.";
  }
  const lower = Math.max(0, Math.round(human - 3));
  const upper = Math.round(human + 3);
  return {
    humanAgeRange: `${lower}–${upper} human years (approx.)`,
    stage,
    careFocus,
  };
}

function computeHamster(ageMonths: number, dwarf: boolean): Result {
  const earlyRate = dwarf ? 7 : 6;
  const lateRate = dwarf ? 5 : 4;
  let human: number;
  if (ageMonths <= 0) human = 0;
  else if (ageMonths <= 12) human = Math.round((ageMonths * earlyRate) / 12 * 12);
  else {
    const yearOneHuman = earlyRate * 12;
    human = Math.round(yearOneHuman + ((ageMonths - 12) / 12) * (lateRate * 12));
  }

  let stage: string;
  let careFocus: string;
  if (ageMonths < 2) {
    stage = "Pup";
    careFocus = "Quiet handling, appropriate nutrition, single-species housing.";
  } else if (ageMonths < 6) {
    stage = "Young Adult";
    careFocus = "Activity, enrichment, balanced nutrition.";
  } else if (ageMonths < 12) {
    stage = "Adult";
    careFocus = "Maintain enrichment and routine handling.";
  } else if ((dwarf && ageMonths < 18) || (!dwarf && ageMonths < 18)) {
    stage = "Mature";
    careFocus = "Watch for weight loss, lumps, mobility changes.";
  } else {
    stage = "Senior";
    careFocus = "Comfort, soft bedding, easy food access, frequent observation.";
  }
  const lower = Math.max(0, Math.round(human - 2));
  const upper = Math.round(human + 2);
  return {
    humanAgeRange: human === 0 ? "—" : `${lower}–${upper} human years (approx.)`,
    stage,
    careFocus,
  };
}

export default function PetLifeStageCalculatorClient() {
  const [species, setSpecies] = useState<Species>("dog");
  const [age, setAge] = useState<string>("");
  const [dogSize, setDogSize] = useState<DogSize>("medium");

  const parsed = parseFloat(age);
  const usesMonths = species === "hamster-syrian" || species === "hamster-dwarf";
  const minAge = usesMonths ? 0.5 : 0.1;
  const maxAge = usesMonths ? 48 : species === "horse" ? 40 : 20;
  const valid = !isNaN(parsed) && parsed >= minAge && parsed <= maxAge;

  let result: Result | null = null;
  if (valid) {
    switch (species) {
      case "dog":
        result = computeDog(parsed, dogSize);
        break;
      case "cat":
        result = computeCat(parsed);
        break;
      case "rabbit":
        result = computeRabbit(parsed);
        break;
      case "horse":
        result = computeHorse(parsed);
        break;
      case "guinea-pig":
        result = computeGuineaPig(parsed);
        break;
      case "hamster-syrian":
        result = computeHamster(parsed, false);
        break;
      case "hamster-dwarf":
        result = computeHamster(parsed, true);
        break;
    }
  }

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
          <span className="text-[#17211B] font-medium">Pet Life Stage Calculator</span>
        </nav>

        <div className="max-w-xl mx-auto">
          <header className="mb-8">
            <span className="tag mb-4 inline-block">Free Tool</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Pet Life Stage Calculator
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed">
              Select a species and enter your pet&apos;s age to see an approximate
              human-age range, life stage, and general care focus. Results are general
              orientation only and do not constitute veterinary advice or diagnosis.
            </p>
          </header>

          <div className="card p-6 space-y-5 mb-6">
            <div>
              <label
                htmlFor="species"
                className="block text-sm font-medium text-[#17211B] mb-1.5"
              >
                Species
              </label>
              <select
                id="species"
                value={species}
                onChange={(e) => setSpecies(e.target.value as Species)}
                className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A] bg-white"
              >
                {(Object.entries(SPECIES_LABELS) as [Species, string][]).map(
                  ([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  )
                )}
              </select>
            </div>

            <div>
              <label
                htmlFor="pet-age"
                className="block text-sm font-medium text-[#17211B] mb-1.5"
              >
                Age ({usesMonths ? "months" : "years"})
              </label>
              <input
                id="pet-age"
                type="number"
                min={minAge}
                max={maxAge}
                step={usesMonths ? 0.5 : 0.25}
                placeholder={usesMonths ? "e.g. 12" : "e.g. 3"}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A]"
              />
            </div>

            {species === "dog" && (
              <div>
                <label
                  htmlFor="dog-size"
                  className="block text-sm font-medium text-[#17211B] mb-1.5"
                >
                  Size category
                </label>
                <select
                  id="dog-size"
                  value={dogSize}
                  onChange={(e) => setDogSize(e.target.value as DogSize)}
                  className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A] bg-white"
                >
                  {(Object.entries(DOG_SIZE_LABELS) as [DogSize, string][]).map(
                    ([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    )
                  )}
                </select>
              </div>
            )}
          </div>

          {result && (
            <div
              className="bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl p-6 mb-6"
              aria-live="polite"
              aria-label="Pet life stage result"
            >
              <p className="text-xs text-[#5E6B63] uppercase tracking-wider mb-1">
                Life stage
              </p>
              <p className="text-2xl font-bold text-[#063F2A] mb-3">{result.stage}</p>
              <p className="text-sm text-[#5E6B63] mb-1">
                Approximate human-age equivalent
              </p>
              <p className="text-base font-medium text-[#17211B] mb-4">
                {result.humanAgeRange}
              </p>
              <p className="text-sm text-[#5E6B63] mb-1">General care focus</p>
              <p className="text-sm text-[#2C3A2F] leading-relaxed">{result.careFocus}</p>
            </div>
          )}

          <section className="prose-content mb-6" aria-labelledby="about-heading">
            <h2 id="about-heading" className="text-xl font-bold text-[#17211B] mb-3">
              How This Calculator Works
            </h2>
            <p>
              This tool combines simple species-appropriate aging models with a general
              life-stage classification. The output is intended to help owners orient
              themselves to a typical care focus at a particular life stage, not to
              diagnose conditions or replace a vet visit.
            </p>
            <p>
              Aging varies meaningfully by species, breed, size, genetics, health, and
              lifestyle. The same chronological age can correspond to very different
              biological stages between individuals. Use this output as a starting point
              for conversations with your veterinarian.
            </p>
            <p>
              For more detailed per-species tools, see the{" "}
              <Link href="/tools/pet-age-calculator">pet age calculator hub</Link>.
            </p>
          </section>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
            <strong>Important:</strong> This tool does not provide veterinary diagnosis or
            treatment. Care recommendations are general orientation only. For any health
            concern, consult a licensed veterinarian familiar with your species of pet.
          </div>

          <p className="text-xs text-[#8A958E]">Last updated: May 12, 2026</p>
        </div>
      </div>
    </main>
  );
}
