import type { Metadata } from "next";
import FeedingLayout, { Section, FaqBlock } from "@/components/feeding/FeedingLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-food-and-diet/foods-dangerous-to-pets";
const MODIFIED = "2026-06-28";
const TITLE = "Foods That Can Be Dangerous to Pets: An Overview";
const DESC =
  "An educational, source-cautious overview of why some human foods can be a concern for pets, why species differ, and when to ask a veterinarian.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Can a food that is safe for me, or for my dog, be a concern for another pet?",
      answer:
        "Yes. Animals process food differently, so a food that people tolerate, or that suits one pet species, can still be a documented concern for another. Cats, dogs, rabbits, birds, and reptiles are biologically distinct, and tolerance also varies by age, health, and the individual animal. This page is a general overview, not advice for your specific pet; a veterinarian can answer species-specific questions.",
    },
    {
      question: "Which foods are commonly raised as concerns for dogs and cats?",
      answer:
        "Veterinary references commonly discuss chocolate, grapes and raisins, the sweetener xylitol, and onions and garlic for dogs, and onions and garlic for cats; lilies are a notable hazard for cats, though they are a plant rather than a food. This is not a complete list and not emergency guidance, and it includes no amounts or symptoms. Treat any of these as a reason to ask a veterinarian rather than to judge risk yourself.",
    },
    {
      question: "What should I do if I think my pet ate something harmful?",
      answer:
        "Do not rely on a webpage to decide whether it is serious, and do not wait for symptoms. Contact a veterinarian, an animal poison-control service such as the ASPCA Animal Poison Control Center, or a local emergency service immediately. A professional can advise on what is appropriate for your individual animal. This page gives no home remedies or first-aid steps by design, because those decisions belong with a veterinarian or poison-control service.",
    },
    {
      question: "Where can I read more about specific foods for dogs and cats?",
      answer:
        "FaunaHub has separate educational hubs that discuss individual foods in more depth: the dog food-safety hub at /dogs/food and the cat food-safety hub at /cats/food. For decisions about your own animal, a qualified veterinarian is the right source.",
    },
];

export default function FoodsDangerousToPetsPage() {
  return (
    <FeedingLayout
      crumbs={[
        { name: "Animal Food & Diet", href: "/animal-food-and-diet" },
        { name: "Foods dangerous to pets", href: PATH },
      ]}
      kicker="Pet food safety"
      h1={"Foods that can be dangerous to pets"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Some foods that are ordinary or even healthy for people can be a documented concern for certain pets, and animals differ from one another in ways that matter. A food that is fine for humans, or even for one pet species, may be something to raise with a veterinarian for another. This page is a calm, educational overview of that idea. It is not veterinary advice, not a diagnosis, not a treatment plan, and not emergency guidance.
          </p>
          <p>
            If you think your pet may have eaten something that could be harmful, do not use a webpage to decide whether it is serious. Contact a veterinarian, an animal poison-control service, or a local emergency service right away. The sections below explain why species differ and point you to FaunaHub&#39;s existing dog and cat food-safety pages and to a veterinarian for specifics.
          </p>
        </>
      }
      related={[
    { label: "Animal Food & Diet", href: "/animal-food-and-diet" },
    { label: "Dog food safety", href: "/dogs/food" },
    { label: "Cat food safety", href: "/cats/food" },
    { label: "Pet Safety", href: "/pet-safety" },
    { label: "Care & veterinary boundaries", href: "/animal-research-sources/animal-care-and-veterinary-boundaries" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Why a food can matter for one animal and not another"}>
        <p>
          Different animals process food differently, so there is no single rule that covers every pet. Bodies vary in which enzymes they make, how quickly they break down particular compounds, and how sensitive their organs are. That is why a food humans tolerate easily can still be a documented concern for a dog or a cat, and why a food that suits one species may be a question for another.
        </p>
        <p>
          Diet and tolerance also vary within a species by age, health, body size, and individual sensitivity. Because of this variation, broad internet claims that a food is universally safe or universally toxic are unreliable. The dependable approach is to treat species and individual differences seriously and to ask a qualified veterinarian about your specific animal rather than to generalise.
        </p>
      </Section>
      <Section id="s1" title={"Species differ: a few points of general biology"}>
        <p>
          Pet species are biologically distinct, and their nutrition reflects that. Cats are obligate carnivores, meaning they depend on nutrients found in animal tissue, such as taurine. Dogs are more omnivorous. Rabbits are hindgut-fermenting herbivores that rely on a high-fibre, plant-based diet. These are general facts about how the animals are built, not feeding instructions.
        </p>
        <p>
          Birds are especially varied: a parrot, a chicken, a duck, and a hummingbird are very different animals, so there is no single bird diet. Reptile and amphibian diets also differ radically from one species to another. Because of this diversity, what counts as appropriate or concerning food cannot be read across from one species to another, and species-specific questions belong with a veterinarian who knows that group of animals, such as an avian or reptile and amphibian vet where relevant.
        </p>
      </Section>
      <Section id="s2" title={"A few documented concerns to ask a veterinarian about"}>
        <p>
          The examples below are widely documented in veterinary references and are listed only as concerns to raise with a veterinarian, not as a checklist, a diagnosis tool, or emergency guidance. This is not a complete list, and the absence of a food here does not make it safe. There are no amounts, no symptoms, and no treatment steps in this overview by design, because those judgements depend on the individual animal and belong with a professional.
        </p>
        <p>
          For dogs, foods commonly discussed as concerns include chocolate, grapes and raisins, the sweetener xylitol, and onions and garlic. For cats, onions and garlic are also commonly discussed, and lilies are a notable hazard for cats, though they are a plant rather than a food. If your pet has encountered any of these, the right next step is to contact a veterinarian or an animal poison-control service rather than to estimate risk yourself.
        </p>
        <p>
          FaunaHub keeps separate educational pages for dogs and cats that discuss individual foods in more depth. You can read those at the dog food-safety hub at /dogs/food and the cat food-safety hub at /cats/food. For recognising possible warning signs and knowing when to escalate, the pet poisoning warning signs page at /pet-safety is a calm companion resource.
        </p>
      </Section>
      <Section id="s3" title={"If you have a concern about something your pet ate"}>
        <p>
          Treat a suspected harmful ingestion as a reason to get professional guidance promptly rather than to wait and watch. For any urgent ingestion or poisoning concern, contact a veterinarian, an animal poison-control service such as the ASPCA Animal Poison Control Center, or a local emergency service immediately, even before any symptoms appear. Many situations are most manageable when help is sought early.
        </p>
        <p>
          A veterinarian or poison-control professional is the right person to decide what, if anything, should be done, and they can give guidance suited to your individual animal. This page intentionally gives no home steps, remedies, or first-aid instructions, because those judgements belong with a professional who can respond to your specific situation. Never delay or avoid veterinary care on the basis of anything you read online, including this page.
        </p>
      </Section>
      <Section id="s4" title={"Why feeding wild animals is a separate concern"}>
        <p>
          The same caution extends outdoors, but for different reasons. Feeding wild animals, even with good intentions, can cause real harm: it can alter natural behaviour, create dependency, spread disease where animals gather, concentrate animals in unnatural numbers, increase human-wildlife conflict, and provide poor nutrition compared with a wild diet. Habituation to people can also put the animals themselves at greater risk.
        </p>
        <p>
          For these reasons, this page gives no instructions on what or how to feed wild animals. If you have a question about wildlife in your area, including injured or orphaned animals, the appropriate contacts are your local or official wildlife agencies and licensed wildlife rehabilitators, who can advise responsibly for your region.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </FeedingLayout>
  );
}
