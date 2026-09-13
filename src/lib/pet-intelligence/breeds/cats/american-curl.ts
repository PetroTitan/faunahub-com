import type { Breed } from "../../types.ts";

/** American Curl. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-american-curl",
  slug: "american-curl",
  species: "cat",
  name: "American Curl",
  scopeNote:
    "FIFe recognises the American Curl as TWO breeds split by coat length (ACL Longhair, ACS Shorthair); CFA recognises one breed in both coat lengths. FaunaHub publishes one record, as CFA does.",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/american-curl/",
      sourceId: "cfa-american-curl",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 2 — ACL American Curl Longhair / ACS American Curl Shorthair",
      registryBreedCode: "ACL/ACS",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-american-curl",
    },
  ],
  measurements: {
    weightKg: [
      { min: 2.3, max: 3.6, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "females weigh 5 to 8 pounds", sourceId: "cfa-american-curl" },
      { min: 3.2, max: 4.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "males weigh 7 to 10 pounds", sourceId: "cfa-american-curl" },
    ],
  },
  coat: {
    length: "variable",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-american-curl",
  },
  traits: {},
  sources: ["cfa-american-curl", "cfa-std-american-curl", "fife-american-curl"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
