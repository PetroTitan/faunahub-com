# Breed recognition methodology

How FaunaHub decides what a breed *is*, which organisations it cites, and what
it refuses to claim.

Last reviewed: 2026-09-13.

---

## The claim FaunaHub does not make

FaunaHub never says, and must never say:

> "the complete list of all dog breeds"

There is no such list. Different organisations recognise different breeds, group
them differently, name them differently, and disagree about where they came
from. A single global breed count would be a claim no source supports.

What FaunaHub says instead:

> FaunaHub covers breeds recognised by the registries named below, with each
> registry's recognition recorded separately.

Every breed page shows its recognition per registry, linked to that registry's
own page. A reader can see *who* recognises a breed rather than being told that
"it is recognised".

---

## Registries cited

| Registry | Species | Scope | Readable? |
|---|---|---|---|
| [FCI](https://www.fci.be/en/Nomenclature/) | Dog | International federation of national canine organisations; the reference for member countries across Europe, South America, Asia. Not the authority in the US or UK. | Yes |
| [AKC](https://www.akc.org/dog-breeds/) | Dog | The principal purebred dog registry of the United States. | Yes |
| [CFA](https://cfa.org/breeds/) | Cat | Pedigree cat registry, US-headquartered, operating internationally. | Yes |
| [TICA](https://tica.org/breeds/) | Cat | Large international cat registry, generally a wider breed list than CFA. | **No — 403** |

### Access reality, control-tested 2026-09-13

All requests used the same desktop user agent.

```
fci.be                 200   breed pages and standard PDFs both readable
akc.org                200   breed pages carry a structured props blob
cfa.org                200   breed pages + an XML sitemap that enumerates them
tica.org               403   refuses automated requests
gccfcats.org           403   refuses automated requests
thekennelclub.org.uk   301   redirects; not pursued this sprint
```

**No TICA recognition is asserted anywhere in the registry.** TICA is listed in
`src/lib/pet-intelligence/registries.ts` with `machineReadable: false` and an
access note, because recording the blocked attempt is what stops a future
session assuming TICA was never considered — or, worse, filling in TICA
recognition from a secondary source.

A test (`tests/pet-intelligence-registry.test.ts`) enforces this: no breed may
cite a registry marked unreadable.

### Two enumeration traps

Both were found by control-testing rather than by reading a page and believing
it. Both would have produced confidently wrong published counts.

1. **AKC group listing pages are paginated.** `/dog-breeds/sporting/`,
   `/dog-breeds/hound/` and the other five each return *exactly 31* unique breed
   links — because roughly 14 of those are shared navigation and the rest is one
   page of a lazy-loaded list. Seven different groups returning an identical
   count is the tell. These pages cannot be used to enumerate a group.
2. **CFA's `/breeds/` page yields 12 breeds, all A–B**, for the same reason. Its
   **XML sitemap** (`wp-sitemap-posts-breed-1.xml`) yields 45 and is the
   enumeration path that works.

**Rule for the expansion sprint: enumerate a registry from its XML sitemap or a
per-breed URL probe, never from an HTML listing page.**

---

## Canonical naming

FaunaHub's slug is its *own* identifier and is not a registry's slug.

Several published slugs predate this registry and differ from the registry
spelling. They stay as they are, because they are indexed URLs and changing them
would break links for no editorial gain:

| FaunaHub slug | FaunaHub name | Registry name |
|---|---|---|
| `german-shepherd` | German Shepherd | AKC: *German Shepherd Dog* |
| `poodle` | Poodle | AKC: *Poodle (Standard)* |
| `persian-cat` | Persian | CFA: *Persian* |
| `bengal-cat` | Bengal | CFA: *Bengal* |

Where the registry's name differs, it is recorded in `canonicalCommonName`. The
registry's own URL travels in `BreedRecognition.registryUrl`. Nothing is
silently renamed in either direction.

### Aliases

`aliases` holds only names that appear in a cited source — the AKC's own
nickname field (`Lab`, `GSD`, `Frenchie`, `Chi`, `Dachsie`, `Husky`), or a
registry's alternative name (`Alsatian (U.K.)`). **Never** a search term someone
might plausibly type. A test asserts that every alias in the search index traces
to a registry record.

CFA publishes no nickname field, so no cat breed carries an alias. That absence
is correct, not an omission.

---

## Recognition status

Recognition is not a boolean, because registries run tiers:

- **AKC** — seven competition groups, plus two tiers *below* full recognition
  that are listed alongside them and are easy to mistake for groups: the
  **Miscellaneous Class** and the **Foundation Stock Service**. A breed in FSS
  is *recorded*, not recognised.
- **FCI** — breeds are accepted **provisionally** before being *"Recognised on a
  definitive basis"*. All twelve pilot dogs are definitive.
- **CFA** — Championship is the full tier, with Miscellaneous and Provisional
  classes beneath it. All eight pilot cats are Championship.

`BreedRecognitionStatus` is `recognized | provisional | experimental |
not-recognized`. Flattening these to yes/no would publish a stronger claim than
the registry makes.

### Absence is not a negative

**A missing `BreedRecognition` entry means FaunaHub has not assessed that
registry for that breed. It does not mean the registry rejects the breed.**

Only an explicit `status: "not-recognized"` says that, and it needs its own
source like any other claim. This distinction is load-bearing: without it, the
absence of a TICA record would read as "TICA rejects this breed", which would be
a fabricated claim about a real organisation.

---

## Registries disagree, and FaunaHub shows both

This turned out to be the single most common structured fact in the pilot.
**Nine of the twelve dog breeds have registries that record different origins.**

| Breed | AKC records | FCI records |
|---|---|---|
| Labrador Retriever | Canada | Great Britain |
| Poodle | Germany | **France** |
| French Bulldog | England | **France** |
| Siberian Husky | Siberia | United States of America |
| Golden Retriever | Scotland | Great Britain |
| Beagle | England | Great Britain |
| Border Collie | England/Scotland | Great Britain |
| Chihuahua | Mexican State of Chihuahua | Mexico |
| Shih Tzu | China | Tibet (China) |

Some are granularity (Scotland vs Great Britain). Two — the **Poodle** and the
**French Bulldog** — are flat contradictions between two authorities.

FaunaHub records both countries and an `originNote` spelling out the
disagreement. It does not adjudicate. A test enforces that any breed listing more
than one origin country carries a note explaining why.

The grouping systems disagree too, and are likewise kept verbatim per registry:
the French Bulldog is AKC **Non-Sporting Group** and FCI **Group 9 — Companion
and Toy Dogs**; the Poodle is the same. `registryGroup` is never translated from
one registry's vocabulary into another's.

---

## Edge cases and how they are handled

| Case | Handling |
|---|---|
| **Varieties** (Poodle Standard/Miniature/Toy; Dachshund standard/miniature; Beagle 13"/15") | Measurements carry a `variety` basis and the standard's own wording. FaunaHub's `poodle` record is explicitly the Standard variety (`canonicalCommonName: "Poodle (Standard)"`). |
| **Coat divisions** (CFA Bengal has Shorthair *and* Longhair divisions) | `coatLength: "variable"`, with the standard quoted: *"Bengals can be either shorthaired or longhaired."* |
| **Landraces** | Not in the pilot. A landrace is not a registry breed; if added it must carry an explicit non-registry source and no recognition record. |
| **Designer crosses** | Not published. No registry standard exists, so no structured value could be sourced. |
| **Extinct / experimental / provisional** | Expressible via `BreedRecognitionStatus`. None in the pilot. |

---

## Source model

Every structured value is traceable to a `BreedSource` with:

`id · title · organization · url · sourceType · accessedAt · scope`

`accessedAt` is **the date the URL was actually retrieved and read**. All 40
pilot sources were fetched in one pass on 2026-09-13. It is never back-filled and
never copied from a sibling record: an access date that was not an access is a
fabricated provenance claim.

`sourceType` is one of `registry-standard`, `registry-overview`,
`institutional`, `research`, `historical`. No SEO aggregator, breed-listing site
or content farm is used as a foundational breed source anywhere in the registry.

---

## Re-verification

```
npm run breeds:verify                        # re-check every breed against its live sources
npm run breeds:verify -- --slug labrador-retriever
```

`scripts/verify-breed-registry.mjs` re-fetches AKC, FCI and CFA and compares
group, breed code, height and weight strings, life expectancy, coat, recognition
year and all five trait bands against what is stored.

It makes network requests and is **deliberately not part of `npm run build` or
`npm test`** — a build that fails because a registry's site is briefly down is
worse than one that ships slightly stale trait bands. Run it before a breed
expansion and whenever a value is questioned.

A disagreement it reports is not automatically an error: a registry may have
revised its standard, in which case the fix is to update the record *and* its
`reviewedAt`. It *is* an error if the registry never said what the record claims.
