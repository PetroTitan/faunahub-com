import type { Breed } from "../../types.ts";

/** German Shorthaired Pointer. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-german-shorthaired-pointer",
  slug: "german-shorthaired-pointer",
  species: "dog",
  name: "German Shorthaired Pointer",
  aliases: ["GSP"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "102",
      registryUrl: "https://www.akc.org/dog-breeds/german-shorthaired-pointer/",
      recognizedYear: 1930,
      sourceId: "akc-german-shorthaired-pointer",
    },
  ],
  measurements: {
    heightCm: [
      { min: 58.4, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-25 inches (male)", sourceId: "akc-german-shorthaired-pointer" },
      { min: 53.3, max: 58.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21-23 inches (female)", sourceId: "akc-german-shorthaired-pointer" },
    ],
    weightKg: [
      { min: 24.9, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "55-70 pounds (male)", sourceId: "akc-german-shorthaired-pointer" },
      { min: 20.4, max: 27.2, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "45-60 pounds (female)", sourceId: "akc-german-shorthaired-pointer" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-german-shorthaired-pointer",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-shorthaired-pointer" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-shorthaired-pointer" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-shorthaired-pointer" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-shorthaired-pointer" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-shorthaired-pointer" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-german-shorthaired-pointer" },
  sources: ["akc-german-shorthaired-pointer"],
  images: ["dog-german-shorthaired-pointer-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
