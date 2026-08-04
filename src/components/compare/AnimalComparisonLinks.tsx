import Link from "next/link";
import { getComparisonsForAnimal } from "@/lib/animal-compare";

/**
 * "Compare with related animals" cross-links for an animal profile.
 *
 * Resolved from the comparison registry rather than hand-maintained per
 * profile, so a new comparison surfaces on both animals' pages automatically
 * and no profile can link to a comparison that does not exist. Renders nothing
 * when the animal has no published comparison, which is the normal case for
 * most of the 625 profiles.
 *
 * `AnimalProfileLayout` renders this for the ~598 profiles that use it. The
 * remaining profiles are hand-built pages and include it directly.
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
  const comparisons = getComparisonsForAnimal(slug).slice(0, limit);
  if (comparisons.length === 0) return null;

  const Heading = headingLevel;

  return (
    <>
      <Heading>Compare With Related Animals</Heading>
      <p>
        Side-by-side comparisons covering identification, taxonomy, habitat and
        behaviour.
      </p>
      <ul className="not-prose flex flex-wrap gap-2 list-none p-0 mt-3">
        {comparisons.map((record) => (
          <li key={record.slug}>
            <Link
              href={`/animal-compare/${record.slug}`}
              className="inline-block rounded-full border border-[#CFE0A8] bg-[#EFF4E0] px-3.5 py-1.5 text-sm font-medium text-[#063F2A] transition-colors hover:bg-[#E3EDCB] hover:no-underline"
            >
              {record.title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/animal-compare"
            className="inline-block rounded-full border border-[#DDE6DD] bg-white px-3.5 py-1.5 text-sm text-[#2C3A2F] transition-colors hover:border-[#CFE0A8] hover:no-underline"
          >
            All animal comparisons
          </Link>
        </li>
      </ul>
    </>
  );
}
