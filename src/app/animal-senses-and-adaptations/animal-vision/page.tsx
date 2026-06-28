import type { Metadata } from "next";
import SensesLayout, { Section, FaqBlock } from "@/components/senses/SensesLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-senses-and-adaptations/animal-vision";
const MODIFIED = "2026-06-28";
const TITLE = "Animal Vision: How Different Eyes See the World";
const DESC =
  "How animal vision varies by species: colour and ultraviolet vision, night vision and the tapetum lucidum, and predator versus prey eye placement.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Do animals see the same colours that people do?",
      answer:
        "Often no. Colour vision depends on the number and type of cone cells, which vary between species. Dogs are generally described as seeing fewer distinguishable colours than people, while many birds and bees can perceive ultraviolet light that humans cannot see at all. Because people cannot directly experience these differences, any picture claiming to show exactly what an animal sees is an interpretation rather than a literal view.",
    },
    {
      question: "How do some animals see in the dark?",
      answer:
        "Animals active in low light usually rely on rod photoreceptors, which are very light-sensitive but do not convey colour, and many have rod-rich retinas. Numerous nocturnal and twilight species also have a reflective layer behind the retina called the tapetum lucidum, which reflects unabsorbed light back across the photoreceptors for a second chance at detection. These adaptations typically trade off against fine detail or colour vision in bright conditions.",
    },
    {
      question: "Can snakes really see heat?",
      answer:
        "Some snakes, such as pit vipers and many pythons and boas, have pit organs that detect infrared radiation, which is the heat emitted by warm objects. This is a separate sensory system from the eyes and responds to radiant heat rather than visible light. It is best described as heat sensing, not vision, and research indicates it provides relatively coarse information rather than a sharp image.",
    },
    {
      question: "Why do predators and prey have eyes in different places?",
      answer:
        "Forward-facing eyes, often seen in predators, create a large overlap between the two eyes' views that supports depth perception, useful for judging distance to a target. Side-facing eyes, common in many prey animals, provide a wide panoramic field of view that helps detect movement from many directions. This is a broad trade-off rather than an absolute rule, and exceptions exist across many species.",
    },
];

