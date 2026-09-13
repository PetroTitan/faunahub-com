import type { Breed } from "../../types.ts";

/** Rhodesian Ridgeback. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-rhodesian-ridgeback",
  slug: "rhodesian-ridgeback",
  species: "dog",
  name: "Rhodesian Ridgeback",
  aliases: ["RR"],
  originCountries: ["Zambia/Zimbabwe (formerly Rhodesia)"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "416",
      registryUrl: "https://www.akc.org/dog-breeds/rhodesian-ridgeback/",
      recognizedYear: 1955,
      sourceId: "akc-rhodesian-ridgeback",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-27 inches (male)", sourceId: "akc-rhodesian-ridgeback" },
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "24-26 inches (female)", sourceId: "akc-rhodesian-ridgeback" },
    ],
    weightKg: [
      { min: 38.6, max: 38.6, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "85 pounds (male)", sourceId: "akc-rhodesian-ridgeback" },
      { min: 31.8, max: 31.8, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "70 pounds (female)", sourceId: "akc-rhodesian-ridgeback" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-rhodesian-ridgeback",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-rhodesian-ridgeback" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-rhodesian-ridgeback" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-rhodesian-ridgeback" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-rhodesian-ridgeback" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-rhodesian-ridgeback" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-rhodesian-ridgeback" },
  sources: ["akc-rhodesian-ridgeback"],
  images: ["dog-rhodesian-ridgeback-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
