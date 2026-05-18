import type { Metadata } from "next";
import FoodSafetyHub from "@/components/food-safety/FoodSafetyHub";
import {
  getArticlesBySpecies,
  sortArticlesForHub,
} from "@/lib/food-safety/data";
import { buildMetadata } from "@/lib/metadata";

const LAST_UPDATED = "2026-05-18";

export const metadata: Metadata = buildMetadata({
  title: "Cat Food Safety — What Cats Can and Cannot Eat",
  description:
    "Cautious, source-aware guides on common foods for cats — milk, cheese, chicken, eggs, tuna, chocolate and more. Educational only; always consult a veterinarian.",
  path: "/cats/food",
});

export default function CatFoodHubPage() {
  const articles = sortArticlesForHub(getArticlesBySpecies("cat"));

  return (
    <FoodSafetyHub
      species="cat"
      articles={articles}
      pageTitle="Cat Food Safety"
      intro="Practical, cautious guides to common questions about what cats can and cannot eat. Each page covers a single food: the safety classification, why it matters, preparation cautions, warning signs, and when to call a veterinarian. None of this is a substitute for veterinary advice — it is here so you can ask better questions in the room with a professional."
      lastUpdated={LAST_UPDATED}
    />
  );
}
