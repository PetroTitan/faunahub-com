import type { Metadata } from "next";
import LifespanLayout, { Section, FaqBlock } from "@/components/lifespan/LifespanLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-lifespans/longest-living-animals";
const MODIFIED = "2026-06-28";
const TITLE = "Long-Lived Animals: Notable Examples of Longevity";
const DESC =
  "Well-documented examples of long-lived animals — giant tortoises, bowhead whales, Greenland sharks, ocean quahog clams, koi and parrots. Not a ranking.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Which animal lives the longest?",
      answer:
        "There is no single, settled answer. Among well-documented animals, ocean quahog clams have been aged to centuries, and the Greenland shark is estimated to live for several centuries — but that shark figure is an estimate with a wide margin, and some colonial or clonal organisms complicate the question of what counts as one individual's age. Records are also revised as methods improve, so this is best treated as a set of notable examples rather than a fixed ranking.",
    },
    {
      question: "Is the maximum recorded age the same as a typical lifespan?",
      answer:
        "No. A maximum recorded age is the oldest single individual that has been documented, often under unusually favorable conditions. Typical or average lifespan describes what most members of a species reach, and it is usually much lower than the record. One exceptionally old tortoise, clam, or parrot does not represent the norm for its species.",
    },
    {
      question: "Do animals live longer in captivity than in the wild?",
      answer:
        "Often, yes — veterinary care, reliable food, and the absence of predators can let animals in human care live longer than wild ones. But wild and captive lifespans are not interchangeable: captive and zoo data can be biased toward well-documented or standout individuals, and a captive record is not a measurement of natural wild lifespan.",
    },
    {
      question: "How can scientists estimate ages of centuries-old animals?",
      answer:
        "They rely on indirect methods, because no one observes these animals from birth to death. Examples include counting annual growth lines in clam shells or fish structures, radiocarbon dating of long-lived tissues such as a shark's eye lens, and chemical analysis of whale eye tissue. These give estimates and ranges with uncertainty, not exact birthdays, which is why figures are labelled as estimates and can be revised.",
    },
];

