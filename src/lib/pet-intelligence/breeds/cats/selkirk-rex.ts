import type { Breed } from "../../types.ts";

/** Selkirk Rex. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-selkirk-rex",
  slug: "selkirk-rex",
  species: "cat",
  name: "Selkirk Rex",
  scopeNote:
    "FIFe recognises the Selkirk Rex as TWO breeds split by coat length (SRL Longhair, SRS Shorthair); CFA recognises one breed. FaunaHub publishes one record, as CFA does.",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/selkirk-rex/",
      // CFA states two dates: accepted for registration in 1992, advanced to
      // Championship in 2000. registryGroup here is "Championship", and the
      // contract for this field is the year the registry granted THAT status.
      recognizedYear: 2000,
      sourceId: "cfa-selkirk-rex",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 — SRL Selkirk Rex Longhair / SRS Selkirk Rex Shorthair",
      registryBreedCode: "SRL/SRS",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-selkirk-rex",
    },
  ],
  measurements: {
    weightKg: [
      { min: 5.4, max: 6.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "Adult males weigh between 12 and 15 pounds", sourceId: "cfa-selkirk-rex" },
    ],
  },
  coat: {
    length: "variable",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-selkirk-rex",
  },
  traits: {},
  sources: ["cfa-selkirk-rex", "cfa-std-selkirk-rex", "fife-selkirk-rex"],
  images: ["cat-selkirk-rex-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
