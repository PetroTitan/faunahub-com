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

const title = "Pigeon — Profile, Habitat, Diet & Behavior";
const description =
  "The pigeon (rock dove, Columba livia): an educational profile of the familiar city bird and its domesticated forms — appearance, diet, behaviour, and human history.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/pigeon",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("pigeon"),
});

export default function PigeonPage() {
  return (
    <AnimalProfileLayout
      commonName="Pigeon"
      scientificName="Columba livia"
      pageTitle={title}
      description={description}
      path="/animals/pigeon"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Dove Family", "Wild & Domestic"]}
      image={getAnimalImage("pigeon") ?? undefined}
      galleryImages={getAnimalGalleryImages("pigeon")}
      factsHeaderNote="The familiar city pigeon is the feral form of the rock dove (Columba livia). Domesticated pigeons (racing, fancy, and homing breeds) are the same species. “Pigeon” and “dove” are used loosely for many species in the family Columbidae."
      overview={
        <>
          <p>
            The common pigeon is the rock dove (<em>Columba livia</em>), a bird
            in the dove family (Columbidae). The familiar grey city pigeon is the
            feral descendant of domesticated rock doves, and racing, homing, and
            fancy pigeon breeds are all the same species. &quot;Pigeon&quot; and
            &quot;dove&quot; are used loosely and interchangeably for many
            members of this large family worldwide.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Wild rock doves nest on cliffs and rocky ledges, and the feral form
            has adapted superbly to towns and cities, where buildings mimic their
            natural cliff habitat. Feral pigeons are now found in urban areas
            across much of the world. Other members of the dove family occupy
            forests, grasslands, and deserts; habitat varies widely by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Pigeons feed mainly on seeds and grain, and urban feral pigeons also
            take a wide range of human food scraps. They typically forage on the
            ground in flocks. Like other members of the dove family, they can
            produce a nutritious secretion called &quot;crop milk&quot; to feed
            their young. Diet varies with habitat and species.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Pigeons are social birds that gather in flocks and are strong, fast
            fliers. Homing pigeons are famous for their remarkable navigational
            ability, returning over long distances, which has been used by people
            for messaging and racing. Pigeons typically form pair bonds and can
            breed throughout much of the year in mild conditions. Behaviour
            varies between wild, feral, and domesticated birds.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Pigeons have one of the longest histories of association with
            humans, having been domesticated for food, message-carrying, racing,
            and companionship. Feral city pigeons are wild-living birds; domestic
            and racing pigeons are kept by enthusiasts. The wild rock dove is
            generally common, though genuinely wild populations face some
            pressures; status should be checked against current sources. Do not
            disturb nests, and contact a licensed wildlife rehabilitator or local
            authority for an injured wild bird.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The classic rock dove is blue-grey with two black wing bars, a
                white rump, and an iridescent green-and-purple sheen on the neck.
                Feral pigeons are highly variable, ranging from this wild-type
                pattern to almost white, black, or rusty-brown birds, reflecting
                their domesticated ancestry. Domestic breeds vary enormously in
                colour, size, and feather form, but all are the same species.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Pigeons belong to the dove family, Columbidae, which includes hundreds
          of species of pigeons and doves worldwide. The terms &quot;pigeon&quot;
          and &quot;dove&quot; are not biologically distinct. Pigeons are
          sometimes confused with other grey birds, but the wing bars, neck
          sheen, and cooing calls are useful clues.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
      ]}
      faqs={[
        {
          question: "Are pigeons and doves different birds?",
          answer:
            "Not biologically. \"Pigeon\" and \"dove\" are common names used loosely for members of the same family, Columbidae, often with smaller species called doves and larger ones pigeons. The common city pigeon and the rock dove are the same species.",
        },
        {
          question: "Why are city pigeons so variable in colour?",
          answer:
            "City (feral) pigeons descend from domesticated rock doves bred in many colours over centuries. As a result, feral flocks show a wide range of plumage, from the wild blue-grey type to white, black, and mottled birds — all the same species.",
        },
        {
          question: "How do homing pigeons find their way home?",
          answer:
            "Homing pigeons are renowned for navigating back over long distances. Research suggests they use a combination of cues, which may include the sun, the Earth's magnetic field, and learned landmarks. The exact mechanisms are still studied.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Columba livia (rock dove)" },
        { label: "Family", value: "Columbidae (pigeons and doves)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mainly seeds and grain" },
        { label: "Context", value: "Wild rock dove, feral city pigeon, and domestic breeds" },
        { label: "Conservation", value: "Generally common — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Sparrow Profile", href: "/animals/sparrow", description: "Another common urban bird" },
        { label: "Crow Profile", href: "/animals/crow" },
        { label: "Birdwatching Hub", href: "/birdwatching" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.pigeon}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
