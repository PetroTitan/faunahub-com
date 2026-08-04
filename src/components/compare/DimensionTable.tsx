import type { ComparisonDimension } from "@/lib/animal-compare";

interface DimensionTableProps {
  labelA: string;
  labelB: string;
  dimensions: ComparisonDimension[];
  caption: string;
}

/**
 * Side-by-side comparison of two animals across a set of dimensions.
 *
 * Accessibility note on the two renderings below: the wide-screen version is a
 * real `<table>` with scoped headers, and the narrow-screen version is a
 * `<dl>` of stacked cards. Only one is ever in the accessibility tree, because
 * `hidden` resolves to `display: none`, which removes an element from the tree
 * entirely — so no assistive-technology user encounters the content twice, and
 * both renderings carry the same labels. This is why the mobile view is not a
 * horizontally scrolling table: at 390px a three-column prose table is not
 * usable, and side-scrolling as the only option fails the same users twice.
 */
export default function DimensionTable({
  labelA,
  labelB,
  dimensions,
  caption,
}: DimensionTableProps) {
  if (dimensions.length === 0) return null;

  return (
    <>
      {/* Wide screens: semantic three-column table. */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-[#DDE6DD] bg-white">
        <table className="w-full text-sm border-collapse">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="w-[22%] text-left bg-[#EFF1EB] text-[#17211B] text-xs uppercase tracking-wider font-semibold px-4 py-3 border-b border-[#DDE6DD]"
              >
                What differs
              </th>
              <th
                scope="col"
                className="w-[26%] text-left bg-[#EFF4E0] text-[#063F2A] text-xs uppercase tracking-wider font-semibold px-4 py-3 border-b border-[#DDE6DD]"
              >
                {labelA}
              </th>
              <th
                scope="col"
                className="w-[26%] text-left bg-[#E6F0FA] text-[#075FA8] text-xs uppercase tracking-wider font-semibold px-4 py-3 border-b border-[#DDE6DD]"
              >
                {labelB}
              </th>
              <th
                scope="col"
                className="w-[26%] text-left bg-[#EFF1EB] text-[#17211B] text-xs uppercase tracking-wider font-semibold px-4 py-3 border-b border-[#DDE6DD]"
              >
                What it means
              </th>
            </tr>
          </thead>
          <tbody>
            {dimensions.map((dimension, index) => (
              <tr
                key={dimension.id}
                className={index % 2 === 0 ? "bg-white" : "bg-[#F7F8F3]"}
              >
                <th
                  scope="row"
                  className="align-top text-left px-4 py-3 font-semibold text-[#17211B] border-t border-[#EAF0EA]"
                >
                  {dimension.label}
                </th>
                <td className="align-top px-4 py-3 text-[#2C3A2F] border-t border-[#EAF0EA] leading-relaxed">
                  {dimension.animalAValue}
                </td>
                <td className="align-top px-4 py-3 text-[#2C3A2F] border-t border-[#EAF0EA] leading-relaxed">
                  {dimension.animalBValue}
                </td>
                <td className="align-top px-4 py-3 text-[#5E6B63] border-t border-[#EAF0EA] leading-relaxed">
                  {dimension.interpretation}
                  {dimension.caveat && (
                    <span className="block mt-1.5 text-xs text-[#8A958E]">
                      {dimension.caveat}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Narrow screens: stacked cards, one per dimension, no side-scrolling. */}
      <dl className="md:hidden space-y-3">
        <div className="sr-only">{caption}</div>
        {dimensions.map((dimension) => (
          <div
            key={dimension.id}
            className="rounded-2xl border border-[#DDE6DD] bg-white overflow-hidden"
          >
            <dt className="px-4 py-2.5 bg-[#EFF1EB] text-xs uppercase tracking-wider font-semibold text-[#17211B]">
              {dimension.label}
            </dt>
            <dd className="px-4 py-3 space-y-3 m-0">
              <div className="border-l-4 border-l-[#7BAA35] pl-3">
                <span className="block text-xs font-semibold uppercase tracking-wide text-[#063F2A] mb-0.5">
                  {labelA}
                </span>
                <span className="block text-sm text-[#2C3A2F] leading-relaxed">
                  {dimension.animalAValue}
                </span>
              </div>
              <div className="border-l-4 border-l-[#075FA8] pl-3">
                <span className="block text-xs font-semibold uppercase tracking-wide text-[#075FA8] mb-0.5">
                  {labelB}
                </span>
                <span className="block text-sm text-[#2C3A2F] leading-relaxed">
                  {dimension.animalBValue}
                </span>
              </div>
              <p className="text-sm text-[#5E6B63] leading-relaxed border-t border-[#EAF0EA] pt-2.5 mb-0">
                {dimension.interpretation}
                {dimension.caveat && (
                  <span className="block mt-1.5 text-xs text-[#8A958E]">
                    {dimension.caveat}
                  </span>
                )}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
