import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/rattlesnake";
const TITLE = "Rattlesnake — Profile, Habitat, Rattle & Behavior";
const DESC =
  "Explore rattlesnakes (genera Crotalus and Sistrurus): venomous New World pit vipers famous for the warning rattle on their tail, in a careful educational overview.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("rattlesnake"),
});

export default function RattlesnakePage() {
  return (
    <AnimalProfileLayout
      commonName="Rattlesnake"
      scientificName="genera Crotalus & Sistrurus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Snake", "Venomous"]}
      image={getAnimalImage("rattlesnake") ?? undefined}
      galleryImages={getAnimalGalleryImages("rattlesnake")}
      sources={ANIMAL_SOURCES.rattlesnake}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Rattlesnakes are venomous pit vipers of the Americas, in the genera
            <em> Crotalus</em> and <em>Sistrurus</em>, instantly recognised by the
            segmented rattle at the tip of the tail. The animal shown here is the
            western diamondback rattlesnake (<em>Crotalus atrox</em>), a reference
            for this group-level overview.
          </p>
          <p>
            This is an educational profile. Rattlesnakes are venomous wild
            animals; they should only be observed from a safe distance and never
            handled or approached. This page does not provide medical or first-aid
            guidance.
          </p>
          <p>
            <strong>Conservation note:</strong> status varies by species — many
            rattlesnakes are widespread, while some have restricted ranges or face
            local declines. Verify specifics at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Rattlesnakes live across the Americas, from deserts and grasslands to
          rocky hillsides, scrub, and forests, with the greatest diversity in the
          southwestern United States and Mexico. Many species favour warm, dry,
          open country with cover and basking sites.
        </p>
      }
      diet={
        <p>
          Rattlesnakes are carnivores that prey mainly on small mammals such as
          rodents, along with birds and lizards. As pit vipers, they have
          heat-sensing facial pits that help them detect warm-blooded prey, and
          they use venom delivered through hinged fangs to subdue it.
        </p>
      }
      behavior={
        <p>
          The rattle is a warning device: when threatened, a rattlesnake vibrates
          its tail to produce a buzzing sound that signals other animals to keep
          away, helping the snake avoid confrontation rather than seek it. New
          rattle segments are added at each skin shed. Rattlesnakes are most
          active in warm conditions and may shelter communally in cold weather.
        </p>
      }
      humanInteraction={
        <p>
          Rattlesnakes help control rodent populations and generally avoid people,
          striking defensively only when threatened or surprised. Habitat loss,
          road mortality, and deliberate killing are the main conservation
          concerns for some species. For current status, consult authoritative
          sources such as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Why do rattlesnakes rattle?",
          answer:
            "The rattle is a warning signal. By vibrating the tail, a rattlesnake produces a buzzing sound that warns larger animals to stay away, reducing the chance of a dangerous encounter. It is a way to avoid conflict, not to initiate it.",
        },
        {
          question: "How does a rattle work?",
          answer:
            "The rattle is made of loosely interlocking segments of keratin at the tip of the tail. A new segment is added each time the snake sheds its skin, and the segments knock together when the tail vibrates. Counting segments does not reliably give the snake's age, since shedding frequency varies and segments can break off.",
        },
        {
          question: "What do rattlesnakes eat?",
          answer:
            "Rattlesnakes are carnivores that feed mainly on small mammals such as mice and rats, plus some birds and lizards. As pit vipers they detect warm prey using heat-sensitive facial pits.",
        },
        {
          question: "What should I do if I encounter a rattlesnake?",
          answer:
            "Stop, give it plenty of space, and back away slowly — most bites happen when snakes are handled or stepped on. This page is educational only and does not provide medical or first-aid advice; for any snakebite or emergency, contact local emergency and medical services.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genera Crotalus & Sistrurus" },
        { label: "Reference species", value: "Crotalus atrox" },
        { label: "Class", value: "Reptilia" },
        { label: "Type", value: "Pit viper (Viperidae)" },
        { label: "Diet", value: "Carnivore (mainly rodents)" },
        { label: "Venom", value: "Yes — venomous (observe from distance)" },
        { label: "Signature trait", value: "Warning rattle on the tail" },
        { label: "Range", value: "The Americas" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Snake Profile", href: "/animals/snake", description: "Snakes as a whole (Serpentes)" },
        { label: "Cobra Profile", href: "/animals/cobra", description: "Venomous elapid snakes" },
        { label: "Gila Monster Profile", href: "/animals/gila-monster", description: "A venomous desert lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
