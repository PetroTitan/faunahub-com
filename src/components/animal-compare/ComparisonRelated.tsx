import Link from "next/link";
import type { RelatedComparison } from "@/lib/animal-compare/intelligence";

/**
 * Related comparisons, as cards rather than a pill cloud.
 *
 * Each card carries the reason it is here — shares an animal, same
 * relationship, editorially chosen. That label is what makes the block
 * navigable rather than decorative: a reader scanning eight titles cannot tell
 * why any of them is present, and a screen-reader user hearing eight link texts
 * in a row has even less to go on.
 *
 * The connection label sits inside the link's accessible name deliberately, so
 * "Rat vs Squirrel, more on the rat" is what gets announced.
 */
export default function ComparisonRelated({
  related,
}: {
  related: RelatedComparison[];
}) {
  if (related.length === 0) return null;

  return (
    <section aria-labelledby="related-comparisons-heading" className="pt-8">
      <h2
        id="related-comparisons-heading"
        className="text-xl sm:text-2xl font-bold text-[#17211B] mb-1"
      >
        Related comparisons
      </h2>
      <p className="text-sm text-[#5E6B63] mb-4">
        Where readers of this page usually go next.
      </p>

      <ul className="grid gap-2.5 sm:grid-cols-2 list-none p-0">
        {related.map((item) => (
          <li key={item.slug}>
            <Link
              href={item.path}
              className="group block h-full rounded-xl border border-[#DDE6DD] bg-white px-4 py-3 transition-colors hover:border-[#CFE0A8] hover:bg-[#F7F9F2] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-1"
            >
              <span className="block text-sm font-semibold text-[#063F2A]">
                {item.title}
              </span>
              <span className="mt-0.5 block text-xs text-[#5E6B63]">
                {item.connection}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
