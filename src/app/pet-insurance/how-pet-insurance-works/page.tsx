import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getInsuranceArticleBySlug } from "@/lib/pet-insurance/data";

const article = getInsuranceArticleBySlug("how-pet-insurance-works")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function HowPetInsuranceWorksPage() {
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
              label: "Pet insurance exclusions",
              href: "/pet-insurance/pet-insurance-exclusions",
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
              description: "Run insurance + emergency fund scenarios",
            },
            {
              label: "Pet Budget Checklist",
              href: "/guides/pet-budget-checklist",
            },
            {
              label: "Emergency vet costs",
              href: "/vet-care/emergency-vet-costs",
            },
          ],
        },
      ]}
    />
  );
}
