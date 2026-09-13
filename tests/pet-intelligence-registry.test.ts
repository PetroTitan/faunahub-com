/**
 * Pet Intelligence — breed registry integrity.
 *
 * Runs on Node's built-in test runner with native TypeScript type-stripping:
 *
 *   npm run test
 *
 * These guard the properties that make the registry safe to scale. The failure
 * mode they exist for is not a crash — it is a breed record that looks complete
 * and is quietly wrong: a weight range whose minimum exceeds its maximum, a
 * source id that resolves to nothing, a trait value outside the vocabulary, a
 * measurement with a bound that contradicts the fields it carries. Each of
 * those renders perfectly and misinforms a reader.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import {
  BREEDS,
  BREED_REGISTRIES,
  BREED_SOURCES,
  CAT_BREED_RECORDS,
  DOG_BREED_RECORDS,
  ORDINAL_TRAIT_KEYS,
  bandFromFivePointScale,
  breedPath,
  deriveSizeClass,
  hasEditorial,
  getBreedSource,
  getRegistry,
  parseMeasurementString,
  parseLifespanYears,
  relatedBreeds,
} from "../src/lib/pet-intelligence/index.ts";
import { BREED_IMAGES } from "../src/lib/images/breed-images.ts";
import type { Measurement } from "../src/lib/pet-intelligence/types.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");

const ORDINALS = new Set(["lower", "moderate", "higher"]);
const COAT_LENGTHS = new Set(["short", "medium", "long", "hairless", "variable"]);
const SIZE_CLASSES = new Set(["toy", "small", "medium", "large", "giant"]);
const STATUSES = new Set(["recognized", "provisional", "experimental", "not-recognized"]);

test("breed ids are unique", () => {
  const ids = BREEDS.map((b) => b.id);
  assert.equal(new Set(ids).size, ids.length, "duplicate breed id");
});

test("breed ids follow `${species}-${slug}`", () => {
  for (const breed of BREEDS) {
    assert.equal(breed.id, `${breed.species}-${breed.slug}`, `${breed.id} does not match its slug`);
  }
});

test("slugs are unique within a species", () => {
  for (const group of [DOG_BREED_RECORDS, CAT_BREED_RECORDS]) {
    const slugs = group.map((b) => b.slug);
    assert.equal(new Set(slugs).size, slugs.length, "duplicate slug within a species");
  }
});

test("no dog and cat breed share a slug", () => {
  // Not a routing requirement — /dogs/breeds and /cats/breeds are separate
  // namespaces — but a shared slug would make every log line, analytics row and
  // bug report ambiguous about which animal it meant.
  const dogs = new Set(DOG_BREED_RECORDS.map((b) => b.slug));
  const collisions = CAT_BREED_RECORDS.filter((b) => dogs.has(b.slug)).map((b) => b.slug);
  assert.deepEqual(collisions, [], "slug used by both a dog and a cat breed");
});

test("canonical names are unique within a species", () => {
  for (const group of [DOG_BREED_RECORDS, CAT_BREED_RECORDS]) {
    const names = group.map((b) => (b.canonicalCommonName ?? b.name).toLowerCase());
    assert.equal(new Set(names).size, names.length, "two breeds claim the same canonical name");
  }
});

test("aliases never collide with another breed's name in the same species", () => {
  for (const group of [DOG_BREED_RECORDS, CAT_BREED_RECORDS]) {
    const names = new Map(group.map((b) => [b.name.toLowerCase(), b.id]));
    for (const breed of group) {
      for (const alias of breed.aliases ?? []) {
        const owner = names.get(alias.toLowerCase());
        assert.ok(
          owner === undefined || owner === breed.id,
          `${breed.id} claims alias "${alias}" which is ${owner}'s name`,
        );
      }
    }
  }
});

test("every recognition record names a known registry and a real status", () => {
  for (const breed of BREEDS) {
    assert.ok(breed.recognition.length > 0, `${breed.id} has no recognition record`);
    for (const rec of breed.recognition) {
      const registry = getRegistry(rec.registryId);
      assert.ok(registry, `${breed.id} cites unknown registry "${rec.registryId}"`);
      assert.equal(
        registry.species,
        breed.species,
        `${breed.id} cites ${rec.registryId}, which is a ${registry.species} registry`,
      );
      assert.ok(STATUSES.has(rec.status), `${breed.id} has status "${rec.status}"`);
    }
  }
});

test("no breed asserts recognition from a registry FaunaHub could not read", () => {
  // TICA and any other registry marked `machineReadable: false` was tried and
  // refused (HTTP 403 on 2026-09-13). A recognition record citing one would be
  // a claim nobody verified.
  const unreadable = new Set(
    BREED_REGISTRIES.filter((r) => !r.machineReadable).map((r) => r.id),
  );
  assert.ok(unreadable.size > 0, "the fixture registry list no longer records a blocked registry");
  for (const breed of BREEDS) {
    for (const rec of breed.recognition) {
      assert.ok(
        !unreadable.has(rec.registryId),
        `${breed.id} asserts ${rec.registryId} recognition, but that registry was not readable`,
      );
    }
  }
});

test("every registry marked unreadable explains why", () => {
  for (const registry of BREED_REGISTRIES) {
    if (registry.machineReadable) continue;
    assert.ok(
      registry.accessNotes && registry.accessNotes.length > 40,
      `${registry.id} is marked unreadable with no access note`,
    );
  }
});

test("every source id on a breed resolves", () => {
  for (const breed of BREEDS) {
    for (const id of breed.sources) {
      assert.ok(getBreedSource(id), `${breed.id} cites missing source "${id}"`);
    }
    for (const rec of breed.recognition) {
      assert.ok(getBreedSource(rec.sourceId), `${breed.id} recognition cites "${rec.sourceId}"`);
    }
    for (const key of ORDINAL_TRAIT_KEYS) {
      const trait = breed.traits[key];
      if (!trait) continue;
      assert.ok(getBreedSource(trait.sourceId), `${breed.id}.${key} cites "${trait.sourceId}"`);
    }
    if (breed.coat?.sourceId) {
      assert.ok(getBreedSource(breed.coat.sourceId), `${breed.id} coat cites a missing source`);
    }
    if (breed.lifespanYears) {
      assert.ok(
        getBreedSource(breed.lifespanYears.sourceId),
        `${breed.id} lifespan cites a missing source`,
      );
    }
  }
});

test("every source has a real URL and an access date", () => {
  for (const source of BREED_SOURCES) {
    assert.match(source.url, /^https:\/\//, `${source.id} has a non-https URL`);
    assert.match(source.accessedAt, /^\d{4}-\d{2}-\d{2}$/, `${source.id} has no access date`);
    assert.ok(source.scope.length > 20, `${source.id} does not say what it is cited for`);
  }
});

test("source ids are unique", () => {
  const ids = BREED_SOURCES.map((s) => s.id);
  assert.equal(new Set(ids).size, ids.length, "duplicate source id");
});

test("every image id on a breed resolves to a verified image", () => {
  const byId = new Map(BREED_IMAGES.map((i) => [i.id, i]));
  for (const breed of BREEDS) {
    for (const id of breed.images) {
      const image = byId.get(id);
      assert.ok(image, `${breed.id} cites missing image "${id}"`);
      assert.equal(image.species, breed.species, `${id} is filed under the wrong species`);
      assert.equal(image.breedSlug, breed.slug, `${id} is filed under the wrong breed`);
    }
  }
});

test("every breed image is licensed for commercial use with a verification date", () => {
  for (const image of BREED_IMAGES) {
    assert.ok(image.commercialUseAllowed, `${image.id} is not cleared for commercial use`);
    assert.match(image.verifiedAt, /^\d{4}-\d{2}-\d{2}$/, `${image.id} has no verification date`);
    assert.match(image.sourceUrl, /^https:\/\//, `${image.id} has no source URL`);
    assert.ok(image.author.length > 0, `${image.id} has no author`);
    assert.ok(image.alt.length > 10, `${image.id} has no usable alt text`);
    assert.doesNotMatch(
      image.license,
      /\b(NC|ND|non-commercial)\b/i,
      `${image.id} carries a license FaunaHub does not accept`,
    );
  }
});

/* ---------------------------------------------------------------- *
 * Measurements
 * ---------------------------------------------------------------- */

