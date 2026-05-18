import type { Metadata } from "next";
import CostArticleView from "@/components/pet-cost/CostArticle";
import { buildArticleMetadata } from "@/lib/metadata";
import { getCostArticleBySlug } from "@/lib/pet-cost/data";

const article = getCostArticleBySlug("how-much-does-a-dog-cost")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function DogCostPage() {
  return (
    <CostArticleView
      article={article}
      relatedTools={[
        {
          label: "Dog insurance overview",
          href: "/dogs/insurance",
          description: "Insurance considerations for dogs",
        },
        {
          label: "Emergency vet costs",
          href: "/vet-care/emergency-vet-costs",
          description: "Why emergency care varies",
        },
        {
          label: "Dog Age Calculator",
          href: "/tools/dog-age-calculator",
          description: "Size-adjusted human-age equivalent",
        },
        {
          label: "Pet Life Stage Calculator",
          href: "/tools/pet-life-stage-calculator",
          description: "Care focus by life stage",
        },
        {
          label: "Dog food safety guides",
          href: "/dogs/food",
          description: "What dogs can and cannot eat",
        },
      ]}
      relatedChoiceLinks={[
        {
          label: "Best dogs for apartments",
          href: "/dogs/breeds/best-dogs-for-apartments",
        },
        {
          label: "Best dogs for first-time owners",
          href: "/dogs/breeds/best-dogs-for-first-time-owners",
        },
        {
          label: "All dog breed decision guides",
          href: "/dogs/breeds",
        },
      ]}
    />
  );
}
