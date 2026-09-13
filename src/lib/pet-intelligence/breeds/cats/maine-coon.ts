import type { Breed } from "../../types.ts";

/** Maine Coon. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-maine-coon",
  slug: "maine-coon",
  species: "cat",
  name: "Maine Coon",
  originCountries: [
    "United States",
  ],
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/maine-coon-cat/",
      recognizedYear: 1976,
      sourceId: "cfa-maine-coon",
    },
  ],
  measurements: {
    weightKg: [
      { min: 9.1, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "not unusual for a mature male's weight to reach or exceed 20 pounds", sourceId: "cfa-maine-coon" },
    ],
  },
  coat: {
    length: "long",
    statedAs: "thick, luxuriant coat that is shorter at the shoulders, longer on the sides, stomach and back legs, and culminating in a dramatically long plumed tail",
    sourceId: "cfa-maine-coon",
  },
  traits: {},
  editorial: {
    intro: [
      "The Maine Coon is one of the largest domestic cat breeds, with a long history in North America. The breed is often described as sociable and people-oriented, with a distinctive long coat and substantial body size. As with all breeds, individual cats vary widely in personality, activity level, and care needs.",
    ],
    appearance: [
      "Maine Coons are large, muscular cats with a long, water-resistant coat, a heavy tail, and tufted ears. Many lines have a square muzzle, a broad chest, and a relatively long body proportion. Recognised coat colours and patterns vary widely.",
    ],
    temperament: [
      "The breed is often described as friendly, sociable, and interactive — sometimes called \"the gentle giant\". Some individuals are very engaged and follow people around the home; others are quieter. Like every breed, behaviour varies by individual, socialisation, and household.",
    ],
    activity: [
      "Most Maine Coons benefit from interactive play, climbing structures, and engagement with their people. Sturdy cat trees sized for a large breed are commonly recommended, and puzzle feeders or play sessions can help with body condition and mental engagement.",
    ],
    grooming: [
      "The long, dense coat benefits from regular brushing — often several times a week — to prevent matting. Routine dental, nail, and ear care are sensible parts of any Maine Coon routine. Weight and body condition should be monitored with your veterinarian, especially because of the breed's large size.",
    ],
    health: [
      "As with all breeds, Maine Coons can be affected by inherited and lifestyle health conditions. Responsible breeders typically test for certain conditions; rescues and shelters may have varying levels of background information. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, weight management, and any specific concerns for a particular cat with a licensed veterinarian.",
    ],
    responsibility: [
      "Plan for the budget and time required for a long-coated large-breed cat — including routine grooming, sturdy furniture and climbing structures, preventive veterinary care, and the possibility of emergency vet costs. Reputable shelters, rescues, and breeders are appropriate sources.",
    ],
    faqs: [
      { question: "Are Maine Coons good with families?", answer: "Many Maine Coons live happily in households with children, but no breed is universally child-safe and individual cats vary. Adult supervision and respect for the cat's space matter for any breed." },
      { question: "Are Maine Coons hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Cat allergens come from skin and saliva as well as fur. Anyone with allergies should spend time with a specific cat before committing." },
      { question: "Do Maine Coons get along with other pets?", answer: "Many Maine Coons are described as sociable with other pets when introductions are gradual and the cat has space to retreat. Individual personalities vary; structured introductions and an experienced household help." },
      { question: "How big do Maine Coons get?", answer: "Maine Coons are among the largest domestic cat breeds, but exact size varies by individual and line. Discuss expectations for a specific cat with the breeder, shelter, or your veterinarian." },
    ],
  },
  sources: ["cfa-maine-coon", "cfa-std-maine-coon"],
  images: ["cat-maine-coon-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
