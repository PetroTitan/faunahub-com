import { RED_LIST_SPECIES } from "./species";
import {
  RED_LIST_CATEGORY_ORDER,
  CATEGORY_PAGE_SLUG,
  getCategoryMeta,
} from "./categories";
import type {
  RedListCategoryCode,
  RedListSpeciesRecord,
  RedListTaxonGroup,
} from "./types";

/** All records, sorted by extinction-risk category then common name. */
export function sortByRiskThenName(
  records: readonly RedListSpeciesRecord[],
): RedListSpeciesRecord[] {
  const order = (c: RedListCategoryCode) => getCategoryMeta(c).order;
  return [...records].sort((a, b) => {
    const r = order(a.redListCategory) - order(b.redListCategory);
    if (r !== 0) return r;
    return a.commonName.localeCompare(b.commonName);
  });
}

export function getByCategory(
  code: RedListCategoryCode,
): RedListSpeciesRecord[] {
  return sortByRiskThenName(
    RED_LIST_SPECIES.filter((s) => s.redListCategory === code),
  );
}

export function getByGroup(
  group: RedListTaxonGroup,
): RedListSpeciesRecord[] {
  return sortByRiskThenName(
    RED_LIST_SPECIES.filter((s) => s.taxonGroup === group),
  );
}

export function getDetailedProfiles(): RedListSpeciesRecord[] {
  return sortByRiskThenName(
    RED_LIST_SPECIES.filter((s) => s.profileStatus === "detailed-profile"),
  );
}

export function getBySlug(slug: string): RedListSpeciesRecord | undefined {
  return RED_LIST_SPECIES.find((s) => s.slug === slug);
}

export function getDetailedSlugs(): string[] {
  return getDetailedProfiles().map((s) => s.slug);
}

/** Featured species for the hub: the detailed profiles plus a few iconic links. */
export function getFeaturedSpecies(limit = 8): RedListSpeciesRecord[] {
  const detailed = getDetailedProfiles();
  const linked = sortByRiskThenName(
    RED_LIST_SPECIES.filter(
      (s) => s.profileStatus === "existing-profile-linked",
    ),
  );
  const combined: RedListSpeciesRecord[] = [];
  const seen = new Set<string>();
  for (const r of [...detailed, ...linked]) {
    if (seen.has(r.slug)) continue;
    seen.add(r.slug);
    combined.push(r);
    if (combined.length >= limit) break;
  }
  return combined;
}

/** Most recently reviewed records (by lastVerified, newest first). */
export function getRecentlyVerified(limit = 12): RedListSpeciesRecord[] {
  return [...RED_LIST_SPECIES]
    .sort((a, b) => {
      const d = b.lastVerified.localeCompare(a.lastVerified);
      if (d !== 0) return d;
      return a.commonName.localeCompare(b.commonName);
    })
    .slice(0, limit);
}

/** Count of records per threatened category, for hub/category headers. */
export function countByCategory(): Record<RedListCategoryCode, number> {
  const counts = Object.fromEntries(
    RED_LIST_CATEGORY_ORDER.map((c) => [c, 0]),
  ) as Record<RedListCategoryCode, number>;
  for (const s of RED_LIST_SPECIES) counts[s.redListCategory] += 1;
  return counts;
}

export function countByGroup(): Record<RedListTaxonGroup, number> {
  const counts: Record<RedListTaxonGroup, number> = {
    mammals: 0,
    birds: 0,
    "reptiles-amphibians": 0,
    fish: 0,
    invertebrates: 0,
    other: 0,
  };
  for (const s of RED_LIST_SPECIES) counts[s.taxonGroup] += 1;
  return counts;
}

/**
 * Where a record links to when its name is clicked:
 *  - detailed-profile -> the species page on FaunaHub
 *  - existing-profile-linked -> the existing /animals/[slug] page
 *  - index-only -> no internal link (null)
 */
export function recordInternalHref(
  record: RedListSpeciesRecord,
): string | null {
  if (record.profileStatus === "detailed-profile") {
    return `/endangered-animals/species/${record.slug}`;
  }
  if (
    record.profileStatus === "existing-profile-linked" &&
    record.existingAnimalSlug
  ) {
    return `/animals/${record.existingAnimalSlug}`;
  }
  return null;
}

/** Convenience: URL for a risk-category page, or null if it has none. */
export function categoryPageHref(code: RedListCategoryCode): string | null {
  const slug = CATEGORY_PAGE_SLUG[code];
  return slug ? `/endangered-animals/${slug}` : null;
}

export { RED_LIST_SPECIES };
