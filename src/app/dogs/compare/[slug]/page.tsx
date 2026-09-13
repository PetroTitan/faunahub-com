import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BreedComparisonView from "@/components/breeds/BreedComparisonView";
import { buildMetadata } from "@/lib/metadata";
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
    title: `${pair.a.name} vs ${pair.b.name} — Size, Coat, Grooming & Exercise Compared`,
    description: `How the ${pair.a.name} and ${pair.b.name} compare on the attributes their registries publish — size, coat, exercise, grooming, shedding and more. No winner, no scores.`,
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
