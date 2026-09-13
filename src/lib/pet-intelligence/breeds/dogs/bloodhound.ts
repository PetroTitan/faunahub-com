import type { Breed } from "../../types.ts";

/** Bloodhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bloodhound",
  slug: "bloodhound",
  species: "dog",
  name: "Bloodhound",
  aliases: ["Sleuth Hound"],
  originCountries: ["Western Europe"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "406",
      registryUrl: "https://www.akc.org/dog-breeds/bloodhound/",
      recognizedYear: 1885,
      sourceId: "akc-bloodhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-27 inches (male)", sourceId: "akc-bloodhound" },
      { min: 58.4, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23-25 inches (female)", sourceId: "akc-bloodhound" },
    ],
    weightKg: [
      { min: 40.8, max: 49.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "90-110 pounds (male)", sourceId: "akc-bloodhound" },
      { min: 36.3, max: 45.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "80-100 pounds (female)", sourceId: "akc-bloodhound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-bloodhound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bloodhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bloodhound" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bloodhound" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bloodhound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bloodhound" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-bloodhound" },
  sources: ["akc-bloodhound"],
  images: ["dog-bloodhound-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
