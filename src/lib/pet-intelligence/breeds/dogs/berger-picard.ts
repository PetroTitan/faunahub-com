import type { Breed } from "../../types.ts";

/** Berger Picard. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-berger-picard",
  slug: "berger-picard",
  species: "dog",
  name: "Berger Picard",
  aliases: ["Picardy", "Picard"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "856",
      registryUrl: "https://www.akc.org/dog-breeds/berger-picard/",
      recognizedYear: 2015,
      sourceId: "akc-berger-picard",
    },
  ],
  measurements: {
    heightCm: [
      { min: 59.7, max: 64.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23.5-25.5 inches (male)", sourceId: "akc-berger-picard" },
      { min: 54.6, max: 59.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21.5-23.5 inches (female)", sourceId: "akc-berger-picard" },
    ],
    weightKg: [
      { min: 22.7, max: 31.8, bound: "closed", basis: { kind: "breed" }, statedAs: "50-70 pounds", sourceId: "akc-berger-picard" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Wiry",
    sourceId: "akc-berger-picard",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-berger-picard" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-berger-picard" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-berger-picard" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-berger-picard" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-berger-picard" },
  },
  lifespanYears: { min: 12, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "12-13 years", sourceId: "akc-berger-picard" },
  sources: ["akc-berger-picard"],
  images: ["dog-berger-picard-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
