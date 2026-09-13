import type { Breed } from "../../types.ts";

/** Gordon Setter. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-gordon-setter",
  slug: "gordon-setter",
  species: "dog",
  name: "Gordon Setter",
  aliases: ["Gordon"],
  originCountries: ["Scotland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "110",
      registryUrl: "https://www.akc.org/dog-breeds/gordon-setter/",
      recognizedYear: 1878,
      sourceId: "akc-gordon-setter",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-27 inches (male)", sourceId: "akc-gordon-setter" },
      { min: 58.4, max: 66, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23-26 inches (female)", sourceId: "akc-gordon-setter" },
    ],
    weightKg: [
      { min: 24.9, max: 36.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "55-80 pounds (male)", sourceId: "akc-gordon-setter" },
      { min: 20.4, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "45-70 pounds (female)", sourceId: "akc-gordon-setter" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-gordon-setter",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-gordon-setter" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-gordon-setter" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-gordon-setter" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-gordon-setter" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-gordon-setter" },
  },
  lifespanYears: { min: 12, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "12-13 years", sourceId: "akc-gordon-setter" },
  sources: ["akc-gordon-setter"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
