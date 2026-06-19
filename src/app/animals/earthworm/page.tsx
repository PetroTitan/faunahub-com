import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/earthworm";
const TITLE = "Earthworm — Profile, Soil Role, Biology & Behavior";
const DESC =
  "Explore the earthworm (Lumbricus terrestris and relatives): segmented annelid worms that aerate and enrich soil, making them quiet but vital engineers of land ecosystems.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("earthworm"),
});

export default function EarthwormPage() {
  return (
    <AnimalProfileLayout
      commonName="Earthworm"
      scientificName="Lumbricus terrestris and relatives"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Annelid", "Soil engineer"]}
      image={getAnimalImage("earthworm") ?? undefined}
      galleryImages={getAnimalGalleryImages("earthworm")}
      sources={ANIMAL_SOURCES.earthworm}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Earthworms are segmented worms — annelids — that live in soil and rank
            among the most important animals in land ecosystems, despite being rarely
            seen. The common earthworm (<em>Lumbricus terrestris</em>) is a familiar
            reference species. An earthworm&apos;s body is built from many similar ring-like
            segments, with a smooth, often paler band (the clitellum) toward the front
            that has a role in reproduction.
          </p>
          <p>
            By burrowing, feeding, and producing nutrient-rich castings, earthworms
            mix, aerate, and enrich the soil — work so significant that Charles Darwin
            devoted a whole book to it.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;earthworm&rdquo; covers many species
            worldwide; some are introduced outside their native ranges, where their
            effects on soils and forests can be mixed. Treat general statements
            accordingly and verify specifics.
          </p>
        </>
      }
      habitat={
        <p>
          Earthworms live in soils across much of the world, from gardens, grasslands,
          and farmland to forests, wherever the ground is moist enough and contains
          organic matter. Different species occupy different soil layers — from surface
          leaf litter to deep vertical burrows.
        </p>
      }
      diet={
        <p>
          Earthworms feed on dead and decaying organic matter — leaves, roots, and
          other plant material — along with the microbes and fine particles in soil.
          They draw food into their burrows and pass soil through their gut, extracting
          nutrients and leaving behind nutrient-rich castings that enrich the earth.
        </p>
      }
      behavior={
        <p>
          Earthworms move by waves of muscle contraction, gripping the soil with tiny
          bristles (setae) on each segment. They breathe through their moist skin,
          which is why they need damp conditions and may come to the surface after
          heavy rain. Earthworms are hermaphrodites — each has both male and female
          organs — but two worms still pair up to exchange sperm, after which the
          clitellum forms a cocoon that holds the developing eggs.
        </p>
      }
      humanInteraction={
        <p>
          Earthworms are hugely beneficial to gardening and agriculture: their
          burrowing aerates soil and improves drainage, and their castings boost
          fertility, which is why they are valued in composting (vermiculture) and as
          indicators of healthy soil. In some regions, however, introduced earthworms
          can alter native forest soils, so their role is not universally positive.
          Consult authoritative sources for specifics.
        </p>
      }
      faqs={[
        {
          question: "Why are earthworms good for soil?",
          answer:
            "As earthworms burrow and feed, they mix and aerate the soil, improve drainage, and break down organic matter. Their nutrient-rich droppings (castings) enrich the earth, and their tunnels help water and roots penetrate. This makes them key \"ecosystem engineers\" of healthy soils.",
        },
        {
          question: "If you cut an earthworm in half, do you get two worms?",
          answer:
            "No — this is a myth. An earthworm cannot become two living worms. Some can regenerate a limited portion of the body under the right circumstances, but cutting a worm in half generally injures or kills it rather than producing two individuals.",
        },
        {
          question: "Are earthworms male or female?",
          answer:
            "Both. Earthworms are hermaphrodites, meaning each individual has both male and female reproductive organs. Even so, two worms normally mate by exchanging sperm, and then each can produce egg cocoons via the saddle-like clitellum.",
        },
        {
          question: "Why do earthworms come out after rain?",
          answer:
            "Earthworms breathe through their moist skin and need damp conditions, but they can't survive being waterlogged or trapped in flooded burrows; they also move more easily across wet surfaces. After heavy rain they often appear above ground, which may help them move or disperse, though the exact reasons are still studied.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Lumbricus terrestris" },
        { label: "Phylum", value: "Annelida (segmented worms)" },
        { label: "Body", value: "Many ring-like segments; clitellum" },
        { label: "Diet", value: "Dead organic matter & soil microbes" },
        { label: "Reproduction", value: "Hermaphrodite; egg cocoons" },
        { label: "Breathing", value: "Through moist skin" },
        { label: "Role", value: "Aerates & enriches soil" },
        { label: "Habitat", value: "Moist soils worldwide" },
      ]}
      relatedLinks={[
        { label: "Beetle Profile", href: "/animals/beetle", description: "Another soil-dwelling invertebrate group" },
        { label: "Ant Profile", href: "/animals/ant", description: "A soil-working insect" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Soil fauna in context" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
