import type { Breed } from "../../types.ts";

/** Glen of Imaal Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-glen-of-imaal-terrier",
  slug: "glen-of-imaal-terrier",
  species: "dog",
  name: "Glen of Imaal Terrier",
  canonicalCommonName: "Glen of Imaal Terrier",
  aliases: ["Glen"],
  originCountries: ["Ireland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "229",
      registryUrl: "https://www.akc.org/dog-breeds/glen-of-imaal-terrier/",
      recognizedYear: 2004,
      sourceId: "akc-glen-of-imaal-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 31.8, max: 35.6, bound: "closed", basis: { kind: "breed" }, statedAs: "12.5-14 inches", sourceId: "akc-glen-of-imaal-terrier" },
    ],
    weightKg: [
      { min: 14.5, max: 18.1, bound: "closed", basis: { kind: "breed" }, statedAs: "32-40 pounds", sourceId: "akc-glen-of-imaal-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Wiry",
    sourceId: "akc-glen-of-imaal-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-glen-of-imaal-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-glen-of-imaal-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-glen-of-imaal-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-glen-of-imaal-terrier" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-glen-of-imaal-terrier" },
  },
  lifespanYears: { min: 10, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "10-15 years", sourceId: "akc-glen-of-imaal-terrier" },
  sources: ["akc-glen-of-imaal-terrier"],
  images: ["dog-glen-of-imaal-terrier-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
