import type { Breed } from "../../types.ts";

/** Norwegian Lundehund. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-norwegian-lundehund",
  slug: "norwegian-lundehund",
  species: "dog",
  name: "Norwegian Lundehund",
  aliases: ["Lundhund", "Lundie"],
  originCountries: ["Norway"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "330",
      registryUrl: "https://www.akc.org/dog-breeds/norwegian-lundehund/",
      recognizedYear: 2011,
      sourceId: "akc-norwegian-lundehund",
    },
  ],
  measurements: {
    heightCm: [
      { min: 33, max: 38.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "13-15 inches (male)", sourceId: "akc-norwegian-lundehund" },
      { min: 30.5, max: 35.6, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "12-14 inches (female)", sourceId: "akc-norwegian-lundehund" },
    ],
    weightKg: [
      { min: 6.8, max: 8.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "15-18 lbs (male)", sourceId: "akc-norwegian-lundehund" },
      { min: 5.4, max: 6.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "12-15 lbs (female)", sourceId: "akc-norwegian-lundehund" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-norwegian-lundehund",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-lundehund" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-lundehund" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-lundehund" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-lundehund" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwegian-lundehund" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-norwegian-lundehund" },
  sources: ["akc-norwegian-lundehund"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
