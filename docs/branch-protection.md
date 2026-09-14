# Branch protection on `main`

What is enforced, and why each setting is there. Read this before changing any
of it: several of these exist because something went wrong once.

## Current rules

| Setting | Value | Why |
| --- | --- | --- |
| Required status check | `verify` | The single CI job. It is the **display name** of the job, not its id — GitHub names the check after the former, and a rename silently detaches the requirement. |
| Strict (branch up to date) | on | A green run against a stale base is not evidence about the merge result. |
| Enforce for admins | on | A rule that the person most able to break things can skip is a suggestion. |
| Require conversation resolution | **on** | See below. |
| Required approving reviews | **off** | Deliberate. This is a single-maintainer repository; requiring an approval nobody can give would mean routinely bypassing protection, which teaches exactly the habit the rest of this table exists to prevent. |
| Force pushes | blocked | History on `main` is evidence. |
| Deletions | blocked | — |
| Linear history | off | Merge commits carry the PR context. |
| Signed commits | off | Not adopted; GitHub-authored merge commits are verified anyway. |

## Why conversation resolution

An automated security review found a command-injection primitive in a workflow:
a `workflow_dispatch` input interpolated straight into a `run:` command, which
GitHub substitutes into the script text before bash parses it. It was fixed —
but nothing in the merge gate would have stopped the pull request from being
merged with that finding sitting unread in an open thread.

`verify` answers "do the tests pass". It cannot answer "did anyone read the
comment". Requiring conversation resolution makes an unresolved review thread
block the merge button, so a finding has to be answered — by fixing it, or by
replying and resolving it deliberately — rather than merely scrolled past.

It costs nothing when there are no comments: a pull request with no threads is
as mergeable as it was before.

## What it is not

It is not a review requirement. Nobody has to approve anything, and a thread can
be resolved by the person who opened it. The gate is only that somebody looked
and said so.
