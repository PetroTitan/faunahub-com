"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

/**
 * Small Pet Setup Checklist — client component.
 *
 * Privacy by design: no account, no database, no API call, no external
 * service, and no localStorage. Selections and tick state live only in React
 * state in the current browser tab and reset on refresh. Nothing is sent.
 *
 * Output is a PLANNING checklist only. It never gives medical advice, cage-size
 * legal claims, feeding quantities, or product brands.
 */

type Species = "rabbit" | "guinea-pig" | "hamster";
type Status = "planning" | "first-week" | "home";
type HomeType = "apartment" | "house" | "shared";
type Setup = "not-started" | "partly" | "mostly";
type YesNo = "yes" | "no";
type Budget = "not-sure" | "partial" | "planned";

interface PlanState {
  species: Species;
  status: Status;
  homeType: HomeType;
  setup: Setup;
  vetPlanned: YesNo;
  othersAtHome: YesNo;
  budget: Budget;
}

const DEFAULT_STATE: PlanState = {
  species: "rabbit",
  status: "planning",
  homeType: "house",
  setup: "not-started",
  vetPlanned: "no",
  othersAtHome: "no",
  budget: "not-sure",
};

const ANIMAL: Record<Species, string> = {
  rabbit: "rabbit",
  "guinea-pig": "guinea pig",
  hamster: "hamster",
};

const CARE_PATH: Record<Species, { care: string; housing: string; feeding: string; warning: string; firstWeek: string }> = {
  rabbit: {
    care: "/small-pets/rabbit-care",
    housing: "/small-pets/rabbit-housing-setup",
    feeding: "/small-pets/rabbit-feeding-basics",
    warning: "/small-pets/rabbit-warning-signs",
    firstWeek: "/small-pets/rabbit-first-week-checklist",
  },
  "guinea-pig": {
    care: "/small-pets/guinea-pig-care",
    housing: "/small-pets/guinea-pig-housing-setup",
    feeding: "/small-pets/guinea-pig-feeding-basics",
    warning: "/small-pets/guinea-pig-warning-signs",
    firstWeek: "/small-pets/guinea-pig-first-week-checklist",
  },
  hamster: {
    care: "/small-pets/hamster-care",
    housing: "/small-pets/hamster-housing-setup",
    feeding: "/small-pets/hamster-feeding-basics",
    warning: "/small-pets/hamster-warning-signs",
    firstWeek: "/small-pets/hamster-first-week-checklist",
  },
};

interface Item {
  id: string;
  text: string;
}

function buildChecklist(s: PlanState): Item[] {
  const a = ANIMAL[s.species];
  const items: Item[] = [];
  const add = (id: string, text: string) => items.push({ id, text });

  add(
    "housing",
    s.status === "home"
      ? `Review your ${a}'s housing and upgrade space, bedding, and enrichment where needed.`
      : `Set up secure, species-appropriate housing before bringing your ${a} home.`
  );

  if (s.species === "rabbit") {
    add("space", "Plan generous space plus a secure daily exercise area (bigger is better).");
    add("hay", "Provide unlimited grass hay and constant fresh water.");
    add("social", "Plan for companionship — rabbits are social; ask a rescue about bonding and neutering.");
    add("chew", "Provide safe chew and forage enrichment; rabbit-proof any roam area.");
  } else if (s.species === "guinea-pig") {
    add("space", "Plan generous flat floor space with hideaways (bigger is better).");
    add("hay", "Provide unlimited grass hay, fresh greens, and a vitamin C source (ask your vet).");
    add("social", "Plan for a compatible companion — guinea pigs are social.");
    add("heat", "Keep housing cool, shaded, and out of direct sun; avoid cedar/pine shavings.");
  } else {
    add("space", "Provide a large enclosure with deep bedding for burrowing.");
    add("wheel", "Provide a correctly sized solid (not barred) exercise wheel.");
    add("solitary", "House according to species — most hamsters are solitary.");
    add("quiet", "Choose a quiet location and respect night-time activity; escape-proof the enclosure.");
  }

  add("water", "Provide constant access to clean, fresh water.");

  if (s.setup === "not-started") {
    add("supplies", "Gather core supplies and complete the full enclosure setup.");
  } else if (s.setup === "partly") {
    add("supplies", "Finish the remaining housing and supplies.");
  } else {
    add("supplies", "Do a final setup and safety check.");
  }

  if (s.vetPlanned === "no") {
    add("vet", `Find a small-animal or exotic veterinarian who treats ${a}s, and save an emergency option.`);
  } else {
    add("vet", `Confirm your veterinarian treats ${a}s, and note their emergency option.`);
  }

  if (s.othersAtHome === "yes") {
    add("intro", `Plan supervision and slow, calm introductions; keep the ${a} secure from other pets and from rough handling.`);
  }
  if (s.homeType === "apartment") {
    add("apartment", "Plan exercise and space within apartment living, and secure windows and hazards.");
  } else if (s.homeType === "shared") {
    add("shared", "Agree care routines and responsibilities with everyone in the home.");
  }

  if (s.budget === "not-sure") {
    add("budget", "Use the pet cost calculator to plan an honest ongoing budget.");
  } else if (s.budget === "partial") {
    add("budget", "Finalise your ongoing budget for housing, food, and veterinary care.");
  } else {
    add("budget", "Keep an emergency fund for unexpected veterinary care.");
  }

  add("observe", `Note your ${a}'s normal eating, droppings or output, and activity so changes stand out.`);
  return items;
}

