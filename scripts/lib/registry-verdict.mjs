/**
 * The registry run's verdict, as a pure function.
 *
 * THREE OUTCOMES, BECAUSE TWO CANNOT EXPRESS WHAT HAPPENED.
 *
 * The first weekly run exited 1 with 64 findings and GitHub displayed
 * SUCCESS, because the step carried `continue-on-error` and nothing else
 * reported a verdict. Collapsing "the sources disagree with us" and "a source
 * would not answer" into one signal is the other half of that problem: the
 * first needs a person to read a registry page, the second needs nothing at
 * all and will usually fix itself by next Monday.
 *
 *   CLEAN         exit 0   every cited source still says what the record claims
 *   DISAGREEMENT  exit 1   a source and a record disagree — a person must look
 *   DEGRADED      exit 2   a source would not answer, so it said nothing
 *
 * It lives here, separate from the script, so all three can be exercised
 * deterministically without a five-minute live run against four registries.
 */

/** @typedef {{breed: string, field: string, expected: unknown, actual: unknown}} Problem */
/** @typedef {{attempt: number, status?: number, ok?: boolean, error?: string}} Attempt */
/**
 * A source that could not be verified.
 *
 * `scope` distinguishes three kinds, because they mean different things and
 * need different people to act.
 *
 *   breed            that breed's own page. One record, one problem.
 *   registry         ONE page many records share — FIFe publishes a single
 *                    listing for all 35 of its breeds. One outage, reported
 *                    once, with `affectedRecords` saying what it cost.
 *   registry-egress  MANY DISTINCT pages of one registry, all answering with
 *                    the same unusable response class. Not one shared page —
 *                    45 different URLs — but one cause, and almost never a
 *                    cause on the registry's side of the wire. Reported once,
 *                    with the distinct-URL count, because 45 blocked fetches
 *                    are one incident and not 45 findings about cats.
 *
 * @typedef {{
 *   scope?: "breed" | "registry" | "registry-egress",
 *   kind?: "fetched" | "unusable" | "processing" | "out-of-force",
 *   reason?: string,
 *   breed?: string,
 *   registryId: string,
 *   url: string,
 *   error: string,
 *   attempts: Attempt[],
 *   affectedRecords?: number,
 *   distinctUrls?: number,
 *   attemptCount?: number,
 *   fingerprint?: string,
 *   examples?: string[]
 * }} Degraded
 */

const ICON = { CLEAN: "✅", DISAGREEMENT: "❌", DEGRADED: "⚠️" };
const EXIT = { CLEAN: 0, DISAGREEMENT: 1, DEGRADED: 2 };

/** Markdown table cells must not break the table. */
const cell = (value, limit = 80) =>
  String(value ?? "")
    .replace(/\|/g, "\\|")
    .replace(/\s+/g, " ")
    .slice(0, limit);

const countBy = (rows, key) => {
  const out = {};
  for (const row of rows) out[row[key]] = (out[row[key]] ?? 0) + 1;
  return out;
};

const describeAttempts = (attempts) =>
  attempts.map((a) => `#${a.attempt} ${a.status ?? a.error ?? (a.ok ? "ok" : "failed")}`).join("; ");

/**
 * @param {{problems?: Problem[], degraded?: Degraded[], fetchAttempts?: Array<{url: string, attempts: Array<Record<string, unknown>>}>, breedsChecked?: number, checked?: Record<string, number>}} [input]
 */
