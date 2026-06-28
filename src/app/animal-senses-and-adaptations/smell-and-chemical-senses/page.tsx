import type { Metadata } from "next";
import SensesLayout, { Section, FaqBlock } from "@/components/senses/SensesLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-senses-and-adaptations/smell-and-chemical-senses";
const MODIFIED = "2026-06-28";
const TITLE = "Smell & Chemical Senses in Animals";
const DESC =
  "How animals detect chemicals: scent trails, the vomeronasal organ, pheromones, and examples from dogs, snakes, salmon and sharks, explained cautiously.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Do animals smell the world the way humans do?",
      answer:
        "Not exactly. Different species carry different sets of chemical receptors and sometimes additional sensing structures, so the chemicals that matter to one animal may not register the same way for another. Humans cannot directly experience another animal's chemical world, so descriptions are based on anatomy, genetics, and behavioural experiments rather than on assuming the experience is just a stronger version of our own.",
    },
    {
      question: "What is the vomeronasal or Jacobson's organ?",
      answer:
        "It is a chemical-sensing structure found in many vertebrates, separate from the main olfactory tissue. In species where it is well studied, it helps detect certain chemical cues, including some passed between members of the same species. Snakes deliver chemicals to it by flicking the tongue, and various mammals use it as well. Its size and importance differ across groups, and some details of its function remain debated, including in humans.",
    },
    {
      question: "Are pheromones a proven thing in all animals?",
      answer:
        "Pheromones, chemicals released by one individual that affect others of the same species, are well documented in certain insects, such as some moths, and in some other animals. They are real but should be described cautiously: a chemical only counts as a pheromone where there is solid evidence of a reliable effect. Many broad claims, especially about human pheromones, go beyond what current science supports, and findings from one species should not be generalised to all.",
    },
    {
      question: "How do salmon and sharks use chemical senses?",
      answer:
        "Many salmon appear to use learned chemical cues, smell, as one factor when homing back toward the freshwater systems where they began life, though long-distance navigation probably combines several cues and is not fully understood. Many sharks and other fishes are sensitive to particular chemicals dissolved in water and can detect them at low concentrations. Both are examples of how aquatic animals rely on detecting chemicals in water rather than air.",
    },
];

