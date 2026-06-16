"use client";

import { useMemo, useState } from "react";
import SpeciesList from "./SpeciesList";
import { getCategoryMeta, getGroupMeta } from "@/lib/red-list/categories";
import { regionsForSlug, getRegionMeta } from "@/lib/red-list/regions";
import type {
  RedListCategoryCode,
  RedListSpeciesRecord,
  RedListTaxonGroup,
} from "@/lib/red-list/types";
import type { RedListRegion } from "@/lib/red-list/regions";

interface SpeciesBrowserProps {
  records: readonly RedListSpeciesRecord[];
  /** Which filters to expose (only show facets that vary in the data). */
  facets?: {
    group?: boolean;
    category?: boolean;
    region?: boolean;
    status?: boolean;
    confidence?: boolean;
  };
  hideGroup?: boolean;
}

const STATUS_LABEL: Record<string, string> = {
  "detailed-profile": "Has detailed profile",
  "existing-profile-linked": "Linked animal page",
  "index-only": "Index record only",
};
const CONFIDENCE_LABEL: Record<string, string> = {
  verified: "Verified",
  partial: "Partial review",
  "source-review-pending": "Source review pending",
};

const selectClass =
  "w-full rounded-lg border border-[#DDE6DD] bg-white px-3 py-2 text-sm text-[#17211B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7BAA35]";
const labelClass =
  "block text-[11px] font-semibold uppercase tracking-wider text-[#8A958E] mb-1";

export default function SpeciesBrowser({
  records,
  facets = { group: true, category: true, status: true },
  hideGroup,
}: SpeciesBrowserProps) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("all");
  const [category, setCategory] = useState("all");
  const [region, setRegion] = useState("all");
  const [status, setStatus] = useState("all");
  const [confidence, setConfidence] = useState("all");

  const groups = useMemo(
    () =>
      Array.from(new Set(records.map((r) => r.taxonGroup))).sort() as RedListTaxonGroup[],
    [records],
  );
  const categories = useMemo(
    () =>
      Array.from(new Set(records.map((r) => r.redListCategory))) as RedListCategoryCode[],
    [records],
  );
  const regions = useMemo(
    () =>
      Array.from(
        new Set(records.flatMap((r) => regionsForSlug(r.slug))),
      ).sort() as RedListRegion[],
    [records],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return records.filter((r) => {
      if (group !== "all" && r.taxonGroup !== group) return false;
      if (category !== "all" && r.redListCategory !== category) return false;
      if (status !== "all" && r.profileStatus !== status) return false;
      if (confidence !== "all" && r.dataConfidence !== confidence) return false;
      if (region !== "all" && !regionsForSlug(r.slug).includes(region as RedListRegion))
        return false;
      if (
        q &&
        !r.commonName.toLowerCase().includes(q) &&
        !r.scientificName.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
  }, [records, query, group, category, region, status, confidence]);

  const reset = () => {
    setQuery("");
    setGroup("all");
    setCategory("all");
    setRegion("all");
    setStatus("all");
    setConfidence("all");
  };

  const anyActive =
    query !== "" ||
    group !== "all" ||
    category !== "all" ||
    region !== "all" ||
    status !== "all" ||
    confidence !== "all";

  return (
    <div>
      <form
        className="card p-4 sm:p-5 mb-6"
        aria-label="Filter species"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-3">
            <label htmlFor="rl-search" className={labelClass}>
              Search by name
            </label>
            <input
              id="rl-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Common or scientific name…"
              className={selectClass}
            />
          </div>

          {facets.group && groups.length > 1 && (
            <div>
              <label htmlFor="rl-group" className={labelClass}>
                Animal group
              </label>
              <select
                id="rl-group"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className={selectClass}
              >
                <option value="all">All groups</option>
                {groups.map((g) => (
                  <option key={g} value={g}>
                    {getGroupMeta(g).label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {facets.category && categories.length > 1 && (
            <div>
              <label htmlFor="rl-category" className={labelClass}>
                Red List category
              </label>
              <select
                id="rl-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={selectClass}
              >
                <option value="all">All categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c} · {getCategoryMeta(c).label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {facets.region && regions.length > 1 && (
            <div>
              <label htmlFor="rl-region" className={labelClass}>
                Region
              </label>
              <select
                id="rl-region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className={selectClass}
              >
                <option value="all">All regions</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {getRegionMeta(r).label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {facets.status && (
            <div>
              <label htmlFor="rl-status" className={labelClass}>
                Profile status
              </label>
              <select
                id="rl-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={selectClass}
              >
                <option value="all">Any status</option>
                {Object.entries(STATUS_LABEL).map(([v, l]) => (
                  <option key={v} value={v}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          )}

          {facets.confidence && (
            <div>
              <label htmlFor="rl-confidence" className={labelClass}>
                Data confidence
              </label>
              <select
                id="rl-confidence"
                value={confidence}
                onChange={(e) => setConfidence(e.target.value)}
                className={selectClass}
              >
                <option value="all">Any confidence</option>
                {Object.entries(CONFIDENCE_LABEL).map(([v, l]) => (
                  <option key={v} value={v}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm text-[#5E6B63]" role="status" aria-live="polite">
            Showing <strong className="text-[#17211B]">{filtered.length}</strong>{" "}
            of {records.length} records
          </p>
          {anyActive && (
            <button
              type="button"
              onClick={reset}
              className="text-sm font-medium text-[#063F2A] hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </form>

      <SpeciesList records={filtered} hideGroup={hideGroup} />
    </div>
  );
}
