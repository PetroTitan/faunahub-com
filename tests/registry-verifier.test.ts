import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

import {
  decodeEntities,
  isTransient,
  pageSupports,
  toText,
  verifiablePart,
} from "../scripts/lib/registry-text.mjs";
import { buildVerdict } from "../scripts/lib/registry-verdict.mjs";
import { BREEDS } from "../src/lib/pet-intelligence/index.ts";

/**
 * The registry verifier's signal quality.
 *
 * The first weekly run produced 64 findings and ZERO of them were corpus
 * errors: 38 were an editorial citation being compared as if it were a page
 * quote, 6 were an HTML entity the text pipeline never decoded, 5 were
 * registries that timed out once, and 3 were known. A monitor that is 95%
 * noise on its first outing is a monitor nobody reads by its fourth.
 *
 * These tests pin each of those causes so the noise cannot come back, and the
 * fixture below preserves the original findings as the thing being fixed.
 */

const REPO_ROOT = path.resolve(import.meta.dirname, "..");

/* ---------------------------------------------------------------- *
 * Phase 1 — HTML entity decoding
 * ---------------------------------------------------------------- */

test("decodes the named entity that caused the cfa:weight false positives", () => {
  // CFA writes "A mature male&rsquo;s weight may reach or exceed 12 pounds".
  assert.equal(decodeEntities("male&rsquo;s"), "male’s");
  assert.equal(decodeEntities("male&lsquo;s"), "male‘s");
});

test("decodes numeric entities, decimal and hexadecimal", () => {
  assert.equal(decodeEntities("male&#8217;s"), "male’s");
  assert.equal(decodeEntities("male&#x2019;s"), "male’s");
  assert.equal(decodeEntities("&#233;"), "é");
  assert.equal(decodeEntities("&#xe9;"), "é");
});

test("decodes &amp; last, so an escaped entity is not double-decoded", () => {
  // "&amp;rsquo;" is a literal ampersand followed by the text "rsquo;" — a page
  // that shows readers the entity itself, not an apostrophe.
  assert.equal(decodeEntities("&amp;rsquo;"), "&rsquo;");
  assert.equal(decodeEntities("Fish &amp; Chips"), "Fish & Chips");
});

test("decodes &nbsp; and the other basics", () => {
  assert.equal(decodeEntities("a&nbsp;b"), "a b");
  assert.equal(decodeEntities("&lt;b&gt;"), "<b>");
  assert.equal(decodeEntities("&quot;x&quot;"), '"x"');
  assert.equal(decodeEntities("&apos;"), "'");
});

test("ordinary Unicode is left untouched", () => {
  // Breed and registry names carry accents; a decoder that mangles them would
  // trade one class of false positive for another.
  for (const text of [
    "Fédération Internationale Féline",
    "Norsk Skogkatt — Norwegian Forest Cat",
    "Xoloitzcuintli · Ελληνικά · 日本語",
    "23½ inches",
  ]) {
    assert.equal(decodeEntities(text), text, `mangled: ${text}`);
  }
});

test("an unrecognised entity is left as written rather than guessed at", () => {
  assert.equal(decodeEntities("&notarealentity;"), "&notarealentity;");
  assert.equal(decodeEntities("&#999999999;"), "&#999999999;");
});

test("toText strips markup, decodes entities and folds smart quotes", () => {
  const html =
    "<div><script>var x='no'</script><p>A mature male&rsquo;s weight " +
    "may reach&nbsp;or exceed 12 pounds</p></div>";
  const text = toText(html);
  assert.ok(text.includes("A mature male's weight"), text);
  assert.ok(!text.includes("var x"), "script contents leaked into the text");
  assert.ok(!text.includes("&rsquo;"), "entity survived decoding");
});

test("toText reproduces the exact CFA comparison that used to fail", () => {
  // The pre-fix pipeline decoded only &nbsp;, so it compared a stored
  // apostrophe against a literal "&rsquo;" and reported a disagreement.
  const page = toText("<p>A mature male&rsquo;s weight may reach or exceed 12 pounds.</p>");
  const stored = "A mature male's weight may reach or exceed 12 pounds";
  assert.ok(pageSupports(page, stored, "quote", 50).ok);
});

