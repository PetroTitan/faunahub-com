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

const title = "Chameleon — Profile, Habitat, Diet & Behavior";
const description =
  "Chameleons are colour-changing lizards with independently moving eyes. A group-level overview using the panther chameleon as a reference. Educational, not pet-care advice.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/chameleon",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("chameleon"),
});

export default function ChameleonPage() {
  return (
    <AnimalProfileLayout
      commonName="Chameleon"
      pageTitle={title}
      description={description}
      path="/animals/chameleon"
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Wild"]}
      image={getAnimalImage("chameleon") ?? undefined}
      galleryImages={getAnimalGalleryImages("chameleon")}
      factsHeaderNote="“Chameleon” covers many species (family Chamaeleonidae); the reference shown is the panther chameleon. This page is educational, not a care guide — wild chameleons should not be handled or collected, and specialised pet care should follow qualified reptile-vet/expert guidance."
      overview={
        <>
          <p>
            Chameleons are a distinctive group of lizards (family Chamaeleonidae)
            best known for the ability of many species to change colour,
            independently swivelling eyes, a long projectile tongue, and gripping,
            zygodactyl feet. This page is a group-level overview; the panther
            chameleon (<em>Furcifer pardalis</em>) of Madagascar is used as a
            colourful reference. Most chameleon species live in Africa and
            Madagascar.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Most chameleons are arboreal, living in trees and shrubs of forests,
            savannas, and scrub, mainly in sub-Saharan Africa and Madagascar,
            with some in southern Europe and Asia. A few are ground-dwellers.
            Ranges and habitats vary widely by species, and some chameleons have
            very small, specialised ranges that make them sensitive to habitat
            change.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Chameleons are mainly insectivores, capturing prey such as insects
            with a rapid, projectile tongue; larger species may take bigger prey.
            This page describes general feeding ecology and does not give pet
            feeding instructions or quantities, which depend on the species and
            should follow qualified reptile-veterinary or specialist guidance.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Colour change in chameleons is used for camouflage, temperature
            regulation, and communication such as signalling mood or status —
            not simply to match any background, a common misconception. They move
            slowly and deliberately, often with a swaying gait, and rely on their
            turret-like eyes to spot prey before striking with the tongue.
            Behaviour varies among the many species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Chameleons are wild reptiles, not casual pets; some are kept by
            experienced keepers but have demanding, specialised needs, and
            collection from the wild and the pet trade are pressures on some
            species. Several chameleons are of conservation concern due to
            habitat loss, while others are more common. Conservation status
            varies by species and should be checked against current sources such
            as the IUCN. This page is educational, not care or veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Chameleons are recognised by their laterally compressed bodies,
                independently mobile, cone-shaded eyes, gripping feet with toes
                fused into opposing bundles, and (in many species) a prehensile
                tail. Males of some species, like the panther chameleon, are
                vividly coloured, and many have crests, casques, or horns. Size
                ranges from tiny leaf chameleons to large species. Colour and
                ornamentation vary greatly across the family.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Chameleons are lizards, related to other lizards such as the iguana,
          gecko, and monitor lizard covered on FaunaHub, though they form their
          own distinctive family. Their colour change and projectile tongue set
          them apart from most other reptiles.
        </p>
      }
      faqs={[
        {
          question: "Do chameleons change colour to match their surroundings?",
          answer:
            "Not exactly. Chameleons change colour mainly for temperature regulation and communication — signalling mood, stress, or status — and for some camouflage, rather than precisely matching any background. The idea that they copy whatever they sit on is a popular myth.",
        },
        {
          question: "Are chameleons good pets?",
          answer:
            "Chameleons are wild reptiles with demanding, specialised needs, and some species face pressure from collection and the pet trade. They are not casual pets. This page is educational, not care advice; anyone considering reptiles should research thoroughly and consult a qualified reptile veterinarian or specialist.",
        },
        {
          question: "How does a chameleon catch prey?",
          answer:
            "Chameleons use a long, fast projectile tongue to capture prey such as insects, aided by their independently moving eyes that judge distance precisely. They are sit-and-wait predators that strike quickly once prey is in range.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Chameleons (family Chamaeleonidae)" },
        { label: "Reference species", value: "Panther chameleon (Furcifer pardalis)" },
        { label: "Class", value: "Reptilia" },
        { label: "Diet", value: "Mainly insectivore" },
        { label: "Notable traits", value: "Colour change; independent eyes; projectile tongue" },
        { label: "Range", value: "Mainly Africa and Madagascar" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Gecko Profile", href: "/animals/gecko", description: "Another lizard group" },
        { label: "Iguana Profile", href: "/animals/iguana" },
        { label: "Monitor Lizard Profile", href: "/animals/monitor-lizard" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.chameleon}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
