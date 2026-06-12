"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

/**
 * Backyard Bird Observation Checklist — client component.
 *
 * Privacy by design: no account, no database, no API call, no external
 * service, and no localStorage. Selections and tick state live only in React
 * state in the current browser tab and reset on refresh. Nothing is sent.
 *
 * Output is an ETHICAL OBSERVATION planning checklist only. It never gives
 * wildlife-handling instructions, feeding prescriptions, species-certainty
 * claims, or product brands.
 */

type Location = "backyard" | "park" | "trail" | "balcony" | "water";
type TimeOfDay = "morning" | "afternoon" | "evening" | "unsure";
type Goal = "identification" | "photography" | "family" | "casual";
type RulesChecked = "yes" | "not-yet";
type Feeding = "no" | "considering" | "already";
type Nesting = "yes" | "no" | "unsure";

interface PlanState {
  location: Location;
  timeOfDay: TimeOfDay;
  goal: Goal;
  rulesChecked: RulesChecked;
  feeding: Feeding;
  nesting: Nesting;
}

const DEFAULT_STATE: PlanState = {
  location: "backyard",
  timeOfDay: "morning",
  goal: "casual",
  rulesChecked: "not-yet",
  feeding: "no",
  nesting: "unsure",
};

interface Item {
  id: string;
  text: string;
}

function buildChecklist(s: PlanState): Item[] {
  const items: Item[] = [];
  const add = (id: string, text: string) => items.push({ id, text });

  add("distance", "Plan to watch from a respectful distance using binoculars or a scope, not by approaching.");
  add("quiet", "Move slowly and stay quiet; back off if a bird reacts to you.");
  add("nests", "Avoid all nests, eggs, chicks, and roosts — do not disturb them.");

  if (s.rulesChecked === "not-yet") {
    add("rules", "Check local wildlife rules and access/property boundaries before you start.");
  } else {
    add("rules", "Confirm you are following local wildlife rules and respecting property.");
  }

  if (s.location === "park" || s.location === "trail") {
    add("public", "Keep to paths where required and be considerate of other people and wildlife.");
  } else if (s.location === "balcony") {
    add("balcony", "Watch from your balcony without leaning out or disturbing birds nearby.");
  } else if (s.location === "water") {
    add("water", "Keep back from waterbird nesting and roosting areas, which are easily disturbed.");
  }

  if (s.timeOfDay === "morning") {
    add("timing", "Mornings are often active for birds — settle in quietly and let them come to you.");
  } else if (s.timeOfDay === "evening") {
    add("timing", "Near dusk, avoid disturbing birds settling to roost.");
  } else {
    add("timing", "Pick a calm spot and watch patiently; activity varies through the day.");
  }

  if (s.goal === "photography") {
    add("photo", "Use a longer lens and distance instead of approaching; never bait or disturb for a shot.");
  } else if (s.goal === "identification") {
    add("id", "Note size, shape, colour, behaviour, habitat, and calls — and accept uncertainty.");
  } else if (s.goal === "family") {
    add("family", "Keep children calm and at a distance; model quiet, respectful watching.");
  }

  if (s.feeding === "considering") {
    add("feeding", "Before feeding, check local guidance; if you do feed, keep feeders clean and well spaced.");
  } else if (s.feeding === "already") {
    add("feeding", "Keep feeders and water scrupulously clean; stop and seek guidance if you see sick birds.");
  }

  if (s.nesting === "yes" || s.nesting === "unsure") {
    add("nesting", "Assume it may be nesting season — keep extra distance and avoid hedges and trees with possible nests.");
  }

  add("pets", "Keep pets under control and away from birds.");
  add("leave", "Leave no trace, and never handle wild birds — contact a licensed rehabilitator if one is injured.");
  return items;
}

function idNotes(): string[] {
  return [
    "Size and shape relative to a familiar bird.",
    "Colour, markings, and bill shape.",
    "Behaviour — how it moves, feeds, and flies.",
    "Habitat and the time and place you saw it.",
    "Any calls or song (record only if it does not disturb the bird).",
  ];
}

function whatNotToDo(): string[] {
  return [
    "Do not approach, chase, flush, or bait birds.",
    "Do not disturb nests, eggs, chicks, or roosts.",
    "Do not handle, feed, water, or treat injured or baby wild birds.",
    "Do not overuse call playback, especially near rare or breeding birds.",
    "Do not assume an app or photo gives a guaranteed identification.",
  ];
}

