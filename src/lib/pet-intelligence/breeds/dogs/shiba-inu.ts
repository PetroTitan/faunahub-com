import type { Breed } from "../../types.ts";

/** Shiba Inu. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-shiba-inu",
  slug: "shiba-inu",
  species: "dog",
  name: "Shiba Inu",
  aliases: ["Shiba"],
  originCountries: ["Japan"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "315",
      registryUrl: "https://www.akc.org/dog-breeds/shiba-inu/",
      recognizedYear: 1992,
      sourceId: "akc-shiba-inu",
    },
  ],
  measurements: {
    heightCm: [
      { min: 36.8, max: 41.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "14.5-16.5 inches (male)", sourceId: "akc-shiba-inu" },
      { min: 34.3, max: 39.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "13.5-15.5 inches (female)", sourceId: "akc-shiba-inu" },
    ],
    weightKg: [
      { min: 10.4, max: 10.4, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "23 pounds (male)", sourceId: "akc-shiba-inu" },
      { min: 7.7, max: 7.7, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "17 pounds (female)", sourceId: "akc-shiba-inu" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-shiba-inu",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-shiba-inu" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-shiba-inu" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-shiba-inu" },
    trainability: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-shiba-inu" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-shiba-inu" },
  },
  lifespanYears: { min: 13, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "13-16 years", sourceId: "akc-shiba-inu" },
  sources: ["akc-shiba-inu"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
