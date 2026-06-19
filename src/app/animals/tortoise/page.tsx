import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tortoise";
const TITLE = "Tortoise — Profile, Habitat, Diet & Lifespan";
const DESC =
  "Explore tortoises (family Testudinidae): land-dwelling, shelled reptiles known for long lifespans and herbivorous diets, from giant island tortoises to small desert species.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("tortoise"),
});

export default function TortoisePage() {
  return (
    <AnimalProfileLayout
      commonName="Tortoise"
      scientificName="family Testudinidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Testudines", "Herbivore"]}
      image={getAnimalImage("tortoise") ?? undefined}
      galleryImages={getAnimalGalleryImages("tortoise")}
      sources={ANIMAL_SOURCES.tortoise}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Tortoises are land-dwelling reptiles of the family Testudinidae, a
            branch of the turtle order (Testudines) adapted to life on dry land.
            They are best known for their high, domed shells, sturdy elephantine
            legs, and famously long lifespans. The animal shown here is an Aldabra
            giant tortoise (<em>Aldabrachelys gigantea</em>), used as a reference
            for this group-level overview.
          </p>
          <p>
            Unlike many turtles, tortoises are poor swimmers and live almost
            entirely on land, ranging from giant island species to small,
            drought-hardy desert tortoises.
          </p>
          <p>
            <strong>Conservation note:</strong> many tortoise species are of
            conservation concern, affected by habitat loss and collection, while
            others are more secure. Because status varies by species, verify
            specifics at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Tortoises occur across warm regions of the world — grasslands, scrub,
          dry forest, desert, and tropical islands. Different species are adapted
          to very different conditions, from arid deserts where they shelter in
          burrows to humid islands. They are absent from the coldest regions and
          from Australia.
        </p>
      }
      diet={
        <p>
          Most tortoises are herbivores, grazing and browsing on grasses, leaves,
          flowers, and fruit, with the exact diet depending on the species and
          habitat. Their slow metabolism and efficient use of plant food suit a
          life that is unhurried and, in many species, very long.
        </p>
      }
      behavior={
        <p>
          Tortoises are mostly solitary and slow-moving, relying on their shell
          rather than speed for defense; when threatened they can withdraw the
          head and limbs. Many are long-lived, with some individuals reaching well
          over a century. Activity is strongly shaped by temperature, and
          desert species may shelter underground during heat or cold.
        </p>
      }
      humanInteraction={
        <p>
          Tortoises face pressures from habitat loss, road mortality, and
          collection for the pet trade in some regions. Several species are
          protected, and giant tortoises in particular are conservation icons.
          For current, species-specific status, consult authoritative sources such
          as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a tortoise and a turtle?",
          answer:
            "All tortoises are turtles, but not all turtles are tortoises. \"Turtle\" covers the whole order Testudines, while \"tortoise\" refers specifically to the land-dwelling family Testudinidae. Tortoises have rounded, domed shells and stumpy legs for walking on land, whereas many other turtles are adapted for water.",
        },
        {
          question: "How long do tortoises live?",
          answer:
            "Tortoises are among the longest-lived animals. Lifespans vary by species, but many live for decades and some giant tortoises are documented living well past 100 years. Exact figures depend on species, environment, and care.",
        },
        {
          question: "What do tortoises eat?",
          answer:
            "Most tortoises are herbivores, eating grasses, leafy plants, flowers, and some fruit. The precise diet differs between species and habitats, and some will occasionally take other foods.",
        },
        {
          question: "Are tortoises endangered?",
          answer:
            "It depends on the species. Some tortoises are widespread, while others are threatened by habitat loss and collection. Status should always be checked per species against current IUCN Red List data.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Testudinidae" },
        { label: "Reference species", value: "Aldabrachelys gigantea" },
        { label: "Class", value: "Reptilia" },
        { label: "Order", value: "Testudines" },
        { label: "Diet", value: "Mainly herbivore" },
        { label: "Habitat", value: "Land (grassland, desert, islands)" },
        { label: "Notable for", value: "Long lifespan; domed shell" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Turtle Profile", href: "/animals/turtle", description: "The wider order Testudines" },
        { label: "Sea Turtle Profile", href: "/animals/sea-turtle", description: "Ocean-going turtles" },
        { label: "Iguana Profile", href: "/animals/iguana", description: "Another reptile group" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Reptile fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
