#!/usr/bin/env node
/**
 * The npm audit policy, stated explicitly instead of by ignoring an exit code.
 *
 * `npm audit` exits non-zero for anything, and this repository has two residual
 * advisories that cannot be cleared without a major upgrade. The easy response
 * is `|| true`, or `--audit-level=critical`, and both are traps: the first
 * accepts everything forever, and the second silently accepts every future HIGH
 * advisory too.
 *
 * So the rule is written down instead:
 *
 *   1. ANY critical advisory fails, with no exceptions.
 *   2. Anything not on the allowlist below fails, at any severity.
 *   3. An allowlisted entry fails the moment it stops matching its entry —
 *      a new dependency path, or, for a package allowed only because its
 *      advisories are inherited, the appearance of an advisory of its own.
 *
 * Rule 3 is what keeps this honest. `next` is on the list only because its
 * audit entry currently carries ZERO advisories about Next.js itself: it is
 * flagged purely because it depends on the pinned postcss below. If Next ships
 * a real advisory of its own, this fails, exactly as it should.
 *
 * The two allowed entries are both the same root cause — Next.js pins
 * `postcss` at 8.4.31 in its own dependencies, so a nested copy sits below the
 * patched top-level 8.5.28. Clearing them needs Next 16, a major upgrade with
 * its own migration. The postcss advisories concern `sourceMappingURL` handling
 * when processing attacker-controlled CSS; this project runs postcss at build
 * time over its own Tailwind output only, so there is no exposure path here.
 *
 * Remove an entry the moment the upgrade lands. Adding one is a deliberate,
 * reviewable act.
 */
import { execFileSync } from "node:child_process";

/** Reviewed, accepted advisories. Anything else fails. */
const ALLOWED = [
  {
    name: "postcss",
    nodes: ["node_modules/next/node_modules/postcss"],
    reason: "next pins postcss 8.4.31 internally; build-time only, no untrusted CSS is processed",
    clearedBy: "next 16",
  },
  {
    name: "next",
    nodes: ["node_modules/next"],
    inheritedOnly: true,
    reason: "flagged solely through the nested postcss above; carries no Next.js advisory of its own",
    clearedBy: "next 16",
  },
];

function audit() {
  try {
    // `npm audit` exits non-zero when it finds anything, so the output is read
    // from the error rather than treating a non-zero exit as a failure to run.
    return JSON.parse(execFileSync("npm", ["audit", "--json"], { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 }));
  } catch (error) {
    if (error.stdout) return JSON.parse(error.stdout);
    throw error;
  }
}

const report = audit();
const totals = report.metadata?.vulnerabilities ?? {};
const found = Object.entries(report.vulnerabilities ?? {});
const failures = [];

for (const [name, vulnerability] of found) {
  const ownAdvisories = (vulnerability.via ?? []).filter((entry) => typeof entry !== "string");

  if (vulnerability.severity === "critical" || ownAdvisories.some((a) => a.severity === "critical")) {
    failures.push(`${name}: CRITICAL — never allowed`);
    continue;
  }

  const allowed = ALLOWED.find((entry) => entry.name === name);
  if (!allowed) {
    failures.push(`${name}: ${vulnerability.severity} — not on the reviewed allowlist`);
    continue;
  }

  const nodes = vulnerability.nodes ?? [];
  const unexpected = nodes.filter((node) => !allowed.nodes.includes(node));
  if (unexpected.length > 0) {
    failures.push(`${name}: appears at an unreviewed path ${unexpected.join(", ")}`);
    continue;
  }

  if (allowed.inheritedOnly && ownAdvisories.length > 0) {
    failures.push(
      `${name}: allowed only while inherited, but now carries ${ownAdvisories.length} advisory of its own ` +
        `(${ownAdvisories.map((a) => a.title).slice(0, 2).join("; ")})`,
    );
  }
}

const summary = Object.entries(totals)
  .filter(([key, value]) => key !== "total" && key !== "info" && value > 0)
  .map(([key, value]) => `${value} ${key}`)
  .join(", ");

if (failures.length > 0) {
  console.error(`audit policy FAILED — ${summary || "no advisories"}`);
  for (const failure of failures) console.error(`  ${failure}`);
  console.error(
    "\nFix the advisory, or add a reviewed entry to ALLOWED in scripts/audit-policy.mjs\n" +
      "with the dependency path and the reason. Do not run `npm audit fix --force`.",
  );
  process.exit(1);
}

console.log(
  `audit policy PASSED — ${summary || "no advisories"}; ` +
    `${found.length} entr${found.length === 1 ? "y" : "ies"} all reviewed and allowed`,
);
for (const [name, v] of found) {
  const allowed = ALLOWED.find((e) => e.name === name);
  console.log(`  ${name} (${v.severity}) — ${allowed.reason}; cleared by ${allowed.clearedBy}`);
}
