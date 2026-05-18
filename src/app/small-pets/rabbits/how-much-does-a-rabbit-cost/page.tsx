import type { Metadata } from "next";
import CostArticleView from "@/components/pet-cost/CostArticle";
import { buildArticleMetadata } from "@/lib/metadata";
import { getCostArticleBySlug } from "@/lib/pet-cost/data";

const article = getCostArticleBySlug("how-much-does-a-rabbit-cost")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function RabbitCostPage() {
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
          label: "All pet age calculators",
          href: "/tools/pet-age-calculator",
          description: "Pick the right tool by species",
        },
      ]}
      relatedChoiceLinks={[
        {
          label: "Best pets for apartments",
          href: "/guides/best-pets-for-apartments",
        },
        {
          label: "Best pets for families",
          href: "/guides/best-pets-for-families",
        },
        {
          label: "Small pet care guides",
          href: "/small-pets",
        },
      ]}
    />
  );
}