/* ---------------------------------------------------------------- *
 * Phase 2 — citation versus quotation
 * ---------------------------------------------------------------- */

test("a quote must appear on the page in full", () => {
  const page = toText("<p>short, dense coat contains more hairs per square inch</p>");
  assert.ok(pageSupports(page, "short, dense coat contains more hairs", "quote").ok);
  assert.ok(!pageSupports(page, "long, silky coat with a plumed tail", "quote").ok);
});

test("a citation drops our source label but still checks the fact", () => {
  const page = toText("<p>Abyssinian Coat Length: Shorthair Characteristics: Ticked coat</p>");
  const stated = "CFA breed profile, Coat Length: Shorthair";

  // POSITIVE: the field and value are on the page, the label is ours.
  assert.ok(pageSupports(page, stated, "citation").ok, "citation should be supported");

  // NEGATIVE CONTROL: as a quote it fails, which is exactly the false positive
  // that produced 38 of the 64 findings.
  assert.ok(!pageSupports(page, stated, "quote").ok, "quote reading should fail");
});

test("a citation whose underlying fact is missing still fails", () => {
  // This is the property that makes the relaxation safe. Change the page's
  // value and the citation must break just as a quote would.
  const page = toText("<p>Abyssinian Coat Length: Longhair</p>");
  const stated = "CFA breed profile, Coat Length: Shorthair";
  assert.ok(!pageSupports(page, stated, "citation").ok, "a wrong value must fail");

  const absent = toText("<p>Abyssinian Characteristics: Ticked coat</p>");
  assert.ok(!pageSupports(absent, stated, "citation").ok, "a missing field must fail");
});

test("verifiablePart splits on the first comma only", () => {
  assert.equal(
    verifiablePart("CFA breed profile, Coat Length: Shorthair", "citation"),
    "Coat Length: Shorthair",
  );
  // A value containing its own comma survives intact.
  assert.equal(
    verifiablePart("CFA breed profile, Coat Length: Shorthair, Longhair", "citation"),
    "Coat Length: Shorthair, Longhair",
  );
  // A quote is never split.
  assert.equal(verifiablePart("short, dense coat", "quote"), "short, dense coat");
  assert.equal(verifiablePart("short, dense coat", undefined), "short, dense coat");
});

test("quote is the default, so an undeclared record is strictly verified", () => {
  const page = toText("<p>Coat Length: Shorthair</p>");
  const stated = "CFA breed profile, Coat Length: Shorthair";
  assert.ok(!pageSupports(page, stated, undefined).ok, "undeclared must read as a quote");
});

/* ---------------------------------------------------------------- *
 * Phase 3 — transient classification
 * ---------------------------------------------------------------- */

test("only appropriate failures are retried", () => {
  for (const status of [408, 429, 500, 502, 503, 504]) {
    assert.ok(isTransient(status), `${status} should be retried`);
  }
  for (const status of [400, 401, 403, 404, 410, 451]) {
    assert.ok(!isTransient(status), `${status} must NOT be retried`);
  }
});

test("network errors are transient, malformed requests are not", () => {
  assert.ok(isTransient(undefined, new Error("fetch failed")));
  assert.ok(isTransient(undefined, new Error("The operation was aborted due to timeout")));
  assert.ok(!isTransient(undefined, new Error("Invalid URL")));
  assert.ok(!isTransient(undefined, new Error("unsupported protocol scheme")));
});

/* ---------------------------------------------------------------- *
 * Phase 0 — the findings this work exists to remove
 * ---------------------------------------------------------------- */

const FIXTURE = path.join(REPO_ROOT, "tests/fixtures/registry-findings-2026-09-14.json");

