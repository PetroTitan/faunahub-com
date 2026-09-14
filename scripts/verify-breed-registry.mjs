/**
 * Re-checks every structured value in the breed registry against its live source.
 *
 *   node scripts/verify-breed-registry.mjs          # check everything
 *   node scripts/verify-breed-registry.mjs --slug labrador-retriever
 *
 * This is the answer to "how do you know the registry is still true?". Breed
 * standards change — the AKC revises trait scales and life-expectancy ranges,
 * the FCI re-publishes standards, CFA accepts new breeds — and a registry that
 * was correct on the day it was written quietly rots.
 *
 * It makes NETWORK REQUESTS, so it is deliberately NOT part of `npm run build`
 * or `npm test`: a build that fails because a registry's marketing page is
 * briefly down is worse than one that ships slightly stale trait bands. Run it
 * before a breed expansion, and whenever a value is questioned.
 *
 * What it compares:
 *
 *   AKC   breed group, height and weight strings, life expectancy, coat
 *         length/type, and the five normalised trait bands
 *   FCI   group number, section, breed number, country of origin, status
 *   CFA   that the breed page still exists and still carries a standard
 *
 * Trait bands are re-derived here from the live 1-5 score using the same
 * `bandFromFivePointScale` the data was built with. That is how the numeric
 * score stays checkable without ever being stored: it lives for one comparison
 * inside this script and is never written anywhere.
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";

register("./lib/ts-resolve-hooks.mjs", import.meta.url);

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const lib = (p) => pathToFileURL(path.join(REPO_ROOT, "src/lib", p)).href;

const { BREEDS, getBreedSource } = await import(lib("pet-intelligence/index.ts"));
const { bandFromFivePointScale, AKC_TRAIT_MAP } = await import(
  lib("pet-intelligence/trait-scale.ts")
);

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";

import {
  decodeEntities,
  fetchAttempts,
  fetchBytes,
  fetchPage,
  fetchText,
  isTransient,
  pageSupports,
  toText,
  verifiablePart,
} from "./lib/registry-text.mjs";
import {
  articleXxxAmended,
  breedHeadingFromUrl,
  championshipSpan,
  documentIsForSeason,
  extractPdfText,
  spanListsBreed,
} from "./lib/cfa-show-rules.mjs";
import { EX_USAGE, checkValidity, resolveNow } from "./lib/source-validity.mjs";
import { describeSegment, lineSupports, resolveAkcBasics } from "./lib/akc-measurements.mjs";
import {
  akcRepresentations,
  resolveField,
  templateFingerprint,
} from "./lib/akc-representations.mjs";
import { describeResponse, formatDiagnostic } from "./lib/registry-diagnostics.mjs";
import { cfaPagePlausibility, cfaShapeMarkers } from "./lib/registry-plausibility.mjs";
import { buildVerdict } from "./lib/registry-verdict.mjs";
import {
  SHARED_SOURCE_FAILURE,
  createSharedSource,
  isSharedSourceFailure,
  sharedSourceFailureKind,
} from "./lib/shared-source.mjs";

/**
 * The date this run is judged against. Real time unless a test injects one.
 *
 * A malformed injected date stops the run: quietly falling back to the clock
 * would report a verdict about a different day than the caller asked about.
 */
const NOW = resolveNow(process.env);
if (!NOW.ok) {
  console.error(`${NOW.error}\n`);
  process.exit(EX_USAGE);
}

/**
 * Test seams. Neither changes how a normal run behaves.
 *
 * FAUNAHUB_FIFE_LISTING_URL points the shared FIFe listing at a stub, so the
 * behaviour of 35 records sharing one source can be exercised deterministically
 * instead of by waiting for fifeweb.org to have a bad day.
 *
 * FAUNAHUB_VERIFY_ONLY restricts the run to one registry. Useful for a spot
 * check, and it keeps those tests off the other three registries entirely.
 */
const FIFE_LISTING_URL =
  process.env.FAUNAHUB_FIFE_LISTING_URL ?? "https://fifeweb.org/cats/breeds/";
/**
 * Restrict the run to one or more registries, comma-separated.
 *
 * A list rather than a single id because the interesting regressions are
 * BETWEEN registries: a FIFe shared-source failure and a CFA egress incident in
 * the same run must produce two distinct signals, and that cannot be exercised
 * one registry at a time.
 */
const ONLY_REGISTRIES = process.env.FAUNAHUB_VERIFY_ONLY
  ? new Set(process.env.FAUNAHUB_VERIFY_ONLY.split(",").map((r) => r.trim()).filter(Boolean))
  : null;

/**
 * Point CFA breed-page fetches at a stub. Test-only, inert unless set.
 *
 * The plausibility gate compares a page's declared canonical against the URL
 * requested BY PATH ONLY, so a stub on 127.0.0.1 can serve a body declaring
 * `https://cfa.org/breed/abyssinian/` and still be judged exactly as the real
 * page would be. Without this seam the soft-block behaviour could only be
 * tested by being blocked.
 */
const CFA_BASE_URL = process.env.FAUNAHUB_CFA_BASE_URL ?? null;

/**
 * Point AKC breed-page fetches at a stub. Test-only, inert unless set.
 *
 * "AKC dropped the basics container", "two identities both match" and "the
 * qualifier changed from Minimum to Maximum" cannot be produced on demand from
 * akc.org, and they are exactly the cases a measurement comparison has to keep
 * failing on.
 */
const AKC_BASE_URL = process.env.FAUNAHUB_AKC_BASE_URL ?? null;
const akcUrl = (url) =>
  AKC_BASE_URL ? url.replace(/^https?:\/\/(?:www\.)?akc\.org/i, AKC_BASE_URL) : url;

/**
 * Point claim-level group sources at a stub ORIGIN. Test-only, inert unless set.
 *
 * The Show Rules are a 748 kB PDF republished every show season, and a season's
 * rules are TWO documents. Exercising "the breed was removed from Article XXX"
 * or "the addendum amends it" against the live files is not possible, and
 * waiting for CFA to have a bad day is not a test strategy.
 *
 * It replaces the ORIGIN and keeps each document's own path, so the rules and
 * the addendum stay distinguishable — a single-URL seam would have sent both to
 * one stub response and made the package untestable as a package.
 */
