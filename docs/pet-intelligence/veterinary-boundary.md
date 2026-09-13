# Veterinary boundary

What breed pages may say about health, and what they must never say.

Last reviewed: 2026-09-13.

---

## Why this is stricter than the wildlife side

Pet content creates far more medical temptation than wildlife content. A reader
on a Sphynx page has an actual cat and an actual question, and the most helpful
thing FaunaHub could *appear* to do is answer it. That is exactly the thing it
must not do.

FaunaHub is not a clinical source and has no relationship with the animal.

---

## Permitted

- General breed health context, where an authoritative source supports it.
- The **existence** of screening practice — that responsible breeders typically
  screen for relevant conditions.
- The importance of veterinary care, and routing the reader to it.
- Care considerations that follow from a *physical* breed characteristic, framed
  as something to raise with a veterinarian: a short-muzzled breed and heat; a
  hairless breed and warmth; a giant breed and growth.
- A registry's **published life-expectancy range**, explicitly labelled as a
  breed-level published figure and not a prediction about an individual animal.

## Prohibited

- Diagnosis, or naming a condition as something the breed *has*
- Individualised risk assessment
- Treatment, prognosis, dosage, medication
- Emergency handling instructions
- Breeding-health instructions
- Medical product recommendations
- Health-risk **scoring** of any kind
- "Healthiest dog breeds" as a ranking — see [ranking-policy.md](./ranking-policy.md)

### The specific trap found in this sprint

The CFA Sphynx page names specific conditions associated with the breed. That
text was read during acquisition and **deliberately not imported**. A registry
publishing a condition list does not make FaunaHub an appropriate place to
republish it: a breed page listing conditions produces exactly the
"my cat is this breed, so it has this" reading the boundary exists to prevent.

---

## Required on every breed page

The `health` section must route the reader to a licensed veterinarian.

This is enforced, and the enforcement **found a real defect**: five of the twenty
migrated breed pages — Poodle, Border Collie, Maine Coon, British Shorthair,
Ragdoll — had health sections that discussed screening and conditions in general
terms and then simply stopped, never naming a veterinarian. The inconsistency
came from the hand-written pages and had been live. All five were fixed.

That is the argument for enforcing editorial rules as corpus properties rather
than as review checklists: a checklist protects the pages that existed when it
was written.

---

## Enforcement

`tests/pet-intelligence-safety.test.ts`:

- no instructional medical language (`administer`, `dosage`, `5 mg`,
  `course of antibiotics`, `apply cream to`, `home remedy`, …)
- no condition presented as a breed diagnosis (`suffers from`, `prone to hip
  dysplasia`, `will develop`, `commonly develops`, …)
- every breed's `health` section mentions a veterinarian

The detectors target the **imperative and dosage forms**, not the word "health" —
a page must be able to say "discuss preventive care with a veterinarian", which
is the opposite of the problem. Both detectors are negative-tested.
