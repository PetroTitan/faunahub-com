# Journal routing proof — sprint record

**Outcome: blocked on Vercel project-creation permission. Architecture unchanged
and still sound; the experiment simply could not run.**

| Document | Contents |
| --- | --- |
| [`baseline.md`](baseline.md) | State before the attempt, including the tooling that decided the outcome |
| [`results.md`](results.md) | Phase-by-phase: what was proven, what was blocked, and what was deliberately not done to work around the block |
| [`go-no-go.md`](go-no-go.md) | The eleven questions, answered or explicitly marked unknown |
| [`next-steps.md`](next-steps.md) | How to unblock, and the exact checks to run once routing is live |

The proof app itself is at [`proofs/journal-routing/`](../../proofs/journal-routing/) —
built, locally verified, and inert with respect to the FaunaHub build.

Production was not modified. `/journal` and `/__journal-proof` both return 404.
