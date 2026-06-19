import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/common-dolphin";
const TITLE = "Common Dolphin — Profile, Intelligence, Diet & Behavior";
const DESC =
  "Explore the common dolphin (Delphinus delphis): a fast, acrobatic dolphin that forms huge, highly social pods — among the most intelligent and gregarious animals in the open ocean.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("common-dolphin"),
});

export default function CommonDolphinPage() {
  return (
    <AnimalProfileLayout
      commonName="Common Dolphin"
      scientificName="Delphinus delphis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine mammal", "Dolphin family", "Highly intelligent", "Social"]}
      image={getAnimalImage("common-dolphin") ?? undefined}
      galleryImages={getAnimalGalleryImages("common-dolphin")}
      sources={ANIMAL_SOURCES["common-dolphin"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The common dolphin (<em>Delphinus delphis</em>) is a sleek, fast, and
            strikingly marked member of the dolphin family, recognised by the
            hourglass pattern of tan and grey along its sides. It is one of the most
            abundant and widespread dolphins, and one of the most social — sometimes
            gathering in pods numbering in the hundreds or even thousands.
          </p>
          <p>
            Famous for riding the bow waves of boats and for fast, acrobatic
            swimming, the common dolphin is a quintessential animal of the open
            ocean.
          </p>
          <p>
            <strong>Conservation note:</strong> the common dolphin is widespread and,
            overall, not currently of high concern, though some regional populations
            face pressures such as bycatch in fishing gear. Verify current status at
            iucnredlist.org and NOAA Fisheries.
          </p>
        </>
      }
      habitat={
        <p>
          Common dolphins live in warm-temperate and tropical waters worldwide, mostly
          offshore but also over productive continental shelves and slopes. They
          favour areas where currents and upwelling concentrate the schooling fish
          they depend on.
        </p>
      }
      diet={
        <p>
          Common dolphins feed mainly on small schooling fish and squid. They often
          hunt cooperatively, with groups working together to herd fish into tight
          balls near the surface, sometimes alongside seabirds and other predators
          drawn to the same prey.
        </p>
      }
      behavior={
        <p>
          These dolphins are exceptionally social and energetic, forming large,
          fast-moving pods that frequently leap, bow-ride, and surf. Large
          aggregations may split into smaller groups and re-form, and individuals
          coordinate using a rich repertoire of whistles and clicks. They use
          echolocation to navigate and find prey.
        </p>
      }
      humanInteraction={
        <p>
          Common dolphins are a favourite sight on whale- and dolphin-watching trips.
          The main human-related concern is accidental capture (bycatch) in fishing
          nets in some regions, along with prey depletion and pollution. For current
          status, consult NOAA Fisheries and the IUCN Red List.
        </p>
      }
      extraSections={[
        {
          heading: "Intelligence & Social Complexity",
          body: (
            <p>
              Like other dolphins, common dolphins are highly intelligent and
              intensely social. They live in large, fluid groups, coordinate
              cooperative hunting, and communicate with a complex range of whistles
              and clicks; research on dolphins more broadly has documented
              <strong> echolocation, vocal learning, problem-solving, and
              self-awareness</strong>. Their huge, well-organised pods are a clear
              sign of sophisticated social coordination, which is part of why
              dolphins are studied so intensively by cognitive scientists.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "How big are common dolphin pods?",
          answer:
            "Very large. Common dolphins are among the most gregarious dolphins, often travelling in pods of hundreds and sometimes aggregating into groups of a thousand or more. These big groups can split into smaller units and re-form as conditions change.",
        },
        {
          question: "Are common dolphins intelligent?",
          answer:
            "Yes. Like other members of the dolphin family, they are highly intelligent and social, using echolocation and a complex range of whistles and clicks to communicate and hunt cooperatively. Dolphins in general are a major focus of research into animal cognition.",
        },
        {
          question: "What do common dolphins eat?",
          answer:
            "Mainly small schooling fish and squid. They frequently hunt as a group, herding fish into tight bait balls near the surface, often together with seabirds and other ocean predators.",
        },
        {
          question: "Why do dolphins ride the bow waves of boats?",
          answer:
            "Bow-riding lets dolphins travel quickly with less effort by surfing the pressure wave a vessel pushes ahead of it, and it also appears to be play. Common dolphins are particularly well known for this behaviour.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Delphinus delphis" },
        { label: "Family", value: "Delphinidae (dolphins)" },
        { label: "Class", value: "Mammalia (Cetacea)" },
        { label: "Diet", value: "Small schooling fish & squid" },
        { label: "Social structure", value: "Very large, fluid pods" },
        { label: "Cognition", value: "Highly intelligent; echolocation & complex calls" },
        { label: "Habitat", value: "Warm-temperate & tropical seas" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Dolphin Profile", href: "/animals/dolphin", description: "The dolphin family overview" },
        { label: "Orca Profile", href: "/animals/orca", description: "The largest dolphin" },
        { label: "Spinner Dolphin Profile", href: "/animals/spinner-dolphin", description: "Famous for acrobatic spins" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Open-ocean habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
