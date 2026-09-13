# Mass expansion — baseline

State of the Pet Intelligence layer at the start of this sprint, measured rather
than recalled. Recorded so every later number in
[mass-expansion-registry-coverage.md](./mass-expansion-registry-coverage.md) and
in the sprint report has something to be a delta from.

Measured 2026-09-13 against `origin/main` = `433933f`, the merge commit for the
foundation branch (`74f8652`). The foundation was confirmed merged before any
work began — building a second large dependent branch on an unmerged foundation
was the one condition that would have stopped this sprint.

## Corpus

| | Baseline |
|---|---|
| Dog breeds | 12 |
| Cat breeds | 8 |
| **Total breeds** | **20** |
| Breed sources | 40 |
| Breed images | 20 |
| Breeds with authored prose | 20 (all) |
| Breed comparisons | 0 |
| Collections / rankings | 0 |

## Site

| | Baseline |
|---|---|
| Routes built | 1770 |
| Sitemap URLs | 1761 |
| Search documents | 1753 → 1761 (20 of type `breed`) |
| Animal Finder documents | 704 |
| Tests | 456 |
| Shared JS | 103 kB |
| Breed page first load | 113 kB |
| Breed Finder first load | 114 kB |

## Facet coverage

| Species | Primary facets | Withheld |
|---|---|---|
| Dog | 8 (all at 100%) | 0 |
| Cat | 1 (coat length) | 7 |

## Data architecture

Both species in ONE module each: `breeds/dogs.ts` (1178 lines, 12 breeds) and
`breeds/cats.ts` (8 breeds). Roughly **97 lines per breed**.

## The two scale blockers this sprint had to remove first

The foundation's own report named both, and neither was theoretical:

1. **Data architecture.** At ~97 lines per breed, `dogs.ts` reaches roughly
   **29,000 lines by 300 breeds** — every data edit a merge-conflict candidate,
   every diff unreviewable, and one syntax error taking the whole corpus down
   without naming the breed responsible.

2. **Rendering.** The hub and the Finder rendered every breed as an image card.
   At 300 breeds that is **300 `next/image` elements in the initial HTML** and
   300 links in the accessibility tree.

Both were fixed before any bulk data landed. See
[data-architecture.md](./data-architecture.md).
