import type { Metadata } from "next";
import CostArticleView from "@/components/pet-cost/CostArticle";
import { buildArticleMetadata } from "@/lib/metadata";
import { getCostArticleBySlug } from "@/lib/pet-cost/data";

const article = getCostArticleBySlug("how-much-does-a-hamster-cost")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function HamsterCostPage() {
  return (
    <CostArticleView
      article={article}
      relatedTools={[
        {
          label: "Hamster Age Calculator",
          href: "/tools/hamster-age-calculator",
          description: "Approximate human-age equivalent",
        },
        {
          label: "Pet Life Stage Calculator",
          href: "/tools/pet-life-stage-calculator",
          description: "Care focus by life stage",
        },
      ]}
      relatedChoiceLinks={[
        {
          label: "Best pets for beginners",
          href: "/guides/best-pets-for-beginners",
        },
        {
          label: "Small pet care guides",
          href: "/small-pets",
        },
      ]}
    />
  );
}
