# Registry coverage — mass expansion

What was enumerated, how, what was usable, and what was deliberately left out.

Measured 2026-09-13. Every count here came from an actual retrieval; none is
recalled from the foundation sprint or from general knowledge.

---

## Summary

| Registry | Species | Enumeration method | Discovered | Usable | Published | Status |
|---|---|---|---|---|---|---|
| **AKC** | Dog | `wp-json/json/v2/breedlist.json` | 297 | 294 | **219** | Full |
| **FCI** | Dog | per-breed URL probe | 12 | 12 | 12 (pilot only) | Partial |
| **CFA** | Cat | `breed-sitemap.xml` | 45 | 45 | **45** | Full |
| **FIFe** | Cat | `/cats/breeds/` page | 50 | 48 | 10 new + 25 shared | Full |
| **TICA** | Cat | — | — | — | 0 | **HTTP 403** |
| **GCCF** | Cat | — | — | — | 0 | **HTTP 403** |
| **The Kennel Club** | Dog | — | — | — | 0 | Not pursued |

---

## AKC — the endpoint that solved the enumeration problem

The foundation established that AKC's HTML group listings are unusable: all
seven return **exactly 31 links each**, because they are paginated and ~14 of
those links are shared navigation. Seven groups returning an identical count is
the tell.

The breed pages themselves reference `wp-json/json/v2/breedlist.json`. It returns
**297 breeds** with url, id and display name — the complete enumeration.

Each breed page then carries a `data-js-props` blob with group, recognition
year, breed code, nicknames, origin, height, weight, life expectancy, coat, and a
1–5 score on every trait axis.

### Retrieval

294 of 297 pages yielded a payload.

- **3 failures**, all genuine: `keeshond`, `shetland-sheepdog` and
  `bohemian-shepherd` return `breed_data` as an **empty list** from AKC itself.
  Not a parsing problem, not fixable here, and recorded rather than worked
  around. Keeshond and Shetland Sheepdog are notable absences from the corpus
  for exactly this reason.
- **5 near-misses recovered**: the data key is not always the URL slug —
  `/dog-breeds/st-bernard/` keys its record as `saint-bernard`. The fetcher now
  falls back to the page's single record where the slug does not match.

### What was published, and what was not

| Tier | Count | Published | Recognition status recorded |
|---|---|---|---|
| Seven competition groups | 204 | yes | `recognized` |
| Miscellaneous Class | 13 | yes | `provisional` |
| **Foundation Stock Service** | **74** | **no — deferred** | would be `recorded` |

FSS is a **record-keeping service, not recognition**. "Recorded" and
"recognised" are different claims, and publishing 74 breeds as AKC-recognised
would overstate what the AKC says about them. `BreedRecognitionStatus` gained a
`recorded` tier so they can be added later without that overstatement; their data
quality is good (93–97% on measurements and traits), so this is a scope decision
rather than a data one.

### Data quality of what shipped

| | Coverage |
|---|---|
| Registry group | 219/219 |
| All five trait bands | 219/219 |
| Life expectancy | 219/219 |
| Coat length | 218/219 |
| Height | 212/219 |
| Weight | 210/219 |

The missing measurements are breeds whose standard states something relational —
"slightly smaller (female)", "Proportionate to height" — which the parser refuses
rather than guessing at. See [trait-methodology.md](./trait-methodology.md).

### A trap worth recording

**`akc_code` is not unique.** `japanese-spitz`/`taiwan-dog` and
`nenets-laika`/`saarloos-wolfhond` each share a code with an unrelated breed, and
the three Poodles share 701 legitimately. It is stored but never used as a key.

---

## FCI — enumerable only one breed at a time

FCI breed pages are readable and carry group, section, breed number, country of
origin and recognition status in stable ASP.NET span ids. The **standards are
also downloadable as PDFs**.

What FCI does not offer is an enumeration path. There is no index endpoint, the
nomenclature landing page lists only the ~20 provisionally-accepted breeds, and
group pages are not reachable by a predictable URL. A breed page's URL embeds its
FCI number (`LABRADOR-RETRIEVER-122.html`), which cannot be guessed.

Per-breed probing works and is self-validating — a wrong number returns a
133-byte error, negative-tested — but it needs a number per breed.

**So FCI recognition is recorded for the 12 pilot dogs only.** The other 207 dogs
carry AKC recognition alone. Absence of an FCI record means *not assessed*, never
*not recognised*, and a test enforces that distinction.

This is the single largest piece of deferred work in the dog corpus.

---

## CFA — sitemap, not listing page

CFA's `/breeds/` page yields only 12 breeds, all A–B, for the same lazy-loading
reason as AKC's group pages. Its **XML sitemap yields 45** and is the enumeration
path that works. (The foundation's URL now 301s to `/breed-sitemap.xml`.)

All 45 were retrieved. Every one publishes an explicit **`Coat Length:`** field —
Longhair, Shorthair, or "Longhair and Shorthair" — which is the structured value
the foundation should have used instead of inferring coat from prose.

| | Coverage |
|---|---|
| Coat length | 45/45 |
| A championship year stated | 31/45 |
| An adult weight stated | 16/45 |

CFA's written **standards** publish no numeric size at all; its **profile pages**
sometimes do. Conflating the two produced a false published claim in the
foundation, corrected there and not repeated here.

---

## FIFe — the 404 that was a redirect

The foundation recorded fifeweb.org as returning 404 and excluded it. That was
the **pre-redirect path**: `/breeds/` 301s to `/cats/breeds/`, which serves **50
fully recognised breeds** with official three-letter codes and category numbers
(1–4) in structured headings.

A registry recorded as inaccessible was accessible all along, behind one
redirect. The lesson is in the registries module: follow redirects before
recording a registry as unreachable.

- **2 excluded**: `HCL` House Cat Longhair and `HCS` House Cat Shorthair are
  FIFe's **non-pedigree show class**, not breeds.
- **25** FIFe breeds correspond to a CFA breed and contribute a second
  recognition record.
- **10** are FIFe-only and are new FaunaHub records: British Longhair, Cymric,
  European Shorthair, German Rex, Kurilian Bobtail, Neva Masquerade, Peterbald,
  Snowshoe, Sokoke, Thai.

---

## TICA and GCCF — still refused

Both returned **HTTP 403** to automated requests again on 2026-09-13, as they did
in the foundation. Retested rather than assumed.

**No TICA or GCCF recognition is asserted for any breed.** A test enforces that
no breed cites a registry marked unreadable. Their absence from a breed record
says nothing about their actual position.

---

## Canonicalisation decisions

The two cat registries disagree about what counts as one breed, which is most of
the work in the cat corpus.

| Case | Decision |
|---|---|
| FIFe splits American Curl, LaPerm, Selkirk Rex, Oriental into Longhair + Shorthair breeds; CFA has one | **One FaunaHub record**, following CFA, with the split recorded in the recognition entry and a `scopeNote` |
| FIFe splits Kurilean Bobtail; CFA does not recognise it | One record — no single-breed treatment to follow, and two pages for a breed one registry recognises is not worth it |
| FIFe "Sacred Birman" | Alias of CFA's Birman |
| FIFe "House Cat Longhair/Shorthair" | **Excluded** — a show class, not a breed |
| AKC publishes 3 Poodles (Standard / Miniature / Toy), sharing code 701, Toy in a different group | **Three records**, each with a `scopeNote` naming the others |
| AKC publishes Standard + Toy Manchester Terrier | Two records, cross-referenced |

Never two FaunaHub pages for one canonical breed merely because registries name
it differently.
