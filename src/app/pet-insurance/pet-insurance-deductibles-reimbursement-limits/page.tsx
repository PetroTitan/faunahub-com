import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getInsuranceArticleBySlug } from "@/lib/pet-insurance/data";

const article = getInsuranceArticleBySlug(
  "pet-insurance-deductibles-reimbursement-limits"
)!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function PetInsuranceDeductiblesPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            {
              label: "How pet insurance works",
              href: "/pet-insurance/how-pet-insurance-works",
            },
            {
              label: "What does pet insurance cover?",
              href: "/pet-insurance/what-does-pet-insurance-cover",
            },
            {
              label: "Pet insurance exclusions",
              href: "/pet-insurance/pet-insurance-exclusions",
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
              label: "Pet insurance vs emergency fund",
              href: "/pet-insurance/pet-insurance-vs-emergency-fund",
            },
          ],
        },
      ]}
    />
  );
}
