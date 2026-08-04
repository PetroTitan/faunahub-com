"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface FinderAnimal {
  slug: string;
  name: string;
}

export interface FinderSuggestion {
  slug: string;
  title: string;
}

interface ComparisonFinderProps {
  animals: FinderAnimal[];
  /** canonicalPairKey -> comparison slug. Order-independent by construction. */
  pairIndex: Record<string, string>;
  /** animal slug -> comparison slugs, used to suggest alternatives. */
  byAnimal: Record<string, string[]>;
  /** comparison slug -> display title, for suggestion labels. */
  titles: Record<string, string>;
}

/**
 * The only client component in the Compare Center.
 *
 * It navigates to comparisons that already exist and never invents a URL: if a
 * pair has no published page, it says so and offers real alternatives drawn
 * from the same two animals. Selecting B then A resolves to the same canonical
 * route as A then B, because the lookup key is the sorted pair.
 *
 * No account, no network request, no storage, no analytics on the selections.
 */
export default function ComparisonFinder({
  animals,
  pairIndex,
  byAnimal,
  titles,
}: ComparisonFinderProps) {
  const router = useRouter();
  const [slugA, setSlugA] = useState("");
  const [slugB, setSlugB] = useState("");
  const [status, setStatus] = useState<"idle" | "same" | "missing">("idle");

  const sorted = useMemo(
    () => [...animals].sort((a, b) => a.name.localeCompare(b.name)),
    [animals],
  );

  const suggestions: FinderSuggestion[] = useMemo(() => {
    if (status !== "missing") return [];
    const seen = new Set<string>();
    const out: FinderSuggestion[] = [];
    for (const slug of [...(byAnimal[slugA] ?? []), ...(byAnimal[slugB] ?? [])]) {
      if (seen.has(slug)) continue;
      seen.add(slug);
      const title = titles[slug];
      if (title) out.push({ slug, title });
      if (out.length >= 6) break;
    }
    return out;
  }, [status, slugA, slugB, byAnimal, titles]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!slugA || !slugB) return;
    if (slugA === slugB) {
      setStatus("same");
      return;
    }
    const key = [slugA, slugB].sort().join("--");
    const match = pairIndex[key];
    if (match) {
      router.push(`/animal-compare/${match}`);
      return;
    }
    setStatus("missing");
  }

  const nameOf = (slug: string) => sorted.find((a) => a.slug === slug)?.name ?? "";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6"
      aria-labelledby="finder-heading"
    >
      <h2 id="finder-heading" className="text-lg font-bold text-[#17211B] mb-1">
        Find a comparison
      </h2>
      <p className="text-sm text-[#5E6B63] mb-4 leading-relaxed">
        Pick two animals. The order does not matter — each pair has one page.
      </p>

      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto] sm:items-end">
        <div>
          <label
            htmlFor="finder-animal-a"
            className="block text-xs font-semibold uppercase tracking-wide text-[#063F2A] mb-1.5"
          >
            First animal
          </label>
          <select
            id="finder-animal-a"
            value={slugA}
            onChange={(event) => {
              setSlugA(event.target.value);
              setStatus("idle");
            }}
            className="w-full rounded-lg border border-[#DDE6DD] bg-white px-3 py-2.5 text-sm text-[#17211B]"
          >
            <option value="">Choose an animal</option>
            {sorted.map((animal) => (
              <option key={animal.slug} value={animal.slug}>
                {animal.name}
              </option>
            ))}
          </select>
        </div>

        <span
          aria-hidden="true"
          className="hidden sm:block pb-3 text-sm font-semibold text-[#8A958E]"
        >
          vs
        </span>

        <div>
          <label
            htmlFor="finder-animal-b"
            className="block text-xs font-semibold uppercase tracking-wide text-[#075FA8] mb-1.5"
          >
            Second animal
          </label>
          <select
            id="finder-animal-b"
            value={slugB}
            onChange={(event) => {
              setSlugB(event.target.value);
              setStatus("idle");
            }}
            className="w-full rounded-lg border border-[#DDE6DD] bg-white px-3 py-2.5 text-sm text-[#17211B]"
          >
            <option value="">Choose an animal</option>
            {sorted.map((animal) => (
              <option key={animal.slug} value={animal.slug}>
                {animal.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={!slugA || !slugB}
          className="rounded-lg bg-[#0F5A3A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#063F2A] disabled:cursor-not-allowed disabled:bg-[#8A958E]"
        >
          Compare
        </button>
      </div>

      <div aria-live="polite" className="mt-4 empty:mt-0">
        {status === "same" && (
          <p className="text-sm text-[#2C3A2F]">
            Please choose two different animals.
          </p>
        )}

        {status === "missing" && (
          <div className="rounded-xl border border-[#DDE6DD] bg-[#F7F8F3] p-4">
            <p className="text-sm text-[#2C3A2F] mb-3">
              FaunaHub does not have a {nameOf(slugA)} and {nameOf(slugB)}{" "}
              comparison yet. Comparisons are written only where the pairing is
              genuinely meaningful and both animals are already profiled, so this
              one may not be published.
            </p>
            {suggestions.length > 0 && (
              <>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#063F2A] mb-2">
                  Related comparisons that do exist
                </p>
                <ul className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <li key={suggestion.slug}>
                      <Link
                        href={`/animal-compare/${suggestion.slug}`}
                        className="inline-block rounded-full border border-[#CFE0A8] bg-[#EFF4E0] px-3 py-1.5 text-xs font-medium text-[#063F2A] transition-colors hover:bg-[#E3EDCB] hover:no-underline"
                      >
                        {suggestion.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
