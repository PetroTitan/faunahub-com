import type { Breed } from "../../types.ts";

/** West Highland White Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-west-highland-white-terrier",
  slug: "west-highland-white-terrier",
  species: "dog",
  name: "West Highland White Terrier",
  aliases: ["Westie"],
  originCountries: ["Scotland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "222",
      registryUrl: "https://www.akc.org/dog-breeds/west-highland-white-terrier/",
      recognizedYear: 1908,
      sourceId: "akc-west-highland-white-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 27.9, max: 27.9, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "11 inches (male)", sourceId: "akc-west-highland-white-terrier" },
      { min: 25.4, max: 25.4, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "10 inches (female)", sourceId: "akc-west-highland-white-terrier" },
    ],
    weightKg: [
      { min: 6.8, max: 9.1, bound: "closed", basis: { kind: "breed" }, statedAs: "15-20 pounds", sourceId: "akc-west-highland-white-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-west-highland-white-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-west-highland-white-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-west-highland-white-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-west-highland-white-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-west-highland-white-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-west-highland-white-terrier" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-west-highland-white-terrier" },
  sources: ["akc-west-highland-white-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
