/**
 * Dog breed records.
 *
 * Structured values come from the AKC breed page (group, height, weight, life
 * expectancy, coat, trait bands) and the FCI nomenclature entry (group,
 * section, breed number, country of origin, recognition status) for each breed.
 *
 * Seven of these twelve carry an `originNote`, because the AKC and the FCI
 * genuinely disagree about where the breed comes from — two of them flatly
 * (the Poodle: AKC Germany, FCI France; the French Bulldog: AKC England, FCI
 * France). Neither registry is being corrected here.
 *
 * Generated once from the verified acquisition run, then maintained by hand.
 * Re-check any value against its source with `npm run breeds:verify`.
 */
import type { Breed } from "../types.ts";

export const DOG_BREEDS: readonly Breed[] = [
  {
    id: "dog-labrador-retriever",
    slug: "labrador-retriever",
    species: "dog",
    name: "Labrador Retriever",
    aliases: [
      "Lab",
    ],
    originCountries: [
      "Canada",
      "Great Britain",
    ],
    originNote:
      "The two registries FaunaHub cites record different origins for this breed: the AKC records Canada, while the FCI records Great Britain as the country of origin. FaunaHub shows both rather than choosing between them.",
    recognition: [
      {
        registryId: "akc",
        status: "recognized",
        registryGroup: "Sporting Group",
        registryBreedCode: "108",
        registryUrl: "https://www.akc.org/dog-breeds/labrador-retriever/",
        recognizedYear: 1917,
        sourceId: "akc-labrador-retriever",
      },
      {
        registryId: "fci",
        status: "recognized",
        registryGroup: "Group 8 — Retrievers - Flushing Dogs - Water Dogs, Section: Retrievers",
        registryBreedCode: "122",
        registryUrl: "https://www.fci.be/en/nomenclature/LABRADOR-RETRIEVER-122.html",
        sourceId: "fci-labrador-retriever",
      },
    ],
    measurements: {
      heightCm: [
        { min: 57.2, max: 62.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "22.5-24.5 inches (male)", sourceId: "akc-labrador-retriever" },
        { min: 54.6, max: 59.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21.5-23.5 inches (female)", sourceId: "akc-labrador-retriever" },
      ],
      weightKg: [
        { min: 29.5, max: 36.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "65-80 pounds (male)", sourceId: "akc-labrador-retriever" },
        { min: 24.9, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "55-70 pounds (female)", sourceId: "akc-labrador-retriever" },
      ],
    },
    coat: {
      length: "short",
      types: [
        "Double",
      ],
      statedAs: "AKC coat length: Short; coat type: Double",
      sourceId: "akc-labrador-retriever",
    },
    traits: {
      shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-labrador-retriever" },
      groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-labrador-retriever" },
      exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-labrador-retriever" },
      trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-labrador-retriever" },
      vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-labrador-retriever" },
    },
    lifespanYears: { min: 11, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 years", sourceId: "akc-labrador-retriever" },
    editorial: {
      intro: [
        "The Labrador Retriever is one of the most popular dog breeds in many countries. It was originally developed as a working retriever for hunters and water work, and modern Labradors are often described as friendly, active, and trainable. As with any breed, \"breed tendencies\" describe what is sometimes seen in members of the breed — not what is guaranteed in any specific dog.",
      ],
      appearance: [
        "Labradors are medium-to-large, athletically built dogs with a short, dense double coat. Recognised coat colours typically include black, yellow, and chocolate. The breed is known for an otter-like tail, a broad head, and an alert, friendly expression. Show-line and working-line Labradors may differ visibly in build.",
      ],
      temperament: [
        "Labradors are often described as sociable and people-oriented, with a strong play and retrieve drive in many lines. Individual dogs vary; some Labradors are calm and gentle, others are very high-energy and need consistent exercise and training. Early socialisation and structured training shape adult behaviour far more than breed alone.",
      ],
      activity: [
        "Most Labradors benefit from substantial daily exercise — a combination of walks, off-lead activity in safe environments, and mental enrichment. Many Labradors enjoy water and fetching games. Without enough physical and mental work, dogs of this breed can become bored and develop unwanted behaviours.",
      ],
      grooming: [
        "The short double coat sheds throughout the year, with heavier shedding seasons. Regular brushing helps manage loose hair. Routine ear checks, dental care, and nail trimming are sensible parts of any Labrador care routine.",
      ],
      training: [
        "Labradors are widely described as trainable, with consistent positive-reinforcement methods working well for most individuals. Early socialisation with people, other dogs, and varied environments matters for any breed. The breed's food motivation is a useful training tool but also means body condition needs attention to avoid weight gain.",
      ],
      health: [
        "As with all breeds, Labradors can be affected by inherited and lifestyle health conditions. Responsible breeders typically screen for joint and other conditions; rescue/adoption sources may have varying levels of health history. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, weight management, and any specific concerns with a licensed veterinarian.",
      ],
      responsibility: [
        "Before adopting any dog, consider time, budget, housing, exercise capacity, and long-term commitment — typically more than a decade for many breeds. Reputable shelters, rescues, and responsible breeders are appropriate sources; avoid pet-store or unverified online sellers. Local laws and landlord rules may also affect breed choice.",
      ],
      faqs: [
        { question: "Are Labradors good with children?", answer: "Many Labradors are described as friendly with people, including children, but no breed is universally safe with children. Behaviour depends on the individual dog, training, socialisation, supervision, and the children's experience around dogs. Always supervise interactions between children and any dog." },
        { question: "Do Labradors need a lot of exercise?", answer: "Most Labradors benefit from substantial daily exercise and mental enrichment. Specific needs vary by age, health, and individual energy level. Discuss exercise planning for a specific dog with your veterinarian." },
        { question: "Are Labradors easy for first-time dog owners?", answer: "Labradors are sometimes recommended for first-time owners because of their reputation for trainability and sociability, but they are a substantial commitment — high energy as young dogs, food-motivated (so weight management matters), and large enough to need consistent training. First-time owners should plan time and budget realistically." },
        { question: "Are Labradors hypoallergenic?", answer: "No dog breed is fully hypoallergenic. Allergens come from dander and saliva as well as hair. Anyone with allergies should spend time with a specific dog before committing." },
      ],
    },
    sources: ["akc-labrador-retriever", "fci-labrador-retriever"],
    images: ["dog-labrador-retriever-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-05-21",
  },
  {
    id: "dog-golden-retriever",
    slug: "golden-retriever",
    species: "dog",
    name: "Golden Retriever",
    aliases: [
      "Golden",
    ],
    originCountries: [
      "Scotland",
      "Great Britain",
    ],
    originNote:
      "The two registries FaunaHub cites record different origins for this breed: the AKC records Scotland, while the FCI records Great Britain as the country of origin. FaunaHub shows both rather than choosing between them.",
    recognition: [
      {
        registryId: "akc",
        status: "recognized",
        registryGroup: "Sporting Group",
        registryBreedCode: "107",
        registryUrl: "https://www.akc.org/dog-breeds/golden-retriever/",
        recognizedYear: 1925,
        sourceId: "akc-golden-retriever",
      },
      {
        registryId: "fci",
        status: "recognized",
        registryGroup: "Group 8 — Retrievers - Flushing Dogs - Water Dogs, Section: Retrievers",
        registryBreedCode: "111",
        registryUrl: "https://www.fci.be/en/nomenclature/GOLDEN-RETRIEVER-111.html",
        sourceId: "fci-golden-retriever",
      },
    ],
    measurements: {
      heightCm: [
        { min: 58.4, max: 61, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-24 inches (male)", sourceId: "akc-golden-retriever" },
        { min: 54.6, max: 57.2, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21.5-22.5 inches (female)", sourceId: "akc-golden-retriever" },
      ],
      weightKg: [
        { min: 29.5, max: 34, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "65-75 pounds (male)", sourceId: "akc-golden-retriever" },
        { min: 24.9, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "55-65 pounds (female)", sourceId: "akc-golden-retriever" },
      ],
    },
    coat: {
      length: "medium",
      types: [
        "Double",
      ],
      statedAs: "AKC coat length: Medium; coat type: Double",
      sourceId: "akc-golden-retriever",
    },
    traits: {
      shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-golden-retriever" },
      groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-golden-retriever" },
      exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-golden-retriever" },
      trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-golden-retriever" },
      vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-golden-retriever" },
    },
    lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-golden-retriever" },
    editorial: {
      intro: [
        "The Golden Retriever is a medium-to-large sporting breed originally developed in Scotland in the 19th century as a hunting retriever. Modern Goldens are often described as sociable, eager to please, and active. Temperament and behaviour vary between individuals, lines, and training.",
      ],
      appearance: [
        "Goldens have a dense, water-repellent double coat in shades from light cream to dark gold, with a feathered tail and distinctive friendly expression. Show-line and working-line Goldens often differ in coat length and overall build, and adult body weights vary substantially across responsible breeders.",
      ],
      temperament: [
        "Goldens are widely described as people-oriented and eager to engage. Some individuals are calm and gentle; others are very high-energy through young adulthood. Like all dogs, behaviour depends on socialisation, training, environment, exercise outlets, and the experience of the people around the dog.",
      ],
      activity: [
        "Most Goldens benefit from substantial daily activity — walks, off-lead exercise in safe environments, and mental enrichment such as scent work or fetch. Many Goldens enjoy swimming. Bored or under-exercised dogs of this breed often develop unwanted behaviours.",
      ],
      grooming: [
        "The long double coat sheds year-round, with heavier seasonal sheds. Regular brushing several times a week, periodic baths, and routine ear/dental/nail care help keep the coat and skin in good condition. The feathered legs and tail can pick up mud and debris, so wipe-downs after outdoor activity are common.",
      ],
      training: [
        "Goldens are often described as trainable, with positive-reinforcement methods working well for many individuals. Early socialisation with people, other dogs, and varied environments matters for any breed.",
      ],
      health: [
        "Like all breeds, Goldens can be affected by inherited and lifestyle health conditions. Responsible breeders typically screen for joint and other concerns; rescues and shelters may have varying levels of background information. FaunaHub does not list specific medical conditions or treatments; discuss preventive care with a licensed veterinarian.",
      ],
      responsibility: [
        "Plan for a long-term commitment — many large dogs live well beyond a decade — and for substantial recurring costs including food, preventive vet care, grooming, training, and potentially emergency care. Reputable shelters, rescues, and responsible breeders are appropriate sources; avoid pet-store or unverified online sellers.",
      ],
      faqs: [
        { question: "Are Golden Retrievers good with families?", answer: "Goldens are widely described as people-oriented, but no breed is universally safe with children, and behaviour varies by individual, age, training, and household. Adult supervision and gentle handling matter for any breed." },
        { question: "How much exercise does a Golden Retriever need?", answer: "Most Goldens benefit from substantial daily exercise as adults; puppies and senior dogs have different needs. Discuss specifics with your veterinarian for an individual dog." },
        { question: "Do Goldens shed a lot?", answer: "Yes — Goldens have a long double coat that sheds year-round, with heavier seasonal sheds. Regular brushing helps manage this. No breed is fully non-shedding." },
        { question: "Are Goldens hypoallergenic?", answer: "No dog breed is fully hypoallergenic. Anyone with allergies should spend time with a specific dog before committing." },
      ],
    },
    sources: ["akc-golden-retriever", "fci-golden-retriever"],
    images: ["dog-golden-retriever-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-05-21",
  },
  {
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
  },
  {
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
  },
  {
    id: "dog-beagle",
    slug: "beagle",
    species: "dog",
    name: "Beagle",
    originCountries: [
      "England",
      "Great Britain",
    ],
    originNote:
      "The two registries FaunaHub cites record different origins for this breed: the AKC records England, while the FCI records Great Britain as the country of origin. FaunaHub shows both rather than choosing between them.",
    recognition: [
      {
        registryId: "akc",
        status: "recognized",
        registryGroup: "Hound Group",
        registryBreedCode: "404",
        registryUrl: "https://www.akc.org/dog-breeds/beagle/",
        recognizedYear: 1885,
        sourceId: "akc-beagle",
      },
      {
        registryId: "fci",
        status: "recognized",
        registryGroup: "Group 6 — Scent hounds and related breeds, Section: Scent hounds",
        registryBreedCode: "161",
        registryUrl: "https://www.fci.be/en/nomenclature/BEAGLE-161.html",
        sourceId: "fci-beagle",
      },
    ],
    measurements: {
      heightCm: [
        { max: 33, bound: "at-most", basis: { kind: "variety", variety: "13 inches & under" }, statedAs: "13 inches & under", sourceId: "akc-beagle" },
        { min: 33, max: 38.1, bound: "closed", basis: { kind: "variety", variety: "13-15 inches" }, statedAs: "13-15 inches", sourceId: "akc-beagle" },
      ],
      weightKg: [
        { max: 9.1, bound: "at-most", basis: { kind: "variety", variety: "13 inches & under" }, statedAs: "under 20 pounds (13 inches & under)", sourceId: "akc-beagle" },
        { min: 9.1, max: 13.6, bound: "closed", basis: { kind: "variety", variety: "13-15 inches" }, statedAs: "20-30 pounds (13-15 inches)", sourceId: "akc-beagle" },
      ],
    },
    coat: {
      length: "short",
      types: [
        "Smooth",
      ],
      statedAs: "AKC coat length: Short; coat type: Smooth",
      sourceId: "akc-beagle",
    },
    traits: {
      shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-beagle" },
      groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-beagle" },
      exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-beagle" },
      trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-beagle" },
      vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-beagle" },
    },
    lifespanYears: { min: 10, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "10-15 years", sourceId: "akc-beagle" },
    editorial: {
      intro: [
        "The Beagle is a small-to-medium scent hound originally developed for hunting in packs. Modern Beagles are often described as friendly and curious, with a strong nose. As with all breeds, \"breed tendencies\" are generalisations — individual Beagles vary widely.",
      ],
      appearance: [
        "Beagles are compact, sturdily built dogs with a short tri-colour or two-colour coat, large drop ears, and a gently curved tail often carried upright. Breed standards recognise different size varieties; confirm size expectations with a reputable source for any specific dog.",
      ],
      temperament: [
        "Beagles are often described as sociable, playful, and pack-oriented. The breed's strong scenting drive can mean that a Beagle on a trail follows their nose rather than the human calling them. Like all dogs, behaviour varies by individual, socialisation, training, and environment.",
      ],
      activity: [
        "Most Beagles benefit from substantial daily exercise — walks, safe off-lead time in enclosed areas, and scent-based enrichment. The breed's nose can lead to wandering, so secure fencing and reliable recall training matter.",
      ],
      grooming: [
        "The short coat sheds throughout the year. Regular brushing and routine ear, dental, and nail care help keep the dog in good condition. The long drop ears benefit from regular inspection and gentle cleaning under veterinary guidance.",
      ],
      training: [
        "Beagles are often described as cooperative with patient, positive-reinforcement training, although the breed's scenting drive can make outdoor recall a recurring training challenge. Short, engaging sessions and food-motivated rewards work well for many individuals.",
      ],
      health: [
        "As with all breeds, Beagles can be affected by inherited and lifestyle health conditions. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, body condition, and any specific concerns for a particular dog with a licensed veterinarian.",
      ],
      responsibility: [
        "Plan for a vocal, scent-driven dog with substantial exercise and enrichment needs. Reputable shelters, rescues, and responsible breeders are appropriate sources. Beagles historically have been used in laboratory research; some rescues specifically place ex-laboratory Beagles and can be a meaningful adoption option for committed homes.",
      ],
      faqs: [
        { question: "Are Beagles good with families?", answer: "Many Beagles are described as sociable with people, but no breed is universally safe with children. Behaviour depends on individual, training, supervision, and the child's familiarity with dogs." },
        { question: "Are Beagles loud?", answer: "Beagles can be vocal — the breed includes baying as part of its hound heritage. This matters for apartment living and for neighbours. Spend time with a specific dog and check landlord rules before adopting." },
        { question: "Are Beagles easy to train?", answer: "Many Beagles respond well to positive-reinforcement training, but the breed's scenting drive can make recall and off-lead reliability harder to achieve. Plan for ongoing training and secure outdoor environments." },
        { question: "Are Beagles hypoallergenic?", answer: "No dog breed is fully hypoallergenic. Anyone with allergies should spend time with a specific dog before committing." },
      ],
    },
    sources: ["akc-beagle", "fci-beagle"],
    images: ["dog-beagle-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-05-21",
  },
  {
    id: "dog-poodle",
    slug: "poodle",
    species: "dog",
    name: "Poodle",
    canonicalCommonName: "Poodle (Standard)",
    aliases: [
      "Standards",
      "Poodle (Standard)",
    ],
    originCountries: [
      "Germany",
      "France",
    ],
    originNote:
      "The two registries FaunaHub cites record different origins for this breed: the AKC records Germany, while the FCI records France as the country of origin. FaunaHub shows both rather than choosing between them.",
    recognition: [
      {
        registryId: "akc",
        status: "recognized",
        registryGroup: "Non-Sporting Group",
        registryBreedCode: "701",
        registryUrl: "https://www.akc.org/dog-breeds/poodle-standard/",
        recognizedYear: 1887,
        sourceId: "akc-poodle",
      },
      {
        registryId: "fci",
        status: "recognized",
        registryGroup: "Group 9 — Companion and Toy Dogs, Section: Poodle",
        registryBreedCode: "172",
        registryUrl: "https://www.fci.be/en/nomenclature/POODLE-172.html",
        sourceId: "fci-poodle",
      },
    ],
    measurements: {
      heightCm: [
        { min: 38.1, bound: "at-least", basis: { kind: "variety", variety: "standard" }, statedAs: "over 15 inches (standard)", sourceId: "akc-poodle" },
      ],
      weightKg: [
        { min: 27.2, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "60-70 pounds (male standard)", sourceId: "akc-poodle" },
        { min: 18.1, max: 22.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "40-50 pounds (female standard)", sourceId: "akc-poodle" },
      ],
    },
    coat: {
      length: "long",
      types: [
        "Curly",
      ],
      statedAs: "AKC coat length: Long; coat type: Curly",
      sourceId: "akc-poodle",
    },
    traits: {
      shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle" },
      groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle" },
      exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle" },
      trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle" },
      vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle" },
    },
    lifespanYears: { min: 10, max: 18, bound: "closed", basis: { kind: "breed" }, statedAs: "10-18 years", sourceId: "akc-poodle" },
    editorial: {
      intro: [
        "The Poodle is a long-established breed recognised in three main size varieties — standard, miniature, and toy — sharing the same breed standard apart from size. The breed has a history as a working water-retriever and is widely kept today as a companion dog.",
      ],
      appearance: [
        "Poodles have a distinctive curly or corded single-layer coat, an elegantly proportioned build, and a refined head with long drop ears. Standards are the largest, toy Poodles the smallest. Coat colours include white, black, brown, apricot, silver, and various recognised patterns.",
      ],
      temperament: [
        "Poodles are widely described as alert, trainable, and people-oriented. Some individuals are calm and quiet; others are very playful and active. Behaviour varies by individual, line, training, and household environment.",
      ],
      activity: [
        "Most Poodles benefit from substantial daily activity — walks, play, and mental enrichment. Standard Poodles in particular often enjoy structured activities such as obedience or scent work. Toy and miniature varieties still need consistent daily exercise, even though their needs are smaller in absolute terms.",
      ],
      grooming: [
        "The single-layer curly coat does not shed in the same way as many double-coated breeds, but it does need regular maintenance — brushing several times a week and professional grooming every several weeks. Mat formation is a common issue without routine care. Despite popular belief, no breed is fully hypoallergenic.",
      ],
      training: [
        "Poodles are often described as very trainable using positive-reinforcement methods. They tend to respond well to varied, engaging training rather than repetitive drills. First-time owners typically benefit from structured classes with a qualified force-free trainer.",
      ],
      health: [
        "As with all breeds, Poodles can be affected by inherited and lifestyle health conditions, with some differing across size varieties. Responsible breeders typically screen for relevant conditions; rescues and shelters may have varying levels of background information. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, coat and skin care, and any specific concerns for a particular dog with a licensed veterinarian.",
      ],
      responsibility: [
        "Plan for substantial grooming costs and time, ongoing training time, and a long-term commitment. Reputable shelters, rescues, and responsible breeders are appropriate sources. Avoid pet-store or unverified online sellers.",
      ],
      faqs: [
        { question: "Are Poodles hypoallergenic?", answer: "No dog breed is fully hypoallergenic. Poodle coats may shed less loose hair than many double-coated breeds, but allergens come from dander and saliva as well as hair. Anyone with allergies should spend time with a specific dog before committing." },
        { question: "Which Poodle variety is right for me?", answer: "Standard, miniature, and toy Poodles share the same breed standard apart from size, but their housing, exercise, and grooming costs scale differently. Discuss specifics with a reputable breeder, shelter, or your veterinarian." },
        { question: "Do Poodles need professional grooming?", answer: "Most Poodles benefit from professional grooming on a regular schedule, in addition to home brushing several times a week. Budget for this when planning the long-term cost of the breed." },
        { question: "Are Poodles easy for first-time owners?", answer: "Many Poodles are described as cooperative learners and can do well with first-time owners who are ready to commit to regular grooming, ongoing training, and consistent daily care." },
      ],
    },
    sources: ["akc-poodle", "fci-poodle"],
    images: ["dog-poodle-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-05-21",
  },
  {
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
  },
  {
    id: "dog-dachshund",
    slug: "dachshund",
    species: "dog",
    name: "Dachshund",
    aliases: [
      "Dachsie",
    ],
    originCountries: [
      "Germany",
    ],
    recognition: [
      {
        registryId: "akc",
        status: "recognized",
        registryGroup: "Hound Group",
        registryBreedCode: "408",
        registryUrl: "https://www.akc.org/dog-breeds/dachshund/",
        recognizedYear: 1885,
        sourceId: "akc-dachshund",
      },
      {
        registryId: "fci",
        status: "recognized",
        registryGroup: "Group 4 — Dachshunds",
        registryBreedCode: "148",
        registryUrl: "https://www.fci.be/en/nomenclature/DACHSHUND-148.html",
        sourceId: "fci-dachshund",
      },
    ],
    measurements: {
      heightCm: [
        { min: 20.3, max: 22.9, bound: "closed", basis: { kind: "variety", variety: "standard" }, statedAs: "8-9 inches (standard)", sourceId: "akc-dachshund" },
        { min: 12.7, max: 15.2, bound: "closed", basis: { kind: "variety", variety: "miniature" }, statedAs: "5-6 inches (miniature)", sourceId: "akc-dachshund" },
      ],
      weightKg: [
        { min: 7.3, max: 14.5, bound: "closed", basis: { kind: "variety", variety: "standard" }, statedAs: "16-32 pounds (standard)", sourceId: "akc-dachshund" },
        { max: 5, bound: "at-most", basis: { kind: "variety", variety: "miniature" }, statedAs: "11 pounds & under (miniature)", sourceId: "akc-dachshund" },
      ],
    },
    coat: {
      length: "short",
      types: [
        "Smooth",
      ],
      statedAs: "AKC coat length: Short, Medium; coat type: Smooth",
      sourceId: "akc-dachshund",
    },
    traits: {
      shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-dachshund" },
      groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-dachshund" },
      exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-dachshund" },
      trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dachshund" },
      vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dachshund" },
    },
    lifespanYears: { min: 12, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "12-16 years", sourceId: "akc-dachshund" },
    editorial: {
      intro: [
        "The Dachshund — also known as the Teckel or sausage dog — is a small German hound originally developed to follow scent into burrows. The breed is recognised in standard and miniature sizes and in smooth, longhaired, and wirehaired coat varieties.",
      ],
      appearance: [
        "Dachshunds are distinctively long-bodied and short-legged, with a deep chest and long head. Their build is iconic but also brings specific back-care considerations that should be discussed with a veterinarian. Coat colours and patterns vary widely between varieties.",
      ],
      temperament: [
        "Dachshunds are often described as bold and curious. Some individuals are affectionate companions; others can be more independent or reserved with strangers. Like all dogs, behaviour varies by individual, line, training, and household.",
      ],
      activity: [
        "Most Dachshunds benefit from moderate daily exercise spread across short walks and play. The breed's long-back anatomy means that high-impact activity — extensive jumping on and off furniture, stairs, or rough play — should be managed carefully and on veterinary advice.",
      ],
      grooming: [
        "Grooming varies sharply by coat variety: smooth Dachshunds need minimal coat care, longhaired need regular brushing, and wirehaired benefit from periodic hand-stripping or professional grooming. All varieties need routine ear, dental, and nail care.",
      ],
      training: [
        "Dachshunds are often described as cooperative learners with positive-reinforcement training, although the breed's independent streak can make consistency more important than with very biddable breeds. Short, engaging sessions and food-motivated rewards work for many individuals.",
      ],
      health: [
        "Back-health context: the long-bodied build is associated with specific spinal-care considerations that should be discussed with a licensed veterinarian. Jumping, stairs, and body condition are the things owners most often raise with a veterinarian for this breed; what is appropriate for a particular dog is a question for that dog's vet rather than a rule that holds for all of them. FaunaHub does not provide diagnosis or treatment.",
      ],
      responsibility: [
        "Plan for routine veterinary care and weight management as ongoing priorities. Reputable shelters, rescues, and responsible breeders are appropriate sources. Avoid pet-store or unverified online sellers.",
      ],
      faqs: [
        { question: "Are Dachshunds good apartment dogs?", answer: "Many Dachshunds do well in apartments because of their small size and modest exercise needs, but landlord rules, neighbour noise tolerance, stairs, and the breed's back-care considerations all matter. Spend time with a specific dog before deciding." },
        { question: "Do Dachshunds bark a lot?", answer: "The breed is often described as alert and vocal. Some individuals are noticeably barky, others much less so. This matters for apartment living and for shared-wall housing." },
        { question: "What about their long backs?", answer: "The long-bodied build brings spinal-care considerations that should be discussed with a licensed veterinarian. Owners commonly discuss jumping, stairs, and body condition with their veterinarian for this breed; specific guidance depends on the individual dog. FaunaHub does not diagnose or treat." },
        { question: "Are Dachshunds good with children?", answer: "Many Dachshunds live happily in families, but no breed is universally child-safe. Behaviour varies by individual, training, supervision, and the child's experience around dogs." },
      ],
    },
    sources: ["akc-dachshund", "fci-dachshund"],
    images: ["dog-dachshund-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-05-21",
  },
  {
    id: "dog-siberian-husky",
    slug: "siberian-husky",
    species: "dog",
    name: "Siberian Husky",
    aliases: [
      "Husky",
    ],
    originCountries: [
      "Siberia",
      "United States of America",
    ],
    originNote:
      "The two registries FaunaHub cites record different origins for this breed: the AKC records Siberia, while the FCI records United States of America as the country of origin. FaunaHub shows both rather than choosing between them.",
    recognition: [
      {
        registryId: "akc",
        status: "recognized",
        registryGroup: "Working Group",
        registryBreedCode: "626",
        registryUrl: "https://www.akc.org/dog-breeds/siberian-husky/",
        recognizedYear: 1930,
        sourceId: "akc-siberian-husky",
      },
      {
        registryId: "fci",
        status: "recognized",
        registryGroup: "Group 5 — Spitz and primitive types, Section: Nordic Sledge Dogs",
        registryBreedCode: "270",
        registryUrl: "https://www.fci.be/en/nomenclature/SIBERIAN-HUSKY-270.html",
        sourceId: "fci-siberian-husky",
      },
    ],
    measurements: {
      heightCm: [
        { min: 53.3, max: 59.7, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "21-23.5 inches (male)", sourceId: "akc-siberian-husky" },
        { min: 50.8, max: 55.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "20-22 inches (female)", sourceId: "akc-siberian-husky" },
      ],
      weightKg: [
        { min: 20.4, max: 27.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "45-60 pounds (male)", sourceId: "akc-siberian-husky" },
        { min: 15.9, max: 22.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "35-50 pounds (female)", sourceId: "akc-siberian-husky" },
      ],
    },
    coat: {
      length: "medium",
      types: [
        "Double",
      ],
      statedAs: "AKC coat length: Medium; coat type: Double",
      sourceId: "akc-siberian-husky",
    },
    traits: {
      shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-siberian-husky" },
      groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-siberian-husky" },
      exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-siberian-husky" },
      trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-siberian-husky" },
      vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-siberian-husky" },
    },
    lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-siberian-husky" },
    editorial: {
      intro: [
        "The Siberian Husky is a medium-sized northern breed developed for pulling light loads over long distances in cold conditions. The breed is widely described as friendly, outgoing, and highly active, with a strong tendency to run. Working heritage is the single most useful thing to understand before choosing a Husky: much of what owners find demanding about the breed is the same trait that made it useful as a sled dog.",
      ],
      appearance: [
        "Siberian Huskies are moderately built, athletic dogs with a dense double coat and erect ears. Coat colours and markings vary widely, and eye colour may differ between individuals or even between a single dog's two eyes. The breed is built for endurance rather than bulk, and is noticeably lighter than most other northern working breeds.",
      ],
      temperament: [
        "Huskies are often described as sociable and people-friendly, including with strangers, which means the breed is not generally regarded as a guarding breed. Many individuals are also described as independent-minded and easily bored. As with all breeds, temperament varies by individual, line, socialisation, and household; a breed reputation is a starting point for questions, not a prediction about a specific dog.",
      ],
      activity: [
        "Most Siberian Huskies need substantial daily exercise, and many need more than a typical walk provides. The breed's running heritage also has a practical consequence for safety: Huskies are widely described as prone to roaming, and secure fencing plus reliable lead management are standard parts of responsible Husky ownership. Off-lead freedom in unsecured areas is not something this breed's reputation supports.",
      ],
      grooming: [
        "The dense double coat sheds year-round and very heavily during seasonal coat changes, when loose undercoat comes out in quantity over a period of weeks. Regular brushing helps manage it. Routine dental, ear, and nail care are sensible parts of any Husky routine. Shaving a double coat is not a general grooming recommendation and is worth discussing with a veterinarian or qualified groomer first.",
      ],
      training: [
        "Huskies are commonly described as intelligent but independent, and many owners find recall the hardest thing to build. Consistent positive-reinforcement training from early on is the usual advice, alongside realistic expectations: readiness to work with a handler varies a great deal between individuals, and this breed is not generally described as eager to please in the way some gundog breeds are.",
      ],
      health: [
        "As with all breeds, Siberian Huskies can be affected by inherited and lifestyle health conditions. Responsible breeders typically screen for relevant concerns, and rescue or adoption sources may have varying levels of health history. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, exercise planning in warm climates, and any specific concerns with a licensed veterinarian.",
      ],
      responsibility: [
        "Huskies are a frequent presence in rescue, and mismatched expectations are a common reason. Before adopting, think honestly about exercise capacity, secure outdoor space, tolerance for shedding, climate, and whether a dog that may not reliably come back when called fits your daily life. Reputable shelters, rescues, and responsible breeders are appropriate sources.",
      ],
      householdContext: [
        "Apartment living is not impossible but is demanding: the breed's exercise needs do not shrink to fit a smaller home, and vocalising may matter to close neighbours. Households with other pets should consider the breed's strong chase tendency carefully and seek individual assessment rather than relying on breed reputation. First-time owners sometimes find the combination of high energy, independence, and heavy shedding harder than expected.",
      ],
      faqs: [
        { question: "Are Siberian Huskies good off-lead?", answer: "The breed is widely described as prone to running and roaming, and many owners never achieve reliable off-lead recall. Secure fencing and careful lead management are standard advice for this breed. Individual dogs vary, and any decision about off-lead freedom should be based on that specific dog's demonstrated behaviour in safe, controlled conditions." },
        { question: "Do Siberian Huskies shed a lot?", answer: "Yes. The AKC's published shedding scale places this breed at the high end, and the dense double coat sheds heavily during seasonal coat changes in addition to year-round shedding. Regular brushing helps, but shedding is a normal characteristic of the breed rather than a problem to solve." },
        { question: "Are Siberian Huskies suitable for first-time owners?", answer: "Some first-time owners do well with the breed, but the combination of high exercise needs, independent-mindedness, roaming tendency, and heavy shedding makes it a demanding first dog. Meeting adult Huskies, talking to a rescue or reputable breeder, and being honest about your daily routine matter more than any general rule." },
        { question: "Are Siberian Huskies hypoallergenic?", answer: "No dog breed is fully hypoallergenic. Allergens come from dander and saliva as well as hair, and a heavily shedding double-coated breed does not reduce exposure. Anyone with allergies should spend time around a specific dog before committing." },
      ],
    },
    sources: ["akc-siberian-husky", "fci-siberian-husky"],
    images: ["dog-siberian-husky-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-09-13",
  },
  {
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
  },
  {
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
  },
  {
    id: "dog-shih-tzu",
    slug: "shih-tzu",
    species: "dog",
    name: "Shih Tzu",
    originCountries: [
      "China",
      "Tibet (China)",
    ],
    originNote:
      "The two registries FaunaHub cites record different origins for this breed: the AKC records China, while the FCI records Tibet (China) as the country of origin. FaunaHub shows both rather than choosing between them.",
    recognition: [
      {
        registryId: "akc",
        status: "recognized",
        registryGroup: "Toy Group",
        registryBreedCode: "513",
        registryUrl: "https://www.akc.org/dog-breeds/shih-tzu/",
        recognizedYear: 1969,
        sourceId: "akc-shih-tzu",
      },
      {
        registryId: "fci",
        status: "recognized",
        registryGroup: "Group 9 — Companion and Toy Dogs, Section: Tibetan breeds",
        registryBreedCode: "208",
        registryUrl: "https://www.fci.be/en/nomenclature/SHIH-TZU-208.html",
        sourceId: "fci-shih-tzu",
      },
    ],
    measurements: {
      heightCm: [
        { min: 22.9, max: 26.7, bound: "closed", basis: { kind: "breed" }, statedAs: "9-10.5 inches", sourceId: "akc-shih-tzu" },
      ],
      weightKg: [
        { min: 4.1, max: 7.3, bound: "closed", basis: { kind: "breed" }, statedAs: "9-16 pounds", sourceId: "akc-shih-tzu" },
      ],
    },
    coat: {
      length: "long",
      types: [
        "Double",
      ],
      statedAs: "AKC coat length: Long; coat type: Double",
      sourceId: "akc-shih-tzu",
    },
    traits: {
      shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-shih-tzu" },
      groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-shih-tzu" },
      exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-shih-tzu" },
      trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-shih-tzu" },
      vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-shih-tzu" },
    },
    lifespanYears: { min: 10, max: 18, bound: "closed", basis: { kind: "breed" }, statedAs: "10-18 years", sourceId: "akc-shih-tzu" },
    editorial: {
      intro: [
        "The Shih Tzu is a small companion breed with Tibetan origins, kept as a companion rather than a working dog for most of its recorded history. That heritage is reflected in how the breed is usually described — people-oriented and content with moderate activity — and in what it demands in return, which is a real and ongoing coat-care commitment.",
      ],
      appearance: [
        "Shih Tzu are small, sturdy dogs carrying a long double coat, with a short muzzle and a distinctive head. The AKC standard gives a height of 9 to 10.5 inches and a weight of 9 to 16 pounds. Many owners keep the coat clipped short, which changes the grooming routine substantially but does not remove it.",
      ],
      temperament: [
        "The breed is commonly described as affectionate, people-focused, and comparatively content indoors. Shih Tzu are often kept as companion dogs for exactly this reason. Individual temperament still varies by dog, line, socialisation, and household, and a breed described as easy-going is not thereby a breed that needs no training.",
      ],
      activity: [
        "The AKC's published energy scale places this breed in the middle. Daily walks and play are part of a healthy routine, but the breed is not generally described as needing the sustained work that herding or sporting breeds do. Short-muzzled dogs can find heat and strenuous exercise harder to manage, which is worth raising with a veterinarian when planning activity.",
      ],
      grooming: [
        "This is the breed's main practical demand. A long double coat requires frequent brushing to prevent matting, along with regular professional grooming for most owners — the AKC's published grooming-frequency scale places this breed at the high end. Face and eye cleaning are commonly part of the routine. Owners who prefer a clipped coat still need regular grooming appointments.",
      ],
      training: [
        "Shih Tzu are widely described as responsive to gentle, consistent positive-reinforcement training. Early handling practice is particularly useful for this breed, because a dog who tolerates brushing, face cleaning, and grooming handling comfortably makes a lifelong routine much easier for both of you.",
      ],
      health: [
        "As with all breeds, Shih Tzu can be affected by inherited and lifestyle health conditions, and short-muzzled breeds have care considerations — particularly around heat and exertion — that differ from longer-muzzled dogs. Responsible breeders typically screen for relevant concerns. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, exercise in warm weather, and any specific concerns with a licensed veterinarian.",
      ],
      responsibility: [
        "Budget for grooming as a recurring cost, not a one-off: for most owners this breed means regular professional appointments for the life of the dog. The AKC publishes a life-expectancy range of 10 to 18 years — a breed-level published figure rather than a prediction about any individual dog. Reputable shelters, rescues, and responsible breeders are appropriate sources.",
      ],
      householdContext: [
        "The breed's size and moderate activity needs suit apartments well. Households considering a Shih Tzu should be realistic about coat care above all else — it is the commitment owners most often underestimate. As with any breed, interactions between children and dogs should be supervised, and the individual dog assessed rather than assumed from breed reputation.",
      ],
      faqs: [
        { question: "How much grooming does a Shih Tzu need?", answer: "A great deal, relative to most breeds. The AKC's published coat-grooming-frequency scale places this breed at the high end, and a full-length double coat mats without frequent brushing. Many owners keep the coat clipped shorter, which reduces daily brushing but still means regular professional grooming appointments." },
        { question: "Are Shih Tzu good apartment dogs?", answer: "Their size and moderate exercise needs generally suit apartment living. As with any dog, daily walks, mental engagement, and consideration for neighbours still apply, and individual dogs vary in how much activity and how much company they want." },
        { question: "Are Shih Tzu hypoallergenic?", answer: "No dog breed is fully hypoallergenic. The breed is often described as lower-shedding, and the AKC's published shedding scale does place it at the low end, but allergens come from dander and saliva as well as hair. Anyone with allergies should spend time with a specific dog before committing." },
        { question: "Do Shih Tzu need much exercise?", answer: "Less than working breeds, but not none. Daily walks and play suit most individuals. Because the breed is short-muzzled, exertion and heat are worth planning around and discussing with a veterinarian rather than judging by how willing the dog seems." },
      ],
    },
    sources: ["akc-shih-tzu", "fci-shih-tzu"],
    images: ["dog-shih-tzu-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-09-13",
  },
];
