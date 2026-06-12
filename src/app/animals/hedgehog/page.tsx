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

const title = "Hedgehog — Profile, Habitat, Diet & Behavior";
const description =
  "Hedgehogs are small spiny insectivores. A group-level overview using the European hedgehog as a reference species: spines, diet, and nocturnal behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/hedgehog",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("hedgehog"),
});

export default function HedgehogPage() {
  return (
    <AnimalProfileLayout
      commonName="Hedgehog"
      pageTitle={title}
      description={description}
      path="/animals/hedgehog"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Insectivore", "Nocturnal"]}
      image={getAnimalImage("hedgehog") ?? undefined}
      galleryImages={getAnimalGalleryImages("hedgehog")}
      factsHeaderNote="“Hedgehog” covers many species across Europe, Africa, and Asia. The reference species below is the European hedgehog (Erinaceus europaeus). Pet hedgehog keeping is regulated in many places — check local law and specialist care sources."
      overview={
        <>
          <p>
            Hedgehogs are small spiny mammals of the subfamily Erinaceinae,
            with numerous species across Europe, Africa, Asia, and New Zealand
            (where they were introduced). This page is a group-level overview;
            the European hedgehog (<em>Erinaceus europaeus</em>) is used as a
            familiar reference species. Hedgehogs are best known for the coat
            of stiff spines they roll into a ball to protect themselves.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            European hedgehogs live in woodland edges, hedgerows, grassland,
            parks, and gardens, where they shelter by day in nests of leaves
            and vegetation. Other hedgehog species occupy habitats ranging from
            forest to dry savanna and semi-desert in their own regions.
            Habitat and range vary by species, so a description of one
            hedgehog does not apply to all.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Hedgehogs are mainly insectivores with a broad diet of
            invertebrates such as beetles, caterpillars, earthworms, and
            slugs, supplemented by other small animals and occasional plant
            material. Because they eat many invertebrates that gardeners
            consider pests, hedgehogs are often welcomed in gardens within
            their range. Diet varies seasonally and by species.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Hedgehogs are largely nocturnal and solitary. Their signature
            defence is to curl into a tight ball, presenting only their spines
            to a predator. In cooler climates some species hibernate through
            winter, and many show a curious behaviour called
            &quot;self-anointing&quot;, spreading frothy saliva over their
            spines in response to new smells. Specific behaviour varies between
            species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Wild hedgehogs are popular garden visitors, and in some regions
            populations have declined, prompting conservation interest; status
            should be checked against current sources. Some species are kept as
            exotic pets, but this is regulated or prohibited in many places and
            has specific welfare needs, so local law and qualified care
            guidance should always be consulted. This page is educational, not
            care or veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Hedgehogs are small and rounded, with a coat of short, stiff
                spines (modified hairs) covering the back and sides, and softer
                fur on the face, legs, and belly. They have a pointed snout,
                small eyes, and short legs. Spine colour is usually banded
                brown and cream, giving a grizzled look. When threatened, the
                animal contracts a band of muscle to roll into a spiny ball.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Hedgehogs are sometimes confused with porcupines, but the two are
          unrelated: porcupines are large rodents with long, barbed quills,
          while hedgehogs are small insectivores with short spines. They are
          more closely related to moonrats and shrews. The spiny but
          unrelated echidna of Australasia is another look-alike.
        </p>
      }
      faqs={[
        {
          question: "Are hedgehog spines like porcupine quills?",
          answer:
            "Both are modified hairs, but they work differently. Hedgehog spines are short and stay attached, used as armour when the animal rolls into a ball. Porcupine quills are long and can detach. Hedgehogs and porcupines are not closely related.",
        },
        {
          question: "Do hedgehogs hibernate?",
          answer:
            "Some do. In cooler climates, species such as the European hedgehog hibernate through winter, while hedgehogs in warm regions may not. Hibernation depends on the species and the local climate.",
        },
        {
          question: "Can hedgehogs be kept as pets?",
          answer:
            "Some species are kept as exotic pets, but it is regulated or banned in many places and they have specialised welfare needs. FaunaHub does not provide care advice — always check local law and consult qualified exotic-pet veterinary guidance before considering any wild or exotic animal.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Hedgehogs (subfamily Erinaceinae)" },
        { label: "Reference species", value: "European hedgehog (Erinaceus europaeus)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Mainly insectivore" },
        { label: "Activity", value: "Mostly nocturnal; some hibernate" },
        { label: "Defence", value: "Rolls into a spiny ball" },
        { label: "Conservation", value: "Varies by species — verify on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Badger Profile", href: "/animals/badger", description: "Another small nocturnal mammal" },
        { label: "Hamster Profile", href: "/animals/hamster" },
        { label: "Rabbit Profile", href: "/animals/rabbit" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.hedgehog}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
