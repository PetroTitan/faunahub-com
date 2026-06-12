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

const title = "Crab — Profile, Habitat, Diet & Behavior";
const description =
  "Crabs are ten-legged crustaceans with a broad shell and pincers. A group-level overview of true crabs (Brachyura): habitats, diet, and sideways walking.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/crab",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("crab"),
});

export default function CrabPage() {
  return (
    <AnimalProfileLayout
      commonName="Crab"
      pageTitle={title}
      description={description}
      path="/animals/crab"
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine", "Crustacean", "Invertebrate"]}
      image={getAnimalImage("crab") ?? undefined}
      galleryImages={getAnimalGalleryImages("crab")}
      factsHeaderNote="“Crab” here means the true crabs (infraorder Brachyura), with thousands of species. Habitat, size, and diet vary widely; some crabs live in fresh water or on land rather than the sea."
      overview={
        <>
          <p>
            Crabs are crustaceans belonging mainly to the infraorder Brachyura,
            the &quot;true crabs&quot;, with thousands of species worldwide.
            They have a broad, hard shell (carapace), a pair of clawed front
            legs (chelae or pincers), and four pairs of walking legs. This page
            is a group-level overview. While many crabs are marine, others live
            in fresh water or spend much of their lives on land.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Crabs occupy a remarkable range of habitats: rocky shores, sandy
            beaches, coral reefs, the open seabed, estuaries, mangroves, rivers,
            and even forests far from water in the case of some land crabs.
            Many live in the intertidal zone, sheltering in crevices or
            burrows. Habitat and depth vary greatly by species and region.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Most crabs are omnivores or scavengers with a varied diet that may
            include algae, detritus, molluscs, worms, small fish, and the
            remains of dead animals. Some are more specialised predators or
            filter feeders. By scavenging and recycling organic material, crabs
            play an important role in many coastal and marine ecosystems. Diet
            varies by species.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Crabs are well known for walking sideways, a movement suited to the
            arrangement of their legs, though some can move forwards and
            backwards too. They use their pincers to feed, fight, and signal,
            and many species display or wave their claws during courtship or
            territorial disputes. Like other crustaceans, crabs grow by
            moulting their hard shell. Behaviour ranges from solitary to
            mass gatherings during breeding.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Crabs are ecologically important and are also harvested in large
            quantities for food in many parts of the world. Some coastal crab
            populations are managed through fisheries regulation. Conservation
            status varies by species and for many crabs is not well documented,
            so it should not be assumed; consult current marine-science and
            fisheries sources for specific species.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                True crabs have a short, broad body protected by a hard
                carapace, with a small abdomen tucked underneath. The front
                pair of legs ends in pincers, often unequal in size, and the
                remaining four pairs are used for walking. Eyes sit on short
                stalks. Colour, shape, and size vary enormously — from tiny pea
                crabs to large spider crabs with long legs — and some species
                decorate or camouflage their shells.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Crabs are crustaceans, the same broad group as the lobster covered
          separately on FaunaHub, as well as shrimp and crayfish. Hermit crabs
          and king crabs are not &quot;true crabs&quot; but close relatives
          within the wider crab-like crustaceans. Their jointed legs and hard
          exoskeleton place them among the arthropods.
        </p>
      }
      faqs={[
        {
          question: "Why do crabs walk sideways?",
          answer:
            "The joints of a crab's legs are arranged so that sideways movement is the most efficient way to walk, especially for the broad-bodied true crabs. Some crabs can also move forwards and backwards, but sideways walking is characteristic of the group.",
        },
        {
          question: "Do all crabs live in the sea?",
          answer:
            "No. Many crabs are marine, but others live in fresh water or on land. Some land crabs spend most of their lives away from water and only return to the sea to breed. This page is a group-level overview covering that diversity.",
        },
        {
          question: "How do crabs grow if they have a hard shell?",
          answer:
            "Crabs grow by moulting — periodically shedding their hard exoskeleton and forming a new, larger one. The animal is soft and vulnerable for a short time after moulting until the new shell hardens.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "True crabs (infraorder Brachyura)" },
        { label: "Type", value: "Crustacean (invertebrate)" },
        { label: "Legs", value: "Five pairs (front pair are pincers)" },
        { label: "Diet", value: "Mostly omnivore/scavenger" },
        { label: "Habitat", value: "Marine, freshwater, and land" },
        { label: "Growth", value: "Moults its exoskeleton" },
        { label: "Conservation", value: "Varies by species — often not well documented" },
      ]}
      relatedLinks={[
        { label: "Lobster Profile", href: "/animals/lobster", description: "A fellow crustacean" },
        { label: "Octopus Profile", href: "/animals/octopus" },
        { label: "Starfish Profile", href: "/animals/starfish" },
        { label: "Animal Encyclopedia — Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.crab}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
