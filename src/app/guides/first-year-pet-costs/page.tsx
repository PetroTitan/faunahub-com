import type { Metadata } from "next";
import BudgetGuideView from "@/components/pet-cost/BudgetGuide";
import { buildArticleMetadata } from "@/lib/metadata";
import { getBudgetGuideBySlug } from "@/lib/pet-cost/data";

const guide = getBudgetGuideBySlug("first-year-pet-costs")!;

export const metadata: Metadata = buildArticleMetadata({
  title: guide.title,
  description: guide.description,
  path: guide.path,
  publishedTime: guide.publishedTime,
  modifiedTime: guide.modifiedTime,
});

export default function FirstYearPetCostsPage() {
  return <BudgetGuideView guide={guide} />;
}
