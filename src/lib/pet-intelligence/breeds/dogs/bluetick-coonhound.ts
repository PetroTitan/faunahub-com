import type { Breed } from "../../types.ts";

/** Bluetick Coonhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bluetick-coonhound",
  slug: "bluetick-coonhound",
  species: "dog",
  name: "Bluetick Coonhound",
  aliases: ["Bluetick"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "424",
      registryUrl: "https://www.akc.org/dog-breeds/bluetick-coonhound/",
      recognizedYear: 2009,
      sourceId: "akc-bluetick-coonhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 55.9, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "22-27 inches (male)", sourceId: "akc-bluetick-coonhound" },
      { min: 53.3, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21-25 inches (female)", sourceId: "akc-bluetick-coonhound" },
    ],
    weightKg: [
      { min: 24.9, max: 36.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "55-80 pounds (male)", sourceId: "akc-bluetick-coonhound" },
      { min: 20.4, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "45-65 pounds (female)", sourceId: "akc-bluetick-coonhound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-bluetick-coonhound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bluetick-coonhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bluetick-coonhound" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bluetick-coonhound" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bluetick-coonhound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bluetick-coonhound" },
  },
  lifespanYears: { min: 11, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "11-12 years", sourceId: "akc-bluetick-coonhound" },
  sources: ["akc-bluetick-coonhound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
