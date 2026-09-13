import type { Breed } from "../../types.ts";

/** Kai Ken. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-kai-ken",
  slug: "kai-ken",
  species: "dog",
  name: "Kai Ken",
  aliases: ["TigerDog"],
  originCountries: ["Japan"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "645",
      registryUrl: "https://www.akc.org/dog-breeds/kai-ken/",
      sourceId: "akc-kai-ken",
    },
  ],
  measurements: {
    heightCm: [
      { min: 47, max: 49.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18.5 - 19.5 (males)", sourceId: "akc-kai-ken" },
      { min: 39.4, max: 43.2, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "15.5 - 17 (females)", sourceId: "akc-kai-ken" },
    ],
    weightKg: [
      { min: 13.6, max: 18.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "30-40 (males)", sourceId: "akc-kai-ken" },
      { min: 11.3, max: 15.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "25-35 (females)", sourceId: "akc-kai-ken" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-kai-ken",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-kai-ken" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-kai-ken" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-kai-ken" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-kai-ken" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-kai-ken" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-kai-ken" },
  sources: ["akc-kai-ken"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
