import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/boa";
const TITLE = "Boa Constrictor — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore the boa constrictor (Boa constrictor): a large, non-venomous constricting snake of the Americas that kills prey by constriction and gives birth to live young.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("boa"),
});

export default function BoaPage() {
  return (
    <AnimalProfileLayout
      commonName="Boa Constrictor"
      scientificName="Boa constrictor"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Snake", "Constrictor"]}
      image={getAnimalImage("boa") ?? undefined}
      galleryImages={getAnimalGalleryImages("boa")}
      sources={ANIMAL_SOURCES.boa}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The boa constrictor (<em>Boa constrictor</em>) is a large, heavy-bodied,
            non-venomous snake native to the Americas. As its name suggests, it
            subdues prey by constriction — wrapping its coils around an animal and
            tightening — rather than by venom. Patterned in saddles and blotches that
            often deepen toward a reddish tail, it is one of the most recognisable
            snakes in the New World.
          </p>
          <p>
            Boas belong to the family Boidae, a largely New World group that, unlike
            the Old World pythons, generally gives birth to live young rather than
            laying eggs.
          </p>
          <p>
            <strong>Conservation note:</strong> the boa constrictor is widespread
            across much of its range, though some regional populations are affected by
            habitat loss and collection. Verify current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Boa constrictors occupy a wide range of habitats from Mexico through
          Central and South America, including tropical forest, dry woodland,
          savanna, and scrub, often near water. They are adaptable and can be found
          from the ground to the trees depending on age and conditions.
        </p>
      }
      diet={
        <p>
          Boas are carnivores that ambush or stalk prey such as birds and mammals,
          seize it with the jaws, and quickly throw coils around it. They kill by
          constriction — tightening with each breath of the prey until it can no
          longer breathe — and then swallow it whole. Large meals can sustain a boa
          for a long time.
        </p>
      }
      behavior={
        <p>
          Boa constrictors are mostly solitary and largely nocturnal or
          crepuscular. Younger boas often climb and may be more arboreal, while
          heavier adults tend to spend more time on the ground. A notable trait of
          boas is that females give birth to live young rather than laying eggs.
        </p>
      }
      humanInteraction={
        <p>
          Boa constrictors are widely known and are sometimes kept and studied. In
          the wild they help control rodent and other small-animal populations.
          Habitat loss and collection are the main pressures in some areas. For
          current, regional status, consult authoritative sources such as the IUCN
          Red List.
        </p>
      }
      faqs={[
        {
          question: "Is a boa constrictor venomous?",
          answer:
            "No. The boa constrictor is non-venomous. It kills prey by constriction — coiling around the animal and tightening until it cannot breathe — rather than by injecting venom. Large boas are powerful and deserve respect, but they are not a venom threat.",
        },
        {
          question: "What is the difference between a boa and a python?",
          answer:
            "Both are large constrictors, but they belong to different families and live in different parts of the world. Boas (Boidae) are largely a New World group and most give birth to live young, while pythons (Pythonidae) are an Old World group and typically lay eggs.",
        },
        {
          question: "How does a boa kill its prey?",
          answer:
            "A boa grasps prey with its jaws and rapidly throws coils around it, then constricts — tightening its grip so the prey cannot breathe. Once subdued, the snake swallows the prey whole, head-first.",
        },
        {
          question: "What do boa constrictors eat?",
          answer:
            "Boas are carnivores that mainly eat birds and mammals appropriate to their size, caught by ambush or active hunting. After a large meal, a boa may not need to feed again for some time.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Boa constrictor" },
        { label: "Class", value: "Reptilia" },
        { label: "Family", value: "Boidae (boas)" },
        { label: "Diet", value: "Carnivore (constrictor)" },
        { label: "Venom", value: "None — non-venomous" },
        { label: "Reproduction", value: "Live birth (no eggs)" },
        { label: "Range", value: "Mexico, Central & South America" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Python Profile", href: "/animals/python", description: "Old World egg-laying constrictors" },
        { label: "Anaconda Profile", href: "/animals/anaconda", description: "A giant aquatic boa" },
        { label: "Snake Profile", href: "/animals/snake", description: "Snakes as a whole (Serpentes)" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American fauna in context" },
      ]}
    />
  );
}
