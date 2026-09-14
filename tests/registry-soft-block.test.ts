import { test } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import path from "node:path";
import fs from "node:fs";
import { execFile } from "node:child_process";
import type { AddressInfo } from "node:net";

import { BREEDS } from "../src/lib/pet-intelligence/index.ts";
import {
  CFA_MIN_BYTES,
  cfaPagePlausibility,
  failureFingerprint,
  samePath,
} from "../scripts/lib/registry-plausibility.mjs";
import { ambientMarkers, blockingMarkers } from "../scripts/lib/registry-diagnostics.mjs";

/**
 * A 200 is not a page.
 *
 * On 2026-09-14 the weekly run reported 185 disagreements against the same
 * commit that reported 15 locally. All 45 CFA records failed, 45 of 45 on
 * "no standard PDF" and 45 of 45 on "class no longer named" — against pages
 * that, read from another network minutes later, carried both. The verifier had
 * compared its records against 45 bodies that were not CFA breed pages and
 * reported the difference as editorial drift.
 *
 * These tests drive the REAL script as a subprocess against a stub, because the
 * defect lives in the run loop's decisions and not in any one function. A unit
 * test of the plausibility predicate would have passed on the broken code:
 * there was no predicate.
 */

const REPO_ROOT = path.resolve(import.meta.dirname, "..");

const cfaBreeds = BREEDS.filter((b) =>
  b.recognition.some((r) => r.registryId === "cfa" && r.registryUrl),
);
const cfaRecord = (b: (typeof cfaBreeds)[number]) =>
  b.recognition.find((r) => r.registryId === "cfa")!;

/** The reviewed finding set: these twelve genuinely no longer name the class. */
const THE_TWELVE = new Set([
  "abyssinian", "american-shorthair", "birman", "british-shorthair",
  "chartreux", "devon-rex", "exotic-shorthair", "korat",
  "manx", "russian-blue", "siamese", "turkish-angora",
]);

/*
 * Filler, to clear the CFA_MIN_BYTES floor the way a real page does.
 *
 * Sized against the floor rather than eyeballed: the first version was ~14 kB
 * and every "valid" page in these controls was correctly judged unusable, which
 * is the gate working and the fixture being wrong.
 *
 * It must not contain "Championship" or "Provisional": those are the values
 * under verification, and padding that happens to include them would make
 * `cfa:group` pass for a reason having nothing to do with the registry.
 */
const FILLER = (
  "This breed is admired for its temperament, its history and the devotion of its " +
  "breeders. Cats of this type are known to be affectionate companions that adapt " +
  "well to family life, and enthusiasts have kept careful written records of their " +
  "lineage for many decades across several continents. "
).repeat(130);

/**
 * A synthetic CFA breed page that satisfies every check EXCEPT, optionally, the
 * class name. Built from the breed's own record so the valid case exercises the
 * same comparisons the live page would.
 */
function breedPage(
  breed: (typeof cfaBreeds)[number],
  { includeGroup = true }: { includeGroup?: boolean } = {},
): string {
  const rec = cfaRecord(breed);
  const urlPath = new URL(rec.registryUrl!).pathname;
  const bits: string[] = [];

  bits.push(`<p>${FILLER}</p>`);
  bits.push(
    `<p>The breed standard is published as a PDF: ` +
      `<a href="/wp-content/uploads/2024/01/${breed.slug}-breed-standard.pdf">Breed Standard</a>.</p>`,
  );
  if (includeGroup) bits.push(`<p>This breed competes in the ${rec.registryGroup} class.</p>`);
  if (rec.recognizedYear) {
    bits.push(`<p>The breed was accepted for registration in ${rec.recognizedYear}.</p>`);
  }
  if (breed.coat?.statedAs && breed.coat.sourceId === `cfa-${breed.slug}`) {
    bits.push(`<p>${breed.coat.statedAs}</p>`);
  }
  for (const m of breed.measurements?.weightKg ?? []) {
    if (m.sourceId === `cfa-${breed.slug}`) bits.push(`<p>${m.statedAs}</p>`);
  }

  return [
    "<!doctype html><html><head>",
    `<title>${breed.name} - The Cat Fanciers&#039; Association</title>`,
    `<link rel="canonical" href="https://cfa.org${urlPath}">`,
    `<meta property="og:url" content="https://cfa.org${urlPath}">`,
    "</head><body>",
    `<h1>${breed.name}</h1>`,
    ...bits,
    "</body></html>",
  ].join("\n");
}

