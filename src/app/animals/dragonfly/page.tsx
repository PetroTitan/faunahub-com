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

const title = "Dragonfly — Profile, Habitat, Diet & Behavior";
const description =
  "Dragonflies are fast-flying predatory insects with aquatic larvae. A group-level overview of Anisoptera: wetland habitats, hunting, and life cycle.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/dragonfly",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("dragonfly"),
});

export default function DragonflyPage() {
  return (
    <AnimalProfileLayout
      commonName="Dragonfly"
      pageTitle={title}
      description={description}
      path="/animals/dragonfly"
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Predator", "Invertebrate"]}
      image={getAnimalImage("dragonfly") ?? undefined}
      galleryImages={getAnimalGalleryImages("dragonfly")}
      factsHeaderNote="“Dragonfly” covers many species in the infraorder Anisoptera. The reference shown is a scarlet skimmer. Closely related damselflies (suborder Zygoptera) are slimmer and hold their wings differently."
      overview={
        <>
          <p>
            Dragonflies are fast-flying predatory insects of the infraorder
            Anisoptera, within the order Odonata. There are thousands of species
            worldwide. This page is a group-level overview; a scarlet skimmer is
            shown as a familiar reference. Adults are agile aerial hunters with
            two pairs of large, independently moving wings and very large eyes,
            and the young (larvae) develop underwater.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Dragonflies are strongly associated with fresh water, because their
            larvae live in ponds, lakes, streams, marshes, and other wetlands.
            Adults are often seen near water but may range more widely to feed.
            They occur on every continent except Antarctica, and the presence of
            a healthy dragonfly community is often taken as a sign of good water
            quality. Specific habitat needs vary by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Dragonflies are predators at every active stage. Adults catch other
            flying insects — including mosquitoes, flies, and midges — on the
            wing, and are considered highly effective aerial hunters. The
            aquatic larvae are also voracious predators, taking aquatic
            invertebrates and sometimes small fish or tadpoles. This makes
            dragonflies useful natural controllers of insect populations.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Adult dragonflies are exceptional fliers, able to hover, change
            direction sharply, and even fly backwards, using their two pairs of
            wings independently. Many are territorial, especially males
            patrolling stretches of water. The life cycle runs from egg to
            aquatic larva (which may live underwater for months or years) to
            winged adult; unlike butterflies, dragonflies do not form a pupa.
            Behaviour varies between species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Dragonflies are generally regarded as beneficial because they prey
            on biting insects and serve as indicators of wetland health. They
            do not sting and are harmless to people. Some species are sensitive
            to the loss or pollution of wetlands, so habitat protection matters
            for them. Conservation status varies by species and should be
            checked against current sources rather than assumed.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Dragonflies have a long, often brightly coloured body, two pairs
                of strong, net-veined wings, and very large compound eyes that
                may cover much of the head. At rest, most dragonflies hold their
                wings out flat to the sides. Their close relatives, the
                damselflies, are typically smaller and more slender and usually
                fold their wings along the body at rest — a handy way to tell
                the two apart.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Dragonflies share the order Odonata with damselflies, which are
          slimmer and hold their wings closed at rest. Both are unrelated to the
          butterfly covered separately on FaunaHub, despite all being flying
          insects. Some other insects, such as antlions and lacewings, have
          net-veined wings but belong to different orders.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a dragonfly and a damselfly?",
          answer:
            "Both belong to the order Odonata. Dragonflies are generally larger and stronger fliers and rest with their wings spread flat, while damselflies are slimmer and usually fold their wings along the body at rest. Their eyes also differ — dragonfly eyes are large and often meet on top of the head.",
        },
        {
          question: "Do dragonflies bite or sting people?",
          answer:
            "Dragonflies do not sting and are harmless to people. They are predators of other insects, including mosquitoes and flies, which makes them beneficial to have around wetlands and gardens.",
        },
        {
          question: "Where do baby dragonflies live?",
          answer:
            "Dragonfly larvae are aquatic, living in ponds, streams, and other fresh water where they hunt small aquatic animals. They can spend months or even years underwater before emerging and transforming into winged adults.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Dragonflies (infraorder Anisoptera)" },
        { label: "Order", value: "Odonata (with damselflies)" },
        { label: "Type", value: "Insect (invertebrate)" },
        { label: "Diet", value: "Predator (other insects)" },
        { label: "Larvae", value: "Aquatic, also predatory" },
        { label: "Indicator", value: "Often a sign of healthy wetlands" },
        { label: "Conservation", value: "Varies by species — verify per species" },
      ]}
      relatedLinks={[
        { label: "Butterfly Profile", href: "/animals/butterfly", description: "Another familiar flying insect" },
        { label: "Bee Profile", href: "/animals/bee" },
        { label: "Frog Profile", href: "/animals/frog", description: "Shares wetland habitats" },
        { label: "Animal Encyclopedia — Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.dragonfly}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
