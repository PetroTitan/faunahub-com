import type { Breed } from "../../types.ts";

/** Samoyed. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-samoyed",
  slug: "samoyed",
  species: "dog",
  name: "Samoyed",
  aliases: ["Sammy", "Sam", "The Smiling Dog"],
  originCountries: ["Siberia"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "624",
      registryUrl: "https://www.akc.org/dog-breeds/samoyed/",
      recognizedYear: 1906,
      sourceId: "akc-samoyed",
    },
  ],
  measurements: {
    heightCm: [
      { min: 53.3, max: 59.7, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "21-23.5 inches (male)", sourceId: "akc-samoyed" },
      { min: 48.3, max: 53.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "19-21 inches (female)", sourceId: "akc-samoyed" },
    ],
    weightKg: [
      { min: 20.4, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "45-65 pounds (male)", sourceId: "akc-samoyed" },
      { min: 15.9, max: 22.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "35-50 pounds (female)", sourceId: "akc-samoyed" },
    ],
  },
  coat: {
    length: "long",
    types: ["Double"],
    statedAs: "AKC coat length: Long; coat type: Double",
    sourceId: "akc-samoyed",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-samoyed" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-samoyed" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-samoyed" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-samoyed" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-samoyed" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-samoyed" },
  sources: ["akc-samoyed"],
  images: ["dog-samoyed-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
