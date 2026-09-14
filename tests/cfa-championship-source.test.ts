import { test } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import path from "node:path";
import zlib from "node:zlib";
import { execFile } from "node:child_process";
import type { AddressInfo } from "node:net";

import { BREEDS } from "../src/lib/pet-intelligence/index.ts";
import { getBreedSource } from "../src/lib/pet-intelligence/index.ts";
import {
  ARTICLE_END,
  ARTICLE_START,
  RULE_30_01,
  breedHeadingFromUrl,
  championshipSpan,
  extractPdfText,
  spanListsBreed,
} from "../scripts/lib/cfa-show-rules.mjs";

/**
 * Cite the document that carries the claim.
 *
 * Twelve records claimed `registryGroup: "Championship"` and cited the CFA
 * breed profile. CFA stopped printing the class there, so the weekly verifier
 * reported twelve disagreements about a claim that was never wrong.
 *
 * The claim moved to CFA Show Rules Article XXX — "the following breeds and
 * colors are recognized as entitled to win Championship or Premiership honors"
 * — and the checks below exist to make sure that is a re-citation and not a
 * relaxation. The interesting cases are all the ones where it must still FAIL.
 */

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const GROUP_SOURCE_ID = "cfa-show-rules-2026-27";

const THE_TWELVE = [
  "cat-abyssinian", "cat-american-shorthair", "cat-birman", "cat-british-shorthair",
  "cat-chartreux", "cat-devon-rex", "cat-exotic-shorthair", "cat-korat",
  "cat-manx", "cat-russian-blue", "cat-siamese", "cat-turkish-angora",
];

const cfaBreeds = BREEDS.filter((b) =>
  b.recognition.some((r) => r.registryId === "cfa" && r.registryUrl),
);
const cfaRecord = (b: (typeof cfaBreeds)[number]) =>
  b.recognition.find((r) => r.registryId === "cfa")!;

/* ================================================================ *
 * The document, synthesised
 * ================================================================ */

/**
 * A PDF as far as the extractor is concerned: Flate-compressed streams holding
 * the text operators. Real Show Rules are 748 kB and republished each season,
 * so "the breed was removed from Article XXX" cannot be tested against the
 * live file — only against a document we control.
 */
function showRulesPdf(
  { breeds = [] as string[], aovBreeds = [] as string[], provisional = [] as string[],
    includeArticle = true, includeRule = true, padding = 0 } = {},
): Buffer {
  const esc = (s: string) => s.replace(/([()\\])/g, "\\$1");
  const parts: string[] = [];
  if (includeArticle) parts.push(`(${esc(ARTICLE_START)}) Tj`);
  if (includeRule) parts.push(`(${esc(RULE_30_01 + ".")}) Tj`);
  parts.push("(LONGHAIR SPECIALTY BREEDS) Tj");
  for (const b of breeds) parts.push(`(${esc(b)}) Tj (All Championship Colors) Tj`);
  parts.push(`(${esc(ARTICLE_END)}) Tj`);
  // Everything past the end marker must be invisible to the lookup.
  for (const b of aovBreeds) parts.push(`(${esc(b)}) Tj`);
  parts.push("(Article XXXII PROVISIONAL BREEDS) Tj");
  for (const b of provisional) parts.push(`(${esc(b)}) Tj`);
  // A long document that is simply not the Show Rules reaches a different
  // branch from one with no readable text at all.
  if (padding > 0) parts.push(`(${"filler text about cats ".repeat(padding)}) Tj`);

  const body = Buffer.from(parts.join(" "), "latin1");
  return Buffer.concat([
    Buffer.from("%PDF-1.4\n1 0 obj\n<< /Filter /FlateDecode >>\nstream\n"),
    zlib.deflateSync(body),
    Buffer.from("\nendstream\nendobj\ntrailer\n%%EOF\n"),
  ]);
}

/** Every heading the real corpus needs, derived the way the verifier derives it. */
const headingsForTwelve = () =>
  THE_TWELVE.map((id) => {
    const b = cfaBreeds.find((x) => x.id === id)!;
    return breedHeadingFromUrl(cfaRecord(b).registryUrl!)!;
  });

/* ================================================================ *
 * A plausible CFA profile page (the other claims still live here)
 * ================================================================ */

const FILLER = (
  "This breed is admired for its temperament, its history and the devotion of its " +
  "breeders. Cats of this type are affectionate companions that adapt well to family " +
  "life, and enthusiasts have kept careful written records for many decades. "
).repeat(130);

/**
 * By default this mirrors production: the class word is present on the pages of
 * records that still cite the page for it, and ABSENT from the twelve whose
 * pages CFA stopped printing it on. That asymmetry is the situation, and a
 * fixture that omitted it everywhere would make every unmigrated record fail
 * and drown the signal this file is about.
 */
