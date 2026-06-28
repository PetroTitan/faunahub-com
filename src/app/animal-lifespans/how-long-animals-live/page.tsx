import type { Metadata } from "next";
import LifespanLayout, { Section, FaqBlock } from "@/components/lifespan/LifespanLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-lifespans/how-long-animals-live";
const MODIFIED = "2026-06-28";
const TITLE = "How Long Animals Live and Why Lifespans Differ";
const DESC =
  "An educational look at why animal lifespans vary so widely, how averages differ from maximum recorded ages, and the biology that shapes how long animals live.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Why do some animals live so much longer than others?",
      answer:
        "Lifespan reflects many interacting factors, including species biology, body size, metabolism, genetics, and environment. There is a broad tendency for larger, slower animals to live longer, but it is only a tendency with many exceptions. Predation, disease, and food availability also strongly shape how long animals actually live, so no single factor explains the differences.",
    },
    {
      question: "Is the maximum recorded age the same as how long an animal usually lives?",
      answer:
        "No. A maximum recorded age is the oldest documented individual, which is often a rare outlier under unusual conditions. A typical or average lifespan describes what is common, and the range describes the spread across individuals. These are different measures, and a single famous old animal is not the species norm. Records are also revised over time as documentation improves.",
    },
    {
      question: "Do animals live longer in the wild or in human care?",
      answer:
        "It varies. In the wild, predation, disease, weather, and food scarcity end many lives early, so animals in human care can sometimes live longer because they avoid predators and may receive food and veterinary attention. However, captive or zoo records can be biased and are not a measurement of wild lifespan, so the two should not be treated as interchangeable.",
    },
    {
      question: "Can this guide tell me how long my pet will live?",
      answer:
        "No. This is general educational content about animal biology, not a prediction for any individual animal and not a plan to extend a pet's life. Lifespan depends on many interacting factors that differ from one animal to the next. For questions about a specific animal's health, age, or care, consult a qualified veterinarian who can assess that animal directly.",
    },
];

