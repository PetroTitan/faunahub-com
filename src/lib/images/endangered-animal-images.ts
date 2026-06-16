/**
 * Endangered-species image metadata.
 *
 * Each entry describes a photograph downloaded into the repository for a
 * detailed endangered-species profile. Every file was confirmed via the
 * Wikimedia Commons API to carry a commercially reusable, derivative-friendly
 * license — Public Domain, CC0, CC BY, or CC BY-SA only. CC BY-NC, CC BY-ND,
 * GFDL-only, and unclear-license files are excluded by editorial policy.
 *
 * Files were downloaded via Wikimedia's thumbnail service (a permitted
 * derivative), resized to a max width of 1600px, and converted to WebP with
 * sharp (quality 82) on the `verifiedAt` date. The conversion is itself a
 * permitted derivative under every license used below.
 */

export type EndangeredImageRole = "hero" | "gallery";

export interface EndangeredAnimalImage {
  /** Stable internal id. */
  id: string;
  /** Red List species slug this image belongs to. */
  speciesSlug: string;
  /** Page the image is displayed on. */
  pagePath: string;
  role: EndangeredImageRole;
  /** Public path under /public. */
  localPath: string;
  sourceName: string;
  /** Canonical file description page URL. */
  sourceUrl: string;
  author: string;
  license: string;
  /** License deed URL; empty for public-domain works. */
  licenseUrl: string;
  attribution: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  commercialUseAllowed: boolean;
  modificationsAllowed: boolean;
  attributionRequired: boolean;
  verifiedAt: string;
  riskNotes: string;
}

const VERIFIED = "2026-06-16";

