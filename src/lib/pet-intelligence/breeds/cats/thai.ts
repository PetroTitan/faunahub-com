import type { Breed } from "../../types.ts";

/** Thai. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-thai",
  slug: "thai",
  species: "cat",
  name: "Thai",
  recognition: [
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (THA Thai)",
      registryBreedCode: "THA",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-thai",
    },
  ],
  coat: {
    length: "short",
    statedAs: "Coat length is stated by the breed's registry name (Thai).",
    sourceId: "fife-thai",
  },
  traits: {},
  sources: ["fife-thai"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
