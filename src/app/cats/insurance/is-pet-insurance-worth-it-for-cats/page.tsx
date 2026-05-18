import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getInsuranceArticleBySlug } from "@/lib/pet-insurance/data";

const article = getInsuranceArticleBySlug(
  "is-pet-insurance-worth-it-for-cats"
)!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function IsPetInsuranceWorthItForCatsPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            { label: "Cat insurance hub", href: "/cats/insurance" },
            {
              label: "Is pet insurance worth it? (general)",
              href: "/pet-insurance/is-pet-insurance-worth-it",
            },
            {
              label: "Pet insurance vs emergency fund",
              href: "/pet-insurance/pet-insurance-vs-emergency-fund",
            },
            { label: "Pet insurance hub", href: "/pet-insurance" },
          ],
        },
        {
          title: "Plan responsibly",
          links: [
            {
              label: "How much does a cat cost?",
              href: "/cats/costs/how-much-does-a-cat-cost",
            },
            { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
            { label: "Emergency vet costs", href: "/vet-care/emergency-vet-costs" },
          ],
        },
      ]}
    />
  );
}
