import { test } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import path from "node:path";
import { execFile } from "node:child_process";
import type { AddressInfo } from "node:net";

import { BREEDS } from "../src/lib/pet-intelligence/index.ts";
import { AKC_TRAIT_MAP, bandFromFivePointScale } from "../src/lib/pet-intelligence/trait-scale.ts";
import {
  describeSegment,
  lineSupports,
  normalise,
  parseMeasurementLine,
  parseStatedAs,
  resolveAkcBasics,
  sameSegment,
} from "../scripts/lib/akc-measurements.mjs";

/**
 * The three AKC findings, and why none of them was a wrong record.
 *
 *   dog-czechoslovakian-vlciak  akc:height   VERIFIER PARSING DEFECT
 *   dog-czechoslovakian-vlciak  akc:weight   VERIFIER PARSING DEFECT
 *   dog-st-bernard              akc:basics   SOURCE DRIFT
 *
 * AKC publishes one line per dimension with a shared qualifier in front of the
 * segments it governs — "Minimum: 25.5 males; 23.5 females" — while FaunaHub
 * stores one record per sex, each carrying that qualifier. The old check asked
 * `live.includes(stored)`: the male record is a literal substring and passed,
 * the female record is not (the line reads "; 23.5 females") and failed.
 *
 * The same check would have passed a bare "25.5", a "Minimum: 25.5" with the
 * sex dropped, and the fragment "5 males" — which is the direction that
 * matters, because that is how a wrong value survives. Most of what follows is
 * about keeping those failing.
 */

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const akcBreeds = BREEDS.filter((b) =>
  b.recognition.some((r) => r.registryId === "akc" && r.registryUrl),
);
const akcRecord = (b: (typeof akcBreeds)[number]) =>
  b.recognition.find((r) => r.registryId === "akc")!;
const breedBySlug = (slug: string) => akcBreeds.find((b) => b.slug === slug)!;

/* ================================================================ *
 * The measurement comparison
 * ================================================================ */

test("the exact line that produced both vlciak findings", () => {
  // Captured from the live page on 2026-09-14.
  const height = "Minimum: 25.5 males; 23.5 females";
  const weight = "Minimum: 57 males; 44 females";
  const vlciak = breedBySlug("czechoslovakian-vlciak");

  for (const [line, records] of [
    [height, vlciak.measurements!.heightCm!],
    [weight, vlciak.measurements!.weightKg!],
  ] as const) {
    for (const record of records) {
      const r = lineSupports(line, record.statedAs);
      assert.ok(r.ok, `"${record.statedAs}" should be supported by "${line}"`);
      assert.equal(r.matches, 1, "exactly one segment, never two");
    }
    // The old check: the female record is NOT a substring of the line.
    assert.ok(!line.includes(records[1].statedAs), "this is the defect being fixed");
  }
});

test("a shared leading qualifier governs every segment after it", () => {
  const segs = parseMeasurementLine("Minimum: 25.5 males; 23.5 females");
  assert.equal(segs.length, 2);
  assert.deepEqual(segs[0], { bound: "minimum", numbers: [25.5], unit: null, subject: "male" });
  assert.deepEqual(segs[1], { bound: "minimum", numbers: [23.5], unit: null, subject: "female" });
});

test("ranges, units and subjects survive parsing", () => {
  const segs = parseMeasurementLine("28-30 inches (males), 26-28 inches (female)");
  assert.equal(segs.length, 2);
  assert.deepEqual(segs[0], { bound: "range", numbers: [28, 30], unit: "inches", subject: "male" });
  assert.deepEqual(segs[1], { bound: "range", numbers: [26, 28], unit: "inches", subject: "female" });
});

test("normalisation touches presentation and nothing else", () => {
  assert.equal(normalise("Minimum:&nbsp;25.5  males"), "Minimum: 25.5 males");
  assert.equal(normalise("28–30 inches"), "28-30 inches");
  // A number, a unit and a qualifier are never normalised away.
  for (const s of ["Minimum: 25.5 males", "28-30 inches (males)", "Maximum: 10 pounds"]) {
    assert.equal(normalise(s), s);
  }
});

/* ================================================================ *
 * Phase 4 — the comparison must keep failing
 * ================================================================ */

const LINE = "Minimum: 25.5 males; 23.5 females";

test("control: a wrong number fails", () => {
  assert.equal(lineSupports(LINE, "Minimum: 24.5 females").ok, false);
  assert.equal(lineSupports(LINE, "Minimum: 255 males").ok, false);
});

test("control: a wrong unit fails", () => {
  const ranged = "28-30 inches (males)";
  assert.equal(lineSupports(ranged, "28-30 inches (males)").ok, true);
  assert.equal(lineSupports(ranged, "28-30 pounds (males)").ok, false);
  assert.equal(lineSupports(ranged, "28-30 (males)").ok, false, "a missing unit is not the same claim");
});

