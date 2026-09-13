import type { Breed } from "../../types.ts";

/** Parson Russell Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-parson-russell-terrier",
  slug: "parson-russell-terrier",
  species: "dog",
  name: "Parson Russell Terrier",
  aliases: ["PRT"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "230",
      registryUrl: "https://www.akc.org/dog-breeds/parson-russell-terrier/",
      recognizedYear: 1997,
      sourceId: "akc-parson-russell-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 35.6, max: 35.6, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "14 inches (male)", sourceId: "akc-parson-russell-terrier" },
      { min: 33, max: 33, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "13 inches (female)", sourceId: "akc-parson-russell-terrier" },
    ],
    weightKg: [
      { min: 5.9, max: 7.7, bound: "closed", basis: { kind: "breed" }, statedAs: "13-17 pounds", sourceId: "akc-parson-russell-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double", "Smooth"],
    statedAs: "AKC coat length: Short; coat type: Double, Smooth",
    sourceId: "akc-parson-russell-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-parson-russell-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-parson-russell-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-parson-russell-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-parson-russell-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-parson-russell-terrier" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-parson-russell-terrier" },
  sources: ["akc-parson-russell-terrier"],
  images: ["dog-parson-russell-terrier-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
