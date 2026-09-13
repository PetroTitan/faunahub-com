import type { Breed } from "../../types.ts";

/** Burmilla. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-burmilla",
  slug: "burmilla",
  species: "cat",
  name: "Burmilla",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/burmilla/",
      recognizedYear: 2011,
      sourceId: "cfa-burmilla",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (BML Burmilla)",
      registryBreedCode: "BML",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-burmilla",
    },
  ],
  measurements: {
    weightKg: [
      { min: 4.5, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "not unusual for a mature male's weight to reach or exceed 10 pounds", sourceId: "cfa-burmilla" },
    ],
  },
  coat: {
    length: "variable",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-burmilla",
  },
  traits: {},
  sources: ["cfa-burmilla", "cfa-std-burmilla", "fife-burmilla"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
