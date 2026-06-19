import { getHabitatMeta } from "@/lib/fauna/habitats";
import type { FaunaHabitatTag } from "@/lib/fauna/types";

/** Small, text-labelled habitat badge (never colour-only). */
export default function HabitatTag({ tag }: { tag: FaunaHabitatTag }) {
  const meta = getHabitatMeta(tag);
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border border-[#DDE6DD] bg-[#EFF1EB] px-2 py-0.5 text-[11px] font-medium text-[#2C3A2F]"
      title={meta.description}
    >
      <span aria-hidden="true">{meta.icon}</span>
      {meta.label}
    </span>
  );
}
