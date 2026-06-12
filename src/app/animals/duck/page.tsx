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

const title = "Duck — Profile, Habitat, Diet & Behavior";
const description =
  "Ducks are waterfowl in the family Anatidae. A group-level overview using the mallard as a reference species: wetland habitats, dabbling diet, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/duck",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("duck"),
});

export default function DuckPage() {
  return (
    <AnimalProfileLayout
      commonName="Duck"
      pageTitle={title}
      description={description}
      path="/animals/duck"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Waterfowl", "Omnivore"]}
      image={getAnimalImage("duck") ?? undefined}
      galleryImages={getAnimalGalleryImages("duck")}
      factsHeaderNote="“Duck” is a common name for many waterfowl species in the family Anatidae. The reference species below is the mallard (Anas platyrhynchos); other ducks differ. Domestic ducks are a separate, domesticated context."
      overview={
        <>
          <p>
            &quot;Duck&quot; is a common name for many small-to-medium
            waterfowl in the family Anatidae, which also includes geese and
            swans. Ducks are found on fresh and salt water across most of the
            world. This page is a group-level overview; the mallard
            (<em>Anas platyrhynchos</em>) is used as a familiar reference
            species and is the wild ancestor of most domestic ducks. Not all
            ducks share the same habitat, diet, or behaviour.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Ducks occupy a wide range of wetland and aquatic habitats including
            ponds, lakes, rivers, marshes, estuaries, and coasts. Many species
            are migratory, moving seasonally between breeding and wintering
            areas, while others are resident year-round. Ranges vary by
            species and region, and some ducks tolerate urban parks and managed
            waterways well.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Most ducks are omnivores with diets that vary by species and
            feeding style. &quot;Dabbling&quot; ducks such as the mallard
            up-end at the surface to feed on aquatic plants, seeds, and small
            invertebrates, while &quot;diving&quot; ducks submerge to forage
            deeper. Diet shifts seasonally with the availability of plants and
            invertebrates. Feeding wild ducks bread is discouraged by wildlife
            organisations because it is poor nutrition for them.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Ducks are generally social birds, often seen in groups or large
            flocks outside the breeding season. Many species show strong
            sexual dimorphism, with brightly coloured males and more
            camouflaged females, especially during the breeding season.
            Behaviour varies widely across the group, including courtship
            displays, seasonal migration, and the famous early following
            behaviour of ducklings toward their mother.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            People interact with ducks as wildlife in wetlands and parks, as
            quarry in regulated hunting, and as domesticated poultry kept for
            eggs and meat. Conservation status varies by species — many ducks
            are common, but some are threatened by wetland loss and other
            pressures, and status should be checked against current IUCN Red
            List data. Wild ducks are wildlife, not pets; domestic ducks are a
            separate, domesticated context.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Ducks are typically compact waterbirds with a broad, flattened
                bill, webbed feet set well back on the body for swimming, and
                dense, water-repellent plumage kept waterproof with oil from a
                preen gland. The mallard drake is a familiar example, with a
                glossy green head, white neck-ring, and curled tail feathers,
                while the female is mottled brown for camouflage. Appearance
                varies enormously across the many duck species.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Ducks share the family Anatidae with geese and swans, which are
          generally larger and longer-necked. The goose is a close relative
          covered separately. Some unrelated diving birds, such as grebes and
          coots, are sometimes mistaken for ducks but belong to different
          families.
        </p>
      }
      faqs={[
        {
          question: "Are domestic ducks the same as wild ducks?",
          answer:
            "Most domestic ducks descend from the wild mallard (the Muscovy duck is a separate domesticated species). Domestic breeds differ in size, colour, and temperament and are kept as poultry, while wild ducks remain wildlife. This page is a general overview rather than care advice.",
        },
        {
          question: "Should I feed bread to wild ducks?",
          answer:
            "Wildlife organisations generally discourage feeding bread to ducks because it is low in the nutrients they need and uneaten bread can foul waterways. If feeding is allowed where you are, small amounts of more suitable foods are usually recommended over bread.",
        },
        {
          question: "Why are male and female ducks coloured so differently?",
          answer:
            "Many duck species show strong sexual dimorphism. Males are often brightly coloured, which is thought to play a role in courtship, while females are typically camouflaged in mottled brown to stay concealed while nesting. The degree of difference varies by species and season.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Ducks (family Anatidae)" },
        { label: "Reference species", value: "Mallard (Anas platyrhynchos)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mostly omnivorous; varies by species" },
        { label: "Habitat", value: "Wetlands, lakes, rivers, coasts" },
        { label: "Social structure", value: "Often flocking" },
        { label: "Conservation", value: "Varies by species — verify on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Goose Profile", href: "/animals/goose", description: "A close waterfowl relative" },
        { label: "Penguin Profile", href: "/animals/penguin" },
        { label: "Animal Encyclopedia — Birds", href: "/animal-encyclopedia/birds" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.duck}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