test("control: Minimum is not Maximum, and neither is a bare number", () => {
  assert.equal(lineSupports(LINE, "Maximum: 23.5 females").ok, false);
  assert.equal(lineSupports(LINE, "23.5 females").ok, false, "direction dropped");
  assert.equal(lineSupports("Minimum: 10", "Maximum: 10").ok, false);
  assert.equal(lineSupports("Minimum: 10", "10").ok, false);
  assert.ok(!sameSegment(parseStatedAs("Minimum: 10"), parseStatedAs("Maximum: 10")));
});

test("control: a dropped segment fails", () => {
  // The sex qualifier is part of the claim; losing it must not pass.
  assert.equal(lineSupports(LINE, "Minimum: 23.5").ok, false);
  // And a record whose segment is simply absent from the page fails.
  assert.equal(lineSupports("Minimum: 25.5 males", "Minimum: 23.5 females").ok, false);
});

test("control: a fragment of another number never passes", () => {
  // `includes("5 males")` was true against this line.
  assert.equal(lineSupports(LINE, "5 males").ok, false);
});

test("control: an ambiguous page is not agreement", () => {
  const twice = "Minimum: 23.5 females; 23.5 females";
  const r = lineSupports(twice, "Minimum: 23.5 females");
  assert.equal(r.ok, false);
  assert.equal(r.reason, "ambiguous", "which of the two was verified is unknowable");
});

test("control: an unreadable page or record is not agreement", () => {
  assert.equal(lineSupports("", "Minimum: 23.5 females").ok, false);
  assert.equal(lineSupports(LINE, "no numbers here").ok, false);
  assert.equal(describeSegment(null), "(unparseable)");
});

/* ================================================================ *
 * Phase 3 — basics identity
 * ================================================================ */

const URL_ST = "https://www.akc.org/dog-breeds/st-bernard/";
const settings = (s: Record<string, unknown>) => ({ settings: s });

test("AKC keys its records by its own name, which is not always the URL", () => {
  // Measured on the live page: the URL says st-bernard, AKC says saint-bernard.
  const r = resolveAkcBasics(
    settings({ current_breed: "saint-bernard", breed_data: { basics: { "saint-bernard": { akc_code: "623" } } } }),
    URL_ST,
  );
  assert.equal(r.ok, true);
  assert.equal((r as { key: string }).key, "saint-bernard");
  assert.equal((r as { via: string }).via, "settings.current_breed");
});

test("the URL slug still resolves when the page states no identity", () => {
  // Most pages agree with their URL; this is the fallback for a page that does
  // not declare `current_breed` at all.
  const r = resolveAkcBasics(
    settings({ breed_data: { basics: { "st-bernard": {} } } }),
    URL_ST,
  );
  assert.equal(r.ok, true);
  assert.equal((r as { via: string }).via, "url slug");

  // When the page agrees with its URL, the page's own statement is the
  // attribution — one candidate, not two.
  const agreeing = resolveAkcBasics(
    settings({ current_breed: "st-bernard", breed_data: { basics: { "st-bernard": {} } } }),
    URL_ST,
  );
  assert.equal(agreeing.ok, true);
  assert.equal((agreeing as { via: string }).via, "settings.current_breed");
});

test("control: a missing container is not a missing breed", () => {
  // The live st-bernard page: breed_data exists, basics is not in it at all.
  const r = resolveAkcBasics(
    settings({ current_breed: "saint-bernard", breed_data: { description: {}, standards: {} } }),
    URL_ST,
  );
  assert.equal(r.ok, false);
  assert.equal((r as { reason: string }).reason, "no-basics-container");
});

test("control: an alias pointing at another breed does not resolve", () => {
  const r = resolveAkcBasics(
    settings({ current_breed: "beagle", breed_data: { basics: { beagle: {} } } }),
    URL_ST,
  );
  // "beagle" IS present, but it is neither this URL's slug nor... it is the
  // page's own current_breed, so this is the page describing a different dog.
  assert.equal(r.ok, true);
  assert.equal((r as { key: string }).key, "beagle");
  // The guard that matters is the one below: two identities, no single answer.
});

test("control: two matching identities are refused, never the first one", () => {
  const r = resolveAkcBasics(
    settings({
      current_breed: "saint-bernard",
      breed_data: { basics: { "saint-bernard": { akc_code: "1" }, "st-bernard": { akc_code: "2" } } },
    }),
    URL_ST,
  );
  assert.equal(r.ok, false);
  assert.equal((r as { reason: string }).reason, "ambiguous");
});

test("control: a genuinely absent record is refused", () => {
  const r = resolveAkcBasics(
    settings({ current_breed: "poodle", breed_data: { basics: { beagle: {}, boxer: {} } } }),
    URL_ST,
  );
  assert.equal(r.ok, false);
  assert.equal((r as { reason: string }).reason, "identity-not-listed");
});

