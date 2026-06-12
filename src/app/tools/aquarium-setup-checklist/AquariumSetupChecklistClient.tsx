"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

/**
 * Aquarium Setup Checklist — client component.
 *
 * Privacy by design: no account, no database, no API call, no external
 * service, and no localStorage. Selections and tick state live only in React
 * state in the current browser tab and reset on refresh. Nothing is sent.
 *
 * Output is a PLANNING checklist only. It never gives medical advice, fish
 * diagnosis, chemical dosing, tank-size legal claims, feeding amounts, or
 * product brands.
 */

type TankType = "freshwater" | "marine" | "unsure";
type Experience = "beginner" | "some";
type Status = "planning" | "cycling" | "has-fish";
type Species = "betta" | "goldfish" | "guppy" | "community" | "unsure";
type Testing = "not-yet" | "have-kit" | "need-guidance";
type Maintenance = "unsure" | "planned";
type YesNo = "yes" | "no";

interface PlanState {
  tankType: TankType;
  experience: Experience;
  status: Status;
  species: Species;
  testing: Testing;
  maintenance: Maintenance;
  emergencyPlanned: YesNo;
}

const DEFAULT_STATE: PlanState = {
  tankType: "freshwater",
  experience: "beginner",
  status: "planning",
  species: "unsure",
  testing: "not-yet",
  maintenance: "unsure",
  emergencyPlanned: "no",
};

const SPECIES_LINK: Record<Species, { label: string; href: string } | null> = {
  betta: { label: "Betta fish care basics", href: "/aquarium-care/betta-fish-care-basics" },
  goldfish: { label: "Goldfish care basics", href: "/aquarium-care/goldfish-care-basics" },
  guppy: { label: "Guppy care basics", href: "/aquarium-care/guppy-care-basics" },
  community: { label: "Freshwater for beginners", href: "/aquarium-care/freshwater-aquarium-beginners" },
  unsure: { label: "Freshwater for beginners", href: "/aquarium-care/freshwater-aquarium-beginners" },
};

interface Item {
  id: string;
  text: string;
}

function buildChecklist(s: PlanState): Item[] {
  const items: Item[] = [];
  const add = (id: string, text: string) => items.push({ id, text });

  // research first
  add("research", "Research the specific fish you want — adult size, temperament, and water needs — before buying anything.");

  if (s.tankType === "marine") {
    add("marine", "Treat a marine (saltwater) tank as an advanced project with extra equipment and stable saltwater — research thoroughly first.");
  } else if (s.tankType === "unsure") {
    add("decide", "Decide between freshwater and marine; freshwater is usually the more manageable starting point.");
  }

  add("tank", s.status === "has-fish"
    ? "Review whether your current tank size and filtration suit the fish, and upgrade if it is too small."
    : "Choose an appropriately sized tank on a stable, level, weight-bearing stand (bigger is generally more stable).");

  add("filter", "Fit a filter suited to the tank and stocking.");

  if (s.species === "goldfish") {
    add("coldwater", "Set up coldwater conditions (goldfish generally do not need a tropical heater), with strong filtration for a waste-heavy fish.");
  } else {
    add("heater", "For tropical fish, add a heater and thermometer (coldwater fish such as goldfish differ).");
  }

  // cycling
  if (s.status === "planning") {
    add("cycle", "Cycle the tank so beneficial bacteria establish before adding fish.");
  } else if (s.status === "cycling") {
    add("cycle", "Finish cycling and confirm the tank is ready before (or while carefully) stocking.");
  } else {
    add("cycle", "Confirm the tank is fully cycled and stable for the fish you already keep.");
  }

  // testing
  if (s.testing === "not-yet") {
    add("testkit", "Get an appropriate water-testing kit before relying on the tank.");
  } else if (s.testing === "need-guidance") {
    add("testkit", "Learn to use your water-testing kit and what the readings mean, with qualified guidance.");
  } else {
    add("testkit", "Keep testing water regularly with your kit, especially early on and after changes.");
  }

  // stocking
  add("stock", "Plan to stock slowly with compatible species rather than all at once.");

  // maintenance
  if (s.maintenance === "unsure") {
    add("routine", "Plan a simple maintenance routine: observation, regular testing, and scheduled partial water changes.");
  } else {
    add("routine", "Keep to your maintenance routine and protect the biological filter when cleaning.");
  }

  if (s.experience === "beginner") {
    add("learn", "Read the aquarium-care basics and a species care page before committing.");
  }

  // emergency
  if (s.emergencyPlanned === "no") {
    add("vet", "Identify an aquatic veterinarian or fish-experienced clinic before you need one.");
  } else {
    add("vet", "Confirm how to reach your aquatic vet or specialist if a problem arises.");
  }

  add("norelease", "Plan responsibly for any fish you cannot keep — never release aquarium fish into local waterways.");
  add("observe", "Note what is normal for your fish — behaviour, appetite, and breathing — so changes stand out.");
  return items;
}

