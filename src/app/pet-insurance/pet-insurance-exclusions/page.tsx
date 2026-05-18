import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getInsuranceArticleBySlug } from "@/lib/pet-insurance/data";

const article = getInsuranceArticleBySlug("pet-insurance-exclusions")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function PetInsuranceExclusionsPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            {
              label: "What does pet insurance cover?",
              href: "/pet-insurance/what-does-pet-insurance-cover",
            },
            {
              label: "How pet insurance works",
              href: "/pet-insurance/how-pet-insurance-works",
            },
            {
              label: "Is pet insurance worth it?",
              href: "/pet-insurance/is-pet-insurance-worth-it",
            },
            {
              label: "Pet insurance hub",
              href: "/pet-insurance",
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
