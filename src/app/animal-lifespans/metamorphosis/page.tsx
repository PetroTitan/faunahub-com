import type { Metadata } from "next";
import LifespanLayout, { Section, FaqBlock } from "@/components/lifespan/LifespanLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-lifespans/metamorphosis";
const MODIFIED = "2026-06-28";
const TITLE = "Metamorphosis: How Frogs and Insects Transform";
const DESC =
  "A calm, museum-style guide to metamorphosis in frogs and insects, comparing complete and incomplete development as a life-cycle pattern, not aging.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Is metamorphosis the same as aging?",
      answer:
        "No. Metamorphosis is a developmental life-cycle pattern in which an animal's body form is reorganized between immature and adult stages, driven by hormones and a genetic program. Aging is the gradual change that accumulates over an organism's entire life. An animal can complete metamorphosis early in life and then live for a long or short time as an adult, so the two ideas are distinct.",
    },
    {
      question: "What is the difference between complete and incomplete metamorphosis?",
      answer:
        "Complete metamorphosis (seen in butterflies, moths, beetles, flies, bees, and ants) has four stages, egg, larva, pupa, and adult, with a pupal stage in which the body is extensively reorganized. Incomplete metamorphosis (seen in dragonflies and grasshoppers) has three stages, egg, nymph, and adult, with no pupa; the nymph resembles a smaller adult and changes gradually through molts.",
    },
    {
      question: "Why do adult mayflies live such a short time?",
      answer:
        "The very short adult stage of a mayfly is only the final part of its life cycle, not its whole life. Mayflies spend a much longer immature period as aquatic larvae before emerging as winged adults. Reported adult durations are estimates that vary by species, so it is important to separate the brief adult stage from the total life cycle, which is considerably longer.",
    },
    {
      question: "Does every frog and insect go through metamorphosis the same way?",
      answer:
        "No. Metamorphosis is a broad pattern, but timing and details vary widely by species and conditions such as temperature and food. Many frogs follow the egg, tadpole, adult sequence and many insects follow complete or incomplete metamorphosis, but amphibian and insect life histories are diverse, and some species depart from the textbook version. Treat stage durations as variable rather than fixed.",
    },
];

