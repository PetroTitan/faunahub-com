/**
 * Animal image metadata.
 *
 * Every record describes a single image we have downloaded into the repository
 * and have the right to reuse. License compliance for Creative Commons works
 * requires visible attribution and a link to the license, which is rendered by
 * the ImageCredit component using the fields below.
 */
export type AnimalImageRole = "hero" | "gallery";

export interface AnimalImage {
  /** Stable internal id, e.g. "tiger-wikimedia-001". */
  id: string;
  /** The animal slug this image belongs to ("tiger", "elephant", ...). */
  animalSlug: string;
  /** Primary page this image is displayed on. */
  pagePath: string;
  /** Role of this image on the animal profile page. "hero" is rendered at the
   * top of the page; "gallery" entries are rendered in a grid further down. */
  role: AnimalImageRole;
  /** Public path under /public, e.g. "/images/animals/tiger/tiger-hero.jpg". */
  localPath: string;
  /** Human-readable source name, e.g. "Wikimedia Commons", "NOAA Photo Library". */
  sourceName: string;
  /** Canonical URL of the source page (file description page, not the raw image). */
  sourceUrl: string;
  /** Author / photographer as published by the source. */
  author: string;
  /** License short name, e.g. "CC BY-SA 4.0", "Public domain". */
  license: string;
  /** Canonical license URL. Empty string for public-domain works without a license deed. */
  licenseUrl: string;
  /** Attribution line to display under the image. */
  attribution: string;
  /** Alt text describing the image. */
  alt: string;
  /** Short caption shown under the image. */
  caption: string;
  /** Image width in pixels (set on the downloaded local file). */
  width: number;
  /** Image height in pixels. */
  height: number;
  /** True if the license allows commercial reuse. */
  commercialUseAllowed: boolean;
  /** True if the license allows derivative works (crops, format changes, etc.). */
  modificationsAllowed: boolean;
  /** True if the license requires visible attribution. */
  attributionRequired: boolean;
  /** ISO date the metadata was last reviewed. */
  verifiedAt: string;
  /** Free-form notes about license, species ID, or risk. */
  riskNotes: string;
}
