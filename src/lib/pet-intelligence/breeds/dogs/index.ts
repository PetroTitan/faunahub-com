/**
 * GENERATED FILE — do not edit by hand.
 *
 * Written by `scripts/generate-breed-index.mjs` from the 12 records in
 * this directory, and regenerated before every build. Edit the per-breed file,
 * then run `npm run breeds:index`.
 *
 * `npm run breeds:index:check` fails when this file disagrees with the
 * directory, and tests/pet-intelligence-shards.test.ts asserts the same thing —
 * so a data file that is never imported is a failure, not a silent orphan.
 */
import type { Breed } from "../../types.ts";
import { breed as beagle } from "./beagle.ts";
import { breed as borderCollie } from "./border-collie.ts";
import { breed as chihuahua } from "./chihuahua.ts";
import { breed as dachshund } from "./dachshund.ts";
import { breed as frenchBulldog } from "./french-bulldog.ts";
import { breed as germanShepherd } from "./german-shepherd.ts";
import { breed as goldenRetriever } from "./golden-retriever.ts";
import { breed as greatDane } from "./great-dane.ts";
import { breed as labradorRetriever } from "./labrador-retriever.ts";
import { breed as poodle } from "./poodle.ts";
import { breed as shihTzu } from "./shih-tzu.ts";
import { breed as siberianHusky } from "./siberian-husky.ts";

export const DOG_BREEDS: readonly Breed[] = [
  beagle,
  borderCollie,
  chihuahua,
  dachshund,
  frenchBulldog,
  germanShepherd,
  goldenRetriever,
  greatDane,
  labradorRetriever,
  poodle,
  shihTzu,
  siberianHusky,
];
