import type { Breed } from "../../types.ts";

/** Irish Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-irish-terrier",
  slug: "irish-terrier",
  species: "dog",
  name: "Irish Terrier",
  aliases: ["The Red Daredevil"],
  originCountries: ["Ireland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "210",
      registryUrl: "https://www.akc.org/dog-breeds/irish-terrier/",
      recognizedYear: 1885,
      sourceId: "akc-irish-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 45.7, bound: "about", basis: { kind: "breed" }, statedAs: "18 inches", sourceId: "akc-irish-terrier" },
    ],
    weightKg: [
      { min: 12.2, max: 12.2, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "27 pounds (male)", sourceId: "akc-irish-terrier" },
      { min: 11.3, max: 11.3, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "25 pounds (female)", sourceId: "akc-irish-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-irish-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-terrier" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-irish-terrier" },
  sources: ["akc-irish-terrier"],
  images: ["dog-irish-terrier-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
