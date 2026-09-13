import type { Breed } from "../../types.ts";

/** German Wirehaired Pointer. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-german-wirehaired-pointer",
  slug: "german-wirehaired-pointer",
  species: "dog",
  name: "German Wirehaired Pointer",
  aliases: ["GWP", "Wirehair"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "103",
      registryUrl: "https://www.akc.org/dog-breeds/german-wirehaired-pointer/",
      recognizedYear: 1959,
      sourceId: "akc-german-wirehaired-pointer",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-26 inches (male)", sourceId: "akc-german-wirehaired-pointer" },
      { min: 55.9, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "minimum 22 inches (female)", sourceId: "akc-german-wirehaired-pointer" },
    ],
    weightKg: [
      { min: 22.7, max: 31.8, bound: "closed", basis: { kind: "breed" }, statedAs: "50-70 pounds", sourceId: "akc-german-wirehaired-pointer" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-german-wirehaired-pointer",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-wirehaired-pointer" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-wirehaired-pointer" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-wirehaired-pointer" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-wirehaired-pointer" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-wirehaired-pointer" },
  },
  lifespanYears: { min: 14, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "14-16 years", sourceId: "akc-german-wirehaired-pointer" },
  sources: ["akc-german-wirehaired-pointer"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
