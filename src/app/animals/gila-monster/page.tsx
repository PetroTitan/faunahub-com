import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/gila-monster";
const TITLE = "Gila Monster — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore the Gila monster (Heloderma suspectum): a slow-moving, venomous desert lizard of the southwestern US and Mexico, with beaded skin, in a careful educational overview.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("gila-monster"),
});

export default function GilaMonsterPage() {
  return (
    <AnimalProfileLayout
      commonName="Gila Monster"
      scientificName="Heloderma suspectum"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Venomous"]}
      image={getAnimalImage("gila-monster") ?? undefined}
      galleryImages={getAnimalGalleryImages("gila-monster")}
      sources={ANIMAL_SOURCES["gila-monster"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The Gila monster (<em>Heloderma suspectum</em>) is a large, stout,
            slow-moving lizard of the deserts of the southwestern United States and
            northwestern Mexico. It is one of the few venomous lizards and is
            instantly recognised by its bead-like scales and bold black-and-orange
            or pink patterning.
          </p>
          <p>
            This is an educational profile. The Gila monster is venomous but
            placid and reluctant to bite; it poses little risk if left alone, and
            should never be handled or provoked. This page does not provide medical
            or first-aid guidance.
          </p>
          <p>
            <strong>Conservation note:</strong> the Gila monster is protected in
            parts of its range and is affected by habitat loss and collection.
            Verify current status at iucnredlist.org and follow local protections.
          </p>
        </>
      }
      habitat={
        <p>
          Gila monsters live in desert and semi-desert habitats — scrubland, rocky
          foothills, and washes — across the Sonoran, Mojave, and Chihuahuan
          desert regions. They spend much of their lives in burrows and shelters,
          emerging mainly in milder conditions.
        </p>
      }
      diet={
        <p>
          Gila monsters are carnivores specialising in eggs and the young of small
          animals, along with small vertebrates. They can consume large meals
          relative to their size and store fat in their tail, allowing long periods
          between feedings — an adaptation to the sparse desert environment.
        </p>
      }
      behavior={
        <p>
          Gila monsters are slow and spend the great majority of their time
          underground or sheltering, surfacing for only a small part of the year.
          They are generally placid; their venom is used in defense rather than to
          kill prey, delivered through grooved teeth in a chewing bite. They are
          most active in spring and after rains.
        </p>
      }
      humanInteraction={
        <p>
          Because they are slow, secretive, and reluctant to bite, Gila monsters
          pose little danger to people who leave them alone. Their main threats are
          habitat loss and illegal collection, and they are legally protected in
          parts of their range. For current status, consult authoritative sources
          such as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Is the Gila monster venomous?",
          answer:
            "Yes. The Gila monster is one of a small number of venomous lizards. Its venom is used mainly in defense and is delivered through grooved teeth during a bite. The animal is slow and placid, however, and bites to people are rare and almost always the result of handling. This page is educational only and does not provide medical advice.",
        },
        {
          question: "Where do Gila monsters live?",
          answer:
            "They live in desert and semi-desert habitats of the southwestern United States and northwestern Mexico, including parts of the Sonoran, Mojave, and Chihuahuan deserts, spending much of their time in burrows.",
        },
        {
          question: "What do Gila monsters eat?",
          answer:
            "They specialise in eggs and the young of small animals, plus small vertebrates. They eat large meals infrequently and store fat in the tail, which helps them survive long gaps between feedings in the desert.",
        },
        {
          question: "Are Gila monsters endangered?",
          answer:
            "The Gila monster is affected by habitat loss and collection and is legally protected in parts of its range. Its precise conservation status should be checked against current IUCN Red List data and local regulations.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Heloderma suspectum" },
        { label: "Class", value: "Reptilia" },
        { label: "Order", value: "Squamata" },
        { label: "Type", value: "Venomous lizard" },
        { label: "Diet", value: "Carnivore (eggs, young, small prey)" },
        { label: "Venom", value: "Yes — defensive (do not handle)" },
        { label: "Habitat", value: "Desert & semi-desert" },
        { label: "Range", value: "SW United States & NW Mexico" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Komodo Dragon Profile", href: "/animals/komodo-dragon", description: "The largest living lizard" },
        { label: "Iguana Profile", href: "/animals/iguana", description: "A familiar lizard group" },
        { label: "Rattlesnake Profile", href: "/animals/rattlesnake", description: "Another venomous desert reptile" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American desert fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
