import type { Breed } from "../../types.ts";

/** Great Dane. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-great-dane",
  slug: "great-dane",
  species: "dog",
  name: "Great Dane",
  aliases: [
    "Dane",
    "the Apollo of Dogs",
  ],
  originCountries: [
    "Germany",
  ],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "614",
      registryUrl: "https://www.akc.org/dog-breeds/great-dane/",
      recognizedYear: 1887,
      sourceId: "akc-great-dane",
    },
    {
      registryId: "fci",
      status: "recognized",
      registryGroup: "Group 2 — Pinscher and Schnauzer - Molossoid and Swiss Mountain and Cattledogs, Section: Molossian type",
      registryBreedCode: "235",
      registryUrl: "https://www.fci.be/en/nomenclature/GREAT-DANE-235.html",
      sourceId: "fci-great-dane",
    },
  ],
  measurements: {
    heightCm: [
      { min: 76.2, max: 81.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "30-32 inches (male)", sourceId: "akc-great-dane" },
      { min: 71.1, max: 76.2, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "28-30 inches (female)", sourceId: "akc-great-dane" },
    ],
    weightKg: [
      { min: 63.5, max: 79.4, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "140-175 pounds (male)", sourceId: "akc-great-dane" },
      { min: 49.9, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "110-140 pounds (female)", sourceId: "akc-great-dane" },
    ],
  },
  coat: {
    length: "short",
    types: [
      "Smooth",
    ],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-great-dane",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-great-dane" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-great-dane" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-great-dane" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-great-dane" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-great-dane" },
  },
  lifespanYears: { min: 7, max: 10, bound: "closed", basis: { kind: "breed" }, statedAs: "7-10 years", sourceId: "akc-great-dane" },
  editorial: {
    intro: [
      "The Great Dane is a giant breed developed in Germany, historically for hunting large game and later kept as a guarding and companion dog. The breed is often described as gentle and people-oriented, but its size is the defining practical fact: almost every ownership decision — housing, transport, cost, exercise, and lifespan expectations — follows from it.",
    ],
    appearance: [
      "Great Danes are tall, deep-chested dogs with a short, smooth coat. Males stand roughly 30 to 32 inches at the shoulder and females roughly 28 to 30 inches under the AKC standard — among the tallest height ranges the AKC publishes for any breed. Several coat colours and patterns are recognised, and build varies somewhat between lines.",
    ],
    temperament: [
      "Danes are commonly described as affectionate and steady with their own households, and the breed's nickname as a 'gentle giant' reflects that reputation. Reputation is not a guarantee: a dog of this size makes ordinary behaviour consequential, so socialisation and training matter more, not less, than they would for a small breed. Individual temperament varies by dog, line, and upbringing.",
    ],
    activity: [
      "Adult Great Danes generally need regular daily exercise but are not typically described as needing the sustained high-intensity work that some smaller working breeds do. Growing Danes are a separate question: giant-breed puppies grow quickly, and exercise planning during growth is something to discuss with a veterinarian rather than to infer from adult guidance.",
    ],
    grooming: [
      "The short, smooth coat is straightforward to maintain, and regular brushing manages the moderate shedding the AKC records for the breed. Routine dental, ear, and nail care are sensible parts of any Dane routine. Nail care in particular is easier when introduced early, given the size of the adult dog.",
    ],
    training: [
      "Early training and socialisation are widely recommended for this breed specifically because of adult size: behaviour that is manageable in a puppy may not be in a dog that weighs as much as an adult human. The AKC's published trainability scale places this breed in the middle. Consistent positive-reinforcement methods and early lead manners are common advice.",
    ],
    health: [
      "As with all breeds, Great Danes can be affected by inherited and lifestyle health conditions, and giant breeds have a shorter typical lifespan than most smaller breeds — the AKC publishes a life-expectancy range of 7 to 10 years for this breed, which is a breed-level published figure and not a prediction about any individual dog. Responsible breeders typically screen for relevant concerns. FaunaHub does not list specific medical conditions or treatments. Discuss growth, feeding, and preventive care for any specific dog with a licensed veterinarian.",
    ],
    responsibility: [
      "Great Danes are an expensive breed to keep: food, medication dosed by weight, boarding, transport, and equipment all scale with size. The published life-expectancy range is also markedly shorter than for smaller breeds — a breed-level figure rather than a forecast for a particular dog, but worth considering honestly before adopting. Reputable shelters, rescues, and responsible breeders are appropriate sources.",
    ],
    householdContext: [
      "Space matters less than it might seem — many Danes are described as relatively calm indoors — but floor space, vehicle size, and the practicalities of moving a large dog who becomes unwell are real considerations. Households with young children should account for the breed's size around small people regardless of temperament, with supervision as standard. First-time owners should plan budget and veterinary logistics realistically.",
    ],
    faqs: [
      { question: "How long do Great Danes live?", answer: "The AKC publishes a life expectancy of 7 to 10 years for this breed, which is shorter than for most smaller breeds. That is a breed-level published range, not a prediction about any individual dog; lifespan for a specific dog depends on genetics, care, and health history, and is a question for a veterinarian." },
      { question: "Do Great Danes need a big house?", answer: "Many Danes are described as fairly calm indoors, so floor area matters less than people expect. What does matter is practical: doorway and vehicle size, somewhere comfortable for a very large dog to lie down, and the ability to manage a heavy dog if they become unable to walk. Exercise needs are separate from house size." },
      { question: "Are Great Danes good with children?", answer: "Many Great Danes are described as gentle with people in their household, but no breed is universally safe with children, and this breed's size makes supervision especially important — an unintentional knock from a dog this large is significant. Behaviour depends on the individual dog, training, socialisation, and how children have learned to behave around dogs." },
      { question: "Are Great Danes expensive to keep?", answer: "Generally yes, relative to smaller dogs. Food, weight-dosed medication, boarding, equipment, and transport all scale with size, and giant-breed veterinary care can cost more for the same procedure. Budgeting realistically before adopting is worthwhile; FaunaHub's pet cost calculator is a starting point rather than a quote." },
    ],
  },
  sources: ["akc-great-dane", "fci-great-dane"],
  images: ["dog-great-dane-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
