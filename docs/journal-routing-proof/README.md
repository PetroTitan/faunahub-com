# Journal routing proof — sprint record

**Outcome after three attempts: still blocked on Vercel project-creation
permission. Architecture unchanged and still sound; the experiment could not be
run.** `go-no-go.md` carries the attempt history and the current position.

| Document | Contents |
| --- | --- |
| [`baseline.md`](baseline.md) | State before the attempt, including the tooling that decided the outcome |
| [`results.md`](results.md) | Phase-by-phase: what was proven, what was blocked, and what was deliberately not done to work around the block |
| [`existing-project-proof.md`](existing-project-proof.md) | Attempt 3, using `PetroTitan/faunahub-journal`: what exists, what does not, and how each was verified |
| [`go-no-go.md`](go-no-go.md) | The eleven questions, answered or explicitly marked unknown |
| [`next-steps.md`](next-steps.md) | How to unblock, and the exact checks to run once routing is live |

The proof app itself is at [`proofs/journal-routing/`](../../proofs/journal-routing/) —
built, locally verified, and inert with respect to the FaunaHub build.

Production was not modified. `/journal` and `/__journal-proof` both return 404.
