import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SmallPetArticleView from "@/components/small-pets/SmallPetArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { SMALL_PET_ARTICLES, getSmallPetArticleBySlug } from "@/lib/small-pets/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return SMALL_PET_ARTICLES.map((a) => ({ slug: a.slug }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getSmallPetArticleBySlug(slug);
  if (!article) return {};
  return buildArticleMetadata({
    title: article.title,
    description: article.description,
    path: article.path,
    publishedTime: article.publishedTime,
    modifiedTime: article.modifiedTime,
  });
}

export default async function SmallPetArticlePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const article = getSmallPetArticleBySlug(slug);
  if (!article) notFound();
  return <SmallPetArticleView article={article} />;
}
