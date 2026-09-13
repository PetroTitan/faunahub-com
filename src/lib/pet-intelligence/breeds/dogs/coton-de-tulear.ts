import type { Breed } from "../../types.ts";

/** Coton de Tulear. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-coton-de-tulear",
  slug: "coton-de-tulear",
  species: "dog",
  name: "Coton de Tulear",
  canonicalCommonName: "Coton de Tulear",
  aliases: ["Coton", "Royal Dog of Madagascar"],
  originCountries: ["Madagascar"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "318",
      registryUrl: "https://www.akc.org/dog-breeds/coton-de-tulear/",
      recognizedYear: 2014,
      sourceId: "akc-coton-de-tulear",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 27.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "10-11 inches (male)", sourceId: "akc-coton-de-tulear" },
      { min: 22.9, max: 25.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "9-10 inches (female)", sourceId: "akc-coton-de-tulear" },
    ],
    weightKg: [
      { min: 4.1, max: 6.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "9-15 pounds (male)", sourceId: "akc-coton-de-tulear" },
      { min: 3.6, max: 5.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "8-13 pounds (female)", sourceId: "akc-coton-de-tulear" },
    ],
  },
  coat: {
    length: "long",
    types: ["Wavy", "Double"],
    statedAs: "AKC coat length: Long; coat type: Wavy, Double",
    sourceId: "akc-coton-de-tulear",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-coton-de-tulear" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-coton-de-tulear" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-coton-de-tulear" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-coton-de-tulear" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-coton-de-tulear" },
  },
  lifespanYears: { min: 15, max: 19, bound: "closed", basis: { kind: "breed" }, statedAs: "15-19 years", sourceId: "akc-coton-de-tulear" },
  sources: ["akc-coton-de-tulear"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
