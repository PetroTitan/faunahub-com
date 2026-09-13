import type { Breed } from "../../types.ts";

/** Sealyham Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-sealyham-terrier",
  slug: "sealyham-terrier",
  species: "dog",
  name: "Sealyham Terrier",
  aliases: ["Sealy"],
  originCountries: ["Wales"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "219",
      registryUrl: "https://www.akc.org/dog-breeds/sealyham-terrier/",
      recognizedYear: 1911,
      sourceId: "akc-sealyham-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 26.7, max: 26.7, bound: "about", basis: { kind: "breed" }, statedAs: "10.5 inches", sourceId: "akc-sealyham-terrier" },
    ],
    weightKg: [
      { min: 10.4, max: 10.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-24 pounds (male)", sourceId: "akc-sealyham-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-sealyham-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-sealyham-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-sealyham-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-sealyham-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-sealyham-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-sealyham-terrier" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-sealyham-terrier" },
  sources: ["akc-sealyham-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
