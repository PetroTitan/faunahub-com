import type { Breed } from "../../types.ts";

/** Bulldog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bulldog",
  slug: "bulldog",
  species: "dog",
  name: "Bulldog",
  aliases: ["Sourmug"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "302",
      registryUrl: "https://www.akc.org/dog-breeds/bulldog/",
      recognizedYear: 1886,
      sourceId: "akc-bulldog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 35.6, max: 38.1, bound: "closed", basis: { kind: "breed" }, statedAs: "14-15 inches", sourceId: "akc-bulldog" },
    ],
    weightKg: [
      { min: 22.7, max: 22.7, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "50 pounds (male)", sourceId: "akc-bulldog" },
      { min: 18.1, max: 18.1, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "40 pounds (female)", sourceId: "akc-bulldog" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-bulldog",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bulldog" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bulldog" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bulldog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bulldog" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bulldog" },
  },
  lifespanYears: { min: 8, max: 10, bound: "closed", basis: { kind: "breed" }, statedAs: "8-10 years", sourceId: "akc-bulldog" },
  sources: ["akc-bulldog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
