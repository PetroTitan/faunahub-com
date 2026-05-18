import type { MetadataRoute } from "next";
import { FOOD_SAFETY_ARTICLES } from "@/lib/food-safety/data";
import { DECISION_PAGES } from "@/lib/pet-choice/data";
import { BUDGET_GUIDES, PET_COST_ARTICLES } from "@/lib/pet-cost/data";

const BASE_URL = "https://faunahub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  const animalSlugs = [
    "lion",
    "tiger",
    "leopard",
    "jaguar",
    "cheetah",
    "wolf",
    "fox",
    "bear",
    "panda",
    "elephant",
    "giraffe",
    "zebra",
    "gorilla",
    "chimpanzee",
    "kangaroo",
    "koala",
    "eagle",
    "owl",
    "penguin",
    "crocodile",
    "alligator",
    "dolphin",
    "shark",
  ];

  const compareSlugs = [
    "lion-vs-tiger",
    "wolf-vs-dog",
    "leopard-vs-jaguar",
    "alligator-vs-crocodile",
    "cheetah-vs-leopard",
    "falcon-vs-eagle",
    "rabbit-vs-guinea-pig",
  ];

  const toolSlugs = [
    "pet-cost-calculator",
    "dog-age-calculator",
    "cat-age-calculator",
    "pet-age-calculator",
    "rabbit-age-calculator",
    "horse-age-calculator",
    "hamster-age-calculator",
    "guinea-pig-age-calculator",
    "pet-life-stage-calculator",
    "can-my-pet-eat-this",
    "pet-breed-selector",
  ];

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: today, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/dogs`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/dogs/breeds`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/dogs/health`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/dogs/food`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/dogs/behavior`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/dogs/costs`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/dogs/insurance`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/cats`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/cats/breeds`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/cats/health`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/cats/food`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/cats/behavior`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/cats/costs`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/cats/insurance`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/small-pets`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/birds`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fish`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/reptiles`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/animal-encyclopedia`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/animal-encyclopedia/mammals`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/animal-encyclopedia/birds`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/animal-encyclopedia/reptiles`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/animal-encyclopedia/marine-animals`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/animal-encyclopedia/insects`, lastModified: today, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/compare`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/costs`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/guides`, lastModified: today, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/resources`, lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: today, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/editorial-policy`, lastModified: today, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: today, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: today, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/affiliate-disclosure`, lastModified: today, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/contact`, lastModified: today, changeFrequency: "yearly", priority: 0.4 },
  ];

  const animalRoutes: MetadataRoute.Sitemap = animalSlugs.map((slug) => ({
    url: `${BASE_URL}/animals/${slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const compareRoutes: MetadataRoute.Sitemap = compareSlugs.map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const toolRoutes: MetadataRoute.Sitemap = toolSlugs.map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const foodSafetyRoutes: MetadataRoute.Sitemap = FOOD_SAFETY_ARTICLES.map(
    (article) => ({
      url: `${BASE_URL}/${article.species}s/food/${article.slug}`,
      lastModified: article.modifiedTime,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const decisionRoutes: MetadataRoute.Sitemap = DECISION_PAGES.map(
    (page) => ({
      url: `${BASE_URL}${page.parentHub}/${page.slug}`,
      lastModified: page.modifiedTime,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const costArticleRoutes: MetadataRoute.Sitemap = PET_COST_ARTICLES.map(
    (article) => ({
      url: `${BASE_URL}${article.path}`,
      lastModified: article.modifiedTime,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const budgetGuideRoutes: MetadataRoute.Sitemap = BUDGET_GUIDES.map(
    (guide) => ({
      url: `${BASE_URL}${guide.path}`,
      lastModified: guide.modifiedTime,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [
    ...staticRoutes,
    ...animalRoutes,
    ...compareRoutes,
    ...toolRoutes,
    ...foodSafetyRoutes,
    ...decisionRoutes,
    ...costArticleRoutes,
    ...budgetGuideRoutes,
  ];
}
