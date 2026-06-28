import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/green-sea-turtle";
const TITLE = "Green Sea Turtle (Chelonia mydas) Facts";
const DESC =
  "The green sea turtle (Chelonia mydas) is a large marine turtle whose adults graze on seagrass and algae. Learn its biology, range, nesting, and IUCN status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("green-sea-turtle"),
});

export default function GreenSeaTurtlePage() {
  return (
    <AnimalProfileLayout
      commonName="Green Sea Turtle"
      scientificName="Chelonia mydas"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Sea turtle","Marine"]}
      image={getAnimalImage("green-sea-turtle") ?? undefined}
      galleryImages={getAnimalGalleryImages("green-sea-turtle")}
      sources={ANIMAL_SOURCES["green-sea-turtle"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The green sea turtle (<em>Chelonia mydas</em>) is one of the largest hard-shelled marine turtles and a familiar inhabitant of tropical and subtropical seas. Despite its name, the &quot;green&quot; does not describe the colour of its shell, which is usually brown, olive, or grey with darker markings. Instead, the name refers to the greenish tint of the body fat beneath the shell, a feature historically noted when the animals were harvested. It belongs to the family Cheloniidae, the hard-shelled sea turtles, and is the only living member of the genus <em>Chelonia</em>.
          </p>
          <p>
            Green sea turtles are best known for an unusual dietary habit among sea turtles: while hatchlings and juveniles tend to be more omnivorous, adults shift to a largely plant-based diet of seagrasses and algae. This makes them one of the few sea turtles that are predominantly herbivorous as adults. Like all sea turtles, they are air-breathing animals that spend almost their entire lives in the water, returning to land only when females come ashore to nest on sandy beaches.
          </p>
          <p>
            This profile is an educational overview of the species and not a complete range map, identification key, or care guide. Green sea turtles are wild marine animals, and many populations are protected under national and international law. Their conservation status is assessed and monitored over time, so current listings should always be checked against authoritative sources such as the IUCN Red List.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The green sea turtle is a reptile in the order Testudines, which contains all turtles and tortoises. It is classified in the family Cheloniidae, the hard-shelled sea turtles, and is the sole living species of the genus <em>Chelonia</em>, with the scientific name <em>Chelonia mydas</em>. Green sea turtles are marine turtles, not freshwater or land turtles; they are specialised for ocean life and are not the same as the leathery-shelled leatherback (<em>Dermochelys coriacea</em>), which belongs to a separate family. All sea turtles are turtles, but not all turtles are tortoises, and tortoises are land-dwelling turtles rather than marine ones. Some populations in the eastern Pacific have at times been treated as a distinct form sometimes called the black sea turtle, though its taxonomic standing is debated and should be checked against current scientific sources rather than assumed.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult green sea turtles are large, with a smooth, broadly oval, hard shell (carapace) that may be brown, olive, grey, or marked with darker streaks and blotches; the underside (plastron) is typically paler. The name &quot;green&quot; comes from the colour of the fat beneath the shell rather than the shell itself. The head is relatively small and rounded, and a distinguishing feature is a single pair of scales (prefrontal scales) between the eyes, which helps separate it from some other sea turtles. Like other sea turtles, it has paddle-shaped flippers rather than clawed feet, and it cannot pull its head and limbs into its shell the way many freshwater turtles can. Hatchlings are much darker, often near-black above and pale below, and grow substantially over many years as they mature.
          </p>
        </>
      }
      habitat={
        <p>
          Green sea turtles are found in parts of tropical and subtropical waters of the Atlantic, Pacific, and Indian Oceans, and the description here is a general overview rather than a complete range map. Different life stages use different habitats: after hatching, young turtles spend time in the open ocean, while older juveniles and adults typically move into shallower coastal waters. Adults are strongly associated with seagrass meadows, algae-covered reefs, lagoons, and bays where their plant food is abundant. They are highly migratory and can travel long distances between feeding grounds and nesting beaches. Nesting takes place on sandy tropical and subtropical beaches, and females often return to nest in the general region where they themselves hatched.
        </p>
      }
      diet={
        <p>
          The green sea turtle is unusual among sea turtles in that adults are largely herbivorous. Hatchlings and small juveniles tend to be more omnivorous, taking a mix of small animals and plant material while living in the open ocean. As they grow and settle into coastal habitats, their diet shifts toward seagrasses and various algae, which become the main part of the adult diet. Their feeding can influence the structure of seagrass meadows, and they are sometimes described as grazers of these underwater pastures. Because the bulk of the adult diet is plant matter, green sea turtles occupy a different ecological role from sea turtles such as the jellyfish-eating leatherback or the sponge-eating hawksbill.
        </p>
      }
      behavior={
        <>
          <p>
            Green sea turtles are graceful, powerful swimmers that spend almost their entire lives at sea, surfacing to breathe air and able to rest underwater for extended periods. They are known for long-distance migrations and accurate navigation between feeding areas and nesting beaches, which can be separated by hundreds or thousands of kilometres. They are generally calm and not aggressive toward people, though like all wild animals they are best observed from a respectful distance without disturbance. During the nesting season, females come ashore, usually at night, to dig nests in the sand and lay clutches of eggs before returning to the sea. Adults are mostly solitary at sea but may gather in numbers at productive feeding grounds.
          </p>
          <p>
            As grazers of seagrass and algae, green sea turtles play a notable role in coastal marine ecosystems. Their feeding can help maintain the health and productivity of seagrass meadows, which in turn provide habitat and nursery grounds for many other marine species. Eggs and hatchlings are an important food source for a range of predators on beaches and in the sea, so the turtles also form part of broader food webs. Their long-distance movements connect distant habitats, linking feeding grounds, migratory corridors, and nesting beaches across ocean basins. Like other sea turtles, hatchling sex in this species can be influenced by the temperature of the sand during incubation, which links their reproduction to environmental conditions on nesting beaches.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Green sea turtles are wild marine animals, and in many places they and their nesting beaches are legally protected. People most often encounter them while swimming, diving, snorkelling, or visiting nesting beaches, where the recommended approach is calm, quiet observation from a distance without touching, feeding, chasing, or crowding the animals, and without disturbing nests or hatchlings. Bright lights and beach activity can disorient nesting females and hatchlings, so following local guidance helps reduce disturbance. If you find an injured, stranded, or entangled turtle, or a disturbed nest, the appropriate step is to contact local wildlife authorities, a marine rescue organisation, or qualified professionals rather than handling the animal yourself. This profile does not provide handling, rescue, or care instructions.
        </p>
      }
      extraSections={[
        {
          heading: "Defenses & threats",
          body: (
            <p>
              Green sea turtles are neither venomous nor poisonous. They have no fangs, stingers, or venom delivery system, and they do not produce toxins as a defence. As largely plant-eating marine reptiles, they pose no venom or sting hazard to people. Note that in some regions sea turtle meat has historically been associated with a food-poisoning illness sometimes called chelonitoxism, which is a reason such products are avoided; this is a food-safety matter rather than any active toxin the living animal uses, and questions about it should be directed to public health authorities.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              The green sea turtle has been assessed by the IUCN as Endangered, though conservation status is regularly reassessed and can change over time, and it varies between populations, so the current listing should always be confirmed on the IUCN Red List and with government sources such as fisheries and wildlife agencies. Documented pressures on sea turtles include accidental capture in fishing gear (bycatch), loss and degradation of nesting beaches through coastal development, harvesting of eggs and animals, pollution including plastics, disease, and the effects of climate change on nesting beaches and sand temperatures. Because the species is migratory and crosses national boundaries, its protection often involves international cooperation. Conservation listings are attributed and changeable, and this overview should not be read as a definitive population assessment.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Why is it called a green sea turtle if its shell isn't green?",
          answer:
            "The name refers to the greenish colour of the fat (body tissue) beneath the shell, not the carapace itself, which is usually brown, olive, grey, or mottled. The greenish fat is thought to be linked to the turtle's largely plant-based adult diet.",
        },
        {
          question: "What do green sea turtles eat?",
          answer:
            "Adults are largely herbivorous, feeding mainly on seagrasses and algae, which is unusual among sea turtles. Hatchlings and young juveniles tend to be more omnivorous before shifting toward a plant-based diet as they mature and move into coastal habitats.",
        },
        {
          question: "Are green sea turtles freshwater turtles?",
          answer:
            "No. Green sea turtles are marine turtles in the family Cheloniidae, adapted for life in tropical and subtropical oceans. They have flipper-shaped limbs for swimming and come ashore only so that females can nest on sandy beaches.",
        },
        {
          question: "Are green sea turtles endangered?",
          answer:
            "The green sea turtle has been assessed by the IUCN as Endangered, but status is reassessed over time, can differ between populations, and may change. Always check the current IUCN Red List and government wildlife or fisheries sources rather than assuming a fixed status.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Chelonia mydas (family Cheloniidae)" },
        { label: "Group", value: "Marine turtle (order Testudines)" },
        { label: "Range", value: "Parts of tropical & subtropical oceans worldwide (not a full range map)" },
        { label: "Habitat", value: "Coastal seas, seagrass beds, reefs; nests on sandy beaches" },
        { label: "Diet", value: "Adults largely herbivorous (seagrass & algae); young more omnivorous" },
        { label: "Conservation", value: "Assessed by IUCN as Endangered (changeable — verify on the IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians", description: "Snakes, lizards, turtles, crocodilians, frogs & salamanders" },
        { label: "Sea Turtle", href: "/animals/sea-turtle", description: "Sea turtles as a group" },
        { label: "Leatherback Sea Turtle", href: "/animals/leatherback-sea-turtle", description: "The largest sea turtle" },
        { label: "Turtle", href: "/animals/turtle", description: "Turtles more broadly" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
