/**
 * Text and fetch primitives shared by the registry verifier.
 *
 * They live here rather than in verify-breed-registry.mjs so they can be
 * tested without running a five-minute live verification against four
 * registries — importing that script executes it.
 */
import { describeAttempt } from "./transport-diagnostics.mjs";

const UA =
  "FaunaHubRegistryCheck/1.0 (+https://faunahub.com; verifying published breed records)";

/* ------------------------- fetching ------------------------- */

/**
 * Which failures are worth a second attempt.
 *
 * A deterministic 4xx means the page is gone, moved, or forbidden — asking
 * again wastes a second of a five-minute budget and changes nothing. A
 * timeout, a reset socket, a 429 or a 5xx means the origin was busy; the
 * first weekly run lost five FCI records that way and every one of those URLs
 * answered 200 when checked by hand minutes later.
 */
export function isTransient(status, error) {
  if (status === undefined) {
    // A thrown network error: DNS, TLS, socket, abort.
    return !/certificate|unsupported protocol|invalid url/i.test(String(error?.message ?? ""));
  }
  return status === 408 || status === 429 || status >= 500;
}

/** Every fetch attempt made, for the run summary. */
export const fetchAttempts = [];

/**
 * Fetch a page and keep what the response WAS, not only what it said.
 *
 * `fetchText` threw the response away the moment it had the body, so when 45
 * CFA pages all came back without a single expected field there was no record
 * of their size, their final URL, or which edge served them — and the question
 * "were we blocked, or did the template change?" had no evidence either way.
 *
 * The retry and attempt bookkeeping is unchanged: one `fetchAttempts` entry per
 * call, pushed exactly once, whether the call ends in a body or a throw.
 */
export async function fetchPage(url, { retries = 1, backoffMs = 2000, binary = false } = {}) {
  const attempts = [];
  for (let attempt = 1; attempt <= retries + 1; attempt += 1) {
    let status;
    let finalUrl;
    let retryAfter = null;
    const startedAt = Date.now();
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": UA },
        redirect: "follow",
        signal: AbortSignal.timeout(25_000),
      });
      status = res.status;
      finalUrl = res.url || url;
      retryAfter = res.headers.get("retry-after");
      if (res.ok) {
        attempts.push({ attempt, status, ok: true, elapsedMs: Date.now() - startedAt });
        fetchAttempts.push({ url, attempts });
        return {
          /*
           * `binary` exists for one caller: CFA publishes the Show Rules as a
           * PDF, and `res.text()` decodes as UTF-8, which silently corrupts
           * every compressed stream in it. A Buffer keeps the bytes the bytes.
           */
          body: binary ? Buffer.from(await res.arrayBuffer()) : await res.text(),
          status,
          // `res.url` is the URL AFTER redirects. A soft block that 302s to an
          // interstitial is invisible in the requested URL alone.
          finalUrl: res.url || url,
          headers: res.headers,
          attempts,
        };
      }
      throw new Error(`HTTP ${status}`);
    } catch (error) {
      /*
       * THE CAUSE IS ONE LEVEL DOWN.
       *
       * Node raises `TypeError: fetch failed` for every transport problem it
       * has, so recording `error.message` turned DNS failure, connect timeout,
       * socket reset and an expired certificate into the same three words. The
       * system error is on `error.cause`, and telling those apart is the whole
       * difference between "retry", "slow down" and "do not trust this".
       */
      const diagnostic = describeAttempt({
        error,
        status,
        url,
        attempt,
        elapsedMs: Date.now() - startedAt,
        finalUrl,
        retryAfter,
      });
      attempts.push({
        ...diagnostic,
        ok: false,
        // Kept for every existing reader of `attempts`; the classification
        // above is additive and changes no decision on its own.
        error: String(error.message ?? error),
      });

      const last = attempt === retries + 1;
      if (last || !isTransient(status, error)) {
        fetchAttempts.push({ url, attempts });
        const err = new Error(attempts.at(-1).error);
        err.attempts = attempts;
        err.transient = isTransient(status, error);
        err.transport = diagnostic.transport;
        throw err;
      }
      await new Promise((r) => setTimeout(r, backoffMs * attempt));
    }
  }
  throw new Error("unreachable");
}

/** The body alone, for callers that need nothing else. */
export async function fetchText(url, options) {
  const { body } = await fetchPage(url, options);
  return body;
}

