import type { Breed } from "../../types.ts";

/** Japanese Akitainu. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-japanese-akitainu",
  slug: "japanese-akitainu",
  species: "dog",
  name: "Japanese Akitainu",
  aliases: ["Akitainu"],
  originCountries: ["Japan"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "321",
      registryUrl: "https://www.akc.org/dog-breeds/japanese-akitainu/",
      sourceId: "akc-japanese-akitainu",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 69.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-27.5 inches (male)", sourceId: "akc-japanese-akitainu" },
      { min: 57.2, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22.5-25 inches (female)", sourceId: "akc-japanese-akitainu" },
    ],
    weightKg: [
      { min: 29.5, max: 34, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "65-75 pounds (male)", sourceId: "akc-japanese-akitainu" },
      { min: 24.9, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "55-65 pounds (female)", sourceId: "akc-japanese-akitainu" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-japanese-akitainu",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-japanese-akitainu" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-japanese-akitainu" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-japanese-akitainu" },
    trainability: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-japanese-akitainu" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-japanese-akitainu" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-japanese-akitainu" },
  sources: ["akc-japanese-akitainu"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
