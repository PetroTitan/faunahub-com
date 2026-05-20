import type { AnimalImage } from "./types";

/**
 * Verified animal images.
 *
 * Each entry has been confirmed via Wikimedia Commons' MediaWiki API
 * (action=query, prop=imageinfo, extmetadata) on the date noted in
 * `verifiedAt`. Only Public Domain, CC BY, and CC BY-SA images are listed —
 * GFDL-only, CC BY-NC, CC BY-ND, and unclear-license files are explicitly
 * excluded by FaunaHub editorial policy.
 *
 * Files have been downloaded into /public/images/animals/<slug>/ using
 * Wikimedia's thumbnail service (a derivative permitted by the license).
 *
 * If you add a new entry, fill every field and re-run the verification step.
 */
export const ANIMAL_IMAGES: readonly AnimalImage[] = [
  {
    id: "tiger-wikimedia-001",
    animalSlug: "tiger",
    pagePath: "/animals/tiger",
    localPath: "/images/animals/tiger/tiger-hero.jpg",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Walking_tiger_female.jpg",
    author: "Charles J. Sharp",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    attribution:
      "Photo by Charles J. Sharp, CC BY-SA 4.0, via Wikimedia Commons.",
    alt: "Adult female Bengal tiger (Panthera tigris) walking through dry grassland.",
    caption: "Bengal tiger walking through grassland habitat.",
    width: 1600,
    height: 883,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: "2026-05-20",
    riskNotes:
      "Share-alike license — derivative works (e.g. crops) must also be released under CC BY-SA 4.0. Author is a recognised Wikimedia wildlife photographer; species identification is unambiguous.",
  },
  {
    id: "dolphin-wikimedia-001",
    animalSlug: "dolphin",
    pagePath: "/animals/dolphin",
    localPath: "/images/animals/dolphin/dolphin-hero.jpg",
    sourceName: "Wikimedia Commons (NASA)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tursiops_truncatus_01.jpg",
    author: "NASA",
    license: "Public domain",
    licenseUrl: "",
    attribution: "Photo by NASA, Public domain, via Wikimedia Commons.",
    alt: "Common bottlenose dolphin (Tursiops truncatus) surfacing in clear water.",
    caption: "Common bottlenose dolphin (Tursiops truncatus).",
    width: 1600,
    height: 1064,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: false,
    verifiedAt: "2026-05-20",
    riskNotes:
      "US federal government work — Public domain in the United States. Attribution provided for transparency though not legally required.",
  },
  {
    id: "wolf-wikimedia-001",
    animalSlug: "wolf",
    pagePath: "/animals/wolf",
    localPath: "/images/animals/wolf/wolf-hero.jpg",
    sourceName: "Wikimedia Commons (USFWS)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Front_view_of_a_resting_Canis_lupus_ssp.jpg",
    author: "Gary Kramer / U.S. Fish and Wildlife Service",
    license: "Public domain",
    licenseUrl: "",
    attribution:
      "Photo by Gary Kramer, U.S. Fish and Wildlife Service, Public domain, via Wikimedia Commons.",
    alt: "Gray wolf (Canis lupus) resting and facing the camera.",
    caption: "Gray wolf (Canis lupus) at rest.",
    width: 1600,
    height: 1997,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: false,
    verifiedAt: "2026-05-20",
    riskNotes:
      "U.S. federal work — Public domain. Original filename references C. lupus ssp.; species identification is consistent with USFWS captioning.",
  },
  {
    id: "panda-wikimedia-001",
    animalSlug: "panda",
    pagePath: "/animals/panda",
    localPath: "/images/animals/panda/panda-hero.jpg",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Grosser_Panda.JPG",
    author: "J. Patrick Fischer",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    attribution:
      "Photo by J. Patrick Fischer, CC BY-SA 3.0, via Wikimedia Commons.",
    alt: "Giant panda (Ailuropoda melanoleuca) sitting and feeding on bamboo.",
    caption: "Giant panda (Ailuropoda melanoleuca) feeding on bamboo.",
    width: 1600,
    height: 1067,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: "2026-05-20",
    riskNotes:
      "Share-alike license — derivatives must be released under the same or a compatible CC BY-SA license.",
  },
  {
    id: "cheetah-wikimedia-001",
    animalSlug: "cheetah",
    pagePath: "/animals/cheetah",
    localPath: "/images/animals/cheetah/cheetah-hero.jpg",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cheetah_Kruger.jpg",
    author: "Mukul2u",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    attribution: "Photo by Mukul2u, CC BY 3.0, via Wikimedia Commons.",
    alt: "Adult cheetah (Acinonyx jubatus) standing in dry grassland in Kruger National Park.",
    caption: "Cheetah (Acinonyx jubatus) in Kruger National Park, South Africa.",
    width: 1600,
    height: 1049,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: "2026-05-20",
    riskNotes:
      "Attribution-only license, no share-alike constraint. Park location and species ID consistent with file description.",
  },
  {
    id: "leopard-wikimedia-001",
    animalSlug: "leopard",
    pagePath: "/animals/leopard",
    localPath: "/images/animals/leopard/leopard-hero.jpg",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Persian_leopard_1.jpg",
    author: "Benoit.boudeville",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    attribution:
      "Photo by Benoit.boudeville, CC BY-SA 4.0, via Wikimedia Commons.",
    alt: "Persian leopard (Panthera pardus tulliana) resting on a rocky outcrop.",
    caption: "Persian leopard (Panthera pardus tulliana subspecies).",
    width: 1600,
    height: 1068,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: "2026-05-20",
    riskNotes:
      "Share-alike license. Persian leopard is a recognised subspecies of Panthera pardus; the broader species page can use this image with appropriate caption.",
  },
  {
    id: "crocodile-wikimedia-001",
    animalSlug: "crocodile",
    pagePath: "/animals/crocodile",
    localPath: "/images/animals/crocodile/crocodile-hero.jpg",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nile_crocodile_head.jpg",
    author: "Leigh Bedford",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    attribution: "Photo by Leigh Bedford, CC BY 2.0, via Wikimedia Commons.",
    alt: "Close-up of a Nile crocodile (Crocodylus niloticus) showing the V-shaped snout and visible upper teeth.",
    caption: "Nile crocodile (Crocodylus niloticus) — note the V-shaped snout typical of true crocodiles.",
    width: 1600,
    height: 1067,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: "2026-05-20",
    riskNotes:
      "Attribution-only license. Species identification consistent with Nile crocodile morphology in the image.",
  },
  {
    id: "alligator-wikimedia-001",
    animalSlug: "alligator",
    pagePath: "/animals/alligator",
    localPath: "/images/animals/alligator/alligator-hero.jpg",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:American_Alligator.jpg",
    author: "User:Postdlf",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    attribution:
      "Photo by Postdlf (Wikimedia Commons), CC BY-SA 3.0, via Wikimedia Commons.",
    alt: "American alligator (Alligator mississippiensis) head close-up showing the broad U-shaped snout.",
    caption: "American alligator (Alligator mississippiensis) — note the broad U-shaped snout that distinguishes alligators from crocodiles.",
    width: 1600,
    height: 2133,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: "2026-05-20",
    riskNotes:
      "Share-alike license. Author identified only by Wikimedia username; attribution uses that username as published.",
  },
];

