"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  RiskLevelBadge,
  SafetyBadge,
} from "@/components/food-safety/RiskBadge";
import {
  FOOD_SAFETY_ARTICLES,
  type FoodSafetyArticle,
  type Species,
} from "@/lib/food-safety/data";

type SpeciesFilter = "any" | Species;

const SPECIES_LABEL: Record<Species, string> = {
  dog: "Dogs",
  cat: "Cats",
};

const SPECIES_HUB: Record<Species, string> = {
  dog: "/dogs/food",
  cat: "/cats/food",
};

function matches(article: FoodSafetyArticle, query: string): boolean {
  if (!query) return true;
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    article.foodName.toLowerCase().includes(q) ||
    article.pageQuestion.toLowerCase().includes(q) ||
    article.searchAliases.some((alias) => alias.toLowerCase().includes(q))
  );
}

export default function CanMyPetEatThisClient() {
  const [query, setQuery] = useState("");
  const [species, setSpecies] = useState<SpeciesFilter>("any");

  const results = useMemo(() => {
    return FOOD_SAFETY_ARTICLES.filter((a) => {
      if (species !== "any" && a.species !== species) return false;
      return matches(a, query);
    });
  }, [query, species]);

  const trimmedQuery = query.trim();
  const hasQuery = trimmedQuery.length > 0;
  const hasResults = results.length > 0;

  return (
    <section
      aria-labelledby="lookup-heading"
      className="not-prose mt-2"
    >
      <h2
        id="lookup-heading"
        className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-3"
      >
        Look up a food
      </h2>

      <div className="card p-5 sm:p-6 space-y-4 mb-6">
        <div>
          <label
            htmlFor="food-search"
            className="block text-sm font-medium text-[#17211B] mb-1.5"
          >
            Food name
          </label>
          <input
            id="food-search"
            type="search"
            inputMode="search"
            autoComplete="off"
            placeholder="e.g. chocolate, apples, tuna"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2.5 border border-[#DDE6DD] rounded-lg text-base text-[#17211B] focus:outline-none focus:border-[#063F2A] focus:ring-1 focus:ring-[#063F2A]"
          />
          <p className="text-xs text-[#8A958E] mt-1.5">
            We currently cover {FOOD_SAFETY_ARTICLES.length} foods across dogs and
            cats. More are being added.
          </p>
        </div>

        <fieldset>
          <legend className="block text-sm font-medium text-[#17211B] mb-1.5">
            Species
          </legend>
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["any", "Any"],
                ["dog", "Dogs"],
                ["cat", "Cats"],
              ] as [SpeciesFilter, string][]
            ).map(([value, label]) => {
              const selected = species === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setSpecies(value)}
                  aria-pressed={selected}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 ${
                    selected
                      ? "bg-[#063F2A] text-white border-[#063F2A]"
                      : "bg-white text-[#17211B] border-[#DDE6DD] hover:border-[#063F2A]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div aria-live="polite" aria-atomic="false" className="space-y-3">
        {!hasResults && (
          <div className="rounded-xl border border-[#DDE6DD] bg-[#F7F8F3] p-5 text-sm text-[#2C3A2F]">
            <p className="font-medium text-[#17211B] mb-1">
              No matching food in our current guides
            </p>
            <p className="leading-relaxed">
              {hasQuery
                ? `We do not yet have a published page for "${trimmedQuery}". If you are worried about something your pet ate, do not wait — contact a licensed veterinarian or animal poison helpline.`
                : "Try searching for a specific food (for example, 'chocolate' or 'cheese')."}
            </p>
            <p className="mt-2 leading-relaxed">
              You can also browse the full{" "}
              <Link
                href="/dogs/food"
                className="text-[#063F2A] hover:underline font-medium"
              >
                dog food safety guides
              </Link>{" "}
              or{" "}
              <Link
                href="/cats/food"
                className="text-[#063F2A] hover:underline font-medium"
              >
                cat food safety guides
              </Link>
              .
            </p>
          </div>
        )}

        {hasResults && (
          <p className="text-sm text-[#5E6B63]">
            {results.length} {results.length === 1 ? "match" : "matches"}{" "}
            found{species !== "any" ? ` for ${SPECIES_LABEL[species].toLowerCase()}` : ""}
            {hasQuery ? ` matching "${trimmedQuery}"` : ""}.
          </p>
        )}

        <ul className="grid sm:grid-cols-2 gap-4">
          {results.map((a) => (
            <li key={`${a.species}-${a.slug}`}>
              <Link
                href={`${SPECIES_HUB[a.species]}/${a.slug}`}
                className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
              >
                <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                  {SPECIES_LABEL[a.species]} · {a.foodName}
                </p>
                <p className="text-base font-semibold text-[#17211B] mb-3 leading-snug">
                  {a.pageQuestion}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <SafetyBadge
                    classification={a.safetyClassification}
                    size="sm"
                  />
                  <RiskLevelBadge level={a.riskLevel} size="sm" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
