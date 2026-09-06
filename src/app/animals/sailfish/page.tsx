import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sailfish";
const TITLE = "Sailfish — Profile, Dorsal Sail, Speed & Cooperative Hunting";
const DESC =
  "Explore the sailfish (Istiophorus platypterus): a billfish with a huge dorsal sail, often working in groups to herd baitfish into tight balls.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("sailfish"),
});

export default function SailfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Sailfish"
      scientificName="Istiophorus platypterus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Billfish","Open Ocean"]}
      image={getAnimalImage("sailfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("sailfish")}
      sources={ANIMAL_SOURCES.sailfish}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The sailfish (<em>Istiophorus platypterus</em>) is a slender billfish of warm oceans, named for the enormous <strong>dorsal fin</strong> that runs almost the length of its back and can be raised like a sail far taller than the body is deep.
        </p>
        <p>
          Sailfish are often described as the fastest fish in the sea. Reported top speeds vary widely between sources and are difficult to measure reliably, so it is safer to say sailfish are exceptionally fast over short bursts than to quote a specific figure.
        </p>
        <p>
          The sail is not for propulsion. It is usually folded into a groove while the fish swims fast, and raised during hunting and display — most strikingly when sailfish work together to herd prey.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Sailfish occur in tropical and subtropical waters of the Atlantic, Indian and Pacific Oceans, generally in the warm upper layer of open ocean above the thermocline, and sometimes closer to coasts than marlin. They are highly migratory, following warm water and prey concentrations.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Sailfish feed on schooling fish such as sardines, anchovies and mackerel, along with squid. Hunting often involves driving prey toward the surface and compacting it into a tight &apos;bait ball&apos;, then using the bill to slash into the mass and stun individual fish.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Sailfish frequently hunt in <strong>coordinated groups</strong>, circling a school of baitfish and taking turns to attack — a well-documented example of cooperative-looking hunting in fish. During these attacks the sail is raised and the fish undergoes rapid colour change, flashing bright blue bars and stripes across the flanks. The colour change is driven by pigment cells and is thought to signal to other sailfish, helping them avoid injuring one another with their bills.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Sailfish are among the most sought-after recreational game fish and support significant sport-fishing economies, with catch-and-release now widely practised. They are also taken commercially and as bycatch in longline fisheries. This profile is educational and offers no fishing, handling or gear guidance. Verify current status at the IUCN Red List and NOAA Fisheries.
        </p>
        </>
      }
      faqs={[
        {
          question: "What is the sailfish's sail for?",
          answer:
            "Not propulsion. The huge dorsal fin is normally folded down into a groove while the fish swims quickly, and raised during hunting and display. Raising it appears to help in herding prey and in signalling to other sailfish during group attacks.",
        },
        {
          question: "Is the sailfish the fastest fish?",
          answer:
            "It is often described that way, and sailfish are certainly exceptionally fast over short bursts. But measuring fish speed reliably in the open ocean is difficult, and the commonly quoted figures come from methods that are widely questioned — so it is more accurate to describe them as extremely fast than to give a precise number.",
        },
        {
          question: "Do sailfish hunt together?",
          answer:
            "Yes — group hunting is one of their most striking behaviours. Several sailfish will circle a school of baitfish, compacting it into a tight ball near the surface, then take turns slashing into it with their bills. The rapid colour changes they display during these attacks are thought to help them coordinate and avoid injuring one another.",
        },
        {
          question: "Why do sailfish change colour?",
          answer:
            "Pigment cells in their skin allow very rapid change, and hunting sailfish flash bright blue bars and stripes across the flanks. The most common interpretation is signalling to other sailfish during group attacks, where several fish with long bills are striking into the same bait ball.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Istiophorus platypterus" },
        { label: "Family", value: "Istiophoridae (billfish)" },
        { label: "Class", value: "Actinopterygii" },
        { label: "Sail", value: "Huge dorsal fin; folds into a groove" },
        { label: "Speed", value: "Exceptionally fast in short bursts" },
        { label: "Hunting", value: "Often coordinated group attacks" },
        { label: "Colour change", value: "Rapid; signals during hunting" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Blue Marlin Profile", href: "/animals/blue-marlin", description: "A close billfish relative" },
        { label: "Tuna Profile", href: "/animals/tuna" },
        { label: "Barracuda Profile", href: "/animals/barracuda" },
        { label: "Flying Fish Profile", href: "/animals/flying-fish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
