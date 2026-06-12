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

const title = "Tetra — Profile, Habitat, Diet & Behavior";
const description =
  "Tetras are small schooling fish popular in aquariums. A group-level overview using the neon tetra as a reference species: appearance, habitat, and shoaling behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/tetra",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("tetra"),
});

export default function TetraPage() {
  return (
    <AnimalProfileLayout
      commonName="Tetra"
      pageTitle={title}
      description={description}
      path="/animals/tetra"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Aquarium"]}
      image={getAnimalImage("tetra") ?? undefined}
      galleryImages={getAnimalGalleryImages("tetra")}
      factsHeaderNote="“Tetra” covers many small characin species. The reference species shown is the neon tetra (Paracheirodon innesi). Care needs and origins vary by species; tetras are schooling fish that should not be kept alone."
      overview={
        <>
          <p>
            &quot;Tetra&quot; is a common name for many small freshwater fish in
            the characin group, especially popular aquarium species such as the
            neon tetra and cardinal tetra. This page is a group-level overview;
            the neon tetra (<em>Paracheirodon innesi</em>) is used as a familiar
            reference. Tetras are prized in the hobby for their small size,
            bright colours, and tight schooling behaviour, but they are social
            fish with specific needs.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Many popular tetras come from the warm fresh waters of tropical
            South America, including the Amazon basin, where species such as the
            neon tetra live in soft, often tannin-stained streams. Other tetras
            occur in Africa and Central America. In aquariums they are tropical
            fish needing heated, filtered water. Habitat and water preferences
            vary by species, so a description of one tetra does not apply to all.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Tetras are generally omnivores that feed on tiny invertebrates,
            zooplankton, and plant matter in the wild, and on prepared foods in
            aquariums. This page does not give feeding quantities; appropriate
            diet and amounts depend on the species and tank and should follow
            qualified aquarium guidance.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Most aquarium tetras are shoaling fish that feel secure and behave
            naturally in groups; keeping them in adequate numbers is widely
            considered important for their welfare. They are usually peaceful
            and active, making them common community-tank fish, though some
            species can nip fins. Behaviour depends on the species, group size,
            and tank conditions.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Tetras are among the most popular freshwater aquarium fish and are
            bred in large numbers for the hobby. They are aquarium animals, not
            wildlife; releasing them is harmful. Some wild tetra populations can
            be affected by habitat change and collection pressures. Conservation
            status varies by species and should be checked against current
            sources. Responsible keeping means an appropriate school size,
            maintained water, and qualified help if fish appear unwell.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Tetras are typically small, slender fish, often with bright or
                iridescent markings. The neon tetra is a classic example, with a
                shimmering blue-green stripe along the body and a red stripe to
                the rear. Many tetras have a small adipose fin between the dorsal
                fin and tail, a feature of the characin group. Colours and
                patterns vary widely across the many species.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Tetras are characins, related to other characin fish and, more
          distantly, to the carp-family fish covered on FaunaHub. In community
          aquariums they are often kept alongside peaceful species; angelfish,
          however, are larger cichlids that may view the smallest tetras as
          prey, so combinations need care.
        </p>
      }
      comparisonCallouts={[
        { href: "/aquarium-care/freshwater-aquarium-beginners", label: "Freshwater aquarium basics" },
        { href: "/aquarium-care", label: "Aquarium care hub" },
      ]}
      faqs={[
        {
          question: "How many tetras should be kept together?",
          answer:
            "Tetras are schooling fish and are widely recommended to be kept in groups rather than alone or in pairs, because grouping supports natural behaviour and reduces stress. The right number depends on the species and tank, so follow qualified aquarium guidance.",
        },
        {
          question: "Are neon tetras and cardinal tetras the same?",
          answer:
            "No. They look similar — both have a blue and red stripe — but they are different species and differ in the extent of the red stripe and in some care details. \"Tetra\" as a whole covers many species, which is why this page is a group-level overview.",
        },
        {
          question: "Are tetras good community fish?",
          answer:
            "Many tetras are peaceful and popular in community aquariums, but some can nip fins and the smallest species can be eaten by larger tank mates. Compatibility depends on the species and setup, so research each combination carefully.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Tetras (characins)" },
        { label: "Reference species", value: "Neon tetra (Paracheirodon innesi)" },
        { label: "Type", value: "Freshwater fish (tropical)" },
        { label: "Behaviour", value: "Schooling — keep in groups" },
        { label: "Diet", value: "Omnivore" },
        { label: "Context", value: "Popular aquarium fish; needs heated, filtered water" },
      ]}
      relatedLinks={[
        { label: "Angelfish Profile", href: "/animals/angelfish", description: "A common community-tank centrepiece" },
        { label: "Guppy Profile", href: "/animals/guppy" },
        { label: "Aquarium Care Hub", href: "/aquarium-care", description: "Responsible fishkeeping basics" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.tetra}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
