import type { Metadata } from "next";
import DomesticationLayout, { Section, FaqBlock } from "@/components/domestication/DomesticationLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-domestication/what-is-domestication";
const MODIFIED = "2026-06-28";
const TITLE = "What Is Domestication? A Clear Definition";
const DESC =
  "Domestication explained as a long biological and cultural process, and how it differs from taming, captivity, and breeding across the main pathways.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Is a tamed wild animal the same as a domesticated one?",
      answer:
        "No. Taming is an individual animal becoming used to people during its own lifetime, and that tameness is not inherited. Domestication is a process affecting a whole population over many generations, reshaping its behaviour, biology, and breeding. The working Asian elephant is a well-known example of a tamed, kept animal that is not a domesticated species.",
    },
    {
      question: "Does keeping an animal in captivity make it domesticated?",
      answer:
        "Not by itself. Captivity simply means an animal is held by people, and many captive or even captive-bred animals remain biologically the same as their wild relatives. Domestication requires long-term, heritable change across generations. A feral animal, meanwhile, descends from domestic stock and is not the original wild ancestor.",
    },
    {
      question: "How is selective breeding different from domestication?",
      answer:
        "Selective breeding is the later, deliberate practice of choosing which animals reproduce to encourage particular traits. It can transform an already-domesticated population, but it generally comes after the initial domestication process, which typically began long before such intentional, targeted selection.",
    },
    {
      question: "Why don't experts give exact dates for when animals were domesticated?",
      answer:
        "Because the evidence, drawn from archaeology and genetics, is incomplete and frequently revised. Domestication was usually a slow process, sometimes repeated in more than one region, so a single precise date or place rarely fits. Scholars instead describe broad eras and regions, and the details remain genuinely debated.",
    },
];

