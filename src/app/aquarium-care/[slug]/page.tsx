import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AquariumArticleView from "@/components/aquarium/AquariumArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { AQUARIUM_ARTICLES, getAquariumArticleBySlug } from "@/lib/aquarium/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return AQUARIUM_ARTICLES.map((a) => ({ slug: a.slug }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getAquariumArticleBySlug(slug);
  if (!article) return {};
  return buildArticleMetadata({
    title: article.title,
    description: article.description,
    path: article.path,
    publishedTime: article.publishedTime,
    modifiedTime: article.modifiedTime,
  });
}

export default async function AquariumArticlePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const article = getAquariumArticleBySlug(slug);
  if (!article) notFound();
  return <AquariumArticleView article={article} />;
}
