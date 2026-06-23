import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/painted-snipe";
const TITLE = "Greater Painted-snipe — Profile of the Wetland Bird With Showy Females";
const DESC =
  "Meet the greater painted-snipe (Rostratula benghalensis): a secretive wetland wader — not a true snipe — in which the brighter, larger female courts the males and leaves them to raise the brood.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("painted-snipe"),
});

export default function PaintedSnipePage() {
  return (
    <AnimalProfileLayout
      commonName="Greater Painted-snipe"
      scientificName="Rostratula benghalensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Wader", "Wetland", "Old World"]}
      image={getAnimalImage("painted-snipe") ?? undefined}
      galleryImages={getAnimalGalleryImages("painted-snipe")}
      sources={ANIMAL_SOURCES["painted-snipe"]}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            The greater painted-snipe (<em>Rostratula benghalensis</em>) is a secretive, beautifully marked
            wetland bird of Africa, southern Asia, and Australasia. With its rounded wings, long down-curved
            bill, and bold &ldquo;spectacle&rdquo; mark around the eye, it superficially resembles a true
            snipe — but it belongs to a separate family (Rostratulidae) and is not a true snipe at all.
          </p>
          <p>
            Its most remarkable feature is reversed sexual dimorphism. The female is larger and more
            richly coloured — with a chestnut head and neck — while the male is duller and more cryptically
            patterned. Females compete for mates, and males are left to incubate and rear the young.
          </p>
          <p>
            The greater painted-snipe is widespread and is generally listed as Least Concern, though it
            depends on healthy wetlands.
          </p>
        </>
      }
      habitat={
        <p>
          Painted-snipes inhabit shallow freshwater wetlands — marshes, the muddy margins of pools and
          rice paddies, swampy grassland, and reedy ditches. They keep to dense cover at the water&apos;s edge
          and skulk among vegetation, so they are easily overlooked despite their bright plumage.
        </p>
      }
      diet={
        <p>
          The greater painted-snipe is an omnivore that feeds in mud and shallow water, probing and picking
          for insects, worms, crustaceans, molluscs, and seeds. It often forages at dawn, dusk, and night,
          sweeping its bill through soft mud.
        </p>
      }
      behavior={
        <p>
          This bird is shy and largely active in the low light of dawn, dusk, and night, freezing or
          slipping into cover when disturbed. Its breeding system is unusual: the brighter female displays
          to and competes for males, gives a deep, resonant call, and may mate with more than one male
          (polyandry). Each male then incubates a clutch and looks after the chicks largely on his own —
          the reverse of the pattern seen in most birds.
        </p>
      }
      humanInteraction={
        <p>
          Greater painted-snipes use rice fields and other human-made wetlands as well as natural ones, and
          the species is widespread and generally listed as Least Concern. Like all wetland birds, however,
          it is vulnerable to the drainage, pollution, and degradation of marshes. Consult the IUCN Red List
          for the current assessment.
        </p>
      }
      faqs={[
        {
          question: "Is the painted-snipe a true snipe?",
          answer:
            "No. Although it looks like a snipe and shares the long bill and skulking habits, the greater painted-snipe belongs to a different family (Rostratulidae). True snipes are in the sandpiper family, so the resemblance is misleading.",
        },
        {
          question: "Why is the female more colourful than the male?",
          answer:
            "The painted-snipe has reversed sexual roles. The larger, brighter female competes for and courts males, and may pair with several (polyandry). The duller male is left to incubate the eggs and raise the chicks, so his camouflaged plumage suits nest duty.",
        },
        {
          question: "What does the greater painted-snipe eat?",
          answer:
            "It is an omnivore, probing soft mud and shallow water for insects, worms, crustaceans, molluscs, and seeds, often feeding at dawn, dusk, or night.",
        },
        {
          question: "Is the greater painted-snipe endangered?",
          answer:
            "It is widespread and generally listed as Least Concern on the IUCN Red List, but it depends on shallow wetlands and can be affected by their drainage and degradation. Check the IUCN Red List for the latest status.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Rostratula benghalensis" },
        { label: "Class", value: "Aves" },
        { label: "Family", value: "Rostratulidae (not a true snipe)" },
        { label: "Range", value: "Africa, southern Asia, Australasia" },
        { label: "Habitat", value: "Shallow freshwater wetlands & paddies" },
        { label: "Sex roles", value: "Reversed; female brighter & polyandrous" },
        { label: "Active", value: "Dawn, dusk, and night; very shy" },
        { label: "IUCN status", value: "Least Concern" },
      ]}
      relatedLinks={[
        { label: "Button-quail Profile", href: "/animals/button-quail", description: "Another bird with reversed sex roles" },
        { label: "Jacana Profile", href: "/animals/jacana", description: "A polyandrous wetland wader" },
        { label: "Limpkin Profile", href: "/animals/limpkin", description: "Another secretive marsh bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Wetland birds in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
