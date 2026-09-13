import type { Breed } from "../../types.ts";

/** Cardigan Welsh Corgi. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-cardigan-welsh-corgi",
  slug: "cardigan-welsh-corgi",
  species: "dog",
  name: "Cardigan Welsh Corgi",
  aliases: ["Cardigan", "Cardi"],
  originCountries: ["Wales"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "828",
      registryUrl: "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
      recognizedYear: 1935,
      sourceId: "akc-cardigan-welsh-corgi",
    },
  ],
  measurements: {
    heightCm: [
      { min: 26.7, max: 31.8, bound: "closed", basis: { kind: "breed" }, statedAs: "10.5-12.5 inches", sourceId: "akc-cardigan-welsh-corgi" },
    ],
    weightKg: [
      { min: 13.6, max: 17.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "30-38 pounds (male)", sourceId: "akc-cardigan-welsh-corgi" },
      { min: 11.3, max: 15.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "25-34 pounds (female)", sourceId: "akc-cardigan-welsh-corgi" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-cardigan-welsh-corgi",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cardigan-welsh-corgi" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cardigan-welsh-corgi" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-cardigan-welsh-corgi" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-cardigan-welsh-corgi" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-cardigan-welsh-corgi" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-cardigan-welsh-corgi" },
  sources: ["akc-cardigan-welsh-corgi"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
