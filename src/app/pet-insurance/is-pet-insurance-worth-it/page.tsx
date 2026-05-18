import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getInsuranceArticleBySlug } from "@/lib/pet-insurance/data";

const article = getInsuranceArticleBySlug("is-pet-insurance-worth-it")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function IsPetInsuranceWorthItPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            {
              label: "Pet insurance vs emergency fund",
              href: "/pet-insurance/pet-insurance-vs-emergency-fund",
            },
            {
              label: "How pet insurance works",
              href: "/pet-insurance/how-pet-insurance-works",
            },
            {
              label: "What does pet insurance cover?",
              href: "/pet-insurance/what-does-pet-insurance-cover",
            },
            {
              label: "Pet insurance hub",
              href: "/pet-insurance",
            },
          ],
        },
        {
          title: "Species-specific",
          links: [
            {
              label: "Insurance for dogs",
              href: "/dogs/insurance",
            },
            {
              label: "Insurance for cats",
              href: "/cats/insurance",
            },
          ],
        },
        {
          title: "Plan responsibly",
          links: [
            {
              label: "Pet Cost Calculator",
              href: "/tools/pet-cost-calculator",
            },
            {
              label: "Pet Budget Checklist",
              href: "/guides/pet-budget-checklist",
            },
          ],
        },
      ]}
    />
  );
}
