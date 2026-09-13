import type { Breed } from "../../types.ts";

/** Norwegian Forest Cat. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-norwegian-forest-cat",
  slug: "norwegian-forest-cat",
  species: "cat",
  name: "Norwegian Forest Cat",
  originCountries: [
    "Norway",
  ],
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/norwegian-forest-cat/",
      recognizedYear: 1993,
      sourceId: "cfa-norwegian-forest-cat",
    },
  ],
  measurements: {
    weightKg: [
      { min: 5.4, max: 7.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "a male will weigh from 12 to 16 pounds", sourceId: "cfa-norwegian-forest-cat" },
      { min: 4.1, max: 5.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "females from 9 to 12 pounds", sourceId: "cfa-norwegian-forest-cat" },
    ],
  },
  coat: {
    length: "long",
    statedAs: "luxuriantly thick double coat, marked by a silky, water-repellant overcoat, and frontal ruff adorning the neck and chest",
    sourceId: "cfa-norwegian-forest-cat",
  },
  traits: {},
  editorial: {
    intro: [
      "The Norwegian Forest Cat is a large, long-coated breed from Norway, accepted for CFA Championship competition in 1993. The breed is usually described as sturdy and slow-maturing, with a dense double coat developed for a cold climate.",
    ],
    appearance: [
      "Norwegian Forest Cats are substantial, well-muscled cats with a long double coat, a full ruff, and a bushy tail. The CFA standard notes that the dense undercoat reaches its full development in winter, so the same cat can look noticeably different between seasons. Many colours and patterns are recognised. CFA's written standard describes size qualitatively rather than by weight; the breed's CFA profile page does give figures, which are recorded below.",
    ],
    temperament: [
      "The breed is commonly described as calm, sociable, and comparatively undemanding of constant attention. Individual cats vary considerably, and early handling, environment, and household routine shape adult behaviour at least as much as breed background does.",
    ],
    activity: [
      "Norwegian Forest Cats are often described as enthusiastic climbers, and vertical space — tall cat trees, shelves, or safe high perches — tends to suit them better than floor-level play alone. Activity levels vary by individual; a cat that has somewhere to climb generally makes more use of a home than one that does not.",
    ],
    grooming: [
      "CFA's own description of this breed is worth quoting against expectation: \"Surprisingly, the impressive double coat does not require a lot of maintenance.\" The coat is described as a silky, water-repellent overcoat over a thick undercoat, and the breed standard notes the undercoat reaches its full development in winter — so shedding and combing needs are seasonal rather than constant. Routine nail and dental care are sensible parts of any cat's routine, and are easier when introduced gradually and early.",
    ],
    health: [
      "As with all breeds, Norwegian Forest Cats can be affected by inherited and lifestyle health conditions. Responsible breeders typically screen for relevant concerns, and rescue or adoption sources may have varying levels of health history. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, weight management, and any specific concerns with a licensed veterinarian.",
    ],
    responsibility: [
      "Coat care is a real commitment with this breed, though CFA describes it as lighter than the coat's appearance suggests — CFA describes the double coat as not requiring a lot of maintenance. Consider climbing space and the long-term cost of veterinary care and insurance before adopting. Reputable shelters, rescues, and responsible breeders are appropriate sources.",
    ],
    householdContext: [
      "The breed generally suits homes that can offer vertical space and a routine that includes combing a long coat. As with any cat, introductions to other pets should be gradual and individual rather than assumed from breed reputation, and interactions between young children and cats should be supervised with an accessible retreat the cat can use.",
    ],
    faqs: [
      { question: "How much grooming does a Norwegian Forest Cat need?", answer: "Less than the coat suggests. CFA describes the double coat as not requiring a lot of maintenance, which surprises many owners. Demand is seasonal rather than constant: the breed standard notes the dense undercoat reaches its full development in winter, so combing tends to matter most around coat changes. What works varies by individual coat, and a groomer or veterinarian can advise for a specific cat." },
      { question: "Are Norwegian Forest Cats the same as Maine Coons?", answer: "No. They are separate breeds with separate CFA standards and separate histories — the Norwegian Forest Cat is Norwegian and was accepted for CFA Championship in 1993, while the Maine Coon is North American. Both are large, long-coated breeds, which is why they are often confused." },
      { question: "Do Norwegian Forest Cats need to go outdoors?", answer: "No breed requires outdoor access, and whether to allow it depends on local traffic, wildlife, disease risk, and law rather than on breed. What this breed does tend to want is height — climbing opportunities indoors suit it well. Discuss indoor-outdoor decisions for a specific cat with a veterinarian." },
      { question: "Are Norwegian Forest Cats hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Cat allergens come mainly from proteins in saliva and skin secretions rather than from hair length, so a long coat is not itself the cause. Anyone with allergies should spend time with a specific cat before committing." },
    ],
  },
  sources: ["cfa-norwegian-forest-cat", "cfa-std-norwegian-forest-cat"],
  images: ["cat-norwegian-forest-cat-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
