import type { Breed } from "../../types.ts";

/** Norrbottenspets. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-norrbottenspets",
  slug: "norrbottenspets",
  species: "dog",
  name: "Norrbottenspets",
  aliases: ["Nobs"],
  originCountries: ["Norway"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "441",
      registryUrl: "https://www.akc.org/dog-breeds/norrbottenspets/",
      sourceId: "akc-norrbottenspets",
    },
  ],
  measurements: {
    heightCm: [
      { min: 41.9, max: 45.7, bound: "closed", basis: { kind: "breed" }, statedAs: "16.5-18 inches", sourceId: "akc-norrbottenspets" },
    ],
    weightKg: [
      { min: 9.1, max: 13.6, bound: "closed", basis: { kind: "breed" }, statedAs: "20-30 pounds", sourceId: "akc-norrbottenspets" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-norrbottenspets",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norrbottenspets" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-norrbottenspets" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norrbottenspets" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norrbottenspets" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norrbottenspets" },
  },
  lifespanYears: { min: 14, max: 17, bound: "closed", basis: { kind: "breed" }, statedAs: "14-17 years", sourceId: "akc-norrbottenspets" },
  sources: ["akc-norrbottenspets"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
