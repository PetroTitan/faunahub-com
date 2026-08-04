import type { KeyDifferenceRow } from "@/lib/animal-compare/intelligence";

/**
 * The summary box: the few differences that decide the comparison.
 *
 * Rendered as a description list rather than a table because each entry is a
 * label with two values, not a grid a reader scans in two directions — and a
 * `dl` degrades to a sensible reading order on a narrow screen without needing a
 * second markup path. The full grid lives further down in the comparison table.
 *
 * The two animals are distinguished by a visible name on every value, never by
 * colour alone: the left border is decoration, and removing all colour from this
 * component leaves it completely readable.
 */
export default function ComparisonKeyDifferences({
  labelA,
  labelB,
  rows,
  summaryPoints,
}: {
  labelA: string;
  labelB: string;
  rows: KeyDifferenceRow[];
  /** One-line differences, shown under the cards so the section is not split. */
  summaryPoints: string[];
}) {
  if (rows.length === 0 && summaryPoints.length === 0) return null;

  return (
    <section aria-labelledby="key-differences-heading" className="pt-8">
      <h2
        id="key-differences-heading"
        className="text-xl sm:text-2xl font-bold text-[#17211B] mb-1"
      >
        Key differences at a glance
      </h2>
      <p className="text-sm text-[#5E6B63] mb-4">
        The distinctions that matter most, before the detail.
      </p>

      <dl className="grid gap-3 sm:grid-cols-2">
        {rows.map((row) => (
          <div
            key={row.id}
            className="rounded-2xl border border-[#DDE6DD] bg-white overflow-hidden"
          >
            <dt className="px-4 py-2.5 bg-[#EFF1EB] text-xs font-semibold uppercase tracking-wider text-[#17211B]">
              {row.label}
            </dt>
            <dd className="m-0 px-4 py-3 space-y-2.5">
              <div className="border-l-4 border-l-[#7BAA35] pl-3">
                <span className="block text-xs font-semibold uppercase tracking-wide text-[#063F2A]">
                  {labelA}
                </span>
                <span className="block text-sm text-[#2C3A2F] leading-relaxed">
                  {row.animalAValue}
                </span>
              </div>
              <div className="border-l-4 border-l-[#075FA8] pl-3">
                <span className="block text-xs font-semibold uppercase tracking-wide text-[#075FA8]">
                  {labelB}
                </span>
                <span className="block text-sm text-[#2C3A2F] leading-relaxed">
                  {row.animalBValue}
                </span>
              </div>
              {row.interpretation && (
                <p className="mb-0 border-t border-[#EAF0EA] pt-2 text-sm text-[#5E6B63] leading-relaxed">
                  {row.interpretation}
                </p>
              )}
            </dd>
          </div>
        ))}
      </dl>

      {summaryPoints.length > 0 && (
        <ul className="mt-4 space-y-2 list-none p-0">
          {summaryPoints.map((point) => (
            <li
              key={point}
              className="relative pl-5 text-base leading-relaxed text-[#2C3A2F] before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#7BAA35]"
            >
              {point}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
