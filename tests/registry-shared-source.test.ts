import { test } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import path from "node:path";
import { execFile } from "node:child_process";
import type { AddressInfo } from "node:net";

import { BREEDS } from "../src/lib/pet-intelligence/index.ts";
import { createSharedSource, isSharedSourceFailure } from "../scripts/lib/shared-source.mjs";
import { buildVerdict } from "../scripts/lib/registry-verdict.mjs";

/**
 * One shared source, one signal.
 *
 * All 35 FIFe records cite the SAME page — fifeweb.org/cats/breeds/ — because
 * FIFe publishes one listing rather than a page per breed. That makes the
 * listing a shared source, and a shared source that fails has failed once, not
 * thirty-five times.
 *
 * The verifier did not model that. A short or unreadable body was thrown per
 * breed, so one bad response produced 35 DEGRADED entries, each attributed to a
 * different cat as though that cat's own source had failed. A fetch failure was
 * worse: the cache held `null` for "not fetched yet", "fetch failed" and
 * "unreadable" alike, so the `=== null` guard re-fetched for every record —
 * 35 requests, each retried, for a page that is meant to be fetched once.
 *
 * These tests drive the REAL script as a subprocess against a stub that counts
 * requests, so they measure what a run actually does rather than what a copy of
 * its logic would do.
 */

const REPO_ROOT = path.resolve(import.meta.dirname, "..");

/** How many FIFe records exist, i.e. how many share the one listing. */
const FIFE_RECORD_COUNT = BREEDS.flatMap((b) =>
  b.recognition.filter((r) => r.registryId === "fife"),
).length;

/**
 * A synthetic FIFe listing.
 *
 * It has to clear the length floor the verifier uses to notice a stub response,
 * and carry the code/category shapes the checks read. Built from the real
 * page's structure so the valid case exercises the same code paths.
 */
function listingHtml(options: { omitCode?: string } = {}): string {
  const fully: [string, string, number][] = [
    ["EXO", "Exotic Shorthair", 1], ["PER", "Persian", 1], ["RAG", "Ragdoll", 1],
    ["SBI", "Sacred Birman", 1], ["TUV", "Turkish Van", 1], ["BLH", "British Longhair", 2],
    ["BSH", "British Shorthair", 2], ["CHA", "Chartreux", 2], ["CYM", "Cymric", 2],
    ["EUR", "European", 2], ["KBL", "Kurilean Bobtail Longhair", 2],
    ["KBS", "Kurilean Bobtail Shorthair", 2], ["LPL", "LaPerm Longhair", 2],
    ["LPS", "LaPerm Shorthair", 2], ["MAN", "Manx", 2], ["MCO", "Maine Coon", 2],
    ["NFO", "Norwegian Forest Cat", 2], ["SIB", "Siberian", 2],
    ["SRL", "Selkirk Rex Longhair", 2], ["SRS", "Selkirk Rex Shorthair", 2],
    ["TUA", "Turkish Angora", 2], ["ACL", "American Curl Longhair", 3],
    ["ACS", "American Curl Shorthair", 3], ["BEN", "Bengal", 3], ["BUR", "Burmese", 3],
    ["EGY", "Egyptian Mau", 3], ["OCI", "Ocicat", 3], ["SNO", "Snowshoe", 3],
    ["SOK", "Sokoke", 3], ["ABY", "Abyssinian", 4], ["BAL", "Balinese", 4],
    ["CRX", "Cornish Rex", 4], ["DRX", "Devon Rex", 4], ["DSP", "Don Sphynx", 4],
    ["GRX", "German Rex", 4], ["JBS", "Japanese Bobtail", 4], ["KOR", "Korat", 4],
    ["OLH", "Oriental Longhair", 4], ["OSH", "Oriental Shorthair", 4],
    ["PEB", "Peterbald", 4], ["RUS", "Russian Blue", 4], ["SIA", "Siamese", 4],
    ["SOM", "Somali", 4], ["SPH", "Sphynx", 4], ["THA", "Thai", 4],
  ];
  const blurb =
    "Breed Profile Breed Standard (last modification: 2025) Click on the link above " +
    "to download the standard for this breed as published by the Federation.";

  let html = "<html><body><h1>Breeds</h1>";
  for (const category of [1, 2, 3, 4]) {
    html += `<h2>Fully Recognised Breeds &#8211; Category ${category}</h2>`;
    for (const [code, name, cat] of fully) {
      if (cat !== category) continue;
      if (options.omitCode === code) continue;
      html += `<p>${code} &#8211; ${name} ${blurb}</p>`;
    }
  }
  html += "<h2>Preliminary Recognised Breeds and Varieties</h2>";
  html += `<p>LYO &#8211; Lykoi Preliminary recognised breed in category 4 (2023-2027) ${blurb}</p>`;
  html += `<p>BOM &#8211; Bombay Preliminary recognised breed in category 3 (2023-2027) ${blurb}</p>`;
  return html + "</body></html>";
}

