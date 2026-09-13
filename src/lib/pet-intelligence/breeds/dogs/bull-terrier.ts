import type { Breed } from "../../types.ts";

/** Bull Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bull-terrier",
  slug: "bull-terrier",
  species: "dog",
  name: "Bull Terrier",
  aliases: ["BT", "Bully", "White Cavalier"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "206",
      registryUrl: "https://www.akc.org/dog-breeds/bull-terrier/",
      recognizedYear: 1885,
      sourceId: "akc-bull-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 53.3, max: 55.9, bound: "closed", basis: { kind: "breed" }, statedAs: "21-22 inches", sourceId: "akc-bull-terrier" },
    ],
    weightKg: [
      { min: 22.7, max: 31.8, bound: "closed", basis: { kind: "breed" }, statedAs: "50-70 pounds", sourceId: "akc-bull-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-bull-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bull-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bull-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bull-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bull-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bull-terrier" },
  },
  lifespanYears: { min: 12, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "12-13 years", sourceId: "akc-bull-terrier" },
  sources: ["akc-bull-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
