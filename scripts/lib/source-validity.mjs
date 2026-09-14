/**
 * A cited document that has expired is not evidence.
 *
 * THE FALSE CLEAN THIS CLOSES
 *
 * Twelve records cite CFA Show Rules for the 2026-2027 season. That document
 * governs a fixed period — 27 April 2026 to 25 April 2027 — and CFA replaces it
 * every year. The verifier had no idea: the dates lived in a prose `notes`
 * field, nothing read them, and a run in 2028 would have fetched the same file,
 * found the same twelve breeds, and reported CLEAN. A stale document agreeing
 * with a stale record is not verification; it is two copies of the same
 * assumption.
 *
 * So validity is machine-readable, and it is checked BEFORE the fetch. There is
 * nothing to learn from downloading a document we already know we may not rely
 * on, and asking for it anyway would make the log say we consulted a source we
 * had no right to consult.
 *
 * The window is INCLUSIVE and DATE-ONLY in UTC. A document effective "through
 * 25 April 2027" is good for the whole of that day, and a run at 23:00 in one
 * timezone must not disagree with a run at 01:00 in another about which day it
 * is. Date-only comparison in UTC is the only reading that is the same
 * everywhere.
 */

/** 64 is EX_USAGE: the caller asked for something impossible, nothing ran. */
export const EX_USAGE = 64;

const DATE_ONLY = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * Parse a `YYYY-MM-DD` into a UTC day number, or null.
 *
 * Rejects real-looking nonsense: `Date.parse("2026-02-30")` rolls over to
 * March in some engines, so the parsed date is compared back against its own
 * text and a value that did not survive the round trip is refused.
 */
export function parseDateOnly(value) {
  const m = DATE_ONLY.exec(String(value ?? "").trim());
  if (!m) return null;
  const [, y, mo, d] = m;
  const ms = Date.UTC(Number(y), Number(mo) - 1, Number(d));
  if (!Number.isFinite(ms)) return null;
  const back = new Date(ms);
  if (
    back.getUTCFullYear() !== Number(y) ||
    back.getUTCMonth() !== Number(mo) - 1 ||
    back.getUTCDate() !== Number(d)
  ) {
    return null;
  }
  return ms;
}

/**
 * The date this run should be judged against.
 *
 * Real time by default. `FAUNAHUB_VERIFY_NOW` overrides it so the boundary days
 * can be tested without waiting a year for one of them — a seam, never a
 * convenience: a malformed value is a usage error and stops the run rather than
 * silently falling back to the clock, because a run that quietly ignored the
 * date it was given would report a verdict about a different day than the
 * caller asked about.
 *
 * @returns {{ok: true, at: number, source: "clock" | "injected", iso: string}
 *   | {ok: false, error: string}}
 */
export function resolveNow(env = {}) {
  const injected = env.FAUNAHUB_VERIFY_NOW;
  if (injected === undefined || injected === "") {
    const now = new Date();
    const at = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    return { ok: true, at, source: "clock", iso: new Date(at).toISOString().slice(0, 10) };
  }
  const at = parseDateOnly(injected);
  if (at === null) {
    return { ok: false, error: `FAUNAHUB_VERIFY_NOW must be a real YYYY-MM-DD date, got "${injected}"` };
  }
  return { ok: true, at, source: "injected", iso: injected };
}

/**
 * Is a time-bounded source in force on this date?
 *
 * A source with neither bound is not time-bounded and is always in force —
 * most sources are a breed page that is simply current. Declaring only one
 * bound is meaningful too: an effective date with no end, or an end with no
 * stated beginning.
 *
 * @param {{validFrom?: string, validThrough?: string}} source
 * @param {number} at UTC day, from resolveNow
 * @returns {{inForce: true} | {inForce: false, reason: string}}
 */
export function checkValidity(source, at) {
  const from = source?.validFrom ? parseDateOnly(source.validFrom) : null;
  const through = source?.validThrough ? parseDateOnly(source.validThrough) : null;

  if (source?.validFrom && from === null) {
    return { inForce: false, reason: `validFrom "${source.validFrom}" is not a YYYY-MM-DD date` };
  }
  if (source?.validThrough && through === null) {
    return { inForce: false, reason: `validThrough "${source.validThrough}" is not a YYYY-MM-DD date` };
  }

  const on = new Date(at).toISOString().slice(0, 10);
  if (from !== null && at < from) {
    return { inForce: false, reason: `not yet in force on ${on}: effective from ${source.validFrom}` };
  }
  // Inclusive: the document governs the whole of its final day.
  if (through !== null && at > through) {
    return { inForce: false, reason: `expired on ${on}: in force only through ${source.validThrough}` };
  }
  return { inForce: true };
}
