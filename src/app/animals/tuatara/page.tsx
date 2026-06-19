import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tuatara";
const TITLE = "Tuatara — Profile, Habitat, Diet & Why It's Unique";
const DESC =
  "Explore the tuatara (Sphenodon punctatus): a reptile from New Zealand that is the sole survivor of an ancient order, often called a living fossil, with a famously slow pace of life.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("tuatara"),
});

export default function TuataraPage() {
  return (
    <AnimalProfileLayout
      commonName="Tuatara"
      scientificName="Sphenodon punctatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Rhynchocephalia", "Living fossil"]}
      image={getAnimalImage("tuatara") ?? undefined}
      galleryImages={getAnimalGalleryImages("tuatara")}
      sources={ANIMAL_SOURCES.tuatara}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The tuatara (<em>Sphenodon punctatus</em>) is a remarkable reptile
            found only in New Zealand. Though lizard-like in appearance, it is not
            a lizard: it is the sole surviving member of an ancient order,
            Rhynchocephalia, whose other members died out long ago. For this reason
            the tuatara is often described as a &ldquo;living fossil.&rdquo;
          </p>
          <p>
            Tuatara are slow-living animals, with a low body temperature, slow
            growth, and exceptional longevity. They are a taonga (treasure) in
            New Zealand and a flagship for the conservation of the country&apos;s
            unique wildlife.
          </p>
          <p>
            <strong>Conservation note:</strong> tuatara survive mainly on
            predator-free offshore islands and in protected sanctuaries, having
            disappeared from the mainland under pressure from introduced predators.
            Verify current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Tuatara live in cool temperate habitats on offshore New Zealand islands
          and in fenced or island sanctuaries, often in coastal forest and
          scrub. They frequently share burrows dug by seabirds, sheltering by day
          and emerging at night.
        </p>
      }
      diet={
        <p>
          Tuatara are carnivores that feed on invertebrates such as beetles,
          crickets, and the large insects called wētā, along with occasional small
          vertebrates, eggs, and chicks. Their slow metabolism means they can do
          well on relatively infrequent meals.
        </p>
      }
      behavior={
        <p>
          Tuatara are mainly nocturnal and active at surprisingly low temperatures
          compared with most reptiles. They grow slowly, mature late, and can live
          for many decades — among the longest-lived reptiles. They possess a
          well-developed &ldquo;parietal eye,&rdquo; a light-sensitive structure on
          top of the head that is most visible in young animals.
        </p>
      }
      humanInteraction={
        <p>
          The tuatara&apos;s decline on mainland New Zealand was driven largely by
          introduced mammalian predators and habitat loss. Conservation relies on
          predator-free islands, sanctuaries, and careful management, and it is a
          species of high cultural and scientific importance. For current status,
          consult authoritative sources such as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Is a tuatara a lizard?",
          answer:
            "No. Although it looks lizard-like, the tuatara is not a lizard. It is the only living member of an ancient reptile order, Rhynchocephalia, which is distinct from the lizards and snakes (Squamata). This is why the tuatara is so scientifically special.",
        },
        {
          question: "Why is the tuatara called a living fossil?",
          answer:
            "Because it is the last survivor of a once-widespread group of reptiles that flourished alongside the dinosaurs and otherwise died out. Studying the tuatara offers a window into a very old branch of reptile evolution, though the animal itself is fully modern and adapted to its environment.",
        },
        {
          question: "How long do tuatara live?",
          answer:
            "Tuatara are exceptionally long-lived, with lifespans measured in many decades; they grow slowly and mature late. Precise longevity is hard to pin down but they are among the longest-lived reptiles.",
        },
        {
          question: "Where can tuatara be found?",
          answer:
            "Only in New Zealand, mainly on predator-free offshore islands and in protected sanctuaries. They vanished from the mainland under pressure from introduced predators, so their survival depends on careful conservation management.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Sphenodon punctatus" },
        { label: "Class", value: "Reptilia" },
        { label: "Order", value: "Rhynchocephalia (sole survivor)" },
        { label: "Diet", value: "Carnivore (mainly invertebrates)" },
        { label: "Notable for", value: "“Living fossil”; long lifespan" },
        { label: "Activity", value: "Mainly nocturnal; cool-tolerant" },
        { label: "Range", value: "New Zealand (islands & sanctuaries)" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Iguana Profile", href: "/animals/iguana", description: "A true lizard, for contrast" },
        { label: "Gecko Profile", href: "/animals/gecko", description: "Another reptile group" },
        { label: "Komodo Dragon Profile", href: "/animals/komodo-dragon", description: "The largest living lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Oceania fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
