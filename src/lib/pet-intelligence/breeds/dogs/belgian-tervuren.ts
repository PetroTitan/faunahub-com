import type { Breed } from "../../types.ts";

/** Belgian Tervuren. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-belgian-tervuren",
  slug: "belgian-tervuren",
  species: "dog",
  name: "Belgian Tervuren",
  aliases: ["Terv"],
  originCountries: ["Belgium"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "804",
      registryUrl: "https://www.akc.org/dog-breeds/belgian-tervuren/",
      recognizedYear: 1959,
      sourceId: "akc-belgian-tervuren",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-26 inches (male)", sourceId: "akc-belgian-tervuren" },
      { min: 55.9, max: 61, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-24 inches (female)", sourceId: "akc-belgian-tervuren" },
    ],
    weightKg: [
      { min: 24.9, max: 34, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "55-75 pounds (male)", sourceId: "akc-belgian-tervuren" },
      { min: 20.4, max: 27.2, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "45-60 pounds (female)", sourceId: "akc-belgian-tervuren" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-belgian-tervuren",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-tervuren" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-tervuren" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-tervuren" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-tervuren" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-tervuren" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-belgian-tervuren" },
  sources: ["akc-belgian-tervuren"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
