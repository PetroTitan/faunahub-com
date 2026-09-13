import type { Breed } from "../../types.ts";

/** Spanish Water Dog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-spanish-water-dog",
  slug: "spanish-water-dog",
  species: "dog",
  name: "Spanish Water Dog",
  aliases: ["SWD", "The Turkish Dog"],
  originCountries: ["Spain"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "862",
      registryUrl: "https://www.akc.org/dog-breeds/spanish-water-dog/",
      recognizedYear: 2015,
      sourceId: "akc-spanish-water-dog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 44.5, max: 50.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "17.5-19.75 inches (male)", sourceId: "akc-spanish-water-dog" },
      { min: 40, max: 45.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "15.75-18 inches (female)", sourceId: "akc-spanish-water-dog" },
    ],
    weightKg: [
      { min: 18.1, max: 22.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "40-49 pounds (male)", sourceId: "akc-spanish-water-dog" },
      { min: 14.1, max: 18.1, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "31-40 pounds (female)", sourceId: "akc-spanish-water-dog" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Corded", "Curly"],
    statedAs: "AKC coat length: Medium; coat type: Corded, Curly",
    sourceId: "akc-spanish-water-dog",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-spanish-water-dog" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-spanish-water-dog" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-spanish-water-dog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-spanish-water-dog" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-spanish-water-dog" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-spanish-water-dog" },
  sources: ["akc-spanish-water-dog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
