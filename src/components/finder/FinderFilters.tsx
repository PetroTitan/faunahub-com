"use client";

/**
 * The facet controls, shared by the desktop sidebar and the mobile drawer.
 *
 * One implementation for both, so the two can never drift into offering
 * different filters. The desktop panel and the drawer differ only in the
 * container they are rendered into.
 *
 * Accessibility notes that are load-bearing rather than decorative:
 *  - Each facet is a real `<fieldset>` with a `<legend>`, so a screen reader
 *    announces which group a checkbox belongs to. A heading plus loose
 *    checkboxes would not.
 *  - The controls are native `<input type="checkbox">`, visually restyled but
 *    never replaced. Keyboard behaviour, the accessibility tree and forced-
 *    colours mode all come for free, and there is no `role="checkbox"` div
 *    reimplementing space-to-toggle badly.
 *  - Every value carries a visible count. State is never signalled by colour
 *    alone: a selected row changes its border, its background AND shows a tick.
 */
import { CheckIcon } from "./icons";
import type { FinderFacet } from "@/lib/finder/types";
import type { FinderSelection } from "@/lib/finder/filter";

export interface FinderFiltersProps {
  facets: FinderFacet[];
  selection: FinderSelection;
  /** Live counts per facet id -> value -> how many results it would produce. */
  counts: Record<string, Record<string, number>>;
  onToggle: (facetId: string, value: string) => void;
  /** Distinguishes the two rendering contexts in the input ids. Two copies of
   * the same checkbox on one page must not share an id, or clicking a label in
   * the drawer would toggle the sidebar's control. */
  idPrefix: string;
}

export default function FinderFilters({
  facets,
  selection,
  counts,
  onToggle,
  idPrefix,
}: FinderFiltersProps) {
  return (
    <div className="space-y-6">
      {facets.map((facet) => {
        const chosen = selection[facet.id] ?? [];
        const facetCounts = counts[facet.id] ?? {};
        return (
          <fieldset key={facet.id} className="border-0 p-0 m-0">
            <legend className="mb-1 text-sm font-bold text-[#17211B]">{facet.label}</legend>
            <p className="mb-3 text-xs leading-snug text-[#5E6B63]">{facet.description}</p>

            <ul className="space-y-1.5">
              {facet.values.map((value) => {
                const id = `${idPrefix}-${facet.id}-${value.value}`;
                const selected = chosen.includes(value.value);
                const available = facetCounts[value.value] ?? 0;
                return (
                  <li key={value.value}>
                    <label
                      htmlFor={id}
                      className={[
                        "flex min-h-[44px] cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2 text-sm transition-colors",
                        selected
                          ? "border-[#063F2A] bg-[#EFF4E0] font-semibold text-[#063F2A]"
                          : available === 0
                            // A value that cannot narrow anything further is
                            // recessed but never removed: a chip that vanishes
                            // as you filter makes the collection look smaller
                            // than it is. The recession is a lighter BORDER and
                            // a muted-but-AA text colour, not opacity — an
                            // earlier `opacity-55` on the whole row measured
                            // 2.6:1 on the label and failed AA in 16 places.
                            // The state is never signalled by colour alone
                            // either: the visible count reads 0.
                            ? "border-[#EAF0EA] bg-[#FBFCFA] text-[#5E6B63]"
                            : "border-[#DDE6DD] bg-white text-[#2C3A2F] hover:border-[#CFE0A8] hover:bg-[#F7F8F3]",
                      ].join(" ")}
                    >
                      <input
                        id={id}
                        type="checkbox"
                        checked={selected}
                        onChange={() => onToggle(facet.id, value.value)}
                        className="sr-only peer"
                      />
                      <span
                        aria-hidden="true"
                        className={[
                          "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded border-2 transition-colors",
                          selected
                            ? "border-[#063F2A] bg-[#063F2A] text-white"
                            : "border-[#8A958E] bg-white text-transparent",
                          "peer-focus-visible:ring-2 peer-focus-visible:ring-[#063F2A] peer-focus-visible:ring-offset-2",
                        ].join(" ")}
                      >
                        {selected && <CheckIcon />}
                      </span>
                      <span className="flex-1 leading-snug">{value.label}</span>
                      <span
                        className="shrink-0 text-xs tabular-nums text-[#5E6B63]"
                        aria-hidden="true"
                      >
                        {available}
                      </span>
                      {/* The count is repeated for assistive technology in a
                          form that reads as a sentence rather than a stray
                          number after the label. */}
                      <span className="sr-only">{available} matching animals</span>
                    </label>
                  </li>
                );
              })}
            </ul>

            {!facet.complete && (
              <p className="mt-2 text-xs leading-snug text-[#5E6B63]">
                Recorded for {facet.covered} of {facet.total} profiles. Filtering on this
                axis hides{" "}
                {facet.total - facet.covered === 1
                  ? "the 1 animal"
                  : `the ${facet.total - facet.covered} animals`}{" "}
                FaunaHub has not filed here yet.
              </p>
            )}
          </fieldset>
        );
      })}
    </div>
  );
}