/** A Cloudflare-style interstitial: HTTP 200, and not the page. */
function challengePage(): string {
  return [
    "<!doctype html><html><head>",
    "<title>Just a moment...</title>",
    "</head><body>",
    "<h1>Checking your browser before accessing cfa.org</h1>",
    "<p>Please enable JavaScript and cookies to continue.</p>",
    '<script src="/cdn-cgi/challenge-platform/h/b/orchestrate/chl_page/v1"></script>',
    "</body></html>",
  ].join("\n");
}

interface RunResult {
  stdout: string;
  code: number | null;
  requests: number;
  verdict: string;
  disagreements: number;
  unreachable: number;
  byField: Record<string, number>;
  findings: Array<{ breed: string; field: string }>;
  egress: { registry: string; records: number; urls: number; attempts: number } | null;
  breedScopedDegraded: string[];
}

/** Run the real verifier against a CFA stub and parse what it decided. */
async function runCfaStub(
  handler: (urlPath: string, res: http.ServerResponse) => void,
  extraEnv: Record<string, string> = {},
): Promise<RunResult> {
  let requests = 0;
  const server = http.createServer((req, res) => {
    requests += 1;
    handler(req.url ?? "/", res);
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address() as AddressInfo;

  try {
    const { stdout, code } = await new Promise<{ stdout: string; code: number | null }>(
      (resolve) => {
        const child = execFile(
          "node",
          ["scripts/verify-breed-registry.mjs"],
          {
            cwd: REPO_ROOT,
            maxBuffer: 64 * 1024 * 1024,
            env: {
              ...process.env,
              FAUNAHUB_CFA_BASE_URL: `http://127.0.0.1:${port}`,
              FAUNAHUB_VERIFY_ONLY: "cfa",
              FAUNAHUB_VERIFY_DELAY_MS: "0",
              ...extraEnv,
            },
          },
          (_error, stdout) => resolve({ stdout, code: child.exitCode }),
        );
      },
    );

    const line = /(\d+) disagreement\(s\), (\d+) unreachable source\(s\)/.exec(stdout);
    // The verifier prints `  <breed>  <registry>:<field>` at two spaces, with the
    // stored/live pair indented under it at six.
    const findings = [...stdout.matchAll(/^ {2}(\S+) {2}((?:akc|cfa|fci|fife|source):\S+)$/gm)].map(
      (m) => ({ breed: m[1], field: m[2] }),
    );
    const byField: Record<string, number> = {};
    for (const f of findings) byField[f.field] = (byField[f.field] ?? 0) + 1;

    const eg = /^ {2}(\w+) registry responses unusable from this runner$/m.exec(stdout);
    const egress = eg
      ? {
          registry: eg[1],
          records: Number(/^ {6}(\d+) records left unverified$/m.exec(stdout)?.[1] ?? -1),
          urls: Number(/^ {6}(\d+) distinct URLs \/ (\d+) attempts$/m.exec(stdout)?.[1] ?? -1),
          attempts: Number(/^ {6}(\d+) distinct URLs \/ (\d+) attempts$/m.exec(stdout)?.[2] ?? -1),
        }
      : null;

    const degradedBlock = stdout.split(/^\d+ source\(s\) unreachable after a retry:$/m)[1] ?? "";
    const breedScopedDegraded = [...degradedBlock.matchAll(/^ {2}(cat-\S+) {2}cfa {2}/gm)].map(
      (m) => m[1],
    );

    return {
      stdout,
      code,
      requests,
      verdict: /VERDICT: (\w+)/.exec(stdout)?.[1] ?? "NONE",
      disagreements: Number(line?.[1] ?? -1),
      unreachable: Number(line?.[2] ?? -1),
      byField,
      findings,
      egress,
      breedScopedDegraded,
    };
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
}

const serve = (res: http.ServerResponse, body: string) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.end(body);
};

const pageFor = (urlPath: string, opts?: { includeGroup?: boolean }) => {
  const breed = cfaBreeds.find((b) => new URL(cfaRecord(b).registryUrl!).pathname === urlPath);
  return breed ? breedPage(breed, opts) : null;
};

/* ================================================================ *
 * The captured failure — Phase 0
 * ================================================================ */

const FIXTURE = path.join(REPO_ROOT, "tests/fixtures/cfa-soft-block-2026-09-14.json");
const captured = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));

