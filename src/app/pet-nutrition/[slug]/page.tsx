import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PetNutritionArticleView from "@/components/pet-nutrition/PetNutritionArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import {
  PET_NUTRITION_ARTICLES,
  getPetNutritionArticleBySlug,
} from "@/lib/pet-nutrition/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return PET_NUTRITION_ARTICLES.map((a) => ({ slug: a.slug }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getPetNutritionArticleBySlug(slug);
  if (!article) return {};
  return buildArticleMetadata({
    title: article.title,
    description: article.description,
    path: article.path,
    publishedTime: article.publishedTime,
    modifiedTime: article.modifiedTime,
  });
}

export default async function PetNutritionArticlePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const article = getPetNutritionArticleBySlug(slug);
  if (!article) notFound();
  return <PetNutritionArticleView article={article} />;
}
