import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/common-frog";
const TITLE = "Common Frog — Profile, Spawn, Overwintering & Garden Ponds";
const DESC =
  "Explore the common frog (Rana temporaria): the widespread European frog that lays clumped spawn and can pass the winter at the bottom of a pond.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("common-frog"),
});

export default function CommonFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Common Frog"
      scientificName="Rana temporaria"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian","Frog","Europe"]}
      image={getAnimalImage("common-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("common-frog")}
      sources={ANIMAL_SOURCES["common-frog"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The common frog (<em>Rana temporaria</em>) is the most widespread frog in Europe, found from Ireland and Iberia across to Siberia and north beyond the Arctic Circle. Colour is highly variable — brown, olive, grey, yellowish or reddish — but a <strong>dark patch behind the eye</strong> is a consistent feature.
        </p>
        <p>
          It is a true frog: smooth, moist skin, long hind legs built for jumping, and webbed hind feet. That contrasts with the common toad, which is warty, squatter and walks more than it hops.
        </p>
        <p>
          Common frogs lay <strong>clumped spawn</strong> — the familiar mass of jelly-covered eggs in a garden pond in early spring — whereas toads lay their eggs in long strings wound around vegetation. It is one of the easiest ways to tell which animal has been breeding in a pond.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Common frogs occupy damp habitats across most of Europe and into northern Asia: meadows, woodland, marsh, moorland, hedgerows and, very commonly, gardens. Outside the breeding season they live on land in cool damp places, returning to still or slow-moving fresh water — ponds, ditches, ponds in gardens — to breed. Garden ponds have become important habitat in many countries.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Adult common frogs eat invertebrates: insects, slugs, snails, worms and spiders, caught with a rapid strike of the tongue. Tadpoles begin largely as algae grazers and become more omnivorous and scavenging as they develop. Adults generally take prey that moves, and feed less or not at all during the breeding period.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Breeding is explosive and early: frogs converge on ponds in late winter or spring, sometimes while ice is still present, males call with a soft purring croak, and spawn is laid in large communal clumps. Common frogs breathe partly through their skin, which allows some individuals to overwinter at the bottom of ponds in oxygenated water; others overwinter on land under logs, stones and compost. Adults are largely nocturnal outside the breeding season.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The common frog is one of the amphibians most familiar to people because it breeds so readily in garden ponds, and garden ponds now provide significant habitat where farmland ponds have been lost. The species faces pressures from habitat loss and pond drainage, road mortality during breeding migrations, and amphibian diseases including ranavirus and chytrid fungus. Amphibian skin is highly permeable, so wild frogs should not be handled unnecessarily; this profile offers no handling, keeping or wildlife-health guidance and directs such questions to local wildlife authorities. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "How do I tell a common frog from a common toad?",
          answer:
            "Look at skin, shape and movement. A frog has smooth moist skin, longer hind legs and hops; a toad has dry warty skin, a squatter body and tends to walk. Spawn is even clearer: frogs lay eggs in clumps, toads in long strings wound around vegetation.",
        },
        {
          question: "Do common frogs hibernate underwater?",
          answer:
            "Some do. Because they can take up oxygen through their skin, common frogs are able to overwinter at the bottom of ponds where the water stays oxygenated. Others spend the winter on land, tucked under logs, stones, leaf litter or compost heaps.",
        },
        {
          question: "When do common frogs spawn?",
          answer:
            "Very early — late winter or early spring, sometimes while ice is still present on the pond. Breeding is explosive, with many animals arriving at once, males calling with a soft purring croak, and spawn laid in large communal clumps in shallow water.",
        },
        {
          question: "What do common frogs eat?",
          answer:
            "Adults take invertebrates — insects, slugs, snails, worms and spiders — caught with a fast flick of the tongue, and they generally respond to movement. Tadpoles start out mainly grazing algae and become more omnivorous and scavenging as they develop.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Rana temporaria" },
        { label: "Family", value: "Ranidae (true frogs)" },
        { label: "Class", value: "Amphibia" },
        { label: "Identification", value: "Dark patch behind the eye" },
        { label: "Spawn", value: "Laid in clumps (toads lay strings)" },
        { label: "Winter", value: "On land or at the bottom of ponds" },
        { label: "Diet", value: "Invertebrates; tadpoles graze algae" },
        { label: "Range", value: "Most of Europe into northern Asia" },
      ]}
      relatedLinks={[
        { label: "Frog Profile", href: "/animals/frog", description: "Group-level overview" },
        { label: "Toad Profile", href: "/animals/toad", description: "The key comparison" },
        { label: "European Tree Frog Profile", href: "/animals/european-tree-frog" },
        { label: "Leopard Frog Profile", href: "/animals/leopard-frog" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
