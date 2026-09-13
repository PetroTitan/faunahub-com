import type { Breed } from "../../types.ts";

/** Portuguese Water Dog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-portuguese-water-dog",
  slug: "portuguese-water-dog",
  species: "dog",
  name: "Portuguese Water Dog",
  aliases: ["Portie", "PWD"],
  originCountries: ["Portugal"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "633",
      registryUrl: "https://www.akc.org/dog-breeds/portuguese-water-dog/",
      recognizedYear: 1983,
      sourceId: "akc-portuguese-water-dog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 50.8, max: 58.4, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "20-23 inches (male)", sourceId: "akc-portuguese-water-dog" },
      { min: 43.2, max: 53.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "17-21 inches (female)", sourceId: "akc-portuguese-water-dog" },
    ],
    weightKg: [
      { min: 19.1, max: 27.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "42-60 pounds (male)", sourceId: "akc-portuguese-water-dog" },
      { min: 15.9, max: 22.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "35-50 pounds (female)", sourceId: "akc-portuguese-water-dog" },
    ],
  },
  coat: {
    length: "long",
    types: ["Wavy", "Curly"],
    statedAs: "AKC coat length: Long; coat type: Wavy, Curly",
    sourceId: "akc-portuguese-water-dog",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-water-dog" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-water-dog" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-water-dog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-water-dog" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-water-dog" },
  },
  lifespanYears: { min: 11, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 years", sourceId: "akc-portuguese-water-dog" },
  sources: ["akc-portuguese-water-dog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
