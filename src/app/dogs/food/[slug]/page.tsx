import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FoodSafetyArticleView from "@/components/food-safety/FoodSafetyArticle";
import { buildArticleMetadata } from "@/lib/metadata";
import {
  FOOD_SAFETY_ARTICLES,
  getArticleBySlug,
} from "@/lib/food-safety/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return FOOD_SAFETY_ARTICLES.filter((a) => a.species === "dog").map((a) => ({
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
  const article = getArticleBySlug(slug);
  if (!article || article.species !== "dog") {
    return {};
  }
  return buildArticleMetadata({
    title: article.title,
    description: article.description,
    path: `/dogs/food/${article.slug}`,
    publishedTime: article.publishedTime,
    modifiedTime: article.modifiedTime,
  });
}

export default async function DogFoodSafetyPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.species !== "dog") {
    notFound();
  }
  return <FoodSafetyArticleView article={article} />;
}
