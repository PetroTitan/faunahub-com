import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getVetCareArticleBySlug } from "@/lib/vet-care/data";

const article = getVetCareArticleBySlug("questions-to-ask-a-vet")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function QuestionsToAskAVetPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            { label: "First vet visit checklist", href: "/vet-care/first-vet-visit-checklist" },
            { label: "When to call an emergency vet", href: "/vet-care/when-to-call-an-emergency-vet" },
            { label: "Vet care hub", href: "/vet-care" },
          ],
        },
        {
          title: "Plan responsibly",
          links: [
            { label: "Pet insurance overview", href: "/pet-insurance" },
            { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
          ],
        },
      ]}
    />
  );
}
