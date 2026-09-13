# Breed data architecture at scale

How the corpus is stored and rendered so it survives several hundred breeds.
Written after the two blockers the foundation identified were removed.

Last reviewed: 2026-09-13.

---

## Storage: one file per breed

```
src/lib/pet-intelligence/breeds/
  dogs/
    labrador-retriever.ts      export const breed: Breed
    ...219 files
    index.ts                   GENERATED
  cats/
    maine-coon.ts
    ...55 files
    index.ts                   GENERATED
```

### Why not one module per species

The foundation kept every dog in a single `dogs.ts`: 1178 lines for 12 breeds,
roughly **97 lines per breed**. At 300 breeds that is about **29,000 lines** in
one module — every data edit a merge-conflict candidate, every diff
unreviewable, and one syntax error taking the whole corpus down with no
indication of which breed caused it.

One file per breed gives small diffs, near-zero conflict probability between
people working on different breeds, and a failure that names itself.

### Why the index is generated

Bundlers cannot enumerate a directory at build time, so an index must be written
out. That re-introduces exactly the hazard this repo has already been bitten by:
a list that silently drifts from the thing it describes, which is how 62 animal
profiles once disappeared from the sitemap while building and rendering
perfectly.

So the index is generated, committed, regenerated in `prebuild`, and guarded
three ways — **each negative-tested, not assumed**:

| Guard | Proved by |
|---|---|
| `breeds:index:check` fails on staleness | adding a file made it fail |
| the generator refuses a duplicate id/slug, a filename that disagrees with its record, or a record in the wrong species directory | a duplicate slug produced 3 problems and exit 1 |
| `tests/pet-intelligence-shards.test.ts` asserts index and directory match **in both directions** | an orphan file failed 2 tests |

The generator reads the files as **text** rather than importing them, so a
record with a syntax error is named here instead of exploding downstream.

### A flaw negative-testing found

The first version wrote each species' index inside the validation loop and
reported problems afterwards. The duplicate-slug test exposed the consequence:
the run failed loudly with exit 1 **and still left a corrupt index on disk**
naming a file that was about to be deleted.

Validation now completes for the whole corpus before anything is written. A
generator that half-applies a rejected change is worse than one that refuses.

### Adding a breed

1. Create `dogs/<slug>.ts` — the filename must equal the record's `slug`.
2. `id` must be `dog-<slug>` / `cat-<slug>`.
3. `npm run breeds:index`
4. `npm test`

Routes, sitemap, search index, Finders, collections and comparisons all derive
from the registry, so nothing else needs editing.

---

## Rendering: bounded cards, unbounded discovery

At 300 breeds the hub and the Finder would each have rendered 300 image cards in
the initial HTML, with 300 links in the accessibility tree.

The fix separates **display** from **discovery**:

| Surface | Cards rendered | How everything stays reachable |
|---|---|---|
| Breed Center | 24 | complete A–Z directory below, plain `<a href>`, no images, no JS |
| Collection page | 12 | same directory, scoped to that collection's members |
| Breed Finder | 24, grows on request | links out to the A–Z directory |

**Bounding the cards must not bound discovery.** If the only route to breed 250
were a "Load more" button, that breed would be reachable by a crawler only
through the sitemap and by a keyboard user only after 200 tab stops. The A–Z
directory is roughly 12 KB of markup at 300 breeds — about the cost of four card
images — and it is what lets the card grid stay small without hiding anything.

The Finder's window resets whenever a filter or the search box changes.
Otherwise a reader who filters after scrolling keeps looking at a window sized
for the previous result set.

### No pagination URLs

There are no `?page=2` routes and no paginated index pages. One canonical Breed
Center, every breed in the sitemap, every breed a crawlable link, and result
windowing on the client. Nothing new is added to the index that a reader would
not want to land on.