function allMeasurements(): { breed: string; field: string; m: Measurement }[] {
  const out: { breed: string; field: string; m: Measurement }[] = [];
  for (const breed of BREEDS) {
    for (const m of breed.measurements?.heightCm ?? []) out.push({ breed: breed.id, field: "heightCm", m });
    for (const m of breed.measurements?.weightKg ?? []) out.push({ breed: breed.id, field: "weightKg", m });
    if (breed.lifespanYears) out.push({ breed: breed.id, field: "lifespanYears", m: breed.lifespanYears });
  }
  return out;
}

test("measurement ranges are ordered min <= max", () => {
  for (const { breed, field, m } of allMeasurements()) {
    if (m.min !== undefined && m.max !== undefined) {
      assert.ok(m.min <= m.max, `${breed}.${field} has min ${m.min} above max ${m.max}`);
    }
  }
});

test("measurement bounds match the fields they carry", () => {
  // The bound is what keeps a half-open standard ("under 28 pounds") from being
  // silently completed with an invented lower end.
  for (const { breed, field, m } of allMeasurements()) {
    if (m.bound === "closed") {
      assert.ok(m.min !== undefined && m.max !== undefined, `${breed}.${field} closed but half-open`);
    }
    if (m.bound === "at-most") {
      assert.ok(m.max !== undefined, `${breed}.${field} at-most with no max`);
      assert.equal(m.min, undefined, `${breed}.${field} at-most but carries a min`);
    }
    if (m.bound === "at-least") {
      assert.ok(m.min !== undefined, `${breed}.${field} at-least with no min`);
      assert.equal(m.max, undefined, `${breed}.${field} at-least but carries a max`);
    }
  }
});

