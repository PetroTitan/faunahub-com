import type { Breed } from "../../types.ts";

/** Belgian Sheepdog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-belgian-sheepdog",
  slug: "belgian-sheepdog",
  species: "dog",
  name: "Belgian Sheepdog",
  aliases: ["Belgian", "aka Groenendael (Europe)"],
  originCountries: ["Belgium"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "803",
      registryUrl: "https://www.akc.org/dog-breeds/belgian-sheepdog/",
      recognizedYear: 1912,
      sourceId: "akc-belgian-sheepdog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-26 inches (male)", sourceId: "akc-belgian-sheepdog" },
      { min: 55.9, max: 61, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-24 inches (female)", sourceId: "akc-belgian-sheepdog" },
    ],
    weightKg: [
      { min: 24.9, max: 34, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "55-75 pounds (male)", sourceId: "akc-belgian-sheepdog" },
      { min: 20.4, max: 27.2, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "45-60 pounds (female)", sourceId: "akc-belgian-sheepdog" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-belgian-sheepdog",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-sheepdog" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-sheepdog" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-sheepdog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-sheepdog" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-sheepdog" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-belgian-sheepdog" },
  sources: ["akc-belgian-sheepdog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
