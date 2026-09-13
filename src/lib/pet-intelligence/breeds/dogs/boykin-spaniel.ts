import type { Breed } from "../../types.ts";

/** Boykin Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-boykin-spaniel",
  slug: "boykin-spaniel",
  species: "dog",
  name: "Boykin Spaniel",
  aliases: ["Boykin"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "131",
      registryUrl: "https://www.akc.org/dog-breeds/boykin-spaniel/",
      recognizedYear: 2009,
      sourceId: "akc-boykin-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 39.4, max: 45.7, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "15.5-18 inches (male)", sourceId: "akc-boykin-spaniel" },
      { min: 35.6, max: 41.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "14-16.5 inches (female)", sourceId: "akc-boykin-spaniel" },
    ],
    weightKg: [
      { min: 13.6, max: 18.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "30-40 pounds (male)", sourceId: "akc-boykin-spaniel" },
      { min: 11.3, max: 15.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "25-35 pounds (female)", sourceId: "akc-boykin-spaniel" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wavy", "Double"],
    statedAs: "AKC coat length: Medium; coat type: Wavy, Double",
    sourceId: "akc-boykin-spaniel",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-boykin-spaniel" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-boykin-spaniel" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-boykin-spaniel" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-boykin-spaniel" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-boykin-spaniel" },
  },
  lifespanYears: { min: 10, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "10-15 years", sourceId: "akc-boykin-spaniel" },
  sources: ["akc-boykin-spaniel"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
