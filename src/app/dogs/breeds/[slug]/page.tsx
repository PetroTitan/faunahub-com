import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DecisionArticleView from "@/components/pet-choice/DecisionArticle";
import BreedProfileView from "@/components/breeds/BreedProfileView";
import BreedCollectionView from "@/components/breeds/BreedCollectionView";
import BreedRankingView from "@/components/breeds/BreedRankingView";
import {
  collectionMembers,
  getCollection,
  publishedCollections,
} from "@/lib/pet-intelligence/collections";
import { BREED_RANKINGS, getRanking, rankingResult } from "@/lib/pet-intelligence/rankings";
import { DECISION_PAGES, getDecisionBySlug } from "@/lib/pet-choice/data";
import {
  getBreed,
  breedRouteParams,
  breedPageDescription,
  breedPageTags,
  breedPageTitle,
} from "@/lib/pet-intelligence";
import { getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata, buildMetadata } from "@/lib/metadata";

const LAST_UPDATED = "2026-09-13";

/**
 * /dogs/breeds/[slug] serves FOUR kinds of page from one URL space:
 *
 *   - a breed profile, from the Pet Intelligence registry
 *   - a breed collection ("Large Dog Breeds"), a registry QUERY
 *   - a measured ranking ("Tallest Dog Breeds"), a registry ORDERING
 *   - a decision guide ("best dogs for apartments"), hand-written, from pet-choice
 *
 * They share a URL space because a reader browsing dog breeds does not care
 * which of FaunaHub's registries a page came from. All four slug sets are
 * disjoint and a test asserts they stay that way, so the dispatch below can
 * never be ambiguous.
 *
 * They share a URL space because a reader browsing dog breeds does not care
 * which of FaunaHub's registries a page came from. The slug sets are disjoint
 * and a test asserts they stay that way, so the dispatch below can never be
 * ambiguous.
 *
 * Until this migration the twelve breed profiles were twelve hand-written page
 * files, and the breed list existed separately in the hub, the sitemap, and the
 * image registry — four copies that had to be edited together. Generating them
 * from one registry is what makes three hundred breeds a data change rather
 * than three hundred files.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...breedRouteParams("dog"),
    ...publishedCollections()
      .filter((c) => c.species === "dog")
      .map((c) => ({ slug: c.slug })),
    ...BREED_RANKINGS.filter((r) => r.species === "dog").map((r) => ({ slug: r.slug })),
    ...DECISION_PAGES.filter((p) => p.kind === "dog-breed").map((p) => ({ slug: p.slug })),
  ];
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;

  const breed = getBreed("dog", slug);
  if (breed) {
    return buildArticleMetadata({
      title: breedPageTitle(breed),
      description: breedPageDescription(breed),
      path: `/dogs/breeds/${breed.slug}`,
      publishedTime: breed.publishedAt,
      modifiedTime: breed.reviewedAt,
      ogImage: getBreedOgImage("dog", breed.slug),
    });
  }

  const collection = getCollection("dog", slug);
  if (collection) {
    return buildMetadata({
      title: collection.title,
      description: collection.description,
      path: `/dogs/breeds/${collection.slug}`,
    });
  }

  const ranking = getRanking("dog", slug);
  if (ranking) {
    return buildMetadata({
      title: ranking.title,
      description: ranking.description,
      path: `/dogs/breeds/${ranking.slug}`,
    });
  }

  const page = getDecisionBySlug(slug, "dog-breed");
  if (!page) return {};
  return buildArticleMetadata({
    title: page.title,
    description: page.description,
    path: `/dogs/breeds/${page.slug}`,
    publishedTime: page.publishedTime,
    modifiedTime: page.modifiedTime,
  });
}

export default async function DogBreedsRoute({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;

  const breed = getBreed("dog", slug);
  if (breed) {
    return (
      <BreedProfileView
        breed={breed}
        pageTitle={breedPageTitle(breed)}
        description={breedPageDescription(breed)}
        tags={breedPageTags(breed)}
      />
    );
  }

  const collection = getCollection("dog", slug);
  if (collection) {
    return (
      <BreedCollectionView
        collection={collection}
        members={collectionMembers(collection)}
        lastUpdated={LAST_UPDATED}
      />
    );
  }

  const ranking = getRanking("dog", slug);
  if (ranking) {
    return (
      <BreedRankingView
        ranking={ranking}
        result={rankingResult(ranking)}
        lastUpdated={LAST_UPDATED}
      />
    );
  }

  const page = getDecisionBySlug(slug, "dog-breed");
  if (!page) notFound();
  return <DecisionArticleView page={page} />;
}
