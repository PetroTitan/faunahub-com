import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cobra";
const TITLE = "Cobra — Profile, Habitat, Behavior & Hood";
const DESC =
  "Explore cobras (genus Naja and relatives): venomous, hood-spreading elapid snakes of Africa and Asia, including the Indian cobra and king cobra, with a careful educational overview.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("cobra"),
});

export default function CobraPage() {
  return (
    <AnimalProfileLayout
      commonName="Cobra"
      scientificName="genus Naja and relatives"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Snake", "Venomous"]}
      image={getAnimalImage("cobra") ?? undefined}
      galleryImages={getAnimalGalleryImages("cobra")}
      sources={ANIMAL_SOURCES.cobra}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Cobras are venomous snakes best known for the distinctive
            &ldquo;hood&rdquo; they spread by flaring loose neck ribs when alarmed.
            Most true cobras belong to the genus <em>Naja</em>, within the elapid
            family (Elapidae), and are found across Africa and Asia. The animal
            shown here is the Indian cobra (<em>Naja naja</em>), a reference for
            this group-level overview.
          </p>
          <p>
            This is an educational profile. Cobras are venomous wild animals;
            they should only ever be observed from a safe distance and never
            handled or approached. This page does not provide medical or
            first-aid guidance.
          </p>
          <p>
            <strong>Conservation note:</strong> status varies by species — some
            cobras are widespread while others face pressures from habitat loss
            and persecution. Verify specifics at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Cobras occupy a wide range of habitats across Africa and Asia,
          including grassland, scrub, forest, farmland, and the edges of
          settlements. Many species are adaptable and may live near people,
          where rodents and other prey are abundant.
        </p>
      }
      diet={
        <p>
          Cobras are carnivores that prey on small vertebrates — rodents, frogs,
          lizards, birds, and other snakes, depending on the species. Like other
          elapids, they use venom delivered through fixed front fangs to subdue
          prey.
        </p>
      }
      behavior={
        <p>
          When threatened, a cobra often rears up and spreads its hood as a
          warning display, and some species can also hiss loudly or, in a few
          cases, spit venom defensively. Despite their fearsome reputation,
          cobras generally prefer to avoid confrontation and will retreat if
          given the chance. They are most active in warmer parts of the day or at
          dusk depending on species and climate.
        </p>
      }
      humanInteraction={
        <p>
          Cobras feature prominently in the culture and folklore of their range,
          and they also help control rodents. Conflict with people occurs mainly
          where habitats overlap. From a conservation standpoint, habitat loss and
          killing out of fear are the main concerns. For current status, consult
          authoritative sources such as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "What is a cobra's hood?",
          answer:
            "The hood is formed when a cobra spreads elongated ribs in its neck, stretching the loose skin into a broad, flattened shape. It is mainly a defensive display that makes the snake look larger and signals a warning to potential threats.",
        },
        {
          question: "Are all cobras the same species?",
          answer:
            "No. \"Cobra\" is a common name covering several species, most in the genus Naja (true cobras), plus relatives such as the king cobra, which is in its own genus. They share the hooding behaviour but differ in size, range, and details of their venom.",
        },
        {
          question: "What do cobras eat?",
          answer:
            "Cobras are carnivores, preying on rodents, amphibians, lizards, birds, and other snakes depending on the species. They are important predators of small animals in their habitats.",
        },
        {
          question: "What should I do if I see a cobra?",
          answer:
            "Keep well away and do not attempt to approach, handle, or corner it — give the animal space to move off. This page is educational only and does not provide medical or first-aid advice; for any snakebite or emergency, contact local emergency and medical services.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Naja (true cobras) & relatives" },
        { label: "Reference species", value: "Naja naja (Indian cobra)" },
        { label: "Class", value: "Reptilia" },
        { label: "Family", value: "Elapidae" },
        { label: "Diet", value: "Carnivore" },
        { label: "Venom", value: "Yes — venomous (observe from distance)" },
        { label: "Signature trait", value: "Spreads a hood when threatened" },
        { label: "Range", value: "Africa and Asia" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Snake Profile", href: "/animals/snake", description: "Snakes as a whole (Serpentes)" },
        { label: "Python Profile", href: "/animals/python", description: "Large non-venomous constrictors" },
        { label: "Anaconda Profile", href: "/animals/anaconda", description: "A giant constrictor" },
        { label: "Mongoose Profile", href: "/animals/mongoose", description: "A predator that tackles snakes" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
