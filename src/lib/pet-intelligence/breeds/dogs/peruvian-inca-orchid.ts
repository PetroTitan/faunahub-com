import type { Breed } from "../../types.ts";

/** Peruvian Inca Orchid. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-peruvian-inca-orchid",
  slug: "peruvian-inca-orchid",
  species: "dog",
  name: "Peruvian Inca Orchid",
  aliases: ["PIOs"],
  originCountries: ["Peru"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "432",
      registryUrl: "https://www.akc.org/dog-breeds/peruvian-inca-orchid/",
      sourceId: "akc-peruvian-inca-orchid",
    },
  ],
  coat: {
    length: "hairless",
    types: ["Smooth", "Hairless"],
    statedAs: "Recorded as hairless: the AKC coat-length field describes the coat where one is present, but this is a hairless breed and filing it as short-coated would put it in the wrong collection and hide it from a hairless filter. AKC coat length: Short; coat type: Smooth, Hairless",
    sourceId: "akc-peruvian-inca-orchid",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-peruvian-inca-orchid" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-peruvian-inca-orchid" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-peruvian-inca-orchid" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-peruvian-inca-orchid" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-peruvian-inca-orchid" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-peruvian-inca-orchid" },
  sources: ["akc-peruvian-inca-orchid"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
