/**
 * What a registry response WAS, without keeping the response.
 *
 * The weekly run reported 185 disagreements from a GitHub-hosted runner while
 * the same commit reported 15 locally. Every CFA record failed, including
 * breeds whose pages are demonstrably intact — so the bodies the runner
 * received were not the pages we think we checked. Nothing in the verifier
 * recorded what they actually were, so the cause stayed a hypothesis.
 *
 * This module answers "what did the runner get?" with a record small enough
 * to paste into an issue and safe enough to print in a public log.
 *
 * WHAT IS DELIBERATELY NOT CAPTURED
 *
 *   full response bodies      third-party HTML, not ours to store or publish
 *   Set-Cookie / Cookie       session material
 *   Authorization             credentials
 *   complete request headers  may carry tokens added by infrastructure
 *   personal data             nothing here reads a body for anything but shape
 *
 * The body is reduced, in one pass, to: its length, its SHA-256, a handful of
 * identity strings the page states about ITSELF (title, first H1, canonical),
 * and booleans. A boolean cannot leak a sentence.
 */
import crypto from "node:crypto";

import { decodeEntities } from "./registry-text.mjs";

/**
 * Response headers worth keeping, lowercased.
 *
 * These name infrastructure, not people: which edge answered, whether it was a
 * cache hit, what it claimed to be serving. `cf-ray` is the single most useful
 * value when arguing with a CDN about why one client is treated differently
 * from another, and it identifies a request, not a requester.
 *
 * The list is an ALLOWLIST rather than a denylist of secrets. A denylist admits
 * every header nobody thought of, which is how `set-cookie` ends up in a log.
 */
const KEEP_HEADERS = [
  "server",
  "via",
  "cf-ray",
  "cf-cache-status",
  "cf-mitigated",
  "x-cache",
  "x-served-by",
  "x-amz-cf-pop",
  "age",
  "content-type",
  "content-length",
  "content-encoding",
  "vary",
  "retry-after",
];

/**
 * Markers that a response IS an interstitial rather than the page.
 *
 * Each is a phrase a challenge or block page states about itself, and each is
 * decisive: an ordinary article does not announce that your browser is being
 * checked. They are matched against the raw body because a challenge page is
 * mostly script — `toText` would throw away the very markup that identifies it.
 */
const BLOCKING_MARKERS = {
  cfChallenge: /cdn-cgi\/challenge-platform\/[^"']*\/orchestrate/i,
  cfJsChallenge: /jschl[-_]?(?:vc|answer)|cf_chl_opt|__cf_chl/i,
  justAMoment: /<title>[^<]*just a moment[^<]*<\/title>/i,
  attentionRequired: /attention required!?\s*\|\s*cloudflare/i,
  checkingBrowser: /checking your browser before accessing/i,
  enableJs: /(?:please )?enable javascript and cookies to continue/i,
  accessDenied: /\b(?:access denied|you (?:have been|are) blocked)\b/i,
  rateLimited: /\b(?:rate limit(?:ed)?|too many requests)\b/i,
};

/**
 * Markers that mean nothing on their own. Recorded, never decisive.
 *
 * MEASURED, NOT ASSUMED. `captcha` began life in the blocking list above, and
 * a probe of six live CFA breed pages fired it on ALL SIX — cfa.org embeds a
 * captcha widget on ordinary pages for its forms. Had it stayed decisive, the
 * plausibility gate would have declared every real CFA page a block and
 * converted 45 genuine records into a DEGRADED incident: the same failure as
 * the bug it was written to fix, pointed the other way.
 *
 * A login FORM is the same class of thing — most sites have one in the chrome.
 * A login WALL says so in the blocking list.
 */
const AMBIENT_MARKERS = {
  captchaWidget: /\b(?:hcaptcha|recaptcha|turnstile)\b/i,
  loginForm: /<form[^>]+(?:action|id|class)="[^"]*log[-_]?in/i,
};

const firstMatch = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : undefined;
};

/** Collapse whitespace and cap length — these go in logs, not in comparisons. */
const tidy = (value, limit) =>
  value === undefined
    ? undefined
    : decodeEntities(value.replace(/<[^>]+>/g, " "))
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, limit);

/**
 * Identity strings a page states about itself.
 *
 * These are the page's own claim to be a particular document — not any fact
 * the verifier checks. Keeping the two apart is the whole point: a plausibility
 * test built from the values under verification can only ever agree with
 * whatever arrived.
 */
