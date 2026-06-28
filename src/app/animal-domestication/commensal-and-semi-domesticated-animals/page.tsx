import type { Metadata } from "next";
import DomesticationLayout, { Section, FaqBlock } from "@/components/domestication/DomesticationLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-domestication/commensal-and-semi-domesticated-animals";
const MODIFIED = "2026-06-28";
const TITLE = "Commensal & Semi-Domesticated Animals Explained";
const DESC =
  "How cats, dogs, honey bees, silkworms, reindeer, and working elephants reveal the gap between domesticated, managed, semi-domesticated, captive, and tamed.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "What is a commensal animal, and how does it relate to domestication?",
      answer:
        "A commensal animal is one that drew close to human settlements on its own, often because our waste, stored food, or the rodents it attracts offered an advantage. The cat is the classic case: evidence suggests the African wildcat (Felis lybica) moved toward early farming communities, with the relationship deepening gradually rather than through deliberate capture. The commensal pathway is considered one of several routes into domestication, and the timeline and geography remain debated.",
    },
    {
      question: "Are honey bees and silkworms domesticated?",
      answer:
        "They sit at very different points on the spectrum. Honey bees are best described as managed or semi-domesticated: people keep and move colonies, but the bees stay biologically close to wild ones and can live independently. The domestic silkworm (Bombyx mori), from the wild silk moth (Bombyx mandarina), is so thoroughly domesticated that it can no longer survive without human care, making it an unusually complete example of insect domestication.",
    },
    {
      question: "Why are reindeer called semi-domesticated?",
      answer:
        "Reindeer (Rangifer tarandus) have been herded across Arctic Eurasia for a long time, but many populations remain genuinely wild, and even herded animals are often only partly managed. The boundary between wild and herded reindeer is blurred, and herding did not reshape reindeer biology the way the domestication of livestock such as sheep or cattle did. \"Semi-domesticated\" is therefore an accurate description rather than just a hedge.",
    },
    {
      question: "Is a working elephant a domesticated animal?",
      answer:
        "No. Working Asian elephants are tamed, captive individuals, historically captured from or captive-bred out of wild Asian elephant (Elephas maximus) populations. Their breeding and biology have not been reshaped over generations, so the species is not domesticated; it is captive and tamed. Taming an individual is not the same as domesticating a species, and the elephant is the standard example used to keep those ideas separate.",
    },
];

