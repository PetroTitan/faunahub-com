import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/fossa";
const TITLE = "Fossa — Profile, Madagascar's Top Predator & Diet";
const DESC =
  "Explore the fossa (Cryptoprocta ferox): Madagascar's largest carnivore — a cat-like, lemur-hunting mammal related to mongooses, agile in the trees and Vulnerable in the wild.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("fossa"),
});

export default function FossaPage() {
  return (
    <AnimalProfileLayout
      commonName="Fossa"
      scientificName="Cryptoprocta ferox"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Carnivore", "Madagascar"]}
      image={getAnimalImage("fossa") ?? undefined}
      galleryImages={getAnimalGalleryImages("fossa")}
      sources={ANIMAL_SOURCES.fossa}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The fossa (<em>Cryptoprocta ferox</em>) is the largest carnivorous mammal on
            Madagascar and the island&apos;s top predator. With a slender, muscular body,
            short reddish-brown fur, a small cat-like head, and a tail nearly as long as
            its body, it looks somewhat like a cross between a cat and a mongoose — but it
            is neither. The fossa belongs to a uniquely Malagasy carnivore family
            (Eupleridae) whose closest relatives are the mongooses.
          </p>
          <p>
            Superbly agile, the fossa is one of the few predators able to hunt lemurs
            through the trees, making it a key part of Madagascar&apos;s ecosystems.
          </p>
          <p>
            <strong>Conservation note:</strong> the fossa is assessed as Vulnerable,
            threatened mainly by the loss of Madagascar&apos;s forests. Verify current
            status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          The fossa lives only on Madagascar, where it occupies forested habitats across
          the island — from rainforest to dry deciduous forest — and needs large areas of
          intact forest to support its wide-ranging, predatory lifestyle. As Madagascar&apos;s
          forests shrink and fragment, suitable fossa habitat is declining.
        </p>
      }
      diet={
        <p>
          The fossa is a carnivore that preys on a wide range of animals, with lemurs
          forming a major part of its diet — it is the most important lemur predator. It
          also takes other mammals, birds, reptiles, frogs, and insects. Powerful and
          versatile, the fossa hunts both in the trees and on the ground, by day or night.
        </p>
      }
      behavior={
        <p>
          Fossas are mostly solitary and are remarkable climbers: flexible ankles let them
          descend trunks head-first and move confidently through the canopy, and the long
          tail aids balance. They are active at various times of day and night and cover
          large territories. As Madagascar&apos;s apex mammalian predator, the fossa exerts
          a strong influence on lemur and other animal populations.
        </p>
      }
      humanInteraction={
        <p>
          Fossas are sometimes feared by people and may be persecuted, particularly when
          they take domestic poultry, and they are also affected by hunting. Their biggest
          threat, though, is the rapid loss and fragmentation of Madagascar&apos;s forests,
          which reduces both their habitat and their lemur prey. Protecting those forests
          is essential. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Is a fossa a cat?",
          answer:
            "No, although it looks and moves somewhat like one. The fossa belongs to a carnivore family found only on Madagascar (Eupleridae); its closest relatives are mongooses. Its cat-like appearance is an example of similar lifestyles producing a similar body, not close kinship with cats.",
        },
        {
          question: "What does the fossa eat?",
          answer:
            "The fossa is Madagascar's top predator and a versatile carnivore. Lemurs make up a large part of its diet — it is the main lemur predator — but it also hunts other mammals, birds, reptiles, frogs, and insects, both in trees and on the ground.",
        },
        {
          question: "How can a fossa hunt lemurs in the trees?",
          answer:
            "The fossa is an exceptional climber. Its flexible ankle joints let it run down tree trunks head-first and move through the canopy, while its very long tail helps with balance. This agility makes it one of the few predators able to pursue lemurs high in the trees.",
        },
        {
          question: "Is the fossa endangered?",
          answer:
            "It is assessed as Vulnerable. The main threat is the loss and fragmentation of Madagascar's forests, which reduces both fossa habitat and lemur prey; hunting and persecution add further pressure. Protecting Madagascar's forests is key, and current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cryptoprocta ferox" },
        { label: "Class", value: "Mammalia (carnivore)" },
        { label: "Family", value: "Eupleridae (Malagasy carnivores)" },
        { label: "Relatives", value: "Mongooses (not cats)" },
        { label: "Diet", value: "Carnivore (major lemur predator)" },
        { label: "Skill", value: "Agile climber; head-first descent" },
        { label: "Range", value: "Madagascar only" },
        { label: "IUCN Status", value: "Vulnerable (verify)" },
      ]}
      relatedLinks={[
        { label: "Lemur Profile", href: "/animals/lemur", description: "Its main prey, also Madagascar-only" },
        { label: "Mongoose Profile", href: "/animals/mongoose", description: "Its closest relatives" },
        { label: "Civet Profile", href: "/animals/civet", description: "Another cat-like carnivoran" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
