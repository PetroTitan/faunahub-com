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

export function breedPageTitle(breed: Breed): string {
  return `${breed.name} — Breed Overview, Care & Household Fit`;
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
  const stop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf(", "), cut.lastIndexOf(" — "));
  return (stop > limit * 0.6 ? cut.slice(0, stop) : cut.replace(/\s+\S*$/, "")).replace(/[,;:—-]$/, "") + ".";
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