export default function LongestLivingAnimalsPage() {
  return (
    <LifespanLayout
      crumbs={[
        { name: "Animal Lifespans", href: "/animal-lifespans" },
        { name: "Long-lived animals", href: PATH },
      ]}
      kicker="Longevity"
      h1={"Long-lived animals"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Some animals live far longer than humans, and a few are thought to reach ages measured in centuries. This guide gathers NOTABLE, well-documented examples of animal longevity. It is explicitly NOT a definitive numbered ranking or an &quot;absolute top 10&quot;: longevity records are revised as methods improve, many figures are estimates, and comparisons between very different animals are uncertain.
          </p>
          <p>
            Throughout, we try to keep three things separate. TYPICAL (or average) lifespan is what most individuals of a species reach; a RANGE describes how widely that varies; and MAXIMUM RECORDED AGE is the oldest single individual that has been documented — which is not the species norm. We also distinguish WILD from CAPTIVE lifespans, because animals in human care often live longer (veterinary care, reliable food, no predators), and where a famous figure is really an ESTIMATE we say so.
          </p>
        </>
      }
      related={[
    { label: "Animal Lifespans", href: "/animal-lifespans" },
    { label: "Galapagos Tortoise", href: "/animals/galapagos-tortoise" },
    { label: "Whale", href: "/animals/whale" },
    { label: "Shark", href: "/animals/shark" },
    { label: "Short-lived animals", href: "/animal-lifespans/shortest-living-animals" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Why some animals live so long"}>
        <p>
          Lifespan depends on many interacting factors: species and genetics, body size, metabolic rate, environment, sex, predation, disease, and — for animals in human care — the care context. As a broad and imperfect pattern, larger and slower-metabolism animals, and animals living in cold, stable, low-predation environments such as the deep sea, often (but not always) live longer than small, fast-living ones.
        </p>
        <p>
          These are tendencies, not rules, and there are many exceptions. Longevity in the wild is also genuinely hard to measure: researchers rarely watch a single wild animal across its whole life, so ages are often inferred from growth rings, tissue chemistry, or mark-and-recapture rather than observed directly. That is one reason many longevity figures are framed as estimates or ranges rather than exact numbers.
        </p>
      </Section>
      <Section id="s1" title={"Giant tortoises: documented past a century"}>
        <p>
          Giant tortoises — including the Galápagos tortoises (<em>Chelonoidis</em> species) and the Aldabra giant tortoise (<em>Aldabrachelys gigantea</em>) — are among the best-documented long-lived land animals, with some individuals reliably recorded living well over a century. Jonathan, an Aldabra giant tortoise living on the island of Saint Helena, is widely cited as one of the oldest known living land animals, thought to be well over 100 years old, though his exact age is uncertain because his early years were not recorded.
        </p>
        <p>
          A single famous tortoise that passes 100 is a MAXIMUM-type record for a well-cared-for individual, not a guarantee for the species: typical lifespans vary, and many tortoises do not reach such ages. Captive and protected animals also benefit from care and safety that wild tortoises lack, so their ages are not a direct measure of wild lifespan.
        </p>
      </Section>
      <Section id="s2" title={"Long-lived marine animals: bowhead, Greenland shark, and ocean quahog"}>
        <p>
          Among mammals, the bowhead whale (<em>Balaena mysticetus</em>) is regarded as one of the longest-lived, with evidence — including old harpoon points found in living whales and chemical analysis of eye tissue — suggesting some individuals live well beyond a century. These are research estimates rather than birth-to-death observations, so they are best read as approximate.
        </p>
        <p>
          The Greenland shark (<em>Somniosus microcephalus</em>) is ESTIMATED to be among the longest-lived vertebrates, with radiocarbon dating of eye-lens tissue suggesting lifespans of multiple centuries. This is explicitly an estimate with a wide margin of uncertainty, and headline ages for single sharks have been treated cautiously; the method gives a probable range, not a precise birthday.
        </p>
        <p>
          The ocean quahog (<em>Arctica islandica</em>), a marine clam, is documented reaching centuries of age by counting annual growth lines in its shell. A famous individual nicknamed &quot;Ming&quot; was estimated to be roughly five centuries old — and notably, its age was revised upward as measurement methods improved, a clear illustration that such records change over time and that one exceptional clam is not the typical age for its kind.
        </p>
      </Section>
      <Section id="s3" title={"Long-lived animals in human care: koi and parrots"}>
        <p>
          Some animals are especially associated with long lives in care. Koi (ornamental varieties of <em>Cyprinus carpio</em>) are well known for sometimes living for many decades in ponds, and some larger parrots — such as macaws and cockatoos — can live for several decades or more under good husbandry. These are CAPTIVE or DOMESTIC longevity examples.
        </p>
        <p>
          Captive figures are not interchangeable with wild lifespans and are not a prediction for any individual animal. Records from human care can also be biased: standout long-lived individuals are remembered and reported, while average and shorter lives are less visible. The age any particular animal reaches depends on its species, genetics, environment, and care, which no general page can forecast. For health, husbandry, or longevity questions about a specific animal, consult a qualified veterinarian rather than relying on a general guide like this one.
        </p>
      </Section>
      <Section id="s4" title={"Reading longevity claims carefully"}>
        <p>
          When you encounter a longevity claim, it helps to ask what kind of number it is. Is it a typical lifespan, a range, or a maximum recorded age? Is it from the wild or from human care? And is it a measurement or an estimate with a margin of uncertainty? Mixing these — for example, treating one captive record as the wild species norm — is a common source of confusion.
        </p>
        <p>
          It is also worth remembering that &quot;longest-living&quot; lists are snapshots of current, incomplete knowledge. New methods revise old figures, some animals are very hard to age at all, and a handful of organisms (such as certain corals, sponges, or colonial and clonal life forms) raise genuinely tricky questions about what &quot;an individual&#39;s age&quot; even means. This guide therefore offers examples to illustrate longevity, not a settled leaderboard.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </LifespanLayout>
  );
}