test("the captured run is preserved as the baseline being fixed", () => {
  const fixture = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  assert.equal(fixture.total, 64, "the captured run had 64 findings");
  const byField: Record<string, number> = {};
  for (const f of fixture.findings) byField[f.field] = (byField[f.field] ?? 0) + 1;
  assert.deepEqual(byField, {
    "cfa:coat": 38,
    "cfa:group": 12,
    "cfa:weight": 6,
    "fci:fetch": 5,
    "akc:height": 1,
    "akc:weight": 1,
    "akc:basics": 1,
  });
});

test("every captured cfa:coat finding is resolved by the citation rule", () => {
  /*
   * The 38 were reported because the whole statedAs, editorial prefix and all,
   * was sought on the page. Each is now declared a citation, so only the
   * `Field: Value` part is sought — and a synthetic page carrying just that
   * part now supports the record.
   */
  const fixture = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const coat = fixture.findings.filter((f: { field: string }) => f.field === "cfa:coat");
  assert.equal(coat.length, 38);

  let resolved = 0;
  for (const finding of coat) {
    const breed = BREEDS.find((b) => b.id === finding.breed);
    assert.ok(breed, `${finding.breed} is no longer in the registry`);
    assert.equal(
      breed.coat?.statedAsKind,
      "citation",
      `${finding.breed} still reads as a quote`,
    );
    const fact = verifiablePart(breed.coat!.statedAs!, "citation");
    const page = toText(`<p>${breed.name} ${fact} Characteristics: something</p>`);
    if (pageSupports(page, breed.coat!.statedAs!, "citation").ok) resolved += 1;
  }
  assert.equal(resolved, 38, "every captured cfa:coat finding should now pass");
});

test("the 5 fci:fetch findings are classified as unreachable, not as disagreements", () => {
  const fixture = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const fetches = fixture.findings.filter((f: { field: string }) => f.field === "fci:fetch");
  assert.equal(fetches.length, 5);
  // They were reported through report(), which is the defect: an unreachable
  // source says nothing about whether the record is right.
  for (const f of fetches) {
    assert.match(String(f.live), /fetch failed|HTTP|timeout/i);
  }
});

/* ---------------------------------------------------------------- *
 * The corpus side of the migration
 * ---------------------------------------------------------------- */

test("only CFA coat citations declare a kind, and every one is well formed", () => {
  const declared = BREEDS.filter((b) => b.coat?.statedAsKind);
  assert.equal(declared.length, 38, "exactly the citation records should declare a kind");
  for (const breed of declared) {
    assert.equal(breed.coat?.statedAsKind, "citation");
    assert.match(
      breed.coat!.statedAs!,
      /^[^,]+, [A-Z][A-Za-z ]*: .+/,
      `${breed.id}: a citation must read "<source>, <Field>: <Value>"`,
    );
    assert.notEqual(
      verifiablePart(breed.coat!.statedAs!, "citation"),
      breed.coat!.statedAs!,
      `${breed.id}: the source label should be stripped`,
    );
  }
});

test("every measurement statedAs is still a strict quote", () => {
  // The migration must not have relaxed the 684 measurements, which really are
  // verbatim registry wording.
  let n = 0;
  for (const breed of BREEDS) {
    for (const key of ["heightCm", "weightKg"] as const) {
      for (const m of breed.measurements?.[key] ?? []) {
        assert.equal(m.statedAsKind, undefined, `${breed.id} ${key} declared a kind`);
        n += 1;
      }
    }
  }
  assert.ok(n > 600, `only ${n} measurements checked`);
});

/* ---------------------------------------------------------------- *
 * Phase 5 — finder:audit purity
 * ---------------------------------------------------------------- */

