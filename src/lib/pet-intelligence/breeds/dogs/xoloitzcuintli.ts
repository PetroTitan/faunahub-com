import type { Breed } from "../../types.ts";

/** Xoloitzcuintli. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-xoloitzcuintli",
  slug: "xoloitzcuintli",
  species: "dog",
  name: "Xoloitzcuintli",
  aliases: ["Xolo"],
  originCountries: ["Mexico"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "320",
      registryUrl: "https://www.akc.org/dog-breeds/xoloitzcuintli/",
      recognizedYear: 2011,
      sourceId: "akc-xoloitzcuintli",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 35.6, bound: "closed", basis: { kind: "variety", variety: "toy" }, statedAs: "10-14 inches (toy)", sourceId: "akc-xoloitzcuintli" },
      { min: 35.6, max: 45.7, bound: "closed", basis: { kind: "variety", variety: "miniature" }, statedAs: "14-18 inches (miniature)", sourceId: "akc-xoloitzcuintli" },
      { min: 45.7, max: 58.4, bound: "closed", basis: { kind: "variety", variety: "standard" }, statedAs: "18-23 inches (standard)", sourceId: "akc-xoloitzcuintli" },
    ],
    weightKg: [
      { min: 4.5, max: 6.8, bound: "closed", basis: { kind: "variety", variety: "toy" }, statedAs: "10-15 pounds (toy)", sourceId: "akc-xoloitzcuintli" },
      { min: 6.8, max: 13.6, bound: "closed", basis: { kind: "variety", variety: "miniature" }, statedAs: "15-30 pounds (miniature)", sourceId: "akc-xoloitzcuintli" },
      { min: 13.6, max: 24.9, bound: "closed", basis: { kind: "variety", variety: "standard" }, statedAs: "30-55 pounds (standard)", sourceId: "akc-xoloitzcuintli" },
    ],
  },
  coat: {
    length: "hairless",
    types: ["Hairless", "Smooth"],
    statedAs: "Recorded as hairless: the AKC coat-length field describes the coat where one is present, but this is a hairless breed and filing it as short-coated would put it in the wrong collection and hide it from a hairless filter. AKC coat length: Short; coat type: Hairless, Smooth",
    sourceId: "akc-xoloitzcuintli",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-xoloitzcuintli" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-xoloitzcuintli" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-xoloitzcuintli" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-xoloitzcuintli" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-xoloitzcuintli" },
  },
  lifespanYears: { min: 13, max: 18, bound: "closed", basis: { kind: "breed" }, statedAs: "13-18 years", sourceId: "akc-xoloitzcuintli" },
  sources: ["akc-xoloitzcuintli"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
