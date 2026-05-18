"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  SELECTOR_CATEGORIES,
  topMatches,
  type ActivityLevel,
  type Children,
  type Experience,
  type GroomingTolerance,
  type HomeType,
  type NoiseTolerance,
  type PreferredSize,
  type SelectorInput,
  type TimeAvailable,
} from "@/lib/pet-breed-selector/data";

type Option<V extends string> = { value: V; label: string };

const HOME_TYPES: Option<HomeType>[] = [
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "rural", label: "Rural / land" },
  { value: "flexible", label: "Flexible / no strong preference" },
];

const ACTIVITY_LEVELS: Option<ActivityLevel>[] = [
  { value: "low", label: "Low — quieter routine" },
  { value: "moderate", label: "Moderate — walks and play" },
  { value: "high", label: "High — outdoors most days" },
];

const EXPERIENCE_LEVELS: Option<Experience>[] = [
  { value: "beginner", label: "Beginner — first pet, or first of this species" },
  { value: "intermediate", label: "Intermediate — some past experience" },
  { value: "experienced", label: "Experienced — long-time keeper" },
];

const CHILDREN_OPTIONS: Option<Children>[] = [
  { value: "yes", label: "Yes, children at home" },
  { value: "sometimes", label: "Sometimes / visiting children" },
  { value: "no", label: "No" },
];

const GROOMING_TOLERANCE: Option<GroomingTolerance>[] = [
  { value: "low", label: "Low — short coats, minimal grooming" },
  { value: "moderate", label: "Moderate — some weekly brushing" },
  { value: "high", label: "High — happy with regular grooming" },
];

const PREFERRED_SIZES: Option<PreferredSize>[] = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
  { value: "no-preference", label: "No preference" },
];

const NOISE_TOLERANCE: Option<NoiseTolerance>[] = [
  { value: "low", label: "Low — quiet household, sensitive neighbours" },
  { value: "moderate", label: "Moderate" },
  { value: "high", label: "High — used to noise" },
];

const TIME_AVAILABLE: Option<TimeAvailable>[] = [
  { value: "low", label: "Limited — busy schedule" },
  { value: "moderate", label: "Moderate" },
  { value: "high", label: "Plenty of time daily" },
];

const DEFAULTS: SelectorInput = {
  homeType: "apartment",
  activityLevel: "moderate",
  experience: "beginner",
  children: "no",
  groomingTolerance: "moderate",
  preferredSize: "no-preference",
  noiseTolerance: "moderate",
  timeAvailable: "moderate",
};

function FieldSelect<V extends string>(props: {
  id: string;
  label: string;
  value: V;
  onChange: (v: V) => void;
  options: Option<V>[];
}) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-[#17211B] mb-1.5"
      >
        {props.label}
      </label>
      <select
        id={props.id}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value as V)}
        className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-sm text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A] bg-white"
      >
        {props.options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function PetBreedSelectorClient() {
  const [input, setInput] = useState<SelectorInput>(DEFAULTS);

  const matches = useMemo(() => topMatches(input, 4), [input]);
  const totalCategories = SELECTOR_CATEGORIES.length;

  function set<K extends keyof SelectorInput>(key: K, value: SelectorInput[K]) {
    setInput((prev) => ({ ...prev, [key]: value }));
  }

  function reset() {
    setInput(DEFAULTS);
  }

  return (
    <section aria-labelledby="selector-heading" className="not-prose mt-2">
      <h2
        id="selector-heading"
        className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-3"
      >
        Describe your household
      </h2>

      <form
        className="card p-5 sm:p-6 mb-6"
        onSubmit={(e) => e.preventDefault()}
        aria-describedby="selector-help"
      >
        <p id="selector-help" className="text-xs text-[#8A958E] mb-4">
          Adjust any field — the matches update automatically. All inputs are
          stored only in your browser session.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <FieldSelect
            id="home-type"
            label="Home type"
            value={input.homeType}
            onChange={(v) => set("homeType", v)}
            options={HOME_TYPES}
          />
          <FieldSelect
            id="activity-level"
            label="Activity level you can offer a pet"
            value={input.activityLevel}
            onChange={(v) => set("activityLevel", v)}
            options={ACTIVITY_LEVELS}
          />
          <FieldSelect
            id="experience"
            label="Pet experience"
            value={input.experience}
            onChange={(v) => set("experience", v)}
            options={EXPERIENCE_LEVELS}
          />
          <FieldSelect
            id="children"
            label="Children at home"
            value={input.children}
            onChange={(v) => set("children", v)}
            options={CHILDREN_OPTIONS}
          />
          <FieldSelect
            id="grooming"
            label="Grooming tolerance"
            value={input.groomingTolerance}
            onChange={(v) => set("groomingTolerance", v)}
            options={GROOMING_TOLERANCE}
          />
          <FieldSelect
            id="size"
            label="Preferred pet size"
            value={input.preferredSize}
            onChange={(v) => set("preferredSize", v)}
            options={PREFERRED_SIZES}
          />
          <FieldSelect
            id="noise"
            label="Noise tolerance"
            value={input.noiseTolerance}
            onChange={(v) => set("noiseTolerance", v)}
            options={NOISE_TOLERANCE}
          />
          <FieldSelect
            id="time"
            label="Time available daily"
            value={input.timeAvailable}
            onChange={(v) => set("timeAvailable", v)}
            options={TIME_AVAILABLE}
          />
        </div>
        <div className="mt-5 flex gap-2 flex-wrap">
          <button
            type="button"
            onClick={reset}
            className="px-3.5 py-2 rounded-lg text-sm font-medium border border-[#DDE6DD] bg-white text-[#17211B] hover:border-[#063F2A] focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2"
          >
            Reset to defaults
          </button>
        </div>
      </form>

      <div aria-live="polite" aria-atomic="false">
        <h2
          className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2"
          id="results-heading"
        >
          Suggested directions to explore
        </h2>
        <p className="text-sm text-[#5E6B63] mb-5">
          {matches.length} of {totalCategories} categories ranked by your inputs.
          These are starting points, not prescriptions — every recommendation
          links to a page with realistic trade-offs.
        </p>

        <ul className="grid sm:grid-cols-2 gap-4">
          {matches.map(({ category, score }) => (
            <li key={category.id}>
              <Link
                href={category.href}
                className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
              >
                <div className="flex items-baseline justify-between gap-2 flex-wrap mb-2">
                  <p className="text-xs uppercase tracking-wider text-[#8A958E]">
                    {category.group === "dog"
                      ? "Dog breed page"
                      : category.group === "cat"
                        ? "Cat breed page"
                        : "Pet choice guide"}
                  </p>
                  <span
                    className="text-xs font-semibold text-[#063F2A] bg-[#EFF4E0] border border-[#CFE0A8] rounded-full px-2 py-0.5"
                    aria-label={`Match score ${score}`}
                  >
                    Match: {score}
                  </span>
                </div>
                <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                  {category.title}
                </p>
                <p className="text-sm text-[#2C3A2F] leading-relaxed">
                  {category.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
