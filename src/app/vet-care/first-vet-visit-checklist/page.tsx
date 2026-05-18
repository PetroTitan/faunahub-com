import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getVetCareArticleBySlug } from "@/lib/vet-care/data";

const article = getVetCareArticleBySlug("first-vet-visit-checklist")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function FirstVetVisitChecklistPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            { label: "Questions to ask a vet", href: "/vet-care/questions-to-ask-a-vet" },
            { label: "Routine vet care costs", href: "/vet-care/routine-vet-care-costs" },
            { label: "Vet care hub", href: "/vet-care" },
          ],
        },
        {
          title: "Plan responsibly",
          links: [
            { label: "Pet insurance overview", href: "/pet-insurance" },
            { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
            { label: "Pet Budget Checklist", href: "/guides/pet-budget-checklist" },
          ],
        },
      ]}
    />
  );
}
