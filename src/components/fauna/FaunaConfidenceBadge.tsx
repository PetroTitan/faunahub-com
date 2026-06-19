import type { FaunaConfidence } from "@/lib/fauna/types";

const LABELS: Record<FaunaConfidence, string> = {
  verified: "Verified range",
  "broad-range": "Broad / widespread",
  representative: "Representative",
  "source-review-pending": "Source review pending",
};

const STYLES: Record<FaunaConfidence, string> = {
  verified: "bg-[#E7F0E3] text-[#265634] border-[#CFE0A8]",
  "broad-range": "bg-[#EAF0F5] text-[#334D64] border-[#CBDCE8]",
  representative: "bg-[#EFF1EB] text-[#2C3A2F] border-[#DDE6DD]",
  "source-review-pending": "bg-[#F7F8F3] text-[#5E6B63] border-[#DDE6DD]",
};

/** Text-first confidence indicator for a distribution record. */
export default function FaunaConfidenceBadge({
  confidence,
  className,
}: {
  confidence: FaunaConfidence;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${STYLES[confidence]} ${className ?? ""}`}
    >
      <span aria-hidden="true">●</span>
      {LABELS[confidence]}
    </span>
  );
}
