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

const title = "Meerkat — Profile, Habitat, Diet & Behavior";
const description =
  "The meerkat (Suricata suricatta) is a small, highly social mongoose of southern Africa. An educational profile of its desert habitat, cooperative behaviour, and diet.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/meerkat",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("meerkat"),
});

export default function MeerkatPage() {
  return (
    <AnimalProfileLayout
      commonName="Meerkat"
      scientificName="Suricata suricatta"
      pageTitle={title}
      description={description}
      path="/animals/meerkat"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Mongoose", "Wild"]}
      image={getAnimalImage("meerkat") ?? undefined}
      galleryImages={getAnimalGalleryImages("meerkat")}
      factsHeaderNote="The meerkat is a wild social mongoose of southern Africa — not a pet. This page is educational, not care advice; meerkats have complex social and welfare needs and are not suited to private keeping."
      overview={
        <>
          <p>
            The meerkat (<em>Suricata suricatta</em>) is a small, highly social
            member of the mongoose family, native to the dry regions of southern
            Africa. Famous for standing upright to watch for danger, meerkats live
            in cooperative groups (often called mobs or gangs) and are a classic
            example of social, group-living mammals. They are wild animals, not
            pets, despite their popularity in media.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Meerkats live in arid and semi-arid open country — savanna, scrub, and
            desert fringes — of southern Africa, including parts of the Kalahari.
            They dig and occupy extensive underground burrow systems that provide
            shelter from heat, cold, and predators. Their range is centred on
            southern Africa; details should be confirmed against current sources.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Meerkats are mainly insectivores, foraging for insects and other
            invertebrates, and also eating small vertebrates, eggs, and some plant
            material. They are skilled at digging prey from the ground and can
            handle some venomous prey such as scorpions. This page describes
            general feeding ecology, not care or feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Meerkats are intensely social and cooperative: group members take
            turns acting as sentinels, standing upright to scan for predators and
            giving alarm calls, while others forage or care for young. They share
            burrows and help raise pups communally. This cooperative behaviour is
            widely studied. These are complex social behaviours of wild animals,
            not reasons to keep meerkats as pets.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Meerkats are wild animals with complex social and welfare needs, and
            they are not suited to life as pets despite their appeal in films and
            television; private keeping can cause welfare problems and may be
            restricted. The meerkat is generally not considered globally
            threatened, but as always conservation status should be checked
            against current sources. This page is educational, not care or
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
                Meerkats are slender, small mammals with tan fur, darker patches
                around the eyes that reduce glare, dark-banded backs, large eyes
                and ears, and a thin tapering tail used for balance when standing.
                Their upright &quot;sentinel&quot; posture, on the hind legs and
                tail, is their most recognisable trait. Strong claws on the
                forefeet suit their digging and foraging lifestyle.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Meerkats are mongooses, in the family Herpestidae, related to other
          small carnivorans. They share a social, burrowing lifestyle with some
          other animals on FaunaHub, such as the meerkat-unrelated prairie-dog
          niche, but among site profiles they are most comparable in lifestyle to
          other cooperative, group-living mammals.
        </p>
      }
      faqs={[
        {
          question: "Why do meerkats stand upright?",
          answer:
            "Meerkats stand on their hind legs and tail as sentinels, scanning for predators while other group members forage. If a sentinel spots danger, it gives an alarm call so the group can react. It is a cooperative survival behaviour.",
        },
        {
          question: "Do meerkats make good pets?",
          answer:
            "No. Meerkats are wild, highly social animals with complex welfare needs that are difficult to meet in a home, and private keeping can be harmful and may be restricted. This page is educational, not care advice.",
        },
        {
          question: "What do meerkats eat?",
          answer:
            "Meerkats are mainly insectivores, digging up insects and other invertebrates and also eating small vertebrates, eggs, and some plant matter. They can tackle some venomous prey such as scorpions. This page describes general ecology rather than care instructions.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Suricata suricatta" },
        { label: "Family", value: "Herpestidae (mongooses)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Mainly insectivore" },
        { label: "Social structure", value: "Highly social, cooperative groups" },
        { label: "Range", value: "Arid southern Africa" },
        { label: "Conservation", value: "Verify current status on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Badger Profile", href: "/animals/badger", description: "Another social burrowing carnivoran" },
        { label: "Hyena Profile", href: "/animals/hyena" },
        { label: "Otter Profile", href: "/animals/otter" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.meerkat}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