function profilePage(
  breed: (typeof cfaBreeds)[number],
  { includeGroupWord = undefined as boolean | undefined, includeCoat = true } = {},
): string {
  const rec = cfaRecord(breed);
  const withGroup = includeGroupWord ?? !rec.registryGroupSourceId;
  const urlPath = new URL(rec.registryUrl!).pathname;
  const bits = [
    `<p>${FILLER}</p>`,
    `<p>Standard: <a href="/wp-content/uploads/2024/01/${breed.slug}-breed-standard.pdf">PDF</a>.</p>`,
  ];
  if (withGroup) bits.push(`<p>Competes in the ${rec.registryGroup} class.</p>`);
  if (rec.recognizedYear) bits.push(`<p>Accepted for registration in ${rec.recognizedYear}.</p>`);
  if (includeCoat && breed.coat?.statedAs && breed.coat.sourceId === `cfa-${breed.slug}`) {
    bits.push(`<p>${breed.coat.statedAs}</p>`);
  }
  for (const m of breed.measurements?.weightKg ?? []) {
    if (m.sourceId === `cfa-${breed.slug}`) bits.push(`<p>${m.statedAs}</p>`);
  }
  return [
    "<!doctype html><html><head>",
    `<title>${breed.name} - The Cat Fanciers&#039; Association</title>`,
    `<link rel="canonical" href="https://cfa.org${urlPath}">`,
    "</head><body>",
    `<h1>${breed.name}</h1>`,
    ...bits,
    "</body></html>",
  ].join("\n");
}

/* ================================================================ *
 * Harness
 * ================================================================ */

interface Run {
  stdout: string;
  code: number | null;
  pdfRequests: number;
  verdict: string;
  disagreements: number;
  unreachable: number;
  byField: Record<string, number>;
  blamed: string[];
  sharedSignal: boolean;
}

async function run(
  opts: {
    pdf?: Buffer | null;
    pdfStatus?: number;
    page?: (b: (typeof cfaBreeds)[number]) => string;
    only?: string[];
  } = {},
): Promise<Run> {
  let pdfRequests = 0;
  const server = http.createServer((req, res) => {
    const url = req.url ?? "/";
    if (url.startsWith("/show-rules")) {
      pdfRequests += 1;
      if (opts.pdfStatus && opts.pdfStatus !== 200) {
        res.writeHead(opts.pdfStatus).end("nope");
        return;
      }
      res.writeHead(200, { "Content-Type": "application/pdf" });
      res.end(opts.pdf ?? showRulesPdf({ breeds: headingsForTwelve() }));
      return;
    }
    const breed = cfaBreeds.find((b) => new URL(cfaRecord(b).registryUrl!).pathname === url);
    if (!breed) return void res.writeHead(404).end("no");
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end((opts.page ?? profilePage)(breed));
  });
  await new Promise<void>((r) => server.listen(0, "127.0.0.1", r));
  const { port } = server.address() as AddressInfo;

  try {
    const { stdout, code } = await new Promise<{ stdout: string; code: number | null }>((resolve) => {
      const child = execFile(
        "node",
        ["scripts/verify-breed-registry.mjs"],
        {
          cwd: REPO_ROOT,
          maxBuffer: 64 * 1024 * 1024,
          env: {
            ...process.env,
            FAUNAHUB_CFA_BASE_URL: `http://127.0.0.1:${port}`,
            FAUNAHUB_GROUP_SOURCE_URL: `http://127.0.0.1:${port}/show-rules.pdf`,
            FAUNAHUB_VERIFY_ONLY: "cfa",
            FAUNAHUB_VERIFY_DELAY_MS: "0",
          },
        },
        (_e, stdout) => resolve({ stdout, code: child.exitCode }),
      );
    });

    const counts = /(\d+) disagreement\(s\), (\d+) unreachable source\(s\)/.exec(stdout);
    const findings = [...stdout.matchAll(/^ {2}(\S+) {2}((?:akc|cfa|fci|fife|source):\S+)$/gm)];
    const byField: Record<string, number> = {};
    for (const f of findings) byField[f[2]] = (byField[f[2]] ?? 0) + 1;

    return {
      stdout,
      code,
      pdfRequests,
      verdict: /VERDICT: (\w+)/.exec(stdout)?.[1] ?? "NONE",
      disagreements: Number(counts?.[1] ?? -1),
      unreachable: Number(counts?.[2] ?? -1),
      byField,
      blamed: findings.filter((f) => f[2] === "cfa:group").map((f) => f[1]),
      sharedSignal: /shared source —/.test(stdout),
    };
  } finally {
    await new Promise<void>((r) => server.close(() => r()));
  }
}

/* ================================================================ *
 * The corpus side
 * ================================================================ */