export default function CommensalAndSemiDomesticatedAnimalsPage() {
  return (
    <DomesticationLayout
      crumbs={[
        { name: "Animal Domestication", href: "/animal-domestication" },
        { name: "Commensal & semi-domesticated animals", href: PATH },
      ]}
      kicker="Commensal & managed"
      h1={"Commensal & semi-domesticated animals"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Not every animal that lives alongside people is &quot;domesticated.&quot; Some drifted toward human settlements on their own, some are carefully kept yet remain biologically close to their wild relatives, and some are simply tamed individuals taken from wild populations. This guide looks at the grey zone between fully domesticated species and genuinely wild animals: the commensal pathway, managed and semi-domesticated species, and captive working animals that never became a domesticated species at all.
          </p>
          <p>
            Domestication is a long biological and cultural process, usually not a single event and often repeated in more than one region. Throughout this guide we keep the language cautious: the timelines and geographies involved remain debated, and we avoid pinning the story to any one date, site, or origin point. The goal is to explain how scholars use terms like commensal, managed, semi-domesticated, captive, and tamed, and why those distinctions matter.
          </p>
        </>
      }
      related={[
    { label: "Animal Domestication", href: "/animal-domestication" },
    { label: "Bee", href: "/animals/bee" },
    { label: "Silkworm", href: "/animals/silkworm" },
    { label: "Elephant", href: "/animals/elephant" },
    { label: "Domestication vs taming", href: "/animal-domestication/domestication-vs-taming" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Domesticated, managed, captive, tamed: why the words differ"}>
        <p>
          Domestication describes a multi-generational process in which a population&#39;s biology and behaviour are gradually reshaped through life alongside people. It is not the same as taming an individual animal, not the same as holding an animal in captivity, and not the same as the later selective breeding that refines breeds once a species is already domestic. A tamed elephant or a captive-bred zoo animal is not, by itself, evidence that the species has been domesticated.
        </p>
        <p>
          Between &quot;fully wild&quot; and &quot;fully domesticated&quot; sit several useful labels. A commensal species is one that drew close to human settlements, often benefiting from our waste, stored food, or the rodents it attracts, with the relationship deepening over time. A managed or semi-domesticated species is kept, moved, or herded by people but stays biologically close to its wild form and can usually live independently. We apply these labels with caveats, because the boundaries are genuinely blurred and still debated.
        </p>
        <p>
          A further distinction matters for ecology: a feral animal descended from domestic stock, such as a city pigeon or a free-roaming cat, is not the wild ancestor. It is domestic biology living without direct human control, which is different again from a wild population that was never domesticated.
        </p>
      </Section>
      <Section id="s1" title={"The commensal pathway: cats and the early dog"}>
        <p>
          Scholars often describe several routes into domestication, and one of them is the commensal pathway, where animals were drawn to human settlements before any deliberate keeping began. The cat is the textbook case. Evidence suggests that the African wildcat (<em>Felis lybica</em>) moved closer to early farming communities, where stored grain attracted rodents, and the relationship developed gradually rather than through a single act of capture. Cats are often described as largely self-domesticated, and genetic work is still clarifying the steps; the Near East features prominently, with cats later spreading widely alongside people.
        </p>
        <p>
          The dog is often described as among the earliest domesticated animals, with roots that appear to predate farming. Its wild ancestor is the gray wolf (<em>Canis lupus</em>), and archaeological and genetic evidence indicate a relationship built in shared Eurasian landscapes rather than through herding. Whether dog domestication happened once or several times, exactly where, and exactly when, all remain actively debated, and recent genetics has repeatedly revised earlier assumptions. The honest summary is that the timeline remains uncertain and the geography is still being worked out.
        </p>
        <p>
          The commensal idea helps explain why these two companions feel so different from livestock. They did not begin as resources to be herded; they began as animals that found advantage in living near us, and only later became woven into human life across thousands of years.
        </p>
      </Section>
      <Section id="s2" title={"Managed insects: honey bees and the silkworm"}>
        <p>
          Honey bees are best described as managed or semi-domesticated rather than fully domesticated. People keep, move, and house colonies of honey bees (<em>Apis mellifera</em> and relatives), but managed bees remain biologically very close to their wild counterparts and can live independently if a colony leaves human care. Beekeeping spread widely from Africa, Europe, and the Near East, yet the animals themselves were never reshaped into something that depends on us. This is why &quot;managed&quot; fits them better than &quot;domesticated.&quot;
        </p>
        <p>
          The silk moth sits at the opposite extreme. The domestic silkworm (<em>Bombyx mori</em>), derived from the wild silk moth (<em>Bombyx mandarina</em>), has been so thoroughly altered through life under human care that it can no longer survive on its own. It is an unusually complete example of domestication in an insect, historically tied to China and later spreading along trade routes. We avoid assigning a precise origin date; the broad picture is well established while the fine detail remains a matter for ongoing study.
        </p>
        <p>
          Placed side by side, bees and silkworms show how wide the spectrum is. Two kept insects can fall on nearly opposite ends of it, one still essentially wild and self-sufficient, the other fully dependent on people.
        </p>
      </Section>
      <Section id="s3" title={"Reindeer: herded, yet often still wild"}>
        <p>
          Reindeer, also called caribou (<em>Rangifer tarandus</em>), are frequently described as semi-domesticated, and the qualifier matters. Across Arctic Eurasia, people have herded reindeer for a very long time, but many populations across the circumpolar north remain genuinely wild, and even herded animals are often only partly managed. The line between a wild reindeer and a herded one can be blurred, with animals moving between states more readily than is typical for fully domesticated livestock.
        </p>
        <p>
          This makes reindeer a good illustration of why &quot;semi-domesticated&quot; is not just a hedge but an accurate description. Herding shaped human cultures and movement patterns across the Arctic, yet it did not transform reindeer biology in the way that the domestication of, say, sheep or cattle did. We describe the relationship cautiously and resist treating Arctic herding as equivalent to the domestication of barnyard animals.
        </p>
      </Section>
      <Section id="s4" title={"Working elephants: tamed and captive, not domesticated"}>
        <p>
          The working Asian elephant is one of the clearest examples of an animal that people use closely yet have not domesticated as a species. Working elephants are tamed individuals, historically captured from or captive-bred out of wild Asian elephant (<em>Elephas maximus</em>) populations in South and Southeast Asia. Their breeding and biology have not been reshaped by people over many generations in the way domestication requires, so the species is captive and tamed, not domesticated.
        </p>
        <p>
          This distinction is easy to lose because a trained, cooperative elephant can look thoroughly &quot;tame.&quot; But taming an individual is a relationship with that animal, not a change to the species. Calling every captive or trained animal &quot;domesticated&quot; erases a real biological difference, and the elephant is the standard cautionary example used to make that point.
        </p>
        <p>
          FaunaHub presents this strictly as natural-history and ecology context. Decisions about specific animals, including anything to do with their keeping, health, or handling, belong with qualified professionals and the relevant authorities, not with a general history guide.
        </p>
      </Section>
      <Section id="s5" title={"Reading the spectrum without overclaiming"}>
        <p>
          Taken together, these cases map a spectrum rather than a switch. At one end are fully domesticated species whose biology has been reshaped over many generations; at the other are wild animals and tamed wild individuals. In between sit commensal beginnings, managed populations, and semi-domesticated relationships, each best stated with its own caveats.
        </p>
        <p>
          Because domestication is a long process that was often repeated in more than one region, single-sentence origin stories almost always oversimplify. Where this guide gives a region or a broad era, treat it as a debated, hedged summary rather than a settled fact, and remember that genetic research continues to revise the picture. The careful vocabulary, commensal, managed, semi-domesticated, captive, tamed, is what lets us describe these animals honestly without overclaiming.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </DomesticationLayout>
  );
}