function waterReminders(): string[] {
  return [
    "Test water with appropriate equipment; clear water can still be unsafe.",
    "Let beneficial bacteria establish (cycling) before relying on the tank.",
    "Avoid sudden major changes in temperature or chemistry unless guided by a professional.",
    "This tool gives no chemical doses — follow qualified guidance and product instructions.",
  ];
}

function speciesReminders(s: PlanState): string[] {
  const base = [
    "Research each species' adult size, temperament, and whether it is social or solitary.",
    "Check compatibility before mixing species — not all fish get along.",
    "\"Beginner-friendly\" does not mean effortless; every fish has real needs.",
  ];
  if (s.species === "betta") base.push("Never house two male bettas together, and provide a heated, filtered tank — not a bowl.");
  if (s.species === "goldfish") base.push("Goldfish grow large, live long, and need generous space and filtration — not a small bowl.");
  if (s.species === "guppy") base.push("Guppies breed quickly; plan for population growth and rehoming.");
  if (s.tankType === "marine" || s.species === "unsure") base.push("Some fish (e.g. marine species) are demanding; research before buying.");
  return base;
}

function maintenanceReminders(): string[] {
  return [
    "Observe fish daily and check that equipment is running.",
    "Test water regularly and do scheduled partial water changes.",
    "Clean filter media gently (often in tank water) to protect beneficial bacteria.",
    "Avoid over-cleaning the whole tank and filter at once.",
  ];
}

