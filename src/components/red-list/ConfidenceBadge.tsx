import type { RedListDataConfidence } from "@/lib/red-list/types";

interface ConfidenceBadgeProps {
  confidence: RedListDataConfidence;
  className?: string;
}

const LABELS: Record<RedListDataConfidence, string> = {
  verified: "Verified",
  partial: "Partial review",
  "source-review-pending": "Source review pending",
};

const STYLES: Record<RedListDataConfidence, string> = {
  verified: "bg-[#E7F0E3] text-[#265634] border-[#CFE0A8]",
  partial: "bg-[#EFF1EB] text-[#2C3A2F] border-[#DDE6DD]",
  "source-review-pending": "bg-[#F7F8F3] text-[#5E6B63] border-[#DDE6DD]",
};

/**
 * Small, text-first data-confidence indicator. Uses words, not colour alone,
 * so the freshness/confidence of a record is always legible.
 */
export default function ConfidenceBadge({
  confidence,
  className,
}: ConfidenceBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${STYLES[confidence]} ${className ?? ""}`}
    >
      <span aria-hidden="true">●</span>
      {LABELS[confidence]}
    </span>
  );
}
