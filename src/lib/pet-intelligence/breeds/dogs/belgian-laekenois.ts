import type { Breed } from "../../types.ts";

/** Belgian Laekenois. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-belgian-laekenois",
  slug: "belgian-laekenois",
  species: "dog",
  name: "Belgian Laekenois",
  aliases: ["Laekenois"],
  originCountries: ["Belgium"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "843",
      registryUrl: "https://www.akc.org/dog-breeds/belgian-laekenois/",
      recognizedYear: 2020,
      sourceId: "akc-belgian-laekenois",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-26 inches (male)", sourceId: "akc-belgian-laekenois" },
      { min: 55.9, max: 61, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-24 inches (female)", sourceId: "akc-belgian-laekenois" },
    ],
    weightKg: [
      { min: 24.9, max: 29.5, bound: "closed", basis: { kind: "breed" }, statedAs: "55-65 pounds", sourceId: "akc-belgian-laekenois" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Rough", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Rough, Wiry",
    sourceId: "akc-belgian-laekenois",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-laekenois" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-laekenois" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-laekenois" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-laekenois" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-laekenois" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-belgian-laekenois" },
  sources: ["akc-belgian-laekenois"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
