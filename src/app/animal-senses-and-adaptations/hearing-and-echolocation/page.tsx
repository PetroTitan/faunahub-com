import type { Metadata } from "next";
import SensesLayout, { Section, FaqBlock } from "@/components/senses/SensesLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-senses-and-adaptations/hearing-and-echolocation";
const MODIFIED = "2026-06-28";
const TITLE = "Hearing and Echolocation in Animals";
const DESC =
  "How animals detect sound and vibration, plus echolocation in bats and dolphins, owl ear asymmetry, and elephant infrasound, explained cautiously.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "What is the difference between echolocation in bats and in dolphins?",
      answer:
        "Both emit sound and interpret the returning echoes to gather information about their surroundings, but they operate in different media. Bats echolocate in air, often using ultrasonic calls produced through the mouth or nose, while toothed whales and dolphins echolocate in water using clicks that are generally understood to be focused through a fatty forehead structure called the melon. Many details of both systems are still being researched.",
    },
    {
      question: "Why do some owls have asymmetric ears?",
      answer:
        "In a number of owl species, the two ear openings sit at slightly different heights or angles. This asymmetry can produce small differences in when and how loudly a sound reaches each ear, which the owl's nervous system can use to estimate the sound's location, including its vertical direction. The degree of asymmetry varies among owl species, so it is not a feature shared by every owl.",
    },
    {
      question: "Can elephants really communicate using sound humans cannot hear?",
      answer:
        "Elephants produce and detect low-frequency sound, including infrasound below the typical lower limit of human hearing, and such sound can travel relatively long distances. Researchers also study whether elephants sense ground vibrations. People cannot directly hear the infrasonic part of these signals, and the full extent of elephant seismic sensitivity remains an active research question.",
    },
    {
      question: "Is hearing the same as detecting vibration?",
      answer:
        "They are related but not identical. Hearing usually refers to detecting sound waves travelling through air or water, while vibration sensing refers to detecting movement transmitted through a solid medium such as the ground or a plant stem. Some animals do both, but the organs and signals involved can differ, and reliance on each varies by species.",
    },
];

