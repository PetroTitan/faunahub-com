import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Sea Turtle — Profile, Habitat, Diet & Behavior";
const description =
  "Sea turtles are ancient ocean reptiles. A group-level overview using the green sea turtle as a reference species: ocean habitat, diet, nesting, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/sea-turtle",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("sea-turtle"),
});

export default function SeaTurtlePage() {
  return (
    <AnimalProfileLayout
      commonName="Sea Turtle"
      pageTitle={title}
      description={description}
      path="/animals/sea-turtle"
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine", "Reptile", "Long-lived"]}
      image={getAnimalImage("sea-turtle") ?? undefined}
      galleryImages={getAnimalGalleryImages("sea-turtle")}
      factsHeaderNote="There are seven recognised sea turtle species. The reference species shown is the green sea turtle (Chelonia mydas). Several sea turtles are threatened — conservation status should be checked against current IUCN and government sources."
      overview={
        <>
          <p>
            Sea turtles are large marine reptiles of the superfamily
            Chelonioidea, with seven recognised species adapted to life in the
            ocean. This page is a group-level overview; the green sea turtle
            (<em>Chelonia mydas</em>) is used as a familiar reference. Sea
            turtles have streamlined shells and flipper-shaped limbs for
            swimming. They breathe air, are long-lived, and return to land only
            to lay eggs.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Sea turtles live in tropical and temperate oceans worldwide,
            using habitats such as coastal seas, coral reefs, seagrass beds,
            and the open ocean at different life stages. They are highly
            migratory, and many travel long distances between feeding grounds
            and the beaches where they nest. Females return to sandy beaches —
            often near where they hatched — to lay their eggs.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Diet varies by species. Green sea turtles are unusual in that
            adults feed largely on seagrasses and algae, while other species
            specialise differently — for example, hawksbills feed heavily on
            sponges, loggerheads on hard-shelled invertebrates, and
            leatherbacks almost entirely on jellyfish. Young sea turtles are
            often more omnivorous than adults. Diet should be described per
            species rather than for sea turtles as a whole.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Sea turtles are strong, graceful swimmers that spend almost their
            entire lives at sea. They are known for remarkable long-distance
            navigation between feeding and nesting areas. Females come ashore at
            night to dig nests and lay clutches of eggs in the sand; the
            hatchlings later emerge together and make their way to the sea.
            Hatchling sex in many species is influenced by the temperature of
            the nest.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Sea turtles face significant threats from habitat loss, coastal
            development, entanglement and bycatch in fishing gear, pollution
            including plastics, the harvesting of eggs and animals, and climate
            change affecting nesting beaches. Several species are considered
            threatened and are protected under national and international law.
            Because status differs by species and is actively monitored, it
            should always be verified against current IUCN Red List and
            government sources.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Sea turtles have a broad, streamlined shell (carapace) and
                paddle-like front flippers that power their swimming, unlike the
                clawed feet of land and freshwater turtles. They cannot retract
                their head and limbs into the shell. Species are told apart by
                features such as shell shape and the pattern of scales on the
                head; the leatherback is distinctive in having a leathery,
                ridged shell rather than a hard, scaly one.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Sea turtles are reptiles, related to the freshwater and land turtles
          covered separately on FaunaHub under the turtle profile, but they are
          specialised for ocean life with flippers instead of feet. They should
          not be confused with marine mammals; sea turtles are air-breathing
          reptiles that lay eggs on land.
        </p>
      }
      faqs={[
        {
          question: "How many species of sea turtle are there?",
          answer:
            "Seven are generally recognised: the green, loggerhead, hawksbill, olive ridley, Kemp's ridley, flatback, and leatherback sea turtles. They differ in size, diet, range, and conservation status, so this page is a group-level overview.",
        },
        {
          question: "Why do sea turtles come onto beaches?",
          answer:
            "Adult sea turtles spend their lives at sea, but females come ashore to nest. They haul out onto sandy beaches, usually at night, dig a nest, and lay a clutch of eggs before returning to the ocean. The hatchlings later emerge and head to the sea.",
        },
        {
          question: "Are sea turtles endangered?",
          answer:
            "Several sea turtle species are considered threatened and are legally protected, but the situation differs by species and population. Because status is actively monitored and can change, it should be checked against current IUCN Red List and government (such as NOAA Fisheries) sources rather than assumed.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Sea turtles (superfamily Chelonioidea, 7 species)" },
        { label: "Reference species", value: "Green sea turtle (Chelonia mydas)" },
        { label: "Class", value: "Reptilia" },
        { label: "Limbs", value: "Flippers (cannot retract into shell)" },
        { label: "Diet", value: "Varies by species" },
        { label: "Nesting", value: "Females lay eggs on sandy beaches" },
        { label: "Conservation", value: "Several threatened — verify on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Turtle Profile", href: "/animals/turtle", description: "Freshwater and land turtles" },
        { label: "Jellyfish Profile", href: "/animals/jellyfish", description: "Prey of some sea turtles" },
        { label: "Dolphin Profile", href: "/animals/dolphin" },
        { label: "Animal Encyclopedia — Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES["sea-turtle"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
