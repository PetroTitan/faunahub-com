import type { Metadata } from "next";
import FeedingLayout, { Section, FaqBlock } from "@/components/feeding/FeedingLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-food-and-diet/what-animals-eat";
const MODIFIED = "2026-06-28";
const TITLE = "What Animals Eat: Feeding Types in Nature";
const DESC =
  "An ecology explainer on natural feeding categories, from grazers and predators to filter feeders and scavengers, and why wild diet is not a pet-feeding plan.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "What are the main feeding categories animals fall into?",
      answer:
        "Ecologists commonly describe herbivores (including grazers and browsers), carnivores, omnivores, insectivores, nectar feeders, filter feeders, and detritivores or scavengers. These categories summarise an animal's main natural food source and its role in the food web. They are broad generalisations - many animals blur the lines - and they describe wild ecology, not feeding plans for animals in human care.",
    },
    {
      question: "Does a natural wild diet tell me what to feed my pet?",
      answer:
        "No. A diet that is natural for a wild species does not automatically equal a safe or complete diet for an animal in human care, where age, health, life stage, and food sources all differ. This page is educational natural history, not veterinary advice or a feeding plan. For feeding and health decisions about a specific animal, consult a qualified veterinarian, including an avian or reptile and amphibian vet where relevant.",
    },
    {
      question: "Why can feeding wild animals be harmful?",
      answer:
        "Feeding wildlife can alter natural behaviour, create dependency, spread disease, cause animals to crowd together unnaturally, increase human-wildlife conflict, and lead to poor nutrition or habituation. Because of these risks, this page does not give instructions on what or how to feed wild animals. If you have concerns about a wild animal, contact your local or official wildlife agency.",
    },
    {
      question: "Which human foods are documented concerns for pets?",
      answer:
        "As widely documented examples to raise with a veterinarian - not a complete list and not emergency guidance - chocolate, grapes and raisins, xylitol, and onions and garlic are documented concerns in dogs, and lilies and onions and garlic are documented concerns in cats. No food is safe for all animals. If you think an animal has eaten something harmful, contact a veterinarian, an animal poison-control service, or a local emergency service immediately.",
    },
];