function vetQuestions(s: PlanState): string[] {
  const a = ANIMAL[s.species];
  const q = [
    `Do you treat ${a}s, and how do I reach you (or an emergency clinic) out of hours?`,
    `What housing and diet do you recommend for my ${a}?`,
  ];
  if (s.species === "guinea-pig") {
    q.push("How should I provide an appropriate vitamin C source for my guinea pig?");
  }
  q.push("What preventive care or check-ups do you recommend?");
  q.push("What warning signs should make me call you right away?");
  return q;
}

function safety(s: PlanState): string[] {
  const common = "Store toxic foods, plants, and household chemicals well out of reach.";
  if (s.species === "rabbit") {
    return [
      "Rabbit-proof cables and remove toxic plants from any roam area.",
      "Protect from heat, damp, and predators, indoors or out.",
      common,
      "A rabbit that stops eating or passing droppings is an emergency — contact a vet immediately.",
    ];
  }
  if (s.species === "guinea-pig") {
    return [
      "Keep housing cool and out of direct sun — guinea pigs overheat easily.",
      "Avoid cedar and pine shavings; keep bedding dry.",
      common,
      "A guinea pig that stops eating needs urgent veterinary care.",
    ];
  }
  return [
    "Use a solid (not barred) wheel and deep bedding to protect feet and backs.",
    "Keep the enclosure escape-proof and secure from other household pets.",
    common,
    "A wet, soiled rear or not eating needs prompt veterinary care.",
  ];
}

