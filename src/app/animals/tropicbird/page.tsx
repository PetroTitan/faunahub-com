import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tropicbird";
const TITLE = "Tropicbird — Profile, Tail Streamers, Diet & Ocean Life";
const DESC =
  "Explore tropicbirds (family Phaethontidae): elegant white seabirds of tropical oceans with long tail streamers that plunge-dive for fish and nest on remote islands.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("tropicbird"),
});

export default function TropicbirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Tropicbird"
      scientificName="Phaethon aethereus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Seabird", "Tropical oceans"]}
      image={getAnimalImage("tropicbird") ?? undefined}
      galleryImages={getAnimalGalleryImages("tropicbird")}
      sources={ANIMAL_SOURCES.tropicbird}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Tropicbirds (family Phaethontidae) are graceful seabirds of warm tropical and
            subtropical oceans, instantly recognised by the pair of extremely long, ribbon-like
            central tail feathers that stream behind them in flight. The red-billed tropicbird
            (<em>Phaethon aethereus</em>), shown here, is a striking example, mostly white with
            fine black barring, a bold red bill, and a dark eye-stripe. There are three
            tropicbird species, all built for a life far out at sea.
          </p>
          <p>
            Strong, buoyant fliers, tropicbirds wander vast stretches of open ocean and come
            ashore only to breed on remote islands and cliffs.
          </p>
          <p>
            <strong>Note:</strong> details here use the red-billed tropicbird as a reference;
            the three species differ in bill colour and markings. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Tropicbirds range widely across tropical and subtropical waters of the Atlantic,
          Pacific, and Indian Oceans, spending most of their lives at sea. They come to land
          only to breed, nesting on oceanic islands, coastal cliffs, and rocky ledges where
          they can shelter eggs and chicks from the elements and from some predators.
        </p>
      }
      diet={
        <p>
          Tropicbirds are carnivores that feed mainly on fish — especially flying fish — and
          squid, caught at sea. They typically forage by flying high over the water, then
          plunge-diving steeply to seize prey at or just below the surface, sometimes pausing
          to hover before the dive. They often feed far from land, well out over deep water.
        </p>
      }
      behavior={
        <p>
          In the air, tropicbirds are elegant and acrobatic, and pairs perform spectacular
          aerial courtship displays near their colonies, with the long tail streamers adding
          to the show. On land they are far more awkward: their legs are set well back, so
          they shuffle rather than walk and nest in spots they can reach by air. Each pair
          usually raises a single chick, which is fed at the nest until it is ready to head
          out to sea on its own.
        </p>
      }
      humanInteraction={
        <p>
          Tropicbirds are admired by sailors and islanders and feature in the culture of
          some tropical regions; their tail streamers have been used traditionally in
          ornamentation. Many populations are stable, but as island-nesting seabirds they
          are vulnerable to introduced predators (rats and cats), disturbance, and changes
          in their ocean food supply. Consult authoritative sources for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "What are the tropicbird's long tail feathers for?",
          answer:
            "The two greatly elongated central tail feathers (streamers) are used mainly in display. Tropicbirds perform elaborate aerial courtship flights near their colonies, and the long streamers enhance these displays; their length and condition may also signal a bird's quality to potential mates.",
        },
        {
          question: "How do tropicbirds catch their food?",
          answer:
            "They plunge-dive. A tropicbird flies high over the ocean, then dives steeply to seize prey at or near the surface, sometimes hovering briefly first. Their main foods are fish — especially flying fish — and squid, often taken far out over deep water.",
        },
        {
          question: "Why are tropicbirds clumsy on land?",
          answer:
            "Their legs are positioned far back on the body, which is excellent for steering in flight and diving but poor for walking. As a result, tropicbirds can barely walk and instead shuffle along the ground, so they nest in places they can reach directly by air, like cliff ledges and island sites.",
        },
        {
          question: "Where do tropicbirds live?",
          answer:
            "They live across the warm tropical and subtropical oceans of the world, spending most of their time far out at sea. They come to land only to breed, nesting on remote oceanic islands and coastal cliffs.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Phaethontidae (3 species)" },
        { label: "Reference species", value: "Phaethon aethereus (red-billed tropicbird)" },
        { label: "Class", value: "Aves (seabird)" },
        { label: "Diet", value: "Carnivore (fish & squid; plunge-dives)" },
        { label: "Signature trait", value: "Long ribbon-like tail streamers" },
        { label: "On land", value: "Can barely walk (legs set far back)" },
        { label: "Breeding", value: "Remote islands & cliffs; one chick" },
        { label: "Range", value: "Tropical & subtropical oceans" },
      ]}
      relatedLinks={[
        { label: "Albatross Profile", href: "/animals/albatross", description: "Another ocean-wandering seabird" },
        { label: "Pelican Profile", href: "/animals/pelican", description: "A large coastal seabird" },
        { label: "Seagull (Gull) Profile", href: "/animals/seagull", description: "A familiar coastal seabird" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Open-ocean habitats in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
