import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/great-white-shark";
const TITLE = "Great White Shark — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore the great white shark (Carcharodon carcharias): the ocean's most famous large predatory fish — a powerful, warm-bodied hunter that is far less dangerous to people than its reputation suggests.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("great-white-shark"),
});

export default function GreatWhiteSharkPage() {
  return (
    <AnimalProfileLayout
      commonName="Great White Shark"
      scientificName="Carcharodon carcharias"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine fish", "Shark", "Apex predator"]}
      image={getAnimalImage("great-white-shark") ?? undefined}
      galleryImages={getAnimalGalleryImages("great-white-shark")}
      sources={ANIMAL_SOURCES["great-white-shark"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The great white shark (<em>Carcharodon carcharias</em>) is the largest
            predatory fish in the ocean and one of the most recognisable animals on
            Earth. Powerfully built, torpedo-shaped, and counter-shaded grey above
            and white below, it is a top predator of coastal and open seas around the
            world.
          </p>
          <p>
            Unusually among fish, great whites are partly warm-bodied: they can keep
            parts of the body warmer than the surrounding water, which helps power
            fast, sustained swimming. Despite a fearsome reputation, they are far
            less dangerous to people than popular culture suggests.
          </p>
          <p>
            <strong>Conservation note:</strong> the great white shark is widely
            assessed as Vulnerable, affected by fishing, bycatch, and historically
            persecution. Verify current status at iucnredlist.org and NOAA Fisheries.
          </p>
        </>
      }
      habitat={
        <p>
          Great white sharks live in cool to warm coastal and offshore waters around
          the world, often near seal and sea lion colonies, reefs, and productive
          shelf areas. They are highly migratory, and tracking has shown individuals
          crossing entire ocean basins.
        </p>
      }
      diet={
        <p>
          Great whites are apex predators. Younger sharks eat mostly fish and rays,
          while larger adults take marine mammals such as seals and sea lions, along
          with fish and carrion such as whale carcasses. They typically hunt with a
          powerful ambush strike from below.
        </p>
      }
      behavior={
        <p>
          Great whites are mostly solitary but gather seasonally at productive
          feeding sites, where loose dominance hierarchies have been observed. They
          rely on acute senses — including the ability to detect the faint electrical
          fields of prey — and are capable of breaching clear of the water when
          attacking near the surface. Much about their reproduction and deep-ocean
          movements is still being studied.
        </p>
      }
      humanInteraction={
        <p>
          Despite their image, great white sharks do not target humans as prey;
          serious incidents are rare and many bites are thought to be investigatory
          rather than predatory. The real story is the reverse — sharks are heavily
          affected by people through fishing, bycatch, and finning, and great whites
          are protected in many countries. For current status, consult NOAA Fisheries
          and the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Are great white sharks man-eaters?",
          answer:
            "No. Great whites do not hunt humans as prey. Bites on people are rare, and researchers believe many are exploratory — a shark investigating an unfamiliar object — rather than predatory attacks. Statistically, sharks pose very little risk to people, while people pose a serious risk to sharks.",
        },
        {
          question: "How is a great white shark warm-bodied?",
          answer:
            "Great whites are regional endotherms: special blood-vessel networks let them retain muscle-generated heat, keeping parts of the body (such as swimming muscles, stomach, and brain) warmer than the surrounding water. This boosts power and performance, helping them hunt actively in cool seas.",
        },
        {
          question: "What do great white sharks eat?",
          answer:
            "Their diet shifts with age. Smaller great whites eat mainly fish and rays, while larger adults add marine mammals such as seals and sea lions, plus fish and scavenged carcasses. They are ambush hunters, often striking upward from below.",
        },
        {
          question: "Are great white sharks endangered?",
          answer:
            "The species is widely assessed as Vulnerable, with populations affected by fishing, bycatch, and past persecution, and it is legally protected in a number of countries. Status should be checked against current IUCN Red List and NOAA Fisheries data.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Carcharodon carcharias" },
        { label: "Class", value: "Chondrichthyes (cartilaginous fish)" },
        { label: "Type", value: "Shark; apex predator" },
        { label: "Body temperature", value: "Regional endotherm (partly warm-bodied)" },
        { label: "Diet", value: "Fish, rays, marine mammals, carrion" },
        { label: "Senses", value: "Includes electroreception" },
        { label: "Range", value: "Coastal & open seas worldwide" },
        { label: "IUCN Status", value: "Vulnerable (verify)" },
      ]}
      relatedLinks={[
        { label: "Shark Profile", href: "/animals/shark", description: "Sharks as a whole" },
        { label: "Hammerhead Shark Profile", href: "/animals/hammerhead-shark", description: "A distinctive shark" },
        { label: "Orca Profile", href: "/animals/orca", description: "The ocean's other apex predator" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Marine habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