const GROUP_SOURCE_ORIGIN = process.env.FAUNAHUB_GROUP_SOURCE_URL ?? null;
const groupUrl = (url) => {
  if (!GROUP_SOURCE_ORIGIN) return url;
  try {
    return new URL(new URL(url).pathname, GROUP_SOURCE_ORIGIN).toString();
  } catch {
    return url;
  }
};
const cfaUrl = (url) =>
  CFA_BASE_URL ? url.replace(/^https?:\/\/(?:www\.)?cfa\.org/i, CFA_BASE_URL) : url;
/** Rate-limit pause between records. Only a test against a stub sets this to 0. */
const RECORD_DELAY_MS = Number(process.env.FAUNAHUB_VERIFY_DELAY_MS ?? 900);
/**
 * Inject a fault into the shared listing's processing. Test-only, inert unless set.
 *
 * `parse` and `validate` run on a body that already arrived, so no response a
 * stub can serve will make them throw — `toText` accepts any string and the
 * length check cannot fail. Without a seam, the one path where a processing
 * exception escapes the shared-source wrapper could not be exercised through
 * the real run loop at all, which is exactly how it survived the last fix.
 *
 * @type {"parse" | "validate" | null}
 */
const FIFE_FAULT = process.env.FAUNAHUB_FIFE_FAULT ?? null;

const slugFilter = (() => {
  /*
   * Accept both `--slug shiba-inu` and `--slug=shiba-inu`.
   *
   * Only the space-separated form was handled, so `--slug=akita` silently
   * matched nothing, the filter stayed null, and the "single breed" spot-check
   * quietly verified all 274 against four live registries — five minutes and
   * 311 requests to answer a question about one breed. A flag that is ignored
   * rather than rejected is worse than one that errors.
   */
  const inline = process.argv.find((a) => a.startsWith("--slug="));
  if (inline) return inline.slice("--slug=".length) || null;
  const i = process.argv.indexOf("--slug");
  return i === -1 ? null : (process.argv[i + 1] ?? null);
})();

const problems = [];
/**
 * Fetch failures that survived a retry.
 *
 * These are NOT disagreements. A registry that will not answer tells us
 * nothing about whether our record is right, and recording it as a data
 * problem is how five FCI timeouts became five "disagreements" in the first
 * weekly run. They get their own verdict — DEGRADED — so an unreachable
 * source can never be mistaken for a clean bill of health, nor for drift.
 */
const degraded = [];
const checked = { akc: 0, fci: 0, cfa: 0, fife: 0 };

function report(breed, field, expected, actual) {
  problems.push({ breed: breed.id, field, expected, actual });
}

/** One breed's own source failed: scoped to that breed. */
function reportDegraded(breed, registryId, url, error, attempts, kind) {
  degraded.push({
    scope: "breed",
    breed: breed.id,
    registryId,
    url,
    error,
    kind,
    attempts: attempts ?? [],
  });
}

/**
 * Opt-in per-response diagnostics.
 *
 * Off by default: a normal run prints one dot per breed, and 277 response
 * descriptors would bury the verdict. Set FAUNAHUB_REGISTRY_DIAGNOSTICS=1 to
 * print a safe descriptor for every response — no bodies, no cookies, no
 * credentials; see registry-diagnostics.mjs for exactly what is kept.
 *
 * An UNUSABLE response is described whether or not this is set, because the
 * descriptor is the entire evidence for the DEGRADED entry it produces.
 */
const DIAGNOSTICS = process.env.FAUNAHUB_REGISTRY_DIAGNOSTICS === "1";

/**
 * Responses that arrived but could not be read as the page we asked for.
 *
 * Held rather than reported, because whether one of these is a broken page or
 * a registry-wide incident is not knowable until every record has been tried.
 * Folded once, after the loop, by `foldUnusableResponses`.
 *
 * @type {Array<{registryId: string, breed: string, url: string, reason: string,
 *   detail: string, fingerprint: string, attempts: Array<object>, diagnostic: object}>}
 */
const unusableResponses = [];

/**
 * Breeds whose page is intact but whose TEMPLATE no longer carries some fields.
 *
 * 24 AKC pages stopped publishing `breed_data.basics`. That is one change at
 * AKC, not 24 breeds going wrong, and reporting it 24 times buries the fact
 * that the cause is single. Held until every record has been tried, then folded
 * only if the failures are provably identical — same page shape, same fields
 * lost. The aggregate names every breed it covers, so nothing is hidden by it.
 *
 * @type {Array<{registryId: string, breed: string, url: string,
 *   fingerprint: string, unsupported: string[]}>}
 */
const templateGaps = [];

function noteUnusableResponse(event) {
  unusableResponses.push(event);
  if (DIAGNOSTICS) console.log(`\n${formatDiagnostic(event.diagnostic)}`);
}

/**
 * How many distinct URLs must fail the SAME way to count as one incident.
 *
 * Two could be coincidence — two pages genuinely retired the same week. Three
 * distinct URLs returning an identically-classified unusable response is a
 * pattern, and reporting a pattern as N separate breed failures is the mistake
 * this whole change exists to stop making.
 *
 * The threshold is on DISTINCT URLS SHARING A FINGERPRINT, never on how many
 * findings appeared. A high finding count is what the old behaviour produced;
 * using it as the trigger would make the cure depend on the symptom.
 */
const CORRELATED_MIN_URLS = 3;

/**
 * Turn held unusable responses into either one registry incident or several
 * breed-scoped failures.
 *
 * Grouping is by registry AND fingerprint, so a run where CFA is blocked while
 * one unrelated FCI page 200s a maintenance stub produces one incident and one
 * breed-scoped entry, not one muddled aggregate.
 */
