import type { Breed } from "../../types.ts";

/** Tonkinese. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-tonkinese",
  slug: "tonkinese",
  species: "cat",
  name: "Tonkinese",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/tonkinese/",
      recognizedYear: 1984,
      sourceId: "cfa-tonkinese",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-tonkinese",
  },
  traits: {},
  sources: ["cfa-tonkinese", "cfa-std-tonkinese"],
  images: ["cat-tonkinese-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
