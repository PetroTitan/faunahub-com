# Breed data files

One breed per file. `dogs/labrador-retriever.ts` exports `const breed: Breed`.

## Why not one module per species

The foundation sprint kept all dog breeds in a single `dogs.ts`. At roughly 97
lines per breed that module would have reached **~29,000 lines by 300 breeds** —
a merge-conflict magnet where every data edit produced an unreviewable diff, and
where a single syntax error takes the whole corpus down with no indication of
which breed caused it.

One file per breed gives small diffs, near-zero conflict probability between
people working on different breeds, and a failure that names itself.

## The index is generated

`dogs/index.ts` and `cats/index.ts` are written by
`scripts/generate-breed-index.mjs` and must never be edited by hand.

```
npm run breeds:index         # regenerate
npm run breeds:index:check   # fail if stale
```

It runs in `prebuild`, so a build always reflects the directory.

A hand-maintained list is precisely how this repo once lost 62 animal profiles
from its sitemap while they built and rendered perfectly, so the index is
guarded three ways: `--check` fails on staleness; the generator refuses to write
when a filename disagrees with its record's slug, when a record sits in the
wrong species directory, or when an id or slug is duplicated; and
`tests/pet-intelligence-shards.test.ts` asserts the index and the directory
describe the same set — so a data file nothing imports is a test failure, not an
invisible orphan.

## Adding a breed

1. Create `dogs/<slug>.ts` (filename must equal the record's `slug`).
2. `id` must be `dog-<slug>` / `cat-<slug>`.
3. `npm run breeds:index`
4. `npm test`

Route generation, the sitemap, the search index and the Finders all derive from
the registry, so nothing else needs editing.
