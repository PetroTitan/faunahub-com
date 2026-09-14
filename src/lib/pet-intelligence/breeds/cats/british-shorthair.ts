import type { Breed } from "../../types.ts";

/** British Shorthair. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-british-shorthair",
  slug: "british-shorthair",
  species: "cat",
  name: "British Shorthair",
  originCountries: [
    "United Kingdom",
  ],
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryGroupSourceId: "cfa-show-rules-2026-27",
      registryUrl: "https://cfa.org/breed/british-shorthair/",
      sourceId: "cfa-british-shorthair",
    },
  ],
  measurements: {
    weightKg: [
      { max: 7.7, bound: "at-most", basis: { kind: "sex", sex: "male" }, statedAs: "males may grow as large as 17 pounds", sourceId: "cfa-british-shorthair" },
    ],
  },
  coat: {
    length: "short",
    statedAs: "short, dense coat contains more hairs per square inch than any other breed",
    sourceId: "cfa-british-shorthair",
  },
  traits: {},
  editorial: {
    intro: [
      "The British Shorthair is a sturdy, dense-coated cat breed with British origins. The breed is often described as even-tempered and relatively low-key compared with the most interactive cat breeds — although individual cats vary substantially.",
    ],
    appearance: [
      "British Shorthairs are medium-to-large cats with a round face, broad chest, and a notably dense, plush coat. The classic \"British Blue\" (grey) coat is familiar, but many other coat colours and patterns are recognised. Adults tend to develop a sturdy, full-bodied build.",
    ],
    temperament: [
      "The breed is often described as easy-going and affectionate without being clingy — many British Shorthairs prefer sitting near their people rather than on them. As with every breed, individual personality varies; some are highly playful, others are very mellow.",
    ],
    activity: [
      "Most British Shorthairs need daily play and engagement but are often less hyperactive than some other breeds. Interactive toys, climbing structures, and brief structured play sessions help maintain body condition and mental engagement.",
    ],
    grooming: [
      "The dense double coat benefits from regular brushing, particularly during seasonal sheds. Routine dental, nail, and ear care are sensible parts of any cat's routine. Discuss body-condition management with a veterinarian — the breed's dense coat and cobby build can make body condition harder to judge by eye, which is worth raising with a veterinarian.",
    ],
    health: [
      "As with all breeds, British Shorthairs can be affected by inherited and lifestyle health conditions. Responsible breeders typically test for relevant concerns. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, weight management, and any specific concerns for a particular cat with a licensed veterinarian.",
    ],
    responsibility: [
      "Plan for routine grooming, preventive veterinary care, and a long-term commitment — many cats live well into their teens. Reputable shelters, rescues, and responsible breeders are appropriate sources.",
    ],
    faqs: [
      { question: "Are British Shorthairs good for first-time cat owners?", answer: "The breed is sometimes recommended for first-time owners because of its often even temperament and relatively independent style, but no breed is universally easy. Spend time with a specific cat before deciding." },
      { question: "Are British Shorthairs lap cats?", answer: "Many British Shorthairs prefer sitting near their people rather than being held — though individual personality varies. Forced handling tends not to suit the breed; offering a calm presence often works better." },
      { question: "Do British Shorthairs shed a lot?", answer: "The dense coat sheds, particularly in seasonal moults. Regular brushing helps manage loose hair. No breed is fully non-shedding." },
      { question: "Are British Shorthairs hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing." },
    ],
  },
  sources: ["cfa-british-shorthair", "cfa-std-british-shorthair", "cfa-show-rules-2026-27"],
  images: ["cat-british-shorthair-001"],
  reviewedAt: "2026-09-14",
  publishedAt: "2026-05-21",
};
