import type { Breed } from "../../types.ts";

/** Snowshoe. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-snowshoe",
  slug: "snowshoe",
  species: "cat",
  name: "Snowshoe",
  recognition: [
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (SNO Snowshoe)",
      registryBreedCode: "SNO",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-snowshoe",
    },
  ],
  coat: {
    length: "short",
    statedAs: "Coat length is stated by the breed's registry name (Snowshoe).",
    sourceId: "fife-snowshoe",
  },
  traits: {},
  sources: ["fife-snowshoe"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
