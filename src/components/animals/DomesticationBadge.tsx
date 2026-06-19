import type { AnimalClassification } from "@/lib/animals/classification";

/**
 * Text-first badge that marks an animal as wild or domestic (with role).
 * Meaning is never conveyed by colour alone — the label always reads in full.
 */
const STYLE = {
  wild: "bg-[#E7F0E3] text-[#265634] border-[#CFE0A8]",
  companion: "bg-[#EAF0F5] text-[#334D64] border-[#CBDCE8]",
  livestock: "bg-[#FBF1E6] text-[#7E3C0E] border-[#F0D8BE]",
  working: "bg-[#F3EEF7] text-[#5B3E73] border-[#E0D2EC]",
} as const;

function labelAndStyle(c: AnimalClassification): { label: string; cls: string } {
  if (c.status === "wild") return { label: "Wild animal", cls: STYLE.wild };
  if (c.role === "companion") return { label: "Companion animal", cls: STYLE.companion };
  if (c.role === "livestock") return { label: "Domestic · Livestock", cls: STYLE.livestock };
  if (c.role === "working") return { label: "Domestic · Working", cls: STYLE.working };
  return { label: "Domestic animal", cls: STYLE.companion };
}

export default function DomesticationBadge({
  classification,
  className,
}: {
  classification: AnimalClassification;
  className?: string;
}) {
  const { label, cls } = labelAndStyle(classification);
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${cls} ${className ?? ""}`}
    >
      <span aria-hidden="true">●</span>
      {label}
    </span>
  );
}
