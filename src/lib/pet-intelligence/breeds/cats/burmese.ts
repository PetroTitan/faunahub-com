import type { Breed } from "../../types.ts";

/** Burmese. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-burmese",
  slug: "burmese",
  species: "cat",
  name: "Burmese",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/burmese/",
      recognizedYear: 1936,
      sourceId: "cfa-burmese",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (BUR Burmese)",
      registryBreedCode: "BUR",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-burmese",
    },
  ],
  measurements: {
    weightKg: [
      { min: 5.4, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "A mature male's weight may reach or exceed 12 pounds", sourceId: "cfa-burmese" },
    ],
  },
  coat: {
    length: "short",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-burmese",
  },
  traits: {},
  sources: ["cfa-burmese", "cfa-std-burmese", "fife-burmese"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
