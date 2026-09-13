import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BreedComparisonView from "@/components/breeds/BreedComparisonView";
import { buildMetadata } from "@/lib/metadata";
import { fitDescription } from "@/lib/pet-intelligence";
import { PUBLISHED_COMPARISONS, getComparison } from "@/lib/pet-intelligence/comparisons";

/**
 * Breed comparisons live here rather than under /animal-compare.
 *
 * That cluster compares species and taxa, and its records resolve into the
 * animal registry. A Labrador is not a species competing with the dog profile,
 * and one namespace for both would make "dog vs cat" and "Labrador vs Golden
 * Retriever" indistinguishable in routing, in search, and in the pair index.
 */
export const dynamicParams = false;

const LAST_UPDATED = "2026-09-13";

export function generateStaticParams() {
  return PUBLISHED_COMPARISONS.filter((p) => p.species === "dog").map((p) => ({ slug: p.slug }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pair = getComparison("dog", slug);
  if (!pair) return {};
  return buildMetadata({
    /*
     * NO BRAND SUFFIX on this page type.
     *
     * Two breed names are already the whole distinctive content of this title,
     * and some pairs run to 62 characters between them. With the old tail
     * ("— Size, Coat, Grooming & Exercise Compared") plus the suffix, all 284
     * comparison titles were over 60 characters, median 89 — so the SECOND
     * BREED NAME was what a SERP cut off, which is the one word a reader
     * searching for that comparison is looking for. Dropping the tail and the
     * suffix leaves 13 over the limit instead of 284.
     */
    title: `${pair.a.name} vs ${pair.b.name} Compared`,
    brandSuffix: false,
    description: fitDescription(`${pair.a.name} and ${pair.b.name} compared on size, coat, exercise, grooming and shedding — registry values only, no winner and no scores.`),
    path: `/dogs/compare/${pair.slug}`,
  });
}

export default async function DogComparePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const pair = getComparison("dog", slug);
  if (!pair) notFound();
  return <BreedComparisonView pair={pair} lastUpdated={LAST_UPDATED} />;
}
