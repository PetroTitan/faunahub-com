/**
 * Parsing registry measurement strings, and rendering them back.
 *
 * Breed standards do not publish tidy pairs of numbers. The AKC's own strings
 * for the twelve pilot dogs include all of these shapes:
 *
 *   "22.5-24.5 inches (male), 21.5-23.5 inches (female)"   split by sex
 *   "13 inches & under, 13-15 inches"                       split by variety
 *   "16-32 pounds (standard), 11 pounds & under (miniature)"  variety + half-open
 *   "under 28 pounds"                                       half-open, whole breed
 *   "not exceeding 6 pounds"                                half-open, other wording
 *   "over 15 inches (standard)"                             half-open upward
 *
 * A parser that assumed male/female would have silently filed a Beagle's
 * 13-inch variety limit as a male height. So the parse is explicit about what
 * it could not understand: anything unrecognised is REJECTED and reported,
 * never coerced into the nearest shape.
 *
 * Canonical units are centimetres and kilograms. `statedAs` keeps the
 * registry's original wording on every record, because the conversion rounds
 * and the original is what FaunaHub shows when precision would be implied that
 * the standard does not have.
 */
import type { Measurement, MeasurementBasis, MeasurementBound } from "./types.ts";

const CM_PER_INCH = 2.54;
const KG_PER_POUND = 0.45359237;

/** Round to one decimal. Enough for a converted range; not false precision. */
function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

export function inchesToCm(inches: number): number {
  return round1(inches * CM_PER_INCH);
}

export function poundsToKg(pounds: number): number {
  return round1(pounds * KG_PER_POUND);
}

export interface ParsedSegment {
  min?: number;
  max?: number;
  bound: MeasurementBound;
  basis: MeasurementBasis;
  statedAs: string;
}

export interface ParseResult {
  segments: ParsedSegment[];
  /** Segments the parser refused to interpret. Non-empty means: fix the data. */
  rejected: string[];
}

const SEX_WORDS: Record<string, "male" | "female"> = {
  male: "male",
  males: "male",
  female: "female",
  females: "female",
};

/**
 * Splits "A (male), B (female)" into segments without splitting inside
 * parentheses — "20-30 pounds (13-15 inches)" is ONE segment whose qualifier
 * happens to contain a comma-free range, and a naive split on "," would have
 * produced two unparseable halves.
 */
function splitSegments(input: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let current = "";
  for (const ch of input) {
    if (ch === "(") depth += 1;
    if (ch === ")") depth = Math.max(0, depth - 1);
    if (ch === "," && depth === 0) {
      out.push(current.trim());
      current = "";
      continue;
    }
    current += ch;
  }
  if (current.trim()) out.push(current.trim());
  return out.filter(Boolean);
}

/** Reads the "(...)" qualifier, or a trailing bare word, into a basis. */
function basisFrom(qualifier: string | undefined, fallback: MeasurementBasis): MeasurementBasis {
  if (!qualifier) return fallback;
  const q = qualifier.trim().toLowerCase();
  // "male standard" / "female standard" carry BOTH axes; sex wins for the
  // basis and the variety survives in `statedAs`, which is why that string is
  // kept verbatim on every record.
  for (const [word, sex] of Object.entries(SEX_WORDS)) {
    if (new RegExp(`\\b${word}\\b`).test(q)) return { kind: "sex", sex };
  }
  return { kind: "variety", variety: qualifier.trim() };
}

const NUM = String.raw`\d+(?:\.\d+)?`;

/**
 * Parses one segment.
 *
 * Returns undefined rather than guessing. Every caller treats undefined as a
 * hard failure that has to be resolved by a human reading the standard.
 */
