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

const title = "Parrot — Overview of Parrot Species, Habitat & Behavior";
const description =
  "An overview of parrots (order Psittaciformes): diverse tropical birds, strong beaks and zygodactyl feet, vocal learning, and conservation and pet-ownership context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/parrot",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("parrot"),
});

export default function ParrotPage() {
  return (
    <AnimalProfileLayout
      commonName="Parrot"
      pageTitle={title}
      description={description}
      path="/animals/parrot"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Tropical", "Vocal Learner"]}
      image={getAnimalImage("parrot") ?? undefined}
      galleryImages={getAnimalGalleryImages("parrot")}
      factsHeaderNote='"Parrot" covers a very broad order. Specific traits below are typical of many species but not universal.'
      overview={
        <>
          <p>
            Parrots are a diverse order of birds (Psittaciformes) that
            includes macaws, cockatoos, conures, Amazon parrots, African
            grey parrots, and many other groups. They are characterised by
            strong curved beaks, zygodactyl feet (two toes forward, two
            back), and — in many species — sophisticated vocal learning.
            Most parrot species are native to tropical and subtropical
            regions, with the highest diversity in the Neotropics, Africa,
            and Australasia.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Parrot habitats range from lowland rainforest to savanna and
            arid scrub, depending on species. Many parrots are obligate or
            facultative cavity nesters, often using tree hollows. Habitat
            loss and the wildlife trade have placed many parrot species
            under significant conservation pressure. Status varies widely
            by species — check the IUCN Red List for any specific species
            of interest.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Most parrots are primarily herbivorous, eating seeds, fruit,
            nuts, buds, flowers, and pollen, with some species taking small
            quantities of insects or carrion. Diet specifics vary widely
            between species; an all-seed pet diet is now broadly considered
            inappropriate for most companion parrots, and modern care
            guidance generally recommends a varied diet centred on
            formulated pellets, fresh produce, and limited treats — under
            advice from an avian-experienced veterinarian.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many parrot species are highly intelligent and socially
            complex. Wild populations live in flocks with long-term pair
            bonds and rich vocal repertoires. Some species — notably the
            African grey parrot — show evidence of advanced cognitive
            abilities in laboratory studies. Vocal mimicry of human speech,
            other birds, and ambient sounds is well documented in several
            species; the underlying neural mechanisms are an active area of
            research.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Parrots are popular companion animals, but they are demanding
            long-lived pets with significant social, nutritional, and
            veterinary needs. Many species can live for decades and form
            strong pair-like bonds with their primary handler. Wild capture
            for the pet trade has been a serious conservation problem for
            many species; responsible ownership now centres on captive-bred
            birds, avian-experienced veterinary care, species-appropriate
            housing, and a multi-decade commitment. Always consult an
            avian veterinarian before acquiring a parrot.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Other intelligent birds include corvids (crows and ravens) and
          some passerines. Within the parrot order, large macaws,
          cockatoos, African greys, Amazons, conures, parakeets, lovebirds,
          and lories occupy different ecological and behavioural niches.
        </p>
      }
      faqs={[
        {
          question: "Do parrots really understand language?",
          answer:
            "Research on parrots — particularly African grey parrots — has documented impressive vocal and conceptual abilities. Whether this constitutes 'understanding language' in the human sense is contested. Authoritative summaries are available from reference sources such as Animal Diversity Web and Britannica.",
        },
        {
          question: "How long do parrots live?",
          answer:
            "Lifespan varies dramatically by species. Some smaller parrots live a decade or two; larger macaws and cockatoos can live for many decades. Confirm species-specific expectations with an avian veterinarian.",
        },
        {
          question: "Are wild-caught parrots ever legal pets?",
          answer:
            "Most international agreements and many national laws restrict trade in wild-caught parrots, and many parrot species are protected by CITES or domestic conservation law. Responsible pet ownership uses captive-bred birds from reputable sources only.",
        },
        {
          question: "What kind of vet does a parrot need?",
          answer:
            "Parrots need an avian or exotic-animal veterinarian familiar with bird medicine. General small-animal practices may not be appropriate. Establish a veterinary relationship before any health concern arises.",
        },
      ]}
      quickFacts={[
        { label: "Order", value: "Psittaciformes" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mainly herbivorous (varies by species)" },
        { label: "Social structure", value: "Flock-living with long-term pair bonds" },
        { label: "Range", value: "Mostly tropical and subtropical" },
        { label: "Lifespan", value: "Varies widely by species — some decades long" },
        { label: "Conservation status", value: "Varies (many species threatened) — verify per species" },
      ]}
      relatedLinks={[
        { label: "Eagle Profile", href: "/animals/eagle" },
        { label: "Falcon Profile", href: "/animals/falcon" },
        { label: "Birds Hub", href: "/animal-encyclopedia/birds" },
        { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
      ]}
      sources={ANIMAL_SOURCES.parrot}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
