# Trait methodology

What every filterable and comparable breed field means, what it does *not* mean,
and which fields FaunaHub refuses to structure at all.

Last reviewed: 2026-09-13.

---

## The three-level ordinal

Qualitative traits publish as exactly three levels:

```
lower  ·  moderate  ·  higher
```

Not five, not ten, and never a number.

### Why three

The AKC publishes a 1–5 score per trait per breed. Those scores are a real,
attributable editorial judgement by a breed authority — and they were **not
produced by measuring dogs**. Re-publishing "4 out of 5" hands a reader a number
that looks measured when nothing measured it.

The compression is deliberately lossy:

```
1, 2  →  lower
3     →  moderate
4, 5  →  higher
```

Three levels is roughly what the underlying evidence can carry, and it is what a
reader can act on. The difference between a 4 and a 5 on a scale with no
instrument behind it is not a difference anyone should choose a pet by.

### No number is stored

The numeric score is used **once**, at derivation, and is never written to a
breed record. `TraitValue` carries `value`, a prose `method`, and a `sourceId` —
there is no numeric field for a future component to render as "4/5".

Traceability is preserved without the number:
`scripts/verify-breed-registry.mjs` re-fetches the live registry and re-derives
the band using the same function the data was built with. The score lives for one
comparison inside that script and is never persisted.

Two tests enforce this — one that no breed record serialises a `score`/`rating`
field, one that no rendering component contains a star, a `/5`, or an `outOf`.

---

## The five structured axes

### Exercise needs

- **Metric** — relative routine physical and activity demand, as an authoritative
  breed source describes it.
- **Evidence** — AKC `energy_level`, banded.
- **Does NOT mean** — how athletic the breed is. Does not mean fitness, stamina,
  or capability. A breed with *lower* exercise needs is not a less capable
  animal; it is one whose routine demand is described as smaller.

### Grooming needs

- **Metric** — relative frequency of coat maintenance.
- **Evidence** — AKC `coat_grooming_frequency`, banded.
- **Does NOT mean** — that the breed is easy or hard overall. Grooming is one
  axis of care among many, and "lower grooming" says nothing about exercise,
  training, cost, or time.

### Shedding

- **Metric** — relative volume of hair shed.
- **Evidence** — AKC `shedding_level`, banded.
- **Does NOT mean** — an allergy signal. **No breed is hypoallergenic.**
  Allergens come from dander and saliva as well as hair, so a low-shedding breed
  does not reliably reduce exposure. Every page that raises allergies must say
  this; a test enforces it.

### Trainability

- **Metric** — how readily the breed is *generally described* as responding to
  structured training and learning.
- **Evidence** — AKC `trainability_level`, banded.
- **Does NOT mean** — intelligence. This is the most commonly abused breed
  statistic on the web. A breed described as less "trainable" is frequently one
  described as independent-minded, which is a different property from cognitive
  ability and is not a deficiency.

### Vocality

- **Metric** — relative frequency of vocalising.
- **Evidence** — AKC `barking_level`, banded.
- **Does NOT mean** — a behaviour problem, a training failure, or a nuisance
  judgement. It is a description, and it is included because it genuinely
  affects whether a household (an apartment, a shared wall) is a good fit.

---

## Axes deliberately NOT structured

These exist in the AKC's published data. FaunaHub reads them and **does not
import them**. They are listed in `AKC_TRAITS_EXCLUDED` with reasons, so the
refusal is reviewable and a future session adding "one more useful filter" has to
read why first.

| AKC axis | Why not |
|---|---|
| `good_with_young_children` | A structured child-suitability value is a **safety claim about an individual animal** that no breed-level source can support. As a filter it becomes a promise. Prose only. |
| `good_with_other_dogs` | Same: presented as a filter it promises an interaction outcome. |
| `openness_to_strangers` | Reads as a temperament guarantee, and is shaped far more by socialisation than by breed. |
| `watchdogprotective_nature` | Filtering breeds by protectiveness invites selection *for* guarding behaviour, which FaunaHub does not advise on. |
| `playfulness_level` | No reproducible metric could be defined. |
| `affectionate_with_family` | Affection is not a measurable property. |
| `adaptability_level` | Conflates several unrelated things; no coherent metric. |
| `mental_stimulation_needs` | Overlaps exercise needs with no clean boundary; would double-count the same evidence. |
| `drooling_level` | Not a decision axis FaunaHub surfaces. |

