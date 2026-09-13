import type { Breed } from "../../types.ts";

/** German Shepherd. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-german-shepherd",
  slug: "german-shepherd",
  species: "dog",
  name: "German Shepherd",
  canonicalCommonName: "German Shepherd Dog",
  aliases: [
    "GSD",
    "Alsatian (U.K.)",
    "German Shepherd Dog",
  ],
  originCountries: [
    "Germany",
  ],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "812",
      registryUrl: "https://www.akc.org/dog-breeds/german-shepherd-dog/",
      recognizedYear: 1908,
      sourceId: "akc-german-shepherd",
    },
    {
      registryId: "fci",
      status: "recognized",
      registryGroup: "Group 1 — Sheepdogs and Cattledogs (except Swiss Cattledogs), Section: Sheepdogs",
      registryBreedCode: "166",
      registryUrl: "https://www.fci.be/en/nomenclature/GERMAN-SHEPHERD-DOG-166.html",
      sourceId: "fci-german-shepherd",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-26 inches (male)", sourceId: "akc-german-shepherd" },
      { min: 55.9, max: 61, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-24 inches (female)", sourceId: "akc-german-shepherd" },
    ],
    weightKg: [
      { min: 29.5, max: 40.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "65-90 pounds (male)", sourceId: "akc-german-shepherd" },
      { min: 22.7, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "50-70 pounds (female)", sourceId: "akc-german-shepherd" },
    ],
  },
  coat: {
    length: "medium",
    types: [
      "Double",
    ],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-german-shepherd",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-shepherd" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-shepherd" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-shepherd" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-shepherd" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-shepherd" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-german-shepherd" },
  editorial: {
    intro: [
      "The German Shepherd is a large herding-origin working breed developed in Germany in the late 19th and early 20th centuries. Modern German Shepherds are widely used in service, working, and companion roles. As with all breeds, \"breed tendencies\" describe what is sometimes seen — not what is guaranteed in any specific dog.",
    ],
    appearance: [
      "German Shepherds are large, athletically built dogs with a double coat that can be medium or long depending on line. The most familiar coat pattern is black-and-tan, but many other recognised colour patterns exist. Show-line and working-line German Shepherds often differ in build, with working lines typically more straight-backed and squarer.",
    ],
    temperament: [
      "German Shepherds are often described as alert, intelligent, and trainable, with a strong bond to handlers. Some lines and individuals can be reserved with strangers; others are more outgoing. Like every breed, early socialisation, consistent training, and household routines shape adult behaviour far more than breed alone.",
    ],
    activity: [
      "Most German Shepherds benefit from substantial daily exercise and mental work — long walks, structured training, scent or obedience tasks. Bored, under-exercised dogs of this breed often develop unwanted behaviours.",
    ],
    grooming: [
      "The double coat sheds throughout the year, with heavier seasonal sheds. Regular brushing helps manage loose hair. Routine ear, dental, and nail care are sensible parts of any German Shepherd routine.",
    ],
    training: [
      "German Shepherds are widely described as trainable using consistent positive-reinforcement methods. They tend to respond well to structured routines, clear cues, and engaged handlers. First-time owners should plan for ongoing training time, not a single course; classes with a qualified force-free trainer are commonly recommended.",
    ],
    health: [
      "German Shepherds can be affected by inherited and lifestyle health conditions. Responsible breeders typically screen for joint and other concerns. FaunaHub does not list specific medical conditions or treatments; discuss preventive care with a licensed veterinarian.",
    ],
    responsibility: [
      "A German Shepherd is a substantial commitment in time, space, exercise, training, and budget. They are not a default choice for an apartment, a busy first-time owner, or a household that cannot reliably offer daily mental engagement. Reputable shelters, rescues, and responsible breeders are appropriate sources.",
    ],
    faqs: [
      { question: "Are German Shepherds good family dogs?", answer: "Many German Shepherds live successfully in families, but no breed is universally child-safe and the breed's size, energy, and training needs require committed adult oversight. Behaviour varies by individual, training, and household." },
      { question: "Do German Shepherds need professional training?", answer: "Many owners benefit from working with a qualified force-free trainer, particularly for first-time owners or for dogs with specific behaviour concerns. Professional training is not a substitute for daily handler engagement." },
      { question: "How big do German Shepherds get?", answer: "German Shepherds are typically large dogs, though exact size varies between lines and individuals. Discuss expectations for a specific dog with the breeder, shelter, or your veterinarian." },
      { question: "Are German Shepherds aggressive?", answer: "Aggression is not a universal breed trait. Behaviour depends on individual genetics, socialisation, training, environment, and handler experience. Any dog can show concerning behaviour if its needs are not met; consult a qualified behaviour professional for individual concerns." },
    ],
  },
  sources: ["akc-german-shepherd", "fci-german-shepherd"],
  images: ["dog-german-shepherd-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
