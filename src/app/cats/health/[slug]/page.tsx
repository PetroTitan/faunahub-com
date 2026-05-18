import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SymptomArticleView from "@/components/health/SymptomArticleView";
import {
  SYMPTOM_ARTICLES,
  getSymptomArticleBySlug,
} from "@/lib/health/data";
import { buildArticleMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return SYMPTOM_ARTICLES.filter((a) => a.species === "cat").map((a) => ({
    slug: a.slug,
  }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getSymptomArticleBySlug(slug, "cat");
  if (!article) return {};
  return buildArticleMetadata({
    title: article.title,
    description: article.description,
    path: article.path,
    publishedTime: article.publishedTime,
    modifiedTime: article.modifiedTime,
  });
}

export default async function CatSymptomPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const article = getSymptomArticleBySlug(slug, "cat");
  if (!article) notFound();
  return <SymptomArticleView article={article} />;
}
