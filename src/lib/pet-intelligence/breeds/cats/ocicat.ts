import type { Breed } from "../../types.ts";

/** Ocicat. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-ocicat",
  slug: "ocicat",
  species: "cat",
  name: "Ocicat",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/ocicat/",
      recognizedYear: 1966,
      sourceId: "cfa-ocicat",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (OCI Ocicat)",
      registryBreedCode: "OCI",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-ocicat",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-ocicat",
  },
  traits: {},
  sources: ["cfa-ocicat", "cfa-std-ocicat", "fife-ocicat"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
