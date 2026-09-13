import type { Breed } from "../../types.ts";

/** Pyrenean Shepherd. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-pyrenean-shepherd",
  slug: "pyrenean-shepherd",
  species: "dog",
  name: "Pyrenean Shepherd",
  aliases: ["Pyr Shep"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "853",
      registryUrl: "https://www.akc.org/dog-breeds/pyrenean-shepherd/",
      recognizedYear: 2009,
      sourceId: "akc-pyrenean-shepherd",
    },
  ],
  measurements: {
    heightCm: [
      { min: 39.4, max: 47, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "15.5-18.5 inches (male rough-faced)", sourceId: "akc-pyrenean-shepherd" },
      { min: 38.1, max: 45.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "15-18 inches (female rough-faced)", sourceId: "akc-pyrenean-shepherd" },
      { min: 39.4, max: 53.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "15.5-21 inches (male smooth-faced)", sourceId: "akc-pyrenean-shepherd" },
      { min: 39.4, max: 52.1, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "15.5-20.5 inches (female smooth-faced)", sourceId: "akc-pyrenean-shepherd" },
    ],
    weightKg: [
      { min: 6.8, max: 13.6, bound: "closed", basis: { kind: "breed" }, statedAs: "15-30 pounds", sourceId: "akc-pyrenean-shepherd" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Rough", "Smooth"],
    statedAs: "AKC coat length: Medium; coat type: Rough, Smooth",
    sourceId: "akc-pyrenean-shepherd",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pyrenean-shepherd" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pyrenean-shepherd" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pyrenean-shepherd" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pyrenean-shepherd" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pyrenean-shepherd" },
  },
  lifespanYears: { min: 17, max: 19, bound: "closed", basis: { kind: "breed" }, statedAs: "17-19 years", sourceId: "akc-pyrenean-shepherd" },
  sources: ["akc-pyrenean-shepherd"],
  images: ["dog-pyrenean-shepherd-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
