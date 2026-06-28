import type { Metadata } from "next";
import LifespanLayout, { Section, FaqBlock } from "@/components/lifespan/LifespanLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-lifespans/pet-lifespans";
const MODIFIED = "2026-06-28";
const TITLE = "Pet Lifespan Expectations: A Calm Overview";
const DESC =
  "How pet lifespans vary by species, size, and care context — an educational overview, not a prediction for any one animal and never a vet substitute.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Can you tell me how long my pet will live?",
      answer:
        "No, and any honest source will say the same. Lifespan depends on species, genetics, sex, body size, environment, disease, and the care context over a whole life, and these interact in ways no webpage can resolve for one animal. Species averages are a rough orientation for groups, not a forecast for an individual. For anything specific to your pet's age, health, or outlook, ask a qualified veterinarian who can examine that animal. You can also read FaunaHub's care-and-veterinary-boundaries hub at /vet-care.",
    },
    {
      question: "Is a 'maximum recorded age' the same as how long the species normally lives?",
      answer:
        "No. A maximum recorded age is the single oldest documented individual of a species, which is an outlier by definition, not the norm. Typical or average lifespan describes what is common, and a range describes the spread; the maximum is neither. Records are also revised over time and are uncertain to compare between species. A famous very old tortoise or parrot, for example, does not represent what is typical for its kind, so the two ideas should not be treated as interchangeable.",
    },
    {
      question: "Why do dogs of different sizes have different average lifespans?",
      answer:
        "In dogs, body size is associated, at the population level, with average lifespan: smaller dogs tend on average to live longer than very large or giant breeds, and breed is associated with differences as well. This is an association across many animals, not a rule for any single dog — an individual small dog is not guaranteed a long life, and an individual large dog is not doomed to a short one. Genetics, the individual animal, and lifelong care all matter, and a veterinarian is the right source for questions about a specific dog.",
    },
    {
      question: "Do captive or pet animals live longer than wild ones?",
      answer:
        "Often, on average, yes — animals in human care may benefit from veterinary attention and the absence of predators, so domestic and captive lifespans frequently exceed wild ones for the same species. But captive and zoo data can be biased and is not the same as wild lifespan, so the two should never be mixed without a label. When you read a figure, check whether it describes wild, captive, or domestic animals, because each tells a different story and they are not interchangeable.",
    },
];

