import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/giant-squid";
const TITLE = "Giant Squid — Profile, Size, Deep-Sea Life & Behavior";
const DESC =
  "Explore the giant squid (Architeuthis dux): one of the largest invertebrates on Earth, a deep-ocean cephalopod with enormous eyes that was filmed alive in the wild only recently.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("giant-squid"),
});

export default function GiantSquidPage() {
  return (
    <AnimalProfileLayout
      commonName="Giant Squid"
      scientificName="Architeuthis dux"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Cephalopod", "Deep sea"]}
      image={getAnimalImage("giant-squid") ?? undefined}
      galleryImages={getAnimalGalleryImages("giant-squid")}
      sources={ANIMAL_SOURCES["giant-squid"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The giant squid (<em>Architeuthis dux</em>) is one of the largest
            invertebrates ever known, a deep-ocean cephalopod that has fascinated
            people for centuries and helped inspire legends of sea monsters. It has a
            long mantle, eight arms, two much longer feeding tentacles, and among the
            largest eyes of any animal — adaptations for detecting faint light and
            movement in the deep.
          </p>
          <p>
            For most of history the giant squid was known only from carcasses washed
            ashore or recovered from sperm whales; it was not filmed alive in its
            natural deep-sea habitat until the twenty-first century, and much about it
            remains mysterious.
          </p>
          <p>
            <strong>Note:</strong> because giant squid are so rarely observed,
            statements about their maximum size and biology are estimates that should
            be treated cautiously and verified against authoritative marine sources.
          </p>
        </>
      }
      habitat={
        <p>
          Giant squid live in the deep ocean, generally in cold waters well below the
          surface, and are found in many of the world&apos;s oceans. They are thought
          to spend their lives in the deep water column rather than near the seafloor
          or the surface.
        </p>
      }
      diet={
        <p>
          Giant squid are carnivores that feed on deep-sea fish and other squid,
          seizing prey with the two long tentacles, which bear toothed suckers, and
          drawing it to the powerful beak. Their enormous eyes likely help them detect
          prey — and predators — in near-total darkness.
        </p>
      }
      behavior={
        <p>
          Giant squid are believed to be largely solitary deep-water animals. Their
          best-known relationship is with the sperm whale, their main predator: sperm
          whales regularly carry the marks of giant squid suckers and the indigestible
          squid beaks in their stomachs, which is one way scientists have studied them.
          Like other squid, they move by jet propulsion and have keen senses suited to
          the dark.
        </p>
      }
      humanInteraction={
        <p>
          People almost never meet giant squid alive; most knowledge comes from
          stranded or netted carcasses, sperm-whale studies, and a handful of deep-sea
          encounters captured on camera. They are not a target of major fisheries, and
          the broad concerns relate to the health of deep-ocean ecosystems. Consult
          authoritative marine sources for current information.
        </p>
      }
      faqs={[
        {
          question: "How big is a giant squid?",
          answer:
            "Giant squid are among the largest invertebrates, with very long bodies when the feeding tentacles are included. Because they are so rarely measured reliably, maximum-size claims vary and should be treated with caution; many of the largest figures are estimates rather than confirmed measurements.",
        },
        {
          question: "Has a giant squid ever been filmed alive?",
          answer:
            "Yes, but only recently. For most of history the giant squid was known from carcasses and from remains in sperm whales. It was first filmed alive in its natural deep-sea habitat in the twenty-first century, a landmark in marine biology.",
        },
        {
          question: "What eats giant squid?",
          answer:
            "The main known predator is the sperm whale. Sperm whales frequently bear scars from giant squid suckers and contain squid beaks in their stomachs, which has been an important source of information about these elusive animals.",
        },
        {
          question: "Why do giant squid have such huge eyes?",
          answer:
            "Their eyes are among the largest in the animal kingdom, an adaptation to the deep sea: very large eyes can gather more of the faint light there, which may help giant squid detect large predators such as approaching sperm whales as well as prey.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Architeuthis dux" },
        { label: "Class", value: "Cephalopoda (molluscs)" },
        { label: "Claim to fame", value: "One of the largest invertebrates" },
        { label: "Eyes", value: "Among the largest of any animal" },
        { label: "Diet", value: "Deep-sea fish & squid" },
        { label: "Main predator", value: "Sperm whale" },
        { label: "Habitat", value: "Deep ocean water column" },
        { label: "Status", value: "Not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Squid Profile", href: "/animals/squid", description: "Squid more broadly" },
        { label: "Octopus Profile", href: "/animals/octopus", description: "Another cephalopod" },
        { label: "Dumbo Octopus Profile", href: "/animals/dumbo-octopus", description: "A deep-sea cephalopod" },
        { label: "Whale Profile", href: "/animals/whale", description: "Includes the sperm whale, its predator" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
