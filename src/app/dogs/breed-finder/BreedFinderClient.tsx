"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { FinderBreed, FinderFacet } from "@/lib/pet-intelligence/finder";

/**
 * Breed Finder — a filter over the registry, not a recommender.
 *
 * It narrows a list by attributes a registry publishes. It does not score
 * breeds, rank them, or suggest one: the results are alphabetical and stay
 * alphabetical, because any other order would read as a recommendation, and
 * FaunaHub has no basis for recommending one breed over another to a household
 * it knows nothing about.
 *
 * All filtering is in-memory over a projection embedded in the prerendered
 * page. Nothing is fetched, nothing is sent anywhere, and the text box value
 * never reaches a URL — consistent with Global Search on this site.
 */
export default function BreedFinderClient({
  breeds,
  facets,
  speciesWord,
}: {
  breeds: FinderBreed[];
  facets: FinderFacet[];
  speciesWord: string;
}) {
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [query, setQuery] = useState("");

  const activeCount = Object.values(selected).reduce((n, v) => n + v.length, 0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return breeds
      .filter((breed) => {
        if (q && !breed.search.includes(q)) return false;
        for (const [facetId, values] of Object.entries(selected)) {
          if (values.length === 0) continue;
          const actual =
            facetId === "sizeClass"
              ? breed.sizeClass
              : facetId === "coatLength"
                ? breed.coatLength
                : facetId === "registryGroup"
                  ? breed.group
                  : breed.traits[facetId];
          // A breed with no recorded value is EXCLUDED by an active filter
          // rather than quietly passed through. Passing it would tell the
          // reader it matched, which is a claim the registry cannot make.
          if (!actual || !values.includes(actual)) return false;
        }
        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [breeds, selected, query]);

  function toggle(facetId: string, value: string) {
    setSelected((prev) => {
      const current = prev[facetId] ?? [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [facetId]: next };
    });
  }

  function reset() {
    setSelected({});
    setQuery("");
  }

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-8 mt-8">
      <div className="lg:sticky lg:top-6 self-start space-y-5">
        <div>
          <label
            htmlFor="breed-finder-search"
            className="block text-sm font-semibold text-[#17211B] mb-1.5"
          >
            Search by name
          </label>
          <input
            id="breed-finder-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`e.g. ${breeds[0]?.name ?? ""}`}
            className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-[#DDE6DD] bg-white text-sm text-[#17211B] focus:outline-none focus:ring-2 focus:ring-[#7BAA35] focus:border-[#7BAA35]"
          />
        </div>

        {facets.map((facet) => (
          <fieldset key={facet.id} className="border-0 p-0 m-0">
            <legend className="text-sm font-semibold text-[#17211B] mb-1.5 p-0">
              {facet.label}
            </legend>
            {facet.partial && (
              <p className="text-xs text-[#8A958E] mb-1.5 mt-0">
                Recorded for {facet.covered} of {facet.total} breeds — filtering hides the rest.
              </p>
            )}
            <div className="flex flex-wrap gap-1.5">
              {facet.options.map((option) => {
                const on = (selected[facet.id] ?? []).includes(option.value);
                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(facet.id, option.value)}
                    className={`min-h-[44px] sm:min-h-0 sm:py-1.5 px-3 rounded-full border text-xs font-medium transition-colors ${
                      on
                        ? "bg-[#063F2A] border-[#063F2A] text-white"
                        : "bg-white border-[#DDE6DD] text-[#2C3A2F] hover:border-[#7BAA35]"
                    }`}
                  >
                    {option.label}{" "}
                    <span className={on ? "text-[#CFE0A8]" : "text-[#8A958E]"}>
                      {option.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}

        {(activeCount > 0 || query) && (
          <button
            type="button"
            onClick={reset}
            className="min-h-[44px] w-full rounded-lg border border-[#DDE6DD] bg-white px-3 text-sm font-medium text-[#063F2A] hover:border-[#7BAA35]"
          >
            Clear all filters
          </button>
        )}
      </div>

      <div>
        <p className="text-sm text-[#5E6B63] mb-4" role="status" aria-live="polite">
          Showing {results.length} of {breeds.length} {speciesWord} breeds
          {activeCount > 0 || query ? " matching your filters" : ""}. Results are alphabetical —
          FaunaHub does not rank breeds.
        </p>

        {results.length === 0 ? (
          <div className="border border-[#DDE6DD] rounded-xl bg-white p-6">
            <p className="text-sm text-[#17211B] m-0 font-medium">
              No breed in the registry matches every filter.
            </p>
            <p className="text-sm text-[#5E6B63] mt-2 mb-0">
              That is a real answer about FaunaHub&apos;s current coverage, not a suggestion that no
              such {speciesWord} exists. Try removing a filter.
            </p>
          </div>
        ) : (
          <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 list-none p-0 m-0">
            {results.map((breed) => (
              <li key={breed.slug}>
                <Link
                  href={breed.url}
                  className="card overflow-hidden hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline flex flex-col h-full"
                >
                  <div className="relative w-full aspect-[4/3] bg-[#EFF1EB] border-b border-[#DDE6DD] overflow-hidden">
                    {breed.image ? (
                      <Image
                        src={breed.image.src}
                        alt={breed.image.alt}
                        fill
                        sizes="(min-width: 1280px) 240px, (min-width: 640px) 45vw, 90vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center text-2xl text-[#8A958E]"
                      >
                        {breed.name.slice(0, 1)}
                      </span>
                    )}
                  </div>
                  <div className="p-3 flex-1">
                    <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] m-0">
                      {breed.name}
                    </h3>
                    <p className="text-xs text-[#5E6B63] mt-1 mb-0">
                      {[
                        breed.sizeClass
                          ? breed.sizeClass.charAt(0).toUpperCase() + breed.sizeClass.slice(1)
                          : undefined,
                        breed.coatLength ? `${breed.coatLength} coat` : undefined,
                        breed.weightMaxKg ? `to ${breed.weightMaxKg} kg` : undefined,
                      ]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    {breed.group && (
                      <p
                        className="text-[11px] text-[#8A958E] mt-0.5 mb-0 truncate"
                        title={breed.group}
                      >
                        {breed.group}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
