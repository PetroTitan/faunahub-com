import type { Metadata } from "next";
import FeedingLayout, { Section, FaqBlock } from "@/components/feeding/FeedingLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-food-and-diet/rabbit-food-safety";
const MODIFIED = "2026-06-28";
const TITLE = "Rabbit Diet & Food Safety: How Their Gut Works";
const DESC =
  "An educational look at why rabbits are fibre-dependent hindgut-fermenting herbivores, why many human foods are risky, and when to see a rabbit-savvy vet.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Is this page a feeding guide for my rabbit?",
      answer:
        "No. This is an educational explainer about rabbit digestion and food-safety literacy. It deliberately gives no feeding schedule, no portion sizes, and no recipes. Decisions about what an individual rabbit should eat belong with a rabbit-savvy veterinarian who can assess that specific animal's age, health, and needs.",
    },
    {
      question: "Why is fibre talked about so much for rabbits?",
      answer:
        "Rabbits are hindgut fermenters that rely on a steady supply of high-fibre plant material to keep the gut moving and to support the caecal microbes that ferment their food. Because their digestion is tuned to that high-fibre profile, fibre is central to how their biology works. This is general natural-history background, not a feeding instruction.",
    },
    {
      question: "My rabbit has stopped eating or isn't passing droppings. What should I do?",
      answer:
        "Treat this as a reason to contact a rabbit-savvy veterinarian promptly. A rabbit that stops eating or stops producing droppings is widely regarded as needing timely professional attention. This page cannot diagnose or treat the problem, and you should not delay veterinary care to try home remedies.",
    },
    {
      question: "Are there foods that are toxic to rabbits?",
      answer:
        "Some foods, such as chocolate and various sugary or high-starch human snacks, are widely documented as concerns and are worth raising with a veterinarian. This is not a complete list and not emergency guidance. If you think a rabbit has eaten something harmful, contact a vet, an animal poison-control service, or an emergency service immediately.",
    },
];

export default function RabbitFoodSafetyPage() {
  return (
    <FeedingLayout
      crumbs={[
        { name: "Animal Food & Diet", href: "/animal-food-and-diet" },
        { name: "Rabbit food safety", href: PATH },
      ]}
      kicker="Pet food safety"
      h1={"Rabbit diet & food safety"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Rabbits are herbivores with an unusual and finely balanced digestive system, and that biology is the reason food choices matter so much for them. This page is an educational explainer about how a rabbit&#39;s gut works and why some foods are widely treated as poor or risky. It is natural-history and safety-literacy content, not veterinary advice, and it does not provide a feeding plan, portions, schedules, or any treatment for digestive problems.
          </p>
          <p>
            If you keep a rabbit, the single most useful thing to understand is that diet and health are decisions to make with a rabbit-savvy veterinarian who knows the individual animal. Throughout this page, any change in eating, droppings, or behaviour is framed as a reason to seek prompt veterinary attention, not as something to diagnose or manage at home.
          </p>
        </>
      }
      related={[
    { label: "Animal Food & Diet", href: "/animal-food-and-diet" },
    { label: "Rabbit", href: "/animals/rabbit" },
    { label: "What animals eat", href: "/animal-food-and-diet/what-animals-eat" },
    { label: "Pet Safety", href: "/pet-safety" },
    { label: "Care & veterinary boundaries", href: "/animal-research-sources/animal-care-and-veterinary-boundaries" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Rabbits are fibre-dependent hindgut fermenters"}>
        <p>
          The domestic rabbit (<em>Oryctolagus cuniculus</em>) is a strict herbivore whose digestion is built around a continuous supply of high-fibre plant material. Rabbits are hindgut fermenters: much of the breakdown of tough plant fibre happens in an enlarged organ called the caecum, where microbes ferment food after it leaves the small intestine. This is a different strategy from the foregut fermentation seen in animals like cattle, and it makes the gut microbial community central to a rabbit&#39;s wellbeing.
        </p>
        <p>
          Fibre does more than provide nutrients. It keeps the gut physically moving and helps maintain the balance of caecal microbes. Rabbits also practise caecotrophy, re-ingesting special soft droppings (caecotrophs) directly from the body to absorb nutrients produced by fermentation, which is a normal and important part of their biology. Because so much depends on steady fibre intake and a stable microbial population, rabbit digestion is often described as sensitive.
        </p>
      </Section>
      <Section id="s1" title={"Why food choices matter for a sensitive gut"}>
        <p>
          Because a rabbit&#39;s system is tuned to high-fibre forage, foods that are very different from that profile can be a poor fit. Foods high in sugar, starch, or fat, including many human snacks, are commonly discussed as risky for rabbits precisely because they do not match what the gut is adapted to process. The concern is general and biological; this page does not rank foods, suggest amounts, or imply any food is universally safe.
        </p>
        <p>
          Diet needs also vary with the individual animal&#39;s age, health, and life stage, which is one reason there is no single correct menu that fits every rabbit. What is appropriate for a particular rabbit is a judgement for a veterinarian who can assess that animal. Treat any major change to what a rabbit eats as a decision to discuss with a vet rather than something to work out from a general article.
        </p>
      </Section>
      <Section id="s2" title={"Foods often flagged as concerns to ask a vet about"}>
        <p>
          Some foods are widely documented as concerns for rabbits and are worth raising with a veterinarian rather than guessing about. Commonly mentioned examples include chocolate and other sugary human treats, and high-starch or high-sugar items such as bread, crackers, cereals, and many shop-bought sweet snacks. These are noted here only as documented topics to discuss with a vet, with no amounts, no symptom checklists, and no treatment steps.
        </p>
        <p>
          This is not a complete list and is not emergency guidance. Plants and human foods affect animals in different ways, individual rabbits differ, and a short web list can never replace professional advice. If you are unsure whether something is appropriate for your rabbit, the safe approach is to ask a rabbit-savvy veterinarian before offering it, not to rely on a general page like this one.
        </p>
      </Section>
      <Section id="s3" title={"Changes in eating, droppings, or behaviour"}>
        <p>
          Because the rabbit gut depends on constant movement, changes in appetite, in the size or number of droppings, or in normal behaviour are taken seriously by people who care for rabbits. A rabbit that stops eating or stops producing droppings is widely regarded as needing prompt veterinary attention. This page describes that as a reason to seek help quickly; it is not a diagnosis and not a list of conditions to identify yourself.
        </p>
        <p>
          If you notice any such change, the appropriate response is to contact a rabbit-savvy veterinarian promptly rather than to wait, adjust the diet, or try home remedies. Rabbits can deteriorate faster than many owners expect, so timely professional assessment is the priority. Never delay or avoid veterinary care on the basis of an educational article.
        </p>
      </Section>
      <Section id="s4" title={"Where to turn for diet and health decisions"}>
        <p>
          For any decision about what a particular rabbit should eat, or about its health, consult a qualified veterinarian, ideally one experienced with rabbits and other exotic companion animals. A vet can weigh the individual rabbit&#39;s age, weight, history, and current condition in a way that no general guide can. This page is intended only to explain the underlying biology so those conversations make more sense.
        </p>
        <p>
          For any urgent concern that a rabbit has eaten something harmful, or for a suspected poisoning, contact a veterinarian, an animal poison-control service, or a local emergency service immediately. Reputable veterinary organisations such as veterinary associations and established veterinary references are good starting points for general background reading, but they complement rather than replace hands-on professional care.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </FeedingLayout>
  );
}
