import type { Breed } from "../../types.ts";

/** Singapura. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-singapura",
  slug: "singapura",
  species: "cat",
  name: "Singapura",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/singapura/",
      recognizedYear: 1988,
      sourceId: "cfa-singapura",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (SIN Singapura)",
      registryBreedCode: "SIN",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-singapura",
    },
  ],
  measurements: {
    weightKg: [
      { min: 2.7, max: 3.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "Adult males range from 6 to 7 pounds in weight", sourceId: "cfa-singapura" },
    ],
  },
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-singapura",
  },
  traits: {},
  sources: ["cfa-singapura", "cfa-std-singapura", "fife-singapura"],
  images: ["cat-singapura-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
