import type { Metadata } from "next";
import DomesticationLayout, { Section, FaqBlock } from "@/components/domestication/DomesticationLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-domestication/cat-domestication";
const MODIFIED = "2026-06-28";
const TITLE = "Cat Domestication: The Commensal Path";
const DESC =
  "How the cat became domestic from the African wildcat through a commensal pathway tied to early farming — a cautious history of a still-debated process.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "What animal is the domestic cat descended from?",
      answer:
        "Genetic and morphological evidence identifies the African wildcat (Felis lybica) as the wild ancestor of the domestic cat. The European wildcat (Felis silvestris) is a separate animal and is generally not regarded as the source of today's house cats. Domestic cats remain very close to the African wildcat in body, senses, and behaviour.",
    },
    {
      question: "What is the commensal pathway in cat domestication?",
      answer:
        "It describes cats becoming domestic by drawing close to people on their own initiative rather than being captured and bred from the start. As early farming communities in the Near East stored grain, the stores attracted rodents, and the rodents attracted wildcats. Wildcats comfortable near settlements gained a steady food source, and over many generations the population around humans diverged from the wary wild one. The exact timing and geography remain debated.",
    },
    {
      question: "Did cats really \"domesticate themselves\"?",
      answer:
        "\"Self-domestication\" is a useful but imperfect shorthand. It rightly emphasises that cats likely took the first step by approaching human environments, rather than being deliberately selected and bred at the outset. But it can understate the human role: settlement, agriculture, food storage, and the later movement of cats worldwide were all human-created conditions that shaped the process. It is best treated as an animal-led beginning that then unfolded alongside human societies.",
    },
    {
      question: "Why do domestic cats seem so similar to wild cats?",
      answer:
        "Cats retained much of their ancestral biology and behaviour because, for most of their history, they were valued for doing roughly what their wild ancestor already did near grain stores. They stayed solitary-leaning, territorial, and skilled hunters. Strong differentiation into named varieties through selective breeding is largely a later, separate development and should not be read back into the origins of domestication.",
    },
];

