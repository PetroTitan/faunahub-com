import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BirdGuideArticleView from "@/components/birds/BirdGuideArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import {
  BIRDWATCHING_ARTICLES,
  getBirdwatchingArticleBySlug,
} from "@/lib/birdwatching/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return BIRDWATCHING_ARTICLES.map((a) => ({ slug: a.slug }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getBirdwatchingArticleBySlug(slug);
  if (!article) return {};
  return buildArticleMetadata({
    title: article.title,
    description: article.description,
    path: article.path,
    publishedTime: article.publishedTime,
    modifiedTime: article.modifiedTime,
  });
}

export default async function BirdwatchingArticlePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const article = getBirdwatchingArticleBySlug(slug);
  if (!article) notFound();
  return (
    <BirdGuideArticleView
      article={article}
      root={{ label: "Birdwatching", href: "/birdwatching" }}
      clusterLabel="Birdwatching"
      backLabel="Back to birdwatching"
    />
  );
}