interface RunResult {
  stdout: string;
  code: number | null;
  requests: number;
  verdict: string;
  disagreements: number;
  unreachable: number;
  fetches: number;
}

/**
 * Run the verifier against a stub, and report what it did.
 *
 * `handler` decides how the stub answers; `requests` counts every hit, which is
 * the whole point — a shared source should be asked for once.
 */
async function runAgainstStub(
  handler: (n: number, res: http.ServerResponse) => void,
  extraEnv: Record<string, string> = {},
): Promise<RunResult> {
  let requests = 0;
  const server = http.createServer((_req, res) => {
    requests += 1;
    handler(requests, res);
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
            maxBuffer: 32 * 1024 * 1024,
            env: {
              ...process.env,
              FAUNAHUB_FIFE_LISTING_URL: `http://127.0.0.1:${port}/cats/breeds/`,
              FAUNAHUB_VERIFY_ONLY: "fife",
              FAUNAHUB_VERIFY_DELAY_MS: "0",
              ...extraEnv,
            },
          },
          (_error, stdout) => resolve({ stdout, code: child.exitCode }),
        );
      },
    );

    const line = /(\d+) disagreement\(s\), (\d+) unreachable source\(s\), (\d+) fetch\(es\)/.exec(
      stdout,
    );
    return {
      stdout,
      code,
      requests,
      verdict: /VERDICT: (\w+)/.exec(stdout)?.[1] ?? "NONE",
      disagreements: Number(line?.[1] ?? -1),
      unreachable: Number(line?.[2] ?? -1),
      fetches: Number(line?.[3] ?? -1),
    };
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
}

const ok = (n: number, res: http.ServerResponse, body: string) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(body);
};

/* ---------------------------------------------------------------- *
 * 1 — the healthy case
 * ---------------------------------------------------------------- */

test("a valid listing shared by every FIFe record is fetched exactly once", async () => {
  const r = await runAgainstStub((n, res) => ok(n, res, listingHtml()));
  assert.equal(r.requests, 1, `the shared listing was requested ${r.requests} times`);
  assert.equal(r.unreachable, 0, "a readable listing is not a degraded source");
  assert.match(r.stdout, new RegExp(`${FIFE_RECORD_COUNT} FIFe records`), "all records checked");
});

/* ---------------------------------------------------------------- *
 * 2 — a 200 that is not usable
 * ---------------------------------------------------------------- */

test("a short 200 body yields one fetch and exactly one DEGRADED entry", async () => {
  const r = await runAgainstStub((n, res) => ok(n, res, "<html><body>maintenance</body></html>"));
  assert.equal(r.requests, 1, `stub was hit ${r.requests} times for one shared page`);
  assert.equal(
    r.unreachable,
    1,
    `one shared source failed once, but ${r.unreachable} entries were recorded`,
  );
  assert.equal(r.verdict, "DEGRADED");
  assert.equal(r.disagreements, 0, "an unreadable source is never a disagreement");
});

/* ---------------------------------------------------------------- *
 * 3 — a transient failure that does not recover
 * ---------------------------------------------------------------- */

