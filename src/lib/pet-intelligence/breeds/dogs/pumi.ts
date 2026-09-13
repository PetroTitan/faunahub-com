import type { Breed } from "../../types.ts";

/** Pumi. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-pumi",
  slug: "pumi",
  species: "dog",
  name: "Pumi",
  originCountries: ["Hungary"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "852",
      registryUrl: "https://www.akc.org/dog-breeds/pumi/",
      recognizedYear: 2016,
      sourceId: "akc-pumi",
    },
  ],
  measurements: {
    heightCm: [
      { min: 40.6, max: 47, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "16-18.5 inches (male)", sourceId: "akc-pumi" },
      { min: 38.1, max: 44.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "15-17.5 inches (female)", sourceId: "akc-pumi" },
    ],
    weightKg: [
      { min: 12.2, max: 13.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "27-29 pounds (male)", sourceId: "akc-pumi" },
      { min: 10, max: 10.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-24 pounds (female)", sourceId: "akc-pumi" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wavy", "Curly"],
    statedAs: "AKC coat length: Medium; coat type: Wavy, Curly",
    sourceId: "akc-pumi",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pumi" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pumi" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pumi" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pumi" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pumi" },
  },
  lifespanYears: { min: 12, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "12-13 years", sourceId: "akc-pumi" },
  sources: ["akc-pumi"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
