import type { Breed } from "../../types.ts";

/** Scottish Fold. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-scottish-fold",
  slug: "scottish-fold",
  species: "cat",
  name: "Scottish Fold",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/scottish-fold/",
      recognizedYear: 1978,
      sourceId: "cfa-scottish-fold",
    },
  ],
  coat: {
    length: "variable",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-scottish-fold",
  },
  traits: {},
  sources: ["cfa-scottish-fold", "cfa-std-scottish-fold"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
