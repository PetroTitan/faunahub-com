/**
 * What did this runner actually receive?
 *
 *   node scripts/diagnose-registry-response.mjs            # the four defaults
 *   node scripts/diagnose-registry-response.mjs <url>...   # specific pages
 *   node scripts/diagnose-registry-response.mjs --json     # machine-readable
 *   node scripts/diagnose-registry-response.mjs --both     # human, then JSON
 *   node scripts/diagnose-registry-response.mjs --sweep    # every CFA URL, in order
 *
 * A weekly registry run reported 185 disagreements from a GitHub-hosted runner
 * and 15 from a laptop, on the same commit. Deciding between "CFA changed its
 * template" and "this runner was served an interstitial" needs to know what the
 * response WAS — and the verifier, which reads 277 pages, keeps none of them.
 *
 * This fetches a handful of pages and prints a description of each: status,
 * final URL, size, hash, what the document says it is, which structural markers
 * are present, and which infrastructure headers answered. It compares nothing
 * and changes nothing.
 *
 * ONE FETCH, HOWEVER MANY REPRESENTATIONS
 *
 * The workflow used to run this twice for one answer — once for people, once
 * for `--json` — and then sweep on top, so a blank dispatch made 53 requests
 * while its own comment said four. Every response is now fetched once into
 * `results`, and each rendering is a pure function of that array. Adding an
 * output format cannot add traffic.
 *
 * INPUT IS DATA, NEVER COMMAND TEXT
 *
 * Dispatch input arrives in an environment variable and is validated in
 * diagnostic-input.mjs before anything is fetched. Nothing from a caller is
 * ever interpolated into a shell command. See that module for why escaping was
 * not the fix.
 *
 * SAFETY OF THE OUTPUT
 *
 * It prints only what registry-diagnostics.mjs allows: no response bodies, no
 * Set-Cookie, no Authorization, no request headers, no tokens. Everything about
 * the body is reduced to a length, a hash, a few self-declared identity strings
 * and booleans. It is written to be safe to paste into a public issue.
 *
 * THE DEFAULT FOUR ARE CHOSEN, NOT ARBITRARY
 *
 *   abyssinian        a reviewed cfa:group finding — the class really is absent
 *   siamese           the same, to show the first is not a one-off
 *   american-bobtail  NOT a finding — the class is present, so a run that calls
 *                     this one a disagreement is reading the wrong document
 *   beagle (FCI)      a second registry, untouched by the incident, as a control
 *                     on the runner's network rather than on CFA
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

import { fetchPage } from "./lib/registry-text.mjs";
import { describeResponse, formatDiagnostic } from "./lib/registry-diagnostics.mjs";
import { cfaPagePlausibility, cfaShapeMarkers } from "./lib/registry-plausibility.mjs";
import { DEFAULT_TARGETS, EX_USAGE, parseDiagnosticInput } from "./lib/diagnostic-input.mjs";

/*
 * NOTHING IS FETCHED UNTIL EVERY INPUT HAS BEEN ACCEPTED.
 *
 * All-or-nothing, and before the first request: a run that half-validates has
 * already told a bad host that this runner exists.
 */
const parsed = parseDiagnosticInput({ argv: process.argv.slice(2), env: process.env });
if (!parsed.ok) {
  console.error("diagnostic input rejected — nothing was fetched:\n");
  for (const error of parsed.errors) console.error(`  ${error}`);
  console.error("");
  process.exit(EX_USAGE);
}
const { mode, emit, delayMs } = parsed;

/**
 * SWEEP EXISTS BECAUSE FOUR REQUESTS PROVED NOTHING.
 *
 * The first runner diagnostic fetched three CFA pages and got three valid ones,
 * byte-identical to a laptop's — no block, no template change, nothing to
 * classify. But the run that produced 185 findings made FORTY-FIVE CFA requests
 * at 900 ms, and mitigation that triggers on volume is invisible to a probe
 * that never reaches the threshold.
 *
 * Sweep walks every CFA URL the corpus cites, at the verifier's own cadence,
 * and reports WHERE plausibility stops holding. It is a MEASUREMENT: same user
 * agent, same cadence, one request at a time. Nothing here evades anything.
 */
async function cfaUrlsFromCorpus() {
  const REPO_ROOT = path.resolve(import.meta.dirname, "..");
  register("./lib/ts-resolve-hooks.mjs", import.meta.url);
  const { BREEDS } = await import(
    pathToFileURL(path.join(REPO_ROOT, "src/lib/pet-intelligence/index.ts")).href
  );
  return BREEDS.flatMap((b) =>
    b.recognition.filter((r) => r.registryId === "cfa" && r.registryUrl).map((r) => r.registryUrl),
  );
}

const urls =
  mode === "sweep"
    ? await cfaUrlsFromCorpus()
    : parsed.urls.length > 0
      ? parsed.urls
      : DEFAULT_TARGETS;

