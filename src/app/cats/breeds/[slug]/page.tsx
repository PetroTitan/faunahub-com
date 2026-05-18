import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DecisionArticleView from "@/components/pet-choice/DecisionArticle";
import {
  DECISION_PAGES,
  getDecisionBySlug,
} from "@/lib/pet-choice/data";
import { buildArticleMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return DECISION_PAGES.filter((p) => p.kind === "cat-breed").map((p) => ({
    slug: p.slug,
  }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getDecisionBySlug(slug, "cat-breed");
  if (!page) return {};
  return buildArticleMetadata({
    title: page.title,
    description: page.description,
    path: `/cats/breeds/${page.slug}`,
    publishedTime: page.publishedTime,
    modifiedTime: page.modifiedTime,
  });
}

export default async function CatBreedDecisionPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const page = getDecisionBySlug(slug, "cat-breed");
  if (!page) notFound();
  return <DecisionArticleView page={page} />;
}
