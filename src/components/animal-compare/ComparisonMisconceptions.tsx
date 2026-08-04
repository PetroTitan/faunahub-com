import type { Misconception } from "@/lib/animal-compare/intelligence";

/**
 * The mistaken beliefs this pair actually attracts.
 *
 * Each entry is stated as the belief itself, and the framing sentence above the
 * list makes clear these are the errors — not FaunaHub's position. That framing
 * carries real weight: a bare bullet list of mistaken claims is exactly the kind
 * of block an AI summariser can lift as if it were the page's assertion, so the
 * list is introduced explicitly and every item is prefixed with a visible
 * "Mistaken belief" label rather than relying on the heading alone for context.
 *
 * Returns null rather than an empty shell when a pair has no documented
 * misconception. An empty section would be filler.
 */
export default function ComparisonMisconceptions({
  misconceptions,
}: {
  misconceptions: Misconception[];
}) {
  if (misconceptions.length === 0) return null;

  return (
    <section aria-labelledby="misconceptions-heading" className="pt-8">
      <h2
        id="misconceptions-heading"
        className="text-xl sm:text-2xl font-bold text-[#17211B] mb-1"
      >
        Common misconceptions
      </h2>
      <p className="text-sm text-[#5E6B63] mb-4">
        Beliefs that come up often about this pair, and are not correct. The
        sections above set out what is actually the case.
      </p>

      <ul className="space-y-2.5 list-none p-0">
        {misconceptions.map((item) => (
          <li
            key={item.claim}
            className="rounded-xl border border-[#DDE6DD] border-l-4 border-l-[#075FA8] bg-white px-4 py-3"
          >
            <span className="block text-xs font-semibold uppercase tracking-wide text-[#075FA8] mb-0.5">
              Mistaken belief
            </span>
            <span className="block text-base text-[#2C3A2F] leading-relaxed">
              {item.claim}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
