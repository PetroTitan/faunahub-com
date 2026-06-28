import type { Metadata } from "next";
import SensesLayout, { Section, FaqBlock } from "@/components/senses/SensesLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-senses-and-adaptations/animal-senses";
const MODIFIED = "2026-06-28";
const TITLE = "Animal Senses: How Different Species Perceive";
const DESC =
  "An overview of animal senses — vision, smell, hearing, touch, taste, and senses humans lack such as electroreception, magnetoreception, and heat detection.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "How many senses do animals have?",
      answer:
        "There is no fixed number. The familiar list of sight, smell, hearing, touch, and taste is a human starting point, but many animals also have senses humans lack, such as electroreception, a magnetic sense, or infrared heat detection. Which senses an animal has, and how developed they are, depends on the species and its environment.",
    },
    {
      question: "Can animals really sense things humans cannot?",
      answer:
        "Yes. Some species detect ultraviolet light, sounds above or below the human hearing range, weak electric fields, Earth's magnetic field, or radiant heat. These are well documented through measurement and behavioural studies, even though people cannot directly experience most of them.",
    },
    {
      question: "Is it true that mantis shrimp have the best colour vision?",
      answer:
        "It is more complicated than that popular claim suggests. Mantis shrimp have an unusual eye with many types of light-sensitive cells, but experiments indicate they are not especially good at discriminating between close colours and may use a different, faster method of recognising colour. It is best described as an unusual visual system rather than as the \"best\" colour vision.",
    },
    {
      question: "Why do animals have such different senses?",
      answer:
        "Sensory systems tend to reflect how and where a species lives — what it eats, what threatens it, and the conditions of its habitat. An animal active at night, deep in water, or underground faces different challenges than one active in daylight, and its senses generally reflect those demands rather than a single universal pattern.",
    },
];

