import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getInsuranceArticleBySlug } from "@/lib/pet-insurance/data";

const article = getInsuranceArticleBySlug("pet-insurance-vs-emergency-fund")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function PetInsuranceVsEmergencyFundPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            {
              label: "Is pet insurance worth it?",
              href: "/pet-insurance/is-pet-insurance-worth-it",
            },
            {
              label: "How pet insurance works",
              href: "/pet-insurance/how-pet-insurance-works",
            },
            {
              label: "Emergency vet costs",
              href: "/vet-care/emergency-vet-costs",
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
              description: "Add an insurance line and an emergency fund line",
            },
            {
              label: "Pet Budget Checklist",
              href: "/guides/pet-budget-checklist",
            },
            {
              label: "Hidden costs of pet ownership",
              href: "/guides/hidden-costs-of-pet-ownership",
            },
          ],
        },
      ]}
    />
  );
}
