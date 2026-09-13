import type { Breed } from "../../types.ts";

/** Snowshoe. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-snowshoe",
  slug: "snowshoe",
  species: "cat",
  name: "Snowshoe",
  recognition: [
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (SNO Snowshoe)",
      registryBreedCode: "SNO",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-snowshoe",
    },
  ],
  /*
   * NO COAT LENGTH IS PUBLISHED, because the registry FaunaHub cites does not
   * state one.
   *
   * These records carried "Coat length is stated by the breed's registry name
   * (Snowshoe)" — a rule that genuinely holds for British Longhair and the
   * Longhair/Shorthair variety pairs FIFe splits by code (KBL/KBS, SRL/SRS,
   * OLH/OSH), and was then applied to names that contain no coat term at all.
   * It was the only source cited for the value.
   *
   * FIFe's breed list and this breed's own profile page were re-read on
   * 2026-09-13: neither states a coat length. The value may well be right, but
   * a plausible value with an invented citation is worse than an absent field,
   * and the facet gate reports the gap honestly.
   */
  traits: {},
  sources: ["fife-snowshoe"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