export default function AnimalSensesPage() {
  return (
    <SensesLayout
      crumbs={[
        { name: "Animal Senses & Adaptations", href: "/animal-senses-and-adaptations" },
        { name: "Animal senses", href: PATH },
      ]}
      kicker="Senses"
      h1={"Animal senses"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            The way an animal experiences the world depends on its body, its environment, and its evolutionary history. A sense that is central to one species may be reduced or absent in another, and the same basic equipment — an eye, an ear, a patch of skin — can be tuned in very different directions depending on where and how an animal lives.
          </p>
          <p>
            This guide gives a broad overview of the main animal senses and a few that humans do not have at all. Throughout, it is worth remembering that we cannot directly experience most of these perceptions. We can measure them and infer what an animal may detect, but describing what the world &quot;feels like&quot; to another species always involves a degree of translation.
          </p>
        </>
      }
      related={[
    { label: "Animal Senses & Adaptations", href: "/animal-senses-and-adaptations" },
    { label: "Animal vision", href: "/animal-senses-and-adaptations/animal-vision" },
    { label: "Smell & chemical senses", href: "/animal-senses-and-adaptations/smell-and-chemical-senses" },
    { label: "Hearing & echolocation", href: "/animal-senses-and-adaptations/hearing-and-echolocation" },
    { label: "Animal Research Sources", href: "/animal-research-sources" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Senses are shaped by ecology and evolution"}>
        <p>
          There is no single &quot;complete&quot; set of senses that all animals share. Instead, sensory systems tend to reflect the problems a species needs to solve — finding food, avoiding predators, locating mates, or moving through a particular habitat. An animal active in daylight, in deep water, or underground faces very different sensory demands, and its senses generally reflect that niche rather than some fixed standard.
        </p>
        <p>
          Because of this, comparing animals as simply having &quot;better&quot; or &quot;worse&quot; senses is usually misleading. A trait that looks impressive in one setting may be useless in another, and many species invest heavily in one or two senses while others remain modest. It is more accurate to say that senses are specialised than to rank them.
        </p>
        <p>
          Sensory abilities also vary enormously within groups. Two related species can differ sharply, so it is better to describe what is known for particular animals than to assume that all birds, all insects, or all fish perceive the world in the same way.
        </p>
      </Section>
      <Section id="s1" title={"Vision, smell, hearing, touch, and taste"}>
        <p>
          Vision varies widely. Some animals see colours that people cannot, including parts of the ultraviolet range that certain birds and insects detect, while others appear to perceive fewer colours than humans do. Eye structure, the number and types of light-sensitive cells, and where the eyes sit on the head all influence what an animal can see. We cannot assume any animal sees a scene the way a person would.
        </p>
        <p>
          Smell and other forms of chemoreception — detecting chemicals in air or water — are central to many animals. Domestic dogs, for example, have a large olfactory apparatus and are noted for sensitivity to certain odours; sharks detect chemical traces dissolved in seawater; and many insects respond to airborne chemical signals. These abilities are striking, but they are best described in concrete terms rather than as records to be ranked.
        </p>
        <p>
          Hearing, touch, and taste are similarly diverse. Some species detect sounds or vibrations outside the human range, sense vibration through the ground or water, and use specialised structures such as whiskers or antennae to feel their surroundings. Taste and contact chemoreception can be distributed across the body in some animals rather than confined to a mouth, again depending on the species.
        </p>
      </Section>
      <Section id="s2" title={"Electroreception: sensing electric fields"}>
        <p>
          Some animals can detect weak electric fields, a sense humans lack entirely. This ability, called electroreception, is found almost exclusively in aquatic or semi-aquatic animals, partly because water conducts electricity far better than air does.
        </p>
        <p>
          In sharks and rays, jelly-filled organs known as the ampullae of Lorenzini are associated with sensitivity to very faint electric fields, including those produced by the muscle activity of nearby animals. The platypus is a well-studied mammalian example, with electroreceptors in its bill that respond to electric fields while it forages underwater. A number of fishes also use electric senses, and some can produce weak electric fields of their own.
        </p>
      </Section>
      <Section id="s3" title={"Magnetoreception: sensing Earth's magnetic field"}>
        <p>
          A range of animals — including some migratory birds, sea turtles, and certain insects and fish — appear able to detect information from Earth&#39;s magnetic field and use it as one cue for orientation. Behavioural experiments provide good evidence that such a sense exists in these animals.
        </p>
        <p>
          Exactly how magnetoreception works, however, is not fully understood and remains an active area of research. Two leading ideas are a light-dependent, radical-pair mechanism involving proteins such as cryptochrome in the eye, and a mechanism based on tiny particles of magnetic material in the body. These hypotheses are still debated, and no single explanation is firmly settled. It is also important not to overstate the precision of any magnetic sense, which is generally one cue among several rather than a built-in map.
        </p>
      </Section>
      <Section id="s4" title={"Infrared and heat sensing"}>
        <p>
          Some snakes — including certain pit vipers, pythons, and boas — have heat-sensing pit organs on the face that respond to infrared (radiant heat) from nearby warm objects. This is a separate sense from vision: it relies on a thin, heat-sensitive membrane inside the pit, with signals carried by the trigeminal nerve rather than processed through the eyes.
        </p>
        <p>
          Research indicates that heat-activated ion channels in this membrane convert small temperature differences into nerve signals, and the organ is sensitive to slight thermal contrasts. While it is sometimes described loosely as letting a snake &quot;see&quot; heat, the underlying biology is distinct from eyesight, and we cannot directly experience what this information is like.
        </p>
      </Section>
      <Section id="s5" title={"Why we cannot fully share an animal's senses"}>
        <p>
          Many animal senses operate outside the range of human perception — ultraviolet light, ultrasound or infrasound, electric and magnetic fields, and radiant heat among them. We can detect and measure these phenomena with instruments and study how animals respond to them, but we have no direct, first-person way to feel them.
        </p>
        <p>
          This is why phrases like &quot;sees exactly like a human&quot; or &quot;experiences the world just as we do&quot; are usually inaccurate. The honest position is that other species often live in sensory worlds that overlap only partly with ours, and that some of what they perceive may remain, in part, beyond our direct experience.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </SensesLayout>
  );
}
