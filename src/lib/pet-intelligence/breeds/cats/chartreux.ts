import type { Breed } from "../../types.ts";

/** Chartreux. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-chartreux",
  slug: "chartreux",
  species: "cat",
  name: "Chartreux",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/chartreux/",
      sourceId: "cfa-chartreux",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (CHA Chartreux)",
      registryBreedCode: "CHA",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-chartreux",
    },
  ],
  measurements: {
    weightKg: [
      { max: 6.4, bound: "at-most", basis: { kind: "sex", sex: "male" }, statedAs: "males may weigh as much as 14 pounds", sourceId: "cfa-chartreux" },
    ],
  },
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-chartreux",
  },
  traits: {},
  sources: ["cfa-chartreux", "cfa-std-chartreux", "fife-chartreux"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
