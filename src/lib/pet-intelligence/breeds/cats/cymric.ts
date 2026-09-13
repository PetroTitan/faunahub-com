import type { Breed } from "../../types.ts";

/** Cymric. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-cymric",
  slug: "cymric",
  species: "cat",
  name: "Cymric",
  recognition: [
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (CYM Cymric)",
      registryBreedCode: "CYM",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-cymric",
    },
  ],
  coat: {
    length: "long",
    statedAs: "Coat length is stated by the breed's registry name (Cymric).",
    sourceId: "fife-cymric",
  },
  traits: {},
  sources: ["fife-cymric"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
