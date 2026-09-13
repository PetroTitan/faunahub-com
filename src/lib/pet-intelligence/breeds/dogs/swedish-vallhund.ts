import type { Breed } from "../../types.ts";

/** Swedish Vallhund. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-swedish-vallhund",
  slug: "swedish-vallhund",
  species: "dog",
  name: "Swedish Vallhund",
  aliases: ["SV", "Vallhund", "Viking Dog"],
  originCountries: ["Sweden"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "844",
      registryUrl: "https://www.akc.org/dog-breeds/swedish-vallhund/",
      recognizedYear: 2007,
      sourceId: "akc-swedish-vallhund",
    },
  ],
  measurements: {
    heightCm: [
      { min: 31.8, max: 34.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "12.5-13.75 inches (male)", sourceId: "akc-swedish-vallhund" },
      { min: 29.2, max: 32.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "11.5-12.75 inches (female)", sourceId: "akc-swedish-vallhund" },
    ],
    weightKg: [
      { min: 9.1, max: 15.9, bound: "closed", basis: { kind: "breed" }, statedAs: "20-35 pounds", sourceId: "akc-swedish-vallhund" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-swedish-vallhund",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-swedish-vallhund" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-swedish-vallhund" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-swedish-vallhund" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-swedish-vallhund" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-swedish-vallhund" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-swedish-vallhund" },
  sources: ["akc-swedish-vallhund"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
