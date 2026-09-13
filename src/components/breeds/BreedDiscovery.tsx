import Link from "next/link";
import { collectionPath, publishedCollections } from "@/lib/pet-intelligence/collections";
import { BREED_RANKINGS, rankingPath } from "@/lib/pet-intelligence/rankings";
import { PUBLISHED_COMPARISONS, comparisonPath } from "@/lib/pet-intelligence/comparisons";
import type { BreedSpecies } from "@/lib/pet-intelligence";

/**
 * The Breed Center's discovery layer: every derived surface, grouped by axis.
 *
 * All three lists are generated from the registry, so a new collection, ranking
 * or comparison appears here the moment it qualifies — there is no curated list
 * to fall out of date. Comparisons are capped at a sample because there are
 * hundreds; the rest are reachable from each breed's own profile, which links
 * the comparisons it appears in.
 */
export default function BreedDiscovery({ species }: { species: BreedSpecies }) {
  const collections = publishedCollections().filter((c) => c.species === species);
  const rankings = BREED_RANKINGS.filter((r) => r.species === species);
  const comparisons = PUBLISHED_COMPARISONS.filter((p) => p.species === species);
  const speciesWord = species === "dog" ? "dog" : "cat";

  const byAxis = [
    { axis: "sizeClass", label: "By adult size" },
    { axis: "coatLength", label: "By coat" },
    { axis: "registryGroup", label: "By registry group" },
    { axis: "trait", label: "By recorded trait" },
  ] as const;

  if (collections.length === 0 && comparisons.length === 0) return null;

  return (
    <section aria-labelledby="breed-discovery-heading" className="mt-14" id="explore">
      <h2
        id="breed-discovery-heading"
        className="text-xl sm:text-2xl font-semibold text-[#17211B] mb-2"
      >
        Explore by what the registries record
      </h2>
      <p className="text-sm text-[#5E6B63] mb-6 max-w-3xl">
        Each of these is a query over the same {speciesWord} breed data, not a curated list.
        Membership changes automatically as the registry does, and nothing here is ranked or scored
        unless the page says it is measuring something.
      </p>

      <div className="space-y-7">
        {byAxis.map(({ axis, label }) => {
          const group = collections.filter((c) => c.axis === axis);
          if (group.length === 0) return null;
          return (
            <div key={axis}>
              <h3 className="text-sm font-bold text-[#063F2A] uppercase tracking-wider mb-2.5">
                {label}
              </h3>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {group.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={collectionPath(c)}
                      className="inline-flex items-center min-h-[36px] px-3 rounded-lg border border-[#DDE6DD] bg-white text-sm text-[#2C3A2F] hover:border-[#7BAA35] hover:text-[#063F2A] hover:no-underline transition-colors"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {rankings.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-[#063F2A] uppercase tracking-wider mb-1.5">
              Measured rankings
            </h3>
            <p className="text-xs text-[#5E6B63] mb-2.5 max-w-2xl">
              The only rankings FaunaHub publishes are ones with a published measurement behind
              them. There is no smartest, strongest or healthiest list, because none of those has a
              metric.
            </p>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {rankings.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={rankingPath(r)}
                    className="inline-flex items-center min-h-[36px] px-3 rounded-lg border border-[#DDE6DD] bg-white text-sm text-[#2C3A2F] hover:border-[#7BAA35] hover:text-[#063F2A] hover:no-underline transition-colors"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {comparisons.length > 0 && (
          <div id="comparisons">
            <h3 className="text-sm font-bold text-[#063F2A] uppercase tracking-wider mb-1.5">
              Breed comparisons
            </h3>
            <p className="text-xs text-[#5E6B63] mb-2.5 max-w-2xl">
              {comparisons.length} published pair
              {comparisons.length === 1 ? "" : "s"}, each one two breeds their registry lists as
              related to each other. Every comparison shows both breeds&apos; published values and
              picks no winner. Each breed&apos;s own profile links the comparisons it appears in.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 list-none p-0 m-0">
              {comparisons.slice(0, 12).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={comparisonPath(p)}
                    className="card block p-3 text-sm font-medium text-[#17211B] hover:border-[#CFE0A8] hover:shadow-sm transition-all hover:no-underline"
                  >
                    {p.a.name} <span className="text-[#5E6B63] font-normal">vs</span> {p.b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
