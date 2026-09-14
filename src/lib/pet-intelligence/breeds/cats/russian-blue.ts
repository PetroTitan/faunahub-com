import type { Breed } from "../../types.ts";

/** Russian Blue. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-russian-blue",
  slug: "russian-blue",
  species: "cat",
  name: "Russian Blue",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/russian-blue/",
      sourceId: "cfa-russian-blue",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (RUS Russian Blue)",
      registryBreedCode: "RUS",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-russian-blue",
    },
  ],
  measurements: {
    weightKg: [
      { max: 4.5, bound: "at-most", basis: { kind: "sex", sex: "male" }, statedAs: "males rarely exceeding 10 pounds", sourceId: "cfa-russian-blue" },
      { min: 2.3, max: 3.6, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "females ranging from 5 to 8 pounds", sourceId: "cfa-russian-blue" },
    ],
  },
  coat: {
    length: "short",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-russian-blue",
  },
  traits: {},
  sources: ["cfa-russian-blue", "cfa-std-russian-blue", "fife-russian-blue"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
