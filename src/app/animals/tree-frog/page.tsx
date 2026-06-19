import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tree-frog";
const TITLE = "Tree Frog — Profile, Habitat, Diet & Adaptations";
const DESC =
  "Explore tree frogs: climbing frogs with sticky toe pads found across several families, from the vivid red-eyed tree frog to small grey species, in an educational overview.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("tree-frog"),
});

export default function TreeFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Tree Frog"
      scientificName="multiple families"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Arboreal"]}
      image={getAnimalImage("tree-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("tree-frog")}
      sources={ANIMAL_SOURCES["tree-frog"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            &ldquo;Tree frog&rdquo; is a common name for frogs that live in trees
            and shrubs, a way of life that has evolved in several different frog
            families rather than a single group. What unites them is climbing:
            most have expanded, sticky toe pads that grip leaves and bark. The
            animal shown here is the red-eyed tree frog
            (<em>Agalychnis callidryas</em>) of Central America, a famous reference
            species.
          </p>
          <p>
            Tree frogs range from large, vividly coloured species to small, drab
            ones, and are found on most continents wherever there is suitable
            vegetation and moisture.
          </p>
          <p>
            <strong>Conservation note:</strong> some tree frogs are common while
            others are threatened, and amphibians as a whole face serious global
            pressures from habitat loss and disease. Verify a particular
            species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Tree frogs live in forests, woodlands, wetlands, and gardens across much
          of the world, climbing in trees, shrubs, and reeds. They depend on
          moisture and on water for breeding, and many descend to ponds or
          temporary pools to lay eggs.
        </p>
      }
      diet={
        <p>
          Tree frogs are carnivores, feeding mainly on insects and other small
          invertebrates that they catch with a quick flick of the tongue. As with
          most frogs, the tadpole stage is typically aquatic and feeds differently
          before metamorphosis.
        </p>
      }
      behavior={
        <p>
          Most tree frogs are nocturnal, hiding by day and becoming active at night
          to feed and call. Males of many species produce loud breeding calls,
          especially after rain. Climbing toe pads, strong legs, and (in some
          species) bright &ldquo;flash&rdquo; colours that appear when they leap are
          characteristic adaptations.
        </p>
      }
      humanInteraction={
        <p>
          Tree frogs are popular subjects in nature photography and education, and
          some are kept in captivity. The biggest concerns for wild populations are
          habitat loss, pollution, and amphibian diseases such as chytrid fungus.
          For current, species-specific status, consult authoritative sources such
          as AmphibiaWeb and the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Are all tree frogs closely related?",
          answer:
            "Not necessarily. \"Tree frog\" is a lifestyle-based common name; arboreal frogs have evolved in several different families. So tree frogs from different parts of the world can look similar yet be only distantly related, sharing climbing adaptations through convergent evolution.",
        },
        {
          question: "How do tree frogs climb?",
          answer:
            "Most tree frogs have enlarged, disc-like toe pads that produce a strong, reversible grip on smooth surfaces like leaves, helped by mucus and clinging forces. Combined with grasping feet and strong legs, this lets them move confidently through vegetation.",
        },
        {
          question: "What do tree frogs eat?",
          answer:
            "Tree frogs are carnivores that mainly eat insects and other small invertebrates, captured with a fast, sticky tongue. Their aquatic tadpoles feed differently before transforming into froglets.",
        },
        {
          question: "Why does the red-eyed tree frog have red eyes?",
          answer:
            "The startling red eyes are thought to play a role in \"startle\" defense: when disturbed, the frog can suddenly open its eyes and reveal bright colours, which may momentarily confuse a predator and give the frog a chance to leap away.",
        },
      ]}
      quickFacts={[
        { label: "Common name covers", value: "Climbing frogs in several families" },
        { label: "Reference species", value: "Agalychnis callidryas" },
        { label: "Class", value: "Amphibia" },
        { label: "Order", value: "Anura (frogs)" },
        { label: "Diet", value: "Carnivore (insects & invertebrates)" },
        { label: "Key adaptation", value: "Sticky climbing toe pads" },
        { label: "Activity", value: "Mostly nocturnal" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Frog Profile", href: "/animals/frog", description: "Frogs as a whole (order Anura)" },
        { label: "Poison Dart Frog Profile", href: "/animals/poison-dart-frog", description: "Vivid, toxic rainforest frogs" },
        { label: "Toad Profile", href: "/animals/toad", description: "Drier-skinned frog relatives" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Amphibian habitats in context" },
      ]}
    />
  );
}
