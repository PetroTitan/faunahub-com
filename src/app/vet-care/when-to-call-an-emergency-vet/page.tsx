import type { Metadata } from "next";
import EducationalArticleView from "@/components/educational/EducationalArticleView";
import { buildArticleMetadata } from "@/lib/metadata";
import { getVetCareArticleBySlug } from "@/lib/vet-care/data";

const article = getVetCareArticleBySlug("when-to-call-an-emergency-vet")!;

export const metadata: Metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function WhenToCallEmergencyVetPage() {
  return (
    <EducationalArticleView
      article={article}
      relatedGroups={[
        {
          title: "Continue reading",
          links: [
            { label: "Emergency vet costs", href: "/vet-care/emergency-vet-costs" },
            { label: "First vet visit checklist", href: "/vet-care/first-vet-visit-checklist" },
            { label: "Vet care hub", href: "/vet-care" },
          ],
        },
        {
          title: "Prepare and recognise",
          links: [
            { label: "Pet safety & emergency preparedness", href: "/pet-safety" },
            { label: "When to go to the emergency vet", href: "/pet-safety/when-to-go-to-emergency-vet" },
            { label: "Pet emergency checklist", href: "/pet-safety/pet-emergency-checklist" },
          ],
        },
        {
          title: "Plan responsibly",
          links: [
            { label: "Pet insurance vs emergency fund", href: "/pet-insurance/pet-insurance-vs-emergency-fund" },
            { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
          ],
        },
      ]}
    />
  );
}
