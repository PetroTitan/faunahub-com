import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

/**
 * Which third-party code the CI runs, and on which runtime.
 *
 * Every required check and every registry run carried the same annotation:
 * `actions/checkout@v4` and `actions/setup-node@v4` declare `runs.using:
 * node20`, and GitHub was force-running them on Node 24 through a compatibility
 * shim. A shim is not a contract — when it goes, the required check goes with
 * it, and the failure lands on whoever happens to open the next pull request.
 *
 * Pinning to a full commit SHA is the other half. A moving tag means the code
 * that runs with repository credentials can change without a diff here: `v4`
 * resolves to whatever that tag points at today. The version comment keeps the
 * pin readable; the SHA is what is actually executed.
 *
 * These checks read files and nothing else — no network, no subprocess.
 */

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const WORKFLOW_DIR = path.join(REPO_ROOT, ".github/workflows");
const workflows = fs.readdirSync(WORKFLOW_DIR).filter((f) => f.endsWith(".yml"));

interface Pin {
  file: string;
  line: number;
  action: string;
  ref: string;
  comment: string | null;
}

/** Every `uses:` in every workflow, with whatever it is pinned to. */
function actionPins(): Pin[] {
  const pins: Pin[] = [];
  for (const file of workflows) {
    const source = fs.readFileSync(path.join(WORKFLOW_DIR, file), "utf8");
    source.split("\n").forEach((line, i) => {
      if (line.trim().startsWith("#")) return;
      const m = /^\s*-?\s*uses:\s*([^\s#]+)\s*(?:#\s*(.*))?$/.exec(line);
      if (!m) return;
      const [action, ref] = m[1].split("@");
      pins.push({ file, line: i + 1, action, ref: ref ?? "", comment: m[2]?.trim() ?? null });
    });
  }
  return pins;
}

test("no workflow still uses the Node 20 major of checkout or setup-node", () => {
  /*
   * The literal thing being removed. Named explicitly rather than inferred from
   * the SHA check below, so the reason survives in the failure message.
   */
  const offenders = actionPins()
    .filter((p) => ["actions/checkout", "actions/setup-node"].includes(p.action))
    .filter((p) => /^v[0-4]$/.test(p.ref))
    .map((p) => `${p.file}:${p.line} ${p.action}@${p.ref}`);
  assert.deepEqual(offenders, [], `these run on Node 20 via a shim:\n${offenders.join("\n")}`);
});

test("checkout and setup-node are pinned to a full 40-character commit SHA", () => {
  const relevant = actionPins().filter((p) =>
    ["actions/checkout", "actions/setup-node"].includes(p.action),
  );
  assert.equal(relevant.length, 6, "three workflows, two actions each");

  for (const pin of relevant) {
    assert.match(
      pin.ref,
      /^[0-9a-f]{40}$/,
      `${pin.file}:${pin.line} — ${pin.action} is pinned to "${pin.ref}", not a full commit SHA. ` +
        "A tag can be moved; a commit cannot.",
    );
  }
});

test("every pin carries a version comment, and one SHA never means two versions", () => {
  const relevant = actionPins().filter((p) =>
    ["actions/checkout", "actions/setup-node"].includes(p.action),
  );

  const bySha = new Map<string, Set<string>>();
  for (const pin of relevant) {
    assert.ok(
      pin.comment && /^v\d+\.\d+\.\d+$/.test(pin.comment),
      `${pin.file}:${pin.line} — expected a "# vX.Y.Z" comment, got ${JSON.stringify(pin.comment)}. ` +
        "An unlabelled SHA is unreadable in review.",
    );
    if (!bySha.has(pin.ref)) bySha.set(pin.ref, new Set());
    bySha.get(pin.ref)!.add(pin.comment!);
  }

  /*
   * The comment cannot be checked against the live release from a test — that
   * would put a network call in `npm test`. What a test CAN prove is internal
   * consistency: one commit labelled two different versions means at least one
   * label is wrong, and that is the failure mode a reader would not catch.
   */
  for (const [sha, versions] of bySha) {
    assert.equal(
      versions.size,
      1,
      `${sha.slice(0, 12)}… is labelled ${[...versions].join(" and ")} in different workflows`,
    );
  }

  // And the reverse: one version must not be two different commits.
  const byVersion = new Map<string, Set<string>>();
  for (const pin of relevant) {
    const key = `${pin.action}@${pin.comment}`;
    if (!byVersion.has(key)) byVersion.set(key, new Set());
    byVersion.get(key)!.add(pin.ref);
  }
  for (const [key, shas] of byVersion) {
    assert.equal(shas.size, 1, `${key} resolves to ${shas.size} different commits`);
  }
});

test("the required status check is still the job display name 'verify'", () => {
  /*
   * Branch protection requires a check literally called `verify`, and GitHub
   * names the check after the job's DISPLAY name — not its id. A rename here
   * silently detaches the requirement and every pull request goes green.
   */
  const ci = fs.readFileSync(path.join(WORKFLOW_DIR, "ci.yml"), "utf8");
  const data = ci
    .split("\n")
    .filter((l) => !l.trim().startsWith("#"))
    .join("\n");
  const jobs = data.slice(data.indexOf("\njobs:"));
  assert.match(jobs, /^\s{2}verify:\s*$/m, "the job id must be `verify`");
  const displayName = /^\s{4}name:\s*(.+)$/m.exec(jobs)?.[1]?.trim();
  assert.ok(
    displayName === undefined || displayName === "verify",
    `the job's display name is ${JSON.stringify(displayName)}; the required check is "verify"`,
  );
});

test("pinning did not introduce an expression into a run: command", () => {
  // Held separately in diagnostic-input-safety.test.ts; asserted here too
  // because this change edits every workflow file in the repository.
  for (const file of workflows) {
    const source = fs.readFileSync(path.join(WORKFLOW_DIR, file), "utf8");
    source.split("\n").forEach((line, i) => {
      if (line.trim().startsWith("#")) return;
      if (/^\s*-?\s*run:.*\$\{\{/.test(line)) {
        assert.fail(`${file}:${i + 1} puts an expression in command position`);
      }
    });
  }
});
