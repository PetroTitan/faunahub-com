import type { Breed } from "../../types.ts";

/** Lancashire Heeler. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-lancashire-heeler",
  slug: "lancashire-heeler",
  species: "dog",
  name: "Lancashire Heeler",
  originCountries: ["Unknown"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "849",
      registryUrl: "https://www.akc.org/dog-breeds/lancashire-heeler/",
      recognizedYear: 2024,
      sourceId: "akc-lancashire-heeler",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 30.5, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 inches", sourceId: "akc-lancashire-heeler" },
    ],
    weightKg: [
      { min: 4.1, max: 7.7, bound: "closed", basis: { kind: "breed" }, statedAs: "9-17 pounds", sourceId: "akc-lancashire-heeler" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-lancashire-heeler",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-lancashire-heeler" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-lancashire-heeler" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-lancashire-heeler" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-lancashire-heeler" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-lancashire-heeler" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-lancashire-heeler" },
  sources: ["akc-lancashire-heeler"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