function foldTemplateGaps() {
  const groups = new Map();
  for (const gap of templateGaps) {
    const key = `${gap.registryId}\n${gap.fingerprint}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(gap);
  }

  for (const gaps of groups.values()) {
    const breeds = gaps.map((g) => g.breed).sort();
    const unsupported = [...new Set(gaps.flatMap((g) => g.unsupported))].sort();

    if (breeds.length >= CORRELATED_MIN_URLS) {
      degraded.push({
        scope: "registry-template",
        registryId: gaps[0].registryId,
        url: `${breeds.length} breed pages`,
        kind: "unusable",
        error:
          `${gaps[0].registryId.toUpperCase()} page template no longer carries these fields: ` +
          `${unsupported.join(", ")}`,
        fingerprint: gaps[0].fingerprint,
        affectedRecords: breeds.length,
        breeds,
        unverifiedFields: unsupported,
        attempts: [],
      });
      continue;
    }
    for (const gap of gaps) {
      degraded.push({
        scope: "breed",
        breed: gap.breed,
        registryId: gap.registryId,
        url: gap.url,
        kind: "unusable",
        error: `the page does not publish: ${gap.unsupported.join(", ")}`,
        attempts: [],
      });
    }
  }
}

function foldUnusableResponses() {
  const groups = new Map();
  for (const event of unusableResponses) {
    const key = `${event.registryId}\n${event.fingerprint}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(event);
  }

  for (const events of groups.values()) {
    const urls = new Set(events.map((e) => e.url));
    const attemptCount = events.reduce((n, e) => n + (e.attempts?.length ?? 1), 0);

    if (urls.size >= CORRELATED_MIN_URLS) {
      degraded.push({
        scope: "registry-egress",
        registryId: events[0].registryId,
        url: `${urls.size} distinct URLs`,
        kind: "unusable",
        reason: events[0].reason,
        error: `${events[0].registryId.toUpperCase()} registry responses unusable from this runner: ${events[0].detail}`,
        fingerprint: events[0].fingerprint,
        distinctUrls: urls.size,
        attemptCount,
        affectedRecords: events.length,
        examples: [...urls].slice(0, 3),
        attempts: events[0].attempts ?? [],
      });
      continue;
    }

    // Not correlated: each one is its own breed's problem, as before.
    for (const event of events) {
      degraded.push({
        scope: "breed",
        breed: event.breed,
        registryId: event.registryId,
        url: event.url,
        kind: "unusable",
        reason: event.reason,
        error: event.detail,
        attempts: event.attempts ?? [],
      });
    }
  }
}

/**
 * A source that many records share failed: scoped to the REGISTRY.
 *
 * Every record citing it will raise the same cached error, so this is called
 * once per record and folded into one entry keyed by registry and canonical
 * URL. What varies is the count — how much verification the outage cost — and
 * that is recorded as `affectedRecords` rather than as 35 separate findings
 * each blaming a different cat for a page none of them owns.
 */
const sharedFailures = new Map();
function noteSharedFailure(error, registryId) {
  const url = error.sharedSourceUrl ?? "(unknown)";
  const key = `${registryId}\n${url}`;
  const existing = sharedFailures.get(key);
  if (existing) {
    existing.affectedRecords += 1;
    return;
  }
  const entry = {
    scope: "registry",
    registryId,
    url,
    // "fetched" | "unusable" | "processing" — see shared-source.mjs. A
    // processing fault is OUR bug and must not read as a registry outage.
    kind: sharedSourceFailureKind(error),
    error: String(error.message),
    attempts: error.attempts ?? [],
    affectedRecords: 1,
  };
  sharedFailures.set(key, entry);
  degraded.push(entry);
}



/* ---------------------------- AKC ---------------------------- */