test("measurements are physically plausible", () => {
  for (const breed of BREEDS) {
    for (const m of breed.measurements?.heightCm ?? []) {
      for (const v of [m.min, m.max]) {
        if (v === undefined) continue;
        assert.ok(v > 5 && v < 120, `${breed.id} height ${v} cm is out of range`);
      }
    }
    for (const m of breed.measurements?.weightKg ?? []) {
      for (const v of [m.min, m.max]) {
        if (v === undefined) continue;
        assert.ok(v > 0.3 && v < 120, `${breed.id} weight ${v} kg is out of range`);
      }
    }
    if (breed.lifespanYears) {
      const { min, max } = breed.lifespanYears;
      assert.ok(min !== undefined && min > 2, `${breed.id} lifespan minimum is implausible`);
      assert.ok(max !== undefined && max < 40, `${breed.id} lifespan maximum is implausible`);
    }
  }
});

test("every measurement keeps the source's own wording", () => {
  for (const { breed, field, m } of allMeasurements()) {
    assert.ok(m.statedAs.length > 2, `${breed}.${field} lost the registry's original wording`);
    assert.ok(m.sourceId.length > 0, `${breed}.${field} has no source`);
  }
});

test("measurement parser records a single figure as `about`, not a range", () => {
  // DELIBERATE REVERSAL of the foundation's behaviour, which refused a bare
  // figure as ambiguous. The ambiguity was real and the remedy was wrong: 45
  // AKC height strings and 37 weight strings are single figures, and dropping
  // them lost published data. `about` asserts only what the standard asserts —
  // one number, no direction — and `statedAs` keeps the original wording.
  const single = parseMeasurementString("13 inches", "in");
  assert.equal(single.rejected.length, 0);
  assert.equal(single.segments.length, 1);
  assert.equal(single.segments[0].bound, "about");
  assert.equal(single.segments[0].min, 33);
  assert.equal(single.segments[0].max, 33);
});

test("measurement parser still refuses what it cannot interpret", () => {
  // Relational and unitless statements have no number to record. These are the
  // shapes that survive in the AKC corpus, and every one of them would need a
  // human to interpret.
  for (const text of [
    "slightly smaller (female)",
    "females are about 15 pounds less than male",
    "Proportionate to height",
    "considerably smaller (female)",
  ]) {
    const result = parseMeasurementString(text, "lb");
    assert.equal(result.segments.length, 0, `parser invented a value for "${text}"`);
    assert.ok(result.rejected.length > 0, `parser silently dropped "${text}"`);
  }
});

