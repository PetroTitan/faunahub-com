/**
 * Is this response plausibly the page we asked for?
 *
 * THE BUG THIS EXISTS TO PREVENT
 *
 * A weekly run reported 185 disagreements where 15 were real. All 45 CFA
 * records failed, 45 of 45 on "no standard PDF on the page" and 45 of 45 on
 * "class no longer named" — including breeds whose pages, read from another
 * network seconds later, carried both. The verifier had compared its records
 * against 45 bodies that were not CFA breed pages, and reported the difference
 * as 182 editorial disagreements.
 *
 * A fetch that returns HTTP 200 is not a fetch that returned the page. The
 * failure modes that answer 200 — a bot challenge, a login wall, a rate-limit
 * notice, a redesigned template, a CDN error shell — are invisible to a status
 * check and indistinguishable, to a field comparison, from a page that really
 * did change.
 *
 * THE RULE THAT MAKES THIS HONEST
 *
 * Plausibility is decided from what the document says it IS — its own
 * canonical URL, its title, its shape — and NEVER from the facts under
 * verification. "The page contains Championship" is not evidence that the page
 * loaded; it is the very claim `cfa:group` exists to test. A gate built from
 * the values being checked cannot fail, because it agrees with whatever
 * arrived. That is the same defect as the bug above, wearing a guard's badge.
 *
 * So: identity and structure decide whether we may compare at all. Only then
 * do the facts get a vote.
 */
import { decodeEntities } from "./registry-text.mjs";
import { blockingMarkers } from "./registry-diagnostics.mjs";

/**
 * The smallest credible CFA breed page, measured rather than imagined.
 *
 * Six live breed pages sampled 2026-09-14 ran 134,533 – 874,208 bytes
 * (korat smallest, exotic largest). The floor sits an order of magnitude below
 * the smallest real page and comfortably above a typical interstitial, which
 * runs 3–15 kB. It is a BACKSTOP, not the primary test — identity is — and it
 * is set loose deliberately: a floor tight enough to be interesting is tight
 * enough to one day fail a real page and hide a real disagreement.
 */
export const CFA_MIN_BYTES = 20_000;

/** CFA states this in every breed-page title. Measured on all six samples. */
export const CFA_SITE_IDENTITY = /the cat fanciers'? association/i;

/** Compare URLs by path, ignoring scheme, host case, trailing slash and query. */
export function samePath(a, b) {
  const norm = (u) => {
    try {
      const parsed = new URL(u);
      return parsed.pathname.replace(/\/+$/, "").toLowerCase();
    } catch {
      return String(u).split(/[?#]/)[0].replace(/\/+$/, "").toLowerCase();
    }
  };
  return norm(a) === norm(b);
}

/**
 * A size class that is stable for one cause and coarse enough to group.
 *
 * Every challenge page from one edge is about the same size; every real breed
 * page is a different size. An order of magnitude separates the two without
 * making two 8 kB blocks look like different incidents.
 */
const sizeBucket = (bytes) => (bytes > 0 ? `1e${Math.floor(Math.log10(bytes))}` : "0");

const contentClass = (contentType) =>
  !contentType ? "none" : /html/i.test(contentType) ? "html" : contentType.split(";")[0].trim().toLowerCase();

/**
 * A stable normalized name for ONE cause, shared by every URL it affected.
 *
 * Aggregation keys on this rather than on how many findings appeared. Forty-five
 * pages blocked by the same edge produce one fingerprint; forty-five pages that
 * genuinely changed produce no fingerprint at all, because they stay plausible.
 */
export function failureFingerprint({ reason, contentType, byteLength, blocking = {} }) {
  return [
    reason,
    contentClass(contentType),
    sizeBucket(byteLength),
    Object.keys(blocking).sort().join("+") || "no-markers",
  ].join(":");
}

/** Structural markers for the diagnostic record. None is a verified fact. */
export function cfaShapeMarkers(html) {
  return {
    hasCanonical: /<link[^>]+rel=["']canonical["']/i.test(html),
    hasH1: /<h1[^>]*>/i.test(html),
    siteIdentityInTitle: CFA_SITE_IDENTITY.test(
      decodeEntities(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ""),
    ),
    wordpressAssets: /\/wp-content\//i.test(html),
  };
}

const unusable = (reason, detail, context) => ({
  plausible: false,
  reason,
  detail,
  fingerprint: failureFingerprint({ reason, ...context }),
});

/**
 * Decide whether a CFA response may be compared against a record.
 *
 * @param {{
 *   requestedUrl: string,
 *   finalUrl?: string,
 *   contentType?: string,
 *   body: string,
 * }} input
 * @returns {{plausible: true} | {plausible: false, reason: string, detail: string, fingerprint: string}}
 */
export function cfaPagePlausibility({ requestedUrl, finalUrl, contentType, body }) {
  const byteLength = Buffer.byteLength(body, "utf8");
  const blocking = blockingMarkers(body);
  const context = { contentType, byteLength, blocking };

  /*
   * Order matters, most specific first. A challenge page is also small and also
   * fails identity; reporting it as "too small" would send someone to look for
   * a truncated response instead of at their egress.
   */
  if (Object.keys(blocking).length > 0) {
    return unusable(
      "blocked",
      `the response is an interstitial, not the page (${Object.keys(blocking).join(", ")})`,
      context,
    );
  }

  if (contentType && !/html/i.test(contentType)) {
    return unusable("not-html", `content-type was ${contentType}`, context);
  }

  if (byteLength < CFA_MIN_BYTES) {
    return unusable(
      "too-small",
      `${byteLength} bytes is below the ${CFA_MIN_BYTES}-byte floor for a CFA breed page`,
      context,
    );
  }

  /*
   * IDENTITY IS THE PRIMARY TEST.
   *
   * CFA states its own canonical URL on every breed page, and it matched the
   * requested URL exactly on all six samples. A body that will not claim to be
   * the document we asked for is not that document, whatever else it contains.
   */
  const canonical =
    body.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1] ??
    body.match(/<meta[^>]+property=["']og:url["'][^>]*content=["']([^"']+)["']/i)?.[1];

  if (canonical) {
    if (!samePath(canonical, requestedUrl)) {
      return unusable(
        "identity-mismatch",
        `the page declares itself as ${canonical}, not ${requestedUrl}`,
        context,
      );
    }
    return { plausible: true };
  }

  /*
   * No canonical: fall back to the redirect chain plus a real heading. Weaker,
   * but it still asks the document who it is rather than what it says about cats.
   */
  const arrivedWhereAsked = samePath(finalUrl ?? requestedUrl, requestedUrl);
  const heading = decodeEntities(body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "")
    .replace(/<[^>]+>/g, " ")
    .trim();
  const titleOwnsTheSite = CFA_SITE_IDENTITY.test(
    decodeEntities(body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ""),
  );

  if (arrivedWhereAsked && heading && titleOwnsTheSite) return { plausible: true };

  return unusable(
    "no-identity",
    "the response carries no canonical URL and does not identify itself as a CFA breed page",
    context,
  );
}
