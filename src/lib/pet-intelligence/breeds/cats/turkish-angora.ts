import type { Breed } from "../../types.ts";

/** Turkish Angora. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-turkish-angora",
  slug: "turkish-angora",
  species: "cat",
  name: "Turkish Angora",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/turkish-angora/",
      sourceId: "cfa-turkish-angora",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 2 (TUA Turkish Angora)",
      registryBreedCode: "TUA",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-turkish-angora",
    },
  ],
  coat: {
    length: "long",
    statedAs: "CFA breed profile, Coat Length: Longhair",
    sourceId: "cfa-turkish-angora",
  },
  traits: {},
  sources: ["cfa-turkish-angora", "cfa-std-turkish-angora", "fife-turkish-angora"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
