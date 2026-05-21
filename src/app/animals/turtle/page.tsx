import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Turtle — Overview of Turtle Species, Habitat & Behavior";
const description =
  "Turtles, tortoises, and terrapins (order Testudines): shelled reptiles across freshwater, marine, and terrestrial habitats, with cautious conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/turtle",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("turtle"),
});

export default function TurtlePage() {
  return (
    <AnimalProfileLayout
      commonName="Turtle"
      pageTitle={title}
      description={description}
      path="/animals/turtle"
      parentCategory="Reptiles"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Testudines", "Shelled"]}
      image={getAnimalImage("turtle") ?? undefined}
      galleryImages={getAnimalGalleryImages("turtle")}
      factsHeaderNote='"Turtle" on this page covers the order Testudines, including tortoises, terrapins, and sea turtles. The reference image is an Eastern box turtle (Terrapene carolina).'
      overview={
        <>
          <p>
            Turtles are reptiles of the order Testudines, characterised by
            a bony or cartilaginous shell consisting of a domed upper
            carapace and flat lower plastron, into which most species can
            partially or fully retract head and limbs. The order includes
            sea turtles, freshwater turtles and terrapins, and the
            generally terrestrial tortoises.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Turtles occupy a remarkable range of habitats — open ocean,
            tropical rivers, North American hardwood forests, arid
            grasslands, and high-latitude wetlands. Sea turtles undertake
            very long migrations between feeding and nesting beaches.
            Tortoises are primarily terrestrial and often adapted to dry
            habitats.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Diet varies sharply between groups. Many sea turtles are
            herbivorous as adults (green sea turtles feed primarily on
            seagrass and algae) while others, such as leatherbacks, feed
            on gelatinous prey such as jellyfish. Freshwater turtles
            include omnivores and carnivores; tortoises are typically
            herbivorous. Specific diet should be confirmed by species-level
            reference.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Turtles are typically long-lived, slow-developing animals with
            late sexual maturity and high adult survival. Many species lay
            eggs in nests dug on land or beach. Sex determination in many
            turtle species is temperature-dependent, with incubation
            temperature influencing the sex of hatchlings — a
            characteristic that makes some species particularly vulnerable
            to a warming climate.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Many turtle species are seriously threatened. Sea turtles face
            ongoing pressure from bycatch, plastic and other marine
            pollution, beach development, and climate change. Tortoises
            and freshwater turtles face habitat loss and illegal trade for
            the pet and food markets. Pet ownership of turtles is regulated
            in many jurisdictions; in the United States, sale of small
            turtles is restricted because of salmonella public-health
            concerns. Always verify legal and welfare guidance before
            acquiring a pet turtle, and work with an exotic-animal vet.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Other reptiles include lizards, snakes, and crocodilians. The
          related groups within Testudines — tortoises, terrapins, and sea
          turtles — share the basic shelled body plan but differ
          substantially in ecology.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between turtles, tortoises, and terrapins?",
          answer:
            "All belong to the order Testudines. 'Tortoise' generally refers to terrestrial species in family Testudinidae. 'Terrapin' is used inconsistently across English dialects and typically refers to a small freshwater or brackish-water turtle. 'Turtle' is the broadest term and covers the whole order.",
        },
        {
          question: "Why are sea turtles considered endangered?",
          answer:
            "Most sea turtle species are listed as threatened or endangered. Threats include bycatch in fisheries, plastic and other marine pollution, beach development, light pollution affecting hatchling orientation, illegal trade, and climate-driven impacts on nest-site sex ratios. Verify current IUCN status per species.",
        },
        {
          question: "Can turtles live a hundred years?",
          answer:
            "Some tortoise species are well documented to live over a century. Many sea turtles and freshwater turtles also have very long lifespans. Lifespan varies by species and individual; authoritative species accounts give specific ranges.",
        },
        {
          question: "Are pet turtles safe for children?",
          answer:
            "Turtles commonly carry Salmonella bacteria, which can cause illness in humans — particularly in young children. The U.S. Food and Drug Administration restricts sale of small turtles for this reason. Hand washing and supervised handling are essential where pet turtles are present.",
        },
      ]}
      quickFacts={[
        { label: "Reference species (image)", value: "Eastern box turtle (Terrapene carolina)" },
        { label: "Order", value: "Testudines" },
        { label: "Class", value: "Reptilia" },
        { label: "Major groups", value: "Sea turtles, freshwater turtles & terrapins, tortoises" },
        { label: "Diet", value: "Varies by group" },
        { label: "Lifespan", value: "Often long; some tortoises exceed 100 years" },
        { label: "Conservation status", value: "Many species threatened (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Snake Profile", href: "/animals/snake" },
        { label: "Crocodile Profile", href: "/animals/crocodile" },
        { label: "Alligator Profile", href: "/animals/alligator" },
        { label: "Reptiles Hub", href: "/animal-encyclopedia/reptiles" },
      ]}
      sources={ANIMAL_SOURCES.turtle}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
