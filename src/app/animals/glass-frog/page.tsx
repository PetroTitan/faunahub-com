import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/glass-frog";
const TITLE = "Glass Frog — Profile, See-Through Skin, Diet & Behavior";
const DESC =
  "Explore glass frogs (family Centrolenidae): tiny Neotropical tree frogs with translucent undersides that reveal their organs, devoted fathers, and a remarkable transparency trick.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("glass-frog"),
});

export default function GlassFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Glass Frog"
      scientificName="Hyalinobatrachium valerioi"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Neotropical"]}
      image={getAnimalImage("glass-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("glass-frog")}
      sources={ANIMAL_SOURCES["glass-frog"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Glass frogs (family Centrolenidae) are small, delicate tree frogs of Central and
            South American rainforests, named for their most extraordinary feature: the skin
            on their underside is translucent, so you can see the heart, liver, digestive
            organs — and sometimes even the beating heart — through the belly. Most are
            lime-green above, which blends with leaves, while the see-through underside
            helps hide them from below. The reticulated glass frog
            (<em>Hyalinobatrachium valerioi</em>) is shown here.
          </p>
          <p>
            Beyond their startling transparency, glass frogs are notable for devoted
            fatherhood and for a recently discovered trick of becoming even more transparent
            while they sleep.
          </p>
          <p>
            <strong>Note:</strong> there are many glass frog species; details here use the
            reticulated glass frog as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Glass frogs live in humid tropical forests of Central and South America, almost
          always near streams. They are arboreal, spending their lives among the leaves of
          trees and shrubs overhanging running water, where they call, breed, and lay their
          eggs. They depend on healthy, undisturbed streamside forest.
        </p>
      }
      diet={
        <p>
          Glass frogs are insectivores, feeding on small insects and other invertebrates —
          such as flies, ants, spiders, and tiny crickets — that they catch among the
          foliage. As small predators of insects, they are part of the web of life in
          streamside rainforest.
        </p>
      }
      behavior={
        <p>
          Glass frogs typically lay their eggs on leaves hanging over a stream, and in many
          species the male guards the egg clutches — sometimes several at once — keeping them
          moist and defending them from predators and parasitic wasps until the tadpoles
          hatch and drop into the water below. Their transparency is more than a curiosity:
          research has shown that some glass frogs become markedly more see-through while
          asleep by hiding most of their red blood cells in the liver, reducing their
          visible outline — a striking natural camouflage trick.
        </p>
      }
      humanInteraction={
        <p>
          Glass frogs are beloved by naturalists and photographers for their living-window
          bodies and are popular subjects in studies of camouflage and amphibian biology.
          Like many amphibians, they depend on clean water and intact forest, so
          deforestation, pollution, and disease are concerns; some species are threatened
          while others remain widespread. Consult AmphibiaWeb and the IUCN Red List for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Can you really see a glass frog's organs?",
          answer:
            "Yes. The skin on a glass frog's underside is translucent, so through the belly you can see internal organs such as the heart, liver, and digestive tract — and in some species the beating heart is visible. The green back hides it on leaves, while the see-through underside helps conceal its shape from predators looking up from below.",
        },
        {
          question: "Do glass frogs become more transparent when they sleep?",
          answer:
            "Some do. Research found that certain glass frogs hide most of their red blood cells in the liver while resting, which makes their bodies much more transparent and harder to spot as they sleep on leaves by day. When active, the blood returns to circulation. It's a remarkable, recently discovered camouflage mechanism.",
        },
        {
          question: "Which parent looks after glass frog eggs?",
          answer:
            "Often the father. In many glass frogs the male guards the egg clutches laid on leaves over a stream — sometimes tending several clutches — keeping them moist and protecting them from predators and egg-eating wasps until the tadpoles hatch and fall into the water below. This paternal care is a notable part of their biology.",
        },
        {
          question: "What do glass frogs eat?",
          answer:
            "Glass frogs are insectivores, eating small insects and other invertebrates such as flies, ants, spiders, and tiny crickets, caught among the streamside foliage where they live. As small insect predators they are part of the rainforest food web.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Hyalinobatrachium valerioi (reticulated glass frog)" },
        { label: "Class", value: "Amphibia (frog)" },
        { label: "Signature trait", value: "Translucent underside (organs visible)" },
        { label: "Diet", value: "Insectivore" },
        { label: "Parenting", value: "Males often guard the eggs" },
        { label: "Camouflage", value: "Some get more transparent while asleep" },
        { label: "Habitat", value: "Streamside Neotropical forest" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Poison Dart Frog Profile", href: "/animals/poison-dart-frog", description: "Another vivid Neotropical frog" },
        { label: "Tree Frog Profile", href: "/animals/tree-frog", description: "A related arboreal frog" },
        { label: "Hellbender Profile", href: "/animals/hellbender", description: "A giant aquatic amphibian" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