async function checkAkc(breed, rec) {
  const html = await fetchText(akcUrl(rec.registryUrl));
  checked.akc += 1;

  /*
   * A PAGE THAT CHANGED SHAPE IS NOT A BREED THAT CHANGED.
   *
   * These two used to be reported the same way, as an `akc:page` /
   * `akc:basics` DISAGREEMENT — which reads as "AKC now contradicts this
   * record" when what happened is that we could not read the page at all. They
   * are DEGRADED: the claims went unverified, nothing was concluded about the
   * dog, and the run still cannot report CLEAN.
   */
  const props = html.match(/data-js-component="breedPage" data-js-props="(.*?)"\s*>/s);
  if (!props) {
    reportDegraded(
      breed,
      rec.registryId,
      rec.registryUrl,
      "the page carries no breedPage props blob — its shape changed",
      [{ attempt: 1, status: 200, ok: true }],
      "unusable",
    );
    return;
  }

  let data;
  try {
    data = JSON.parse(decodeEntities(props[1]));
  } catch (error) {
    reportDegraded(
      breed,
      rec.registryId,
      rec.registryUrl,
      `the breedPage props blob is not readable JSON: ${error.message}`,
      [{ attempt: 1, status: 200, ok: true }],
      "unusable",
    );
    return;
  }

  /*
   * MEASUREMENTS DO NOT DEPEND ON THE PROPS BLOB, SO THEY ARE CHECKED FIRST.
   *
   * Height and weight are published in the page's own markup. The old order
   * returned early when the structured records were missing, which silently
   * skipped four measurement comparisons for any breed whose props had changed
   * shape — losing the checks that were still possible.
   */
  checkAkcMeasurements(breed, rec, html);

  const resolved = resolveAkcBasics(data, rec.registryUrl);
  if (!resolved.ok) {
    /*
     * TWO SHAPE FAILURES, NOT ONE.
     *
     * `no-props` — the blob parsed but carries no `settings` object at all, so
     * there is nothing on this page to read, not even the second
     * representations below.
     *
     * `no-basics-container` — `settings` is there and `basics` is not, which
     * still leaves breed group and AKC code published elsewhere on the page.
     *
     * Both are the page changing shape and neither contradicts the breed, so
     * both are DEGRADED. An earlier draft of this function collapsed the test
     * to `reason !== "no-basics-container"` and silently moved `no-props` into
     * the disagreement branch — exit 1 for a page that said nothing at all.
     */
    if (resolved.reason === "no-props") {
      reportDegraded(
        breed,
        rec.registryId,
        rec.registryUrl,
        `the breedPage props blob carries no settings object: ${resolved.detail}`,
        [{ attempt: 1, status: 200, ok: true }],
        "unusable",
      );
      return;
    }
    if (resolved.reason !== "no-basics-container") {
      // The records exist and this breed is not among them, or two identities
      // both match. Either is a claim about the breed, and neither is agreement.
      report(breed, "akc:basics", "a basics record", resolved.detail);
      return;
    }
  }

  const settings = data.settings ?? {};
  const key = resolved.ok ? resolved.key : (settings.current_breed ?? null);
  const basics = resolved.ok ? resolved.basics : null;
  const traits = key ? settings.breed_data?.traits?.[key]?.traits : undefined;

  /*
   * EVERY FIELD IS RESOLVED ON ITS OWN.
   *
   * When `basics` went missing from 24 pages, everything that cited it went
   * unverified together — including two facts the SAME page still publishes
   * elsewhere (`current_breed_group.name`, and the akc_code carried on the
   * colour rows). Verifying per field recovers exactly those two and leaves the
   * rest visibly unverified, instead of trading one all-or-nothing answer for
   * another. See akc-representations.mjs for why a second representation is
   * evidence here and not a guess.
   */
  const reps = akcRepresentations(settings, key, basics);
  const unsupported = [];

  const claims = [
    ["akc:group", reps.group, rec.registryGroup, "breed group"],
    ["akc:code", reps.code, rec.registryBreedCode === undefined ? undefined : String(rec.registryBreedCode), "AKC code"],
    ["akc:recognizedYear", reps.year, rec.recognizedYear === undefined ? undefined : String(rec.recognizedYear), "year recognized"],
    ["akc:lifespan", reps.lifespan, breed.lifespanYears?.statedAs, "life expectancy"],
  ];

  for (const [field, representations, stored, label] of claims) {
    if (stored === undefined || stored === null) continue;
    const resolvedField = resolveField(representations);

    if (resolvedField.state === "unsupported") {
      unsupported.push(label);
      continue;
    }
    if (resolvedField.state === "conflict") {
      /*
       * Two representations of one fact that do not agree. Choosing either
       * would verify the record against whichever copy happened to match it.
       */
      report(breed, field, stored, `AKC states this twice and they disagree: ${resolvedField.detail}`);
      continue;
    }
    if (resolvedField.value !== String(stored)) {
      report(breed, field, stored, `${resolvedField.value} (from ${resolvedField.from.join(" + ")})`);
    }
  }

  /*
   * Coat and traits live only in `breed_data.traits`. There is no second
   * representation, so when the container is gone they are simply unverified.
   */
  if (traits === undefined) {
    if (breed.coat?.statedAs) unsupported.push("coat length");
    if (Object.keys(breed.traits ?? {}).length > 0) unsupported.push("trait bands");
  } else {
    const liveCoat = traits?.coat_length?.selected ?? [];
    if (breed.coat?.statedAs && liveCoat.length) {
      if (!breed.coat.statedAs.includes(liveCoat.join(", "))) {
        report(breed, "akc:coatLength", breed.coat.statedAs, liveCoat.join(", "));
      }
    }
    for (const [akcKey, ourKey] of Object.entries(AKC_TRAIT_MAP)) {
      const score = traits?.[akcKey]?.score;
      const liveBand = typeof score === "number" ? bandFromFivePointScale(score) : undefined;
      const stored = breed.traits[ourKey]?.value;
      if (stored !== liveBand) {
        report(breed, `akc:${ourKey}`, stored ?? "(absent)", liveBand ?? "(absent)");
      }
    }
  }

  if (unsupported.length > 0) {
    // Held, not reported here: whether this is one AKC template change or one
    // broken page is not knowable until every record has been tried.
    templateGaps.push({
      registryId: rec.registryId,
      breed: breed.id,
      url: rec.registryUrl,
      fingerprint: templateFingerprint(settings, unsupported),
      unsupported,
    });
  }
}

/**
 * Compare every stored measurement against the line AKC publishes.
 *
 * AKC puts a shared qualifier in front of the segments it governs — "Minimum:
 * 25.5 males; 23.5 females" — while FaunaHub stores one record per sex, each
 * carrying that qualifier. `live.includes(stored)` therefore passed the first
 * and failed the second, reporting a correct record as a disagreement; and it
 * would equally have passed a bare "25.5", a "Minimum: 25.5" with the sex
 * dropped, or the fragment "5 males". See akc-measurements.mjs.
 */
function checkAkcMeasurements(breed, rec, html) {
  const dimensions = [
    [html.match(/name="height">Height: ([^<]*)</)?.[1], breed.measurements?.heightCm, "akc:height"],
    [html.match(/name="weight">Weight: ([^<]*)</)?.[1], breed.measurements?.weightKg, "akc:weight"],
  ];

  for (const [line, stored, field] of dimensions) {
    const records = (stored ?? []).filter((m) => m.sourceId === `akc-${breed.slug}`);
    if (records.length === 0) continue;

    if (!line) {
      // The dimension is published on every breed page; its absence is the page
      // having changed, not the record being wrong.
      reportDegraded(
        breed,
        rec.registryId,
        rec.registryUrl,
        `the page no longer publishes a ${field.split(":")[1]} line`,
        [{ attempt: 1, status: 200, ok: true }],
        "unusable",
      );
      continue;
    }

    for (const record of records) {
      const result = lineSupports(line, record.statedAs);
      if (result.ok) continue;
      const why =
        result.reason === "unparseable-record"
          ? "the stored wording is not a readable measurement"
          : result.reason === "unparseable-page"
            ? `no measurement could be read from "${line}"`
            : result.reason === "ambiguous"
              ? `the page states it ${result.matches} times, so which was verified is unclear`
              : `the page states: ${(result.segments ?? []).map(describeSegment).join("; ") || "(nothing)"}`;
      report(breed, field, record.statedAs, why);
    }
  }
}

/* ---------------------------- FCI ---------------------------- */