export default function WhatIsDomesticationPage() {
  return (
    <DomesticationLayout
      crumbs={[
        { name: "Animal Domestication", href: "/animal-domestication" },
        { name: "What domestication is", href: PATH },
      ]}
      kicker="Concept"
      h1={"What domestication is"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Domestication is one of the most consequential relationships in human and natural history, yet it is widely misunderstood. It is not a single moment when people &quot;tamed&quot; a wild animal, but a long, two-way process that unfolds over many generations as a population of animals and the people around them gradually reshape one another. Over time, the animals change biologically — in behaviour, body, and breeding — while the human cultures around them change too, building new ways of living, eating, travelling, and working.
          </p>
          <p>
            This guide defines domestication carefully and distinguishes it from related ideas it is often confused with: taming, captivity, and selective breeding. It also outlines the broad pathways scholars describe for how domestication began, and stresses an important point: the evidence is incomplete, drawn from archaeology and genetics, and is regularly debated and revised. This is educational natural history, not advice about keeping, breeding, training, or caring for any animal.
          </p>
        </>
      }
      related={[
    { label: "Animal Domestication", href: "/animal-domestication" },
    { label: "Domestication vs taming", href: "/animal-domestication/domestication-vs-taming" },
    { label: "Commensal & semi-domesticated animals", href: "/animal-domestication/commensal-and-semi-domesticated-animals" },
    { label: "Animal Research Sources", href: "/animal-research-sources" },
    { label: "Domestic & Companion Animals", href: "/domestic-animals" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Domestication as a long biological and cultural process"}>
        <p>
          At its core, domestication describes a multi-generational process in which a population of animals becomes biologically adapted to life with people, and in which people adapt their own cultures around those animals. The key word is population: domestication is something that happens to a lineage over time, not to a single individual within its lifetime. It typically involves heritable changes in temperament, body form, reproduction, and the way the animals respond to humans.
        </p>
        <p>
          Because it unfolds slowly, domestication is usually not a one-off event with a single date or place. For several familiar animals, evidence suggests the process may have happened more than once, in more than one region, sometimes over thousands of years. The timelines and geographies are broad and remain debated rather than settled.
        </p>
        <p>
          It is also genuinely two-sided. Animals were not simply seized and remade; many adapted to human-altered environments — settlements, stored food, herds, and fields — and those that coped well with people left more descendants. Domestication is best understood as a relationship that changed both partners.
        </p>
      </Section>
      <Section id="s1" title={"Domestication vs taming vs captivity vs selective breeding"}>
        <p>
          Taming is about a single animal becoming accustomed to people during its own life. A tamed individual is not a domesticated species: its tameness is not inherited, and its wild relatives remain wild. A famous example is the working Asian elephant (<em>Elephas maximus</em>), which is tamed and kept by people but is not a domesticated species, because its breeding and biology have not been reshaped over generations.
        </p>
        <p>
          Captivity simply means an animal is held by people — in a home, a zoo, or a sanctuary. A captive or even captive-bred animal is not automatically domesticated; many captive species are biologically indistinguishable from their wild counterparts. Likewise, a feral animal — one descended from domestic stock that now lives without direct human care — is a domestic lineage gone loose, not the original wild ancestor.
        </p>
        <p>
          Selective breeding is the later, more deliberate stage in which people choose which animals reproduce to encourage particular traits. It can dramatically reshape an already-domesticated population, but it is not the same as the initial domestication process, which generally began long before such intentional, fine-grained selection.
        </p>
      </Section>
      <Section id="s2" title={"The main pathways scholars describe"}>
        <p>
          Researchers often group the routes into domestication into three broad pathways, while stressing that real histories are messier and overlapping. The commensal pathway describes animals that drew themselves toward human settlements — attracted by food, waste, or the prey those resources concentrated — and gradually grew tolerant of people. The dog (from the gray wolf, <em>Canis lupus</em>) and the cat (from the African wildcat, <em>Felis lybica</em>) are often discussed in this context; the cat in particular is frequently described as having followed a commensal, partly self-directed route.
        </p>
        <p>
          The prey pathway describes game animals that people hunted and managed ever more closely, until management shaded into herding. Sheep (from wild sheep of the mouflon group) and goats (from the bezoar ibex, <em>Capra aegagrus</em>) are classic examples, tied to the early spread of farming. The directed pathway describes later, more deliberate efforts in which people, already familiar with herding and domestic animals, intentionally brought new species under management — horses and donkeys are often cited here.
        </p>
        <p>
          These categories are interpretive tools, not rigid laws. A single species may show features of more than one pathway, and scholars continue to refine and argue over which animals belong where.
        </p>
      </Section>
      <Section id="s3" title={"How animals adapted to human environments"}>
        <p>
          Domestication did not run in one direction only. Human settlements created new ecological niches — concentrations of food scraps, stored grain, rodents, sheltered spaces, and managed herds — and some animals were well suited to exploit them. Individuals that were less fearful of people, or that thrived around human activity, often had an advantage and passed on those tendencies.
        </p>
        <p>
          Over many generations this can produce a recurring set of changes sometimes noticed across domesticated animals, including shifts in behaviour and, in some lineages, differences in body size, coloration, or reproduction compared with wild relatives. Researchers continue to study why such changes appear and how consistent they really are; the explanations remain an active and debated area of science rather than a closed question.
        </p>
      </Section>
      <Section id="s4" title={"Why the evidence is debated and keeps changing"}>
        <p>
          Almost everything we say about early domestication is reconstructed from incomplete evidence. Archaeology offers bones, tools, and traces of how people lived, while genetics — including ancient DNA — can suggest relationships between wild and domestic populations. Both are powerful, but both have gaps, and they do not always agree.
        </p>
        <p>
          As a result, claims about when, where, and how often a species was domesticated are regularly revised. New finds and new genetic work have repeatedly overturned older stories, including ideas once treated as settled. Cautious framing — &quot;evidence suggests,&quot; &quot;the timeline remains debated,&quot; &quot;varies by region&quot; — is not vagueness for its own sake; it reflects the real state of the science.
        </p>
        <p>
          This is also why it is best to avoid single precise origin dates or one definitive birthplace for most domesticated animals. The honest summary is usually a broad era and a broad region, with active disagreement about the details — and a recognition that the picture may change again.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </DomesticationLayout>
  );
}
