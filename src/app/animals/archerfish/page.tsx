import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/archerfish";
const TITLE = "Archerfish — Profile, the Fish That Shoots Down Prey";
const DESC =
  "Explore archerfish (family Toxotidae): coastal and mangrove fish that knock insects off overhanging plants by spitting precise jets of water — sharpshooters that correct for light refraction.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("archerfish"),
});

export default function ArcherfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Archerfish"
      scientificName="Toxotes jaculatrix"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Brackish", "Sharpshooter"]}
      image={getAnimalImage("archerfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("archerfish")}
      sources={ANIMAL_SOURCES.archerfish}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Archerfish (family Toxotidae) are remarkable fish of coastal waters, mangroves,
            and estuaries from India to Australia, famous for a one-of-a-kind hunting method:
            they shoot down insects and other small prey resting on overhanging plants by
            spitting a precise jet of water. The banded archerfish
            (<em>Toxotes jaculatrix</em>), shown here, is a silvery, deep-bodied fish marked
            with bold black bars and a sharply upturned mouth built for aiming upward.
          </p>
          <p>
            What makes the feat astonishing is the skill behind it: an archerfish must account
            for the way light bends at the water&apos;s surface to hit a target it sees from
            below at an angle — and it can learn to improve its aim.
          </p>
          <p>
            <strong>Note:</strong> there are several archerfish species; details here use the
            banded archerfish as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Archerfish live mainly in brackish water — mangrove forests, estuaries, and coastal
          streams — across South and Southeast Asia and into northern Australia, with some
          venturing into fresh or fully marine water. They favour shaded waters with
          overhanging vegetation, which provides both cover and the insect prey they target
          from below.
        </p>
      }
      diet={
        <p>
          Archerfish are carnivores that eat insects and other small invertebrates, plus
          small fish. They take much of their prey from above the water — knocking insects,
          spiders, and the like off overhanging leaves and branches with water jets — and they
          will also snap up prey at or below the surface, and even leap to grab insects within
          reach.
        </p>
      }
      behavior={
        <p>
          To shoot, an archerfish presses its tongue against a groove in the roof of its mouth
          to form a barrel, then snaps its gill covers shut to fire a powerful jet of water at
          prey above the surface. Hitting a target seen through the water&apos;s surface means
          compensating for refraction (the bending of light), and archerfish do this with
          impressive accuracy, knocking prey down to be eaten. They can learn and refine their
          aim, and even fish that have only watched others can improve — a notable feat for a
          fish. Archerfish often hunt in groups and may race to grab a downed insect.
        </p>
      }
      humanInteraction={
        <p>
          Archerfish are popular in public aquariums and with hobbyists for their unique
          spitting behaviour, and they are studied by scientists interested in animal aiming,
          learning, and vision. In the wild they depend on healthy mangroves and estuaries, so
          coastal habitat loss is the main concern; many remain reasonably widespread. Consult
          authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "How does an archerfish shoot water?",
          answer:
            "It turns its mouth into a water gun. The archerfish presses its tongue against a groove in the roof of its mouth to form a narrow barrel, then rapidly closes its gill covers to push out a focused jet of water. Aimed at an insect on an overhanging leaf, the jet knocks the prey down onto the water, where the fish eats it.",
        },
        {
          question: "How does the archerfish aim so accurately?",
          answer:
            "It has to correct for refraction — the bending of light as it passes between air and water — because it views its above-water target at an angle from below. Despite this optical challenge, archerfish hit prey with great precision, and they can learn to improve their aim with experience, making them surprisingly skilled marksmen.",
        },
        {
          question: "What do archerfish eat?",
          answer:
            "They are carnivores that eat insects and other small invertebrates, and some small fish. Much of their food comes from above the water — insects and spiders knocked off overhanging plants with water jets — but they also take prey at the surface and can leap to grab insects within reach.",
        },
        {
          question: "Where do archerfish live?",
          answer:
            "Mostly in brackish coastal habitats — mangroves, estuaries, and coastal streams — from South and Southeast Asia to northern Australia, with some entering fresh or fully marine water. They like shaded waters with overhanging vegetation, which supplies both shelter and the above-water prey they shoot down.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Toxotes jaculatrix (banded archerfish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Signature trait", value: "Shoots prey with water jets" },
        { label: "Skill", value: "Corrects for light refraction; can learn" },
        { label: "Diet", value: "Insects, invertebrates & small fish" },
        { label: "Habitat", value: "Mostly brackish mangroves & estuaries" },
        { label: "Range", value: "South/SE Asia to N. Australia" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Mudskipper Profile", href: "/animals/mudskipper", description: "Another remarkable coastal fish" },
        { label: "Pufferfish Profile", href: "/animals/pufferfish", description: "Another clever coastal fish" },
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "Another small reef/coastal fish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Asian/Australian coastal fauna in context" },
      ]}
    />
  );
}
