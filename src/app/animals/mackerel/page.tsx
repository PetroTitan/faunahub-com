import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mackerel";
const TITLE = "Mackerel — Profile, Habitat, Diet & Schools";
const DESC =
  "Explore mackerel (e.g. Atlantic mackerel, Scomber scombrus): fast, streamlined schooling fish of the open sea, marked with wavy bars and central to ocean food webs and fisheries.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("mackerel"),
});

export default function MackerelPage() {
  return (
    <AnimalProfileLayout
      commonName="Mackerel"
      scientificName="e.g. Scomber scombrus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Pelagic", "Schooling"]}
      image={getAnimalImage("mackerel") ?? undefined}
      galleryImages={getAnimalGalleryImages("mackerel")}
      sources={ANIMAL_SOURCES.mackerel}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Mackerel are fast, streamlined fish of the open sea, members of the same
            family as tuna (Scombridae). The Atlantic mackerel
            (<em>Scomber scombrus</em>), shown here as a reference, has a torpedo-shaped
            body, a deeply forked tail, and a steel-blue back patterned with wavy dark
            bars over silvery sides — colours that shimmer and help camouflage it in open
            water.
          </p>
          <p>
            Mackerel travel in large schools and are powerful swimmers, making them both
            major predators of smaller animals and a key food for larger ones.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;mackerel&rdquo; covers several species; details
            here focus on Atlantic mackerel. Stock status varies by species and region —
            verify against NOAA Fisheries and the IUCN Red List.
          </p>
        </>
      }
      habitat={
        <p>
          Atlantic mackerel live in the open waters of the North Atlantic and adjoining
          seas, often near the surface over continental shelves. They are migratory,
          moving between feeding and spawning areas with the seasons, and other mackerel
          species occupy warm and temperate seas around the world.
        </p>
      }
      diet={
        <p>
          Mackerel are carnivores that feed on zooplankton, small fish, and fish larvae,
          often filtering or snapping up prey as they sweep through the water in schools.
          Their feeding shifts with the seasons and with the abundance of plankton.
        </p>
      }
      behavior={
        <p>
          Mackerel are classic schooling fish, forming large, coordinated groups that
          offer some safety from predators and help with feeding. Built for sustained
          fast swimming, they keep moving to pass water over their gills. Schools migrate
          long distances and rise and fall in the water column following their prey.
        </p>
      }
      humanInteraction={
        <p>
          Mackerel are among the most important food fishes in the world, supporting
          major fisheries, and they are also a vital link in marine food webs — feeding
          seabirds, larger fish, dolphins, and more. Sustainable management matters
          because heavily targeted pelagic stocks can fluctuate. Consult NOAA Fisheries
          and the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Is a mackerel related to tuna?",
          answer:
            "Yes. Mackerel belong to the family Scombridae, the same family as tuna and bonito. They share adaptations for fast, sustained swimming, such as a streamlined body and a powerful, deeply forked tail.",
        },
        {
          question: "Why do mackerel swim in schools?",
          answer:
            "Schooling offers several advantages: many eyes detect predators sooner, a tight group can confuse attackers, and coordinated movement helps with feeding and migration. Mackerel are strong schooling fish that travel in large, synchronised groups.",
        },
        {
          question: "What do mackerel eat?",
          answer:
            "Mackerel are carnivores that feed on zooplankton, small fish, and fish larvae. Their diet changes with the seasons and the abundance of plankton, and they often feed actively while moving through the water in schools.",
        },
        {
          question: "Why are mackerel important?",
          answer:
            "They are both a major human food fish and a key part of ocean food webs, transferring energy from plankton and small prey up to seabirds, larger fish, and marine mammals. That dual role makes their populations ecologically and economically significant.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Scomber scombrus (Atlantic mackerel)" },
        { label: "Family", value: "Scombridae (with tuna)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Diet", value: "Carnivore (plankton & small fish)" },
        { label: "Behaviour", value: "Fast, migratory, schooling" },
        { label: "Habitat", value: "Open shelf seas" },
        { label: "Role", value: "Major fishery; key food-web link" },
        { label: "Status", value: "Varies by species/stock (verify)" },
      ]}
      relatedLinks={[
        { label: "Tuna Profile", href: "/animals/tuna", description: "A larger relative in the same family" },
        { label: "Cod Profile", href: "/animals/cod", description: "Another major commercial fish" },
        { label: "Herring (coming soon)", href: "/animal-encyclopedia/fish", description: "Browse more fish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Open-water habitats in context" },
      ]}
    />
  );
}
