import type { Breed } from "../../types.ts";

/** Finnish Lapphund. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-finnish-lapphund",
  slug: "finnish-lapphund",
  species: "dog",
  name: "Finnish Lapphund",
  aliases: ["Lappy"],
  originCountries: ["Finland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "848",
      registryUrl: "https://www.akc.org/dog-breeds/finnish-lapphund/",
      recognizedYear: 2011,
      sourceId: "akc-finnish-lapphund",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 53.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18-21 inches (male)", sourceId: "akc-finnish-lapphund" },
      { min: 40.6, max: 48.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "16-19 inches (female)", sourceId: "akc-finnish-lapphund" },
    ],
    weightKg: [
      { min: 15, max: 24, bound: "closed", basis: { kind: "breed" }, statedAs: "33-53 pounds", sourceId: "akc-finnish-lapphund" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-finnish-lapphund",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-finnish-lapphund" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-finnish-lapphund" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-finnish-lapphund" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-finnish-lapphund" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-finnish-lapphund" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-finnish-lapphund" },
  sources: ["akc-finnish-lapphund"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
