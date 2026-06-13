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

const title = "Wombat — Profile, Habitat, Diet & Behavior";
const description =
  "Wombats are stocky burrowing marsupials of Australia. A group-level overview using the common wombat as a reference — habitat, grazing diet, burrows, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/wombat",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("wombat"),
});

export default function WombatPage() {
  return (
    <AnimalProfileLayout
      commonName="Wombat"
      pageTitle={title}
      description={description}
      path="/animals/wombat"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Marsupial", "Wild"]}
      image={getAnimalImage("wombat") ?? undefined}
      galleryImages={getAnimalGalleryImages("wombat")}
      factsHeaderNote="There are three living wombat species; the reference shown is the common wombat. Wombats are protected Australian wildlife, not pets; this page is educational, not a care or handling guide."
      overview={
        <>
          <p>
            Wombats are stocky, burrowing marsupials native to Australia, with
            three living species. This page is a group-level overview; the common
            wombat (<em>Vombatus ursinus</em>) is used as a reference. Wombats are
            powerful diggers with short legs and a compact build, and — unusually
            among marsupials — they produce distinctively cube-shaped droppings.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Wombats live in forests, woodlands, grasslands, and mountainous areas
            of Australia, including Tasmania, where they dig extensive burrow
            systems for shelter. The common wombat is the most widespread, while
            the northern hairy-nosed wombat has a very small range. Habitat and
            range vary by species, and burrows are central to wombat life.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Wombats are herbivores that graze on grasses, roots, and other
            vegetation, with a slow metabolism and very efficient digestion suited
            to a low-nutrient diet. They typically feed at night and in cooler
            hours. This page describes general feeding ecology, not care or
            feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Wombats are mainly nocturnal or crepuscular and spend much of the day
            in their burrows. They are strong, determined diggers, and their
            rear end is reinforced with tough cartilage, which can be used to
            block a burrow against a predator. Despite a placid appearance, they
            are sizeable wild animals that can defend themselves and should not be
            handled. Behaviour varies among the species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Wombats are protected Australian wildlife, not pets. While the common
            wombat is relatively widespread, other wombats — notably the northern
            hairy-nosed wombat — are seriously threatened and the focus of
            conservation efforts; wombats can also be affected by disease, habitat
            loss, and vehicle collisions. Conservation status varies sharply by
            species and should be checked against current sources. This page is
            educational, not care or veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Wombats are barrel-shaped marsupials with short, powerful legs,
                large digging claws, a broad head, small eyes and ears, and a very
                short tail. Their fur ranges from sandy to dark brown or grey. Like
                other marsupials, females have a pouch — which, in burrowing
                wombats, opens backwards to keep out soil. Their sturdy build and
                digging adaptations are characteristic.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Wombats are marsupials, related to the koala and kangaroo covered on
          FaunaHub. The koala is their closest living relative. Their burrowing,
          ground-dwelling lifestyle sets them apart from the tree-dwelling koala
          and the hopping kangaroo.
        </p>
      }
      faqs={[
        {
          question: "Why are wombat droppings cube-shaped?",
          answer:
            "Wombats are notable for producing cube-shaped droppings, thought to result from how their long, specialised intestines form the faeces. The shape may help the droppings stay in place when used to mark territory. It is a genuine and unusual feature of wombats.",
        },
        {
          question: "Are wombats related to koalas?",
          answer:
            "Yes. Wombats and koalas are both marsupials and are each other's closest living relatives, despite their very different lifestyles — wombats burrow on the ground, while koalas live in trees.",
        },
        {
          question: "Can wombats be kept as pets?",
          answer:
            "No. Wombats are protected Australian wildlife with specialised needs, and they are not pets. This page is educational, not care advice; wombats should be seen in the wild or at accredited facilities.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Wombats (three living species)" },
        { label: "Reference species", value: "Common wombat (Vombatus ursinus)" },
        { label: "Class", value: "Mammalia (marsupial)" },
        { label: "Diet", value: "Herbivore (grazer)" },
        { label: "Notable traits", value: "Powerful digger; cube-shaped droppings" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Koala Profile", href: "/animals/koala", description: "The wombat's closest relative" },
        { label: "Kangaroo Profile", href: "/animals/kangaroo" },
        { label: "Platypus Profile", href: "/animals/platypus" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.wombat}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
