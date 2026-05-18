import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getVetCareArticleBySlug } from "@/lib/vet-care/data";

const article = getVetCareArticleBySlug("routine-vet-care-costs")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function RoutineVetCareCostsPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            { label: "Emergency vet costs", href: "/vet-care/emergency-vet-costs" },
            { label: "First vet visit checklist", href: "/vet-care/first-vet-visit-checklist" },
            { label: "Questions to ask a vet", href: "/vet-care/questions-to-ask-a-vet" },
            { label: "Vet care hub", href: "/vet-care" },
          ],
        },
        {
          title: "Plan responsibly",
          links: [
            { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
            { label: "Pet Budget Checklist", href: "/guides/pet-budget-checklist" },
            { label: "Pet insurance overview", href: "/pet-insurance" },
          ],
        },
      ]}
    />
  );
}