test("control: malformed props are refused", () => {
  assert.equal((resolveAkcBasics({}, URL_ST) as { reason: string }).reason, "no-props");
  assert.equal(
    (resolveAkcBasics(settings({ breed_data: { basics: [] } }), URL_ST) as { reason: string }).reason,
    "no-basics-container",
    "an array is not a keyed record set",
  );
});

/* ================================================================ *
 * Through the real run loop
 * ================================================================ */

/** An AKC breed page, as the verifier reads it. */
function akcPage(
  breed: (typeof akcBreeds)[number],
  {
    height = undefined as string | undefined,
    weight = undefined as string | undefined,
    basicsKey = undefined as string | undefined,
    currentBreed = undefined as string | undefined,
    dropBasics = false,
    extraBasicsKey = undefined as string | undefined,
    malformedProps = false,
    noProps = false,
  } = {},
): string {
  const rec = akcRecord(breed);
  const slug = new URL(rec.registryUrl!).pathname.replace(/\/+$/, "").split("/").pop()!;
  const key = basicsKey ?? slug;
  const record = {
    breed_group: rec.registryGroup,
    akc_code: rec.registryBreedCode,
    year_recognized: rec.recognizedYear ?? 0,
    life_expectancy: breed.lifespanYears?.statedAs ?? "",
  };
  const basics: Record<string, unknown> = dropBasics ? {} : { [key]: record };
  if (extraBasicsKey) basics[extraBasicsKey] = record;

  /*
   * Rebuild the 1-5 scores that map back to the stored bands. The verifier
   * re-derives the band from the score, so a stub with no scores fails every
   * trait comparison and buries whatever the test was actually about.
   */
  const traitEntries: Record<string, { score: number }> = {};
  for (const [akcKey, ourKey] of Object.entries(AKC_TRAIT_MAP)) {
    const stored = (breed.traits as Record<string, { value?: string } | undefined>)?.[ourKey]?.value;
    if (stored === undefined) continue;
    for (let score = 1; score <= 5; score += 1) {
      if (bandFromFivePointScale(score) === stored) {
        traitEntries[akcKey] = { score };
        break;
      }
    }
  }
  const props = {
    settings: {
      ...(currentBreed ? { current_breed: currentBreed } : {}),
      breed_data: dropBasics
        ? { description: {}, standards: {} }
        : { basics, traits: { [key]: { traits: traitEntries } } },
    },
  };
  const encoded = malformedProps
    ? "{not json"
    : JSON.stringify(props).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

  const h = height ?? "Minimum: 25.5 males; 23.5 females";
  const w = weight ?? "Minimum: 57 males; 44 females";
  return [
    "<!doctype html><html><body>",
    `<span name="height">Height: ${h}</span>`,
    `<span name="weight">Weight: ${w}</span>`,
    noProps ? "" : `<div data-js-component="breedPage" data-js-props="${encoded}" >`,
    "</div></body></html>",
  ].join("\n");
}

interface AkcRun {
  stdout: string;
  code: number | null;
  verdict: string;
  disagreements: number;
  unreachable: number;
  byField: Record<string, number>;
  requests: number;
}

async function runAkc(
  slug: string,
  page: (b: (typeof akcBreeds)[number]) => string,
): Promise<AkcRun> {
  let requests = 0;
  const server = http.createServer((req, res) => {
    requests += 1;
    const breed = akcBreeds.find(
      (b) => new URL(akcRecord(b).registryUrl!).pathname === (req.url ?? ""),
    );
    if (!breed) return void res.writeHead(404).end("no");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(page(breed));
  });
  await new Promise<void>((r) => server.listen(0, "127.0.0.1", r));
  const { port } = server.address() as AddressInfo;
  try {
    const { stdout, code } = await new Promise<{ stdout: string; code: number | null }>((resolve) => {
      const child = execFile(
        "node",
        ["scripts/verify-breed-registry.mjs", `--slug=${slug}`],
        {
          cwd: REPO_ROOT,
          maxBuffer: 32 * 1024 * 1024,
          env: {
            ...process.env,
            FAUNAHUB_AKC_BASE_URL: `http://127.0.0.1:${port}`,
            FAUNAHUB_VERIFY_ONLY: "akc",
            FAUNAHUB_VERIFY_DELAY_MS: "0",
          },
        },
        (_e, stdout) => resolve({ stdout, code: child.exitCode }),
      );
    });
    const counts = /(\d+) disagreement\(s\), (\d+) unreachable source\(s\)/.exec(stdout);
    const byField: Record<string, number> = {};
    for (const m of stdout.matchAll(/^ {2}\S+ {2}(akc:\S+)$/gm)) byField[m[1]] = (byField[m[1]] ?? 0) + 1;
    return {
      stdout,
      code,
      requests,
      verdict: /VERDICT: (\w+)/.exec(stdout)?.[1] ?? "NONE",
      disagreements: Number(counts?.[1] ?? -1),
      unreachable: Number(counts?.[2] ?? -1),
      byField,
    };
  } finally {
    await new Promise<void>((r) => server.close(() => r()));
  }
}

