import type { Metadata } from "next";
import LifespanLayout, { Section, FaqBlock } from "@/components/lifespan/LifespanLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-lifespans/animal-life-cycles";
const MODIFIED = "2026-06-28";
const TITLE = "Animal Life Cycles Across Major Groups";
const DESC =
  "How life cycles differ across mammals, birds, reptiles, amphibians, fish, and insects: eggs, metamorphosis, growth, breeding, and migration explained.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "What is the difference between a life cycle and a lifespan?",
      answer:
        "A life cycle is the ordered sequence of developmental stages an animal passes through — beginning as an egg or live birth, growing, maturing, reproducing, and aging. Lifespan is simply how long the animal lives. Two species can share a broadly similar life cycle yet have very different lifespans, because lifespan depends on species, genetics, environment, sex, body size, predation, disease, and care context.",
    },
    {
      question: "What is the difference between complete and incomplete metamorphosis?",
      answer:
        "In complete metamorphosis (butterflies and moths, beetles, flies, bees) the animal passes through egg, larva, pupa, and adult, and the larva looks very different from the adult. In incomplete metamorphosis (grasshoppers, true bugs, dragonflies) it passes through egg, nymph, and adult, with the nymph resembling a smaller, wingless adult and no pupal stage. Both are developmental patterns, not measures of aging or lifespan.",
    },
    {
      question: "If an insect's adult stage is short, does that mean it is short-lived overall?",
      answer:
        "Not necessarily. Many insects spend most of their life cycle in immature stages, with only a brief winged adult phase. A short adult stage describes one part of the life cycle, not the animal's whole life, and it is a developmental and reproductive strategy rather than rapid aging. The total life cycle can be considerably longer than the adult stage alone.",
    },
    {
      question: "Does this guide tell me how long a particular animal will live?",
      answer:
        "No. This is an educational overview of life-cycle patterns across animal groups, not a lifespan prediction for any individual animal and not breeding, rearing, or care advice. Lifespan figures vary widely by species and differ between wild, captive, and domestic settings. Questions about a specific animal's health or care should go to a qualified veterinarian or wildlife professional.",
    },
];

