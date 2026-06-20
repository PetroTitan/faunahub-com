import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/piranha";
const TITLE = "Piranha — Profile, Diet, Behavior & Myths";
const DESC =
  "Explore piranhas (e.g. the red-bellied piranha, Pygocentrus nattereri): sharp-toothed South American freshwater fish that are far less ferocious than their fearsome reputation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("piranha"),
});

export default function PiranhaPage() {
  return (
    <AnimalProfileLayout
      commonName="Piranha"
      scientificName="e.g. Pygocentrus nattereri"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "South America"]}
      image={getAnimalImage("piranha") ?? undefined}
      galleryImages={getAnimalGalleryImages("piranha")}
      sources={ANIMAL_SOURCES.piranha}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Piranhas are freshwater fish of South American rivers and lakes, famous for
            their sharp, interlocking teeth and powerful bite. There are many species;
            the red-bellied piranha (<em>Pygocentrus nattereri</em>), shown here, is the
            best known. They have deep, laterally compressed bodies and strong jaws built
            for shearing.
          </p>
          <p>
            Despite a fearsome, film-fuelled reputation as frenzied flesh-eaters,
            piranhas are mostly omnivores and scavengers, and many gather in groups
            largely for protection from predators rather than to launch attacks.
          </p>
          <p>
            <strong>Note:</strong> piranha species vary in diet and behaviour, and most
            popular &ldquo;man-eater&rdquo; stories are exaggerated. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Piranhas live across much of tropical and subtropical South America, in rivers,
          streams, floodplains, lakes, and reservoirs — including the Amazon and Orinoco
          systems. They favour warm fresh water with vegetation or structure, and their
          numbers and behaviour shift with seasonal flooding and drying.
        </p>
      }
      diet={
        <p>
          Many piranhas are omnivores, eating fish, insects, crustaceans, fallen fruit
          and seeds, and scavenging dead or dying animals. Some species are more
          predatory and others more plant-leaning. Their teeth are well suited to taking
          bites — including nipping the fins or scales of larger fish, which can heal.
        </p>
      }
      behavior={
        <p>
          Piranhas often live in groups (shoals). Research suggests this shoaling is
          driven more by safety from their own predators — such as larger fish, birds,
          caimans, and river dolphins — than by cooperative hunting. They communicate
          with sounds (including barks and croaks) and can be wary, fast-moving fish.
          Feeding can become intense when food is scarce or concentrated.
        </p>
      }
      humanInteraction={
        <p>
          Piranhas are an important part of South American river ecosystems as both
          predators and scavengers that help recycle dead matter. Serious attacks on
          people are rare and usually linked to unusual conditions; the common image of
          piranhas stripping animals in seconds is largely a myth. They are also fished
          for food and kept in aquariums (where legal). Consult authoritative sources for
          specifics.
        </p>
      }
      faqs={[
        {
          question: "Are piranhas dangerous to humans?",
          answer:
            "Far less than their reputation suggests. Serious piranha attacks on people are rare and tend to happen in unusual situations, such as very low water that crowds and stresses the fish, or near fish-cleaning waste. Bites do occur but the popular image of piranhas rapidly devouring people or large animals is largely a myth.",
        },
        {
          question: "What do piranhas actually eat?",
          answer:
            "Many piranhas are omnivores and scavengers, eating fish, insects, crustaceans, fruit and seeds, and carrion. Some species lean more predatory and others more herbivorous. Notably, some piranhas feed by nipping fins or scales off larger fish, which often survive and heal.",
        },
        {
          question: "Why do piranhas swim in groups?",
          answer:
            "Studies suggest piranhas shoal mainly for protection from their own predators — larger fish, birds, caimans, and river dolphins — rather than to hunt cooperatively. Living in a group provides safety in numbers, which is important because piranhas are themselves common prey.",
        },
        {
          question: "How many kinds of piranha are there?",
          answer:
            "There are many piranha species across South America, varying in size, diet, and temperament. The red-bellied piranha is the most famous, but the group as a whole is diverse and not uniformly aggressive.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Pygocentrus nattereri (red-bellied)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Habitat", value: "South American fresh water" },
        { label: "Diet", value: "Mostly omnivore / scavenger" },
        { label: "Behaviour", value: "Often shoals (mainly for safety)" },
        { label: "Reputation", value: "Largely exaggerated" },
        { label: "Teeth", value: "Sharp, interlocking; shearing bite" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Tetra Profile", href: "/animals/tetra", description: "A small relative in the same broad group" },
        { label: "Catfish Profile", href: "/animals/catfish", description: "Another freshwater fish" },
        { label: "Carp Profile", href: "/animals/carp", description: "A widespread freshwater fish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American fauna in context" },
      ]}
    />
  );
}
