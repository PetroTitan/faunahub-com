import type { Breed } from "../../types.ts";

/** Balinese. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-balinese",
  slug: "balinese",
  species: "cat",
  name: "Balinese",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/balinese/",
      recognizedYear: 1970,
      sourceId: "cfa-balinese",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (BAL Balinese)",
      registryBreedCode: "BAL",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-balinese",
    },
  ],
  coat: {
    length: "long",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Longhair",
    sourceId: "cfa-balinese",
  },
  traits: {},
  sources: ["cfa-balinese", "cfa-std-balinese", "fife-balinese"],
  images: ["cat-balinese-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
