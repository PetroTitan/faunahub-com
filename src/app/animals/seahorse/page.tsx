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

const title = "Seahorse — Profile, Habitat, Diet & Behavior";
const description =
  "Seahorses are unusual upright fish where males carry the young. A group-level overview of the genus Hippocampus: habitat, feeding, breeding, and conservation caution.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/seahorse",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("seahorse"),
});

export default function SeahorsePage() {
  return (
    <AnimalProfileLayout
      commonName="Seahorse"
      pageTitle={title}
      description={description}
      path="/animals/seahorse"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Marine", "Reef"]}
      image={getAnimalImage("seahorse") ?? undefined}
      galleryImages={getAnimalGalleryImages("seahorse")}
      factsHeaderNote="“Seahorse” covers many species in the genus Hippocampus. Seahorses are difficult to keep and several species face conservation pressures; this page is educational, not aquarium-care advice. Status varies by species — check current sources."
      overview={
        <>
          <p>
            Seahorses are small marine fish of the genus <em>Hippocampus</em>,
            instantly recognisable for their upright posture, horse-like head,
            and curling, grasping tail. There are many species. This page is a
            group-level overview. Despite their unusual look, seahorses are true
            fish, and they are famous for an extraordinary reproductive role
            reversal in which the male carries and gives birth to the young.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Seahorses live in shallow, sheltered coastal waters around the world,
            among seagrass meadows, coral reefs, mangroves, and estuaries, where
            they anchor themselves to plants and other structures with their
            tails. They are weak swimmers that rely on camouflage and stillness.
            These specialised habitats make them sensitive to coastal habitat
            loss; range and habitat vary by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Seahorses are carnivores that feed on tiny prey such as small
            crustaceans, sucking them up through their tube-shaped snout with a
            rapid movement. Lacking a stomach in the usual sense, they feed
            frequently. Diet varies by species; this page describes general
            feeding ecology rather than aquarium feeding details.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Seahorses are best known for their reproduction: the female deposits
            eggs into a brood pouch on the male, who fertilises and carries them,
            then gives birth to fully formed young. Many species form pair bonds
            and perform daily greeting displays. They move slowly, propelled by a
            small, rapidly beating dorsal fin, and grip anchors with their
            prehensile tails. Behaviour varies among species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Seahorses face pressures from habitat loss, bycatch, and collection
            for the aquarium trade, traditional medicine, and curios, and many
            species are of conservation concern; international trade in them is
            regulated. They are difficult to keep in aquariums and are not
            suitable for casual fishkeeping. Because conservation status varies by
            species and is actively monitored, it should be verified against
            current IUCN Red List and government sources.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Seahorses have a horse-like head set at an angle to an upright,
                armoured body made of bony rings, a long tube snout, and a
                coiling, fin-less tail used for gripping. They lack the typical
                tail fin of other fish. Many can change colour to match their
                surroundings, and some have skin filaments that add to their
                camouflage. Size ranges from tiny pygmy seahorses to larger
                species several centimetres long.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Seahorses belong to the family Syngnathidae, alongside pipefish and
          seadragons, which share the tube snout and male brood care. They live
          on reefs and in seagrass alongside other marine animals covered on
          FaunaHub, such as clownfish, but are only distantly related to them.
        </p>
      }
      faqs={[
        {
          question: "Do male seahorses really give birth?",
          answer:
            "Yes. In seahorses the female transfers eggs into a brood pouch on the male, who fertilises them, carries them as they develop, and then releases live young. This male pregnancy is one of the most unusual reproductive systems among animals.",
        },
        {
          question: "Are seahorses good aquarium pets?",
          answer:
            "Seahorses are widely regarded as difficult to keep, with specialised feeding and water-quality needs, and several species face conservation pressures. They are not suitable for casual fishkeeping. This page is educational, not care advice; anyone considering them should research thoroughly and seek qualified guidance.",
        },
        {
          question: "Why are seahorses considered vulnerable?",
          answer:
            "Many seahorses depend on fragile coastal habitats like seagrass and reefs, and they are affected by habitat loss, bycatch, and collection. Several species are of conservation concern and their trade is regulated, but status varies by species, so check current IUCN and government sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Seahorses (genus Hippocampus)" },
        { label: "Family", value: "Syngnathidae (with pipefish, seadragons)" },
        { label: "Type", value: "Marine fish" },
        { label: "Habitat", value: "Seagrass, reefs, mangroves, estuaries" },
        { label: "Notable trait", value: "Male carries and births the young" },
        { label: "Conservation", value: "Several of concern — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "Another reef fish" },
        { label: "Pufferfish Profile", href: "/animals/pufferfish" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.seahorse}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
