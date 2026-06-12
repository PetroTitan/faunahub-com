import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BirdGuideArticleView from "@/components/birds/BirdGuideArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { BIRD_CARE_ARTICLES, getBirdCareArticleBySlug } from "@/lib/bird-care/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return BIRD_CARE_ARTICLES.map((a) => ({ slug: a.slug }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getBirdCareArticleBySlug(slug);
  if (!article) return {};
  return buildArticleMetadata({
    title: article.title,
    description: article.description,
    path: article.path,
    publishedTime: article.publishedTime,
    modifiedTime: article.modifiedTime,
  });
}

export default async function BirdCareArticlePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const article = getBirdCareArticleBySlug(slug);
  if (!article) notFound();
  return (
    <BirdGuideArticleView
      article={article}
      root={{ label: "Bird Care", href: "/bird-care" }}
      clusterLabel="Bird care"
      backLabel="Back to bird care"
    />
  );
}