export default function SmallPetSetupChecklistClient() {
  const [state, setState] = useState<PlanState>(DEFAULT_STATE);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const checklist = useMemo(() => buildChecklist(state), [state]);
  const questions = useMemo(() => vetQuestions(state), [state]);
  const reminders = useMemo(() => safety(state), [state]);

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

  const path = CARE_PATH[state.species];
  const animalLabel = ANIMAL[state.species];
  const selectClass =
    "rounded-lg border border-[#DDE6DD] bg-white px-3 py-2 text-sm text-[#17211B] focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:border-[#063F2A]";

  return (
    <section aria-labelledby="builder-heading" className="not-prose my-10">
      <h2 id="builder-heading" className="text-2xl sm:text-3xl font-bold text-[#17211B] mb-2">
        Build your setup checklist
      </h2>
      <p className="text-sm text-[#5E6B63] mb-6 max-w-2xl">
        Answer a few questions and we&apos;ll tailor a setup checklist, vet
        questions, and safety reminders. It gives no medical advice, cage-size
        legal claims, or feeding amounts. Everything stays in your browser.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Setup options">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="species" className="text-sm font-semibold text-[#17211B]">Species</label>
            <select id="species" className={selectClass} value={state.species} onChange={(e) => set("species", e.target.value as Species)}>
              <option value="rabbit">Rabbit</option>
              <option value="guinea-pig">Guinea pig</option>
              <option value="hamster">Hamster</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="status" className="text-sm font-semibold text-[#17211B]">Where are you in the process?</label>
            <select id="status" className={selectClass} value={state.status} onChange={(e) => set("status", e.target.value as Status)}>
              <option value="planning">Still planning</option>
              <option value="first-week">First week at home</option>
              <option value="home">Already home</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="homeType" className="text-sm font-semibold text-[#17211B]">Home type</label>
            <select id="homeType" className={selectClass} value={state.homeType} onChange={(e) => set("homeType", e.target.value as HomeType)}>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="shared">Shared home</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="setup" className="text-sm font-semibold text-[#17211B]">Current setup</label>
            <select id="setup" className={selectClass} value={state.setup} onChange={(e) => set("setup", e.target.value as Setup)}>
              <option value="not-started">Not started</option>
              <option value="partly">Partly ready</option>
              <option value="mostly">Mostly ready</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="vetPlanned" className="text-sm font-semibold text-[#17211B]">Vet identified?</label>
              <select id="vetPlanned" className={selectClass} value={state.vetPlanned} onChange={(e) => set("vetPlanned", e.target.value as YesNo)}>
                <option value="no">Not yet</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="othersAtHome" className="text-sm font-semibold text-[#17211B]">Children/other pets?</label>
              <select id="othersAtHome" className={selectClass} value={state.othersAtHome} onChange={(e) => set("othersAtHome", e.target.value as YesNo)}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="budget" className="text-sm font-semibold text-[#17211B]">Budget readiness</label>
            <select id="budget" className={selectClass} value={state.budget} onChange={(e) => set("budget", e.target.value as Budget)}>
              <option value="not-sure">Not sure yet</option>
              <option value="partial">Partly planned</option>
              <option value="planned">Planned</option>
            </select>
          </div>

          <button type="button" onClick={reset} className="btn-secondary">Reset</button>
        </form>

        <div aria-live="polite" className="space-y-5">
          <div className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6">
            <div className="flex items-baseline justify-between gap-3 border-b border-[#DDE6DD] pb-3 mb-4">
              <h3 className="text-lg font-bold text-[#17211B] capitalize">{animalLabel} setup checklist</h3>
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
                    <span className={checked[item.id] ? "line-through text-[#8A958E]" : ""}>{item.text}</span>
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
            <h3 className="text-base font-bold text-[#17211B] mb-3">Safety reminders</h3>
            <ul className="space-y-1.5 text-sm text-[#2C3A2F]">
              {reminders.map((q, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="text-[#063F2A] mt-[2px]">●</span>
                  <span className="leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-semibold mb-1 flex items-center gap-2">
              <span aria-hidden="true">⚠</span> Warning-sign reminder
            </p>
            <p className="leading-relaxed">
              Small pets hide illness and decline fast. Know the warning signs and a vet in advance.{" "}
              <Link href={path.warning} className="underline text-amber-900">
                {animalLabel} warning signs →
              </Link>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-[#5E6B63] mb-2">Plan further</p>
            <div className="flex flex-wrap gap-2">
              {[
                { href: path.care, label: "Care overview" },
                { href: path.housing, label: "Housing setup" },
                { href: path.feeding, label: "Feeding basics" },
                { href: path.firstWeek, label: "First week" },
                { href: "/small-pets/care", label: "Small pets care hub" },
                { href: "/tools/pet-cost-calculator", label: "Cost calculator" },
                { href: "/pet-safety", label: "Pet safety" },
              ].map((l) => (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  className="text-xs px-3 py-1.5 rounded-full border border-[#DDE6DD] bg-white text-[#2C3A2F] hover:border-[#7BAA35] hover:text-[#063F2A] hover:no-underline transition"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-[#8A958E] leading-relaxed">
            Planning checklist only · No medical advice, cage-size legal claims, or feeding amounts ·
            Your selections stay in your browser and are not saved or sent.
          </p>
        </div>
      </div>
    </section>
  );
}
