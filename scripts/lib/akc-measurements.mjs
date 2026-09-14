/**
 * AKC height and weight strings, compared as meaning rather than as text.
 *
 * THE FALSE DISAGREEMENT THIS ENDS
 *
 * AKC publishes one line per dimension and puts a shared qualifier in front of
 * every segment it governs:
 *
 *     Minimum: 25.5 males; 23.5 females
 *
 * FaunaHub stores one record per sex, each carrying the qualifier it inherited:
 *
 *     "Minimum: 25.5 males"     "Minimum: 23.5 females"
 *
 * The old check asked `live.includes(stored)`. The first string is a literal
 * substring of the line and passed; the second is not — the line reads
 * "; 23.5 females", never "Minimum: 23.5 females" — so a correct record was
 * reported as a disagreement every week.
 *
 * WHY SUBSTRING MATCHING CANNOT BE PATCHED INTO CORRECTNESS
 *
 * It is wrong in the other direction too, and that direction is worse. Against
 * "Minimum: 25.5 males; 23.5 females":
 *
 *     "25.5"                   passes — a bare number with no qualifier
 *     "Minimum: 25.5"          passes — the sex silently dropped
 *     "5 males"                passes — a fragment of another number
 *
 * A check that accepts a claim weaker than the record is how a wrong value
 * survives. So the line is parsed into segments and compared field by field:
 * qualifier, numbers, unit and subject must all agree, and a stored record must
 * match exactly one live segment.
 *
 * Normalisation is limited to presentation: entities, whitespace, and the
 * punctuation variants that mean the same mark. Nothing that could change a
 * number, a unit or a qualifier is normalised away.
 */
import { decodeEntities } from "./registry-text.mjs";

/** Qualifiers AKC uses, mapped to the direction they assert. */
const QUALIFIERS = [
  [/^minimum\b:?\s*/i, "minimum"],
  [/^at least\b:?\s*/i, "minimum"],
  [/^maximum\b:?\s*/i, "maximum"],
  [/^up to\b:?\s*/i, "maximum"],
  [/^under\b:?\s*/i, "maximum"],
  [/^about\b:?\s*/i, "about"],
  [/^approximately\b:?\s*/i, "about"],
  [/^around\b:?\s*/i, "about"],
];

const UNITS = [
  [/\binch(?:es)?\b/i, "inches"],
  [/\bpounds?\b|\blbs?\b/i, "pounds"],
  [/\bcentimet(?:re|er)s?\b|\bcm\b/i, "cm"],
  [/\bkilograms?\b|\bkgs?\b/i, "kg"],
];

const SUBJECTS = [
  [/\b(?:males?|dogs)\b/i, "male"],
  [/\b(?:females?|bitches)\b/i, "female"],
];

/**
 * Presentation-only cleanup.
 *
 * Entities and whitespace vary between renders of the same page; the dash and
 * quote variants are the same mark in different fonts. Digits, units and
 * qualifier words are untouched, which is the whole point: if normalising can
 * change what a string ASSERTS, it is not normalising.
 */
