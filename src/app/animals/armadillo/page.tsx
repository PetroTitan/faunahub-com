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

const title = "Armadillo — Profile, Habitat, Diet & Behavior";
const description =
  "Armadillos are armoured digging mammals of the Americas. A group-level overview using the nine-banded armadillo as a reference — habitat, diet, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/armadillo",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("armadillo"),
});

export default function ArmadilloPage() {
  return (
    <AnimalProfileLayout
      commonName="Armadillo"
      pageTitle={title}
      description={description}
      path="/animals/armadillo"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Armoured", "Wild"]}
      image={getAnimalImage("armadillo") ?? undefined}
      galleryImages={getAnimalGalleryImages("armadillo")}
      factsHeaderNote="“Armadillo” covers around 20 species; the reference shown is the nine-banded armadillo. These are wild animals, not pets; this page is educational, not a care or handling guide."
      overview={
        <>
          <p>
            Armadillos are small-to-medium mammals of the Americas, recognised by
            the protective bony plates (a &quot;carapace&quot;) covering the body.
            There are around twenty species. This page is a group-level overview;
            the nine-banded armadillo (<em>Dasypus novemcinctus</em>), the most
            widespread species and the only one found in the United States, is
            used as a reference. Armadillos are related to sloths and anteaters.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Armadillos live in a range of habitats — grasslands, forests, and
            scrub — across Central and South America, with the nine-banded
            armadillo&apos;s range extending north into the southern United
            States. They are diggers that use burrows for shelter. Habitat and
            range vary by species, and the nine-banded armadillo has expanded its
            range over recent decades.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Armadillos are mainly insectivores, using a strong sense of smell and
            powerful claws to dig for insects, grubs, and other invertebrates,
            and they also take some plant matter and small animals. Their
            foraging turns over soil. This page describes general feeding ecology,
            not care or feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Armadillos are strong diggers that excavate burrows and forage by
            rooting in soil and leaf litter, often most active around dawn, dusk,
            and night. Contrary to popular belief, only certain armadillos (the
            three-banded armadillos) can fully roll into a ball; most rely on
            their armour and digging to escape danger. The nine-banded armadillo
            characteristically gives birth to identical quadruplets. Behaviour
            varies by species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Armadillos are wild animals, not pets, and are best left undisturbed.
            Some species are common and even expanding, while others are
            threatened by habitat loss and hunting; conservation status varies by
            species and should be checked against current sources. This page is
            educational, not care or veterinary advice, and does not encourage
            handling or keeping armadillos.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Armadillos are unmistakable, with a leathery, bony shell over the
                back and sides made of jointed plates, often with movable bands
                across the middle. They have short legs, strong digging claws, a
                long snout, and (in most species) a tapering tail. The nine-banded
                armadillo is named for the bands across its midsection. Size and
                the number of bands vary across the group.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Armadillos belong to the group Xenarthra alongside the sloth covered
          separately on FaunaHub, and anteaters. Their bony armour is unique among
          living mammals and clearly distinguishes them from other small
          digging animals such as the unrelated pangolins.
        </p>
      }
      faqs={[
        {
          question: "Can all armadillos roll into a ball?",
          answer:
            "No — this is a common misconception. Only the three-banded armadillos can fully roll into a protective ball. Most armadillos instead rely on their armour and on digging or running to escape danger.",
        },
        {
          question: "What do armadillos eat?",
          answer:
            "Armadillos are mainly insectivores, digging for insects, grubs, and other invertebrates with their claws and keen sense of smell, and also eating some plant matter and small animals. This page describes general ecology rather than care instructions.",
        },
        {
          question: "Are armadillos pests or pets?",
          answer:
            "Armadillos are wild animals, not pets. Their digging can sometimes conflict with gardens or lawns, but they are best managed through habitat-based, humane approaches and left undisturbed. This page is educational, not a care or control guide.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Armadillos (~20 species)" },
        { label: "Reference species", value: "Nine-banded armadillo (Dasypus novemcinctus)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Mainly insectivore" },
        { label: "Notable trait", value: "Bony body armour; strong diggers" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Sloth Profile", href: "/animals/sloth", description: "A relative in the group Xenarthra" },
        { label: "Porcupine Profile", href: "/animals/porcupine" },
        { label: "Hedgehog Profile", href: "/animals/hedgehog" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.armadillo}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
