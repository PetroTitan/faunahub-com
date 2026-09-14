/**
 * A source cited by many records, fetched once and failed once.
 *
 * FIFe publishes ONE listing for every breed it recognises, so all 35 FIFe
 * records cite the same URL. That makes it a shared source, and a shared source
 * that fails has failed once — not once per record that happens to cite it.
 *
 * The previous cache was a bare `let fifeListing = null`, which used one value
 * for three different states:
 *
 *   - not fetched yet
 *   - fetched and unusable
 *   - fetch failed
 *
 * So a failure never stuck. `if (fifeListing === null)` stayed true, and the
 * page was re-requested for every record: a persistent 503 became 70 requests
 * (35 records, each retried once) and a 404 became 35. Meanwhile an unreadable
 * body threw per record, producing 35 DEGRADED entries each blamed on a
 * different cat, as though thirty-five separate sources had gone down.
 *
 * The four states below are explicit, and `failed` is cached like any other
 * result. The in-flight promise is cached too, so if this is ever awaited
 * concurrently the second caller joins the first request instead of starting a
 * second one — the current run loop is sequential, but a cache whose
 * correctness depends on that is a trap left for whoever parallelises it.
 */

/**
 * @typedef {"uninitialized" | "loading" | "ready" | "failed"} SharedSourceState
 */

/** Marks an error as "this shared source failed", for the run loop to dedupe. */
export const SHARED_SOURCE_FAILURE = Symbol.for("faunahub.sharedSourceFailure");

/**
 * @param {{
 *   id: string,
 *   url: string,
 *   fetchText: (url: string) => Promise<string>,
 *   parse: (body: string) => string,
 *   validate?: (parsed: string) => string | null,
 * }} options
 */
export function createSharedSource({ id, url, fetchText, parse, validate }) {
  /** @type {{kind: SharedSourceState, value?: string, error?: Error, promise?: Promise<string>}} */
  let state = { kind: "uninitialized" };

  /**
   * Everything the summary needs to describe one shared-source failure.
   *
   * `kind` separates three situations that need different remedies, and that a
   * single "unreachable" label would send someone to the wrong place for:
   *
   *   fetched     the registry did not answer — theirs, and may fix itself
   *   unusable    it answered with something that is not the listing — the
   *               page changed, so the check needs rewriting
   *   processing  our own code threw while handling a body that did arrive —
   *               a bug here, and it will not fix itself
   */
  function failure(kind, message, { attempts, cause } = {}) {
    const error = new Error(message, cause === undefined ? undefined : { cause });
    error[SHARED_SOURCE_FAILURE] = true;
    error.sharedSourceId = id;
    error.sharedSourceUrl = url;
    error.sharedSourceFailureKind = kind;
    error.attempts = attempts ?? [];
    return error;
  }

  async function load() {
    let body;
    try {
      body = await fetchText(url);
    } catch (error) {
      // A fetch that failed after its retries. Cache it: asking again once per
      // record is what turned one outage into seventy requests.
      throw failure("fetched", `could not be fetched: ${error.message}`, {
        attempts: error.attempts,
        cause: error,
      });
    }

    /*
     * EVERYTHING AFTER THE FETCH IS GUARDED TOO.
     *
     * `parse` and `validate` used to run outside any try/catch, so an exception
     * from either escaped unmarked. The cache stored it faithfully — and then
     * `isSharedSourceFailure()` said no, the run loop fell back to the
     * breed-scoped path, and one TypeError in a parser became 35 findings, each
     * naming a cat whose own source was fine.
     *
     * A returned validation *problem* was already handled; a *thrown* one was
     * not. The distinction was invisible because nothing in this repository
     * threw from either function.
     *
     * Not retried, deliberately: re-running a parser that throws just throws
     * again, more slowly.
     */
    const arrived = [{ attempt: 1, status: 200, ok: true }];
    let parsed;
    try {
      parsed = parse(body);
    } catch (error) {
      throw failure("processing", `shared-source processing failed while parsing: ${error.message}`, {
        attempts: arrived,
        cause: error,
      });
    }

    let problem;
    try {
      problem = validate?.(parsed);
    } catch (error) {
      throw failure(
        "processing",
        `shared-source processing failed while validating: ${error.message}`,
        { attempts: arrived, cause: error },
      );
    }

    if (problem) throw failure("unusable", problem, { attempts: arrived });
    return parsed;
  }

  return {
    id,
    url,
    /** For assertions and diagnostics; never used to decide control flow. */
    get state() {
      return state.kind;
    },

    /**
     * The parsed source, or the SAME failure every caller after the first.
     *
     * Callers do not know or care whether they triggered the fetch. They get
     * the value or they get the one error, and the run loop records that error
     * once for the registry rather than once per breed.
     */
    async resolve() {
      if (state.kind === "ready") return state.value;
      if (state.kind === "failed") throw state.error;
      if (state.kind === "loading") return state.promise;

      const promise = load().then(
        (value) => {
          state = { kind: "ready", value };
          return value;
        },
        (error) => {
          state = { kind: "failed", error };
          throw error;
        },
      );
      // Recorded BEFORE the first await returns, so a concurrent caller in a
      // future parallel run loop joins this request rather than starting one.
      state = { kind: "loading", promise };
      return promise;
    },
  };
}

/** True when this error came from a shared source rather than one breed's page. */
export function isSharedSourceFailure(error) {
  return Boolean(error?.[SHARED_SOURCE_FAILURE]);
}

/**
 * Which of the three situations this was: "fetched", "unusable" or
 * "processing". Undefined for anything that is not a shared-source failure.
 */
export function sharedSourceFailureKind(error) {
  return error?.sharedSourceFailureKind;
}
