# CI break-glass runbook

`main` is protected and `main` auto-deploys. Those two facts together mean a
merge is a release, and that the protection standing in front of it is the only
thing between a broken commit and faunahub.com.

This document describes the **one** circumstance in which that protection may be
temporarily lifted, by whom, and what must be true before and after. It exists so
that the decision is made calmly and on the record, rather than at 2am by
whoever has admin rights.

If you are reading this because CI is red on your pull request, **this document
does not apply to you.** Fix the test. See [Not a break-glass situation](#not-a-break-glass-situation).

---

## Protected baseline

This is the configuration to restore to. Recorded 2026-09-14 from
`GET /repos/PetroTitan/faunahub-com/branches/main/protection`.

| Setting | Value |
| --- | --- |
| `required_status_checks.contexts` | `["verify"]` |
| `required_status_checks.strict` | `true` |
| `enforce_admins` | `true` |
| `required_pull_request_reviews` | none |
| `restrictions` | none |
| `allow_force_pushes` | `false` |
| `allow_deletions` | `false` |
| `required_linear_history` | `false` |
| `required_conversation_resolution` | `false` |
| `block_creations` | `false` |
| `lock_branch` | `false` |

`verify` is the job name in `.github/workflows/ci.yml`. **The status-check
context is the job's display name, not its id** — renaming the job silently
detaches this protection rule, which is why the job is called `verify` and not
something descriptive. If you rename it, update this rule in the same change.

---

## When bypassing `enforce_admins` is justified

All four must hold. Not three.

1. **Production is broken or actively harmful**, and the fix cannot wait for the
   normal PR path. A visibly wrong page, a hard 404 on a live route, a legal or
   privacy exposure, a security incident.
2. **CI cannot pass for a reason unrelated to the fix.** GitHub Actions is
   degraded, a runner image changed under you, npm registry is down, or a
   third-party the build depends on is unavailable. Check
   [githubstatus.com](https://www.githubstatus.com/) first and record what it said.
3. **The change has been verified locally** — see
   [Verification before a direct hotfix](#verification-before-a-direct-hotfix).
   Bypassing the gate does not mean skipping the checks; it means running them
   somewhere the gate cannot.
4. **An incident record exists before the setting is touched.** Not after.

If CI is simply failing, the answer is to fix the code. If CI is failing and you
do not know why, that is a reason to slow down, not to bypass.

---

## Who may authorize

Only the repository owner (**@PetroTitan**) may authorize a bypass, and only
explicitly for a specific incident. "Admin access" is not authorization;
possessing the ability is not permission to use it.

An agent, automation, or collaborator **may not** authorize a bypass, may not
infer authorization from a previous incident, and may not treat a general
instruction to "fix production" as covering it. If the owner is unreachable, the
correct action is to wait — an outage is survivable, an unreviewed force-merge to
an auto-deploying branch may not be.

---

## The only setting that may change

**`enforce_admins: false`, and nothing else.**

```bash
# Lift — only after the incident record exists
gh api -X DELETE repos/PetroTitan/faunahub-com/branches/main/protection/enforce_admins

# Restore — immediately after the hotfix merges
gh api -X POST repos/PetroTitan/faunahub-com/branches/main/protection/enforce_admins
```

This dedicated endpoint is used deliberately: it changes one flag and leaves
every other setting untouched. Do **not** re-`PUT` the whole protection object to
achieve this — a full `PUT` replaces the entire configuration, and any field you
omit is silently dropped. That is how required checks disappear without anyone
deciding to remove them.

With `enforce_admins` lifted, the required `verify` check still exists and is
still reported; an admin can now merge despite it. Everything else — no force
pushes, no deletion, strict up-to-date — remains in force.

---

## Prohibited, without exception

These are not judgement calls. None of them is ever the right answer, including
during an incident.

- **Do not disable any other protection.** Not `required_status_checks`, not
  `strict`, not `allow_force_pushes`, not `allow_deletions`. If a bypass seems to
  need one of these, the plan is wrong.
- **Do not force-push `main`.** Ever. `main` is the deployment source and its
  history is shared; rewriting it can strand a deployment mid-rollout and
  destroys the audit trail the post-incident review depends on.
- **Do not delete `main`.**
- **Do not leave `enforce_admins` disabled** past the end of the incident. The
  restore is part of the hotfix, not a follow-up task.
- **Do not bypass CI for an ordinary failed test.** A red `verify` on a normal PR
  means the change is not ready. The gate found something; that is the gate
  working. Fix it, or revert the change.
- **Do not bypass to skip a slow build**, to merge before a deadline, or because
  a check is "probably fine".

---

## Verification before a direct hotfix

A bypass removes the automation, not the requirement. Every gate `verify` would
have run must be run locally on the exact commit being merged, and the output
recorded in the incident note:

```bash
npm ci
npm run audit:policy      # no critical, nothing off the reviewed allowlist
npm run lint
npm run typecheck
npm run breeds:index:check
npm run breeds:facets:check
npm run search:check
npm run finder:check
npm run build             # must run BEFORE the tests
npm test                  # must report `skipped 0`
npm run generated:check
git diff --exit-code -- ':(exclude)public/search-index.json' ':(exclude)public/animal-finder-index.json'
```

The build must precede the tests. Three of the strongest guards read the real
build artifact and **skip** when `.next` is absent — they do not fail, they
vanish. That is how the first CI run on this repository reported success with
`pass 509, skipped 3`. If `npm test` does not say `skipped 0`, you have not run
the suite.

Then confirm the expected corpus shape is intact:

| Metric | Expected |
| --- | --- |
| Prerendered routes | 2,338 |
| Sitemap URLs | 2,332 |
| Search documents | 2,332 |
| Finder animals | 704 |
| Tests | 512, `skipped 0` |

If any of these moved and the hotfix did not intend it, stop.

---

## During the incident

1. Open an incident record (issue, or a dated note in `docs/incidents/`) **before
   touching protection**. It must contain:
   - what is broken in production, with the URL and observed behaviour;
   - why the normal PR path cannot deliver the fix, with evidence — a
     githubstatus.com entry, a failing run URL, a registry error;
   - who authorized the bypass, and when;
   - the full local verification output from the section above;
   - the commit SHA that will be merged.
2. Lift `enforce_admins` using the dedicated endpoint above.
3. Merge the hotfix through a pull request, so the diff is still reviewable and
   the merge is still recorded. A bypass removes the *blocking*, not the *record*.
4. **Restore `enforce_admins` immediately** — before writing the summary, before
   telling anyone it is fixed, before closing the laptop.
5. Confirm the restore actually applied:
   ```bash
   gh api repos/PetroTitan/faunahub-com/branches/main/protection \
     --jq '{checks: .required_status_checks.contexts, strict: .required_status_checks.strict, admins: .enforce_admins.enabled}'
   ```
   Expected: `{"checks":["verify"],"strict":true,"admins":true}`. Compare against
   [Protected baseline](#protected-baseline) field by field — a full `PUT` made by
   mistake will show up here as a missing field, not as an error.
6. Verify the production deployment reached `READY` and smoke-test the broken
   surface plus the table above.

---

## After the incident

Within one working day:

- **Open a follow-up PR** that goes through CI normally. If the hotfix was
  minimal, this is where it gets its tests, its comment explaining the cause, and
  anything the rush left out.
- **Audit what the bypass allowed through.** Run the full gate list against
  `main` and confirm it is green *with* `enforce_admins` back on. A hotfix that
  cannot pass CI afterwards is a second incident.
- **Record why CI could not run.** If the blocker was ours — a flaky gate, a
  network-dependent check that crept into the required path, a timeout too tight
  — fix that, and say so in the incident record. A bypass caused by our own CI
  design is a defect report.
- **Check the protection diff.** Compare the live configuration against the
  baseline table. Anything that differs was changed during the incident and needs
  explaining.

---

## Not a break-glass situation

For the avoidance of doubt, none of these justify touching protection:

| Situation | What to do instead |
| --- | --- |
| A test fails on your PR | Fix the code, or revert the change |
| `verify` is slow | Wait. It has a 20-minute timeout |
| A residual npm advisory appears | See `scripts/audit-policy.mjs`; add a reviewed entry, or upgrade |
| `generated:check` fails | Run the generators and commit the result |
| The registry-verification workflow is red | It is non-blocking by design and never gates a merge |
| A registry changed its page | Update the record *and* its `reviewedAt`, through a PR |
| You want to merge without review | Reviews are not required; nothing is blocking you but `verify` |

The weekly registry verification deserves its own note: it makes hundreds of
live requests to third-party registries and **cannot** be a merge gate, because
its result depends on those sites rather than on the diff. It is red sometimes.
That is expected, and it is never a reason to bypass anything.
