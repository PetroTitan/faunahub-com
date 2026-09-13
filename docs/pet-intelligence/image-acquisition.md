# Breed image acquisition at scale

How hero images were sourced for a 274-breed corpus, and why roughly a third of
what passed every automated filter was still rejected on sight.

Last reviewed: 2026-09-13.

---

## Pipeline

1. **Enumerate** a Wikimedia Commons category whose name matches the breed
   exactly (`Category:Akita`, not a keyword search). 193 of 254 breeds without
   an image had one.
2. **Filter automatically** on: licence (CC0, PD, CC BY, CC BY-SA only — never
   NC, ND, GFDL-only, or unclear), no `Restrictions` field, ≥1000×700, JPEG or
   PNG, aspect ratio between 0.6 and 2.2, and a title that does not match a
   rejection pattern (statue, logo, painting, puppies, group, diagram…).
3. **Rank** candidates, preferring a title containing the breed name.
4. **Download, resize to 1500 px wide, convert to WebP.**
5. **Look at every single one.**

## Step 5 is not optional

An exact Commons category is the strongest automated identity signal available,
and it is still not identity proof. Of the candidates that passed every filter
above, **roughly a third failed visual inspection.**

Three of those failures are worth recording because no metadata check could have
caught them:

| Breed | What the filter returned |
|---|---|
| `bolognese` | **a plate of pasta** |
| `maltese` | **a plate of food** |
| `newfoundland` | **a sunset over the province** |

Breed names collide with foods and places, and a Commons category inherits the
collision. Two more were an **oil painting** and a **photograph of a photograph
in a craft frame**; one was a **commemorative blue plaque** with no animal at
all; one was a **person in a jacket** with no dog in frame.

The remainder failed on composition or identity rather than subject:

- the animal occupying ~2% of a landscape (`airedale-terrier`, `sloughi`,
  `rottweiler` — a snowy road)
- packs and show grounds where no single animal is the subject
  (`english-foxhound`, `basset-fauve-de-bretagne`, `sussex-spaniel`)
- two different breeds in frame, so identity is ambiguous
  (`tibetan-mastiff` — one of the two dogs is clearly a Golden Retriever;
  `cavalier-king-charles-spaniel`)
- costume or clothing obscuring morphology (`italian-greyhound`,
  `cardigan-welsh-corgi`)
- **identity doubt**: `komondor` returned a white dog with no sign of the
  breed's defining corded coat
- a Pembroke Welsh Corgi in a mobility cart — a real dog, but not a
  representative canonical image of the breed

Every rejection is recorded with its reason in the acquisition log.

## The rule this produces

**A missing image is better than a wrong one.** A breed with no accepted
candidate renders a clean monogram, which tells a reader nothing false. A
plate of pasta on the Bolognese page would.

Filename is not identity proof. Category is not identity proof. The only thing
that settles it is looking.

## What is recorded per image

`sourceName · sourceUrl · author · license · licenseUrl · attribution · alt ·
caption · width · height · commercialUseAllowed · modificationsAllowed ·
attributionRequired · verifiedAt · riskNotes`

`riskNotes` records the identity evidence, not just the licence — a record that
says only "CC BY" has documented the licence and not the claim. Tests assert
every image is cleared for commercial use, carries a verification date, and says
something about breed identity; and that its recorded dimensions match the bytes
on disk, since a hero swapped without updating them causes layout shift and
nothing else would catch it.