/**
 * Animal slugs we intend to cover but have not yet sourced a verified image
 * for. These should be picked up by a human-curated next pass.
 */
export const ANIMAL_IMAGE_TODOS: readonly string[] = [
  "lion",
  "eagle",
  "elephant",
  "fox",
  "owl",
  "shark",
  "jaguar",
  "bear",
  "giraffe",
  "zebra",
  "gorilla",
  "chimpanzee",
  "kangaroo",
  "koala",
  "penguin",
];

const BY_SLUG: Record<string, AnimalImage> = Object.fromEntries(
  ANIMAL_IMAGES.map((img) => [img.animalSlug, img]),
);

/** Returns the verified hero image for an animal slug, or null if none. */
export function getAnimalImage(slug: string): AnimalImage | null {
  return BY_SLUG[slug] ?? null;
}

/** Absolute URL helper for OG image tags. */
export function getAnimalImageAbsoluteUrl(slug: string): string | null {
  const img = getAnimalImage(slug);
  if (!img) return null;
  return `https://faunahub.com${img.localPath}`;
}

/** Builds an OG image input for `buildArticleMetadata`. Returns undefined if no
 * image is available, so callers can spread it conditionally. */
export function getAnimalOgImage(
  slug: string,
):
  | { url: string; width: number; height: number; alt: string }
  | undefined {
  const img = getAnimalImage(slug);
  if (!img) return undefined;
  return {
    url: `https://faunahub.com${img.localPath}`,
    width: img.width,
    height: img.height,
    alt: img.alt,
  };
}
