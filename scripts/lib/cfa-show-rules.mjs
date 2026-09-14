/**
 * CFA's own answer to "which breeds may win Championship honors".
 *
 * WHY THIS FILE EXISTS
 *
 * Twelve published records claimed `registryGroup: "Championship"` and cited the
 * breed's CFA profile page. CFA stopped printing the class on those pages, so
 * the verifier reported twelve disagreements every week — correctly, in the
 * narrow sense that the cited page no longer said it, and uselessly, because the
 * claim was never wrong. The cure is not to relax the check. It is to cite the
 * document that actually carries the claim.
 *
 * THE DOCUMENT
 *
 * CFA Show Rules, Article XXX, rule 30.01:
 *
 *     "The following breeds and colors are recognized as entitled to win
 *      Championship or Premiership honors."
 *
 * followed by every entitled breed as a heading. It is republished each show
 * season, it is linked from CFA's own Resources page, and it is the rule that
 * decides the question rather than a page that happens to mention it.
 *
 * WHY THE SPAN MATTERS MORE THAN THE NAME
 *
 * A breed name alone proves nothing: "American Shorthair", "Birman" and
 * "British Shorthair" all appear again a few pages later under Article XXXI,
 * ANY OTHER VARIETY — a class for cats that do NOT conform to the standard.
 * Khao Manee appears under Article XXXII, PROVISIONAL. So the lookup is bounded
 * by Article XXX's start and end markers, and a name outside that span is not
 * evidence of anything.
 *
 * NO NEW DEPENDENCY
 *
 * PDF content streams are Flate-compressed and Node ships zlib, so the text is
 * recovered with the standard library. This is not a general PDF renderer and
 * does not try to be: it inflates streams, pulls the string literals out of the
 * text-showing operators, and searches. Anything it cannot read fails loudly as
 * an unusable source rather than quietly as a missing breed.
 */
import zlib from "node:zlib";

/** The rule that states what the list means. Its absence makes the text unusable. */
export const RULE_30_01 =
  "The following breeds and colors are recognized as entitled to win Championship or Premiership honors";

/** Article XXX opens here and ends where Article XXXI begins. */
export const ARTICLE_START = "CHAMPIONSHIP BREEDS/DIVISIONS & COLORS";
export const ARTICLE_END = "ANY OTHER VARIETY (AOV) CLASSES";

/**
 * Recover the text of a PDF, approximately but deterministically.
 *
 * Every `stream ... endstream` pair is inflated where it can be; anything that
 * is not Flate (an image, an embedded font) simply fails to inflate and is
 * skipped. From the inflated bytes, every parenthesised string literal is
 * concatenated — those are the operands of `Tj` and `TJ`, which is where the
 * visible text lives.
 *
 * Latin-1 is deliberate: the operands are byte strings in a font encoding, not
 * UTF-8, and decoding them as UTF-8 would replace the bytes we search for.
 */
export function extractPdfText(buffer) {
  const bytes = Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer);
  let decoded = "";
  let cursor = 0;

  while (cursor < bytes.length) {
    const start = bytes.indexOf("stream", cursor);
    if (start === -1) break;
    const end = bytes.indexOf("endstream", start);
    if (end === -1) break;

    let from = start + "stream".length;
    // The keyword is followed by CRLF or LF before the data begins.
    if (bytes[from] === 0x0d) from += 1;
    if (bytes[from] === 0x0a) from += 1;

    try {
      decoded += zlib.inflateSync(bytes.subarray(from, end)).toString("latin1");
    } catch {
      // Not a Flate stream, or not a stream at all. Nothing to read here.
    }
    cursor = end + "endstream".length;
  }

  const pieces = [];
  for (const match of decoded.matchAll(/\((?:\\.|[^\\()])*\)/g)) {
    pieces.push(match[0].slice(1, -1).replace(/\\([()\\])/g, "$1"));
  }
  return pieces.join("").replace(/\s+/g, " ");
}

/**
 * The Championship article only.
 *
 * @returns {string | null} null when the document does not have the shape we
 *   rely on — a redesign, a truncated download, or the wrong file entirely.
 */
export function championshipSpan(text) {
  const start = text.indexOf(ARTICLE_START);
  if (start === -1) return null;
  const end = text.indexOf(ARTICLE_END, start);
  if (end === -1 || end <= start) return null;
  const span = text.slice(start, end);
  // The article heading without its governing rule is not the article.
  return span.includes(RULE_30_01) ? span : null;
}

/**
 * The heading CFA prints for a breed, derived from CFA's own profile-URL slug.
 *
 * Using CFA's identifier rather than FaunaHub's avoids a second name mapping to
 * keep in step: our record is `cat-exotic-shorthair`, CFA's page is
 * `/breed/exotic/`, and CFA's heading is `EXOTIC`. The slug is the one string
 * both sides already agree on.
 */
export function breedHeadingFromUrl(registryUrl) {
  let path;
  try {
    path = new URL(registryUrl).pathname;
  } catch {
    return null;
  }
  const slug = path.replace(/\/+$/, "").split("/").pop();
  if (!slug) return null;
  return slug.replace(/-/g, " ").toUpperCase();
}

/**
 * Is this breed listed in Article XXX?
 *
 * Case-sensitive: headings are set in capitals and the surrounding prose is not,
 * so `EXOTIC` finds the heading and not the sentence about "Longhair Exotics".
 *
 * THE BOUNDARY IS SHAPE-AWARE, BECAUSE PDF TEXT RUNS WELD TOGETHER.
 *
 * Adjacent runs concatenate with nothing between them, so a heading arrives
 * stuck to its neighbours on both sides:
 *
 *     ...LONGHAIR SPECIALTY BREEDSABYSSINIANAll Championship Colors...
 *
 * A plain `(?![A-Z])` after the heading rejects that — the `A` of `All` is an
 * uppercase letter — and the failure it produces reads as "this breed is not
 * entitled to Championship": a false disagreement about a correct record, which
 * is the entire class of bug this file exists to end. Dropping the boundary
 * instead would let `MAN` match inside `MANX`.
 *
 * What separates the two is the SHAPE of what follows. `All` is a Title-case
 * word — uppercase then lowercase — and a new word. `X` in `MANX` continues an
 * all-caps token. So the rule is "not followed by an uppercase letter that does
 * not itself begin a Title-case word":
 *
 *     ABYSSINIAN + "All..."   -> A is followed by l, a new word begins   MATCH
 *     MAN        + "X (TAIL"  -> X is followed by a space, same token    no match
 *     MANX       + " (TAIL"   -> not a letter at all                     MATCH
 *
 * Precision ultimately comes from the SPAN, not from this: a name only counts
 * inside Article XXX. The headings passed here are full breed names taken from
 * CFA's own URL slugs, not arbitrary fragments.
 */
export function spanListsBreed(span, heading) {
  if (!span || !heading) return false;
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`${escaped}(?![A-Z](?![a-z]))`).test(span);
}