test("a persistent 503 is attempted twice in total, not twice per record", async () => {
  const r = await runAgainstStub((_n, res) => {
    res.writeHead(503);
    res.end("busy");
  });
  assert.equal(r.requests, 2, `expected one attempt plus one retry, got ${r.requests}`);
  assert.equal(r.unreachable, 1, `expected one DEGRADED entry, got ${r.unreachable}`);
  assert.equal(r.verdict, "DEGRADED");
});

/* ---------------------------------------------------------------- *
 * 4 — a deterministic failure
 * ---------------------------------------------------------------- */

test("a 404 is not retried and yields exactly one DEGRADED entry", async () => {
  const r = await runAgainstStub((_n, res) => {
    res.writeHead(404);
    res.end("gone");
  });
  assert.equal(r.requests, 1, `a 404 must not be retried, got ${r.requests} requests`);
  assert.equal(r.unreachable, 1, `expected one DEGRADED entry, got ${r.unreachable}`);
  assert.equal(r.verdict, "DEGRADED");
});

/* ---------------------------------------------------------------- *
 * 5 — deduplication must not swallow a real, breed-level finding
 * ---------------------------------------------------------------- */

test("a genuine breed-level mismatch stays attributed to that breed", async () => {
  /*
   * The danger in collapsing shared-source failures is collapsing too much. A
   * code missing from an otherwise healthy listing is a fact about ONE breed
   * and must survive as a disagreement against that breed.
   */
  const r = await runAgainstStub((n, res) => ok(n, res, listingHtml({ omitCode: "TUV" })));
  assert.equal(r.requests, 1, "still one fetch");
  assert.equal(r.unreachable, 0, "the listing itself was fine");
  assert.ok(r.disagreements >= 1, "the missing code must be reported");
  assert.match(r.stdout, /cat-turkish-van\s+fife:code/, "attributed to the breed that is missing");
  assert.equal(r.verdict, "DISAGREEMENT");
});

/* ---------------------------------------------------------------- *
 * The state machine itself
 * ---------------------------------------------------------------- */

test("a shared source moves uninitialized -> loading -> ready and fetches once", async () => {
  let fetches = 0;
  const source = createSharedSource({
    id: "stub",
    url: "https://example.test/listing",
    fetchText: async () => {
      fetches += 1;
      return "x".repeat(6000);
    },
    parse: (body) => body,
    validate: () => null,
  });

  assert.equal(source.state, "uninitialized");
  const inFlight = source.resolve();
  assert.equal(source.state, "loading", "the promise must be cached before the first await");
  await inFlight;
  assert.equal(source.state, "ready");

  await source.resolve();
  await source.resolve();
  assert.equal(fetches, 1, `resolved three times, fetched ${fetches} times`);
});

test("a failed shared source caches the failure instead of retrying per caller", async () => {
  let fetches = 0;
  const source = createSharedSource({
    id: "stub",
    url: "https://example.test/listing",
    fetchText: async () => {
      fetches += 1;
      throw new Error("HTTP 503");
    },
    parse: (body) => body,
  });

  const errors: unknown[] = [];
  for (let i = 0; i < 35; i += 1) {
    await source.resolve().catch((e) => errors.push(e));
  }
  assert.equal(fetches, 1, `35 callers caused ${fetches} fetches — a failure must stick`);
  assert.equal(source.state, "failed");
  assert.equal(errors.length, 35, "every caller still learns it failed");
  assert.equal(new Set(errors).size, 1, "and they all get the SAME error object, so it dedupes");
  assert.ok(isSharedSourceFailure(errors[0]), "marked as a shared-source failure");
});

test("an unusable body fails validation without a second fetch", async () => {
  let fetches = 0;
  const source = createSharedSource({
    id: "stub",
    url: "https://example.test/listing",
    fetchText: async () => {
      fetches += 1;
      return "<html>maintenance</html>";
    },
    parse: (body) => body,
    validate: (text) => (text.length < 5000 ? "too short to be the listing" : null),
  });
  await assert.rejects(() => source.resolve(), /too short/);
  await assert.rejects(() => source.resolve(), /too short/);
  assert.equal(fetches, 1, "a 200 that is unusable is still a cached failure");
  assert.equal(source.state, "failed");
});