function parseSegment(
  segment: string,
  unit: "in" | "lb",
  index: number,
  total: number,
): ParsedSegment | undefined {
  const statedAs = segment.trim();
  const qualifierMatch = statedAs.match(/\(([^)]*)\)\s*$/);
  const qualifier = qualifierMatch?.[1];
  const body = (qualifierMatch ? statedAs.slice(0, qualifierMatch.index) : statedAs)
    .trim()
    .toLowerCase();

  // A segment with no qualifier in a multi-segment string is a variety split
  // whose label lives in the text itself (Beagle: "13 inches & under, 13-15
  // inches"). Calling that basis "breed" would claim it describes every dog of
  // the breed, which is exactly wrong.
  const fallback: MeasurementBasis =
    total > 1 && !qualifier ? { kind: "variety", variety: statedAs } : { kind: "breed" };
  const basis = basisFrom(qualifier, fallback);
  const convert = unit === "in" ? inchesToCm : poundsToKg;

  // "13 inches & under" / "11 pounds & under" / "under 28 pounds" /
  // "not exceeding 6 pounds"
  const atMost =
    body.match(new RegExp(`^(${NUM})\\s*\\w*\\s*(?:&|and)\\s*under$`)) ??
    body.match(new RegExp(`^(?:under|below|up to|not exceeding|no more than)\\s*(${NUM})`));
  if (atMost) {
    return { max: convert(Number(atMost[1])), bound: "at-most", basis, statedAs };
  }

  // "over 15 inches" / "at least 20 pounds"
  const atLeast = body.match(new RegExp(`^(?:over|above|at least|more than)\\s*(${NUM})`));
  if (atLeast) {
    return { min: convert(Number(atLeast[1])), bound: "at-least", basis, statedAs };
  }

  // "22.5-24.5 inches" (also en dash)
  const range = body.match(new RegExp(`^(${NUM})\\s*[-–]\\s*(${NUM})`));
  if (range) {
    const min = Number(range[1]);
    const max = Number(range[2]);
    if (max < min) return undefined;
    return { min: convert(min), max: convert(max), bound: "closed", basis, statedAs };
  }

  // A single bare figure ("13 inches") is genuinely ambiguous — a target, a
  // maximum, a typical. It is rejected rather than assumed.
  void index;
  return undefined;
}

/** Parses a full AKC-style height or weight string. */
export function parseMeasurementString(input: string, unit: "in" | "lb"): ParseResult {
  const segments = splitSegments(input);
  const parsed: ParsedSegment[] = [];
  const rejected: string[] = [];
  segments.forEach((segment, i) => {
    const result = parseSegment(segment, unit, i, segments.length);
    if (result) parsed.push(result);
    else rejected.push(segment);
  });
  return { segments: parsed, rejected };
}

/** Parses "11-13 years" into a closed lifespan measurement. */
export function parseLifespanYears(input: string, sourceId: string): Measurement | undefined {
  const m = input.trim().match(new RegExp(`^(${NUM})\\s*[-–]\\s*(${NUM})\\s*years?$`, "i"));
  if (!m) return undefined;
  const min = Number(m[1]);
  const max = Number(m[2]);
  if (max < min) return undefined;
  return {
    min,
    max,
    bound: "closed",
    basis: { kind: "breed" },
    statedAs: input.trim(),
    sourceId,
  };
}

/* ------------------------------------------------------------------ *
 * Rendering
 * ------------------------------------------------------------------ */

/** Label for a measurement's basis, for table row headers. */
export function basisLabel(basis: MeasurementBasis): string {
  if (basis.kind === "sex") return basis.sex === "male" ? "Male" : "Female";
  if (basis.kind === "variety") return basis.variety;
  return "Adult";
}

/**
 * Renders a converted measurement.
 *
 * Half-open bounds keep their direction ("up to 12.7 kg", "over 38.1 cm")
 * rather than being padded into a closed range with an invented endpoint.
 */
export function formatMeasurement(m: Measurement, unit: string): string {
  if (m.bound === "at-most" && m.max !== undefined) return `up to ${m.max} ${unit}`;
  if (m.bound === "at-least" && m.min !== undefined) return `over ${m.min} ${unit}`;
  if (m.min !== undefined && m.max !== undefined) {
    return m.min === m.max ? `${m.min} ${unit}` : `${m.min}–${m.max} ${unit}`;
  }
  return "";
}

export function formatLifespan(m: Measurement): string {
  if (m.min !== undefined && m.max !== undefined) return `${m.min}–${m.max} years`;
  return m.statedAs;
}

/**
 * Widest span across a set of measurements, for size banding and for the
 * Finder's numeric range filter.
 *
 * Half-open records contribute the bound they have and nothing else, so a
 * breed whose standard says only "under 28 pounds" yields a max and no min —
 * which is the truth about that breed, not a gap to be filled.
 */
export function span(measurements: readonly Measurement[] | undefined): {
  min?: number;
  max?: number;
} {
  if (!measurements?.length) return {};
  const mins = measurements.map((m) => m.min).filter((n): n is number => n !== undefined);
  const maxes = measurements.map((m) => m.max).filter((n): n is number => n !== undefined);
  return {
    min: mins.length ? Math.min(...mins) : undefined,
    max: maxes.length ? Math.max(...maxes) : undefined,
  };
}
