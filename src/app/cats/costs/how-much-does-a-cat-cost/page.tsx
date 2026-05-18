import type { Metadata } from "next";
import CostArticleView from "@/components/pet-cost/CostArticle";
import { buildArticleMetadata } from "@/lib/metadata";
import { getCostArticleBySlug } from "@/lib/pet-cost/data";

const article = getCostArticleBySlug("how-much-does-a-cat-cost")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function CatCostPage() {
  return (
    <CostArticleView
      article={article}
      relatedTools={[
        {
          label: "Cat insurance overview",
          href: "/cats/insurance",
          description: "Insurance considerations for cats",
        },
        {
          label: "Emergency vet costs",
          href: "/vet-care/emergency-vet-costs",
          description: "Why emergency care varies",
        },
        {
          label: "Cat Age Calculator",
          href: "/tools/cat-age-calculator",
          description: "Feline human-age equivalent and life stage",
        },
        {
          label: "Pet Life Stage Calculator",
          href: "/tools/pet-life-stage-calculator",
          description: "Care focus by life stage",
        },
        {
          label: "Cat food safety guides",
          href: "/cats/food",
          description: "What cats can and cannot eat",
        },
      ]}
      relatedChoiceLinks={[
        {
          label: "Best cats for apartments",
          href: "/cats/breeds/best-cats-for-apartments",
        },
        {
          label: "Best cats for first-time owners",
          href: "/cats/breeds/best-cats-for-first-time-owners",
        },
        {
          label: "All cat breed decision guides",
          href: "/cats/breeds",
        },
      ]}
    />
  );
}