async function checkFci(breed, rec) {
  const html = await fetchText(rec.registryUrl);
  checked.fci += 1;
  const span = (id) => {
    const m = html.match(new RegExp(`<span id="ContentPlaceHolder1_${id}"[^>]*>(.*?)</span>`, "s"));
    return m ? m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : undefined;
  };
  const number = span("NumeroLabel");
  if (number && number !== String(rec.registryBreedCode)) {
    report(breed, "fci:number", rec.registryBreedCode, number);
  }
  const status = span("StatutLabel");
  if (status && !/definitive/i.test(status) && rec.status === "recognized") {
    report(breed, "fci:status", "recognized (definitive)", status);
  }
  const section = span("SectionLabel");
  if (section && rec.registryGroup && !rec.registryGroup.includes(section)) {
    report(breed, "fci:section", rec.registryGroup, section);
  }
  const group = html
    .match(/id="ContentPlaceHolder1_GroupeHyperLink"[^>]*>(.*?)<\/a>/s)?.[1]
    ?.replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const groupNo = group?.match(/n°(\d+)/)?.[1];
  const storedNo = rec.registryGroup?.match(/Group (\d+)/)?.[1];
  if (groupNo && storedNo && groupNo !== storedNo) {
    report(breed, "fci:group", `Group ${storedNo}`, `Group ${groupNo}`);
  }
}

/* ---------------------------- CFA ---------------------------- */

/**
 * Documents that carry a `registryGroup` claim for many breeds at once.
 *
 * CFA states Championship entitlement in the Show Rules, not on the breed page,
 * and all twelve records that cite it cite the SAME document. So it is a shared
 * source in the existing sense: fetched once, parsed once, and — when it fails —
 * reported once for the registry instead of once per cat.
 *
 * Keyed by source id rather than hardcoded, so the URL comes from the cited
 * source record and the corpus and the verifier cannot drift apart.
 */
const groupSources = new Map();

/**
 * A shared source that fails without asking the network.
 *
 * An expired document has nothing to tell us, and fetching it anyway would put
 * a request in the log for a source we already know we may not rely on. This
 * presents the refusal in the same shape as any other shared-source failure, so
 * the run loop folds it into ONE registry-scoped DEGRADED entry exactly as it
 * folds an outage.
 */
function refusedSource(id, url, kind, message) {
  const error = new Error(message);
  error[SHARED_SOURCE_FAILURE] = true;
  error.sharedSourceId = id;
  error.sharedSourceUrl = url;
  error.sharedSourceFailureKind = kind;
  error.attempts = [];
  return {
    id,
    url,
    get state() {
      return "failed";
    },
    resolve: async () => {
      throw error;
    },
  };
}

function groupSourceFor(sourceId, role = "governing") {
  if (groupSources.has(sourceId)) return groupSources.get(sourceId);

  const record = getBreedSource(sourceId);
  if (!record) {
    groupSources.set(sourceId, null);
    return null;
  }

  /*
   * VALIDITY IS DECIDED BEFORE THE FETCH.
   *
   * These records cite a document that governs one show season. Nothing read
   * those dates before: a run after April 2027 would have downloaded the same
   * file, found the same twelve breeds and reported CLEAN — a stale document
   * agreeing with a stale record.
   */
  const validity = checkValidity(record, NOW.at);
  if (!validity.inForce) {
    const refused = refusedSource(
      sourceId,
      groupUrl(record.url),
      "out-of-force",
      `${record.title} is not in force: ${validity.reason} (no request was made)`,
    );
    groupSources.set(sourceId, refused);
    return refused;
  }

  const source = createSharedSource({
    id: sourceId,
    url: groupUrl(record.url),
    // The Show Rules are a PDF: decoding the bytes as text would corrupt every
    // compressed stream before the parser ever saw them.
    fetchText: fetchBytes,
    parse: (bytes) => {
      const text = extractPdfText(bytes);
      return { text, span: championshipSpan(text), amends: articleXxxAmended(text) };
    },
    /*
     * A document we cannot find Article XXX in is not evidence of anything, and
     * must never read as "this breed is not listed". Failing here routes it
     * through the shared-source DEGRADED path instead.
     */
    validate: ({ text, span, amends }) => {
      if (text.length < 1000) {
        return "the document could not be read as text (not a PDF, or no readable streams)";
      }
      /*
       * THE RIGHT CONTENT IS NOT PROOF OF THE RIGHT DOCUMENT.
       *
       * The previous season's Show Rules list the same twelve breeds under the
       * same article, so every content check below would pass against a stale
       * file served at the same URL. The marker is printed only by the edition
       * we cited.
       */
      if (record.seasonMarker && !documentIsForSeason(text, record.seasonMarker)) {
        return `the document at this URL is not the cited edition (expected to find "${record.seasonMarker}")`;
      }
      if (role === "amendment") {
        /*
         * AN AMENDMENT IS NOT READ FOR THE LIST; IT IS READ FOR WHETHER THE
         * LIST STILL STANDS.
         *
         * If it touches Article XXX then the published breed list is no longer
         * the whole rule, and no automatic reading of it is trustworthy. This
         * asks for a person rather than guessing what the amendment did — one
         * DEGRADED signal, and not one breed blamed for it.
         */
        return amends
          ? `amends the Championship breed list (${amends.join(", ")}) — a person must read it before these records can be verified automatically`
          : null;
      }
      return span
        ? null
        : "Article XXX (Championship Breeds/Divisions & Colors) was not found in the Show Rules";
    },
  });

  groupSources.set(sourceId, source);
  return source;
}

/**
 * Verify one `registryGroup` claim against the document that actually carries it.
 *
 * Throws the shared-source failure when the document is unavailable, so the run
 * loop records ONE registry-scoped signal. It deliberately does not fall back to
 * the profile page: the page stopped stating the class, which is the whole
 * reason this path exists, and silently re-checking it would manufacture twelve
 * disagreements out of one outage.
 */
