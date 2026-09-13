import type { Breed } from "../../types.ts";

/** Kuvasz. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-kuvasz",
  slug: "kuvasz",
  species: "dog",
  name: "Kuvasz",
  aliases: ["Kuv"],
  originCountries: ["Hungary"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "617",
      registryUrl: "https://www.akc.org/dog-breeds/kuvasz/",
      recognizedYear: 1931,
      sourceId: "akc-kuvasz",
    },
  ],
  measurements: {
    heightCm: [
      { min: 71.1, max: 76.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "28-30 inches (male)", sourceId: "akc-kuvasz" },
      { min: 66, max: 71.1, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "26-28 inches (female)", sourceId: "akc-kuvasz" },
    ],
    weightKg: [
      { min: 45.4, max: 52.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "100-115 pounds (male)", sourceId: "akc-kuvasz" },
      { min: 31.8, max: 40.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "70-90 pounds (female)", sourceId: "akc-kuvasz" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-kuvasz",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-kuvasz" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-kuvasz" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-kuvasz" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-kuvasz" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-kuvasz" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-kuvasz" },
  sources: ["akc-kuvasz"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
