"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

/**
 * Pet Feeding Schedule Planner — client component.
 *
 * Privacy by design: no account, no database, no API call, no external
 * service, and no localStorage. Selections live only in React state in the
 * current browser tab and reset on refresh. Nothing is sent anywhere.
 *
 * Output is an illustrative ROUTINE TEMPLATE only. It never gives feeding
 * amounts, calories, or condition-specific diet advice — those belong with a
 * licensed veterinarian and the food label.
 */

type Species = "dog" | "cat";
type LifeStage = "puppy" | "kitten" | "adult" | "senior";
type MealPlan = "two" | "three" | "flexible";
type WorkSchedule = "home" | "away" | "variable";
type ReminderPref = "morning" | "evening";

interface PlanState {
  species: Species;
  lifeStage: LifeStage;
  mealPlan: MealPlan;
  workSchedule: WorkSchedule;
  reminderPref: ReminderPref;
  treatsReminder: boolean;
  waterReminder: boolean;
}

const DEFAULT_STATE: PlanState = {
  species: "dog",
  lifeStage: "adult",
  mealPlan: "two",
  workSchedule: "home",
  reminderPref: "morning",
  treatsReminder: true,
  waterReminder: true,
};

const LIFE_STAGE_LABEL: Record<LifeStage, string> = {
  puppy: "Puppy",
  kitten: "Kitten",
  adult: "Adult",
  senior: "Senior",
};

interface RoutineStep {
  part: string;
  lines: string[];
}

interface Routine {
  steps: RoutineStep[];
  notes: string[];
}

function buildRoutine(state: PlanState): Routine {
  const youngStage = state.lifeStage === "puppy" || state.lifeStage === "kitten";
  const animal =
    state.species === "dog"
      ? state.lifeStage === "puppy"
        ? "puppy"
        : "dog"
      : state.lifeStage === "kitten"
        ? "kitten"
        : "cat";

  const waterLine = state.waterReminder ? "Refresh the water bowl." : null;

  const mealLine = "Measured meal — use the food label range and your vet's guidance for the amount.";

  const steps: RoutineStep[] = [];

  function step(part: string, lines: (string | null)[]) {
    steps.push({ part, lines: lines.filter((l): l is string => !!l) });
  }

  if (state.mealPlan === "flexible") {
    step("Across the day", [
      "Offer measured portions split into smaller meals that suit your routine.",
      waterLine,
    ]);
  } else {
    const checkInMorning = state.reminderPref === "morning";
    step("Morning", [
      mealLine,
      waterLine,
      checkInMorning
        ? "Quick check-in: glance at appetite, energy, and body condition."
        : null,
    ]);
    if (state.mealPlan === "three") {
      step("Midday", [
        state.workSchedule === "away"
          ? "Midday meal — plan ahead if you're out (a helper, drop-in, or timed feeder for some routines)."
          : mealLine,
        waterLine,
      ]);
    } else if (state.workSchedule === "away" && state.waterReminder) {
      step("Midday", ["Check that fresh water is still available while you're out."]);
    }
    step("Evening", [
      mealLine,
      waterLine,
      !checkInMorning
        ? "Quick check-in: glance at appetite, energy, and body condition."
        : null,
    ]);
  }

  if (state.treatsReminder) {
    step("Treats", [
      `Keep treats modest and counted within ${animal === "puppy" || animal === "kitten" ? "the day's intake" : "the daily total"}. A common guideline is no more than about 10% of daily calories — confirm with your vet.`,
    ]);
  }

  const notes: string[] = [
    "Confirm meal frequency and amounts with your veterinarian and the food label — this template does not set portions.",
  ];

  if (youngStage) {
    notes.push(
      `Young ${animal}s usually need more frequent meals than adults. Ask your veterinarian about the right frequency for your ${animal}'s age.`
    );
  }
  if (state.lifeStage === "senior") {
    notes.push(
      state.species === "cat"
        ? "Senior cats benefit from closer monitoring of weight, appetite, and drinking — raise any changes with your veterinarian."
        : "Senior dogs benefit from closer monitoring of weight, appetite, and comfort — raise any changes with your veterinarian."
    );
  }
  if (state.workSchedule === "away" || state.workSchedule === "variable") {
    notes.push(
      "If you're away or your schedule varies, plan how midday feeding and water checks will happen, and ask your veterinarian whether your routine suits your pet."
    );
  }
  if (state.species === "cat") {
    notes.push(
      "Cats should not go long without eating. If your cat refuses food, contact your veterinarian."
    );
  }

  return { steps, notes };
}

