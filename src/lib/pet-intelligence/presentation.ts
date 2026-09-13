/**
 * The strings a breed page and the search index must agree on.
 *
 * They live here, in a React-free module, because BOTH the route (which renders
 * the page) and `scripts/lib/build-search-index.mjs` (which indexes it) import
 * them. If the title were built in the route and the index harvested its own,
 * the two could drift, and a search result would promise a page heading that
 * the page does not show. FaunaHub's search doctrine already forbids that; this
 * module is what makes it structurally true for breeds.
 */
import type { Breed } from "./types.ts";

function primaryGroup(breed: Breed): string | undefined {
  return breed.recognition.find((r) => r.registryId === "akc" || r.registryId === "cfa")
    ?.registryGroup;
}

/**
 * The title has to match what the page actually is.
 *
 * Every breed used to be titled "Breed Overview, Care & Household Fit" — a
 * promise 254 of 274 pages do not keep, since they carry no written overview.
 * A data profile says so in its own body; the title contradicting that was the
 * first thing a reader saw.
 */
/**
 * A breed page title, kept inside the width a SERP will actually render.
 *
 * The previous templates added 44 and 42 characters to the breed name, so 186
 * of 274 titles were over 60 with the " | FaunaHub" suffix applied — every name
 * longer than five characters. The tail was the part that truncated, which is
 * the right way round, but it also meant two thirds of the corpus spent their
 * visible width on words no reader searched for.
 *
 * The authored/data distinction stays: a profile with a written overview and
 * one that is a registry record should not make the same promise in a SERP.
 */
export function breedPageTitle(breed: Breed): string {
  return breed.editorial?.intro?.length
    ? `${breed.name} — Breed Profile`
    : `${breed.name} — Registry Facts`;
}

/**
 * Meta description, kept under ~155 characters.
 *
 * Search engines truncate around 160, and an audit found 460 generated
 * descriptions running past it — so the tail of every one was being cut mid-
 * sentence. Built from the breed's own recorded attributes so it stays specific
 * rather than boilerplate, then trimmed to the last clause that fits.
 */
export const DESCRIPTION_LIMIT = 155;

export function fitDescription(text: string, limit = DESCRIPTION_LIMIT): string {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);

  /*
   * A COMPLETE SENTENCE always beats a clause boundary, even a short one.
   *
   * The previous version only accepted a stop past 60% of the limit, so the
   * tallest-dogs lede — whose first sentence ends at character 79 of 155 —
   * fell through to the word trimmer and shipped as "…breeds with an." A
   * trimmed fragment with a full stop welded on is worse than a short
   * sentence: it reads as something the writer meant to say.
   */
  const sentence = cut.lastIndexOf(". ");
  if (sentence > 0) return cut.slice(0, sentence + 1);

  const clause = Math.max(cut.lastIndexOf("; "), cut.lastIndexOf(", "), cut.lastIndexOf(" — "));
  if (clause > limit * 0.5) return cut.slice(0, clause).replace(/[,;:—-]$/, "") + ".";

  // No boundary at all: trim to a whole word and mark it as cut off. Never
  // close a fragment with a period, which would assert it is a sentence.
  return cut.replace(/\s+\S*$/, "").replace(/[,;:—-]$/, "") + "…";
}

export function breedPageDescription(breed: Breed): string {
  const bits: string[] = [];
  const group = primaryGroup(breed);
  if (group) bits.push(group);
  if (breed.sizeClass) bits.push(`${breed.sizeClass} size`);
  if (breed.coat?.length) bits.push(`${breed.coat.length} coat`);
  const lead = bits.length ? `${bits.join(", ")}. ` : "";
  return fitDescription(
    `${breed.name}: ${lead}Registry-sourced measurements, recognition and trait bands, with sources for every value.`,
  );
}

/**
 * The shorter line a search result card shows.
 *
 * Deliberately not the meta description: a result card has far less room, and
 * the leading attributes are what distinguish one breed from another in a list.
 */
export function breedSearchDescription(breed: Breed): string {
  const bits: string[] = [];
  const group = primaryGroup(breed);
  if (group) bits.push(group);
  if (breed.sizeClass) bits.push(`${breed.sizeClass} size`);
  if (breed.coat?.length) bits.push(`${breed.coat.length} coat`);
  if (breed.originCountries?.length) bits.push(breed.originCountries.join(" / "));
  return bits.join(" · ");
}

export function breedPageTags(breed: Breed): string[] {
  const tags = [breed.species === "dog" ? "Dog" : "Cat"];
  const group = primaryGroup(breed);
  if (group) tags.push(group);
  if (breed.sizeClass) tags.push(`${breed.sizeClass} size`);
  return tags;
}
