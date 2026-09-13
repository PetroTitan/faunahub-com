import type { Breed } from "../../types.ts";

/** Colorpoint Shorthair. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-colorpoint-shorthair",
  slug: "colorpoint-shorthair",
  species: "cat",
  name: "Colorpoint Shorthair",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/colorpoint-shorthair/",
      recognizedYear: 1964,
      sourceId: "cfa-colorpoint-shorthair",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-colorpoint-shorthair",
  },
  traits: {},
  sources: ["cfa-colorpoint-shorthair", "cfa-std-colorpoint-shorthair"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