export default function AnimalVisionPage() {
  return (
    <SensesLayout
      crumbs={[
        { name: "Animal Senses & Adaptations", href: "/animal-senses-and-adaptations" },
        { name: "Vision", href: PATH },
      ]}
      kicker="Vision"
      h1={"Animal vision"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Vision is one of the most common animal senses, but it is not one single thing. The structure of an eye, the types of light-sensitive cells inside it, and where the eyes sit on the head all vary widely between species. As a result, many animals see the world quite differently from people, and humans cannot directly experience what those differences look like.
          </p>
          <p>
            This guide describes some well-studied features of animal vision: colour perception (including ultraviolet light that people cannot see), adaptations for low light, and the trade-offs between forward-facing and side-facing eyes. Where a striking ability is mentioned, it is described as a difference shaped by ecology and evolution, not as a ranking or a &#39;superpower&#39;.
          </p>
        </>
      }
      related={[
    { label: "Animal Senses & Adaptations", href: "/animal-senses-and-adaptations" },
    { label: "Eagle", href: "/animals/eagle" },
    { label: "Mantis Shrimp", href: "/animals/mantis-shrimp" },
    { label: "Chameleon", href: "/animals/chameleon" },
    { label: "Animal senses", href: "/animal-senses-and-adaptations/animal-senses" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Colour vision varies between species"}>
        <p>
          Colour vision depends on cone photoreceptors, and different animals carry different numbers and types of cones. People are usually trichromatic, with three cone types. Dogs are generally described as dichromatic, with two cone types sensitive to shorter (blue) and medium (yellow-green) wavelengths, so they are thought to distinguish fewer colours than people and to have difficulty separating reds from greens. Cat colour vision is also limited, though the exact details remain debated in the research literature.
        </p>
        <p>
          Having fewer cone types does not mean an animal sees a poor or broken version of human vision. It means the visual system is tuned differently, often in ways suited to the animal&#39;s habits and habitat. Comparisons such as &#39;better&#39; or &#39;worse&#39; than human vision are usually the wrong framing unless a specific, measurable property is being described.
        </p>
      </Section>
      <Section id="s1" title={"Some animals see ultraviolet light"}>
        <p>
          Many diurnal birds are tetrachromatic, carrying four cone types including one sensitive to violet or ultraviolet wavelengths, and their eye media transmit ultraviolet (UV) light that the human eye largely blocks. This means some birds can perceive differences in plumage and markings that are invisible to people. Studies link UV sensitivity in certain species to behaviours such as foraging and mate choice, though specifics differ from species to species.
        </p>
        <p>
          Many bees are trichromatic with sensitivity shifted toward the ultraviolet, blue, and green range, and tend to respond weakly to red. Some flowers carry ultraviolet &#39;nectar guide&#39; patterns that are invisible to people but that bees can perceive. Because humans cannot see UV directly, any image meant to show &#39;what a bee sees&#39; is a reconstruction or interpretation, not a literal view through the animal&#39;s eyes.
        </p>
      </Section>
      <Section id="s2" title={"Adaptations for seeing in low light"}>
        <p>
          Vision in dim conditions relies heavily on rod photoreceptors, which are more light-sensitive than cones but do not convey colour. Animals active at night or twilight often have rod-rich retinas. Cats, for example, have a high proportion of rods, which is associated with a lower light threshold for vision than people have.
        </p>
        <p>
          Many nocturnal and crepuscular animals also have a reflective layer behind the retina called the tapetum lucidum. It reflects light that passed through the retina without being absorbed back across the photoreceptors, giving them a second chance to detect it; this is also why such animals&#39; eyes can appear to glow when caught in light at night. These low-light adaptations typically come with trade-offs, such as reduced fine detail or colour discrimination in bright conditions.
        </p>
      </Section>
      <Section id="s3" title={"Heat sensing in some snakes is separate from the eyes"}>
        <p>
          Some snakes, including pit vipers and many boas and pythons, have specialised pit organs that detect infrared radiation, essentially the heat given off by warm objects. This ability appears to have arisen independently in different snake groups. It is important to be clear that these pit organs are a separate sensory system from the eyes: they respond to radiant heat rather than to visible light, and the information is processed differently in the brain.
        </p>
        <p>
          Describing this as snakes &#39;seeing heat&#39; is a loose analogy. The pit organ does not form a sharp image the way an eye does; research indicates it provides relatively coarse spatial information about thermal contrast. It is included here only to draw a clear line between true vision and heat sensing, which are sometimes confused.
        </p>
      </Section>
      <Section id="s4" title={"Predator and prey eye placement"}>
        <p>
          Where the eyes sit on the head reflects a common trade-off. Forward-facing eyes, often associated with predators such as cats, produce a large region where the two eyes&#39; views overlap (binocular vision), which supports depth perception. Side-facing eyes, common in many prey animals, give a wide, panoramic field of view that can approach a full circle in some species, helping them detect movement from many directions.
        </p>
        <p>
          This pattern is a useful generalisation, not a strict rule, and there are exceptions across the animal kingdom. The broad point is that an eye arrangement good for judging distance to a target and one good for wide all-round surveillance pull in different directions, so each species&#39; visual layout reflects a balance between competing demands.
        </p>
      </Section>
      <Section id="s5" title={"Many receptors does not equal richer colour"}>
        <p>
          Mantis shrimp are often cited because their eyes contain an unusually large number of photoreceptor types, reported to be around a dozen, spanning ultraviolet to far-red wavelengths. It is tempting to assume this means they experience the richest colour vision of any animal, but behavioural research suggests otherwise.
        </p>
        <p>
          Experiments testing how well mantis shrimp distinguish between similar wavelengths found relatively coarse colour discrimination compared with what their many receptors might imply. Researchers have proposed that their visual system may identify colours quickly in a simpler way rather than finely comparing them as the human system does. The mantis shrimp is a clear reminder that more photoreceptors do not automatically mean &#39;better&#39; or more detailed colour vision, and that animal senses resist simple rankings.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </SensesLayout>
  );
}