export default function PetLifespansPage() {
  return (
    <LifespanLayout
      crumbs={[
        { name: "Animal Lifespans", href: "/animal-lifespans" },
        { name: "Pet lifespans", href: PATH },
      ]}
      kicker="Pets"
      h1={"Pet lifespan expectations"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Pets live for very different lengths of time, and the differences are large both between species and within a single species. A goldfish, a rabbit, a cat, a large parrot, and a tortoise are not on the same scale at all, and even two dogs of the same age can have very different outlooks depending on breed, size, and many other factors. This page is a calm, educational overview of how biologists and veterinarians think about that variation. It is not a prediction for your individual animal, and it is not a plan to make a pet live longer.
          </p>
          <p>
            Lifespan is shaped by species, genetics, sex, body size, environment, disease, and — for animals in human care — the care context provided over a whole life. Because so many factors interact, no webpage can tell you how long a particular pet will live. Where this page mentions any numbers, they are broad, well-documented framings rather than promises, and they are labelled as typical, range, maximum recorded, or estimate. For anything specific to your own animal&#39;s health or age, the right source is a qualified veterinarian, and FaunaHub links to its care-and-veterinary-boundaries and food-and-diet education below.
          </p>
        </>
      }
      related={[
    { label: "Animal Lifespans", href: "/animal-lifespans" },
    { label: "Dogs", href: "/dogs" },
    { label: "Cats", href: "/cats" },
    { label: "Care & veterinary boundaries", href: "/animal-research-sources/animal-care-and-veterinary-boundaries" },
    { label: "Animal Food & Diet", href: "/animal-food-and-diet" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Why lifespan varies so much between and within species"}>
        <p>
          Across the animals people keep as pets, expected lifespans span an enormous range. Some small fish and many insects live only a short time, while certain tortoises and some parrots are well documented to live for decades, and a few reptiles can be remarkably long-lived. This is a difference of biology, not of how &#39;well&#39; an owner cares for the animal: a species&#39; typical lifespan is set largely by its evolutionary history and body plan.
        </p>
        <p>
          Variation also exists inside a single species. Two animals of the same kind can differ because of genetics, sex, body size, and the particular environment and care they experience over a lifetime. That is why an average for a species is a rough orientation, not a forecast. Treat any figure you read as a general description of a group, not a clock counting down for one specific pet.
        </p>
        <p>
          Throughout this overview, figures are kept broad and hedged on purpose. Where a number appears it is labelled — for example typical, range, or maximum recorded age — and whether it refers to wild, captive, or domestic animals, because those are not interchangeable and should never be mixed without saying so.
        </p>
      </Section>
      <Section id="s1" title={"Dogs: body size and breed are associated with differences"}>
        <p>
          Among dogs, one of the most consistently described patterns in veterinary and biological literature is that body size is associated with average lifespan: smaller dogs tend, on average, to live longer than very large or giant breeds. Breed is also associated with differences, partly through size and partly through breed-related traits. These are population-level associations, not a rule that applies to any single dog.
        </p>
        <p>
          This is an association, not a destiny. An individual small dog is not guaranteed a long life, and an individual large dog is not doomed to a short one. The pattern describes averages across many animals; it cannot predict the outcome for the dog in front of you. Genetics, the individual animal, and the care it receives across its life all matter.
        </p>
        <p>
          FaunaHub&#39;s dog pages discuss breeds and general dog topics in an educational way, but questions about a particular dog&#39;s health, age, or outlook belong with a veterinarian who can examine that animal.
        </p>
      </Section>
      <Section id="s2" title={"Cats, rabbits, birds, and reptiles differ enormously"}>
        <p>
          Beyond dogs, the differences only grow. Cats, rabbits, birds, and reptiles are biologically distinct, and their expected lifespans are not comparable to one another or to dogs. Within each of these groups there is wide variation too, so a single &#39;pet lifespan&#39; number is not meaningful.
        </p>
        <p>
          Birds and reptiles show especially dramatic spreads. Some small birds are relatively short-lived, while large parrots are well documented to live for many decades in human care; among reptiles, some tortoises are famous for very long lives, with maximum recorded ages reaching well beyond a human lifetime in exceptional, individual cases. A single famous old animal, however, is not the species norm — maximum recorded age and typical lifespan are different things.
        </p>
        <p>
          Rabbits and cats also vary with size, environment, and care context rather than following one fixed figure. Because the range is so wide and so species-specific, the responsible approach is to learn about your particular species generally and to ask a veterinarian who knows that kind of animal about anything health-related.
        </p>
      </Section>
      <Section id="s3" title={"Maximum recorded age is not typical lifespan"}>
        <p>
          Record-keeping for animals tends to highlight the oldest known individuals, and those records make headlines. It is important to separate three ideas that are easy to blur together: a typical or average lifespan describes what is common, a range describes the spread, and a maximum recorded age describes the single oldest documented individual. The maximum is an outlier by definition, not what to expect.
        </p>
        <p>
          Records are also revised as new documentation appears, and comparisons between species are uncertain because data quality differs. A claim that a species &#39;always lives X years&#39; is not how lifespan works; even well-studied species are better described by ranges and hedged framings than by one precise number.
        </p>
        <p>
          Captive or domestic animals often live longer on average than their wild counterparts, because they may have veterinary care and no predators — but captive and zoo data can be biased and is not the same as wild lifespan. Always note whether a figure refers to wild, captive, or domestic animals, and never treat one as a stand-in for another.
        </p>
      </Section>
      <Section id="s4" title={"Life cycle and developmental stages are not the same as aging"}>
        <p>
          Some animals change form dramatically as they develop, and this metamorphosis is a life-cycle pattern rather than &#39;aging.&#39; A classic example is the mayfly: people often say a mayfly &#39;lives only a day,&#39; but that refers to the brief winged adult stage. The aquatic larval (nymph) stage lasts far longer, so the adult lifespan and the total life cycle are very different measures.
        </p>
        <p>
          The general lesson applies to many pets and the animals around them: a short adult phase, a long juvenile phase, or distinct developmental stages can all sit inside one species&#39; life cycle. When you read a lifespan figure, it helps to ask whether it describes the adult stage only or the whole life from egg or birth onward.
        </p>
        <p>
          Distinguishing developmental stages from aging keeps the picture honest. It also reinforces the main message of this page — that lifespan is layered and species-specific, and that simple single numbers usually hide important biology.
        </p>
      </Section>
      <Section id="s5" title={"This is education, not a veterinary prediction"}>
        <p>
          This page is deliberately not a tool to predict how long your pet will live, and not a &#39;how to make your pet live longer&#39; plan. It contains no feeding plans, no supplement or medical advice, no breeding guidance, no diagnosis or treatment, no dosages, no emergency steps, and no mortality-risk scoring. Those decisions and questions belong with a professional who can assess your specific animal.
        </p>
        <p>
          If you have a concern about your pet&#39;s age, health, behaviour, or outlook, the right next step is a qualified veterinarian who can examine the individual animal. A veterinarian can interpret what matters for your pet in a way that no general article can, and FaunaHub&#39;s role here is background understanding, not clinical guidance.
        </p>
        <p>
          To go further on FaunaHub, see the care-and-veterinary-boundaries hub at /vet-care for how to work with a veterinarian and where general information ends, and the food-and-diet education at /animal-food-and-diet for how species differ in what they eat. Both are educational and route specific questions back to a professional.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </LifespanLayout>
  );
}
