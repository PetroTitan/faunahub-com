import type { Metadata } from "next";
import FoodSafetyHub from "@/components/food-safety/FoodSafetyHub";
import {
  getArticlesBySpecies,
  sortArticlesForHub,
} from "@/lib/food-safety/data";
import { buildMetadata } from "@/lib/metadata";

const LAST_UPDATED = "2026-05-18";

export const metadata: Metadata = buildMetadata({
  title: "Dog Food Safety — What Dogs Can and Cannot Eat",
  description:
    "Cautious, source-aware guides on common foods for dogs — chocolate, grapes, apples, cheese, chicken, eggs and more. Educational only; always consult a veterinarian.",
  path: "/dogs/food",
});

export default function DogFoodHubPage() {
  const articles = sortArticlesForHub(getArticlesBySpecies("dog"));

  return (
    <FoodSafetyHub
      species="dog"
      articles={articles}
      pageTitle="Dog Food Safety"
      intro="Practical, cautious guides to common questions about what dogs can and cannot eat. Each page covers a single food: the safety classification, why it matters, preparation cautions, warning signs, and when to call a veterinarian. None of this is a substitute for veterinary advice — it is here so you can ask better questions in the room with a professional."
      lastUpdated={LAST_UPDATED}
    />
  );
}
