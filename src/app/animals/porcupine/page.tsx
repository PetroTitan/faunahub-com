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

const title = "Porcupine — Profile, Habitat, Diet & Behavior";
const description =
  "Porcupines are quill-covered rodents. A group-level overview using the North American porcupine as a reference — habitat, diet, behaviour, and how their quills work.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/porcupine",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("porcupine"),
});

export default function PorcupinePage() {
  return (
    <AnimalProfileLayout
      commonName="Porcupine"
      pageTitle={title}
      description={description}
      path="/animals/porcupine"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Rodent", "Wild"]}
      image={getAnimalImage("porcupine") ?? undefined}
      galleryImages={getAnimalGalleryImages("porcupine")}
      factsHeaderNote="“Porcupine” covers two separate groups — Old World and New World porcupines — that evolved quills independently. The reference shown is the North American porcupine. These are wild animals, not pets."
      overview={
        <>
          <p>
            Porcupines are large rodents covered in protective quills. Two
            separate groups share the name: the Old World porcupines of Africa,
            Asia, and southern Europe, and the New World porcupines of the
            Americas, which evolved their quills independently. This page is a
            group-level overview; the North American porcupine
            (<em>Erethizon dorsatum</em>) is used as a reference. The quills are
            modified hairs used purely for defence.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Porcupines occupy a wide range of habitats depending on the group and
            species — forests, grasslands, deserts, and rocky areas. New World
            porcupines, including the North American porcupine, are often tree-
            climbers of forests, while many Old World porcupines are
            ground-dwelling burrowers. Habitat and range vary widely between the
            two groups and among species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Porcupines are herbivores, eating bark, leaves, twigs, stems, fruit,
            and other plant material; the North American porcupine famously gnaws
            bark and wood, especially in winter. Their constantly growing rodent
            incisors suit this diet. This page describes general feeding ecology,
            not care or feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Porcupines are generally slow-moving and rely on their quills for
            defence. Contrary to a common myth, porcupines cannot &quot;shoot&quot;
            their quills; instead the quills detach easily on contact and can
            lodge in an attacker. Many porcupines are most active at night. New
            World species often climb trees, while Old World species tend to stay
            on the ground. Behaviour varies between the groups and species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Porcupines are wild animals, not pets, and should not be handled
            because of their quills and stress sensitivity. Most porcupine
            species are common, though some face local pressures from hunting and
            habitat change; conservation status varies by species and should be
            checked against current sources. This page is educational, not care or
            veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Porcupines are stout rodents whose backs and tails are covered in
                sharp quills — modified hairs — interspersed with ordinary fur.
                Old World porcupines often have very long, banded black-and-white
                quills, while the North American porcupine has shorter quills
                partly hidden in dense fur. Their rounded bodies, small faces, and
                quill coats make porcupines easy to recognise.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Porcupines are rodents, like the beaver, guinea pig, and hamster
          covered on FaunaHub, though the Old World and New World porcupines are
          only distantly related to each other. They are often confused with the
          unrelated hedgehog and echidna, which have spines but are not rodents.
        </p>
      }
      faqs={[
        {
          question: "Can porcupines shoot their quills?",
          answer:
            "No — that is a myth. Porcupines cannot launch their quills. The quills detach easily on contact, so an animal that touches or attacks a porcupine can end up with quills embedded in it, but they are not actively fired.",
        },
        {
          question: "Are all porcupines the same?",
          answer:
            "No. \"Porcupine\" covers two separate groups — Old World and New World porcupines — that evolved quills independently and differ in habits, with many New World species climbing trees and many Old World species living on the ground. This page is a group-level overview.",
        },
        {
          question: "Are porcupines related to hedgehogs?",
          answer:
            "No. Porcupines are rodents, while hedgehogs are insectivores in a different group; the spiny echidna is different again. They look similar because several unrelated animals have independently evolved spines for defence.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Porcupines (Old World and New World groups)" },
        { label: "Reference species", value: "North American porcupine (Erethizon dorsatum)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Herbivore" },
        { label: "Defence", value: "Detachable quills (cannot be shot)" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Hedgehog Profile", href: "/animals/hedgehog", description: "An unrelated spiny mammal" },
        { label: "Beaver Profile", href: "/animals/beaver", description: "A fellow rodent" },
        { label: "Armadillo Profile", href: "/animals/armadillo" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.porcupine}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
