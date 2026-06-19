import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sea-anemone";
const TITLE = "Sea Anemone — Profile, Stinging Tentacles & Clownfish Partnership";
const DESC =
  "Explore sea anemones (order Actiniaria): soft-bodied, skeleton-less relatives of corals whose stinging tentacles catch prey — and famously shelter clownfish.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("sea-anemone"),
});

export default function SeaAnemonePage() {
  return (
    <AnimalProfileLayout
      commonName="Sea Anemone"
      scientificName="order Actiniaria"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Cnidarian", "Coral relative"]}
      image={getAnimalImage("sea-anemone") ?? undefined}
      galleryImages={getAnimalGalleryImages("sea-anemone")}
      sources={ANIMAL_SOURCES["sea-anemone"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Sea anemones (order Actiniaria) are soft-bodied marine animals — close
            relatives of corals and jellyfish in the phylum Cnidaria. Essentially a
            single large polyp without a hard skeleton, an anemone is a column topped by
            a ring of stinging tentacles around a central mouth. They are named after a
            land flower because of their colourful, petal-like crown of tentacles.
          </p>
          <p>
            Anemones are famous for their partnership with clownfish (anemonefish),
            which shelter unharmed among the stinging tentacles — one of the most
            celebrated relationships in the sea.
          </p>
          <p>
            <strong>Note:</strong> anemones&apos; tentacles bear stinging cells used to
            capture prey; some can give a noticeable sting, so wild anemones are best not
            handled. Treat details as general and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sea anemones live in oceans worldwide, from tropical reefs to cold and deep
          seas, usually attached to rocks, reefs, shells, or the seabed. Some attach to
          hard surfaces, others anchor in sand or mud, and a few live on the shells
          carried by hermit crabs.
        </p>
      }
      diet={
        <p>
          Sea anemones are carnivores. They capture prey — small fish, shrimp, plankton,
          and other animals — using tentacles armed with microscopic stinging cells
          (nematocysts) that fire on contact, then draw the food to the central mouth.
          Many reef anemones also host symbiotic algae that supply extra energy.
        </p>
      }
      behavior={
        <p>
          Although they look plant-like and usually stay put, anemones are animals and
          can slowly glide on their base, and some detach to relocate if conditions
          change. They retract their tentacles when disturbed or exposed. Anemones may
          reproduce sexually or by splitting and budding, and some form clonal groups
          covering a surface.
        </p>
      }
      humanInteraction={
        <p>
          Sea anemones are a beloved part of reef life, especially through the
          clownfish partnership made famous in popular culture. They are sensitive to
          the same pressures as other reef animals — warming seas can cause anemones,
          like corals, to bleach. Wild anemones should be observed without touching. For
          current status, consult authoritative sources.
        </p>
      }
      faqs={[
        {
          question: "Is a sea anemone a plant or an animal?",
          answer:
            "A sea anemone is an animal — a cnidarian, closely related to corals and jellyfish. Its flower-like crown of tentacles gives it a plant-like look and its name, but it captures prey, can move slowly, and is firmly an animal.",
        },
        {
          question: "How do clownfish live in a sea anemone without being stung?",
          answer:
            "Clownfish (anemonefish) have a protective mucus coating and behaviour that let them live among the anemone's stinging tentacles largely unharmed. In return, the fish gains shelter from predators while helping deter the anemone's enemies and keeping it clean — a mutually beneficial partnership.",
        },
        {
          question: "Do sea anemones sting people?",
          answer:
            "Their tentacles carry stinging cells used to catch prey, and some species can deliver a noticeable sting to people, while many are too weak to be felt through skin. As a precaution, wild anemones are best observed rather than handled. This page does not provide medical advice.",
        },
        {
          question: "Can sea anemones move?",
          answer:
            "Yes, slowly. Although anemones usually stay anchored, many can glide gradually on their base, and some can detach and relocate if needed. They also retract their tentacles when disturbed.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Actiniaria" },
        { label: "Class", value: "Anthozoa (cnidarians)" },
        { label: "Relatives", value: "Corals & jellyfish" },
        { label: "Body", value: "Soft polyp; no hard skeleton" },
        { label: "Diet", value: "Carnivore (stinging tentacles)" },
        { label: "Famous partner", value: "Clownfish (anemonefish)" },
        { label: "Habitat", value: "Oceans worldwide" },
        { label: "Status", value: "Varies; reef pressures apply" },
      ]}
      relatedLinks={[
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "The anemone's famous partner" },
        { label: "Coral Profile", href: "/animals/coral", description: "A close anthozoan relative" },
        { label: "Jellyfish Profile", href: "/animals/jellyfish", description: "Another cnidarian" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
