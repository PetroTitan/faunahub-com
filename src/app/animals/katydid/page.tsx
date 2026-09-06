import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/katydid";
const TITLE = "Katydid — Profile, Leaf Mimicry, Long Antennae & Song";
const DESC =
  "Explore katydids (Tettigoniidae): bush crickets whose leaf mimicry can include fake veins and damage marks, and which hear through their front legs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("katydid"),
});

export default function KatydidPage() {
  return (
    <AnimalProfileLayout
      commonName="Katydid"
      scientificName="family Tettigoniidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Orthopteran","Camouflage"]}
      image={getAnimalImage("katydid") ?? undefined}
      galleryImages={getAnimalGalleryImages("katydid")}
      sources={ANIMAL_SOURCES.katydid}
      factsHeaderNote="“Katydid” covers over six thousand species in the family Tettigoniidae, known in Britain and much of Europe as bush crickets. Habits vary widely across the family, so statements here are general."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Katydids — called bush crickets across much of Europe — are insects of the family Tettigoniidae, with more than six thousand species worldwide. They are separated from grasshoppers by their <strong>very long, thread-like antennae</strong>, often longer than the body itself.
        </p>
        <p>
          Many katydids are outstanding <strong>leaf mimics</strong>. The camouflage can go far beyond simple green colouring: some species have wings marked with false midribs and veins, patches that imitate fungal blotches, and even notches that mimic insect damage on a real leaf.
        </p>
        <p>
          Katydids hear through their front legs. A pair of tympanal organs sits on the tibia of each foreleg — an arrangement quite different from grasshoppers, whose hearing organs are on the abdomen.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Katydids occur worldwide except in the coldest regions, with by far the greatest diversity in tropical forest. They live among foliage in trees, shrubs, grassland and undergrowth, and their camouflage is tied to that setting. Some species live in grass or on the ground, and a number are found in caves and arid habitats.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Diet varies widely across the family. Many katydids are herbivores feeding on leaves, flowers and seeds; others are omnivores; and a good number are active predators taking other insects and small invertebrates. Some large tropical species have powerful jaws capable of delivering a firm defensive bite.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Song is central to katydid life. Males produce sound by <strong>stridulation</strong> — rubbing a scraper on one forewing against a file on the other — and females respond, in some species with a click of their own. Most species are nocturnal, singing after dark, and the common name &apos;katydid&apos; imitates the rhythmic call of a North American species. Females of most species have a long, blade- or sword-shaped ovipositor used to insert eggs into plant tissue or soil, which is sometimes mistaken for a sting.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Katydids are important herbivores and prey in many ecosystems and are studied for their acoustic communication and for the sophistication of their camouflage. Some species are agricultural pests locally, and a number are eaten by people in various parts of the world. Their reliance on foliage and on acoustic signalling makes them sensitive to habitat loss and, in some contexts, to noise. This profile offers no pest-control guidance.
        </p>
        </>
      }
      faqs={[
        {
          question: "What is the difference between a katydid and a grasshopper?",
          answer:
            "Antennae are the quickest test. Katydids have very long, thin, thread-like antennae, often longer than their bodies, while grasshoppers have short stout ones. They also differ in hearing: katydids have ears on their front legs, grasshoppers on the abdomen. Katydids are typically nocturnal, grasshoppers active by day.",
        },
        {
          question: "How do katydids make sound?",
          answer:
            "By stridulation — rubbing a scraper on one forewing against a file-like ridge on the other. It is the males that sing, and in many species females answer, sometimes with a click of their own. Most katydids sing at night.",
        },
        {
          question: "Do katydids really look like leaves?",
          answer:
            "Many do, and some take it remarkably far. Beyond being green and leaf-shaped, certain species have wings marked with false midribs and veins, blotches that mimic fungal spotting, and notched edges that imitate insect damage — details that make a resting katydid extremely hard to pick out.",
        },
        {
          question: "Where are a katydid's ears?",
          answer:
            "On its front legs. A pair of tympanal hearing organs sits on the tibia of each foreleg, which is one of the clearest anatomical differences from grasshoppers, whose hearing organs are located on the abdomen.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Tettigoniidae — 6,000+ species" },
        { label: "Also called", value: "Bush cricket" },
        { label: "Class", value: "Insecta" },
        { label: "Antennae", value: "Very long and thread-like" },
        { label: "Ears", value: "On the front legs" },
        { label: "Sound", value: "Stridulation — wing against wing" },
        { label: "Camouflage", value: "Leaf mimicry, sometimes highly detailed" },
        { label: "Diet", value: "Herbivorous, omnivorous or predatory" },
      ]}
      relatedLinks={[
        { label: "Cricket Profile", href: "/animals/cricket" },
        { label: "Grasshopper Profile", href: "/animals/grasshopper" },
        { label: "Stick Insect Profile", href: "/animals/stick-insect", description: "Another master of mimicry" },
        { label: "Camouflage & Mimicry", href: "/animal-senses-and-adaptations/camouflage-and-mimicry" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
