import type { Breed } from "../../types.ts";

/** American Water Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-american-water-spaniel",
  slug: "american-water-spaniel",
  species: "dog",
  name: "American Water Spaniel",
  aliases: ["AWS"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "112",
      registryUrl: "https://www.akc.org/dog-breeds/american-water-spaniel/",
      recognizedYear: 1940,
      sourceId: "akc-american-water-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 38.1, max: 45.7, bound: "closed", basis: { kind: "breed" }, statedAs: "15-18 inches", sourceId: "akc-american-water-spaniel" },
    ],
    weightKg: [
      { min: 13.6, max: 20.4, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "30-45 pounds (male)", sourceId: "akc-american-water-spaniel" },
      { min: 11.3, max: 18.1, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "25-40 pounds (female)", sourceId: "akc-american-water-spaniel" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Curly", "Double"],
    statedAs: "AKC coat length: Medium; coat type: Curly, Double",
    sourceId: "akc-american-water-spaniel",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-water-spaniel" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-water-spaniel" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-water-spaniel" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-water-spaniel" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-water-spaniel" },
  },
  lifespanYears: { min: 10, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "10-14 years", sourceId: "akc-american-water-spaniel" },
  sources: ["akc-american-water-spaniel"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
