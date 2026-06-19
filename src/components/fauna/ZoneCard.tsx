import Link from "next/link";
import { getOceanZoneMeta } from "@/lib/fauna/ocean";
import type { OceanZoneSlug } from "@/lib/fauna/ocean";

/** Depth-zone discovery card for the ocean hub. */
export default function ZoneCard({
  slug,
  count,
}: {
  slug: OceanZoneSlug;
  count?: number;
}) {
  const meta = getOceanZoneMeta(slug);
  return (
    <Link
      href={`/fauna/ocean/${slug}`}
      className="card p-5 flex flex-col gap-2 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline h-full"
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl" aria-hidden="true">
          {meta.icon}
        </span>
        <span className="text-[11px] font-medium text-[#5E6B63] bg-[#EFF1EB] border border-[#DDE6DD] rounded-full px-2 py-0.5">
          {meta.depthRange}
        </span>
      </div>
      <span className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
        {meta.label}
      </span>
      <span className="text-xs italic text-[#8A958E]">{meta.scientificName}</span>
      <span className="text-sm text-[#5E6B63] leading-snug">{meta.blurb}</span>
      {typeof count === "number" && (
        <span className="text-xs text-[#8A958E] mt-auto pt-1">
          {count > 0
            ? `${count} featured profile${count === 1 ? "" : "s"}`
            : "Zone science overview"}
        </span>
      )}
      <span className="text-xs font-medium text-[#063F2A] flex items-center gap-1 mt-1">
        Explore{" "}
        <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">
          →
        </span>
      </span>
    </Link>
  );
}