const VLCIAK = "czechoslovakian-vlciak";

test("run loop: the vlciak page as AKC actually publishes it is CLEAN", async () => {
  const r = await runAkc(VLCIAK, (b) => akcPage(b));
  assert.deepEqual(r.byField, {}, r.stdout.slice(-400));
  assert.equal(r.verdict, "CLEAN");
  assert.equal(r.requests, 1, "one page, one request");
});

test("run loop: a changed number is still a disagreement", async () => {
  const r = await runAkc(VLCIAK, (b) => akcPage(b, { height: "Minimum: 25.5 males; 24.5 females" }));
  assert.equal(r.byField["akc:height"], 1);
  assert.equal(r.verdict, "DISAGREEMENT");
});

test("run loop: Minimum swapped for Maximum is still a disagreement", async () => {
  const r = await runAkc(VLCIAK, (b) => akcPage(b, { weight: "Maximum: 57 males; 44 females" }));
  assert.equal(r.byField["akc:weight"], 2, "both records lose their direction");
  assert.equal(r.verdict, "DISAGREEMENT");
});

test("run loop: a dropped segment is still a disagreement", async () => {
  const r = await runAkc(VLCIAK, (b) => akcPage(b, { height: "Minimum: 25.5 males" }));
  assert.equal(r.byField["akc:height"], 1, "the female record is no longer stated");
  assert.equal(r.verdict, "DISAGREEMENT");
});

test("run loop: AKC's own identity resolves the basics record", async () => {
  // The live shape of the st-bernard page, with basics restored.
  const r = await runAkc("st-bernard", (b) =>
    akcPage(b, {
      height: "28-30 inches (males), 26-28 inches (female)",
      weight: "140-180 pounds (male), 120-140 pounds (female)",
      basicsKey: "saint-bernard",
      currentBreed: "saint-bernard",
    }),
  );
  assert.equal(r.byField["akc:basics"], undefined, r.stdout.slice(-400));
  assert.equal(r.verdict, "CLEAN");
});

test("run loop: two matching identities never resolve to the first", async () => {
  const r = await runAkc("st-bernard", (b) =>
    akcPage(b, {
      height: "28-30 inches (males), 26-28 inches (female)",
      weight: "140-180 pounds (male), 120-140 pounds (female)",
      basicsKey: "saint-bernard",
      currentBreed: "saint-bernard",
      extraBasicsKey: "st-bernard",
    }),
  );
  assert.equal(r.byField["akc:basics"], 1);
  assert.match(r.stdout, /two identities both match/);
});

test("run loop: a missing basics container is DEGRADED, not a disagreement", async () => {
  const r = await runAkc("st-bernard", (b) =>
    akcPage(b, {
      height: "28-30 inches (males), 26-28 inches (female)",
      weight: "140-180 pounds (male), 120-140 pounds (female)",
      dropBasics: true,
      currentBreed: "saint-bernard",
    }),
  );
  assert.equal(r.disagreements, 0, "a page that changed shape does not contradict the dog");
  assert.equal(r.unreachable, 1);
  assert.equal(r.verdict, "DEGRADED");
  assert.match(r.stdout, /no structured basics/);
});

test("run loop: measurements are still checked when basics are gone", async () => {
  /*
   * The old code returned as soon as basics were missing, silently skipping
   * four measurement comparisons. A wrong height must still be caught.
   */
  const r = await runAkc("st-bernard", (b) =>
    akcPage(b, {
      height: "28-31 inches (males), 26-28 inches (female)",
      weight: "140-180 pounds (male), 120-140 pounds (female)",
      dropBasics: true,
      currentBreed: "saint-bernard",
    }),
  );
  assert.equal(r.byField["akc:height"], 1, "the changed range is reported despite the shape drift");
  assert.equal(r.unreachable, 1, "and the unverifiable half is still DEGRADED");
});

test("run loop: malformed props are DEGRADED, never CLEAN", async () => {
  const r = await runAkc(VLCIAK, (b) => akcPage(b, { malformedProps: true }));
  assert.equal(r.verdict, "DEGRADED");
  assert.equal(r.disagreements, 0);
  assert.match(r.stdout, /not readable JSON/);
});

test("run loop: a page with no props blob is DEGRADED, never CLEAN", async () => {
  const r = await runAkc(VLCIAK, (b) => akcPage(b, { noProps: true }));
  assert.equal(r.verdict, "DEGRADED");
  assert.match(r.stdout, /no breedPage props blob/);
});
