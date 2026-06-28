import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/grass-snake";
const TITLE = "Grass Snake: Harmless Wetland Snake of Europe";
const DESC =
  "The grass snake (Natrix natrix) is a non-venomous, water-loving European snake known for swimming, eating amphibians, and dramatic defensive bluffing.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("grass-snake"),
});

export default function GrassSnakePage() {
  return (
    <AnimalProfileLayout
      commonName="Grass Snake"
      scientificName="Natrix natrix"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Snake","Non-venomous"]}
      image={getAnimalImage("grass-snake") ?? undefined}
      galleryImages={getAnimalGalleryImages("grass-snake")}
      sources={ANIMAL_SOURCES["grass-snake"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The grass snake (<em>Natrix natrix</em>) is a non-venomous reptile widely associated with damp habitats in parts of Europe. Often greenish or olive in colour, it is most easily recognised by the yellow-and-black collar marking near the back of its head. It is a strong swimmer and spends much of its active life near water, where it hunts amphibians and other small prey.
          </p>
          <p>
            Among European snakes, the grass snake is notable for a striking repertoire of defensive behaviours rather than any threat to people. When alarmed it may hiss, release a foul-smelling substance, or even feign death by going limp with its mouth open, a behaviour known as thanatosis. None of these displays involves venom, and the species is considered harmless to humans.
          </p>
          <p>
            On the IUCN Red List, the grass snake is currently assessed as Least Concern. Such assessments reflect the best available information at the time and can change as new data emerge, so the listing is best understood as a snapshot rather than a permanent status.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The grass snake belongs to the family Colubridae, the large and diverse group commonly called colubrids, within the order Squamata that contains snakes and lizards. Its scientific name is <em>Natrix natrix</em>, and it is one of several closely related water-associated snakes placed in the genus <em>Natrix</em>. As a true snake, it is a legless reptile, distinct from the venomous vipers found in parts of the same region. Genetic work has also led some populations once grouped within the grass snake to be recognised as a separate species, the barred grass snake (<em>Natrix helvetica</em>), which can affect how the two are mapped and named.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult grass snakes are typically slender and often grey-green, olive, or brownish in colour, frequently with small dark markings or bars along the flanks. The most distinctive feature is a collar of yellow, cream, or orange bordered by black just behind the head, which gives the species one of its older common names. The eyes have round pupils, and females generally grow longer than males. When viewed closely, the keeled scales and the pale collar usually help distinguish it from other snakes within its range.
          </p>
        </>
      }
      habitat={
        <p>
          The grass snake is strongly associated with wetlands, ponds, slow rivers, ditches, and damp grassland, and is found in parts of Europe rather than across the entire continent. It favours places where water and amphibian prey are abundant, and it can also occur in gardens, woodland edges, and farmland near suitable wet features. Its distribution within Europe is patchy and shaped by climate, habitat availability, and water quality, and in some areas snakes may be native while elsewhere they are introduced, so descriptions of its range are best treated cautiously rather than as a complete or continuous mapping.
        </p>
      }
      diet={
        <p>
          This snake feeds mainly on amphibians, with frogs, toads, and newts forming a large part of its diet, and it will also take fish and occasionally other small animals. It is a capable swimmer and often hunts in or near water, locating prey by sight and by sensing chemical cues with its flicking tongue. Prey is swallowed whole, and the species does not use venom to subdue what it eats.
        </p>
      }
      behavior={
        <>
          <p>
            Grass snakes are generally shy and non-aggressive, relying on flight and bluff rather than biting when disturbed. Their defensive behaviours are well known and include hissing, releasing a foul-smelling secretion, and feigning death by becoming limp with the mouth agape. They are egg-laying snakes that often deposit eggs in warm, decomposing plant material, and in cooler parts of their range they spend the colder months inactive in sheltered refuges before becoming active again in warmer weather.
          </p>
          <p>
            As a mid-sized predator of amphibians and fish, the grass snake forms part of the food web in many wetland and grassland habitats, helping to link aquatic and terrestrial communities. It is itself prey for larger animals, including birds of prey and various mammals, particularly when young. Because it depends heavily on healthy wet habitats and amphibian populations, its presence can reflect the overall condition of local freshwater environments.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The grass snake is non-venomous and harmless to people, and its dramatic defensive displays are bluffs rather than genuine attacks. Encounters are best handled by observing the animal calmly from a distance and allowing it to move away on its own; it is a wild animal, not a pet, and should not be approached as one. Anyone with concerns about a snake near homes or property can contact their local wildlife authorities, and any medical questions about animal bites should be directed to qualified medical professionals or local health authorities. On the IUCN Red List the species is assessed as Least Concern, an assessment that may be revised as monitoring continues.
        </p>
      }
      faqs={[
        {
          question: "Is the grass snake venomous or dangerous to people?",
          answer:
            "No. The grass snake is non-venomous and is considered harmless to people. Its hissing, foul smell, and death-feigning are defensive bluffs rather than genuine attacks.",
        },
        {
          question: "How can you recognise a grass snake?",
          answer:
            "It is often greenish or olive with a distinctive yellow-and-black collar marking just behind the head. It also has round pupils and keeled scales. Note that some populations once grouped with it are now treated as the barred grass snake (Natrix helvetica).",
        },
        {
          question: "What do grass snakes eat?",
          answer:
            "They feed mainly on amphibians such as frogs, toads, and newts, and will also take fish and occasionally other small animals. Prey is swallowed whole, without the use of venom.",
        },
        {
          question: "What should I do if I find a grass snake?",
          answer:
            "Observe it calmly from a distance and let it move away on its own; it is a wild animal, not a pet. Concerns about a snake near homes can be directed to your local wildlife authorities, and any bite-related medical questions to qualified medical professionals or local health authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Natrix natrix" },
        { label: "Animal group", value: "Reptile (snake)" },
        { label: "Family", value: "Colubridae (colubrid snakes)" },
        { label: "Size", value: "Slender-bodied; females generally longer than males" },
        { label: "Diet", value: "Mainly amphibians; also fish and other small prey" },
        { label: "Habitat", value: "Wetlands, ponds, slow rivers, and damp grassland" },
        { label: "Range", value: "Found in parts of Europe" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "European Adder", href: "/animals/european-viper", description: "A venomous European snake, for contrast" },
        { label: "Snake Profile", href: "/animals/snake", description: "Snakes more broadly" },
        { label: "European Tree Frog", href: "/animals/european-tree-frog", description: "A wetland amphibian it may prey on" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
