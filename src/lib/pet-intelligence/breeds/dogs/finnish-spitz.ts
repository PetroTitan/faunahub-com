import type { Breed } from "../../types.ts";

/** Finnish Spitz. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-finnish-spitz",
  slug: "finnish-spitz",
  species: "dog",
  name: "Finnish Spitz",
  aliases: ["Finkie", "Barking Bird Dog"],
  originCountries: ["Finland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "313",
      registryUrl: "https://www.akc.org/dog-breeds/finnish-spitz/",
      recognizedYear: 1991,
      sourceId: "akc-finnish-spitz",
    },
  ],
  measurements: {
    heightCm: [
      { min: 44.5, max: 50.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "17.5-20 inches (male)", sourceId: "akc-finnish-spitz" },
      { min: 39.4, max: 45.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "15.5-18 inches (female)", sourceId: "akc-finnish-spitz" },
    ],
    weightKg: [
      { min: 11.3, max: 15, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-33 pounds (male)", sourceId: "akc-finnish-spitz" },
      { min: 9.1, max: 12.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "20-28 pounds (female)", sourceId: "akc-finnish-spitz" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-finnish-spitz",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-finnish-spitz" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-finnish-spitz" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-finnish-spitz" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-finnish-spitz" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-finnish-spitz" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-finnish-spitz" },
  sources: ["akc-finnish-spitz"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