test("finder:audit reports without writing, and update mode still writes", () => {
  /*
   * `--audit` used to print the coverage table and then fall through to the
   * writer, rewriting a committed artifact with a fresh generatedAt. Its name
   * says audit; auditing something should not change it.
   */
  const index = path.join(REPO_ROOT, "public/animal-finder-index.json");
  const before = fs.readFileSync(index);

  execFileSync("node", ["scripts/generate-finder-index.mjs", "--audit"], {
    cwd: REPO_ROOT,
    stdio: "pipe",
  });
  assert.ok(
    before.equals(fs.readFileSync(index)),
    "--audit modified public/animal-finder-index.json",
  );

  // --check is also read-only.
  execFileSync("node", ["scripts/generate-finder-index.mjs", "--check"], {
    cwd: REPO_ROOT,
    stdio: "pipe",
  });
  assert.ok(before.equals(fs.readFileSync(index)), "--check modified the index");

  // The writer still writes when asked.
  execFileSync("node", ["scripts/generate-finder-index.mjs"], { cwd: REPO_ROOT, stdio: "pipe" });
  const after = fs.readFileSync(index);
  assert.ok(after.length > 0, "update mode produced nothing");
  // Restore whatever was committed so the test leaves no trace.
  fs.writeFileSync(index, before);
});

/* ---------------------------------------------------------------- *
 * Phase 4 — the three verdicts, exercised deterministically
 * ---------------------------------------------------------------- */

const CHECKED = { akc: 219, cfa: 45, fife: 35, fci: 12 };