async function checkGroupAgainstSource(breed, rec) {
  const source = groupSourceFor(rec.registryGroupSourceId);
  if (!source) {
    report(
      breed,
      `${rec.registryId}:group`,
      rec.registryGroup,
      `declared group source "${rec.registryGroupSourceId}" has no source record`,
    );
    return;
  }

  const { span } = await source.resolve();

  /*
   * THE GOVERNING PACKAGE, NOT JUST ITS FIRST DOCUMENT.
   *
   * CFA issues a season's rules as a printed document plus an addendum of
   * exceptions, both official and both current. Verifying only the first is
   * verifying half the rule: an amendment to Article XXX would be invisible,
   * and every record would pass against a list that had been changed.
   *
   * The amendment is its own shared source — its own URL, its own validity, its
   * own failure — so a run can say which of the two it could not read, and it
   * is fetched once however many records cite the package.
   */
  const record = getBreedSource(rec.registryGroupSourceId);
  if (record?.amendedBy) {
    const amendment = groupSourceFor(record.amendedBy, "amendment");
    if (!amendment) {
      report(
        breed,
        `${rec.registryId}:group`,
        rec.registryGroup,
        `declared amendment "${record.amendedBy}" has no source record`,
      );
      return;
    }
    await amendment.resolve();
  }

  const heading = breedHeadingFromUrl(rec.registryUrl);
  if (!heading) {
    report(
      breed,
      `${rec.registryId}:group`,
      rec.registryGroup,
      "could not derive the registry's own heading from the profile URL",
    );
    return;
  }

  if (!spanListsBreed(span, heading)) {
    report(
      breed,
      `${rec.registryId}:group`,
      rec.registryGroup,
      `Show Rules Article XXX does not list ${heading} as entitled to Championship`,
    );
  }
}

/**
 * CFA checks.
 *
 * The first version of this asked only whether the page contained the string
 * "standard" and whether the recognition year appeared ANYWHERE in the HTML.
 * Both were near-vacuous: a Sphynx page contains "2018" nineteen times, so a
 * record claiming the wrong year would have passed. These checks now require
 * the year to appear in a sentence that is actually about recognition, and
 * verify the coat wording and the standard PDF link.
 */
