import type { Breed } from "../../types.ts";

/** Bearded Collie. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bearded-collie",
  slug: "bearded-collie",
  species: "dog",
  name: "Bearded Collie",
  aliases: ["Beardie"],
  originCountries: ["Scotland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "831",
      registryUrl: "https://www.akc.org/dog-breeds/bearded-collie/",
      recognizedYear: 1976,
      sourceId: "akc-bearded-collie",
    },
  ],
  measurements: {
    heightCm: [
      { min: 53.3, max: 55.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "21-22 inches (male)", sourceId: "akc-bearded-collie" },
      { min: 50.8, max: 53.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "20-21 inches (female)", sourceId: "akc-bearded-collie" },
    ],
    weightKg: [
      { min: 20.4, max: 24.9, bound: "closed", basis: { kind: "breed" }, statedAs: "45-55 pounds", sourceId: "akc-bearded-collie" },
    ],
  },
  coat: {
    length: "long",
    types: ["Silky"],
    statedAs: "AKC coat length: Long; coat type: Silky",
    sourceId: "akc-bearded-collie",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bearded-collie" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bearded-collie" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bearded-collie" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bearded-collie" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bearded-collie" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-bearded-collie" },
  sources: ["akc-bearded-collie"],
  images: ["dog-bearded-collie-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
