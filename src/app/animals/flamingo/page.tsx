import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Flamingo — Profile, Habitat, Diet & Behavior";
const description =
  "Flamingos are tall, pink, filter-feeding wading birds. A group-level overview using the greater flamingo as a reference: wetlands, diet, and why they are pink.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/flamingo",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("flamingo"),
});

export default function FlamingoPage() {
  return (
    <AnimalProfileLayout
      commonName="Flamingo"
      pageTitle={title}
      description={description}
      path="/animals/flamingo"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Wading Bird", "Wild"]}
      image={getAnimalImage("flamingo") ?? undefined}
      galleryImages={getAnimalGalleryImages("flamingo")}
      factsHeaderNote="“Flamingo” covers several species in the family Phoenicopteridae. The reference shown is the greater flamingo (Phoenicopterus roseus). Colour, size, and range vary by species."
      overview={
        <>
          <p>
            Flamingos are tall, long-legged, long-necked wading birds famous for
            their pink plumage and unusual feeding style. There are several
            species in the family Phoenicopteridae. This page is a group-level
            overview; the greater flamingo (<em>Phoenicopterus roseus</em>) is
            used as a familiar reference. Flamingos are highly social and often
            gather in large flocks in shallow wetlands.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Flamingos live in shallow lakes, lagoons, estuaries, and salt pans,
            including harsh saline and alkaline waters where few other animals
            thrive. Different species occur in the Americas, Africa, southern
            Europe, and Asia. Many are nomadic, moving between wetlands as water
            and food availability change. Habitat and range vary by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Flamingos are filter feeders. They hold their specially shaped bill
            upside-down in the water and use comb-like structures to strain out
            tiny food items such as algae, diatoms, and small invertebrates like
            brine shrimp. Pigments in this food are what give flamingos their
            pink and reddish colours. Diet and the resulting colour vary by
            species and food source.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Flamingos are intensely social and breed in large colonies, often
            performing synchronised group displays. They frequently stand on one
            leg, a posture whose function is still discussed by scientists. They
            build mound nests of mud and typically raise a single chick, which is
            fed a special secretion by its parents. Behaviour varies among the
            flamingo species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Flamingos are wild birds, not pets, and are protected by wildlife law
            in many places. They draw wildlife tourism and feature widely in
            popular culture. Some flamingo species are of conservation concern
            due to wetland loss, disturbance, and other pressures, while others
            are more secure; status varies and should be checked against current
            sources. Do not disturb flamingo colonies, and observe from a
            respectful distance.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Flamingos are unmistakable: very long legs and neck, pink-to-red
                plumage, and a distinctive downward-bent bill. In flight they show
                black flight feathers contrasting with pink, and they fly with
                neck and legs outstretched. Species differ in size and in the
                exact shade of pink — the greater flamingo is the tallest and
                palest, while some others are deeper pink or orange.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Flamingos are a distinctive group with no close relatives among the
          other birds on FaunaHub; their nearest relatives are thought to be
          grebes. Their filter-feeding and colour set them apart from herons,
          storks, and other long-legged wading birds they might superficially
          resemble.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
      ]}
      faqs={[
        {
          question: "Why are flamingos pink?",
          answer:
            "Flamingos get their pink and reddish colours from pigments (carotenoids) in the algae and small invertebrates they filter from the water. Birds eating more of these pigment-rich foods tend to be more intensely coloured, which is why diet and colour are linked.",
        },
        {
          question: "Why do flamingos stand on one leg?",
          answer:
            "Flamingos often rest on one leg. Several explanations have been proposed, including conserving body heat and reducing muscular effort, but the behaviour is still discussed by scientists. It is a normal resting posture, not a sign of a problem.",
        },
        {
          question: "How do flamingos eat?",
          answer:
            "Flamingos are filter feeders. They hold their uniquely shaped bill upside-down in shallow water and pump water through comb-like plates that trap tiny food items such as algae and small invertebrates.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Flamingos (family Phoenicopteridae)" },
        { label: "Reference species", value: "Greater flamingo (Phoenicopterus roseus)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Filter feeder (algae, small invertebrates)" },
        { label: "Habitat", value: "Shallow lakes, lagoons, salt pans" },
        { label: "Why pink", value: "Pigments from their food" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Stork Profile", href: "/animals/stork", description: "Another tall wading bird" },
        { label: "Pelican Profile", href: "/animals/pelican" },
        { label: "Swan Profile", href: "/animals/swan" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.flamingo}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
