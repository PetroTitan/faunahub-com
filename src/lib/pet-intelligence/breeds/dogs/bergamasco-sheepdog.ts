import type { Breed } from "../../types.ts";

/** Bergamasco Sheepdog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bergamasco-sheepdog",
  slug: "bergamasco-sheepdog",
  species: "dog",
  name: "Bergamasco Sheepdog",
  aliases: ["Bergermaschi"],
  originCountries: ["Italy"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "841",
      registryUrl: "https://www.akc.org/dog-breeds/bergamasco-sheepdog/",
      recognizedYear: 2015,
      sourceId: "akc-bergamasco-sheepdog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 59.7, max: 59.7, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "23.5 inches (male)", sourceId: "akc-bergamasco-sheepdog" },
      { min: 55.9, max: 55.9, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "22 inches (female)", sourceId: "akc-bergamasco-sheepdog" },
    ],
    weightKg: [
      { min: 31.8, max: 38.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "70-84 pounds (male)", sourceId: "akc-bergamasco-sheepdog" },
      { min: 25.9, max: 32.2, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "57-71 pounds (female)", sourceId: "akc-bergamasco-sheepdog" },
    ],
  },
  coat: {
    length: "long",
    types: ["Corded"],
    statedAs: "AKC coat length: Long; coat type: Corded",
    sourceId: "akc-bergamasco-sheepdog",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bergamasco-sheepdog" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bergamasco-sheepdog" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bergamasco-sheepdog" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bergamasco-sheepdog" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bergamasco-sheepdog" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-bergamasco-sheepdog" },
  sources: ["akc-bergamasco-sheepdog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