test("concurrent callers share one in-flight request", async () => {
  // The run loop is sequential today. A cache whose correctness depends on that
  // is a trap for whoever parallelises it.
  let fetches = 0;
  const source = createSharedSource({
    id: "stub",
    url: "https://example.test/listing",
    fetchText: async () => {
      fetches += 1;
      await new Promise((r) => setTimeout(r, 25));
      return "x".repeat(6000);
    },
    parse: (body) => body,
  });
  await Promise.all(Array.from({ length: 10 }, () => source.resolve()));
  assert.equal(fetches, 1, `10 concurrent callers caused ${fetches} fetches`);
});

test("a breed-scoped failure is not folded into a registry-scoped one", () => {
  const summary = buildVerdict({
    degraded: [
      {
        scope: "registry",
        registryId: "fife",
        url: "https://fifeweb.org/cats/breeds/",
        error: "could not be fetched: HTTP 503",
        attempts: [{ attempt: 1, status: 503 }, { attempt: 2, status: 503 }],
        affectedRecords: 35,
      },
      {
        scope: "breed",
        breed: "dog-border-collie",
        registryId: "fci",
        url: "https://www.fci.be/en/nomenclature/BORDER-COLLIE-297.html",
        error: "fetch failed",
        attempts: [{ attempt: 1, error: "fetch failed" }],
      },
    ],
    fetchAttempts: [
      { url: "https://fifeweb.org/cats/breeds/", attempts: [{ attempt: 1 }, { attempt: 2 }] },
      { url: "https://www.fci.be/x", attempts: [{ attempt: 1 }] },
    ],
    breedsChecked: 274,
    checked: { fife: 0, fci: 11 },
  }).summaryMarkdown;

  assert.match(summary, /\*\*shared listing\*\* — 35 FIFE records affected/);
  assert.match(summary, /`dog-border-collie`/, "the breed-scoped failure keeps its breed");
  assert.match(summary, /\| Fetch attempts \| 3 \|/, "attempts and URLs are counted separately");
  assert.match(summary, /\| Fetches \(distinct URLs\) \| 2 \|/);
});

/* ---------------------------------------------------------------- *
 * Processing exceptions — the path that bypassed the wrapper
 * ---------------------------------------------------------------- */

/**
 * `load()` guarded the fetch and turned a validation *result* into a marked
 * failure, but `parse()` and `validate()` were called outside any try/catch. An
 * exception thrown by either escaped unmarked, so `isSharedSourceFailure()`
 * said no and the run loop fell back to `reportDegraded` — once per record.
 *
 * One TypeError in a parser became 35 breed-scoped findings, each naming a cat
 * whose own source was fine. The cache worked perfectly; it cached the wrong
 * kind of error.
 */

test("a parse() that throws is still one cached shared-source failure", async () => {
  let fetches = 0;
  const source = createSharedSource({
    id: "stub",
    url: "https://example.test/listing",
    fetchText: async () => {
      fetches += 1;
      return "x".repeat(6000);
    },
    parse: () => {
      throw new TypeError("parser blew up");
    },
  });

  const errors: unknown[] = [];
  for (let i = 0; i < FIFE_RECORD_COUNT; i += 1) {
    await source.resolve().catch((e) => errors.push(e));
  }

  assert.equal(fetches, 1, `${FIFE_RECORD_COUNT} callers caused ${fetches} fetches`);
  assert.equal(source.state, "failed");
  assert.equal(errors.length, FIFE_RECORD_COUNT, "every caller still learns it failed");
  assert.equal(new Set(errors).size, 1, "one cached error object, so it can deduplicate");
  assert.ok(
    isSharedSourceFailure(errors[0]),
    "a processing exception must be marked as a shared-source failure",
  );
  assert.equal((errors[0] as Error).cause instanceof TypeError, true, "original kept as cause");
  assert.match((errors[0] as Error).message, /processing failed/i);
});

