import type { Metadata } from "next";
import CostArticleView from "@/components/pet-cost/CostArticle";
import { buildArticleMetadata } from "@/lib/metadata";
import { getCostArticleBySlug } from "@/lib/pet-cost/data";

const article = getCostArticleBySlug("how-much-does-a-bird-cost")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function BirdCostPage() {
  return (
    <CostArticleView
      article={article}
      relatedTools={[
        {
          label: "Pet Life Stage Calculator",
          href: "/tools/pet-life-stage-calculator",
          description: "Care focus by life stage",
        },
        {
          label: "Pet Breed Selector",
          href: "/tools/pet-breed-selector",
          description: "Find pet categories that fit your home",
        },
      ]}
      relatedChoiceLinks={[
        {
          label: "Best pets for apartments",
          href: "/guides/best-pets-for-apartments",
        },
        {
          label: "Best pets for beginners",
          href: "/guides/best-pets-for-beginners",
        },
        {
          label: "Pet bird care guides",
          href: "/birds",
        },
      ]}
    />
  );
}
