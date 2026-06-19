import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/pilot-whale";
const TITLE = "Pilot Whale — Profile, Intelligence, Diet & Behavior";
const DESC =
  "Explore pilot whales (genus Globicephala): large, deep-diving members of the dolphin family with exceptionally strong social bonds and high intelligence.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("pilot-whale"),
});

export default function PilotWhalePage() {
  return (
    <AnimalProfileLayout
      commonName="Pilot Whale"
      scientificName="genus Globicephala"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine mammal", "Dolphin family", "Highly intelligent", "Deep diver"]}
      image={getAnimalImage("pilot-whale") ?? undefined}
      galleryImages={getAnimalGalleryImages("pilot-whale")}
      sources={ANIMAL_SOURCES["pilot-whale"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Pilot whales (genus <em>Globicephala</em>) are large, dark, robust
            members of the dolphin family — despite the name &ldquo;whale.&rdquo;
            There are two species, the long-finned and short-finned pilot whale,
            both recognised by a bulbous, rounded forehead (melon) and a strongly
            social way of life. The animal shown here is the long-finned pilot whale
            (<em>Globicephala melas</em>).
          </p>
          <p>
            Pilot whales are deep divers that hunt squid far below the surface, and
            they are known for the strength of their social bonds, which keep groups
            tightly together.
          </p>
          <p>
            <strong>Conservation note:</strong> pilot whales are widespread, but their
            strong group cohesion makes them vulnerable to mass strandings and to
            drive hunts in a few regions. Verify current status at iucnredlist.org and
            NOAA Fisheries.
          </p>
        </>
      }
      habitat={
        <p>
          Pilot whales range widely through deep temperate and tropical waters, mostly
          offshore over the continental slope and open ocean. The long-finned species
          favours cooler waters, while the short-finned species occupies warmer seas;
          their ranges overlap in some areas.
        </p>
      }
      diet={
        <p>
          Pilot whales feed mainly on squid, along with some fish. They are capable
          deep divers, descending hundreds of metres to reach prey, sometimes in fast
          &ldquo;sprint&rdquo; dives. Groups often forage together at depth.
        </p>
      }
      behavior={
        <p>
          Pilot whales are exceptionally social, living in stable groups built around
          long-term bonds; in some populations individuals stay in their natal group
          for life. They communicate with whistles and calls and use echolocation to
          hunt in the dark depths. Their powerful group cohesion — usually a strength —
          is also thought to contribute to mass strandings, when a whole group may
          follow others into trouble.
        </p>
      }
      humanInteraction={
        <p>
          The main human-related concerns for pilot whales are drive hunts in a few
          locations, accidental capture in fishing gear, pollution, and noise. Their
          tendency to mass-strand also brings them into contact with rescue efforts.
          For current status and regional context, consult NOAA Fisheries and the IUCN
          Red List.
        </p>
      }
      extraSections={[
        {
          heading: "Intelligence & Social Complexity",
          body: (
            <p>
              Pilot whales are highly intelligent and among the most socially bonded
              of all cetaceans. They live in stable, long-lasting groups, coordinate
              deep cooperative dives, and communicate with a complex range of calls;
              like orcas, some populations show <strong>long post-reproductive
              survival in females</strong>, suggesting older individuals carry
              valuable knowledge for the group. This intense sociality — central to
              their lives — is also why disturbances can affect a whole group at once.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is a pilot whale really a dolphin?",
          answer:
            "Yes. Despite the name, pilot whales are large members of the dolphin family (Delphinidae). Several big delphinids — including the orca and pilot whales — carry the name \"whale,\" but they are dolphins, which are themselves toothed whales.",
        },
        {
          question: "Why do pilot whales mass-strand?",
          answer:
            "Pilot whales have extremely strong social bonds and tend to stay together. While usually an advantage, this cohesion is thought to contribute to mass strandings: if some individuals end up in danger — through illness, navigation errors, or difficult coastlines — others may follow. The exact causes of any given stranding are complex and studied case by case.",
        },
        {
          question: "What do pilot whales eat?",
          answer:
            "Mainly squid, plus some fish. Pilot whales are capable deep divers, descending hundreds of metres to hunt, sometimes in rapid dives, and groups often forage together.",
        },
        {
          question: "How intelligent are pilot whales?",
          answer:
            "Very. As large-brained members of the dolphin family, pilot whales show advanced cognition and exceptional social complexity, with stable lifelong groups, cooperative deep-diving, and rich communication. Some populations also show long post-reproductive female lifespans, a trait linked to knowledgeable group elders.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Globicephala (2 species)" },
        { label: "Reference species", value: "Globicephala melas" },
        { label: "Family", value: "Delphinidae (dolphins)" },
        { label: "Class", value: "Mammalia (Cetacea)" },
        { label: "Diet", value: "Mainly squid (deep diver)" },
        { label: "Social structure", value: "Stable, tightly bonded groups" },
        { label: "Cognition", value: "Highly intelligent; strong social bonds" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Orca Profile", href: "/animals/orca", description: "The largest dolphin" },
        { label: "Dolphin Profile", href: "/animals/dolphin", description: "The dolphin family overview" },
        { label: "Whale Profile", href: "/animals/whale", description: "Cetaceans more broadly" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Deep-diving habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
