import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Salmon — Profile, Habitat, Diet & Behavior";
const description =
  "Salmon are migratory fish famous for returning to spawn. A group-level overview using sockeye salmon as a reference: life cycle, habitat, diet, and conservation caution.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/salmon",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("salmon"),
});

export default function SalmonPage() {
  return (
    <AnimalProfileLayout
      commonName="Salmon"
      pageTitle={title}
      description={description}
      path="/animals/salmon"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Migratory", "Wild"]}
      image={getAnimalImage("salmon") ?? undefined}
      galleryImages={getAnimalGalleryImages("salmon")}
      factsHeaderNote="“Salmon” covers several species in the family Salmonidae. The reference shown is the sockeye salmon (Oncorhynchus nerka). Ranges, runs, and conservation status differ by species and population — check current sources."
      overview={
        <>
          <p>
            Salmon are migratory fish in the family Salmonidae, including
            Atlantic salmon and several Pacific species such as sockeye, chinook,
            and coho. This page is a group-level overview; the sockeye salmon
            (<em>Oncorhynchus nerka</em>) is used as a familiar reference. Most
            salmon are famous for being anadromous — hatching in fresh water,
            maturing at sea, and returning to fresh water to spawn — often making
            remarkable journeys.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Salmon use both fresh and salt water across their lives. They hatch
            in cool, clean rivers and streams, migrate to the ocean to feed and
            grow, and return to fresh water — often to their natal river — to
            breed. Their ranges span the North Atlantic and North Pacific and
            adjoining rivers. Healthy salmon depend on connected, clean
            waterways, which makes them sensitive to barriers and habitat change.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Salmon diet changes through life. Young fish in rivers feed on
            insects and other small invertebrates, while at sea they take larger
            prey such as smaller fish and crustaceans. During the spawning run,
            many salmon stop feeding altogether. Diet varies by species and life
            stage; this page describes general feeding ecology.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            The salmon life cycle and migration are their most striking features.
            After years at sea, adults navigate back toward their home rivers,
            often leaping waterfalls and obstacles to reach spawning grounds.
            Many Pacific salmon die after spawning once, returning nutrients to
            the ecosystem, while Atlantic salmon may spawn more than once.
            Behaviour and timing of runs vary by species and population.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Salmon are economically, culturally, and ecologically important,
            supporting fisheries, aquaculture, and Indigenous traditions, and
            feeding wildlife from bears to eagles. Many wild salmon populations
            face pressures from dams, habitat loss, warming water, and fishing,
            and some are threatened or endangered while others remain abundant.
            Because status differs sharply by species and population, it should be
            verified against current IUCN and government (such as NOAA Fisheries)
            sources.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                At sea, salmon are typically silvery and streamlined. As they
                return to fresh water to spawn, many change dramatically — sockeye
                salmon, for example, turn brilliant red with a green head, and
                males of some species develop a hooked jaw called a kype. Size
                varies by species, from modest to very large in the chinook.
                These spawning changes are a useful identification clue.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Salmon belong to the family Salmonidae alongside trout, char, and
          grayling. They are wild migratory fish, unlike the aquarium fish
          covered on FaunaHub, and share their river and ocean habitats with
          predators such as bears, eagles, and seals, all profiled elsewhere on
          the site.
        </p>
      }
      faqs={[
        {
          question: "Why do salmon swim upstream to spawn?",
          answer:
            "Most salmon are anadromous: they hatch in fresh water, grow at sea, and return to rivers to breed, frequently to the very stream where they hatched. This upstream migration takes them to suitable gravel spawning beds, even if it means leaping obstacles along the way.",
        },
        {
          question: "Do all salmon die after spawning?",
          answer:
            "Not all. Many Pacific salmon spawn once and then die, returning nutrients to the river ecosystem. Atlantic salmon and some others can survive and spawn more than once. The pattern depends on the species.",
        },
        {
          question: "Are salmon endangered?",
          answer:
            "It depends on the species and population. Some salmon runs are threatened or endangered due to dams, habitat loss, and other pressures, while others remain abundant. Because status varies and is actively monitored, check current IUCN Red List and government sources rather than assuming.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Salmon (family Salmonidae)" },
        { label: "Reference species", value: "Sockeye salmon (Oncorhynchus nerka)" },
        { label: "Type", value: "Migratory fish (often anadromous)" },
        { label: "Life cycle", value: "Hatch in rivers, grow at sea, return to spawn" },
        { label: "Diet", value: "Carnivore (varies by life stage)" },
        { label: "Conservation", value: "Varies by species/population — verify on IUCN/NOAA" },
      ]}
      relatedLinks={[
        { label: "Tuna Profile", href: "/animals/tuna", description: "Another wild ocean fish" },
        { label: "Bear Profile", href: "/animals/bear", description: "A major predator of salmon" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.salmon}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
