import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Deer — Overview of Deer Species, Habitat & Behavior";
const description =
  "An overview of deer (family Cervidae): white-tailed deer as a reference species, antlers, herbivorous browsing, social patterns, and human-impact context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/deer",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("deer"),
});

export default function DeerPage() {
  return (
    <AnimalProfileLayout
      commonName="Deer"
      pageTitle={title}
      description={description}
      path="/animals/deer"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Cervidae", "Herbivore"]}
      image={getAnimalImage("deer") ?? undefined}
      galleryImages={getAnimalGalleryImages("deer")}
      factsHeaderNote='"Deer" covers the entire family Cervidae. Reference species below is the white-tailed deer (Odocoileus virginianus); other Cervidae differ considerably.'
      overview={
        <>
          <p>
            Deer are ruminant mammals of the family Cervidae, distributed
            across nearly every continent and including species as varied as
            the moose, elk, red deer, sika deer, mule deer, white-tailed
            deer, roe deer, fallow deer, and caribou (reindeer). Most male
            cervids grow and shed bony antlers each year — a feature that
            distinguishes them from horned bovids.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Cervidae occupy habitats ranging from boreal forest and tundra
            to woodland, grassland, and tropical forest edge. The
            white-tailed deer is one of the most habitat-tolerant species
            and has expanded into many human-altered landscapes across the
            Americas. Specific range and habitat preferences vary by
            species; verify the IUCN Red List for any species of interest.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Deer are herbivores, with most species being browsers, grazers,
            or mixed feeders. Diet typically includes leaves, twigs, buds,
            grasses, herbaceous plants, fruit, and seasonal foods such as
            acorns. As ruminants, deer have a four-chambered stomach that
            ferments fibrous plant material in stages.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Social organisation varies widely between cervid species. Many
            live in single-sex groups outside the breeding season and join
            in mixed groups during the rut. Communication includes scent
            marking, vocalisations (including the high-pitched bugle of bull
            elk or the deep moose call), and visual displays. Most species
            are crepuscular — most active at dawn and dusk.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Deer have major ecological, agricultural, and cultural roles
            worldwide. In some regions, particularly in parts of North
            America, white-tailed deer populations are very high and create
            ecological pressure on vegetation, while in other places
            specific deer species are seriously threatened. Tick-borne
            disease ecology in some regions involves deer as part of the
            broader host system. Local wildlife agencies and academic
            sources provide region-specific data.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Other large ungulates include antelope (family Bovidae), wild
          sheep and goats, and pronghorn. Among cervids, the moose and
          reindeer are particularly distinctive in size and habitat.
        </p>
      }
      faqs={[
        {
          question: "Do all deer have antlers?",
          answer:
            "Most male cervids grow antlers, but in caribou/reindeer (Rangifer tarandus) both sexes typically grow antlers, and in some species — such as the Chinese water deer — neither sex grows antlers. Patterns vary by species.",
        },
        {
          question: "Are antlers the same as horns?",
          answer:
            "No. Antlers are made of bone and are grown and shed each year by male cervids (and female caribou). Horns are permanent, keratin-sheathed bony cores found in family Bovidae (cattle, sheep, antelope) and are typically present in both sexes.",
        },
        {
          question: "Are deer dangerous?",
          answer:
            "Wild deer generally avoid people, but adult male deer in the rut and females defending fawns can act aggressively, and large species such as moose can cause serious injury. Vehicle collisions involving deer are a significant cause of injury and damage in many regions.",
        },
        {
          question: "How long do deer live in the wild?",
          answer:
            "Wild-cervid lifespan varies by species and is generally substantially shorter than captive maximum lifespan, due to predation, hunting, disease, and vehicle collision. Authoritative species accounts give specific ranges.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "White-tailed deer (Odocoileus virginianus)" },
        { label: "Family", value: "Cervidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Artiodactyla" },
        { label: "Diet", value: "Herbivore (browser / grazer)" },
        { label: "Activity", value: "Often crepuscular" },
        { label: "Conservation status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wolf Profile", href: "/animals/wolf" },
        { label: "Zebra Profile", href: "/animals/zebra" },
        { label: "Giraffe Profile", href: "/animals/giraffe" },
      ]}
      sources={ANIMAL_SOURCES.deer}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