test("CLEAN: nothing disagrees and everything answered", () => {
  const r = buildVerdict({
    problems: [],
    degraded: [],
    fetchAttempts: [{ url: "https://x/1", attempts: [{ attempt: 1, status: 200, ok: true }] }],
    breedsChecked: 274,
    checked: CHECKED,
  });
  assert.equal(r.verdict, "CLEAN");
  assert.equal(r.exitCode, 0);
  assert.match(r.summaryMarkdown, /✅ Registry verification — CLEAN/);
  assert.match(r.summaryMarkdown, /No disagreements: every cited source still says/);
  assert.match(r.summaryMarkdown, /No corpus data was modified/);
  assert.doesNotMatch(r.summaryMarkdown, /### Unreachable sources/, "no such section when clean");
});

test("DISAGREEMENT: a source contradicts a record", () => {
  const r = buildVerdict({
    problems: [
      { breed: "cat-abyssinian", field: "cfa:group", expected: "Championship", actual: "absent" },
      { breed: "cat-burmese", field: "cfa:group", expected: "Championship", actual: "absent" },
    ],
    degraded: [],
    fetchAttempts: [{ url: "https://x/1", attempts: [{ attempt: 1, status: 200, ok: true }] }],
    breedsChecked: 274,
    checked: CHECKED,
  });
  assert.equal(r.verdict, "DISAGREEMENT");
  assert.equal(r.exitCode, 1);
  assert.match(r.summaryMarkdown, /❌ Registry verification — DISAGREEMENT/);
  assert.match(r.summaryMarkdown, /\| `cfa:group` \| 2 \|/, "counts grouped by category");
  assert.match(r.summaryMarkdown, /`cat-abyssinian`/, "affected breed identifiers");
  assert.match(r.summaryMarkdown, /No corpus data was modified/);
});

test("DEGRADED: a source would not answer, and that is not a disagreement", () => {
  const r = buildVerdict({
    problems: [],
    degraded: [
      {
        breed: "dog-border-collie",
        registryId: "fci",
        url: "https://www.fci.be/en/nomenclature/BORDER-COLLIE-297.html",
        error: "fetch failed",
        attempts: [
          { attempt: 1, error: "fetch failed" },
          { attempt: 2, error: "fetch failed" },
        ],
      },
    ],
    fetchAttempts: [
      {
        url: "https://www.fci.be/en/nomenclature/BORDER-COLLIE-297.html",
        attempts: [{ attempt: 1 }, { attempt: 2 }],
      },
    ],
    breedsChecked: 274,
    checked: CHECKED,
  });
  assert.equal(r.verdict, "DEGRADED");
  assert.equal(r.exitCode, 2, "DEGRADED must not share an exit code with DISAGREEMENT");
  assert.match(r.summaryMarkdown, /⚠️ Registry verification — DEGRADED/);
  assert.match(r.summaryMarkdown, /These are \*\*not\*\* disagreements/);
  assert.match(r.summaryMarkdown, /BORDER-COLLIE-297/, "stored source URL is linked");
  assert.match(r.summaryMarkdown, /#1 .*#2/, "both attempts recorded");
  assert.match(r.summaryMarkdown, /\| `fci` \| 1 \|/);
});

test("a disagreement outranks an unreachable source", () => {
  // If even one registry contradicts a record, that is the headline, however
  // many others timed out — otherwise a noisy week could mask a real change.
  const r = buildVerdict({
    problems: [{ breed: "cat-x", field: "cfa:group", expected: "a", actual: "b" }],
    degraded: [{ breed: "dog-y", registryId: "fci", url: "u", error: "e", attempts: [] }],
    fetchAttempts: [],
    breedsChecked: 2,
    checked: CHECKED,
  });
  assert.equal(r.verdict, "DISAGREEMENT");
  assert.equal(r.exitCode, 1);
  // The unreachable source is still reported, not dropped.
  assert.match(r.summaryMarkdown, /### Unreachable sources/);
});

test("the three verdicts have distinct exit codes", () => {
  const codes = new Set(
    [
      buildVerdict({ breedsChecked: 1 }),
      buildVerdict({ problems: [{ breed: "a", field: "f", expected: 1, actual: 2 }], breedsChecked: 1 }),
      buildVerdict({
        degraded: [{ breed: "a", registryId: "fci", url: "u", error: "e", attempts: [] }],
        breedsChecked: 1,
      }),
    ].map((r) => r.exitCode),
  );
  assert.equal(codes.size, 3, "CLEAN, DISAGREEMENT and DEGRADED must be distinguishable");
});

test("retry outcomes are reported", () => {
  const r = buildVerdict({
    fetchAttempts: [
      { url: "a", attempts: [{ attempt: 1, status: 200, ok: true }] },
      { url: "b", attempts: [{ attempt: 1, status: 503 }, { attempt: 2, status: 200, ok: true }] },
      { url: "c", attempts: [{ attempt: 1, error: "timeout" }, { attempt: 2, error: "timeout" }] },
    ],
    degraded: [{ breed: "d", registryId: "fci", url: "c", error: "timeout", attempts: [] }],
    breedsChecked: 3,
    checked: CHECKED,
  });
  assert.equal(r.counts.fetches, 3);
  assert.equal(r.counts.retried, 2, "two urls needed a second attempt");
  assert.equal(r.counts.recovered, 1, "one of them succeeded on retry");
  assert.match(r.summaryMarkdown, /\| Recovered by retry \| 1 \|/);
});

test("markdown table cells cannot break the table", () => {
  const r = buildVerdict({
    problems: [{ breed: "b", field: "f", expected: "a | b | c", actual: "x\ny" }],
    breedsChecked: 1,
  });
  const row = r.summaryMarkdown.split("\n").find((l) => l.includes("`b`"))!;
  assert.ok(row.includes("\\|"), "pipes must be escaped");
  assert.ok(!row.includes("\n"), "newlines must be folded");
});

test("DEGRADED never claims every source agreed", () => {
  // A clean-sounding sentence beside a DEGRADED banner is the exact confusion
  // the three-state model exists to prevent.
  const r = buildVerdict({
    degraded: [{ breed: "d", registryId: "fci", url: "u", error: "e", attempts: [] }],
    breedsChecked: 1,
  });
  assert.doesNotMatch(
    r.summaryMarkdown,
    /every cited source still says what the record claims/,
    "DEGRADED must not borrow CLEAN's wording",
  );
  assert.match(r.summaryMarkdown, /remains? unverified/);
});

test("the degraded sentence reads correctly for one source and for many", () => {
  const one = buildVerdict({
    degraded: [{ breed: "a", registryId: "fci", url: "u", error: "e", attempts: [] }],
    breedsChecked: 1,
  }).summaryMarkdown;
  const many = buildVerdict({
    degraded: [
      { breed: "a", registryId: "fci", url: "u", error: "e", attempts: [] },
      { breed: "b", registryId: "fci", url: "u", error: "e", attempts: [] },
    ],
    breedsChecked: 2,
  }).summaryMarkdown;
  assert.match(one, /1 source was unreachable and remains unverified/);
  assert.match(many, /2 sources were unreachable and remain unverified/);
});
