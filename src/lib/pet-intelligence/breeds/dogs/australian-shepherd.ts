import type { Breed } from "../../types.ts";

/** Australian Shepherd. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-australian-shepherd",
  slug: "australian-shepherd",
  species: "dog",
  name: "Australian Shepherd",
  originCountries: ["Australia"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "834",
      registryUrl: "https://www.akc.org/dog-breeds/australian-shepherd/",
      recognizedYear: 1991,
      sourceId: "akc-australian-shepherd",
    },
  ],
  measurements: {
    heightCm: [
      { min: 50.8, max: 58.4, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "20-23 inches (male)", sourceId: "akc-australian-shepherd" },
      { min: 45.7, max: 53.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "18-21 inches (female)", sourceId: "akc-australian-shepherd" },
    ],
    weightKg: [
      { min: 22.7, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "50-65 pounds (male)", sourceId: "akc-australian-shepherd" },
      { min: 18.1, max: 24.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "40-55 pounds (female)", sourceId: "akc-australian-shepherd" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-australian-shepherd",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-shepherd" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-shepherd" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-shepherd" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-shepherd" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-shepherd" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-australian-shepherd" },
  sources: ["akc-australian-shepherd"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
