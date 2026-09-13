import type { Breed } from "../../types.ts";

/** Puli. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-puli",
  slug: "puli",
  species: "dog",
  name: "Puli",
  originCountries: ["Hungary"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "821",
      registryUrl: "https://www.akc.org/dog-breeds/puli/",
      recognizedYear: 1936,
      sourceId: "akc-puli",
    },
  ],
  measurements: {
    heightCm: [
      { min: 43.2, max: 43.2, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "17 inches (male)", sourceId: "akc-puli" },
      { min: 40.6, max: 40.6, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "16 inches (female)", sourceId: "akc-puli" },
    ],
    weightKg: [
      { min: 11.3, max: 15.9, bound: "closed", basis: { kind: "breed" }, statedAs: "25-35 pounds", sourceId: "akc-puli" },
    ],
  },
  coat: {
    length: "long",
    types: ["Corded", "Double"],
    statedAs: "AKC coat length: Long; coat type: Corded, Double",
    sourceId: "akc-puli",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-puli" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-puli" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-puli" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-puli" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-puli" },
  },
  lifespanYears: { min: 10, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "10-15 years", sourceId: "akc-puli" },
  sources: ["akc-puli"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