test("a validate() that throws is treated the same way", async () => {
  let fetches = 0;
  const source = createSharedSource({
    id: "stub",
    url: "https://example.test/listing",
    fetchText: async () => {
      fetches += 1;
      return "x".repeat(6000);
    },
    parse: (body) => body,
    validate: () => {
      throw new RangeError("validator blew up");
    },
  });

  const errors: unknown[] = [];
  for (let i = 0; i < FIFE_RECORD_COUNT; i += 1) {
    await source.resolve().catch((e) => errors.push(e));
  }

  assert.equal(fetches, 1);
  assert.equal(new Set(errors).size, 1);
  assert.ok(isSharedSourceFailure(errors[0]));
  assert.equal((errors[0] as Error).cause instanceof RangeError, true);
});

test("the three failure kinds are distinguishable by message", async () => {
  /*
   * They need different remedies. A fetch failure is the registry's problem and
   * may fix itself; an unusable body means the page changed; a processing
   * exception is OUR bug and will not fix itself. A summary that called all
   * three "unreachable" would send someone to the wrong place.
   */
  const build = (opts: Record<string, unknown>) =>
    createSharedSource({
      id: "stub",
      url: "https://example.test/listing",
      parse: (body: string) => body,
      ...opts,
    } as Parameters<typeof createSharedSource>[0]);

  const fetchFailed = build({
    fetchText: async () => {
      throw new Error("HTTP 503");
    },
  });
  const unusable = build({
    fetchText: async () => "short",
    validate: () => "breed listing could not be read",
  });
  const threw = build({
    fetchText: async () => "x".repeat(6000),
    parse: () => {
      throw new TypeError("boom");
    },
  });

  const messageOf = async (s: ReturnType<typeof createSharedSource>) =>
    s.resolve().then(
      () => "(no error)",
      (e: Error) => e.message,
    );

  const [a, b, c] = await Promise.all([
    messageOf(fetchFailed),
    messageOf(unusable),
    messageOf(threw),
  ]);
  assert.match(a, /could not be fetched/i);
  assert.match(b, /could not be read/i);
  assert.match(c, /processing failed/i);
  assert.equal(new Set([a, b, c]).size, 3, "all three must read differently");
});

test("a processing exception is not retried", async () => {
  // Retrying a parser that throws just throws again, more slowly.
  let fetches = 0;
  const source = createSharedSource({
    id: "stub",
    url: "https://example.test/listing",
    fetchText: async () => {
      fetches += 1;
      return "x".repeat(6000);
    },
    parse: () => {
      throw new Error("deterministic");
    },
  });
  await source.resolve().catch(() => {});
  await source.resolve().catch(() => {});
  await source.resolve().catch(() => {});
  assert.equal(fetches, 1, `expected a single fetch, got ${fetches}`);
});

/* --- and through the real verifier ------------------------------- */

test("the real verifier emits ONE registry-scoped signal when parse throws", async () => {
  const r = await runAgainstStub((n, res) => ok(n, res, listingHtml()), {
    FAUNAHUB_FIFE_FAULT: "parse",
  });
  assert.equal(r.requests, 1, `stub hit ${r.requests} times for one shared page`);
  assert.equal(
    r.unreachable,
    1,
    `one shared source failed once, but ${r.unreachable} entries were recorded`,
  );
  assert.equal(r.disagreements, 0, "a processing fault is never a disagreement");
  assert.equal(r.verdict, "DEGRADED");
  assert.match(r.stdout, /shared source/, "reported against the registry");
  assert.match(r.stdout, /affected verification scope: 35 FIFE records/);
  assert.doesNotMatch(r.stdout, /^\s+cat-[a-z-]+\s+fife\s/m, "no breed may be blamed");
});

test("the real verifier emits ONE registry-scoped signal when validate throws", async () => {
  const r = await runAgainstStub((n, res) => ok(n, res, listingHtml()), {
    FAUNAHUB_FIFE_FAULT: "validate",
  });
  assert.equal(r.requests, 1);
  assert.equal(r.unreachable, 1, `expected one entry, got ${r.unreachable}`);
  assert.equal(r.verdict, "DEGRADED");
  assert.match(r.stdout, /affected verification scope: 35 FIFE records/);
});
