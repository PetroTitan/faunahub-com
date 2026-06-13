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

const title = "Newt — Profile, Habitat, Diet & Behavior";
const description =
  "Newts are small semi-aquatic salamanders. A group-level overview using the smooth newt as a reference — life cycle, habitat, and why wild amphibians should not be handled.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/newt",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("newt"),
});

export default function NewtPage() {
  return (
    <AnimalProfileLayout
      commonName="Newt"
      pageTitle={title}
      description={description}
      path="/animals/newt"
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Salamander", "Wild"]}
      image={getAnimalImage("newt") ?? undefined}
      galleryImages={getAnimalGalleryImages("newt")}
      factsHeaderNote="Newts are amphibians (a type of salamander), not reptiles, included in this combined section. The reference shown is the smooth newt. Wild amphibians have delicate skin and should not be handled; local wildlife rules vary."
      overview={
        <>
          <p>
            Newts are small semi-aquatic amphibians — a group within the
            salamanders (family Salamandridae). This page is a group-level
            overview; the smooth newt (<em>Lissotriton vulgaris</em>) is used as a
            familiar reference. Newts typically move between water and land
            across the seasons, breeding in ponds where males of many species
            develop crests and bright colours.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Newts live in and around fresh water — ponds, ditches, and slow
            streams — and in damp terrestrial habitats nearby for part of the
            year. Many species occur across Europe, Asia, and North America.
            Because amphibians depend on moisture and clean water, they are
            sensitive to habitat loss, pollution, and disease. Habitat and range
            vary by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Newts are carnivorous, feeding on small invertebrates such as
            insects, worms, and aquatic larvae, with the exact diet differing
            between their aquatic and terrestrial phases. This page describes
            general feeding ecology rather than care or feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many newts have a complex life cycle: eggs are laid in water, aquatic
            larvae develop gills, and most then transform for a more terrestrial
            life, returning to water to breed. During the breeding season males
            of several species develop crests and courtship displays. Some newts
            have toxins in their skin as a defence — another reason wild
            amphibians should not be handled. Behaviour varies by species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Newts are wild amphibians, not pets to be collected. Their permeable
            skin is sensitive, and some species are toxic, so handling can harm
            both the animal and the handler; many are also legally protected, and
            local wildlife rules vary. Amphibians worldwide face serious declines
            from habitat loss, disease, and pollution, so conservation status
            varies by species and should be checked against current sources. This
            page is educational, not care advice — observe newts without
            disturbing them.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Newts are small, lizard-like amphibians with slender bodies, four
                legs, long tails, and moist, often finely textured skin. The
                smooth newt is brownish with a spotted, orange-bellied
                underside, and breeding males develop a wavy crest. Unlike
                lizards (which are reptiles with dry, scaly skin), newts have
                soft, permeable amphibian skin — a key way to tell them apart.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Newts are salamanders, closely related to the fire salamander covered
          separately on FaunaHub. They are amphibians, like the toad and frog,
          and should not be confused with lizards such as geckos, which are
          dry-skinned reptiles despite a superficially similar shape.
        </p>
      }
      faqs={[
        {
          question: "Are newts reptiles or amphibians?",
          answer:
            "Newts are amphibians — specifically a kind of salamander — not reptiles. They have moist, permeable skin and a life cycle that usually involves water, unlike the dry, scaly skin and land-based eggs of reptiles such as lizards.",
        },
        {
          question: "Should I pick up a newt I find?",
          answer:
            "No. Wild amphibians have delicate, permeable skin that can be harmed by handling, some newts are toxic, and many are legally protected. Observe newts without touching them, and follow local wildlife rules, which vary by region.",
        },
        {
          question: "What is the difference between a newt and a salamander?",
          answer:
            "Newts are a subgroup of salamanders, generally smaller and more semi-aquatic, often spending part of the year in water to breed. All newts are salamanders, but not all salamanders are newts. This page uses the smooth newt as a reference.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Newts (family Salamandridae)" },
        { label: "Reference species", value: "Smooth newt (Lissotriton vulgaris)" },
        { label: "Class", value: "Amphibia" },
        { label: "Diet", value: "Carnivore (small invertebrates)" },
        { label: "Life cycle", value: "Aquatic eggs and larvae; semi-terrestrial adults" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Salamander Profile", href: "/animals/salamander", description: "The wider salamander group" },
        { label: "Toad Profile", href: "/animals/toad" },
        { label: "Frog Profile", href: "/animals/frog" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.newt}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
