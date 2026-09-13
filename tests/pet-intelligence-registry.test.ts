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
  getBreedSource,
  getRegistry,
  parseMeasurementString,
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

test("measurement parser rejects rather than guesses", () => {
  // A single bare figure is genuinely ambiguous — a target, a ceiling, a
  // typical — so the parser must refuse it instead of picking one.
  const ambiguous = parseMeasurementString("13 inches", "in");
  assert.equal(ambiguous.segments.length, 0);
  assert.deepEqual(ambiguous.rejected, ["13 inches"]);

  // And the four shapes real standards actually use must all parse.
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
    const derived = deriveSizeClass(breed.measurements?.weightKg);
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

test("every breed carries the full editorial set", () => {
  for (const breed of BREEDS) {
    for (const field of [
      "intro",
      "appearance",
      "temperament",
      "activity",
      "grooming",
      "health",
      "responsibility",
    ] as const) {
      const prose = breed.editorial[field];
      assert.ok(prose && prose.length > 0, `${breed.id} has no ${field}`);
      for (const p of prose) {
        assert.ok(p.trim().length > 40, `${breed.id}.${field} has a stub paragraph`);
      }
    }
    assert.ok(breed.editorial.faqs.length >= 3, `${breed.id} has fewer than three FAQs`);
    for (const faq of breed.editorial.faqs) {
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
