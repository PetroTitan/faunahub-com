import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getInsuranceArticleBySlug } from "@/lib/pet-insurance/data";

const article = getInsuranceArticleBySlug("what-does-pet-insurance-cover")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function WhatDoesPetInsuranceCoverPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            {
              label: "Pet insurance exclusions",
              href: "/pet-insurance/pet-insurance-exclusions",
              description: "What policies often do not cover",
            },
            {
              label: "How pet insurance works",
              href: "/pet-insurance/how-pet-insurance-works",
            },
            {
              label: "Deductibles, reimbursement & limits",
              href:
                "/pet-insurance/pet-insurance-deductibles-reimbursement-limits",
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
