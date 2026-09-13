import type { Breed } from "../../types.ts";

/** Turkish Van. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-turkish-van",
  slug: "turkish-van",
  species: "cat",
  name: "Turkish Van",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/turkish-van/",
      recognizedYear: 1994,
      sourceId: "cfa-turkish-van",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 1 (TUV Turkish Van)",
      registryBreedCode: "TUV",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-turkish-van",
    },
  ],
  measurements: {
    weightKg: [
      { min: 9.1, max: 9.1, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "Mature males may weigh 20 pounds", sourceId: "cfa-turkish-van" },
    ],
  },
  coat: {
    length: "long",
    statedAs: "CFA breed profile, Coat Length: Longhair",
    sourceId: "cfa-turkish-van",
  },
  traits: {},
  sources: ["cfa-turkish-van", "cfa-std-turkish-van", "fife-turkish-van"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
