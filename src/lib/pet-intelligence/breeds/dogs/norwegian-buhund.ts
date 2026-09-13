import type { Breed } from "../../types.ts";

/** Norwegian Buhund. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-norwegian-buhund",
  slug: "norwegian-buhund",
  species: "dog",
  name: "Norwegian Buhund",
  aliases: ["Buhund"],
  originCountries: ["Norway"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "838",
      registryUrl: "https://www.akc.org/dog-breeds/norwegian-buhund/",
      recognizedYear: 2009,
      sourceId: "akc-norwegian-buhund",
    },
  ],
  measurements: {
    heightCm: [
      { min: 43.2, max: 47, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "17-18.5 inches (male)", sourceId: "akc-norwegian-buhund" },
      { min: 40.6, max: 44.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "16-17.5 inches (female)", sourceId: "akc-norwegian-buhund" },
    ],
    weightKg: [
      { min: 14.1, max: 18.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "31-40 pounds (male)", sourceId: "akc-norwegian-buhund" },
      { min: 11.8, max: 15.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "26-35 pounds (female)", sourceId: "akc-norwegian-buhund" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-norwegian-buhund",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-buhund" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-buhund" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-buhund" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-buhund" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-buhund" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-norwegian-buhund" },
  sources: ["akc-norwegian-buhund"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
