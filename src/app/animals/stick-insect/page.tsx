import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/stick-insect";
const TITLE = "Stick Insect — Profile, Master of Camouflage & Biology";
const DESC =
  "Explore stick insects (order Phasmatodea): plant-eating insects that mimic twigs and leaves so perfectly they vanish in plain sight — including some of the longest insects on Earth.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("stick-insect"),
});

export default function StickInsectPage() {
  return (
    <AnimalProfileLayout
      commonName="Stick Insect"
      scientificName="order Phasmatodea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Invertebrate", "Camouflage"]}
      image={getAnimalImage("stick-insect") ?? undefined}
      galleryImages={getAnimalGalleryImages("stick-insect")}
      sources={ANIMAL_SOURCES["stick-insect"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Stick insects (order Phasmatodea, which also includes the leaf insects) are among
            nature&apos;s greatest masters of disguise. Their long, slender bodies and limbs
            mimic twigs, stems, and leaves so closely that they seem to disappear against the
            plants they live on. The order&apos;s name comes from a Greek word for
            &ldquo;phantom&rdquo; or &ldquo;apparition,&rdquo; reflecting how easily these
            insects vanish in plain sight. Some species are extraordinarily long — among the
            longest insects in the world.
          </p>
          <p>
            Camouflage is only the start: many stick insects add to the illusion by swaying
            like a twig in the breeze, and they have an array of further defences and unusual
            reproductive tricks.
          </p>
          <p>
            <strong>Note:</strong> there are thousands of stick and leaf insect species;
            details here cover them broadly. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Stick insects are found mainly in the tropics and subtropics, but also in temperate
          regions, living among the vegetation they eat — in forests, woodlands, scrub, and
          gardens. They spend their lives on or among the leaves and stems of their host plants,
          where their camouflage works best.
        </p>
      }
      diet={
        <p>
          Stick insects are herbivores, feeding on the leaves of trees, shrubs, and other
          plants — many species specialise on particular host plants. They feed mostly at night,
          when it is safer to move, and chew foliage with simple mouthparts. In large numbers
          some species can strip foliage, but most are harmless to their host plants overall.
        </p>
      }
      behavior={
        <p>
          Camouflage and stillness are a stick insect&apos;s main defences: by day they stay
          motionless, looking just like the twigs around them, and many gently rock or sway to
          mimic a stem moving in the wind. If discovered, different species have backup defences
          — startling flashes of brightly coloured hindwings, the release of foul-smelling or
          irritating chemicals, defensive postures, or shedding a leg to escape (it can partly
          regrow). Reproduction is unusual too: many stick insects can reproduce without males
          (parthenogenesis), with females laying eggs that develop into more females, and their
          seed-like eggs are sometimes spread by ants.
        </p>
      }
      humanInteraction={
        <p>
          Stick insects are harmless to people and are popular, easy-to-keep pets and classroom
          animals, valued for their gentle nature and remarkable looks. In the wild they are an
          important part of food webs as plant-eaters and as prey for birds and other animals.
          Most are common, though some — such as certain island species — are rare and of
          conservation concern. They should not be released outside their native range. Consult
          authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "How do stick insects camouflage so well?",
          answer:
            "Their bodies and limbs are shaped and coloured to look like twigs, stems, or leaves, so they blend into the plants they live on. They reinforce the disguise by staying motionless during the day and, in many species, gently swaying as if moved by a breeze. The effect is so good that stick insects can be almost impossible to spot.",
        },
        {
          question: "Do stick insects need males to reproduce?",
          answer:
            "Often not. Many stick insects can reproduce by parthenogenesis — females laying eggs that develop without being fertilised, producing more females. Some species reproduce this way most or all of the time, while others use normal mating. This flexibility helps them colonise new areas from even a single individual.",
        },
        {
          question: "Are stick insects dangerous?",
          answer:
            "No — stick insects are harmless to people. They don't bite or sting in any meaningful way (a few can release mildly irritating chemicals or pinch defensively), and they are gentle, slow-moving plant-eaters. This is part of why they are such popular and safe pets and educational animals.",
        },
        {
          question: "How big do stick insects get?",
          answer:
            "It varies enormously, but some are remarkably long — certain tropical species are among the longest insects in the world, measuring well over 30 cm including the legs. Most stick insects are smaller, but their extreme elongation is part of what makes the largest species so impressive.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Phasmatodea (with leaf insects)" },
        { label: "Diet", value: "Herbivore (leaves)" },
        { label: "Signature trait", value: "Twig/leaf camouflage; sways like a stem" },
        { label: "Size", value: "Some among the longest insects on Earth" },
        { label: "Defences", value: "Camouflage; chemicals; bright wing flashes" },
        { label: "Reproduction", value: "Often parthenogenetic (no males needed)" },
        { label: "To humans", value: "Harmless; popular pets" },
        { label: "Range", value: "Mainly tropics; also temperate regions" },
      ]}
      relatedLinks={[
        { label: "Praying Mantis Profile", href: "/animals/praying-mantis", description: "Another twig-like ambush insect" },
        { label: "Grasshopper Profile", href: "/animals/grasshopper", description: "A related plant-feeding insect" },
        { label: "Beetle Profile", href: "/animals/beetle", description: "The most diverse insect group" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Insect fauna in context" },
      ]}
    />
  );
}