test("measurement parser reads the shapes registries actually publish", () => {

  const sexSplit = parseMeasurementString("22.5-24.5 inches (male), 21.5-23.5 inches (female)", "in");
  assert.equal(sexSplit.rejected.length, 0);
  assert.deepEqual(
    sexSplit.segments.map((s) => s.basis),
    [
      { kind: "sex", sex: "male" },
      { kind: "sex", sex: "female" },
    ],
  );

  const varietySplit = parseMeasurementString("13 inches & under, 13-15 inches", "in");
  assert.equal(varietySplit.rejected.length, 0);
  assert.equal(varietySplit.segments[0].bound, "at-most");
  assert.equal(varietySplit.segments[0].basis.kind, "variety");

  const atMost = parseMeasurementString("not exceeding 6 pounds", "lb");
  assert.equal(atMost.segments[0].bound, "at-most");
  assert.equal(atMost.segments[0].min, undefined);

  const atLeast = parseMeasurementString("over 15 inches (standard)", "in");
  assert.equal(atLeast.segments[0].bound, "at-least");
  assert.equal(atLeast.segments[0].max, undefined);

  // A qualifier containing a comma must not split the segment in two.
  const nested = parseMeasurementString("20-30 pounds (13-15 inches)", "lb");
  assert.equal(nested.segments.length, 1);
  assert.equal(nested.rejected.length, 0);
});

/* ---------------------------------------------------------------- *
 * Vocabularies
 * ---------------------------------------------------------------- */

test("trait values use only the three-level ordinal vocabulary", () => {
  for (const breed of BREEDS) {
    for (const key of ORDINAL_TRAIT_KEYS) {
      const trait = breed.traits[key];
      if (!trait) continue;
      assert.ok(ORDINALS.has(trait.value), `${breed.id}.${key} is "${trait.value}"`);
      assert.ok(trait.method.length > 20, `${breed.id}.${key} does not record how it was derived`);
    }
  }
});

test("coat lengths and size classes use only the declared vocabularies", () => {
  for (const breed of BREEDS) {
    if (breed.coat?.length) {
      assert.ok(COAT_LENGTHS.has(breed.coat.length), `${breed.id} coat "${breed.coat.length}"`);
    }
    if (breed.sizeClass) {
      assert.ok(SIZE_CLASSES.has(breed.sizeClass), `${breed.id} size "${breed.sizeClass}"`);
    }
  }
});

test("size class is derived from weight, never asserted independently", () => {
  for (const breed of BREEDS) {
    const derived = deriveSizeClass(breed.species, breed.measurements?.weightKg);
    assert.equal(
      breed.sizeClass,
      derived,
      `${breed.id} size class disagrees with its published weight`,
    );
  }
});

test("a breed with no published weight has no size class", () => {
  for (const breed of BREEDS) {
    if (breed.measurements?.weightKg?.length) continue;
    assert.equal(
      breed.sizeClass,
      undefined,
      `${breed.id} carries a size class with no weight behind it`,
    );
  }
});

test("no cat is given a size class, even when its weight is published", () => {
  // The bands are dog-calibrated. Before this was enforced, adding the four
  // CFA profile-page weights banded the Maine Coon as "small" — 9.1 kg is a
  // small dog and a very large cat. Correct data, confidently wrong label.
  for (const breed of CAT_BREED_RECORDS) {
    assert.equal(breed.sizeClass, undefined, `${breed.id} was banded with dog weight bands`);
  }
  const withWeights = CAT_BREED_RECORDS.filter((b) => b.measurements?.weightKg?.length);
  assert.ok(withWeights.length > 0, "no cat carries a published weight — this test is vacuous");
});

test("the five-point band edges are where the methodology says", () => {
  assert.equal(bandFromFivePointScale(1), "lower");
  assert.equal(bandFromFivePointScale(2), "lower");
  assert.equal(bandFromFivePointScale(3), "moderate");
  assert.equal(bandFromFivePointScale(4), "higher");
  assert.equal(bandFromFivePointScale(5), "higher");
  assert.equal(bandFromFivePointScale(0), undefined);
  assert.equal(bandFromFivePointScale(6), undefined);
  assert.equal(bandFromFivePointScale(3.5), undefined);
});

/* ---------------------------------------------------------------- *
 * Editorial completeness and relations
 * ---------------------------------------------------------------- */