export default function SmellAndChemicalSensesPage() {
  return (
    <SensesLayout
      crumbs={[
        { name: "Animal Senses & Adaptations", href: "/animal-senses-and-adaptations" },
        { name: "Smell & chemical senses", href: PATH },
      ]}
      kicker="Chemical senses"
      h1={"Smell & chemical senses"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Smell, or olfaction, is one of the oldest ways living things sense the world. Long before eyes or ears evolved, single-celled organisms were already responding to chemicals drifting past them, moving toward food or away from harm. In animals today, chemical senses remain central to finding food, recognising kin and habitat, and reading the chemical traces other organisms leave behind. These abilities differ widely from one species to the next, and they often work in ways humans cannot directly experience.
          </p>
          <p>
            This guide explains how some animals detect chemicals in air and water, what scientists mean by scent trails and pheromones, and what the vomeronasal (Jacobson&#39;s) organ does where the evidence supports it. The aim is a calm, factual overview drawn from well-established biology. Where a mechanism is only partly understood, that uncertainty is noted rather than smoothed over, and no species is presented as having the &#39;best&#39; sense of smell.
          </p>
        </>
      }
      related={[
    { label: "Animal Senses & Adaptations", href: "/animal-senses-and-adaptations" },
    { label: "Shark", href: "/animals/shark" },
    { label: "Salmon", href: "/animals/salmon" },
    { label: "Snake", href: "/animals/snake" },
    { label: "Hearing & echolocation", href: "/animal-senses-and-adaptations/hearing-and-echolocation" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"What chemical senses are"}>
        <p>
          Chemical senses let an animal detect specific molecules in its surroundings. In land animals, this is usually divided into olfaction, the detection of airborne chemicals, and taste (gustation), the detection of chemicals in direct contact, though the line between the two is blurry in many species. Aquatic animals detect chemicals dissolved in water, so for them the distinction between &#39;smell&#39; and &#39;taste&#39; can be even less clear-cut.
        </p>
        <p>
          At the cellular level, detection generally works through receptor proteins. A chemical binds to a receptor on a sensory cell, which triggers a signal the nervous system can interpret. Different species carry different sets of receptor genes, which is part of why the same scent can matter enormously to one animal and not register meaningfully for another. This is a difference in kind as much as degree: an animal&#39;s chemical world is not simply a louder or quieter version of ours.
        </p>
        <p>
          Because we cannot share an animal&#39;s perception directly, scientists study these senses indirectly, through anatomy, genetics, controlled behavioural experiments, and recordings of nerve activity. Much is well established, but some details, especially how signals are combined and interpreted in the brain, remain active areas of research.
        </p>
      </Section>
      <Section id="s1" title={"Scent trails and following odour"}>
        <p>
          Many animals navigate using gradients of odour, moving toward stronger or weaker concentrations of a chemical. A scent trail is essentially a path marked by chemicals left behind on the ground, on vegetation, or carried in water. Following such a trail involves repeatedly sampling the environment and adjusting course, rather than reading a single fixed signal.
        </p>
        <p>
          Ants are a frequently studied example. Some ant species deposit trail chemicals that other workers can follow between a resource and the nest, and the strength of the trail tends to fade over time unless it is reinforced. This is a property documented in particular species and should not be assumed identical across all ants or all insects. Many mammals also leave and detect scent marks, which can carry information about identity and recent presence.
        </p>
        <p>
          In moving water, odour does not spread evenly. It breaks into patches and filaments shaped by currents, so animals that track waterborne chemicals often move in ways that repeatedly re-locate the odour rather than following a smooth line toward it. This patchiness is one reason chemical tracking can look indirect even when it is highly effective.
        </p>
      </Section>
      <Section id="s2" title={"The vomeronasal (Jacobson's) organ"}>
        <p>
          Many vertebrates have a second chemical-sensing structure separate from the main olfactory tissue, called the vomeronasal organ, also known as Jacobson&#39;s organ. In the species where it is well studied, it is involved in detecting certain chemical cues, including some that pass between members of the same species. Its presence, size, and importance vary across groups, and it is reduced or its function debated in some lineages, including in humans.
        </p>
        <p>
          Snakes offer a clear, source-backed illustration. When a snake flicks its forked tongue, it picks up chemical particles from the air and ground and delivers them toward the roof of the mouth, where vomeronasal tissue can sample them. The forked shape may help the animal compare chemical information from slightly different points. This is a well-documented behaviour, described here as biology rather than as any guide to handling or approaching snakes.
        </p>
        <p>
          Many mammals also use vomeronasal sensing. A behaviour sometimes seen in animals such as horses and certain cats and ungulates, where the animal curls back its upper lip, is associated with drawing chemicals toward this organ. The exact role of vomeronasal sensing differs by species, and researchers continue to refine which cues it detects and how its signals are processed.
        </p>
      </Section>
      <Section id="s3" title={"Pheromones and chemical signals between animals"}>
        <p>
          A pheromone is a chemical, or blend of chemicals, released by one individual that produces a response in another member of the same species. The term should be used carefully: a chemical only qualifies when there is evidence that it reliably affects others of the species, and many popular claims about pheromones go beyond what is established, especially in humans.
        </p>
        <p>
          Pheromone signalling is best documented in insects. In a number of moth species, for example, individuals release specific chemical blends that others of the same species can detect at low concentrations, which can influence behaviour such as locating one another. The chemistry and behaviour have been worked out in detail for certain species, and those findings should not be generalised to all insects. Some social insects also use chemical signals to coordinate colony activities.
        </p>
        <p>
          Among mammals, chemical communication is real and widespread, but it tends to be more complex than a single molecule producing a fixed response. Scent marks often carry mixtures of compounds that may signal identity, group membership, or recent activity, and an animal&#39;s response usually depends on context, learning, and other senses working together.
        </p>
      </Section>
      <Section id="s4" title={"Examples across the animal world"}>
        <p>
          Dogs have a large area of olfactory tissue and many functional smell-receptor genes, and they rely heavily on scent in their daily lives. Described factually, this means dogs can detect and distinguish many odours that humans do not notice; it does not mean their experience is a stronger copy of ours, and it is not framed here as a ranking against other animals. Their olfactory anatomy is genuinely substantial, which is why dogs feature so often in studies of mammalian smell.
        </p>
        <p>
          Many salmon are known to use odour as one cue when returning toward the freshwater systems where they began life, a behaviour often called homing. Researchers think learned chemical cues play a role, though navigation over long distances likely combines several cues and is not fully understood. Many sharks and other fishes are sensitive to certain dissolved chemicals in water and can detect them at low concentrations, which helps explain their strong reliance on chemical sensing in the marine environment.
        </p>
        <p>
          Insects round out the picture: beyond ant trails and moth signalling, many insects use chemical detection to locate food, suitable plants, or others of their kind. Across all these examples, the consistent theme is diversity. Chemical senses are tuned by evolution to each species&#39; way of life, and a trait documented in one animal cannot be assumed to hold for its whole group.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </SensesLayout>
  );
}