export function buildVerdict({
  problems = [],
  degraded = [],
  fetchAttempts = [],
  breedsChecked = 0,
  checked = {},
}) {
  /*
   * Order matters. A disagreement outranks an unreachable source: if even one
   * registry contradicts a published record, that is the headline regardless
   * of how many others timed out.
   */
  const verdict =
    problems.length > 0 ? "DISAGREEMENT" : degraded.length > 0 ? "DEGRADED" : "CLEAN";

  const byField = countBy(problems, "field");
  const byRegistry = countBy(degraded, "registryId");
  const retried = fetchAttempts.filter((f) => f.attempts.length > 1);
  const recovered = retried.filter((f) => f.attempts.at(-1)?.ok);
  /*
   * URLs and requests are different numbers, and conflating them is how a
   * shared source looks cheap. "Fetches" counts distinct URLs; "Fetch attempts"
   * counts requests actually made, so a retried page reads as 1 and 2.
   */
  const attemptCount = fetchAttempts.reduce((n, f) => n + f.attempts.length, 0);

  const registryLine = Object.entries(checked)
    .filter(([, n]) => n > 0)
    .map(([k, n]) => `${n} ${k.toUpperCase()}`)
    .join(", ");

  const lines = [
    `## ${ICON[verdict]} Registry verification — ${verdict}`,
    "",
    `**${breedsChecked} breeds checked**${registryLine ? ` across ${registryLine} records.` : "."}`,
    "",
    "| | |",
    "| --- | --- |",
    `| Disagreements | ${problems.length} |`,
    `| Unreachable sources | ${degraded.length} |`,
    `| Fetches (distinct URLs) | ${fetchAttempts.length} |`,
    `| Fetch attempts | ${attemptCount} |`,
    `| Retried | ${retried.length} |`,
    `| Recovered by retry | ${recovered.length} |`,
    "",
  ];

  if (problems.length > 0) {
    lines.push(
      "### Disagreements by field",
      "",
      "| Field | Count |",
      "| --- | --- |",
      ...Object.entries(byField)
        .sort((a, b) => b[1] - a[1])
        .map(([field, n]) => `| \`${field}\` | ${n} |`),
      "",
      "### Affected records",
      "",
      "| Breed | Field | Stored | Live |",
      "| --- | --- | --- | --- |",
      ...problems.map(
        (p) => `| \`${p.breed}\` | \`${p.field}\` | ${cell(p.expected)} | ${cell(p.actual)} |`,
      ),
      "",
    );
  } else if (degraded.length > 0) {
    /*
     * Wording matters here. "Every cited source still says what the record
     * claims" would be false when some of them said nothing at all — and
     * asserting it beside a DEGRADED banner is precisely the confusion this
     * verdict model exists to prevent.
     */
    lines.push(
      `No disagreements among the sources that answered. ${degraded.length} source` +
        `${degraded.length === 1 ? " was unreachable and remains" : "s were unreachable and remain"}` +
        " unverified.",
      "",
    );
  } else {
    lines.push("No disagreements: every cited source still says what the record claims.", "");
  }

  if (degraded.length > 0) {
    lines.push(
      "### Unreachable sources",
      "",
      "These are **not** disagreements. The source did not answer, so it said nothing",
      "about whether the record is right, and nothing was inferred from the silence.",
      "",
      "A **shared listing** is one page cited by many records — FIFe publishes a single",
      "listing for every breed it recognises. One outage there is one failure, reported",
      "once, with the number of records it left unverified.",
      "",
      "A **registry egress incident** is many DIFFERENT pages of one registry all",
      "answering with the same unusable response — a bot challenge, a login wall, a",
      "rate-limit notice. The pages are fine; this runner could not read them. It is",
      "reported once, and **no field comparison was made against any of those bodies**.",
      "",
      "| Scope | Registry | Source URL | Attempts |",
      "| --- | --- | --- | --- |",
      ...degraded.map((d) => {
        if (d.scope === "registry-egress") {
          return (
            `| **egress incident, ${cell(d.reason ?? "unusable", 24)}** ` +
            `— ${d.affectedRecords} ${d.registryId.toUpperCase()} records left unverified ` +
            `| \`${d.registryId}\` | ${d.distinctUrls} distinct URLs / ${d.attemptCount} attempts ` +
            `| ${cell(d.fingerprint ?? "", 60)} |`
          );
        }
        if (d.scope === "registry") {
          return (
            `| **shared listing${d.kind === "processing" ? ", OUR processing fault" : d.kind === "out-of-force" ? ", NOT IN FORCE on this date" : d.kind === "unusable" ? ", answered but unusable" : ""}** ` +
            `— ${d.affectedRecords} ${d.registryId.toUpperCase()} records affected ` +
            `| \`${d.registryId}\` | ${cell(d.url, 100)} | ${cell(describeAttempts(d.attempts))} |`
          );
        }
        return `| \`${d.breed}\` | \`${d.registryId}\` | ${cell(d.url, 100)} | ${cell(describeAttempts(d.attempts))} |`;
      }),
      "",
      "| Registry | Unreachable |",
      "| --- | --- |",
      ...Object.entries(byRegistry)
        .sort((a, b) => b[1] - a[1])
        .map(([r, n]) => `| \`${r}\` | ${n} |`),
      "",
    );
  }

  lines.push(
    "---",
    "",
    "**No corpus data was modified by this run.** The verifier only reads. Updating a",
    "record because a registry changed is a reviewed pull request — never automatic,",
    "and never inferred from a source that failed to load.",
    "",
  );

  return {
    verdict,
    exitCode: EXIT[verdict],
    counts: {
      problems: problems.length,
      degraded: degraded.length,
      fetches: fetchAttempts.length,
      attempts: attemptCount,
      retried: retried.length,
      recovered: recovered.length,
      byField,
      byRegistry,
    },
    summaryMarkdown: lines.join("\n"),
  };
}