test("every AUTHORED breed carries the full editorial set", () => {
  // Prose is optional at this corpus size (see Breed.editorial), but a record
  // that has SOME prose must have all of it — a half-written overview reads as
  // a bug rather than as a data profile.
  for (const breed of BREEDS.filter(hasEditorial)) {
    for (const field of [
      "intro",
      "appearance",
      "temperament",
      "activity",
      "grooming",
      "health",
      "responsibility",
    ] as const) {
      const prose = breed.editorial?.[field];
      assert.ok(prose && prose.length > 0, `${breed.id} has no ${field}`);
      for (const p of prose) {
        assert.ok(p.trim().length > 40, `${breed.id}.${field} has a stub paragraph`);
      }
    }
    assert.ok((breed.editorial?.faqs.length ?? 0) >= 3, `${breed.id} has fewer than three FAQs`);
    for (const faq of breed.editorial?.faqs ?? []) {
      assert.ok(faq.question.trim().endsWith("?"), `${breed.id} FAQ is not a question`);
      assert.ok(faq.answer.trim().length > 60, `${breed.id} FAQ answer is a stub`);
    }
  }
});

test("reviewedAt and publishedAt are real dates, and review is not before publication", () => {
  for (const breed of BREEDS) {
    assert.match(breed.reviewedAt, /^\d{4}-\d{2}-\d{2}$/, `${breed.id} reviewedAt`);
    assert.match(breed.publishedAt, /^\d{4}-\d{2}-\d{2}$/, `${breed.id} publishedAt`);
    assert.ok(breed.reviewedAt >= breed.publishedAt, `${breed.id} was reviewed before publication`);
  }
});

test("related breeds are same-species and never self-referential", () => {
  for (const breed of BREEDS) {
    for (const other of relatedBreeds(breed)) {
      assert.notEqual(other.id, breed.id, `${breed.id} is related to itself`);
      assert.equal(other.species, breed.species, `${breed.id} relates across species`);
    }
  }
});

test("breed paths are well-formed and unique", () => {
  const paths = BREEDS.map(breedPath);
  assert.equal(new Set(paths).size, paths.length, "two breeds resolve to the same path");
  for (const p of paths) {
    assert.match(p, /^\/(dogs|cats)\/breeds\/[a-z0-9-]+$/, `malformed breed path "${p}"`);
  }
});

test("an origin conflict between registries is recorded rather than resolved", () => {
  // Nine of the twelve pilot dogs have registries that disagree about origin.
  // Where more than one country is recorded, the record must SAY so — silently
  // listing two countries with no explanation reads like a single fact.
  for (const breed of BREEDS) {
    if ((breed.originCountries?.length ?? 0) > 1) {
      assert.ok(
        breed.originNote && breed.originNote.length > 40,
        `${breed.id} lists several origins without explaining the disagreement`,
      );
    }
  }
});

/* ---------------------------------------------------------------- *
 * Image records vs the files they describe
 * ---------------------------------------------------------------- */

