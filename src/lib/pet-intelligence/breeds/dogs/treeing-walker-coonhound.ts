import type { Breed } from "../../types.ts";

/** Treeing Walker Coonhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-treeing-walker-coonhound",
  slug: "treeing-walker-coonhound",
  species: "dog",
  name: "Treeing Walker Coonhound",
  aliases: ["The People's Choice"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "426",
      registryUrl: "https://www.akc.org/dog-breeds/treeing-walker-coonhound/",
      recognizedYear: 2012,
      sourceId: "akc-treeing-walker-coonhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 55.9, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "22-27 inches (male)", sourceId: "akc-treeing-walker-coonhound" },
      { min: 50.8, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "20-25 inches (female)", sourceId: "akc-treeing-walker-coonhound" },
    ],
    weightKg: [
      { min: 22.7, max: 31.8, bound: "closed", basis: { kind: "breed" }, statedAs: "50-70 pounds", sourceId: "akc-treeing-walker-coonhound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-treeing-walker-coonhound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-treeing-walker-coonhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-treeing-walker-coonhound" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-treeing-walker-coonhound" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-treeing-walker-coonhound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-treeing-walker-coonhound" },
  },
  lifespanYears: { min: 12, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "12-13 years", sourceId: "akc-treeing-walker-coonhound" },
  sources: ["akc-treeing-walker-coonhound"],
  images: ["dog-treeing-walker-coonhound-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