export default function AquariumSetupChecklistClient() {
  const [state, setState] = useState<PlanState>(DEFAULT_STATE);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const checklist = useMemo(() => buildChecklist(state), [state]);
  const water = useMemo(() => waterReminders(), []);
  const species = useMemo(() => speciesReminders(state), [state]);
  const maintenance = useMemo(() => maintenanceReminders(), []);

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

  const speciesLink = SPECIES_LINK[state.species];
  const selectClass =
    "rounded-lg border border-[#DDE6DD] bg-white px-3 py-2 text-sm text-[#17211B] focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:border-[#063F2A]";

  return (
    <section aria-labelledby="builder-heading" className="not-prose my-10">
      <h2 id="builder-heading" className="text-2xl sm:text-3xl font-bold text-[#17211B] mb-2">
        Build your aquarium setup checklist
      </h2>
      <p className="text-sm text-[#5E6B63] mb-6 max-w-2xl">
        Answer a few questions and we&apos;ll tailor a setup checklist plus
        water-quality, species-research, and maintenance reminders. It gives no
        diagnosis, medication, chemical doses, tank-size legal claims, or feeding
        amounts. Everything stays in your browser.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Setup options">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="tankType" className="text-sm font-semibold text-[#17211B]">Aquarium type</label>
            <select id="tankType" className={selectClass} value={state.tankType} onChange={(e) => set("tankType", e.target.value as TankType)}>
              <option value="freshwater">Freshwater</option>
              <option value="marine">Marine (saltwater)</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="experience" className="text-sm font-semibold text-[#17211B]">Experience level</label>
            <select id="experience" className={selectClass} value={state.experience} onChange={(e) => set("experience", e.target.value as Experience)}>
              <option value="beginner">Beginner</option>
              <option value="some">Some experience</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="status" className="text-sm font-semibold text-[#17211B]">Setup status</label>
            <select id="status" className={selectClass} value={state.status} onChange={(e) => set("status", e.target.value as Status)}>
              <option value="planning">Planning</option>
              <option value="cycling">Cycling the tank</option>
              <option value="has-fish">Already have fish</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="species" className="text-sm font-semibold text-[#17211B]">Species interest</label>
            <select id="species" className={selectClass} value={state.species} onChange={(e) => set("species", e.target.value as Species)}>
              <option value="betta">Betta</option>
              <option value="goldfish">Goldfish</option>
              <option value="guppy">Guppy</option>
              <option value="community">Community fish</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="testing" className="text-sm font-semibold text-[#17211B]">Water-testing readiness</label>
            <select id="testing" className={selectClass} value={state.testing} onChange={(e) => set("testing", e.target.value as Testing)}>
              <option value="not-yet">No kit yet</option>
              <option value="have-kit">Have a kit</option>
              <option value="need-guidance">Need guidance</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="maintenance" className="text-sm font-semibold text-[#17211B]">Maintenance plan</label>
              <select id="maintenance" className={selectClass} value={state.maintenance} onChange={(e) => set("maintenance", e.target.value as Maintenance)}>
                <option value="unsure">Unsure</option>
                <option value="planned">Planned</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="emergencyPlanned" className="text-sm font-semibold text-[#17211B]">Aquatic vet identified?</label>
              <select id="emergencyPlanned" className={selectClass} value={state.emergencyPlanned} onChange={(e) => set("emergencyPlanned", e.target.value as YesNo)}>
                <option value="no">Not yet</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>

          <button type="button" onClick={reset} className="btn-secondary">Reset</button>
        </form>

        <div aria-live="polite" className="space-y-5">
          <div className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6">
            <div className="flex items-baseline justify-between gap-3 border-b border-[#DDE6DD] pb-3 mb-4">
              <h3 className="text-lg font-bold text-[#17211B]">Aquarium setup checklist</h3>
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
            <h3 className="text-base font-bold text-[#17211B] mb-3">Water-quality planning reminders</h3>
            <ul className="space-y-1.5 text-sm text-[#2C3A2F]">
              {water.map((q, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="text-[#063F2A] mt-[2px]">●</span>
                  <span className="leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6">
            <h3 className="text-base font-bold text-[#17211B] mb-3">Species research reminders</h3>
            <ul className="space-y-1.5 text-sm text-[#2C3A2F]">
              {species.map((q, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="text-[#063F2A] mt-[2px]">→</span>
                  <span className="leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6">
            <h3 className="text-base font-bold text-[#17211B] mb-3">Maintenance routine reminders</h3>
            <ul className="space-y-1.5 text-sm text-[#2C3A2F]">
              {maintenance.map((q, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="text-[#063F2A] mt-[2px]">●</span>
                  <span className="leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-semibold mb-1 flex items-center gap-2">
              <span aria-hidden="true">⚠</span> Qualified-help reminder
            </p>
            <p className="leading-relaxed">
              Fish health and water problems can worsen quickly. For severe distress,
              injury, rapid worsening, mass illness, or unexplained deaths, seek a
              qualified aquatic veterinarian or specialist.{" "}
              <Link href="/aquarium-care/when-to-call-aquatic-vet" className="underline text-amber-900">
                When to call an aquatic vet →
              </Link>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-[#5E6B63] mb-2">Plan further</p>
            <div className="flex flex-wrap gap-2">
              {[
                speciesLink,
                { href: "/aquarium-care", label: "Aquarium care hub" },
                { href: "/aquarium-care/aquarium-water-quality-basics", label: "Water quality basics" },
                { href: "/aquarium-care/fish-tank-maintenance-checklist", label: "Maintenance checklist" },
                { href: "/animal-encyclopedia/fish", label: "Fish encyclopedia" },
                { href: "/tools/pet-cost-calculator", label: "Cost calculator" },
              ]
                .filter((l): l is { href: string; label: string } => !!l)
                .map((l) => (
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
            Planning checklist only · No diagnosis, medication, chemical doses, tank-size legal claims, or feeding amounts ·
            Your selections stay in your browser and are not saved or sent.
          </p>
        </div>
      </div>
    </section>
  );
}
