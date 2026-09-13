import type { Breed } from "../../types.ts";

/** Bengal. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-bengal-cat",
  slug: "bengal-cat",
  species: "cat",
  name: "Bengal",
  originCountries: [
    "United States",
  ],
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/bengal/",
      recognizedYear: 2018,
      sourceId: "cfa-bengal-cat",
    },
  ],
  coat: {
    length: "variable",
    statedAs: "Bengals can be either shorthaired or longhaired",
    sourceId: "cfa-bengal-cat",
  },
  traits: {},
  editorial: {
    intro: [
      "The Bengal is a domestic cat breed developed through crossbreeding programmes with the wild Asian leopard cat (Prionailurus bengalensis) several generations back. Modern registered Bengals are generally many generations removed from the wild ancestor and are considered domestic cats. Bengals are widely described as high-energy and demanding, and are often said to be a poor match for households that cannot offer much daily engagement.",
    ],
    appearance: [
      "Bengals are athletic, muscular cats with a distinctive spotted or marbled coat, often with glittery-looking guard hairs. Coat colours include brown, silver, snow, and other recognised variations. Generational labels (F1, F2, F3, etc.) describe how many generations a cat is from a wild ancestor — most cats sold as pets are F4 and later.",
    ],
    temperament: [
      "Bengals are widely described as intelligent, active, and interactive — many are demanding of their owners' time and engagement. Some individuals are friendly and confident; others are reserved with strangers. Like every breed, behaviour varies by individual, generation, and household.",
    ],
    activity: [
      "Most Bengals need substantial daily play, climbing, and mental enrichment. Tall cat trees, puzzle feeders, interactive toys, and reliable daily play sessions help keep the cat engaged. Bored Bengals are commonly described as developing unwanted behaviours — opening cupboards, knocking things off shelves, vocal demands.",
    ],
    grooming: [
      "The short coat is low-maintenance — weekly brushing is typically enough. Routine dental, nail, and ear care are sensible parts of any cat's routine.",
    ],
    health: [
      "As with all breeds, Bengals can be affected by inherited and lifestyle health conditions. Responsible breeders typically test for relevant concerns. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care with a licensed veterinarian.",
    ],
    responsibility: [
      "Bengals are not a default match for households unable to commit substantial daily engagement. Local law in some jurisdictions also restricts ownership of early-generation hybrid cats — verify before acquiring. Reputable breeders who prioritise welfare, and rescues that specialise in the breed, are appropriate sources.",
    ],
    faqs: [
      { question: "Are Bengal cats good for first-time cat owners?", answer: "Bengals are generally not a default match for first-time owners because of their high activity and engagement needs. Some experienced cat households thrive with the breed; others find the energy level overwhelming. Be realistic about your daily time and engagement capacity." },
      { question: "Are Bengals legal to own?", answer: "Most modern registered Bengals are many generations from any wild ancestor and are treated as domestic cats. However, some jurisdictions restrict ownership of early-generation hybrid cats. Verify local laws before acquiring a Bengal, particularly if a breeder mentions a low F-generation." },
      { question: "Do Bengals get along with other pets?", answer: "Some Bengals live happily with other cats or with dogs after gradual, supervised introductions. Others prefer to be the only pet. Individual personality and structured introductions matter." },
      { question: "Are Bengals hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing." },
    ],
  },
  sources: ["cfa-bengal-cat", "cfa-std-bengal-cat"],
  images: ["cat-bengal-cat-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
