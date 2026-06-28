import type { Metadata } from "next";
import LifespanLayout, { Section, FaqBlock } from "@/components/lifespan/LifespanLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-lifespans/animal-life-stages";
const MODIFIED = "2026-06-28";
const TITLE = "Animal Life Stages: Egg, Larva, Adult & Aging";
const DESC =
  "A calm biology explainer on animal life stages: eggs versus live birth, larval and juvenile growth, sexual maturity, and senescence as a natural process.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "What are the main life stages of an animal?",
      answer:
        "In broad terms, most animals begin as an egg or developing embryo, pass through one or more immature stages (such as a larva, or a juvenile that resembles a smaller adult), reach sexual maturity, live as adults, and then experience senescence, the biological process of aging. The exact stages and their names differ greatly between groups of animals.",
    },
    {
      question: "Is metamorphosis the same as aging?",
      answer:
        "No. Metamorphosis is a developmental transformation that is part of growing up, such as a tadpole becoming a frog or a caterpillar becoming a butterfly. Aging, or senescence, is a separate, later process of gradual biological decline. The brief winged adult stage of an insect like a mayfly is only one part of its total life cycle, which also includes a much longer immature stage.",
    },
    {
      question: "Does reaching sexual maturity mean an animal is full-grown?",
      answer:
        "Not necessarily. Sexual maturity is the point at which an animal can reproduce, and in some species this happens while the animal is still growing toward its full adult size. In others, near-final body size comes first and reproductive ability follows. The two milestones are related but distinct, and their timing varies by species, sex, body size, and environment.",
    },
    {
      question: "Why doesn't this guide list exact lifespans for each animal?",
      answer:
        "Because lifespan depends on species, genetics, environment, sex, body size, predation, disease, and care context, a single precise number would be misleading. Average lifespan, maximum recorded age, and wild versus captive or domestic figures all mean different things and should not be mixed. This page offers educational background on life stages and aging, not lifespan predictions or any health and care advice; species-specific health questions should go to a qualified veterinarian.",
    },
];

