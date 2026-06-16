import { getCategoryMeta } from "@/lib/red-list/categories";
import type { RedListCategoryCode } from "@/lib/red-list/types";

interface CategoryBadgeProps {
  code: RedListCategoryCode;
  /** Show the full label after the code (e.g. "CR · Critically Endangered"). */
  showLabel?: boolean;
  size?: "sm" | "md";
  className?: string;
}

/**
 * Accessible IUCN category badge.
 *
 * Meaning is never colour-only: the code is always shown as text, the full
 * category name is exposed to assistive technology via aria-label, and (when
 * requested) printed beside the code.
 */
export default function CategoryBadge({
  code,
  showLabel = false,
  size = "md",
  className,
}: CategoryBadgeProps) {
  const meta = getCategoryMeta(code);
  const sizeClass =
    size === "sm"
      ? "text-[11px] px-2 py-0.5"
      : "text-xs px-2.5 py-1";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border font-semibold uppercase tracking-wide ${meta.badgeClass} ${sizeClass} ${className ?? ""}`}
      aria-label={`IUCN Red List category: ${meta.label}`}
      title={meta.label}
    >
      <span aria-hidden={showLabel ? undefined : true}>{meta.code}</span>
      {showLabel && (
        <span className="font-medium normal-case tracking-normal">
          {meta.label}
        </span>
      )}
    </span>
  );
}
