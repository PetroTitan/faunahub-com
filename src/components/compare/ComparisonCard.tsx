import Link from "next/link";
import type { ComparisonRecord } from "@/lib/animal-compare";
import { categoryName } from "@/lib/animal-compare";

const RELATIONSHIP_LABEL: Record<ComparisonRecord["relationship"], string> = {
  "commonly-confused": "Commonly confused",
  "close-relatives": "Close relatives",
  "species-vs-group": "Nested names",
  "domestic-vs-wild": "Domestic vs wild",
  "similar-appearance": "Look-alikes",
  "similar-ecological-role": "Similar role",
  "same-habitat": "Shared habitat",
  "contrasting-adaptations": "Contrasting adaptations",
  "pet-decision": "Pet context",
  "taxonomy-clarification": "Taxonomy",
};

/** Card used in hub listings. Link text is the full pair, never "read more". */
export default function ComparisonCard({ record }: { record: ComparisonRecord }) {
  return (
    <li className="rounded-2xl border border-[#DDE6DD] bg-white p-5 transition-colors hover:border-[#CFE0A8]">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="inline-block rounded-full border border-[#CFE0A8] bg-[#EFF4E0] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-[#063F2A]">
          {RELATIONSHIP_LABEL[record.relationship]}
        </span>
        <span className="text-[11px] uppercase tracking-wide text-[#8A958E]">
          {categoryName(record.primaryCategory)}
        </span>
      </div>
      <h3 className="text-base font-bold text-[#17211B] mb-1.5">
        <Link
          href={`/animal-compare/${record.slug}`}
          className="hover:text-[#063F2A]"
        >
          {record.title}
        </Link>
      </h3>
      <p className="text-sm text-[#5E6B63] leading-relaxed">
        {record.centralDifference}
      </p>
    </li>
  );
}
