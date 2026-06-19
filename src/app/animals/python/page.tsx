import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/python";
const TITLE = "Python — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore pythons (family Pythonidae): non-venomous constricting snakes of Africa, Asia, and Australia, including some of the longest snakes in the world, in an educational overview.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("python"),
});

export default function PythonPage() {
  return (
    <AnimalProfileLayout
      commonName="Python"
      scientificName="family Pythonidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Snake", "Constrictor"]}
      image={getAnimalImage("python") ?? undefined}
      galleryImages={getAnimalGalleryImages("python")}
      sources={ANIMAL_SOURCES.python}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Pythons are non-venomous constricting snakes of the family Pythonidae,
            native to Africa, Asia, and Australia. The family includes some of the
            longest snakes in the world, such as the reticulated python, as well as
            smaller, widely recognised species. The animal shown here is the ball
            python (<em>Python regius</em>), a reference for this group-level
            overview.
          </p>
          <p>
            Rather than venom, pythons rely on powerful coils to subdue prey by
            constriction. They are an Old World group; the superficially similar
            boas are a separate, largely New World family.
          </p>
          <p>
            <strong>Conservation note:</strong> status varies by species — some
            pythons are widespread, while others face pressure from habitat loss
            and collection. Verify specifics at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Pythons occupy tropical and subtropical habitats including rainforest,
          savanna, grassland, scrub, and rocky areas across Africa, South and
          Southeast Asia, and Australia. Different species are ground-dwelling,
          arboreal, or semi-aquatic, reflecting the family&apos;s broad range.
        </p>
      }
      diet={
        <p>
          Pythons are carnivores that ambush or stalk prey and kill by
          constriction — coiling around an animal and tightening until it can no
          longer breathe. They eat mammals and birds suited to their size,
          swallow prey whole, and can go long periods between meals.
        </p>
      }
      behavior={
        <p>
          Most pythons are solitary and rely on camouflage and patience, lying in
          wait for prey. Unusually among snakes, females of many python species
          coil around their eggs and, in some, generate warmth by muscular
          shivering to help incubation. Activity patterns vary with species and
          climate.
        </p>
      }
      humanInteraction={
        <p>
          Pythons are widely kept and studied, and some species are affected by
          habitat loss and collection. In a few regions, pythons introduced
          outside their native range have become invasive and are managed as such.
          For current, species-specific status and regional context, consult
          authoritative sources.
        </p>
      }
      faqs={[
        {
          question: "Are pythons venomous?",
          answer:
            "No. Pythons are non-venomous. They subdue prey by constriction — coiling around it and tightening — rather than by injecting venom. They are not a venom threat, though large individuals are powerful animals and should be treated with respect.",
        },
        {
          question: "What is the difference between a python and a boa?",
          answer:
            "Both are large constrictors, but they belong to separate families and differ in distribution and reproduction. Pythons (Pythonidae) are an Old World group and most lay eggs, while boas (Boidae) are largely found in the Americas and typically give birth to live young.",
        },
        {
          question: "How big do pythons get?",
          answer:
            "It varies widely by species. Some pythons are relatively small, while the reticulated python is among the longest snakes in the world. Exact sizes depend on species, age, and conditions.",
        },
        {
          question: "What do pythons eat?",
          answer:
            "Pythons are carnivores that eat mammals and birds appropriate to their size, swallowing prey whole. Larger species can take correspondingly larger prey and may go weeks or longer between meals.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Pythonidae" },
        { label: "Reference species", value: "Python regius (ball python)" },
        { label: "Class", value: "Reptilia" },
        { label: "Order", value: "Squamata" },
        { label: "Diet", value: "Carnivore (constrictor)" },
        { label: "Venom", value: "None — non-venomous" },
        { label: "Range", value: "Africa, Asia, Australia" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Snake Profile", href: "/animals/snake", description: "Snakes as a whole (Serpentes)" },
        { label: "Anaconda Profile", href: "/animals/anaconda", description: "A giant boa constrictor" },
        { label: "Cobra Profile", href: "/animals/cobra", description: "Venomous hood-spreading snakes" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Reptile fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
