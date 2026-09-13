import type { Breed } from "../../types.ts";

/** Icelandic Sheepdog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-icelandic-sheepdog",
  slug: "icelandic-sheepdog",
  species: "dog",
  name: "Icelandic Sheepdog",
  aliases: ["Icelandic", "aka Iceland Dog (U.K.)"],
  originCountries: ["Iceland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "842",
      registryUrl: "https://www.akc.org/dog-breeds/icelandic-sheepdog/",
      recognizedYear: 2010,
      sourceId: "akc-icelandic-sheepdog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 45.7, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "18 inches (male)", sourceId: "akc-icelandic-sheepdog" },
      { min: 41.9, max: 41.9, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "16.5 inches (female)", sourceId: "akc-icelandic-sheepdog" },
    ],
    weightKg: [
      { min: 13.6, max: 13.6, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "30 pounds (male)", sourceId: "akc-icelandic-sheepdog" },
      { min: 11.3, max: 11.3, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "25 pounds (female)", sourceId: "akc-icelandic-sheepdog" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-icelandic-sheepdog",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-icelandic-sheepdog" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-icelandic-sheepdog" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-icelandic-sheepdog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-icelandic-sheepdog" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-icelandic-sheepdog" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-icelandic-sheepdog" },
  sources: ["akc-icelandic-sheepdog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
