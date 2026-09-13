import type { Breed } from "../../types.ts";

/** Border Collie. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-border-collie",
  slug: "border-collie",
  species: "dog",
  name: "Border Collie",
  aliases: [
    "BC",
  ],
  originCountries: [
    "England/Scotland",
    "Great Britain",
  ],
  originNote:
    "The two registries FaunaHub cites record different origins for this breed: the AKC records England/Scotland, while the FCI records Great Britain as the country of origin. FaunaHub shows both rather than choosing between them.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "835",
      registryUrl: "https://www.akc.org/dog-breeds/border-collie/",
      recognizedYear: 1995,
      sourceId: "akc-border-collie",
    },
    {
      registryId: "fci",
      status: "recognized",
      registryGroup: "Group 1 — Sheepdogs and Cattledogs (except Swiss Cattledogs), Section: Sheepdogs",
      registryBreedCode: "297",
      registryUrl: "https://www.fci.be/en/nomenclature/BORDER-COLLIE-297.html",
      sourceId: "fci-border-collie",
    },
  ],
  measurements: {
    heightCm: [
      { min: 48.3, max: 55.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "19-22 inches (male)", sourceId: "akc-border-collie" },
      { min: 45.7, max: 53.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "18-21 inches (female)", sourceId: "akc-border-collie" },
    ],
    weightKg: [
      { min: 13.6, max: 24.9, bound: "closed", basis: { kind: "breed" }, statedAs: "30-55 pounds", sourceId: "akc-border-collie" },
    ],
  },
  coat: {
    length: "medium",
    types: [
      "Wavy",
      "Double",
    ],
    statedAs: "AKC coat length: Medium; coat type: Wavy, Double",
    sourceId: "akc-border-collie",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-border-collie" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-border-collie" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-border-collie" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-border-collie" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-border-collie" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-border-collie" },
  editorial: {
    intro: [
      "The Border Collie is a medium-sized herding breed developed on the Anglo-Scottish border. The breed has a strong working heritage and is widely described as highly active, intelligent, and biddable. Border Collies are often described as a poor choice for households unable to commit to substantial daily work, and as better suited to active homes that want a deeply engaged dog.",
    ],
    appearance: [
      "Border Collies are medium-sized, athletic dogs with a double coat that may be rough or smooth. The classic black-and-white coat is familiar, but the breed comes in many recognised colour patterns. Working-line and show-line dogs may differ visibly in build.",
    ],
    temperament: [
      "Border Collies are widely described as intense, focused, and sensitive to handler cues. The breed's working drive means that many individuals are happiest when given a job — herding, training, agility, scent work, or other structured activities. As with all breeds, behaviour varies by individual, line, and household.",
    ],
    activity: [
      "Most Border Collies need substantial daily exercise and equally substantial mental work. Long walks alone are usually not enough; structured training, retrieval, scent tasks, agility, or herding-style work are commonly part of a healthy routine. Without enough engagement, dogs of this breed are often described as developing repetitive, obsessive, or destructive behaviours.",
    ],
    grooming: [
      "The double coat sheds throughout the year, with heavier seasonal sheds. Regular brushing helps manage loose hair and dirt. Routine dental, ear, and nail care are sensible parts of any Border Collie routine.",
    ],
    training: [
      "Border Collies are widely described as very trainable using consistent, positive-reinforcement methods. The breed's sensitivity also means harsh handling tends to backfire. First-time owners should plan for ongoing training time, not a single course; many owners benefit from working with a qualified force-free trainer or attending classes focused on the breed's typical needs.",
    ],
    health: [
      "As with all breeds, Border Collies can be affected by inherited and lifestyle health conditions. Responsible breeders typically screen for relevant concerns. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, weight management, and any specific concerns for a particular dog with a licensed veterinarian.",
    ],
    responsibility: [
      "Border Collies are not a default choice for a quiet apartment, a sedentary household, or an owner whose schedule cannot reliably accommodate daily mental and physical work. Mismatched placements are a common reason this breed shows up in rescues. Be honest about the time and energy you can commit before adopting.",
    ],
    faqs: [
      { question: "Are Border Collies good apartment dogs?", answer: "Border Collies are generally not a default match for apartment living. Some individuals can do well in apartments with very active owners and a long daily work plan, but the breed's energy and mental needs are substantial. Spend time with a specific dog before deciding." },
      { question: "Do Border Collies need a job?", answer: "Many do best with structured daily activity that involves their mind as well as body — training, scent work, agility, herding-style play, or other engaging tasks. Without it, dogs of this breed often develop unwanted behaviours." },
      { question: "Are Border Collies good with children?", answer: "Many Border Collies live happily in households with children, but no breed is universally child-safe. The breed's herding instincts can include chasing or nipping at fast-moving objects, including running children, without specific training. Adult supervision matters." },
      { question: "Are Border Collies hypoallergenic?", answer: "No dog breed is fully hypoallergenic. Anyone with allergies should spend time with a specific dog before committing." },
    ],
  },
  sources: ["akc-border-collie", "fci-border-collie"],
  images: ["dog-border-collie-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
