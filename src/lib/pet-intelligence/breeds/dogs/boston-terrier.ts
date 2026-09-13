import type { Breed } from "../../types.ts";

/** Boston Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-boston-terrier",
  slug: "boston-terrier",
  species: "dog",
  name: "Boston Terrier",
  aliases: ["Boston", "The American Gentleman"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "301",
      registryUrl: "https://www.akc.org/dog-breeds/boston-terrier/",
      recognizedYear: 1893,
      sourceId: "akc-boston-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 30.5, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 inches", sourceId: "akc-boston-terrier" },
    ],
    weightKg: [
      { min: 5.4, max: 11.3, bound: "closed", basis: { kind: "breed" }, statedAs: "12-25 pounds", sourceId: "akc-boston-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-boston-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-boston-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-boston-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-boston-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-boston-terrier" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-boston-terrier" },
  },
  lifespanYears: { min: 11, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 years", sourceId: "akc-boston-terrier" },
  sources: ["akc-boston-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
