import type { Breed } from "../../types.ts";

/** Ragdoll. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-ragdoll",
  slug: "ragdoll",
  species: "cat",
  name: "Ragdoll",
  originCountries: [
    "United States",
  ],
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/ragdoll/",
      recognizedYear: 2000,
      sourceId: "cfa-ragdoll",
    },
  ],
  measurements: {
    weightKg: [
      { min: 9.1, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "not unusual for a mature male's weight to reach or exceed 20 pounds", sourceId: "cfa-ragdoll" },
    ],
  },
  coat: {
    length: "medium",
    statedAs: "Moderately long length, with abundant guard hairs, but minimal woolly undercoat",
    sourceId: "cfa-std-ragdoll",
  },
  traits: {},
  editorial: {
    intro: [
      "The Ragdoll is a large, semi-longhaired cat breed developed in the United States in the 1960s. The breed name comes from the cat's often-relaxed body posture when handled, though individual cats vary widely. Ragdolls are typically kept as indoor companions.",
    ],
    appearance: [
      "Ragdolls are large cats with a semi-long, plush coat and colourpoint markings — the body is paler than the points on the face, ears, paws, and tail. Blue eyes are a breed characteristic. Recognised patterns include colourpoint, mitted, and bicolor.",
    ],
    temperament: [
      "The breed is often described as gentle, sociable, and comparatively relaxed about handling. Some individuals are playful and engaged; others are quieter. As with every breed, behaviour depends on individual personality, socialisation, and the household.",
    ],
    activity: [
      "Most Ragdolls benefit from regular interactive play and climbing options sized appropriately for a large breed. Many lines are typically calmer than highly active breeds, but they still need engagement to maintain body condition and mental wellbeing.",
    ],
    grooming: [
      "The semi-long coat benefits from several brushing sessions a week to prevent matting, particularly in shedding seasons. Routine dental, nail, and ear care are sensible parts of any Ragdoll routine.",
    ],
    health: [
      "As with all breeds, Ragdolls can be affected by inherited and lifestyle health conditions. Responsible breeders typically test for relevant concerns. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, weight management, and any specific concerns for a particular cat with a licensed veterinarian.",
    ],
    responsibility: [
      "Plan for regular grooming, sturdy furniture and climbing structures sized for a large breed, and the long-term cost of feline veterinary care. Many Ragdolls are kept entirely indoors; if any outdoor access is provided, it should be in a safe enclosure or under direct supervision. Reputable shelters, rescues, and breeders are appropriate sources.",
    ],
    faqs: [
      { question: "Do Ragdolls really go limp when you pick them up?", answer: "The breed has a reputation for relaxed handling — the source of the name 'Ragdoll' — but individual cats vary, and 'goes limp' is not a universal trait. Treat handling tolerance as a generalisation, not a guarantee." },
      { question: "Are Ragdolls good with children?", answer: "Many Ragdolls live happily in households with children, but no breed is universally child-safe and individual personality matters. Adult supervision and respect for the cat's space are important for any cat." },
      { question: "Are Ragdolls hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing." },
      { question: "Can Ragdolls be outdoor cats?", answer: "Many breed sources strongly recommend keeping Ragdolls indoors because the breed is often described as trusting. If any outdoor access is provided, a secure 'catio' or supervised harness time is generally safer than free-roaming." },
    ],
  },
  sources: ["cfa-ragdoll", "cfa-std-ragdoll"],
  images: ["cat-ragdoll-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
