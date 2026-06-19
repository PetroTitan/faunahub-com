import Link from "next/link";
import { getContinentMeta } from "@/lib/fauna/continents";
import type { FaunaContinentSlug } from "@/lib/fauna/types";

interface ContinentCardProps {
  slug: FaunaContinentSlug;
  count?: number;
}

/** Continent discovery card for the fauna hubs. */
export default function ContinentCard({ slug, count }: ContinentCardProps) {
  const meta = getContinentMeta(slug);
  return (
    <Link
      href={`/fauna/continents/${slug}`}
      className="card p-5 flex flex-col gap-2 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline h-full"
    >
      <span className="text-3xl" aria-hidden="true">
        {meta.icon}
      </span>
      <span className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
        {meta.label}
      </span>
      <span className="text-sm text-[#5E6B63] leading-snug">{meta.blurb}</span>
      {typeof count === "number" && (
        <span className="text-xs text-[#8A958E] mt-auto pt-1">
          {count} featured animal{count === 1 ? "" : "s"}
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