export default function BackyardBirdObservationChecklistClient() {
  const [state, setState] = useState<PlanState>(DEFAULT_STATE);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const checklist = useMemo(() => buildChecklist(state), [state]);
  const notes = useMemo(() => idNotes(), []);
  const avoid = useMemo(() => whatNotToDo(), []);

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

  const selectClass =
    "rounded-lg border border-[#DDE6DD] bg-white px-3 py-2 text-sm text-[#17211B] focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:border-[#063F2A]";

  return (
    <section aria-labelledby="builder-heading" className="not-prose my-10">
      <h2 id="builder-heading" className="text-2xl sm:text-3xl font-bold text-[#17211B] mb-2">
        Build your ethical observation checklist
      </h2>
      <p className="text-sm text-[#5E6B63] mb-6 max-w-2xl">
        Answer a few questions and we&apos;ll tailor an ethical observation
        checklist, ID notes, and reminders of what not to do. It gives no
        wildlife-handling instructions, feeding prescriptions, or species-certainty
        claims. Everything stays in your browser.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Observation options">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="location" className="text-sm font-semibold text-[#17211B]">Observation location</label>
            <select id="location" className={selectClass} value={state.location} onChange={(e) => set("location", e.target.value as Location)}>
              <option value="backyard">Backyard</option>
              <option value="park">Park</option>
              <option value="trail">Trail</option>
              <option value="balcony">Balcony</option>
              <option value="water">Near water</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="timeOfDay" className="text-sm font-semibold text-[#17211B]">Time of day</label>
            <select id="timeOfDay" className={selectClass} value={state.timeOfDay} onChange={(e) => set("timeOfDay", e.target.value as TimeOfDay)}>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="goal" className="text-sm font-semibold text-[#17211B]">Goal</label>
            <select id="goal" className={selectClass} value={state.goal} onChange={(e) => set("goal", e.target.value as Goal)}>
              <option value="casual">Casual watching</option>
              <option value="identification">Identification</option>
              <option value="photography">Photography</option>
              <option value="family">Family learning</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="rulesChecked" className="text-sm font-semibold text-[#17211B]">Local rules checked?</label>
            <select id="rulesChecked" className={selectClass} value={state.rulesChecked} onChange={(e) => set("rulesChecked", e.target.value as RulesChecked)}>
              <option value="not-yet">Not yet</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="feeding" className="text-sm font-semibold text-[#17211B]">Feeding involved?</label>
              <select id="feeding" className={selectClass} value={state.feeding} onChange={(e) => set("feeding", e.target.value as Feeding)}>
                <option value="no">No</option>
                <option value="considering">Considering</option>
                <option value="already">Already feeding</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nesting" className="text-sm font-semibold text-[#17211B]">Nesting season concern?</label>
              <select id="nesting" className={selectClass} value={state.nesting} onChange={(e) => set("nesting", e.target.value as Nesting)}>
                <option value="unsure">Unsure</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <button type="button" onClick={reset} className="btn-secondary">Reset</button>
        </form>

        <div aria-live="polite" className="space-y-5">
          <div className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6">
            <div className="flex items-baseline justify-between gap-3 border-b border-[#DDE6DD] pb-3 mb-4">
              <h3 className="text-lg font-bold text-[#17211B]">Ethical observation checklist</h3>
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
            <h3 className="text-base font-bold text-[#17211B] mb-3">ID notes to jot down</h3>
            <ul className="space-y-1.5 text-sm text-[#2C3A2F]">
              {notes.map((q, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="text-[#063F2A] mt-[2px]">→</span>
                  <span className="leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#E4CFC4] bg-white p-5 sm:p-6">
            <h3 className="text-base font-bold text-[#17211B] mb-3">What not to do</h3>
            <ul className="space-y-1.5 text-sm text-[#2C3A2F]">
              {avoid.map((q, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="text-[#A04E2A] mt-[2px]">✕</span>
                  <span className="leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-semibold mb-1 flex items-center gap-2">
              <span aria-hidden="true">⚠</span> Injured or sick wild bird?
            </p>
            <p className="leading-relaxed">
              Keep your distance, keep pets and children away, and contact a
              licensed wildlife rehabilitator or local authority.{" "}
              <Link href="/birdwatching/what-to-do-if-you-find-an-injured-bird" className="underline text-amber-900">
                What to do if you find an injured bird →
              </Link>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-[#5E6B63] mb-2">Plan further</p>
            <div className="flex flex-wrap gap-2">
              {[
                { href: "/birdwatching", label: "Birdwatching hub" },
                { href: "/birdwatching/how-to-watch-birds-ethically", label: "Watch ethically" },
                { href: "/birdwatching/backyard-bird-identification", label: "Identify birds" },
                { href: "/animal-encyclopedia/birds", label: "Bird encyclopedia" },
                { href: "/animals/robin", label: "Robin" },
                { href: "/animals/sparrow", label: "Sparrow" },
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
            Planning checklist only · No wildlife-handling instructions, feeding prescriptions, species-certainty claims, or product brands ·
            Your selections stay in your browser and are not saved or sent.
          </p>
        </div>
      </div>
    </section>
  );
}
