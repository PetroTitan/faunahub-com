import type { Breed } from "../../types.ts";

/** Sphynx. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-sphynx",
  slug: "sphynx",
  species: "cat",
  name: "Sphynx",
  originCountries: [
    "Canada",
  ],
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/sphynx/",
      recognizedYear: 2002,
      sourceId: "cfa-sphynx",
    },
  ],
  coat: {
    length: "hairless",
    statedAs: "hairlessness, although Sphynx are not actually completely hairless cats",
    sourceId: "cfa-std-sphynx",
  },
  traits: {},
  editorial: {
    intro: [
      "The Sphynx is a near-hairless breed accepted for CFA Championship competition in 2002. The CFA standard is explicit that Sphynx are \"not actually completely hairless\" — a fine down is normal, and short hair may be present on the feet, outer ears, and tail. The breed is usually described as active and strongly people-oriented, and its skin is what makes its care routine unlike other cats'.",
    ],
    appearance: [
      "Sphynx are medium-sized cats with a wrinkled, suede-textured skin surface, large ears, and a visible muscular build. The CFA standard describes a range from apparently hairless to a covering of soft, peach-like fuzz. Many colours and patterns are recognised, visible in the skin pigment rather than in a coat.",
    ],
    temperament: [
      "The breed is commonly described as sociable, curious, and closely involved with its household. Individual cats vary, and early handling and environment shape adult behaviour considerably. A breed described as affectionate is a starting point for questions about a specific cat, not a guarantee about one.",
    ],
    activity: [
      "Sphynx are often described as active and playful, and interactive play plus climbing opportunities generally suit them. Activity levels vary by individual; providing somewhere to climb and something to investigate matters more than any particular exercise routine.",
    ],
    grooming: [
      "The absence of a full coat does not mean the absence of grooming — it changes it. Skin oils that a coat would normally absorb remain on the surface, so routine skin care, including ear cleaning, is commonly part of a Sphynx routine, and many owners bathe their cats periodically. Frequency varies by individual and is worth discussing with a veterinarian rather than following a general rule. Warmth also matters: a cat without an insulating coat is more exposed to cold, and to sun where outdoor access is allowed.",
    ],
    health: [
      "As with all breeds, Sphynx can be affected by inherited and lifestyle health conditions. Responsible breeders typically screen for relevant concerns, and rescue or adoption sources may have varying levels of health history. FaunaHub does not list specific medical conditions or treatments. Skin and temperature-related care questions for a specific cat should go to a licensed veterinarian.",
    ],
    responsibility: [
      "This breed's care routine is ongoing and different in kind from a coated cat's: skin care, warmth, and sun protection where relevant. Consider that commitment, along with the long-term cost of veterinary care and insurance, before adopting. Reputable shelters, rescues, and responsible breeders are appropriate sources.",
    ],
    householdContext: [
      "The breed generally suits indoor homes that can be kept comfortably warm and where someone is around — the Sphynx is frequently described as wanting company. As with any cat, introductions to other pets should be gradual and individual, and children should be supervised with cats and taught to leave an accessible retreat available.",
    ],
    faqs: [
      { question: "Are Sphynx cats hypoallergenic?", answer: "No. This is the most common misunderstanding about the breed. Cat allergens come mainly from proteins in saliva and skin secretions, which a hairless cat still produces — hair is a carrier, not the source. No cat breed is fully hypoallergenic, and anyone with allergies should spend time with a specific cat before committing." },
      { question: "Are Sphynx cats completely hairless?", answer: "No. The CFA standard states directly that Sphynx are not actually completely hairless, describing a range from apparent hairlessness to a covering of soft, peach-like fuzz, with short hair possible on the feet, outer edges of the ears, and tail." },
      { question: "Do Sphynx cats need baths?", answer: "Many owners bathe them periodically, because skin oils that a coat would normally absorb stay on the surface instead. How often depends on the individual cat's skin, and is a reasonable thing to ask a veterinarian about rather than to settle by a general schedule." },
      { question: "Do Sphynx cats get cold?", answer: "Without an insulating coat they are more exposed to cold than coated cats, so a comfortably warm home, warm places to rest, and attention to sun exposure where outdoor access is allowed are part of normal care for the breed. Specific guidance for a particular cat is a question for a veterinarian." },
    ],
  },
  sources: ["cfa-sphynx", "cfa-std-sphynx"],
  images: ["cat-sphynx-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
