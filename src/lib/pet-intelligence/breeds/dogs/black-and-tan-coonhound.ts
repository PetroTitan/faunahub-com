import type { Breed } from "../../types.ts";

/** Black and Tan Coonhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-black-and-tan-coonhound",
  slug: "black-and-tan-coonhound",
  species: "dog",
  name: "Black and Tan Coonhound",
  canonicalCommonName: "Black and Tan Coonhound",
  aliases: ["Black and Tan", "Cooner", "B&T"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "405",
      registryUrl: "https://www.akc.org/dog-breeds/black-and-tan-coonhound/",
      recognizedYear: 1945,
      sourceId: "akc-black-and-tan-coonhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-27 inches (male)", sourceId: "akc-black-and-tan-coonhound" },
      { min: 58.4, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23-25 inches (female)", sourceId: "akc-black-and-tan-coonhound" },
    ],
    weightKg: [
      { min: 29.5, max: 49.9, bound: "closed", basis: { kind: "breed" }, statedAs: "65-110 pounds", sourceId: "akc-black-and-tan-coonhound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-black-and-tan-coonhound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-black-and-tan-coonhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-black-and-tan-coonhound" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-black-and-tan-coonhound" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-black-and-tan-coonhound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-black-and-tan-coonhound" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-black-and-tan-coonhound" },
  sources: ["akc-black-and-tan-coonhound"],
  images: ["dog-black-and-tan-coonhound-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
