import type { Breed } from "../../types.ts";

/** Birman. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-birman",
  slug: "birman",
  species: "cat",
  name: "Birman",
  scopeNote:
    "FIFe lists this breed as the Sacred Birman (SBI); CFA calls it the Birman.",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/birman/",
      sourceId: "cfa-birman",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 1 (SBI Sacred Birman)",
      registryBreedCode: "SBI",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-birman",
    },
  ],
  coat: {
    length: "long",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Longhair",
    sourceId: "cfa-birman",
  },
  traits: {},
  sources: ["cfa-birman", "cfa-std-birman", "fife-birman"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
