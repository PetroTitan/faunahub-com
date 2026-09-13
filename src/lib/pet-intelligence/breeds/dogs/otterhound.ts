import type { Breed } from "../../types.ts";

/** Otterhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-otterhound",
  slug: "otterhound",
  species: "dog",
  name: "Otterhound",
  aliases: ["OH"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "415",
      registryUrl: "https://www.akc.org/dog-breeds/otterhound/",
      recognizedYear: 1909,
      sourceId: "akc-otterhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 68.6, max: 68.6, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "27 inches (male)", sourceId: "akc-otterhound" },
      { min: 61, max: 61, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "24 inches (female)", sourceId: "akc-otterhound" },
    ],
    weightKg: [
      { min: 52.2, max: 52.2, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "115 pounds (male)", sourceId: "akc-otterhound" },
      { min: 36.3, max: 36.3, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "80 pounds (female)", sourceId: "akc-otterhound" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Rough", "Double"],
    statedAs: "AKC coat length: Medium; coat type: Rough, Double",
    sourceId: "akc-otterhound",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-otterhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-otterhound" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-otterhound" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-otterhound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-otterhound" },
  },
  lifespanYears: { min: 10, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "10-13 years", sourceId: "akc-otterhound" },
  sources: ["akc-otterhound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
