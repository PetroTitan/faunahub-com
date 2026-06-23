import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/plated-lizard";
const TITLE = "Plated Lizard — Profile of Africa's Armoured Lizard";
const DESC =
  "Meet the plated lizard (Gerrhosaurus): an African lizard clad in regular rows of bony, rectangular scales, with a flexible skin fold along each flank that lets its armoured body expand.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("plated-lizard"),
});

export default function PlatedLizardPage() {
  return (
    <AnimalProfileLayout
      commonName="Plated Lizard"
      scientificName="Gerrhosaurus spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Africa"]}
      image={getAnimalImage("plated-lizard") ?? undefined}
      galleryImages={getAnimalGalleryImages("plated-lizard")}
      sources={ANIMAL_SOURCES["plated-lizard"]}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            Plated lizards (genus <em>Gerrhosaurus</em>) are sturdy African lizards named for their armour:
            rows of large, rectangular, bony-backed scales (osteoderms) arranged in neat bands across the
            body, like overlapping plates. They are relatives of the girdled lizards, sharing the same heavy,
            protected build.
          </p>
          <p>
            A signature feature is a prominent fold of soft, granular skin running along each flank. This
            lateral fold acts like an expansion joint, allowing the otherwise stiff, armoured body to swell
            — useful for breathing, processing a big meal, or carrying eggs.
          </p>
          <p>
            <strong>Note:</strong> several plated-lizard species exist, from small grass-dwellers to the
            large giant plated lizard; details here describe the group broadly.
          </p>
        </>
      }
      habitat={
        <p>
          Plated lizards live in dry and semi-dry habitats across sub-Saharan Africa — savanna, grassland,
          scrub, and rocky outcrops. Many shelter in rock crevices, burrows, or termite mounds, retreating
          into cover when threatened, while some smaller species hide among grass and leaf litter.
        </p>
      }
      diet={
        <p>
          Most plated lizards are omnivores. They eat a mix of insects and other invertebrates along with
          plant material such as leaves, flowers, and fruit, and larger species may take small vertebrates.
          They forage on the ground, using their strong jaws to handle hard-bodied prey and tough plants.
        </p>
      }
      behavior={
        <p>
          Plated lizards are ground-dwelling and often tied to rocks. When alarmed, a rock-living plated
          lizard typically dashes into a crevice and wedges itself in tightly, inflating its body so that
          its armoured scales lock it in place and make it very hard to extract. They are most active in
          warm daylight hours, basking to raise their body temperature before foraging.
        </p>
      }
      humanInteraction={
        <p>
          Plated lizards are harmless to people and are sometimes kept in the reptile trade. Several species
          are widespread and common, though some can be affected by habitat loss and collection. Consult the
          IUCN Red List for the status of a particular species.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a plated lizard?",
          answer:
            "Because its body is covered in rows of large, rectangular scales reinforced with bone (osteoderms), arranged in regular bands that look like plates of armour. This protective covering gives the group its name.",
        },
        {
          question: "What is the fold of skin along its side for?",
          answer:
            "The lateral fold is a stretch of soft, granular skin that runs along each flank. It acts as an expansion joint, letting the stiff, armoured body expand — for example to breathe, to accommodate a large meal, or to carry eggs.",
        },
        {
          question: "Are plated lizards related to girdled lizards?",
          answer:
            "Yes. Plated lizards and girdled lizards are close relatives within the same broader group of armoured African lizards, and both rely on tough, bony scales and rock crevices for protection.",
        },
        {
          question: "Are plated lizards dangerous?",
          answer:
            "No. Plated lizards are harmless to humans. They are not venomous and prefer to flee into a crevice and wedge themselves in rather than confront a threat.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Gerrhosaurus (several species)" },
        { label: "Class", value: "Reptilia" },
        { label: "Family", value: "Gerrhosauridae (plated lizards)" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "Habitat", value: "Savanna, scrub, rocky outcrops" },
        { label: "Armour", value: "Rows of bony rectangular scales" },
        { label: "Feature", value: "Flexible flank fold lets body expand" },
        { label: "Diet", value: "Omnivore (insects, plants, small prey)" },
      ]}
      relatedLinks={[
        { label: "Girdled Lizard Profile", href: "/animals/girdled-lizard", description: "A close armoured relative" },
        { label: "Skink Profile", href: "/animals/skink", description: "Another smooth-scaled lizard group" },
        { label: "Agama Profile", href: "/animals/agama", description: "A common African rock lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African reptiles in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