test("the shared source exists and is cited by exactly the twelve", () => {
  const source = getBreedSource(GROUP_SOURCE_ID);
  assert.ok(source, "the Show Rules source record must exist");
  assert.match(source!.url, /^https:\/\/cfa\.org\/.*26-27show-rules\.pdf$/);
  assert.equal(source!.organization, "The Cat Fanciers' Association");

  const citing = cfaBreeds
    .filter((b) => cfaRecord(b).registryGroupSourceId === GROUP_SOURCE_ID)
    .map((b) => b.id)
    .sort();
  assert.deepEqual(citing, [...THE_TWELVE].sort(), "only the re-verified records may cite it");
});

test("no unrelated record gained a citation", () => {
  // Control 10. Every other CFA record keeps the behaviour it had.
  for (const b of cfaBreeds) {
    if (THE_TWELVE.includes(b.id)) continue;
    assert.equal(
      cfaRecord(b).registryGroupSourceId,
      undefined,
      `${b.id} was not re-verified and must not cite the Show Rules`,
    );
  }
  const others = BREEDS.filter((b) => !THE_TWELVE.includes(b.id));
  for (const b of others) {
    assert.ok(
      !(b.sources ?? []).includes(GROUP_SOURCE_ID),
      `${b.id} must not list the Show Rules among its sources`,
    );
  }
});

test("reviewedAt moved only for records actually re-verified", () => {
  for (const id of THE_TWELVE) {
    const b = BREEDS.find((x) => x.id === id)!;
    assert.equal(b.reviewedAt, "2026-09-14", `${id} was re-verified today`);
    assert.ok((b.sources ?? []).includes(GROUP_SOURCE_ID), `${id} must cite the document`);
  }
  const untouched = cfaBreeds.filter((b) => !THE_TWELVE.includes(b.id));
  assert.ok(untouched.length > 0);
  for (const b of untouched) {
    assert.notEqual(b.reviewedAt, "2026-09-14", `${b.id} was not re-verified; its date must not move`);
  }
});

/* ================================================================ *
 * The parser
 * ================================================================ */

test("the heading is derived from CFA's own slug, not from our name", () => {
  assert.equal(breedHeadingFromUrl("https://cfa.org/breed/exotic/"), "EXOTIC");
  assert.equal(breedHeadingFromUrl("https://cfa.org/breed/turkish-angora/"), "TURKISH ANGORA");
  // cat-exotic-shorthair is OUR name; CFA prints EXOTIC. Deriving from our slug
  // would look for EXOTIC SHORTHAIR and find nothing.
  const exotic = cfaBreeds.find((b) => b.id === "cat-exotic-shorthair")!;
  assert.equal(breedHeadingFromUrl(cfaRecord(exotic).registryUrl!), "EXOTIC");
  assert.equal(breedHeadingFromUrl("not a url"), null);
});

test("a document without Article XXX has no span", () => {
  assert.equal(championshipSpan("nothing relevant here"), null);
  // The heading without its governing rule is not the article.
  const noRule = extractPdfText(showRulesPdf({ breeds: ["ABYSSINIAN"], includeRule: false }));
  assert.equal(championshipSpan(noRule), null);
});

test("a name outside Article XXX is not evidence", () => {
  // Control 3, at parser level: Any Other Variety is a class for cats that do
  // NOT conform to the standard, and Provisional is not Championship.
  const text = extractPdfText(
    showRulesPdf({ breeds: ["ABYSSINIAN"], aovBreeds: ["BRITISH SHORTHAIR"], provisional: ["KHAO MANEE"] }),
  );
  const span = championshipSpan(text)!;
  assert.ok(spanListsBreed(span, "ABYSSINIAN"));
  assert.ok(!spanListsBreed(span, "BRITISH SHORTHAIR"), "AOV is not an entitlement");
  assert.ok(!spanListsBreed(span, "KHAO MANEE"), "Provisional is not Championship");
});

test("a heading match cannot run into a neighbouring word", () => {
  const span = championshipSpan(extractPdfText(showRulesPdf({ breeds: ["MANX (TAILLESS)"] })))!;
  assert.ok(spanListsBreed(span, "MANX"), "MANX is printed as MANX (TAILLESS)");
  assert.ok(!spanListsBreed(span, "MAN"), "a prefix of a heading is not the heading");
});

test("a heading welded to the line above it is still found", () => {
  /*
   * PDF text runs concatenate with nothing between them, so the fixture above
   * produces `...SPECIALTY BREEDSABYSSINIANAll Championship Colors` — exactly
   * what the real document does in places. A left-hand match guard rejects this
   * and reports a listed breed as unlisted, which is a false disagreement about
   * a correct record.
   */
  const text = extractPdfText(showRulesPdf({ breeds: ["ABYSSINIAN"] }));
  assert.match(text, /BREEDSABYSSINIANAll/, "the fixture must actually be welded");
  assert.ok(spanListsBreed(championshipSpan(text)!, "ABYSSINIAN"));
});

