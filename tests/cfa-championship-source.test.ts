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
    includeArticle = true, includeRule = true, padding = 0,
    season = "(April 27, 2026 - April 25, 2027)" as string | null } = {},
): Buffer {
  const esc = (s: string) => s.replace(/([()\\])/g, "\\$1");
  const parts: string[] = [];
  /*
   * The cover marker. Nested parentheses MUST be escaped — a PDF string literal
   * ends at the first unescaped ")", so an unescaped marker truncates the
   * document and the reader sees a different failure than the one under test.
   */
  if (season) parts.push(`(${esc("2026 - 2027 Show Season " + season)}) Tj`);
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
  // Always clear the readability floor; `padding` only makes it longer.
  parts.push(`(${"Additional show rule text for the season. ".repeat(40 + padding)}) Tj`);

  return pdfOf(parts.join(" "));
}

/**
 * Wrap content-stream operators as a PDF the extractor will read.
 *
 * Uncompressed on purpose: every page of the real Addendum is an uncompressed
 * `<</Length N>>` stream, and a reader that only inflates sees none of it.
 */
function pdfOf(body: string): Buffer {
  return Buffer.concat([
    Buffer.from("%PDF-1.4\n1 0 obj\n<< /Length 999 >>\nstream\nBT "),
    Buffer.from(body, "latin1"),
    Buffer.from(" ET\nendstream\nendobj\ntrailer\n%%EOF\n"),
  ]);
}

/**
 * The season's OTHER official document.
 *
 * `articleXxx` makes it amend the Championship list. `articleXxxvi` is the trap:
 * the real addendum names Article XXXVI three times and `XXXVI` contains `XXX`,
 * so a detector that fires on it would put every run into permanent manual
 * review — indistinguishable, in practice, from no check at all.
 */
