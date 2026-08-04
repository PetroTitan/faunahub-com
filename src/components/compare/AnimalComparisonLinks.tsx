import Link from "next/link";
import {
  getFeaturedComparisonsForAnimal,
  relationshipLabel,
} from "@/lib/animal-compare/intelligence";
import { getComparisonsForAnimal } from "@/lib/animal-compare";

/**
 * "Compare with related animals" cross-links for an animal profile.
 *
 * Resolved from the comparison registry rather than hand-maintained per
 * profile, so a new comparison surfaces on both animals' pages automatically
 * and no profile can link to a comparison that does not exist. Renders nothing
 * when the animal has no published comparison, which is the normal case for
 * most of the 640-odd profiles.
 *
 * Ordering is by relationship, not registry order: a reader on an animal profile
 * is usually trying to work out which animal they are looking at, so
 * identification pairings come before ecology ones. Widely compared animals are
 * capped rather than listed exhaustively — a profile with thirty comparisons
 * would otherwise end in a link farm, and the count line points at the full set.
 *
 * `AnimalProfileLayout` renders this for the profiles that use it; the
 * hand-built profiles include it directly.
 */
export default function AnimalComparisonLinks({
  slug,
  /** Cap so a widely compared animal does not turn its profile into a link farm. */
  limit = 6,
  headingLevel = "h2",
}: {
  slug: string;
  limit?: number;
  headingLevel?: "h2" | "h3";
}) {
  const comparisons = getFeaturedComparisonsForAnimal(slug, limit);
  if (comparisons.length === 0) return null;

  const total = getComparisonsForAnimal(slug).length;
  const Heading = headingLevel;

  return (
    <>
      <Heading>Compare With Related Animals</Heading>
      <p>
        Side-by-side comparisons covering identification, taxonomy, habitat and
        behaviour.
      </p>
      <ul className="not-prose grid gap-2.5 sm:grid-cols-2 list-none p-0 mt-3">
        {comparisons.map((record) => (
          <li key={record.slug}>
            <Link
              href={`/animal-compare/${record.slug}`}
              className="block h-full rounded-xl border border-[#DDE6DD] bg-white px-4 py-3 transition-colors hover:border-[#CFE0A8] hover:bg-[#F7F9F2] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-1"
            >
              <span className="block text-sm font-semibold text-[#063F2A]">
                {record.title}
              </span>
              <span className="mt-0.5 block text-xs text-[#5E6B63]">
                {relationshipLabel(record.relationship)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="not-prose mt-3 text-sm text-[#5E6B63]">
        {total > comparisons.length
          ? `${total} comparisons include this animal. `
          : null}
        <Link href="/animal-compare" className="font-medium text-[#063F2A]">
          Browse the Animal Compare Center
        </Link>
      </p>
    </>
  );
}