export default function HearingAndEcholocationPage() {
  return (
    <SensesLayout
      crumbs={[
        { name: "Animal Senses & Adaptations", href: "/animal-senses-and-adaptations" },
        { name: "Hearing & echolocation", href: PATH },
      ]}
      kicker="Sound"
      h1={"Hearing & echolocation"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Hearing is the detection of sound — pressure waves travelling through air, water, or solid material. Across the animal kingdom, the structures that pick up these waves vary widely, from the fluid-filled inner ears of mammals to vibration-sensitive organs in the legs of some insects. Closely related to hearing is the detection of substrate vibration, where animals sense movement transmitted through the ground, water, or a plant rather than through the air.
          </p>
          <p>
            This guide describes some of the better-understood ways animals use sound and vibration: echolocation in bats and in toothed whales and dolphins, sound localisation in owls, low-frequency (infrasound) communication in elephants, and acoustic or vibrational signalling in certain frogs and insects. These abilities differ from human hearing, and people cannot directly experience most of them; where a mechanism is still debated, that is noted rather than glossed over.
          </p>
        </>
      }
      related={[
    { label: "Animal Senses & Adaptations", href: "/animal-senses-and-adaptations" },
    { label: "Bat", href: "/animals/bat" },
    { label: "Dolphin", href: "/animals/dolphin" },
    { label: "Owl", href: "/animals/owl" },
    { label: "Elephant", href: "/animals/elephant" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Sound, vibration, and the range of animal hearing"}>
        <p>
          Sound is a wave of pressure changes that travels through a medium. The frequency of those waves, measured in hertz (Hz), corresponds to what humans perceive as pitch, while amplitude relates to loudness. Human hearing typically spans roughly 20 Hz to 20,000 Hz, though the upper limit declines with age. Many animals detect frequencies outside this band: sounds above the human range are called ultrasound, and sounds below it are called infrasound.
        </p>
        <p>
          Hearing organs are diverse. Mammals generally use an outer ear, a middle ear with small bones, and a fluid-filled cochlea in the inner ear, where hair cells convert vibration into nerve signals. Many insects instead use tympanal organs — thin membranes that vibrate — located on the body or legs depending on the group, and some detect airborne sound or substrate vibration through other specialised receptors. Because these systems are built differently, it is more accurate to say an animal detects a particular frequency range than to say it hears &#39;better&#39; or &#39;exactly like&#39; a person.
        </p>
        <p>
          Vibration sensing overlaps with hearing but is not identical. Some animals detect movement transmitted through the ground, water, or a plant stem rather than through the air. This substrate-borne signalling appears in a range of taxa, including some insects and spiders, though the details vary by species and not every member of a group relies on it.
        </p>
      </Section>
      <Section id="s1" title={"Echolocation in bats"}>
        <p>
          Many bats (order <em>Chiroptera</em>) use echolocation, also called biosonar. The animal emits short pulses of sound, often in the ultrasonic range, and listens for the echoes that return after the sound reflects off nearby surfaces and objects. The timing, intensity, and frequency content of those echoes carry information the bat&#39;s nervous system can use to build a picture of its surroundings in darkness.
        </p>
        <p>
          Not all bats echolocate in the same way, and not all bats rely on it equally; some fruit-eating species depend more heavily on vision and smell. Among echolocating species, calls vary — some sweep across a band of frequencies, others hold a more constant frequency — and these differences relate to the cluttered or open environments in which different species forage. Describing this as a sophisticated acoustic system is accurate; framing it as a &#39;superpower&#39; or ranking it against other senses is not.
        </p>
        <p>
          Researchers study bat echolocation through recordings and controlled experiments, and many aspects — such as how bats separate their own calls from background echoes in crowded settings — remain active areas of investigation.
        </p>
      </Section>
      <Section id="s2" title={"Echolocation in toothed whales and dolphins"}>
        <p>
          Toothed whales and dolphins (the suborder <em>Odontoceti</em>, which includes dolphins, porpoises, and sperm whales) also use echolocation, this time in water, where sound travels faster and farther than in air. These animals produce clicks using structures in the nasal region and are generally understood to focus the sound through a fatty structure in the forehead known as the melon. Returning echoes are thought to be received largely through fat-filled channels in the lower jaw that conduct sound to the ear.
        </p>
        <p>
          By interpreting echoes from their clicks, toothed whales can gather information about objects around them in conditions where light is limited or absent. The precise physics of how the melon shapes outgoing sound, and how echoes are processed, continue to be researched, so specific claims should be treated cautiously rather than as fully settled.
        </p>
        <p>
          Baleen whales, a separate group, are not known to echolocate in this way; they are better known for producing low-frequency sounds. This contrast is a reminder not to generalise one group&#39;s abilities to all whales or all marine mammals.
        </p>
      </Section>
      <Section id="s3" title={"Owls, ear asymmetry, and locating sound"}>
        <p>
          Owls are associated with hunting in low light, and sound localisation is part of how some species detect prey. In a number of owl species, the two ear openings are positioned asymmetrically — one slightly higher or angled differently from the other. This asymmetry can create small differences in the time and intensity with which a sound reaches each ear, and the owl&#39;s nervous system uses those differences to estimate a sound&#39;s location, including its vertical position.
        </p>
        <p>
          The barn owl (<em>Tyto alba</em>) is a frequently studied example, and laboratory work has examined how its brain maps the direction of sounds. Facial-disc feathers in some owls are also thought to help channel sound toward the ears. These features are described here as biology — how the sensory system works — and not as any kind of hunting or tracking instruction.
        </p>
        <p>
          It is worth noting that ear asymmetry and the degree of reliance on hearing differ among owl species, so this should not be treated as a universal trait of all owls.
        </p>
      </Section>
      <Section id="s4" title={"Elephants and infrasound"}>
        <p>
          Elephants produce and detect low-frequency sounds, including infrasound below the lower limit of typical human hearing. Low-frequency sound attenuates relatively slowly and can travel over considerable distances, which researchers associate with long-range communication between elephants. Some of these calls are within the human range and audible as rumbles, while components extend below it.
        </p>
        <p>
          There is also evidence that elephants can detect vibrations transmitted through the ground, and researchers have investigated whether seismic cues play a role in how elephants sense distant events or one another. The extent and exact mechanisms of this seismic sensitivity remain an area of ongoing study, so it should be described as an active research question rather than a settled fact.
        </p>
        <p>
          As with other examples here, these abilities are presented to explain elephant biology, not to suggest any method of locating, attracting, or interacting with the animals.
        </p>
      </Section>
      <Section id="s5" title={"Sound and vibration in frogs and insects"}>
        <p>
          Acoustic communication is well documented in many frogs, where calls produced by males are associated with attracting mates and with territory, depending on the species. Different species call at different frequencies and patterns, and some frogs also detect vibration. Reports of certain frogs producing or detecting ultrasonic components illustrate that frog hearing is not limited to the same range as human hearing, though such cases are species-specific.
        </p>
        <p>
          Among insects, sound and vibration are used in varied ways. Some crickets and grasshoppers produce sound by stridulation — rubbing body parts together — and detect it with tympanal organs. Cicadas produce loud calls using specialised structures called tymbals. Many other insects communicate through substrate-borne vibrations carried along plant stems, a channel that is easy to overlook because the signals are not airborne.
        </p>
        <p>
          These examples show how broadly hearing and vibration sensing have arisen, but the specifics differ from group to group. It would be inaccurate to claim that all frogs or all insects share any single mechanism.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </SensesLayout>
  );
}
