import type { CoverageStatus } from "@/lib/taxonomy/types";

const LABELS: Record<CoverageStatus, string> = {
  strong: "Strong coverage",
  partial: "Partial coverage",
  thin: "Thin coverage",
  planned: "Planned expansion",
};

const STYLES: Record<CoverageStatus, string> = {
  strong: "bg-[#E7F0E3] text-[#265634] border-[#CFE0A8]",
  partial: "bg-[#EAF0F5] text-[#334D64] border-[#CBDCE8]",
  thin: "bg-[#FBF1E6] text-[#7E3C0E] border-[#F0D8BE]",
  planned: "bg-[#F7F8F3] text-[#5E6B63] border-[#DDE6DD]",
};

/** Text-first coverage indicator (meaning never conveyed by colour alone). */
export default function CoverageBadge({
  status,
  className,
}: {
  status: CoverageStatus;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${STYLES[status]} ${className ?? ""}`}
    >
      <span aria-hidden="true">●</span>
      {LABELS[status]}
    </span>
  );
}
