import type { Metadata } from "next";
import BudgetGuideView from "@/components/pet-cost/BudgetGuide";
import { buildArticleMetadata } from "@/lib/metadata";
import { getBudgetGuideBySlug } from "@/lib/pet-cost/data";

const guide = getBudgetGuideBySlug("hidden-costs-of-pet-ownership")!;

export const metadata: Metadata = buildArticleMetadata({
  title: guide.title,
  description: guide.description,
  path: guide.path,
  publishedTime: guide.publishedTime,
  modifiedTime: guide.modifiedTime,
});

export default function HiddenCostsPage() {
  return <BudgetGuideView guide={guide} />;
}
