/**
 * What did this runner actually receive?
 *
 *   node scripts/diagnose-registry-response.mjs            # the four defaults
 *   node scripts/diagnose-registry-response.mjs <url>...   # specific pages
 *   node scripts/diagnose-registry-response.mjs --json     # machine-readable
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
 * SAFETY
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
import { fetchPage } from "./lib/registry-text.mjs";
import { describeResponse, formatDiagnostic } from "./lib/registry-diagnostics.mjs";
import { cfaPagePlausibility, cfaShapeMarkers } from "./lib/registry-plausibility.mjs";

const DEFAULT_TARGETS = [
  "https://cfa.org/breed/abyssinian/",
  "https://cfa.org/breed/american-bobtail/",
  "https://cfa.org/breed/siamese/",
  "https://www.fci.be/en/nomenclature/BEAGLE-161.html",
];

const asJson = process.argv.includes("--json");
const targets = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const urls = targets.length > 0 ? targets : DEFAULT_TARGETS;

const registryOf = (url) =>
  /(^|\.)cfa\.org/.test(new URL(url).hostname)
    ? "cfa"
    : /fci\.be/.test(new URL(url).hostname)
      ? "fci"
      : /akc\.org/.test(new URL(url).hostname)
        ? "akc"
        : "other";

const results = [];

for (const url of urls) {
  const registryId = registryOf(url);
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
    if (!asJson) {
      console.log(formatDiagnostic(diagnostic));
      if (diagnostic.plausible === true) {
        console.log("      verdict:   PLAUSIBLE — the verifier would compare against this");
      } else if (diagnostic.plausible === false) {
        console.log(`      verdict:   UNUSABLE (${diagnostic.unusableReason}) — no comparison would be made`);
        console.log(`                 ${diagnostic.unusableDetail}`);
        console.log(`      fingerprint: ${diagnostic.fingerprint}`);
      }
      console.log("");
    }
  } catch (error) {
    const failed = {
      registryId,
      requestedUrl: url,
      error: String(error.message),
      attempts: error.attempts ?? [],
    };
    results.push(failed);
    if (!asJson) {
      console.log(`  ${registryId}  ${url}`);
      console.log(`      COULD NOT FETCH: ${error.message}`);
      console.log(
        `      attempts: ${(error.attempts ?? []).map((a) => `#${a.attempt} ${a.status ?? a.error}`).join("  ")}`,
      );
      console.log("");
    }
  }
}

if (asJson) {
  console.log(JSON.stringify({ capturedAt: new Date().toISOString(), results }, null, 2));
} else {
  const cfa = results.filter((r) => r.registryId === "cfa" && r.plausible !== undefined);
  const unusable = cfa.filter((r) => r.plausible === false);
  console.log("---");
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