export default function AnimalLifeStagesPage() {
  return (
    <LifespanLayout
      crumbs={[
        { name: "Animal Lifespans", href: "/animal-lifespans" },
        { name: "Life stages", href: PATH },
      ]}
      kicker="Life stages"
      h1={"Animal life stages"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Almost every animal moves through a sequence of life stages, from its earliest beginnings as an egg or a developing embryo, through growth and the arrival of the ability to reproduce, to the gradual changes of old age. These stages are part of an animal&#39;s life cycle, a developmental pattern shaped by its biology, and they look strikingly different across the animal kingdom.
          </p>
          <p>
            This guide describes those stages as a museum or university biology explainer would: what they are, how they vary, and why no single timeline fits all animals. It is educational background on natural development and aging, not health, care, or veterinary advice, and it deliberately avoids treating any species&#39; lifespan as a fixed or guaranteed number.
          </p>
        </>
      }
      related={[
    { label: "Animal Lifespans", href: "/animal-lifespans" },
    { label: "Animal life cycles", href: "/animal-lifespans/animal-life-cycles" },
    { label: "Metamorphosis", href: "/animal-lifespans/metamorphosis" },
    { label: "How long animals live", href: "/animal-lifespans/how-long-animals-live" },
    { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Beginnings: eggs, live birth, and everything between"}>
        <p>
          Most animals start life from a fertilised egg, but how that egg develops varies enormously. Many invertebrates, fish, amphibians, reptiles, and all birds are oviparous, meaning the embryo develops inside an egg laid outside the parent&#39;s body. Mammals are mostly viviparous, giving birth to live young that develop internally, though the egg-laying monotremes such as the platypus (<em>Ornithorhynchus anatinus</em>) are a famous exception.
        </p>
        <p>
          Between these patterns lie intermediate strategies. Some sharks, snakes, and insects are ovoviviparous, retaining eggs inside the body until they hatch, so the young emerge live without a true placental connection. The number of offspring also differs by orders of magnitude: some animals release thousands or millions of eggs with little parental involvement, while others produce very few young and invest heavily in caring for them. None of these strategies is inherently superior; each is a different evolutionary solution to surviving and reproducing.
        </p>
      </Section>
      <Section id="s1" title={"Larvae and juveniles: growing up in stages"}>
        <p>
          After hatching or birth, many animals pass through immature stages that can look almost nothing like the adult. A larva is a distinct early form, often adapted to a different habitat or food source: the caterpillar of a butterfly, the tadpole of a frog, or the planktonic larva of a crab or sea star. These larvae later undergo metamorphosis, a developmental remodelling of the body, to reach the adult form.
        </p>
        <p>
          Metamorphosis is a life-cycle and developmental pattern, not a form of aging. It is part of growing up, not growing old. In animals with complete metamorphosis, such as butterflies, beetles, and flies, a pupal stage separates the larva from the winged adult. Other animals skip a dramatic larval phase: a juvenile mammal, bird, or reptile generally resembles a smaller version of the adult and changes mainly through growth and maturation rather than a wholesale transformation.
        </p>
        <p>
          It is worth distinguishing the adult lifespan from the total life cycle. A mayfly, for example, is often described as living only about a day, but that refers to its brief winged adult stage; its aquatic larval (nymph) stage typically lasts far longer, sometimes months or more depending on the species. The short adult phase is just one chapter of a longer life cycle.
        </p>
      </Section>
      <Section id="s2" title={"Sexual maturity versus full adult size"}>
        <p>
          Reaching sexual maturity, the point at which an animal can reproduce, is a key milestone, but it is not always the same as reaching full adult body size. In some species an animal becomes capable of breeding while still growing, so it is reproductively mature before it is physically full-grown. In others, the body reaches near-final size first and the capacity to reproduce follows later.
        </p>
        <p>
          The timing varies widely between species and is influenced by body size, environment, sex, and biology. As a broad and uncontroversial pattern, many small animals mature quickly, sometimes within weeks or months, while many large, long-lived animals may take years to reach maturity. These are general tendencies rather than fixed rules, and exact timing differs from one species to another.
        </p>
      </Section>
      <Section id="s3" title={"Senescence and aging as a biological process"}>
        <p>
          Senescence is the gradual, biological decline in the function of an organism&#39;s cells, tissues, and systems that tends to accompany advancing age. Described as a process rather than a diagnosis, it can involve slower regeneration, reduced fertility, and changing physical condition over time. It is studied in biology and gerontology as a natural feature of how many organisms age, not as a disease to be treated here.
        </p>
        <p>
          Aging is not uniform across the animal kingdom. Some organisms show very slow senescence and remarkable longevity, while others have brief lives in which the adult stage is fleeting. A few animals display unusual patterns that researchers continue to study, such as the jellyfish <em>Turritopsis dohrnii</em>, sometimes called &#39;immortal&#39; because it can revert to an earlier developmental stage under certain conditions, a biological curiosity rather than literal immortality.
        </p>
        <p>
          This page describes aging only as a natural phenomenon. It is not medical guidance, and it offers no diagnosis, treatment, or advice for extending an individual animal&#39;s life. Questions about a specific animal&#39;s health or aging belong with a qualified veterinarian.
        </p>
      </Section>
      <Section id="s4" title={"Why lifespan numbers are slippery"}>
        <p>
          It is tempting to attach a single number to a species, but lifespan depends on many factors at once: species and genetics, environment, sex, body size, predation, disease, and, for animals in human care, the care context. Because of this, any figure is best understood as a broad, hedged estimate rather than a guarantee that an animal will live exactly that long.
        </p>
        <p>
          Labels matter. A typical or average lifespan is different from a documented maximum recorded age, and a single famous old individual is not the species norm. Wild, captive, and domestic lifespans are also not interchangeable: animals in human care often live longer because of factors such as veterinary care and absence of predation, but captive or zoo records can be biased and do not equal wild lifespan. Where broad textbook framing exists, it is far more honest to say an animal &#39;often lives more than a century&#39; or that a figure &#39;varies widely&#39; than to quote one precise average.
        </p>
        <p>
          Comparisons between species are uncertain and records are revised as new observations come in. Any &#39;longest-lived&#39; or &#39;shortest-lived&#39; examples are best treated as notable, well-documented illustrations, not a definitive numbered ranking.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </LifespanLayout>
  );
}
