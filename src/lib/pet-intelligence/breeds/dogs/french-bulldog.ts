import type { Breed } from "../../types.ts";

/** French Bulldog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-french-bulldog",
  slug: "french-bulldog",
  species: "dog",
  name: "French Bulldog",
  aliases: [
    "Frenchie",
  ],
  originCountries: [
    "England",
    "France",
  ],
  originNote:
    "The two registries FaunaHub cites record different origins for this breed: the AKC records England, while the FCI records France as the country of origin. FaunaHub shows both rather than choosing between them.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "305",
      registryUrl: "https://www.akc.org/dog-breeds/french-bulldog/",
      recognizedYear: 1898,
      sourceId: "akc-french-bulldog",
    },
    {
      registryId: "fci",
      status: "recognized",
      registryGroup: "Group 9 — Companion and Toy Dogs, Section: Small Molossian type Dogs",
      registryBreedCode: "101",
      registryUrl: "https://www.fci.be/en/nomenclature/FRENCH-BULLDOG-101.html",
      sourceId: "fci-french-bulldog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 27.9, max: 33, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 inches", sourceId: "akc-french-bulldog" },
    ],
    weightKg: [
      { max: 12.7, bound: "at-most", basis: { kind: "breed" }, statedAs: "under 28 pounds", sourceId: "akc-french-bulldog" },
    ],
  },
  coat: {
    length: "short",
    types: [
      "Smooth",
    ],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-french-bulldog",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-french-bulldog" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-french-bulldog" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-french-bulldog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-french-bulldog" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-french-bulldog" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-french-bulldog" },
  editorial: {
    intro: [
      "The French Bulldog is a small companion breed with a distinctive flat-faced (brachycephalic) head shape and large erect \"bat ears\". The breed has been very popular in recent decades. As with any breed, \"breed tendencies\" are not guarantees, and the brachycephalic head shape brings specific care considerations that should be discussed with a veterinarian before adoption.",
    ],
    appearance: [
      "French Bulldogs are small, compact, muscular dogs with a short smooth coat, a flat face, and the breed's characteristic erect ears. Recognised coat colours and patterns vary; confirm with a reputable breeder or shelter rather than relying on internet marketing of unusual colours.",
    ],
    temperament: [
      "French Bulldogs are often described as affectionate and attached to their people. Some individuals are very playful; others are calm and low-key. Like all breeds, behaviour depends on individual genetics, socialisation, training, health, and household environment.",
    ],
    activity: [
      "French Bulldogs typically need modest daily exercise — short walks and play sessions, often broken up across the day. The breed is sensitive to heat and to strenuous exercise because of its flat-faced anatomy; avoid hot weather, intense running, and unventilated travel. Specific exercise plans should be confirmed with a veterinarian for any individual dog.",
    ],
    grooming: [
      "The short coat is easy to brush, but the breed's facial folds and ears need routine cleaning and inspection. Discuss ear, skin-fold, and dental care with a veterinarian to avoid common care mistakes.",
    ],
    training: [
      "French Bulldogs are often described as cooperative with patient, positive-reinforcement training. Short, focused training sessions tend to work better than long, repetitive drills.",
    ],
    health: [
      "Brachycephalic context: the flat-faced head shape is associated with specific care considerations, particularly around heat, exertion and air travel, which are worth raising with a licensed veterinarian before they matter. FaunaHub does not provide diagnosis or treatment. Anyone considering this breed should research these considerations with a licensed veterinarian familiar with brachycephalic dogs, and choose a breeder or rescue that takes airway health seriously.",
    ],
    responsibility: [
      "Plan for veterinary care that may be more involved than the average small dog, including monitoring for heat sensitivity, airway concerns, and skin-fold care. Reputable shelters, rescues, and breeders that prioritise health and welfare are appropriate sources. Avoid pet-store or unverified online sellers, and be cautious about \"rare colour\" marketing.",
    ],
    faqs: [
      { question: "Are French Bulldogs good for apartments?", answer: "Some French Bulldogs do well in apartments because of their modest exercise tolerance, but the breed is not universally suitable for every apartment — landlord rules, noise sensitivity, heat exposure, and household routines all matter. Spend time with a specific dog before deciding." },
      { question: "Do French Bulldogs need a lot of exercise?", answer: "Most French Bulldogs benefit from short, regular exercise rather than long high-intensity sessions. The breed's brachycephalic head shape means heat and strenuous exercise can be a particular risk; confirm an exercise plan with a veterinarian." },
      { question: "Are French Bulldogs healthy dogs?", answer: "The flat-faced head shape is associated with specific care considerations, and and coat colours marketed as rare are worth asking a veterinarian and a reputable breeder about. FaunaHub does not diagnose or treat. Discuss the breed's care considerations with a licensed veterinarian before adoption." },
      { question: "Are French Bulldogs hypoallergenic?", answer: "No dog breed is fully hypoallergenic. Allergens come from dander and saliva as well as hair. Anyone with allergies should spend time with a specific dog before committing." },
    ],
  },
  sources: ["akc-french-bulldog", "fci-french-bulldog"],
  images: ["dog-french-bulldog-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