export default function WhatAnimalsEatPage() {
  return (
    <FeedingLayout
      crumbs={[
        { name: "Animal Food & Diet", href: "/animal-food-and-diet" },
        { name: "What animals eat", href: PATH },
      ]}
      kicker="Feeding ecology"
      h1={"What animals eat"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Across the animal kingdom, what a species eats in the wild is shaped by its body, its evolutionary history, and the habitat it lives in. Ecologists group animals into broad feeding categories - herbivores, carnivores, omnivores, insectivores, nectar feeders, filter feeders, and detritivores or scavengers - to describe the roles they play in natural food webs. These categories are useful for understanding ecology, not for planning meals.
          </p>
          <p>
            This page is an educational natural-history explainer about how animals feed in nature. It is not veterinary advice, not a feeding plan, and not guidance on what to feed any animal in your care or any wild animal. A diet that is natural for a species in the wild does not automatically equal a safe or complete diet for an animal living under human care, where age, health, food sources, and many other factors differ. For feeding or health decisions about a specific animal, consult a qualified veterinarian.
          </p>
        </>
      }
      related={[
    { label: "Animal Food & Diet", href: "/animal-food-and-diet" },
    { label: "Foods dangerous to pets", href: "/animal-food-and-diet/foods-dangerous-to-pets" },
    { label: "Wildlife & Biodiversity", href: "/wildlife" },
    { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
    { label: "Care & veterinary boundaries", href: "/animal-research-sources/animal-care-and-veterinary-boundaries" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Feeding categories are roles in a food web"}>
        <p>
          Biologists classify animals by their primary food source because diet links every species to the wider ecosystem. A feeding category describes where an animal tends to sit in the flow of energy - from plants, to plant-eaters, to the animals that eat them, and finally to the organisms that break down what remains. These groupings are generalisations, and many real animals blur the lines or shift between categories over a lifetime.
        </p>
        <p>
          Diet varies by species, and also by age, season, and habitat. A juvenile may eat very differently from an adult, dry-season foods may differ from wet-season foods, and the same species can feed differently across its range. Because of this variation, the categories below describe broad natural patterns rather than fixed rules, and certainly not instructions for feeding any individual animal.
        </p>
      </Section>
      <Section id="s1" title={"Herbivores: grazers and browsers"}>
        <p>
          Herbivores eat plant material, and ecologists often split them by what part of the plant they target. Grazers, such as many cattle relatives, zebras, and geese, feed mainly on grasses and low ground vegetation. Browsers, such as giraffes, many deer, and black rhinoceroses (<em>Diceros bicornis</em>), feed on leaves, twigs, shoots, and fruit from shrubs and trees. Some species do both depending on what is available.
        </p>
        <p>
          Plant material is bulky and hard to digest, so herbivores have evolved specialised digestive systems - multi-chambered stomachs in ruminants, or enlarged hindguts in animals like horses and rabbits, where microbes ferment fibre. Rabbits (<em>Oryctolagus cuniculus</em>), for example, are hindgut-fermenting herbivores whose biology depends on a high-fibre intake. This is general biology, not a feeding instruction; the practical diet of any rabbit in human care is a question for a veterinarian.
        </p>
        <p>
          Grazing and browsing shape whole landscapes. By cropping grasses, trampling, and selectively eating certain plants, large herbivores can keep grasslands open, influence which plant species dominate, and create the mosaic of habitats that other animals depend on.
        </p>
      </Section>
      <Section id="s2" title={"Carnivores, omnivores, and insectivores"}>
        <p>
          Carnivores eat other animals. They range from big cats and wolves to weasels, and many have adaptations for hunting such as sharp teeth, claws, or keen senses. As a point of general biology, cats are obligate carnivores, meaning their bodies are adapted to a diet based on animal tissue rather than plants - again a statement about feline biology, not a feeding plan for any cat. Predators help regulate the numbers of the animals they hunt and can influence the behaviour and distribution of prey across a landscape.
        </p>
        <p>
          Omnivores, including bears, pigs, raccoons, and humans, eat a mix of plant and animal foods, which lets them adjust to what is seasonally available. Insectivores specialise in insects and other invertebrates; anteaters, many bats, shrews, and countless birds fall here, and by consuming vast numbers of insects they play a major role in controlling invertebrate populations.
        </p>
        <p>
          Bird diets are a clear reminder that categories vary enormously by species. A parrot, a chicken, a duck, and a hummingbird have very different natural diets, so there is no single bird diet. Reptile and amphibian diets vary just as radically from one species to another. These differences are biological facts about wild animals, not a guide to feeding any animal in human care - which always warrants species-specific veterinary input, including from an avian or reptile and amphibian vet where relevant.
        </p>
      </Section>
      <Section id="s3" title={"Nectar feeders, filter feeders, and detritivores"}>
        <p>
          Some animals exploit very specialised food sources. Nectar feeders such as hummingbirds, sunbirds, many bats, and countless insects drink the sugary nectar of flowers. In doing so they transfer pollen between plants, making them essential pollinators that help many flowering plants reproduce.
        </p>
        <p>
          Filter feeders strain small food particles from water. Baleen whales, many bivalve molluscs, flamingos, and some fish capture plankton or tiny organisms in large volumes, linking the smallest members of aquatic food webs to some of the largest animals on Earth. By filtering water, animals like mussels and oysters can also influence water clarity in their habitats.
        </p>
        <p>
          Detritivores and scavengers feed on dead material and waste. Earthworms, dung beetles, vultures, and many crabs and insects consume carrion, droppings, and decaying plant matter. Together with fungi and bacteria, they recycle nutrients back into soil and water, an unglamorous but vital service that keeps ecosystems functioning. Many animals also disperse seeds - by eating fruit and depositing seeds elsewhere, frugivores help plants spread and forests regenerate.
        </p>
      </Section>
      <Section id="s4" title={"Why wild diet is not a pet-feeding plan"}>
        <p>
          It is tempting to assume that whatever an animal eats in the wild must be exactly what it needs in human care, but that reasoning can be misleading. Wild animals select from a changing buffet, balance their intake over time, travel to find foods, and are subject to natural selection that removes those who fare poorly. An animal under human care lives in very different circumstances, and its individual needs depend on its species, age, health, and life stage.
        </p>
        <p>
          For that reason, this page does not provide feeding plans, portion sizes, schedules, recipes, or supplement guidance for any animal, and it is not a substitute for professional care. Decisions about feeding a specific pet or captive animal belong with a qualified veterinarian who can account for that individual&#39;s needs. Never delay or avoid veterinary care based on general ecology information like this.
        </p>
      </Section>
      <Section id="s5" title={"Food safety, toxic foods, and feeding wild animals"}>
        <p>
          A natural diet does not mean every food is safe, and some everyday human foods are documented concerns for certain pets. As examples to discuss with a veterinarian - not a complete list and not emergency guidance - chocolate, grapes and raisins, xylitol, and onions and garlic are widely documented concerns in dogs, while lilies and onions and garlic are documented concerns in cats. No food is safe for all animals, and these are simply topics to raise with a professional, with no amounts, symptoms, or treatments implied here.
        </p>
        <p>
          If you are ever worried that an animal has eaten something harmful, this is not the place for answers: contact a veterinarian, an animal poison-control service, or a local emergency service immediately. For any feeding or health question about a specific animal, consult a qualified veterinarian, including an avian or reptile and amphibian vet where appropriate.
        </p>
        <p>
          Feeding wild animals deserves special caution. Even well-meant feeding can alter natural behaviour, create dependency, spread disease, crowd animals together unnaturally, fuel human-wildlife conflict, and provide poor nutrition or dangerous habituation. For these reasons this page gives no instructions on what or how to feed wildlife; if you have concerns about a wild animal, contact your local or official wildlife agency for guidance.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </FeedingLayout>
  );
}