export const ENDANGERED_ANIMAL_IMAGES: readonly EndangeredAnimalImage[] = [
  // --- Sumatran orangutan ---
  {
    id: "sumatran-orangutan-hero",
    speciesSlug: "sumatran-orangutan",
    pagePath: "/endangered-animals/species/sumatran-orangutan",
    role: "hero",
    localPath:
      "/images/endangered-animals/sumatran-orangutan/sumatran-orangutan-hero.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Sumatran_Orangutan_(Pongo_abelii)_at_Perth_Zoo,_October_2024_18.jpg",
    author: "Calistemon",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    attribution: "Photo by Calistemon, CC BY-SA 4.0, via Wikimedia Commons.",
    alt: "Sumatran orangutan (Pongo abelii) with long shaggy orange-brown hair.",
    caption: "Sumatran orangutan (Pongo abelii).",
    width: 1600,
    height: 1200,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: VERIFIED,
    riskNotes:
      "Share-alike license — derivatives must use a compatible license. Photographed at Perth Zoo; species ID per the Wikimedia file description.",
  },
  {
    id: "sumatran-orangutan-gallery-1",
    speciesSlug: "sumatran-orangutan",
    pagePath: "/endangered-animals/species/sumatran-orangutan",
    role: "gallery",
    localPath:
      "/images/endangered-animals/sumatran-orangutan/sumatran-orangutan-gallery-1.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Sumatran_Orangutan_(Pongo_abelii)_at_Perth_Zoo,_October_2024_02.jpg",
    author: "Calistemon",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    attribution: "Photo by Calistemon, CC BY-SA 4.0, via Wikimedia Commons.",
    alt: "Sumatran orangutan resting, showing its expressive face and long arms.",
    caption: "A Sumatran orangutan — Critically Endangered in the wild.",
    width: 1600,
    height: 1200,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: VERIFIED,
    riskNotes: "Share-alike license. Species ID per Wikimedia file description.",
  },

  // --- California condor ---
  {
    id: "california-condor-hero",
    speciesSlug: "california-condor",
    pagePath: "/endangered-animals/species/california-condor",
    role: "hero",
    localPath:
      "/images/endangered-animals/california-condor/california-condor-hero.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Gymnogyps_californianus_(California_condor).jpg",
    author: "James St. John",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    attribution: "Photo by James St. John, CC BY 2.0, via Wikimedia Commons.",
    alt: "California condor (Gymnogyps californianus) perched, showing its bald head and a numbered wing tag.",
    caption: "California condor (Gymnogyps californianus).",
    width: 1600,
    height: 1229,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: VERIFIED,
    riskNotes:
      "Attribution license. Wing tag visible — consistent with the intensively managed wild population.",
  },
  {
    id: "california-condor-gallery-1",
    speciesSlug: "california-condor",
    pagePath: "/endangered-animals/species/california-condor",
    role: "gallery",
    localPath:
      "/images/endangered-animals/california-condor/california-condor-gallery-1.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Gymnogyps_californianus_-Bitter_Creek_National_Wildlife_Refuge,_California,_USA_-flying-8.jpg",
    author: "U.S. Fish & Wildlife Service (Pacific Southwest Region)",
    license: "Public domain",
    licenseUrl: "",
    attribution:
      "Photo by the U.S. Fish & Wildlife Service (Pacific Southwest Region), public domain, via Wikimedia Commons.",
    alt: "California condor in flight over Bitter Creek National Wildlife Refuge, California.",
    caption: "A California condor in flight (U.S. Fish & Wildlife Service).",
    width: 1600,
    height: 1999,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: false,
    verifiedAt: VERIFIED,
    riskNotes:
      "U.S. federal government work — public domain. No license restrictions.",
  },

  // --- Hawksbill turtle ---
  {
    id: "hawksbill-turtle-hero",
    speciesSlug: "hawksbill-turtle",
    pagePath: "/endangered-animals/species/hawksbill-turtle",
    role: "hero",
    localPath:
      "/images/endangered-animals/hawksbill-turtle/hawksbill-turtle-hero.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Tortuga_carey_(Eretmochelys_imbricata),_parque_nacional_Ras_Muhammad,_Egipto,_2022-03-28,_DD_56.jpg",
    author: "Diego Delso",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    attribution:
      "Photo by Diego Delso (delso.photo), CC BY-SA 4.0, via Wikimedia Commons.",
    alt: "Hawksbill turtle (Eretmochelys imbricata) swimming above a coral reef.",
    caption: "Hawksbill turtle (Eretmochelys imbricata).",
    width: 1600,
    height: 1067,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: VERIFIED,
    riskNotes:
      "Share-alike license. Photographed in Ras Muhammad National Park, Egypt; species ID per file description.",
  },
  {
    id: "hawksbill-turtle-gallery-1",
    speciesSlug: "hawksbill-turtle",
    pagePath: "/endangered-animals/species/hawksbill-turtle",
    role: "gallery",
    localPath:
      "/images/endangered-animals/hawksbill-turtle/hawksbill-turtle-gallery-1.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Tortuga_carey_(Eretmochelys_imbricata),_islas_Ad_Dimaniyat,_Om%C3%A1n,_2024-08-13,_DD_68.jpg",
    author: "Diego Delso",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    attribution:
      "Photo by Diego Delso (delso.photo), CC BY-SA 4.0, via Wikimedia Commons.",
    alt: "Hawksbill turtle near a reef in the Ad Dimaniyat Islands, Oman.",
    caption: "A hawksbill turtle on a tropical reef.",
    width: 1600,
    height: 1067,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: VERIFIED,
    riskNotes: "Share-alike license. Species ID per Wikimedia file description.",
  },

  // --- Whale shark ---
  {
    id: "whale-shark-hero",
    speciesSlug: "whale-shark",
    pagePath: "/endangered-animals/species/whale-shark",
    role: "hero",
    localPath: "/images/endangered-animals/whale-shark/whale-shark-hero.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Whale_Shark_AdF.jpg",
    author: "Arturo de Frias Marques",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    attribution:
      "Photo by Arturo de Frias Marques, CC BY-SA 4.0, via Wikimedia Commons.",
    alt: "Whale shark (Rhincodon typus) swimming, showing its checkerboard of pale spots.",
    caption: "Whale shark (Rhincodon typus) — the largest living fish.",
    width: 1600,
    height: 1067,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: VERIFIED,
    riskNotes: "Share-alike license. Species ID per Wikimedia file description.",
  },
  {
    id: "whale-shark-gallery-1",
    speciesSlug: "whale-shark",
    pagePath: "/endangered-animals/species/whale-shark",
    role: "gallery",
    localPath:
      "/images/endangered-animals/whale-shark/whale-shark-gallery-1.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Whale_Shark_(Rhincodon_typus)_with_open_mouth_in_La_Paz,_Mexico.jpg",
    author: "Matthew T Rader",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    attribution:
      "Photo by Matthew T Rader (matthewtrader.com), CC BY-SA 4.0, via Wikimedia Commons.",
    alt: "Whale shark filter-feeding with its mouth open near La Paz, Mexico.",
    caption: "A whale shark filter-feeding.",
    width: 1600,
    height: 1200,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: VERIFIED,
    riskNotes: "Share-alike license. Species ID per Wikimedia file description.",
  },

  // --- Staghorn coral ---
  {
    id: "staghorn-coral-hero",
    speciesSlug: "staghorn-coral",
    pagePath: "/endangered-animals/species/staghorn-coral",
    role: "hero",
    localPath:
      "/images/endangered-animals/staghorn-coral/staghorn-coral-hero.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Acropora_cervicornis_(Staghorn_Coral_-_Haiti).jpg",
    author: "Nick Hobgood",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    attribution: "Photo by Nick Hobgood, CC BY-SA 3.0, via Wikimedia Commons.",
    alt: "Branching staghorn coral (Acropora cervicornis) colony on a reef in Haiti.",
    caption: "Staghorn coral (Acropora cervicornis).",
    width: 1600,
    height: 1202,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: VERIFIED,
    riskNotes: "Share-alike license. Species ID per Wikimedia file description.",
  },
  {
    id: "staghorn-coral-gallery-1",
    speciesSlug: "staghorn-coral",
    pagePath: "/endangered-animals/species/staghorn-coral",
    role: "gallery",
    localPath:
      "/images/endangered-animals/staghorn-coral/staghorn-coral-gallery-1.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Restored_staghorn_coral_(Acropora_cervicornis)_at_Looe_Key_reef_(106714).jpg",
    author: "Lauren Toth, USGS",
    license: "Public domain",
    licenseUrl: "",
    attribution:
      "Photo by Lauren Toth, U.S. Geological Survey, public domain, via Wikimedia Commons.",
    alt: "Restored staghorn coral colony at Looe Key reef, Florida.",
    caption: "Restored staghorn coral at Looe Key reef (USGS).",
    width: 1600,
    height: 1200,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: false,
    verifiedAt: VERIFIED,
    riskNotes:
      "U.S. federal government work — public domain. No license restrictions.",
  },

  // --- Axolotl ---
  {
    id: "axolotl-hero",
    speciesSlug: "axolotl",
    pagePath: "/endangered-animals/species/axolotl",
    role: "hero",
    localPath: "/images/endangered-animals/axolotl/axolotl-hero.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ambystoma_mexicanum_in_Ouwehands_Dierenpark_01.jpg",
    author: "FakirNL",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    attribution: "Photo by FakirNL, CC BY-SA 4.0, via Wikimedia Commons.",
    alt: "Axolotl (Ambystoma mexicanum) showing its feathery external gills.",
    caption: "Axolotl (Ambystoma mexicanum).",
    width: 1600,
    height: 1308,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: VERIFIED,
    riskNotes: "Share-alike license. Species ID per Wikimedia file description.",
  },
  {
    id: "axolotl-gallery-1",
    speciesSlug: "axolotl",
    pagePath: "/endangered-animals/species/axolotl",
    role: "gallery",
    localPath: "/images/endangered-animals/axolotl/axolotl-gallery-1.webp",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ambystoma_mexicanum_(6337857516).jpg",
    author: "Ruben Undheim",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attribution: "Photo by Ruben Undheim, CC BY-SA 2.0, via Wikimedia Commons.",
    alt: "Axolotl resting on the bottom of an aquarium.",
    caption: "An axolotl — Critically Endangered in the wild.",
    width: 1600,
    height: 1067,
    commercialUseAllowed: true,
    modificationsAllowed: true,
    attributionRequired: true,
    verifiedAt: VERIFIED,
    riskNotes: "Share-alike license. Species ID per Wikimedia file description.",
  },
];

export function getEndangeredImages(
  speciesSlug: string,
): EndangeredAnimalImage[] {
  return ENDANGERED_ANIMAL_IMAGES.filter((i) => i.speciesSlug === speciesSlug);
}

export function getEndangeredHero(
  speciesSlug: string,
): EndangeredAnimalImage | undefined {
  return ENDANGERED_ANIMAL_IMAGES.find(
    (i) => i.speciesSlug === speciesSlug && i.role === "hero",
  );
}

export function getEndangeredGallery(
  speciesSlug: string,
): EndangeredAnimalImage[] {
  return ENDANGERED_ANIMAL_IMAGES.filter(
    (i) => i.speciesSlug === speciesSlug && i.role === "gallery",
  );
}