export default function AnimalLifeCyclesPage() {
  return (
    <LifespanLayout
      crumbs={[
        { name: "Animal Lifespans", href: "/animal-lifespans" },
        { name: "Life cycles", href: PATH },
      ]}
      kicker="Life cycles"
      h1={"Animal life cycles"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            A life cycle is the sequence of stages an animal passes through from its beginning — usually an egg or a live birth — to maturity, reproduction, and eventually the end of life. Different animal groups solve the same basic problem of growing up and reproducing in strikingly different ways, and comparing those patterns is one of the clearest windows into how biology works. This guide is a calm, educational overview of those patterns and is not breeding, rearing, or care guidance.
          </p>
          <p>
            Throughout, it helps to keep two ideas separate: the life cycle (the developmental stages an animal moves through) and the lifespan (how long it lives). They are related but not the same. A long larval phase followed by a brief adult phase, for example, is a fact about the life cycle, not a statement about aging.
          </p>
        </>
      }
      related={[
    { label: "Animal Lifespans", href: "/animal-lifespans" },
    { label: "Metamorphosis", href: "/animal-lifespans/metamorphosis" },
    { label: "Animal life stages", href: "/animal-lifespans/animal-life-stages" },
    { label: "Animal Taxonomy", href: "/animal-taxonomy" },
    { label: "Wildlife & Biodiversity", href: "/wildlife" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"What a life cycle is, and what it is not"}>
        <p>
          Every animal life cycle includes a beginning (fertilisation and early development), a growth phase, the point at which the animal becomes able to reproduce, and senescence — the biological process of aging. These stages are part of development and population biology; describing them is not the same as giving health, lifespan, or care advice.
        </p>
        <p>
          It is worth distinguishing the life cycle from the lifespan. The life cycle describes the ordered stages of development, while lifespan describes duration. Two animals can share a broadly similar life cycle yet differ enormously in how long they live, because lifespan depends on species, genetics, environment, sex, body size, predation, disease, and — for animals in human care — the care context.
        </p>
        <p>
          A recurring source of confusion is treating a short stage as if it were a short life. Some insects spend most of their lives as larvae and only a brief period as winged adults. That brevity describes one stage of the cycle, not the total length of the animal&#39;s life, and it is a developmental pattern rather than rapid aging.
        </p>
      </Section>
      <Section id="s1" title={"Mammals and birds: development around the parents"}>
        <p>
          Most mammals give birth to live young (the marsupials and the egg-laying monotremes are notable exceptions), and the young typically depend on parental care and milk during an early period. Mammals usually reach full body size and sexual maturity gradually, and large-bodied, slower-developing mammals often take longer to mature than small ones — though this is a broad tendency, not a rule.
        </p>
        <p>
          Birds begin as eggs that are incubated outside the body, then hatch into chicks. Species fall along a spectrum: some hatch highly dependent and featherless (altricial), needing extensive feeding in the nest, while others hatch comparatively mobile and downy (precocial) and can move about soon after hatching. Reaching full plumage and breeding condition can take from a single season to several years depending on the species.
        </p>
        <p>
          In both groups, reaching adult size and reaching the ability to reproduce do not always happen at the same moment. An animal can be physically near full size before it is reproductively mature, or vice versa, which is a normal feature of how growth and maturation are timed.
        </p>
      </Section>
      <Section id="s2" title={"Reptiles, amphibians, and fish: eggs, water, and indeterminate growth"}>
        <p>
          Many reptiles lay eggs, while some give live birth, and most hatch or are born as small versions of the adult that then grow over time. A notable contrast with mammals and birds is that many reptiles and fish show indeterminate growth — they keep growing, more slowly, for much of their lives rather than stopping at a fixed adult size.
        </p>
        <p>
          Amphibians are the classic illustration of a life cycle tied to water. A frog typically begins as an egg, hatches into an aquatic tadpole with gills and a tail, and then transforms into an air-breathing adult through metamorphosis. This is a developmental reorganisation of the body, not aging; the tadpole and the adult are the same individual at different life-cycle stages.
        </p>
        <p>
          Most fish begin as eggs and hatch into larvae before developing into juveniles and then adults, though some fish bear live young. Larval fish often look quite unlike the adult and may live in different parts of the water column, which means a single fish can occupy very different ecological roles across its life cycle.
        </p>
      </Section>
      <Section id="s3" title={"Insects: complete versus incomplete metamorphosis"}>
        <p>
          Insects show two broad life-cycle patterns. In complete metamorphosis (seen in butterflies and moths, beetles, flies, and bees) the animal passes through egg, larva, pupa, and adult — the larva, such as a caterpillar or grub, looks nothing like the adult, and the body is extensively remodelled during the pupal stage. In incomplete metamorphosis (seen in grasshoppers, true bugs, and dragonflies) the animal passes through egg, nymph, and adult, with the nymph resembling a smaller, wingless version of the adult and no distinct pupal stage.
        </p>
        <p>
          These terms describe high-level developmental routes, not the length or quality of life. A species with complete metamorphosis is not &#39;older&#39; or &#39;younger&#39; than one with incomplete metamorphosis; they simply reach adulthood by different developmental paths.
        </p>
        <p>
          Many insects spend the majority of their life cycle in the immature stages. Where the winged adult stage is brief, that brevity is a feature of the life-cycle strategy — often paired with rapid reproduction — and should not be read as the animal&#39;s entire life or as a measure of how &#39;short-lived&#39; it is overall.
        </p>
      </Section>
      <Section id="s4" title={"Timing the cycle: seasons, growth, and migration"}>
        <p>
          Many animals are seasonal breeders, concentrating reproduction into the part of the year when conditions favour survival of the young — often timed to temperature, day length, rainfall, or food availability. This timing is a population-level biological pattern shaped by the environment, and it can vary between populations of the same species living in different climates.
        </p>
        <p>
          Growth itself follows different patterns across groups. Mammals and birds generally approach a relatively fixed adult size, while many fish, reptiles, and invertebrates continue growing across much of their lives. Growth rate is also flexible: temperature, food, and crowding can speed it up or slow it down without changing the underlying sequence of life-cycle stages.
        </p>
        <p>
          Migration intersects with the life cycle for many species. Some animals travel between feeding areas and breeding or spawning areas as part of completing their cycle. Migration is best understood here as biology — a movement pattern linked to reproduction and survival — rather than as a stage of aging.
        </p>
      </Section>
      <Section id="s5" title={"Why comparisons are uncertain, and where lifespan fits"}>
        <p>
          Comparing life cycles across groups is illuminating but inherently approximate. Within any group there is wide variation, exceptions are common, and the way scientists define stages (for example, where &#39;juvenile&#39; ends and &#39;adult&#39; begins) can differ between species and studies.
        </p>
        <p>
          Life cycle and lifespan should not be conflated. Knowing that an animal undergoes complete metamorphosis tells you about its development, not how many years it lives. Any lifespan figures are highly species-dependent and differ between wild, captive, and domestic settings, so they belong in dedicated, carefully labelled discussions rather than being read off a life-cycle diagram.
        </p>
        <p>
          This page is educational background on biology. It is not a prediction for any individual animal and not breeding, rearing, or veterinary guidance; questions about a specific animal&#39;s health or care belong with a qualified veterinarian or wildlife professional.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </LifespanLayout>
  );
}
