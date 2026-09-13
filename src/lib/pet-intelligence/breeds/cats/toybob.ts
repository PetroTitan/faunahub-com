import type { Breed } from "../../types.ts";

/** Toybob. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-toybob",
  slug: "toybob",
  species: "cat",
  name: "Toybob",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/toybob/",
      recognizedYear: 2019,
      sourceId: "cfa-toybob",
    },
  ],
  coat: {
    length: "variable",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-toybob",
  },
  traits: {},
  sources: ["cfa-toybob", "cfa-std-toybob"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
