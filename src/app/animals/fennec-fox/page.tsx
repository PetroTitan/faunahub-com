import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/fennec-fox";
const TITLE = "Fennec Fox — Profile, the Tiny Desert Fox with Giant Ears";
const DESC =
  "Explore the fennec fox (Vulpes zerda): the smallest fox in the world, a Sahara desert specialist whose huge ears shed heat and detect prey beneath the sand.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("fennec-fox"),
});

export default function FennecFoxPage() {
  return (
    <AnimalProfileLayout
      commonName="Fennec Fox"
      scientificName="Vulpes zerda"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Desert", "Fox"]}
      image={getAnimalImage("fennec-fox") ?? undefined}
      galleryImages={getAnimalGalleryImages("fennec-fox")}
      sources={ANIMAL_SOURCES["fennec-fox"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The fennec fox (<em>Vulpes zerda</em>) is the smallest of all foxes — a delicate,
            sandy-coloured desert animal famous for its enormous ears, which can be a third or
            more of its body length. Native to the Sahara and other deserts of North Africa,
            it is exquisitely adapted to life in hot, dry sand, and its oversized ears, pale
            fur, and furry feet are all part of that survival kit.
          </p>
          <p>
            Those ears do double duty: they radiate body heat to help keep the fox cool, and
            they give it extraordinary hearing for detecting insects and small prey moving
            beneath the sand.
          </p>
          <p>
            <strong>Note:</strong> details here cover the fennec fox as a species; treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Fennec foxes live in the sandy deserts and arid regions of North Africa, including
          the Sahara and the Sinai and Arabian fringes. They are true desert specialists,
          coping with extreme heat by day and cold at night, and they dig extensive burrows in
          the sand for shelter, where temperatures stay more stable and humid than at the
          scorching surface.
        </p>
      }
      diet={
        <p>
          Fennec foxes are omnivores that eat insects, small rodents, birds, eggs, reptiles,
          and plant material such as fruit, roots, and leaves. They are skilled diggers,
          listening with their huge ears for prey under the sand and then digging it out. Much
          of the moisture they need comes from their food, an important adaptation in a habitat
          where free water is scarce.
        </p>
      }
      behavior={
        <p>
          Fennec foxes are mainly nocturnal, spending the blistering daytime heat in their cool
          burrows and emerging at night to forage. The big ears not only sharpen their hearing
          but act as radiators, shedding excess heat, while thick fur on the soles of their feet
          protects against hot sand and helps them move over loose dunes; their pale coat
          reflects sunlight and provides camouflage. They are social little foxes, often living
          in family groups and communicating with a range of yaps, chatters, and other calls,
          and they are agile diggers and surprisingly good jumpers.
        </p>
      }
      humanInteraction={
        <p>
          Fennec foxes are captured for the exotic pet trade and for sale to tourists, and they
          are hunted in some areas, but they remain fairly widespread across their desert range
          and are not currently considered globally threatened. As wild desert animals with
          specialised needs, they are not suited to life as pets, and wild populations are best
          conserved by protecting their habitat. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why does the fennec fox have such big ears?",
          answer:
            "The fennec's oversized ears serve two key desert functions. First, they radiate body heat, helping the small fox stay cool in scorching conditions. Second, they give it exceptional hearing — sharp enough to detect insects and small animals moving under the sand, which the fox then digs out. The big ears are a perfect example of desert adaptation.",
        },
        {
          question: "How big is a fennec fox?",
          answer:
            "Tiny — it's the smallest fox in the world. A fennec fox weighs only around a kilogram or so and could sit comfortably in two hands, with ears that are huge relative to its small body. Its diminutive size, along with its pale fur and furry feet, helps it cope with the harsh desert environment.",
        },
        {
          question: "How does the fennec fox survive in the desert?",
          answer:
            "With a whole suite of adaptations: huge heat-shedding ears, pale heat-reflecting fur, furry foot-soles that grip hot sand, mostly nocturnal habits, and deep cool burrows to escape the daytime heat. It also gets much of its water from its food, so it can survive where free water is scarce.",
        },
        {
          question: "Do fennec foxes make good pets?",
          answer:
            "Not really. Although they're small and appealing, fennec foxes are wild desert animals with specialised needs, nocturnal habits, and a tendency to dig and vocalise loudly. They're captured for the pet trade, but they don't thrive in typical homes, and ownership is regulated in many places. They're best left in the wild or in proper care.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Vulpes zerda" },
        { label: "Class", value: "Mammalia (fox; canid)" },
        { label: "Claim to fame", value: "Smallest fox in the world" },
        { label: "Signature trait", value: "Huge heat-shedding ears" },
        { label: "Diet", value: "Omnivore (insects, rodents, plants)" },
        { label: "Activity", value: "Nocturnal; lives in burrows" },
        { label: "Adaptations", value: "Pale fur, furry feet, low water need" },
        { label: "Range", value: "Sahara & North African deserts" },
      ]}
      relatedLinks={[
        { label: "Fox Profile", href: "/animals/fox", description: "Foxes as a group" },
        { label: "Caracal Profile", href: "/animals/caracal", description: "Another big-eared dryland hunter" },
        { label: "Cheetah Profile", href: "/animals/cheetah", description: "Another African dryland predator" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Desert fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
