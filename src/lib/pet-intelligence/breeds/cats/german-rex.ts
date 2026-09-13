import type { Breed } from "../../types.ts";

/** German Rex. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-german-rex",
  slug: "german-rex",
  species: "cat",
  name: "German Rex",
  recognition: [
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (GRX German Rex)",
      registryBreedCode: "GRX",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-german-rex",
    },
  ],
  coat: {
    length: "short",
    statedAs: "Coat length is stated by the breed's registry name (German Rex).",
    sourceId: "fife-german-rex",
  },
  traits: {},
  sources: ["fife-german-rex"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
