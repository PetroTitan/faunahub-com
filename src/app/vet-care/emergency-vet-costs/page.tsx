import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getVetCareArticleBySlug } from "@/lib/vet-care/data";

const article = getVetCareArticleBySlug("emergency-vet-costs")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function EmergencyVetCostsPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            { label: "When to call an emergency vet", href: "/vet-care/when-to-call-an-emergency-vet" },
            { label: "Routine vet care costs", href: "/vet-care/routine-vet-care-costs" },
            { label: "Vet care hub", href: "/vet-care" },
          ],
        },
        {
          title: "Plan responsibly",
          links: [
            { label: "Pet insurance vs emergency fund", href: "/pet-insurance/pet-insurance-vs-emergency-fund" },
            { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
            { label: "Hidden costs of pet ownership", href: "/guides/hidden-costs-of-pet-ownership" },
          ],
        },
      ]}
    />
  );
}