const FOLLOW_UP_LINKS = [
  { href: "/pet-nutrition/dog-feeding-schedule", label: "Dog feeding schedule" },
  { href: "/pet-nutrition/cat-feeding-schedule", label: "Cat feeding schedule" },
  { href: "/pet-nutrition", label: "Pet nutrition hub" },
  { href: "/tools/pet-cost-calculator", label: "Pet cost calculator" },
  { href: "/vet-care", label: "Vet care" },
  { href: "/dogs/health", label: "Dog health" },
  { href: "/cats/health", label: "Cat health" },
];

function Field({
  label,
  htmlFor,
  children,
  helper,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  helper?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-[#17211B]">
        {label}
      </label>
      {children}
      {helper && <p className="text-xs text-[#8A958E] leading-relaxed">{helper}</p>}
    </div>
  );
}

const selectClass =
  "rounded-lg border border-[#DDE6DD] bg-white px-3 py-2 text-sm text-[#17211B] focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:border-[#063F2A]";

export default function PetFeedingSchedulePlannerClient() {
  const [state, setState] = useState<PlanState>(DEFAULT_STATE);
  const routine = useMemo(() => buildRoutine(state), [state]);

  function set<K extends keyof PlanState>(key: K, value: PlanState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function reset() {
    setState(DEFAULT_STATE);
  }

  // Kitten/puppy life stages only make sense with the matching species.
  const lifeStageOptions: LifeStage[] =
    state.species === "dog"
      ? ["puppy", "adult", "senior"]
      : ["kitten", "adult", "senior"];

  return (
    <section aria-labelledby="planner-heading" className="not-prose my-10">
      <h2
        id="planner-heading"
        className="text-2xl sm:text-3xl font-bold text-[#17211B] mb-2"
      >
        Build a sample routine
      </h2>
      <p className="text-sm text-[#5E6B63] mb-6 max-w-2xl">
        Choose a few options and we&apos;ll lay out an illustrative daily
        template. It never sets feeding amounts — those come from the food label
        and your veterinarian. Everything stays in your browser.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Controls */}
        <form
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Feeding routine options"
        >
          <Field label="Species" htmlFor="species">
            <select
              id="species"
              className={selectClass}
              value={state.species}
              onChange={(e) => {
                const species = e.target.value as Species;
                // Reset an incompatible life stage when species changes.
                setState((prev) => ({
                  ...prev,
                  species,
                  lifeStage:
                    prev.lifeStage === "puppy" && species === "cat"
                      ? "kitten"
                      : prev.lifeStage === "kitten" && species === "dog"
                        ? "puppy"
                        : prev.lifeStage,
                }));
              }}
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </Field>

          <Field label="Life stage" htmlFor="lifeStage">
            <select
              id="lifeStage"
              className={selectClass}
              value={state.lifeStage}
              onChange={(e) => set("lifeStage", e.target.value as LifeStage)}
            >
              {lifeStageOptions.map((ls) => (
                <option key={ls} value={ls}>
                  {LIFE_STAGE_LABEL[ls]}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label="Meal routine"
            htmlFor="mealPlan"
            helper="Young pets often need more frequent meals — confirm with your vet."
          >
            <select
              id="mealPlan"
              className={selectClass}
              value={state.mealPlan}
              onChange={(e) => set("mealPlan", e.target.value as MealPlan)}
            >
              <option value="two">2 meals a day</option>
              <option value="three">3 meals a day</option>
              <option value="flexible">Flexible / smaller meals</option>
            </select>
          </Field>

          <Field label="Your daytime schedule" htmlFor="workSchedule">
            <select
              id="workSchedule"
              className={selectClass}
              value={state.workSchedule}
              onChange={(e) => set("workSchedule", e.target.value as WorkSchedule)}
            >
              <option value="home">Usually home</option>
              <option value="away">Away during the day</option>
              <option value="variable">Variable</option>
            </select>
          </Field>

          <Field label="Main check-in time" htmlFor="reminderPref">
            <select
              id="reminderPref"
              className={selectClass}
              value={state.reminderPref}
              onChange={(e) => set("reminderPref", e.target.value as ReminderPref)}
            >
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
            </select>
          </Field>

          <fieldset className="border border-[#DDE6DD] rounded-lg p-4">
            <legend className="text-sm font-semibold text-[#17211B] px-1">
              Reminders to include
            </legend>
            <div className="flex flex-col gap-2 mt-1">
              <label htmlFor="treatsReminder" className="flex items-center gap-2.5 text-sm text-[#2C3A2F]">
                <input
                  id="treatsReminder"
                  type="checkbox"
                  checked={state.treatsReminder}
                  onChange={(e) => set("treatsReminder", e.target.checked)}
                  className="accent-[#063F2A]"
                />
                Treats planning reminder
              </label>
              <label htmlFor="waterReminder" className="flex items-center gap-2.5 text-sm text-[#2C3A2F]">
                <input
                  id="waterReminder"
                  type="checkbox"
                  checked={state.waterReminder}
                  onChange={(e) => set("waterReminder", e.target.checked)}
                  className="accent-[#063F2A]"
                />
                Fresh-water check reminder
              </label>
            </div>
          </fieldset>

          <button type="button" onClick={reset} className="btn-secondary">
            Reset
          </button>
        </form>

        {/* Output */}
        <div
          aria-live="polite"
          className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6"
        >
          <div className="border-b border-[#DDE6DD] pb-3 mb-4">
            <p className="text-xs uppercase tracking-wider text-[#8A958E]">
              Sample routine template
            </p>
            <h3 className="text-lg font-bold text-[#17211B] mt-1">
              {LIFE_STAGE_LABEL[state.lifeStage]} {state.species === "dog" ? "dog" : "cat"} ·{" "}
              {state.mealPlan === "flexible"
                ? "flexible meals"
                : state.mealPlan === "three"
                  ? "3 meals"
                  : "2 meals"}
            </h3>
          </div>

          <ol className="space-y-4">
            {routine.steps.map((s) => (
              <li key={s.part} className="flex gap-3">
                <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 h-fit rounded-full text-[11px] font-semibold uppercase tracking-wide bg-[#EFF4E0] text-[#063F2A] border border-[#CFE0A8]">
                  {s.part}
                </span>
                <ul className="space-y-1 text-sm text-[#2C3A2F]">
                  {s.lines.map((line, i) => (
                    <li key={i} className="flex gap-2">
                      <span aria-hidden="true" className="text-[#063F2A] mt-[2px]">
                        •
                      </span>
                      <span className="leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-5 rounded-xl border border-[#CFE0A8] bg-[#F7FAF0] p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#063F2A] mb-2">
              Ask your veterinarian
            </p>
            <ul className="space-y-1.5 text-sm text-[#2C3A2F]">
              {routine.notes.map((n, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="text-[#0F5A3A] mt-[2px]">
                    →
                  </span>
                  <span className="leading-relaxed">{n}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-wider text-[#5E6B63] mb-2">
              Keep planning
            </p>
            <div className="flex flex-wrap gap-2">
              {FOLLOW_UP_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs px-3 py-1.5 rounded-full border border-[#DDE6DD] bg-white text-[#2C3A2F] hover:border-[#7BAA35] hover:text-[#063F2A] hover:no-underline transition"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-4 text-[11px] text-[#8A958E] leading-relaxed">
            Illustrative template only · Not veterinary nutrition advice · No
            feeding amounts · Your selections stay in your browser and are not
            saved or sent.
          </p>
        </div>
      </div>
    </section>
  );
}
