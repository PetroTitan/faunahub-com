import type { Breed } from "../../types.ts";

/** Polish Lowland Sheepdog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-polish-lowland-sheepdog",
  slug: "polish-lowland-sheepdog",
  species: "dog",
  name: "Polish Lowland Sheepdog",
  aliases: ["PON"],
  originCountries: ["Poland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "836",
      registryUrl: "https://www.akc.org/dog-breeds/polish-lowland-sheepdog/",
      recognizedYear: 2001,
      sourceId: "akc-polish-lowland-sheepdog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 50.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18-20 inches (male)", sourceId: "akc-polish-lowland-sheepdog" },
      { min: 43.2, max: 48.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "17-19 inches (female)", sourceId: "akc-polish-lowland-sheepdog" },
    ],
    weightKg: [
      { min: 13.6, max: 22.7, bound: "closed", basis: { kind: "breed" }, statedAs: "30-50 pounds", sourceId: "akc-polish-lowland-sheepdog" },
    ],
  },
  coat: {
    length: "long",
    types: ["Double"],
    statedAs: "AKC coat length: Long; coat type: Double",
    sourceId: "akc-polish-lowland-sheepdog",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-polish-lowland-sheepdog" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-polish-lowland-sheepdog" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-polish-lowland-sheepdog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-polish-lowland-sheepdog" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-polish-lowland-sheepdog" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-polish-lowland-sheepdog" },
  sources: ["akc-polish-lowland-sheepdog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
