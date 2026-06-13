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

const title = "Salamander — Profile, Habitat, Diet & Behavior";
const description =
  "Salamanders are tailed amphibians with moist skin. A group-level overview using the fire salamander as a reference — habitat, diet, and why amphibians should not be handled.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/salamander",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("salamander"),
});

export default function SalamanderPage() {
  return (
    <AnimalProfileLayout
      commonName="Salamander"
      pageTitle={title}
      description={description}
      path="/animals/salamander"
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Wild", "Moist-skinned"]}
      image={getAnimalImage("salamander") ?? undefined}
      galleryImages={getAnimalGalleryImages("salamander")}
      factsHeaderNote="Salamanders are amphibians, not reptiles, included in this combined section. The reference shown is the fire salamander (Salamandra salamandra). Wild amphibians have sensitive skin and should not be handled; local rules vary."
      overview={
        <>
          <p>
            Salamanders are tailed amphibians (order Caudata) with moist skin,
            usually four limbs, and a lizard-like shape — though, as amphibians,
            they are not reptiles. This page is a group-level overview; the fire
            salamander (<em>Salamandra salamandra</em>), with its striking
            black-and-yellow pattern, is used as a familiar reference. The group
            includes newts and many other forms, with most species in the
            Northern Hemisphere.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Salamanders live in damp habitats — forests, streams, springs, caves,
            and ponds — that keep their permeable skin moist. Some are fully
            aquatic, some terrestrial, and many move between the two. They occur
            mainly across the Northern Hemisphere, with great diversity in parts
            of North America. Because they depend on moisture and clean water,
            salamanders are sensitive to habitat change. Range varies by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Salamanders are carnivores, feeding on small invertebrates such as
            insects, worms, and slugs, with aquatic species also taking aquatic
            prey. This page describes general feeding ecology rather than care or
            feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many salamanders are secretive and most active at night or in wet
            conditions, sheltering under logs, leaf litter, or stones by day. Some
            can regenerate lost limbs and tails. The bright colours of species
            like the fire salamander warn predators of skin toxins — another
            reason wild amphibians should not be handled. Life cycles vary, from
            aquatic larvae to fully terrestrial development. Behaviour varies by
            species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Salamanders are wild amphibians, not pets to be collected. Their
            permeable skin is easily harmed, several species are toxic, and many
            are protected, with local wildlife rules varying. Amphibians face
            serious global declines from habitat loss, pollution, and disease
            (including a fungal disease affecting salamanders), so conservation
            status varies by species and should be checked against current
            sources. This page is educational, not care advice — observe
            salamanders without disturbing them.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Salamanders have slender bodies, long tails, short limbs, and
                smooth, moist skin. The fire salamander is glossy black with bold
                yellow (sometimes orange) markings that signal toxicity. Their
                soft, permeable amphibian skin distinguishes them from
                superficially similar lizards, which are dry-skinned, scaly
                reptiles. Size and colour vary widely across the group.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Salamanders include the newts covered separately on FaunaHub, and as
          amphibians they are relatives of the toad and frog. They are commonly
          confused with lizards such as geckos, but salamanders are
          moist-skinned amphibians, not scaly reptiles.
        </p>
      }
      faqs={[
        {
          question: "Are salamanders lizards?",
          answer:
            "No. Salamanders are amphibians with moist, permeable skin and (usually) an aquatic stage in their life cycle. Lizards are reptiles with dry, scaly skin. They can look similar, but they belong to entirely different classes of animal.",
        },
        {
          question: "Can salamanders regrow body parts?",
          answer:
            "Many salamanders are notable for regeneration, able to regrow lost limbs and tails — an ability studied by scientists. The extent varies by species, but it is a well-known feature of the group.",
        },
        {
          question: "Is it safe to handle a salamander?",
          answer:
            "Wild salamanders should not be handled: their skin is delicate and permeable, several species are toxic, and many are protected. Handling can harm the animal and, with toxic species, the handler. Observe them without touching, and follow local wildlife rules.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Salamanders (order Caudata)" },
        { label: "Reference species", value: "Fire salamander (Salamandra salamandra)" },
        { label: "Class", value: "Amphibia" },
        { label: "Diet", value: "Carnivore (small invertebrates)" },
        { label: "Notable trait", value: "Limb regeneration in many species" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Newt Profile", href: "/animals/newt", description: "A semi-aquatic salamander" },
        { label: "Toad Profile", href: "/animals/toad" },
        { label: "Frog Profile", href: "/animals/frog" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.salamander}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
