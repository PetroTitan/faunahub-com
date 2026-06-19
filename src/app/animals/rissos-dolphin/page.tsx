import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/rissos-dolphin";
const TITLE = "Risso's Dolphin — Profile, Intelligence, Diet & Behavior";
const DESC =
  "Explore Risso's dolphin (Grampus griseus): a robust, heavily scarred grey dolphin that hunts squid in deep water — an intelligent, social member of the dolphin family.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("rissos-dolphin"),
});

export default function RissosDolphinPage() {
  return (
    <AnimalProfileLayout
      commonName="Risso's Dolphin"
      scientificName="Grampus griseus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine mammal", "Dolphin family", "Highly intelligent", "Deep diver"]}
      image={getAnimalImage("rissos-dolphin") ?? undefined}
      galleryImages={getAnimalGalleryImages("rissos-dolphin")}
      sources={ANIMAL_SOURCES["rissos-dolphin"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Risso&apos;s dolphin (<em>Grampus griseus</em>) is a large, robust dolphin
            easily recognised by its blunt, beakless head and pale grey body covered
            in a network of scratches and scars. Older animals can appear almost
            white from the accumulated markings, which come from interactions with
            other Risso&apos;s dolphins and from the squid they hunt.
          </p>
          <p>
            A deep-water specialist, Risso&apos;s dolphin is found in temperate and
            tropical seas worldwide and, like other dolphins, is intelligent and
            social.
          </p>
          <p>
            <strong>Conservation note:</strong> Risso&apos;s dolphin is widespread and
            generally not of high concern overall, though some populations face
            pressures such as bycatch. Verify current status at iucnredlist.org and
            NOAA Fisheries.
          </p>
        </>
      }
      habitat={
        <p>
          Risso&apos;s dolphins prefer deep waters, especially over the continental
          slope and around steep underwater features, in temperate and tropical seas
          around the world. These deep areas concentrate the squid on which they
          depend.
        </p>
      }
      diet={
        <p>
          Risso&apos;s dolphins feed mainly on squid and other cephalopods, along with
          some fish. They are deep divers, hunting their prey well below the surface,
          mostly at night when many squid rise toward shallower water.
        </p>
      }
      behavior={
        <p>
          Risso&apos;s dolphins usually travel in groups of moderate size and can
          associate with other dolphin and whale species. They breach, slap the water,
          and surface roll, and communicate with whistles and clicks while using
          echolocation to find squid in the dark. The distinctive scarring on their
          bodies builds up over a lifetime and helps researchers recognise
          individuals.
        </p>
      }
      humanInteraction={
        <p>
          Risso&apos;s dolphins are seen on whale-watching trips and are mostly
          affected by accidental capture in fishing gear, pollution, and noise in
          some regions. For current status and regional context, consult NOAA
          Fisheries and the IUCN Red List.
        </p>
      }
      extraSections={[
        {
          heading: "Intelligence & Social Complexity",
          body: (
            <p>
              As a member of the dolphin family, Risso&apos;s dolphin shares the high
              intelligence and social nature of its relatives. It lives in
              coordinated groups, sometimes mixing with other cetacean species, and
              relies on <strong>echolocation and a complex range of calls</strong> to
              hunt squid in deep, dark water and to stay in contact. Its lifestyle —
              cooperative, communicative, and reliant on sophisticated biosonar —
              reflects the advanced cognition characteristic of dolphins.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Why is Risso's dolphin so scarred?",
          answer:
            "The pale, scratched appearance comes from scars that build up over the animal's life — from social interactions with other Risso's dolphins (including tooth rakes) and from struggles with the squid they eat. Because the scars accumulate and don't fully fade, older individuals can look almost white.",
        },
        {
          question: "What do Risso's dolphins eat?",
          answer:
            "Mainly squid and other cephalopods, plus some fish. They are deep divers that hunt below the surface, often at night when squid move toward shallower water.",
        },
        {
          question: "How can you tell a Risso's dolphin from other dolphins?",
          answer:
            "Look for the blunt, beakless head, the tall dorsal fin, the robust grey body, and especially the heavy network of pale scars — features that together make Risso's dolphin distinctive among dolphins.",
        },
        {
          question: "Are Risso's dolphins intelligent?",
          answer:
            "Yes. Like other members of the dolphin family, Risso's dolphins are intelligent and social, using echolocation and complex calls to hunt cooperatively in deep water and to communicate within their groups.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Grampus griseus" },
        { label: "Family", value: "Delphinidae (dolphins)" },
        { label: "Class", value: "Mammalia (Cetacea)" },
        { label: "Diet", value: "Mainly squid (deep diver)" },
        { label: "Distinctive feature", value: "Blunt head; heavy pale scarring" },
        { label: "Social structure", value: "Coordinated groups; mixed-species at times" },
        { label: "Cognition", value: "Highly intelligent; echolocation & complex calls" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Dolphin Profile", href: "/animals/dolphin", description: "The dolphin family overview" },
        { label: "Pilot Whale Profile", href: "/animals/pilot-whale", description: "Another deep-diving dolphin" },
        { label: "Orca Profile", href: "/animals/orca", description: "The largest dolphin" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Deep-water habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