/** Reads intrinsic dimensions from a WebP header without decoding the image. */
function webpSize(file: string): { width: number; height: number } | undefined {
  const buf = fs.readFileSync(file);
  if (buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") return;
  const fourcc = buf.toString("ascii", 12, 16);
  if (fourcc === "VP8 ") {
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  if (fourcc === "VP8L") {
    const bits = buf.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (fourcc === "VP8X") {
    const w = buf[24] | (buf[25] << 8) | (buf[26] << 16);
    const h = buf[27] | (buf[28] << 8) | (buf[29] << 16);
    return { width: w + 1, height: h + 1 };
  }
  return undefined;
}

test("every breed image's recorded dimensions match the file on disk", () => {
  // A hero swapped without updating width/height renders at the wrong aspect
  // ratio and causes layout shift — and nothing else would catch it, because
  // the image still loads.
  for (const image of BREED_IMAGES) {
    const file = path.join(REPO_ROOT, "public", image.localPath.replace(/^\//, ""));
    assert.ok(fs.existsSync(file), `${image.id}: missing file ${image.localPath}`);
    const actual = webpSize(file);
    assert.ok(actual, `${image.id}: could not read WebP dimensions`);
    assert.equal(actual.width, image.width, `${image.id} width disagrees with the file`);
    assert.equal(actual.height, image.height, `${image.id} height disagrees with the file`);
  }
});

test("every breed image records identity evidence, not just a licence", () => {
  // `riskNotes` is where "how do we know this is that breed" lives. A record
  // that only says "CC BY" has documented the licence and not the claim.
  for (const image of BREED_IMAGES) {
    assert.ok(
      /identit|breed|confirmed|consistent|verified|description/i.test(image.riskNotes),
      `${image.id} riskNotes says nothing about breed identity`,
    );
  }
});

test("a breed image belongs to a breed in the registry", () => {
  const known = new Set(BREEDS.map((b) => `${b.species}:${b.slug}`));
  for (const image of BREED_IMAGES) {
    assert.ok(
      known.has(`${image.species}:${image.breedSlug}`),
      `${image.id} describes ${image.species} "${image.breedSlug}", which is not in the registry`,
    );
    assert.equal(
      image.pagePath,
      `/${image.species === "dog" ? "dogs" : "cats"}/breeds/${image.breedSlug}`,
      `${image.id} pagePath does not match its breed`,
    );
  }
});

test("every breed listing more than one origin country explains the disagreement", () => {
  // Replaces an assertion tied to a docstring in the old single-module
  // `dogs.ts`, which the shard refactor removed. The property it was really
  // protecting is this one, and it survives the corpus growing.
  const withSeveral = BREEDS.filter((b) => (b.originCountries?.length ?? 0) > 1);
  assert.ok(withSeveral.length > 0, "no breed records a registry origin conflict — is the data loaded?");
  for (const breed of withSeveral) {
    assert.ok(
      breed.originNote && breed.originNote.length > 40,
      `${breed.id} lists several origin countries with no note explaining why`,
    );
  }
});

test("a breed whose registries split it into varieties declares its scope", () => {
  // The Poodle record uses the AKC's Standard page, but the AKC publishes three
  // Poodle breeds sharing code 701, and the Toy is in a DIFFERENT group. Without
  // a scope note the record asserts a group the registry contradicts for a third
  // of the breed.
  const poodle = BREEDS.find((b) => b.id === "dog-poodle");
  assert.ok(poodle, "the poodle record is gone");
  assert.ok(
    poodle.scopeNote && /standard/i.test(poodle.scopeNote),
    "the Poodle record no longer declares which variety it covers",
  );
});

/* ---------------------------------------------------------------- *
 * Stored numbers vs the wording they came from
 * ---------------------------------------------------------------- */

test("every measurement's numbers re-derive from its own statedAs", () => {
  /*
   * The load-bearing test for measurement accuracy.
   *
   * `min`/`max` and `statedAs` are two representations of the same fact, and the
   * page renders them side by side ("Converted" | "As published"). Nothing used
   * to compare them: an adversarial review set the Labrador's male height to
   * 40-41 cm while leaving statedAs as "22.5-24.5 inches (male)" and the whole
   * suite stayed green, so the page would have shown "40-41 cm" next to
   * "22.5-24.5 inches" on the same row.
   *
   * Re-parsing here is also what gives `parseMeasurementString` a production
   * consumer. Before this it had none — it was exercised only by a handful of
   * happy-path strings, while being the intended ingest path for the next
   * several hundred breeds.
   */
  for (const breed of BREEDS) {
    for (const [field, unit, rows] of [
      ["heightCm", "in", breed.measurements?.heightCm ?? []],
      ["weightKg", "lb", breed.measurements?.weightKg ?? []],
    ] as const) {
      for (const m of rows) {
        const parsed = parseMeasurementString(m.statedAs, unit);
        assert.equal(
          parsed.rejected.length,
          0,
          `${breed.id}.${field}: statedAs "${m.statedAs}" no longer parses`,
        );
        assert.equal(
          parsed.segments.length,
          1,
          `${breed.id}.${field}: statedAs "${m.statedAs}" yields ${parsed.segments.length} segments`,
        );
        const [seg] = parsed.segments;
        assert.equal(seg.bound, m.bound, `${breed.id}.${field}: bound disagrees with "${m.statedAs}"`);
        assert.equal(seg.min, m.min, `${breed.id}.${field}: min disagrees with "${m.statedAs}"`);
        assert.equal(seg.max, m.max, `${breed.id}.${field}: max disagrees with "${m.statedAs}"`);
      }
    }
  }
});

test("every lifespan's numbers re-derive from its own statedAs", () => {
  for (const breed of BREEDS) {
    const life = breed.lifespanYears;
    if (!life) continue;
    const parsed = parseLifespanYears(life.statedAs, life.sourceId);
    assert.ok(parsed, `${breed.id}: lifespan "${life.statedAs}" no longer parses`);
    assert.equal(parsed.min, life.min, `${breed.id}: lifespan min disagrees with its wording`);
    assert.equal(parsed.max, life.max, `${breed.id}: lifespan max disagrees with its wording`);
  }
});

test("the parser refuses the shapes it used to corrupt", () => {
  // Each of these previously returned rejected: [] while producing a wrong
  // answer, which is worse than failing.
  const dropped = parseMeasurementString("13-15 inches & under", "in");
  assert.equal(dropped.segments.length, 0, "a trailing half-open suffix is being dropped again");

  const wrongUnit = parseMeasurementString("6-8 kilograms", "lb");
  assert.equal(wrongUnit.segments.length, 0, "a contradicting unit word is being ignored again");

  // A semicolon-separated variety split must yield BOTH varieties, not one
  // variety's range wearing the other's label.
  const semi = parseMeasurementString(
    "25-30 pounds (standard); 11 pounds & under (miniature)",
    "lb",
  );
  assert.equal(semi.segments.length, 2, "semicolon-separated varieties are being merged again");
  assert.equal(semi.segments[0].basis.kind, "variety");
  assert.deepEqual(
    semi.segments.map((x) => x.bound),
    ["closed", "at-most"],
  );

  // A nested parenthetical must not lose the sex basis.
  const nested = parseMeasurementString("20-25 lbs (male (large))", "lb");
  assert.deepEqual(nested.segments[0].basis, { kind: "sex", sex: "male" });
});

test("an unbounded weight is not banded into a size class", () => {
  // `deriveSizeClass` used to fall back to the MINIMUM when no maximum existed,
  // so a standard publishing only "over 90 pounds" — unbounded above — came out
  // as `large`, which is a manufactured ceiling.
  const openTop = [
    {
      min: 40.8,
      bound: "at-least" as const,
      basis: { kind: "breed" as const },
      statedAs: "over 90 pounds",
      sourceId: "x",
    },
  ];
  assert.equal(
    deriveSizeClass("dog", openTop),
    undefined,
    "a weight with no upper bound is being banded",
  );
});

/*
 * Three fully-recognised AKC breeds deliberately omit `recognizedYear`, because
 * AKC's year_recognized field for them is a placeholder rather than a date: it
 * gives 1885 for the Basset Fauve de Bretagne and the Teddy Roosevelt Terrier,
 * decades before either breed existed in the form the AKC recognises, and 1935
 * for the Russian Tsvetnaya Bolonka.
 *
 * Omitting them is right. Leaving the omission undocumented and unenforced was
 * not — the next import would have restored all three silently, and they would
 * have read as facts. Naming them makes the exception deliberate, and makes an
 * accidental fourth omission visible.
 */
const YEAR_OMITTED_ON_PURPOSE = new Set([
  "dog-basset-fauve-de-bretagne",
  "dog-russian-tsvetnaya-bolonka",
  "dog-teddy-roosevelt-terrier",
]);

test("only the documented exceptions omit a recognition year while fully recognised", () => {
  const missing: string[] = [];
  for (const breed of BREEDS) {
    for (const rec of breed.recognition) {
      if (rec.registryId !== "akc" || rec.status !== "recognized") continue;
      if (rec.recognizedYear === undefined && !YEAR_OMITTED_ON_PURPOSE.has(breed.id)) {
        missing.push(breed.id);
      }
    }
  }
  assert.deepEqual(
    missing,
    [],
    "fully-recognised AKC breed with no recognition year and no documented reason",
  );
});

test("the documented exceptions still exist and still omit the year", () => {
  // A stale allow-list is its own defect: it would hide a real omission.
  for (const id of YEAR_OMITTED_ON_PURPOSE) {
    const breed = BREEDS.find((b) => b.id === id);
    assert.ok(breed, `${id} is in the exception list but not in the registry`);
    const akc = breed.recognition.find((r) => r.registryId === "akc");
    assert.equal(
      akc?.recognizedYear,
      undefined,
      `${id} now records a recognition year — remove it from the exception list`,
    );
  }
});
