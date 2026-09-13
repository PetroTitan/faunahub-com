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
      // CFA states two dates: accepted for registration in 2000, advanced to
      // Championship in 2007. registryGroup here is "Championship", and the
      // contract for this field is the year the registry granted THAT status.
      recognizedYear: 2007,
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
      // The female clause was in the same CFA sentence and was dropped. The
      // identically-shaped clause IS stored for Norwegian Forest Cat and
      // Russian Blue, so this was an omission rather than a policy.
      { min: 3.6, max: 5.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "females range from 8 to 12 pounds", sourceId: "cfa-siberian" },
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
