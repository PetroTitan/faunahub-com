import type { MetadataRoute } from "next";

const BASE_URL = "https://faunahub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

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
    { url: `${BASE_URL}/animals/lion`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/animals/wolf`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/animals/eagle`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/compare`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/compare/lion-vs-tiger`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/compare/wolf-vs-dog`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/pet-cost-calculator`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/dog-age-calculator`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/cat-age-calculator`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/guides`, lastModified: today, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/resources`, lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: today, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/editorial-policy`, lastModified: today, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: today, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: today, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/affiliate-disclosure`, lastModified: today, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/contact`, lastModified: today, changeFrequency: "yearly", priority: 0.4 },
  ];

  return staticRoutes;
}
