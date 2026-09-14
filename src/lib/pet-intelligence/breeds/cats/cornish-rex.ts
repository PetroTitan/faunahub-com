import type { Breed } from "../../types.ts";

/** Cornish Rex. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-cornish-rex",
  slug: "cornish-rex",
  species: "cat",
  name: "Cornish Rex",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/cornish-rex/",
      recognizedYear: 1962,
      sourceId: "cfa-cornish-rex",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (CRX Cornish Rex)",
      registryBreedCode: "CRX",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-cornish-rex",
    },
  ],
  coat: {
    length: "short",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-cornish-rex",
  },
  traits: {},
  sources: ["cfa-cornish-rex", "cfa-std-cornish-rex", "fife-cornish-rex"],
  images: ["cat-cornish-rex-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
