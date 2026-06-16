import Link from "next/link";
import CategoryBadge from "./CategoryBadge";
import ConfidenceBadge from "./ConfidenceBadge";
import SourceList from "./SourceList";
import { getGroupMeta, trendLabel } from "@/lib/red-list/categories";
import { recordInternalHref } from "@/lib/red-list/helpers";
import type { RedListSpeciesRecord } from "@/lib/red-list/types";

interface SpeciesListProps {
  records: readonly RedListSpeciesRecord[];
  /** Hide the taxon-group line (e.g. on group pages where it is redundant). */
  hideGroup?: boolean;
}

function StatusTag({ record }: { record: RedListSpeciesRecord }) {
  const href = recordInternalHref(record);
  if (record.profileStatus === "detailed-profile" && href) {
    return (
      <Link
        href={href}
        className="text-xs font-medium text-[#063F2A] hover:underline"
      >
        Detailed FaunaHub profile →
      </Link>
    );
  }
  if (record.profileStatus === "existing-profile-linked" && href) {
    return (
      <Link
        href={href}
        className="text-xs font-medium text-[#063F2A] hover:underline"
      >
        See FaunaHub animal profile →
      </Link>
    );
  }
  return (
    <span className="text-xs text-[#8A958E]" title="No standalone page by design">
      Index record only
    </span>
  );
}

/**
 * Accessible, mobile-safe list of Red List records. Rendered as a semantic
 * list of cards rather than a wide table so it stays readable on phones while
 * still presenting many records densely.
 */
export default function SpeciesList({ records, hideGroup }: SpeciesListProps) {
  if (records.length === 0) {
    return (
      <p className="text-sm text-[#5E6B63] border border-dashed border-[#DDE6DD] rounded-xl p-6 text-center">
        No records in this view yet.
      </p>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {records.map((record) => {
        const trend = trendLabel(record.populationTrend);
        const href = recordInternalHref(record);
        return (
          <li
            key={record.slug}
            className="card p-5 flex flex-col gap-3 h-full"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-[#17211B] leading-snug">
                  {href ? (
                    <Link
                      href={href}
                      className="hover:text-[#063F2A] hover:underline"
                    >
                      {record.commonName}
                    </Link>
                  ) : (
                    record.commonName
                  )}
                </h3>
                <p className="text-sm italic text-[#5E6B63]">
                  {record.scientificName}
                </p>
              </div>
              <CategoryBadge code={record.redListCategory} />
            </div>

            <dl className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#5E6B63]">
              {!hideGroup && (
                <div className="flex items-center gap-1">
                  <dt className="sr-only">Group</dt>
                  <dd>{getGroupMeta(record.taxonGroup).label}</dd>
                </div>
              )}
              {trend && (
                <div className="flex items-center gap-1">
                  <dt className="sr-only">Population trend</dt>
                  <dd>
                    <span aria-hidden="true">{trend.symbol}</span> {trend.label}
                  </dd>
                </div>
              )}
              <div className="flex items-center gap-1">
                <dt className="sr-only">Last verified</dt>
                <dd>
                  Verified{" "}
                  <time dateTime={record.lastVerified}>
                    {record.lastVerified}
                  </time>
                </dd>
              </div>
            </dl>

            {record.notes && (
              <p className="text-xs text-[#5E6B63] leading-relaxed">
                {record.notes}
              </p>
            )}

            <SourceList record={record} compact />

            <div className="mt-auto flex items-center justify-between gap-3 pt-1">
              <StatusTag record={record} />
              <ConfidenceBadge confidence={record.dataConfidence} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
