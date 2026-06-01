"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

/**
 * Puppy & Kitten First-Week Checklist — client component.
 *
 * Privacy by design: no account, no database, no API call, no external
 * service, and no localStorage. Selections and tick state live only in React
 * state in the current browser tab and reset on refresh. Nothing is sent.
 *
 * The output is a PLANNING checklist only. It never generates vaccine or
 * deworming dates, medical schedules, treatment, or dosage — those belong
 * with a licensed veterinarian.
 */

type PetType = "puppy" | "kitten";
type Source = "shelter" | "rescue" | "breeder" | "family" | "other";
type HomeType = "apartment" | "house" | "shared";
type YesNo = "yes" | "no";
type Supplies = "not-started" | "partly" | "mostly";

interface PlanState {
  petType: PetType;
  source: Source;
  homeType: HomeType;
  existingPets: YesNo;
  children: YesNo;
  vetPlanned: YesNo;
  supplies: Supplies;
}

const DEFAULT_STATE: PlanState = {
  petType: "puppy",
  source: "shelter",
  homeType: "house",
  existingPets: "no",
  children: "no",
  vetPlanned: "no",
  supplies: "not-started",
};

const SOURCE_LABEL: Record<Source, string> = {
  shelter: "shelter",
  rescue: "rescue",
  breeder: "breeder",
  family: "family or friend",
  other: "previous owner",
};

interface ChecklistItem {
  id: string;
  text: string;
}

function buildChecklist(s: PlanState): ChecklistItem[] {
  const animal = s.petType;
  const items: ChecklistItem[] = [];
  const add = (id: string, text: string) => items.push({ id, text });

  add("space", `Set up a calm, safe space for your ${animal} before arrival.`);
  if (s.petType === "kitten") {
    add("safe-room", "Start your kitten in one quiet room and expand access gradually.");
    add("litter", "Place the litter box away from food and water, and keep it easy to reach.");
  } else {
    add("proof-rooms", "Puppy-proof rooms before giving your puppy more freedom.");
    add("toilet-routine", "Plan frequent, consistent toilet trips to the same spot.");
  }
  add("water", "Keep fresh, clean water available at all times.");

  if (s.supplies === "not-started") {
    add(
      "supplies",
      s.petType === "kitten"
        ? "Gather core supplies: food, bowls, litter box and litter, bed, carrier, safe toys."
        : "Gather core supplies: food, bowls, collar and ID tag, leash, bed, safe toys."
    );
  } else if (s.supplies === "partly") {
    add("supplies", "Finish the remaining supplies on your list.");
  } else {
    add("supplies", "Do a final supplies check so nothing is missing.");
  }

  add(
    "food-info",
    s.source === "family" || s.source === "other"
      ? "Gather whatever history you can about diet, age, and any vet care."
      : `Collect any records from the ${SOURCE_LABEL[s.source]} (vaccination/deworming history, microchip number) and the current food.`
  );
  add("food-match", `Keep some of the food your ${animal} has been eating to avoid an abrupt change.`);

  if (s.vetPlanned === "no") {
    add("book-vet", "Book a first veterinary visit and ask what to bring.");
  } else {
    add("confirm-vet", "Confirm your first vet appointment details and what to bring.");
  }

  add("microchip", "Record the microchip number and make sure the registry has your details.");
  add("emergency-numbers", "Save your veterinarian and nearest emergency clinic numbers.");

  if (s.existingPets === "yes") {
    add("introductions", "Plan slow, supervised introductions to your existing pets; keep food, beds, and (for cats) litter separate at first.");
  }
  if (s.children === "yes") {
    add("children", "Supervise all interactions and show children calm, gentle handling and quiet time.");
  }
  if (s.homeType === "apartment") {
    add(
      "apartment",
      s.petType === "kitten"
        ? "Make sure litter boxes are accessible and secure any windows or balconies."
        : "Plan a toileting and exercise routine that works for apartment living."
    );
  } else if (s.homeType === "shared") {
    add("shared", "Agree on routines, feeding, and responsibilities with everyone in the home.");
  }

  add("observe", `Note your ${animal}'s normal eating, drinking, toileting, and energy so changes stand out.`);
  return items;
}

