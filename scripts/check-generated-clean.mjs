#!/usr/bin/env node
/**
 * Proves a build changed no committed file except a generator's date stamp.
 *
 * WHY THIS IS NOT JUST `git diff --exit-code`.
 *
 * `prebuild` runs all three index generators, and two of them write a
 * `generatedAt` date into their committed output. On any day after the commit
 * that field differs, so a bare `git diff --exit-code` after `npm run build`
 * fails on every pull request — a red check that means nothing, which is worse
 * than no check because people learn to ignore it.
 *
 * Excluding those two files instead would create the opposite problem: a real
 * content change could then hide behind the exclusion, and those files ARE the
 * search index and the Animal Finder index.
 *
 * So the date stamp is tolerated and nothing else is. Every other file must be
 * byte-identical to HEAD, and the two stamped files must differ from HEAD in
 * the `generatedAt` value alone. A single added document, a reordered entry or
 * a changed URL fails, because the comparison is made on the parsed payload
 * with that one field removed from both sides.
 *
 * The `:check` scripts already compare their own output this way. This covers
 * the rest of the tree, which nothing else does.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";

/** Committed artifacts whose only permitted drift is the generation date. */
const DATE_STAMPED = new Set(["public/search-index.json", "public/animal-finder-index.json"]);

/** The one field allowed to differ in those files. */
const VOLATILE_FIELD = "generatedAt";

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
}

function changedFiles() {
  // Tracked modifications only. Untracked build output lives in .next, which is
  // gitignored; an untracked file appearing here would be a separate problem and
  // is reported below rather than silently ignored.
  return git("status", "--porcelain")
    .split("\n")
    .filter(Boolean)
    .map((line) => ({ status: line.slice(0, 2).trim(), file: line.slice(3).trim() }));
}

function withoutVolatileField(json) {
  const parsed = JSON.parse(json);
  delete parsed[VOLATILE_FIELD];
  return JSON.stringify(parsed);
}

const problems = [];
const tolerated = [];

for (const { status, file } of changedFiles()) {
  if (status === "??") {
    problems.push(`${file}: untracked file produced by the build`);
    continue;
  }
  if (!DATE_STAMPED.has(file)) {
    problems.push(`${file}: committed file changed by the build (${status})`);
    continue;
  }

  let committed;
  try {
    committed = git("show", `HEAD:${file}`);
  } catch {
    problems.push(`${file}: changed but has no committed version to compare against`);
    continue;
  }

  const current = fs.readFileSync(file, "utf8");
  try {
    if (withoutVolatileField(committed) !== withoutVolatileField(current)) {
      problems.push(
        `${file}: content changed, not just ${VOLATILE_FIELD} — regenerate and commit it`,
      );
    } else {
      tolerated.push(file);
    }
  } catch (error) {
    problems.push(`${file}: could not be parsed as JSON (${error.message})`);
  }
}

if (problems.length > 0) {
  console.error("generated artifacts are not clean:");
  for (const problem of problems) console.error(`  ${problem}`);
  console.error(
    `\nRun the generators and commit the result, or explain the change.\n` +
      `Only the \`${VOLATILE_FIELD}\` field of ${[...DATE_STAMPED].join(", ")} may drift.`,
  );
  process.exit(1);
}

console.log(
  tolerated.length > 0
    ? `generated artifacts clean (${VOLATILE_FIELD} drift tolerated in ${tolerated.length} file${tolerated.length === 1 ? "" : "s"})`
    : "generated artifacts clean (no drift at all)",
);
