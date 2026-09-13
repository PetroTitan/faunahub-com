import type { Breed } from "../../types.ts";

/** Lagotto Romagnolo. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-lagotto-romagnolo",
  slug: "lagotto-romagnolo",
  species: "dog",
  name: "Lagotto Romagnolo",
  aliases: ["Lagotto"],
  originCountries: ["Italy"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "134",
      registryUrl: "https://www.akc.org/dog-breeds/lagotto-romagnolo/",
      recognizedYear: 2015,
      sourceId: "akc-lagotto-romagnolo",
    },
  ],
  measurements: {
    heightCm: [
      { min: 43.2, max: 48.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "17-19 inches (male)", sourceId: "akc-lagotto-romagnolo" },
      { min: 40.6, max: 45.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "16-18 inches (female)", sourceId: "akc-lagotto-romagnolo" },
    ],
    weightKg: [
      { min: 12.9, max: 15.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "28.5-35 pounds (male)", sourceId: "akc-lagotto-romagnolo" },
      { min: 10.9, max: 14.1, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "24-31 pounds (female)", sourceId: "akc-lagotto-romagnolo" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Curly", "Double"],
    statedAs: "AKC coat length: Medium; coat type: Curly, Double",
    sourceId: "akc-lagotto-romagnolo",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-lagotto-romagnolo" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-lagotto-romagnolo" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-lagotto-romagnolo" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-lagotto-romagnolo" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-lagotto-romagnolo" },
  },
  lifespanYears: { min: 15, max: 17, bound: "closed", basis: { kind: "breed" }, statedAs: "15-17 years", sourceId: "akc-lagotto-romagnolo" },
  sources: ["akc-lagotto-romagnolo"],
  images: ["dog-lagotto-romagnolo-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
