import type { Metadata } from "next";
import CostArticleView from "@/components/pet-cost/CostArticle";
import { buildArticleMetadata } from "@/lib/metadata";
import { getCostArticleBySlug } from "@/lib/pet-cost/data";

const article = getCostArticleBySlug("how-much-does-a-fish-cost")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function FishCostPage() {
  return (
    <CostArticleView
      article={article}
      relatedTools={[
        {
          label: "Pet Breed Selector",
          href: "/tools/pet-breed-selector",
          description: "Find pet categories that fit your home",
        },
        {
          label: "Pet Cost Calculator",
          href: "/tools/pet-cost-calculator",
          description: "Run your own numbers",
        },
      ]}
      relatedChoiceLinks={[
        {
          label: "Best pets for apartments",
          href: "/guides/best-pets-for-apartments",
        },
        {
          label: "Low-maintenance pets",
          href: "/guides/low-maintenance-pets",
        },
        {
          label: "Pet fish & aquarium guides",
          href: "/fish",
        },
      ]}
    />
  );
}
