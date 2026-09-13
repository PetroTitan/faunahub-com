import type { Breed } from "../../types.ts";

/** Black Russian Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-black-russian-terrier",
  slug: "black-russian-terrier",
  species: "dog",
  name: "Black Russian Terrier",
  aliases: ["BRT", "Blackie", "Black Pearl of Russia"],
  originCountries: ["Russia"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "637",
      registryUrl: "https://www.akc.org/dog-breeds/black-russian-terrier/",
      recognizedYear: 2004,
      sourceId: "akc-black-russian-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 68.6, max: 76.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "27-30 inches (male)", sourceId: "akc-black-russian-terrier" },
      { min: 66, max: 73.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "26-29 inches (female)", sourceId: "akc-black-russian-terrier" },
    ],
    weightKg: [
      { min: 36.3, max: 59, bound: "closed", basis: { kind: "breed" }, statedAs: "80-130 pounds", sourceId: "akc-black-russian-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Curly", "Double"],
    statedAs: "AKC coat length: Medium, Long; coat type: Curly, Double",
    sourceId: "akc-black-russian-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-black-russian-terrier" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-black-russian-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-black-russian-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-black-russian-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-black-russian-terrier" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-black-russian-terrier" },
  sources: ["akc-black-russian-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