export default function CatDomesticationPage() {
  return (
    <DomesticationLayout
      crumbs={[
        { name: "Animal Domestication", href: "/animal-domestication" },
        { name: "Cat domestication", href: PATH },
      ]}
      kicker="Companion animals"
      h1={"Cat domestication"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            The domestic cat descends from the African wildcat (<em>Felis lybica</em>), a small, solitary, fiercely capable predator still found across parts of Africa and western Asia. Unlike the herding or hunting partnerships behind many domestic animals, the cat&#39;s story is usually told as a quieter, more opportunistic one: a wild animal that drew close to people of its own accord, rather than being captured, penned, and reshaped from the outset. Archaeological and genetic evidence indicate this happened gradually, in connection with the early spread of farming, though the precise timing, geography, and number of stages remain debated.
          </p>
          <p>
            This guide treats cat domestication as a long biological and cultural process, not a single dated event, and it leans on cautious, hedged framing because much of the detail is still being clarified. It is educational natural history and ecology only — it does not offer cat-care, feeding, breeding, training, or veterinary guidance. Decisions about any individual animal belong with qualified professionals such as veterinarians and animal-welfare specialists.
          </p>
        </>
      }
      related={[
    { label: "Animal Domestication", href: "/animal-domestication" },
    { label: "Cats", href: "/cats" },
    { label: "Dog domestication", href: "/animal-domestication/dog-domestication" },
    { label: "Commensal & semi-domesticated animals", href: "/animal-domestication/commensal-and-semi-domesticated-animals" },
    { label: "What domestication is", href: "/animal-domestication/what-is-domestication" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"The cat and the African wildcat"}>
        <p>
          Genetic and morphological evidence points to the African wildcat (<em>Felis lybica</em>) as the wild ancestor of the domestic cat. This is a distinct lineage within a broader group of small wildcats; the European wildcat (<em>Felis silvestris</em>) is a separate animal, and modern research generally identifies the African wildcat group, rather than European populations, as the source of today&#39;s house cats.
        </p>
        <p>
          Domestic cats and African wildcats remain remarkably similar in body plan, senses, and hunting behaviour. The differences that did accumulate are comparatively modest next to the dramatic changes seen in many livestock species, which is one reason cats are often said to be only lightly altered from their wild relatives.
        </p>
        <p>
          Because the two are so close, it helps to keep some distinctions clear. A wildcat tamed by a person is not, on its own, a domesticated animal; an animal kept in captivity is not automatically domesticated; and a feral house cat living wild is descended from domestic stock, not a surviving wild ancestor.
        </p>
      </Section>
      <Section id="s1" title={"The commensal pathway"}>
        <p>
          The most widely discussed explanation for how cats became domestic is the commensal pathway. As people in the Near East shifted toward farming and began storing grain, those stores attracted rodents, and the rodents in turn attracted small predators. Wildcats that tolerated proximity to human settlements could exploit this concentrated, reliable prey, and the available reading of the evidence is that this drew wildcats and people into closer and more sustained contact.
        </p>
        <p>
          On this account, the relationship began as a loose, mutually convenient arrangement rather than a deliberate human project. There is no need to imagine early farmers setting out to capture and breed cats; instead, the animals that were least fearful of people had an ecological advantage around settlements, and over many generations the population around humans diverged from the more wary wild one.
        </p>
        <p>
          The geography is usually placed broadly in the Near East, with cats later spreading widely as they travelled with people along trade and settlement routes. The exact origin region, timeline, and whether the process drew on more than one population are all questions that archaeological and genetic research continues to refine.
        </p>
      </Section>
      <Section id="s2" title={"\"Self-domestication\" — a phrase to use carefully"}>
        <p>
          Cats are frequently described as having largely &quot;self-domesticated,&quot; and the term captures something real: the strong likelihood that the animals took the initiative in approaching human environments, rather than being selected and bred from the start. Used in that limited sense, it is a useful shorthand for an opportunistic, animal-led beginning.
        </p>
        <p>
          The phrase should still be handled with caution. It can wrongly suggest that humans played no role, when settlement, agriculture, food storage, and later movement of cats around the world were all human-created conditions that shaped the process. It is more accurate to say the cat&#39;s domestication appears to have started with the animal&#39;s own behaviour and then unfolded alongside human societies over a long period.
        </p>
        <p>
          As with other domestic animals, this is a process whose details remain debated. Claims of a single precise origin date, one definitive site, or a settled consensus on every step overstate what the current evidence can support.
        </p>
      </Section>
      <Section id="s3" title={"Why cats stayed close to their wild relatives"}>
        <p>
          Compared with many domesticated species, cats retained much of their ancestral biology and behaviour. They remained solitary-leaning, territorial, and highly effective hunters, and their senses, reflexes, and predatory repertoire are still close to those of the African wildcat. This reflects the nature of the relationship: for much of its history, the cat was valued for doing roughly what its wild ancestor already did near grain stores, so there was little pressure pushing it far from that template.
        </p>
        <p>
          Selective breeding for particular coat colours, body types, and other features is largely a later and more localised development, distinct from the initial commensal process; it should not be read back into the origins of cat domestication. Most cats through history were not bred to a deliberate standard, and the strong differentiation into named varieties is comparatively recent.
        </p>
        <p>
          The upshot is a domestic animal that sits unusually close to the boundary with its wild relative — domesticated through long association with people, yet behaviourally and ecologically still very much a small wild predator at heart.
        </p>
      </Section>
      <Section id="s4" title={"What remains uncertain"}>
        <p>
          Much about cat domestication is still being worked out. The timing is given only in broad, debated terms; the precise origin region within the Near East is not fixed; and genetics continues to clarify which wildcat populations contributed and how cats dispersed across the world. Readers should be wary of confident, specific claims about exact dates, single sites, or migration routes, as these tend to outrun the evidence.
        </p>
        <p>
          What the archaeological and genetic evidence together support is a cautious, general picture: a wild small cat, drawn to the rodents around early farming communities, gradually becoming the familiar domestic cat through a long association with people. The framing here deliberately stays at that level of certainty rather than inventing detail.
        </p>
        <p>
          Finally, this account is history and ecology, not guidance for living with cats. Questions about the health, behaviour, or welfare of any particular animal should be taken to a veterinarian or other qualified professional.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </DomesticationLayout>
  );
}
