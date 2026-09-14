/**
 * Everything the diagnostic will accept, and nothing else.
 *
 * THE PRIMITIVE THIS REMOVES
 *
 * The workflow interpolated a dispatch input straight into a shell command:
 *
 *     run: node scripts/diagnose-registry-response.mjs ${{ inputs.urls }}
 *
 * GitHub substitutes `${{ }}` into the script text BEFORE bash sees it, so the
 * input was not an argument — it was source code. Anyone able to dispatch the
 * workflow could run arbitrary commands on the runner with the job's token in
 * the environment, and `; whoami` needed no quoting cleverness at all.
 *
 * The fix is not to escape the input. Escaping is a filter you have to get
 * right every time, against a shell you do not control. The fix is to stop
 * putting untrusted text in command position: the value travels in an
 * environment variable, which the runner hands to the process verbatim and
 * never parses, and every decision about it is made here, in Node, on a string.
 *
 * So `; touch /tmp/x` is not a command that gets neutralised. It is a hostname
 * that is not on the allowlist.
 *
 * WHY VALIDATION IS ALL-OR-NOTHING
 *
 * One bad URL rejects the whole run rather than being skipped. A diagnostic
 * that silently drops an input answers a different question from the one it was
 * asked, and the answer looks exactly like the one it was asked for.
 */

/**
 * Hosts this tool may talk to, taken from what the corpus actually cites.
 *
 * An ALLOWLIST, because the alternative — blocking known-bad hosts — makes
 * every host nobody thought of a valid target for exfiltration. The diagnostic
 * prints response metadata; pointing it at an arbitrary host would make it a
 * request forgery tool that reports what it found.
 */
export const REGISTRY_HOSTS = Object.freeze([
  "akc.org",
  "www.akc.org",
  "cfa.org",
  "www.cfa.org",
  "fci.be",
  "www.fci.be",
  "fifeweb.org",
  "www.fifeweb.org",
]);

/**
 * The four pages a targeted run describes, chosen rather than arbitrary.
 *
 *   abyssinian        a reviewed cfa:group finding — the class really is absent
 *   siamese           the same, to show the first is not a one-off
 *   american-bobtail  NOT a finding — the class is present, so a run that calls
 *                     this one a disagreement is reading the wrong document
 *   beagle (FCI)      a second registry, untouched by the incident, as a control
 *                     on the runner's network rather than on CFA
 *
 * It lives HERE, not in the script, because the script runs on import: it has
 * top-level await and fetches. A test that imported the constant from there
 * made four live requests every time the suite ran, silently. Constants belong
 * in modules that do nothing when loaded.
 */
export const DEFAULT_TARGETS = Object.freeze([
  "https://cfa.org/breed/abyssinian/",
  "https://cfa.org/breed/american-bobtail/",
  "https://cfa.org/breed/siamese/",
  "https://www.fci.be/en/nomenclature/BEAGLE-161.html",
]);

/**
 * A ceiling low enough that a mistyped dispatch cannot become a crawl.
 *
 * The sweep's 45 is a deliberate, named mode. Ad-hoc input is for looking at a
 * handful of pages, and anything larger should be a sweep or a code change.
 */
export const MAX_URLS = 10;

/** 64 is EX_USAGE: the caller asked for something impossible, nothing ran. */
export const EX_USAGE = 64;

const KNOWN_FLAGS = new Set(["--json", "--both", "--sweep"]);
const KNOWN_PREFIXES = ["--delay="];

/**
 * Split a dispatch input into candidate URLs.
 *
 * Whitespace of every kind separates, so a newline-injected second "command"
 * arrives as a second token and is validated like any other — there being no
 * shell, a newline is just a separator.
 */
const tokenize = (raw) => String(raw ?? "").split(/\s+/).filter(Boolean);

/**
 * @param {string} candidate
 * @returns {{ok: true, url: string} | {ok: false, reason: string}}
 */