export default function MetamorphosisPage() {
  return (
    <LifespanLayout
      crumbs={[
        { name: "Animal Lifespans", href: "/animal-lifespans" },
        { name: "Metamorphosis", href: PATH },
      ]}
      kicker="Development"
      h1={"Metamorphosis"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Metamorphosis is one of the most dramatic patterns in the animal world: a single individual changes body form so completely between life stages that the young and the adult can look like entirely different creatures. A frog begins life as a legless, gilled tadpole and later becomes a four-legged, air-breathing adult; a butterfly hatches as a crawling caterpillar and emerges from its pupa with wings. This guide explains how that transformation works in amphibians and insects, and why biologists describe it as a developmental life-cycle pattern.
          </p>
          <p>
            It is worth saying clearly at the start: metamorphosis is not the same thing as aging. Aging refers to the gradual changes that accumulate over an organism&#39;s whole life, while metamorphosis is a programmed reorganization of the body that happens at specific points in early development. The short winged life of an adult mayfly, for example, is only the final chapter of a much longer life cycle spent underwater. Throughout this guide we keep developmental stages and lifespan separate, and we hedge any numbers because they vary widely by species and conditions.
          </p>
        </>
      }
      related={[
    { label: "Animal Lifespans", href: "/animal-lifespans" },
    { label: "Frog", href: "/animals/frog" },
    { label: "Butterfly", href: "/animals/butterfly" },
    { label: "Axolotl", href: "/animals/axolotl" },
    { label: "Animal life cycles", href: "/animal-lifespans/animal-life-cycles" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"What metamorphosis is (and is not)"}>
        <p>
          Metamorphosis is a biological transition in which an animal&#39;s body plan is substantially remodeled between an immature stage and the adult form. The process is driven by hormones and a genetic program rather than by simple growth: tissues are built, reshaped, or broken down and rebuilt as the animal moves from one stage to the next. It appears most famously in many amphibians and in a large share of insects.
        </p>
        <p>
          Crucially, metamorphosis is a life-cycle pattern, not a measure of how old an animal is or how long it will live. It describes the form an organism takes at different developmental phases. Two species can share the same broad pattern of metamorphosis yet have totally different lifespans, and within a single species the timing of each stage can shift with temperature, food, and environment. We therefore treat developmental stage and lifespan as separate ideas throughout.
        </p>
      </Section>
      <Section id="s1" title={"Amphibian metamorphosis: the frog life cycle"}>
        <p>
          The classic amphibian example is the frog, whose life cycle follows the sequence egg, tadpole (larva), and adult. Frogs typically lay eggs in or near water; these hatch into tadpoles, aquatic larvae that breathe through gills and swim with a tail. Over time the tadpole develops legs, its gills are gradually replaced by lungs, and the tail is reabsorbed as the animal transitions toward the four-limbed adult form that can move on land.
        </p>
        <p>
          This transformation is governed largely by thyroid hormones, which trigger the reshaping of organs and limbs. The pace of frog metamorphosis is not fixed: it varies by species and is strongly influenced by water temperature, food availability, and other environmental factors, so the time spent as a tadpole can differ considerably from one population or species to another. Many salamanders and newts pass through a comparable egg-larva-adult sequence, though amphibian life histories are diverse and some species depart from the textbook pattern.
        </p>
      </Section>
      <Section id="s2" title={"Complete metamorphosis in insects: butterflies and moths"}>
        <p>
          Insects such as butterflies and moths undergo complete metamorphosis (holometaboly), which has four distinct stages: egg, larva (the caterpillar), pupa (the chrysalis in butterflies, often a cocoon-enclosed pupa in many moths), and adult. The larva is mainly a feeding and growth stage, while the winged adult is typically specialized for dispersal and reproduction. The two stages can look so different that they were once mistaken for separate species.
        </p>
        <p>
          The most striking step is the pupal stage. Inside the pupa, the larval body is extensively reorganized into the adult form, with adult structures such as wings and reproductive organs developing before the adult emerges. Beetles, flies, bees, wasps, and ants also use complete metamorphosis, making it one of the most widespread developmental strategies among insects. As with frogs, the duration of each stage varies by species and conditions and should not be read as a fixed schedule.
        </p>
      </Section>
      <Section id="s3" title={"Incomplete metamorphosis: dragonflies and grasshoppers"}>
        <p>
          Not all insects have a pupal stage. In incomplete metamorphosis (hemimetaboly), the sequence is egg, nymph, and adult, with no pupa in between. The nymph generally resembles a smaller version of the adult and grows in steps, shedding its exoskeleton through a series of molts. Features such as wings develop gradually across these molts rather than appearing suddenly after a pupal stage.
        </p>
        <p>
          Grasshoppers are a familiar land example: their nymphs look much like wingless adults and become more adult-like with each molt. Dragonflies and damselflies follow the same egg-nymph-adult pattern, but their nymphs (often called naiads) are aquatic predators that live underwater before climbing out and molting into the winged adult. This is a useful reminder that the visible flying insect can represent only part of a longer life cycle spent in a very different habitat.
        </p>
      </Section>
      <Section id="s4" title={"Life cycle versus adult lifespan"}>
        <p>
          Because metamorphosis splits life into contrasting stages, it is easy to confuse a short adult stage with a short life. The mayfly is the classic example. Adult mayflies are famously short-lived, with the winged adult stage often lasting only a brief period, in some species roughly a day or so. But that figure describes the ADULT stage as an ESTIMATE, not the total life cycle: mayflies spend a far longer immature period as aquatic larvae before they ever take flight.
        </p>
        <p>
          The general lesson is to distinguish total life cycle from adult lifespan, and to avoid treating any single number as a species&#39; whole story. Lifespans and stage durations depend on species, genetics, environment, temperature, body size, predation, and disease, and they differ between wild and captive settings. We deliberately avoid invented averages, rankings, or maximum-age claims here, and where figures appear in reputable sources they should be read with their stage, context, and uncertainty clearly labeled.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </LifespanLayout>
  );
}