const registryOf = (url) => {
  const host = new URL(url).hostname;
  if (/(^|\.)cfa\.org$/.test(host)) return "cfa";
  if (/(^|\.)fci\.be$/.test(host)) return "fci";
  if (/(^|\.)akc\.org$/.test(host)) return "akc";
  if (/(^|\.)fifeweb\.org$/.test(host)) return "fife";
  return "other";
};

/* ------------------------- fetch, once ------------------------- */

const results = [];

for (const [i, url] of urls.entries()) {
  const registryId = registryOf(url);
  if (mode === "sweep" && i > 0 && delayMs > 0) {
    await new Promise((r) => setTimeout(r, delayMs));
  }

  try {
    const { body, status, finalUrl, headers } = await fetchPage(url);
    const diagnostic = describeResponse({
      registryId,
      requestedUrl: url,
      finalUrl,
      status,
      headers,
      body,
      shapeMarkers: registryId === "cfa" ? cfaShapeMarkers(body) : {},
    });

    /*
     * The verdict the verifier would reach, stated alongside the evidence, so
     * the diagnostic answers the operational question directly rather than
     * leaving it to be inferred from byte counts.
     */
    if (registryId === "cfa") {
      const p = cfaPagePlausibility({
        requestedUrl: url,
        finalUrl,
        contentType: headers.get("content-type"),
        body,
      });
      diagnostic.plausible = p.plausible;
      if (!p.plausible) {
        diagnostic.unusableReason = p.reason;
        diagnostic.unusableDetail = p.detail;
        diagnostic.fingerprint = p.fingerprint;
      }
    }

    results.push(diagnostic);
  } catch (error) {
    results.push({
      registryId,
      requestedUrl: url,
      error: String(error.message),
      attempts: error.attempts ?? [],
    });
  }
}

/* --------------------- render, from that set --------------------- */

function renderHuman() {
  for (const [i, d] of results.entries()) {
    if (d.error) {
      if (mode === "sweep") {
        console.log(`  #${String(i + 1).padStart(3)}  FETCH FAILED  ${d.error}  ${d.requestedUrl}`);
      } else {
        console.log(`  ${d.registryId}  ${d.requestedUrl}`);
        console.log(`      COULD NOT FETCH: ${d.error}`);
        console.log(
          `      attempts: ${(d.attempts ?? []).map((a) => `#${a.attempt} ${a.status ?? a.error}`).join("  ")}`,
        );
        console.log("");
      }
      continue;
    }

    if (mode === "sweep") {
      // One line per request: the shape of a rate-triggered failure is a run of
      // good responses followed by a run of bad ones, and that is only visible
      // if every request gets a line.
      const mark = d.plausible === false ? `UNUSABLE ${d.unusableReason}` : "ok";
      console.log(
        `  #${String(i + 1).padStart(3)}  ${String(d.byteLength).padStart(8)} bytes  ` +
          `age=${d.headers.age ?? "-"}  ${d.headers["x-cache"] ?? "-"}  ${mark}  ${d.requestedUrl}`,
      );
      continue;
    }

    console.log(formatDiagnostic(d));
    if (d.plausible === true) {
      console.log("      verdict:   PLAUSIBLE — the verifier would compare against this");
    } else if (d.plausible === false) {
      console.log(`      verdict:   UNUSABLE (${d.unusableReason}) — no comparison would be made`);
      console.log(`                 ${d.unusableDetail}`);
      console.log(`      fingerprint: ${d.fingerprint}`);
    }
    console.log("");
  }

  const cfa = results.filter((r) => r.registryId === "cfa" && r.plausible !== undefined);
  const unusable = cfa.filter((r) => r.plausible === false);
  const failed = results.filter((r) => r.error);

  console.log("---");
  console.log(`  mode: ${mode}   requests made: ${results.length}`);
  if (mode === "sweep") {
    const firstBad = results.findIndex((r) => r.plausible === false || r.error);
    console.log(`  swept ${results.length} CFA URLs at ${delayMs} ms`);
    console.log(`  fetch failures: ${failed.length}`);
    console.log(
      firstBad === -1
        ? "  every response was plausible — volume at this cadence does not reproduce the incident"
        : `  first unusable/failed response at request #${firstBad + 1} of ${results.length}`,
    );
  }
  console.log(
    `  ${cfa.length} CFA pages described: ${cfa.length - unusable.length} plausible, ${unusable.length} unusable`,
  );
  if (unusable.length > 0) {
    const prints = new Set(unusable.map((r) => r.fingerprint));
    console.log(`  fingerprints: ${[...prints].join(", ")}`);
    console.log(
      "  A shared fingerprint across distinct URLs is an EGRESS incident, not a registry change.",
    );
  }
  console.log("  Nothing was compared and nothing was written. This run reads only.");
}

const renderJson = () =>
  console.log(
    JSON.stringify({ capturedAt: new Date().toISOString(), mode, requests: results.length, results }, null, 2),
  );

if (emit === "human" || emit === "both") renderHuman();
if (emit === "both") console.log("\n--- machine-readable, same responses ---\n");
if (emit === "json" || emit === "both") renderJson();
