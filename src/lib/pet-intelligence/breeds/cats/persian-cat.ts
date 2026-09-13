import type { Breed } from "../../types.ts";

/** Persian. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-persian-cat",
  slug: "persian-cat",
  species: "cat",
  name: "Persian",
  originCountries: [
    "Iran",
  ],
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/persian/",
      sourceId: "cfa-persian-cat",
    },
  ],
  coat: {
    length: "long",
    statedAs: "COAT: long and thick, standing off from the body",
    sourceId: "cfa-std-persian-cat",
  },
  traits: {},
  editorial: {
    intro: [
      "The Persian is a long-coated cat breed with a distinctive flat-faced (brachycephalic) profile in many modern lines. The breed is often described as calm and affectionate. Coat care and breed-specific anatomical considerations make the Persian a higher-maintenance choice than most short-haired breeds.",
    ],
    appearance: [
      "Persians are medium-to-large cats with a long, dense double coat, a sturdy round body, short legs, and a characteristically flat face in most modern lines. Some traditional or \"doll-face\" lines have a less extreme facial profile. Recognised coat colours and patterns vary widely.",
    ],
    temperament: [
      "The breed is widely described as gentle, calm, and affectionate, often preferring quiet indoor environments to high-energy households. Individual personality varies — some Persians are very playful, others very mellow.",
    ],
    activity: [
      "Most Persians need modest daily play and engagement. Interactive toys and gentle climbing options work well. Calm, predictable environments are commonly described as suiting the breed — the breed often does best in calmer households.",
    ],
    grooming: [
      "The long coat is generally described as needing brushing most days to prevent matting, particularly under the legs and around the rear. Routine eye care is important in many lines — discuss specifics with a veterinarian, especially for any cat with a pronounced flat-faced profile. Some owners use professional grooming periodically.",
    ],
    health: [
      "Brachycephalic context: the flat-faced head shape is associated with specific care considerations in some lines. FaunaHub does not provide diagnosis or treatment. Anyone considering this breed should research these considerations with a licensed veterinarian and choose a breeder or rescue that prioritises health and welfare.",
    ],
    responsibility: [
      "Plan for daily grooming time and budget for veterinary care that may include attention to airway, eye, and skin-fold health in some lines. Reputable shelters, rescues, and responsible breeders are appropriate sources. Avoid pet-store or unverified online sellers and be cautious about \"rare colour\" marketing.",
    ],
    faqs: [
      { question: "Do Persians need daily grooming?", answer: "Most Persians are described as needing brushing most days to prevent matting, particularly under the legs and around the rear. Some owners also use periodic professional grooming. Plan time for this if considering the breed." },
      { question: "Are Persians good for apartments?", answer: "Many Persians do well in apartments because of their typically calm activity level, but landlord rules, household noise, and the breed's grooming and veterinary care needs all matter. Spend time with a specific cat before deciding." },
      { question: "Are Persians healthy cats?", answer: "The flat-faced head shape in many modern lines is associated with specific care considerations. FaunaHub does not diagnose or treat. Discuss the breed's care considerations with a licensed veterinarian and choose breeders/rescues that prioritise health." },
      { question: "Are Persians hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing." },
    ],
  },
  sources: ["cfa-persian-cat", "cfa-std-persian-cat"],
  images: ["cat-persian-cat-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
