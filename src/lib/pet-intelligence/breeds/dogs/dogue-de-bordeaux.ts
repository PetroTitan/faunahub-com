import type { Breed } from "../../types.ts";

/** Dogue de Bordeaux. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-dogue-de-bordeaux",
  slug: "dogue-de-bordeaux",
  species: "dog",
  name: "Dogue de Bordeaux",
  canonicalCommonName: "Dogue de Bordeaux",
  aliases: ["Dogue", "DDB"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "639",
      registryUrl: "https://www.akc.org/dog-breeds/dogue-de-bordeaux/",
      recognizedYear: 2008,
      sourceId: "akc-dogue-de-bordeaux",
    },
  ],
  measurements: {
    heightCm: [
      { min: 59.1, max: 59.1, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "23.27 inches (male)", sourceId: "akc-dogue-de-bordeaux" },
      { min: 58.4, max: 66, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23-26 inches (female)", sourceId: "akc-dogue-de-bordeaux" },
    ],
    weightKg: [
      { min: 49.9, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "110 pounds & up (male)", sourceId: "akc-dogue-de-bordeaux" },
      { min: 44.9, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "99 pounds & up (female)", sourceId: "akc-dogue-de-bordeaux" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-dogue-de-bordeaux",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dogue-de-bordeaux" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-dogue-de-bordeaux" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-dogue-de-bordeaux" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dogue-de-bordeaux" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-dogue-de-bordeaux" },
  },
  lifespanYears: { min: 5, max: 8, bound: "closed", basis: { kind: "breed" }, statedAs: "5-8 years", sourceId: "akc-dogue-de-bordeaux" },
  sources: ["akc-dogue-de-bordeaux"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
