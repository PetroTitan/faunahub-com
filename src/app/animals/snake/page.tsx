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

const title = "Snake — Overview of Snake Biology, Habitat & Behavior";
const description =
  "Snakes (suborder Serpentes): legless reptiles with diverse habitats and diets. Cautious overview, with snakebite safety guidance kept conservative and vet-aware.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/snake",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("snake"),
});

export default function SnakePage() {
  return (
    <AnimalProfileLayout
      commonName="Snake"
      pageTitle={title}
      description={description}
      path="/animals/snake"
      parentCategory="Reptiles"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Squamate", "Carnivore"]}
      image={getAnimalImage("snake") ?? undefined}
      galleryImages={getAnimalGalleryImages("snake")}
      factsHeaderNote='"Snake" covers more than 3,000 species in suborder Serpentes. Specific traits below are generalisations; consult species accounts before drawing any conclusion about a specific snake.'
      overview={
        <>
          <p>
            Snakes are limbless reptiles of the suborder Serpentes — a
            highly diverse group of squamate reptiles distributed across
            almost every continent except Antarctica. Body sizes range
            from very small thread snakes to the very large pythons,
            boas, and anacondas. Snakes share a clearly recognisable body
            plan: an elongated trunk, no functional limbs, paired internal
            organs arranged in series along the body, and a forked tongue
            used for chemosensation.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Snakes occupy nearly every terrestrial habitat — forest, desert,
            grassland, wetland — and several lineages are highly aquatic or
            even fully marine. Specific habitat preferences vary widely by
            species; reference species accounts are the appropriate source
            for any specific snake.
          </p>
        </>
      }
      diet={
        <>
          <p>
            All snakes are carnivorous. Prey ranges from invertebrates and
            small amphibians in the smaller species to large mammals in
            constrictors such as some pythons. Some snake species are
            venomous and use venom to subdue prey; others kill by
            constriction or simply by ingestion. Diet specifics vary
            sharply by species.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Most snakes are solitary outside the breeding season. Activity
            patterns vary widely — many temperate species are diurnal in
            cool weather and shift to nocturnal activity in summer heat.
            Snakes shed their skin periodically (ecdysis), reproduce by
            laying eggs or by giving birth to live young depending on the
            species, and use the Jacobson&apos;s organ together with their
            forked tongue for an unusually directional sense of smell.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Snakebite remains a serious public-health issue in many parts
            of the world. The World Health Organization classifies
            snakebite envenoming as a neglected tropical disease. FaunaHub
            does not provide first-aid instructions. In the event of any
            snakebite, contact local emergency medical services and follow
            their guidance; do not rely on internet first-aid summaries or
            traditional remedies. Pet snake keeping is legal in many
            jurisdictions but is regulated for venomous and large
            constrictor species in most places.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Other squamate reptiles include lizards. Worm-like amphibians
          such as caecilians and several legless lizard species
          superficially resemble snakes but are not related at any close
          evolutionary level. The corn snake used as a reference image is
          one of several popular non-venomous pet species.
        </p>
      }
      faqs={[
        {
          question: "Are all snakes venomous?",
          answer:
            "No. Most snake species are not medically significant to humans. A subset — including elapids, vipers, and some colubrids — produce venom of varying medical importance. Identifying any specific snake should be left to a qualified expert.",
        },
        {
          question: "What should I do if a snake bites me?",
          answer:
            "Treat any snakebite as a medical emergency. Contact local emergency services and follow their guidance. Do not apply tourniquets, attempt to suck out venom, or use traditional or internet first-aid remedies, which can cause additional injury. Medical centres in venomous-snake regions follow standardised treatment protocols.",
        },
        {
          question: "Can snakes be good pets?",
          answer:
            "Some non-venomous species — particularly captive-bred corn snakes, ball pythons, and garter snakes — are commonly kept as pets in many regions. Responsible ownership requires species-appropriate enclosures, temperature gradients, feeding schedules, and an exotic-animal veterinarian. Wild capture should be avoided. Verify local law before acquiring any reptile.",
        },
        {
          question: "How long do snakes live?",
          answer:
            "Lifespan varies considerably by species and individual. Many commonly kept pet species can live well over a decade in good captive conditions. Wild lifespan is typically shorter due to predation and other pressures.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Corn snake (Pantherophis guttatus)" },
        { label: "Suborder", value: "Serpentes" },
        { label: "Class", value: "Reptilia" },
        { label: "Order", value: "Squamata" },
        { label: "Diet", value: "Carnivore (varies by species)" },
        { label: "Distribution", value: "Worldwide, except Antarctica" },
        { label: "Conservation status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Turtle Profile", href: "/animals/turtle" },
        { label: "Crocodile Profile", href: "/animals/crocodile" },
        { label: "Alligator Profile", href: "/animals/alligator" },
        { label: "Reptiles Hub", href: "/animal-encyclopedia/reptiles" },
      ]}
      sources={ANIMAL_SOURCES.snake}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