test("the divergence between the two environments is preserved", () => {
  assert.equal(captured.localReviewedResult.counts.problems, 15);
  assert.equal(captured.githubRunnerResult.counts.problems, 185);
  assert.equal(captured.localReviewedResult.counts.degraded, 0);
  assert.equal(captured.githubRunnerResult.counts.degraded, 2);
  // Same commit, same tree — the only variable was the network.
  assert.equal(captured.commit.slice(0, 7), "719dcbb");
  assert.equal(captured.tree, "26f08f54d2a4f69ae6d88e5053a81a6b46fbb0fd");
});

test("every CFA check failed for every record it applied to — the tell of one cause", () => {
  const applicable = {
    "cfa:standard": cfaBreeds.length,
    "cfa:group": cfaBreeds.filter((b) => cfaRecord(b).registryGroup).length,
    "cfa:recognizedYear": cfaBreeds.filter((b) => cfaRecord(b).recognizedYear).length,
    "cfa:coat": cfaBreeds.filter((b) => b.coat?.sourceId === `cfa-${b.slug}`).length,
    "cfa:weight": cfaBreeds.flatMap((b) =>
      (b.measurements?.weightKg ?? []).filter((m) => m.sourceId === `cfa-${b.slug}`),
    ).length,
  };
  /*
   * This is the arithmetic that rules out coincidence. Forty-five independent
   * editorial revisions would not land on precisely the set of records each
   * check applies to — they would land on some of them.
   */
  for (const [field, n] of Object.entries(applicable)) {
    assert.equal(
      captured.githubRunnerResult.byField[field],
      n,
      `${field}: the runner failed ${captured.githubRunnerResult.byField[field]} of ${n} applicable records`,
    );
  }
});

test("a challenge page alone accounts for the entire CFA incident", () => {
  /*
   * The hypothesis, tested rather than asserted. Run against a stub serving
   * nothing but an interstitial, the verifier WITHOUT its plausibility gate
   * reproduced the runner's by-field breakdown exactly — five fields, five
   * counts, no remainder. Nothing at CFA needs to have changed to explain any
   * part of those 182 findings.
   *
   * With the gate, the same stub yields zero disagreements and one incident.
   */
  const runner = captured.githubRunnerResult.byField;
  for (const [field, n] of Object.entries(captured.reproduction.byField)) {
    assert.equal(runner[field], n, `${field} did not reproduce`);
  }
  assert.equal(
    Object.values(captured.reproduction.byField).reduce((a: number, b) => a + Number(b), 0),
    captured.reproduction.totalFindings,
  );
  assert.equal(captured.reproduction.withGateEnabled.disagreements, 0);
  assert.equal(captured.reproduction.withGateEnabled.recordsLeftUnverified, cfaBreeds.length);
});

test("no third-party HTML is vendored into the fixture", () => {
  const raw = fs.readFileSync(FIXTURE, "utf8");
  assert.ok(!/<html|<body|<div|wp-content/i.test(raw), "the fixture stores measurements, not pages");
});

/* ================================================================ *
 * Phase 2 — the predicate itself
 * ================================================================ */

test("a captcha widget is never, on its own, a block", () => {
  // Measured: all six live CFA breed pages carry one. Treating it as decisive
  // would have converted every real page into a DEGRADED incident.
  const body = `<html><head><title>Korat - The Cat Fanciers' Association</title>
    <link rel="canonical" href="https://cfa.org/breed/korat/"></head>
    <body><h1>Korat</h1><script src="https://www.google.com/recaptcha/api.js"></script>
    ${"cats ".repeat(6000)}</body></html>`;
  assert.deepEqual(Object.keys(ambientMarkers(body)), ["captchaWidget"]);
  assert.deepEqual(blockingMarkers(body), {});
  assert.equal(
    cfaPagePlausibility({ requestedUrl: "https://cfa.org/breed/korat/", body }).plausible,
    true,
  );
});

test("an interstitial is unusable however large it is", () => {
  const body = challengePage() + `<!-- ${"x".repeat(200_000)} -->`;
  const v = cfaPagePlausibility({ requestedUrl: "https://cfa.org/breed/korat/", body });
  assert.equal(v.plausible, false);
  assert.equal(v.reason, "blocked", "size must not rescue a challenge page");
});

