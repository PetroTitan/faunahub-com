import type { FutureBatch } from "@/lib/taxonomy/types";

const PRIORITY_STYLE: Record<FutureBatch["priority"], string> = {
  high: "bg-[#FBF1E6] text-[#7E3C0E] border-[#F0D8BE]",
  medium: "bg-[#EAF0F5] text-[#334D64] border-[#CBDCE8]",
  low: "bg-[#F7F8F3] text-[#5E6B63] border-[#DDE6DD]",
};

const STATUS_LABEL: Record<FutureBatch["status"], string> = {
  planned: "Planned",
  "ready-for-research": "Ready for research",
  blocked: "Blocked",
  complete: "Complete",
};

const DIFFICULTY_LABEL: Record<FutureBatch["imageDifficulty"], string> = {
  easy: "Images: easier",
  moderate: "Images: moderate",
  hard: "Images: hard",
};

/** A planned expansion batch — a roadmap item, never a live page. */
export default function RoadmapCard({ batch }: { batch: FutureBatch }) {
  return (
    <div className="card p-5 flex flex-col gap-2 h-full">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-[#17211B] leading-snug">
          {batch.title}
        </h3>
        <span
          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${PRIORITY_STYLE[batch.priority]}`}
        >
          {batch.priority} priority
        </span>
      </div>
      <p className="text-sm text-[#5E6B63] leading-snug">{batch.purpose}</p>
      <p className="text-xs text-[#2C3A2F] leading-snug">
        <span className="text-[#8A958E]">Examples: </span>
        {batch.exampleSpecies.slice(0, 8).map((s) => s.replace(/-/g, " ")).join(", ")}
      </p>
      <p className="text-[11px] text-[#8A958E] leading-snug">{batch.riskNotes}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-1 text-[11px]">
        <span className="rounded-full bg-[#EFF1EB] border border-[#DDE6DD] px-2 py-0.5 text-[#2C3A2F]">
          {STATUS_LABEL[batch.status]}
        </span>
        <span className="rounded-full bg-[#EFF1EB] border border-[#DDE6DD] px-2 py-0.5 text-[#2C3A2F]">
          {DIFFICULTY_LABEL[batch.imageDifficulty]}
        </span>
        <span className="text-[#8A958E]">
          {batch.status === "complete"
            ? "Pages: published"
            : batch.shouldCreatePages
              ? "Pages: when ready"
              : "Pages: not yet"}
        </span>
      </div>
    </div>
  );
}
