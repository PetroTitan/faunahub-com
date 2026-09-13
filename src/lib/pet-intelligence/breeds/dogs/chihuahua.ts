import type { Breed } from "../../types.ts";

/** Chihuahua. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-chihuahua",
  slug: "chihuahua",
  species: "dog",
  name: "Chihuahua",
  aliases: [
    "Chi",
  ],
  originCountries: [
    "Mexican State of Chihuahua",
    "Mexico",
  ],
  originNote:
    "The two registries FaunaHub cites record different origins for this breed: the AKC records Mexican State of Chihuahua, while the FCI records Mexico as the country of origin. FaunaHub shows both rather than choosing between them.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "503",
      registryUrl: "https://www.akc.org/dog-breeds/chihuahua/",
      recognizedYear: 1904,
      sourceId: "akc-chihuahua",
    },
    {
      registryId: "fci",
      status: "recognized",
      registryGroup: "Group 9 — Companion and Toy Dogs, Section: Chihuahueno",
      registryBreedCode: "218",
      registryUrl: "https://www.fci.be/en/nomenclature/CHIHUAHUA-218.html",
      sourceId: "fci-chihuahua",
    },
  ],
  measurements: {
    heightCm: [
      { min: 12.7, max: 20.3, bound: "closed", basis: { kind: "breed" }, statedAs: "5-8 inches", sourceId: "akc-chihuahua" },
    ],
    weightKg: [
      { max: 2.7, bound: "at-most", basis: { kind: "breed" }, statedAs: "not exceeding 6 pounds", sourceId: "akc-chihuahua" },
    ],
  },
  coat: {
    length: "short",
    types: [
      "Smooth",
    ],
    statedAs: "AKC coat length: Short, Medium; coat type: Smooth",
    sourceId: "akc-chihuahua",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-chihuahua" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-chihuahua" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-chihuahua" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chihuahua" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-chihuahua" },
  },
  lifespanYears: { min: 14, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "14-16 years", sourceId: "akc-chihuahua" },
  editorial: {
    intro: [
      "The Chihuahua is a toy breed associated with Mexico, and is among the smallest breeds recognised by major registries — the AKC standard gives a weight not exceeding 6 pounds. Small size is often read as low effort, and that is the most common misunderstanding about the breed: Chihuahuas are widely described as alert, active, and strongly bonded to their people, and they need training and socialisation like any other dog.",
    ],
    appearance: [
      "Chihuahuas are very small dogs with a rounded skull and large, erect ears. The breed appears in both a smooth-coat and a long-coat variety, and a wide range of colours is recognised. Build varies between individuals within the standard's limits.",
    ],
    temperament: [
      "The breed is commonly described as confident, alert, and closely attached to one or a few people. Chihuahuas are also frequently described as wary of strangers, and under-socialisation is a common contributor to defensive behaviour that owners later find difficult. As with all breeds, the individual dog, its early experiences, and its household matter more than breed reputation.",
    ],
    activity: [
      "Chihuahuas are more active than their size suggests — the AKC's published energy scale places this breed at the high end. Daily walks and play are still part of a healthy routine, scaled appropriately. Short legs do not mean no exercise; they mean shorter distances and attention to heat, cold, and rough terrain.",
    ],
    grooming: [
      "Grooming needs are modest for the smooth-coat variety and somewhat higher for the long coat. The AKC records the breed in the low band of its shedding scale. Routine dental, ear, and nail care matter for this breed, and small-breed dental care in particular is worth discussing with a veterinarian as part of preventive planning.",
    ],
    training: [
      "Training and socialisation are widely recommended and often skipped for small dogs, because unwanted behaviour is easier to pick up and carry away than to address. The AKC's published trainability scale places this breed in the middle. Consistent positive-reinforcement methods, early exposure to varied people and environments, and treating the dog as a dog rather than as an accessory are the usual advice.",
    ],
    health: [
      "As with all breeds, Chihuahuas can be affected by inherited and lifestyle health conditions, and toy breeds have care considerations that differ from larger dogs. Responsible breeders typically screen for relevant concerns. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, dental planning, weight management, and any specific concerns with a licensed veterinarian.",
    ],
    responsibility: [
      "Chihuahuas are long-lived relative to many breeds — the AKC publishes a life-expectancy range of 14 to 16 years — so adopting one is a long commitment. Reputable shelters, rescues, and responsible breeders are appropriate sources; the breed is common in rescue. Small size reduces some costs but does not remove the need for training, veterinary care, insurance planning, or time.",
    ],
    householdContext: [
      "The breed's size suits apartments in terms of space, though vocalising may matter to close neighbours. Households with very young children should consider that a small dog is more easily injured by accidental handling, and that supervision protects both the child and the dog. First-time owners can do well with the breed, provided they plan for socialisation and training rather than assuming a small dog needs neither.",
    ],
    faqs: [
      { question: "Are Chihuahuas good apartment dogs?", answer: "Size-wise they suit apartments well. Two things are worth planning for: the AKC records the breed in the high band of its barking scale, which may matter with close neighbours, and the breed still needs daily walks and mental engagement. Individual dogs vary considerably in how vocal they are." },
      { question: "Do Chihuahuas need training?", answer: "Yes — as much as any other breed. Small dogs are often exempted from training because unwanted behaviour is physically manageable, which tends to make it more entrenched rather than less. Early socialisation and consistent positive-reinforcement training are widely recommended for this breed in particular." },
      { question: "Are Chihuahuas good with children?", answer: "No breed is universally safe with children. For a very small dog the concern runs both ways: accidental rough handling can injure the dog, and a frightened dog may react defensively. Supervision, teaching children how to approach dogs, and assessing the individual dog matter far more than breed reputation." },
      { question: "How long do Chihuahuas live?", answer: "The AKC publishes a life expectancy of 14 to 16 years for this breed, which is long relative to many breeds. That is a breed-level published range and not a prediction about any individual dog. Plan for a long commitment, and discuss lifelong care with a veterinarian." },
    ],
  },
  sources: ["akc-chihuahua", "fci-chihuahua"],
  images: ["dog-chihuahua-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
