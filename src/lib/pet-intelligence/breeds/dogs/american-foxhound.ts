import type { Breed } from "../../types.ts";

/** American Foxhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-american-foxhound",
  slug: "american-foxhound",
  species: "dog",
  name: "American Foxhound",
  aliases: ["Foxhound"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "409",
      registryUrl: "https://www.akc.org/dog-breeds/american-foxhound/",
      recognizedYear: 1886,
      sourceId: "akc-american-foxhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 55.9, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "22-25 inches (male)", sourceId: "akc-american-foxhound" },
      { min: 53.3, max: 61, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21-24 inches (female)", sourceId: "akc-american-foxhound" },
    ],
    weightKg: [
      { min: 29.5, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "65-70 pounds (male)", sourceId: "akc-american-foxhound" },
      { min: 27.2, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "60-65 pounds (female)", sourceId: "akc-american-foxhound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-american-foxhound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-foxhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-foxhound" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-foxhound" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-foxhound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-foxhound" },
  },
  lifespanYears: { min: 11, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 years", sourceId: "akc-american-foxhound" },
  sources: ["akc-american-foxhound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
