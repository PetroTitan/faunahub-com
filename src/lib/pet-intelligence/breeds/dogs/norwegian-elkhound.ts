import type { Breed } from "../../types.ts";

/** Norwegian Elkhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-norwegian-elkhound",
  slug: "norwegian-elkhound",
  species: "dog",
  name: "Norwegian Elkhound",
  aliases: ["Elkhound"],
  originCountries: ["Norway"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "414",
      registryUrl: "https://www.akc.org/dog-breeds/norwegian-elkhound/",
      recognizedYear: 1913,
      sourceId: "akc-norwegian-elkhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 52.1, max: 52.1, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "20.5 inches (male)", sourceId: "akc-norwegian-elkhound" },
      { min: 49.5, max: 49.5, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "19.5 inches (female)", sourceId: "akc-norwegian-elkhound" },
    ],
    weightKg: [
      { min: 24.9, max: 24.9, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "55 pounds (male)", sourceId: "akc-norwegian-elkhound" },
      { min: 21.8, max: 21.8, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "48 pounds (female)", sourceId: "akc-norwegian-elkhound" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-norwegian-elkhound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-elkhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-elkhound" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-elkhound" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-elkhound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-elkhound" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-norwegian-elkhound" },
  sources: ["akc-norwegian-elkhound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