function addendumPdf(
  { season = "2026-2027 SHOW RULE ADDENDUM" as string | null,
    articleXxx = false, articleXxxvi = true, championshipWord = true } = {},
): Buffer {
  const parts: string[] = [];
  if (season) parts.push(`(${season} TO THE PRINTED SHOW RULES) Tj`);
  if (articleXxxvi) parts.push("(Article XXXVI - National/Regional/Divisional Awards Program) Tj");
  if (championshipWord) parts.push("(Cats shown in the Championship class must be eight months of age.) Tj");
  if (articleXxx) parts.push("(30.01 Amend the list of breeds entitled to Championship competition.) Tj");
  parts.push(`(${"Exceptions and additions for the season. ".repeat(40)}) Tj`);
  return pdfOf(parts.join(" "));
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
  addendumRequests: number;
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
    addendum?: Buffer | null;
    addendumStatus?: number;
    now?: string;
    page?: (b: (typeof cfaBreeds)[number]) => string;
  } = {},
): Promise<Run> {
  let pdfRequests = 0;
  let addendumRequests = 0;
  const server = http.createServer((req, res) => {
    const url = req.url ?? "/";
    if (url.includes("show-rules")) {
      // Path, not a single stub URL: the season package is two documents and a
      // run has to be able to say which of them it could not read.
      const isAddendum = url.includes("addendum");
      if (isAddendum) addendumRequests += 1;
      else pdfRequests += 1;
      const status = isAddendum ? opts.addendumStatus : opts.pdfStatus;
      if (status && status !== 200) {
        res.writeHead(status).end("nope");
        return;
      }
      res.writeHead(200, { "Content-Type": "application/pdf" });
      res.end(
        isAddendum
          ? (opts.addendum ?? addendumPdf())
          : (opts.pdf ?? showRulesPdf({ breeds: headingsForTwelve() })),
      );
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
            FAUNAHUB_GROUP_SOURCE_URL: `http://127.0.0.1:${port}`,
            ...(opts.now ? { FAUNAHUB_VERIFY_NOW: opts.now } : {}),
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
      addendumRequests,
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

/* ================================================================ *
 * Time-bounded validity — a cited document that expired is not evidence
 * ================================================================ */

import { checkValidity, parseDateOnly, resolveNow, EX_USAGE as VALIDITY_EX_USAGE }
  from "../scripts/lib/source-validity.mjs";
import { articleXxxAmended, documentIsForSeason } from "../scripts/lib/cfa-show-rules.mjs";

const GOVERNING = () => getBreedSource(GROUP_SOURCE_ID)!;

/** Narrow resolveNow's union: these call sites all expect a usable date. */
function nowAt(date: string): number {
  const r = resolveNow({ FAUNAHUB_VERIFY_NOW: date });
  assert.ok(r.ok, `expected ${date} to be a usable date`);
  return (r as { ok: true; at: number }).at;
}
const ADDENDUM_ID = "cfa-show-rules-2026-27-addendum";

test("the governing package declares machine-readable validity, not prose", () => {
  const head = GOVERNING();
  assert.equal(head.validFrom, "2026-04-27");
  assert.equal(head.validThrough, "2027-04-25");
  assert.ok(head.seasonMarker, "an edition marker is required to tell seasons apart");
  assert.equal(head.amendedBy, ADDENDUM_ID);

  const add = getBreedSource(ADDENDUM_ID);
  assert.ok(add, "the amendment must be its own source record");
  assert.equal(add!.validFrom, "2026-04-27");
  assert.equal(add!.validThrough, "2027-04-25");

  // The dates must be real dates, and the window must not be inverted.
  for (const s of [head, add!]) {
    const from = parseDateOnly(s.validFrom!);
    const through = parseDateOnly(s.validThrough!);
    assert.ok(from !== null && through !== null, `${s.id} has unparseable bounds`);
    assert.ok(from! < through!, `${s.id} window is inverted`);
  }
});

test("the window is inclusive on both ends, in UTC", () => {
  const src = { validFrom: "2026-04-27", validThrough: "2027-04-25" };
  const on = (d: string) => checkValidity(src, nowAt(d)).inForce;
  assert.equal(on("2026-04-26"), false, "the day before");
  assert.equal(on("2026-04-27"), true, "the first day counts");
  assert.equal(on("2027-04-25"), true, "the last day counts in full");
  assert.equal(on("2027-04-26"), false, "the day after");
});

test("a source with no bounds is always in force", () => {
  assert.equal(checkValidity({}, nowAt("2099-01-01")).inForce, true);
});

test("an impossible injected date is refused, not rounded", () => {
  // Date.parse("2026-02-30") rolls into March in some engines; a verifier that
  // accepted it would report a verdict about a day that does not exist.
  assert.equal(parseDateOnly("2026-02-30"), null);
  assert.equal(parseDateOnly("2026-13-01"), null);
  assert.equal(parseDateOnly("not-a-date"), null);
  assert.equal(resolveNow({ FAUNAHUB_VERIFY_NOW: "2026-02-30" }).ok, false);
  const live = resolveNow({});
  assert.ok(live.ok);
  assert.equal((live as { ok: true; source: string }).source, "clock", "real time by default");
  assert.equal(VALIDITY_EX_USAGE, 64);
});

/* ================================================================ *
 * The amendment detector — and the trap it must not fall into
 * ================================================================ */

test("Article XXXVI and the bare word Championship are not amendments", () => {
  /*
   * The real 2026-27 addendum names Article XXXVI three times and uses
   * "Championship" four times in the ordinary sense. `XXXVI` contains `XXX`.
   * A detector that fires on either puts every run into permanent manual
   * review, which is indistinguishable from no check at all.
   */
  const text = extractPdfText(addendumPdf());
  assert.match(text, /Article XXXVI/, "the trap must actually be present");
  assert.match(text, /Championship/, "and so must the ordinary word");
  assert.equal(articleXxxAmended(text), null);
});

test("a real amendment to Article XXX is detected", () => {
  const text = extractPdfText(addendumPdf({ articleXxx: true }));
  const hits = articleXxxAmended(text);
  assert.ok(hits, "a 30.xx rule is an amendment to the Championship list");
  assert.ok(hits!.includes("30.01"));
});

test("a rule number must have digit boundaries", () => {
  assert.equal(articleXxxAmended("see 130.011 and 230.05x"), null);
  assert.ok(articleXxxAmended("30.01 amended"));
});

test("an edition is told apart by its marker, not by its contents", () => {
  // The previous season's rules list the same twelve breeds under the same
  // article, so content alone cannot distinguish them.
  const current = extractPdfText(showRulesPdf({ breeds: headingsForTwelve() }));
  const stale = extractPdfText(showRulesPdf({ breeds: headingsForTwelve(), season: null }));
  assert.ok(championshipSpan(stale), "the stale document still parses and still lists the breeds");
  assert.equal(documentIsForSeason(current, GOVERNING().seasonMarker!), true);
  assert.equal(documentIsForSeason(stale, GOVERNING().seasonMarker!), false);
});

/* ================================================================ *
 * Phase 4 — the required proofs, through the real run loop
 * ================================================================ */

const IN_FORCE = "2026-09-14";

test("proof: in force, with the current addendum, twelve pass", async () => {
  const r = await run({ now: IN_FORCE });
  assert.equal(r.byField["cfa:group"], undefined, `blamed: ${r.blamed.join(", ")}`);
  assert.equal(r.unreachable, 0);
  assert.equal(r.pdfRequests, 1, "the rules are fetched once for twelve records");
  assert.equal(r.addendumRequests, 1, "and so is the addendum");
});

test("proof: the last day in force still passes", async () => {
  const r = await run({ now: "2027-04-25" });
  assert.equal(r.byField["cfa:group"], undefined);
  assert.equal(r.unreachable, 0);
  assert.equal(r.pdfRequests, 1);
});

test("proof: the day after expiry is one DEGRADED, and nothing is requested", async () => {
  const r = await run({ now: "2027-04-26" });
  assert.equal(r.disagreements, 0, "an expired document cannot contradict a record");
  assert.equal(r.unreachable, 1, "one signal for twelve records");
  assert.deepEqual(r.byField, {}, "zero breeds blamed");
  assert.equal(r.verdict, "DEGRADED");
  assert.equal(r.code, 2);
  assert.equal(r.pdfRequests, 0, "nothing is downloaded once we know we may not rely on it");
  assert.equal(r.addendumRequests, 0);
  assert.match(r.stdout, /NOT IN FORCE on this date/);
  assert.match(r.stdout, /in force only through 2027-04-25/);
});

test("proof: before the effective date is one DEGRADED, and nothing is requested", async () => {
  const r = await run({ now: "2026-04-26" });
  assert.equal(r.disagreements, 0);
  assert.equal(r.unreachable, 1);
  assert.deepEqual(r.byField, {});
  assert.equal(r.pdfRequests, 0);
  assert.match(r.stdout, /effective from 2026-04-27/);
});

test("proof: an unavailable addendum is one DEGRADED", async () => {
  const r = await run({ now: IN_FORCE, addendumStatus: 503 });
  assert.equal(r.disagreements, 0, "we cannot know whether the list still stands");
  assert.equal(r.unreachable, 1);
  assert.deepEqual(r.byField, {}, "zero breeds blamed");
  assert.equal(r.verdict, "DEGRADED");
  assert.match(r.stdout, /addendum/);
});

test("proof: an unusable addendum is one DEGRADED", async () => {
  // Right URL, wrong document: a 200 that is not this season's addendum.
  const r = await run({ now: IN_FORCE, addendum: addendumPdf({ season: null }) });
  assert.equal(r.disagreements, 0);
  assert.equal(r.unreachable, 1);
  assert.deepEqual(r.byField, {});
  assert.match(r.stdout, /not the cited edition/);
});

test("proof: an addendum that amends Article XXX asks for a person", async () => {
  const r = await run({ now: IN_FORCE, addendum: addendumPdf({ articleXxx: true }) });
  assert.equal(r.disagreements, 0, "never guess what the amendment did");
  assert.equal(r.unreachable, 1, "one manual-review signal");
  assert.deepEqual(r.byField, {}, "zero breeds blamed");
  assert.match(r.stdout, /amends the Championship breed list/);
  assert.match(r.stdout, /a person must read it/);
  assert.equal(r.verdict, "DEGRADED");
});

test("proof: an Article XXXVI-only addendum passes", async () => {
  const r = await run({ now: IN_FORCE, addendum: addendumPdf({ articleXxxvi: true, articleXxx: false }) });
  assert.equal(r.byField["cfa:group"], undefined, "XXXVI is not XXX");
  assert.equal(r.unreachable, 0);
  assert.equal(r.verdict, "CLEAN");
});

test("proof: a different season's PDF at the same URL is one DEGRADED", async () => {
  const r = await run({ now: IN_FORCE, pdf: showRulesPdf({ breeds: headingsForTwelve(), season: null }) });
  assert.equal(r.disagreements, 0, "finding the breeds is not proof of the right document");
  assert.equal(r.unreachable, 1);
  assert.deepEqual(r.byField, {}, "zero breeds blamed");
  assert.match(r.stdout, /not the cited edition/);
  assert.equal(r.verdict, "DEGRADED");
});

test("proof: an impossible injected date exits EX_USAGE, not a verdict", async () => {
  const r = await run({ now: "2026-02-30" });
  assert.equal(r.code, 64, "a usage error must not read as CLEAN or DEGRADED");
  assert.equal(r.verdict, "NONE", "no verdict is reached");
  assert.equal(r.pdfRequests, 0);
});
