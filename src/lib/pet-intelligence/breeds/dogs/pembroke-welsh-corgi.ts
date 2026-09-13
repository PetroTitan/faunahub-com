import type { Breed } from "../../types.ts";

/** Pembroke Welsh Corgi. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-pembroke-welsh-corgi",
  slug: "pembroke-welsh-corgi",
  species: "dog",
  name: "Pembroke Welsh Corgi",
  aliases: ["Pembroke", "Pem", "or Pembi (U.K.)"],
  originCountries: ["Wales"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "829",
      registryUrl: "https://www.akc.org/dog-breeds/pembroke-welsh-corgi/",
      recognizedYear: 1934,
      sourceId: "akc-pembroke-welsh-corgi",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 30.5, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 inches", sourceId: "akc-pembroke-welsh-corgi" },
    ],
    weightKg: [
      { max: 13.6, bound: "at-most", basis: { kind: "sex", sex: "male" }, statedAs: "up to 30 pounds (male)", sourceId: "akc-pembroke-welsh-corgi" },
      { max: 12.7, bound: "at-most", basis: { kind: "sex", sex: "female" }, statedAs: "up to 28 pounds (female)", sourceId: "akc-pembroke-welsh-corgi" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-pembroke-welsh-corgi",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pembroke-welsh-corgi" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pembroke-welsh-corgi" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pembroke-welsh-corgi" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pembroke-welsh-corgi" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pembroke-welsh-corgi" },
  },
  lifespanYears: { min: 12, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "12-13 years", sourceId: "akc-pembroke-welsh-corgi" },
  sources: ["akc-pembroke-welsh-corgi"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
