import type { Breed } from "../../types.ts";

/** Wirehaired Pointing Griffon. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-wirehaired-pointing-griffon",
  slug: "wirehaired-pointing-griffon",
  species: "dog",
  name: "Wirehaired Pointing Griffon",
  aliases: ["Supreme Gundog"],
  originCountries: ["Continental Europe"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "124",
      registryUrl: "https://www.akc.org/dog-breeds/wirehaired-pointing-griffon/",
      recognizedYear: 1887,
      sourceId: "akc-wirehaired-pointing-griffon",
    },
  ],
  measurements: {
    heightCm: [
      { min: 55.9, max: 61, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "22-24 inches (male)", sourceId: "akc-wirehaired-pointing-griffon" },
      { min: 50.8, max: 55.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "20-22 inches (female)", sourceId: "akc-wirehaired-pointing-griffon" },
    ],
    weightKg: [
      { min: 22.7, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "50-70 pounds (male)", sourceId: "akc-wirehaired-pointing-griffon" },
      { min: 15.9, max: 22.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "35-50 pounds (female)", sourceId: "akc-wirehaired-pointing-griffon" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-wirehaired-pointing-griffon",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-wirehaired-pointing-griffon" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-wirehaired-pointing-griffon" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-wirehaired-pointing-griffon" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-wirehaired-pointing-griffon" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-wirehaired-pointing-griffon" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-wirehaired-pointing-griffon" },
  sources: ["akc-wirehaired-pointing-griffon"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