/** The body as raw bytes, for documents that are not text. */
export async function fetchBytes(url, options) {
  const { body } = await fetchPage(url, { ...options, binary: true });
  return body;
}

/* ------------------------ HTML to text ----------------------- */

const NAMED_ENTITIES = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: "\u00a0",
  lsquo: "\u2018", rsquo: "\u2019", ldquo: "\u201c", rdquo: "\u201d",
  ndash: "\u2013", mdash: "\u2014", hellip: "\u2026", deg: "\u00b0",
  eacute: "\u00e9", egrave: "\u00e8", agrave: "\u00e0", ccedil: "\u00e7",
  uuml: "\u00fc", ouml: "\u00f6", auml: "\u00e4", szlig: "\u00df",
  ntilde: "\u00f1", iacute: "\u00ed", oacute: "\u00f3", aacute: "\u00e1",
  uacute: "\u00fa", times: "\u00d7", frac12: "\u00bd", frac14: "\u00bc",
  frac34: "\u00be", reg: "\u00ae", copy: "\u00a9", trade: "\u2122",
  bull: "\u2022", middot: "\u00b7", laquo: "\u00ab", raquo: "\u00bb",
};

/**
 * Decode HTML entities — named, decimal and hexadecimal.
 *
 * The previous version handled six named entities and no numeric ones, and
 * the page text pipeline separately stripped only `&nbsp;`. CFA writes its
 * apostrophes as `&rsquo;`, so the verifier compared a stored
 * "A mature male's weight..." against a page reading
 * "A mature male&rsquo;s weight..." and reported six weight disagreements
 * that were nothing but an encoding difference.
 *
 * `&amp;` is decoded LAST so that `&amp;rsquo;` — a literal ampersand
 * followed by text — does not become a quote character. Unrecognised
 * entities are left exactly as written rather than guessed at, and no
 * non-ASCII character is touched, so accented breed names survive intact.
 */
export function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (m, hex) => {
      const code = Number.parseInt(hex, 16);
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : m;
    })
    .replace(/&#(\d+);/g, (m, dec) => {
      const code = Number(dec);
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : m;
    })
    .replace(/&([a-z][a-z0-9]{1,31});/gi, (m, name) => {
      const lower = name.toLowerCase();
      if (lower === "amp") return m; // handled below, after everything else
      return Object.prototype.hasOwnProperty.call(NAMED_ENTITIES, lower)
        ? NAMED_ENTITIES[lower]
        : m;
    })
    .replace(/&amp;/gi, "&");
}

/**
 * A page's visible text, normalised once, the same way for every registry.
 *
 * Each check used to build this itself and they disagreed about entities,
 * which is how the encoding bug reached only the CFA path.
 */
export function toText(html) {
  return decodeEntities(
    html
      .replace(/<(script|style|nav|header|footer)[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Does the page support what the record says?
 *
 * A "quote" must appear on the page in full — the strict reading, and the
 * default for anything that does not declare otherwise. A "citation" is an
 * editorial label of the form `<source>, <Field>: <Value>`; the source label
 * is ours and never appears on the page, so only the part after the first
 * comma is checked. The underlying fact still has to be there: drop
 * "Shorthair" from CFA's page and the citation fails exactly as a quote would.
 */
export function verifiablePart(statedAs, kind) {
  if (kind !== "citation") return statedAs;
  const comma = statedAs.indexOf(", ");
  const afterLabel = comma === -1 ? statedAs : statedAs.slice(comma + 2);
  /*
   * A trailing parenthetical is OURS too.
   *
   * The Bengal reads "CFA breed profile, Coat Length: Shorthair (a longhair is
   * recognised only as an AOV)". The prefix is our source label and the
   * parenthetical is our gloss explaining why the field says what it says;
   * only "Coat Length: Shorthair" is CFA's. Keeping the gloss in the needle
   * meant the record failed for quoting our own commentary back at the page.
   *
   * A field value that legitimately contains " (" is verified up to that
   * point rather than not at all, which is weaker but never wrong.
   */
  const gloss = afterLabel.indexOf(" (");
  return gloss === -1 ? afterLabel : afterLabel.slice(0, gloss);
}

export function pageSupports(text, statedAs, kind, limit = 60) {
  const needle = verifiablePart(statedAs, kind)
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, limit);
  return { ok: text.includes(needle), needle };
}

