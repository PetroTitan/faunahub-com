import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/zorilla";
const TITLE = "Zorilla — Profile of Africa's Skunk-like Striped Polecat";
const DESC =
  "Meet the zorilla or striped polecat (Ictonyx striatus): an African mustelid that looks and smells like a skunk through convergent evolution, but is not a skunk at all.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("zorilla"),
});

export default function ZorillaPage() {
  return (
    <AnimalProfileLayout
      commonName="Zorilla"
      scientificName="Ictonyx striatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Mustelid", "Africa"]}
      image={getAnimalImage("zorilla") ?? undefined}
      galleryImages={getAnimalGalleryImages("zorilla")}
      sources={ANIMAL_SOURCES.zorilla}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            The zorilla (<em>Ictonyx striatus</em>), also called the striped polecat or African polecat, is
            a small, weasel-shaped carnivore of sub-Saharan Africa. With its bold black-and-white striped
            coat and bushy tail, it looks strikingly like a North American skunk — but the resemblance is a
            case of convergent evolution, not close kinship.
          </p>
          <p>
            The zorilla is a true mustelid, related to weasels, polecats, and badgers, whereas skunks
            belong to a separate family (Mephitidae). Both, however, hit on the same defensive playbook:
            warning colours plus a foul-smelling spray from glands near the base of the tail.
          </p>
          <p>
            Widespread and adaptable, the zorilla is listed as Least Concern on the IUCN Red List, though
            it is rarely seen because of its nocturnal, solitary habits.
          </p>
        </>
      }
      habitat={
        <p>
          The zorilla ranges across much of sub-Saharan Africa, occupying a broad variety of habitats from
          savanna and grassland to semi-desert and rocky country, and it tolerates areas near farmland. It
          shelters by day in burrows, rock crevices, or dense cover, emerging after dark to forage.
        </p>
      }
      diet={
        <p>
          Zorillas are mainly carnivorous, feeding on insects and other invertebrates, small rodents,
          reptiles, amphibians, birds, and eggs. They hunt largely by smell, digging and probing for prey
          in soil and crevices with their strong claws.
        </p>
      }
      behavior={
        <p>
          The zorilla is nocturnal and solitary, patrolling a home range it marks with scent. Its black-
          and-white pattern is a warning signal (aposematism): when threatened it can raise its fur, arch
          its back, and, as a last resort, release a pungent secretion from its anal glands — one of the
          reasons it is reputed to be among the smelliest animals in Africa. It may also play dead to
          deter predators.
        </p>
      }
      humanInteraction={
        <p>
          Zorillas are harmless to people and can even benefit farmers by eating rodents and insects. They
          are sometimes killed on roads or mistaken for skunks, and their scent makes them unwelcome
          neighbours, but the species remains common and is listed as Least Concern. Consult the IUCN Red
          List for current status.
        </p>
      }
      faqs={[
        {
          question: "Is the zorilla a skunk?",
          answer:
            "No. Although it looks and smells like a skunk, the zorilla is a true mustelid — related to weasels and polecats — while skunks belong to a separate family (Mephitidae). Their similar look and chemical defence are an example of convergent evolution, where unrelated animals evolve similar solutions.",
        },
        {
          question: "Does the zorilla really spray like a skunk?",
          answer:
            "Yes. As a last line of defence the zorilla can discharge a foul-smelling secretion from glands near the base of its tail, and its bold black-and-white pattern warns predators in advance. It is often described as one of the smelliest animals in Africa.",
        },
        {
          question: "What does the zorilla eat?",
          answer:
            "It is mainly carnivorous, eating insects and other invertebrates, small rodents, reptiles, amphibians, birds, and eggs, which it finds largely by scent and digs out with its claws.",
        },
        {
          question: "Is the zorilla endangered?",
          answer:
            "No. The zorilla is widespread and adaptable across sub-Saharan Africa and is listed as Least Concern on the IUCN Red List. Its secretive, nocturnal habits simply make it hard to spot.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ictonyx striatus" },
        { label: "Also called", value: "Striped polecat, African polecat" },
        { label: "Class", value: "Mammalia" },
        { label: "Family", value: "Mustelidae (not a skunk)" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "Defence", value: "Warning colours + foul anal-gland spray" },
        { label: "Active", value: "Nocturnal, solitary" },
        { label: "IUCN status", value: "Least Concern" },
      ]}
      relatedLinks={[
        { label: "Skunk Profile", href: "/animals/skunk", description: "The New World look-alike (a different family)" },
        { label: "Weasel Profile", href: "/animals/weasel", description: "A close mustelid relative" },
        { label: "Badger Profile", href: "/animals/badger", description: "Another digging mustelid" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African mammals in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
