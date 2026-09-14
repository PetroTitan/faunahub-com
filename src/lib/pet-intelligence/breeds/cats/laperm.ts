import type { Breed } from "../../types.ts";

/** LaPerm. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-laperm",
  slug: "laperm",
  species: "cat",
  name: "LaPerm",
  scopeNote:
    "FIFe recognises the LaPerm as TWO breeds split by coat length (LPL Longhair, LPS Shorthair); CFA recognises one breed. FaunaHub publishes one record, as CFA does.",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/laperm/",
      // CFA states two dates: accepted for registration in 2000, advanced to
      // Championship in 2008. registryGroup here is "Championship", and the
      // contract for this field is the year the registry granted THAT status.
      recognizedYear: 2008,
      sourceId: "cfa-laperm",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 2 — LPL LaPerm Longhair / LPS LaPerm Shorthair",
      registryBreedCode: "LPL/LPS",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-laperm",
    },
  ],
  coat: {
    length: "variable",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-laperm",
  },
  traits: {},
  sources: ["cfa-laperm", "cfa-std-laperm", "fife-laperm"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
