import type { Breed } from "../../types.ts";

/** Siberian Husky. One record per file — see ../README.md. */
export const breed: Breed = {
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
};
