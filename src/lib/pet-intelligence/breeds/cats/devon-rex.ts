import type { Breed } from "../../types.ts";

/** Devon Rex. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-devon-rex",
  slug: "devon-rex",
  species: "cat",
  name: "Devon Rex",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/devon-rex/",
      sourceId: "cfa-devon-rex",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (DRX Devon Rex)",
      registryBreedCode: "DRX",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-devon-rex",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-devon-rex",
  },
  traits: {},
  sources: ["cfa-devon-rex", "cfa-std-devon-rex", "fife-devon-rex"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
