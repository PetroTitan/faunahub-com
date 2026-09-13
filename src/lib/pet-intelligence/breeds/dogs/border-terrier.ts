import type { Breed } from "../../types.ts";

/** Border Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-border-terrier",
  slug: "border-terrier",
  species: "dog",
  name: "Border Terrier",
  aliases: ["Border"],
  originCountries: ["England/Scotland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "205",
      registryUrl: "https://www.akc.org/dog-breeds/border-terrier/",
      recognizedYear: 1930,
      sourceId: "akc-border-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 30.5, max: 38.1, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 inches", sourceId: "akc-border-terrier" },
    ],
    weightKg: [
      { min: 5.9, max: 7, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "13-15.5 pounds (male)", sourceId: "akc-border-terrier" },
      { min: 5.2, max: 6.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "11.5-14 pounds (female)", sourceId: "akc-border-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Wiry"],
    statedAs: "AKC coat length: Short; coat type: Wiry",
    sourceId: "akc-border-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-border-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-border-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-border-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-border-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-border-terrier" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-border-terrier" },
  sources: ["akc-border-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
