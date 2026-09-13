import type { Breed } from "../../types.ts";

/** Australian Cattle Dog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-australian-cattle-dog",
  slug: "australian-cattle-dog",
  species: "dog",
  name: "Australian Cattle Dog",
  aliases: ["ACD"],
  originCountries: ["Australia"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "832",
      registryUrl: "https://www.akc.org/dog-breeds/australian-cattle-dog/",
      recognizedYear: 1980,
      sourceId: "akc-australian-cattle-dog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 50.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18-20 inches (male)", sourceId: "akc-australian-cattle-dog" },
      { min: 43.2, max: 48.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "17-19 inches (female)", sourceId: "akc-australian-cattle-dog" },
    ],
    weightKg: [
      { min: 15.9, max: 22.7, bound: "closed", basis: { kind: "breed" }, statedAs: "35-50 pounds", sourceId: "akc-australian-cattle-dog" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double", "Smooth"],
    statedAs: "AKC coat length: Short; coat type: Double, Smooth",
    sourceId: "akc-australian-cattle-dog",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-cattle-dog" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-cattle-dog" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-cattle-dog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-cattle-dog" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-cattle-dog" },
  },
  lifespanYears: { min: 12, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "12-16 years", sourceId: "akc-australian-cattle-dog" },
  sources: ["akc-australian-cattle-dog"],
  images: ["dog-australian-cattle-dog-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
