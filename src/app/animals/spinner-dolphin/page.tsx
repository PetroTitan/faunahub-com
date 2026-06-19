import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/spinner-dolphin";
const TITLE = "Spinner Dolphin — Profile, Spins, Intelligence & Behavior";
const DESC =
  "Explore the spinner dolphin (Stenella longirostris): a small, slender, highly social dolphin famous for leaping and spinning through the air, with complex day-night rhythms.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("spinner-dolphin"),
});

export default function SpinnerDolphinPage() {
  return (
    <AnimalProfileLayout
      commonName="Spinner Dolphin"
      scientificName="Stenella longirostris"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine mammal", "Dolphin family", "Highly intelligent", "Acrobatic"]}
      image={getAnimalImage("spinner-dolphin") ?? undefined}
      galleryImages={getAnimalGalleryImages("spinner-dolphin")}
      sources={ANIMAL_SOURCES["spinner-dolphin"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The spinner dolphin (<em>Stenella longirostris</em>) is a small, slim
            dolphin of tropical seas, named for its spectacular habit of leaping from
            the water and spinning rapidly around its long axis — sometimes several
            rotations in a single jump. It has a long, slender beak and lives in
            warm oceans around the world.
          </p>
          <p>
            Spinner dolphins are intensely social and follow a striking daily rhythm,
            resting in sheltered bays during the day and moving offshore to feed at
            night.
          </p>
          <p>
            <strong>Conservation note:</strong> spinner dolphins are widespread, but
            some populations are sensitive to disturbance at their resting bays and to
            fishing interactions. Verify current status at iucnredlist.org and NOAA
            Fisheries.
          </p>
        </>
      }
      habitat={
        <p>
          Spinner dolphins live in tropical and subtropical waters worldwide. Many
          populations spend daytime hours resting in calm, shallow coastal bays and
          lagoons, then travel to deeper offshore waters at night to feed, returning
          to the bays by morning.
        </p>
      }
      diet={
        <p>
          Spinner dolphins feed mainly at night on small fish, squid, and shrimp that
          rise toward the surface after dark as part of the ocean&apos;s nightly
          vertical migration of small animals. They often dive deep to reach these
          prey layers and hunt cooperatively.
        </p>
      }
      behavior={
        <p>
          Beyond their famous spins — which may serve to communicate, dislodge
          parasites, or simply play — spinner dolphins form large, closely
          coordinated groups. Their daytime rest is a distinctive group behaviour, with
          the pod swimming slowly and quietly together. They communicate with whistles
          and clicks and use echolocation to find prey in the dark.
        </p>
      }
      humanInteraction={
        <p>
          Because resting spinner dolphins gather in accessible coastal bays, they can
          be vulnerable to disturbance from boats and swimmers, and guidelines in some
          regions limit approaching resting groups. Fishing interactions have also
          historically affected some populations. For current status and guidance,
          consult NOAA Fisheries and the IUCN Red List.
        </p>
      }
      extraSections={[
        {
          heading: "Intelligence & Social Complexity",
          body: (
            <p>
              Spinner dolphins show the high intelligence and social sophistication
              typical of the dolphin family. They live in large, coordinated groups,
              synchronise behaviour closely (notably during daytime rest), and rely on
              <strong> echolocation and a rich vocal repertoire</strong> to navigate,
              hunt cooperatively in the dark, and stay in contact. Their structured
              day-night cycle and group coordination reflect the flexible, learned
              behaviour for which dolphins are studied.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Why do spinner dolphins spin?",
          answer:
            "Spinner dolphins are famous for leaping and rotating rapidly in the air, sometimes several spins per jump. Researchers think spinning may serve several functions, including communication, shaking off parasites or remoras, and play. The exact balance of reasons is still studied.",
        },
        {
          question: "Do spinner dolphins sleep during the day?",
          answer:
            "Many populations rest by day in calm coastal bays, swimming slowly and quietly together, and then travel offshore at night to feed. This day-rest, night-feed rhythm is a hallmark of the species in many areas.",
        },
        {
          question: "What do spinner dolphins eat?",
          answer:
            "They feed mainly at night on small fish, squid, and shrimp that move toward the surface after dark. Spinner dolphins often dive deep to reach these prey and hunt in coordinated groups.",
        },
        {
          question: "Are spinner dolphins intelligent?",
          answer:
            "Yes. Like other dolphins, they are highly intelligent and social, using echolocation and complex calls to coordinate large groups, rest together, and hunt cooperatively — behaviours that reflect the advanced cognition seen across the dolphin family.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Stenella longirostris" },
        { label: "Family", value: "Delphinidae (dolphins)" },
        { label: "Class", value: "Mammalia (Cetacea)" },
        { label: "Famous for", value: "Spinning leaps" },
        { label: "Diet", value: "Small fish, squid & shrimp (nocturnal)" },
        { label: "Daily rhythm", value: "Rest by day, feed offshore at night" },
        { label: "Cognition", value: "Highly intelligent; echolocation & complex calls" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Dolphin Profile", href: "/animals/dolphin", description: "The dolphin family overview" },
        { label: "Common Dolphin Profile", href: "/animals/common-dolphin", description: "Another fast, social dolphin" },
        { label: "Orca Profile", href: "/animals/orca", description: "The largest dolphin" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Where night-feeding dolphins dive" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
