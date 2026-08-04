/**
 * The direct answer, placed above the fold.
 *
 * This is the block a featured snippet or an AI summary will lift, so it is a
 * single unstyled-inside paragraph under one real heading: no nested emphasis,
 * no split sentences, nothing an extractor has to reassemble. The heading is a
 * genuine `h2` rather than a styled `div`, because the extraction target and the
 * accessibility target are the same thing here.
 */
export default function ComparisonQuickAnswer({ answer }: { answer: string }) {
  return (
    <section
      aria-labelledby="quick-answer-heading"
      className="rounded-2xl border border-[#CFE0A8] bg-[#EFF4E0] p-5 sm:p-6"
    >
      <h2
        id="quick-answer-heading"
        className="text-xs font-semibold uppercase tracking-wider text-[#063F2A] mb-2"
      >
        Quick answer
      </h2>
      <p className="text-base sm:text-lg text-[#17211B] leading-relaxed">
        {answer}
      </p>
    </section>
  );
}
