import Link from "next/link";
import { COMPARE_BASE } from "@/lib/animal-compare";
import type { FrequentlyConfusedAnimal } from "@/lib/animal-compare/intelligence";

/**
 * Third animals that are themselves confused with one of this pair.
 *
 * Every entry exists because a published comparison already covers that
 * confusion, so both links on each card are live routes and the stated reason is
 * not composed prose — it is which animal the confusion involves plus the
 * relationship of the comparison that documents it.
 *
 * Two links per card is deliberate: the profile answers "what is this animal",
 * the comparison answers "how do I tell it from the one I was reading about",
 * and those are different questions a reader arrives with.
 */
export default function FrequentlyConfusedAnimals({
  animals,
}: {
  animals: FrequentlyConfusedAnimal[];
}) {
  if (animals.length === 0) return null;

  return (
    <section aria-labelledby="frequently-confused-heading" className="pt-8">
      <h2
        id="frequently-confused-heading"
        className="text-xl sm:text-2xl font-bold text-[#17211B] mb-1"
      >
        Frequently confused with these animals
      </h2>
      <p className="text-sm text-[#5E6B63] mb-4">
        Other animals that get mistaken for one of the two on this page, each
        with the comparison that separates them.
      </p>

      <ul className="grid gap-3 sm:grid-cols-2 list-none p-0">
        {animals.map((animal) => (
          <li
            key={animal.slug}
            className="rounded-2xl border border-[#DDE6DD] bg-white p-4"
          >
            <p className="mb-1 text-base font-semibold text-[#17211B]">
              {animal.name}
            </p>
            <p className="mb-3 text-sm leading-relaxed text-[#5E6B63]">
              {animal.relationshipLabel} with the{" "}
              {animal.confusedWithName.toLowerCase()}.
            </p>
            <p className="m-0 flex flex-wrap gap-x-3 gap-y-1 text-sm">
              <Link
                href={animal.profilePath}
                className="font-medium text-[#063F2A]"
              >
                {animal.name} profile
              </Link>
              <Link
                href={`${COMPARE_BASE}/${animal.comparisonSlug}`}
                className="font-medium text-[#075FA8]"
              >
                {animal.comparisonTitle}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