async function checkCfa(breed, rec) {
  const requestedUrl = cfaUrl(rec.registryUrl);
  const { body: html, finalUrl, headers, attempts } = await fetchPage(requestedUrl);

  /*
   * NOTHING BELOW RUNS UNTIL THE RESPONSE IS PLAUSIBLY THIS PAGE.
   *
   * Every check after this point asks whether CFA still SAYS something. Asked
   * of a bot challenge, of a login wall, of a CDN error shell, each one answers
   * "no" — truthfully, and about entirely the wrong document. That is how one
   * blocked runner produced 182 disagreements against 45 pages that were fine.
   *
   * Plausibility is decided on identity and shape only; see
   * registry-plausibility.mjs for why it must never consult the values under
   * verification.
   */
  const plausibility = cfaPagePlausibility({
    requestedUrl,
    finalUrl,
    contentType: headers?.get?.("content-type"),
    body: html,
  });

  if (!plausibility.plausible) {
    noteUnusableResponse({
      registryId: "cfa",
      breed: breed.id,
      url: rec.registryUrl,
      reason: plausibility.reason,
      detail: plausibility.detail,
      fingerprint: plausibility.fingerprint,
      attempts,
      diagnostic: describeResponse({
        registryId: "cfa",
        requestedUrl,
        finalUrl,
        status: 200,
        headers,
        body: html,
        shapeMarkers: cfaShapeMarkers(html),
      }),
    });
    // No comparisons, and no `checked.cfa` increment: this record was fetched,
    // not verified, and the summary must not imply otherwise.
    return;
  }

  checked.cfa += 1;

  const text = toText(html);

  if (!/\/wp-content\/uploads\/[^"' ]*standard[^"' ]*\.pdf/i.test(html)) {
    report(breed, "cfa:standard", "a linked breed standard PDF", "no standard PDF on the page");
  }

  if (rec.recognizedYear) {
    // The year must appear in a sentence about recognition, not merely anywhere.
    const sentences = text.split(/(?<=[.!?])\s+/);
    const supported = sentences.some(
      (sentence) =>
        sentence.includes(String(rec.recognizedYear)) &&
        /championship|recognis|recogniz|accepted|granted|status/i.test(sentence),
    );
    if (!supported) {
      report(
        breed,
        "cfa:recognizedYear",
        rec.recognizedYear,
        "no sentence on the page ties that year to recognition",
      );
    }
  }

  // The coat wording is quoted verbatim on the page, so it must still be there.
  if (breed.coat?.statedAs && breed.coat.sourceId === `cfa-${breed.slug}`) {
    const { ok, needle } = pageSupports(text, breed.coat.statedAs, breed.coat.statedAsKind);
    if (!ok) {
      report(
        breed,
        "cfa:coat",
        needle,
        breed.coat.statedAsKind === "citation"
          ? "the cited field and value are not on the page"
          : "quoted coat wording not found on the page",
      );
    }
  }

  // Any weight FaunaHub records from the profile page must still be published.
  for (const m of breed.measurements?.weightKg ?? []) {
    if (m.sourceId !== `cfa-${breed.slug}`) continue;
    const { ok, needle } = pageSupports(text, m.statedAs, m.statedAsKind, 50);
    if (!ok) {
      report(breed, "cfa:weight", needle, "quoted weight wording not found on the page");
    }
  }

  /*
   * THE GROUP CLAIM IS CHECKED LAST, AND POSSIBLY ELSEWHERE.
   *
   * Last, because a record that cites the Show Rules for its class will throw
   * from here when that document is unavailable — and everything above has
   * already verified what the profile page does still support. An outage in one
   * source should not cost us the claims another source proved.
   *
   * Elsewhere, when `registryGroupSourceId` is declared: CFA states Championship
   * entitlement in Article XXX of the Show Rules and no longer prints it on the
   * breed page, so the page is simply not the document that answers this.
   *
   * With no declared group source the old profile-page test still runs. Absence
   * of a citation must never mean absence of a check.
   */
  if (rec.registryGroup) {
    if (rec.registryGroupSourceId) {
      await checkGroupAgainstSource(breed, rec);
    } else if (!new RegExp(rec.registryGroup, "i").test(text)) {
      report(breed, "cfa:group", rec.registryGroup, "class no longer named on the page");
    }
  }
}

/**
 * FIFe publishes every breed on ONE page, so it is fetched once and reused.
 *
 * These 35 records were checked by nothing. `fife` was absent from the dispatch
 * below — the string does not appear anywhere in this file — so each FiFe
 * recognition fell through the if/else chain, still paid its 900 ms rate-limit
 * sleep, and the run then printed "registry agrees with every source it cites"
 * and exited 0. A verifier that reports green on data it never read is worse
 * than no verifier, because it is believed.
 */
const fifeListing = createSharedSource({
  id: "fife",
  url: FIFE_LISTING_URL,
  fetchText,
  // The shared pipeline decodes &#8211; / &ndash; to a real en dash; FIFe
  // separates a breed code from its name that way, so it is folded to a hyphen
  // here to keep the code/name matching below simple.
  parse: (html) => {
    if (FIFE_FAULT === "parse") throw new TypeError("injected parse fault");
    return toText(html).replace(/\u2013/g, "-");
  },
  /*
   * A 200 is not the same as a usable page. A maintenance stub, a login wall or
   * a redesigned template all answer 200 with something far shorter than the
   * real listing, and treating that as readable would let every comparison
   * below pass against nothing — the exact bug the docstring above describes.
   */
  validate: (text) => {
    if (FIFE_FAULT === "validate") throw new RangeError("injected validate fault");
    return !text || text.length < 5000
      ? "breed listing could not be read (page shape changed or stub response)"
      : null;
  },
});

async function checkFife(breed, rec) {
  // Throws the one shared failure if the listing is unusable; the run loop
  // records that once for the registry rather than once per breed.
  const text = await fifeListing.resolve();
  checked.fife += 1;

  const code = rec.registryBreedCode;
  if (!code) {
    report(breed, "fife:code", "(none stored)", "FIFe record stores no breed code");
    return;
  }
  /*
   * FIFe splits five breeds into longhair and shorthair codes, and FaunaHub
   * stores the pair as one string ("ACL/ACS", "KBL/KBS", "LPL/LPS", "OLH/OSH",
   * "SRL/SRS"). Searching for the combined string found nothing and reported
   * all five as delisted — a checker defect that would have read as five data
   * errors. Each half is looked up on its own, and the first one FIFe lists
   * carries the status and category for the record.
   */
  const parts = code.split("/").map((part) => part.trim()).filter(Boolean);
  const missing = parts.filter((part) => text.search(new RegExp(`\\b${part}\\b`)) < 0);
  if (missing.length > 0) {
    report(breed, "fife:code", code, `no longer listed by FIFe: ${missing.join(", ")}`);
    return;
  }
  const at = text.search(new RegExp(`\\b${parts[0]}\\b`));

  /*
   * READ FIFe'S OWN WORDING, NOT THE CODE'S POSITION.
   *
   * The first version of this check split the page on the heading
   * "Preliminary Recognised Breeds and Varieties" and treated every code after
   * it as preliminary. That phrase also appears as a NAVIGATION LINK near the
   * top of the page, at character 1,474 of 8,504 — so the split landed before
   * the fully recognised lists and the check reported the Turkish Van, a FIFe
   * category 1 breed since 1988, as preliminary on its first run.
   *
   * FIFe states the status inline instead: "LYO - Lykoi Preliminary recognised
   * breed in category 4 (2023-2027)", against "TUV - Turkish Van Breed Profile
   * Breed Standard" for a fully recognised one. Reading that sentence needs no
   * assumption about page order.
   */
  /*
   * "in" IS LOAD-BEARING. FIFe's section heading reads "Preliminary Recognised
   * Breeds and Varieties", and a case-insensitive test for "preliminary
   * recognised breed" matches it — so any code within 220 characters of that
   * heading read as preliminary. The Sphynx, 110 characters above it, did.
   * The inline statement always continues "...breed in category 4", which the
   * heading never does.
   */
  const near = text.slice(at, at + 220);
  const isPreliminary = /Preliminary recognised (?:breed|variety) in /i.test(near);
  const claimsPreliminary = /preliminary/i.test(rec.registryGroup ?? "");

  if (isPreliminary && !claimsPreliminary) {
    report(breed, "fife:status", rec.registryGroup, `FIFe states ${code} is preliminary recognised`);
  }
  if (!isPreliminary && claimsPreliminary) {
    report(breed, "fife:status", rec.registryGroup, `FIFe does not state ${code} is preliminary`);
  }

  /*
   * The category is inline for a preliminary breed and in the SECTION HEADING
   * for a fully recognised one ("Fully Recognised Breeds - Category 2"), so a
   * fully recognised breed's category comes from the nearest heading above it.
   */
  const stored = (rec.registryGroup ?? "").match(/category (\d)/i);
  if (stored) {
    let live = null;
    if (isPreliminary) {
      const inline = near.match(/recognised (?:breed|variety) in category (\d)/i);
      live = inline ? inline[1] : null;
    } else {
      const headings = [...text.matchAll(/Fully Recognised Breeds\s*[\u2013-]\s*Category (\d)/gi)];
      const above = headings.filter((h) => h.index < at).pop();
      live = above ? above[1] : null;
    }
    if (live === null) {
      report(breed, "fife:category", `category ${stored[1]}`, "could not read a category for this code");
    } else if (live !== stored[1]) {
      report(breed, "fife:category", `category ${stored[1]}`, `FIFe places ${code} in category ${live}`);
    }
  }
}

/* ---------------------------- run ---------------------------- */

const targets = BREEDS.filter((b) => !slugFilter || b.slug === slugFilter);
if (slugFilter && targets.length === 0) {
  console.error(`no breed with slug "${slugFilter}"`);
  // 64 is EX_USAGE. Exit 2 now means DEGRADED, and a mistyped slug must never
  // be mistaken for "a registry was unreachable".
  process.exit(64);
}

for (const breed of targets) {
  for (const rec of breed.recognition) {
    if (!rec.registryUrl) continue;
    if (ONLY_REGISTRIES && !ONLY_REGISTRIES.has(rec.registryId)) continue;
    try {
      if (rec.registryId === "akc") await checkAkc(breed, rec);
      else if (rec.registryId === "fci") await checkFci(breed, rec);
      else if (rec.registryId === "cfa") await checkCfa(breed, rec);
      else if (rec.registryId === "fife") await checkFife(breed, rec);
      // EXHAUSTIVE. A registry with no checker used to fall through in silence
      // while the summary still claimed every source had been verified.
      else report(breed, `${rec.registryId}:unchecked`, rec.registryUrl, "no checker for this registry");
    } catch (error) {
      if (isSharedSourceFailure(error)) {
        noteSharedFailure(error, rec.registryId);
      } else {
        reportDegraded(breed, rec.registryId, rec.registryUrl, String(error.message), error.attempts);
      }
    }
    if (RECORD_DELAY_MS > 0) await new Promise((r) => setTimeout(r, RECORD_DELAY_MS));
  }
  // Every cited source must still resolve to a record, network aside.
  for (const id of breed.sources) {
    if (!getBreedSource(id)) report(breed, "source", id, "no such source record");
  }
  process.stdout.write(".");
}

/*
 * Decide, now that every record has been tried, whether the unusable responses
 * were isolated pages or one incident. Before this point there is not enough
 * information to tell the two apart.
 */
foldUnusableResponses();
foldTemplateGaps();

process.stdout.write("\n\n");
console.log(
  `checked ${targets.length} breeds — ${checked.akc} AKC, ${checked.fci} FCI, ` +
    `${checked.cfa} CFA, ${checked.fife} FIFe records`,
);

/* ---------------------------- verdict ---------------------------- */

const { verdict, exitCode, counts, summaryMarkdown } = buildVerdict({
  problems,
  degraded,
  fetchAttempts,
  breedsChecked: targets.length,
  checked,
});

console.log(`\nVERDICT: ${verdict}`);
console.log(
  `  ${counts.problems} disagreement(s), ${counts.degraded} unreachable source(s), ` +
    `${counts.fetches} fetch(es), ${counts.retried} retried, ${counts.recovered} recovered`,
);

if (problems.length > 0) {
  console.log(`\n${problems.length} disagreement(s):\n`);
  for (const p of problems) {
    console.log(`  ${p.breed}  ${p.field}`);
    console.log(`      stored: ${p.expected}`);
    console.log(`      live:   ${p.actual}`);
  }
  console.log(
    "\nA disagreement is not automatically an error — a registry may have revised its\n" +
      "standard, in which case the fix is to update the record AND its reviewedAt date.\n" +
      "It is an error if the registry never said what the record claims.",
  );
}

if (degraded.length > 0) {
  console.log(`\n${degraded.length} source(s) unreachable after a retry:\n`);
  for (const d of degraded) {
    if (d.scope === "registry-template") {
      /*
       * One change at the registry, stated once. The breeds are listed in full
       * because an aggregate that hides which records it covers is a summary,
       * not a signal — and the unverified FIELDS are named because "this breed
       * was not fully checked" is useless without saying what went unchecked.
       */
      const reg = d.registryId.toUpperCase();
      console.log(`  ${reg} page template changed — ${d.affectedRecords} records partly unverified`);
      console.log(`      unverified fields: ${d.unverifiedFields.join(", ")}`);
      console.log(`      everything else on these pages WAS verified, including measurements`);
      console.log(`      fingerprint: ${d.fingerprint}`);
      console.log(`      affected: ${d.breeds.join(", ")}`);
      continue;
    }
    if (d.scope === "registry-egress") {
      /*
       * The shape of this block is the point. Someone skimming a red run must
       * be able to tell, without opening the log, that nothing was concluded
       * about any cat — so the two zeroes are stated outright rather than left
       * to be inferred from the absence of findings.
       */
      const reg = d.registryId.toUpperCase();
      console.log(`  ${reg} registry responses unusable from this runner`);
      console.log(`      ${d.affectedRecords} records left unverified`);
      console.log(`      ${d.distinctUrls} distinct URLs / ${d.attemptCount} attempts`);
      console.log(`      one DEGRADED incident`);
      console.log(`      zero breeds blamed`);
      console.log(`      zero ${reg} field disagreements inferred`);
      console.log(`      cause: ${d.error}`);
      console.log(`      fingerprint: ${d.fingerprint}`);
      if (d.examples?.length) {
        console.log(`      examples: ${d.examples.join("  ")}`);
      }
      continue;
    }
    if (d.scope === "registry") {
      const label =
        d.kind === "processing"
          ? "shared source — OUR PROCESSING FAULT"
          : d.kind === "out-of-force"
            ? "shared source — NOT IN FORCE on this date, not requested"
            : d.kind === "unusable"
              ? "shared source — answered but unusable"
              : "shared source — could not be fetched";
      console.log(`  ${d.registryId} ${label}  ${d.url}`);
      console.log(`      ${d.error}`);
      console.log(`      affected verification scope: ${d.affectedRecords} ${d.registryId.toUpperCase()} records`);
    } else {
      console.log(`  ${d.breed}  ${d.registryId}  ${d.url}`);
      /*
       * The reason was collected and never printed, so a breed-scoped DEGRADED
       * read as "this page did not answer" whatever had actually happened —
       * including a page that answered 200 and had changed shape.
       */
      if (d.error) console.log(`      ${d.error}`);
    }
    if (d.attempts.length) {
      console.log(`      fetch attempts: ${d.attempts.map((a) => `#${a.attempt} ${a.status ?? a.error}`).join("  ")}`);
    }
  }
  console.log("\nUnreachable is not a disagreement. No record was changed on this evidence.");
}

/*
 * The summary is written to $GITHUB_STEP_SUMMARY so the result appears on the
 * run page itself. A weekly monitor whose only signal is buried in a log is a
 * monitor nobody reads.
 */
if (process.env.GITHUB_STEP_SUMMARY) {
  await fs.promises.appendFile(process.env.GITHUB_STEP_SUMMARY, summaryMarkdown);
}

if (verdict === "CLEAN") console.log("\nregistry agrees with every source it cites.");
process.exit(exitCode);