test("a page that declares a different document is unusable", () => {
  const body = `<html><head><title>Siamese - The Cat Fanciers' Association</title>
    <link rel="canonical" href="https://cfa.org/breed/siamese/"></head>
    <body><h1>Siamese</h1>${"cats ".repeat(6000)}</body></html>`;
  const v = cfaPagePlausibility({ requestedUrl: "https://cfa.org/breed/korat/", body });
  assert.equal(v.plausible, false);
  assert.equal(v.reason, "identity-mismatch");
});

test("the byte floor sits far below the smallest page ever measured", () => {
  assert.ok(
    CFA_MIN_BYTES * 5 < captured.measuredRealPageShape.byteRange[0],
    "a floor close to real page sizes will one day hide a real disagreement",
  );
});

test("paths compare regardless of host, case and trailing slash", () => {
  assert.ok(samePath("https://cfa.org/breed/korat/", "http://127.0.0.1:9/breed/korat"));
  assert.ok(!samePath("https://cfa.org/breed/korat/", "https://cfa.org/breed/manx/"));
});

test("one cause yields one fingerprint across different URLs", () => {
  const a = cfaPagePlausibility({ requestedUrl: "https://cfa.org/breed/korat/", body: challengePage() });
  const b = cfaPagePlausibility({ requestedUrl: "https://cfa.org/breed/manx/", body: challengePage() });
  assert.equal(a.plausible, false);
  assert.equal(b.plausible, false);
  assert.equal(a.fingerprint, b.fingerprint, "aggregation depends on this being stable");
  const other = failureFingerprint({ reason: "too-small", contentType: "text/html", byteLength: 900 });
  assert.notEqual(a.fingerprint, other, "different causes must not merge");
});

/* ================================================================ *
 * Phase 4 — negative controls, through the real run loop
 * ================================================================ */

test("control 1: 45 valid pages that omit the class stay 45 disagreements", async () => {
  const r = await runCfaStub((p, res) => {
    const body = pageFor(p, { includeGroup: false });
    if (!body) return res.writeHead(404).end("no");
    serve(res, body);
  });

  assert.equal(r.verdict, "DISAGREEMENT");
  assert.equal(r.byField["cfa:group"], cfaBreeds.length, "every record must still be blamed");
  assert.equal(r.unreachable, 0, "valid pages are not a degraded source");
  assert.equal(r.egress, null, "a real, correlated finding must NEVER be collapsed into DEGRADED");
  assert.equal(r.code, 1);
  // And nothing else fired: the synthetic page satisfies every other check.
  assert.deepEqual(Object.keys(r.byField).sort(), ["cfa:group"]);
});

test("control 2: 45 challenge pages are one incident and zero disagreements", async () => {
  const r = await runCfaStub((_p, res) => serve(res, challengePage()));

  assert.equal(r.disagreements, 0, "not one field may be compared against an interstitial");
  assert.deepEqual(r.byField, {}, "zero breeds blamed");
  assert.equal(r.unreachable, 1, "one incident, not forty-five");
  assert.ok(r.egress, "expected a registry-egress incident");
  assert.equal(r.egress!.registry, "CFA");
  assert.equal(r.egress!.records, cfaBreeds.length, "45 records left unverified");
  assert.equal(r.egress!.urls, cfaBreeds.length, "45 distinct URLs");
  assert.equal(r.egress!.attempts, cfaBreeds.length, "45 attempts, no retry of a 200");
  assert.match(r.stdout, /zero breeds blamed/);
  assert.match(r.stdout, /zero CFA field disagreements inferred/);
  assert.equal(r.verdict, "DEGRADED");
  assert.equal(r.code, 2, "an unreadable registry is not a failed build");
});

test("control 3: a mixed run separates the two, and DISAGREEMENT outranks DEGRADED", async () => {
  const blocked = new Set(
    cfaBreeds.slice(0, 5).map((b) => new URL(cfaRecord(b).registryUrl!).pathname),
  );
  const r = await runCfaStub((p, res) => {
    if (blocked.has(p)) return serve(res, challengePage());
    const body = pageFor(p, { includeGroup: false });
    if (!body) return res.writeHead(404).end("no");
    serve(res, body);
  });

  assert.equal(r.verdict, "DISAGREEMENT", "a real disagreement is the headline");
  assert.equal(r.code, 1);
  assert.equal(
    r.byField["cfa:group"],
    cfaBreeds.length - blocked.size,
    "only the readable pages produce findings",
  );
  assert.ok(r.egress, "the blocked five are still one incident");
  assert.equal(r.egress!.records, blocked.size);
  // No finding may name a breed whose page was never read.
  const blamed = new Set(r.findings.map((f) => f.breed));
  for (const b of cfaBreeds.slice(0, 5)) {
    assert.ok(!blamed.has(b.id), `${b.id} was blocked and must not be blamed`);
  }
});

