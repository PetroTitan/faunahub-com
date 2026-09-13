import type { Breed } from "../../types.ts";

/** Portuguese Podengo. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-portuguese-podengo",
  slug: "portuguese-podengo",
  species: "dog",
  name: "Portuguese Podengo",
  originCountries: ["Portugal"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "438",
      registryUrl: "https://www.akc.org/dog-breeds/portuguese-podengo/",
      sourceId: "akc-portuguese-podengo",
    },
  ],
  coat: {
    length: "medium",
    types: ["Smooth", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Smooth, Wiry",
    sourceId: "akc-portuguese-podengo",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-podengo" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-podengo" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-podengo" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-podengo" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-podengo" },
  },
  lifespanYears: { min: 10, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "10-15 years", sourceId: "akc-portuguese-podengo" },
  sources: ["akc-portuguese-podengo"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
