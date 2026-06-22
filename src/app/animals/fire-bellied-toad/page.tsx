import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/fire-bellied-toad";
const TITLE = "Fire-Bellied Toad — Profile, the Frog That Flashes a Warning Belly";
const DESC =
  "Explore fire-bellied toads (genus Bombina): small Eurasian frogs that arch their backs to flash a vivid red-and-black belly — a warning of the toxins in their skin.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("fire-bellied-toad"),
});

export default function FireBelliedToadPage() {
  return (
    <AnimalProfileLayout
      commonName="Fire-Bellied Toad"
      scientificName="genus Bombina"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Eurasia"]}
      image={getAnimalImage("fire-bellied-toad") ?? undefined}
      galleryImages={getAnimalGalleryImages("fire-bellied-toad")}
      sources={ANIMAL_SOURCES["fire-bellied-toad"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Fire-bellied toads (genus <em>Bombina</em>) are small, semi-aquatic frogs of Europe
            and Asia, drab and warty above — usually green or brown — but hiding a spectacular
            secret underneath: a vivid red, orange, or yellow belly boldly mottled with black.
            The oriental fire-bellied toad (<em>Bombina orientalis</em>), shown here, is the
            best-known species and a popular display animal.
          </p>
          <p>
            That bright belly is a warning. When threatened, a fire-bellied toad performs a
            distinctive arching display — bending its back, raising its limbs, and even flipping
            to flash the warning colours — signalling that its skin carries irritating, toxic
            secretions and is best left alone.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;fire-bellied toad&rdquo; covers several Bombina species;
            details here use the oriental fire-bellied toad as a reference. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Fire-bellied toads live in and around still and slow fresh water across Eurasia — ponds,
          ditches, marshes, flooded meadows, slow streams, and pools — spending much of their time
          floating at the surface or sitting at the water&apos;s edge. The oriental fire-bellied
          toad ranges across parts of northeastern Asia, while other species live in Europe; all
          favour shallow, vegetated water.
        </p>
      }
      diet={
        <p>
          Fire-bellied toads are carnivores, eating insects, worms, snails, and other small
          invertebrates both in the water and on land. They are sit-and-wait feeders that snap up
          small prey passing nearby, and their varied diet of wetland invertebrates suits their
          shallow-water lifestyle.
        </p>
      }
      behavior={
        <p>
          The hallmark of these frogs is the &ldquo;Unkenreflex&rdquo; — a defensive arching
          display in which a startled toad bows its back, lifts and twists its limbs, and may flip
          partly over to reveal the bright belly, advertising the toxins in its skin. Those
          secretions can irritate the eyes and mouth of a predator (and a handler), reinforcing
          the warning. Fire-bellied toads are largely day-active and highly aquatic, floating with
          limbs splayed, and males give a soft, repeated barking or chiming call during the
          breeding season. They hibernate over winter on land or in mud.
        </p>
      }
      humanInteraction={
        <p>
          Fire-bellied toads are commonly kept in the amphibian hobby, prized for their colours
          and hardy, active nature. Because their skin produces irritating toxins, they should be
          handled as little as possible and with clean, wet hands, and hands should be washed
          afterwards — never touch your eyes or mouth after handling one. In the wild, like other
          amphibians, they are affected by wetland loss, pollution, and disease; many remain
          fairly widespread while some populations decline. Consult AmphibiaWeb and the IUCN Red
          List for status.
        </p>
      }
      faqs={[
        {
          question: "Why does the fire-bellied toad have a bright belly?",
          answer:
            "The vivid red-and-black (or orange/yellow) belly is a warning signal. The toad's skin produces irritating, toxic secretions, and the bold underside advertises this to predators. The drab top keeps it camouflaged, while the hidden bright belly is flashed only when needed — a classic example of warning coloration.",
        },
        {
          question: "What is the 'Unkenreflex'?",
          answer:
            "It's the fire-bellied toad's signature defensive display. When threatened, the toad arches its back, raises and twists its legs, and may flip partly over to reveal its brightly coloured belly — warning a predator about the toxins in its skin. The name comes from the German word for these toads ('Unke').",
        },
        {
          question: "Are fire-bellied toads poisonous to touch?",
          answer:
            "Their skin secretions are toxic and can irritate the eyes, mouth, and broken skin, so they're best handled as little as possible — with clean, wet hands, washing well afterward, and never touching your face in between. They aren't dangerous to admire, but the toxins are a genuine reason to limit handling, especially for the toad's sake and yours.",
        },
        {
          question: "What do fire-bellied toads eat?",
          answer:
            "They're carnivores that eat insects, worms, snails, and other small invertebrates, both in the water and along the shore. As sit-and-wait feeders, they snap up small prey that comes within reach, suiting their highly aquatic, shallow-water way of life.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Bombina" },
        { label: "Reference species", value: "Bombina orientalis (oriental)" },
        { label: "Class", value: "Amphibia (frog)" },
        { label: "Signature trait", value: "Bright warning belly; arching display" },
        { label: "Defence", value: "Toxic, irritating skin secretions" },
        { label: "Diet", value: "Carnivore (insects, worms, snails)" },
        { label: "Lifestyle", value: "Highly aquatic; day-active" },
        { label: "Range", value: "Europe & Asia" },
      ]}
      relatedLinks={[
        { label: "Poison Dart Frog Profile", href: "/animals/poison-dart-frog", description: "Other frogs with warning colours & toxins" },
        { label: "Tomato Frog Profile", href: "/animals/tomato-frog", description: "Another warning-coloured frog" },
        { label: "Toad Profile", href: "/animals/toad", description: "Toads as a group" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Eurasian wetland fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
