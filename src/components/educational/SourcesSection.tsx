import {
  sourceTypeLabel,
  type SourceLink,
} from "@/lib/educational/types";

interface SourcesSectionProps {
  sources: SourceLink[];
  /** Intro paragraph shown above the list. */
  intro?: string;
  /** Optional accessible-name override for the heading. */
  headingId?: string;
}

/**
 * Renders a consistent "Sources and further reading" block.
 * External links open in a new tab.
 */
export default function SourcesSection({
  sources,
  intro = "Authoritative references used for general educational context. External links open in a new tab. These sources do not endorse FaunaHub.",
  headingId = "sources-heading",
}: SourcesSectionProps) {
  if (sources.length === 0) return null;
  return (
    <section
      aria-labelledby={headingId}
      className="not-prose rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6"
    >
      <h2
        id={headingId}
        className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2"
      >
        Sources and further reading
      </h2>
      <p className="text-xs text-[#5E6B63] mb-4 leading-relaxed">{intro}</p>
      <ul className="space-y-3">
        {sources.map((source) => (
          <li
            key={source.url}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
          >
            <span className="inline-flex items-center self-start px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#EFF4E0] text-[#063F2A] border border-[#CFE0A8] uppercase tracking-wide whitespace-nowrap">
              {sourceTypeLabel(source.type)}
            </span>
            <span className="text-sm text-[#2C3A2F] leading-relaxed">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#063F2A] font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2 rounded-sm"
              >
                {source.label}
              </a>
              {source.note && (
                <span className="text-[#5E6B63]"> — {source.note}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
