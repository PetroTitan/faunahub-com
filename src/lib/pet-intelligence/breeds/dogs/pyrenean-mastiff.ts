import type { Breed } from "../../types.ts";

/** Pyrenean Mastiff. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-pyrenean-mastiff",
  slug: "pyrenean-mastiff",
  species: "dog",
  name: "Pyrenean Mastiff",
  originCountries: ["Spain"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "667",
      registryUrl: "https://www.akc.org/dog-breeds/pyrenean-mastiff/",
      sourceId: "akc-pyrenean-mastiff",
    },
  ],
  measurements: {
    heightCm: [
      { min: 76.2, max: 78.7, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "Males 30-31 inches", sourceId: "akc-pyrenean-mastiff" },
      { min: 71.1, max: 76.2, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "Females 28-30 inches", sourceId: "akc-pyrenean-mastiff" },
    ],
    weightKg: [
      { min: 54.4, max: 86.2, bound: "closed", basis: { kind: "breed" }, statedAs: "120-190 pounds", sourceId: "akc-pyrenean-mastiff" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-pyrenean-mastiff",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pyrenean-mastiff" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pyrenean-mastiff" },
    exerciseNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pyrenean-mastiff" },
    trainability: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pyrenean-mastiff" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pyrenean-mastiff" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-pyrenean-mastiff" },
  sources: ["akc-pyrenean-mastiff"],
  images: ["dog-pyrenean-mastiff-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
