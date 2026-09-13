import type { Breed } from "../../types.ts";

/** Nederlandse Kooikerhondje. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-nederlandse-kooikerhondje",
  slug: "nederlandse-kooikerhondje",
  species: "dog",
  name: "Nederlandse Kooikerhondje",
  aliases: ["Kooiker"],
  originCountries: ["The Netherlands"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "135",
      registryUrl: "https://www.akc.org/dog-breeds/nederlandse-kooikerhondje/",
      recognizedYear: 2018,
      sourceId: "akc-nederlandse-kooikerhondje",
    },
  ],
  measurements: {
    heightCm: [
      { min: 40.6, max: 40.6, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "Dogs 16\"", sourceId: "akc-nederlandse-kooikerhondje" },
      { min: 38.1, max: 38.1, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "Females 15\"", sourceId: "akc-nederlandse-kooikerhondje" },
    ],
    weightKg: [
      { min: 9.1, max: 13.6, bound: "closed", basis: { kind: "breed" }, statedAs: "20 - 30 lbs", sourceId: "akc-nederlandse-kooikerhondje" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wavy", "Double"],
    statedAs: "AKC coat length: Medium; coat type: Wavy, Double",
    sourceId: "akc-nederlandse-kooikerhondje",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-nederlandse-kooikerhondje" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-nederlandse-kooikerhondje" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-nederlandse-kooikerhondje" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-nederlandse-kooikerhondje" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-nederlandse-kooikerhondje" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-nederlandse-kooikerhondje" },
  sources: ["akc-nederlandse-kooikerhondje"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
