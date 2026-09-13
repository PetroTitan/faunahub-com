import type { Breed } from "../../types.ts";

/** Siberian. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-siberian",
  slug: "siberian",
  species: "cat",
  name: "Siberian",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/siberian/",
      recognizedYear: 2000,
      sourceId: "cfa-siberian",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 2 (SIB Siberian)",
      registryBreedCode: "SIB",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-siberian",
    },
  ],
  measurements: {
    weightKg: [
      { min: 5.4, max: 8.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "can range between 12 and 18 pounds for a mature male", sourceId: "cfa-siberian" },
    ],
  },
  coat: {
    length: "long",
    statedAs: "CFA breed profile, Coat Length: Longhair",
    sourceId: "cfa-siberian",
  },
  traits: {},
  sources: ["cfa-siberian", "cfa-std-siberian", "fife-siberian"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