export function normalise(value) {
  return decodeEntities(String(value ?? ""))
    .replace(/[‐-―−]/g, "-")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/ /g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const stripQualifier = (text) => {
  for (const [re, name] of QUALIFIERS) {
    if (re.test(text)) return { qualifier: name, rest: text.replace(re, "").trim() };
  }
  return { qualifier: null, rest: text };
};

const firstMatch = (table, text) => {
  for (const [re, name] of table) if (re.test(text)) return name;
  return null;
};

/**
 * One segment: the numbers it states and everything that qualifies them.
 *
 * `bound` records the DIRECTION, so "Minimum 10", "Maximum 10" and a bare "10"
 * are three different claims and never compare equal.
 */
function parseSegment(text, inheritedQualifier) {
  const cleaned = normalise(text).replace(/^[;,]\s*/, "").replace(/[.;,]\s*$/, "");
  if (!cleaned) return null;

  const { qualifier, rest } = stripQualifier(cleaned);
  const numbers = [...rest.matchAll(/\d+(?:\.\d+)?/g)].map((m) => Number(m[0]));
  if (numbers.length === 0) return null;

  // A hyphen between two numbers is a closed range, not two separate claims.
  const isRange = numbers.length >= 2 && /\d\s*-\s*\d/.test(rest);
  const own = qualifier ?? inheritedQualifier ?? null;

  return {
    bound: isRange ? "range" : (own ?? "exact"),
    numbers: isRange ? numbers.slice(0, 2) : [numbers[0]],
    unit: firstMatch(UNITS, rest),
    subject: firstMatch(SUBJECTS, rest),
  };
}

/**
 * Split an AKC dimension line into the claims it makes.
 *
 * A qualifier at the front governs every segment after it — that is exactly the
 * shape the old substring check could not read.
 */
export function parseMeasurementLine(line) {
  const cleaned = normalise(line);
  if (!cleaned) return [];
  const { qualifier, rest } = stripQualifier(cleaned);
  return rest
    .split(/;|,(?![\d])/)
    .map((part) => parseSegment(part, qualifier))
    .filter(Boolean);
}

/** One stored `statedAs` as a single claim. */
export function parseStatedAs(statedAs) {
  const segments = parseMeasurementLine(statedAs);
  return segments.length === 1 ? segments[0] : null;
}

export const sameSegment = (a, b) =>
  Boolean(a) &&
  Boolean(b) &&
  a.bound === b.bound &&
  a.unit === b.unit &&
  a.subject === b.subject &&
  a.numbers.length === b.numbers.length &&
  a.numbers.every((n, i) => n === b.numbers[i]);

/** Human-readable form of a parsed claim, for the finding text. */
export const describeSegment = (s) =>
  s
    ? `${s.bound} ${s.numbers.join("-")}${s.unit ? " " + s.unit : ""}${s.subject ? " (" + s.subject + ")" : ""}`
    : "(unparseable)";

/**
 * Does the live line support this stored record?
 *
 * Exactly one matching segment. None means the claim is not on the page; more
 * than one means the line is ambiguous and we cannot say which claim was
 * verified — neither may read as agreement.
 */
export function lineSupports(line, statedAs) {
  const stored = parseStatedAs(statedAs);
  if (!stored) return { ok: false, reason: "unparseable-record", stored: null, matches: 0 };
  const segments = parseMeasurementLine(line);
  if (segments.length === 0) return { ok: false, reason: "unparseable-page", stored, matches: 0 };
  const matches = segments.filter((s) => sameSegment(s, stored));
  if (matches.length === 1) return { ok: true, stored, matches: 1, segments };
  return {
    ok: false,
    reason: matches.length === 0 ? "not-stated" : "ambiguous",
    stored,
    matches: matches.length,
    segments,
  };
}

/* ------------------------------------------------------------------ *
 * Which basics record is this breed's?
 * ------------------------------------------------------------------ */

/**
 * AKC's structured records are keyed by AKC's OWN name for the breed, which is
 * not always the name in the URL.
 *
 *     URL              /dog-breeds/st-bernard/
 *     settings.current_breed   "saint-bernard"
 *
 * The old lookup used the URL slug alone, so this one breed reported "no basics
 * record" every week. `current_breed` is the page telling us which breed it is,
 * which is a verifiable identity rather than a guess — and it is read from the
 * same props blob, so it cannot drift away from the data it indexes.
 *
 * THE ANSWER MUST BE EXACTLY ONE.
 *
 * No candidate and two candidates are different problems and neither is
 * agreement. There is deliberately no "take the first key" fallback and no
 * fuzzy matching: with one breed's page open, picking an arbitrary record would
 * verify this breed's published claims against a different dog.
 *
 * @returns {{ok: true, key: string, via: string, basics: object}
 *   | {ok: false, reason: "no-props" | "no-basics-container" | "identity-not-listed" | "ambiguous",
 *      detail: string}}
 */
export function resolveAkcBasics(data, registryUrl) {
  const settings = data?.settings;
  if (!settings || typeof settings !== "object") {
    return { ok: false, reason: "no-props", detail: "the props blob has no settings object" };
  }

  const container = settings.breed_data?.basics;
  const keys =
    container && typeof container === "object" && !Array.isArray(container)
      ? Object.keys(container)
      : null;

  /*
   * A MISSING CONTAINER IS NOT A MISSING BREED.
   *
   * "basics is absent from breed_data" and "basics exists but does not list
   * this breed" look the same to a lookup and mean opposite things: the first
   * is the page having changed shape, the second is a claim about this breed.
   * Reporting the first as the second is how a page-shape change gets recorded
   * as a data disagreement.
   */
  if (keys === null || keys.length === 0) {
    return {
      ok: false,
      reason: "no-basics-container",
      detail: `the page carries no basics records at all (breed_data has: ${Object.keys(settings.breed_data ?? {}).join(", ") || "nothing"})`,
    };
  }

  let urlSlug = null;
  try {
    urlSlug = new URL(registryUrl).pathname.replace(/\/+$/, "").split("/").pop() || null;
  } catch {
    urlSlug = null;
  }

  const canonical = typeof settings.current_breed === "string" ? settings.current_breed : null;
  const candidates = [...new Set([canonical, urlSlug].filter(Boolean))];
  const found = candidates.filter((k) => Object.prototype.hasOwnProperty.call(container, k));

  if (found.length === 1) {
    return {
      ok: true,
      key: found[0],
      via: found[0] === canonical ? "settings.current_breed" : "url slug",
      basics: container[found[0]],
    };
  }
  if (found.length === 0) {
    return {
      ok: false,
      reason: "identity-not-listed",
      detail: `no basics record for ${candidates.map((c) => `"${c}"`).join(" or ")} (page lists: ${keys.join(", ")})`,
    };
  }
  return {
    ok: false,
    reason: "ambiguous",
    detail: `two identities both match a basics record: ${found.map((f) => `"${f}"`).join(", ")}`,
  };
}
