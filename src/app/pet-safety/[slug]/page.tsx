import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PetSafetyArticleView from "@/components/pet-safety/PetSafetyArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { PET_SAFETY_ARTICLES, getPetSafetyArticleBySlug } from "@/lib/pet-safety/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return PET_SAFETY_ARTICLES.map((a) => ({ slug: a.slug }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getPetSafetyArticleBySlug(slug);
  if (!article) return {};
  return buildArticleMetadata({
    title: article.title,
    description: article.description,
    path: article.path,
    publishedTime: article.publishedTime,
    modifiedTime: article.modifiedTime,
  });
}

export default async function PetSafetyArticlePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const article = getPetSafetyArticleBySlug(slug);
  if (!article) notFound();
  return <PetSafetyArticleView article={article} />;
}