The exclusion is structural as well as editorial: `BreedTraits` has no field for
any of them, so a Finder cannot grow a "good with children" filter by adding a
value — it would require changing the type. A test asserts that no breed record
carries a trait key matching `child|kid|stranger|protective|guard|aggress`.

Children, other pets, apartments and first-time ownership are discussed on breed
pages — as **prose**, in `editorial.householdContext`, phrased per the
[decision-language policy](./decision-language-policy.md).

---

## Measurements

Height in **centimetres**, weight in **kilograms**, one unit each.

Registry standards do not publish tidy pairs of numbers. The AKC's own strings
for the twelve pilot dogs include all of these shapes:

```
"22.5-24.5 inches (male), 21.5-23.5 inches (female)"      split by SEX
"13 inches & under, 13-15 inches"                          split by VARIETY
"16-32 pounds (standard), 11 pounds & under (miniature)"   variety + half-open
"under 28 pounds"                                          half-open, whole breed
"not exceeding 6 pounds"                                   half-open, other wording
"over 15 inches (standard)"                                half-open upward
```

A naive `maleHeightCm` / `femaleHeightCm` model would have silently filed a
Beagle's 13-inch **variety** limit as a **male** measurement. So every
measurement says what it describes:

- `basis` — `{kind:"sex"}`, `{kind:"variety"}`, or `{kind:"breed"}`
- `bound` — `closed`, `at-most`, or `at-least`, so a half-open standard is never
  completed with an invented endpoint
- `statedAs` — the registry's own wording, kept verbatim and rendered beside the
  converted figure, because conversion rounds and the original is what a reader
  should be able to check

The parser **rejects rather than guesses**. A single bare figure ("13 inches") is
genuinely ambiguous — a target, a ceiling, a typical — and is refused rather than
assumed. All 13 pilot AKC strings parsed with **zero rejections**; a test
asserts the refusal still happens for the ambiguous case.

### Size class

Derived, never asserted. Banded from the **upper end of published weight**:

```
≤ 5.5 kg   toy
≤ 11 kg    small
≤ 25 kg    medium
≤ 45 kg    large
> 45 kg    giant
```

Weight, not height: height alone files a Dachshund as a toy breed, because the
standard measures a long dog at the shoulder — true, and useless.

The bands will not always match colloquial usage. A French Bulldog's published
ceiling of *"under 28 pounds"* lands it at the bottom of `medium` where many
people would say "small". That is a property of banding a continuous measure, and
the page always shows the measurements themselves next to the band, so a reader
is never left with only the label.

A test asserts `sizeClass` always equals `deriveSizeClass(weights)` — it cannot
be set by hand — and that a breed with no published weight has **no** size class.

### Lifespan

Present for dogs (the AKC publishes a life-expectancy range per breed) and
**absent for cats** (CFA does not). It is a breed-level published figure and
never a prediction about an individual animal; the page says so explicitly
wherever it renders.

---

## Cats have no numbers, and that is a finding

Every one of the eight CFA standards behind the pilot cat breeds was fetched and
searched for numeric size. **None publishes a weight or a height.** The Maine
Coon standard says only:

> Size medium to large

CFA also publishes no trait scale of the kind the AKC does.

So cat records carry **no measurements, no size class, and no ordinal traits**.
This is not an unfinished import — it is what the authoritative source says. The
consequence is visible in the product: the Cat Breed Finder offers exactly one
filter (coat length), and says why on the page.

The alternative was to estimate cat weights from secondary sources and ship a
size filter that looked identical to the dog one. That would have been the most
damaging thing this sprint could have built: a filter whose values no registry
stands behind, presented exactly like filters that are sourced.

---

## Coat

`short | medium | long | hairless | variable`

`hairless` exists because cats need it — the Sphynx is a CFA Championship breed —
and no dog in the pilot uses it. Forcing a cat into a dog-shaped enum is how a
hairless breed ends up filed as "short".

`statedAs` keeps the standard's wording, because banding loses real information.
The CFA Ragdoll standard says *"moderately long"*; the Sphynx standard says the
breed is *"not actually completely hairless"*. A reader choosing on coat deserves
the sentence, not only the band.
