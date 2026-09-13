import type { Breed } from "../../types.ts";

/** German Spitz. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-german-spitz",
  slug: "german-spitz",
  species: "dog",
  name: "German Spitz",
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "319",
      registryUrl: "https://www.akc.org/dog-breeds/german-spitz/",
      sourceId: "akc-german-spitz",
    },
  ],
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-spitz" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-spitz" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-spitz" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-spitz" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-spitz" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-german-spitz" },
  sources: ["akc-german-spitz"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