test("control 4: one isolated bad page stays that breed's problem", async () => {
  const lone = new URL(cfaRecord(cfaBreeds[0]).registryUrl!).pathname;
  const r = await runCfaStub((p, res) => {
    if (p === lone) return serve(res, challengePage());
    const body = pageFor(p);
    if (!body) return res.writeHead(404).end("no");
    serve(res, body);
  });

  assert.equal(r.egress, null, "one page is not a registry-wide incident");
  assert.equal(r.unreachable, 1);
  assert.deepEqual(r.breedScopedDegraded, [cfaBreeds[0].id], "scoped to the breed that owns it");
  assert.equal(r.disagreements, 0, "the other 44 pages are complete and agree");
});

test("control 5: the reviewed twelve reproduce exactly", async () => {
  const r = await runCfaStub((p, res) => {
    const breed = cfaBreeds.find((b) => new URL(cfaRecord(b).registryUrl!).pathname === p);
    if (!breed) return res.writeHead(404).end("no");
    serve(res, breedPage(breed, { includeGroup: !THE_TWELVE.has(breed.slug) }));
  });

  assert.equal(r.byField["cfa:group"], THE_TWELVE.size, "exactly the reviewed set");
  assert.equal(r.unreachable, 0);
  assert.equal(r.egress, null, "twelve real findings must not be aggregated away");
  const blamed = new Set(r.findings.map((f) => f.breed));
  for (const slug of THE_TWELVE) {
    assert.ok(blamed.has(`cat-${slug}`), `cat-${slug} is a reviewed finding and must be reported`);
  }
  assert.equal(blamed.size, THE_TWELVE.size, "and nobody else");
});

/* ================================================================ *
 * Control 6 — the two aggregation scopes must not contaminate each other
 * ================================================================ */

/**
 * FIFe's own behaviour is covered in full by registry-shared-source.test.ts:
 * one fetch for 35 records, one signal on each of the fetched/unusable/
 * processing paths. What that suite cannot see is this change, so what is
 * tested here is the INTERACTION — a shared-source failure and an egress
 * incident in the same run are two different things and must stay two.
 */
test("control 6: a shared-source failure and an egress incident stay distinct", async () => {
  let fifeHits = 0;
  const server = http.createServer((req, res) => {
    if ((req.url ?? "").startsWith("/cats/breeds")) {
      fifeHits += 1;
      // A 200 that is far too short to be the listing: "answered but unusable".
      return serve(res, "<html><body>maintenance</body></html>");
    }
    serve(res, challengePage());
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address() as AddressInfo;

  try {
    const stdout = await new Promise<string>((resolve) => {
      execFile(
        "node",
        ["scripts/verify-breed-registry.mjs"],
        {
          cwd: REPO_ROOT,
          maxBuffer: 64 * 1024 * 1024,
          env: {
            ...process.env,
            FAUNAHUB_CFA_BASE_URL: `http://127.0.0.1:${port}`,
            FAUNAHUB_FIFE_LISTING_URL: `http://127.0.0.1:${port}/cats/breeds/`,
            FAUNAHUB_VERIFY_ONLY: "cfa,fife",
            FAUNAHUB_VERIFY_DELAY_MS: "0",
          },
        },
        (_e, out) => resolve(out),
      );
    });

    const counts = /(\d+) disagreement\(s\), (\d+) unreachable source\(s\)/.exec(stdout);
    assert.equal(Number(counts?.[1]), 0, "neither registry may produce a field finding");
    assert.equal(Number(counts?.[2]), 2, "exactly two incidents: one shared source, one egress");

    assert.equal(fifeHits, 1, "the shared listing is still fetched exactly once");
    assert.match(stdout, /fife shared source — answered but unusable/);
    assert.match(stdout, /affected verification scope: 35 FIFE records/);
    assert.match(stdout, /CFA registry responses unusable from this runner/);
    assert.match(stdout, /^ {6}45 records left unverified$/m);
    assert.equal(/VERDICT: (\w+)/.exec(stdout)?.[1], "DEGRADED");
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
});
