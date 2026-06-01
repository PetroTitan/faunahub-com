import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EarlyCareArticleView from "@/components/puppy-kitten/EarlyCareArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { KITTEN_ARTICLES, getEarlyCareArticle } from "@/lib/puppy-kitten/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return KITTEN_ARTICLES.map((a) => ({ slug: a.slug }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getEarlyCareArticle("kitten", slug);
  if (!article) return {};
  return buildArticleMetadata({
    title: article.title,
    description: article.description,
    path: article.path,
    publishedTime: article.publishedTime,
    modifiedTime: article.modifiedTime,
  });
}

export default async function KittenCareArticlePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const article = getEarlyCareArticle("kitten", slug);
  if (!article) notFound();
  return <EarlyCareArticleView article={article} />;
}