export default function HowLongAnimalsLivePage() {
  return (
    <LifespanLayout
      crumbs={[
        { name: "Animal Lifespans", href: "/animal-lifespans" },
        { name: "How long animals live", href: PATH },
      ]}
      kicker="Lifespan"
      h1={"How long animals live"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Animal lifespans vary enormously, from insects whose adult stage lasts only a short time to clams and tortoises documented living for well over a century. This guide explains, in broad and cautious terms, why those differences exist and how biologists think about the question &quot;how long do animals live?&quot; It is educational background, not a prediction about any individual animal.
          </p>
          <p>
            One of the most useful things to understand up front is that &quot;lifespan&quot; is not a single number. A typical or average lifespan, the full range a species can show, and the maximum age ever recorded for one exceptional individual are three different things. Mixing them together is one of the most common sources of confusion, so we keep them clearly separated below.
          </p>
        </>
      }
      related={[
    { label: "Animal Lifespans", href: "/animal-lifespans" },
    { label: "Animal life stages", href: "/animal-lifespans/animal-life-stages" },
    { label: "Long-lived animals", href: "/animal-lifespans/longest-living-animals" },
    { label: "Wild vs captive lifespan", href: "/animal-lifespans/wild-vs-captive-lifespan" },
    { label: "Animal Research Sources", href: "/animal-research-sources" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Average, range, and maximum recorded age are not the same"}>
        <p>
          When people ask how long an animal lives, they may mean several different things. A TYPICAL or AVERAGE lifespan describes what is common for a species. A RANGE describes the spread of outcomes, because individuals differ. A MAXIMUM RECORDED AGE is the oldest documented individual, which is often a rare outlier and not the norm. These should never be treated as interchangeable.
        </p>
        <p>
          A single famous old animal, such as a long-lived tortoise in a collection, tells you what is possible in unusual circumstances. It does not tell you what is normal for the species, and it certainly does not predict the age any particular animal will reach. Records of this kind are also periodically revised as better documentation emerges.
        </p>
        <p>
          Because of this, we deliberately avoid presenting precise single numbers as if they were fixed facts. Where a figure is broadly documented and uncontroversial, the safest framing is a hedged one, and the figure should always be labelled for what it is.
        </p>
      </Section>
      <Section id="s1" title={"The broad pattern: bigger and slower often means longer-lived"}>
        <p>
          Across the animal kingdom there is a loose, much-studied tendency for larger animals and those with slower metabolisms to live longer than small, fast-living ones. Tiny animals with rapid metabolisms and fast reproduction frequently have short lives, while some large, slow animals can live for many decades. This is a general pattern, not a rule.
        </p>
        <p>
          There are well-known exceptions in both directions. Some small animals are surprisingly long-lived for their size, and some larger animals are not. So while body size and pace of life are useful clues, they explain only part of the picture, and biologists treat the pattern as a tendency rather than a law.
        </p>
        <p>
          Other broad ideas, such as the notion that a faster pace of life pairs with a shorter one, are active areas of research rather than settled formulas. They are best understood as helpful framing, not as a way to calculate any animal&#39;s age.
        </p>
      </Section>
      <Section id="s2" title={"Predation, disease, and ecology shape how long animals actually live"}>
        <p>
          How long an animal lives in practice depends heavily on its environment, not only on its built-in biology. In the wild, predation, disease, parasites, weather, accidents, and food scarcity end many lives long before old age. As a result, the lifespan an animal could reach under ideal conditions is often very different from what most individuals actually experience.
        </p>
        <p>
          This is why wild and protected lifespans can diverge so much. Animals in human care, such as in zoos or as companion animals, may avoid predators and receive food and veterinary attention, and so can sometimes live longer than their wild counterparts. Captive or zoo records, however, can be biased toward well-documented or carefully managed individuals and are not a measurement of wild lifespan.
        </p>
        <p>
          Ecology also explains why short lives are not necessarily a failure of biology. Many short-lived animals reproduce quickly and in large numbers, a life strategy in which a brief life paired with abundant offspring works well in their environment.
        </p>
      </Section>
      <Section id="s3" title={"Life cycle length is not the same as adult lifespan"}>
        <p>
          When comparing animals, it helps to separate the length of the adult stage from the length of the whole life cycle. Some animals spend most of their lives in an immature form and only a short time as adults, which can make their adult stage look misleadingly brief.
        </p>
        <p>
          Mayflies are the classic example. The winged adult stage is famously short, often only a brief period, but the earlier aquatic nymph stage usually lasts far longer. Describing a mayfly as living only a day refers to the adult stage, not the total life cycle.
        </p>
        <p>
          Metamorphosis, the dramatic change in body form seen in animals such as frogs and butterflies, is a developmental life-cycle pattern, not aging. A caterpillar becoming a butterfly is a stage of development, not a sign that the animal is growing old.
        </p>
      </Section>
      <Section id="s4" title={"Many factors interact, so lifespan varies"}>
        <p>
          No single factor decides how long an animal lives. Lifespan reflects the species, an individual&#39;s genetics, the environment, and often sex and body size, alongside predation, disease, and, for animals in human care, the quality of that care. These influences interact, which is why two animals of the same species can have very different outcomes.
        </p>
        <p>
          Because of this, broad averages describe groups, not individuals. Even within one species, the spread can be wide, and external events can cut a life short at any stage regardless of an animal&#39;s underlying potential.
        </p>
        <p>
          This is also why honest sources hedge their numbers. The most accurate general statement is usually that lifespan varies widely and depends on many interacting factors, rather than a single confident figure.
        </p>
      </Section>
      <Section id="s5" title={"This guide gives no pet lifespan prediction"}>
        <p>
          This page is educational background about animal biology. It is not a prediction of how long any specific animal, including a pet, will live, and it is not a plan to extend any animal&#39;s life. It offers no diagnosis, treatment, feeding, supplement, or breeding guidance.
        </p>
        <p>
          If you have a question about a particular animal&#39;s health, age, or care, the right source is a qualified veterinarian who can assess that individual animal directly. General educational reading is a starting point for understanding, not a substitute for professional advice.
        </p>
        <p>
          For questions about caring for animals responsibly, FaunaHub&#39;s care and veterinary boundaries explain where general education ends and individual veterinary advice begins.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </LifespanLayout>
  );
}
