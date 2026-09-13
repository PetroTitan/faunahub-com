import type { Breed } from "../../types.ts";

/** Wirehaired Vizsla. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-wirehaired-vizsla",
  slug: "wirehaired-vizsla",
  species: "dog",
  name: "Wirehaired Vizsla",
  aliases: ["WV"],
  originCountries: ["Hungary"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "141",
      registryUrl: "https://www.akc.org/dog-breeds/wirehaired-vizsla/",
      recognizedYear: 2014,
      sourceId: "akc-wirehaired-vizsla",
    },
  ],
  measurements: {
    heightCm: [
      { min: 58.4, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-25 inches (male)", sourceId: "akc-wirehaired-vizsla" },
      { min: 54.6, max: 58.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21.5-23 inches (female)", sourceId: "akc-wirehaired-vizsla" },
    ],
    weightKg: [
      { min: 24.9, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "55-65 pounds (male)", sourceId: "akc-wirehaired-vizsla" },
      { min: 20.4, max: 24.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "45-55 pounds (female)", sourceId: "akc-wirehaired-vizsla" },
    ],
  },
  coat: {
    length: "short",
    types: ["Wiry"],
    statedAs: "AKC coat length: Short; coat type: Wiry",
    sourceId: "akc-wirehaired-vizsla",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-wirehaired-vizsla" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-wirehaired-vizsla" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-wirehaired-vizsla" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-wirehaired-vizsla" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-wirehaired-vizsla" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-wirehaired-vizsla" },
  sources: ["akc-wirehaired-vizsla"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
