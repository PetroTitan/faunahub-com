/**
 * Published comparison records, assembled from authored batches.
 *
 * Batches are an editorial device, not a structural one: each was authored and
 * reviewed as a unit, and keeping the files separate keeps them reviewable.
 * Order here is the order comparisons appear in "browse all" listings.
 */
import type { ComparisonRecord } from "../types.ts";

import { BATCH_01 } from "./batch-01.ts";
import { BATCH_02 } from "./batch-02.ts";
import { BATCH_03 } from "./batch-03.ts";
import { BATCH_04 } from "./batch-04.ts";
import { BATCH_05 } from "./batch-05.ts";
import { BATCH_06 } from "./batch-06.ts";

// Batch two: comparisons promoted from the private backlog.
import { BATCH_B2_01 } from "./batch-b2-01.ts";
import { BATCH_B2_02 } from "./batch-b2-02.ts";
import { BATCH_B2_03 } from "./batch-b2-03.ts";
import { BATCH_B2_04 } from "./batch-b2-04.ts";
import { BATCH_B2_05 } from "./batch-b2-05.ts";
import { BATCH_B2_06 } from "./batch-b2-06.ts";
import { BATCH_B2_07 } from "./batch-b2-07.ts";
import { BATCH_B2_08 } from "./batch-b2-08.ts";
import { BATCH_B2_09 } from "./batch-b2-09.ts";
import { BATCH_B2_10 } from "./batch-b2-10.ts";
import { BATCH_B2_11 } from "./batch-b2-11.ts";
import { BATCH_B2_12 } from "./batch-b2-12.ts";
import { BATCH_B2_13 } from "./batch-b2-13.ts";
import { BATCH_B2_14 } from "./batch-b2-14.ts";
import { BATCH_B2_15 } from "./batch-b2-15.ts";
import { BATCH_B2_16 } from "./batch-b2-16.ts";
import { BATCH_B2_17 } from "./batch-b2-17.ts";
import { BATCH_B2_18 } from "./batch-b2-18.ts";

// Batch three: comparisons unlocked by the rat, damselfly, osprey, rook and
// mule profiles. Every pair here involves at least one of those five animals.
import { BATCH_B3_01 } from "./batch-b3-01.ts";
import { BATCH_B3_02 } from "./batch-b3-02.ts";
import { BATCH_B3_03 } from "./batch-b3-03.ts";
import { BATCH_B3_04 } from "./batch-b3-04.ts";
import { BATCH_B3_05 } from "./batch-b3-05.ts";
import { BATCH_B3_06 } from "./batch-b3-06.ts";
import { BATCH_B3_07 } from "./batch-b3-07.ts";
import { BATCH_B3_08 } from "./batch-b3-08.ts";
import { BATCH_B3_09 } from "./batch-b3-09.ts";
import { BATCH_B3_10 } from "./batch-b3-10.ts";
import { BATCH_B3_11 } from "./batch-b3-11.ts";
import { BATCH_B3_12 } from "./batch-b3-12.ts";

export const COMPARISON_RECORDS: ComparisonRecord[] = [
  ...BATCH_01,
  ...BATCH_02,
  ...BATCH_03,
  ...BATCH_04,
  ...BATCH_05,
  ...BATCH_06,
  ...BATCH_B2_01,
  ...BATCH_B2_02,
  ...BATCH_B2_03,
  ...BATCH_B2_04,
  ...BATCH_B2_05,
  ...BATCH_B2_06,
  ...BATCH_B2_07,
  ...BATCH_B2_08,
  ...BATCH_B2_09,
  ...BATCH_B2_10,
  ...BATCH_B2_11,
  ...BATCH_B2_12,
  ...BATCH_B2_13,
  ...BATCH_B2_14,
  ...BATCH_B2_15,
  ...BATCH_B2_16,
  ...BATCH_B2_17,
  ...BATCH_B2_18,
  ...BATCH_B3_01,
  ...BATCH_B3_02,
  ...BATCH_B3_03,
  ...BATCH_B3_04,
  ...BATCH_B3_05,
  ...BATCH_B3_06,
  ...BATCH_B3_07,
  ...BATCH_B3_08,
  ...BATCH_B3_09,
  ...BATCH_B3_10,
  ...BATCH_B3_11,
  ...BATCH_B3_12,
];
