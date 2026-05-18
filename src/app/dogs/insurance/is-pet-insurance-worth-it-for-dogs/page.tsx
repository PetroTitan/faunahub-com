import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getInsuranceArticleBySlug } from "@/lib/pet-insurance/data";

const article = getInsuranceArticleBySlug(
  "is-pet-insurance-worth-it-for-dogs"
)!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function IsPetInsuranceWorthItForDogsPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            { label: "Dog insurance hub", href: "/dogs/insurance" },
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
              label: "How much does a dog cost?",
              href: "/dogs/costs/how-much-does-a-dog-cost",
            },
            { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
            { label: "Emergency vet costs", href: "/vet-care/emergency-vet-costs" },
          ],
        },
      ]}
    />
  );
}