/* ================================================================ *
 * Phase 3 — negative controls, through the real run loop
 * ================================================================ */

test("control 1: supported breeds pass, and the profile page need not say it", async () => {
  // Control 1 and control 7 together: every profile page here OMITS the class
  // word, which is the real situation, and none of the twelve is blamed.
  const r = await run();
  assert.equal(r.byField["cfa:group"], undefined, `blamed: ${r.blamed.join(", ")}`);
  assert.equal(r.unreachable, 0);
});

test("control 2: a breed removed from Article XXX fails", async () => {
  const kept = headingsForTwelve().filter((h) => h !== "KORAT");
  const r = await run({ pdf: showRulesPdf({ breeds: kept }) });
  assert.deepEqual(r.blamed, ["cat-korat"], "exactly the removed breed, and only it");
  assert.match(r.stdout, /Show Rules Article XXX does not list KORAT/);
  assert.equal(r.verdict, "DISAGREEMENT");
});

test("control 3: a breed listed under the wrong class fails", async () => {
  // Present in the document, but under Any Other Variety rather than Article XXX.
  const kept = headingsForTwelve().filter((h) => h !== "SIAMESE");
  const r = await run({ pdf: showRulesPdf({ breeds: kept, aovBreeds: ["SIAMESE"] }) });
  assert.deepEqual(r.blamed, ["cat-siamese"], "being named somewhere is not being entitled");
  assert.equal(r.verdict, "DISAGREEMENT");
});

test("control 4: an unavailable source is DEGRADED, never a disagreement", async () => {
  const r = await run({ pdfStatus: 503 });
  assert.equal(r.byField["cfa:group"], undefined, "an outage must not blame a cat");
  assert.equal(r.disagreements, 0);
  assert.equal(r.unreachable, 1, "one signal, not twelve");
  assert.equal(r.verdict, "DEGRADED");
  assert.equal(r.code, 2);
  assert.ok(r.sharedSignal, "must use the shared-source failure model");
});

test("control 5: twelve breeds, one fetch", async () => {
  const r = await run();
  assert.equal(r.pdfRequests, 1, `the document was fetched ${r.pdfRequests} times`);
});

test("control 6: an unusable document is one registry-scoped signal", async () => {
  // HTTP 200, but not the Show Rules — the soft-block shape, one layer up.
  const r = await run({ pdf: showRulesPdf({ breeds: [], includeArticle: false, padding: 200 }) });
  assert.equal(r.disagreements, 0, "a document we cannot read says nothing about any breed");
  assert.equal(r.unreachable, 1, "one signal for twelve records");
  assert.match(r.stdout, /answered but unusable/);
  assert.match(r.stdout, /Article XXX .* was not found/);
  assert.match(r.stdout, /affected verification scope: 12 CFA records/);
  assert.equal(r.verdict, "DEGRADED");
  assert.equal(r.code, 2);
});

test("control 6b: a response with no readable text is distinguished from a wrong one", async () => {
  // Same outcome, different remedy: this one says the download was not a PDF,
  // rather than that CFA restructured the document.
  const r = await run({ pdf: Buffer.from("not a pdf at all") });
  assert.equal(r.disagreements, 0);
  assert.equal(r.unreachable, 1);
  assert.match(r.stdout, /could not be read as text/);
  assert.equal(r.verdict, "DEGRADED");
});

test("control 8: an undeclared group source cannot silently pass", async () => {
  /*
   * The 33 CFA records that were NOT re-verified still check their class
   * against the profile page. Serving pages with no class word must fail them —
   * absence of a citation must never mean absence of a check.
   */
  const r = await run({ page: (b) => profilePage(b, { includeGroupWord: false }) });
  const undeclared = cfaBreeds.filter(
    (b) => !THE_TWELVE.includes(b.id) && cfaRecord(b).registryGroup,
  );
  assert.ok(undeclared.length > 25, "there should still be many unmigrated records");
  const stillChecked = r.stdout.match(/class no longer named on the page/g) ?? [];
  assert.equal(
    stillChecked.length,
    undeclared.length,
    "every record without a group source is still checked against its page",
  );
});

test("control 9: coat, weight, year and standard still come from the profile page", async () => {
  const r = await run({ page: (b) => profilePage(b, { includeCoat: false }) });
  assert.ok((r.byField["cfa:coat"] ?? 0) > 0, "the profile page still backs the coat claim");
  assert.equal(r.byField["cfa:standard"], undefined, "the PDF link is still read from the page");
  assert.equal(r.byField["cfa:recognizedYear"], undefined);
  assert.equal(r.byField["cfa:group"], undefined, "the group claim is unaffected by a coat change");
});