export function documentIdentity(html) {
  return {
    title: tidy(firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i), 160),
    h1: tidy(firstMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i), 160),
    canonical: firstMatch(html, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
      ?? firstMatch(html, /<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i),
    ogUrl: firstMatch(html, /<meta[^>]+property=["']og:url["'][^>]*content=["']([^"']+)["']/i),
  };
}

const matchAll = (html, table) => {
  const hit = {};
  for (const [name, re] of Object.entries(table)) {
    if (re.test(html)) hit[name] = true;
  }
  return hit;
};

/** Decisive interstitial markers this body carries. Booleans only. */
export function blockingMarkers(html) {
  return matchAll(html, BLOCKING_MARKERS);
}

/** Markers recorded for context but never decisive. Booleans only. */
export function ambientMarkers(html) {
  return matchAll(html, AMBIENT_MARKERS);
}

/**
 * One registry response, described safely.
 *
 * `shapeMarkers` is supplied by the caller because what counts as the right
 * shape is registry-specific, and this module must not grow opinions about
 * any one registry's template.
 *
 * @param {{
 *   registryId: string,
 *   requestedUrl: string,
 *   finalUrl?: string,
 *   status: number,
 *   headers?: Headers | Map<string, string> | Record<string, string>,
 *   body: string,
 *   shapeMarkers?: Record<string, boolean>,
 * }} input
 */
export function describeResponse({
  registryId,
  requestedUrl,
  finalUrl,
  status,
  headers,
  body,
  shapeMarkers = {},
}) {
  const get = (name) => {
    if (!headers) return undefined;
    if (typeof headers.get === "function") return headers.get(name) ?? undefined;
    const found = Object.entries(headers).find(([k]) => k.toLowerCase() === name);
    return found ? found[1] : undefined;
  };

  const kept = {};
  for (const name of KEEP_HEADERS) {
    const value = get(name);
    if (value !== undefined) kept[name] = String(value).slice(0, 200);
  }

  return {
    registryId,
    requestedUrl,
    finalUrl: finalUrl ?? requestedUrl,
    redirected: (finalUrl ?? requestedUrl) !== requestedUrl,
    status,
    contentType: kept["content-type"],
    contentLengthHeader: kept["content-length"] === undefined ? undefined : Number(kept["content-length"]),
    byteLength: Buffer.byteLength(body, "utf8"),
    sha256: crypto.createHash("sha256").update(body).digest("hex"),
    identity: documentIdentity(body),
    shapeMarkers,
    blockingMarkers: blockingMarkers(body),
    ambientMarkers: ambientMarkers(body),
    headers: kept,
  };
}

/**
 * A one-line rendering for a log.
 *
 * The diagnostic exists to be read by a person deciding between "the template
 * changed" and "we were blocked", so the two things that separate those —
 * size and which markers fired — lead.
 */
export function formatDiagnostic(d) {
  const blocking = Object.keys(d.blockingMarkers);
  const ambient = Object.keys(d.ambientMarkers ?? {});
  const shape = Object.entries(d.shapeMarkers)
    .map(([k, v]) => `${v ? "+" : "-"}${k}`)
    .join(" ");
  return [
    `  ${d.registryId}  ${d.requestedUrl}`,
    `      status ${d.status}${d.redirected ? ` -> ${d.finalUrl}` : ""}`,
    `      ${d.byteLength} bytes  sha256 ${d.sha256.slice(0, 16)}…  ${d.contentType ?? "(no content-type)"}`,
    `      title:     ${d.identity.title ?? "(none)"}`,
    `      h1:        ${d.identity.h1 ?? "(none)"}`,
    `      canonical: ${d.identity.canonical ?? "(none)"}`,
    `      shape:     ${shape || "(none declared)"}`,
    `      blocking:  ${blocking.length ? blocking.join(", ") : "none"}`,
    `      ambient:   ${ambient.length ? ambient.join(", ") : "none"}`,
    `      infra:     ${Object.entries(d.headers)
      .filter(([k]) => !["content-type", "content-length"].includes(k))
      .map(([k, v]) => `${k}=${v}`)
      .join(" ") || "(none)"}`,
  ].join("\n");
}

export const DIAGNOSTIC_HEADER_ALLOWLIST = KEEP_HEADERS;
export const BLOCKING_MARKER_NAMES = Object.keys(BLOCKING_MARKERS);
export const AMBIENT_MARKER_NAMES = Object.keys(AMBIENT_MARKERS);
