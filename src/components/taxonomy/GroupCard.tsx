import Link from "next/link";
import CoverageBadge from "./CoverageBadge";
import type { AnimalTaxonomyGroup } from "@/lib/taxonomy/types";

/**
 * Taxonomy group card showing coverage status, how many existing profiles are
 * mapped, and how many roadmap examples remain. Existing profiles link to real
 * /animals pages; roadmap examples are shown as plain text (not links).
 */
export default function GroupCard({ group }: { group: AnimalTaxonomyGroup }) {
  const covered = group.existingAnimalSlugs.length;
  const missing = group.priorityMissingExamples.length;
  return (
    <div className="card p-5 flex flex-col gap-2 h-full">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-[#17211B] leading-snug">
          {group.label}
        </h3>
        <CoverageBadge status={group.coverageStatus} />
      </div>
      <p className="text-sm text-[#5E6B63] leading-snug">{group.description}</p>
      {group.notes && (
        <p className="text-xs text-[#8A958E] leading-snug">{group.notes}</p>
      )}

      {covered > 0 && (
        <div className="mt-1">
          <p className="text-[11px] uppercase tracking-wider text-[#8A958E] mb-1">
            On FaunaHub ({covered})
          </p>
          <div className="flex flex-wrap gap-1.5">
            {group.existingAnimalSlugs.slice(0, 10).map((slug) => (
              <Link
                key={slug}
                href={`/animals/${slug}`}
                className="text-[11px] px-2 py-0.5 rounded-full bg-[#EFF1EB] border border-[#DDE6DD] text-[#2C3A2F] hover:border-[#CFE0A8] hover:text-[#063F2A] hover:no-underline transition-colors capitalize"
              >
                {slug.replace(/-/g, " ")}
              </Link>
            ))}
            {covered > 10 && (
              <span className="text-[11px] text-[#8A958E] self-center">
                +{covered - 10} more
              </span>
            )}
          </div>
        </div>
      )}

      {missing > 0 && (
        <div className="mt-1">
          <p className="text-[11px] uppercase tracking-wider text-[#8A958E] mb-1">
            On the roadmap (not yet profiled)
          </p>
          <p className="text-xs text-[#5E6B63] leading-snug">
            {group.priorityMissingExamples
              .map((e) => e.replace(/-/g, " "))
              .join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}