function vetQuestions(s: PlanState): string[] {
  const q = [
    "Which vaccines and parasite prevention do you recommend, and on what timeline for our situation?",
    "When should we discuss spay or neuter?",
    "Is the microchip registered to me with current details?",
  ];
  if (s.petType === "kitten") {
    q.push("Are there any tests you recommend for a new kitten?");
  }
  q.push("What signs should make me call you — or an emergency clinic — sooner rather than later?");
  return q;
}

function homeSafety(s: PlanState): string[] {
  const common = [
    "Store toxic foods and all medications securely out of reach.",
    "Keep cleaning products, antifreeze, and chemicals locked away.",
  ];
  if (s.petType === "kitten") {
    return [
      "Keep lilies out of the home entirely — they are extremely toxic to cats.",
      ...common,
      "Put away string, ribbon, and yarn; secure windows and balconies with sturdy screens.",
    ];
  }
  return [
    ...common,
    "Remove or block toxic plants; check a reliable plant-toxicity reference.",
    "Manage electrical cords, clear small swallowable objects, and block stairs and balconies.",
  ];
}

export default function PuppyKittenFirstWeekChecklistClient() {
  const [state, setState] = useState<PlanState>(DEFAULT_STATE);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const checklist = useMemo(() => buildChecklist(state), [state]);
  const questions = useMemo(() => vetQuestions(state), [state]);
  const safety = useMemo(() => homeSafety(state), [state]);

  const doneCount = checklist.filter((i) => checked[i.id]).length;
  const pct = checklist.length ? Math.round((doneCount / checklist.length) * 100) : 0;

  function set<K extends keyof PlanState>(key: K, value: PlanState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }
  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }
  function reset() {
    setState(DEFAULT_STATE);
    setChecked({});
  }

  const careHub = state.petType === "kitten" ? "/kitten-care" : "/puppy-care";
  const feedingLink =
    state.petType === "kitten"
      ? "/pet-nutrition/kitten-feeding-basics"
      : "/pet-nutrition/puppy-feeding-basics";
  const feedingRoutineLink =
    state.petType === "kitten"
      ? "/kitten-care/kitten-feeding-routine"
      : "/puppy-care/puppy-feeding-routine";

  const selectClass =
    "rounded-lg border border-[#DDE6DD] bg-white px-3 py-2 text-sm text-[#17211B] focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:border-[#063F2A]";

  return (
    <section aria-labelledby="builder-heading" className="not-prose my-10">
      <h2 id="builder-heading" className="text-2xl sm:text-3xl font-bold text-[#17211B] mb-2">
        Build your first-week checklist
      </h2>
      <p className="text-sm text-[#5E6B63] mb-6 max-w-2xl">
        Answer a few questions and we&apos;ll tailor a planning checklist, vet
        questions, and safety reminders. It never generates vaccine dates or
        medical schedules. Everything stays in your browser.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Controls */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="First-week options">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="petType" className="text-sm font-semibold text-[#17211B]">
              Pet type
            </label>
            <select id="petType" className={selectClass} value={state.petType} onChange={(e) => set("petType", e.target.value as PetType)}>
              <option value="puppy">Puppy</option>
              <option value="kitten">Kitten</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="source" className="text-sm font-semibold text-[#17211B]">
              Adoption source
            </label>
            <select id="source" className={selectClass} value={state.source} onChange={(e) => set("source", e.target.value as Source)}>
              <option value="shelter">Shelter</option>
              <option value="rescue">Rescue</option>
              <option value="breeder">Breeder</option>
              <option value="family">Family or friend</option>
              <option value="other">Previous owner / other</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="homeType" className="text-sm font-semibold text-[#17211B]">
              Home type
            </label>
            <select id="homeType" className={selectClass} value={state.homeType} onChange={(e) => set("homeType", e.target.value as HomeType)}>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="shared">Shared home</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="existingPets" className="text-sm font-semibold text-[#17211B]">
                Existing pets?
              </label>
              <select id="existingPets" className={selectClass} value={state.existingPets} onChange={(e) => set("existingPets", e.target.value as YesNo)}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="children" className="text-sm font-semibold text-[#17211B]">
                Children at home?
              </label>
              <select id="children" className={selectClass} value={state.children} onChange={(e) => set("children", e.target.value as YesNo)}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="vetPlanned" className="text-sm font-semibold text-[#17211B]">
                First vet visit planned?
              </label>
              <select id="vetPlanned" className={selectClass} value={state.vetPlanned} onChange={(e) => set("vetPlanned", e.target.value as YesNo)}>
                <option value="no">Not yet</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="supplies" className="text-sm font-semibold text-[#17211B]">
                Supplies status
              </label>
              <select id="supplies" className={selectClass} value={state.supplies} onChange={(e) => set("supplies", e.target.value as Supplies)}>
                <option value="not-started">Not started</option>
                <option value="partly">Partly ready</option>
                <option value="mostly">Mostly ready</option>
              </select>
            </div>
          </div>

          <button type="button" onClick={reset} className="btn-secondary">
            Reset
          </button>
        </form>

        {/* Output */}
        <div aria-live="polite" className="space-y-5">
          <div className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6">
            <div className="flex items-baseline justify-between gap-3 border-b border-[#DDE6DD] pb-3 mb-4">
              <h3 className="text-lg font-bold text-[#17211B]">
                {state.petType === "kitten" ? "Kitten" : "Puppy"} first-week checklist
              </h3>
              <span className="text-xs text-[#5E6B63]">{doneCount}/{checklist.length} done</span>
            </div>
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={checklist.length}
              aria-valuenow={doneCount}
              aria-label="Checklist progress"
              className="rounded-full bg-[#EFF1EB] h-2 overflow-hidden mb-4"
            >
              <div className="h-full bg-[#7BAA35] transition-[width] duration-300" style={{ width: `${pct}%` }} />
            </div>
            <ul className="space-y-2">
              {checklist.map((item) => (
                <li key={item.id}>
                  <label className="flex items-start gap-3 cursor-pointer text-sm text-[#2C3A2F]">
                    <input
                      type="checkbox"
                      checked={!!checked[item.id]}
                      onChange={() => toggle(item.id)}
                      className="mt-0.5 accent-[#063F2A]"
                    />
                    <span className={checked[item.id] ? "line-through text-[#8A958E]" : ""}>
                      {item.text}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6">
            <h3 className="text-base font-bold text-[#17211B] mb-3">Questions to ask your veterinarian</h3>
            <ul className="space-y-1.5 text-sm text-[#2C3A2F]">
              {questions.map((q, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="text-[#063F2A] mt-[2px]">→</span>
                  <span className="leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6">
            <h3 className="text-base font-bold text-[#17211B] mb-3">Home safety reminders</h3>
            <ul className="space-y-1.5 text-sm text-[#2C3A2F]">
              {safety.map((q, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="text-[#063F2A] mt-[2px]">●</span>
                  <span className="leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-semibold mb-1 flex items-center gap-2">
              <span aria-hidden="true">⚠</span> Emergency contact reminder
            </p>
            <p className="leading-relaxed">
              Save your veterinarian and nearest emergency clinic numbers now, plus an
              animal poison-control number. Young animals can change fast — when in doubt, call.{" "}
              <Link href="/pet-safety/pet-emergency-contact-list" className="underline text-amber-900">
                Build an emergency contact list →
              </Link>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-[#5E6B63] mb-2">Plan further</p>
            <div className="flex flex-wrap gap-2">
              {[
                { href: careHub, label: state.petType === "kitten" ? "Kitten care hub" : "Puppy care hub" },
                { href: feedingRoutineLink, label: "Feeding routine" },
                { href: feedingLink, label: "Feeding basics" },
                { href: "/tools/pet-feeding-schedule-planner", label: "Feeding planner" },
                { href: "/tools/pet-cost-calculator", label: "Cost calculator" },
                { href: "/guides/pet-budget-checklist", label: "Budget checklist" },
                { href: "/pet-insurance", label: "Pet insurance" },
              ].map((l) => (
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

          <p className="text-[11px] text-[#8A958E] leading-relaxed">
            Planning checklist only · No vaccine dates or medical schedules · Not veterinary
            advice · Your selections stay in your browser and are not saved or sent.
          </p>
        </div>
      </div>
    </section>
  );
}