export function validateUrl(candidate) {
  /*
   * Rejected before parsing. `new URL("--json")` throws, but `new URL()` is
   * lenient about plenty of things that should never reach a fetch, and a
   * leading dash would be read as an option by anything downstream.
   */
  if (candidate.startsWith("-")) {
    return { ok: false, reason: `looks like an option, not a URL: ${candidate}` };
  }

  let parsed;
  try {
    parsed = new URL(candidate);
  } catch {
    return { ok: false, reason: `not a valid URL: ${candidate}` };
  }

  if (parsed.protocol !== "https:") {
    return { ok: false, reason: `only https is allowed, got ${parsed.protocol || "(none)"}: ${candidate}` };
  }

  /*
   * `https://user:pass@host/` would send credentials we did not put there, and
   * `https://evil.example.com@cfa.org/` reads as cfa.org to a person and as
   * evil.example.com to nothing at all — but the shape is a classic disguise
   * and has no legitimate use here.
   */
  if (parsed.username || parsed.password) {
    return { ok: false, reason: `embedded credentials are not allowed: ${parsed.host}` };
  }

  if (!REGISTRY_HOSTS.includes(parsed.hostname.toLowerCase())) {
    return { ok: false, reason: `host is not a supported registry: ${parsed.hostname}` };
  }

  return { ok: true, url: parsed.toString() };
}

/**
 * Decide what this invocation is, or refuse it.
 *
 * @param {{argv?: string[], env?: Record<string, string | undefined>}} [input]
 * @returns {{ok: true, mode: "targeted" | "sweep", urls: string[], emit: "human" | "json" | "both", delayMs: number}
 *   | {ok: false, errors: string[]}}
 */
export function parseDiagnosticInput({ argv = [], env = {} } = {}) {
  const errors = [];

  const flags = argv.filter((a) => a.startsWith("-"));
  for (const flag of flags) {
    if (KNOWN_FLAGS.has(flag)) continue;
    if (KNOWN_PREFIXES.some((p) => flag.startsWith(p))) continue;
    errors.push(`unknown option: ${flag}`);
  }

  const delayFlag = argv.find((a) => a.startsWith("--delay="));
  let delayMs = 900;
  if (delayFlag !== undefined) {
    const raw = delayFlag.slice("--delay=".length);
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 0 || n > 60_000) {
      errors.push(`--delay= must be a number between 0 and 60000, got ${raw || "(empty)"}`);
    } else {
      delayMs = n;
    }
  }

  const emit = argv.includes("--both")
    ? "both"
    : argv.includes("--json")
      ? "json"
      : (env.FAUNAHUB_DIAGNOSTIC_EMIT ?? "human");
  if (!["human", "json", "both"].includes(emit)) {
    errors.push(`FAUNAHUB_DIAGNOSTIC_EMIT must be human, json or both — got ${emit}`);
  }

  const envMode = (env.FAUNAHUB_DIAGNOSTIC_MODE ?? "").trim();
  if (envMode && !["targeted", "sweep"].includes(envMode)) {
    errors.push(`mode must be targeted or sweep — got ${envMode}`);
  }
  const mode = argv.includes("--sweep") || envMode === "sweep" ? "sweep" : "targeted";

  /*
   * Positional arguments and the env variable are the same channel, so that a
   * local run and a dispatch are validated by identical code. The env variable
   * is the only one the workflow uses.
   */
  const candidates = [
    ...argv.filter((a) => !a.startsWith("-")),
    ...tokenize(env.FAUNAHUB_DIAGNOSTIC_URLS),
  ];

  /*
   * MUTUALLY EXCLUSIVE, AND SAID SO.
   *
   * Sweep walks the corpus; explicit URLs name their own targets. Silently
   * preferring one would make the run's request count depend on which branch of
   * an undocumented precedence rule it took — exactly the ambiguity that let a
   * blank dispatch quietly perform 53 requests while its comment said four.
   */
  if (mode === "sweep" && candidates.length > 0) {
    errors.push("sweep and explicit URLs are mutually exclusive: sweep walks every CFA URL itself");
  }

  if (candidates.length > MAX_URLS) {
    errors.push(`at most ${MAX_URLS} URLs may be given, got ${candidates.length}`);
  }

  const urls = [];
  const seen = new Set();
  for (const candidate of candidates) {
    const result = validateUrl(candidate);
    if (!result.ok) {
      errors.push(result.reason);
      continue;
    }
    // A duplicate is accepted but fetched once: the run's job is to describe a
    // page, and describing it twice costs a request and answers nothing new.
    if (seen.has(result.url)) continue;
    seen.add(result.url);
    urls.push(result.url);
  }

  if (errors.length > 0) return { ok: false, errors };
  return { ok: true, mode, urls, emit, delayMs };
}
