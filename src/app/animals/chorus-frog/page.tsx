import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/chorus-frog";
const TITLE = "Chorus Frog — Profile of North America's Tiny Spring Singers";
const DESC =
  "Meet the chorus frogs (Pseudacris): small striped North American tree frogs whose ringing breeding choruses are a classic sound of early spring — the group that includes the spring peeper.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("chorus-frog"),
});

export default function ChorusFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Chorus Frog"
      scientificName="Pseudacris spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "North America"]}
      image={getAnimalImage("chorus-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("chorus-frog")}
      sources={ANIMAL_SOURCES["chorus-frog"]}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            Chorus frogs (genus <em>Pseudacris</em>) are small, slender North American frogs, most of them
            marked with dark stripes or rows of spots down the back. Though they belong to the tree frog
            family (Hylidae), most chorus frogs are not great climbers and live close to the ground in damp
            grassland, marshes, and woodland.
          </p>
          <p>
            They are best known for their sound. In late winter and early spring, males gather at wetlands
            and call together in loud, ringing choruses — for many people one of the first signs that spring
            has arrived. The well-known spring peeper is a member of this very group.
          </p>
          <p>
            <strong>Note:</strong> there are many chorus-frog species; details here describe the group
            broadly, including the striped &ldquo;trilling&rdquo; chorus frogs.
          </p>
        </>
      }
      habitat={
        <p>
          Chorus frogs live across much of North America in damp, low habitats — wet meadows, marshes,
          flooded fields, ditches, swamps, and moist woodland — usually near the shallow, often temporary
          pools they breed in. Outside the breeding season they shelter in vegetation, leaf litter, and
          soil, and several species tolerate cold climates well.
        </p>
      }
      diet={
        <p>
          Adult chorus frogs eat small invertebrates — insects, spiders, and other tiny prey — caught with
          a quick flick of the tongue. Their tadpoles graze on algae and organic matter in the pools where
          they develop.
        </p>
      }
      behavior={
        <p>
          Chorus frogs are most conspicuous during the breeding season, when males call from wetland edges
          to attract females, often on cold early-spring nights. Each species has its own distinctive call —
          many sound like a finger running over the teeth of a comb. They breed in shallow, fish-free pools,
          where eggs hatch into tadpoles that transform into froglets. For much of the rest of the year the
          frogs are quiet and easily overlooked.
        </p>
      }
      humanInteraction={
        <p>
          Chorus frogs are familiar harbingers of spring and are valued as part of healthy wetland
          ecosystems. Like many amphibians they can be affected by wetland drainage, pollution, and habitat
          loss; most species remain widespread, but some are localised or declining. Consult the IUCN Red
          List for the status of a particular species.
        </p>
      }
      faqs={[
        {
          question: "Are chorus frogs tree frogs?",
          answer:
            "Yes, by family. Chorus frogs belong to the tree frog family (Hylidae), but unlike many of their climbing relatives most chorus frogs live near the ground in damp grassland and marsh rather than up in trees.",
        },
        {
          question: "Is the spring peeper a chorus frog?",
          answer:
            "Yes. The spring peeper (Pseudacris crucifer) is a member of the chorus-frog genus Pseudacris. It is one of the most famous spring callers in the group.",
        },
        {
          question: "Why are they called chorus frogs?",
          answer:
            "Because the males call together in large numbers at breeding wetlands, producing loud, overlapping choruses. Many species sound like a finger drawn across the teeth of a comb, and these choruses are a classic sound of early spring.",
        },
        {
          question: "When and where do chorus frogs breed?",
          answer:
            "They breed in late winter and early spring in shallow, fish-free pools, marshes, and flooded areas. Males call to attract females, and the eggs hatch into tadpoles that develop in the temporary water before transforming into froglets.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Pseudacris (many species)" },
        { label: "Class", value: "Amphibia" },
        { label: "Family", value: "Hylidae (tree frogs)" },
        { label: "Range", value: "North America" },
        { label: "Habitat", value: "Wet meadows, marshes, woodland pools" },
        { label: "Voice", value: "Ringing spring choruses; comb-like trills" },
        { label: "Includes", value: "The spring peeper (P. crucifer)" },
        { label: "Diet", value: "Small insects and other invertebrates" },
      ]}
      relatedLinks={[
        { label: "Spring Peeper Profile", href: "/animals/spring-peeper", description: "A famous chorus frog of the same genus" },
        { label: "Tree Frog Profile", href: "/animals/tree-frog", description: "The wider tree-frog family" },
        { label: "Wood Frog Profile", href: "/animals/wood-frog", description: "Another cold-tolerant North American frog" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American amphibians in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
